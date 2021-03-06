//! The original version of trait `io::TokenWriter` included some baggage that proves unnecessary for most
//! encodings, and slowed down encoding. This file provides `TokenWriterWithTree`, which is essentially a
//! copy of the old `io::TokenWriter` along with a `TokenWriterTreeAdapter` which wraps a `TokenWriterWithTree`
//! as a new `io::TokenWriter`.

use binjs_shared::{FieldName, IdentifierName, InterfaceName, Node, PropertyKey, SharedString};

use {Path, TokenWriter, TokenWriterError};

// Deprecated trait. Any new implementation should use TokenWriter.
pub trait TokenWriterWithTree {
    type Tree;

    /// The type of data generated by this writer.
    /// Typically some variant of `Vec<u8>`.
    type Data: AsRef<[u8]>;

    /// Finish writing, produce data.
    fn done(self) -> Result<Self::Data, TokenWriterError>;

    /// Write a tagged tuple.
    ///
    /// The number of items is specified by the grammar, so it MAY not be
    /// recorded by the `TokenWriter`.
    ///
    /// By convention, a null tagged tuple is the special tagged tuple "null",
    /// with no children.
    fn tagged_tuple(
        &mut self,
        _tag: &InterfaceName,
        _children: &[(&FieldName, Self::Tree)],
    ) -> Result<Self::Tree, TokenWriterError>;

    /// Write a list.
    ///
    /// By opposition to a tuple, the number of items is variable and MUST
    /// be somehow recorded by the `TokenWriter`.
    fn list(&mut self, Vec<Self::Tree>) -> Result<Self::Tree, TokenWriterError>;

    /// Write a single UTF-8 string.
    ///
    /// If specified, the string MUST be UTF-8.
    fn string(&mut self, _: Option<&SharedString>) -> Result<Self::Tree, TokenWriterError> {
        unimplemented!()
    }

    /// Write a single UTF-8 value from a string enumeration.
    ///
    /// The default implementation uses `self.string``, but some encodings may use
    /// the extra information e.g. to represent the enumeration by an index in the
    /// list of possible values, or to encode string enums as interfaces.
    fn string_enum(&mut self, str: &SharedString) -> Result<Self::Tree, TokenWriterError> {
        self.string(Some(str))
    }

    /// Write a single number.
    fn float(&mut self, _: Option<f64>) -> Result<Self::Tree, TokenWriterError> {
        unimplemented!()
    }

    /// Write a single u32.
    fn unsigned_long(&mut self, _: u32) -> Result<Self::Tree, TokenWriterError> {
        unimplemented!()
    }

    /// Write single bool.
    // FIXME: Split `bool` from `maybe_bool`.
    fn bool(&mut self, _: Option<bool>) -> Result<Self::Tree, TokenWriterError> {
        unimplemented!()
    }

    /// Write the number of bytes left in this tuple.
    fn offset(&mut self) -> Result<Self::Tree, TokenWriterError> {
        unimplemented!()
    }

    fn property_key(
        &mut self,
        value: Option<&PropertyKey>,
    ) -> Result<Self::Tree, TokenWriterError> {
        let string = value.map(PropertyKey::as_shared_string);
        self.string(string)
    }

    fn identifier_name(
        &mut self,
        value: Option<&IdentifierName>,
    ) -> Result<Self::Tree, TokenWriterError> {
        let string = value.map(IdentifierName::as_shared_string);
        self.string(string)
    }
}

pub struct TokenWriterTreeAdapter<T>
where
    T: TokenWriterWithTree,
{
    writer: T,

    /// Invariant: This stack is never empty.
    stack: Vec<Vec<T::Tree>>,
}
impl<T> TokenWriterTreeAdapter<T>
where
    T: TokenWriterWithTree,
{
    pub fn new(writer: T) -> Self {
        TokenWriterTreeAdapter {
            writer,
            stack: vec![vec![]],
        }
    }

    pub fn top_mut(&mut self) -> &mut Vec<T::Tree> {
        self.stack
            .last_mut()
            .expect("Empty stack while replacing last child")
    }
}

impl<T> TokenWriter for TokenWriterTreeAdapter<T>
where
    T: TokenWriterWithTree,
{
    type Data = T::Data;

    fn done(mut self) -> Result<Self::Data, TokenWriterError> {
        assert_eq!(
            self.stack.len(),
            1,
            "The stack started with 1 item (the toplevel), it must end with 1 item."
        );
        self.stack.pop();
        self.writer.done()
    }

    fn enter_tagged_tuple_at(
        &mut self,
        _node: &Node,
        _tag: &InterfaceName,
        _children: &[&FieldName],
        _path: &Path,
    ) -> Result<(), TokenWriterError> {
        self.stack.push(vec![]);
        Ok(())
    }

    fn exit_tagged_tuple_at(
        &mut self,
        _node: &Node,
        tag: &InterfaceName,
        children: &[&FieldName],
        _path: &Path,
    ) -> Result<(), TokenWriterError> {
        let values = self
            .stack
            .pop() // We pushed this `vec` in the call to `enter_tagged_tuple_at`.
            .expect("Empty stack while popping");
        let children: Vec<_> = children.iter().cloned().zip(values.into_iter()).collect();
        let child = self.writer.tagged_tuple(tag, children.as_ref())?;
        self.top_mut().push(child);
        Ok(())
    }

    fn enter_list_at(&mut self, _len: usize, _path: &Path) -> Result<(), TokenWriterError> {
        self.stack.push(vec![]);
        Ok(())
    }
    fn exit_list_at(&mut self, _path: &Path) -> Result<(), TokenWriterError> {
        let values = self
            .stack
            .pop() // We pushed this `vec` in the call to `enter_list_at`.
            .expect("Empty stack while popping");
        let child = self.writer.list(values)?;
        self.top_mut().push(child);
        Ok(())
    }

    fn string_at(
        &mut self,
        value: Option<&SharedString>,
        _path: &Path,
    ) -> Result<(), TokenWriterError> {
        let child = self.writer.string(value)?;
        self.top_mut().push(child);
        Ok(())
    }

    fn string_enum_at(
        &mut self,
        value: &SharedString,
        _path: &Path,
    ) -> Result<(), TokenWriterError> {
        let child = self.writer.string_enum(value)?;
        self.top_mut().push(child);
        Ok(())
    }

    fn float_at(&mut self, value: Option<f64>, _path: &Path) -> Result<(), TokenWriterError> {
        let child = self.writer.float(value)?;
        self.top_mut().push(child);
        Ok(())
    }
    fn unsigned_long_at(&mut self, value: u32, _path: &Path) -> Result<(), TokenWriterError> {
        let child = self.writer.unsigned_long(value)?;
        self.top_mut().push(child);
        Ok(())
    }
    fn bool_at(&mut self, value: Option<bool>, _path: &Path) -> Result<(), TokenWriterError> {
        let child = self.writer.bool(value)?;
        self.top_mut().push(child);
        Ok(())
    }
    fn offset_at(&mut self, _path: &Path) -> Result<(), TokenWriterError> {
        let child = self.writer.offset()?;
        self.top_mut().push(child);
        Ok(())
    }
    fn property_key_at(
        &mut self,
        value: Option<&PropertyKey>,
        path: &Path,
    ) -> Result<(), TokenWriterError> {
        let string = value.map(PropertyKey::as_shared_string);
        self.string_at(string, path)
    }
    fn identifier_name_at(
        &mut self,
        value: Option<&IdentifierName>,
        path: &Path,
    ) -> Result<(), TokenWriterError> {
        let string = value.map(IdentifierName::as_shared_string);
        self.string_at(string, path)
    }
}

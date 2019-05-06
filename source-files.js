var N = null;var sourcesIndex = {};
sourcesIndex["aho_corasick"] = {"name":"","files":["ahocorasick.rs","automaton.rs","buffer.rs","classes.rs","dfa.rs","error.rs","lib.rs","nfa.rs","prefilter.rs","state_id.rs"]};
sourcesIndex["alloc_no_stdlib"] = {"name":"","dirs":[{"name":"allocated_memory","files":["index_macro.rs","mod.rs"]}],"files":["allocated_stack_memory.rs","init.rs","lib.rs","stack_allocator.rs"]};
sourcesIndex["alloc_stdlib"] = {"name":"","files":["heap_alloc.rs","lib.rs","std_alloc.rs"]};
sourcesIndex["ansi_term"] = {"name":"","files":["ansi.rs","debug.rs","difference.rs","display.rs","lib.rs","style.rs","windows.rs","write.rs"]};
sourcesIndex["assert_matches"] = {"name":"","files":["lib.rs"]};
sourcesIndex["atty"] = {"name":"","files":["lib.rs"]};
sourcesIndex["backtrace"] = {"name":"","dirs":[{"name":"backtrace","files":["libunwind.rs","mod.rs"]},{"name":"symbolize","files":["libbacktrace.rs","mod.rs"]}],"files":["capture.rs","dylib.rs","lib.rs","types.rs"]};
sourcesIndex["backtrace_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["bincode"] = {"name":"","dirs":[{"name":"de","files":["mod.rs","read.rs"]},{"name":"ser","files":["mod.rs"]}],"files":["config.rs","error.rs","internal.rs","lib.rs"]};
sourcesIndex["binjs"] = {"name":"","dirs":[{"name":"source","files":["mod.rs","parser.rs","shift.rs"]}],"files":["lib.rs"]};
sourcesIndex["binjs_convert_from_json"] = {"name":"","files":["convert_from_json.rs"]};
sourcesIndex["binjs_decode"] = {"name":"","files":["decode.rs"]};
sourcesIndex["binjs_dump"] = {"name":"","files":["dump.rs"]};
sourcesIndex["binjs_encode"] = {"name":"","files":["encode.rs"]};
sourcesIndex["binjs_es6"] = {"name":"","files":["ast.rs","io.rs","lazy.rs","lib.rs","scopes.rs","sublanguages.rs"]};
sourcesIndex["binjs_generate_prediction_tables"] = {"name":"","files":["generate_dictionary.rs"]};
sourcesIndex["binjs_generic"] = {"name":"","files":["es6.rs","lib.rs","pick.rs","util.rs"]};
sourcesIndex["binjs_io"] = {"name":"","dirs":[{"name":"binjs_json","files":["mod.rs","read.rs","write.rs"]},{"name":"bytes","files":["bool.rs","compress.rs","decoders.rs","float.rs","lengthwriter.rs","mod.rs","serialize.rs","strings.rs","varnum.rs"]},{"name":"context","files":["mod.rs","prelude.rs"]},{"name":"entropy","dirs":[{"name":"read","files":["content_decoders.rs","mod.rs","prelude_decoders.rs"]},{"name":"write","files":["lazy_stream.rs","mod.rs"]}],"files":["baseline.rs","dictionary.rs","format.rs","mod.rs","predict.rs","probabilities.rs","rw.rs","util.rs"]},{"name":"io","files":["deprecated.rs","mod.rs","statistics.rs"]},{"name":"multipart","files":["mod.rs","read.rs","write.rs"]}],"files":["escaped_wtf8.rs","lib.rs","simple.rs","util.rs","xml.rs"]};
sourcesIndex["binjs_meta"] = {"name":"","files":["export.rs","import.rs","lib.rs","spec.rs","util.rs"]};
sourcesIndex["binjs_shared"] = {"name":"","files":["ast.rs","lib.rs","mru.rs","shared_string.rs"]};
sourcesIndex["bitflags"] = {"name":"","files":["lib.rs"]};
sourcesIndex["brotli"] = {"name":"","dirs":[{"name":"concat","files":["mod.rs"]},{"name":"enc","dirs":[{"name":"backward_references","files":["hash_to_binary_tree.rs","hq.rs","mod.rs"]}],"files":["bit_cost.rs","block_split.rs","block_splitter.rs","brotli_bit_stream.rs","cluster.rs","combined_alloc.rs","command.rs","compat.rs","compress_fragment.rs","compress_fragment_two_pass.rs","constants.rs","context_map_entropy.rs","dictionary_hash.rs","encode.rs","entropy_encode.rs","fast_log.rs","find_stride.rs","fixed_queue.rs","histogram.rs","input_pair.rs","interface.rs","ir_interpret.rs","literal_cost.rs","metablock.rs","mod.rs","multithreading.rs","parameters.rs","pdf.rs","prior_eval.rs","reader.rs","singlethreading.rs","static_dict.rs","static_dict_lut.rs","stride_eval.rs","threading.rs","utf8_util.rs","util.rs","vectorization.rs","weights.rs","worker_pool.rs","writer.rs"]},{"name":"ffi","dirs":[{"name":"multicompress","files":["mod.rs"]}],"files":["alloc_util.rs","broccoli.rs","compressor.rs","decompressor.rs","mod.rs"]}],"files":["lib.rs"]};
sourcesIndex["brotli_decompressor"] = {"name":"","dirs":[{"name":"bit_reader","files":["mod.rs"]},{"name":"dictionary","files":["mod.rs"]},{"name":"ffi","files":["alloc_util.rs","interface.rs","mod.rs"]},{"name":"huffman","files":["mod.rs","tests.rs"]}],"files":["brotli_alloc.rs","context.rs","decode.rs","io_wrappers.rs","lib.rs","memory.rs","prefix.rs","reader.rs","state.rs","transform.rs","writer.rs"]};
sourcesIndex["byteorder"] = {"name":"","files":["io.rs","lib.rs"]};
sourcesIndex["cfg_if"] = {"name":"","files":["lib.rs"]};
sourcesIndex["clap"] = {"name":"","dirs":[{"name":"app","files":["help.rs","meta.rs","mod.rs","parser.rs","settings.rs","usage.rs","validator.rs"]},{"name":"args","dirs":[{"name":"arg_builder","files":["base.rs","flag.rs","mod.rs","option.rs","positional.rs","switched.rs","valued.rs"]}],"files":["any_arg.rs","arg.rs","arg_matcher.rs","arg_matches.rs","group.rs","macros.rs","matched_arg.rs","mod.rs","settings.rs","subcommand.rs"]},{"name":"completions","files":["bash.rs","elvish.rs","fish.rs","macros.rs","mod.rs","powershell.rs","shell.rs","zsh.rs"]}],"files":["errors.rs","fmt.rs","lib.rs","macros.rs","map.rs","osstringext.rs","strext.rs","suggestions.rs","usage_parser.rs"]};
sourcesIndex["crc32fast"] = {"name":"","dirs":[{"name":"specialized","files":["mod.rs","pclmulqdq.rs"]}],"files":["baseline.rs","combine.rs","lib.rs","table.rs"]};
sourcesIndex["derive_more"] = {"name":"","files":["add_assign_like.rs","add_like.rs","constructor.rs","deref.rs","deref_mut.rs","display.rs","from.rs","from_str.rs","index.rs","index_mut.rs","into.rs","lib.rs","mul_assign_like.rs","mul_like.rs","not_like.rs","try_into.rs","utils.rs"]};
sourcesIndex["downcast_rs"] = {"name":"","files":["lib.rs"]};
sourcesIndex["either"] = {"name":"","files":["lib.rs"]};
sourcesIndex["env_logger"] = {"name":"","dirs":[{"name":"filter","files":["mod.rs","regex.rs"]},{"name":"fmt","dirs":[{"name":"humantime","files":["extern_impl.rs","mod.rs"]},{"name":"writer","dirs":[{"name":"termcolor","files":["extern_impl.rs","mod.rs"]}],"files":["atty.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["lib.rs"]};
sourcesIndex["failure"] = {"name":"","dirs":[{"name":"backtrace","files":["internal.rs","mod.rs"]},{"name":"error","files":["error_impl.rs","mod.rs"]}],"files":["as_fail.rs","box_std.rs","compat.rs","context.rs","error_message.rs","lib.rs","macros.rs","result_ext.rs","sync_failure.rs"]};
sourcesIndex["flate2"] = {"name":"","dirs":[{"name":"deflate","files":["bufread.rs","mod.rs","read.rs","write.rs"]},{"name":"gz","files":["bufread.rs","mod.rs","read.rs","write.rs"]},{"name":"zlib","files":["bufread.rs","mod.rs","read.rs","write.rs"]}],"files":["bufreader.rs","crc.rs","ffi.rs","lib.rs","mem.rs","zio.rs"]};
sourcesIndex["humantime"] = {"name":"","files":["date.rs","duration.rs","lib.rs","wrapper.rs"]};
sourcesIndex["inflector"] = {"name":"","dirs":[{"name":"cases","dirs":[{"name":"camelcase","files":["mod.rs"]},{"name":"case","files":["mod.rs"]},{"name":"classcase","files":["mod.rs"]},{"name":"kebabcase","files":["mod.rs"]},{"name":"pascalcase","files":["mod.rs"]},{"name":"screamingsnakecase","files":["mod.rs"]},{"name":"sentencecase","files":["mod.rs"]},{"name":"snakecase","files":["mod.rs"]},{"name":"tablecase","files":["mod.rs"]},{"name":"titlecase","files":["mod.rs"]},{"name":"traincase","files":["mod.rs"]}],"files":["mod.rs"]},{"name":"numbers","dirs":[{"name":"deordinalize","files":["mod.rs"]},{"name":"ordinalize","files":["mod.rs"]}],"files":["mod.rs"]},{"name":"string","dirs":[{"name":"constants","files":["mod.rs"]},{"name":"deconstantize","files":["mod.rs"]},{"name":"demodulize","files":["mod.rs"]},{"name":"pluralize","files":["mod.rs"]},{"name":"singularize","files":["mod.rs"]}],"files":["mod.rs"]},{"name":"suffix","dirs":[{"name":"foreignkey","files":["mod.rs"]}],"files":["mod.rs"]}],"files":["lib.rs"]};
sourcesIndex["itertools"] = {"name":"","dirs":[{"name":"adaptors","files":["mod.rs","multi_product.rs"]}],"files":["combinations.rs","concat_impl.rs","cons_tuples_impl.rs","diff.rs","either_or_both.rs","format.rs","free.rs","group_map.rs","groupbylazy.rs","impl_macros.rs","intersperse.rs","kmerge_impl.rs","lib.rs","merge_join.rs","minmax.rs","multipeek_impl.rs","pad_tail.rs","peeking_take_while.rs","process_results_impl.rs","put_back_n_impl.rs","rciter_impl.rs","repeatn.rs","size_hint.rs","sources.rs","tee.rs","tuple_impl.rs","unique_impl.rs","with_position.rs","zip_eq_impl.rs","zip_longest.rs","ziptuple.rs"]};
sourcesIndex["itoa"] = {"name":"","files":["lib.rs"]};
sourcesIndex["lazy_static"] = {"name":"","files":["inline_lazy.rs","lib.rs"]};
sourcesIndex["libc"] = {"name":"","dirs":[{"name":"unix","dirs":[{"name":"notbsd","dirs":[{"name":"linux","dirs":[{"name":"other","dirs":[{"name":"b64","files":["mod.rs","not_x32.rs","x86_64.rs"]}],"files":["align.rs","mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["lib.rs","macros.rs"]};
sourcesIndex["log"] = {"name":"","files":["lib.rs","macros.rs"]};
sourcesIndex["lzw"] = {"name":"","files":["bitstream.rs","lib.rs","lzw.rs"]};
sourcesIndex["memchr"] = {"name":"","dirs":[{"name":"x86","files":["avx.rs","mod.rs","sse2.rs"]}],"files":["fallback.rs","iter.rs","lib.rs","naive.rs"]};
sourcesIndex["miniz_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["nom"] = {"name":"","files":["bits.rs","branch.rs","bytes.rs","character.rs","internal.rs","lib.rs","macros.rs","methods.rs","multi.rs","nom.rs","sequence.rs","simple_errors.rs","str.rs","traits.rs","types.rs","util.rs","whitespace.rs"]};
sourcesIndex["proc_macro2"] = {"name":"","files":["fallback.rs","lib.rs","strnom.rs","wrapper.rs"]};
sourcesIndex["quick_error"] = {"name":"","files":["lib.rs"]};
sourcesIndex["quote"] = {"name":"","files":["ext.rs","lib.rs","runtime.rs","to_tokens.rs"]};
sourcesIndex["rand"] = {"name":"","dirs":[{"name":"distributions","files":["bernoulli.rs","binomial.rs","cauchy.rs","dirichlet.rs","exponential.rs","float.rs","gamma.rs","integer.rs","mod.rs","normal.rs","other.rs","pareto.rs","poisson.rs","triangular.rs","uniform.rs","unit_circle.rs","unit_sphere.rs","utils.rs","weibull.rs","weighted.rs","ziggurat_tables.rs"]},{"name":"prng","files":["mod.rs"]},{"name":"rngs","dirs":[{"name":"adapter","files":["mod.rs","read.rs","reseeding.rs"]}],"files":["entropy.rs","mock.rs","mod.rs","small.rs","std.rs","thread.rs"]},{"name":"seq","files":["index.rs","mod.rs"]}],"files":["deprecated.rs","lib.rs","prelude.rs"]};
sourcesIndex["rand_chacha"] = {"name":"","files":["chacha.rs","lib.rs"]};
sourcesIndex["rand_core"] = {"name":"","files":["lib.rs"]};
sourcesIndex["rand_hc"] = {"name":"","files":["hc128.rs","lib.rs"]};
sourcesIndex["rand_isaac"] = {"name":"","files":["isaac.rs","isaac64.rs","isaac_array.rs","lib.rs"]};
sourcesIndex["rand_jitter"] = {"name":"","files":["dummy_log.rs","error.rs","lib.rs","platform.rs"]};
sourcesIndex["rand_os"] = {"name":"","files":["dummy_log.rs","lib.rs","linux_android.rs","random_device.rs"]};
sourcesIndex["rand_pcg"] = {"name":"","files":["lib.rs","pcg128.rs","pcg64.rs"]};
sourcesIndex["rand_xorshift"] = {"name":"","files":["lib.rs"]};
sourcesIndex["range_encoding"] = {"name":"","dirs":[{"name":"opus","files":["decode.rs","encode.rs","imported_decode.rs","imported_encode.rs"]}],"files":["lib.rs"]};
sourcesIndex["regex"] = {"name":"","dirs":[{"name":"literal","dirs":[{"name":"teddy_avx2","files":["imp.rs","mod.rs"]},{"name":"teddy_ssse3","files":["imp.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"vector","files":["avx2.rs","mod.rs","ssse3.rs"]}],"files":["backtrack.rs","compile.rs","dfa.rs","error.rs","exec.rs","expand.rs","freqs.rs","input.rs","lib.rs","pikevm.rs","prog.rs","re_builder.rs","re_bytes.rs","re_set.rs","re_trait.rs","re_unicode.rs","sparse.rs","utf8.rs"]};
sourcesIndex["regex_syntax"] = {"name":"","dirs":[{"name":"ast","files":["mod.rs","parse.rs","print.rs","visitor.rs"]},{"name":"hir","dirs":[{"name":"literal","files":["mod.rs"]}],"files":["interval.rs","mod.rs","print.rs","translate.rs","visitor.rs"]},{"name":"unicode_tables","files":["age.rs","case_folding_simple.rs","general_category.rs","grapheme_cluster_break.rs","mod.rs","perl_word.rs","property_bool.rs","property_names.rs","property_values.rs","script.rs","script_extension.rs","sentence_break.rs","word_break.rs"]}],"files":["either.rs","error.rs","lib.rs","parser.rs","unicode.rs"]};
sourcesIndex["rustc_demangle"] = {"name":"","files":["legacy.rs","lib.rs","v0.rs"]};
sourcesIndex["ryu"] = {"name":"","dirs":[{"name":"buffer","files":["mod.rs"]},{"name":"pretty","files":["exponent.rs","mantissa.rs","mod.rs"]}],"files":["common.rs","d2s.rs","d2s_full_table.rs","d2s_intrinsics.rs","digit_table.rs","f2s.rs","lib.rs"]};
sourcesIndex["serde"] = {"name":"","dirs":[{"name":"de","files":["from_primitive.rs","ignored_any.rs","impls.rs","mod.rs","utf8.rs","value.rs"]},{"name":"private","files":["de.rs","macros.rs","mod.rs","ser.rs"]},{"name":"ser","files":["impls.rs","impossible.rs","mod.rs"]}],"files":["export.rs","integer128.rs","lib.rs","macros.rs"]};
sourcesIndex["serde_derive"] = {"name":"","dirs":[{"name":"internals","files":["ast.rs","attr.rs","case.rs","check.rs","ctxt.rs","mod.rs"]}],"files":["bound.rs","de.rs","dummy.rs","fragment.rs","lib.rs","pretend.rs","ser.rs","try.rs"]};
sourcesIndex["serde_json"] = {"name":"","dirs":[{"name":"value","files":["de.rs","from.rs","index.rs","mod.rs","partial_eq.rs","ser.rs"]}],"files":["de.rs","error.rs","iter.rs","lib.rs","macros.rs","map.rs","number.rs","read.rs","ser.rs"]};
sourcesIndex["smallvec"] = {"name":"","files":["lib.rs"]};
sourcesIndex["strsim"] = {"name":"","files":["lib.rs"]};
sourcesIndex["syn"] = {"name":"","dirs":[{"name":"gen","files":["gen_helper.rs","visit.rs"]}],"files":["attr.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","error.rs","export.rs","expr.rs","ext.rs","generics.rs","group.rs","ident.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","path.rs","print.rs","punctuated.rs","sealed.rs","span.rs","spanned.rs","thread.rs","token.rs","tt.rs","ty.rs"]};
sourcesIndex["termcolor"] = {"name":"","files":["lib.rs"]};
sourcesIndex["textwrap"] = {"name":"","files":["indentation.rs","lib.rs","splitting.rs"]};
sourcesIndex["thread_local"] = {"name":"","files":["lib.rs","thread_id.rs","unreachable.rs"]};
sourcesIndex["ucd_util"] = {"name":"","dirs":[{"name":"unicode_tables","files":["jamo_short_name.rs","mod.rs"]}],"files":["hangul.rs","ideograph.rs","lib.rs","name.rs","property.rs"]};
sourcesIndex["unicode_width"] = {"name":"","files":["lib.rs","tables.rs"]};
sourcesIndex["unicode_xid"] = {"name":"","files":["lib.rs","tables.rs"]};
sourcesIndex["utf8_ranges"] = {"name":"","files":["char_utf8.rs","lib.rs"]};
sourcesIndex["vec_map"] = {"name":"","files":["lib.rs"]};
sourcesIndex["weedle"] = {"name":"","files":["argument.rs","attribute.rs","common.rs","dictionary.rs","interface.rs","lib.rs","literal.rs","macros.rs","mixin.rs","namespace.rs","term.rs","types.rs","whitespace.rs"]};
sourcesIndex["which"] = {"name":"","files":["checker.rs","error.rs","finder.rs","lib.rs"]};
sourcesIndex["xml"] = {"name":"","dirs":[{"name":"reader","dirs":[{"name":"parser","files":["inside_cdata.rs","inside_closing_tag_name.rs","inside_comment.rs","inside_declaration.rs","inside_doctype.rs","inside_opening_tag.rs","inside_processing_instruction.rs","inside_reference.rs","mod.rs","outside_tag.rs"]}],"files":["config.rs","error.rs","events.rs","lexer.rs","mod.rs"]},{"name":"writer","files":["config.rs","emitter.rs","events.rs","mod.rs"]}],"files":["attribute.rs","common.rs","escape.rs","lib.rs","macros.rs","name.rs","namespace.rs","util.rs"]};
createSourceSidebar();

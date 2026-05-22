goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18815){
var map__18816 = p__18815;
var map__18816__$1 = cljs.core.__destructure_map(map__18816);
var m = map__18816__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18816__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18816__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18834_19289 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18835_19290 = null;
var count__18836_19291 = (0);
var i__18837_19292 = (0);
while(true){
if((i__18837_19292 < count__18836_19291)){
var f_19294 = chunk__18835_19290.cljs$core$IIndexed$_nth$arity$2(null,i__18837_19292);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19294], 0));


var G__19297 = seq__18834_19289;
var G__19298 = chunk__18835_19290;
var G__19299 = count__18836_19291;
var G__19300 = (i__18837_19292 + (1));
seq__18834_19289 = G__19297;
chunk__18835_19290 = G__19298;
count__18836_19291 = G__19299;
i__18837_19292 = G__19300;
continue;
} else {
var temp__5825__auto___19302 = cljs.core.seq(seq__18834_19289);
if(temp__5825__auto___19302){
var seq__18834_19303__$1 = temp__5825__auto___19302;
if(cljs.core.chunked_seq_QMARK_(seq__18834_19303__$1)){
var c__5694__auto___19304 = cljs.core.chunk_first(seq__18834_19303__$1);
var G__19306 = cljs.core.chunk_rest(seq__18834_19303__$1);
var G__19307 = c__5694__auto___19304;
var G__19308 = cljs.core.count(c__5694__auto___19304);
var G__19309 = (0);
seq__18834_19289 = G__19306;
chunk__18835_19290 = G__19307;
count__18836_19291 = G__19308;
i__18837_19292 = G__19309;
continue;
} else {
var f_19311 = cljs.core.first(seq__18834_19303__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19311], 0));


var G__19312 = cljs.core.next(seq__18834_19303__$1);
var G__19313 = null;
var G__19314 = (0);
var G__19315 = (0);
seq__18834_19289 = G__19312;
chunk__18835_19290 = G__19313;
count__18836_19291 = G__19314;
i__18837_19292 = G__19315;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19317 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19317], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19317)))?cljs.core.second(arglists_19317):arglists_19317)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18913_19333 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18914_19334 = null;
var count__18915_19335 = (0);
var i__18916_19336 = (0);
while(true){
if((i__18916_19336 < count__18915_19335)){
var vec__19036_19344 = chunk__18914_19334.cljs$core$IIndexed$_nth$arity$2(null,i__18916_19336);
var name_19345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19036_19344,(0),null);
var map__19039_19346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19036_19344,(1),null);
var map__19039_19347__$1 = cljs.core.__destructure_map(map__19039_19346);
var doc_19348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19039_19347__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19039_19347__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19345], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19349], 0));

if(cljs.core.truth_(doc_19348)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19348], 0));
} else {
}


var G__19356 = seq__18913_19333;
var G__19357 = chunk__18914_19334;
var G__19358 = count__18915_19335;
var G__19359 = (i__18916_19336 + (1));
seq__18913_19333 = G__19356;
chunk__18914_19334 = G__19357;
count__18915_19335 = G__19358;
i__18916_19336 = G__19359;
continue;
} else {
var temp__5825__auto___19360 = cljs.core.seq(seq__18913_19333);
if(temp__5825__auto___19360){
var seq__18913_19361__$1 = temp__5825__auto___19360;
if(cljs.core.chunked_seq_QMARK_(seq__18913_19361__$1)){
var c__5694__auto___19362 = cljs.core.chunk_first(seq__18913_19361__$1);
var G__19363 = cljs.core.chunk_rest(seq__18913_19361__$1);
var G__19364 = c__5694__auto___19362;
var G__19365 = cljs.core.count(c__5694__auto___19362);
var G__19366 = (0);
seq__18913_19333 = G__19363;
chunk__18914_19334 = G__19364;
count__18915_19335 = G__19365;
i__18916_19336 = G__19366;
continue;
} else {
var vec__19077_19367 = cljs.core.first(seq__18913_19361__$1);
var name_19368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19077_19367,(0),null);
var map__19080_19369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19077_19367,(1),null);
var map__19080_19370__$1 = cljs.core.__destructure_map(map__19080_19369);
var doc_19371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19080_19370__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19080_19370__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19368], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19372], 0));

if(cljs.core.truth_(doc_19371)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19371], 0));
} else {
}


var G__19387 = cljs.core.next(seq__18913_19361__$1);
var G__19388 = null;
var G__19389 = (0);
var G__19390 = (0);
seq__18913_19333 = G__19387;
chunk__18914_19334 = G__19388;
count__18915_19335 = G__19389;
i__18916_19336 = G__19390;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19086 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19087 = null;
var count__19088 = (0);
var i__19089 = (0);
while(true){
if((i__19089 < count__19088)){
var role = chunk__19087.cljs$core$IIndexed$_nth$arity$2(null,i__19089);
var temp__5825__auto___19395__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___19395__$1)){
var spec_19398 = temp__5825__auto___19395__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19398)], 0));
} else {
}


var G__19399 = seq__19086;
var G__19400 = chunk__19087;
var G__19401 = count__19088;
var G__19402 = (i__19089 + (1));
seq__19086 = G__19399;
chunk__19087 = G__19400;
count__19088 = G__19401;
i__19089 = G__19402;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__19086);
if(temp__5825__auto____$1){
var seq__19086__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19086__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__19086__$1);
var G__19404 = cljs.core.chunk_rest(seq__19086__$1);
var G__19405 = c__5694__auto__;
var G__19406 = cljs.core.count(c__5694__auto__);
var G__19407 = (0);
seq__19086 = G__19404;
chunk__19087 = G__19405;
count__19088 = G__19406;
i__19089 = G__19407;
continue;
} else {
var role = cljs.core.first(seq__19086__$1);
var temp__5825__auto___19413__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___19413__$2)){
var spec_19414 = temp__5825__auto___19413__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19414)], 0));
} else {
}


var G__19416 = cljs.core.next(seq__19086__$1);
var G__19417 = null;
var G__19418 = (0);
var G__19419 = (0);
seq__19086 = G__19416;
chunk__19087 = G__19417;
count__19088 = G__19418;
i__19089 = G__19419;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19146 = datafied_throwable;
var map__19146__$1 = cljs.core.__destructure_map(map__19146);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19146__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19146__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19146__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19147 = cljs.core.last(via);
var map__19147__$1 = cljs.core.__destructure_map(map__19147);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19147__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19147__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19147__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19148 = data;
var map__19148__$1 = cljs.core.__destructure_map(map__19148);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19148__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19148__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19148__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19149 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19149__$1 = cljs.core.__destructure_map(map__19149);
var top_data = map__19149__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19149__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19161 = phase;
var G__19161__$1 = (((G__19161 instanceof cljs.core.Keyword))?G__19161.fqn:null);
switch (G__19161__$1) {
case "read-source":
var map__19168 = data;
var map__19168__$1 = cljs.core.__destructure_map(map__19168);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19168__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19168__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19169 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19169__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19169,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19169);
var G__19169__$2 = (cljs.core.truth_((function (){var fexpr__19171 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19171.cljs$core$IFn$_invoke$arity$1 ? fexpr__19171.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19171.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19169__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19169__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19169__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19169__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19172 = top_data;
var G__19172__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19172,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19172);
var G__19172__$2 = (cljs.core.truth_((function (){var fexpr__19173 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19173.cljs$core$IFn$_invoke$arity$1 ? fexpr__19173.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19173.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19172__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19172__$1);
var G__19172__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19172__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19172__$2);
var G__19172__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19172__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19172__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19172__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19172__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19176 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19176,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19176,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19176,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19176,(3),null);
var G__19179 = top_data;
var G__19179__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19179,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19179);
var G__19179__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19179__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19179__$1);
var G__19179__$3 = (cljs.core.truth_((function (){var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19179__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19179__$2);
var G__19179__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19179__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19179__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19179__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19179__$4;
}

break;
case "execution":
var vec__19185 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19185,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19185,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19185,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19185,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19144_SHARP_){
var or__5162__auto__ = (p1__19144_SHARP_ == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var fexpr__19189 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19189.cljs$core$IFn$_invoke$arity$1 ? fexpr__19189.cljs$core$IFn$_invoke$arity$1(p1__19144_SHARP_) : fexpr__19189.call(null,p1__19144_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return line;
}
})();
var G__19191 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19191__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19191,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19191);
var G__19191__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19191__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19191__$1);
var G__19191__$3 = (cljs.core.truth_((function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19191__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19191__$2);
var G__19191__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19191__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19191__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19191__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19191__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19161__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19212){
var map__19213 = p__19212;
var map__19213__$1 = cljs.core.__destructure_map(map__19213);
var triage_data = map__19213__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19213__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19213__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19213__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19213__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19213__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19213__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19213__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19213__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = source;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = line;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5162__auto__ = class$;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__19219 = phase;
var G__19219__$1 = (((G__19219 instanceof cljs.core.Keyword))?G__19219.fqn:null);
switch (G__19219__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19225 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19226 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19227 = loc;
var G__19228 = (cljs.core.truth_(spec)?(function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19229_19534 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19230_19535 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19231_19536 = true;
var _STAR_print_fn_STAR__temp_val__19232_19537 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19231_19536);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19232_19537);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19205_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19205_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19230_19535);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19229_19534);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19225,G__19226,G__19227,G__19228) : format.call(null,G__19225,G__19226,G__19227,G__19228));

break;
case "macroexpansion":
var G__19233 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19234 = cause_type;
var G__19235 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19236 = loc;
var G__19237 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19233,G__19234,G__19235,G__19236,G__19237) : format.call(null,G__19233,G__19234,G__19235,G__19236,G__19237));

break;
case "compile-syntax-check":
var G__19240 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19241 = cause_type;
var G__19242 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19243 = loc;
var G__19244 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19240,G__19241,G__19242,G__19243,G__19244) : format.call(null,G__19240,G__19241,G__19242,G__19243,G__19244));

break;
case "compilation":
var G__19245 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19246 = cause_type;
var G__19247 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19248 = loc;
var G__19249 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19245,G__19246,G__19247,G__19248,G__19249) : format.call(null,G__19245,G__19246,G__19247,G__19248,G__19249));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19251 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19252 = symbol;
var G__19253 = loc;
var G__19254 = (function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19258_19577 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19259_19578 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19260_19579 = true;
var _STAR_print_fn_STAR__temp_val__19261_19580 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19260_19579);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19261_19580);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19207_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19207_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19259_19578);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19258_19577);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19251,G__19252,G__19253,G__19254) : format.call(null,G__19251,G__19252,G__19253,G__19254));
} else {
var G__19272 = "Execution error%s at %s(%s).\n%s\n";
var G__19273 = cause_type;
var G__19274 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19275 = loc;
var G__19276 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19272,G__19273,G__19274,G__19275,G__19276) : format.call(null,G__19272,G__19273,G__19274,G__19275,G__19276));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19219__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

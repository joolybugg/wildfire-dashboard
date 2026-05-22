goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___21722 = arguments.length;
var i__5898__auto___21723 = (0);
while(true){
if((i__5898__auto___21723 < len__5897__auto___21722)){
args__5903__auto__.push((arguments[i__5898__auto___21723]));

var G__21724 = (i__5898__auto___21723 + (1));
i__5898__auto___21723 = G__21724;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21312){
var G__21313 = cljs.core.first(seq21312);
var seq21312__$1 = cljs.core.next(seq21312);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21313,seq21312__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21319 = cljs.core.seq(sources);
var chunk__21320 = null;
var count__21321 = (0);
var i__21322 = (0);
while(true){
if((i__21322 < count__21321)){
var map__21328 = chunk__21320.cljs$core$IIndexed$_nth$arity$2(null,i__21322);
var map__21328__$1 = cljs.core.__destructure_map(map__21328);
var src = map__21328__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21328__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21328__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21328__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21328__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21329){var e_21725 = e21329;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21725);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21725.message))));
}

var G__21726 = seq__21319;
var G__21727 = chunk__21320;
var G__21728 = count__21321;
var G__21729 = (i__21322 + (1));
seq__21319 = G__21726;
chunk__21320 = G__21727;
count__21321 = G__21728;
i__21322 = G__21729;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21319);
if(temp__5825__auto__){
var seq__21319__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21319__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21319__$1);
var G__21730 = cljs.core.chunk_rest(seq__21319__$1);
var G__21731 = c__5694__auto__;
var G__21732 = cljs.core.count(c__5694__auto__);
var G__21733 = (0);
seq__21319 = G__21730;
chunk__21320 = G__21731;
count__21321 = G__21732;
i__21322 = G__21733;
continue;
} else {
var map__21330 = cljs.core.first(seq__21319__$1);
var map__21330__$1 = cljs.core.__destructure_map(map__21330);
var src = map__21330__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21330__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21330__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21330__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21330__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21331){var e_21734 = e21331;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21734);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21734.message))));
}

var G__21735 = cljs.core.next(seq__21319__$1);
var G__21736 = null;
var G__21737 = (0);
var G__21738 = (0);
seq__21319 = G__21735;
chunk__21320 = G__21736;
count__21321 = G__21737;
i__21322 = G__21738;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21332 = cljs.core.seq(js_requires);
var chunk__21333 = null;
var count__21334 = (0);
var i__21335 = (0);
while(true){
if((i__21335 < count__21334)){
var js_ns = chunk__21333.cljs$core$IIndexed$_nth$arity$2(null,i__21335);
var require_str_21739 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21739);


var G__21740 = seq__21332;
var G__21741 = chunk__21333;
var G__21742 = count__21334;
var G__21743 = (i__21335 + (1));
seq__21332 = G__21740;
chunk__21333 = G__21741;
count__21334 = G__21742;
i__21335 = G__21743;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21332);
if(temp__5825__auto__){
var seq__21332__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21332__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21332__$1);
var G__21744 = cljs.core.chunk_rest(seq__21332__$1);
var G__21745 = c__5694__auto__;
var G__21746 = cljs.core.count(c__5694__auto__);
var G__21747 = (0);
seq__21332 = G__21744;
chunk__21333 = G__21745;
count__21334 = G__21746;
i__21335 = G__21747;
continue;
} else {
var js_ns = cljs.core.first(seq__21332__$1);
var require_str_21748 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21748);


var G__21749 = cljs.core.next(seq__21332__$1);
var G__21750 = null;
var G__21751 = (0);
var G__21752 = (0);
seq__21332 = G__21749;
chunk__21333 = G__21750;
count__21334 = G__21751;
i__21335 = G__21752;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21337){
var map__21338 = p__21337;
var map__21338__$1 = cljs.core.__destructure_map(map__21338);
var msg = map__21338__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21338__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21338__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21340(s__21341){
return (new cljs.core.LazySeq(null,(function (){
var s__21341__$1 = s__21341;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21341__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__21347 = cljs.core.first(xs__6385__auto__);
var map__21347__$1 = cljs.core.__destructure_map(map__21347);
var src = map__21347__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21347__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21347__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5645__auto__ = ((function (s__21341__$1,map__21347,map__21347__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21338,map__21338__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21340_$_iter__21342(s__21343){
return (new cljs.core.LazySeq(null,((function (s__21341__$1,map__21347,map__21347__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21338,map__21338__$1,msg,info,reload_info){
return (function (){
var s__21343__$1 = s__21343;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21343__$1);
if(temp__5825__auto____$1){
var s__21343__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21343__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__21343__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__21345 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__21344 = (0);
while(true){
if((i__21344 < size__5648__auto__)){
var warning = cljs.core._nth(c__5647__auto__,i__21344);
cljs.core.chunk_append(b__21345,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21753 = (i__21344 + (1));
i__21344 = G__21753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21345),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21340_$_iter__21342(cljs.core.chunk_rest(s__21343__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21345),null);
}
} else {
var warning = cljs.core.first(s__21343__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21340_$_iter__21342(cljs.core.rest(s__21343__$2)));
}
} else {
return null;
}
break;
}
});})(s__21341__$1,map__21347,map__21347__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21338,map__21338__$1,msg,info,reload_info))
,null,null));
});})(s__21341__$1,map__21347,map__21347__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21338,map__21338__$1,msg,info,reload_info))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(warnings));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21340(cljs.core.rest(s__21341__$1)));
} else {
var G__21754 = cljs.core.rest(s__21341__$1);
s__21341__$1 = G__21754;
continue;
}
} else {
var G__21755 = cljs.core.rest(s__21341__$1);
s__21341__$1 = G__21755;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21348_21756 = cljs.core.seq(warnings);
var chunk__21349_21757 = null;
var count__21350_21758 = (0);
var i__21351_21759 = (0);
while(true){
if((i__21351_21759 < count__21350_21758)){
var map__21355_21760 = chunk__21349_21757.cljs$core$IIndexed$_nth$arity$2(null,i__21351_21759);
var map__21355_21761__$1 = cljs.core.__destructure_map(map__21355_21760);
var w_21762 = map__21355_21761__$1;
var msg_21763__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21355_21761__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21355_21761__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21355_21761__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21355_21761__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21766)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21764)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21765)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21763__$1)));


var G__21767 = seq__21348_21756;
var G__21768 = chunk__21349_21757;
var G__21769 = count__21350_21758;
var G__21770 = (i__21351_21759 + (1));
seq__21348_21756 = G__21767;
chunk__21349_21757 = G__21768;
count__21350_21758 = G__21769;
i__21351_21759 = G__21770;
continue;
} else {
var temp__5825__auto___21771 = cljs.core.seq(seq__21348_21756);
if(temp__5825__auto___21771){
var seq__21348_21772__$1 = temp__5825__auto___21771;
if(cljs.core.chunked_seq_QMARK_(seq__21348_21772__$1)){
var c__5694__auto___21773 = cljs.core.chunk_first(seq__21348_21772__$1);
var G__21774 = cljs.core.chunk_rest(seq__21348_21772__$1);
var G__21775 = c__5694__auto___21773;
var G__21776 = cljs.core.count(c__5694__auto___21773);
var G__21777 = (0);
seq__21348_21756 = G__21774;
chunk__21349_21757 = G__21775;
count__21350_21758 = G__21776;
i__21351_21759 = G__21777;
continue;
} else {
var map__21356_21778 = cljs.core.first(seq__21348_21772__$1);
var map__21356_21779__$1 = cljs.core.__destructure_map(map__21356_21778);
var w_21780 = map__21356_21779__$1;
var msg_21781__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356_21779__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356_21779__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356_21779__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356_21779__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21784)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21782)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21783)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21781__$1)));


var G__21785 = cljs.core.next(seq__21348_21772__$1);
var G__21786 = null;
var G__21787 = (0);
var G__21788 = (0);
seq__21348_21756 = G__21785;
chunk__21349_21757 = G__21786;
count__21350_21758 = G__21787;
i__21351_21759 = G__21788;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21336_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21336_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5160__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5160__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21360 = node_uri;
G__21360.setQuery(null);

G__21360.setPath(new$);

return G__21360;
})()));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21362){
var map__21363 = p__21362;
var map__21363__$1 = cljs.core.__destructure_map(map__21363);
var msg = map__21363__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21363__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21363__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21364 = cljs.core.seq(updates);
var chunk__21366 = null;
var count__21367 = (0);
var i__21368 = (0);
while(true){
if((i__21368 < count__21367)){
var path = chunk__21366.cljs$core$IIndexed$_nth$arity$2(null,i__21368);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21569_21795 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21573_21796 = null;
var count__21574_21797 = (0);
var i__21575_21798 = (0);
while(true){
if((i__21575_21798 < count__21574_21797)){
var node_21799 = chunk__21573_21796.cljs$core$IIndexed$_nth$arity$2(null,i__21575_21798);
if(cljs.core.not(node_21799.shadow$old)){
var path_match_21800 = shadow.cljs.devtools.client.browser.match_paths(node_21799.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21800)){
var new_link_21801 = (function (){var G__21602 = node_21799.cloneNode(true);
G__21602.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21800)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21602;
})();
(node_21799.shadow$old = true);

(new_link_21801.onload = ((function (seq__21569_21795,chunk__21573_21796,count__21574_21797,i__21575_21798,seq__21364,chunk__21366,count__21367,i__21368,new_link_21801,path_match_21800,node_21799,path,map__21363,map__21363__$1,msg,updates,reload_info){
return (function (e){
var seq__21603_21802 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21605_21803 = null;
var count__21606_21804 = (0);
var i__21607_21805 = (0);
while(true){
if((i__21607_21805 < count__21606_21804)){
var map__21611_21806 = chunk__21605_21803.cljs$core$IIndexed$_nth$arity$2(null,i__21607_21805);
var map__21611_21807__$1 = cljs.core.__destructure_map(map__21611_21806);
var task_21808 = map__21611_21807__$1;
var fn_str_21809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21611_21807__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21611_21807__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21811 = goog.getObjectByName(fn_str_21809,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21810)));

(fn_obj_21811.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21811.cljs$core$IFn$_invoke$arity$2(path,new_link_21801) : fn_obj_21811.call(null,path,new_link_21801));


var G__21812 = seq__21603_21802;
var G__21813 = chunk__21605_21803;
var G__21814 = count__21606_21804;
var G__21815 = (i__21607_21805 + (1));
seq__21603_21802 = G__21812;
chunk__21605_21803 = G__21813;
count__21606_21804 = G__21814;
i__21607_21805 = G__21815;
continue;
} else {
var temp__5825__auto___21816 = cljs.core.seq(seq__21603_21802);
if(temp__5825__auto___21816){
var seq__21603_21817__$1 = temp__5825__auto___21816;
if(cljs.core.chunked_seq_QMARK_(seq__21603_21817__$1)){
var c__5694__auto___21818 = cljs.core.chunk_first(seq__21603_21817__$1);
var G__21819 = cljs.core.chunk_rest(seq__21603_21817__$1);
var G__21820 = c__5694__auto___21818;
var G__21821 = cljs.core.count(c__5694__auto___21818);
var G__21822 = (0);
seq__21603_21802 = G__21819;
chunk__21605_21803 = G__21820;
count__21606_21804 = G__21821;
i__21607_21805 = G__21822;
continue;
} else {
var map__21612_21823 = cljs.core.first(seq__21603_21817__$1);
var map__21612_21824__$1 = cljs.core.__destructure_map(map__21612_21823);
var task_21825 = map__21612_21824__$1;
var fn_str_21826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612_21824__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612_21824__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21828 = goog.getObjectByName(fn_str_21826,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21827)));

(fn_obj_21828.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21828.cljs$core$IFn$_invoke$arity$2(path,new_link_21801) : fn_obj_21828.call(null,path,new_link_21801));


var G__21829 = cljs.core.next(seq__21603_21817__$1);
var G__21830 = null;
var G__21831 = (0);
var G__21832 = (0);
seq__21603_21802 = G__21829;
chunk__21605_21803 = G__21830;
count__21606_21804 = G__21831;
i__21607_21805 = G__21832;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21799);
});})(seq__21569_21795,chunk__21573_21796,count__21574_21797,i__21575_21798,seq__21364,chunk__21366,count__21367,i__21368,new_link_21801,path_match_21800,node_21799,path,map__21363,map__21363__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21800], 0));

goog.dom.insertSiblingAfter(new_link_21801,node_21799);


var G__21833 = seq__21569_21795;
var G__21834 = chunk__21573_21796;
var G__21835 = count__21574_21797;
var G__21836 = (i__21575_21798 + (1));
seq__21569_21795 = G__21833;
chunk__21573_21796 = G__21834;
count__21574_21797 = G__21835;
i__21575_21798 = G__21836;
continue;
} else {
var G__21837 = seq__21569_21795;
var G__21838 = chunk__21573_21796;
var G__21839 = count__21574_21797;
var G__21840 = (i__21575_21798 + (1));
seq__21569_21795 = G__21837;
chunk__21573_21796 = G__21838;
count__21574_21797 = G__21839;
i__21575_21798 = G__21840;
continue;
}
} else {
var G__21841 = seq__21569_21795;
var G__21842 = chunk__21573_21796;
var G__21843 = count__21574_21797;
var G__21844 = (i__21575_21798 + (1));
seq__21569_21795 = G__21841;
chunk__21573_21796 = G__21842;
count__21574_21797 = G__21843;
i__21575_21798 = G__21844;
continue;
}
} else {
var temp__5825__auto___21845 = cljs.core.seq(seq__21569_21795);
if(temp__5825__auto___21845){
var seq__21569_21846__$1 = temp__5825__auto___21845;
if(cljs.core.chunked_seq_QMARK_(seq__21569_21846__$1)){
var c__5694__auto___21847 = cljs.core.chunk_first(seq__21569_21846__$1);
var G__21848 = cljs.core.chunk_rest(seq__21569_21846__$1);
var G__21849 = c__5694__auto___21847;
var G__21850 = cljs.core.count(c__5694__auto___21847);
var G__21851 = (0);
seq__21569_21795 = G__21848;
chunk__21573_21796 = G__21849;
count__21574_21797 = G__21850;
i__21575_21798 = G__21851;
continue;
} else {
var node_21852 = cljs.core.first(seq__21569_21846__$1);
if(cljs.core.not(node_21852.shadow$old)){
var path_match_21853 = shadow.cljs.devtools.client.browser.match_paths(node_21852.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21853)){
var new_link_21854 = (function (){var G__21613 = node_21852.cloneNode(true);
G__21613.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21853)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21613;
})();
(node_21852.shadow$old = true);

(new_link_21854.onload = ((function (seq__21569_21795,chunk__21573_21796,count__21574_21797,i__21575_21798,seq__21364,chunk__21366,count__21367,i__21368,new_link_21854,path_match_21853,node_21852,seq__21569_21846__$1,temp__5825__auto___21845,path,map__21363,map__21363__$1,msg,updates,reload_info){
return (function (e){
var seq__21614_21855 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21616_21856 = null;
var count__21617_21857 = (0);
var i__21618_21858 = (0);
while(true){
if((i__21618_21858 < count__21617_21857)){
var map__21622_21859 = chunk__21616_21856.cljs$core$IIndexed$_nth$arity$2(null,i__21618_21858);
var map__21622_21860__$1 = cljs.core.__destructure_map(map__21622_21859);
var task_21861 = map__21622_21860__$1;
var fn_str_21862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21622_21860__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21622_21860__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21864 = goog.getObjectByName(fn_str_21862,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21863)));

(fn_obj_21864.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21864.cljs$core$IFn$_invoke$arity$2(path,new_link_21854) : fn_obj_21864.call(null,path,new_link_21854));


var G__21865 = seq__21614_21855;
var G__21866 = chunk__21616_21856;
var G__21867 = count__21617_21857;
var G__21868 = (i__21618_21858 + (1));
seq__21614_21855 = G__21865;
chunk__21616_21856 = G__21866;
count__21617_21857 = G__21867;
i__21618_21858 = G__21868;
continue;
} else {
var temp__5825__auto___21869__$1 = cljs.core.seq(seq__21614_21855);
if(temp__5825__auto___21869__$1){
var seq__21614_21870__$1 = temp__5825__auto___21869__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21614_21870__$1)){
var c__5694__auto___21871 = cljs.core.chunk_first(seq__21614_21870__$1);
var G__21872 = cljs.core.chunk_rest(seq__21614_21870__$1);
var G__21873 = c__5694__auto___21871;
var G__21874 = cljs.core.count(c__5694__auto___21871);
var G__21875 = (0);
seq__21614_21855 = G__21872;
chunk__21616_21856 = G__21873;
count__21617_21857 = G__21874;
i__21618_21858 = G__21875;
continue;
} else {
var map__21623_21876 = cljs.core.first(seq__21614_21870__$1);
var map__21623_21877__$1 = cljs.core.__destructure_map(map__21623_21876);
var task_21878 = map__21623_21877__$1;
var fn_str_21879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21623_21877__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21623_21877__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21881 = goog.getObjectByName(fn_str_21879,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21880)));

(fn_obj_21881.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21881.cljs$core$IFn$_invoke$arity$2(path,new_link_21854) : fn_obj_21881.call(null,path,new_link_21854));


var G__21882 = cljs.core.next(seq__21614_21870__$1);
var G__21883 = null;
var G__21884 = (0);
var G__21885 = (0);
seq__21614_21855 = G__21882;
chunk__21616_21856 = G__21883;
count__21617_21857 = G__21884;
i__21618_21858 = G__21885;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21852);
});})(seq__21569_21795,chunk__21573_21796,count__21574_21797,i__21575_21798,seq__21364,chunk__21366,count__21367,i__21368,new_link_21854,path_match_21853,node_21852,seq__21569_21846__$1,temp__5825__auto___21845,path,map__21363,map__21363__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21853], 0));

goog.dom.insertSiblingAfter(new_link_21854,node_21852);


var G__21886 = cljs.core.next(seq__21569_21846__$1);
var G__21887 = null;
var G__21888 = (0);
var G__21889 = (0);
seq__21569_21795 = G__21886;
chunk__21573_21796 = G__21887;
count__21574_21797 = G__21888;
i__21575_21798 = G__21889;
continue;
} else {
var G__21890 = cljs.core.next(seq__21569_21846__$1);
var G__21891 = null;
var G__21892 = (0);
var G__21893 = (0);
seq__21569_21795 = G__21890;
chunk__21573_21796 = G__21891;
count__21574_21797 = G__21892;
i__21575_21798 = G__21893;
continue;
}
} else {
var G__21894 = cljs.core.next(seq__21569_21846__$1);
var G__21895 = null;
var G__21896 = (0);
var G__21897 = (0);
seq__21569_21795 = G__21894;
chunk__21573_21796 = G__21895;
count__21574_21797 = G__21896;
i__21575_21798 = G__21897;
continue;
}
}
} else {
}
}
break;
}


var G__21898 = seq__21364;
var G__21899 = chunk__21366;
var G__21900 = count__21367;
var G__21901 = (i__21368 + (1));
seq__21364 = G__21898;
chunk__21366 = G__21899;
count__21367 = G__21900;
i__21368 = G__21901;
continue;
} else {
var G__21902 = seq__21364;
var G__21903 = chunk__21366;
var G__21904 = count__21367;
var G__21905 = (i__21368 + (1));
seq__21364 = G__21902;
chunk__21366 = G__21903;
count__21367 = G__21904;
i__21368 = G__21905;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21364);
if(temp__5825__auto__){
var seq__21364__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21364__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21364__$1);
var G__21906 = cljs.core.chunk_rest(seq__21364__$1);
var G__21907 = c__5694__auto__;
var G__21908 = cljs.core.count(c__5694__auto__);
var G__21909 = (0);
seq__21364 = G__21906;
chunk__21366 = G__21907;
count__21367 = G__21908;
i__21368 = G__21909;
continue;
} else {
var path = cljs.core.first(seq__21364__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21624_21910 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21628_21911 = null;
var count__21629_21912 = (0);
var i__21630_21913 = (0);
while(true){
if((i__21630_21913 < count__21629_21912)){
var node_21914 = chunk__21628_21911.cljs$core$IIndexed$_nth$arity$2(null,i__21630_21913);
if(cljs.core.not(node_21914.shadow$old)){
var path_match_21915 = shadow.cljs.devtools.client.browser.match_paths(node_21914.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21915)){
var new_link_21916 = (function (){var G__21662 = node_21914.cloneNode(true);
G__21662.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21915)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21662;
})();
(node_21914.shadow$old = true);

(new_link_21916.onload = ((function (seq__21624_21910,chunk__21628_21911,count__21629_21912,i__21630_21913,seq__21364,chunk__21366,count__21367,i__21368,new_link_21916,path_match_21915,node_21914,path,seq__21364__$1,temp__5825__auto__,map__21363,map__21363__$1,msg,updates,reload_info){
return (function (e){
var seq__21663_21917 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21665_21918 = null;
var count__21666_21919 = (0);
var i__21667_21920 = (0);
while(true){
if((i__21667_21920 < count__21666_21919)){
var map__21672_21921 = chunk__21665_21918.cljs$core$IIndexed$_nth$arity$2(null,i__21667_21920);
var map__21672_21922__$1 = cljs.core.__destructure_map(map__21672_21921);
var task_21923 = map__21672_21922__$1;
var fn_str_21924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21672_21922__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21672_21922__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21926 = goog.getObjectByName(fn_str_21924,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21925)));

(fn_obj_21926.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21926.cljs$core$IFn$_invoke$arity$2(path,new_link_21916) : fn_obj_21926.call(null,path,new_link_21916));


var G__21927 = seq__21663_21917;
var G__21928 = chunk__21665_21918;
var G__21929 = count__21666_21919;
var G__21930 = (i__21667_21920 + (1));
seq__21663_21917 = G__21927;
chunk__21665_21918 = G__21928;
count__21666_21919 = G__21929;
i__21667_21920 = G__21930;
continue;
} else {
var temp__5825__auto___21931__$1 = cljs.core.seq(seq__21663_21917);
if(temp__5825__auto___21931__$1){
var seq__21663_21932__$1 = temp__5825__auto___21931__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21663_21932__$1)){
var c__5694__auto___21933 = cljs.core.chunk_first(seq__21663_21932__$1);
var G__21934 = cljs.core.chunk_rest(seq__21663_21932__$1);
var G__21935 = c__5694__auto___21933;
var G__21936 = cljs.core.count(c__5694__auto___21933);
var G__21937 = (0);
seq__21663_21917 = G__21934;
chunk__21665_21918 = G__21935;
count__21666_21919 = G__21936;
i__21667_21920 = G__21937;
continue;
} else {
var map__21673_21938 = cljs.core.first(seq__21663_21932__$1);
var map__21673_21939__$1 = cljs.core.__destructure_map(map__21673_21938);
var task_21940 = map__21673_21939__$1;
var fn_str_21941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21673_21939__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21673_21939__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21943 = goog.getObjectByName(fn_str_21941,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21942)));

(fn_obj_21943.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21943.cljs$core$IFn$_invoke$arity$2(path,new_link_21916) : fn_obj_21943.call(null,path,new_link_21916));


var G__21944 = cljs.core.next(seq__21663_21932__$1);
var G__21945 = null;
var G__21946 = (0);
var G__21947 = (0);
seq__21663_21917 = G__21944;
chunk__21665_21918 = G__21945;
count__21666_21919 = G__21946;
i__21667_21920 = G__21947;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21914);
});})(seq__21624_21910,chunk__21628_21911,count__21629_21912,i__21630_21913,seq__21364,chunk__21366,count__21367,i__21368,new_link_21916,path_match_21915,node_21914,path,seq__21364__$1,temp__5825__auto__,map__21363,map__21363__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21915], 0));

goog.dom.insertSiblingAfter(new_link_21916,node_21914);


var G__21948 = seq__21624_21910;
var G__21949 = chunk__21628_21911;
var G__21950 = count__21629_21912;
var G__21951 = (i__21630_21913 + (1));
seq__21624_21910 = G__21948;
chunk__21628_21911 = G__21949;
count__21629_21912 = G__21950;
i__21630_21913 = G__21951;
continue;
} else {
var G__21952 = seq__21624_21910;
var G__21953 = chunk__21628_21911;
var G__21954 = count__21629_21912;
var G__21955 = (i__21630_21913 + (1));
seq__21624_21910 = G__21952;
chunk__21628_21911 = G__21953;
count__21629_21912 = G__21954;
i__21630_21913 = G__21955;
continue;
}
} else {
var G__21956 = seq__21624_21910;
var G__21957 = chunk__21628_21911;
var G__21958 = count__21629_21912;
var G__21959 = (i__21630_21913 + (1));
seq__21624_21910 = G__21956;
chunk__21628_21911 = G__21957;
count__21629_21912 = G__21958;
i__21630_21913 = G__21959;
continue;
}
} else {
var temp__5825__auto___21960__$1 = cljs.core.seq(seq__21624_21910);
if(temp__5825__auto___21960__$1){
var seq__21624_21961__$1 = temp__5825__auto___21960__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21624_21961__$1)){
var c__5694__auto___21962 = cljs.core.chunk_first(seq__21624_21961__$1);
var G__21963 = cljs.core.chunk_rest(seq__21624_21961__$1);
var G__21964 = c__5694__auto___21962;
var G__21965 = cljs.core.count(c__5694__auto___21962);
var G__21966 = (0);
seq__21624_21910 = G__21963;
chunk__21628_21911 = G__21964;
count__21629_21912 = G__21965;
i__21630_21913 = G__21966;
continue;
} else {
var node_21967 = cljs.core.first(seq__21624_21961__$1);
if(cljs.core.not(node_21967.shadow$old)){
var path_match_21968 = shadow.cljs.devtools.client.browser.match_paths(node_21967.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21968)){
var new_link_21969 = (function (){var G__21674 = node_21967.cloneNode(true);
G__21674.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21968)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21674;
})();
(node_21967.shadow$old = true);

(new_link_21969.onload = ((function (seq__21624_21910,chunk__21628_21911,count__21629_21912,i__21630_21913,seq__21364,chunk__21366,count__21367,i__21368,new_link_21969,path_match_21968,node_21967,seq__21624_21961__$1,temp__5825__auto___21960__$1,path,seq__21364__$1,temp__5825__auto__,map__21363,map__21363__$1,msg,updates,reload_info){
return (function (e){
var seq__21675_21970 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21677_21971 = null;
var count__21678_21972 = (0);
var i__21679_21973 = (0);
while(true){
if((i__21679_21973 < count__21678_21972)){
var map__21683_21974 = chunk__21677_21971.cljs$core$IIndexed$_nth$arity$2(null,i__21679_21973);
var map__21683_21975__$1 = cljs.core.__destructure_map(map__21683_21974);
var task_21976 = map__21683_21975__$1;
var fn_str_21977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21683_21975__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21683_21975__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21979 = goog.getObjectByName(fn_str_21977,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21978)));

(fn_obj_21979.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21979.cljs$core$IFn$_invoke$arity$2(path,new_link_21969) : fn_obj_21979.call(null,path,new_link_21969));


var G__21980 = seq__21675_21970;
var G__21981 = chunk__21677_21971;
var G__21982 = count__21678_21972;
var G__21983 = (i__21679_21973 + (1));
seq__21675_21970 = G__21980;
chunk__21677_21971 = G__21981;
count__21678_21972 = G__21982;
i__21679_21973 = G__21983;
continue;
} else {
var temp__5825__auto___21984__$2 = cljs.core.seq(seq__21675_21970);
if(temp__5825__auto___21984__$2){
var seq__21675_21985__$1 = temp__5825__auto___21984__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21675_21985__$1)){
var c__5694__auto___21986 = cljs.core.chunk_first(seq__21675_21985__$1);
var G__21987 = cljs.core.chunk_rest(seq__21675_21985__$1);
var G__21988 = c__5694__auto___21986;
var G__21989 = cljs.core.count(c__5694__auto___21986);
var G__21990 = (0);
seq__21675_21970 = G__21987;
chunk__21677_21971 = G__21988;
count__21678_21972 = G__21989;
i__21679_21973 = G__21990;
continue;
} else {
var map__21684_21991 = cljs.core.first(seq__21675_21985__$1);
var map__21684_21992__$1 = cljs.core.__destructure_map(map__21684_21991);
var task_21993 = map__21684_21992__$1;
var fn_str_21994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21684_21992__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21684_21992__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21996 = goog.getObjectByName(fn_str_21994,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21995)));

(fn_obj_21996.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21996.cljs$core$IFn$_invoke$arity$2(path,new_link_21969) : fn_obj_21996.call(null,path,new_link_21969));


var G__21998 = cljs.core.next(seq__21675_21985__$1);
var G__21999 = null;
var G__22000 = (0);
var G__22001 = (0);
seq__21675_21970 = G__21998;
chunk__21677_21971 = G__21999;
count__21678_21972 = G__22000;
i__21679_21973 = G__22001;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21967);
});})(seq__21624_21910,chunk__21628_21911,count__21629_21912,i__21630_21913,seq__21364,chunk__21366,count__21367,i__21368,new_link_21969,path_match_21968,node_21967,seq__21624_21961__$1,temp__5825__auto___21960__$1,path,seq__21364__$1,temp__5825__auto__,map__21363,map__21363__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21968], 0));

goog.dom.insertSiblingAfter(new_link_21969,node_21967);


var G__22002 = cljs.core.next(seq__21624_21961__$1);
var G__22003 = null;
var G__22004 = (0);
var G__22005 = (0);
seq__21624_21910 = G__22002;
chunk__21628_21911 = G__22003;
count__21629_21912 = G__22004;
i__21630_21913 = G__22005;
continue;
} else {
var G__22006 = cljs.core.next(seq__21624_21961__$1);
var G__22007 = null;
var G__22008 = (0);
var G__22009 = (0);
seq__21624_21910 = G__22006;
chunk__21628_21911 = G__22007;
count__21629_21912 = G__22008;
i__21630_21913 = G__22009;
continue;
}
} else {
var G__22010 = cljs.core.next(seq__21624_21961__$1);
var G__22011 = null;
var G__22012 = (0);
var G__22013 = (0);
seq__21624_21910 = G__22010;
chunk__21628_21911 = G__22011;
count__21629_21912 = G__22012;
i__21630_21913 = G__22013;
continue;
}
}
} else {
}
}
break;
}


var G__22014 = cljs.core.next(seq__21364__$1);
var G__22015 = null;
var G__22016 = (0);
var G__22017 = (0);
seq__21364 = G__22014;
chunk__21366 = G__22015;
count__21367 = G__22016;
i__21368 = G__22017;
continue;
} else {
var G__22018 = cljs.core.next(seq__21364__$1);
var G__22019 = null;
var G__22020 = (0);
var G__22021 = (0);
seq__21364 = G__22018;
chunk__21366 = G__22019;
count__21367 = G__22020;
i__21368 = G__22021;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21694 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21694) : success.call(null,G__21694));
}catch (e21692){var e = e21692;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21695,success,fail){
var map__21696 = p__21695;
var map__21696__$1 = cljs.core.__destructure_map(map__21696);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21696__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21698 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21698) : success.call(null,G__21698));
}catch (e21697){var e = e21697;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21699,done,error){
var map__21700 = p__21699;
var map__21700__$1 = cljs.core.__destructure_map(map__21700);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21700__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21702,done,error){
var map__21703 = p__21702;
var map__21703__$1 = cljs.core.__destructure_map(map__21703);
var msg = map__21703__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21703__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21703__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21703__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21706){
var map__21707 = p__21706;
var map__21707__$1 = cljs.core.__destructure_map(map__21707);
var src = map__21707__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21707__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5160__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5160__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21708 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21708) : done.call(null,G__21708));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21709){
var map__21710 = p__21709;
var map__21710__$1 = cljs.core.__destructure_map(map__21710);
var msg__$1 = map__21710__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21710__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21711){var ex = e21711;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21713){
var map__21714 = p__21713;
var map__21714__$1 = cljs.core.__destructure_map(map__21714);
var env = map__21714__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21714__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21717){
var map__21718 = p__21717;
var map__21718__$1 = cljs.core.__destructure_map(map__21718);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21718__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21718__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21720){
var map__21721 = p__21720;
var map__21721__$1 = cljs.core.__destructure_map(map__21721);
var svc = map__21721__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21721__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

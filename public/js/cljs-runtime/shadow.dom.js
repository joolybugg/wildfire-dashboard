goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_13188 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_13188(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_13196 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_13196(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11829 = coll;
var G__11830 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11829,G__11830) : shadow.dom.lazy_native_coll_seq.call(null,G__11829,G__11830));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5162__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11939 = arguments.length;
switch (G__11939) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11949 = arguments.length;
switch (G__11949) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11972 = arguments.length;
switch (G__11972) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11983 = arguments.length;
switch (G__11983) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11988 = arguments.length;
switch (G__11988) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__12010 = arguments.length;
switch (G__12010) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e12037){if((e12037 instanceof Object)){
var e = e12037;
return console.log("didnt support attachEvent",el,e);
} else {
throw e12037;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__12060 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__12062 = null;
var count__12063 = (0);
var i__12064 = (0);
while(true){
if((i__12064 < count__12063)){
var el = chunk__12062.cljs$core$IIndexed$_nth$arity$2(null,i__12064);
var handler_13321__$1 = ((function (seq__12060,chunk__12062,count__12063,i__12064,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__12060,chunk__12062,count__12063,i__12064,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_13321__$1);


var G__13322 = seq__12060;
var G__13323 = chunk__12062;
var G__13324 = count__12063;
var G__13325 = (i__12064 + (1));
seq__12060 = G__13322;
chunk__12062 = G__13323;
count__12063 = G__13324;
i__12064 = G__13325;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12060);
if(temp__5825__auto__){
var seq__12060__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12060__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12060__$1);
var G__13328 = cljs.core.chunk_rest(seq__12060__$1);
var G__13329 = c__5694__auto__;
var G__13330 = cljs.core.count(c__5694__auto__);
var G__13331 = (0);
seq__12060 = G__13328;
chunk__12062 = G__13329;
count__12063 = G__13330;
i__12064 = G__13331;
continue;
} else {
var el = cljs.core.first(seq__12060__$1);
var handler_13332__$1 = ((function (seq__12060,chunk__12062,count__12063,i__12064,el,seq__12060__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__12060,chunk__12062,count__12063,i__12064,el,seq__12060__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_13332__$1);


var G__13333 = cljs.core.next(seq__12060__$1);
var G__13334 = null;
var G__13335 = (0);
var G__13336 = (0);
seq__12060 = G__13333;
chunk__12062 = G__13334;
count__12063 = G__13335;
i__12064 = G__13336;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__12097 = arguments.length;
switch (G__12097) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__12138 = cljs.core.seq(events);
var chunk__12139 = null;
var count__12140 = (0);
var i__12141 = (0);
while(true){
if((i__12141 < count__12140)){
var vec__12159 = chunk__12139.cljs$core$IIndexed$_nth$arity$2(null,i__12141);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12159,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12159,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13345 = seq__12138;
var G__13346 = chunk__12139;
var G__13347 = count__12140;
var G__13348 = (i__12141 + (1));
seq__12138 = G__13345;
chunk__12139 = G__13346;
count__12140 = G__13347;
i__12141 = G__13348;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12138);
if(temp__5825__auto__){
var seq__12138__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12138__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12138__$1);
var G__13354 = cljs.core.chunk_rest(seq__12138__$1);
var G__13355 = c__5694__auto__;
var G__13356 = cljs.core.count(c__5694__auto__);
var G__13357 = (0);
seq__12138 = G__13354;
chunk__12139 = G__13355;
count__12140 = G__13356;
i__12141 = G__13357;
continue;
} else {
var vec__12166 = cljs.core.first(seq__12138__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12166,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12166,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13361 = cljs.core.next(seq__12138__$1);
var G__13362 = null;
var G__13363 = (0);
var G__13364 = (0);
seq__12138 = G__13361;
chunk__12139 = G__13362;
count__12140 = G__13363;
i__12141 = G__13364;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__12182 = cljs.core.seq(styles);
var chunk__12183 = null;
var count__12185 = (0);
var i__12186 = (0);
while(true){
if((i__12186 < count__12185)){
var vec__12235 = chunk__12183.cljs$core$IIndexed$_nth$arity$2(null,i__12186);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12235,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12235,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13422 = seq__12182;
var G__13423 = chunk__12183;
var G__13424 = count__12185;
var G__13425 = (i__12186 + (1));
seq__12182 = G__13422;
chunk__12183 = G__13423;
count__12185 = G__13424;
i__12186 = G__13425;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12182);
if(temp__5825__auto__){
var seq__12182__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12182__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12182__$1);
var G__13428 = cljs.core.chunk_rest(seq__12182__$1);
var G__13429 = c__5694__auto__;
var G__13430 = cljs.core.count(c__5694__auto__);
var G__13431 = (0);
seq__12182 = G__13428;
chunk__12183 = G__13429;
count__12185 = G__13430;
i__12186 = G__13431;
continue;
} else {
var vec__12238 = cljs.core.first(seq__12182__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12238,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12238,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13459 = cljs.core.next(seq__12182__$1);
var G__13460 = null;
var G__13461 = (0);
var G__13462 = (0);
seq__12182 = G__13459;
chunk__12183 = G__13460;
count__12185 = G__13461;
i__12186 = G__13462;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__12254_13464 = key;
var G__12254_13465__$1 = (((G__12254_13464 instanceof cljs.core.Keyword))?G__12254_13464.fqn:null);
switch (G__12254_13465__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_13476 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5162__auto__ = goog.string.startsWith(ks_13476,"data-");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return goog.string.startsWith(ks_13476,"aria-");
}
})())){
el.setAttribute(ks_13476,value);
} else {
(el[ks_13476] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12287){
var map__12288 = p__12287;
var map__12288__$1 = cljs.core.__destructure_map(map__12288);
var props = map__12288__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12288__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12291 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12291,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12291,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12291,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12296 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12296,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12296;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12301 = arguments.length;
switch (G__12301) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12308){
var vec__12309 = p__12308;
var seq__12310 = cljs.core.seq(vec__12309);
var first__12311 = cljs.core.first(seq__12310);
var seq__12310__$1 = cljs.core.next(seq__12310);
var nn = first__12311;
var first__12311__$1 = cljs.core.first(seq__12310__$1);
var seq__12310__$2 = cljs.core.next(seq__12310__$1);
var np = first__12311__$1;
var nc = seq__12310__$2;
var node = vec__12309;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12318 = nn;
var G__12319 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12318,G__12319) : create_fn.call(null,G__12318,G__12319));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12322 = nn;
var G__12323 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12322,G__12323) : create_fn.call(null,G__12322,G__12323));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12326 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12326,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12326,(1),null);
var seq__12330_13558 = cljs.core.seq(node_children);
var chunk__12331_13559 = null;
var count__12332_13560 = (0);
var i__12333_13561 = (0);
while(true){
if((i__12333_13561 < count__12332_13560)){
var child_struct_13563 = chunk__12331_13559.cljs$core$IIndexed$_nth$arity$2(null,i__12333_13561);
var children_13564 = shadow.dom.dom_node(child_struct_13563);
if(cljs.core.seq_QMARK_(children_13564)){
var seq__12380_13566 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13564));
var chunk__12382_13567 = null;
var count__12383_13568 = (0);
var i__12384_13569 = (0);
while(true){
if((i__12384_13569 < count__12383_13568)){
var child_13570 = chunk__12382_13567.cljs$core$IIndexed$_nth$arity$2(null,i__12384_13569);
if(cljs.core.truth_(child_13570)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13570);


var G__13571 = seq__12380_13566;
var G__13572 = chunk__12382_13567;
var G__13573 = count__12383_13568;
var G__13574 = (i__12384_13569 + (1));
seq__12380_13566 = G__13571;
chunk__12382_13567 = G__13572;
count__12383_13568 = G__13573;
i__12384_13569 = G__13574;
continue;
} else {
var G__13576 = seq__12380_13566;
var G__13577 = chunk__12382_13567;
var G__13578 = count__12383_13568;
var G__13579 = (i__12384_13569 + (1));
seq__12380_13566 = G__13576;
chunk__12382_13567 = G__13577;
count__12383_13568 = G__13578;
i__12384_13569 = G__13579;
continue;
}
} else {
var temp__5825__auto___13580 = cljs.core.seq(seq__12380_13566);
if(temp__5825__auto___13580){
var seq__12380_13581__$1 = temp__5825__auto___13580;
if(cljs.core.chunked_seq_QMARK_(seq__12380_13581__$1)){
var c__5694__auto___13582 = cljs.core.chunk_first(seq__12380_13581__$1);
var G__13583 = cljs.core.chunk_rest(seq__12380_13581__$1);
var G__13584 = c__5694__auto___13582;
var G__13585 = cljs.core.count(c__5694__auto___13582);
var G__13586 = (0);
seq__12380_13566 = G__13583;
chunk__12382_13567 = G__13584;
count__12383_13568 = G__13585;
i__12384_13569 = G__13586;
continue;
} else {
var child_13588 = cljs.core.first(seq__12380_13581__$1);
if(cljs.core.truth_(child_13588)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13588);


var G__13589 = cljs.core.next(seq__12380_13581__$1);
var G__13590 = null;
var G__13591 = (0);
var G__13592 = (0);
seq__12380_13566 = G__13589;
chunk__12382_13567 = G__13590;
count__12383_13568 = G__13591;
i__12384_13569 = G__13592;
continue;
} else {
var G__13593 = cljs.core.next(seq__12380_13581__$1);
var G__13594 = null;
var G__13595 = (0);
var G__13596 = (0);
seq__12380_13566 = G__13593;
chunk__12382_13567 = G__13594;
count__12383_13568 = G__13595;
i__12384_13569 = G__13596;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13564);
}


var G__13597 = seq__12330_13558;
var G__13598 = chunk__12331_13559;
var G__13599 = count__12332_13560;
var G__13600 = (i__12333_13561 + (1));
seq__12330_13558 = G__13597;
chunk__12331_13559 = G__13598;
count__12332_13560 = G__13599;
i__12333_13561 = G__13600;
continue;
} else {
var temp__5825__auto___13602 = cljs.core.seq(seq__12330_13558);
if(temp__5825__auto___13602){
var seq__12330_13603__$1 = temp__5825__auto___13602;
if(cljs.core.chunked_seq_QMARK_(seq__12330_13603__$1)){
var c__5694__auto___13604 = cljs.core.chunk_first(seq__12330_13603__$1);
var G__13605 = cljs.core.chunk_rest(seq__12330_13603__$1);
var G__13606 = c__5694__auto___13604;
var G__13607 = cljs.core.count(c__5694__auto___13604);
var G__13608 = (0);
seq__12330_13558 = G__13605;
chunk__12331_13559 = G__13606;
count__12332_13560 = G__13607;
i__12333_13561 = G__13608;
continue;
} else {
var child_struct_13609 = cljs.core.first(seq__12330_13603__$1);
var children_13612 = shadow.dom.dom_node(child_struct_13609);
if(cljs.core.seq_QMARK_(children_13612)){
var seq__12409_13616 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13612));
var chunk__12411_13617 = null;
var count__12412_13618 = (0);
var i__12413_13619 = (0);
while(true){
if((i__12413_13619 < count__12412_13618)){
var child_13622 = chunk__12411_13617.cljs$core$IIndexed$_nth$arity$2(null,i__12413_13619);
if(cljs.core.truth_(child_13622)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13622);


var G__13623 = seq__12409_13616;
var G__13624 = chunk__12411_13617;
var G__13625 = count__12412_13618;
var G__13626 = (i__12413_13619 + (1));
seq__12409_13616 = G__13623;
chunk__12411_13617 = G__13624;
count__12412_13618 = G__13625;
i__12413_13619 = G__13626;
continue;
} else {
var G__13645 = seq__12409_13616;
var G__13646 = chunk__12411_13617;
var G__13647 = count__12412_13618;
var G__13648 = (i__12413_13619 + (1));
seq__12409_13616 = G__13645;
chunk__12411_13617 = G__13646;
count__12412_13618 = G__13647;
i__12413_13619 = G__13648;
continue;
}
} else {
var temp__5825__auto___13649__$1 = cljs.core.seq(seq__12409_13616);
if(temp__5825__auto___13649__$1){
var seq__12409_13650__$1 = temp__5825__auto___13649__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12409_13650__$1)){
var c__5694__auto___13651 = cljs.core.chunk_first(seq__12409_13650__$1);
var G__13652 = cljs.core.chunk_rest(seq__12409_13650__$1);
var G__13653 = c__5694__auto___13651;
var G__13654 = cljs.core.count(c__5694__auto___13651);
var G__13655 = (0);
seq__12409_13616 = G__13652;
chunk__12411_13617 = G__13653;
count__12412_13618 = G__13654;
i__12413_13619 = G__13655;
continue;
} else {
var child_13656 = cljs.core.first(seq__12409_13650__$1);
if(cljs.core.truth_(child_13656)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13656);


var G__13657 = cljs.core.next(seq__12409_13650__$1);
var G__13658 = null;
var G__13659 = (0);
var G__13660 = (0);
seq__12409_13616 = G__13657;
chunk__12411_13617 = G__13658;
count__12412_13618 = G__13659;
i__12413_13619 = G__13660;
continue;
} else {
var G__13662 = cljs.core.next(seq__12409_13650__$1);
var G__13663 = null;
var G__13664 = (0);
var G__13665 = (0);
seq__12409_13616 = G__13662;
chunk__12411_13617 = G__13663;
count__12412_13618 = G__13664;
i__12413_13619 = G__13665;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13612);
}


var G__13666 = cljs.core.next(seq__12330_13603__$1);
var G__13667 = null;
var G__13669 = (0);
var G__13670 = (0);
seq__12330_13558 = G__13666;
chunk__12331_13559 = G__13667;
count__12332_13560 = G__13669;
i__12333_13561 = G__13670;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12463 = cljs.core.seq(node);
var chunk__12464 = null;
var count__12465 = (0);
var i__12466 = (0);
while(true){
if((i__12466 < count__12465)){
var n = chunk__12464.cljs$core$IIndexed$_nth$arity$2(null,i__12466);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13685 = seq__12463;
var G__13686 = chunk__12464;
var G__13687 = count__12465;
var G__13688 = (i__12466 + (1));
seq__12463 = G__13685;
chunk__12464 = G__13686;
count__12465 = G__13687;
i__12466 = G__13688;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12463);
if(temp__5825__auto__){
var seq__12463__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12463__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12463__$1);
var G__13691 = cljs.core.chunk_rest(seq__12463__$1);
var G__13692 = c__5694__auto__;
var G__13693 = cljs.core.count(c__5694__auto__);
var G__13694 = (0);
seq__12463 = G__13691;
chunk__12464 = G__13692;
count__12465 = G__13693;
i__12466 = G__13694;
continue;
} else {
var n = cljs.core.first(seq__12463__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13698 = cljs.core.next(seq__12463__$1);
var G__13699 = null;
var G__13700 = (0);
var G__13701 = (0);
seq__12463 = G__13698;
chunk__12464 = G__13699;
count__12465 = G__13700;
i__12466 = G__13701;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12478 = arguments.length;
switch (G__12478) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12485 = arguments.length;
switch (G__12485) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12504 = arguments.length;
switch (G__12504) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5162__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5903__auto__ = [];
var len__5897__auto___13769 = arguments.length;
var i__5898__auto___13770 = (0);
while(true){
if((i__5898__auto___13770 < len__5897__auto___13769)){
args__5903__auto__.push((arguments[i__5898__auto___13770]));

var G__13772 = (i__5898__auto___13770 + (1));
i__5898__auto___13770 = G__13772;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12531_13774 = cljs.core.seq(nodes);
var chunk__12532_13775 = null;
var count__12533_13776 = (0);
var i__12534_13777 = (0);
while(true){
if((i__12534_13777 < count__12533_13776)){
var node_13779 = chunk__12532_13775.cljs$core$IIndexed$_nth$arity$2(null,i__12534_13777);
fragment.appendChild(shadow.dom._to_dom(node_13779));


var G__13780 = seq__12531_13774;
var G__13781 = chunk__12532_13775;
var G__13782 = count__12533_13776;
var G__13783 = (i__12534_13777 + (1));
seq__12531_13774 = G__13780;
chunk__12532_13775 = G__13781;
count__12533_13776 = G__13782;
i__12534_13777 = G__13783;
continue;
} else {
var temp__5825__auto___13784 = cljs.core.seq(seq__12531_13774);
if(temp__5825__auto___13784){
var seq__12531_13785__$1 = temp__5825__auto___13784;
if(cljs.core.chunked_seq_QMARK_(seq__12531_13785__$1)){
var c__5694__auto___13786 = cljs.core.chunk_first(seq__12531_13785__$1);
var G__13787 = cljs.core.chunk_rest(seq__12531_13785__$1);
var G__13788 = c__5694__auto___13786;
var G__13789 = cljs.core.count(c__5694__auto___13786);
var G__13790 = (0);
seq__12531_13774 = G__13787;
chunk__12532_13775 = G__13788;
count__12533_13776 = G__13789;
i__12534_13777 = G__13790;
continue;
} else {
var node_13791 = cljs.core.first(seq__12531_13785__$1);
fragment.appendChild(shadow.dom._to_dom(node_13791));


var G__13793 = cljs.core.next(seq__12531_13785__$1);
var G__13794 = null;
var G__13795 = (0);
var G__13796 = (0);
seq__12531_13774 = G__13793;
chunk__12532_13775 = G__13794;
count__12533_13776 = G__13795;
i__12534_13777 = G__13796;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12527){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12527));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12552_13803 = cljs.core.seq(scripts);
var chunk__12553_13804 = null;
var count__12554_13805 = (0);
var i__12555_13806 = (0);
while(true){
if((i__12555_13806 < count__12554_13805)){
var vec__12573_13809 = chunk__12553_13804.cljs$core$IIndexed$_nth$arity$2(null,i__12555_13806);
var script_tag_13810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12573_13809,(0),null);
var script_body_13811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12573_13809,(1),null);
eval(script_body_13811);


var G__13812 = seq__12552_13803;
var G__13813 = chunk__12553_13804;
var G__13814 = count__12554_13805;
var G__13815 = (i__12555_13806 + (1));
seq__12552_13803 = G__13812;
chunk__12553_13804 = G__13813;
count__12554_13805 = G__13814;
i__12555_13806 = G__13815;
continue;
} else {
var temp__5825__auto___13818 = cljs.core.seq(seq__12552_13803);
if(temp__5825__auto___13818){
var seq__12552_13819__$1 = temp__5825__auto___13818;
if(cljs.core.chunked_seq_QMARK_(seq__12552_13819__$1)){
var c__5694__auto___13820 = cljs.core.chunk_first(seq__12552_13819__$1);
var G__13821 = cljs.core.chunk_rest(seq__12552_13819__$1);
var G__13822 = c__5694__auto___13820;
var G__13823 = cljs.core.count(c__5694__auto___13820);
var G__13824 = (0);
seq__12552_13803 = G__13821;
chunk__12553_13804 = G__13822;
count__12554_13805 = G__13823;
i__12555_13806 = G__13824;
continue;
} else {
var vec__12579_13825 = cljs.core.first(seq__12552_13819__$1);
var script_tag_13826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12579_13825,(0),null);
var script_body_13827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12579_13825,(1),null);
eval(script_body_13827);


var G__13830 = cljs.core.next(seq__12552_13819__$1);
var G__13831 = null;
var G__13832 = (0);
var G__13833 = (0);
seq__12552_13803 = G__13830;
chunk__12553_13804 = G__13831;
count__12554_13805 = G__13832;
i__12555_13806 = G__13833;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12583){
var vec__12584 = p__12583;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12584,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12584,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12596 = arguments.length;
switch (G__12596) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12622 = cljs.core.seq(style_keys);
var chunk__12623 = null;
var count__12624 = (0);
var i__12625 = (0);
while(true){
if((i__12625 < count__12624)){
var it = chunk__12623.cljs$core$IIndexed$_nth$arity$2(null,i__12625);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13882 = seq__12622;
var G__13883 = chunk__12623;
var G__13884 = count__12624;
var G__13885 = (i__12625 + (1));
seq__12622 = G__13882;
chunk__12623 = G__13883;
count__12624 = G__13884;
i__12625 = G__13885;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12622);
if(temp__5825__auto__){
var seq__12622__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12622__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12622__$1);
var G__13887 = cljs.core.chunk_rest(seq__12622__$1);
var G__13888 = c__5694__auto__;
var G__13889 = cljs.core.count(c__5694__auto__);
var G__13890 = (0);
seq__12622 = G__13887;
chunk__12623 = G__13888;
count__12624 = G__13889;
i__12625 = G__13890;
continue;
} else {
var it = cljs.core.first(seq__12622__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13892 = cljs.core.next(seq__12622__$1);
var G__13893 = null;
var G__13894 = (0);
var G__13895 = (0);
seq__12622 = G__13892;
chunk__12623 = G__13893;
count__12624 = G__13894;
i__12625 = G__13895;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k12634,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__12656 = k12634;
var G__12656__$1 = (((G__12656 instanceof cljs.core.Keyword))?G__12656.fqn:null);
switch (G__12656__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12634,else__5472__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__12659){
var vec__12661 = p__12659;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12661,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12661,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12633){
var self__ = this;
var G__12633__$1 = this;
return (new cljs.core.RecordIter((0),G__12633__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12635,other12636){
var self__ = this;
var this12635__$1 = this;
return (((!((other12636 == null)))) && ((((this12635__$1.constructor === other12636.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12635__$1.x,other12636.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12635__$1.y,other12636.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12635__$1.__extmap,other12636.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k12634){
var self__ = this;
var this__5476__auto____$1 = this;
var G__12688 = k12634;
var G__12688__$1 = (((G__12688 instanceof cljs.core.Keyword))?G__12688.fqn:null);
switch (G__12688__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12634);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12633){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12691 = cljs.core.keyword_identical_QMARK_;
var expr__12692 = k__5478__auto__;
if(cljs.core.truth_((pred__12691.cljs$core$IFn$_invoke$arity$2 ? pred__12691.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12692) : pred__12691.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12692)))){
return (new shadow.dom.Coordinate(G__12633,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12691.cljs$core$IFn$_invoke$arity$2 ? pred__12691.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12692) : pred__12691.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12692)))){
return (new shadow.dom.Coordinate(self__.x,G__12633,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__12633),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__12633){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12633,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12644){
var extmap__5511__auto__ = (function (){var G__12703 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12644,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12644)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12703);
} else {
return G__12703;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12644),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12644),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k12720,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__12733 = k12720;
var G__12733__$1 = (((G__12733 instanceof cljs.core.Keyword))?G__12733.fqn:null);
switch (G__12733__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12720,else__5472__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__12735){
var vec__12737 = p__12735;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12737,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12737,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Size{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12719){
var self__ = this;
var G__12719__$1 = this;
return (new cljs.core.RecordIter((0),G__12719__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12721,other12722){
var self__ = this;
var this12721__$1 = this;
return (((!((other12722 == null)))) && ((((this12721__$1.constructor === other12722.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12721__$1.w,other12722.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12721__$1.h,other12722.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12721__$1.__extmap,other12722.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k12720){
var self__ = this;
var this__5476__auto____$1 = this;
var G__12761 = k12720;
var G__12761__$1 = (((G__12761 instanceof cljs.core.Keyword))?G__12761.fqn:null);
switch (G__12761__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12720);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12719){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12764 = cljs.core.keyword_identical_QMARK_;
var expr__12765 = k__5478__auto__;
if(cljs.core.truth_((pred__12764.cljs$core$IFn$_invoke$arity$2 ? pred__12764.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12765) : pred__12764.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12765)))){
return (new shadow.dom.Size(G__12719,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12764.cljs$core$IFn$_invoke$arity$2 ? pred__12764.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12765) : pred__12764.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12765)))){
return (new shadow.dom.Size(self__.w,G__12719,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__12719),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__12719){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12719,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12728){
var extmap__5511__auto__ = (function (){var G__12774 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12728,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12728)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12774);
} else {
return G__12774;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12728),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12728),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5759__auto__ = opts;
var l__5760__auto__ = a__5759__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5760__auto__)){
var G__14014 = (i + (1));
var G__14015 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__14014;
ret = G__14015;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12801){
var vec__12802 = p__12801;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12802,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12802,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12808 = arguments.length;
switch (G__12808) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__14033 = ps;
var G__14034 = (i + (1));
el__$1 = G__14033;
i = G__14034;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12860 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12860,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12860,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12860,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12867_14046 = cljs.core.seq(props);
var chunk__12868_14047 = null;
var count__12869_14048 = (0);
var i__12870_14049 = (0);
while(true){
if((i__12870_14049 < count__12869_14048)){
var vec__12902_14051 = chunk__12868_14047.cljs$core$IIndexed$_nth$arity$2(null,i__12870_14049);
var k_14052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12902_14051,(0),null);
var v_14053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12902_14051,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_14052);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_14052),v_14053);


var G__14059 = seq__12867_14046;
var G__14060 = chunk__12868_14047;
var G__14061 = count__12869_14048;
var G__14062 = (i__12870_14049 + (1));
seq__12867_14046 = G__14059;
chunk__12868_14047 = G__14060;
count__12869_14048 = G__14061;
i__12870_14049 = G__14062;
continue;
} else {
var temp__5825__auto___14064 = cljs.core.seq(seq__12867_14046);
if(temp__5825__auto___14064){
var seq__12867_14065__$1 = temp__5825__auto___14064;
if(cljs.core.chunked_seq_QMARK_(seq__12867_14065__$1)){
var c__5694__auto___14066 = cljs.core.chunk_first(seq__12867_14065__$1);
var G__14067 = cljs.core.chunk_rest(seq__12867_14065__$1);
var G__14068 = c__5694__auto___14066;
var G__14069 = cljs.core.count(c__5694__auto___14066);
var G__14070 = (0);
seq__12867_14046 = G__14067;
chunk__12868_14047 = G__14068;
count__12869_14048 = G__14069;
i__12870_14049 = G__14070;
continue;
} else {
var vec__12910_14075 = cljs.core.first(seq__12867_14065__$1);
var k_14076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12910_14075,(0),null);
var v_14077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12910_14075,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_14076);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_14076),v_14077);


var G__14079 = cljs.core.next(seq__12867_14065__$1);
var G__14081 = null;
var G__14082 = (0);
var G__14083 = (0);
seq__12867_14046 = G__14079;
chunk__12868_14047 = G__14081;
count__12869_14048 = G__14082;
i__12870_14049 = G__14083;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12921 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12921,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12921,(1),null);
var seq__12926_14086 = cljs.core.seq(node_children);
var chunk__12928_14087 = null;
var count__12929_14088 = (0);
var i__12930_14089 = (0);
while(true){
if((i__12930_14089 < count__12929_14088)){
var child_struct_14092 = chunk__12928_14087.cljs$core$IIndexed$_nth$arity$2(null,i__12930_14089);
if((!((child_struct_14092 == null)))){
if(typeof child_struct_14092 === 'string'){
var text_14094 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_14094)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_14092)));
} else {
var children_14095 = shadow.dom.svg_node(child_struct_14092);
if(cljs.core.seq_QMARK_(children_14095)){
var seq__12986_14097 = cljs.core.seq(children_14095);
var chunk__12988_14098 = null;
var count__12989_14099 = (0);
var i__12990_14100 = (0);
while(true){
if((i__12990_14100 < count__12989_14099)){
var child_14101 = chunk__12988_14098.cljs$core$IIndexed$_nth$arity$2(null,i__12990_14100);
if(cljs.core.truth_(child_14101)){
node.appendChild(child_14101);


var G__14102 = seq__12986_14097;
var G__14103 = chunk__12988_14098;
var G__14104 = count__12989_14099;
var G__14105 = (i__12990_14100 + (1));
seq__12986_14097 = G__14102;
chunk__12988_14098 = G__14103;
count__12989_14099 = G__14104;
i__12990_14100 = G__14105;
continue;
} else {
var G__14106 = seq__12986_14097;
var G__14107 = chunk__12988_14098;
var G__14108 = count__12989_14099;
var G__14109 = (i__12990_14100 + (1));
seq__12986_14097 = G__14106;
chunk__12988_14098 = G__14107;
count__12989_14099 = G__14108;
i__12990_14100 = G__14109;
continue;
}
} else {
var temp__5825__auto___14110 = cljs.core.seq(seq__12986_14097);
if(temp__5825__auto___14110){
var seq__12986_14111__$1 = temp__5825__auto___14110;
if(cljs.core.chunked_seq_QMARK_(seq__12986_14111__$1)){
var c__5694__auto___14112 = cljs.core.chunk_first(seq__12986_14111__$1);
var G__14113 = cljs.core.chunk_rest(seq__12986_14111__$1);
var G__14114 = c__5694__auto___14112;
var G__14115 = cljs.core.count(c__5694__auto___14112);
var G__14116 = (0);
seq__12986_14097 = G__14113;
chunk__12988_14098 = G__14114;
count__12989_14099 = G__14115;
i__12990_14100 = G__14116;
continue;
} else {
var child_14122 = cljs.core.first(seq__12986_14111__$1);
if(cljs.core.truth_(child_14122)){
node.appendChild(child_14122);


var G__14124 = cljs.core.next(seq__12986_14111__$1);
var G__14125 = null;
var G__14126 = (0);
var G__14127 = (0);
seq__12986_14097 = G__14124;
chunk__12988_14098 = G__14125;
count__12989_14099 = G__14126;
i__12990_14100 = G__14127;
continue;
} else {
var G__14128 = cljs.core.next(seq__12986_14111__$1);
var G__14129 = null;
var G__14130 = (0);
var G__14131 = (0);
seq__12986_14097 = G__14128;
chunk__12988_14098 = G__14129;
count__12989_14099 = G__14130;
i__12990_14100 = G__14131;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_14095);
}
}


var G__14134 = seq__12926_14086;
var G__14135 = chunk__12928_14087;
var G__14136 = count__12929_14088;
var G__14137 = (i__12930_14089 + (1));
seq__12926_14086 = G__14134;
chunk__12928_14087 = G__14135;
count__12929_14088 = G__14136;
i__12930_14089 = G__14137;
continue;
} else {
var G__14139 = seq__12926_14086;
var G__14140 = chunk__12928_14087;
var G__14141 = count__12929_14088;
var G__14142 = (i__12930_14089 + (1));
seq__12926_14086 = G__14139;
chunk__12928_14087 = G__14140;
count__12929_14088 = G__14141;
i__12930_14089 = G__14142;
continue;
}
} else {
var temp__5825__auto___14143 = cljs.core.seq(seq__12926_14086);
if(temp__5825__auto___14143){
var seq__12926_14144__$1 = temp__5825__auto___14143;
if(cljs.core.chunked_seq_QMARK_(seq__12926_14144__$1)){
var c__5694__auto___14145 = cljs.core.chunk_first(seq__12926_14144__$1);
var G__14146 = cljs.core.chunk_rest(seq__12926_14144__$1);
var G__14147 = c__5694__auto___14145;
var G__14148 = cljs.core.count(c__5694__auto___14145);
var G__14149 = (0);
seq__12926_14086 = G__14146;
chunk__12928_14087 = G__14147;
count__12929_14088 = G__14148;
i__12930_14089 = G__14149;
continue;
} else {
var child_struct_14150 = cljs.core.first(seq__12926_14144__$1);
if((!((child_struct_14150 == null)))){
if(typeof child_struct_14150 === 'string'){
var text_14153 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_14153)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_14150)));
} else {
var children_14157 = shadow.dom.svg_node(child_struct_14150);
if(cljs.core.seq_QMARK_(children_14157)){
var seq__13031_14158 = cljs.core.seq(children_14157);
var chunk__13033_14159 = null;
var count__13034_14160 = (0);
var i__13035_14161 = (0);
while(true){
if((i__13035_14161 < count__13034_14160)){
var child_14163 = chunk__13033_14159.cljs$core$IIndexed$_nth$arity$2(null,i__13035_14161);
if(cljs.core.truth_(child_14163)){
node.appendChild(child_14163);


var G__14164 = seq__13031_14158;
var G__14165 = chunk__13033_14159;
var G__14166 = count__13034_14160;
var G__14167 = (i__13035_14161 + (1));
seq__13031_14158 = G__14164;
chunk__13033_14159 = G__14165;
count__13034_14160 = G__14166;
i__13035_14161 = G__14167;
continue;
} else {
var G__14168 = seq__13031_14158;
var G__14169 = chunk__13033_14159;
var G__14170 = count__13034_14160;
var G__14171 = (i__13035_14161 + (1));
seq__13031_14158 = G__14168;
chunk__13033_14159 = G__14169;
count__13034_14160 = G__14170;
i__13035_14161 = G__14171;
continue;
}
} else {
var temp__5825__auto___14172__$1 = cljs.core.seq(seq__13031_14158);
if(temp__5825__auto___14172__$1){
var seq__13031_14173__$1 = temp__5825__auto___14172__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13031_14173__$1)){
var c__5694__auto___14174 = cljs.core.chunk_first(seq__13031_14173__$1);
var G__14175 = cljs.core.chunk_rest(seq__13031_14173__$1);
var G__14176 = c__5694__auto___14174;
var G__14177 = cljs.core.count(c__5694__auto___14174);
var G__14178 = (0);
seq__13031_14158 = G__14175;
chunk__13033_14159 = G__14176;
count__13034_14160 = G__14177;
i__13035_14161 = G__14178;
continue;
} else {
var child_14179 = cljs.core.first(seq__13031_14173__$1);
if(cljs.core.truth_(child_14179)){
node.appendChild(child_14179);


var G__14180 = cljs.core.next(seq__13031_14173__$1);
var G__14181 = null;
var G__14182 = (0);
var G__14183 = (0);
seq__13031_14158 = G__14180;
chunk__13033_14159 = G__14181;
count__13034_14160 = G__14182;
i__13035_14161 = G__14183;
continue;
} else {
var G__14184 = cljs.core.next(seq__13031_14173__$1);
var G__14185 = null;
var G__14186 = (0);
var G__14187 = (0);
seq__13031_14158 = G__14184;
chunk__13033_14159 = G__14185;
count__13034_14160 = G__14186;
i__13035_14161 = G__14187;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_14157);
}
}


var G__14188 = cljs.core.next(seq__12926_14144__$1);
var G__14189 = null;
var G__14190 = (0);
var G__14191 = (0);
seq__12926_14086 = G__14188;
chunk__12928_14087 = G__14189;
count__12929_14088 = G__14190;
i__12930_14089 = G__14191;
continue;
} else {
var G__14193 = cljs.core.next(seq__12926_14144__$1);
var G__14194 = null;
var G__14195 = (0);
var G__14196 = (0);
seq__12926_14086 = G__14193;
chunk__12928_14087 = G__14194;
count__12929_14088 = G__14195;
i__12930_14089 = G__14196;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___14201 = arguments.length;
var i__5898__auto___14202 = (0);
while(true){
if((i__5898__auto___14202 < len__5897__auto___14201)){
args__5903__auto__.push((arguments[i__5898__auto___14202]));

var G__14203 = (i__5898__auto___14202 + (1));
i__5898__auto___14202 = G__14203;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq13143){
var G__13144 = cljs.core.first(seq13143);
var seq13143__$1 = cljs.core.next(seq13143);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13144,seq13143__$1);
}));


//# sourceMappingURL=shadow.dom.js.map

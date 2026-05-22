goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15328 = (function (f,blockable,meta15329){
this.f = f;
this.blockable = blockable;
this.meta15329 = meta15329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15330,meta15329__$1){
var self__ = this;
var _15330__$1 = this;
return (new cljs.core.async.t_cljs$core$async15328(self__.f,self__.blockable,meta15329__$1));
}));

(cljs.core.async.t_cljs$core$async15328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15330){
var self__ = this;
var _15330__$1 = this;
return self__.meta15329;
}));

(cljs.core.async.t_cljs$core$async15328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15329","meta15329",1880080164,null)], null);
}));

(cljs.core.async.t_cljs$core$async15328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15328");

(cljs.core.async.t_cljs$core$async15328.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async15328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15328.
 */
cljs.core.async.__GT_t_cljs$core$async15328 = (function cljs$core$async$__GT_t_cljs$core$async15328(f,blockable,meta15329){
return (new cljs.core.async.t_cljs$core$async15328(f,blockable,meta15329));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15326 = arguments.length;
switch (G__15326) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async15328(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15339 = arguments.length;
switch (G__15339) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15346 = arguments.length;
switch (G__15346) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15357 = arguments.length;
switch (G__15357) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19208 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19208) : fn1.call(null,val_19208));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19208) : fn1.call(null,val_19208));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15368 = arguments.length;
switch (G__15368) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5762__auto___19220 = n;
var x_19221 = (0);
while(true){
if((x_19221 < n__5762__auto___19220)){
(a[x_19221] = x_19221);

var G__19224 = (x_19221 + (1));
x_19221 = G__19224;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15377 = (function (flag,meta15378){
this.flag = flag;
this.meta15378 = meta15378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15379,meta15378__$1){
var self__ = this;
var _15379__$1 = this;
return (new cljs.core.async.t_cljs$core$async15377(self__.flag,meta15378__$1));
}));

(cljs.core.async.t_cljs$core$async15377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15379){
var self__ = this;
var _15379__$1 = this;
return self__.meta15378;
}));

(cljs.core.async.t_cljs$core$async15377.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15377.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15378","meta15378",1011897466,null)], null);
}));

(cljs.core.async.t_cljs$core$async15377.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15377");

(cljs.core.async.t_cljs$core$async15377.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async15377");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15377.
 */
cljs.core.async.__GT_t_cljs$core$async15377 = (function cljs$core$async$__GT_t_cljs$core$async15377(flag,meta15378){
return (new cljs.core.async.t_cljs$core$async15377(flag,meta15378));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15377(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15391 = (function (flag,cb,meta15392){
this.flag = flag;
this.cb = cb;
this.meta15392 = meta15392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15393,meta15392__$1){
var self__ = this;
var _15393__$1 = this;
return (new cljs.core.async.t_cljs$core$async15391(self__.flag,self__.cb,meta15392__$1));
}));

(cljs.core.async.t_cljs$core$async15391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15393){
var self__ = this;
var _15393__$1 = this;
return self__.meta15392;
}));

(cljs.core.async.t_cljs$core$async15391.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15391.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15391.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15391.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15392","meta15392",-2111062507,null)], null);
}));

(cljs.core.async.t_cljs$core$async15391.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15391");

(cljs.core.async.t_cljs$core$async15391.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async15391");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15391.
 */
cljs.core.async.__GT_t_cljs$core$async15391 = (function cljs$core$async$__GT_t_cljs$core$async15391(flag,cb,meta15392){
return (new cljs.core.async.t_cljs$core$async15391(flag,cb,meta15392));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15391(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_19238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_19238)){
if((!(((port_19238.cljs$core$IFn$_invoke$arity$1 ? port_19238.cljs$core$IFn$_invoke$arity$1((1)) : port_19238.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__19239 = (i + (1));
i = G__19239;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15401_SHARP_){
var G__15412 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15401_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15412) : fret.call(null,G__15412));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15402_SHARP_){
var G__15413 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15402_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15413) : fret.call(null,G__15413));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19262 = (i + (1));
i = G__19262;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___19266 = arguments.length;
var i__5898__auto___19267 = (0);
while(true){
if((i__5898__auto___19267 < len__5897__auto___19266)){
args__5903__auto__.push((arguments[i__5898__auto___19267]));

var G__19268 = (i__5898__auto___19267 + (1));
i__5898__auto___19267 = G__19268;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15422){
var map__15423 = p__15422;
var map__15423__$1 = cljs.core.__destructure_map(map__15423);
var opts = map__15423__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15417){
var G__15418 = cljs.core.first(seq15417);
var seq15417__$1 = cljs.core.next(seq15417);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15418,seq15417__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15431 = arguments.length;
switch (G__15431) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15181__auto___19278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_15471){
var state_val_15472 = (state_15471[(1)]);
if((state_val_15472 === (7))){
var inst_15463 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
var statearr_15480_19279 = state_15471__$1;
(statearr_15480_19279[(2)] = inst_15463);

(statearr_15480_19279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (1))){
var state_15471__$1 = state_15471;
var statearr_15482_19280 = state_15471__$1;
(statearr_15482_19280[(2)] = null);

(statearr_15482_19280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (4))){
var inst_15442 = (state_15471[(7)]);
var inst_15442__$1 = (state_15471[(2)]);
var inst_15443 = (inst_15442__$1 == null);
var state_15471__$1 = (function (){var statearr_15485 = state_15471;
(statearr_15485[(7)] = inst_15442__$1);

return statearr_15485;
})();
if(cljs.core.truth_(inst_15443)){
var statearr_15487_19281 = state_15471__$1;
(statearr_15487_19281[(1)] = (5));

} else {
var statearr_15490_19282 = state_15471__$1;
(statearr_15490_19282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (13))){
var state_15471__$1 = state_15471;
var statearr_15496_19284 = state_15471__$1;
(statearr_15496_19284[(2)] = null);

(statearr_15496_19284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (6))){
var inst_15442 = (state_15471[(7)]);
var state_15471__$1 = state_15471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15471__$1,(11),to,inst_15442);
} else {
if((state_val_15472 === (3))){
var inst_15467 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15471__$1,inst_15467);
} else {
if((state_val_15472 === (12))){
var state_15471__$1 = state_15471;
var statearr_15502_19287 = state_15471__$1;
(statearr_15502_19287[(2)] = null);

(statearr_15502_19287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (2))){
var state_15471__$1 = state_15471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15471__$1,(4),from);
} else {
if((state_val_15472 === (11))){
var inst_15455 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
if(cljs.core.truth_(inst_15455)){
var statearr_15508_19293 = state_15471__$1;
(statearr_15508_19293[(1)] = (12));

} else {
var statearr_15509_19295 = state_15471__$1;
(statearr_15509_19295[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (9))){
var state_15471__$1 = state_15471;
var statearr_15511_19301 = state_15471__$1;
(statearr_15511_19301[(2)] = null);

(statearr_15511_19301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (5))){
var state_15471__$1 = state_15471;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15517_19305 = state_15471__$1;
(statearr_15517_19305[(1)] = (8));

} else {
var statearr_15519_19310 = state_15471__$1;
(statearr_15519_19310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (14))){
var inst_15461 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
var statearr_15523_19316 = state_15471__$1;
(statearr_15523_19316[(2)] = inst_15461);

(statearr_15523_19316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (10))){
var inst_15451 = (state_15471[(2)]);
var state_15471__$1 = state_15471;
var statearr_15531_19318 = state_15471__$1;
(statearr_15531_19318[(2)] = inst_15451);

(statearr_15531_19318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15472 === (8))){
var inst_15446 = cljs.core.async.close_BANG_(to);
var state_15471__$1 = state_15471;
var statearr_15537_19319 = state_15471__$1;
(statearr_15537_19319[(2)] = inst_15446);

(statearr_15537_19319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14118__auto__ = null;
var cljs$core$async$state_machine__14118__auto____0 = (function (){
var statearr_15545 = [null,null,null,null,null,null,null,null];
(statearr_15545[(0)] = cljs$core$async$state_machine__14118__auto__);

(statearr_15545[(1)] = (1));

return statearr_15545;
});
var cljs$core$async$state_machine__14118__auto____1 = (function (state_15471){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_15471);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e15547){var ex__14121__auto__ = e15547;
var statearr_15548_19332 = state_15471;
(statearr_15548_19332[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_15471[(4)]))){
var statearr_15552_19341 = state_15471;
(statearr_15552_19341[(1)] = cljs.core.first((state_15471[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19352 = state_15471;
state_15471 = G__19352;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$state_machine__14118__auto__ = function(state_15471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14118__auto____1.call(this,state_15471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14118__auto____0;
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14118__auto____1;
return cljs$core$async$state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_15558 = f__15182__auto__();
(statearr_15558[(6)] = c__15181__auto___19278);

return statearr_15558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15576){
var vec__15578 = p__15576;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15578,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15578,(1),null);
var job = vec__15578;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15181__auto___19382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_15590){
var state_val_15591 = (state_15590[(1)]);
if((state_val_15591 === (1))){
var state_15590__$1 = state_15590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15590__$1,(2),res,v);
} else {
if((state_val_15591 === (2))){
var inst_15587 = (state_15590[(2)]);
var inst_15588 = cljs.core.async.close_BANG_(res);
var state_15590__$1 = (function (){var statearr_15601 = state_15590;
(statearr_15601[(7)] = inst_15587);

return statearr_15601;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15590__$1,inst_15588);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0 = (function (){
var statearr_15603 = [null,null,null,null,null,null,null,null];
(statearr_15603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__);

(statearr_15603[(1)] = (1));

return statearr_15603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1 = (function (state_15590){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_15590);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e15606){var ex__14121__auto__ = e15606;
var statearr_15607_19403 = state_15590;
(statearr_15607_19403[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_15590[(4)]))){
var statearr_15609_19412 = state_15590;
(statearr_15609_19412[(1)] = cljs.core.first((state_15590[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19415 = state_15590;
state_15590 = G__19415;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__ = function(state_15590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1.call(this,state_15590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_15614 = f__15182__auto__();
(statearr_15614[(6)] = c__15181__auto___19382);

return statearr_15614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15618){
var vec__15624 = p__15618;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15624,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15624,(1),null);
var job = vec__15624;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5762__auto___19423 = n;
var __19424 = (0);
while(true){
if((__19424 < n__5762__auto___19423)){
var G__15630_19425 = type;
var G__15630_19426__$1 = (((G__15630_19425 instanceof cljs.core.Keyword))?G__15630_19425.fqn:null);
switch (G__15630_19426__$1) {
case "compute":
var c__15181__auto___19430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19424,c__15181__auto___19430,G__15630_19425,G__15630_19426__$1,n__5762__auto___19423,jobs,results,process__$1,async){
return (function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = ((function (__19424,c__15181__auto___19430,G__15630_19425,G__15630_19426__$1,n__5762__auto___19423,jobs,results,process__$1,async){
return (function (state_15652){
var state_val_15653 = (state_15652[(1)]);
if((state_val_15653 === (1))){
var state_15652__$1 = state_15652;
var statearr_15664_19434 = state_15652__$1;
(statearr_15664_19434[(2)] = null);

(statearr_15664_19434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (2))){
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15652__$1,(4),jobs);
} else {
if((state_val_15653 === (3))){
var inst_15650 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15652__$1,inst_15650);
} else {
if((state_val_15653 === (4))){
var inst_15640 = (state_15652[(2)]);
var inst_15641 = process__$1(inst_15640);
var state_15652__$1 = state_15652;
if(cljs.core.truth_(inst_15641)){
var statearr_15672_19435 = state_15652__$1;
(statearr_15672_19435[(1)] = (5));

} else {
var statearr_15674_19436 = state_15652__$1;
(statearr_15674_19436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (5))){
var state_15652__$1 = state_15652;
var statearr_15678_19441 = state_15652__$1;
(statearr_15678_19441[(2)] = null);

(statearr_15678_19441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (6))){
var state_15652__$1 = state_15652;
var statearr_15685_19443 = state_15652__$1;
(statearr_15685_19443[(2)] = null);

(statearr_15685_19443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (7))){
var inst_15648 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
var statearr_15687_19447 = state_15652__$1;
(statearr_15687_19447[(2)] = inst_15648);

(statearr_15687_19447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19424,c__15181__auto___19430,G__15630_19425,G__15630_19426__$1,n__5762__auto___19423,jobs,results,process__$1,async))
;
return ((function (__19424,switch__14117__auto__,c__15181__auto___19430,G__15630_19425,G__15630_19426__$1,n__5762__auto___19423,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0 = (function (){
var statearr_15691 = [null,null,null,null,null,null,null];
(statearr_15691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__);

(statearr_15691[(1)] = (1));

return statearr_15691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1 = (function (state_15652){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_15652);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e15693){var ex__14121__auto__ = e15693;
var statearr_15694_19461 = state_15652;
(statearr_15694_19461[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_15652[(4)]))){
var statearr_15696_19466 = state_15652;
(statearr_15696_19466[(1)] = cljs.core.first((state_15652[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19468 = state_15652;
state_15652 = G__19468;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__ = function(state_15652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1.call(this,state_15652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__;
})()
;})(__19424,switch__14117__auto__,c__15181__auto___19430,G__15630_19425,G__15630_19426__$1,n__5762__auto___19423,jobs,results,process__$1,async))
})();
var state__15183__auto__ = (function (){var statearr_15701 = f__15182__auto__();
(statearr_15701[(6)] = c__15181__auto___19430);

return statearr_15701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
});})(__19424,c__15181__auto___19430,G__15630_19425,G__15630_19426__$1,n__5762__auto___19423,jobs,results,process__$1,async))
);


break;
case "async":
var c__15181__auto___19470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19424,c__15181__auto___19470,G__15630_19425,G__15630_19426__$1,n__5762__auto___19423,jobs,results,process__$1,async){
return (function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = ((function (__19424,c__15181__auto___19470,G__15630_19425,G__15630_19426__$1,n__5762__auto___19423,jobs,results,process__$1,async){
return (function (state_15720){
var state_val_15721 = (state_15720[(1)]);
if((state_val_15721 === (1))){
var state_15720__$1 = state_15720;
var statearr_15728_19477 = state_15720__$1;
(statearr_15728_19477[(2)] = null);

(statearr_15728_19477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15721 === (2))){
var state_15720__$1 = state_15720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15720__$1,(4),jobs);
} else {
if((state_val_15721 === (3))){
var inst_15718 = (state_15720[(2)]);
var state_15720__$1 = state_15720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15720__$1,inst_15718);
} else {
if((state_val_15721 === (4))){
var inst_15707 = (state_15720[(2)]);
var inst_15710 = async(inst_15707);
var state_15720__$1 = state_15720;
if(cljs.core.truth_(inst_15710)){
var statearr_15741_19482 = state_15720__$1;
(statearr_15741_19482[(1)] = (5));

} else {
var statearr_15743_19484 = state_15720__$1;
(statearr_15743_19484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15721 === (5))){
var state_15720__$1 = state_15720;
var statearr_15745_19486 = state_15720__$1;
(statearr_15745_19486[(2)] = null);

(statearr_15745_19486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15721 === (6))){
var state_15720__$1 = state_15720;
var statearr_15747_19487 = state_15720__$1;
(statearr_15747_19487[(2)] = null);

(statearr_15747_19487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15721 === (7))){
var inst_15716 = (state_15720[(2)]);
var state_15720__$1 = state_15720;
var statearr_15751_19491 = state_15720__$1;
(statearr_15751_19491[(2)] = inst_15716);

(statearr_15751_19491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19424,c__15181__auto___19470,G__15630_19425,G__15630_19426__$1,n__5762__auto___19423,jobs,results,process__$1,async))
;
return ((function (__19424,switch__14117__auto__,c__15181__auto___19470,G__15630_19425,G__15630_19426__$1,n__5762__auto___19423,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0 = (function (){
var statearr_15756 = [null,null,null,null,null,null,null];
(statearr_15756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__);

(statearr_15756[(1)] = (1));

return statearr_15756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1 = (function (state_15720){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_15720);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e15760){var ex__14121__auto__ = e15760;
var statearr_15761_19496 = state_15720;
(statearr_15761_19496[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_15720[(4)]))){
var statearr_15766_19501 = state_15720;
(statearr_15766_19501[(1)] = cljs.core.first((state_15720[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19503 = state_15720;
state_15720 = G__19503;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__ = function(state_15720){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1.call(this,state_15720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__;
})()
;})(__19424,switch__14117__auto__,c__15181__auto___19470,G__15630_19425,G__15630_19426__$1,n__5762__auto___19423,jobs,results,process__$1,async))
})();
var state__15183__auto__ = (function (){var statearr_15778 = f__15182__auto__();
(statearr_15778[(6)] = c__15181__auto___19470);

return statearr_15778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
});})(__19424,c__15181__auto___19470,G__15630_19425,G__15630_19426__$1,n__5762__auto___19423,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15630_19426__$1))));

}

var G__19507 = (__19424 + (1));
__19424 = G__19507;
continue;
} else {
}
break;
}

var c__15181__auto___19511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_15830){
var state_val_15832 = (state_15830[(1)]);
if((state_val_15832 === (7))){
var inst_15822 = (state_15830[(2)]);
var state_15830__$1 = state_15830;
var statearr_15849_19516 = state_15830__$1;
(statearr_15849_19516[(2)] = inst_15822);

(statearr_15849_19516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15832 === (1))){
var state_15830__$1 = state_15830;
var statearr_15855_19521 = state_15830__$1;
(statearr_15855_19521[(2)] = null);

(statearr_15855_19521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15832 === (4))){
var inst_15799 = (state_15830[(7)]);
var inst_15799__$1 = (state_15830[(2)]);
var inst_15800 = (inst_15799__$1 == null);
var state_15830__$1 = (function (){var statearr_15862 = state_15830;
(statearr_15862[(7)] = inst_15799__$1);

return statearr_15862;
})();
if(cljs.core.truth_(inst_15800)){
var statearr_15864_19529 = state_15830__$1;
(statearr_15864_19529[(1)] = (5));

} else {
var statearr_15866_19531 = state_15830__$1;
(statearr_15866_19531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15832 === (6))){
var inst_15799 = (state_15830[(7)]);
var inst_15807 = (state_15830[(8)]);
var inst_15807__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15809 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15812 = [inst_15799,inst_15807__$1];
var inst_15813 = (new cljs.core.PersistentVector(null,2,(5),inst_15809,inst_15812,null));
var state_15830__$1 = (function (){var statearr_15875 = state_15830;
(statearr_15875[(8)] = inst_15807__$1);

return statearr_15875;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15830__$1,(8),jobs,inst_15813);
} else {
if((state_val_15832 === (3))){
var inst_15825 = (state_15830[(2)]);
var state_15830__$1 = state_15830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15830__$1,inst_15825);
} else {
if((state_val_15832 === (2))){
var state_15830__$1 = state_15830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15830__$1,(4),from);
} else {
if((state_val_15832 === (9))){
var inst_15819 = (state_15830[(2)]);
var state_15830__$1 = (function (){var statearr_15888 = state_15830;
(statearr_15888[(9)] = inst_15819);

return statearr_15888;
})();
var statearr_15889_19549 = state_15830__$1;
(statearr_15889_19549[(2)] = null);

(statearr_15889_19549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15832 === (5))){
var inst_15804 = cljs.core.async.close_BANG_(jobs);
var state_15830__$1 = state_15830;
var statearr_15891_19553 = state_15830__$1;
(statearr_15891_19553[(2)] = inst_15804);

(statearr_15891_19553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15832 === (8))){
var inst_15807 = (state_15830[(8)]);
var inst_15815 = (state_15830[(2)]);
var state_15830__$1 = (function (){var statearr_15895 = state_15830;
(statearr_15895[(10)] = inst_15815);

return statearr_15895;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15830__$1,(9),results,inst_15807);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0 = (function (){
var statearr_15896 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__);

(statearr_15896[(1)] = (1));

return statearr_15896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1 = (function (state_15830){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_15830);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e15897){var ex__14121__auto__ = e15897;
var statearr_15898_19572 = state_15830;
(statearr_15898_19572[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_15830[(4)]))){
var statearr_15899_19573 = state_15830;
(statearr_15899_19573[(1)] = cljs.core.first((state_15830[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19576 = state_15830;
state_15830 = G__19576;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__ = function(state_15830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1.call(this,state_15830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_15902 = f__15182__auto__();
(statearr_15902[(6)] = c__15181__auto___19511);

return statearr_15902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));


var c__15181__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_15948){
var state_val_15949 = (state_15948[(1)]);
if((state_val_15949 === (7))){
var inst_15942 = (state_15948[(2)]);
var state_15948__$1 = state_15948;
var statearr_15953_19585 = state_15948__$1;
(statearr_15953_19585[(2)] = inst_15942);

(statearr_15953_19585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (20))){
var state_15948__$1 = state_15948;
var statearr_15955_19587 = state_15948__$1;
(statearr_15955_19587[(2)] = null);

(statearr_15955_19587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (1))){
var state_15948__$1 = state_15948;
var statearr_15959_19590 = state_15948__$1;
(statearr_15959_19590[(2)] = null);

(statearr_15959_19590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (4))){
var inst_15910 = (state_15948[(7)]);
var inst_15910__$1 = (state_15948[(2)]);
var inst_15911 = (inst_15910__$1 == null);
var state_15948__$1 = (function (){var statearr_15960 = state_15948;
(statearr_15960[(7)] = inst_15910__$1);

return statearr_15960;
})();
if(cljs.core.truth_(inst_15911)){
var statearr_15961_19595 = state_15948__$1;
(statearr_15961_19595[(1)] = (5));

} else {
var statearr_15962_19596 = state_15948__$1;
(statearr_15962_19596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (15))){
var inst_15923 = (state_15948[(8)]);
var state_15948__$1 = state_15948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15948__$1,(18),to,inst_15923);
} else {
if((state_val_15949 === (21))){
var inst_15937 = (state_15948[(2)]);
var state_15948__$1 = state_15948;
var statearr_15964_19602 = state_15948__$1;
(statearr_15964_19602[(2)] = inst_15937);

(statearr_15964_19602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (13))){
var inst_15939 = (state_15948[(2)]);
var state_15948__$1 = (function (){var statearr_15965 = state_15948;
(statearr_15965[(9)] = inst_15939);

return statearr_15965;
})();
var statearr_15966_19607 = state_15948__$1;
(statearr_15966_19607[(2)] = null);

(statearr_15966_19607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (6))){
var inst_15910 = (state_15948[(7)]);
var state_15948__$1 = state_15948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15948__$1,(11),inst_15910);
} else {
if((state_val_15949 === (17))){
var inst_15932 = (state_15948[(2)]);
var state_15948__$1 = state_15948;
if(cljs.core.truth_(inst_15932)){
var statearr_15967_19616 = state_15948__$1;
(statearr_15967_19616[(1)] = (19));

} else {
var statearr_15968_19617 = state_15948__$1;
(statearr_15968_19617[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (3))){
var inst_15944 = (state_15948[(2)]);
var state_15948__$1 = state_15948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15948__$1,inst_15944);
} else {
if((state_val_15949 === (12))){
var inst_15920 = (state_15948[(10)]);
var state_15948__$1 = state_15948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15948__$1,(14),inst_15920);
} else {
if((state_val_15949 === (2))){
var state_15948__$1 = state_15948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15948__$1,(4),results);
} else {
if((state_val_15949 === (19))){
var state_15948__$1 = state_15948;
var statearr_15972_19620 = state_15948__$1;
(statearr_15972_19620[(2)] = null);

(statearr_15972_19620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (11))){
var inst_15920 = (state_15948[(2)]);
var state_15948__$1 = (function (){var statearr_15974 = state_15948;
(statearr_15974[(10)] = inst_15920);

return statearr_15974;
})();
var statearr_15978_19626 = state_15948__$1;
(statearr_15978_19626[(2)] = null);

(statearr_15978_19626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (9))){
var state_15948__$1 = state_15948;
var statearr_15979_19629 = state_15948__$1;
(statearr_15979_19629[(2)] = null);

(statearr_15979_19629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (5))){
var state_15948__$1 = state_15948;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15980_19634 = state_15948__$1;
(statearr_15980_19634[(1)] = (8));

} else {
var statearr_15981_19639 = state_15948__$1;
(statearr_15981_19639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (14))){
var inst_15923 = (state_15948[(8)]);
var inst_15925 = (state_15948[(11)]);
var inst_15923__$1 = (state_15948[(2)]);
var inst_15924 = (inst_15923__$1 == null);
var inst_15925__$1 = cljs.core.not(inst_15924);
var state_15948__$1 = (function (){var statearr_15982 = state_15948;
(statearr_15982[(8)] = inst_15923__$1);

(statearr_15982[(11)] = inst_15925__$1);

return statearr_15982;
})();
if(inst_15925__$1){
var statearr_15983_19643 = state_15948__$1;
(statearr_15983_19643[(1)] = (15));

} else {
var statearr_15984_19646 = state_15948__$1;
(statearr_15984_19646[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (16))){
var inst_15925 = (state_15948[(11)]);
var state_15948__$1 = state_15948;
var statearr_15985_19647 = state_15948__$1;
(statearr_15985_19647[(2)] = inst_15925);

(statearr_15985_19647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (10))){
var inst_15917 = (state_15948[(2)]);
var state_15948__$1 = state_15948;
var statearr_15986_19651 = state_15948__$1;
(statearr_15986_19651[(2)] = inst_15917);

(statearr_15986_19651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (18))){
var inst_15929 = (state_15948[(2)]);
var state_15948__$1 = state_15948;
var statearr_15989_19656 = state_15948__$1;
(statearr_15989_19656[(2)] = inst_15929);

(statearr_15989_19656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (8))){
var inst_15914 = cljs.core.async.close_BANG_(to);
var state_15948__$1 = state_15948;
var statearr_15990_19664 = state_15948__$1;
(statearr_15990_19664[(2)] = inst_15914);

(statearr_15990_19664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0 = (function (){
var statearr_15993 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__);

(statearr_15993[(1)] = (1));

return statearr_15993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1 = (function (state_15948){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_15948);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e15998){var ex__14121__auto__ = e15998;
var statearr_16002_19668 = state_15948;
(statearr_16002_19668[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_15948[(4)]))){
var statearr_16003_19669 = state_15948;
(statearr_16003_19669[(1)] = cljs.core.first((state_15948[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19670 = state_15948;
state_15948 = G__19670;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__ = function(state_15948){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1.call(this,state_15948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14118__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_16013 = f__15182__auto__();
(statearr_16013[(6)] = c__15181__auto__);

return statearr_16013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));

return c__15181__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16015 = arguments.length;
switch (G__16015) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16034 = arguments.length;
switch (G__16034) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16051 = arguments.length;
switch (G__16051) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15181__auto___19701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_16084){
var state_val_16085 = (state_16084[(1)]);
if((state_val_16085 === (7))){
var inst_16076 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
var statearr_16090_19710 = state_16084__$1;
(statearr_16090_19710[(2)] = inst_16076);

(statearr_16090_19710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (1))){
var state_16084__$1 = state_16084;
var statearr_16091_19711 = state_16084__$1;
(statearr_16091_19711[(2)] = null);

(statearr_16091_19711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (4))){
var inst_16057 = (state_16084[(7)]);
var inst_16057__$1 = (state_16084[(2)]);
var inst_16058 = (inst_16057__$1 == null);
var state_16084__$1 = (function (){var statearr_16096 = state_16084;
(statearr_16096[(7)] = inst_16057__$1);

return statearr_16096;
})();
if(cljs.core.truth_(inst_16058)){
var statearr_16097_19712 = state_16084__$1;
(statearr_16097_19712[(1)] = (5));

} else {
var statearr_16099_19713 = state_16084__$1;
(statearr_16099_19713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (13))){
var state_16084__$1 = state_16084;
var statearr_16104_19714 = state_16084__$1;
(statearr_16104_19714[(2)] = null);

(statearr_16104_19714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (6))){
var inst_16057 = (state_16084[(7)]);
var inst_16063 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16057) : p.call(null,inst_16057));
var state_16084__$1 = state_16084;
if(cljs.core.truth_(inst_16063)){
var statearr_16108_19719 = state_16084__$1;
(statearr_16108_19719[(1)] = (9));

} else {
var statearr_16109_19720 = state_16084__$1;
(statearr_16109_19720[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (3))){
var inst_16078 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16084__$1,inst_16078);
} else {
if((state_val_16085 === (12))){
var state_16084__$1 = state_16084;
var statearr_16113_19726 = state_16084__$1;
(statearr_16113_19726[(2)] = null);

(statearr_16113_19726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (2))){
var state_16084__$1 = state_16084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16084__$1,(4),ch);
} else {
if((state_val_16085 === (11))){
var inst_16057 = (state_16084[(7)]);
var inst_16067 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16084__$1,(8),inst_16067,inst_16057);
} else {
if((state_val_16085 === (9))){
var state_16084__$1 = state_16084;
var statearr_16120_19731 = state_16084__$1;
(statearr_16120_19731[(2)] = tc);

(statearr_16120_19731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (5))){
var inst_16060 = cljs.core.async.close_BANG_(tc);
var inst_16061 = cljs.core.async.close_BANG_(fc);
var state_16084__$1 = (function (){var statearr_16122 = state_16084;
(statearr_16122[(8)] = inst_16060);

return statearr_16122;
})();
var statearr_16123_19737 = state_16084__$1;
(statearr_16123_19737[(2)] = inst_16061);

(statearr_16123_19737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (14))){
var inst_16074 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
var statearr_16125_19738 = state_16084__$1;
(statearr_16125_19738[(2)] = inst_16074);

(statearr_16125_19738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (10))){
var state_16084__$1 = state_16084;
var statearr_16126_19739 = state_16084__$1;
(statearr_16126_19739[(2)] = fc);

(statearr_16126_19739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (8))){
var inst_16069 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
if(cljs.core.truth_(inst_16069)){
var statearr_16127_19741 = state_16084__$1;
(statearr_16127_19741[(1)] = (12));

} else {
var statearr_16128_19742 = state_16084__$1;
(statearr_16128_19742[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14118__auto__ = null;
var cljs$core$async$state_machine__14118__auto____0 = (function (){
var statearr_16132 = [null,null,null,null,null,null,null,null,null];
(statearr_16132[(0)] = cljs$core$async$state_machine__14118__auto__);

(statearr_16132[(1)] = (1));

return statearr_16132;
});
var cljs$core$async$state_machine__14118__auto____1 = (function (state_16084){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_16084);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e16137){var ex__14121__auto__ = e16137;
var statearr_16141_19743 = state_16084;
(statearr_16141_19743[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_16084[(4)]))){
var statearr_16145_19744 = state_16084;
(statearr_16145_19744[(1)] = cljs.core.first((state_16084[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19745 = state_16084;
state_16084 = G__19745;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$state_machine__14118__auto__ = function(state_16084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14118__auto____1.call(this,state_16084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14118__auto____0;
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14118__auto____1;
return cljs$core$async$state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_16147 = f__15182__auto__();
(statearr_16147[(6)] = c__15181__auto___19701);

return statearr_16147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15181__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_16186){
var state_val_16187 = (state_16186[(1)]);
if((state_val_16187 === (7))){
var inst_16182 = (state_16186[(2)]);
var state_16186__$1 = state_16186;
var statearr_16192_19748 = state_16186__$1;
(statearr_16192_19748[(2)] = inst_16182);

(statearr_16192_19748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (1))){
var inst_16155 = init;
var inst_16159 = inst_16155;
var state_16186__$1 = (function (){var statearr_16193 = state_16186;
(statearr_16193[(7)] = inst_16159);

return statearr_16193;
})();
var statearr_16194_19750 = state_16186__$1;
(statearr_16194_19750[(2)] = null);

(statearr_16194_19750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (4))){
var inst_16165 = (state_16186[(8)]);
var inst_16165__$1 = (state_16186[(2)]);
var inst_16167 = (inst_16165__$1 == null);
var state_16186__$1 = (function (){var statearr_16196 = state_16186;
(statearr_16196[(8)] = inst_16165__$1);

return statearr_16196;
})();
if(cljs.core.truth_(inst_16167)){
var statearr_16197_19751 = state_16186__$1;
(statearr_16197_19751[(1)] = (5));

} else {
var statearr_16198_19752 = state_16186__$1;
(statearr_16198_19752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (6))){
var inst_16159 = (state_16186[(7)]);
var inst_16165 = (state_16186[(8)]);
var inst_16173 = (state_16186[(9)]);
var inst_16173__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16159,inst_16165) : f.call(null,inst_16159,inst_16165));
var inst_16174 = cljs.core.reduced_QMARK_(inst_16173__$1);
var state_16186__$1 = (function (){var statearr_16199 = state_16186;
(statearr_16199[(9)] = inst_16173__$1);

return statearr_16199;
})();
if(inst_16174){
var statearr_16200_19756 = state_16186__$1;
(statearr_16200_19756[(1)] = (8));

} else {
var statearr_16201_19757 = state_16186__$1;
(statearr_16201_19757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (3))){
var inst_16184 = (state_16186[(2)]);
var state_16186__$1 = state_16186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16186__$1,inst_16184);
} else {
if((state_val_16187 === (2))){
var state_16186__$1 = state_16186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16186__$1,(4),ch);
} else {
if((state_val_16187 === (9))){
var inst_16173 = (state_16186[(9)]);
var inst_16159 = inst_16173;
var state_16186__$1 = (function (){var statearr_16215 = state_16186;
(statearr_16215[(7)] = inst_16159);

return statearr_16215;
})();
var statearr_16216_19766 = state_16186__$1;
(statearr_16216_19766[(2)] = null);

(statearr_16216_19766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (5))){
var inst_16159 = (state_16186[(7)]);
var state_16186__$1 = state_16186;
var statearr_16217_19767 = state_16186__$1;
(statearr_16217_19767[(2)] = inst_16159);

(statearr_16217_19767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (10))){
var inst_16180 = (state_16186[(2)]);
var state_16186__$1 = state_16186;
var statearr_16218_19768 = state_16186__$1;
(statearr_16218_19768[(2)] = inst_16180);

(statearr_16218_19768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16187 === (8))){
var inst_16173 = (state_16186[(9)]);
var inst_16176 = cljs.core.deref(inst_16173);
var state_16186__$1 = state_16186;
var statearr_16224_19769 = state_16186__$1;
(statearr_16224_19769[(2)] = inst_16176);

(statearr_16224_19769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14118__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14118__auto____0 = (function (){
var statearr_16226 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16226[(0)] = cljs$core$async$reduce_$_state_machine__14118__auto__);

(statearr_16226[(1)] = (1));

return statearr_16226;
});
var cljs$core$async$reduce_$_state_machine__14118__auto____1 = (function (state_16186){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_16186);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e16230){var ex__14121__auto__ = e16230;
var statearr_16232_19771 = state_16186;
(statearr_16232_19771[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_16186[(4)]))){
var statearr_16236_19772 = state_16186;
(statearr_16236_19772[(1)] = cljs.core.first((state_16186[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19773 = state_16186;
state_16186 = G__19773;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14118__auto__ = function(state_16186){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14118__auto____1.call(this,state_16186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14118__auto____0;
cljs$core$async$reduce_$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14118__auto____1;
return cljs$core$async$reduce_$_state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_16237 = f__15182__auto__();
(statearr_16237[(6)] = c__15181__auto__);

return statearr_16237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));

return c__15181__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15181__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_16253){
var state_val_16254 = (state_16253[(1)]);
if((state_val_16254 === (1))){
var inst_16248 = cljs.core.async.reduce(f__$1,init,ch);
var state_16253__$1 = state_16253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16253__$1,(2),inst_16248);
} else {
if((state_val_16254 === (2))){
var inst_16250 = (state_16253[(2)]);
var inst_16251 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16250) : f__$1.call(null,inst_16250));
var state_16253__$1 = state_16253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16253__$1,inst_16251);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14118__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14118__auto____0 = (function (){
var statearr_16255 = [null,null,null,null,null,null,null];
(statearr_16255[(0)] = cljs$core$async$transduce_$_state_machine__14118__auto__);

(statearr_16255[(1)] = (1));

return statearr_16255;
});
var cljs$core$async$transduce_$_state_machine__14118__auto____1 = (function (state_16253){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_16253);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e16260){var ex__14121__auto__ = e16260;
var statearr_16261_19774 = state_16253;
(statearr_16261_19774[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_16253[(4)]))){
var statearr_16262_19778 = state_16253;
(statearr_16262_19778[(1)] = cljs.core.first((state_16253[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19779 = state_16253;
state_16253 = G__19779;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14118__auto__ = function(state_16253){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14118__auto____1.call(this,state_16253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14118__auto____0;
cljs$core$async$transduce_$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14118__auto____1;
return cljs$core$async$transduce_$_state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_16264 = f__15182__auto__();
(statearr_16264[(6)] = c__15181__auto__);

return statearr_16264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));

return c__15181__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16267 = arguments.length;
switch (G__16267) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15181__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_16303){
var state_val_16304 = (state_16303[(1)]);
if((state_val_16304 === (7))){
var inst_16281 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
var statearr_16305_19782 = state_16303__$1;
(statearr_16305_19782[(2)] = inst_16281);

(statearr_16305_19782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (1))){
var inst_16274 = cljs.core.seq(coll);
var inst_16275 = inst_16274;
var state_16303__$1 = (function (){var statearr_16306 = state_16303;
(statearr_16306[(7)] = inst_16275);

return statearr_16306;
})();
var statearr_16307_19785 = state_16303__$1;
(statearr_16307_19785[(2)] = null);

(statearr_16307_19785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (4))){
var inst_16275 = (state_16303[(7)]);
var inst_16279 = cljs.core.first(inst_16275);
var state_16303__$1 = state_16303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16303__$1,(7),ch,inst_16279);
} else {
if((state_val_16304 === (13))){
var inst_16297 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
var statearr_16311_19787 = state_16303__$1;
(statearr_16311_19787[(2)] = inst_16297);

(statearr_16311_19787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (6))){
var inst_16284 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
if(cljs.core.truth_(inst_16284)){
var statearr_16313_19788 = state_16303__$1;
(statearr_16313_19788[(1)] = (8));

} else {
var statearr_16314_19789 = state_16303__$1;
(statearr_16314_19789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (3))){
var inst_16301 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16303__$1,inst_16301);
} else {
if((state_val_16304 === (12))){
var state_16303__$1 = state_16303;
var statearr_16315_19790 = state_16303__$1;
(statearr_16315_19790[(2)] = null);

(statearr_16315_19790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (2))){
var inst_16275 = (state_16303[(7)]);
var state_16303__$1 = state_16303;
if(cljs.core.truth_(inst_16275)){
var statearr_16316_19791 = state_16303__$1;
(statearr_16316_19791[(1)] = (4));

} else {
var statearr_16317_19792 = state_16303__$1;
(statearr_16317_19792[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (11))){
var inst_16294 = cljs.core.async.close_BANG_(ch);
var state_16303__$1 = state_16303;
var statearr_16318_19793 = state_16303__$1;
(statearr_16318_19793[(2)] = inst_16294);

(statearr_16318_19793[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (9))){
var state_16303__$1 = state_16303;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16319_19797 = state_16303__$1;
(statearr_16319_19797[(1)] = (11));

} else {
var statearr_16322_19798 = state_16303__$1;
(statearr_16322_19798[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (5))){
var inst_16275 = (state_16303[(7)]);
var state_16303__$1 = state_16303;
var statearr_16323_19799 = state_16303__$1;
(statearr_16323_19799[(2)] = inst_16275);

(statearr_16323_19799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (10))){
var inst_16299 = (state_16303[(2)]);
var state_16303__$1 = state_16303;
var statearr_16324_19800 = state_16303__$1;
(statearr_16324_19800[(2)] = inst_16299);

(statearr_16324_19800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16304 === (8))){
var inst_16275 = (state_16303[(7)]);
var inst_16290 = cljs.core.next(inst_16275);
var inst_16275__$1 = inst_16290;
var state_16303__$1 = (function (){var statearr_16349 = state_16303;
(statearr_16349[(7)] = inst_16275__$1);

return statearr_16349;
})();
var statearr_16350_19801 = state_16303__$1;
(statearr_16350_19801[(2)] = null);

(statearr_16350_19801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14118__auto__ = null;
var cljs$core$async$state_machine__14118__auto____0 = (function (){
var statearr_16351 = [null,null,null,null,null,null,null,null];
(statearr_16351[(0)] = cljs$core$async$state_machine__14118__auto__);

(statearr_16351[(1)] = (1));

return statearr_16351;
});
var cljs$core$async$state_machine__14118__auto____1 = (function (state_16303){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_16303);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e16353){var ex__14121__auto__ = e16353;
var statearr_16355_19804 = state_16303;
(statearr_16355_19804[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_16303[(4)]))){
var statearr_16357_19806 = state_16303;
(statearr_16357_19806[(1)] = cljs.core.first((state_16303[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19807 = state_16303;
state_16303 = G__19807;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$state_machine__14118__auto__ = function(state_16303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14118__auto____1.call(this,state_16303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14118__auto____0;
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14118__auto____1;
return cljs$core$async$state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_16360 = f__15182__auto__();
(statearr_16360[(6)] = c__15181__auto__);

return statearr_16360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));

return c__15181__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16373 = arguments.length;
switch (G__16373) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19814 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19814(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19820 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19820(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19821 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19821(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19824 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19824(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16401 = (function (ch,cs,meta16402){
this.ch = ch;
this.cs = cs;
this.meta16402 = meta16402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16403,meta16402__$1){
var self__ = this;
var _16403__$1 = this;
return (new cljs.core.async.t_cljs$core$async16401(self__.ch,self__.cs,meta16402__$1));
}));

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16403){
var self__ = this;
var _16403__$1 = this;
return self__.meta16402;
}));

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16401.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16402","meta16402",2131302504,null)], null);
}));

(cljs.core.async.t_cljs$core$async16401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16401");

(cljs.core.async.t_cljs$core$async16401.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16401.
 */
cljs.core.async.__GT_t_cljs$core$async16401 = (function cljs$core$async$__GT_t_cljs$core$async16401(ch,cs,meta16402){
return (new cljs.core.async.t_cljs$core$async16401(ch,cs,meta16402));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16401(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15181__auto___19829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_16609){
var state_val_16610 = (state_16609[(1)]);
if((state_val_16610 === (7))){
var inst_16594 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16614_19830 = state_16609__$1;
(statearr_16614_19830[(2)] = inst_16594);

(statearr_16614_19830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (20))){
var inst_16474 = (state_16609[(7)]);
var inst_16490 = cljs.core.first(inst_16474);
var inst_16491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16490,(0),null);
var inst_16492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16490,(1),null);
var state_16609__$1 = (function (){var statearr_16619 = state_16609;
(statearr_16619[(8)] = inst_16491);

return statearr_16619;
})();
if(cljs.core.truth_(inst_16492)){
var statearr_16620_19835 = state_16609__$1;
(statearr_16620_19835[(1)] = (22));

} else {
var statearr_16621_19837 = state_16609__$1;
(statearr_16621_19837[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (27))){
var inst_16521 = (state_16609[(9)]);
var inst_16523 = (state_16609[(10)]);
var inst_16535 = (state_16609[(11)]);
var inst_16432 = (state_16609[(12)]);
var inst_16535__$1 = cljs.core._nth(inst_16521,inst_16523);
var inst_16537 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16535__$1,inst_16432,done);
var state_16609__$1 = (function (){var statearr_16632 = state_16609;
(statearr_16632[(11)] = inst_16535__$1);

return statearr_16632;
})();
if(cljs.core.truth_(inst_16537)){
var statearr_16637_19842 = state_16609__$1;
(statearr_16637_19842[(1)] = (30));

} else {
var statearr_16642_19845 = state_16609__$1;
(statearr_16642_19845[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (1))){
var state_16609__$1 = state_16609;
var statearr_16650_19846 = state_16609__$1;
(statearr_16650_19846[(2)] = null);

(statearr_16650_19846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (24))){
var inst_16474 = (state_16609[(7)]);
var inst_16497 = (state_16609[(2)]);
var inst_16498 = cljs.core.next(inst_16474);
var inst_16445 = inst_16498;
var inst_16446 = null;
var inst_16447 = (0);
var inst_16448 = (0);
var state_16609__$1 = (function (){var statearr_16651 = state_16609;
(statearr_16651[(13)] = inst_16497);

(statearr_16651[(14)] = inst_16445);

(statearr_16651[(15)] = inst_16446);

(statearr_16651[(16)] = inst_16447);

(statearr_16651[(17)] = inst_16448);

return statearr_16651;
})();
var statearr_16653_19851 = state_16609__$1;
(statearr_16653_19851[(2)] = null);

(statearr_16653_19851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (39))){
var state_16609__$1 = state_16609;
var statearr_16665_19852 = state_16609__$1;
(statearr_16665_19852[(2)] = null);

(statearr_16665_19852[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (4))){
var inst_16432 = (state_16609[(12)]);
var inst_16432__$1 = (state_16609[(2)]);
var inst_16433 = (inst_16432__$1 == null);
var state_16609__$1 = (function (){var statearr_16666 = state_16609;
(statearr_16666[(12)] = inst_16432__$1);

return statearr_16666;
})();
if(cljs.core.truth_(inst_16433)){
var statearr_16667_19853 = state_16609__$1;
(statearr_16667_19853[(1)] = (5));

} else {
var statearr_16669_19855 = state_16609__$1;
(statearr_16669_19855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (15))){
var inst_16448 = (state_16609[(17)]);
var inst_16445 = (state_16609[(14)]);
var inst_16446 = (state_16609[(15)]);
var inst_16447 = (state_16609[(16)]);
var inst_16468 = (state_16609[(2)]);
var inst_16469 = (inst_16448 + (1));
var tmp16659 = inst_16446;
var tmp16660 = inst_16445;
var tmp16661 = inst_16447;
var inst_16445__$1 = tmp16660;
var inst_16446__$1 = tmp16659;
var inst_16447__$1 = tmp16661;
var inst_16448__$1 = inst_16469;
var state_16609__$1 = (function (){var statearr_16671 = state_16609;
(statearr_16671[(18)] = inst_16468);

(statearr_16671[(14)] = inst_16445__$1);

(statearr_16671[(15)] = inst_16446__$1);

(statearr_16671[(16)] = inst_16447__$1);

(statearr_16671[(17)] = inst_16448__$1);

return statearr_16671;
})();
var statearr_16673_19864 = state_16609__$1;
(statearr_16673_19864[(2)] = null);

(statearr_16673_19864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (21))){
var inst_16501 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16681_19865 = state_16609__$1;
(statearr_16681_19865[(2)] = inst_16501);

(statearr_16681_19865[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (31))){
var inst_16535 = (state_16609[(11)]);
var inst_16546 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16535);
var state_16609__$1 = state_16609;
var statearr_16683_19869 = state_16609__$1;
(statearr_16683_19869[(2)] = inst_16546);

(statearr_16683_19869[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (32))){
var inst_16523 = (state_16609[(10)]);
var inst_16520 = (state_16609[(19)]);
var inst_16521 = (state_16609[(9)]);
var inst_16522 = (state_16609[(20)]);
var inst_16548 = (state_16609[(2)]);
var inst_16549 = (inst_16523 + (1));
var tmp16676 = inst_16521;
var tmp16677 = inst_16520;
var tmp16678 = inst_16522;
var inst_16520__$1 = tmp16677;
var inst_16521__$1 = tmp16676;
var inst_16522__$1 = tmp16678;
var inst_16523__$1 = inst_16549;
var state_16609__$1 = (function (){var statearr_16688 = state_16609;
(statearr_16688[(21)] = inst_16548);

(statearr_16688[(19)] = inst_16520__$1);

(statearr_16688[(9)] = inst_16521__$1);

(statearr_16688[(20)] = inst_16522__$1);

(statearr_16688[(10)] = inst_16523__$1);

return statearr_16688;
})();
var statearr_16692_19872 = state_16609__$1;
(statearr_16692_19872[(2)] = null);

(statearr_16692_19872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (40))){
var inst_16567 = (state_16609[(22)]);
var inst_16571 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16567);
var state_16609__$1 = state_16609;
var statearr_16697_19873 = state_16609__$1;
(statearr_16697_19873[(2)] = inst_16571);

(statearr_16697_19873[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (33))){
var inst_16552 = (state_16609[(23)]);
var inst_16557 = cljs.core.chunked_seq_QMARK_(inst_16552);
var state_16609__$1 = state_16609;
if(inst_16557){
var statearr_16700_19876 = state_16609__$1;
(statearr_16700_19876[(1)] = (36));

} else {
var statearr_16701_19877 = state_16609__$1;
(statearr_16701_19877[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (13))){
var inst_16459 = (state_16609[(24)]);
var inst_16465 = cljs.core.async.close_BANG_(inst_16459);
var state_16609__$1 = state_16609;
var statearr_16703_19879 = state_16609__$1;
(statearr_16703_19879[(2)] = inst_16465);

(statearr_16703_19879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (22))){
var inst_16491 = (state_16609[(8)]);
var inst_16494 = cljs.core.async.close_BANG_(inst_16491);
var state_16609__$1 = state_16609;
var statearr_16708_19884 = state_16609__$1;
(statearr_16708_19884[(2)] = inst_16494);

(statearr_16708_19884[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (36))){
var inst_16552 = (state_16609[(23)]);
var inst_16562 = cljs.core.chunk_first(inst_16552);
var inst_16563 = cljs.core.chunk_rest(inst_16552);
var inst_16564 = cljs.core.count(inst_16562);
var inst_16520 = inst_16563;
var inst_16521 = inst_16562;
var inst_16522 = inst_16564;
var inst_16523 = (0);
var state_16609__$1 = (function (){var statearr_16714 = state_16609;
(statearr_16714[(19)] = inst_16520);

(statearr_16714[(9)] = inst_16521);

(statearr_16714[(20)] = inst_16522);

(statearr_16714[(10)] = inst_16523);

return statearr_16714;
})();
var statearr_16716_19886 = state_16609__$1;
(statearr_16716_19886[(2)] = null);

(statearr_16716_19886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (41))){
var inst_16552 = (state_16609[(23)]);
var inst_16573 = (state_16609[(2)]);
var inst_16574 = cljs.core.next(inst_16552);
var inst_16520 = inst_16574;
var inst_16521 = null;
var inst_16522 = (0);
var inst_16523 = (0);
var state_16609__$1 = (function (){var statearr_16718 = state_16609;
(statearr_16718[(25)] = inst_16573);

(statearr_16718[(19)] = inst_16520);

(statearr_16718[(9)] = inst_16521);

(statearr_16718[(20)] = inst_16522);

(statearr_16718[(10)] = inst_16523);

return statearr_16718;
})();
var statearr_16720_19890 = state_16609__$1;
(statearr_16720_19890[(2)] = null);

(statearr_16720_19890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (43))){
var state_16609__$1 = state_16609;
var statearr_16722_19891 = state_16609__$1;
(statearr_16722_19891[(2)] = null);

(statearr_16722_19891[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (29))){
var inst_16582 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16726_19895 = state_16609__$1;
(statearr_16726_19895[(2)] = inst_16582);

(statearr_16726_19895[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (44))){
var inst_16591 = (state_16609[(2)]);
var state_16609__$1 = (function (){var statearr_16729 = state_16609;
(statearr_16729[(26)] = inst_16591);

return statearr_16729;
})();
var statearr_16731_19896 = state_16609__$1;
(statearr_16731_19896[(2)] = null);

(statearr_16731_19896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (6))){
var inst_16511 = (state_16609[(27)]);
var inst_16510 = cljs.core.deref(cs);
var inst_16511__$1 = cljs.core.keys(inst_16510);
var inst_16512 = cljs.core.count(inst_16511__$1);
var inst_16513 = cljs.core.reset_BANG_(dctr,inst_16512);
var inst_16519 = cljs.core.seq(inst_16511__$1);
var inst_16520 = inst_16519;
var inst_16521 = null;
var inst_16522 = (0);
var inst_16523 = (0);
var state_16609__$1 = (function (){var statearr_16739 = state_16609;
(statearr_16739[(27)] = inst_16511__$1);

(statearr_16739[(28)] = inst_16513);

(statearr_16739[(19)] = inst_16520);

(statearr_16739[(9)] = inst_16521);

(statearr_16739[(20)] = inst_16522);

(statearr_16739[(10)] = inst_16523);

return statearr_16739;
})();
var statearr_16742_19899 = state_16609__$1;
(statearr_16742_19899[(2)] = null);

(statearr_16742_19899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (28))){
var inst_16520 = (state_16609[(19)]);
var inst_16552 = (state_16609[(23)]);
var inst_16552__$1 = cljs.core.seq(inst_16520);
var state_16609__$1 = (function (){var statearr_16748 = state_16609;
(statearr_16748[(23)] = inst_16552__$1);

return statearr_16748;
})();
if(inst_16552__$1){
var statearr_16750_19900 = state_16609__$1;
(statearr_16750_19900[(1)] = (33));

} else {
var statearr_16751_19901 = state_16609__$1;
(statearr_16751_19901[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (25))){
var inst_16523 = (state_16609[(10)]);
var inst_16522 = (state_16609[(20)]);
var inst_16525 = (inst_16523 < inst_16522);
var inst_16526 = inst_16525;
var state_16609__$1 = state_16609;
if(cljs.core.truth_(inst_16526)){
var statearr_16753_19902 = state_16609__$1;
(statearr_16753_19902[(1)] = (27));

} else {
var statearr_16757_19903 = state_16609__$1;
(statearr_16757_19903[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (34))){
var state_16609__$1 = state_16609;
var statearr_16758_19904 = state_16609__$1;
(statearr_16758_19904[(2)] = null);

(statearr_16758_19904[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (17))){
var state_16609__$1 = state_16609;
var statearr_16759_19908 = state_16609__$1;
(statearr_16759_19908[(2)] = null);

(statearr_16759_19908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (3))){
var inst_16596 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16609__$1,inst_16596);
} else {
if((state_val_16610 === (12))){
var inst_16506 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16765_19909 = state_16609__$1;
(statearr_16765_19909[(2)] = inst_16506);

(statearr_16765_19909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (2))){
var state_16609__$1 = state_16609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16609__$1,(4),ch);
} else {
if((state_val_16610 === (23))){
var state_16609__$1 = state_16609;
var statearr_16766_19910 = state_16609__$1;
(statearr_16766_19910[(2)] = null);

(statearr_16766_19910[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (35))){
var inst_16580 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16767_19911 = state_16609__$1;
(statearr_16767_19911[(2)] = inst_16580);

(statearr_16767_19911[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (19))){
var inst_16474 = (state_16609[(7)]);
var inst_16479 = cljs.core.chunk_first(inst_16474);
var inst_16483 = cljs.core.chunk_rest(inst_16474);
var inst_16484 = cljs.core.count(inst_16479);
var inst_16445 = inst_16483;
var inst_16446 = inst_16479;
var inst_16447 = inst_16484;
var inst_16448 = (0);
var state_16609__$1 = (function (){var statearr_16773 = state_16609;
(statearr_16773[(14)] = inst_16445);

(statearr_16773[(15)] = inst_16446);

(statearr_16773[(16)] = inst_16447);

(statearr_16773[(17)] = inst_16448);

return statearr_16773;
})();
var statearr_16774_19912 = state_16609__$1;
(statearr_16774_19912[(2)] = null);

(statearr_16774_19912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (11))){
var inst_16445 = (state_16609[(14)]);
var inst_16474 = (state_16609[(7)]);
var inst_16474__$1 = cljs.core.seq(inst_16445);
var state_16609__$1 = (function (){var statearr_16775 = state_16609;
(statearr_16775[(7)] = inst_16474__$1);

return statearr_16775;
})();
if(inst_16474__$1){
var statearr_16776_19913 = state_16609__$1;
(statearr_16776_19913[(1)] = (16));

} else {
var statearr_16777_19914 = state_16609__$1;
(statearr_16777_19914[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (9))){
var inst_16508 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16780_19915 = state_16609__$1;
(statearr_16780_19915[(2)] = inst_16508);

(statearr_16780_19915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (5))){
var inst_16439 = cljs.core.deref(cs);
var inst_16440 = cljs.core.seq(inst_16439);
var inst_16445 = inst_16440;
var inst_16446 = null;
var inst_16447 = (0);
var inst_16448 = (0);
var state_16609__$1 = (function (){var statearr_16782 = state_16609;
(statearr_16782[(14)] = inst_16445);

(statearr_16782[(15)] = inst_16446);

(statearr_16782[(16)] = inst_16447);

(statearr_16782[(17)] = inst_16448);

return statearr_16782;
})();
var statearr_16786_19920 = state_16609__$1;
(statearr_16786_19920[(2)] = null);

(statearr_16786_19920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (14))){
var state_16609__$1 = state_16609;
var statearr_16787_19921 = state_16609__$1;
(statearr_16787_19921[(2)] = null);

(statearr_16787_19921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (45))){
var inst_16588 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16791_19922 = state_16609__$1;
(statearr_16791_19922[(2)] = inst_16588);

(statearr_16791_19922[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (26))){
var inst_16511 = (state_16609[(27)]);
var inst_16584 = (state_16609[(2)]);
var inst_16585 = cljs.core.seq(inst_16511);
var state_16609__$1 = (function (){var statearr_16800 = state_16609;
(statearr_16800[(29)] = inst_16584);

return statearr_16800;
})();
if(inst_16585){
var statearr_16801_19923 = state_16609__$1;
(statearr_16801_19923[(1)] = (42));

} else {
var statearr_16802_19924 = state_16609__$1;
(statearr_16802_19924[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (16))){
var inst_16474 = (state_16609[(7)]);
var inst_16476 = cljs.core.chunked_seq_QMARK_(inst_16474);
var state_16609__$1 = state_16609;
if(inst_16476){
var statearr_16810_19927 = state_16609__$1;
(statearr_16810_19927[(1)] = (19));

} else {
var statearr_16812_19928 = state_16609__$1;
(statearr_16812_19928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (38))){
var inst_16577 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16813_19929 = state_16609__$1;
(statearr_16813_19929[(2)] = inst_16577);

(statearr_16813_19929[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (30))){
var state_16609__$1 = state_16609;
var statearr_16818_19930 = state_16609__$1;
(statearr_16818_19930[(2)] = null);

(statearr_16818_19930[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (10))){
var inst_16446 = (state_16609[(15)]);
var inst_16448 = (state_16609[(17)]);
var inst_16457 = cljs.core._nth(inst_16446,inst_16448);
var inst_16459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16457,(0),null);
var inst_16463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16457,(1),null);
var state_16609__$1 = (function (){var statearr_16825 = state_16609;
(statearr_16825[(24)] = inst_16459);

return statearr_16825;
})();
if(cljs.core.truth_(inst_16463)){
var statearr_16826_19931 = state_16609__$1;
(statearr_16826_19931[(1)] = (13));

} else {
var statearr_16827_19932 = state_16609__$1;
(statearr_16827_19932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (18))){
var inst_16504 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16828_19933 = state_16609__$1;
(statearr_16828_19933[(2)] = inst_16504);

(statearr_16828_19933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (42))){
var state_16609__$1 = state_16609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16609__$1,(45),dchan);
} else {
if((state_val_16610 === (37))){
var inst_16552 = (state_16609[(23)]);
var inst_16567 = (state_16609[(22)]);
var inst_16432 = (state_16609[(12)]);
var inst_16567__$1 = cljs.core.first(inst_16552);
var inst_16568 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16567__$1,inst_16432,done);
var state_16609__$1 = (function (){var statearr_16833 = state_16609;
(statearr_16833[(22)] = inst_16567__$1);

return statearr_16833;
})();
if(cljs.core.truth_(inst_16568)){
var statearr_16835_19934 = state_16609__$1;
(statearr_16835_19934[(1)] = (39));

} else {
var statearr_16836_19935 = state_16609__$1;
(statearr_16836_19935[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (8))){
var inst_16448 = (state_16609[(17)]);
var inst_16447 = (state_16609[(16)]);
var inst_16450 = (inst_16448 < inst_16447);
var inst_16451 = inst_16450;
var state_16609__$1 = state_16609;
if(cljs.core.truth_(inst_16451)){
var statearr_16840_19936 = state_16609__$1;
(statearr_16840_19936[(1)] = (10));

} else {
var statearr_16841_19937 = state_16609__$1;
(statearr_16841_19937[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14118__auto__ = null;
var cljs$core$async$mult_$_state_machine__14118__auto____0 = (function (){
var statearr_16842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16842[(0)] = cljs$core$async$mult_$_state_machine__14118__auto__);

(statearr_16842[(1)] = (1));

return statearr_16842;
});
var cljs$core$async$mult_$_state_machine__14118__auto____1 = (function (state_16609){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_16609);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e16846){var ex__14121__auto__ = e16846;
var statearr_16847_19938 = state_16609;
(statearr_16847_19938[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_16609[(4)]))){
var statearr_16848_19939 = state_16609;
(statearr_16848_19939[(1)] = cljs.core.first((state_16609[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19940 = state_16609;
state_16609 = G__19940;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14118__auto__ = function(state_16609){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14118__auto____1.call(this,state_16609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14118__auto____0;
cljs$core$async$mult_$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14118__auto____1;
return cljs$core$async$mult_$_state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_16849 = f__15182__auto__();
(statearr_16849[(6)] = c__15181__auto___19829);

return statearr_16849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16858 = arguments.length;
switch (G__16858) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19945 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19945(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19946 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19946(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19949 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19949(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19952 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19952(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19953 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19953(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___19954 = arguments.length;
var i__5898__auto___19955 = (0);
while(true){
if((i__5898__auto___19955 < len__5897__auto___19954)){
args__5903__auto__.push((arguments[i__5898__auto___19955]));

var G__19956 = (i__5898__auto___19955 + (1));
i__5898__auto___19955 = G__19956;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16947){
var map__16954 = p__16947;
var map__16954__$1 = cljs.core.__destructure_map(map__16954);
var opts = map__16954__$1;
var statearr_16955_19963 = state;
(statearr_16955_19963[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16956_19966 = state;
(statearr_16956_19966[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_16957_19968 = state;
(statearr_16957_19968[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16940){
var G__16941 = cljs.core.first(seq16940);
var seq16940__$1 = cljs.core.next(seq16940);
var G__16942 = cljs.core.first(seq16940__$1);
var seq16940__$2 = cljs.core.next(seq16940__$1);
var G__16943 = cljs.core.first(seq16940__$2);
var seq16940__$3 = cljs.core.next(seq16940__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16941,G__16942,G__16943,seq16940__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16965 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16966){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16966 = meta16966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16967,meta16966__$1){
var self__ = this;
var _16967__$1 = this;
return (new cljs.core.async.t_cljs$core$async16965(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16966__$1));
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16967){
var self__ = this;
var _16967__$1 = this;
return self__.meta16966;
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16965.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16966","meta16966",-1602129733,null)], null);
}));

(cljs.core.async.t_cljs$core$async16965.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16965");

(cljs.core.async.t_cljs$core$async16965.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16965");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16965.
 */
cljs.core.async.__GT_t_cljs$core$async16965 = (function cljs$core$async$__GT_t_cljs$core$async16965(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16966){
return (new cljs.core.async.t_cljs$core$async16965(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16966));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16965(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15181__auto___19981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_17054){
var state_val_17055 = (state_17054[(1)]);
if((state_val_17055 === (7))){
var inst_17009 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
if(cljs.core.truth_(inst_17009)){
var statearr_17058_19983 = state_17054__$1;
(statearr_17058_19983[(1)] = (8));

} else {
var statearr_17059_19985 = state_17054__$1;
(statearr_17059_19985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (20))){
var inst_17002 = (state_17054[(7)]);
var state_17054__$1 = state_17054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17054__$1,(23),out,inst_17002);
} else {
if((state_val_17055 === (1))){
var inst_16985 = calc_state();
var inst_16986 = cljs.core.__destructure_map(inst_16985);
var inst_16987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16986,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16986,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16986,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16990 = inst_16985;
var state_17054__$1 = (function (){var statearr_17063 = state_17054;
(statearr_17063[(8)] = inst_16987);

(statearr_17063[(9)] = inst_16988);

(statearr_17063[(10)] = inst_16989);

(statearr_17063[(11)] = inst_16990);

return statearr_17063;
})();
var statearr_17064_19992 = state_17054__$1;
(statearr_17064_19992[(2)] = null);

(statearr_17064_19992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (24))){
var inst_16993 = (state_17054[(12)]);
var inst_16990 = inst_16993;
var state_17054__$1 = (function (){var statearr_17065 = state_17054;
(statearr_17065[(11)] = inst_16990);

return statearr_17065;
})();
var statearr_17066_19997 = state_17054__$1;
(statearr_17066_19997[(2)] = null);

(statearr_17066_19997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (4))){
var inst_17002 = (state_17054[(7)]);
var inst_17004 = (state_17054[(13)]);
var inst_17001 = (state_17054[(2)]);
var inst_17002__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17001,(0),null);
var inst_17003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17001,(1),null);
var inst_17004__$1 = (inst_17002__$1 == null);
var state_17054__$1 = (function (){var statearr_17082 = state_17054;
(statearr_17082[(7)] = inst_17002__$1);

(statearr_17082[(14)] = inst_17003);

(statearr_17082[(13)] = inst_17004__$1);

return statearr_17082;
})();
if(cljs.core.truth_(inst_17004__$1)){
var statearr_17083_19998 = state_17054__$1;
(statearr_17083_19998[(1)] = (5));

} else {
var statearr_17084_19999 = state_17054__$1;
(statearr_17084_19999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (15))){
var inst_16994 = (state_17054[(15)]);
var inst_17027 = (state_17054[(16)]);
var inst_17027__$1 = cljs.core.empty_QMARK_(inst_16994);
var state_17054__$1 = (function (){var statearr_17085 = state_17054;
(statearr_17085[(16)] = inst_17027__$1);

return statearr_17085;
})();
if(inst_17027__$1){
var statearr_17086_20001 = state_17054__$1;
(statearr_17086_20001[(1)] = (17));

} else {
var statearr_17087_20002 = state_17054__$1;
(statearr_17087_20002[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (21))){
var inst_16993 = (state_17054[(12)]);
var inst_16990 = inst_16993;
var state_17054__$1 = (function (){var statearr_17099 = state_17054;
(statearr_17099[(11)] = inst_16990);

return statearr_17099;
})();
var statearr_17106_20003 = state_17054__$1;
(statearr_17106_20003[(2)] = null);

(statearr_17106_20003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (13))){
var inst_17016 = (state_17054[(2)]);
var inst_17017 = calc_state();
var inst_16990 = inst_17017;
var state_17054__$1 = (function (){var statearr_17107 = state_17054;
(statearr_17107[(17)] = inst_17016);

(statearr_17107[(11)] = inst_16990);

return statearr_17107;
})();
var statearr_17114_20004 = state_17054__$1;
(statearr_17114_20004[(2)] = null);

(statearr_17114_20004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (22))){
var inst_17047 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
var statearr_17115_20005 = state_17054__$1;
(statearr_17115_20005[(2)] = inst_17047);

(statearr_17115_20005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (6))){
var inst_17003 = (state_17054[(14)]);
var inst_17007 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17003,change);
var state_17054__$1 = state_17054;
var statearr_17144_20006 = state_17054__$1;
(statearr_17144_20006[(2)] = inst_17007);

(statearr_17144_20006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (25))){
var state_17054__$1 = state_17054;
var statearr_17145_20007 = state_17054__$1;
(statearr_17145_20007[(2)] = null);

(statearr_17145_20007[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (17))){
var inst_16995 = (state_17054[(18)]);
var inst_17003 = (state_17054[(14)]);
var inst_17029 = (inst_16995.cljs$core$IFn$_invoke$arity$1 ? inst_16995.cljs$core$IFn$_invoke$arity$1(inst_17003) : inst_16995.call(null,inst_17003));
var inst_17030 = cljs.core.not(inst_17029);
var state_17054__$1 = state_17054;
var statearr_17148_20009 = state_17054__$1;
(statearr_17148_20009[(2)] = inst_17030);

(statearr_17148_20009[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (3))){
var inst_17051 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17054__$1,inst_17051);
} else {
if((state_val_17055 === (12))){
var state_17054__$1 = state_17054;
var statearr_17163_20011 = state_17054__$1;
(statearr_17163_20011[(2)] = null);

(statearr_17163_20011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (2))){
var inst_16990 = (state_17054[(11)]);
var inst_16993 = (state_17054[(12)]);
var inst_16993__$1 = cljs.core.__destructure_map(inst_16990);
var inst_16994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16993__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16993__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16993__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17054__$1 = (function (){var statearr_17164 = state_17054;
(statearr_17164[(12)] = inst_16993__$1);

(statearr_17164[(15)] = inst_16994);

(statearr_17164[(18)] = inst_16995);

return statearr_17164;
})();
return cljs.core.async.ioc_alts_BANG_(state_17054__$1,(4),inst_16996);
} else {
if((state_val_17055 === (23))){
var inst_17038 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
if(cljs.core.truth_(inst_17038)){
var statearr_17177_20012 = state_17054__$1;
(statearr_17177_20012[(1)] = (24));

} else {
var statearr_17178_20013 = state_17054__$1;
(statearr_17178_20013[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (19))){
var inst_17033 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
var statearr_17182_20014 = state_17054__$1;
(statearr_17182_20014[(2)] = inst_17033);

(statearr_17182_20014[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (11))){
var inst_17003 = (state_17054[(14)]);
var inst_17013 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17003);
var state_17054__$1 = state_17054;
var statearr_17183_20015 = state_17054__$1;
(statearr_17183_20015[(2)] = inst_17013);

(statearr_17183_20015[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (9))){
var inst_16994 = (state_17054[(15)]);
var inst_17003 = (state_17054[(14)]);
var inst_17020 = (state_17054[(19)]);
var inst_17020__$1 = (inst_16994.cljs$core$IFn$_invoke$arity$1 ? inst_16994.cljs$core$IFn$_invoke$arity$1(inst_17003) : inst_16994.call(null,inst_17003));
var state_17054__$1 = (function (){var statearr_17184 = state_17054;
(statearr_17184[(19)] = inst_17020__$1);

return statearr_17184;
})();
if(cljs.core.truth_(inst_17020__$1)){
var statearr_17186_20020 = state_17054__$1;
(statearr_17186_20020[(1)] = (14));

} else {
var statearr_17187_20021 = state_17054__$1;
(statearr_17187_20021[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (5))){
var inst_17004 = (state_17054[(13)]);
var state_17054__$1 = state_17054;
var statearr_17188_20022 = state_17054__$1;
(statearr_17188_20022[(2)] = inst_17004);

(statearr_17188_20022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (14))){
var inst_17020 = (state_17054[(19)]);
var state_17054__$1 = state_17054;
var statearr_17189_20023 = state_17054__$1;
(statearr_17189_20023[(2)] = inst_17020);

(statearr_17189_20023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (26))){
var inst_17043 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
var statearr_17192_20024 = state_17054__$1;
(statearr_17192_20024[(2)] = inst_17043);

(statearr_17192_20024[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (16))){
var inst_17035 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
if(cljs.core.truth_(inst_17035)){
var statearr_17194_20025 = state_17054__$1;
(statearr_17194_20025[(1)] = (20));

} else {
var statearr_17195_20026 = state_17054__$1;
(statearr_17195_20026[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (10))){
var inst_17049 = (state_17054[(2)]);
var state_17054__$1 = state_17054;
var statearr_17197_20027 = state_17054__$1;
(statearr_17197_20027[(2)] = inst_17049);

(statearr_17197_20027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (18))){
var inst_17027 = (state_17054[(16)]);
var state_17054__$1 = state_17054;
var statearr_17198_20028 = state_17054__$1;
(statearr_17198_20028[(2)] = inst_17027);

(statearr_17198_20028[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17055 === (8))){
var inst_17002 = (state_17054[(7)]);
var inst_17011 = (inst_17002 == null);
var state_17054__$1 = state_17054;
if(cljs.core.truth_(inst_17011)){
var statearr_17199_20030 = state_17054__$1;
(statearr_17199_20030[(1)] = (11));

} else {
var statearr_17200_20031 = state_17054__$1;
(statearr_17200_20031[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14118__auto__ = null;
var cljs$core$async$mix_$_state_machine__14118__auto____0 = (function (){
var statearr_17201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17201[(0)] = cljs$core$async$mix_$_state_machine__14118__auto__);

(statearr_17201[(1)] = (1));

return statearr_17201;
});
var cljs$core$async$mix_$_state_machine__14118__auto____1 = (function (state_17054){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_17054);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e17202){var ex__14121__auto__ = e17202;
var statearr_17203_20035 = state_17054;
(statearr_17203_20035[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_17054[(4)]))){
var statearr_17204_20036 = state_17054;
(statearr_17204_20036[(1)] = cljs.core.first((state_17054[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20037 = state_17054;
state_17054 = G__20037;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14118__auto__ = function(state_17054){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14118__auto____1.call(this,state_17054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14118__auto____0;
cljs$core$async$mix_$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14118__auto____1;
return cljs$core$async$mix_$_state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_17205 = f__15182__auto__();
(statearr_17205[(6)] = c__15181__auto___19981);

return statearr_17205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20038 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20038(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20042 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20042(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20044 = (function() {
var G__20045 = null;
var G__20045__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20045__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20045 = function(p,v){
switch(arguments.length){
case 1:
return G__20045__1.call(this,p);
case 2:
return G__20045__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20045.cljs$core$IFn$_invoke$arity$1 = G__20045__1;
G__20045.cljs$core$IFn$_invoke$arity$2 = G__20045__2;
return G__20045;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17236 = arguments.length;
switch (G__17236) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20044(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20044(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17247 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17248){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17248 = meta17248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17249,meta17248__$1){
var self__ = this;
var _17249__$1 = this;
return (new cljs.core.async.t_cljs$core$async17247(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17248__$1));
}));

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17249){
var self__ = this;
var _17249__$1 = this;
return self__.meta17248;
}));

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17248","meta17248",-76688256,null)], null);
}));

(cljs.core.async.t_cljs$core$async17247.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17247");

(cljs.core.async.t_cljs$core$async17247.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async17247");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17247.
 */
cljs.core.async.__GT_t_cljs$core$async17247 = (function cljs$core$async$__GT_t_cljs$core$async17247(ch,topic_fn,buf_fn,mults,ensure_mult,meta17248){
return (new cljs.core.async.t_cljs$core$async17247(ch,topic_fn,buf_fn,mults,ensure_mult,meta17248));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17240 = arguments.length;
switch (G__17240) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17238_SHARP_){
if(cljs.core.truth_((p1__17238_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17238_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17238_SHARP_.call(null,topic)))){
return p1__17238_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17238_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17247(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15181__auto___20058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_17351){
var state_val_17352 = (state_17351[(1)]);
if((state_val_17352 === (7))){
var inst_17347 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17358_20061 = state_17351__$1;
(statearr_17358_20061[(2)] = inst_17347);

(statearr_17358_20061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (20))){
var state_17351__$1 = state_17351;
var statearr_17363_20062 = state_17351__$1;
(statearr_17363_20062[(2)] = null);

(statearr_17363_20062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (1))){
var state_17351__$1 = state_17351;
var statearr_17364_20065 = state_17351__$1;
(statearr_17364_20065[(2)] = null);

(statearr_17364_20065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (24))){
var inst_17330 = (state_17351[(7)]);
var inst_17339 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17330);
var state_17351__$1 = state_17351;
var statearr_17368_20066 = state_17351__$1;
(statearr_17368_20066[(2)] = inst_17339);

(statearr_17368_20066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (4))){
var inst_17269 = (state_17351[(8)]);
var inst_17269__$1 = (state_17351[(2)]);
var inst_17270 = (inst_17269__$1 == null);
var state_17351__$1 = (function (){var statearr_17369 = state_17351;
(statearr_17369[(8)] = inst_17269__$1);

return statearr_17369;
})();
if(cljs.core.truth_(inst_17270)){
var statearr_17370_20067 = state_17351__$1;
(statearr_17370_20067[(1)] = (5));

} else {
var statearr_17371_20068 = state_17351__$1;
(statearr_17371_20068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (15))){
var inst_17320 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17390_20069 = state_17351__$1;
(statearr_17390_20069[(2)] = inst_17320);

(statearr_17390_20069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (21))){
var inst_17344 = (state_17351[(2)]);
var state_17351__$1 = (function (){var statearr_17409 = state_17351;
(statearr_17409[(9)] = inst_17344);

return statearr_17409;
})();
var statearr_17410_20072 = state_17351__$1;
(statearr_17410_20072[(2)] = null);

(statearr_17410_20072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (13))){
var inst_17294 = (state_17351[(10)]);
var inst_17296 = cljs.core.chunked_seq_QMARK_(inst_17294);
var state_17351__$1 = state_17351;
if(inst_17296){
var statearr_17417_20074 = state_17351__$1;
(statearr_17417_20074[(1)] = (16));

} else {
var statearr_17418_20075 = state_17351__$1;
(statearr_17418_20075[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (22))){
var inst_17336 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
if(cljs.core.truth_(inst_17336)){
var statearr_17425_20079 = state_17351__$1;
(statearr_17425_20079[(1)] = (23));

} else {
var statearr_17428_20080 = state_17351__$1;
(statearr_17428_20080[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (6))){
var inst_17269 = (state_17351[(8)]);
var inst_17330 = (state_17351[(7)]);
var inst_17332 = (state_17351[(11)]);
var inst_17330__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17269) : topic_fn.call(null,inst_17269));
var inst_17331 = cljs.core.deref(mults);
var inst_17332__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17331,inst_17330__$1);
var state_17351__$1 = (function (){var statearr_17442 = state_17351;
(statearr_17442[(7)] = inst_17330__$1);

(statearr_17442[(11)] = inst_17332__$1);

return statearr_17442;
})();
if(cljs.core.truth_(inst_17332__$1)){
var statearr_17446_20082 = state_17351__$1;
(statearr_17446_20082[(1)] = (19));

} else {
var statearr_17447_20083 = state_17351__$1;
(statearr_17447_20083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (25))){
var inst_17341 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17451_20084 = state_17351__$1;
(statearr_17451_20084[(2)] = inst_17341);

(statearr_17451_20084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (17))){
var inst_17294 = (state_17351[(10)]);
var inst_17307 = cljs.core.first(inst_17294);
var inst_17308 = cljs.core.async.muxch_STAR_(inst_17307);
var inst_17313 = cljs.core.async.close_BANG_(inst_17308);
var inst_17314 = cljs.core.next(inst_17294);
var inst_17280 = inst_17314;
var inst_17281 = null;
var inst_17282 = (0);
var inst_17283 = (0);
var state_17351__$1 = (function (){var statearr_17454 = state_17351;
(statearr_17454[(12)] = inst_17313);

(statearr_17454[(13)] = inst_17280);

(statearr_17454[(14)] = inst_17281);

(statearr_17454[(15)] = inst_17282);

(statearr_17454[(16)] = inst_17283);

return statearr_17454;
})();
var statearr_17460_20087 = state_17351__$1;
(statearr_17460_20087[(2)] = null);

(statearr_17460_20087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (3))){
var inst_17349 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17351__$1,inst_17349);
} else {
if((state_val_17352 === (12))){
var inst_17322 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17469_20088 = state_17351__$1;
(statearr_17469_20088[(2)] = inst_17322);

(statearr_17469_20088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (2))){
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17351__$1,(4),ch);
} else {
if((state_val_17352 === (23))){
var state_17351__$1 = state_17351;
var statearr_17471_20089 = state_17351__$1;
(statearr_17471_20089[(2)] = null);

(statearr_17471_20089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (19))){
var inst_17332 = (state_17351[(11)]);
var inst_17269 = (state_17351[(8)]);
var inst_17334 = cljs.core.async.muxch_STAR_(inst_17332);
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17351__$1,(22),inst_17334,inst_17269);
} else {
if((state_val_17352 === (11))){
var inst_17280 = (state_17351[(13)]);
var inst_17294 = (state_17351[(10)]);
var inst_17294__$1 = cljs.core.seq(inst_17280);
var state_17351__$1 = (function (){var statearr_17483 = state_17351;
(statearr_17483[(10)] = inst_17294__$1);

return statearr_17483;
})();
if(inst_17294__$1){
var statearr_17489_20090 = state_17351__$1;
(statearr_17489_20090[(1)] = (13));

} else {
var statearr_17491_20091 = state_17351__$1;
(statearr_17491_20091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (9))){
var inst_17324 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17495_20092 = state_17351__$1;
(statearr_17495_20092[(2)] = inst_17324);

(statearr_17495_20092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (5))){
var inst_17276 = cljs.core.deref(mults);
var inst_17277 = cljs.core.vals(inst_17276);
var inst_17278 = cljs.core.seq(inst_17277);
var inst_17280 = inst_17278;
var inst_17281 = null;
var inst_17282 = (0);
var inst_17283 = (0);
var state_17351__$1 = (function (){var statearr_17505 = state_17351;
(statearr_17505[(13)] = inst_17280);

(statearr_17505[(14)] = inst_17281);

(statearr_17505[(15)] = inst_17282);

(statearr_17505[(16)] = inst_17283);

return statearr_17505;
})();
var statearr_17507_20100 = state_17351__$1;
(statearr_17507_20100[(2)] = null);

(statearr_17507_20100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (14))){
var state_17351__$1 = state_17351;
var statearr_17512_20101 = state_17351__$1;
(statearr_17512_20101[(2)] = null);

(statearr_17512_20101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (16))){
var inst_17294 = (state_17351[(10)]);
var inst_17298 = cljs.core.chunk_first(inst_17294);
var inst_17299 = cljs.core.chunk_rest(inst_17294);
var inst_17304 = cljs.core.count(inst_17298);
var inst_17280 = inst_17299;
var inst_17281 = inst_17298;
var inst_17282 = inst_17304;
var inst_17283 = (0);
var state_17351__$1 = (function (){var statearr_17515 = state_17351;
(statearr_17515[(13)] = inst_17280);

(statearr_17515[(14)] = inst_17281);

(statearr_17515[(15)] = inst_17282);

(statearr_17515[(16)] = inst_17283);

return statearr_17515;
})();
var statearr_17516_20102 = state_17351__$1;
(statearr_17516_20102[(2)] = null);

(statearr_17516_20102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (10))){
var inst_17281 = (state_17351[(14)]);
var inst_17283 = (state_17351[(16)]);
var inst_17280 = (state_17351[(13)]);
var inst_17282 = (state_17351[(15)]);
var inst_17288 = cljs.core._nth(inst_17281,inst_17283);
var inst_17289 = cljs.core.async.muxch_STAR_(inst_17288);
var inst_17290 = cljs.core.async.close_BANG_(inst_17289);
var inst_17291 = (inst_17283 + (1));
var tmp17508 = inst_17282;
var tmp17510 = inst_17280;
var tmp17511 = inst_17281;
var inst_17280__$1 = tmp17510;
var inst_17281__$1 = tmp17511;
var inst_17282__$1 = tmp17508;
var inst_17283__$1 = inst_17291;
var state_17351__$1 = (function (){var statearr_17517 = state_17351;
(statearr_17517[(17)] = inst_17290);

(statearr_17517[(13)] = inst_17280__$1);

(statearr_17517[(14)] = inst_17281__$1);

(statearr_17517[(15)] = inst_17282__$1);

(statearr_17517[(16)] = inst_17283__$1);

return statearr_17517;
})();
var statearr_17518_20107 = state_17351__$1;
(statearr_17518_20107[(2)] = null);

(statearr_17518_20107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (18))){
var inst_17317 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17519_20117 = state_17351__$1;
(statearr_17519_20117[(2)] = inst_17317);

(statearr_17519_20117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (8))){
var inst_17283 = (state_17351[(16)]);
var inst_17282 = (state_17351[(15)]);
var inst_17285 = (inst_17283 < inst_17282);
var inst_17286 = inst_17285;
var state_17351__$1 = state_17351;
if(cljs.core.truth_(inst_17286)){
var statearr_17520_20119 = state_17351__$1;
(statearr_17520_20119[(1)] = (10));

} else {
var statearr_17521_20120 = state_17351__$1;
(statearr_17521_20120[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14118__auto__ = null;
var cljs$core$async$state_machine__14118__auto____0 = (function (){
var statearr_17523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17523[(0)] = cljs$core$async$state_machine__14118__auto__);

(statearr_17523[(1)] = (1));

return statearr_17523;
});
var cljs$core$async$state_machine__14118__auto____1 = (function (state_17351){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_17351);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e17525){var ex__14121__auto__ = e17525;
var statearr_17526_20121 = state_17351;
(statearr_17526_20121[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_17351[(4)]))){
var statearr_17527_20122 = state_17351;
(statearr_17527_20122[(1)] = cljs.core.first((state_17351[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20124 = state_17351;
state_17351 = G__20124;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$state_machine__14118__auto__ = function(state_17351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14118__auto____1.call(this,state_17351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14118__auto____0;
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14118__auto____1;
return cljs$core$async$state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_17528 = f__15182__auto__();
(statearr_17528[(6)] = c__15181__auto___20058);

return statearr_17528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17530 = arguments.length;
switch (G__17530) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17547 = arguments.length;
switch (G__17547) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17553 = arguments.length;
switch (G__17553) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15181__auto___20136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_17646){
var state_val_17648 = (state_17646[(1)]);
if((state_val_17648 === (7))){
var state_17646__$1 = state_17646;
var statearr_17652_20138 = state_17646__$1;
(statearr_17652_20138[(2)] = null);

(statearr_17652_20138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (1))){
var state_17646__$1 = state_17646;
var statearr_17653_20139 = state_17646__$1;
(statearr_17653_20139[(2)] = null);

(statearr_17653_20139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (4))){
var inst_17592 = (state_17646[(7)]);
var inst_17591 = (state_17646[(8)]);
var inst_17594 = (inst_17592 < inst_17591);
var state_17646__$1 = state_17646;
if(cljs.core.truth_(inst_17594)){
var statearr_17660_20140 = state_17646__$1;
(statearr_17660_20140[(1)] = (6));

} else {
var statearr_17661_20141 = state_17646__$1;
(statearr_17661_20141[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (15))){
var inst_17624 = (state_17646[(9)]);
var inst_17632 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17624);
var state_17646__$1 = state_17646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17646__$1,(17),out,inst_17632);
} else {
if((state_val_17648 === (13))){
var inst_17624 = (state_17646[(9)]);
var inst_17624__$1 = (state_17646[(2)]);
var inst_17625 = cljs.core.some(cljs.core.nil_QMARK_,inst_17624__$1);
var state_17646__$1 = (function (){var statearr_17666 = state_17646;
(statearr_17666[(9)] = inst_17624__$1);

return statearr_17666;
})();
if(cljs.core.truth_(inst_17625)){
var statearr_17667_20144 = state_17646__$1;
(statearr_17667_20144[(1)] = (14));

} else {
var statearr_17668_20145 = state_17646__$1;
(statearr_17668_20145[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (6))){
var state_17646__$1 = state_17646;
var statearr_17675_20146 = state_17646__$1;
(statearr_17675_20146[(2)] = null);

(statearr_17675_20146[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (17))){
var inst_17634 = (state_17646[(2)]);
var state_17646__$1 = (function (){var statearr_17698 = state_17646;
(statearr_17698[(10)] = inst_17634);

return statearr_17698;
})();
var statearr_17711_20147 = state_17646__$1;
(statearr_17711_20147[(2)] = null);

(statearr_17711_20147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (3))){
var inst_17642 = (state_17646[(2)]);
var state_17646__$1 = state_17646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17646__$1,inst_17642);
} else {
if((state_val_17648 === (12))){
var _ = (function (){var statearr_17713 = state_17646;
(statearr_17713[(4)] = cljs.core.rest((state_17646[(4)])));

return statearr_17713;
})();
var state_17646__$1 = state_17646;
var ex17696 = (state_17646__$1[(2)]);
var statearr_17714_20150 = state_17646__$1;
(statearr_17714_20150[(5)] = ex17696);


if((ex17696 instanceof Object)){
var statearr_17715_20151 = state_17646__$1;
(statearr_17715_20151[(1)] = (11));

(statearr_17715_20151[(5)] = null);

} else {
throw ex17696;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (2))){
var inst_17590 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17591 = cnt;
var inst_17592 = (0);
var state_17646__$1 = (function (){var statearr_17726 = state_17646;
(statearr_17726[(11)] = inst_17590);

(statearr_17726[(8)] = inst_17591);

(statearr_17726[(7)] = inst_17592);

return statearr_17726;
})();
var statearr_17727_20154 = state_17646__$1;
(statearr_17727_20154[(2)] = null);

(statearr_17727_20154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (11))){
var inst_17601 = (state_17646[(2)]);
var inst_17602 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17646__$1 = (function (){var statearr_17731 = state_17646;
(statearr_17731[(12)] = inst_17601);

return statearr_17731;
})();
var statearr_17733_20156 = state_17646__$1;
(statearr_17733_20156[(2)] = inst_17602);

(statearr_17733_20156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (9))){
var inst_17592 = (state_17646[(7)]);
var _ = (function (){var statearr_17736 = state_17646;
(statearr_17736[(4)] = cljs.core.cons((12),(state_17646[(4)])));

return statearr_17736;
})();
var inst_17608 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17592) : chs__$1.call(null,inst_17592));
var inst_17609 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17592) : done.call(null,inst_17592));
var inst_17610 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17608,inst_17609);
var ___$1 = (function (){var statearr_17739 = state_17646;
(statearr_17739[(4)] = cljs.core.rest((state_17646[(4)])));

return statearr_17739;
})();
var state_17646__$1 = state_17646;
var statearr_17741_20158 = state_17646__$1;
(statearr_17741_20158[(2)] = inst_17610);

(statearr_17741_20158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (5))){
var inst_17620 = (state_17646[(2)]);
var state_17646__$1 = (function (){var statearr_17749 = state_17646;
(statearr_17749[(13)] = inst_17620);

return statearr_17749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17646__$1,(13),dchan);
} else {
if((state_val_17648 === (14))){
var inst_17629 = cljs.core.async.close_BANG_(out);
var state_17646__$1 = state_17646;
var statearr_17758_20160 = state_17646__$1;
(statearr_17758_20160[(2)] = inst_17629);

(statearr_17758_20160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (16))){
var inst_17640 = (state_17646[(2)]);
var state_17646__$1 = state_17646;
var statearr_17760_20162 = state_17646__$1;
(statearr_17760_20162[(2)] = inst_17640);

(statearr_17760_20162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (10))){
var inst_17592 = (state_17646[(7)]);
var inst_17613 = (state_17646[(2)]);
var inst_17614 = (inst_17592 + (1));
var inst_17592__$1 = inst_17614;
var state_17646__$1 = (function (){var statearr_17764 = state_17646;
(statearr_17764[(14)] = inst_17613);

(statearr_17764[(7)] = inst_17592__$1);

return statearr_17764;
})();
var statearr_17765_20163 = state_17646__$1;
(statearr_17765_20163[(2)] = null);

(statearr_17765_20163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (8))){
var inst_17618 = (state_17646[(2)]);
var state_17646__$1 = state_17646;
var statearr_17766_20164 = state_17646__$1;
(statearr_17766_20164[(2)] = inst_17618);

(statearr_17766_20164[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14118__auto__ = null;
var cljs$core$async$state_machine__14118__auto____0 = (function (){
var statearr_17770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17770[(0)] = cljs$core$async$state_machine__14118__auto__);

(statearr_17770[(1)] = (1));

return statearr_17770;
});
var cljs$core$async$state_machine__14118__auto____1 = (function (state_17646){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_17646);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e17775){var ex__14121__auto__ = e17775;
var statearr_17776_20167 = state_17646;
(statearr_17776_20167[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_17646[(4)]))){
var statearr_17777_20168 = state_17646;
(statearr_17777_20168[(1)] = cljs.core.first((state_17646[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20169 = state_17646;
state_17646 = G__20169;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$state_machine__14118__auto__ = function(state_17646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14118__auto____1.call(this,state_17646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14118__auto____0;
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14118__auto____1;
return cljs$core$async$state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_17782 = f__15182__auto__();
(statearr_17782[(6)] = c__15181__auto___20136);

return statearr_17782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17792 = arguments.length;
switch (G__17792) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15181__auto___20171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_17845){
var state_val_17846 = (state_17845[(1)]);
if((state_val_17846 === (7))){
var inst_17819 = (state_17845[(7)]);
var inst_17820 = (state_17845[(8)]);
var inst_17819__$1 = (state_17845[(2)]);
var inst_17820__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17819__$1,(0),null);
var inst_17821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17819__$1,(1),null);
var inst_17822 = (inst_17820__$1 == null);
var state_17845__$1 = (function (){var statearr_17859 = state_17845;
(statearr_17859[(7)] = inst_17819__$1);

(statearr_17859[(8)] = inst_17820__$1);

(statearr_17859[(9)] = inst_17821);

return statearr_17859;
})();
if(cljs.core.truth_(inst_17822)){
var statearr_17860_20172 = state_17845__$1;
(statearr_17860_20172[(1)] = (8));

} else {
var statearr_17861_20173 = state_17845__$1;
(statearr_17861_20173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (1))){
var inst_17809 = cljs.core.vec(chs);
var inst_17810 = inst_17809;
var state_17845__$1 = (function (){var statearr_17864 = state_17845;
(statearr_17864[(10)] = inst_17810);

return statearr_17864;
})();
var statearr_17865_20174 = state_17845__$1;
(statearr_17865_20174[(2)] = null);

(statearr_17865_20174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (4))){
var inst_17810 = (state_17845[(10)]);
var state_17845__$1 = state_17845;
return cljs.core.async.ioc_alts_BANG_(state_17845__$1,(7),inst_17810);
} else {
if((state_val_17846 === (6))){
var inst_17839 = (state_17845[(2)]);
var state_17845__$1 = state_17845;
var statearr_17871_20176 = state_17845__$1;
(statearr_17871_20176[(2)] = inst_17839);

(statearr_17871_20176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (3))){
var inst_17841 = (state_17845[(2)]);
var state_17845__$1 = state_17845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17845__$1,inst_17841);
} else {
if((state_val_17846 === (2))){
var inst_17810 = (state_17845[(10)]);
var inst_17812 = cljs.core.count(inst_17810);
var inst_17813 = (inst_17812 > (0));
var state_17845__$1 = state_17845;
if(cljs.core.truth_(inst_17813)){
var statearr_17883_20177 = state_17845__$1;
(statearr_17883_20177[(1)] = (4));

} else {
var statearr_17885_20178 = state_17845__$1;
(statearr_17885_20178[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (11))){
var inst_17810 = (state_17845[(10)]);
var inst_17830 = (state_17845[(2)]);
var tmp17882 = inst_17810;
var inst_17810__$1 = tmp17882;
var state_17845__$1 = (function (){var statearr_17890 = state_17845;
(statearr_17890[(11)] = inst_17830);

(statearr_17890[(10)] = inst_17810__$1);

return statearr_17890;
})();
var statearr_17894_20179 = state_17845__$1;
(statearr_17894_20179[(2)] = null);

(statearr_17894_20179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (9))){
var inst_17820 = (state_17845[(8)]);
var state_17845__$1 = state_17845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17845__$1,(11),out,inst_17820);
} else {
if((state_val_17846 === (5))){
var inst_17837 = cljs.core.async.close_BANG_(out);
var state_17845__$1 = state_17845;
var statearr_17904_20180 = state_17845__$1;
(statearr_17904_20180[(2)] = inst_17837);

(statearr_17904_20180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (10))){
var inst_17833 = (state_17845[(2)]);
var state_17845__$1 = state_17845;
var statearr_17906_20181 = state_17845__$1;
(statearr_17906_20181[(2)] = inst_17833);

(statearr_17906_20181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17846 === (8))){
var inst_17810 = (state_17845[(10)]);
var inst_17819 = (state_17845[(7)]);
var inst_17820 = (state_17845[(8)]);
var inst_17821 = (state_17845[(9)]);
var inst_17824 = (function (){var cs = inst_17810;
var vec__17815 = inst_17819;
var v = inst_17820;
var c = inst_17821;
return (function (p1__17783_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17783_SHARP_);
});
})();
var inst_17826 = cljs.core.filterv(inst_17824,inst_17810);
var inst_17810__$1 = inst_17826;
var state_17845__$1 = (function (){var statearr_17918 = state_17845;
(statearr_17918[(10)] = inst_17810__$1);

return statearr_17918;
})();
var statearr_17919_20182 = state_17845__$1;
(statearr_17919_20182[(2)] = null);

(statearr_17919_20182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14118__auto__ = null;
var cljs$core$async$state_machine__14118__auto____0 = (function (){
var statearr_17922 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17922[(0)] = cljs$core$async$state_machine__14118__auto__);

(statearr_17922[(1)] = (1));

return statearr_17922;
});
var cljs$core$async$state_machine__14118__auto____1 = (function (state_17845){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_17845);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e17924){var ex__14121__auto__ = e17924;
var statearr_17925_20184 = state_17845;
(statearr_17925_20184[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_17845[(4)]))){
var statearr_17929_20185 = state_17845;
(statearr_17929_20185[(1)] = cljs.core.first((state_17845[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20186 = state_17845;
state_17845 = G__20186;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$state_machine__14118__auto__ = function(state_17845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14118__auto____1.call(this,state_17845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14118__auto____0;
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14118__auto____1;
return cljs$core$async$state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_17932 = f__15182__auto__();
(statearr_17932[(6)] = c__15181__auto___20171);

return statearr_17932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17944 = arguments.length;
switch (G__17944) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15181__auto___20190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_17973){
var state_val_17974 = (state_17973[(1)]);
if((state_val_17974 === (7))){
var inst_17953 = (state_17973[(7)]);
var inst_17953__$1 = (state_17973[(2)]);
var inst_17954 = (inst_17953__$1 == null);
var inst_17955 = cljs.core.not(inst_17954);
var state_17973__$1 = (function (){var statearr_17993 = state_17973;
(statearr_17993[(7)] = inst_17953__$1);

return statearr_17993;
})();
if(inst_17955){
var statearr_17994_20191 = state_17973__$1;
(statearr_17994_20191[(1)] = (8));

} else {
var statearr_17995_20192 = state_17973__$1;
(statearr_17995_20192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (1))){
var inst_17947 = (0);
var state_17973__$1 = (function (){var statearr_17996 = state_17973;
(statearr_17996[(8)] = inst_17947);

return statearr_17996;
})();
var statearr_17997_20193 = state_17973__$1;
(statearr_17997_20193[(2)] = null);

(statearr_17997_20193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (4))){
var state_17973__$1 = state_17973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17973__$1,(7),ch);
} else {
if((state_val_17974 === (6))){
var inst_17967 = (state_17973[(2)]);
var state_17973__$1 = state_17973;
var statearr_18002_20194 = state_17973__$1;
(statearr_18002_20194[(2)] = inst_17967);

(statearr_18002_20194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (3))){
var inst_17969 = (state_17973[(2)]);
var inst_17970 = cljs.core.async.close_BANG_(out);
var state_17973__$1 = (function (){var statearr_18009 = state_17973;
(statearr_18009[(9)] = inst_17969);

return statearr_18009;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17973__$1,inst_17970);
} else {
if((state_val_17974 === (2))){
var inst_17947 = (state_17973[(8)]);
var inst_17949 = (inst_17947 < n);
var state_17973__$1 = state_17973;
if(cljs.core.truth_(inst_17949)){
var statearr_18013_20195 = state_17973__$1;
(statearr_18013_20195[(1)] = (4));

} else {
var statearr_18014_20196 = state_17973__$1;
(statearr_18014_20196[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (11))){
var inst_17947 = (state_17973[(8)]);
var inst_17959 = (state_17973[(2)]);
var inst_17960 = (inst_17947 + (1));
var inst_17947__$1 = inst_17960;
var state_17973__$1 = (function (){var statearr_18017 = state_17973;
(statearr_18017[(10)] = inst_17959);

(statearr_18017[(8)] = inst_17947__$1);

return statearr_18017;
})();
var statearr_18018_20197 = state_17973__$1;
(statearr_18018_20197[(2)] = null);

(statearr_18018_20197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (9))){
var state_17973__$1 = state_17973;
var statearr_18019_20198 = state_17973__$1;
(statearr_18019_20198[(2)] = null);

(statearr_18019_20198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (5))){
var state_17973__$1 = state_17973;
var statearr_18022_20199 = state_17973__$1;
(statearr_18022_20199[(2)] = null);

(statearr_18022_20199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (10))){
var inst_17964 = (state_17973[(2)]);
var state_17973__$1 = state_17973;
var statearr_18023_20201 = state_17973__$1;
(statearr_18023_20201[(2)] = inst_17964);

(statearr_18023_20201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17974 === (8))){
var inst_17953 = (state_17973[(7)]);
var state_17973__$1 = state_17973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17973__$1,(11),out,inst_17953);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14118__auto__ = null;
var cljs$core$async$state_machine__14118__auto____0 = (function (){
var statearr_18035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18035[(0)] = cljs$core$async$state_machine__14118__auto__);

(statearr_18035[(1)] = (1));

return statearr_18035;
});
var cljs$core$async$state_machine__14118__auto____1 = (function (state_17973){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_17973);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e18037){var ex__14121__auto__ = e18037;
var statearr_18042_20203 = state_17973;
(statearr_18042_20203[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_17973[(4)]))){
var statearr_18043_20204 = state_17973;
(statearr_18043_20204[(1)] = cljs.core.first((state_17973[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20205 = state_17973;
state_17973 = G__20205;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$state_machine__14118__auto__ = function(state_17973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14118__auto____1.call(this,state_17973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14118__auto____0;
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14118__auto____1;
return cljs$core$async$state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_18047 = f__15182__auto__();
(statearr_18047[(6)] = c__15181__auto___20190);

return statearr_18047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18059 = (function (f,ch,meta18050,_,fn1,meta18060){
this.f = f;
this.ch = ch;
this.meta18050 = meta18050;
this._ = _;
this.fn1 = fn1;
this.meta18060 = meta18060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18061,meta18060__$1){
var self__ = this;
var _18061__$1 = this;
return (new cljs.core.async.t_cljs$core$async18059(self__.f,self__.ch,self__.meta18050,self__._,self__.fn1,meta18060__$1));
}));

(cljs.core.async.t_cljs$core$async18059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18061){
var self__ = this;
var _18061__$1 = this;
return self__.meta18060;
}));

(cljs.core.async.t_cljs$core$async18059.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18059.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18059.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18059.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18048_SHARP_){
var G__18088 = (((p1__18048_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18048_SHARP_) : self__.f.call(null,p1__18048_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18088) : f1.call(null,G__18088));
});
}));

(cljs.core.async.t_cljs$core$async18059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18050","meta18050",215511449,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18049","cljs.core.async/t_cljs$core$async18049",2114027328,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18060","meta18060",-1130437812,null)], null);
}));

(cljs.core.async.t_cljs$core$async18059.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18059");

(cljs.core.async.t_cljs$core$async18059.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async18059");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18059.
 */
cljs.core.async.__GT_t_cljs$core$async18059 = (function cljs$core$async$__GT_t_cljs$core$async18059(f,ch,meta18050,_,fn1,meta18060){
return (new cljs.core.async.t_cljs$core$async18059(f,ch,meta18050,_,fn1,meta18060));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18049 = (function (f,ch,meta18050){
this.f = f;
this.ch = ch;
this.meta18050 = meta18050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18051,meta18050__$1){
var self__ = this;
var _18051__$1 = this;
return (new cljs.core.async.t_cljs$core$async18049(self__.f,self__.ch,meta18050__$1));
}));

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18051){
var self__ = this;
var _18051__$1 = this;
return self__.meta18050;
}));

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18059(self__.f,self__.ch,self__.meta18050,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18103 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18103) : self__.f.call(null,G__18103));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18049.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18050","meta18050",215511449,null)], null);
}));

(cljs.core.async.t_cljs$core$async18049.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18049");

(cljs.core.async.t_cljs$core$async18049.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async18049");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18049.
 */
cljs.core.async.__GT_t_cljs$core$async18049 = (function cljs$core$async$__GT_t_cljs$core$async18049(f,ch,meta18050){
return (new cljs.core.async.t_cljs$core$async18049(f,ch,meta18050));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18049(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18130 = (function (f,ch,meta18131){
this.f = f;
this.ch = ch;
this.meta18131 = meta18131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18132,meta18131__$1){
var self__ = this;
var _18132__$1 = this;
return (new cljs.core.async.t_cljs$core$async18130(self__.f,self__.ch,meta18131__$1));
}));

(cljs.core.async.t_cljs$core$async18130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18132){
var self__ = this;
var _18132__$1 = this;
return self__.meta18131;
}));

(cljs.core.async.t_cljs$core$async18130.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18130.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18130.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18131","meta18131",774900050,null)], null);
}));

(cljs.core.async.t_cljs$core$async18130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18130");

(cljs.core.async.t_cljs$core$async18130.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async18130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18130.
 */
cljs.core.async.__GT_t_cljs$core$async18130 = (function cljs$core$async$__GT_t_cljs$core$async18130(f,ch,meta18131){
return (new cljs.core.async.t_cljs$core$async18130(f,ch,meta18131));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18130(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18180 = (function (p,ch,meta18181){
this.p = p;
this.ch = ch;
this.meta18181 = meta18181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18182,meta18181__$1){
var self__ = this;
var _18182__$1 = this;
return (new cljs.core.async.t_cljs$core$async18180(self__.p,self__.ch,meta18181__$1));
}));

(cljs.core.async.t_cljs$core$async18180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18182){
var self__ = this;
var _18182__$1 = this;
return self__.meta18181;
}));

(cljs.core.async.t_cljs$core$async18180.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18180.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18180.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18180.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18180.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18180.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18180.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18181","meta18181",2093719658,null)], null);
}));

(cljs.core.async.t_cljs$core$async18180.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18180");

(cljs.core.async.t_cljs$core$async18180.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async18180");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18180.
 */
cljs.core.async.__GT_t_cljs$core$async18180 = (function cljs$core$async$__GT_t_cljs$core$async18180(p,ch,meta18181){
return (new cljs.core.async.t_cljs$core$async18180(p,ch,meta18181));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18180(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18219 = arguments.length;
switch (G__18219) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15181__auto___20214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_18269){
var state_val_18270 = (state_18269[(1)]);
if((state_val_18270 === (7))){
var inst_18264 = (state_18269[(2)]);
var state_18269__$1 = state_18269;
var statearr_18272_20215 = state_18269__$1;
(statearr_18272_20215[(2)] = inst_18264);

(statearr_18272_20215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18270 === (1))){
var state_18269__$1 = state_18269;
var statearr_18277_20216 = state_18269__$1;
(statearr_18277_20216[(2)] = null);

(statearr_18277_20216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18270 === (4))){
var inst_18243 = (state_18269[(7)]);
var inst_18243__$1 = (state_18269[(2)]);
var inst_18245 = (inst_18243__$1 == null);
var state_18269__$1 = (function (){var statearr_18281 = state_18269;
(statearr_18281[(7)] = inst_18243__$1);

return statearr_18281;
})();
if(cljs.core.truth_(inst_18245)){
var statearr_18285_20217 = state_18269__$1;
(statearr_18285_20217[(1)] = (5));

} else {
var statearr_18289_20218 = state_18269__$1;
(statearr_18289_20218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18270 === (6))){
var inst_18243 = (state_18269[(7)]);
var inst_18252 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18243) : p.call(null,inst_18243));
var state_18269__$1 = state_18269;
if(cljs.core.truth_(inst_18252)){
var statearr_18293_20219 = state_18269__$1;
(statearr_18293_20219[(1)] = (8));

} else {
var statearr_18294_20220 = state_18269__$1;
(statearr_18294_20220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18270 === (3))){
var inst_18266 = (state_18269[(2)]);
var state_18269__$1 = state_18269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18269__$1,inst_18266);
} else {
if((state_val_18270 === (2))){
var state_18269__$1 = state_18269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18269__$1,(4),ch);
} else {
if((state_val_18270 === (11))){
var inst_18256 = (state_18269[(2)]);
var state_18269__$1 = state_18269;
var statearr_18299_20221 = state_18269__$1;
(statearr_18299_20221[(2)] = inst_18256);

(statearr_18299_20221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18270 === (9))){
var state_18269__$1 = state_18269;
var statearr_18300_20222 = state_18269__$1;
(statearr_18300_20222[(2)] = null);

(statearr_18300_20222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18270 === (5))){
var inst_18249 = cljs.core.async.close_BANG_(out);
var state_18269__$1 = state_18269;
var statearr_18302_20223 = state_18269__$1;
(statearr_18302_20223[(2)] = inst_18249);

(statearr_18302_20223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18270 === (10))){
var inst_18259 = (state_18269[(2)]);
var state_18269__$1 = (function (){var statearr_18303 = state_18269;
(statearr_18303[(8)] = inst_18259);

return statearr_18303;
})();
var statearr_18304_20224 = state_18269__$1;
(statearr_18304_20224[(2)] = null);

(statearr_18304_20224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18270 === (8))){
var inst_18243 = (state_18269[(7)]);
var state_18269__$1 = state_18269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18269__$1,(11),out,inst_18243);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14118__auto__ = null;
var cljs$core$async$state_machine__14118__auto____0 = (function (){
var statearr_18305 = [null,null,null,null,null,null,null,null,null];
(statearr_18305[(0)] = cljs$core$async$state_machine__14118__auto__);

(statearr_18305[(1)] = (1));

return statearr_18305;
});
var cljs$core$async$state_machine__14118__auto____1 = (function (state_18269){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_18269);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e18306){var ex__14121__auto__ = e18306;
var statearr_18307_20225 = state_18269;
(statearr_18307_20225[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_18269[(4)]))){
var statearr_18309_20226 = state_18269;
(statearr_18309_20226[(1)] = cljs.core.first((state_18269[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20227 = state_18269;
state_18269 = G__20227;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$state_machine__14118__auto__ = function(state_18269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14118__auto____1.call(this,state_18269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14118__auto____0;
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14118__auto____1;
return cljs$core$async$state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_18310 = f__15182__auto__();
(statearr_18310[(6)] = c__15181__auto___20214);

return statearr_18310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18319 = arguments.length;
switch (G__18319) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15181__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_18426){
var state_val_18427 = (state_18426[(1)]);
if((state_val_18427 === (7))){
var inst_18419 = (state_18426[(2)]);
var state_18426__$1 = state_18426;
var statearr_18430_20230 = state_18426__$1;
(statearr_18430_20230[(2)] = inst_18419);

(statearr_18430_20230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (20))){
var inst_18383 = (state_18426[(7)]);
var inst_18400 = (state_18426[(2)]);
var inst_18401 = cljs.core.next(inst_18383);
var inst_18362 = inst_18401;
var inst_18363 = null;
var inst_18364 = (0);
var inst_18365 = (0);
var state_18426__$1 = (function (){var statearr_18434 = state_18426;
(statearr_18434[(8)] = inst_18400);

(statearr_18434[(9)] = inst_18362);

(statearr_18434[(10)] = inst_18363);

(statearr_18434[(11)] = inst_18364);

(statearr_18434[(12)] = inst_18365);

return statearr_18434;
})();
var statearr_18438_20238 = state_18426__$1;
(statearr_18438_20238[(2)] = null);

(statearr_18438_20238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (1))){
var state_18426__$1 = state_18426;
var statearr_18441_20241 = state_18426__$1;
(statearr_18441_20241[(2)] = null);

(statearr_18441_20241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (4))){
var inst_18350 = (state_18426[(13)]);
var inst_18350__$1 = (state_18426[(2)]);
var inst_18351 = (inst_18350__$1 == null);
var state_18426__$1 = (function (){var statearr_18445 = state_18426;
(statearr_18445[(13)] = inst_18350__$1);

return statearr_18445;
})();
if(cljs.core.truth_(inst_18351)){
var statearr_18446_20245 = state_18426__$1;
(statearr_18446_20245[(1)] = (5));

} else {
var statearr_18447_20246 = state_18426__$1;
(statearr_18447_20246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (15))){
var state_18426__$1 = state_18426;
var statearr_18454_20247 = state_18426__$1;
(statearr_18454_20247[(2)] = null);

(statearr_18454_20247[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (21))){
var state_18426__$1 = state_18426;
var statearr_18455_20248 = state_18426__$1;
(statearr_18455_20248[(2)] = null);

(statearr_18455_20248[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (13))){
var inst_18365 = (state_18426[(12)]);
var inst_18362 = (state_18426[(9)]);
var inst_18363 = (state_18426[(10)]);
var inst_18364 = (state_18426[(11)]);
var inst_18376 = (state_18426[(2)]);
var inst_18379 = (inst_18365 + (1));
var tmp18448 = inst_18364;
var tmp18449 = inst_18363;
var tmp18450 = inst_18362;
var inst_18362__$1 = tmp18450;
var inst_18363__$1 = tmp18449;
var inst_18364__$1 = tmp18448;
var inst_18365__$1 = inst_18379;
var state_18426__$1 = (function (){var statearr_18457 = state_18426;
(statearr_18457[(14)] = inst_18376);

(statearr_18457[(9)] = inst_18362__$1);

(statearr_18457[(10)] = inst_18363__$1);

(statearr_18457[(11)] = inst_18364__$1);

(statearr_18457[(12)] = inst_18365__$1);

return statearr_18457;
})();
var statearr_18458_20249 = state_18426__$1;
(statearr_18458_20249[(2)] = null);

(statearr_18458_20249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (22))){
var state_18426__$1 = state_18426;
var statearr_18459_20250 = state_18426__$1;
(statearr_18459_20250[(2)] = null);

(statearr_18459_20250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (6))){
var inst_18350 = (state_18426[(13)]);
var inst_18360 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18350) : f.call(null,inst_18350));
var inst_18361 = cljs.core.seq(inst_18360);
var inst_18362 = inst_18361;
var inst_18363 = null;
var inst_18364 = (0);
var inst_18365 = (0);
var state_18426__$1 = (function (){var statearr_18460 = state_18426;
(statearr_18460[(9)] = inst_18362);

(statearr_18460[(10)] = inst_18363);

(statearr_18460[(11)] = inst_18364);

(statearr_18460[(12)] = inst_18365);

return statearr_18460;
})();
var statearr_18461_20251 = state_18426__$1;
(statearr_18461_20251[(2)] = null);

(statearr_18461_20251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (17))){
var inst_18383 = (state_18426[(7)]);
var inst_18392 = cljs.core.chunk_first(inst_18383);
var inst_18393 = cljs.core.chunk_rest(inst_18383);
var inst_18395 = cljs.core.count(inst_18392);
var inst_18362 = inst_18393;
var inst_18363 = inst_18392;
var inst_18364 = inst_18395;
var inst_18365 = (0);
var state_18426__$1 = (function (){var statearr_18464 = state_18426;
(statearr_18464[(9)] = inst_18362);

(statearr_18464[(10)] = inst_18363);

(statearr_18464[(11)] = inst_18364);

(statearr_18464[(12)] = inst_18365);

return statearr_18464;
})();
var statearr_18465_20255 = state_18426__$1;
(statearr_18465_20255[(2)] = null);

(statearr_18465_20255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (3))){
var inst_18421 = (state_18426[(2)]);
var state_18426__$1 = state_18426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18426__$1,inst_18421);
} else {
if((state_val_18427 === (12))){
var inst_18409 = (state_18426[(2)]);
var state_18426__$1 = state_18426;
var statearr_18466_20256 = state_18426__$1;
(statearr_18466_20256[(2)] = inst_18409);

(statearr_18466_20256[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (2))){
var state_18426__$1 = state_18426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18426__$1,(4),in$);
} else {
if((state_val_18427 === (23))){
var inst_18417 = (state_18426[(2)]);
var state_18426__$1 = state_18426;
var statearr_18469_20259 = state_18426__$1;
(statearr_18469_20259[(2)] = inst_18417);

(statearr_18469_20259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (19))){
var inst_18404 = (state_18426[(2)]);
var state_18426__$1 = state_18426;
var statearr_18470_20260 = state_18426__$1;
(statearr_18470_20260[(2)] = inst_18404);

(statearr_18470_20260[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (11))){
var inst_18362 = (state_18426[(9)]);
var inst_18383 = (state_18426[(7)]);
var inst_18383__$1 = cljs.core.seq(inst_18362);
var state_18426__$1 = (function (){var statearr_18472 = state_18426;
(statearr_18472[(7)] = inst_18383__$1);

return statearr_18472;
})();
if(inst_18383__$1){
var statearr_18473_20263 = state_18426__$1;
(statearr_18473_20263[(1)] = (14));

} else {
var statearr_18474_20264 = state_18426__$1;
(statearr_18474_20264[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (9))){
var inst_18411 = (state_18426[(2)]);
var inst_18412 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18426__$1 = (function (){var statearr_18475 = state_18426;
(statearr_18475[(15)] = inst_18411);

return statearr_18475;
})();
if(cljs.core.truth_(inst_18412)){
var statearr_18476_20265 = state_18426__$1;
(statearr_18476_20265[(1)] = (21));

} else {
var statearr_18477_20266 = state_18426__$1;
(statearr_18477_20266[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (5))){
var inst_18353 = cljs.core.async.close_BANG_(out);
var state_18426__$1 = state_18426;
var statearr_18479_20269 = state_18426__$1;
(statearr_18479_20269[(2)] = inst_18353);

(statearr_18479_20269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (14))){
var inst_18383 = (state_18426[(7)]);
var inst_18386 = cljs.core.chunked_seq_QMARK_(inst_18383);
var state_18426__$1 = state_18426;
if(inst_18386){
var statearr_18484_20273 = state_18426__$1;
(statearr_18484_20273[(1)] = (17));

} else {
var statearr_18485_20274 = state_18426__$1;
(statearr_18485_20274[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (16))){
var inst_18407 = (state_18426[(2)]);
var state_18426__$1 = state_18426;
var statearr_18486_20278 = state_18426__$1;
(statearr_18486_20278[(2)] = inst_18407);

(statearr_18486_20278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18427 === (10))){
var inst_18363 = (state_18426[(10)]);
var inst_18365 = (state_18426[(12)]);
var inst_18372 = cljs.core._nth(inst_18363,inst_18365);
var state_18426__$1 = state_18426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18426__$1,(13),out,inst_18372);
} else {
if((state_val_18427 === (18))){
var inst_18383 = (state_18426[(7)]);
var inst_18398 = cljs.core.first(inst_18383);
var state_18426__$1 = state_18426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18426__$1,(20),out,inst_18398);
} else {
if((state_val_18427 === (8))){
var inst_18365 = (state_18426[(12)]);
var inst_18364 = (state_18426[(11)]);
var inst_18367 = (inst_18365 < inst_18364);
var inst_18368 = inst_18367;
var state_18426__$1 = state_18426;
if(cljs.core.truth_(inst_18368)){
var statearr_18488_20283 = state_18426__$1;
(statearr_18488_20283[(1)] = (10));

} else {
var statearr_18489_20284 = state_18426__$1;
(statearr_18489_20284[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14118__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14118__auto____0 = (function (){
var statearr_18493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18493[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14118__auto__);

(statearr_18493[(1)] = (1));

return statearr_18493;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14118__auto____1 = (function (state_18426){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_18426);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e18494){var ex__14121__auto__ = e18494;
var statearr_18495_20285 = state_18426;
(statearr_18495_20285[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_18426[(4)]))){
var statearr_18496_20286 = state_18426;
(statearr_18496_20286[(1)] = cljs.core.first((state_18426[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20288 = state_18426;
state_18426 = G__20288;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14118__auto__ = function(state_18426){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14118__auto____1.call(this,state_18426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14118__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14118__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_18498 = f__15182__auto__();
(statearr_18498[(6)] = c__15181__auto__);

return statearr_18498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));

return c__15181__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18500 = arguments.length;
switch (G__18500) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18504 = arguments.length;
switch (G__18504) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18515 = arguments.length;
switch (G__18515) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15181__auto___20305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_18569){
var state_val_18570 = (state_18569[(1)]);
if((state_val_18570 === (7))){
var inst_18560 = (state_18569[(2)]);
var state_18569__$1 = state_18569;
var statearr_18573_20306 = state_18569__$1;
(statearr_18573_20306[(2)] = inst_18560);

(statearr_18573_20306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18570 === (1))){
var inst_18527 = null;
var state_18569__$1 = (function (){var statearr_18574 = state_18569;
(statearr_18574[(7)] = inst_18527);

return statearr_18574;
})();
var statearr_18575_20307 = state_18569__$1;
(statearr_18575_20307[(2)] = null);

(statearr_18575_20307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18570 === (4))){
var inst_18533 = (state_18569[(8)]);
var inst_18533__$1 = (state_18569[(2)]);
var inst_18538 = (inst_18533__$1 == null);
var inst_18539 = cljs.core.not(inst_18538);
var state_18569__$1 = (function (){var statearr_18579 = state_18569;
(statearr_18579[(8)] = inst_18533__$1);

return statearr_18579;
})();
if(inst_18539){
var statearr_18580_20316 = state_18569__$1;
(statearr_18580_20316[(1)] = (5));

} else {
var statearr_18582_20317 = state_18569__$1;
(statearr_18582_20317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18570 === (6))){
var state_18569__$1 = state_18569;
var statearr_18585_20318 = state_18569__$1;
(statearr_18585_20318[(2)] = null);

(statearr_18585_20318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18570 === (3))){
var inst_18562 = (state_18569[(2)]);
var inst_18563 = cljs.core.async.close_BANG_(out);
var state_18569__$1 = (function (){var statearr_18589 = state_18569;
(statearr_18589[(9)] = inst_18562);

return statearr_18589;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18569__$1,inst_18563);
} else {
if((state_val_18570 === (2))){
var state_18569__$1 = state_18569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18569__$1,(4),ch);
} else {
if((state_val_18570 === (11))){
var inst_18533 = (state_18569[(8)]);
var inst_18552 = (state_18569[(2)]);
var inst_18527 = inst_18533;
var state_18569__$1 = (function (){var statearr_18608 = state_18569;
(statearr_18608[(10)] = inst_18552);

(statearr_18608[(7)] = inst_18527);

return statearr_18608;
})();
var statearr_18613_20319 = state_18569__$1;
(statearr_18613_20319[(2)] = null);

(statearr_18613_20319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18570 === (9))){
var inst_18533 = (state_18569[(8)]);
var state_18569__$1 = state_18569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18569__$1,(11),out,inst_18533);
} else {
if((state_val_18570 === (5))){
var inst_18533 = (state_18569[(8)]);
var inst_18527 = (state_18569[(7)]);
var inst_18545 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18533,inst_18527);
var state_18569__$1 = state_18569;
if(inst_18545){
var statearr_18619_20321 = state_18569__$1;
(statearr_18619_20321[(1)] = (8));

} else {
var statearr_18620_20322 = state_18569__$1;
(statearr_18620_20322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18570 === (10))){
var inst_18556 = (state_18569[(2)]);
var state_18569__$1 = state_18569;
var statearr_18621_20326 = state_18569__$1;
(statearr_18621_20326[(2)] = inst_18556);

(statearr_18621_20326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18570 === (8))){
var inst_18527 = (state_18569[(7)]);
var tmp18618 = inst_18527;
var inst_18527__$1 = tmp18618;
var state_18569__$1 = (function (){var statearr_18622 = state_18569;
(statearr_18622[(7)] = inst_18527__$1);

return statearr_18622;
})();
var statearr_18625_20328 = state_18569__$1;
(statearr_18625_20328[(2)] = null);

(statearr_18625_20328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14118__auto__ = null;
var cljs$core$async$state_machine__14118__auto____0 = (function (){
var statearr_18629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18629[(0)] = cljs$core$async$state_machine__14118__auto__);

(statearr_18629[(1)] = (1));

return statearr_18629;
});
var cljs$core$async$state_machine__14118__auto____1 = (function (state_18569){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_18569);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e18634){var ex__14121__auto__ = e18634;
var statearr_18635_20329 = state_18569;
(statearr_18635_20329[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_18569[(4)]))){
var statearr_18636_20331 = state_18569;
(statearr_18636_20331[(1)] = cljs.core.first((state_18569[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20335 = state_18569;
state_18569 = G__20335;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$state_machine__14118__auto__ = function(state_18569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14118__auto____1.call(this,state_18569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14118__auto____0;
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14118__auto____1;
return cljs$core$async$state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_18637 = f__15182__auto__();
(statearr_18637[(6)] = c__15181__auto___20305);

return statearr_18637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18647 = arguments.length;
switch (G__18647) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15181__auto___20338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_18704){
var state_val_18705 = (state_18704[(1)]);
if((state_val_18705 === (7))){
var inst_18700 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18710_20339 = state_18704__$1;
(statearr_18710_20339[(2)] = inst_18700);

(statearr_18710_20339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (1))){
var inst_18661 = (new Array(n));
var inst_18662 = inst_18661;
var inst_18663 = (0);
var state_18704__$1 = (function (){var statearr_18718 = state_18704;
(statearr_18718[(7)] = inst_18662);

(statearr_18718[(8)] = inst_18663);

return statearr_18718;
})();
var statearr_18724_20340 = state_18704__$1;
(statearr_18724_20340[(2)] = null);

(statearr_18724_20340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (4))){
var inst_18667 = (state_18704[(9)]);
var inst_18667__$1 = (state_18704[(2)]);
var inst_18668 = (inst_18667__$1 == null);
var inst_18669 = cljs.core.not(inst_18668);
var state_18704__$1 = (function (){var statearr_18738 = state_18704;
(statearr_18738[(9)] = inst_18667__$1);

return statearr_18738;
})();
if(inst_18669){
var statearr_18743_20345 = state_18704__$1;
(statearr_18743_20345[(1)] = (5));

} else {
var statearr_18744_20346 = state_18704__$1;
(statearr_18744_20346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (15))){
var inst_18694 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18754_20347 = state_18704__$1;
(statearr_18754_20347[(2)] = inst_18694);

(statearr_18754_20347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (13))){
var state_18704__$1 = state_18704;
var statearr_18764_20348 = state_18704__$1;
(statearr_18764_20348[(2)] = null);

(statearr_18764_20348[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (6))){
var inst_18663 = (state_18704[(8)]);
var inst_18690 = (inst_18663 > (0));
var state_18704__$1 = state_18704;
if(cljs.core.truth_(inst_18690)){
var statearr_18766_20349 = state_18704__$1;
(statearr_18766_20349[(1)] = (12));

} else {
var statearr_18767_20350 = state_18704__$1;
(statearr_18767_20350[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (3))){
var inst_18702 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18704__$1,inst_18702);
} else {
if((state_val_18705 === (12))){
var inst_18662 = (state_18704[(7)]);
var inst_18692 = cljs.core.vec(inst_18662);
var state_18704__$1 = state_18704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18704__$1,(15),out,inst_18692);
} else {
if((state_val_18705 === (2))){
var state_18704__$1 = state_18704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18704__$1,(4),ch);
} else {
if((state_val_18705 === (11))){
var inst_18683 = (state_18704[(2)]);
var inst_18684 = (new Array(n));
var inst_18662 = inst_18684;
var inst_18663 = (0);
var state_18704__$1 = (function (){var statearr_18773 = state_18704;
(statearr_18773[(10)] = inst_18683);

(statearr_18773[(7)] = inst_18662);

(statearr_18773[(8)] = inst_18663);

return statearr_18773;
})();
var statearr_18774_20352 = state_18704__$1;
(statearr_18774_20352[(2)] = null);

(statearr_18774_20352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (9))){
var inst_18662 = (state_18704[(7)]);
var inst_18681 = cljs.core.vec(inst_18662);
var state_18704__$1 = state_18704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18704__$1,(11),out,inst_18681);
} else {
if((state_val_18705 === (5))){
var inst_18662 = (state_18704[(7)]);
var inst_18663 = (state_18704[(8)]);
var inst_18667 = (state_18704[(9)]);
var inst_18675 = (state_18704[(11)]);
var inst_18671 = (inst_18662[inst_18663] = inst_18667);
var inst_18675__$1 = (inst_18663 + (1));
var inst_18676 = (inst_18675__$1 < n);
var state_18704__$1 = (function (){var statearr_18779 = state_18704;
(statearr_18779[(12)] = inst_18671);

(statearr_18779[(11)] = inst_18675__$1);

return statearr_18779;
})();
if(cljs.core.truth_(inst_18676)){
var statearr_18780_20353 = state_18704__$1;
(statearr_18780_20353[(1)] = (8));

} else {
var statearr_18781_20354 = state_18704__$1;
(statearr_18781_20354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (14))){
var inst_18697 = (state_18704[(2)]);
var inst_18698 = cljs.core.async.close_BANG_(out);
var state_18704__$1 = (function (){var statearr_18784 = state_18704;
(statearr_18784[(13)] = inst_18697);

return statearr_18784;
})();
var statearr_18786_20355 = state_18704__$1;
(statearr_18786_20355[(2)] = inst_18698);

(statearr_18786_20355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (10))){
var inst_18687 = (state_18704[(2)]);
var state_18704__$1 = state_18704;
var statearr_18789_20356 = state_18704__$1;
(statearr_18789_20356[(2)] = inst_18687);

(statearr_18789_20356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18705 === (8))){
var inst_18662 = (state_18704[(7)]);
var inst_18675 = (state_18704[(11)]);
var tmp18782 = inst_18662;
var inst_18662__$1 = tmp18782;
var inst_18663 = inst_18675;
var state_18704__$1 = (function (){var statearr_18799 = state_18704;
(statearr_18799[(7)] = inst_18662__$1);

(statearr_18799[(8)] = inst_18663);

return statearr_18799;
})();
var statearr_18800_20358 = state_18704__$1;
(statearr_18800_20358[(2)] = null);

(statearr_18800_20358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14118__auto__ = null;
var cljs$core$async$state_machine__14118__auto____0 = (function (){
var statearr_18803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18803[(0)] = cljs$core$async$state_machine__14118__auto__);

(statearr_18803[(1)] = (1));

return statearr_18803;
});
var cljs$core$async$state_machine__14118__auto____1 = (function (state_18704){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_18704);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e18804){var ex__14121__auto__ = e18804;
var statearr_18805_20360 = state_18704;
(statearr_18805_20360[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_18704[(4)]))){
var statearr_18810_20361 = state_18704;
(statearr_18810_20361[(1)] = cljs.core.first((state_18704[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20362 = state_18704;
state_18704 = G__20362;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$state_machine__14118__auto__ = function(state_18704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14118__auto____1.call(this,state_18704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14118__auto____0;
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14118__auto____1;
return cljs$core$async$state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_18817 = f__15182__auto__();
(statearr_18817[(6)] = c__15181__auto___20338);

return statearr_18817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18832 = arguments.length;
switch (G__18832) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15181__auto___20368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15182__auto__ = (function (){var switch__14117__auto__ = (function (state_18906){
var state_val_18907 = (state_18906[(1)]);
if((state_val_18907 === (7))){
var inst_18901 = (state_18906[(2)]);
var state_18906__$1 = state_18906;
var statearr_18911_20369 = state_18906__$1;
(statearr_18911_20369[(2)] = inst_18901);

(statearr_18911_20369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18907 === (1))){
var inst_18855 = [];
var inst_18856 = inst_18855;
var inst_18857 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18906__$1 = (function (){var statearr_18917 = state_18906;
(statearr_18917[(7)] = inst_18856);

(statearr_18917[(8)] = inst_18857);

return statearr_18917;
})();
var statearr_18918_20370 = state_18906__$1;
(statearr_18918_20370[(2)] = null);

(statearr_18918_20370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18907 === (4))){
var inst_18860 = (state_18906[(9)]);
var inst_18860__$1 = (state_18906[(2)]);
var inst_18861 = (inst_18860__$1 == null);
var inst_18862 = cljs.core.not(inst_18861);
var state_18906__$1 = (function (){var statearr_18924 = state_18906;
(statearr_18924[(9)] = inst_18860__$1);

return statearr_18924;
})();
if(inst_18862){
var statearr_18925_20371 = state_18906__$1;
(statearr_18925_20371[(1)] = (5));

} else {
var statearr_18926_20372 = state_18906__$1;
(statearr_18926_20372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18907 === (15))){
var inst_18856 = (state_18906[(7)]);
var inst_18893 = cljs.core.vec(inst_18856);
var state_18906__$1 = state_18906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18906__$1,(18),out,inst_18893);
} else {
if((state_val_18907 === (13))){
var inst_18886 = (state_18906[(2)]);
var state_18906__$1 = state_18906;
var statearr_18956_20373 = state_18906__$1;
(statearr_18956_20373[(2)] = inst_18886);

(statearr_18956_20373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18907 === (6))){
var inst_18856 = (state_18906[(7)]);
var inst_18889 = inst_18856.length;
var inst_18890 = (inst_18889 > (0));
var state_18906__$1 = state_18906;
if(cljs.core.truth_(inst_18890)){
var statearr_18993_20374 = state_18906__$1;
(statearr_18993_20374[(1)] = (15));

} else {
var statearr_19004_20375 = state_18906__$1;
(statearr_19004_20375[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18907 === (17))){
var inst_18898 = (state_18906[(2)]);
var inst_18899 = cljs.core.async.close_BANG_(out);
var state_18906__$1 = (function (){var statearr_19034 = state_18906;
(statearr_19034[(10)] = inst_18898);

return statearr_19034;
})();
var statearr_19035_20376 = state_18906__$1;
(statearr_19035_20376[(2)] = inst_18899);

(statearr_19035_20376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18907 === (3))){
var inst_18903 = (state_18906[(2)]);
var state_18906__$1 = state_18906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18906__$1,inst_18903);
} else {
if((state_val_18907 === (12))){
var inst_18856 = (state_18906[(7)]);
var inst_18879 = cljs.core.vec(inst_18856);
var state_18906__$1 = state_18906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18906__$1,(14),out,inst_18879);
} else {
if((state_val_18907 === (2))){
var state_18906__$1 = state_18906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18906__$1,(4),ch);
} else {
if((state_val_18907 === (11))){
var inst_18856 = (state_18906[(7)]);
var inst_18860 = (state_18906[(9)]);
var inst_18864 = (state_18906[(11)]);
var inst_18872 = inst_18856.push(inst_18860);
var tmp19048 = inst_18856;
var inst_18856__$1 = tmp19048;
var inst_18857 = inst_18864;
var state_18906__$1 = (function (){var statearr_19076 = state_18906;
(statearr_19076[(12)] = inst_18872);

(statearr_19076[(7)] = inst_18856__$1);

(statearr_19076[(8)] = inst_18857);

return statearr_19076;
})();
var statearr_19081_20377 = state_18906__$1;
(statearr_19081_20377[(2)] = null);

(statearr_19081_20377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18907 === (9))){
var inst_18857 = (state_18906[(8)]);
var inst_18868 = cljs.core.keyword_identical_QMARK_(inst_18857,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18906__$1 = state_18906;
var statearr_19083_20379 = state_18906__$1;
(statearr_19083_20379[(2)] = inst_18868);

(statearr_19083_20379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18907 === (5))){
var inst_18860 = (state_18906[(9)]);
var inst_18864 = (state_18906[(11)]);
var inst_18857 = (state_18906[(8)]);
var inst_18865 = (state_18906[(13)]);
var inst_18864__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18860) : f.call(null,inst_18860));
var inst_18865__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18864__$1,inst_18857);
var state_18906__$1 = (function (){var statearr_19085 = state_18906;
(statearr_19085[(11)] = inst_18864__$1);

(statearr_19085[(13)] = inst_18865__$1);

return statearr_19085;
})();
if(inst_18865__$1){
var statearr_19090_20381 = state_18906__$1;
(statearr_19090_20381[(1)] = (8));

} else {
var statearr_19091_20382 = state_18906__$1;
(statearr_19091_20382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18907 === (14))){
var inst_18860 = (state_18906[(9)]);
var inst_18864 = (state_18906[(11)]);
var inst_18881 = (state_18906[(2)]);
var inst_18882 = [];
var inst_18883 = inst_18882.push(inst_18860);
var inst_18856 = inst_18882;
var inst_18857 = inst_18864;
var state_18906__$1 = (function (){var statearr_19098 = state_18906;
(statearr_19098[(14)] = inst_18881);

(statearr_19098[(15)] = inst_18883);

(statearr_19098[(7)] = inst_18856);

(statearr_19098[(8)] = inst_18857);

return statearr_19098;
})();
var statearr_19101_20387 = state_18906__$1;
(statearr_19101_20387[(2)] = null);

(statearr_19101_20387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18907 === (16))){
var state_18906__$1 = state_18906;
var statearr_19106_20392 = state_18906__$1;
(statearr_19106_20392[(2)] = null);

(statearr_19106_20392[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18907 === (10))){
var inst_18870 = (state_18906[(2)]);
var state_18906__$1 = state_18906;
if(cljs.core.truth_(inst_18870)){
var statearr_19108_20393 = state_18906__$1;
(statearr_19108_20393[(1)] = (11));

} else {
var statearr_19111_20398 = state_18906__$1;
(statearr_19111_20398[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18907 === (18))){
var inst_18895 = (state_18906[(2)]);
var state_18906__$1 = state_18906;
var statearr_19112_20399 = state_18906__$1;
(statearr_19112_20399[(2)] = inst_18895);

(statearr_19112_20399[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18907 === (8))){
var inst_18865 = (state_18906[(13)]);
var state_18906__$1 = state_18906;
var statearr_19117_20400 = state_18906__$1;
(statearr_19117_20400[(2)] = inst_18865);

(statearr_19117_20400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14118__auto__ = null;
var cljs$core$async$state_machine__14118__auto____0 = (function (){
var statearr_19118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19118[(0)] = cljs$core$async$state_machine__14118__auto__);

(statearr_19118[(1)] = (1));

return statearr_19118;
});
var cljs$core$async$state_machine__14118__auto____1 = (function (state_18906){
while(true){
var ret_value__14119__auto__ = (function (){try{while(true){
var result__14120__auto__ = switch__14117__auto__(state_18906);
if(cljs.core.keyword_identical_QMARK_(result__14120__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14120__auto__;
}
break;
}
}catch (e19123){var ex__14121__auto__ = e19123;
var statearr_19125_20405 = state_18906;
(statearr_19125_20405[(2)] = ex__14121__auto__);


if(cljs.core.seq((state_18906[(4)]))){
var statearr_19130_20406 = state_18906;
(statearr_19130_20406[(1)] = cljs.core.first((state_18906[(4)])));

} else {
throw ex__14121__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20407 = state_18906;
state_18906 = G__20407;
continue;
} else {
return ret_value__14119__auto__;
}
break;
}
});
cljs$core$async$state_machine__14118__auto__ = function(state_18906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14118__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14118__auto____1.call(this,state_18906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14118__auto____0;
cljs$core$async$state_machine__14118__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14118__auto____1;
return cljs$core$async$state_machine__14118__auto__;
})()
})();
var state__15183__auto__ = (function (){var statearr_19140 = f__15182__auto__();
(statearr_19140[(6)] = c__15181__auto___20368);

return statearr_19140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15183__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

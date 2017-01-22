// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23068 = [];
var len__21234__auto___23074 = arguments.length;
var i__21235__auto___23075 = (0);
while(true){
if((i__21235__auto___23075 < len__21234__auto___23074)){
args23068.push((arguments[i__21235__auto___23075]));

var G__23076 = (i__21235__auto___23075 + (1));
i__21235__auto___23075 = G__23076;
continue;
} else {
}
break;
}

var G__23070 = args23068.length;
switch (G__23070) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23068.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23071 = (function (f,blockable,meta23072){
this.f = f;
this.blockable = blockable;
this.meta23072 = meta23072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23073,meta23072__$1){
var self__ = this;
var _23073__$1 = this;
return (new cljs.core.async.t_cljs$core$async23071(self__.f,self__.blockable,meta23072__$1));
});

cljs.core.async.t_cljs$core$async23071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23073){
var self__ = this;
var _23073__$1 = this;
return self__.meta23072;
});

cljs.core.async.t_cljs$core$async23071.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23071.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23072","meta23072",-26779547,null)], null);
});

cljs.core.async.t_cljs$core$async23071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23071";

cljs.core.async.t_cljs$core$async23071.cljs$lang$ctorPrWriter = (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async23071");
});

cljs.core.async.__GT_t_cljs$core$async23071 = (function cljs$core$async$__GT_t_cljs$core$async23071(f__$1,blockable__$1,meta23072){
return (new cljs.core.async.t_cljs$core$async23071(f__$1,blockable__$1,meta23072));
});

}

return (new cljs.core.async.t_cljs$core$async23071(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args23080 = [];
var len__21234__auto___23083 = arguments.length;
var i__21235__auto___23084 = (0);
while(true){
if((i__21235__auto___23084 < len__21234__auto___23083)){
args23080.push((arguments[i__21235__auto___23084]));

var G__23085 = (i__21235__auto___23084 + (1));
i__21235__auto___23084 = G__23085;
continue;
} else {
}
break;
}

var G__23082 = args23080.length;
switch (G__23082) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23080.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23087 = [];
var len__21234__auto___23090 = arguments.length;
var i__21235__auto___23091 = (0);
while(true){
if((i__21235__auto___23091 < len__21234__auto___23090)){
args23087.push((arguments[i__21235__auto___23091]));

var G__23092 = (i__21235__auto___23091 + (1));
i__21235__auto___23091 = G__23092;
continue;
} else {
}
break;
}

var G__23089 = args23087.length;
switch (G__23089) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23087.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args23094 = [];
var len__21234__auto___23097 = arguments.length;
var i__21235__auto___23098 = (0);
while(true){
if((i__21235__auto___23098 < len__21234__auto___23097)){
args23094.push((arguments[i__21235__auto___23098]));

var G__23099 = (i__21235__auto___23098 + (1));
i__21235__auto___23098 = G__23099;
continue;
} else {
}
break;
}

var G__23096 = args23094.length;
switch (G__23096) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23094.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23101 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23101);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23101,ret){
return (function (){
return fn1.call(null,val_23101);
});})(val_23101,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23102 = [];
var len__21234__auto___23105 = arguments.length;
var i__21235__auto___23106 = (0);
while(true){
if((i__21235__auto___23106 < len__21234__auto___23105)){
args23102.push((arguments[i__21235__auto___23106]));

var G__23107 = (i__21235__auto___23106 + (1));
i__21235__auto___23106 = G__23107;
continue;
} else {
}
break;
}

var G__23104 = args23102.length;
switch (G__23104) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23102.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21074__auto___23109 = n;
var x_23110 = (0);
while(true){
if((x_23110 < n__21074__auto___23109)){
(a[x_23110] = (0));

var G__23111 = (x_23110 + (1));
x_23110 = G__23111;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23112 = (i + (1));
i = G__23112;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23116 = (function (alt_flag,flag,meta23117){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23117 = meta23117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23118,meta23117__$1){
var self__ = this;
var _23118__$1 = this;
return (new cljs.core.async.t_cljs$core$async23116(self__.alt_flag,self__.flag,meta23117__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23118){
var self__ = this;
var _23118__$1 = this;
return self__.meta23117;
});})(flag))
;

cljs.core.async.t_cljs$core$async23116.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23116.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23116.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23117","meta23117",170497431,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23116";

cljs.core.async.t_cljs$core$async23116.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async23116");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23116 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23116(alt_flag__$1,flag__$1,meta23117){
return (new cljs.core.async.t_cljs$core$async23116(alt_flag__$1,flag__$1,meta23117));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23116(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23122 = (function (alt_handler,flag,cb,meta23123){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23123 = meta23123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23124,meta23123__$1){
var self__ = this;
var _23124__$1 = this;
return (new cljs.core.async.t_cljs$core$async23122(self__.alt_handler,self__.flag,self__.cb,meta23123__$1));
});

cljs.core.async.t_cljs$core$async23122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23124){
var self__ = this;
var _23124__$1 = this;
return self__.meta23123;
});

cljs.core.async.t_cljs$core$async23122.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23122.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23123","meta23123",430979275,null)], null);
});

cljs.core.async.t_cljs$core$async23122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23122";

cljs.core.async.t_cljs$core$async23122.cljs$lang$ctorPrWriter = (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async23122");
});

cljs.core.async.__GT_t_cljs$core$async23122 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23122(alt_handler__$1,flag__$1,cb__$1,meta23123){
return (new cljs.core.async.t_cljs$core$async23122(alt_handler__$1,flag__$1,cb__$1,meta23123));
});

}

return (new cljs.core.async.t_cljs$core$async23122(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23125_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23125_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23126_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23126_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20159__auto__ = wport;
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23127 = (i + (1));
i = G__23127;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20159__auto__ = ret;
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__20147__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20147__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20147__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__21241__auto__ = [];
var len__21234__auto___23133 = arguments.length;
var i__21235__auto___23134 = (0);
while(true){
if((i__21235__auto___23134 < len__21234__auto___23133)){
args__21241__auto__.push((arguments[i__21235__auto___23134]));

var G__23135 = (i__21235__auto___23134 + (1));
i__21235__auto___23134 = G__23135;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((1) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21242__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23130){
var map__23131 = p__23130;
var map__23131__$1 = ((((!((map__23131 == null)))?((((map__23131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23131):map__23131);
var opts = map__23131__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23128){
var G__23129 = cljs.core.first.call(null,seq23128);
var seq23128__$1 = cljs.core.next.call(null,seq23128);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23129,seq23128__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args23136 = [];
var len__21234__auto___23186 = arguments.length;
var i__21235__auto___23187 = (0);
while(true){
if((i__21235__auto___23187 < len__21234__auto___23186)){
args23136.push((arguments[i__21235__auto___23187]));

var G__23188 = (i__21235__auto___23187 + (1));
i__21235__auto___23187 = G__23188;
continue;
} else {
}
break;
}

var G__23138 = args23136.length;
switch (G__23138) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23136.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23023__auto___23190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___23190){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___23190){
return (function (state_23162){
var state_val_23163 = (state_23162[(1)]);
if((state_val_23163 === (7))){
var inst_23158 = (state_23162[(2)]);
var state_23162__$1 = state_23162;
var statearr_23164_23191 = state_23162__$1;
(statearr_23164_23191[(2)] = inst_23158);

(statearr_23164_23191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (1))){
var state_23162__$1 = state_23162;
var statearr_23165_23192 = state_23162__$1;
(statearr_23165_23192[(2)] = null);

(statearr_23165_23192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (4))){
var inst_23141 = (state_23162[(7)]);
var inst_23141__$1 = (state_23162[(2)]);
var inst_23142 = (inst_23141__$1 == null);
var state_23162__$1 = (function (){var statearr_23166 = state_23162;
(statearr_23166[(7)] = inst_23141__$1);

return statearr_23166;
})();
if(cljs.core.truth_(inst_23142)){
var statearr_23167_23193 = state_23162__$1;
(statearr_23167_23193[(1)] = (5));

} else {
var statearr_23168_23194 = state_23162__$1;
(statearr_23168_23194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (13))){
var state_23162__$1 = state_23162;
var statearr_23169_23195 = state_23162__$1;
(statearr_23169_23195[(2)] = null);

(statearr_23169_23195[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (6))){
var inst_23141 = (state_23162[(7)]);
var state_23162__$1 = state_23162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23162__$1,(11),to,inst_23141);
} else {
if((state_val_23163 === (3))){
var inst_23160 = (state_23162[(2)]);
var state_23162__$1 = state_23162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23162__$1,inst_23160);
} else {
if((state_val_23163 === (12))){
var state_23162__$1 = state_23162;
var statearr_23170_23196 = state_23162__$1;
(statearr_23170_23196[(2)] = null);

(statearr_23170_23196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (2))){
var state_23162__$1 = state_23162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23162__$1,(4),from);
} else {
if((state_val_23163 === (11))){
var inst_23151 = (state_23162[(2)]);
var state_23162__$1 = state_23162;
if(cljs.core.truth_(inst_23151)){
var statearr_23171_23197 = state_23162__$1;
(statearr_23171_23197[(1)] = (12));

} else {
var statearr_23172_23198 = state_23162__$1;
(statearr_23172_23198[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (9))){
var state_23162__$1 = state_23162;
var statearr_23173_23199 = state_23162__$1;
(statearr_23173_23199[(2)] = null);

(statearr_23173_23199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (5))){
var state_23162__$1 = state_23162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23174_23200 = state_23162__$1;
(statearr_23174_23200[(1)] = (8));

} else {
var statearr_23175_23201 = state_23162__$1;
(statearr_23175_23201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (14))){
var inst_23156 = (state_23162[(2)]);
var state_23162__$1 = state_23162;
var statearr_23176_23202 = state_23162__$1;
(statearr_23176_23202[(2)] = inst_23156);

(statearr_23176_23202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (10))){
var inst_23148 = (state_23162[(2)]);
var state_23162__$1 = state_23162;
var statearr_23177_23203 = state_23162__$1;
(statearr_23177_23203[(2)] = inst_23148);

(statearr_23177_23203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23163 === (8))){
var inst_23145 = cljs.core.async.close_BANG_.call(null,to);
var state_23162__$1 = state_23162;
var statearr_23178_23204 = state_23162__$1;
(statearr_23178_23204[(2)] = inst_23145);

(statearr_23178_23204[(1)] = (10));


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
});})(c__23023__auto___23190))
;
return ((function (switch__22178__auto__,c__23023__auto___23190){
return (function() {
var cljs$core$async$state_machine__22179__auto__ = null;
var cljs$core$async$state_machine__22179__auto____0 = (function (){
var statearr_23182 = [null,null,null,null,null,null,null,null];
(statearr_23182[(0)] = cljs$core$async$state_machine__22179__auto__);

(statearr_23182[(1)] = (1));

return statearr_23182;
});
var cljs$core$async$state_machine__22179__auto____1 = (function (state_23162){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_23162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e23183){if((e23183 instanceof Object)){
var ex__22182__auto__ = e23183;
var statearr_23184_23205 = state_23162;
(statearr_23184_23205[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23206 = state_23162;
state_23162 = G__23206;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$state_machine__22179__auto__ = function(state_23162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22179__auto____1.call(this,state_23162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22179__auto____0;
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22179__auto____1;
return cljs$core$async$state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___23190))
})();
var state__23025__auto__ = (function (){var statearr_23185 = f__23024__auto__.call(null);
(statearr_23185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___23190);

return statearr_23185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___23190))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23394){
var vec__23395 = p__23394;
var v = cljs.core.nth.call(null,vec__23395,(0),null);
var p = cljs.core.nth.call(null,vec__23395,(1),null);
var job = vec__23395;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23023__auto___23581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___23581,res,vec__23395,v,p,job,jobs,results){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___23581,res,vec__23395,v,p,job,jobs,results){
return (function (state_23402){
var state_val_23403 = (state_23402[(1)]);
if((state_val_23403 === (1))){
var state_23402__$1 = state_23402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23402__$1,(2),res,v);
} else {
if((state_val_23403 === (2))){
var inst_23399 = (state_23402[(2)]);
var inst_23400 = cljs.core.async.close_BANG_.call(null,res);
var state_23402__$1 = (function (){var statearr_23404 = state_23402;
(statearr_23404[(7)] = inst_23399);

return statearr_23404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23402__$1,inst_23400);
} else {
return null;
}
}
});})(c__23023__auto___23581,res,vec__23395,v,p,job,jobs,results))
;
return ((function (switch__22178__auto__,c__23023__auto___23581,res,vec__23395,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0 = (function (){
var statearr_23408 = [null,null,null,null,null,null,null,null];
(statearr_23408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__);

(statearr_23408[(1)] = (1));

return statearr_23408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1 = (function (state_23402){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_23402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e23409){if((e23409 instanceof Object)){
var ex__22182__auto__ = e23409;
var statearr_23410_23582 = state_23402;
(statearr_23410_23582[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23583 = state_23402;
state_23402 = G__23583;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__ = function(state_23402){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1.call(this,state_23402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___23581,res,vec__23395,v,p,job,jobs,results))
})();
var state__23025__auto__ = (function (){var statearr_23411 = f__23024__auto__.call(null);
(statearr_23411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___23581);

return statearr_23411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___23581,res,vec__23395,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23412){
var vec__23413 = p__23412;
var v = cljs.core.nth.call(null,vec__23413,(0),null);
var p = cljs.core.nth.call(null,vec__23413,(1),null);
var job = vec__23413;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21074__auto___23584 = n;
var __23585 = (0);
while(true){
if((__23585 < n__21074__auto___23584)){
var G__23416_23586 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23416_23586) {
case "compute":
var c__23023__auto___23588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23585,c__23023__auto___23588,G__23416_23586,n__21074__auto___23584,jobs,results,process,async){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (__23585,c__23023__auto___23588,G__23416_23586,n__21074__auto___23584,jobs,results,process,async){
return (function (state_23429){
var state_val_23430 = (state_23429[(1)]);
if((state_val_23430 === (1))){
var state_23429__$1 = state_23429;
var statearr_23431_23589 = state_23429__$1;
(statearr_23431_23589[(2)] = null);

(statearr_23431_23589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (2))){
var state_23429__$1 = state_23429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23429__$1,(4),jobs);
} else {
if((state_val_23430 === (3))){
var inst_23427 = (state_23429[(2)]);
var state_23429__$1 = state_23429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23429__$1,inst_23427);
} else {
if((state_val_23430 === (4))){
var inst_23419 = (state_23429[(2)]);
var inst_23420 = process.call(null,inst_23419);
var state_23429__$1 = state_23429;
if(cljs.core.truth_(inst_23420)){
var statearr_23432_23590 = state_23429__$1;
(statearr_23432_23590[(1)] = (5));

} else {
var statearr_23433_23591 = state_23429__$1;
(statearr_23433_23591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (5))){
var state_23429__$1 = state_23429;
var statearr_23434_23592 = state_23429__$1;
(statearr_23434_23592[(2)] = null);

(statearr_23434_23592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (6))){
var state_23429__$1 = state_23429;
var statearr_23435_23593 = state_23429__$1;
(statearr_23435_23593[(2)] = null);

(statearr_23435_23593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23430 === (7))){
var inst_23425 = (state_23429[(2)]);
var state_23429__$1 = state_23429;
var statearr_23436_23594 = state_23429__$1;
(statearr_23436_23594[(2)] = inst_23425);

(statearr_23436_23594[(1)] = (3));


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
});})(__23585,c__23023__auto___23588,G__23416_23586,n__21074__auto___23584,jobs,results,process,async))
;
return ((function (__23585,switch__22178__auto__,c__23023__auto___23588,G__23416_23586,n__21074__auto___23584,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0 = (function (){
var statearr_23440 = [null,null,null,null,null,null,null];
(statearr_23440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__);

(statearr_23440[(1)] = (1));

return statearr_23440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1 = (function (state_23429){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_23429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e23441){if((e23441 instanceof Object)){
var ex__22182__auto__ = e23441;
var statearr_23442_23595 = state_23429;
(statearr_23442_23595[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23596 = state_23429;
state_23429 = G__23596;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__ = function(state_23429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1.call(this,state_23429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__;
})()
;})(__23585,switch__22178__auto__,c__23023__auto___23588,G__23416_23586,n__21074__auto___23584,jobs,results,process,async))
})();
var state__23025__auto__ = (function (){var statearr_23443 = f__23024__auto__.call(null);
(statearr_23443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___23588);

return statearr_23443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(__23585,c__23023__auto___23588,G__23416_23586,n__21074__auto___23584,jobs,results,process,async))
);


break;
case "async":
var c__23023__auto___23597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23585,c__23023__auto___23597,G__23416_23586,n__21074__auto___23584,jobs,results,process,async){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (__23585,c__23023__auto___23597,G__23416_23586,n__21074__auto___23584,jobs,results,process,async){
return (function (state_23456){
var state_val_23457 = (state_23456[(1)]);
if((state_val_23457 === (1))){
var state_23456__$1 = state_23456;
var statearr_23458_23598 = state_23456__$1;
(statearr_23458_23598[(2)] = null);

(statearr_23458_23598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23457 === (2))){
var state_23456__$1 = state_23456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23456__$1,(4),jobs);
} else {
if((state_val_23457 === (3))){
var inst_23454 = (state_23456[(2)]);
var state_23456__$1 = state_23456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23456__$1,inst_23454);
} else {
if((state_val_23457 === (4))){
var inst_23446 = (state_23456[(2)]);
var inst_23447 = async.call(null,inst_23446);
var state_23456__$1 = state_23456;
if(cljs.core.truth_(inst_23447)){
var statearr_23459_23599 = state_23456__$1;
(statearr_23459_23599[(1)] = (5));

} else {
var statearr_23460_23600 = state_23456__$1;
(statearr_23460_23600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23457 === (5))){
var state_23456__$1 = state_23456;
var statearr_23461_23601 = state_23456__$1;
(statearr_23461_23601[(2)] = null);

(statearr_23461_23601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23457 === (6))){
var state_23456__$1 = state_23456;
var statearr_23462_23602 = state_23456__$1;
(statearr_23462_23602[(2)] = null);

(statearr_23462_23602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23457 === (7))){
var inst_23452 = (state_23456[(2)]);
var state_23456__$1 = state_23456;
var statearr_23463_23603 = state_23456__$1;
(statearr_23463_23603[(2)] = inst_23452);

(statearr_23463_23603[(1)] = (3));


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
});})(__23585,c__23023__auto___23597,G__23416_23586,n__21074__auto___23584,jobs,results,process,async))
;
return ((function (__23585,switch__22178__auto__,c__23023__auto___23597,G__23416_23586,n__21074__auto___23584,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0 = (function (){
var statearr_23467 = [null,null,null,null,null,null,null];
(statearr_23467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__);

(statearr_23467[(1)] = (1));

return statearr_23467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1 = (function (state_23456){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_23456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e23468){if((e23468 instanceof Object)){
var ex__22182__auto__ = e23468;
var statearr_23469_23604 = state_23456;
(statearr_23469_23604[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23605 = state_23456;
state_23456 = G__23605;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__ = function(state_23456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1.call(this,state_23456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__;
})()
;})(__23585,switch__22178__auto__,c__23023__auto___23597,G__23416_23586,n__21074__auto___23584,jobs,results,process,async))
})();
var state__23025__auto__ = (function (){var statearr_23470 = f__23024__auto__.call(null);
(statearr_23470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___23597);

return statearr_23470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(__23585,c__23023__auto___23597,G__23416_23586,n__21074__auto___23584,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23606 = (__23585 + (1));
__23585 = G__23606;
continue;
} else {
}
break;
}

var c__23023__auto___23607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___23607,jobs,results,process,async){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___23607,jobs,results,process,async){
return (function (state_23492){
var state_val_23493 = (state_23492[(1)]);
if((state_val_23493 === (1))){
var state_23492__$1 = state_23492;
var statearr_23494_23608 = state_23492__$1;
(statearr_23494_23608[(2)] = null);

(statearr_23494_23608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23493 === (2))){
var state_23492__$1 = state_23492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23492__$1,(4),from);
} else {
if((state_val_23493 === (3))){
var inst_23490 = (state_23492[(2)]);
var state_23492__$1 = state_23492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23492__$1,inst_23490);
} else {
if((state_val_23493 === (4))){
var inst_23473 = (state_23492[(7)]);
var inst_23473__$1 = (state_23492[(2)]);
var inst_23474 = (inst_23473__$1 == null);
var state_23492__$1 = (function (){var statearr_23495 = state_23492;
(statearr_23495[(7)] = inst_23473__$1);

return statearr_23495;
})();
if(cljs.core.truth_(inst_23474)){
var statearr_23496_23609 = state_23492__$1;
(statearr_23496_23609[(1)] = (5));

} else {
var statearr_23497_23610 = state_23492__$1;
(statearr_23497_23610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23493 === (5))){
var inst_23476 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23492__$1 = state_23492;
var statearr_23498_23611 = state_23492__$1;
(statearr_23498_23611[(2)] = inst_23476);

(statearr_23498_23611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23493 === (6))){
var inst_23478 = (state_23492[(8)]);
var inst_23473 = (state_23492[(7)]);
var inst_23478__$1 = cljs.core.async.chan.call(null,(1));
var inst_23479 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23480 = [inst_23473,inst_23478__$1];
var inst_23481 = (new cljs.core.PersistentVector(null,2,(5),inst_23479,inst_23480,null));
var state_23492__$1 = (function (){var statearr_23499 = state_23492;
(statearr_23499[(8)] = inst_23478__$1);

return statearr_23499;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23492__$1,(8),jobs,inst_23481);
} else {
if((state_val_23493 === (7))){
var inst_23488 = (state_23492[(2)]);
var state_23492__$1 = state_23492;
var statearr_23500_23612 = state_23492__$1;
(statearr_23500_23612[(2)] = inst_23488);

(statearr_23500_23612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23493 === (8))){
var inst_23478 = (state_23492[(8)]);
var inst_23483 = (state_23492[(2)]);
var state_23492__$1 = (function (){var statearr_23501 = state_23492;
(statearr_23501[(9)] = inst_23483);

return statearr_23501;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23492__$1,(9),results,inst_23478);
} else {
if((state_val_23493 === (9))){
var inst_23485 = (state_23492[(2)]);
var state_23492__$1 = (function (){var statearr_23502 = state_23492;
(statearr_23502[(10)] = inst_23485);

return statearr_23502;
})();
var statearr_23503_23613 = state_23492__$1;
(statearr_23503_23613[(2)] = null);

(statearr_23503_23613[(1)] = (2));


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
});})(c__23023__auto___23607,jobs,results,process,async))
;
return ((function (switch__22178__auto__,c__23023__auto___23607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0 = (function (){
var statearr_23507 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__);

(statearr_23507[(1)] = (1));

return statearr_23507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1 = (function (state_23492){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_23492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e23508){if((e23508 instanceof Object)){
var ex__22182__auto__ = e23508;
var statearr_23509_23614 = state_23492;
(statearr_23509_23614[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23615 = state_23492;
state_23492 = G__23615;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__ = function(state_23492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1.call(this,state_23492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___23607,jobs,results,process,async))
})();
var state__23025__auto__ = (function (){var statearr_23510 = f__23024__auto__.call(null);
(statearr_23510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___23607);

return statearr_23510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___23607,jobs,results,process,async))
);


var c__23023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto__,jobs,results,process,async){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto__,jobs,results,process,async){
return (function (state_23548){
var state_val_23549 = (state_23548[(1)]);
if((state_val_23549 === (7))){
var inst_23544 = (state_23548[(2)]);
var state_23548__$1 = state_23548;
var statearr_23550_23616 = state_23548__$1;
(statearr_23550_23616[(2)] = inst_23544);

(statearr_23550_23616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (20))){
var state_23548__$1 = state_23548;
var statearr_23551_23617 = state_23548__$1;
(statearr_23551_23617[(2)] = null);

(statearr_23551_23617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (1))){
var state_23548__$1 = state_23548;
var statearr_23552_23618 = state_23548__$1;
(statearr_23552_23618[(2)] = null);

(statearr_23552_23618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (4))){
var inst_23513 = (state_23548[(7)]);
var inst_23513__$1 = (state_23548[(2)]);
var inst_23514 = (inst_23513__$1 == null);
var state_23548__$1 = (function (){var statearr_23553 = state_23548;
(statearr_23553[(7)] = inst_23513__$1);

return statearr_23553;
})();
if(cljs.core.truth_(inst_23514)){
var statearr_23554_23619 = state_23548__$1;
(statearr_23554_23619[(1)] = (5));

} else {
var statearr_23555_23620 = state_23548__$1;
(statearr_23555_23620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (15))){
var inst_23526 = (state_23548[(8)]);
var state_23548__$1 = state_23548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23548__$1,(18),to,inst_23526);
} else {
if((state_val_23549 === (21))){
var inst_23539 = (state_23548[(2)]);
var state_23548__$1 = state_23548;
var statearr_23556_23621 = state_23548__$1;
(statearr_23556_23621[(2)] = inst_23539);

(statearr_23556_23621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (13))){
var inst_23541 = (state_23548[(2)]);
var state_23548__$1 = (function (){var statearr_23557 = state_23548;
(statearr_23557[(9)] = inst_23541);

return statearr_23557;
})();
var statearr_23558_23622 = state_23548__$1;
(statearr_23558_23622[(2)] = null);

(statearr_23558_23622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (6))){
var inst_23513 = (state_23548[(7)]);
var state_23548__$1 = state_23548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23548__$1,(11),inst_23513);
} else {
if((state_val_23549 === (17))){
var inst_23534 = (state_23548[(2)]);
var state_23548__$1 = state_23548;
if(cljs.core.truth_(inst_23534)){
var statearr_23559_23623 = state_23548__$1;
(statearr_23559_23623[(1)] = (19));

} else {
var statearr_23560_23624 = state_23548__$1;
(statearr_23560_23624[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (3))){
var inst_23546 = (state_23548[(2)]);
var state_23548__$1 = state_23548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23548__$1,inst_23546);
} else {
if((state_val_23549 === (12))){
var inst_23523 = (state_23548[(10)]);
var state_23548__$1 = state_23548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23548__$1,(14),inst_23523);
} else {
if((state_val_23549 === (2))){
var state_23548__$1 = state_23548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23548__$1,(4),results);
} else {
if((state_val_23549 === (19))){
var state_23548__$1 = state_23548;
var statearr_23561_23625 = state_23548__$1;
(statearr_23561_23625[(2)] = null);

(statearr_23561_23625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (11))){
var inst_23523 = (state_23548[(2)]);
var state_23548__$1 = (function (){var statearr_23562 = state_23548;
(statearr_23562[(10)] = inst_23523);

return statearr_23562;
})();
var statearr_23563_23626 = state_23548__$1;
(statearr_23563_23626[(2)] = null);

(statearr_23563_23626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (9))){
var state_23548__$1 = state_23548;
var statearr_23564_23627 = state_23548__$1;
(statearr_23564_23627[(2)] = null);

(statearr_23564_23627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (5))){
var state_23548__$1 = state_23548;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23565_23628 = state_23548__$1;
(statearr_23565_23628[(1)] = (8));

} else {
var statearr_23566_23629 = state_23548__$1;
(statearr_23566_23629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (14))){
var inst_23528 = (state_23548[(11)]);
var inst_23526 = (state_23548[(8)]);
var inst_23526__$1 = (state_23548[(2)]);
var inst_23527 = (inst_23526__$1 == null);
var inst_23528__$1 = cljs.core.not.call(null,inst_23527);
var state_23548__$1 = (function (){var statearr_23567 = state_23548;
(statearr_23567[(11)] = inst_23528__$1);

(statearr_23567[(8)] = inst_23526__$1);

return statearr_23567;
})();
if(inst_23528__$1){
var statearr_23568_23630 = state_23548__$1;
(statearr_23568_23630[(1)] = (15));

} else {
var statearr_23569_23631 = state_23548__$1;
(statearr_23569_23631[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (16))){
var inst_23528 = (state_23548[(11)]);
var state_23548__$1 = state_23548;
var statearr_23570_23632 = state_23548__$1;
(statearr_23570_23632[(2)] = inst_23528);

(statearr_23570_23632[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (10))){
var inst_23520 = (state_23548[(2)]);
var state_23548__$1 = state_23548;
var statearr_23571_23633 = state_23548__$1;
(statearr_23571_23633[(2)] = inst_23520);

(statearr_23571_23633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (18))){
var inst_23531 = (state_23548[(2)]);
var state_23548__$1 = state_23548;
var statearr_23572_23634 = state_23548__$1;
(statearr_23572_23634[(2)] = inst_23531);

(statearr_23572_23634[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23549 === (8))){
var inst_23517 = cljs.core.async.close_BANG_.call(null,to);
var state_23548__$1 = state_23548;
var statearr_23573_23635 = state_23548__$1;
(statearr_23573_23635[(2)] = inst_23517);

(statearr_23573_23635[(1)] = (10));


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
});})(c__23023__auto__,jobs,results,process,async))
;
return ((function (switch__22178__auto__,c__23023__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0 = (function (){
var statearr_23577 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23577[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__);

(statearr_23577[(1)] = (1));

return statearr_23577;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1 = (function (state_23548){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_23548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e23578){if((e23578 instanceof Object)){
var ex__22182__auto__ = e23578;
var statearr_23579_23636 = state_23548;
(statearr_23579_23636[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23637 = state_23548;
state_23548 = G__23637;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__ = function(state_23548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1.call(this,state_23548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22179__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto__,jobs,results,process,async))
})();
var state__23025__auto__ = (function (){var statearr_23580 = f__23024__auto__.call(null);
(statearr_23580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto__);

return statearr_23580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto__,jobs,results,process,async))
);

return c__23023__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23638 = [];
var len__21234__auto___23641 = arguments.length;
var i__21235__auto___23642 = (0);
while(true){
if((i__21235__auto___23642 < len__21234__auto___23641)){
args23638.push((arguments[i__21235__auto___23642]));

var G__23643 = (i__21235__auto___23642 + (1));
i__21235__auto___23642 = G__23643;
continue;
} else {
}
break;
}

var G__23640 = args23638.length;
switch (G__23640) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23638.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var args23645 = [];
var len__21234__auto___23648 = arguments.length;
var i__21235__auto___23649 = (0);
while(true){
if((i__21235__auto___23649 < len__21234__auto___23648)){
args23645.push((arguments[i__21235__auto___23649]));

var G__23650 = (i__21235__auto___23649 + (1));
i__21235__auto___23649 = G__23650;
continue;
} else {
}
break;
}

var G__23647 = args23645.length;
switch (G__23647) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23645.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var args23652 = [];
var len__21234__auto___23705 = arguments.length;
var i__21235__auto___23706 = (0);
while(true){
if((i__21235__auto___23706 < len__21234__auto___23705)){
args23652.push((arguments[i__21235__auto___23706]));

var G__23707 = (i__21235__auto___23706 + (1));
i__21235__auto___23706 = G__23707;
continue;
} else {
}
break;
}

var G__23654 = args23652.length;
switch (G__23654) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23652.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23023__auto___23709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___23709,tc,fc){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___23709,tc,fc){
return (function (state_23680){
var state_val_23681 = (state_23680[(1)]);
if((state_val_23681 === (7))){
var inst_23676 = (state_23680[(2)]);
var state_23680__$1 = state_23680;
var statearr_23682_23710 = state_23680__$1;
(statearr_23682_23710[(2)] = inst_23676);

(statearr_23682_23710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23681 === (1))){
var state_23680__$1 = state_23680;
var statearr_23683_23711 = state_23680__$1;
(statearr_23683_23711[(2)] = null);

(statearr_23683_23711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23681 === (4))){
var inst_23657 = (state_23680[(7)]);
var inst_23657__$1 = (state_23680[(2)]);
var inst_23658 = (inst_23657__$1 == null);
var state_23680__$1 = (function (){var statearr_23684 = state_23680;
(statearr_23684[(7)] = inst_23657__$1);

return statearr_23684;
})();
if(cljs.core.truth_(inst_23658)){
var statearr_23685_23712 = state_23680__$1;
(statearr_23685_23712[(1)] = (5));

} else {
var statearr_23686_23713 = state_23680__$1;
(statearr_23686_23713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23681 === (13))){
var state_23680__$1 = state_23680;
var statearr_23687_23714 = state_23680__$1;
(statearr_23687_23714[(2)] = null);

(statearr_23687_23714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23681 === (6))){
var inst_23657 = (state_23680[(7)]);
var inst_23663 = p.call(null,inst_23657);
var state_23680__$1 = state_23680;
if(cljs.core.truth_(inst_23663)){
var statearr_23688_23715 = state_23680__$1;
(statearr_23688_23715[(1)] = (9));

} else {
var statearr_23689_23716 = state_23680__$1;
(statearr_23689_23716[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23681 === (3))){
var inst_23678 = (state_23680[(2)]);
var state_23680__$1 = state_23680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23680__$1,inst_23678);
} else {
if((state_val_23681 === (12))){
var state_23680__$1 = state_23680;
var statearr_23690_23717 = state_23680__$1;
(statearr_23690_23717[(2)] = null);

(statearr_23690_23717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23681 === (2))){
var state_23680__$1 = state_23680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23680__$1,(4),ch);
} else {
if((state_val_23681 === (11))){
var inst_23657 = (state_23680[(7)]);
var inst_23667 = (state_23680[(2)]);
var state_23680__$1 = state_23680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23680__$1,(8),inst_23667,inst_23657);
} else {
if((state_val_23681 === (9))){
var state_23680__$1 = state_23680;
var statearr_23691_23718 = state_23680__$1;
(statearr_23691_23718[(2)] = tc);

(statearr_23691_23718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23681 === (5))){
var inst_23660 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23661 = cljs.core.async.close_BANG_.call(null,fc);
var state_23680__$1 = (function (){var statearr_23692 = state_23680;
(statearr_23692[(8)] = inst_23660);

return statearr_23692;
})();
var statearr_23693_23719 = state_23680__$1;
(statearr_23693_23719[(2)] = inst_23661);

(statearr_23693_23719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23681 === (14))){
var inst_23674 = (state_23680[(2)]);
var state_23680__$1 = state_23680;
var statearr_23694_23720 = state_23680__$1;
(statearr_23694_23720[(2)] = inst_23674);

(statearr_23694_23720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23681 === (10))){
var state_23680__$1 = state_23680;
var statearr_23695_23721 = state_23680__$1;
(statearr_23695_23721[(2)] = fc);

(statearr_23695_23721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23681 === (8))){
var inst_23669 = (state_23680[(2)]);
var state_23680__$1 = state_23680;
if(cljs.core.truth_(inst_23669)){
var statearr_23696_23722 = state_23680__$1;
(statearr_23696_23722[(1)] = (12));

} else {
var statearr_23697_23723 = state_23680__$1;
(statearr_23697_23723[(1)] = (13));

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
});})(c__23023__auto___23709,tc,fc))
;
return ((function (switch__22178__auto__,c__23023__auto___23709,tc,fc){
return (function() {
var cljs$core$async$state_machine__22179__auto__ = null;
var cljs$core$async$state_machine__22179__auto____0 = (function (){
var statearr_23701 = [null,null,null,null,null,null,null,null,null];
(statearr_23701[(0)] = cljs$core$async$state_machine__22179__auto__);

(statearr_23701[(1)] = (1));

return statearr_23701;
});
var cljs$core$async$state_machine__22179__auto____1 = (function (state_23680){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_23680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e23702){if((e23702 instanceof Object)){
var ex__22182__auto__ = e23702;
var statearr_23703_23724 = state_23680;
(statearr_23703_23724[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23725 = state_23680;
state_23680 = G__23725;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$state_machine__22179__auto__ = function(state_23680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22179__auto____1.call(this,state_23680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22179__auto____0;
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22179__auto____1;
return cljs$core$async$state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___23709,tc,fc))
})();
var state__23025__auto__ = (function (){var statearr_23704 = f__23024__auto__.call(null);
(statearr_23704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___23709);

return statearr_23704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___23709,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto__){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto__){
return (function (state_23789){
var state_val_23790 = (state_23789[(1)]);
if((state_val_23790 === (7))){
var inst_23785 = (state_23789[(2)]);
var state_23789__$1 = state_23789;
var statearr_23791_23812 = state_23789__$1;
(statearr_23791_23812[(2)] = inst_23785);

(statearr_23791_23812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (1))){
var inst_23769 = init;
var state_23789__$1 = (function (){var statearr_23792 = state_23789;
(statearr_23792[(7)] = inst_23769);

return statearr_23792;
})();
var statearr_23793_23813 = state_23789__$1;
(statearr_23793_23813[(2)] = null);

(statearr_23793_23813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (4))){
var inst_23772 = (state_23789[(8)]);
var inst_23772__$1 = (state_23789[(2)]);
var inst_23773 = (inst_23772__$1 == null);
var state_23789__$1 = (function (){var statearr_23794 = state_23789;
(statearr_23794[(8)] = inst_23772__$1);

return statearr_23794;
})();
if(cljs.core.truth_(inst_23773)){
var statearr_23795_23814 = state_23789__$1;
(statearr_23795_23814[(1)] = (5));

} else {
var statearr_23796_23815 = state_23789__$1;
(statearr_23796_23815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (6))){
var inst_23769 = (state_23789[(7)]);
var inst_23772 = (state_23789[(8)]);
var inst_23776 = (state_23789[(9)]);
var inst_23776__$1 = f.call(null,inst_23769,inst_23772);
var inst_23777 = cljs.core.reduced_QMARK_.call(null,inst_23776__$1);
var state_23789__$1 = (function (){var statearr_23797 = state_23789;
(statearr_23797[(9)] = inst_23776__$1);

return statearr_23797;
})();
if(inst_23777){
var statearr_23798_23816 = state_23789__$1;
(statearr_23798_23816[(1)] = (8));

} else {
var statearr_23799_23817 = state_23789__$1;
(statearr_23799_23817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (3))){
var inst_23787 = (state_23789[(2)]);
var state_23789__$1 = state_23789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23789__$1,inst_23787);
} else {
if((state_val_23790 === (2))){
var state_23789__$1 = state_23789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23789__$1,(4),ch);
} else {
if((state_val_23790 === (9))){
var inst_23776 = (state_23789[(9)]);
var inst_23769 = inst_23776;
var state_23789__$1 = (function (){var statearr_23800 = state_23789;
(statearr_23800[(7)] = inst_23769);

return statearr_23800;
})();
var statearr_23801_23818 = state_23789__$1;
(statearr_23801_23818[(2)] = null);

(statearr_23801_23818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (5))){
var inst_23769 = (state_23789[(7)]);
var state_23789__$1 = state_23789;
var statearr_23802_23819 = state_23789__$1;
(statearr_23802_23819[(2)] = inst_23769);

(statearr_23802_23819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (10))){
var inst_23783 = (state_23789[(2)]);
var state_23789__$1 = state_23789;
var statearr_23803_23820 = state_23789__$1;
(statearr_23803_23820[(2)] = inst_23783);

(statearr_23803_23820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (8))){
var inst_23776 = (state_23789[(9)]);
var inst_23779 = cljs.core.deref.call(null,inst_23776);
var state_23789__$1 = state_23789;
var statearr_23804_23821 = state_23789__$1;
(statearr_23804_23821[(2)] = inst_23779);

(statearr_23804_23821[(1)] = (10));


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
});})(c__23023__auto__))
;
return ((function (switch__22178__auto__,c__23023__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22179__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22179__auto____0 = (function (){
var statearr_23808 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23808[(0)] = cljs$core$async$reduce_$_state_machine__22179__auto__);

(statearr_23808[(1)] = (1));

return statearr_23808;
});
var cljs$core$async$reduce_$_state_machine__22179__auto____1 = (function (state_23789){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_23789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e23809){if((e23809 instanceof Object)){
var ex__22182__auto__ = e23809;
var statearr_23810_23822 = state_23789;
(statearr_23810_23822[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23823 = state_23789;
state_23789 = G__23823;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22179__auto__ = function(state_23789){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22179__auto____1.call(this,state_23789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22179__auto____0;
cljs$core$async$reduce_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22179__auto____1;
return cljs$core$async$reduce_$_state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto__))
})();
var state__23025__auto__ = (function (){var statearr_23811 = f__23024__auto__.call(null);
(statearr_23811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto__);

return statearr_23811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto__))
);

return c__23023__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23824 = [];
var len__21234__auto___23876 = arguments.length;
var i__21235__auto___23877 = (0);
while(true){
if((i__21235__auto___23877 < len__21234__auto___23876)){
args23824.push((arguments[i__21235__auto___23877]));

var G__23878 = (i__21235__auto___23877 + (1));
i__21235__auto___23877 = G__23878;
continue;
} else {
}
break;
}

var G__23826 = args23824.length;
switch (G__23826) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23824.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto__){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto__){
return (function (state_23851){
var state_val_23852 = (state_23851[(1)]);
if((state_val_23852 === (7))){
var inst_23833 = (state_23851[(2)]);
var state_23851__$1 = state_23851;
var statearr_23853_23880 = state_23851__$1;
(statearr_23853_23880[(2)] = inst_23833);

(statearr_23853_23880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (1))){
var inst_23827 = cljs.core.seq.call(null,coll);
var inst_23828 = inst_23827;
var state_23851__$1 = (function (){var statearr_23854 = state_23851;
(statearr_23854[(7)] = inst_23828);

return statearr_23854;
})();
var statearr_23855_23881 = state_23851__$1;
(statearr_23855_23881[(2)] = null);

(statearr_23855_23881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (4))){
var inst_23828 = (state_23851[(7)]);
var inst_23831 = cljs.core.first.call(null,inst_23828);
var state_23851__$1 = state_23851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23851__$1,(7),ch,inst_23831);
} else {
if((state_val_23852 === (13))){
var inst_23845 = (state_23851[(2)]);
var state_23851__$1 = state_23851;
var statearr_23856_23882 = state_23851__$1;
(statearr_23856_23882[(2)] = inst_23845);

(statearr_23856_23882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (6))){
var inst_23836 = (state_23851[(2)]);
var state_23851__$1 = state_23851;
if(cljs.core.truth_(inst_23836)){
var statearr_23857_23883 = state_23851__$1;
(statearr_23857_23883[(1)] = (8));

} else {
var statearr_23858_23884 = state_23851__$1;
(statearr_23858_23884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (3))){
var inst_23849 = (state_23851[(2)]);
var state_23851__$1 = state_23851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23851__$1,inst_23849);
} else {
if((state_val_23852 === (12))){
var state_23851__$1 = state_23851;
var statearr_23859_23885 = state_23851__$1;
(statearr_23859_23885[(2)] = null);

(statearr_23859_23885[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (2))){
var inst_23828 = (state_23851[(7)]);
var state_23851__$1 = state_23851;
if(cljs.core.truth_(inst_23828)){
var statearr_23860_23886 = state_23851__$1;
(statearr_23860_23886[(1)] = (4));

} else {
var statearr_23861_23887 = state_23851__$1;
(statearr_23861_23887[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (11))){
var inst_23842 = cljs.core.async.close_BANG_.call(null,ch);
var state_23851__$1 = state_23851;
var statearr_23862_23888 = state_23851__$1;
(statearr_23862_23888[(2)] = inst_23842);

(statearr_23862_23888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (9))){
var state_23851__$1 = state_23851;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23863_23889 = state_23851__$1;
(statearr_23863_23889[(1)] = (11));

} else {
var statearr_23864_23890 = state_23851__$1;
(statearr_23864_23890[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (5))){
var inst_23828 = (state_23851[(7)]);
var state_23851__$1 = state_23851;
var statearr_23865_23891 = state_23851__$1;
(statearr_23865_23891[(2)] = inst_23828);

(statearr_23865_23891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (10))){
var inst_23847 = (state_23851[(2)]);
var state_23851__$1 = state_23851;
var statearr_23866_23892 = state_23851__$1;
(statearr_23866_23892[(2)] = inst_23847);

(statearr_23866_23892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23852 === (8))){
var inst_23828 = (state_23851[(7)]);
var inst_23838 = cljs.core.next.call(null,inst_23828);
var inst_23828__$1 = inst_23838;
var state_23851__$1 = (function (){var statearr_23867 = state_23851;
(statearr_23867[(7)] = inst_23828__$1);

return statearr_23867;
})();
var statearr_23868_23893 = state_23851__$1;
(statearr_23868_23893[(2)] = null);

(statearr_23868_23893[(1)] = (2));


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
});})(c__23023__auto__))
;
return ((function (switch__22178__auto__,c__23023__auto__){
return (function() {
var cljs$core$async$state_machine__22179__auto__ = null;
var cljs$core$async$state_machine__22179__auto____0 = (function (){
var statearr_23872 = [null,null,null,null,null,null,null,null];
(statearr_23872[(0)] = cljs$core$async$state_machine__22179__auto__);

(statearr_23872[(1)] = (1));

return statearr_23872;
});
var cljs$core$async$state_machine__22179__auto____1 = (function (state_23851){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_23851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e23873){if((e23873 instanceof Object)){
var ex__22182__auto__ = e23873;
var statearr_23874_23894 = state_23851;
(statearr_23874_23894[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23895 = state_23851;
state_23851 = G__23895;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$state_machine__22179__auto__ = function(state_23851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22179__auto____1.call(this,state_23851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22179__auto____0;
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22179__auto____1;
return cljs$core$async$state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto__))
})();
var state__23025__auto__ = (function (){var statearr_23875 = f__23024__auto__.call(null);
(statearr_23875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto__);

return statearr_23875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto__))
);

return c__23023__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20822__auto__ = (((_ == null))?null:_);
var m__20823__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,_);
} else {
var m__20823__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20823__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m,ch);
} else {
var m__20823__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m);
} else {
var m__20823__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24121 = (function (mult,ch,cs,meta24122){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24122 = meta24122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24123,meta24122__$1){
var self__ = this;
var _24123__$1 = this;
return (new cljs.core.async.t_cljs$core$async24121(self__.mult,self__.ch,self__.cs,meta24122__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24123){
var self__ = this;
var _24123__$1 = this;
return self__.meta24122;
});})(cs))
;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24121.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24122","meta24122",353845817,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24121";

cljs.core.async.t_cljs$core$async24121.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async24121");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24121 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24121(mult__$1,ch__$1,cs__$1,meta24122){
return (new cljs.core.async.t_cljs$core$async24121(mult__$1,ch__$1,cs__$1,meta24122));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24121(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23023__auto___24346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___24346,cs,m,dchan,dctr,done){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___24346,cs,m,dchan,dctr,done){
return (function (state_24258){
var state_val_24259 = (state_24258[(1)]);
if((state_val_24259 === (7))){
var inst_24254 = (state_24258[(2)]);
var state_24258__$1 = state_24258;
var statearr_24260_24347 = state_24258__$1;
(statearr_24260_24347[(2)] = inst_24254);

(statearr_24260_24347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (20))){
var inst_24157 = (state_24258[(7)]);
var inst_24169 = cljs.core.first.call(null,inst_24157);
var inst_24170 = cljs.core.nth.call(null,inst_24169,(0),null);
var inst_24171 = cljs.core.nth.call(null,inst_24169,(1),null);
var state_24258__$1 = (function (){var statearr_24261 = state_24258;
(statearr_24261[(8)] = inst_24170);

return statearr_24261;
})();
if(cljs.core.truth_(inst_24171)){
var statearr_24262_24348 = state_24258__$1;
(statearr_24262_24348[(1)] = (22));

} else {
var statearr_24263_24349 = state_24258__$1;
(statearr_24263_24349[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (27))){
var inst_24206 = (state_24258[(9)]);
var inst_24201 = (state_24258[(10)]);
var inst_24199 = (state_24258[(11)]);
var inst_24126 = (state_24258[(12)]);
var inst_24206__$1 = cljs.core._nth.call(null,inst_24199,inst_24201);
var inst_24207 = cljs.core.async.put_BANG_.call(null,inst_24206__$1,inst_24126,done);
var state_24258__$1 = (function (){var statearr_24264 = state_24258;
(statearr_24264[(9)] = inst_24206__$1);

return statearr_24264;
})();
if(cljs.core.truth_(inst_24207)){
var statearr_24265_24350 = state_24258__$1;
(statearr_24265_24350[(1)] = (30));

} else {
var statearr_24266_24351 = state_24258__$1;
(statearr_24266_24351[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (1))){
var state_24258__$1 = state_24258;
var statearr_24267_24352 = state_24258__$1;
(statearr_24267_24352[(2)] = null);

(statearr_24267_24352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (24))){
var inst_24157 = (state_24258[(7)]);
var inst_24176 = (state_24258[(2)]);
var inst_24177 = cljs.core.next.call(null,inst_24157);
var inst_24135 = inst_24177;
var inst_24136 = null;
var inst_24137 = (0);
var inst_24138 = (0);
var state_24258__$1 = (function (){var statearr_24268 = state_24258;
(statearr_24268[(13)] = inst_24138);

(statearr_24268[(14)] = inst_24137);

(statearr_24268[(15)] = inst_24176);

(statearr_24268[(16)] = inst_24135);

(statearr_24268[(17)] = inst_24136);

return statearr_24268;
})();
var statearr_24269_24353 = state_24258__$1;
(statearr_24269_24353[(2)] = null);

(statearr_24269_24353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (39))){
var state_24258__$1 = state_24258;
var statearr_24273_24354 = state_24258__$1;
(statearr_24273_24354[(2)] = null);

(statearr_24273_24354[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (4))){
var inst_24126 = (state_24258[(12)]);
var inst_24126__$1 = (state_24258[(2)]);
var inst_24127 = (inst_24126__$1 == null);
var state_24258__$1 = (function (){var statearr_24274 = state_24258;
(statearr_24274[(12)] = inst_24126__$1);

return statearr_24274;
})();
if(cljs.core.truth_(inst_24127)){
var statearr_24275_24355 = state_24258__$1;
(statearr_24275_24355[(1)] = (5));

} else {
var statearr_24276_24356 = state_24258__$1;
(statearr_24276_24356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (15))){
var inst_24138 = (state_24258[(13)]);
var inst_24137 = (state_24258[(14)]);
var inst_24135 = (state_24258[(16)]);
var inst_24136 = (state_24258[(17)]);
var inst_24153 = (state_24258[(2)]);
var inst_24154 = (inst_24138 + (1));
var tmp24270 = inst_24137;
var tmp24271 = inst_24135;
var tmp24272 = inst_24136;
var inst_24135__$1 = tmp24271;
var inst_24136__$1 = tmp24272;
var inst_24137__$1 = tmp24270;
var inst_24138__$1 = inst_24154;
var state_24258__$1 = (function (){var statearr_24277 = state_24258;
(statearr_24277[(13)] = inst_24138__$1);

(statearr_24277[(14)] = inst_24137__$1);

(statearr_24277[(16)] = inst_24135__$1);

(statearr_24277[(18)] = inst_24153);

(statearr_24277[(17)] = inst_24136__$1);

return statearr_24277;
})();
var statearr_24278_24357 = state_24258__$1;
(statearr_24278_24357[(2)] = null);

(statearr_24278_24357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (21))){
var inst_24180 = (state_24258[(2)]);
var state_24258__$1 = state_24258;
var statearr_24282_24358 = state_24258__$1;
(statearr_24282_24358[(2)] = inst_24180);

(statearr_24282_24358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (31))){
var inst_24206 = (state_24258[(9)]);
var inst_24210 = done.call(null,null);
var inst_24211 = cljs.core.async.untap_STAR_.call(null,m,inst_24206);
var state_24258__$1 = (function (){var statearr_24283 = state_24258;
(statearr_24283[(19)] = inst_24210);

return statearr_24283;
})();
var statearr_24284_24359 = state_24258__$1;
(statearr_24284_24359[(2)] = inst_24211);

(statearr_24284_24359[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (32))){
var inst_24200 = (state_24258[(20)]);
var inst_24201 = (state_24258[(10)]);
var inst_24199 = (state_24258[(11)]);
var inst_24198 = (state_24258[(21)]);
var inst_24213 = (state_24258[(2)]);
var inst_24214 = (inst_24201 + (1));
var tmp24279 = inst_24200;
var tmp24280 = inst_24199;
var tmp24281 = inst_24198;
var inst_24198__$1 = tmp24281;
var inst_24199__$1 = tmp24280;
var inst_24200__$1 = tmp24279;
var inst_24201__$1 = inst_24214;
var state_24258__$1 = (function (){var statearr_24285 = state_24258;
(statearr_24285[(20)] = inst_24200__$1);

(statearr_24285[(10)] = inst_24201__$1);

(statearr_24285[(11)] = inst_24199__$1);

(statearr_24285[(21)] = inst_24198__$1);

(statearr_24285[(22)] = inst_24213);

return statearr_24285;
})();
var statearr_24286_24360 = state_24258__$1;
(statearr_24286_24360[(2)] = null);

(statearr_24286_24360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (40))){
var inst_24226 = (state_24258[(23)]);
var inst_24230 = done.call(null,null);
var inst_24231 = cljs.core.async.untap_STAR_.call(null,m,inst_24226);
var state_24258__$1 = (function (){var statearr_24287 = state_24258;
(statearr_24287[(24)] = inst_24230);

return statearr_24287;
})();
var statearr_24288_24361 = state_24258__$1;
(statearr_24288_24361[(2)] = inst_24231);

(statearr_24288_24361[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (33))){
var inst_24217 = (state_24258[(25)]);
var inst_24219 = cljs.core.chunked_seq_QMARK_.call(null,inst_24217);
var state_24258__$1 = state_24258;
if(inst_24219){
var statearr_24289_24362 = state_24258__$1;
(statearr_24289_24362[(1)] = (36));

} else {
var statearr_24290_24363 = state_24258__$1;
(statearr_24290_24363[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (13))){
var inst_24147 = (state_24258[(26)]);
var inst_24150 = cljs.core.async.close_BANG_.call(null,inst_24147);
var state_24258__$1 = state_24258;
var statearr_24291_24364 = state_24258__$1;
(statearr_24291_24364[(2)] = inst_24150);

(statearr_24291_24364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (22))){
var inst_24170 = (state_24258[(8)]);
var inst_24173 = cljs.core.async.close_BANG_.call(null,inst_24170);
var state_24258__$1 = state_24258;
var statearr_24292_24365 = state_24258__$1;
(statearr_24292_24365[(2)] = inst_24173);

(statearr_24292_24365[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (36))){
var inst_24217 = (state_24258[(25)]);
var inst_24221 = cljs.core.chunk_first.call(null,inst_24217);
var inst_24222 = cljs.core.chunk_rest.call(null,inst_24217);
var inst_24223 = cljs.core.count.call(null,inst_24221);
var inst_24198 = inst_24222;
var inst_24199 = inst_24221;
var inst_24200 = inst_24223;
var inst_24201 = (0);
var state_24258__$1 = (function (){var statearr_24293 = state_24258;
(statearr_24293[(20)] = inst_24200);

(statearr_24293[(10)] = inst_24201);

(statearr_24293[(11)] = inst_24199);

(statearr_24293[(21)] = inst_24198);

return statearr_24293;
})();
var statearr_24294_24366 = state_24258__$1;
(statearr_24294_24366[(2)] = null);

(statearr_24294_24366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (41))){
var inst_24217 = (state_24258[(25)]);
var inst_24233 = (state_24258[(2)]);
var inst_24234 = cljs.core.next.call(null,inst_24217);
var inst_24198 = inst_24234;
var inst_24199 = null;
var inst_24200 = (0);
var inst_24201 = (0);
var state_24258__$1 = (function (){var statearr_24295 = state_24258;
(statearr_24295[(27)] = inst_24233);

(statearr_24295[(20)] = inst_24200);

(statearr_24295[(10)] = inst_24201);

(statearr_24295[(11)] = inst_24199);

(statearr_24295[(21)] = inst_24198);

return statearr_24295;
})();
var statearr_24296_24367 = state_24258__$1;
(statearr_24296_24367[(2)] = null);

(statearr_24296_24367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (43))){
var state_24258__$1 = state_24258;
var statearr_24297_24368 = state_24258__$1;
(statearr_24297_24368[(2)] = null);

(statearr_24297_24368[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (29))){
var inst_24242 = (state_24258[(2)]);
var state_24258__$1 = state_24258;
var statearr_24298_24369 = state_24258__$1;
(statearr_24298_24369[(2)] = inst_24242);

(statearr_24298_24369[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (44))){
var inst_24251 = (state_24258[(2)]);
var state_24258__$1 = (function (){var statearr_24299 = state_24258;
(statearr_24299[(28)] = inst_24251);

return statearr_24299;
})();
var statearr_24300_24370 = state_24258__$1;
(statearr_24300_24370[(2)] = null);

(statearr_24300_24370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (6))){
var inst_24190 = (state_24258[(29)]);
var inst_24189 = cljs.core.deref.call(null,cs);
var inst_24190__$1 = cljs.core.keys.call(null,inst_24189);
var inst_24191 = cljs.core.count.call(null,inst_24190__$1);
var inst_24192 = cljs.core.reset_BANG_.call(null,dctr,inst_24191);
var inst_24197 = cljs.core.seq.call(null,inst_24190__$1);
var inst_24198 = inst_24197;
var inst_24199 = null;
var inst_24200 = (0);
var inst_24201 = (0);
var state_24258__$1 = (function (){var statearr_24301 = state_24258;
(statearr_24301[(29)] = inst_24190__$1);

(statearr_24301[(20)] = inst_24200);

(statearr_24301[(10)] = inst_24201);

(statearr_24301[(11)] = inst_24199);

(statearr_24301[(21)] = inst_24198);

(statearr_24301[(30)] = inst_24192);

return statearr_24301;
})();
var statearr_24302_24371 = state_24258__$1;
(statearr_24302_24371[(2)] = null);

(statearr_24302_24371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (28))){
var inst_24217 = (state_24258[(25)]);
var inst_24198 = (state_24258[(21)]);
var inst_24217__$1 = cljs.core.seq.call(null,inst_24198);
var state_24258__$1 = (function (){var statearr_24303 = state_24258;
(statearr_24303[(25)] = inst_24217__$1);

return statearr_24303;
})();
if(inst_24217__$1){
var statearr_24304_24372 = state_24258__$1;
(statearr_24304_24372[(1)] = (33));

} else {
var statearr_24305_24373 = state_24258__$1;
(statearr_24305_24373[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (25))){
var inst_24200 = (state_24258[(20)]);
var inst_24201 = (state_24258[(10)]);
var inst_24203 = (inst_24201 < inst_24200);
var inst_24204 = inst_24203;
var state_24258__$1 = state_24258;
if(cljs.core.truth_(inst_24204)){
var statearr_24306_24374 = state_24258__$1;
(statearr_24306_24374[(1)] = (27));

} else {
var statearr_24307_24375 = state_24258__$1;
(statearr_24307_24375[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (34))){
var state_24258__$1 = state_24258;
var statearr_24308_24376 = state_24258__$1;
(statearr_24308_24376[(2)] = null);

(statearr_24308_24376[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (17))){
var state_24258__$1 = state_24258;
var statearr_24309_24377 = state_24258__$1;
(statearr_24309_24377[(2)] = null);

(statearr_24309_24377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (3))){
var inst_24256 = (state_24258[(2)]);
var state_24258__$1 = state_24258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24258__$1,inst_24256);
} else {
if((state_val_24259 === (12))){
var inst_24185 = (state_24258[(2)]);
var state_24258__$1 = state_24258;
var statearr_24310_24378 = state_24258__$1;
(statearr_24310_24378[(2)] = inst_24185);

(statearr_24310_24378[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (2))){
var state_24258__$1 = state_24258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24258__$1,(4),ch);
} else {
if((state_val_24259 === (23))){
var state_24258__$1 = state_24258;
var statearr_24311_24379 = state_24258__$1;
(statearr_24311_24379[(2)] = null);

(statearr_24311_24379[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (35))){
var inst_24240 = (state_24258[(2)]);
var state_24258__$1 = state_24258;
var statearr_24312_24380 = state_24258__$1;
(statearr_24312_24380[(2)] = inst_24240);

(statearr_24312_24380[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (19))){
var inst_24157 = (state_24258[(7)]);
var inst_24161 = cljs.core.chunk_first.call(null,inst_24157);
var inst_24162 = cljs.core.chunk_rest.call(null,inst_24157);
var inst_24163 = cljs.core.count.call(null,inst_24161);
var inst_24135 = inst_24162;
var inst_24136 = inst_24161;
var inst_24137 = inst_24163;
var inst_24138 = (0);
var state_24258__$1 = (function (){var statearr_24313 = state_24258;
(statearr_24313[(13)] = inst_24138);

(statearr_24313[(14)] = inst_24137);

(statearr_24313[(16)] = inst_24135);

(statearr_24313[(17)] = inst_24136);

return statearr_24313;
})();
var statearr_24314_24381 = state_24258__$1;
(statearr_24314_24381[(2)] = null);

(statearr_24314_24381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (11))){
var inst_24135 = (state_24258[(16)]);
var inst_24157 = (state_24258[(7)]);
var inst_24157__$1 = cljs.core.seq.call(null,inst_24135);
var state_24258__$1 = (function (){var statearr_24315 = state_24258;
(statearr_24315[(7)] = inst_24157__$1);

return statearr_24315;
})();
if(inst_24157__$1){
var statearr_24316_24382 = state_24258__$1;
(statearr_24316_24382[(1)] = (16));

} else {
var statearr_24317_24383 = state_24258__$1;
(statearr_24317_24383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (9))){
var inst_24187 = (state_24258[(2)]);
var state_24258__$1 = state_24258;
var statearr_24318_24384 = state_24258__$1;
(statearr_24318_24384[(2)] = inst_24187);

(statearr_24318_24384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (5))){
var inst_24133 = cljs.core.deref.call(null,cs);
var inst_24134 = cljs.core.seq.call(null,inst_24133);
var inst_24135 = inst_24134;
var inst_24136 = null;
var inst_24137 = (0);
var inst_24138 = (0);
var state_24258__$1 = (function (){var statearr_24319 = state_24258;
(statearr_24319[(13)] = inst_24138);

(statearr_24319[(14)] = inst_24137);

(statearr_24319[(16)] = inst_24135);

(statearr_24319[(17)] = inst_24136);

return statearr_24319;
})();
var statearr_24320_24385 = state_24258__$1;
(statearr_24320_24385[(2)] = null);

(statearr_24320_24385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (14))){
var state_24258__$1 = state_24258;
var statearr_24321_24386 = state_24258__$1;
(statearr_24321_24386[(2)] = null);

(statearr_24321_24386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (45))){
var inst_24248 = (state_24258[(2)]);
var state_24258__$1 = state_24258;
var statearr_24322_24387 = state_24258__$1;
(statearr_24322_24387[(2)] = inst_24248);

(statearr_24322_24387[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (26))){
var inst_24190 = (state_24258[(29)]);
var inst_24244 = (state_24258[(2)]);
var inst_24245 = cljs.core.seq.call(null,inst_24190);
var state_24258__$1 = (function (){var statearr_24323 = state_24258;
(statearr_24323[(31)] = inst_24244);

return statearr_24323;
})();
if(inst_24245){
var statearr_24324_24388 = state_24258__$1;
(statearr_24324_24388[(1)] = (42));

} else {
var statearr_24325_24389 = state_24258__$1;
(statearr_24325_24389[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (16))){
var inst_24157 = (state_24258[(7)]);
var inst_24159 = cljs.core.chunked_seq_QMARK_.call(null,inst_24157);
var state_24258__$1 = state_24258;
if(inst_24159){
var statearr_24326_24390 = state_24258__$1;
(statearr_24326_24390[(1)] = (19));

} else {
var statearr_24327_24391 = state_24258__$1;
(statearr_24327_24391[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (38))){
var inst_24237 = (state_24258[(2)]);
var state_24258__$1 = state_24258;
var statearr_24328_24392 = state_24258__$1;
(statearr_24328_24392[(2)] = inst_24237);

(statearr_24328_24392[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (30))){
var state_24258__$1 = state_24258;
var statearr_24329_24393 = state_24258__$1;
(statearr_24329_24393[(2)] = null);

(statearr_24329_24393[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (10))){
var inst_24138 = (state_24258[(13)]);
var inst_24136 = (state_24258[(17)]);
var inst_24146 = cljs.core._nth.call(null,inst_24136,inst_24138);
var inst_24147 = cljs.core.nth.call(null,inst_24146,(0),null);
var inst_24148 = cljs.core.nth.call(null,inst_24146,(1),null);
var state_24258__$1 = (function (){var statearr_24330 = state_24258;
(statearr_24330[(26)] = inst_24147);

return statearr_24330;
})();
if(cljs.core.truth_(inst_24148)){
var statearr_24331_24394 = state_24258__$1;
(statearr_24331_24394[(1)] = (13));

} else {
var statearr_24332_24395 = state_24258__$1;
(statearr_24332_24395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (18))){
var inst_24183 = (state_24258[(2)]);
var state_24258__$1 = state_24258;
var statearr_24333_24396 = state_24258__$1;
(statearr_24333_24396[(2)] = inst_24183);

(statearr_24333_24396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (42))){
var state_24258__$1 = state_24258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24258__$1,(45),dchan);
} else {
if((state_val_24259 === (37))){
var inst_24226 = (state_24258[(23)]);
var inst_24217 = (state_24258[(25)]);
var inst_24126 = (state_24258[(12)]);
var inst_24226__$1 = cljs.core.first.call(null,inst_24217);
var inst_24227 = cljs.core.async.put_BANG_.call(null,inst_24226__$1,inst_24126,done);
var state_24258__$1 = (function (){var statearr_24334 = state_24258;
(statearr_24334[(23)] = inst_24226__$1);

return statearr_24334;
})();
if(cljs.core.truth_(inst_24227)){
var statearr_24335_24397 = state_24258__$1;
(statearr_24335_24397[(1)] = (39));

} else {
var statearr_24336_24398 = state_24258__$1;
(statearr_24336_24398[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24259 === (8))){
var inst_24138 = (state_24258[(13)]);
var inst_24137 = (state_24258[(14)]);
var inst_24140 = (inst_24138 < inst_24137);
var inst_24141 = inst_24140;
var state_24258__$1 = state_24258;
if(cljs.core.truth_(inst_24141)){
var statearr_24337_24399 = state_24258__$1;
(statearr_24337_24399[(1)] = (10));

} else {
var statearr_24338_24400 = state_24258__$1;
(statearr_24338_24400[(1)] = (11));

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
});})(c__23023__auto___24346,cs,m,dchan,dctr,done))
;
return ((function (switch__22178__auto__,c__23023__auto___24346,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22179__auto__ = null;
var cljs$core$async$mult_$_state_machine__22179__auto____0 = (function (){
var statearr_24342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24342[(0)] = cljs$core$async$mult_$_state_machine__22179__auto__);

(statearr_24342[(1)] = (1));

return statearr_24342;
});
var cljs$core$async$mult_$_state_machine__22179__auto____1 = (function (state_24258){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_24258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e24343){if((e24343 instanceof Object)){
var ex__22182__auto__ = e24343;
var statearr_24344_24401 = state_24258;
(statearr_24344_24401[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24402 = state_24258;
state_24258 = G__24402;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22179__auto__ = function(state_24258){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22179__auto____1.call(this,state_24258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22179__auto____0;
cljs$core$async$mult_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22179__auto____1;
return cljs$core$async$mult_$_state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___24346,cs,m,dchan,dctr,done))
})();
var state__23025__auto__ = (function (){var statearr_24345 = f__23024__auto__.call(null);
(statearr_24345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___24346);

return statearr_24345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___24346,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24403 = [];
var len__21234__auto___24406 = arguments.length;
var i__21235__auto___24407 = (0);
while(true){
if((i__21235__auto___24407 < len__21234__auto___24406)){
args24403.push((arguments[i__21235__auto___24407]));

var G__24408 = (i__21235__auto___24407 + (1));
i__21235__auto___24407 = G__24408;
continue;
} else {
}
break;
}

var G__24405 = args24403.length;
switch (G__24405) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24403.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m,ch);
} else {
var m__20823__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m,ch);
} else {
var m__20823__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m);
} else {
var m__20823__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m,state_map);
} else {
var m__20823__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20822__auto__ = (((m == null))?null:m);
var m__20823__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,m,mode);
} else {
var m__20823__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21241__auto__ = [];
var len__21234__auto___24420 = arguments.length;
var i__21235__auto___24421 = (0);
while(true){
if((i__21235__auto___24421 < len__21234__auto___24420)){
args__21241__auto__.push((arguments[i__21235__auto___24421]));

var G__24422 = (i__21235__auto___24421 + (1));
i__21235__auto___24421 = G__24422;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((3) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21242__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24414){
var map__24415 = p__24414;
var map__24415__$1 = ((((!((map__24415 == null)))?((((map__24415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24415):map__24415);
var opts = map__24415__$1;
var statearr_24417_24423 = state;
(statearr_24417_24423[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24415,map__24415__$1,opts){
return (function (val){
var statearr_24418_24424 = state;
(statearr_24418_24424[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24415,map__24415__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24419_24425 = state;
(statearr_24419_24425[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24410){
var G__24411 = cljs.core.first.call(null,seq24410);
var seq24410__$1 = cljs.core.next.call(null,seq24410);
var G__24412 = cljs.core.first.call(null,seq24410__$1);
var seq24410__$2 = cljs.core.next.call(null,seq24410__$1);
var G__24413 = cljs.core.first.call(null,seq24410__$2);
var seq24410__$3 = cljs.core.next.call(null,seq24410__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24411,G__24412,G__24413,seq24410__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24591 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24592){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24592 = meta24592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24593,meta24592__$1){
var self__ = this;
var _24593__$1 = this;
return (new cljs.core.async.t_cljs$core$async24591(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24592__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24593){
var self__ = this;
var _24593__$1 = this;
return self__.meta24592;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24591.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24592","meta24592",-244285144,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24591";

cljs.core.async.t_cljs$core$async24591.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async24591");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24591 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24591(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24592){
return (new cljs.core.async.t_cljs$core$async24591(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24592));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24591(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23023__auto___24756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___24756,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___24756,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24693){
var state_val_24694 = (state_24693[(1)]);
if((state_val_24694 === (7))){
var inst_24609 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
var statearr_24695_24757 = state_24693__$1;
(statearr_24695_24757[(2)] = inst_24609);

(statearr_24695_24757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (20))){
var inst_24621 = (state_24693[(7)]);
var state_24693__$1 = state_24693;
var statearr_24696_24758 = state_24693__$1;
(statearr_24696_24758[(2)] = inst_24621);

(statearr_24696_24758[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (27))){
var state_24693__$1 = state_24693;
var statearr_24697_24759 = state_24693__$1;
(statearr_24697_24759[(2)] = null);

(statearr_24697_24759[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (1))){
var inst_24597 = (state_24693[(8)]);
var inst_24597__$1 = calc_state.call(null);
var inst_24599 = (inst_24597__$1 == null);
var inst_24600 = cljs.core.not.call(null,inst_24599);
var state_24693__$1 = (function (){var statearr_24698 = state_24693;
(statearr_24698[(8)] = inst_24597__$1);

return statearr_24698;
})();
if(inst_24600){
var statearr_24699_24760 = state_24693__$1;
(statearr_24699_24760[(1)] = (2));

} else {
var statearr_24700_24761 = state_24693__$1;
(statearr_24700_24761[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (24))){
var inst_24653 = (state_24693[(9)]);
var inst_24667 = (state_24693[(10)]);
var inst_24644 = (state_24693[(11)]);
var inst_24667__$1 = inst_24644.call(null,inst_24653);
var state_24693__$1 = (function (){var statearr_24701 = state_24693;
(statearr_24701[(10)] = inst_24667__$1);

return statearr_24701;
})();
if(cljs.core.truth_(inst_24667__$1)){
var statearr_24702_24762 = state_24693__$1;
(statearr_24702_24762[(1)] = (29));

} else {
var statearr_24703_24763 = state_24693__$1;
(statearr_24703_24763[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (4))){
var inst_24612 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
if(cljs.core.truth_(inst_24612)){
var statearr_24704_24764 = state_24693__$1;
(statearr_24704_24764[(1)] = (8));

} else {
var statearr_24705_24765 = state_24693__$1;
(statearr_24705_24765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (15))){
var inst_24638 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
if(cljs.core.truth_(inst_24638)){
var statearr_24706_24766 = state_24693__$1;
(statearr_24706_24766[(1)] = (19));

} else {
var statearr_24707_24767 = state_24693__$1;
(statearr_24707_24767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (21))){
var inst_24643 = (state_24693[(12)]);
var inst_24643__$1 = (state_24693[(2)]);
var inst_24644 = cljs.core.get.call(null,inst_24643__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24645 = cljs.core.get.call(null,inst_24643__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24646 = cljs.core.get.call(null,inst_24643__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24693__$1 = (function (){var statearr_24708 = state_24693;
(statearr_24708[(13)] = inst_24645);

(statearr_24708[(11)] = inst_24644);

(statearr_24708[(12)] = inst_24643__$1);

return statearr_24708;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24693__$1,(22),inst_24646);
} else {
if((state_val_24694 === (31))){
var inst_24675 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
if(cljs.core.truth_(inst_24675)){
var statearr_24709_24768 = state_24693__$1;
(statearr_24709_24768[(1)] = (32));

} else {
var statearr_24710_24769 = state_24693__$1;
(statearr_24710_24769[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (32))){
var inst_24652 = (state_24693[(14)]);
var state_24693__$1 = state_24693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24693__$1,(35),out,inst_24652);
} else {
if((state_val_24694 === (33))){
var inst_24643 = (state_24693[(12)]);
var inst_24621 = inst_24643;
var state_24693__$1 = (function (){var statearr_24711 = state_24693;
(statearr_24711[(7)] = inst_24621);

return statearr_24711;
})();
var statearr_24712_24770 = state_24693__$1;
(statearr_24712_24770[(2)] = null);

(statearr_24712_24770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (13))){
var inst_24621 = (state_24693[(7)]);
var inst_24628 = inst_24621.cljs$lang$protocol_mask$partition0$;
var inst_24629 = (inst_24628 & (64));
var inst_24630 = inst_24621.cljs$core$ISeq$;
var inst_24631 = (inst_24629) || (inst_24630);
var state_24693__$1 = state_24693;
if(cljs.core.truth_(inst_24631)){
var statearr_24713_24771 = state_24693__$1;
(statearr_24713_24771[(1)] = (16));

} else {
var statearr_24714_24772 = state_24693__$1;
(statearr_24714_24772[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (22))){
var inst_24653 = (state_24693[(9)]);
var inst_24652 = (state_24693[(14)]);
var inst_24651 = (state_24693[(2)]);
var inst_24652__$1 = cljs.core.nth.call(null,inst_24651,(0),null);
var inst_24653__$1 = cljs.core.nth.call(null,inst_24651,(1),null);
var inst_24654 = (inst_24652__$1 == null);
var inst_24655 = cljs.core._EQ_.call(null,inst_24653__$1,change);
var inst_24656 = (inst_24654) || (inst_24655);
var state_24693__$1 = (function (){var statearr_24715 = state_24693;
(statearr_24715[(9)] = inst_24653__$1);

(statearr_24715[(14)] = inst_24652__$1);

return statearr_24715;
})();
if(cljs.core.truth_(inst_24656)){
var statearr_24716_24773 = state_24693__$1;
(statearr_24716_24773[(1)] = (23));

} else {
var statearr_24717_24774 = state_24693__$1;
(statearr_24717_24774[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (36))){
var inst_24643 = (state_24693[(12)]);
var inst_24621 = inst_24643;
var state_24693__$1 = (function (){var statearr_24718 = state_24693;
(statearr_24718[(7)] = inst_24621);

return statearr_24718;
})();
var statearr_24719_24775 = state_24693__$1;
(statearr_24719_24775[(2)] = null);

(statearr_24719_24775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (29))){
var inst_24667 = (state_24693[(10)]);
var state_24693__$1 = state_24693;
var statearr_24720_24776 = state_24693__$1;
(statearr_24720_24776[(2)] = inst_24667);

(statearr_24720_24776[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (6))){
var state_24693__$1 = state_24693;
var statearr_24721_24777 = state_24693__$1;
(statearr_24721_24777[(2)] = false);

(statearr_24721_24777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (28))){
var inst_24663 = (state_24693[(2)]);
var inst_24664 = calc_state.call(null);
var inst_24621 = inst_24664;
var state_24693__$1 = (function (){var statearr_24722 = state_24693;
(statearr_24722[(15)] = inst_24663);

(statearr_24722[(7)] = inst_24621);

return statearr_24722;
})();
var statearr_24723_24778 = state_24693__$1;
(statearr_24723_24778[(2)] = null);

(statearr_24723_24778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (25))){
var inst_24689 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
var statearr_24724_24779 = state_24693__$1;
(statearr_24724_24779[(2)] = inst_24689);

(statearr_24724_24779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (34))){
var inst_24687 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
var statearr_24725_24780 = state_24693__$1;
(statearr_24725_24780[(2)] = inst_24687);

(statearr_24725_24780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (17))){
var state_24693__$1 = state_24693;
var statearr_24726_24781 = state_24693__$1;
(statearr_24726_24781[(2)] = false);

(statearr_24726_24781[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (3))){
var state_24693__$1 = state_24693;
var statearr_24727_24782 = state_24693__$1;
(statearr_24727_24782[(2)] = false);

(statearr_24727_24782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (12))){
var inst_24691 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24693__$1,inst_24691);
} else {
if((state_val_24694 === (2))){
var inst_24597 = (state_24693[(8)]);
var inst_24602 = inst_24597.cljs$lang$protocol_mask$partition0$;
var inst_24603 = (inst_24602 & (64));
var inst_24604 = inst_24597.cljs$core$ISeq$;
var inst_24605 = (inst_24603) || (inst_24604);
var state_24693__$1 = state_24693;
if(cljs.core.truth_(inst_24605)){
var statearr_24728_24783 = state_24693__$1;
(statearr_24728_24783[(1)] = (5));

} else {
var statearr_24729_24784 = state_24693__$1;
(statearr_24729_24784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (23))){
var inst_24652 = (state_24693[(14)]);
var inst_24658 = (inst_24652 == null);
var state_24693__$1 = state_24693;
if(cljs.core.truth_(inst_24658)){
var statearr_24730_24785 = state_24693__$1;
(statearr_24730_24785[(1)] = (26));

} else {
var statearr_24731_24786 = state_24693__$1;
(statearr_24731_24786[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (35))){
var inst_24678 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
if(cljs.core.truth_(inst_24678)){
var statearr_24732_24787 = state_24693__$1;
(statearr_24732_24787[(1)] = (36));

} else {
var statearr_24733_24788 = state_24693__$1;
(statearr_24733_24788[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (19))){
var inst_24621 = (state_24693[(7)]);
var inst_24640 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24621);
var state_24693__$1 = state_24693;
var statearr_24734_24789 = state_24693__$1;
(statearr_24734_24789[(2)] = inst_24640);

(statearr_24734_24789[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (11))){
var inst_24621 = (state_24693[(7)]);
var inst_24625 = (inst_24621 == null);
var inst_24626 = cljs.core.not.call(null,inst_24625);
var state_24693__$1 = state_24693;
if(inst_24626){
var statearr_24735_24790 = state_24693__$1;
(statearr_24735_24790[(1)] = (13));

} else {
var statearr_24736_24791 = state_24693__$1;
(statearr_24736_24791[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (9))){
var inst_24597 = (state_24693[(8)]);
var state_24693__$1 = state_24693;
var statearr_24737_24792 = state_24693__$1;
(statearr_24737_24792[(2)] = inst_24597);

(statearr_24737_24792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (5))){
var state_24693__$1 = state_24693;
var statearr_24738_24793 = state_24693__$1;
(statearr_24738_24793[(2)] = true);

(statearr_24738_24793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (14))){
var state_24693__$1 = state_24693;
var statearr_24739_24794 = state_24693__$1;
(statearr_24739_24794[(2)] = false);

(statearr_24739_24794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (26))){
var inst_24653 = (state_24693[(9)]);
var inst_24660 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24653);
var state_24693__$1 = state_24693;
var statearr_24740_24795 = state_24693__$1;
(statearr_24740_24795[(2)] = inst_24660);

(statearr_24740_24795[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (16))){
var state_24693__$1 = state_24693;
var statearr_24741_24796 = state_24693__$1;
(statearr_24741_24796[(2)] = true);

(statearr_24741_24796[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (38))){
var inst_24683 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
var statearr_24742_24797 = state_24693__$1;
(statearr_24742_24797[(2)] = inst_24683);

(statearr_24742_24797[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (30))){
var inst_24645 = (state_24693[(13)]);
var inst_24653 = (state_24693[(9)]);
var inst_24644 = (state_24693[(11)]);
var inst_24670 = cljs.core.empty_QMARK_.call(null,inst_24644);
var inst_24671 = inst_24645.call(null,inst_24653);
var inst_24672 = cljs.core.not.call(null,inst_24671);
var inst_24673 = (inst_24670) && (inst_24672);
var state_24693__$1 = state_24693;
var statearr_24743_24798 = state_24693__$1;
(statearr_24743_24798[(2)] = inst_24673);

(statearr_24743_24798[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (10))){
var inst_24597 = (state_24693[(8)]);
var inst_24617 = (state_24693[(2)]);
var inst_24618 = cljs.core.get.call(null,inst_24617,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24619 = cljs.core.get.call(null,inst_24617,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24620 = cljs.core.get.call(null,inst_24617,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24621 = inst_24597;
var state_24693__$1 = (function (){var statearr_24744 = state_24693;
(statearr_24744[(16)] = inst_24619);

(statearr_24744[(17)] = inst_24618);

(statearr_24744[(7)] = inst_24621);

(statearr_24744[(18)] = inst_24620);

return statearr_24744;
})();
var statearr_24745_24799 = state_24693__$1;
(statearr_24745_24799[(2)] = null);

(statearr_24745_24799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (18))){
var inst_24635 = (state_24693[(2)]);
var state_24693__$1 = state_24693;
var statearr_24746_24800 = state_24693__$1;
(statearr_24746_24800[(2)] = inst_24635);

(statearr_24746_24800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (37))){
var state_24693__$1 = state_24693;
var statearr_24747_24801 = state_24693__$1;
(statearr_24747_24801[(2)] = null);

(statearr_24747_24801[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24694 === (8))){
var inst_24597 = (state_24693[(8)]);
var inst_24614 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24597);
var state_24693__$1 = state_24693;
var statearr_24748_24802 = state_24693__$1;
(statearr_24748_24802[(2)] = inst_24614);

(statearr_24748_24802[(1)] = (10));


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
});})(c__23023__auto___24756,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22178__auto__,c__23023__auto___24756,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22179__auto__ = null;
var cljs$core$async$mix_$_state_machine__22179__auto____0 = (function (){
var statearr_24752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24752[(0)] = cljs$core$async$mix_$_state_machine__22179__auto__);

(statearr_24752[(1)] = (1));

return statearr_24752;
});
var cljs$core$async$mix_$_state_machine__22179__auto____1 = (function (state_24693){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_24693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e24753){if((e24753 instanceof Object)){
var ex__22182__auto__ = e24753;
var statearr_24754_24803 = state_24693;
(statearr_24754_24803[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24804 = state_24693;
state_24693 = G__24804;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22179__auto__ = function(state_24693){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22179__auto____1.call(this,state_24693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22179__auto____0;
cljs$core$async$mix_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22179__auto____1;
return cljs$core$async$mix_$_state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___24756,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23025__auto__ = (function (){var statearr_24755 = f__23024__auto__.call(null);
(statearr_24755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___24756);

return statearr_24755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___24756,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20822__auto__ = (((p == null))?null:p);
var m__20823__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20823__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20822__auto__ = (((p == null))?null:p);
var m__20823__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,p,v,ch);
} else {
var m__20823__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24805 = [];
var len__21234__auto___24808 = arguments.length;
var i__21235__auto___24809 = (0);
while(true){
if((i__21235__auto___24809 < len__21234__auto___24808)){
args24805.push((arguments[i__21235__auto___24809]));

var G__24810 = (i__21235__auto___24809 + (1));
i__21235__auto___24809 = G__24810;
continue;
} else {
}
break;
}

var G__24807 = args24805.length;
switch (G__24807) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24805.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20822__auto__ = (((p == null))?null:p);
var m__20823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,p);
} else {
var m__20823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20822__auto__ = (((p == null))?null:p);
var m__20823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20822__auto__)]);
if(!((m__20823__auto__ == null))){
return m__20823__auto__.call(null,p,v);
} else {
var m__20823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20823__auto____$1 == null))){
return m__20823__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var args24813 = [];
var len__21234__auto___24938 = arguments.length;
var i__21235__auto___24939 = (0);
while(true){
if((i__21235__auto___24939 < len__21234__auto___24938)){
args24813.push((arguments[i__21235__auto___24939]));

var G__24940 = (i__21235__auto___24939 + (1));
i__21235__auto___24939 = G__24940;
continue;
} else {
}
break;
}

var G__24815 = args24813.length;
switch (G__24815) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24813.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20159__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20159__auto__,mults){
return (function (p1__24812_SHARP_){
if(cljs.core.truth_(p1__24812_SHARP_.call(null,topic))){
return p1__24812_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24812_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20159__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24816 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24816 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24817){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24817 = meta24817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24818,meta24817__$1){
var self__ = this;
var _24818__$1 = this;
return (new cljs.core.async.t_cljs$core$async24816(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24817__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24818){
var self__ = this;
var _24818__$1 = this;
return self__.meta24817;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24817","meta24817",575322785,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24816";

cljs.core.async.t_cljs$core$async24816.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async24816");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24816 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24816(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24817){
return (new cljs.core.async.t_cljs$core$async24816(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24817));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24816(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23023__auto___24942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___24942,mults,ensure_mult,p){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___24942,mults,ensure_mult,p){
return (function (state_24890){
var state_val_24891 = (state_24890[(1)]);
if((state_val_24891 === (7))){
var inst_24886 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24892_24943 = state_24890__$1;
(statearr_24892_24943[(2)] = inst_24886);

(statearr_24892_24943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (20))){
var state_24890__$1 = state_24890;
var statearr_24893_24944 = state_24890__$1;
(statearr_24893_24944[(2)] = null);

(statearr_24893_24944[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (1))){
var state_24890__$1 = state_24890;
var statearr_24894_24945 = state_24890__$1;
(statearr_24894_24945[(2)] = null);

(statearr_24894_24945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (24))){
var inst_24869 = (state_24890[(7)]);
var inst_24878 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24869);
var state_24890__$1 = state_24890;
var statearr_24895_24946 = state_24890__$1;
(statearr_24895_24946[(2)] = inst_24878);

(statearr_24895_24946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (4))){
var inst_24821 = (state_24890[(8)]);
var inst_24821__$1 = (state_24890[(2)]);
var inst_24822 = (inst_24821__$1 == null);
var state_24890__$1 = (function (){var statearr_24896 = state_24890;
(statearr_24896[(8)] = inst_24821__$1);

return statearr_24896;
})();
if(cljs.core.truth_(inst_24822)){
var statearr_24897_24947 = state_24890__$1;
(statearr_24897_24947[(1)] = (5));

} else {
var statearr_24898_24948 = state_24890__$1;
(statearr_24898_24948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (15))){
var inst_24863 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24899_24949 = state_24890__$1;
(statearr_24899_24949[(2)] = inst_24863);

(statearr_24899_24949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (21))){
var inst_24883 = (state_24890[(2)]);
var state_24890__$1 = (function (){var statearr_24900 = state_24890;
(statearr_24900[(9)] = inst_24883);

return statearr_24900;
})();
var statearr_24901_24950 = state_24890__$1;
(statearr_24901_24950[(2)] = null);

(statearr_24901_24950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (13))){
var inst_24845 = (state_24890[(10)]);
var inst_24847 = cljs.core.chunked_seq_QMARK_.call(null,inst_24845);
var state_24890__$1 = state_24890;
if(inst_24847){
var statearr_24902_24951 = state_24890__$1;
(statearr_24902_24951[(1)] = (16));

} else {
var statearr_24903_24952 = state_24890__$1;
(statearr_24903_24952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (22))){
var inst_24875 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
if(cljs.core.truth_(inst_24875)){
var statearr_24904_24953 = state_24890__$1;
(statearr_24904_24953[(1)] = (23));

} else {
var statearr_24905_24954 = state_24890__$1;
(statearr_24905_24954[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (6))){
var inst_24821 = (state_24890[(8)]);
var inst_24869 = (state_24890[(7)]);
var inst_24871 = (state_24890[(11)]);
var inst_24869__$1 = topic_fn.call(null,inst_24821);
var inst_24870 = cljs.core.deref.call(null,mults);
var inst_24871__$1 = cljs.core.get.call(null,inst_24870,inst_24869__$1);
var state_24890__$1 = (function (){var statearr_24906 = state_24890;
(statearr_24906[(7)] = inst_24869__$1);

(statearr_24906[(11)] = inst_24871__$1);

return statearr_24906;
})();
if(cljs.core.truth_(inst_24871__$1)){
var statearr_24907_24955 = state_24890__$1;
(statearr_24907_24955[(1)] = (19));

} else {
var statearr_24908_24956 = state_24890__$1;
(statearr_24908_24956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (25))){
var inst_24880 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24909_24957 = state_24890__$1;
(statearr_24909_24957[(2)] = inst_24880);

(statearr_24909_24957[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (17))){
var inst_24845 = (state_24890[(10)]);
var inst_24854 = cljs.core.first.call(null,inst_24845);
var inst_24855 = cljs.core.async.muxch_STAR_.call(null,inst_24854);
var inst_24856 = cljs.core.async.close_BANG_.call(null,inst_24855);
var inst_24857 = cljs.core.next.call(null,inst_24845);
var inst_24831 = inst_24857;
var inst_24832 = null;
var inst_24833 = (0);
var inst_24834 = (0);
var state_24890__$1 = (function (){var statearr_24910 = state_24890;
(statearr_24910[(12)] = inst_24856);

(statearr_24910[(13)] = inst_24833);

(statearr_24910[(14)] = inst_24831);

(statearr_24910[(15)] = inst_24834);

(statearr_24910[(16)] = inst_24832);

return statearr_24910;
})();
var statearr_24911_24958 = state_24890__$1;
(statearr_24911_24958[(2)] = null);

(statearr_24911_24958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (3))){
var inst_24888 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24890__$1,inst_24888);
} else {
if((state_val_24891 === (12))){
var inst_24865 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24912_24959 = state_24890__$1;
(statearr_24912_24959[(2)] = inst_24865);

(statearr_24912_24959[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (2))){
var state_24890__$1 = state_24890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24890__$1,(4),ch);
} else {
if((state_val_24891 === (23))){
var state_24890__$1 = state_24890;
var statearr_24913_24960 = state_24890__$1;
(statearr_24913_24960[(2)] = null);

(statearr_24913_24960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (19))){
var inst_24821 = (state_24890[(8)]);
var inst_24871 = (state_24890[(11)]);
var inst_24873 = cljs.core.async.muxch_STAR_.call(null,inst_24871);
var state_24890__$1 = state_24890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24890__$1,(22),inst_24873,inst_24821);
} else {
if((state_val_24891 === (11))){
var inst_24831 = (state_24890[(14)]);
var inst_24845 = (state_24890[(10)]);
var inst_24845__$1 = cljs.core.seq.call(null,inst_24831);
var state_24890__$1 = (function (){var statearr_24914 = state_24890;
(statearr_24914[(10)] = inst_24845__$1);

return statearr_24914;
})();
if(inst_24845__$1){
var statearr_24915_24961 = state_24890__$1;
(statearr_24915_24961[(1)] = (13));

} else {
var statearr_24916_24962 = state_24890__$1;
(statearr_24916_24962[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (9))){
var inst_24867 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24917_24963 = state_24890__$1;
(statearr_24917_24963[(2)] = inst_24867);

(statearr_24917_24963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (5))){
var inst_24828 = cljs.core.deref.call(null,mults);
var inst_24829 = cljs.core.vals.call(null,inst_24828);
var inst_24830 = cljs.core.seq.call(null,inst_24829);
var inst_24831 = inst_24830;
var inst_24832 = null;
var inst_24833 = (0);
var inst_24834 = (0);
var state_24890__$1 = (function (){var statearr_24918 = state_24890;
(statearr_24918[(13)] = inst_24833);

(statearr_24918[(14)] = inst_24831);

(statearr_24918[(15)] = inst_24834);

(statearr_24918[(16)] = inst_24832);

return statearr_24918;
})();
var statearr_24919_24964 = state_24890__$1;
(statearr_24919_24964[(2)] = null);

(statearr_24919_24964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (14))){
var state_24890__$1 = state_24890;
var statearr_24923_24965 = state_24890__$1;
(statearr_24923_24965[(2)] = null);

(statearr_24923_24965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (16))){
var inst_24845 = (state_24890[(10)]);
var inst_24849 = cljs.core.chunk_first.call(null,inst_24845);
var inst_24850 = cljs.core.chunk_rest.call(null,inst_24845);
var inst_24851 = cljs.core.count.call(null,inst_24849);
var inst_24831 = inst_24850;
var inst_24832 = inst_24849;
var inst_24833 = inst_24851;
var inst_24834 = (0);
var state_24890__$1 = (function (){var statearr_24924 = state_24890;
(statearr_24924[(13)] = inst_24833);

(statearr_24924[(14)] = inst_24831);

(statearr_24924[(15)] = inst_24834);

(statearr_24924[(16)] = inst_24832);

return statearr_24924;
})();
var statearr_24925_24966 = state_24890__$1;
(statearr_24925_24966[(2)] = null);

(statearr_24925_24966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (10))){
var inst_24833 = (state_24890[(13)]);
var inst_24831 = (state_24890[(14)]);
var inst_24834 = (state_24890[(15)]);
var inst_24832 = (state_24890[(16)]);
var inst_24839 = cljs.core._nth.call(null,inst_24832,inst_24834);
var inst_24840 = cljs.core.async.muxch_STAR_.call(null,inst_24839);
var inst_24841 = cljs.core.async.close_BANG_.call(null,inst_24840);
var inst_24842 = (inst_24834 + (1));
var tmp24920 = inst_24833;
var tmp24921 = inst_24831;
var tmp24922 = inst_24832;
var inst_24831__$1 = tmp24921;
var inst_24832__$1 = tmp24922;
var inst_24833__$1 = tmp24920;
var inst_24834__$1 = inst_24842;
var state_24890__$1 = (function (){var statearr_24926 = state_24890;
(statearr_24926[(13)] = inst_24833__$1);

(statearr_24926[(14)] = inst_24831__$1);

(statearr_24926[(15)] = inst_24834__$1);

(statearr_24926[(16)] = inst_24832__$1);

(statearr_24926[(17)] = inst_24841);

return statearr_24926;
})();
var statearr_24927_24967 = state_24890__$1;
(statearr_24927_24967[(2)] = null);

(statearr_24927_24967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (18))){
var inst_24860 = (state_24890[(2)]);
var state_24890__$1 = state_24890;
var statearr_24928_24968 = state_24890__$1;
(statearr_24928_24968[(2)] = inst_24860);

(statearr_24928_24968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24891 === (8))){
var inst_24833 = (state_24890[(13)]);
var inst_24834 = (state_24890[(15)]);
var inst_24836 = (inst_24834 < inst_24833);
var inst_24837 = inst_24836;
var state_24890__$1 = state_24890;
if(cljs.core.truth_(inst_24837)){
var statearr_24929_24969 = state_24890__$1;
(statearr_24929_24969[(1)] = (10));

} else {
var statearr_24930_24970 = state_24890__$1;
(statearr_24930_24970[(1)] = (11));

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
});})(c__23023__auto___24942,mults,ensure_mult,p))
;
return ((function (switch__22178__auto__,c__23023__auto___24942,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22179__auto__ = null;
var cljs$core$async$state_machine__22179__auto____0 = (function (){
var statearr_24934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24934[(0)] = cljs$core$async$state_machine__22179__auto__);

(statearr_24934[(1)] = (1));

return statearr_24934;
});
var cljs$core$async$state_machine__22179__auto____1 = (function (state_24890){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_24890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e24935){if((e24935 instanceof Object)){
var ex__22182__auto__ = e24935;
var statearr_24936_24971 = state_24890;
(statearr_24936_24971[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24972 = state_24890;
state_24890 = G__24972;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$state_machine__22179__auto__ = function(state_24890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22179__auto____1.call(this,state_24890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22179__auto____0;
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22179__auto____1;
return cljs$core$async$state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___24942,mults,ensure_mult,p))
})();
var state__23025__auto__ = (function (){var statearr_24937 = f__23024__auto__.call(null);
(statearr_24937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___24942);

return statearr_24937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___24942,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24973 = [];
var len__21234__auto___24976 = arguments.length;
var i__21235__auto___24977 = (0);
while(true){
if((i__21235__auto___24977 < len__21234__auto___24976)){
args24973.push((arguments[i__21235__auto___24977]));

var G__24978 = (i__21235__auto___24977 + (1));
i__21235__auto___24977 = G__24978;
continue;
} else {
}
break;
}

var G__24975 = args24973.length;
switch (G__24975) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24973.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24980 = [];
var len__21234__auto___24983 = arguments.length;
var i__21235__auto___24984 = (0);
while(true){
if((i__21235__auto___24984 < len__21234__auto___24983)){
args24980.push((arguments[i__21235__auto___24984]));

var G__24985 = (i__21235__auto___24984 + (1));
i__21235__auto___24984 = G__24985;
continue;
} else {
}
break;
}

var G__24982 = args24980.length;
switch (G__24982) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24980.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var args24987 = [];
var len__21234__auto___25058 = arguments.length;
var i__21235__auto___25059 = (0);
while(true){
if((i__21235__auto___25059 < len__21234__auto___25058)){
args24987.push((arguments[i__21235__auto___25059]));

var G__25060 = (i__21235__auto___25059 + (1));
i__21235__auto___25059 = G__25060;
continue;
} else {
}
break;
}

var G__24989 = args24987.length;
switch (G__24989) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24987.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23023__auto___25062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___25062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___25062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25028){
var state_val_25029 = (state_25028[(1)]);
if((state_val_25029 === (7))){
var state_25028__$1 = state_25028;
var statearr_25030_25063 = state_25028__$1;
(statearr_25030_25063[(2)] = null);

(statearr_25030_25063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (1))){
var state_25028__$1 = state_25028;
var statearr_25031_25064 = state_25028__$1;
(statearr_25031_25064[(2)] = null);

(statearr_25031_25064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (4))){
var inst_24992 = (state_25028[(7)]);
var inst_24994 = (inst_24992 < cnt);
var state_25028__$1 = state_25028;
if(cljs.core.truth_(inst_24994)){
var statearr_25032_25065 = state_25028__$1;
(statearr_25032_25065[(1)] = (6));

} else {
var statearr_25033_25066 = state_25028__$1;
(statearr_25033_25066[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (15))){
var inst_25024 = (state_25028[(2)]);
var state_25028__$1 = state_25028;
var statearr_25034_25067 = state_25028__$1;
(statearr_25034_25067[(2)] = inst_25024);

(statearr_25034_25067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (13))){
var inst_25017 = cljs.core.async.close_BANG_.call(null,out);
var state_25028__$1 = state_25028;
var statearr_25035_25068 = state_25028__$1;
(statearr_25035_25068[(2)] = inst_25017);

(statearr_25035_25068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (6))){
var state_25028__$1 = state_25028;
var statearr_25036_25069 = state_25028__$1;
(statearr_25036_25069[(2)] = null);

(statearr_25036_25069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (3))){
var inst_25026 = (state_25028[(2)]);
var state_25028__$1 = state_25028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25028__$1,inst_25026);
} else {
if((state_val_25029 === (12))){
var inst_25014 = (state_25028[(8)]);
var inst_25014__$1 = (state_25028[(2)]);
var inst_25015 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25014__$1);
var state_25028__$1 = (function (){var statearr_25037 = state_25028;
(statearr_25037[(8)] = inst_25014__$1);

return statearr_25037;
})();
if(cljs.core.truth_(inst_25015)){
var statearr_25038_25070 = state_25028__$1;
(statearr_25038_25070[(1)] = (13));

} else {
var statearr_25039_25071 = state_25028__$1;
(statearr_25039_25071[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (2))){
var inst_24991 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24992 = (0);
var state_25028__$1 = (function (){var statearr_25040 = state_25028;
(statearr_25040[(7)] = inst_24992);

(statearr_25040[(9)] = inst_24991);

return statearr_25040;
})();
var statearr_25041_25072 = state_25028__$1;
(statearr_25041_25072[(2)] = null);

(statearr_25041_25072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (11))){
var inst_24992 = (state_25028[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25028,(10),Object,null,(9));
var inst_25001 = chs__$1.call(null,inst_24992);
var inst_25002 = done.call(null,inst_24992);
var inst_25003 = cljs.core.async.take_BANG_.call(null,inst_25001,inst_25002);
var state_25028__$1 = state_25028;
var statearr_25042_25073 = state_25028__$1;
(statearr_25042_25073[(2)] = inst_25003);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25028__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (9))){
var inst_24992 = (state_25028[(7)]);
var inst_25005 = (state_25028[(2)]);
var inst_25006 = (inst_24992 + (1));
var inst_24992__$1 = inst_25006;
var state_25028__$1 = (function (){var statearr_25043 = state_25028;
(statearr_25043[(7)] = inst_24992__$1);

(statearr_25043[(10)] = inst_25005);

return statearr_25043;
})();
var statearr_25044_25074 = state_25028__$1;
(statearr_25044_25074[(2)] = null);

(statearr_25044_25074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (5))){
var inst_25012 = (state_25028[(2)]);
var state_25028__$1 = (function (){var statearr_25045 = state_25028;
(statearr_25045[(11)] = inst_25012);

return statearr_25045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25028__$1,(12),dchan);
} else {
if((state_val_25029 === (14))){
var inst_25014 = (state_25028[(8)]);
var inst_25019 = cljs.core.apply.call(null,f,inst_25014);
var state_25028__$1 = state_25028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25028__$1,(16),out,inst_25019);
} else {
if((state_val_25029 === (16))){
var inst_25021 = (state_25028[(2)]);
var state_25028__$1 = (function (){var statearr_25046 = state_25028;
(statearr_25046[(12)] = inst_25021);

return statearr_25046;
})();
var statearr_25047_25075 = state_25028__$1;
(statearr_25047_25075[(2)] = null);

(statearr_25047_25075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (10))){
var inst_24996 = (state_25028[(2)]);
var inst_24997 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25028__$1 = (function (){var statearr_25048 = state_25028;
(statearr_25048[(13)] = inst_24996);

return statearr_25048;
})();
var statearr_25049_25076 = state_25028__$1;
(statearr_25049_25076[(2)] = inst_24997);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25028__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (8))){
var inst_25010 = (state_25028[(2)]);
var state_25028__$1 = state_25028;
var statearr_25050_25077 = state_25028__$1;
(statearr_25050_25077[(2)] = inst_25010);

(statearr_25050_25077[(1)] = (5));


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
});})(c__23023__auto___25062,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22178__auto__,c__23023__auto___25062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22179__auto__ = null;
var cljs$core$async$state_machine__22179__auto____0 = (function (){
var statearr_25054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25054[(0)] = cljs$core$async$state_machine__22179__auto__);

(statearr_25054[(1)] = (1));

return statearr_25054;
});
var cljs$core$async$state_machine__22179__auto____1 = (function (state_25028){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_25028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e25055){if((e25055 instanceof Object)){
var ex__22182__auto__ = e25055;
var statearr_25056_25078 = state_25028;
(statearr_25056_25078[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25079 = state_25028;
state_25028 = G__25079;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$state_machine__22179__auto__ = function(state_25028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22179__auto____1.call(this,state_25028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22179__auto____0;
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22179__auto____1;
return cljs$core$async$state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___25062,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23025__auto__ = (function (){var statearr_25057 = f__23024__auto__.call(null);
(statearr_25057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___25062);

return statearr_25057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___25062,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25081 = [];
var len__21234__auto___25139 = arguments.length;
var i__21235__auto___25140 = (0);
while(true){
if((i__21235__auto___25140 < len__21234__auto___25139)){
args25081.push((arguments[i__21235__auto___25140]));

var G__25141 = (i__21235__auto___25140 + (1));
i__21235__auto___25140 = G__25141;
continue;
} else {
}
break;
}

var G__25083 = args25081.length;
switch (G__25083) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25081.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23023__auto___25143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___25143,out){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___25143,out){
return (function (state_25115){
var state_val_25116 = (state_25115[(1)]);
if((state_val_25116 === (7))){
var inst_25094 = (state_25115[(7)]);
var inst_25095 = (state_25115[(8)]);
var inst_25094__$1 = (state_25115[(2)]);
var inst_25095__$1 = cljs.core.nth.call(null,inst_25094__$1,(0),null);
var inst_25096 = cljs.core.nth.call(null,inst_25094__$1,(1),null);
var inst_25097 = (inst_25095__$1 == null);
var state_25115__$1 = (function (){var statearr_25117 = state_25115;
(statearr_25117[(7)] = inst_25094__$1);

(statearr_25117[(8)] = inst_25095__$1);

(statearr_25117[(9)] = inst_25096);

return statearr_25117;
})();
if(cljs.core.truth_(inst_25097)){
var statearr_25118_25144 = state_25115__$1;
(statearr_25118_25144[(1)] = (8));

} else {
var statearr_25119_25145 = state_25115__$1;
(statearr_25119_25145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25116 === (1))){
var inst_25084 = cljs.core.vec.call(null,chs);
var inst_25085 = inst_25084;
var state_25115__$1 = (function (){var statearr_25120 = state_25115;
(statearr_25120[(10)] = inst_25085);

return statearr_25120;
})();
var statearr_25121_25146 = state_25115__$1;
(statearr_25121_25146[(2)] = null);

(statearr_25121_25146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25116 === (4))){
var inst_25085 = (state_25115[(10)]);
var state_25115__$1 = state_25115;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25115__$1,(7),inst_25085);
} else {
if((state_val_25116 === (6))){
var inst_25111 = (state_25115[(2)]);
var state_25115__$1 = state_25115;
var statearr_25122_25147 = state_25115__$1;
(statearr_25122_25147[(2)] = inst_25111);

(statearr_25122_25147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25116 === (3))){
var inst_25113 = (state_25115[(2)]);
var state_25115__$1 = state_25115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25115__$1,inst_25113);
} else {
if((state_val_25116 === (2))){
var inst_25085 = (state_25115[(10)]);
var inst_25087 = cljs.core.count.call(null,inst_25085);
var inst_25088 = (inst_25087 > (0));
var state_25115__$1 = state_25115;
if(cljs.core.truth_(inst_25088)){
var statearr_25124_25148 = state_25115__$1;
(statearr_25124_25148[(1)] = (4));

} else {
var statearr_25125_25149 = state_25115__$1;
(statearr_25125_25149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25116 === (11))){
var inst_25085 = (state_25115[(10)]);
var inst_25104 = (state_25115[(2)]);
var tmp25123 = inst_25085;
var inst_25085__$1 = tmp25123;
var state_25115__$1 = (function (){var statearr_25126 = state_25115;
(statearr_25126[(11)] = inst_25104);

(statearr_25126[(10)] = inst_25085__$1);

return statearr_25126;
})();
var statearr_25127_25150 = state_25115__$1;
(statearr_25127_25150[(2)] = null);

(statearr_25127_25150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25116 === (9))){
var inst_25095 = (state_25115[(8)]);
var state_25115__$1 = state_25115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25115__$1,(11),out,inst_25095);
} else {
if((state_val_25116 === (5))){
var inst_25109 = cljs.core.async.close_BANG_.call(null,out);
var state_25115__$1 = state_25115;
var statearr_25128_25151 = state_25115__$1;
(statearr_25128_25151[(2)] = inst_25109);

(statearr_25128_25151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25116 === (10))){
var inst_25107 = (state_25115[(2)]);
var state_25115__$1 = state_25115;
var statearr_25129_25152 = state_25115__$1;
(statearr_25129_25152[(2)] = inst_25107);

(statearr_25129_25152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25116 === (8))){
var inst_25094 = (state_25115[(7)]);
var inst_25085 = (state_25115[(10)]);
var inst_25095 = (state_25115[(8)]);
var inst_25096 = (state_25115[(9)]);
var inst_25099 = (function (){var cs = inst_25085;
var vec__25090 = inst_25094;
var v = inst_25095;
var c = inst_25096;
return ((function (cs,vec__25090,v,c,inst_25094,inst_25085,inst_25095,inst_25096,state_val_25116,c__23023__auto___25143,out){
return (function (p1__25080_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25080_SHARP_);
});
;})(cs,vec__25090,v,c,inst_25094,inst_25085,inst_25095,inst_25096,state_val_25116,c__23023__auto___25143,out))
})();
var inst_25100 = cljs.core.filterv.call(null,inst_25099,inst_25085);
var inst_25085__$1 = inst_25100;
var state_25115__$1 = (function (){var statearr_25130 = state_25115;
(statearr_25130[(10)] = inst_25085__$1);

return statearr_25130;
})();
var statearr_25131_25153 = state_25115__$1;
(statearr_25131_25153[(2)] = null);

(statearr_25131_25153[(1)] = (2));


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
});})(c__23023__auto___25143,out))
;
return ((function (switch__22178__auto__,c__23023__auto___25143,out){
return (function() {
var cljs$core$async$state_machine__22179__auto__ = null;
var cljs$core$async$state_machine__22179__auto____0 = (function (){
var statearr_25135 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25135[(0)] = cljs$core$async$state_machine__22179__auto__);

(statearr_25135[(1)] = (1));

return statearr_25135;
});
var cljs$core$async$state_machine__22179__auto____1 = (function (state_25115){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_25115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e25136){if((e25136 instanceof Object)){
var ex__22182__auto__ = e25136;
var statearr_25137_25154 = state_25115;
(statearr_25137_25154[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25155 = state_25115;
state_25115 = G__25155;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$state_machine__22179__auto__ = function(state_25115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22179__auto____1.call(this,state_25115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22179__auto____0;
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22179__auto____1;
return cljs$core$async$state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___25143,out))
})();
var state__23025__auto__ = (function (){var statearr_25138 = f__23024__auto__.call(null);
(statearr_25138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___25143);

return statearr_25138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___25143,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25156 = [];
var len__21234__auto___25205 = arguments.length;
var i__21235__auto___25206 = (0);
while(true){
if((i__21235__auto___25206 < len__21234__auto___25205)){
args25156.push((arguments[i__21235__auto___25206]));

var G__25207 = (i__21235__auto___25206 + (1));
i__21235__auto___25206 = G__25207;
continue;
} else {
}
break;
}

var G__25158 = args25156.length;
switch (G__25158) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25156.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23023__auto___25209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___25209,out){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___25209,out){
return (function (state_25182){
var state_val_25183 = (state_25182[(1)]);
if((state_val_25183 === (7))){
var inst_25164 = (state_25182[(7)]);
var inst_25164__$1 = (state_25182[(2)]);
var inst_25165 = (inst_25164__$1 == null);
var inst_25166 = cljs.core.not.call(null,inst_25165);
var state_25182__$1 = (function (){var statearr_25184 = state_25182;
(statearr_25184[(7)] = inst_25164__$1);

return statearr_25184;
})();
if(inst_25166){
var statearr_25185_25210 = state_25182__$1;
(statearr_25185_25210[(1)] = (8));

} else {
var statearr_25186_25211 = state_25182__$1;
(statearr_25186_25211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (1))){
var inst_25159 = (0);
var state_25182__$1 = (function (){var statearr_25187 = state_25182;
(statearr_25187[(8)] = inst_25159);

return statearr_25187;
})();
var statearr_25188_25212 = state_25182__$1;
(statearr_25188_25212[(2)] = null);

(statearr_25188_25212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (4))){
var state_25182__$1 = state_25182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25182__$1,(7),ch);
} else {
if((state_val_25183 === (6))){
var inst_25177 = (state_25182[(2)]);
var state_25182__$1 = state_25182;
var statearr_25189_25213 = state_25182__$1;
(statearr_25189_25213[(2)] = inst_25177);

(statearr_25189_25213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (3))){
var inst_25179 = (state_25182[(2)]);
var inst_25180 = cljs.core.async.close_BANG_.call(null,out);
var state_25182__$1 = (function (){var statearr_25190 = state_25182;
(statearr_25190[(9)] = inst_25179);

return statearr_25190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25182__$1,inst_25180);
} else {
if((state_val_25183 === (2))){
var inst_25159 = (state_25182[(8)]);
var inst_25161 = (inst_25159 < n);
var state_25182__$1 = state_25182;
if(cljs.core.truth_(inst_25161)){
var statearr_25191_25214 = state_25182__$1;
(statearr_25191_25214[(1)] = (4));

} else {
var statearr_25192_25215 = state_25182__$1;
(statearr_25192_25215[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (11))){
var inst_25159 = (state_25182[(8)]);
var inst_25169 = (state_25182[(2)]);
var inst_25170 = (inst_25159 + (1));
var inst_25159__$1 = inst_25170;
var state_25182__$1 = (function (){var statearr_25193 = state_25182;
(statearr_25193[(8)] = inst_25159__$1);

(statearr_25193[(10)] = inst_25169);

return statearr_25193;
})();
var statearr_25194_25216 = state_25182__$1;
(statearr_25194_25216[(2)] = null);

(statearr_25194_25216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (9))){
var state_25182__$1 = state_25182;
var statearr_25195_25217 = state_25182__$1;
(statearr_25195_25217[(2)] = null);

(statearr_25195_25217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (5))){
var state_25182__$1 = state_25182;
var statearr_25196_25218 = state_25182__$1;
(statearr_25196_25218[(2)] = null);

(statearr_25196_25218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (10))){
var inst_25174 = (state_25182[(2)]);
var state_25182__$1 = state_25182;
var statearr_25197_25219 = state_25182__$1;
(statearr_25197_25219[(2)] = inst_25174);

(statearr_25197_25219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25183 === (8))){
var inst_25164 = (state_25182[(7)]);
var state_25182__$1 = state_25182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25182__$1,(11),out,inst_25164);
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
});})(c__23023__auto___25209,out))
;
return ((function (switch__22178__auto__,c__23023__auto___25209,out){
return (function() {
var cljs$core$async$state_machine__22179__auto__ = null;
var cljs$core$async$state_machine__22179__auto____0 = (function (){
var statearr_25201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25201[(0)] = cljs$core$async$state_machine__22179__auto__);

(statearr_25201[(1)] = (1));

return statearr_25201;
});
var cljs$core$async$state_machine__22179__auto____1 = (function (state_25182){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_25182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e25202){if((e25202 instanceof Object)){
var ex__22182__auto__ = e25202;
var statearr_25203_25220 = state_25182;
(statearr_25203_25220[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25221 = state_25182;
state_25182 = G__25221;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$state_machine__22179__auto__ = function(state_25182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22179__auto____1.call(this,state_25182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22179__auto____0;
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22179__auto____1;
return cljs$core$async$state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___25209,out))
})();
var state__23025__auto__ = (function (){var statearr_25204 = f__23024__auto__.call(null);
(statearr_25204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___25209);

return statearr_25204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___25209,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25229 = (function (map_LT_,f,ch,meta25230){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25230 = meta25230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25231,meta25230__$1){
var self__ = this;
var _25231__$1 = this;
return (new cljs.core.async.t_cljs$core$async25229(self__.map_LT_,self__.f,self__.ch,meta25230__$1));
});

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25231){
var self__ = this;
var _25231__$1 = this;
return self__.meta25230;
});

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25232 = (function (map_LT_,f,ch,meta25230,_,fn1,meta25233){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25230 = meta25230;
this._ = _;
this.fn1 = fn1;
this.meta25233 = meta25233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25234,meta25233__$1){
var self__ = this;
var _25234__$1 = this;
return (new cljs.core.async.t_cljs$core$async25232(self__.map_LT_,self__.f,self__.ch,self__.meta25230,self__._,self__.fn1,meta25233__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25234){
var self__ = this;
var _25234__$1 = this;
return self__.meta25233;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25222_SHARP_){
return f1.call(null,(((p1__25222_SHARP_ == null))?null:self__.f.call(null,p1__25222_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25232.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25230","meta25230",-156021009,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25229","cljs.core.async/t_cljs$core$async25229",-1418989971,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25233","meta25233",-975809832,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25232";

cljs.core.async.t_cljs$core$async25232.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async25232");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25232 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25232(map_LT___$1,f__$1,ch__$1,meta25230__$1,___$2,fn1__$1,meta25233){
return (new cljs.core.async.t_cljs$core$async25232(map_LT___$1,f__$1,ch__$1,meta25230__$1,___$2,fn1__$1,meta25233));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25232(self__.map_LT_,self__.f,self__.ch,self__.meta25230,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20147__auto__ = ret;
if(cljs.core.truth_(and__20147__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20147__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25230","meta25230",-156021009,null)], null);
});

cljs.core.async.t_cljs$core$async25229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25229";

cljs.core.async.t_cljs$core$async25229.cljs$lang$ctorPrWriter = (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async25229");
});

cljs.core.async.__GT_t_cljs$core$async25229 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25229(map_LT___$1,f__$1,ch__$1,meta25230){
return (new cljs.core.async.t_cljs$core$async25229(map_LT___$1,f__$1,ch__$1,meta25230));
});

}

return (new cljs.core.async.t_cljs$core$async25229(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25238 = (function (map_GT_,f,ch,meta25239){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25239 = meta25239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25240,meta25239__$1){
var self__ = this;
var _25240__$1 = this;
return (new cljs.core.async.t_cljs$core$async25238(self__.map_GT_,self__.f,self__.ch,meta25239__$1));
});

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25240){
var self__ = this;
var _25240__$1 = this;
return self__.meta25239;
});

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25239","meta25239",1161652001,null)], null);
});

cljs.core.async.t_cljs$core$async25238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25238";

cljs.core.async.t_cljs$core$async25238.cljs$lang$ctorPrWriter = (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async25238");
});

cljs.core.async.__GT_t_cljs$core$async25238 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25238(map_GT___$1,f__$1,ch__$1,meta25239){
return (new cljs.core.async.t_cljs$core$async25238(map_GT___$1,f__$1,ch__$1,meta25239));
});

}

return (new cljs.core.async.t_cljs$core$async25238(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25244 = (function (filter_GT_,p,ch,meta25245){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25245 = meta25245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25246,meta25245__$1){
var self__ = this;
var _25246__$1 = this;
return (new cljs.core.async.t_cljs$core$async25244(self__.filter_GT_,self__.p,self__.ch,meta25245__$1));
});

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25246){
var self__ = this;
var _25246__$1 = this;
return self__.meta25245;
});

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25245","meta25245",-799446109,null)], null);
});

cljs.core.async.t_cljs$core$async25244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25244";

cljs.core.async.t_cljs$core$async25244.cljs$lang$ctorPrWriter = (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.core.async/t_cljs$core$async25244");
});

cljs.core.async.__GT_t_cljs$core$async25244 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25244(filter_GT___$1,p__$1,ch__$1,meta25245){
return (new cljs.core.async.t_cljs$core$async25244(filter_GT___$1,p__$1,ch__$1,meta25245));
});

}

return (new cljs.core.async.t_cljs$core$async25244(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25247 = [];
var len__21234__auto___25291 = arguments.length;
var i__21235__auto___25292 = (0);
while(true){
if((i__21235__auto___25292 < len__21234__auto___25291)){
args25247.push((arguments[i__21235__auto___25292]));

var G__25293 = (i__21235__auto___25292 + (1));
i__21235__auto___25292 = G__25293;
continue;
} else {
}
break;
}

var G__25249 = args25247.length;
switch (G__25249) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25247.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23023__auto___25295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___25295,out){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___25295,out){
return (function (state_25270){
var state_val_25271 = (state_25270[(1)]);
if((state_val_25271 === (7))){
var inst_25266 = (state_25270[(2)]);
var state_25270__$1 = state_25270;
var statearr_25272_25296 = state_25270__$1;
(statearr_25272_25296[(2)] = inst_25266);

(statearr_25272_25296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25271 === (1))){
var state_25270__$1 = state_25270;
var statearr_25273_25297 = state_25270__$1;
(statearr_25273_25297[(2)] = null);

(statearr_25273_25297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25271 === (4))){
var inst_25252 = (state_25270[(7)]);
var inst_25252__$1 = (state_25270[(2)]);
var inst_25253 = (inst_25252__$1 == null);
var state_25270__$1 = (function (){var statearr_25274 = state_25270;
(statearr_25274[(7)] = inst_25252__$1);

return statearr_25274;
})();
if(cljs.core.truth_(inst_25253)){
var statearr_25275_25298 = state_25270__$1;
(statearr_25275_25298[(1)] = (5));

} else {
var statearr_25276_25299 = state_25270__$1;
(statearr_25276_25299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25271 === (6))){
var inst_25252 = (state_25270[(7)]);
var inst_25257 = p.call(null,inst_25252);
var state_25270__$1 = state_25270;
if(cljs.core.truth_(inst_25257)){
var statearr_25277_25300 = state_25270__$1;
(statearr_25277_25300[(1)] = (8));

} else {
var statearr_25278_25301 = state_25270__$1;
(statearr_25278_25301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25271 === (3))){
var inst_25268 = (state_25270[(2)]);
var state_25270__$1 = state_25270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25270__$1,inst_25268);
} else {
if((state_val_25271 === (2))){
var state_25270__$1 = state_25270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25270__$1,(4),ch);
} else {
if((state_val_25271 === (11))){
var inst_25260 = (state_25270[(2)]);
var state_25270__$1 = state_25270;
var statearr_25279_25302 = state_25270__$1;
(statearr_25279_25302[(2)] = inst_25260);

(statearr_25279_25302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25271 === (9))){
var state_25270__$1 = state_25270;
var statearr_25280_25303 = state_25270__$1;
(statearr_25280_25303[(2)] = null);

(statearr_25280_25303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25271 === (5))){
var inst_25255 = cljs.core.async.close_BANG_.call(null,out);
var state_25270__$1 = state_25270;
var statearr_25281_25304 = state_25270__$1;
(statearr_25281_25304[(2)] = inst_25255);

(statearr_25281_25304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25271 === (10))){
var inst_25263 = (state_25270[(2)]);
var state_25270__$1 = (function (){var statearr_25282 = state_25270;
(statearr_25282[(8)] = inst_25263);

return statearr_25282;
})();
var statearr_25283_25305 = state_25270__$1;
(statearr_25283_25305[(2)] = null);

(statearr_25283_25305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25271 === (8))){
var inst_25252 = (state_25270[(7)]);
var state_25270__$1 = state_25270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25270__$1,(11),out,inst_25252);
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
});})(c__23023__auto___25295,out))
;
return ((function (switch__22178__auto__,c__23023__auto___25295,out){
return (function() {
var cljs$core$async$state_machine__22179__auto__ = null;
var cljs$core$async$state_machine__22179__auto____0 = (function (){
var statearr_25287 = [null,null,null,null,null,null,null,null,null];
(statearr_25287[(0)] = cljs$core$async$state_machine__22179__auto__);

(statearr_25287[(1)] = (1));

return statearr_25287;
});
var cljs$core$async$state_machine__22179__auto____1 = (function (state_25270){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_25270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e25288){if((e25288 instanceof Object)){
var ex__22182__auto__ = e25288;
var statearr_25289_25306 = state_25270;
(statearr_25289_25306[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25307 = state_25270;
state_25270 = G__25307;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$state_machine__22179__auto__ = function(state_25270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22179__auto____1.call(this,state_25270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22179__auto____0;
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22179__auto____1;
return cljs$core$async$state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___25295,out))
})();
var state__23025__auto__ = (function (){var statearr_25290 = f__23024__auto__.call(null);
(statearr_25290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___25295);

return statearr_25290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___25295,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25308 = [];
var len__21234__auto___25311 = arguments.length;
var i__21235__auto___25312 = (0);
while(true){
if((i__21235__auto___25312 < len__21234__auto___25311)){
args25308.push((arguments[i__21235__auto___25312]));

var G__25313 = (i__21235__auto___25312 + (1));
i__21235__auto___25312 = G__25313;
continue;
} else {
}
break;
}

var G__25310 = args25308.length;
switch (G__25310) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25308.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto__){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto__){
return (function (state_25480){
var state_val_25481 = (state_25480[(1)]);
if((state_val_25481 === (7))){
var inst_25476 = (state_25480[(2)]);
var state_25480__$1 = state_25480;
var statearr_25482_25523 = state_25480__$1;
(statearr_25482_25523[(2)] = inst_25476);

(statearr_25482_25523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (20))){
var inst_25446 = (state_25480[(7)]);
var inst_25457 = (state_25480[(2)]);
var inst_25458 = cljs.core.next.call(null,inst_25446);
var inst_25432 = inst_25458;
var inst_25433 = null;
var inst_25434 = (0);
var inst_25435 = (0);
var state_25480__$1 = (function (){var statearr_25483 = state_25480;
(statearr_25483[(8)] = inst_25433);

(statearr_25483[(9)] = inst_25432);

(statearr_25483[(10)] = inst_25434);

(statearr_25483[(11)] = inst_25457);

(statearr_25483[(12)] = inst_25435);

return statearr_25483;
})();
var statearr_25484_25524 = state_25480__$1;
(statearr_25484_25524[(2)] = null);

(statearr_25484_25524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (1))){
var state_25480__$1 = state_25480;
var statearr_25485_25525 = state_25480__$1;
(statearr_25485_25525[(2)] = null);

(statearr_25485_25525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (4))){
var inst_25421 = (state_25480[(13)]);
var inst_25421__$1 = (state_25480[(2)]);
var inst_25422 = (inst_25421__$1 == null);
var state_25480__$1 = (function (){var statearr_25486 = state_25480;
(statearr_25486[(13)] = inst_25421__$1);

return statearr_25486;
})();
if(cljs.core.truth_(inst_25422)){
var statearr_25487_25526 = state_25480__$1;
(statearr_25487_25526[(1)] = (5));

} else {
var statearr_25488_25527 = state_25480__$1;
(statearr_25488_25527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (15))){
var state_25480__$1 = state_25480;
var statearr_25492_25528 = state_25480__$1;
(statearr_25492_25528[(2)] = null);

(statearr_25492_25528[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (21))){
var state_25480__$1 = state_25480;
var statearr_25493_25529 = state_25480__$1;
(statearr_25493_25529[(2)] = null);

(statearr_25493_25529[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (13))){
var inst_25433 = (state_25480[(8)]);
var inst_25432 = (state_25480[(9)]);
var inst_25434 = (state_25480[(10)]);
var inst_25435 = (state_25480[(12)]);
var inst_25442 = (state_25480[(2)]);
var inst_25443 = (inst_25435 + (1));
var tmp25489 = inst_25433;
var tmp25490 = inst_25432;
var tmp25491 = inst_25434;
var inst_25432__$1 = tmp25490;
var inst_25433__$1 = tmp25489;
var inst_25434__$1 = tmp25491;
var inst_25435__$1 = inst_25443;
var state_25480__$1 = (function (){var statearr_25494 = state_25480;
(statearr_25494[(8)] = inst_25433__$1);

(statearr_25494[(9)] = inst_25432__$1);

(statearr_25494[(10)] = inst_25434__$1);

(statearr_25494[(14)] = inst_25442);

(statearr_25494[(12)] = inst_25435__$1);

return statearr_25494;
})();
var statearr_25495_25530 = state_25480__$1;
(statearr_25495_25530[(2)] = null);

(statearr_25495_25530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (22))){
var state_25480__$1 = state_25480;
var statearr_25496_25531 = state_25480__$1;
(statearr_25496_25531[(2)] = null);

(statearr_25496_25531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (6))){
var inst_25421 = (state_25480[(13)]);
var inst_25430 = f.call(null,inst_25421);
var inst_25431 = cljs.core.seq.call(null,inst_25430);
var inst_25432 = inst_25431;
var inst_25433 = null;
var inst_25434 = (0);
var inst_25435 = (0);
var state_25480__$1 = (function (){var statearr_25497 = state_25480;
(statearr_25497[(8)] = inst_25433);

(statearr_25497[(9)] = inst_25432);

(statearr_25497[(10)] = inst_25434);

(statearr_25497[(12)] = inst_25435);

return statearr_25497;
})();
var statearr_25498_25532 = state_25480__$1;
(statearr_25498_25532[(2)] = null);

(statearr_25498_25532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (17))){
var inst_25446 = (state_25480[(7)]);
var inst_25450 = cljs.core.chunk_first.call(null,inst_25446);
var inst_25451 = cljs.core.chunk_rest.call(null,inst_25446);
var inst_25452 = cljs.core.count.call(null,inst_25450);
var inst_25432 = inst_25451;
var inst_25433 = inst_25450;
var inst_25434 = inst_25452;
var inst_25435 = (0);
var state_25480__$1 = (function (){var statearr_25499 = state_25480;
(statearr_25499[(8)] = inst_25433);

(statearr_25499[(9)] = inst_25432);

(statearr_25499[(10)] = inst_25434);

(statearr_25499[(12)] = inst_25435);

return statearr_25499;
})();
var statearr_25500_25533 = state_25480__$1;
(statearr_25500_25533[(2)] = null);

(statearr_25500_25533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (3))){
var inst_25478 = (state_25480[(2)]);
var state_25480__$1 = state_25480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25480__$1,inst_25478);
} else {
if((state_val_25481 === (12))){
var inst_25466 = (state_25480[(2)]);
var state_25480__$1 = state_25480;
var statearr_25501_25534 = state_25480__$1;
(statearr_25501_25534[(2)] = inst_25466);

(statearr_25501_25534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (2))){
var state_25480__$1 = state_25480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25480__$1,(4),in$);
} else {
if((state_val_25481 === (23))){
var inst_25474 = (state_25480[(2)]);
var state_25480__$1 = state_25480;
var statearr_25502_25535 = state_25480__$1;
(statearr_25502_25535[(2)] = inst_25474);

(statearr_25502_25535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (19))){
var inst_25461 = (state_25480[(2)]);
var state_25480__$1 = state_25480;
var statearr_25503_25536 = state_25480__$1;
(statearr_25503_25536[(2)] = inst_25461);

(statearr_25503_25536[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (11))){
var inst_25432 = (state_25480[(9)]);
var inst_25446 = (state_25480[(7)]);
var inst_25446__$1 = cljs.core.seq.call(null,inst_25432);
var state_25480__$1 = (function (){var statearr_25504 = state_25480;
(statearr_25504[(7)] = inst_25446__$1);

return statearr_25504;
})();
if(inst_25446__$1){
var statearr_25505_25537 = state_25480__$1;
(statearr_25505_25537[(1)] = (14));

} else {
var statearr_25506_25538 = state_25480__$1;
(statearr_25506_25538[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (9))){
var inst_25468 = (state_25480[(2)]);
var inst_25469 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25480__$1 = (function (){var statearr_25507 = state_25480;
(statearr_25507[(15)] = inst_25468);

return statearr_25507;
})();
if(cljs.core.truth_(inst_25469)){
var statearr_25508_25539 = state_25480__$1;
(statearr_25508_25539[(1)] = (21));

} else {
var statearr_25509_25540 = state_25480__$1;
(statearr_25509_25540[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (5))){
var inst_25424 = cljs.core.async.close_BANG_.call(null,out);
var state_25480__$1 = state_25480;
var statearr_25510_25541 = state_25480__$1;
(statearr_25510_25541[(2)] = inst_25424);

(statearr_25510_25541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (14))){
var inst_25446 = (state_25480[(7)]);
var inst_25448 = cljs.core.chunked_seq_QMARK_.call(null,inst_25446);
var state_25480__$1 = state_25480;
if(inst_25448){
var statearr_25511_25542 = state_25480__$1;
(statearr_25511_25542[(1)] = (17));

} else {
var statearr_25512_25543 = state_25480__$1;
(statearr_25512_25543[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (16))){
var inst_25464 = (state_25480[(2)]);
var state_25480__$1 = state_25480;
var statearr_25513_25544 = state_25480__$1;
(statearr_25513_25544[(2)] = inst_25464);

(statearr_25513_25544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25481 === (10))){
var inst_25433 = (state_25480[(8)]);
var inst_25435 = (state_25480[(12)]);
var inst_25440 = cljs.core._nth.call(null,inst_25433,inst_25435);
var state_25480__$1 = state_25480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25480__$1,(13),out,inst_25440);
} else {
if((state_val_25481 === (18))){
var inst_25446 = (state_25480[(7)]);
var inst_25455 = cljs.core.first.call(null,inst_25446);
var state_25480__$1 = state_25480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25480__$1,(20),out,inst_25455);
} else {
if((state_val_25481 === (8))){
var inst_25434 = (state_25480[(10)]);
var inst_25435 = (state_25480[(12)]);
var inst_25437 = (inst_25435 < inst_25434);
var inst_25438 = inst_25437;
var state_25480__$1 = state_25480;
if(cljs.core.truth_(inst_25438)){
var statearr_25514_25545 = state_25480__$1;
(statearr_25514_25545[(1)] = (10));

} else {
var statearr_25515_25546 = state_25480__$1;
(statearr_25515_25546[(1)] = (11));

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
});})(c__23023__auto__))
;
return ((function (switch__22178__auto__,c__23023__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22179__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22179__auto____0 = (function (){
var statearr_25519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25519[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22179__auto__);

(statearr_25519[(1)] = (1));

return statearr_25519;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22179__auto____1 = (function (state_25480){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_25480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e25520){if((e25520 instanceof Object)){
var ex__22182__auto__ = e25520;
var statearr_25521_25547 = state_25480;
(statearr_25521_25547[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25548 = state_25480;
state_25480 = G__25548;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22179__auto__ = function(state_25480){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22179__auto____1.call(this,state_25480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22179__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22179__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto__))
})();
var state__23025__auto__ = (function (){var statearr_25522 = f__23024__auto__.call(null);
(statearr_25522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto__);

return statearr_25522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto__))
);

return c__23023__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25549 = [];
var len__21234__auto___25552 = arguments.length;
var i__21235__auto___25553 = (0);
while(true){
if((i__21235__auto___25553 < len__21234__auto___25552)){
args25549.push((arguments[i__21235__auto___25553]));

var G__25554 = (i__21235__auto___25553 + (1));
i__21235__auto___25553 = G__25554;
continue;
} else {
}
break;
}

var G__25551 = args25549.length;
switch (G__25551) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25549.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25556 = [];
var len__21234__auto___25559 = arguments.length;
var i__21235__auto___25560 = (0);
while(true){
if((i__21235__auto___25560 < len__21234__auto___25559)){
args25556.push((arguments[i__21235__auto___25560]));

var G__25561 = (i__21235__auto___25560 + (1));
i__21235__auto___25560 = G__25561;
continue;
} else {
}
break;
}

var G__25558 = args25556.length;
switch (G__25558) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25556.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25563 = [];
var len__21234__auto___25614 = arguments.length;
var i__21235__auto___25615 = (0);
while(true){
if((i__21235__auto___25615 < len__21234__auto___25614)){
args25563.push((arguments[i__21235__auto___25615]));

var G__25616 = (i__21235__auto___25615 + (1));
i__21235__auto___25615 = G__25616;
continue;
} else {
}
break;
}

var G__25565 = args25563.length;
switch (G__25565) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25563.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23023__auto___25618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___25618,out){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___25618,out){
return (function (state_25589){
var state_val_25590 = (state_25589[(1)]);
if((state_val_25590 === (7))){
var inst_25584 = (state_25589[(2)]);
var state_25589__$1 = state_25589;
var statearr_25591_25619 = state_25589__$1;
(statearr_25591_25619[(2)] = inst_25584);

(statearr_25591_25619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (1))){
var inst_25566 = null;
var state_25589__$1 = (function (){var statearr_25592 = state_25589;
(statearr_25592[(7)] = inst_25566);

return statearr_25592;
})();
var statearr_25593_25620 = state_25589__$1;
(statearr_25593_25620[(2)] = null);

(statearr_25593_25620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (4))){
var inst_25569 = (state_25589[(8)]);
var inst_25569__$1 = (state_25589[(2)]);
var inst_25570 = (inst_25569__$1 == null);
var inst_25571 = cljs.core.not.call(null,inst_25570);
var state_25589__$1 = (function (){var statearr_25594 = state_25589;
(statearr_25594[(8)] = inst_25569__$1);

return statearr_25594;
})();
if(inst_25571){
var statearr_25595_25621 = state_25589__$1;
(statearr_25595_25621[(1)] = (5));

} else {
var statearr_25596_25622 = state_25589__$1;
(statearr_25596_25622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (6))){
var state_25589__$1 = state_25589;
var statearr_25597_25623 = state_25589__$1;
(statearr_25597_25623[(2)] = null);

(statearr_25597_25623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (3))){
var inst_25586 = (state_25589[(2)]);
var inst_25587 = cljs.core.async.close_BANG_.call(null,out);
var state_25589__$1 = (function (){var statearr_25598 = state_25589;
(statearr_25598[(9)] = inst_25586);

return statearr_25598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25589__$1,inst_25587);
} else {
if((state_val_25590 === (2))){
var state_25589__$1 = state_25589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25589__$1,(4),ch);
} else {
if((state_val_25590 === (11))){
var inst_25569 = (state_25589[(8)]);
var inst_25578 = (state_25589[(2)]);
var inst_25566 = inst_25569;
var state_25589__$1 = (function (){var statearr_25599 = state_25589;
(statearr_25599[(10)] = inst_25578);

(statearr_25599[(7)] = inst_25566);

return statearr_25599;
})();
var statearr_25600_25624 = state_25589__$1;
(statearr_25600_25624[(2)] = null);

(statearr_25600_25624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (9))){
var inst_25569 = (state_25589[(8)]);
var state_25589__$1 = state_25589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25589__$1,(11),out,inst_25569);
} else {
if((state_val_25590 === (5))){
var inst_25569 = (state_25589[(8)]);
var inst_25566 = (state_25589[(7)]);
var inst_25573 = cljs.core._EQ_.call(null,inst_25569,inst_25566);
var state_25589__$1 = state_25589;
if(inst_25573){
var statearr_25602_25625 = state_25589__$1;
(statearr_25602_25625[(1)] = (8));

} else {
var statearr_25603_25626 = state_25589__$1;
(statearr_25603_25626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (10))){
var inst_25581 = (state_25589[(2)]);
var state_25589__$1 = state_25589;
var statearr_25604_25627 = state_25589__$1;
(statearr_25604_25627[(2)] = inst_25581);

(statearr_25604_25627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (8))){
var inst_25566 = (state_25589[(7)]);
var tmp25601 = inst_25566;
var inst_25566__$1 = tmp25601;
var state_25589__$1 = (function (){var statearr_25605 = state_25589;
(statearr_25605[(7)] = inst_25566__$1);

return statearr_25605;
})();
var statearr_25606_25628 = state_25589__$1;
(statearr_25606_25628[(2)] = null);

(statearr_25606_25628[(1)] = (2));


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
});})(c__23023__auto___25618,out))
;
return ((function (switch__22178__auto__,c__23023__auto___25618,out){
return (function() {
var cljs$core$async$state_machine__22179__auto__ = null;
var cljs$core$async$state_machine__22179__auto____0 = (function (){
var statearr_25610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25610[(0)] = cljs$core$async$state_machine__22179__auto__);

(statearr_25610[(1)] = (1));

return statearr_25610;
});
var cljs$core$async$state_machine__22179__auto____1 = (function (state_25589){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_25589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e25611){if((e25611 instanceof Object)){
var ex__22182__auto__ = e25611;
var statearr_25612_25629 = state_25589;
(statearr_25612_25629[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25630 = state_25589;
state_25589 = G__25630;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$state_machine__22179__auto__ = function(state_25589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22179__auto____1.call(this,state_25589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22179__auto____0;
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22179__auto____1;
return cljs$core$async$state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___25618,out))
})();
var state__23025__auto__ = (function (){var statearr_25613 = f__23024__auto__.call(null);
(statearr_25613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___25618);

return statearr_25613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___25618,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25631 = [];
var len__21234__auto___25701 = arguments.length;
var i__21235__auto___25702 = (0);
while(true){
if((i__21235__auto___25702 < len__21234__auto___25701)){
args25631.push((arguments[i__21235__auto___25702]));

var G__25703 = (i__21235__auto___25702 + (1));
i__21235__auto___25702 = G__25703;
continue;
} else {
}
break;
}

var G__25633 = args25631.length;
switch (G__25633) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25631.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23023__auto___25705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___25705,out){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___25705,out){
return (function (state_25671){
var state_val_25672 = (state_25671[(1)]);
if((state_val_25672 === (7))){
var inst_25667 = (state_25671[(2)]);
var state_25671__$1 = state_25671;
var statearr_25673_25706 = state_25671__$1;
(statearr_25673_25706[(2)] = inst_25667);

(statearr_25673_25706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (1))){
var inst_25634 = (new Array(n));
var inst_25635 = inst_25634;
var inst_25636 = (0);
var state_25671__$1 = (function (){var statearr_25674 = state_25671;
(statearr_25674[(7)] = inst_25635);

(statearr_25674[(8)] = inst_25636);

return statearr_25674;
})();
var statearr_25675_25707 = state_25671__$1;
(statearr_25675_25707[(2)] = null);

(statearr_25675_25707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (4))){
var inst_25639 = (state_25671[(9)]);
var inst_25639__$1 = (state_25671[(2)]);
var inst_25640 = (inst_25639__$1 == null);
var inst_25641 = cljs.core.not.call(null,inst_25640);
var state_25671__$1 = (function (){var statearr_25676 = state_25671;
(statearr_25676[(9)] = inst_25639__$1);

return statearr_25676;
})();
if(inst_25641){
var statearr_25677_25708 = state_25671__$1;
(statearr_25677_25708[(1)] = (5));

} else {
var statearr_25678_25709 = state_25671__$1;
(statearr_25678_25709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (15))){
var inst_25661 = (state_25671[(2)]);
var state_25671__$1 = state_25671;
var statearr_25679_25710 = state_25671__$1;
(statearr_25679_25710[(2)] = inst_25661);

(statearr_25679_25710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (13))){
var state_25671__$1 = state_25671;
var statearr_25680_25711 = state_25671__$1;
(statearr_25680_25711[(2)] = null);

(statearr_25680_25711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (6))){
var inst_25636 = (state_25671[(8)]);
var inst_25657 = (inst_25636 > (0));
var state_25671__$1 = state_25671;
if(cljs.core.truth_(inst_25657)){
var statearr_25681_25712 = state_25671__$1;
(statearr_25681_25712[(1)] = (12));

} else {
var statearr_25682_25713 = state_25671__$1;
(statearr_25682_25713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (3))){
var inst_25669 = (state_25671[(2)]);
var state_25671__$1 = state_25671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25671__$1,inst_25669);
} else {
if((state_val_25672 === (12))){
var inst_25635 = (state_25671[(7)]);
var inst_25659 = cljs.core.vec.call(null,inst_25635);
var state_25671__$1 = state_25671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25671__$1,(15),out,inst_25659);
} else {
if((state_val_25672 === (2))){
var state_25671__$1 = state_25671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25671__$1,(4),ch);
} else {
if((state_val_25672 === (11))){
var inst_25651 = (state_25671[(2)]);
var inst_25652 = (new Array(n));
var inst_25635 = inst_25652;
var inst_25636 = (0);
var state_25671__$1 = (function (){var statearr_25683 = state_25671;
(statearr_25683[(10)] = inst_25651);

(statearr_25683[(7)] = inst_25635);

(statearr_25683[(8)] = inst_25636);

return statearr_25683;
})();
var statearr_25684_25714 = state_25671__$1;
(statearr_25684_25714[(2)] = null);

(statearr_25684_25714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (9))){
var inst_25635 = (state_25671[(7)]);
var inst_25649 = cljs.core.vec.call(null,inst_25635);
var state_25671__$1 = state_25671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25671__$1,(11),out,inst_25649);
} else {
if((state_val_25672 === (5))){
var inst_25644 = (state_25671[(11)]);
var inst_25639 = (state_25671[(9)]);
var inst_25635 = (state_25671[(7)]);
var inst_25636 = (state_25671[(8)]);
var inst_25643 = (inst_25635[inst_25636] = inst_25639);
var inst_25644__$1 = (inst_25636 + (1));
var inst_25645 = (inst_25644__$1 < n);
var state_25671__$1 = (function (){var statearr_25685 = state_25671;
(statearr_25685[(11)] = inst_25644__$1);

(statearr_25685[(12)] = inst_25643);

return statearr_25685;
})();
if(cljs.core.truth_(inst_25645)){
var statearr_25686_25715 = state_25671__$1;
(statearr_25686_25715[(1)] = (8));

} else {
var statearr_25687_25716 = state_25671__$1;
(statearr_25687_25716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (14))){
var inst_25664 = (state_25671[(2)]);
var inst_25665 = cljs.core.async.close_BANG_.call(null,out);
var state_25671__$1 = (function (){var statearr_25689 = state_25671;
(statearr_25689[(13)] = inst_25664);

return statearr_25689;
})();
var statearr_25690_25717 = state_25671__$1;
(statearr_25690_25717[(2)] = inst_25665);

(statearr_25690_25717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (10))){
var inst_25655 = (state_25671[(2)]);
var state_25671__$1 = state_25671;
var statearr_25691_25718 = state_25671__$1;
(statearr_25691_25718[(2)] = inst_25655);

(statearr_25691_25718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (8))){
var inst_25644 = (state_25671[(11)]);
var inst_25635 = (state_25671[(7)]);
var tmp25688 = inst_25635;
var inst_25635__$1 = tmp25688;
var inst_25636 = inst_25644;
var state_25671__$1 = (function (){var statearr_25692 = state_25671;
(statearr_25692[(7)] = inst_25635__$1);

(statearr_25692[(8)] = inst_25636);

return statearr_25692;
})();
var statearr_25693_25719 = state_25671__$1;
(statearr_25693_25719[(2)] = null);

(statearr_25693_25719[(1)] = (2));


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
});})(c__23023__auto___25705,out))
;
return ((function (switch__22178__auto__,c__23023__auto___25705,out){
return (function() {
var cljs$core$async$state_machine__22179__auto__ = null;
var cljs$core$async$state_machine__22179__auto____0 = (function (){
var statearr_25697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25697[(0)] = cljs$core$async$state_machine__22179__auto__);

(statearr_25697[(1)] = (1));

return statearr_25697;
});
var cljs$core$async$state_machine__22179__auto____1 = (function (state_25671){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_25671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e25698){if((e25698 instanceof Object)){
var ex__22182__auto__ = e25698;
var statearr_25699_25720 = state_25671;
(statearr_25699_25720[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25721 = state_25671;
state_25671 = G__25721;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$state_machine__22179__auto__ = function(state_25671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22179__auto____1.call(this,state_25671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22179__auto____0;
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22179__auto____1;
return cljs$core$async$state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___25705,out))
})();
var state__23025__auto__ = (function (){var statearr_25700 = f__23024__auto__.call(null);
(statearr_25700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___25705);

return statearr_25700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___25705,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25722 = [];
var len__21234__auto___25796 = arguments.length;
var i__21235__auto___25797 = (0);
while(true){
if((i__21235__auto___25797 < len__21234__auto___25796)){
args25722.push((arguments[i__21235__auto___25797]));

var G__25798 = (i__21235__auto___25797 + (1));
i__21235__auto___25797 = G__25798;
continue;
} else {
}
break;
}

var G__25724 = args25722.length;
switch (G__25724) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25722.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23023__auto___25800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___25800,out){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___25800,out){
return (function (state_25766){
var state_val_25767 = (state_25766[(1)]);
if((state_val_25767 === (7))){
var inst_25762 = (state_25766[(2)]);
var state_25766__$1 = state_25766;
var statearr_25768_25801 = state_25766__$1;
(statearr_25768_25801[(2)] = inst_25762);

(statearr_25768_25801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (1))){
var inst_25725 = [];
var inst_25726 = inst_25725;
var inst_25727 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25766__$1 = (function (){var statearr_25769 = state_25766;
(statearr_25769[(7)] = inst_25727);

(statearr_25769[(8)] = inst_25726);

return statearr_25769;
})();
var statearr_25770_25802 = state_25766__$1;
(statearr_25770_25802[(2)] = null);

(statearr_25770_25802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (4))){
var inst_25730 = (state_25766[(9)]);
var inst_25730__$1 = (state_25766[(2)]);
var inst_25731 = (inst_25730__$1 == null);
var inst_25732 = cljs.core.not.call(null,inst_25731);
var state_25766__$1 = (function (){var statearr_25771 = state_25766;
(statearr_25771[(9)] = inst_25730__$1);

return statearr_25771;
})();
if(inst_25732){
var statearr_25772_25803 = state_25766__$1;
(statearr_25772_25803[(1)] = (5));

} else {
var statearr_25773_25804 = state_25766__$1;
(statearr_25773_25804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (15))){
var inst_25756 = (state_25766[(2)]);
var state_25766__$1 = state_25766;
var statearr_25774_25805 = state_25766__$1;
(statearr_25774_25805[(2)] = inst_25756);

(statearr_25774_25805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (13))){
var state_25766__$1 = state_25766;
var statearr_25775_25806 = state_25766__$1;
(statearr_25775_25806[(2)] = null);

(statearr_25775_25806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (6))){
var inst_25726 = (state_25766[(8)]);
var inst_25751 = inst_25726.length;
var inst_25752 = (inst_25751 > (0));
var state_25766__$1 = state_25766;
if(cljs.core.truth_(inst_25752)){
var statearr_25776_25807 = state_25766__$1;
(statearr_25776_25807[(1)] = (12));

} else {
var statearr_25777_25808 = state_25766__$1;
(statearr_25777_25808[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (3))){
var inst_25764 = (state_25766[(2)]);
var state_25766__$1 = state_25766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25766__$1,inst_25764);
} else {
if((state_val_25767 === (12))){
var inst_25726 = (state_25766[(8)]);
var inst_25754 = cljs.core.vec.call(null,inst_25726);
var state_25766__$1 = state_25766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25766__$1,(15),out,inst_25754);
} else {
if((state_val_25767 === (2))){
var state_25766__$1 = state_25766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25766__$1,(4),ch);
} else {
if((state_val_25767 === (11))){
var inst_25734 = (state_25766[(10)]);
var inst_25730 = (state_25766[(9)]);
var inst_25744 = (state_25766[(2)]);
var inst_25745 = [];
var inst_25746 = inst_25745.push(inst_25730);
var inst_25726 = inst_25745;
var inst_25727 = inst_25734;
var state_25766__$1 = (function (){var statearr_25778 = state_25766;
(statearr_25778[(11)] = inst_25744);

(statearr_25778[(7)] = inst_25727);

(statearr_25778[(8)] = inst_25726);

(statearr_25778[(12)] = inst_25746);

return statearr_25778;
})();
var statearr_25779_25809 = state_25766__$1;
(statearr_25779_25809[(2)] = null);

(statearr_25779_25809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (9))){
var inst_25726 = (state_25766[(8)]);
var inst_25742 = cljs.core.vec.call(null,inst_25726);
var state_25766__$1 = state_25766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25766__$1,(11),out,inst_25742);
} else {
if((state_val_25767 === (5))){
var inst_25734 = (state_25766[(10)]);
var inst_25727 = (state_25766[(7)]);
var inst_25730 = (state_25766[(9)]);
var inst_25734__$1 = f.call(null,inst_25730);
var inst_25735 = cljs.core._EQ_.call(null,inst_25734__$1,inst_25727);
var inst_25736 = cljs.core.keyword_identical_QMARK_.call(null,inst_25727,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25737 = (inst_25735) || (inst_25736);
var state_25766__$1 = (function (){var statearr_25780 = state_25766;
(statearr_25780[(10)] = inst_25734__$1);

return statearr_25780;
})();
if(cljs.core.truth_(inst_25737)){
var statearr_25781_25810 = state_25766__$1;
(statearr_25781_25810[(1)] = (8));

} else {
var statearr_25782_25811 = state_25766__$1;
(statearr_25782_25811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (14))){
var inst_25759 = (state_25766[(2)]);
var inst_25760 = cljs.core.async.close_BANG_.call(null,out);
var state_25766__$1 = (function (){var statearr_25784 = state_25766;
(statearr_25784[(13)] = inst_25759);

return statearr_25784;
})();
var statearr_25785_25812 = state_25766__$1;
(statearr_25785_25812[(2)] = inst_25760);

(statearr_25785_25812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (10))){
var inst_25749 = (state_25766[(2)]);
var state_25766__$1 = state_25766;
var statearr_25786_25813 = state_25766__$1;
(statearr_25786_25813[(2)] = inst_25749);

(statearr_25786_25813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25767 === (8))){
var inst_25734 = (state_25766[(10)]);
var inst_25726 = (state_25766[(8)]);
var inst_25730 = (state_25766[(9)]);
var inst_25739 = inst_25726.push(inst_25730);
var tmp25783 = inst_25726;
var inst_25726__$1 = tmp25783;
var inst_25727 = inst_25734;
var state_25766__$1 = (function (){var statearr_25787 = state_25766;
(statearr_25787[(7)] = inst_25727);

(statearr_25787[(8)] = inst_25726__$1);

(statearr_25787[(14)] = inst_25739);

return statearr_25787;
})();
var statearr_25788_25814 = state_25766__$1;
(statearr_25788_25814[(2)] = null);

(statearr_25788_25814[(1)] = (2));


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
});})(c__23023__auto___25800,out))
;
return ((function (switch__22178__auto__,c__23023__auto___25800,out){
return (function() {
var cljs$core$async$state_machine__22179__auto__ = null;
var cljs$core$async$state_machine__22179__auto____0 = (function (){
var statearr_25792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25792[(0)] = cljs$core$async$state_machine__22179__auto__);

(statearr_25792[(1)] = (1));

return statearr_25792;
});
var cljs$core$async$state_machine__22179__auto____1 = (function (state_25766){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_25766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e25793){if((e25793 instanceof Object)){
var ex__22182__auto__ = e25793;
var statearr_25794_25815 = state_25766;
(statearr_25794_25815[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25816 = state_25766;
state_25766 = G__25816;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
cljs$core$async$state_machine__22179__auto__ = function(state_25766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22179__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22179__auto____1.call(this,state_25766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22179__auto____0;
cljs$core$async$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22179__auto____1;
return cljs$core$async$state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___25800,out))
})();
var state__23025__auto__ = (function (){var statearr_25795 = f__23024__auto__.call(null);
(statearr_25795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___25800);

return statearr_25795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___25800,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
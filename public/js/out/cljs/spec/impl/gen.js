// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20765__auto__,writer__20766__auto__,opt__20767__auto__){
return cljs.core._write.call(null,writer__20766__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__21241__auto__ = [];
var len__21234__auto___26979 = arguments.length;
var i__21235__auto___26980 = (0);
while(true){
if((i__21235__auto___26980 < len__21234__auto___26979)){
args__21241__auto__.push((arguments[i__21235__auto___26980]));

var G__26981 = (i__21235__auto___26980 + (1));
i__21235__auto___26980 = G__26981;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq26978){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26978));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__21241__auto__ = [];
var len__21234__auto___26983 = arguments.length;
var i__21235__auto___26984 = (0);
while(true){
if((i__21235__auto___26984 < len__21234__auto___26983)){
args__21241__auto__.push((arguments[i__21235__auto___26984]));

var G__26985 = (i__21235__auto___26984 + (1));
i__21235__auto___26984 = G__26985;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq26982){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26982));
});

var g_QMARK__26986 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_26987 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26986){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__26986))
,null));
var mkg_26988 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26986,g_26987){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__26986,g_26987))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__26986,g_26987,mkg_26988){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__26986).call(null,x);
});})(g_QMARK__26986,g_26987,mkg_26988))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__26986,g_26987,mkg_26988){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_26988).call(null,gfn);
});})(g_QMARK__26986,g_26987,mkg_26988))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__26986,g_26987,mkg_26988){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_26987).call(null,generator);
});})(g_QMARK__26986,g_26987,mkg_26988))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__26950__auto___27007 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__26950__auto___27007){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27008 = arguments.length;
var i__21235__auto___27009 = (0);
while(true){
if((i__21235__auto___27009 < len__21234__auto___27008)){
args__21241__auto__.push((arguments[i__21235__auto___27009]));

var G__27010 = (i__21235__auto___27009 + (1));
i__21235__auto___27009 = G__27010;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27007))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27007){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27007),args);
});})(g__26950__auto___27007))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__26950__auto___27007){
return (function (seq26989){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26989));
});})(g__26950__auto___27007))
;


var g__26950__auto___27011 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__26950__auto___27011){
return (function cljs$spec$impl$gen$list(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27012 = arguments.length;
var i__21235__auto___27013 = (0);
while(true){
if((i__21235__auto___27013 < len__21234__auto___27012)){
args__21241__auto__.push((arguments[i__21235__auto___27013]));

var G__27014 = (i__21235__auto___27013 + (1));
i__21235__auto___27013 = G__27014;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27011))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27011){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27011),args);
});})(g__26950__auto___27011))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__26950__auto___27011){
return (function (seq26990){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26990));
});})(g__26950__auto___27011))
;


var g__26950__auto___27015 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__26950__auto___27015){
return (function cljs$spec$impl$gen$map(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27016 = arguments.length;
var i__21235__auto___27017 = (0);
while(true){
if((i__21235__auto___27017 < len__21234__auto___27016)){
args__21241__auto__.push((arguments[i__21235__auto___27017]));

var G__27018 = (i__21235__auto___27017 + (1));
i__21235__auto___27017 = G__27018;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27015))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27015){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27015),args);
});})(g__26950__auto___27015))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__26950__auto___27015){
return (function (seq26991){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26991));
});})(g__26950__auto___27015))
;


var g__26950__auto___27019 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__26950__auto___27019){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27020 = arguments.length;
var i__21235__auto___27021 = (0);
while(true){
if((i__21235__auto___27021 < len__21234__auto___27020)){
args__21241__auto__.push((arguments[i__21235__auto___27021]));

var G__27022 = (i__21235__auto___27021 + (1));
i__21235__auto___27021 = G__27022;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27019))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27019){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27019),args);
});})(g__26950__auto___27019))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__26950__auto___27019){
return (function (seq26992){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26992));
});})(g__26950__auto___27019))
;


var g__26950__auto___27023 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__26950__auto___27023){
return (function cljs$spec$impl$gen$set(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27024 = arguments.length;
var i__21235__auto___27025 = (0);
while(true){
if((i__21235__auto___27025 < len__21234__auto___27024)){
args__21241__auto__.push((arguments[i__21235__auto___27025]));

var G__27026 = (i__21235__auto___27025 + (1));
i__21235__auto___27025 = G__27026;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27023))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27023){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27023),args);
});})(g__26950__auto___27023))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__26950__auto___27023){
return (function (seq26993){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26993));
});})(g__26950__auto___27023))
;


var g__26950__auto___27027 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__26950__auto___27027){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27028 = arguments.length;
var i__21235__auto___27029 = (0);
while(true){
if((i__21235__auto___27029 < len__21234__auto___27028)){
args__21241__auto__.push((arguments[i__21235__auto___27029]));

var G__27030 = (i__21235__auto___27029 + (1));
i__21235__auto___27029 = G__27030;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27027))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27027){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27027),args);
});})(g__26950__auto___27027))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__26950__auto___27027){
return (function (seq26994){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26994));
});})(g__26950__auto___27027))
;


var g__26950__auto___27031 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__26950__auto___27031){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27032 = arguments.length;
var i__21235__auto___27033 = (0);
while(true){
if((i__21235__auto___27033 < len__21234__auto___27032)){
args__21241__auto__.push((arguments[i__21235__auto___27033]));

var G__27034 = (i__21235__auto___27033 + (1));
i__21235__auto___27033 = G__27034;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27031))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27031){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27031),args);
});})(g__26950__auto___27031))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__26950__auto___27031){
return (function (seq26995){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26995));
});})(g__26950__auto___27031))
;


var g__26950__auto___27035 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__26950__auto___27035){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27036 = arguments.length;
var i__21235__auto___27037 = (0);
while(true){
if((i__21235__auto___27037 < len__21234__auto___27036)){
args__21241__auto__.push((arguments[i__21235__auto___27037]));

var G__27038 = (i__21235__auto___27037 + (1));
i__21235__auto___27037 = G__27038;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27035))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27035){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27035),args);
});})(g__26950__auto___27035))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__26950__auto___27035){
return (function (seq26996){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26996));
});})(g__26950__auto___27035))
;


var g__26950__auto___27039 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__26950__auto___27039){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27040 = arguments.length;
var i__21235__auto___27041 = (0);
while(true){
if((i__21235__auto___27041 < len__21234__auto___27040)){
args__21241__auto__.push((arguments[i__21235__auto___27041]));

var G__27042 = (i__21235__auto___27041 + (1));
i__21235__auto___27041 = G__27042;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27039))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27039){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27039),args);
});})(g__26950__auto___27039))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__26950__auto___27039){
return (function (seq26997){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26997));
});})(g__26950__auto___27039))
;


var g__26950__auto___27043 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__26950__auto___27043){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27044 = arguments.length;
var i__21235__auto___27045 = (0);
while(true){
if((i__21235__auto___27045 < len__21234__auto___27044)){
args__21241__auto__.push((arguments[i__21235__auto___27045]));

var G__27046 = (i__21235__auto___27045 + (1));
i__21235__auto___27045 = G__27046;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27043))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27043){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27043),args);
});})(g__26950__auto___27043))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__26950__auto___27043){
return (function (seq26998){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26998));
});})(g__26950__auto___27043))
;


var g__26950__auto___27047 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__26950__auto___27047){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27048 = arguments.length;
var i__21235__auto___27049 = (0);
while(true){
if((i__21235__auto___27049 < len__21234__auto___27048)){
args__21241__auto__.push((arguments[i__21235__auto___27049]));

var G__27050 = (i__21235__auto___27049 + (1));
i__21235__auto___27049 = G__27050;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27047))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27047){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27047),args);
});})(g__26950__auto___27047))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__26950__auto___27047){
return (function (seq26999){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26999));
});})(g__26950__auto___27047))
;


var g__26950__auto___27051 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__26950__auto___27051){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27052 = arguments.length;
var i__21235__auto___27053 = (0);
while(true){
if((i__21235__auto___27053 < len__21234__auto___27052)){
args__21241__auto__.push((arguments[i__21235__auto___27053]));

var G__27054 = (i__21235__auto___27053 + (1));
i__21235__auto___27053 = G__27054;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27051))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27051){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27051),args);
});})(g__26950__auto___27051))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__26950__auto___27051){
return (function (seq27000){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27000));
});})(g__26950__auto___27051))
;


var g__26950__auto___27055 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__26950__auto___27055){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27056 = arguments.length;
var i__21235__auto___27057 = (0);
while(true){
if((i__21235__auto___27057 < len__21234__auto___27056)){
args__21241__auto__.push((arguments[i__21235__auto___27057]));

var G__27058 = (i__21235__auto___27057 + (1));
i__21235__auto___27057 = G__27058;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27055))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27055){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27055),args);
});})(g__26950__auto___27055))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__26950__auto___27055){
return (function (seq27001){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27001));
});})(g__26950__auto___27055))
;


var g__26950__auto___27059 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__26950__auto___27059){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27060 = arguments.length;
var i__21235__auto___27061 = (0);
while(true){
if((i__21235__auto___27061 < len__21234__auto___27060)){
args__21241__auto__.push((arguments[i__21235__auto___27061]));

var G__27062 = (i__21235__auto___27061 + (1));
i__21235__auto___27061 = G__27062;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27059))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27059){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27059),args);
});})(g__26950__auto___27059))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__26950__auto___27059){
return (function (seq27002){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27002));
});})(g__26950__auto___27059))
;


var g__26950__auto___27063 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__26950__auto___27063){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27064 = arguments.length;
var i__21235__auto___27065 = (0);
while(true){
if((i__21235__auto___27065 < len__21234__auto___27064)){
args__21241__auto__.push((arguments[i__21235__auto___27065]));

var G__27066 = (i__21235__auto___27065 + (1));
i__21235__auto___27065 = G__27066;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27063))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27063){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27063),args);
});})(g__26950__auto___27063))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__26950__auto___27063){
return (function (seq27003){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27003));
});})(g__26950__auto___27063))
;


var g__26950__auto___27067 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__26950__auto___27067){
return (function cljs$spec$impl$gen$return(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27068 = arguments.length;
var i__21235__auto___27069 = (0);
while(true){
if((i__21235__auto___27069 < len__21234__auto___27068)){
args__21241__auto__.push((arguments[i__21235__auto___27069]));

var G__27070 = (i__21235__auto___27069 + (1));
i__21235__auto___27069 = G__27070;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27067))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27067){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27067),args);
});})(g__26950__auto___27067))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__26950__auto___27067){
return (function (seq27004){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27004));
});})(g__26950__auto___27067))
;


var g__26950__auto___27071 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__26950__auto___27071){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27072 = arguments.length;
var i__21235__auto___27073 = (0);
while(true){
if((i__21235__auto___27073 < len__21234__auto___27072)){
args__21241__auto__.push((arguments[i__21235__auto___27073]));

var G__27074 = (i__21235__auto___27073 + (1));
i__21235__auto___27073 = G__27074;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27071))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27071){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27071),args);
});})(g__26950__auto___27071))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__26950__auto___27071){
return (function (seq27005){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27005));
});})(g__26950__auto___27071))
;


var g__26950__auto___27075 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__26950__auto___27075){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27076 = arguments.length;
var i__21235__auto___27077 = (0);
while(true){
if((i__21235__auto___27077 < len__21234__auto___27076)){
args__21241__auto__.push((arguments[i__21235__auto___27077]));

var G__27078 = (i__21235__auto___27077 + (1));
i__21235__auto___27077 = G__27078;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26950__auto___27075))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26950__auto___27075){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26950__auto___27075),args);
});})(g__26950__auto___27075))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__26950__auto___27075){
return (function (seq27006){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27006));
});})(g__26950__auto___27075))
;

var g__26963__auto___27100 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__26963__auto___27100){
return (function cljs$spec$impl$gen$any(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27101 = arguments.length;
var i__21235__auto___27102 = (0);
while(true){
if((i__21235__auto___27102 < len__21234__auto___27101)){
args__21241__auto__.push((arguments[i__21235__auto___27102]));

var G__27103 = (i__21235__auto___27102 + (1));
i__21235__auto___27102 = G__27103;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27100))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27100){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27100);
});})(g__26963__auto___27100))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__26963__auto___27100){
return (function (seq27079){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27079));
});})(g__26963__auto___27100))
;


var g__26963__auto___27104 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__26963__auto___27104){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27105 = arguments.length;
var i__21235__auto___27106 = (0);
while(true){
if((i__21235__auto___27106 < len__21234__auto___27105)){
args__21241__auto__.push((arguments[i__21235__auto___27106]));

var G__27107 = (i__21235__auto___27106 + (1));
i__21235__auto___27106 = G__27107;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27104))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27104){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27104);
});})(g__26963__auto___27104))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__26963__auto___27104){
return (function (seq27080){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27080));
});})(g__26963__auto___27104))
;


var g__26963__auto___27108 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__26963__auto___27108){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27109 = arguments.length;
var i__21235__auto___27110 = (0);
while(true){
if((i__21235__auto___27110 < len__21234__auto___27109)){
args__21241__auto__.push((arguments[i__21235__auto___27110]));

var G__27111 = (i__21235__auto___27110 + (1));
i__21235__auto___27110 = G__27111;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27108))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27108){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27108);
});})(g__26963__auto___27108))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__26963__auto___27108){
return (function (seq27081){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27081));
});})(g__26963__auto___27108))
;


var g__26963__auto___27112 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__26963__auto___27112){
return (function cljs$spec$impl$gen$char(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27113 = arguments.length;
var i__21235__auto___27114 = (0);
while(true){
if((i__21235__auto___27114 < len__21234__auto___27113)){
args__21241__auto__.push((arguments[i__21235__auto___27114]));

var G__27115 = (i__21235__auto___27114 + (1));
i__21235__auto___27114 = G__27115;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27112))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27112){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27112);
});})(g__26963__auto___27112))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__26963__auto___27112){
return (function (seq27082){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27082));
});})(g__26963__auto___27112))
;


var g__26963__auto___27116 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__26963__auto___27116){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27117 = arguments.length;
var i__21235__auto___27118 = (0);
while(true){
if((i__21235__auto___27118 < len__21234__auto___27117)){
args__21241__auto__.push((arguments[i__21235__auto___27118]));

var G__27119 = (i__21235__auto___27118 + (1));
i__21235__auto___27118 = G__27119;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27116))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27116){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27116);
});})(g__26963__auto___27116))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__26963__auto___27116){
return (function (seq27083){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27083));
});})(g__26963__auto___27116))
;


var g__26963__auto___27120 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__26963__auto___27120){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27121 = arguments.length;
var i__21235__auto___27122 = (0);
while(true){
if((i__21235__auto___27122 < len__21234__auto___27121)){
args__21241__auto__.push((arguments[i__21235__auto___27122]));

var G__27123 = (i__21235__auto___27122 + (1));
i__21235__auto___27122 = G__27123;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27120))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27120){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27120);
});})(g__26963__auto___27120))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__26963__auto___27120){
return (function (seq27084){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27084));
});})(g__26963__auto___27120))
;


var g__26963__auto___27124 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__26963__auto___27124){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27125 = arguments.length;
var i__21235__auto___27126 = (0);
while(true){
if((i__21235__auto___27126 < len__21234__auto___27125)){
args__21241__auto__.push((arguments[i__21235__auto___27126]));

var G__27127 = (i__21235__auto___27126 + (1));
i__21235__auto___27126 = G__27127;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27124))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27124){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27124);
});})(g__26963__auto___27124))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__26963__auto___27124){
return (function (seq27085){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27085));
});})(g__26963__auto___27124))
;


var g__26963__auto___27128 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__26963__auto___27128){
return (function cljs$spec$impl$gen$double(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27129 = arguments.length;
var i__21235__auto___27130 = (0);
while(true){
if((i__21235__auto___27130 < len__21234__auto___27129)){
args__21241__auto__.push((arguments[i__21235__auto___27130]));

var G__27131 = (i__21235__auto___27130 + (1));
i__21235__auto___27130 = G__27131;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27128))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27128){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27128);
});})(g__26963__auto___27128))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__26963__auto___27128){
return (function (seq27086){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27086));
});})(g__26963__auto___27128))
;


var g__26963__auto___27132 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__26963__auto___27132){
return (function cljs$spec$impl$gen$int(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27133 = arguments.length;
var i__21235__auto___27134 = (0);
while(true){
if((i__21235__auto___27134 < len__21234__auto___27133)){
args__21241__auto__.push((arguments[i__21235__auto___27134]));

var G__27135 = (i__21235__auto___27134 + (1));
i__21235__auto___27134 = G__27135;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27132))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27132){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27132);
});})(g__26963__auto___27132))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__26963__auto___27132){
return (function (seq27087){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27087));
});})(g__26963__auto___27132))
;


var g__26963__auto___27136 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__26963__auto___27136){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27137 = arguments.length;
var i__21235__auto___27138 = (0);
while(true){
if((i__21235__auto___27138 < len__21234__auto___27137)){
args__21241__auto__.push((arguments[i__21235__auto___27138]));

var G__27139 = (i__21235__auto___27138 + (1));
i__21235__auto___27138 = G__27139;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27136))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27136){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27136);
});})(g__26963__auto___27136))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__26963__auto___27136){
return (function (seq27088){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27088));
});})(g__26963__auto___27136))
;


var g__26963__auto___27140 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__26963__auto___27140){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27141 = arguments.length;
var i__21235__auto___27142 = (0);
while(true){
if((i__21235__auto___27142 < len__21234__auto___27141)){
args__21241__auto__.push((arguments[i__21235__auto___27142]));

var G__27143 = (i__21235__auto___27142 + (1));
i__21235__auto___27142 = G__27143;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27140))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27140){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27140);
});})(g__26963__auto___27140))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__26963__auto___27140){
return (function (seq27089){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27089));
});})(g__26963__auto___27140))
;


var g__26963__auto___27144 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__26963__auto___27144){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27145 = arguments.length;
var i__21235__auto___27146 = (0);
while(true){
if((i__21235__auto___27146 < len__21234__auto___27145)){
args__21241__auto__.push((arguments[i__21235__auto___27146]));

var G__27147 = (i__21235__auto___27146 + (1));
i__21235__auto___27146 = G__27147;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27144))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27144){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27144);
});})(g__26963__auto___27144))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__26963__auto___27144){
return (function (seq27090){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27090));
});})(g__26963__auto___27144))
;


var g__26963__auto___27148 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__26963__auto___27148){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27149 = arguments.length;
var i__21235__auto___27150 = (0);
while(true){
if((i__21235__auto___27150 < len__21234__auto___27149)){
args__21241__auto__.push((arguments[i__21235__auto___27150]));

var G__27151 = (i__21235__auto___27150 + (1));
i__21235__auto___27150 = G__27151;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27148))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27148){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27148);
});})(g__26963__auto___27148))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__26963__auto___27148){
return (function (seq27091){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27091));
});})(g__26963__auto___27148))
;


var g__26963__auto___27152 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__26963__auto___27152){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27153 = arguments.length;
var i__21235__auto___27154 = (0);
while(true){
if((i__21235__auto___27154 < len__21234__auto___27153)){
args__21241__auto__.push((arguments[i__21235__auto___27154]));

var G__27155 = (i__21235__auto___27154 + (1));
i__21235__auto___27154 = G__27155;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27152))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27152){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27152);
});})(g__26963__auto___27152))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__26963__auto___27152){
return (function (seq27092){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27092));
});})(g__26963__auto___27152))
;


var g__26963__auto___27156 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__26963__auto___27156){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27157 = arguments.length;
var i__21235__auto___27158 = (0);
while(true){
if((i__21235__auto___27158 < len__21234__auto___27157)){
args__21241__auto__.push((arguments[i__21235__auto___27158]));

var G__27159 = (i__21235__auto___27158 + (1));
i__21235__auto___27158 = G__27159;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27156))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27156){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27156);
});})(g__26963__auto___27156))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__26963__auto___27156){
return (function (seq27093){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27093));
});})(g__26963__auto___27156))
;


var g__26963__auto___27160 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__26963__auto___27160){
return (function cljs$spec$impl$gen$string(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27161 = arguments.length;
var i__21235__auto___27162 = (0);
while(true){
if((i__21235__auto___27162 < len__21234__auto___27161)){
args__21241__auto__.push((arguments[i__21235__auto___27162]));

var G__27163 = (i__21235__auto___27162 + (1));
i__21235__auto___27162 = G__27163;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27160))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27160){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27160);
});})(g__26963__auto___27160))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__26963__auto___27160){
return (function (seq27094){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27094));
});})(g__26963__auto___27160))
;


var g__26963__auto___27164 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__26963__auto___27164){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27165 = arguments.length;
var i__21235__auto___27166 = (0);
while(true){
if((i__21235__auto___27166 < len__21234__auto___27165)){
args__21241__auto__.push((arguments[i__21235__auto___27166]));

var G__27167 = (i__21235__auto___27166 + (1));
i__21235__auto___27166 = G__27167;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27164))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27164){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27164);
});})(g__26963__auto___27164))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__26963__auto___27164){
return (function (seq27095){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27095));
});})(g__26963__auto___27164))
;


var g__26963__auto___27168 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__26963__auto___27168){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27169 = arguments.length;
var i__21235__auto___27170 = (0);
while(true){
if((i__21235__auto___27170 < len__21234__auto___27169)){
args__21241__auto__.push((arguments[i__21235__auto___27170]));

var G__27171 = (i__21235__auto___27170 + (1));
i__21235__auto___27170 = G__27171;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27168))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27168){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27168);
});})(g__26963__auto___27168))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__26963__auto___27168){
return (function (seq27096){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27096));
});})(g__26963__auto___27168))
;


var g__26963__auto___27172 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__26963__auto___27172){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27173 = arguments.length;
var i__21235__auto___27174 = (0);
while(true){
if((i__21235__auto___27174 < len__21234__auto___27173)){
args__21241__auto__.push((arguments[i__21235__auto___27174]));

var G__27175 = (i__21235__auto___27174 + (1));
i__21235__auto___27174 = G__27175;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27172))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27172){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27172);
});})(g__26963__auto___27172))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__26963__auto___27172){
return (function (seq27097){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27097));
});})(g__26963__auto___27172))
;


var g__26963__auto___27176 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__26963__auto___27176){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27177 = arguments.length;
var i__21235__auto___27178 = (0);
while(true){
if((i__21235__auto___27178 < len__21234__auto___27177)){
args__21241__auto__.push((arguments[i__21235__auto___27178]));

var G__27179 = (i__21235__auto___27178 + (1));
i__21235__auto___27178 = G__27179;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27176))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27176){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27176);
});})(g__26963__auto___27176))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__26963__auto___27176){
return (function (seq27098){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27098));
});})(g__26963__auto___27176))
;


var g__26963__auto___27180 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__26963__auto___27180){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27181 = arguments.length;
var i__21235__auto___27182 = (0);
while(true){
if((i__21235__auto___27182 < len__21234__auto___27181)){
args__21241__auto__.push((arguments[i__21235__auto___27182]));

var G__27183 = (i__21235__auto___27182 + (1));
i__21235__auto___27182 = G__27183;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});})(g__26963__auto___27180))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26963__auto___27180){
return (function (args){
return cljs.core.deref.call(null,g__26963__auto___27180);
});})(g__26963__auto___27180))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__26963__auto___27180){
return (function (seq27099){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27099));
});})(g__26963__auto___27180))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21241__auto__ = [];
var len__21234__auto___27186 = arguments.length;
var i__21235__auto___27187 = (0);
while(true){
if((i__21235__auto___27187 < len__21234__auto___27186)){
args__21241__auto__.push((arguments[i__21235__auto___27187]));

var G__27188 = (i__21235__auto___27187 + (1));
i__21235__auto___27187 = G__27188;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__27184_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__27184_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq27185){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27185));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__27189_SHARP_){
return (new Date(p1__27189_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map
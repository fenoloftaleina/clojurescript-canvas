// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__22336__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22337__i = 0, G__22337__a = new Array(arguments.length -  0);
while (G__22337__i < G__22337__a.length) {G__22337__a[G__22337__i] = arguments[G__22337__i + 0]; ++G__22337__i;}
  args = new cljs.core.IndexedSeq(G__22337__a,0);
} 
return G__22336__delegate.call(this,args);};
G__22336.cljs$lang$maxFixedArity = 0;
G__22336.cljs$lang$applyTo = (function (arglist__22338){
var args = cljs.core.seq(arglist__22338);
return G__22336__delegate(args);
});
G__22336.cljs$core$IFn$_invoke$arity$variadic = G__22336__delegate;
return G__22336;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22339__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22340__i = 0, G__22340__a = new Array(arguments.length -  0);
while (G__22340__i < G__22340__a.length) {G__22340__a[G__22340__i] = arguments[G__22340__i + 0]; ++G__22340__i;}
  args = new cljs.core.IndexedSeq(G__22340__a,0);
} 
return G__22339__delegate.call(this,args);};
G__22339.cljs$lang$maxFixedArity = 0;
G__22339.cljs$lang$applyTo = (function (arglist__22341){
var args = cljs.core.seq(arglist__22341);
return G__22339__delegate(args);
});
G__22339.cljs$core$IFn$_invoke$arity$variadic = G__22339__delegate;
return G__22339;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
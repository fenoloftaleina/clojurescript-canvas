// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20159__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20159__auto__){
return or__20159__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20159__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25878_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25878_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25883 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25884 = null;
var count__25885 = (0);
var i__25886 = (0);
while(true){
if((i__25886 < count__25885)){
var n = cljs.core._nth.call(null,chunk__25884,i__25886);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25887 = seq__25883;
var G__25888 = chunk__25884;
var G__25889 = count__25885;
var G__25890 = (i__25886 + (1));
seq__25883 = G__25887;
chunk__25884 = G__25888;
count__25885 = G__25889;
i__25886 = G__25890;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25883);
if(temp__4657__auto__){
var seq__25883__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25883__$1)){
var c__20970__auto__ = cljs.core.chunk_first.call(null,seq__25883__$1);
var G__25891 = cljs.core.chunk_rest.call(null,seq__25883__$1);
var G__25892 = c__20970__auto__;
var G__25893 = cljs.core.count.call(null,c__20970__auto__);
var G__25894 = (0);
seq__25883 = G__25891;
chunk__25884 = G__25892;
count__25885 = G__25893;
i__25886 = G__25894;
continue;
} else {
var n = cljs.core.first.call(null,seq__25883__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25895 = cljs.core.next.call(null,seq__25883__$1);
var G__25896 = null;
var G__25897 = (0);
var G__25898 = (0);
seq__25883 = G__25895;
chunk__25884 = G__25896;
count__25885 = G__25897;
i__25886 = G__25898;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25949_25960 = cljs.core.seq.call(null,deps);
var chunk__25950_25961 = null;
var count__25951_25962 = (0);
var i__25952_25963 = (0);
while(true){
if((i__25952_25963 < count__25951_25962)){
var dep_25964 = cljs.core._nth.call(null,chunk__25950_25961,i__25952_25963);
topo_sort_helper_STAR_.call(null,dep_25964,(depth + (1)),state);

var G__25965 = seq__25949_25960;
var G__25966 = chunk__25950_25961;
var G__25967 = count__25951_25962;
var G__25968 = (i__25952_25963 + (1));
seq__25949_25960 = G__25965;
chunk__25950_25961 = G__25966;
count__25951_25962 = G__25967;
i__25952_25963 = G__25968;
continue;
} else {
var temp__4657__auto___25969 = cljs.core.seq.call(null,seq__25949_25960);
if(temp__4657__auto___25969){
var seq__25949_25970__$1 = temp__4657__auto___25969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25949_25970__$1)){
var c__20970__auto___25971 = cljs.core.chunk_first.call(null,seq__25949_25970__$1);
var G__25972 = cljs.core.chunk_rest.call(null,seq__25949_25970__$1);
var G__25973 = c__20970__auto___25971;
var G__25974 = cljs.core.count.call(null,c__20970__auto___25971);
var G__25975 = (0);
seq__25949_25960 = G__25972;
chunk__25950_25961 = G__25973;
count__25951_25962 = G__25974;
i__25952_25963 = G__25975;
continue;
} else {
var dep_25976 = cljs.core.first.call(null,seq__25949_25970__$1);
topo_sort_helper_STAR_.call(null,dep_25976,(depth + (1)),state);

var G__25977 = cljs.core.next.call(null,seq__25949_25970__$1);
var G__25978 = null;
var G__25979 = (0);
var G__25980 = (0);
seq__25949_25960 = G__25977;
chunk__25950_25961 = G__25978;
count__25951_25962 = G__25979;
i__25952_25963 = G__25980;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25953){
var vec__25957 = p__25953;
var seq__25958 = cljs.core.seq.call(null,vec__25957);
var first__25959 = cljs.core.first.call(null,seq__25958);
var seq__25958__$1 = cljs.core.next.call(null,seq__25958);
var x = first__25959;
var xs = seq__25958__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25957,seq__25958,first__25959,seq__25958__$1,x,xs,get_deps__$1){
return (function (p1__25899_SHARP_){
return clojure.set.difference.call(null,p1__25899_SHARP_,x);
});})(vec__25957,seq__25958,first__25959,seq__25958__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25993 = cljs.core.seq.call(null,provides);
var chunk__25994 = null;
var count__25995 = (0);
var i__25996 = (0);
while(true){
if((i__25996 < count__25995)){
var prov = cljs.core._nth.call(null,chunk__25994,i__25996);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25997_26005 = cljs.core.seq.call(null,requires);
var chunk__25998_26006 = null;
var count__25999_26007 = (0);
var i__26000_26008 = (0);
while(true){
if((i__26000_26008 < count__25999_26007)){
var req_26009 = cljs.core._nth.call(null,chunk__25998_26006,i__26000_26008);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26009,prov);

var G__26010 = seq__25997_26005;
var G__26011 = chunk__25998_26006;
var G__26012 = count__25999_26007;
var G__26013 = (i__26000_26008 + (1));
seq__25997_26005 = G__26010;
chunk__25998_26006 = G__26011;
count__25999_26007 = G__26012;
i__26000_26008 = G__26013;
continue;
} else {
var temp__4657__auto___26014 = cljs.core.seq.call(null,seq__25997_26005);
if(temp__4657__auto___26014){
var seq__25997_26015__$1 = temp__4657__auto___26014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25997_26015__$1)){
var c__20970__auto___26016 = cljs.core.chunk_first.call(null,seq__25997_26015__$1);
var G__26017 = cljs.core.chunk_rest.call(null,seq__25997_26015__$1);
var G__26018 = c__20970__auto___26016;
var G__26019 = cljs.core.count.call(null,c__20970__auto___26016);
var G__26020 = (0);
seq__25997_26005 = G__26017;
chunk__25998_26006 = G__26018;
count__25999_26007 = G__26019;
i__26000_26008 = G__26020;
continue;
} else {
var req_26021 = cljs.core.first.call(null,seq__25997_26015__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26021,prov);

var G__26022 = cljs.core.next.call(null,seq__25997_26015__$1);
var G__26023 = null;
var G__26024 = (0);
var G__26025 = (0);
seq__25997_26005 = G__26022;
chunk__25998_26006 = G__26023;
count__25999_26007 = G__26024;
i__26000_26008 = G__26025;
continue;
}
} else {
}
}
break;
}

var G__26026 = seq__25993;
var G__26027 = chunk__25994;
var G__26028 = count__25995;
var G__26029 = (i__25996 + (1));
seq__25993 = G__26026;
chunk__25994 = G__26027;
count__25995 = G__26028;
i__25996 = G__26029;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25993);
if(temp__4657__auto__){
var seq__25993__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25993__$1)){
var c__20970__auto__ = cljs.core.chunk_first.call(null,seq__25993__$1);
var G__26030 = cljs.core.chunk_rest.call(null,seq__25993__$1);
var G__26031 = c__20970__auto__;
var G__26032 = cljs.core.count.call(null,c__20970__auto__);
var G__26033 = (0);
seq__25993 = G__26030;
chunk__25994 = G__26031;
count__25995 = G__26032;
i__25996 = G__26033;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25993__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26001_26034 = cljs.core.seq.call(null,requires);
var chunk__26002_26035 = null;
var count__26003_26036 = (0);
var i__26004_26037 = (0);
while(true){
if((i__26004_26037 < count__26003_26036)){
var req_26038 = cljs.core._nth.call(null,chunk__26002_26035,i__26004_26037);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26038,prov);

var G__26039 = seq__26001_26034;
var G__26040 = chunk__26002_26035;
var G__26041 = count__26003_26036;
var G__26042 = (i__26004_26037 + (1));
seq__26001_26034 = G__26039;
chunk__26002_26035 = G__26040;
count__26003_26036 = G__26041;
i__26004_26037 = G__26042;
continue;
} else {
var temp__4657__auto___26043__$1 = cljs.core.seq.call(null,seq__26001_26034);
if(temp__4657__auto___26043__$1){
var seq__26001_26044__$1 = temp__4657__auto___26043__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26001_26044__$1)){
var c__20970__auto___26045 = cljs.core.chunk_first.call(null,seq__26001_26044__$1);
var G__26046 = cljs.core.chunk_rest.call(null,seq__26001_26044__$1);
var G__26047 = c__20970__auto___26045;
var G__26048 = cljs.core.count.call(null,c__20970__auto___26045);
var G__26049 = (0);
seq__26001_26034 = G__26046;
chunk__26002_26035 = G__26047;
count__26003_26036 = G__26048;
i__26004_26037 = G__26049;
continue;
} else {
var req_26050 = cljs.core.first.call(null,seq__26001_26044__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26050,prov);

var G__26051 = cljs.core.next.call(null,seq__26001_26044__$1);
var G__26052 = null;
var G__26053 = (0);
var G__26054 = (0);
seq__26001_26034 = G__26051;
chunk__26002_26035 = G__26052;
count__26003_26036 = G__26053;
i__26004_26037 = G__26054;
continue;
}
} else {
}
}
break;
}

var G__26055 = cljs.core.next.call(null,seq__25993__$1);
var G__26056 = null;
var G__26057 = (0);
var G__26058 = (0);
seq__25993 = G__26055;
chunk__25994 = G__26056;
count__25995 = G__26057;
i__25996 = G__26058;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26063_26067 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26064_26068 = null;
var count__26065_26069 = (0);
var i__26066_26070 = (0);
while(true){
if((i__26066_26070 < count__26065_26069)){
var ns_26071 = cljs.core._nth.call(null,chunk__26064_26068,i__26066_26070);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26071);

var G__26072 = seq__26063_26067;
var G__26073 = chunk__26064_26068;
var G__26074 = count__26065_26069;
var G__26075 = (i__26066_26070 + (1));
seq__26063_26067 = G__26072;
chunk__26064_26068 = G__26073;
count__26065_26069 = G__26074;
i__26066_26070 = G__26075;
continue;
} else {
var temp__4657__auto___26076 = cljs.core.seq.call(null,seq__26063_26067);
if(temp__4657__auto___26076){
var seq__26063_26077__$1 = temp__4657__auto___26076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26063_26077__$1)){
var c__20970__auto___26078 = cljs.core.chunk_first.call(null,seq__26063_26077__$1);
var G__26079 = cljs.core.chunk_rest.call(null,seq__26063_26077__$1);
var G__26080 = c__20970__auto___26078;
var G__26081 = cljs.core.count.call(null,c__20970__auto___26078);
var G__26082 = (0);
seq__26063_26067 = G__26079;
chunk__26064_26068 = G__26080;
count__26065_26069 = G__26081;
i__26066_26070 = G__26082;
continue;
} else {
var ns_26083 = cljs.core.first.call(null,seq__26063_26077__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26083);

var G__26084 = cljs.core.next.call(null,seq__26063_26077__$1);
var G__26085 = null;
var G__26086 = (0);
var G__26087 = (0);
seq__26063_26067 = G__26084;
chunk__26064_26068 = G__26085;
count__26065_26069 = G__26086;
i__26066_26070 = G__26087;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20159__auto__ = goog.require__;
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26088__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26089__i = 0, G__26089__a = new Array(arguments.length -  0);
while (G__26089__i < G__26089__a.length) {G__26089__a[G__26089__i] = arguments[G__26089__i + 0]; ++G__26089__i;}
  args = new cljs.core.IndexedSeq(G__26089__a,0);
} 
return G__26088__delegate.call(this,args);};
G__26088.cljs$lang$maxFixedArity = 0;
G__26088.cljs$lang$applyTo = (function (arglist__26090){
var args = cljs.core.seq(arglist__26090);
return G__26088__delegate(args);
});
G__26088.cljs$core$IFn$_invoke$arity$variadic = G__26088__delegate;
return G__26088;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26092 = cljs.core._EQ_;
var expr__26093 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26092.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26093))){
var path_parts = ((function (pred__26092,expr__26093){
return (function (p1__26091_SHARP_){
return clojure.string.split.call(null,p1__26091_SHARP_,/[\/\\]/);
});})(pred__26092,expr__26093))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26092,expr__26093){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26095){if((e26095 instanceof Error)){
var e = e26095;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26095;

}
}})());
});
;})(path_parts,sep,root,pred__26092,expr__26093))
} else {
if(cljs.core.truth_(pred__26092.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26093))){
return ((function (pred__26092,expr__26093){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__26092,expr__26093){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26092,expr__26093))
);

return deferred.addErrback(((function (deferred,pred__26092,expr__26093){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26092,expr__26093))
);
});
;})(pred__26092,expr__26093))
} else {
return ((function (pred__26092,expr__26093){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26092,expr__26093))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26096,callback){
var map__26099 = p__26096;
var map__26099__$1 = ((((!((map__26099 == null)))?((((map__26099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26099):map__26099);
var file_msg = map__26099__$1;
var request_url = cljs.core.get.call(null,map__26099__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26099,map__26099__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26099,map__26099__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto__){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto__){
return (function (state_26123){
var state_val_26124 = (state_26123[(1)]);
if((state_val_26124 === (7))){
var inst_26119 = (state_26123[(2)]);
var state_26123__$1 = state_26123;
var statearr_26125_26145 = state_26123__$1;
(statearr_26125_26145[(2)] = inst_26119);

(statearr_26125_26145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (1))){
var state_26123__$1 = state_26123;
var statearr_26126_26146 = state_26123__$1;
(statearr_26126_26146[(2)] = null);

(statearr_26126_26146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (4))){
var inst_26103 = (state_26123[(7)]);
var inst_26103__$1 = (state_26123[(2)]);
var state_26123__$1 = (function (){var statearr_26127 = state_26123;
(statearr_26127[(7)] = inst_26103__$1);

return statearr_26127;
})();
if(cljs.core.truth_(inst_26103__$1)){
var statearr_26128_26147 = state_26123__$1;
(statearr_26128_26147[(1)] = (5));

} else {
var statearr_26129_26148 = state_26123__$1;
(statearr_26129_26148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (6))){
var state_26123__$1 = state_26123;
var statearr_26130_26149 = state_26123__$1;
(statearr_26130_26149[(2)] = null);

(statearr_26130_26149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (3))){
var inst_26121 = (state_26123[(2)]);
var state_26123__$1 = state_26123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26123__$1,inst_26121);
} else {
if((state_val_26124 === (2))){
var state_26123__$1 = state_26123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26123__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26124 === (11))){
var inst_26115 = (state_26123[(2)]);
var state_26123__$1 = (function (){var statearr_26131 = state_26123;
(statearr_26131[(8)] = inst_26115);

return statearr_26131;
})();
var statearr_26132_26150 = state_26123__$1;
(statearr_26132_26150[(2)] = null);

(statearr_26132_26150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (9))){
var inst_26107 = (state_26123[(9)]);
var inst_26109 = (state_26123[(10)]);
var inst_26111 = inst_26109.call(null,inst_26107);
var state_26123__$1 = state_26123;
var statearr_26133_26151 = state_26123__$1;
(statearr_26133_26151[(2)] = inst_26111);

(statearr_26133_26151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (5))){
var inst_26103 = (state_26123[(7)]);
var inst_26105 = figwheel.client.file_reloading.blocking_load.call(null,inst_26103);
var state_26123__$1 = state_26123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26123__$1,(8),inst_26105);
} else {
if((state_val_26124 === (10))){
var inst_26107 = (state_26123[(9)]);
var inst_26113 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26107);
var state_26123__$1 = state_26123;
var statearr_26134_26152 = state_26123__$1;
(statearr_26134_26152[(2)] = inst_26113);

(statearr_26134_26152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26124 === (8))){
var inst_26103 = (state_26123[(7)]);
var inst_26109 = (state_26123[(10)]);
var inst_26107 = (state_26123[(2)]);
var inst_26108 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26109__$1 = cljs.core.get.call(null,inst_26108,inst_26103);
var state_26123__$1 = (function (){var statearr_26135 = state_26123;
(statearr_26135[(9)] = inst_26107);

(statearr_26135[(10)] = inst_26109__$1);

return statearr_26135;
})();
if(cljs.core.truth_(inst_26109__$1)){
var statearr_26136_26153 = state_26123__$1;
(statearr_26136_26153[(1)] = (9));

} else {
var statearr_26137_26154 = state_26123__$1;
(statearr_26137_26154[(1)] = (10));

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
});})(c__23023__auto__))
;
return ((function (switch__22178__auto__,c__23023__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22179__auto__ = null;
var figwheel$client$file_reloading$state_machine__22179__auto____0 = (function (){
var statearr_26141 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26141[(0)] = figwheel$client$file_reloading$state_machine__22179__auto__);

(statearr_26141[(1)] = (1));

return statearr_26141;
});
var figwheel$client$file_reloading$state_machine__22179__auto____1 = (function (state_26123){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_26123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e26142){if((e26142 instanceof Object)){
var ex__22182__auto__ = e26142;
var statearr_26143_26155 = state_26123;
(statearr_26143_26155[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26156 = state_26123;
state_26123 = G__26156;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22179__auto__ = function(state_26123){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22179__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22179__auto____1.call(this,state_26123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22179__auto____0;
figwheel$client$file_reloading$state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22179__auto____1;
return figwheel$client$file_reloading$state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto__))
})();
var state__23025__auto__ = (function (){var statearr_26144 = f__23024__auto__.call(null);
(statearr_26144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto__);

return statearr_26144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto__))
);

return c__23023__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26157,callback){
var map__26160 = p__26157;
var map__26160__$1 = ((((!((map__26160 == null)))?((((map__26160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26160):map__26160);
var file_msg = map__26160__$1;
var namespace = cljs.core.get.call(null,map__26160__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26160,map__26160__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26160,map__26160__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26162){
var map__26165 = p__26162;
var map__26165__$1 = ((((!((map__26165 == null)))?((((map__26165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26165):map__26165);
var file_msg = map__26165__$1;
var namespace = cljs.core.get.call(null,map__26165__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20147__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20147__auto__){
var or__20159__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
var or__20159__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20159__auto____$1)){
return or__20159__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20147__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26167,callback){
var map__26170 = p__26167;
var map__26170__$1 = ((((!((map__26170 == null)))?((((map__26170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26170):map__26170);
var file_msg = map__26170__$1;
var request_url = cljs.core.get.call(null,map__26170__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26170__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23023__auto___26274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___26274,out){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___26274,out){
return (function (state_26256){
var state_val_26257 = (state_26256[(1)]);
if((state_val_26257 === (1))){
var inst_26230 = cljs.core.seq.call(null,files);
var inst_26231 = cljs.core.first.call(null,inst_26230);
var inst_26232 = cljs.core.next.call(null,inst_26230);
var inst_26233 = files;
var state_26256__$1 = (function (){var statearr_26258 = state_26256;
(statearr_26258[(7)] = inst_26231);

(statearr_26258[(8)] = inst_26232);

(statearr_26258[(9)] = inst_26233);

return statearr_26258;
})();
var statearr_26259_26275 = state_26256__$1;
(statearr_26259_26275[(2)] = null);

(statearr_26259_26275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (2))){
var inst_26239 = (state_26256[(10)]);
var inst_26233 = (state_26256[(9)]);
var inst_26238 = cljs.core.seq.call(null,inst_26233);
var inst_26239__$1 = cljs.core.first.call(null,inst_26238);
var inst_26240 = cljs.core.next.call(null,inst_26238);
var inst_26241 = (inst_26239__$1 == null);
var inst_26242 = cljs.core.not.call(null,inst_26241);
var state_26256__$1 = (function (){var statearr_26260 = state_26256;
(statearr_26260[(11)] = inst_26240);

(statearr_26260[(10)] = inst_26239__$1);

return statearr_26260;
})();
if(inst_26242){
var statearr_26261_26276 = state_26256__$1;
(statearr_26261_26276[(1)] = (4));

} else {
var statearr_26262_26277 = state_26256__$1;
(statearr_26262_26277[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (3))){
var inst_26254 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26256__$1,inst_26254);
} else {
if((state_val_26257 === (4))){
var inst_26239 = (state_26256[(10)]);
var inst_26244 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26239);
var state_26256__$1 = state_26256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26256__$1,(7),inst_26244);
} else {
if((state_val_26257 === (5))){
var inst_26250 = cljs.core.async.close_BANG_.call(null,out);
var state_26256__$1 = state_26256;
var statearr_26263_26278 = state_26256__$1;
(statearr_26263_26278[(2)] = inst_26250);

(statearr_26263_26278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (6))){
var inst_26252 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
var statearr_26264_26279 = state_26256__$1;
(statearr_26264_26279[(2)] = inst_26252);

(statearr_26264_26279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (7))){
var inst_26240 = (state_26256[(11)]);
var inst_26246 = (state_26256[(2)]);
var inst_26247 = cljs.core.async.put_BANG_.call(null,out,inst_26246);
var inst_26233 = inst_26240;
var state_26256__$1 = (function (){var statearr_26265 = state_26256;
(statearr_26265[(12)] = inst_26247);

(statearr_26265[(9)] = inst_26233);

return statearr_26265;
})();
var statearr_26266_26280 = state_26256__$1;
(statearr_26266_26280[(2)] = null);

(statearr_26266_26280[(1)] = (2));


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
});})(c__23023__auto___26274,out))
;
return ((function (switch__22178__auto__,c__23023__auto___26274,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22179__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22179__auto____0 = (function (){
var statearr_26270 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26270[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22179__auto__);

(statearr_26270[(1)] = (1));

return statearr_26270;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22179__auto____1 = (function (state_26256){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_26256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e26271){if((e26271 instanceof Object)){
var ex__22182__auto__ = e26271;
var statearr_26272_26281 = state_26256;
(statearr_26272_26281[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26282 = state_26256;
state_26256 = G__26282;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22179__auto__ = function(state_26256){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22179__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22179__auto____1.call(this,state_26256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22179__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22179__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___26274,out))
})();
var state__23025__auto__ = (function (){var statearr_26273 = f__23024__auto__.call(null);
(statearr_26273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___26274);

return statearr_26273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___26274,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26283,opts){
var map__26287 = p__26283;
var map__26287__$1 = ((((!((map__26287 == null)))?((((map__26287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26287):map__26287);
var eval_body__$1 = cljs.core.get.call(null,map__26287__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26287__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20147__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20147__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20147__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26289){var e = e26289;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26290_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26290_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26299){
var vec__26300 = p__26299;
var k = cljs.core.nth.call(null,vec__26300,(0),null);
var v = cljs.core.nth.call(null,vec__26300,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26303){
var vec__26304 = p__26303;
var k = cljs.core.nth.call(null,vec__26304,(0),null);
var v = cljs.core.nth.call(null,vec__26304,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26310,p__26311){
var map__26558 = p__26310;
var map__26558__$1 = ((((!((map__26558 == null)))?((((map__26558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26558):map__26558);
var opts = map__26558__$1;
var before_jsload = cljs.core.get.call(null,map__26558__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26558__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26558__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26559 = p__26311;
var map__26559__$1 = ((((!((map__26559 == null)))?((((map__26559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26559):map__26559);
var msg = map__26559__$1;
var files = cljs.core.get.call(null,map__26559__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26559__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26559__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26712){
var state_val_26713 = (state_26712[(1)]);
if((state_val_26713 === (7))){
var inst_26576 = (state_26712[(7)]);
var inst_26573 = (state_26712[(8)]);
var inst_26575 = (state_26712[(9)]);
var inst_26574 = (state_26712[(10)]);
var inst_26581 = cljs.core._nth.call(null,inst_26574,inst_26576);
var inst_26582 = figwheel.client.file_reloading.eval_body.call(null,inst_26581,opts);
var inst_26583 = (inst_26576 + (1));
var tmp26714 = inst_26573;
var tmp26715 = inst_26575;
var tmp26716 = inst_26574;
var inst_26573__$1 = tmp26714;
var inst_26574__$1 = tmp26716;
var inst_26575__$1 = tmp26715;
var inst_26576__$1 = inst_26583;
var state_26712__$1 = (function (){var statearr_26717 = state_26712;
(statearr_26717[(7)] = inst_26576__$1);

(statearr_26717[(8)] = inst_26573__$1);

(statearr_26717[(9)] = inst_26575__$1);

(statearr_26717[(10)] = inst_26574__$1);

(statearr_26717[(11)] = inst_26582);

return statearr_26717;
})();
var statearr_26718_26804 = state_26712__$1;
(statearr_26718_26804[(2)] = null);

(statearr_26718_26804[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (20))){
var inst_26616 = (state_26712[(12)]);
var inst_26624 = figwheel.client.file_reloading.sort_files.call(null,inst_26616);
var state_26712__$1 = state_26712;
var statearr_26719_26805 = state_26712__$1;
(statearr_26719_26805[(2)] = inst_26624);

(statearr_26719_26805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (27))){
var state_26712__$1 = state_26712;
var statearr_26720_26806 = state_26712__$1;
(statearr_26720_26806[(2)] = null);

(statearr_26720_26806[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (1))){
var inst_26565 = (state_26712[(13)]);
var inst_26562 = before_jsload.call(null,files);
var inst_26563 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26564 = (function (){return ((function (inst_26565,inst_26562,inst_26563,state_val_26713,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26307_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26307_SHARP_);
});
;})(inst_26565,inst_26562,inst_26563,state_val_26713,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26565__$1 = cljs.core.filter.call(null,inst_26564,files);
var inst_26566 = cljs.core.not_empty.call(null,inst_26565__$1);
var state_26712__$1 = (function (){var statearr_26721 = state_26712;
(statearr_26721[(14)] = inst_26563);

(statearr_26721[(13)] = inst_26565__$1);

(statearr_26721[(15)] = inst_26562);

return statearr_26721;
})();
if(cljs.core.truth_(inst_26566)){
var statearr_26722_26807 = state_26712__$1;
(statearr_26722_26807[(1)] = (2));

} else {
var statearr_26723_26808 = state_26712__$1;
(statearr_26723_26808[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (24))){
var state_26712__$1 = state_26712;
var statearr_26724_26809 = state_26712__$1;
(statearr_26724_26809[(2)] = null);

(statearr_26724_26809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (39))){
var inst_26666 = (state_26712[(16)]);
var state_26712__$1 = state_26712;
var statearr_26725_26810 = state_26712__$1;
(statearr_26725_26810[(2)] = inst_26666);

(statearr_26725_26810[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (46))){
var inst_26707 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
var statearr_26726_26811 = state_26712__$1;
(statearr_26726_26811[(2)] = inst_26707);

(statearr_26726_26811[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (4))){
var inst_26610 = (state_26712[(2)]);
var inst_26611 = cljs.core.List.EMPTY;
var inst_26612 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26611);
var inst_26613 = (function (){return ((function (inst_26610,inst_26611,inst_26612,state_val_26713,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26308_SHARP_){
var and__20147__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26308_SHARP_);
if(cljs.core.truth_(and__20147__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26308_SHARP_));
} else {
return and__20147__auto__;
}
});
;})(inst_26610,inst_26611,inst_26612,state_val_26713,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26614 = cljs.core.filter.call(null,inst_26613,files);
var inst_26615 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26616 = cljs.core.concat.call(null,inst_26614,inst_26615);
var state_26712__$1 = (function (){var statearr_26727 = state_26712;
(statearr_26727[(17)] = inst_26610);

(statearr_26727[(12)] = inst_26616);

(statearr_26727[(18)] = inst_26612);

return statearr_26727;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26728_26812 = state_26712__$1;
(statearr_26728_26812[(1)] = (16));

} else {
var statearr_26729_26813 = state_26712__$1;
(statearr_26729_26813[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (15))){
var inst_26600 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
var statearr_26730_26814 = state_26712__$1;
(statearr_26730_26814[(2)] = inst_26600);

(statearr_26730_26814[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (21))){
var inst_26626 = (state_26712[(19)]);
var inst_26626__$1 = (state_26712[(2)]);
var inst_26627 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26626__$1);
var state_26712__$1 = (function (){var statearr_26731 = state_26712;
(statearr_26731[(19)] = inst_26626__$1);

return statearr_26731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26712__$1,(22),inst_26627);
} else {
if((state_val_26713 === (31))){
var inst_26710 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26712__$1,inst_26710);
} else {
if((state_val_26713 === (32))){
var inst_26666 = (state_26712[(16)]);
var inst_26671 = inst_26666.cljs$lang$protocol_mask$partition0$;
var inst_26672 = (inst_26671 & (64));
var inst_26673 = inst_26666.cljs$core$ISeq$;
var inst_26674 = (inst_26672) || (inst_26673);
var state_26712__$1 = state_26712;
if(cljs.core.truth_(inst_26674)){
var statearr_26732_26815 = state_26712__$1;
(statearr_26732_26815[(1)] = (35));

} else {
var statearr_26733_26816 = state_26712__$1;
(statearr_26733_26816[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (40))){
var inst_26687 = (state_26712[(20)]);
var inst_26686 = (state_26712[(2)]);
var inst_26687__$1 = cljs.core.get.call(null,inst_26686,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26688 = cljs.core.get.call(null,inst_26686,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26689 = cljs.core.not_empty.call(null,inst_26687__$1);
var state_26712__$1 = (function (){var statearr_26734 = state_26712;
(statearr_26734[(20)] = inst_26687__$1);

(statearr_26734[(21)] = inst_26688);

return statearr_26734;
})();
if(cljs.core.truth_(inst_26689)){
var statearr_26735_26817 = state_26712__$1;
(statearr_26735_26817[(1)] = (41));

} else {
var statearr_26736_26818 = state_26712__$1;
(statearr_26736_26818[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (33))){
var state_26712__$1 = state_26712;
var statearr_26737_26819 = state_26712__$1;
(statearr_26737_26819[(2)] = false);

(statearr_26737_26819[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (13))){
var inst_26586 = (state_26712[(22)]);
var inst_26590 = cljs.core.chunk_first.call(null,inst_26586);
var inst_26591 = cljs.core.chunk_rest.call(null,inst_26586);
var inst_26592 = cljs.core.count.call(null,inst_26590);
var inst_26573 = inst_26591;
var inst_26574 = inst_26590;
var inst_26575 = inst_26592;
var inst_26576 = (0);
var state_26712__$1 = (function (){var statearr_26738 = state_26712;
(statearr_26738[(7)] = inst_26576);

(statearr_26738[(8)] = inst_26573);

(statearr_26738[(9)] = inst_26575);

(statearr_26738[(10)] = inst_26574);

return statearr_26738;
})();
var statearr_26739_26820 = state_26712__$1;
(statearr_26739_26820[(2)] = null);

(statearr_26739_26820[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (22))){
var inst_26626 = (state_26712[(19)]);
var inst_26630 = (state_26712[(23)]);
var inst_26629 = (state_26712[(24)]);
var inst_26634 = (state_26712[(25)]);
var inst_26629__$1 = (state_26712[(2)]);
var inst_26630__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26629__$1);
var inst_26631 = (function (){var all_files = inst_26626;
var res_SINGLEQUOTE_ = inst_26629__$1;
var res = inst_26630__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26626,inst_26630,inst_26629,inst_26634,inst_26629__$1,inst_26630__$1,state_val_26713,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26309_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26309_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26626,inst_26630,inst_26629,inst_26634,inst_26629__$1,inst_26630__$1,state_val_26713,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26632 = cljs.core.filter.call(null,inst_26631,inst_26629__$1);
var inst_26633 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26634__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26633);
var inst_26635 = cljs.core.not_empty.call(null,inst_26634__$1);
var state_26712__$1 = (function (){var statearr_26740 = state_26712;
(statearr_26740[(23)] = inst_26630__$1);

(statearr_26740[(24)] = inst_26629__$1);

(statearr_26740[(26)] = inst_26632);

(statearr_26740[(25)] = inst_26634__$1);

return statearr_26740;
})();
if(cljs.core.truth_(inst_26635)){
var statearr_26741_26821 = state_26712__$1;
(statearr_26741_26821[(1)] = (23));

} else {
var statearr_26742_26822 = state_26712__$1;
(statearr_26742_26822[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (36))){
var state_26712__$1 = state_26712;
var statearr_26743_26823 = state_26712__$1;
(statearr_26743_26823[(2)] = false);

(statearr_26743_26823[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (41))){
var inst_26687 = (state_26712[(20)]);
var inst_26691 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26692 = cljs.core.map.call(null,inst_26691,inst_26687);
var inst_26693 = cljs.core.pr_str.call(null,inst_26692);
var inst_26694 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26693)].join('');
var inst_26695 = figwheel.client.utils.log.call(null,inst_26694);
var state_26712__$1 = state_26712;
var statearr_26744_26824 = state_26712__$1;
(statearr_26744_26824[(2)] = inst_26695);

(statearr_26744_26824[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (43))){
var inst_26688 = (state_26712[(21)]);
var inst_26698 = (state_26712[(2)]);
var inst_26699 = cljs.core.not_empty.call(null,inst_26688);
var state_26712__$1 = (function (){var statearr_26745 = state_26712;
(statearr_26745[(27)] = inst_26698);

return statearr_26745;
})();
if(cljs.core.truth_(inst_26699)){
var statearr_26746_26825 = state_26712__$1;
(statearr_26746_26825[(1)] = (44));

} else {
var statearr_26747_26826 = state_26712__$1;
(statearr_26747_26826[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (29))){
var inst_26626 = (state_26712[(19)]);
var inst_26630 = (state_26712[(23)]);
var inst_26629 = (state_26712[(24)]);
var inst_26666 = (state_26712[(16)]);
var inst_26632 = (state_26712[(26)]);
var inst_26634 = (state_26712[(25)]);
var inst_26662 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26665 = (function (){var all_files = inst_26626;
var res_SINGLEQUOTE_ = inst_26629;
var res = inst_26630;
var files_not_loaded = inst_26632;
var dependencies_that_loaded = inst_26634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26630,inst_26629,inst_26666,inst_26632,inst_26634,inst_26662,state_val_26713,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26664){
var map__26748 = p__26664;
var map__26748__$1 = ((((!((map__26748 == null)))?((((map__26748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26748):map__26748);
var namespace = cljs.core.get.call(null,map__26748__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26630,inst_26629,inst_26666,inst_26632,inst_26634,inst_26662,state_val_26713,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26666__$1 = cljs.core.group_by.call(null,inst_26665,inst_26632);
var inst_26668 = (inst_26666__$1 == null);
var inst_26669 = cljs.core.not.call(null,inst_26668);
var state_26712__$1 = (function (){var statearr_26750 = state_26712;
(statearr_26750[(16)] = inst_26666__$1);

(statearr_26750[(28)] = inst_26662);

return statearr_26750;
})();
if(inst_26669){
var statearr_26751_26827 = state_26712__$1;
(statearr_26751_26827[(1)] = (32));

} else {
var statearr_26752_26828 = state_26712__$1;
(statearr_26752_26828[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (44))){
var inst_26688 = (state_26712[(21)]);
var inst_26701 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26688);
var inst_26702 = cljs.core.pr_str.call(null,inst_26701);
var inst_26703 = [cljs.core.str("not required: "),cljs.core.str(inst_26702)].join('');
var inst_26704 = figwheel.client.utils.log.call(null,inst_26703);
var state_26712__$1 = state_26712;
var statearr_26753_26829 = state_26712__$1;
(statearr_26753_26829[(2)] = inst_26704);

(statearr_26753_26829[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (6))){
var inst_26607 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
var statearr_26754_26830 = state_26712__$1;
(statearr_26754_26830[(2)] = inst_26607);

(statearr_26754_26830[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (28))){
var inst_26632 = (state_26712[(26)]);
var inst_26659 = (state_26712[(2)]);
var inst_26660 = cljs.core.not_empty.call(null,inst_26632);
var state_26712__$1 = (function (){var statearr_26755 = state_26712;
(statearr_26755[(29)] = inst_26659);

return statearr_26755;
})();
if(cljs.core.truth_(inst_26660)){
var statearr_26756_26831 = state_26712__$1;
(statearr_26756_26831[(1)] = (29));

} else {
var statearr_26757_26832 = state_26712__$1;
(statearr_26757_26832[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (25))){
var inst_26630 = (state_26712[(23)]);
var inst_26646 = (state_26712[(2)]);
var inst_26647 = cljs.core.not_empty.call(null,inst_26630);
var state_26712__$1 = (function (){var statearr_26758 = state_26712;
(statearr_26758[(30)] = inst_26646);

return statearr_26758;
})();
if(cljs.core.truth_(inst_26647)){
var statearr_26759_26833 = state_26712__$1;
(statearr_26759_26833[(1)] = (26));

} else {
var statearr_26760_26834 = state_26712__$1;
(statearr_26760_26834[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (34))){
var inst_26681 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
if(cljs.core.truth_(inst_26681)){
var statearr_26761_26835 = state_26712__$1;
(statearr_26761_26835[(1)] = (38));

} else {
var statearr_26762_26836 = state_26712__$1;
(statearr_26762_26836[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (17))){
var state_26712__$1 = state_26712;
var statearr_26763_26837 = state_26712__$1;
(statearr_26763_26837[(2)] = recompile_dependents);

(statearr_26763_26837[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (3))){
var state_26712__$1 = state_26712;
var statearr_26764_26838 = state_26712__$1;
(statearr_26764_26838[(2)] = null);

(statearr_26764_26838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (12))){
var inst_26603 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
var statearr_26765_26839 = state_26712__$1;
(statearr_26765_26839[(2)] = inst_26603);

(statearr_26765_26839[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (2))){
var inst_26565 = (state_26712[(13)]);
var inst_26572 = cljs.core.seq.call(null,inst_26565);
var inst_26573 = inst_26572;
var inst_26574 = null;
var inst_26575 = (0);
var inst_26576 = (0);
var state_26712__$1 = (function (){var statearr_26766 = state_26712;
(statearr_26766[(7)] = inst_26576);

(statearr_26766[(8)] = inst_26573);

(statearr_26766[(9)] = inst_26575);

(statearr_26766[(10)] = inst_26574);

return statearr_26766;
})();
var statearr_26767_26840 = state_26712__$1;
(statearr_26767_26840[(2)] = null);

(statearr_26767_26840[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (23))){
var inst_26626 = (state_26712[(19)]);
var inst_26630 = (state_26712[(23)]);
var inst_26629 = (state_26712[(24)]);
var inst_26632 = (state_26712[(26)]);
var inst_26634 = (state_26712[(25)]);
var inst_26637 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26639 = (function (){var all_files = inst_26626;
var res_SINGLEQUOTE_ = inst_26629;
var res = inst_26630;
var files_not_loaded = inst_26632;
var dependencies_that_loaded = inst_26634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26630,inst_26629,inst_26632,inst_26634,inst_26637,state_val_26713,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26638){
var map__26768 = p__26638;
var map__26768__$1 = ((((!((map__26768 == null)))?((((map__26768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26768):map__26768);
var request_url = cljs.core.get.call(null,map__26768__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26630,inst_26629,inst_26632,inst_26634,inst_26637,state_val_26713,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26640 = cljs.core.reverse.call(null,inst_26634);
var inst_26641 = cljs.core.map.call(null,inst_26639,inst_26640);
var inst_26642 = cljs.core.pr_str.call(null,inst_26641);
var inst_26643 = figwheel.client.utils.log.call(null,inst_26642);
var state_26712__$1 = (function (){var statearr_26770 = state_26712;
(statearr_26770[(31)] = inst_26637);

return statearr_26770;
})();
var statearr_26771_26841 = state_26712__$1;
(statearr_26771_26841[(2)] = inst_26643);

(statearr_26771_26841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (35))){
var state_26712__$1 = state_26712;
var statearr_26772_26842 = state_26712__$1;
(statearr_26772_26842[(2)] = true);

(statearr_26772_26842[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (19))){
var inst_26616 = (state_26712[(12)]);
var inst_26622 = figwheel.client.file_reloading.expand_files.call(null,inst_26616);
var state_26712__$1 = state_26712;
var statearr_26773_26843 = state_26712__$1;
(statearr_26773_26843[(2)] = inst_26622);

(statearr_26773_26843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (11))){
var state_26712__$1 = state_26712;
var statearr_26774_26844 = state_26712__$1;
(statearr_26774_26844[(2)] = null);

(statearr_26774_26844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (9))){
var inst_26605 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
var statearr_26775_26845 = state_26712__$1;
(statearr_26775_26845[(2)] = inst_26605);

(statearr_26775_26845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (5))){
var inst_26576 = (state_26712[(7)]);
var inst_26575 = (state_26712[(9)]);
var inst_26578 = (inst_26576 < inst_26575);
var inst_26579 = inst_26578;
var state_26712__$1 = state_26712;
if(cljs.core.truth_(inst_26579)){
var statearr_26776_26846 = state_26712__$1;
(statearr_26776_26846[(1)] = (7));

} else {
var statearr_26777_26847 = state_26712__$1;
(statearr_26777_26847[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (14))){
var inst_26586 = (state_26712[(22)]);
var inst_26595 = cljs.core.first.call(null,inst_26586);
var inst_26596 = figwheel.client.file_reloading.eval_body.call(null,inst_26595,opts);
var inst_26597 = cljs.core.next.call(null,inst_26586);
var inst_26573 = inst_26597;
var inst_26574 = null;
var inst_26575 = (0);
var inst_26576 = (0);
var state_26712__$1 = (function (){var statearr_26778 = state_26712;
(statearr_26778[(32)] = inst_26596);

(statearr_26778[(7)] = inst_26576);

(statearr_26778[(8)] = inst_26573);

(statearr_26778[(9)] = inst_26575);

(statearr_26778[(10)] = inst_26574);

return statearr_26778;
})();
var statearr_26779_26848 = state_26712__$1;
(statearr_26779_26848[(2)] = null);

(statearr_26779_26848[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (45))){
var state_26712__$1 = state_26712;
var statearr_26780_26849 = state_26712__$1;
(statearr_26780_26849[(2)] = null);

(statearr_26780_26849[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (26))){
var inst_26626 = (state_26712[(19)]);
var inst_26630 = (state_26712[(23)]);
var inst_26629 = (state_26712[(24)]);
var inst_26632 = (state_26712[(26)]);
var inst_26634 = (state_26712[(25)]);
var inst_26649 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26651 = (function (){var all_files = inst_26626;
var res_SINGLEQUOTE_ = inst_26629;
var res = inst_26630;
var files_not_loaded = inst_26632;
var dependencies_that_loaded = inst_26634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26630,inst_26629,inst_26632,inst_26634,inst_26649,state_val_26713,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26650){
var map__26781 = p__26650;
var map__26781__$1 = ((((!((map__26781 == null)))?((((map__26781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26781):map__26781);
var namespace = cljs.core.get.call(null,map__26781__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26781__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26630,inst_26629,inst_26632,inst_26634,inst_26649,state_val_26713,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26652 = cljs.core.map.call(null,inst_26651,inst_26630);
var inst_26653 = cljs.core.pr_str.call(null,inst_26652);
var inst_26654 = figwheel.client.utils.log.call(null,inst_26653);
var inst_26655 = (function (){var all_files = inst_26626;
var res_SINGLEQUOTE_ = inst_26629;
var res = inst_26630;
var files_not_loaded = inst_26632;
var dependencies_that_loaded = inst_26634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26630,inst_26629,inst_26632,inst_26634,inst_26649,inst_26651,inst_26652,inst_26653,inst_26654,state_val_26713,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26626,inst_26630,inst_26629,inst_26632,inst_26634,inst_26649,inst_26651,inst_26652,inst_26653,inst_26654,state_val_26713,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26656 = setTimeout(inst_26655,(10));
var state_26712__$1 = (function (){var statearr_26783 = state_26712;
(statearr_26783[(33)] = inst_26654);

(statearr_26783[(34)] = inst_26649);

return statearr_26783;
})();
var statearr_26784_26850 = state_26712__$1;
(statearr_26784_26850[(2)] = inst_26656);

(statearr_26784_26850[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (16))){
var state_26712__$1 = state_26712;
var statearr_26785_26851 = state_26712__$1;
(statearr_26785_26851[(2)] = reload_dependents);

(statearr_26785_26851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (38))){
var inst_26666 = (state_26712[(16)]);
var inst_26683 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26666);
var state_26712__$1 = state_26712;
var statearr_26786_26852 = state_26712__$1;
(statearr_26786_26852[(2)] = inst_26683);

(statearr_26786_26852[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (30))){
var state_26712__$1 = state_26712;
var statearr_26787_26853 = state_26712__$1;
(statearr_26787_26853[(2)] = null);

(statearr_26787_26853[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (10))){
var inst_26586 = (state_26712[(22)]);
var inst_26588 = cljs.core.chunked_seq_QMARK_.call(null,inst_26586);
var state_26712__$1 = state_26712;
if(inst_26588){
var statearr_26788_26854 = state_26712__$1;
(statearr_26788_26854[(1)] = (13));

} else {
var statearr_26789_26855 = state_26712__$1;
(statearr_26789_26855[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (18))){
var inst_26620 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
if(cljs.core.truth_(inst_26620)){
var statearr_26790_26856 = state_26712__$1;
(statearr_26790_26856[(1)] = (19));

} else {
var statearr_26791_26857 = state_26712__$1;
(statearr_26791_26857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (42))){
var state_26712__$1 = state_26712;
var statearr_26792_26858 = state_26712__$1;
(statearr_26792_26858[(2)] = null);

(statearr_26792_26858[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (37))){
var inst_26678 = (state_26712[(2)]);
var state_26712__$1 = state_26712;
var statearr_26793_26859 = state_26712__$1;
(statearr_26793_26859[(2)] = inst_26678);

(statearr_26793_26859[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26713 === (8))){
var inst_26586 = (state_26712[(22)]);
var inst_26573 = (state_26712[(8)]);
var inst_26586__$1 = cljs.core.seq.call(null,inst_26573);
var state_26712__$1 = (function (){var statearr_26794 = state_26712;
(statearr_26794[(22)] = inst_26586__$1);

return statearr_26794;
})();
if(inst_26586__$1){
var statearr_26795_26860 = state_26712__$1;
(statearr_26795_26860[(1)] = (10));

} else {
var statearr_26796_26861 = state_26712__$1;
(statearr_26796_26861[(1)] = (11));

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
}
});})(c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22178__auto__,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22179__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22179__auto____0 = (function (){
var statearr_26800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26800[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22179__auto__);

(statearr_26800[(1)] = (1));

return statearr_26800;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22179__auto____1 = (function (state_26712){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_26712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e26801){if((e26801 instanceof Object)){
var ex__22182__auto__ = e26801;
var statearr_26802_26862 = state_26712;
(statearr_26802_26862[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26863 = state_26712;
state_26712 = G__26863;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22179__auto__ = function(state_26712){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22179__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22179__auto____1.call(this,state_26712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22179__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22179__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23025__auto__ = (function (){var statearr_26803 = f__23024__auto__.call(null);
(statearr_26803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto__);

return statearr_26803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto__,map__26558,map__26558__$1,opts,before_jsload,on_jsload,reload_dependents,map__26559,map__26559__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23023__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26866,link){
var map__26869 = p__26866;
var map__26869__$1 = ((((!((map__26869 == null)))?((((map__26869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26869):map__26869);
var file = cljs.core.get.call(null,map__26869__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__26869,map__26869__$1,file){
return (function (p1__26864_SHARP_,p2__26865_SHARP_){
if(cljs.core._EQ_.call(null,p1__26864_SHARP_,p2__26865_SHARP_)){
return p1__26864_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__26869,map__26869__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26875){
var map__26876 = p__26875;
var map__26876__$1 = ((((!((map__26876 == null)))?((((map__26876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26876):map__26876);
var match_length = cljs.core.get.call(null,map__26876__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26876__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26871_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26871_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26878 = [];
var len__21234__auto___26881 = arguments.length;
var i__21235__auto___26882 = (0);
while(true){
if((i__21235__auto___26882 < len__21234__auto___26881)){
args26878.push((arguments[i__21235__auto___26882]));

var G__26883 = (i__21235__auto___26882 + (1));
i__21235__auto___26882 = G__26883;
continue;
} else {
}
break;
}

var G__26880 = args26878.length;
switch (G__26880) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26878.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26885_SHARP_,p2__26886_SHARP_){
return cljs.core.assoc.call(null,p1__26885_SHARP_,cljs.core.get.call(null,p2__26886_SHARP_,key),p2__26886_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26887){
var map__26890 = p__26887;
var map__26890__$1 = ((((!((map__26890 == null)))?((((map__26890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26890):map__26890);
var f_data = map__26890__$1;
var file = cljs.core.get.call(null,map__26890__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26892,files_msg){
var map__26899 = p__26892;
var map__26899__$1 = ((((!((map__26899 == null)))?((((map__26899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26899):map__26899);
var opts = map__26899__$1;
var on_cssload = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26901_26905 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26902_26906 = null;
var count__26903_26907 = (0);
var i__26904_26908 = (0);
while(true){
if((i__26904_26908 < count__26903_26907)){
var f_26909 = cljs.core._nth.call(null,chunk__26902_26906,i__26904_26908);
figwheel.client.file_reloading.reload_css_file.call(null,f_26909);

var G__26910 = seq__26901_26905;
var G__26911 = chunk__26902_26906;
var G__26912 = count__26903_26907;
var G__26913 = (i__26904_26908 + (1));
seq__26901_26905 = G__26910;
chunk__26902_26906 = G__26911;
count__26903_26907 = G__26912;
i__26904_26908 = G__26913;
continue;
} else {
var temp__4657__auto___26914 = cljs.core.seq.call(null,seq__26901_26905);
if(temp__4657__auto___26914){
var seq__26901_26915__$1 = temp__4657__auto___26914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26901_26915__$1)){
var c__20970__auto___26916 = cljs.core.chunk_first.call(null,seq__26901_26915__$1);
var G__26917 = cljs.core.chunk_rest.call(null,seq__26901_26915__$1);
var G__26918 = c__20970__auto___26916;
var G__26919 = cljs.core.count.call(null,c__20970__auto___26916);
var G__26920 = (0);
seq__26901_26905 = G__26917;
chunk__26902_26906 = G__26918;
count__26903_26907 = G__26919;
i__26904_26908 = G__26920;
continue;
} else {
var f_26921 = cljs.core.first.call(null,seq__26901_26915__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26921);

var G__26922 = cljs.core.next.call(null,seq__26901_26915__$1);
var G__26923 = null;
var G__26924 = (0);
var G__26925 = (0);
seq__26901_26905 = G__26922;
chunk__26902_26906 = G__26923;
count__26903_26907 = G__26924;
i__26904_26908 = G__26925;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26899,map__26899__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26899,map__26899__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
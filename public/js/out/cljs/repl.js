// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28225){
var map__28250 = p__28225;
var map__28250__$1 = ((((!((map__28250 == null)))?((((map__28250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28250):map__28250);
var m = map__28250__$1;
var n = cljs.core.get.call(null,map__28250__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28250__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28252_28274 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28253_28275 = null;
var count__28254_28276 = (0);
var i__28255_28277 = (0);
while(true){
if((i__28255_28277 < count__28254_28276)){
var f_28278 = cljs.core._nth.call(null,chunk__28253_28275,i__28255_28277);
cljs.core.println.call(null,"  ",f_28278);

var G__28279 = seq__28252_28274;
var G__28280 = chunk__28253_28275;
var G__28281 = count__28254_28276;
var G__28282 = (i__28255_28277 + (1));
seq__28252_28274 = G__28279;
chunk__28253_28275 = G__28280;
count__28254_28276 = G__28281;
i__28255_28277 = G__28282;
continue;
} else {
var temp__4657__auto___28283 = cljs.core.seq.call(null,seq__28252_28274);
if(temp__4657__auto___28283){
var seq__28252_28284__$1 = temp__4657__auto___28283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28252_28284__$1)){
var c__20970__auto___28285 = cljs.core.chunk_first.call(null,seq__28252_28284__$1);
var G__28286 = cljs.core.chunk_rest.call(null,seq__28252_28284__$1);
var G__28287 = c__20970__auto___28285;
var G__28288 = cljs.core.count.call(null,c__20970__auto___28285);
var G__28289 = (0);
seq__28252_28274 = G__28286;
chunk__28253_28275 = G__28287;
count__28254_28276 = G__28288;
i__28255_28277 = G__28289;
continue;
} else {
var f_28290 = cljs.core.first.call(null,seq__28252_28284__$1);
cljs.core.println.call(null,"  ",f_28290);

var G__28291 = cljs.core.next.call(null,seq__28252_28284__$1);
var G__28292 = null;
var G__28293 = (0);
var G__28294 = (0);
seq__28252_28274 = G__28291;
chunk__28253_28275 = G__28292;
count__28254_28276 = G__28293;
i__28255_28277 = G__28294;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28295 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20159__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28295);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28295)))?cljs.core.second.call(null,arglists_28295):arglists_28295));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28256_28296 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28257_28297 = null;
var count__28258_28298 = (0);
var i__28259_28299 = (0);
while(true){
if((i__28259_28299 < count__28258_28298)){
var vec__28260_28300 = cljs.core._nth.call(null,chunk__28257_28297,i__28259_28299);
var name_28301 = cljs.core.nth.call(null,vec__28260_28300,(0),null);
var map__28263_28302 = cljs.core.nth.call(null,vec__28260_28300,(1),null);
var map__28263_28303__$1 = ((((!((map__28263_28302 == null)))?((((map__28263_28302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28263_28302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28263_28302):map__28263_28302);
var doc_28304 = cljs.core.get.call(null,map__28263_28303__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28305 = cljs.core.get.call(null,map__28263_28303__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28301);

cljs.core.println.call(null," ",arglists_28305);

if(cljs.core.truth_(doc_28304)){
cljs.core.println.call(null," ",doc_28304);
} else {
}

var G__28306 = seq__28256_28296;
var G__28307 = chunk__28257_28297;
var G__28308 = count__28258_28298;
var G__28309 = (i__28259_28299 + (1));
seq__28256_28296 = G__28306;
chunk__28257_28297 = G__28307;
count__28258_28298 = G__28308;
i__28259_28299 = G__28309;
continue;
} else {
var temp__4657__auto___28310 = cljs.core.seq.call(null,seq__28256_28296);
if(temp__4657__auto___28310){
var seq__28256_28311__$1 = temp__4657__auto___28310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28256_28311__$1)){
var c__20970__auto___28312 = cljs.core.chunk_first.call(null,seq__28256_28311__$1);
var G__28313 = cljs.core.chunk_rest.call(null,seq__28256_28311__$1);
var G__28314 = c__20970__auto___28312;
var G__28315 = cljs.core.count.call(null,c__20970__auto___28312);
var G__28316 = (0);
seq__28256_28296 = G__28313;
chunk__28257_28297 = G__28314;
count__28258_28298 = G__28315;
i__28259_28299 = G__28316;
continue;
} else {
var vec__28265_28317 = cljs.core.first.call(null,seq__28256_28311__$1);
var name_28318 = cljs.core.nth.call(null,vec__28265_28317,(0),null);
var map__28268_28319 = cljs.core.nth.call(null,vec__28265_28317,(1),null);
var map__28268_28320__$1 = ((((!((map__28268_28319 == null)))?((((map__28268_28319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28268_28319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28268_28319):map__28268_28319);
var doc_28321 = cljs.core.get.call(null,map__28268_28320__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28322 = cljs.core.get.call(null,map__28268_28320__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28318);

cljs.core.println.call(null," ",arglists_28322);

if(cljs.core.truth_(doc_28321)){
cljs.core.println.call(null," ",doc_28321);
} else {
}

var G__28323 = cljs.core.next.call(null,seq__28256_28311__$1);
var G__28324 = null;
var G__28325 = (0);
var G__28326 = (0);
seq__28256_28296 = G__28323;
chunk__28257_28297 = G__28324;
count__28258_28298 = G__28325;
i__28259_28299 = G__28326;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__28270 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28271 = null;
var count__28272 = (0);
var i__28273 = (0);
while(true){
if((i__28273 < count__28272)){
var role = cljs.core._nth.call(null,chunk__28271,i__28273);
var temp__4657__auto___28327__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28327__$1)){
var spec_28328 = temp__4657__auto___28327__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28328));
} else {
}

var G__28329 = seq__28270;
var G__28330 = chunk__28271;
var G__28331 = count__28272;
var G__28332 = (i__28273 + (1));
seq__28270 = G__28329;
chunk__28271 = G__28330;
count__28272 = G__28331;
i__28273 = G__28332;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__28270);
if(temp__4657__auto____$1){
var seq__28270__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28270__$1)){
var c__20970__auto__ = cljs.core.chunk_first.call(null,seq__28270__$1);
var G__28333 = cljs.core.chunk_rest.call(null,seq__28270__$1);
var G__28334 = c__20970__auto__;
var G__28335 = cljs.core.count.call(null,c__20970__auto__);
var G__28336 = (0);
seq__28270 = G__28333;
chunk__28271 = G__28334;
count__28272 = G__28335;
i__28273 = G__28336;
continue;
} else {
var role = cljs.core.first.call(null,seq__28270__$1);
var temp__4657__auto___28337__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28337__$2)){
var spec_28338 = temp__4657__auto___28337__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28338));
} else {
}

var G__28339 = cljs.core.next.call(null,seq__28270__$1);
var G__28340 = null;
var G__28341 = (0);
var G__28342 = (0);
seq__28270 = G__28339;
chunk__28271 = G__28340;
count__28272 = G__28341;
i__28273 = G__28342;
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

//# sourceMappingURL=repl.js.map
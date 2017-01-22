// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-5";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args30373 = [];
var len__21234__auto___30376 = arguments.length;
var i__21235__auto___30377 = (0);
while(true){
if((i__21235__auto___30377 < len__21234__auto___30376)){
args30373.push((arguments[i__21235__auto___30377]));

var G__30378 = (i__21235__auto___30377 + (1));
i__21235__auto___30377 = G__30378;
continue;
} else {
}
break;
}

var G__30375 = args30373.length;
switch (G__30375) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30373.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21241__auto__ = [];
var len__21234__auto___30381 = arguments.length;
var i__21235__auto___30382 = (0);
while(true){
if((i__21235__auto___30382 < len__21234__auto___30381)){
args__21241__auto__.push((arguments[i__21235__auto___30382]));

var G__30383 = (i__21235__auto___30382 + (1));
i__21235__auto___30382 = G__30383;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30380){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30380));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21241__auto__ = [];
var len__21234__auto___30385 = arguments.length;
var i__21235__auto___30386 = (0);
while(true){
if((i__21235__auto___30386 < len__21234__auto___30385)){
args__21241__auto__.push((arguments[i__21235__auto___30386]));

var G__30387 = (i__21235__auto___30386 + (1));
i__21235__auto___30386 = G__30387;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30384){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30384));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30388 = cljs.core._EQ_;
var expr__30389 = (function (){var or__20159__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e30392){if((e30392 instanceof Error)){
var e = e30392;
return false;
} else {
throw e30392;

}
}})();
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30388.call(null,"true",expr__30389))){
return true;
} else {
if(cljs.core.truth_(pred__30388.call(null,"false",expr__30389))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30389)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e30394){if((e30394 instanceof Error)){
var e = e30394;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e30394;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30395){
var map__30398 = p__30395;
var map__30398__$1 = ((((!((map__30398 == null)))?((((map__30398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30398):map__30398);
var message = cljs.core.get.call(null,map__30398__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30398__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20159__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20159__auto__)){
return or__20159__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20147__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20147__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20147__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23023__auto___30560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___30560,ch){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___30560,ch){
return (function (state_30529){
var state_val_30530 = (state_30529[(1)]);
if((state_val_30530 === (7))){
var inst_30525 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30531_30561 = state_30529__$1;
(statearr_30531_30561[(2)] = inst_30525);

(statearr_30531_30561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (1))){
var state_30529__$1 = state_30529;
var statearr_30532_30562 = state_30529__$1;
(statearr_30532_30562[(2)] = null);

(statearr_30532_30562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (4))){
var inst_30482 = (state_30529[(7)]);
var inst_30482__$1 = (state_30529[(2)]);
var state_30529__$1 = (function (){var statearr_30533 = state_30529;
(statearr_30533[(7)] = inst_30482__$1);

return statearr_30533;
})();
if(cljs.core.truth_(inst_30482__$1)){
var statearr_30534_30563 = state_30529__$1;
(statearr_30534_30563[(1)] = (5));

} else {
var statearr_30535_30564 = state_30529__$1;
(statearr_30535_30564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (15))){
var inst_30489 = (state_30529[(8)]);
var inst_30504 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30489);
var inst_30505 = cljs.core.first.call(null,inst_30504);
var inst_30506 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30505);
var inst_30507 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30506)].join('');
var inst_30508 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30507);
var state_30529__$1 = state_30529;
var statearr_30536_30565 = state_30529__$1;
(statearr_30536_30565[(2)] = inst_30508);

(statearr_30536_30565[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (13))){
var inst_30513 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30537_30566 = state_30529__$1;
(statearr_30537_30566[(2)] = inst_30513);

(statearr_30537_30566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (6))){
var state_30529__$1 = state_30529;
var statearr_30538_30567 = state_30529__$1;
(statearr_30538_30567[(2)] = null);

(statearr_30538_30567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (17))){
var inst_30511 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30539_30568 = state_30529__$1;
(statearr_30539_30568[(2)] = inst_30511);

(statearr_30539_30568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (3))){
var inst_30527 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30529__$1,inst_30527);
} else {
if((state_val_30530 === (12))){
var inst_30488 = (state_30529[(9)]);
var inst_30502 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30488,opts);
var state_30529__$1 = state_30529;
if(cljs.core.truth_(inst_30502)){
var statearr_30540_30569 = state_30529__$1;
(statearr_30540_30569[(1)] = (15));

} else {
var statearr_30541_30570 = state_30529__$1;
(statearr_30541_30570[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (2))){
var state_30529__$1 = state_30529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30529__$1,(4),ch);
} else {
if((state_val_30530 === (11))){
var inst_30489 = (state_30529[(8)]);
var inst_30494 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30495 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30489);
var inst_30496 = cljs.core.async.timeout.call(null,(1000));
var inst_30497 = [inst_30495,inst_30496];
var inst_30498 = (new cljs.core.PersistentVector(null,2,(5),inst_30494,inst_30497,null));
var state_30529__$1 = state_30529;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30529__$1,(14),inst_30498);
} else {
if((state_val_30530 === (9))){
var inst_30489 = (state_30529[(8)]);
var inst_30515 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30516 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30489);
var inst_30517 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30516);
var inst_30518 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30517)].join('');
var inst_30519 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30518);
var state_30529__$1 = (function (){var statearr_30542 = state_30529;
(statearr_30542[(10)] = inst_30515);

return statearr_30542;
})();
var statearr_30543_30571 = state_30529__$1;
(statearr_30543_30571[(2)] = inst_30519);

(statearr_30543_30571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (5))){
var inst_30482 = (state_30529[(7)]);
var inst_30484 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30485 = (new cljs.core.PersistentArrayMap(null,2,inst_30484,null));
var inst_30486 = (new cljs.core.PersistentHashSet(null,inst_30485,null));
var inst_30487 = figwheel.client.focus_msgs.call(null,inst_30486,inst_30482);
var inst_30488 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30487);
var inst_30489 = cljs.core.first.call(null,inst_30487);
var inst_30490 = figwheel.client.autoload_QMARK_.call(null);
var state_30529__$1 = (function (){var statearr_30544 = state_30529;
(statearr_30544[(8)] = inst_30489);

(statearr_30544[(9)] = inst_30488);

return statearr_30544;
})();
if(cljs.core.truth_(inst_30490)){
var statearr_30545_30572 = state_30529__$1;
(statearr_30545_30572[(1)] = (8));

} else {
var statearr_30546_30573 = state_30529__$1;
(statearr_30546_30573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (14))){
var inst_30500 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30547_30574 = state_30529__$1;
(statearr_30547_30574[(2)] = inst_30500);

(statearr_30547_30574[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (16))){
var state_30529__$1 = state_30529;
var statearr_30548_30575 = state_30529__$1;
(statearr_30548_30575[(2)] = null);

(statearr_30548_30575[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (10))){
var inst_30521 = (state_30529[(2)]);
var state_30529__$1 = (function (){var statearr_30549 = state_30529;
(statearr_30549[(11)] = inst_30521);

return statearr_30549;
})();
var statearr_30550_30576 = state_30529__$1;
(statearr_30550_30576[(2)] = null);

(statearr_30550_30576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (8))){
var inst_30488 = (state_30529[(9)]);
var inst_30492 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30488,opts);
var state_30529__$1 = state_30529;
if(cljs.core.truth_(inst_30492)){
var statearr_30551_30577 = state_30529__$1;
(statearr_30551_30577[(1)] = (11));

} else {
var statearr_30552_30578 = state_30529__$1;
(statearr_30552_30578[(1)] = (12));

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
});})(c__23023__auto___30560,ch))
;
return ((function (switch__22178__auto__,c__23023__auto___30560,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22179__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22179__auto____0 = (function (){
var statearr_30556 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30556[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22179__auto__);

(statearr_30556[(1)] = (1));

return statearr_30556;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22179__auto____1 = (function (state_30529){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_30529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e30557){if((e30557 instanceof Object)){
var ex__22182__auto__ = e30557;
var statearr_30558_30579 = state_30529;
(statearr_30558_30579[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30580 = state_30529;
state_30529 = G__30580;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22179__auto__ = function(state_30529){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22179__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22179__auto____1.call(this,state_30529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22179__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22179__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___30560,ch))
})();
var state__23025__auto__ = (function (){var statearr_30559 = f__23024__auto__.call(null);
(statearr_30559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___30560);

return statearr_30559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___30560,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30581_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30581_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30584 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30584){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e30583){if((e30583 instanceof Error)){
var e = e30583;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30584], null));
} else {
var e = e30583;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_30584))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30585){
var map__30594 = p__30585;
var map__30594__$1 = ((((!((map__30594 == null)))?((((map__30594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30594):map__30594);
var opts = map__30594__$1;
var build_id = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30594,map__30594__$1,opts,build_id){
return (function (p__30596){
var vec__30597 = p__30596;
var seq__30598 = cljs.core.seq.call(null,vec__30597);
var first__30599 = cljs.core.first.call(null,seq__30598);
var seq__30598__$1 = cljs.core.next.call(null,seq__30598);
var map__30600 = first__30599;
var map__30600__$1 = ((((!((map__30600 == null)))?((((map__30600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30600):map__30600);
var msg = map__30600__$1;
var msg_name = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30598__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30597,seq__30598,first__30599,seq__30598__$1,map__30600,map__30600__$1,msg,msg_name,_,map__30594,map__30594__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30597,seq__30598,first__30599,seq__30598__$1,map__30600,map__30600__$1,msg,msg_name,_,map__30594,map__30594__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30594,map__30594__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30608){
var vec__30609 = p__30608;
var seq__30610 = cljs.core.seq.call(null,vec__30609);
var first__30611 = cljs.core.first.call(null,seq__30610);
var seq__30610__$1 = cljs.core.next.call(null,seq__30610);
var map__30612 = first__30611;
var map__30612__$1 = ((((!((map__30612 == null)))?((((map__30612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30612):map__30612);
var msg = map__30612__$1;
var msg_name = cljs.core.get.call(null,map__30612__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30610__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30614){
var map__30626 = p__30614;
var map__30626__$1 = ((((!((map__30626 == null)))?((((map__30626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30626):map__30626);
var on_compile_warning = cljs.core.get.call(null,map__30626__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30626__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30626,map__30626__$1,on_compile_warning,on_compile_fail){
return (function (p__30628){
var vec__30629 = p__30628;
var seq__30630 = cljs.core.seq.call(null,vec__30629);
var first__30631 = cljs.core.first.call(null,seq__30630);
var seq__30630__$1 = cljs.core.next.call(null,seq__30630);
var map__30632 = first__30631;
var map__30632__$1 = ((((!((map__30632 == null)))?((((map__30632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30632):map__30632);
var msg = map__30632__$1;
var msg_name = cljs.core.get.call(null,map__30632__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30630__$1;
var pred__30634 = cljs.core._EQ_;
var expr__30635 = msg_name;
if(cljs.core.truth_(pred__30634.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30635))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30634.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30635))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30626,map__30626__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto__,msg_hist,msg_names,msg){
return (function (state_30843){
var state_val_30844 = (state_30843[(1)]);
if((state_val_30844 === (7))){
var inst_30771 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
if(cljs.core.truth_(inst_30771)){
var statearr_30845_30891 = state_30843__$1;
(statearr_30845_30891[(1)] = (8));

} else {
var statearr_30846_30892 = state_30843__$1;
(statearr_30846_30892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (20))){
var inst_30837 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30847_30893 = state_30843__$1;
(statearr_30847_30893[(2)] = inst_30837);

(statearr_30847_30893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (27))){
var inst_30833 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30848_30894 = state_30843__$1;
(statearr_30848_30894[(2)] = inst_30833);

(statearr_30848_30894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (1))){
var inst_30764 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30843__$1 = state_30843;
if(cljs.core.truth_(inst_30764)){
var statearr_30849_30895 = state_30843__$1;
(statearr_30849_30895[(1)] = (2));

} else {
var statearr_30850_30896 = state_30843__$1;
(statearr_30850_30896[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (24))){
var inst_30835 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30851_30897 = state_30843__$1;
(statearr_30851_30897[(2)] = inst_30835);

(statearr_30851_30897[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (4))){
var inst_30841 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30843__$1,inst_30841);
} else {
if((state_val_30844 === (15))){
var inst_30839 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30852_30898 = state_30843__$1;
(statearr_30852_30898[(2)] = inst_30839);

(statearr_30852_30898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (21))){
var inst_30798 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30853_30899 = state_30843__$1;
(statearr_30853_30899[(2)] = inst_30798);

(statearr_30853_30899[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (31))){
var inst_30822 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30843__$1 = state_30843;
if(cljs.core.truth_(inst_30822)){
var statearr_30854_30900 = state_30843__$1;
(statearr_30854_30900[(1)] = (34));

} else {
var statearr_30855_30901 = state_30843__$1;
(statearr_30855_30901[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (32))){
var inst_30831 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30856_30902 = state_30843__$1;
(statearr_30856_30902[(2)] = inst_30831);

(statearr_30856_30902[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (33))){
var inst_30820 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30857_30903 = state_30843__$1;
(statearr_30857_30903[(2)] = inst_30820);

(statearr_30857_30903[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (13))){
var inst_30785 = figwheel.client.heads_up.clear.call(null);
var state_30843__$1 = state_30843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30843__$1,(16),inst_30785);
} else {
if((state_val_30844 === (22))){
var inst_30802 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30803 = figwheel.client.heads_up.append_warning_message.call(null,inst_30802);
var state_30843__$1 = state_30843;
var statearr_30858_30904 = state_30843__$1;
(statearr_30858_30904[(2)] = inst_30803);

(statearr_30858_30904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (36))){
var inst_30829 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30859_30905 = state_30843__$1;
(statearr_30859_30905[(2)] = inst_30829);

(statearr_30859_30905[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (29))){
var inst_30813 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30860_30906 = state_30843__$1;
(statearr_30860_30906[(2)] = inst_30813);

(statearr_30860_30906[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (6))){
var inst_30766 = (state_30843[(7)]);
var state_30843__$1 = state_30843;
var statearr_30861_30907 = state_30843__$1;
(statearr_30861_30907[(2)] = inst_30766);

(statearr_30861_30907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (28))){
var inst_30809 = (state_30843[(2)]);
var inst_30810 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30811 = figwheel.client.heads_up.display_warning.call(null,inst_30810);
var state_30843__$1 = (function (){var statearr_30862 = state_30843;
(statearr_30862[(8)] = inst_30809);

return statearr_30862;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30843__$1,(29),inst_30811);
} else {
if((state_val_30844 === (25))){
var inst_30807 = figwheel.client.heads_up.clear.call(null);
var state_30843__$1 = state_30843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30843__$1,(28),inst_30807);
} else {
if((state_val_30844 === (34))){
var inst_30824 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30843__$1 = state_30843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30843__$1,(37),inst_30824);
} else {
if((state_val_30844 === (17))){
var inst_30791 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30863_30908 = state_30843__$1;
(statearr_30863_30908[(2)] = inst_30791);

(statearr_30863_30908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (3))){
var inst_30783 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30843__$1 = state_30843;
if(cljs.core.truth_(inst_30783)){
var statearr_30864_30909 = state_30843__$1;
(statearr_30864_30909[(1)] = (13));

} else {
var statearr_30865_30910 = state_30843__$1;
(statearr_30865_30910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (12))){
var inst_30779 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30866_30911 = state_30843__$1;
(statearr_30866_30911[(2)] = inst_30779);

(statearr_30866_30911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (2))){
var inst_30766 = (state_30843[(7)]);
var inst_30766__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30843__$1 = (function (){var statearr_30867 = state_30843;
(statearr_30867[(7)] = inst_30766__$1);

return statearr_30867;
})();
if(cljs.core.truth_(inst_30766__$1)){
var statearr_30868_30912 = state_30843__$1;
(statearr_30868_30912[(1)] = (5));

} else {
var statearr_30869_30913 = state_30843__$1;
(statearr_30869_30913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (23))){
var inst_30805 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30843__$1 = state_30843;
if(cljs.core.truth_(inst_30805)){
var statearr_30870_30914 = state_30843__$1;
(statearr_30870_30914[(1)] = (25));

} else {
var statearr_30871_30915 = state_30843__$1;
(statearr_30871_30915[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (35))){
var state_30843__$1 = state_30843;
var statearr_30872_30916 = state_30843__$1;
(statearr_30872_30916[(2)] = null);

(statearr_30872_30916[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (19))){
var inst_30800 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30843__$1 = state_30843;
if(cljs.core.truth_(inst_30800)){
var statearr_30873_30917 = state_30843__$1;
(statearr_30873_30917[(1)] = (22));

} else {
var statearr_30874_30918 = state_30843__$1;
(statearr_30874_30918[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (11))){
var inst_30775 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30875_30919 = state_30843__$1;
(statearr_30875_30919[(2)] = inst_30775);

(statearr_30875_30919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (9))){
var inst_30777 = figwheel.client.heads_up.clear.call(null);
var state_30843__$1 = state_30843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30843__$1,(12),inst_30777);
} else {
if((state_val_30844 === (5))){
var inst_30768 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30843__$1 = state_30843;
var statearr_30876_30920 = state_30843__$1;
(statearr_30876_30920[(2)] = inst_30768);

(statearr_30876_30920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (14))){
var inst_30793 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30843__$1 = state_30843;
if(cljs.core.truth_(inst_30793)){
var statearr_30877_30921 = state_30843__$1;
(statearr_30877_30921[(1)] = (18));

} else {
var statearr_30878_30922 = state_30843__$1;
(statearr_30878_30922[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (26))){
var inst_30815 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30843__$1 = state_30843;
if(cljs.core.truth_(inst_30815)){
var statearr_30879_30923 = state_30843__$1;
(statearr_30879_30923[(1)] = (30));

} else {
var statearr_30880_30924 = state_30843__$1;
(statearr_30880_30924[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (16))){
var inst_30787 = (state_30843[(2)]);
var inst_30788 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30789 = figwheel.client.heads_up.display_exception.call(null,inst_30788);
var state_30843__$1 = (function (){var statearr_30881 = state_30843;
(statearr_30881[(9)] = inst_30787);

return statearr_30881;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30843__$1,(17),inst_30789);
} else {
if((state_val_30844 === (30))){
var inst_30817 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30818 = figwheel.client.heads_up.display_warning.call(null,inst_30817);
var state_30843__$1 = state_30843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30843__$1,(33),inst_30818);
} else {
if((state_val_30844 === (10))){
var inst_30781 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30882_30925 = state_30843__$1;
(statearr_30882_30925[(2)] = inst_30781);

(statearr_30882_30925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (18))){
var inst_30795 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30796 = figwheel.client.heads_up.display_exception.call(null,inst_30795);
var state_30843__$1 = state_30843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30843__$1,(21),inst_30796);
} else {
if((state_val_30844 === (37))){
var inst_30826 = (state_30843[(2)]);
var state_30843__$1 = state_30843;
var statearr_30883_30926 = state_30843__$1;
(statearr_30883_30926[(2)] = inst_30826);

(statearr_30883_30926[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30844 === (8))){
var inst_30773 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30843__$1 = state_30843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30843__$1,(11),inst_30773);
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
});})(c__23023__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22178__auto__,c__23023__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22179__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22179__auto____0 = (function (){
var statearr_30887 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30887[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22179__auto__);

(statearr_30887[(1)] = (1));

return statearr_30887;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22179__auto____1 = (function (state_30843){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_30843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e30888){if((e30888 instanceof Object)){
var ex__22182__auto__ = e30888;
var statearr_30889_30927 = state_30843;
(statearr_30889_30927[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30928 = state_30843;
state_30843 = G__30928;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22179__auto__ = function(state_30843){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22179__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22179__auto____1.call(this,state_30843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22179__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22179__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto__,msg_hist,msg_names,msg))
})();
var state__23025__auto__ = (function (){var statearr_30890 = f__23024__auto__.call(null);
(statearr_30890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto__);

return statearr_30890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto__,msg_hist,msg_names,msg))
);

return c__23023__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23023__auto___30991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto___30991,ch){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto___30991,ch){
return (function (state_30974){
var state_val_30975 = (state_30974[(1)]);
if((state_val_30975 === (1))){
var state_30974__$1 = state_30974;
var statearr_30976_30992 = state_30974__$1;
(statearr_30976_30992[(2)] = null);

(statearr_30976_30992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30975 === (2))){
var state_30974__$1 = state_30974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30974__$1,(4),ch);
} else {
if((state_val_30975 === (3))){
var inst_30972 = (state_30974[(2)]);
var state_30974__$1 = state_30974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30974__$1,inst_30972);
} else {
if((state_val_30975 === (4))){
var inst_30962 = (state_30974[(7)]);
var inst_30962__$1 = (state_30974[(2)]);
var state_30974__$1 = (function (){var statearr_30977 = state_30974;
(statearr_30977[(7)] = inst_30962__$1);

return statearr_30977;
})();
if(cljs.core.truth_(inst_30962__$1)){
var statearr_30978_30993 = state_30974__$1;
(statearr_30978_30993[(1)] = (5));

} else {
var statearr_30979_30994 = state_30974__$1;
(statearr_30979_30994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30975 === (5))){
var inst_30962 = (state_30974[(7)]);
var inst_30964 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30962);
var state_30974__$1 = state_30974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30974__$1,(8),inst_30964);
} else {
if((state_val_30975 === (6))){
var state_30974__$1 = state_30974;
var statearr_30980_30995 = state_30974__$1;
(statearr_30980_30995[(2)] = null);

(statearr_30980_30995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30975 === (7))){
var inst_30970 = (state_30974[(2)]);
var state_30974__$1 = state_30974;
var statearr_30981_30996 = state_30974__$1;
(statearr_30981_30996[(2)] = inst_30970);

(statearr_30981_30996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30975 === (8))){
var inst_30966 = (state_30974[(2)]);
var state_30974__$1 = (function (){var statearr_30982 = state_30974;
(statearr_30982[(8)] = inst_30966);

return statearr_30982;
})();
var statearr_30983_30997 = state_30974__$1;
(statearr_30983_30997[(2)] = null);

(statearr_30983_30997[(1)] = (2));


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
});})(c__23023__auto___30991,ch))
;
return ((function (switch__22178__auto__,c__23023__auto___30991,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22179__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22179__auto____0 = (function (){
var statearr_30987 = [null,null,null,null,null,null,null,null,null];
(statearr_30987[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22179__auto__);

(statearr_30987[(1)] = (1));

return statearr_30987;
});
var figwheel$client$heads_up_plugin_$_state_machine__22179__auto____1 = (function (state_30974){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_30974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e30988){if((e30988 instanceof Object)){
var ex__22182__auto__ = e30988;
var statearr_30989_30998 = state_30974;
(statearr_30989_30998[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30999 = state_30974;
state_30974 = G__30999;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22179__auto__ = function(state_30974){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22179__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22179__auto____1.call(this,state_30974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22179__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22179__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto___30991,ch))
})();
var state__23025__auto__ = (function (){var statearr_30990 = f__23024__auto__.call(null);
(statearr_30990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto___30991);

return statearr_30990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto___30991,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto__){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto__){
return (function (state_31020){
var state_val_31021 = (state_31020[(1)]);
if((state_val_31021 === (1))){
var inst_31015 = cljs.core.async.timeout.call(null,(3000));
var state_31020__$1 = state_31020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31020__$1,(2),inst_31015);
} else {
if((state_val_31021 === (2))){
var inst_31017 = (state_31020[(2)]);
var inst_31018 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31020__$1 = (function (){var statearr_31022 = state_31020;
(statearr_31022[(7)] = inst_31017);

return statearr_31022;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31020__$1,inst_31018);
} else {
return null;
}
}
});})(c__23023__auto__))
;
return ((function (switch__22178__auto__,c__23023__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22179__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22179__auto____0 = (function (){
var statearr_31026 = [null,null,null,null,null,null,null,null];
(statearr_31026[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22179__auto__);

(statearr_31026[(1)] = (1));

return statearr_31026;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22179__auto____1 = (function (state_31020){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_31020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e31027){if((e31027 instanceof Object)){
var ex__22182__auto__ = e31027;
var statearr_31028_31030 = state_31020;
(statearr_31028_31030[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31031 = state_31020;
state_31020 = G__31031;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22179__auto__ = function(state_31020){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22179__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22179__auto____1.call(this,state_31020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22179__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22179__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto__))
})();
var state__23025__auto__ = (function (){var statearr_31029 = f__23024__auto__.call(null);
(statearr_31029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto__);

return statearr_31029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto__))
);

return c__23023__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23023__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__23024__auto__ = (function (){var switch__22178__auto__ = ((function (c__23023__auto__,figwheel_version,temp__4657__auto__){
return (function (state_31054){
var state_val_31055 = (state_31054[(1)]);
if((state_val_31055 === (1))){
var inst_31048 = cljs.core.async.timeout.call(null,(2000));
var state_31054__$1 = state_31054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31054__$1,(2),inst_31048);
} else {
if((state_val_31055 === (2))){
var inst_31050 = (state_31054[(2)]);
var inst_31051 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_31052 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31051);
var state_31054__$1 = (function (){var statearr_31056 = state_31054;
(statearr_31056[(7)] = inst_31050);

return statearr_31056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31054__$1,inst_31052);
} else {
return null;
}
}
});})(c__23023__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__22178__auto__,c__23023__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22179__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22179__auto____0 = (function (){
var statearr_31060 = [null,null,null,null,null,null,null,null];
(statearr_31060[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22179__auto__);

(statearr_31060[(1)] = (1));

return statearr_31060;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22179__auto____1 = (function (state_31054){
while(true){
var ret_value__22180__auto__ = (function (){try{while(true){
var result__22181__auto__ = switch__22178__auto__.call(null,state_31054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22181__auto__;
}
break;
}
}catch (e31061){if((e31061 instanceof Object)){
var ex__22182__auto__ = e31061;
var statearr_31062_31064 = state_31054;
(statearr_31062_31064[(5)] = ex__22182__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31065 = state_31054;
state_31054 = G__31065;
continue;
} else {
return ret_value__22180__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22179__auto__ = function(state_31054){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22179__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22179__auto____1.call(this,state_31054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22179__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22179__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22179__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22179__auto__;
})()
;})(switch__22178__auto__,c__23023__auto__,figwheel_version,temp__4657__auto__))
})();
var state__23025__auto__ = (function (){var statearr_31063 = f__23024__auto__.call(null);
(statearr_31063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23023__auto__);

return statearr_31063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23025__auto__);
});})(c__23023__auto__,figwheel_version,temp__4657__auto__))
);

return c__23023__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31066){
var map__31070 = p__31066;
var map__31070__$1 = ((((!((map__31070 == null)))?((((map__31070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31070):map__31070);
var file = cljs.core.get.call(null,map__31070__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31070__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31070__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31072 = "";
var G__31072__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__31072),cljs.core.str("file "),cljs.core.str(file)].join(''):G__31072);
var G__31072__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__31072__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__31072__$1);
if(cljs.core.truth_((function (){var and__20147__auto__ = line;
if(cljs.core.truth_(and__20147__auto__)){
return column;
} else {
return and__20147__auto__;
}
})())){
return [cljs.core.str(G__31072__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__31072__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31073){
var map__31080 = p__31073;
var map__31080__$1 = ((((!((map__31080 == null)))?((((map__31080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31080):map__31080);
var ed = map__31080__$1;
var formatted_exception = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31082_31086 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31083_31087 = null;
var count__31084_31088 = (0);
var i__31085_31089 = (0);
while(true){
if((i__31085_31089 < count__31084_31088)){
var msg_31090 = cljs.core._nth.call(null,chunk__31083_31087,i__31085_31089);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31090);

var G__31091 = seq__31082_31086;
var G__31092 = chunk__31083_31087;
var G__31093 = count__31084_31088;
var G__31094 = (i__31085_31089 + (1));
seq__31082_31086 = G__31091;
chunk__31083_31087 = G__31092;
count__31084_31088 = G__31093;
i__31085_31089 = G__31094;
continue;
} else {
var temp__4657__auto___31095 = cljs.core.seq.call(null,seq__31082_31086);
if(temp__4657__auto___31095){
var seq__31082_31096__$1 = temp__4657__auto___31095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31082_31096__$1)){
var c__20970__auto___31097 = cljs.core.chunk_first.call(null,seq__31082_31096__$1);
var G__31098 = cljs.core.chunk_rest.call(null,seq__31082_31096__$1);
var G__31099 = c__20970__auto___31097;
var G__31100 = cljs.core.count.call(null,c__20970__auto___31097);
var G__31101 = (0);
seq__31082_31086 = G__31098;
chunk__31083_31087 = G__31099;
count__31084_31088 = G__31100;
i__31085_31089 = G__31101;
continue;
} else {
var msg_31102 = cljs.core.first.call(null,seq__31082_31096__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31102);

var G__31103 = cljs.core.next.call(null,seq__31082_31096__$1);
var G__31104 = null;
var G__31105 = (0);
var G__31106 = (0);
seq__31082_31086 = G__31103;
chunk__31083_31087 = G__31104;
count__31084_31088 = G__31105;
i__31085_31089 = G__31106;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31107){
var map__31110 = p__31107;
var map__31110__$1 = ((((!((map__31110 == null)))?((((map__31110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31110):map__31110);
var w = map__31110__$1;
var message = cljs.core.get.call(null,map__31110__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20147__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20147__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20147__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31122 = cljs.core.seq.call(null,plugins);
var chunk__31123 = null;
var count__31124 = (0);
var i__31125 = (0);
while(true){
if((i__31125 < count__31124)){
var vec__31126 = cljs.core._nth.call(null,chunk__31123,i__31125);
var k = cljs.core.nth.call(null,vec__31126,(0),null);
var plugin = cljs.core.nth.call(null,vec__31126,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31132 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31122,chunk__31123,count__31124,i__31125,pl_31132,vec__31126,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31132.call(null,msg_hist);
});})(seq__31122,chunk__31123,count__31124,i__31125,pl_31132,vec__31126,k,plugin))
);
} else {
}

var G__31133 = seq__31122;
var G__31134 = chunk__31123;
var G__31135 = count__31124;
var G__31136 = (i__31125 + (1));
seq__31122 = G__31133;
chunk__31123 = G__31134;
count__31124 = G__31135;
i__31125 = G__31136;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31122);
if(temp__4657__auto__){
var seq__31122__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31122__$1)){
var c__20970__auto__ = cljs.core.chunk_first.call(null,seq__31122__$1);
var G__31137 = cljs.core.chunk_rest.call(null,seq__31122__$1);
var G__31138 = c__20970__auto__;
var G__31139 = cljs.core.count.call(null,c__20970__auto__);
var G__31140 = (0);
seq__31122 = G__31137;
chunk__31123 = G__31138;
count__31124 = G__31139;
i__31125 = G__31140;
continue;
} else {
var vec__31129 = cljs.core.first.call(null,seq__31122__$1);
var k = cljs.core.nth.call(null,vec__31129,(0),null);
var plugin = cljs.core.nth.call(null,vec__31129,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31141 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31122,chunk__31123,count__31124,i__31125,pl_31141,vec__31129,k,plugin,seq__31122__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31141.call(null,msg_hist);
});})(seq__31122,chunk__31123,count__31124,i__31125,pl_31141,vec__31129,k,plugin,seq__31122__$1,temp__4657__auto__))
);
} else {
}

var G__31142 = cljs.core.next.call(null,seq__31122__$1);
var G__31143 = null;
var G__31144 = (0);
var G__31145 = (0);
seq__31122 = G__31142;
chunk__31123 = G__31143;
count__31124 = G__31144;
i__31125 = G__31145;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31146 = [];
var len__21234__auto___31153 = arguments.length;
var i__21235__auto___31154 = (0);
while(true){
if((i__21235__auto___31154 < len__21234__auto___31153)){
args31146.push((arguments[i__21235__auto___31154]));

var G__31155 = (i__21235__auto___31154 + (1));
i__21235__auto___31154 = G__31155;
continue;
} else {
}
break;
}

var G__31148 = args31146.length;
switch (G__31148) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31146.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31149_31157 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31150_31158 = null;
var count__31151_31159 = (0);
var i__31152_31160 = (0);
while(true){
if((i__31152_31160 < count__31151_31159)){
var msg_31161 = cljs.core._nth.call(null,chunk__31150_31158,i__31152_31160);
figwheel.client.socket.handle_incoming_message.call(null,msg_31161);

var G__31162 = seq__31149_31157;
var G__31163 = chunk__31150_31158;
var G__31164 = count__31151_31159;
var G__31165 = (i__31152_31160 + (1));
seq__31149_31157 = G__31162;
chunk__31150_31158 = G__31163;
count__31151_31159 = G__31164;
i__31152_31160 = G__31165;
continue;
} else {
var temp__4657__auto___31166 = cljs.core.seq.call(null,seq__31149_31157);
if(temp__4657__auto___31166){
var seq__31149_31167__$1 = temp__4657__auto___31166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31149_31167__$1)){
var c__20970__auto___31168 = cljs.core.chunk_first.call(null,seq__31149_31167__$1);
var G__31169 = cljs.core.chunk_rest.call(null,seq__31149_31167__$1);
var G__31170 = c__20970__auto___31168;
var G__31171 = cljs.core.count.call(null,c__20970__auto___31168);
var G__31172 = (0);
seq__31149_31157 = G__31169;
chunk__31150_31158 = G__31170;
count__31151_31159 = G__31171;
i__31152_31160 = G__31172;
continue;
} else {
var msg_31173 = cljs.core.first.call(null,seq__31149_31167__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31173);

var G__31174 = cljs.core.next.call(null,seq__31149_31167__$1);
var G__31175 = null;
var G__31176 = (0);
var G__31177 = (0);
seq__31149_31157 = G__31174;
chunk__31150_31158 = G__31175;
count__31151_31159 = G__31176;
i__31152_31160 = G__31177;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21241__auto__ = [];
var len__21234__auto___31182 = arguments.length;
var i__21235__auto___31183 = (0);
while(true){
if((i__21235__auto___31183 < len__21234__auto___31182)){
args__21241__auto__.push((arguments[i__21235__auto___31183]));

var G__31184 = (i__21235__auto___31183 + (1));
i__21235__auto___31183 = G__31184;
continue;
} else {
}
break;
}

var argseq__21242__auto__ = ((((0) < args__21241__auto__.length))?(new cljs.core.IndexedSeq(args__21241__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21242__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31179){
var map__31180 = p__31179;
var map__31180__$1 = ((((!((map__31180 == null)))?((((map__31180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31180):map__31180);
var opts = map__31180__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31178){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31178));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31186){if((e31186 instanceof Error)){
var e = e31186;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31186;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31190){
var map__31191 = p__31190;
var map__31191__$1 = ((((!((map__31191 == null)))?((((map__31191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31191):map__31191);
var msg_name = cljs.core.get.call(null,map__31191__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map
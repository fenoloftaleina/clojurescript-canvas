// Compiled by ClojureScript 1.9.229 {}
goog.provide('sonja.core');
goog.require('cljs.core');
goog.require('reagent.core');
sonja.core.w = (256);
sonja.core.h = sonja.core.w;
sonja.core.by_id = (function sonja$core$by_id(id){
return document.getElementById(cljs.core.name.call(null,id));
});
sonja.core.get_px = (function sonja$core$get_px(data,y,x){
var a = (((4) * x) + (((4) * (256)) * y));
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (a){
return (function (p1__24777_SHARP_){
return (data[(a + p1__24777_SHARP_)]);
});})(a))
,cljs.core.range.call(null,(3))));
});
sonja.core.pixelize_BANG_ = (function sonja$core$pixelize_BANG_(context,m){
var previous_m = (m - (1));
if((previous_m > (1))){
var image_data = context.getImageData((0),(0),(256),(256)).data;
var divider = (4);
var range_m = (2);
var xy_size_rect_colors = ((function (image_data,divider,range_m,previous_m){
return (function (y,x){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (image_data,divider,range_m,previous_m){
return (function (y_plus){
return cljs.core.map.call(null,((function (image_data,divider,range_m,previous_m){
return (function (x_plus){
return sonja.core.get_px.call(null,image_data,(y + (y_plus * previous_m)),(x + (x_plus * previous_m)));
});})(image_data,divider,range_m,previous_m))
,cljs.core.range.call(null,range_m));
});})(image_data,divider,range_m,previous_m))
,cljs.core.range.call(null,range_m)));
});})(image_data,divider,range_m,previous_m))
;
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (image_data,divider,range_m,xy_size_rect_colors,previous_m){
return (function (p__24789){
var vec__24790 = p__24789;
var y = cljs.core.nth.call(null,vec__24790,(0),null);
var x = cljs.core.nth.call(null,vec__24790,(1),null);
var colors = xy_size_rect_colors.call(null,y,x);
var color = cljs.core.map.call(null,((function (colors,vec__24790,y,x,image_data,divider,range_m,xy_size_rect_colors,previous_m){
return (function (p1__24778_SHARP_){
return ((p1__24778_SHARP_ / divider) | (0));
});})(colors,vec__24790,y,x,image_data,divider,range_m,xy_size_rect_colors,previous_m))
,cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,colors));
context.fillStyle = [cljs.core.str("rgb("),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",color))),cljs.core.str(")")].join('');

return context.fillRect(x,y,m,m);
});})(image_data,divider,range_m,xy_size_rect_colors,previous_m))
,(function (){var iter__20939__auto__ = ((function (image_data,divider,range_m,xy_size_rect_colors,previous_m){
return (function sonja$core$pixelize_BANG__$_iter__24793(s__24794){
return (new cljs.core.LazySeq(null,((function (image_data,divider,range_m,xy_size_rect_colors,previous_m){
return (function (){
var s__24794__$1 = s__24794;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24794__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var y = cljs.core.first.call(null,xs__5205__auto__);
var iterys__20935__auto__ = ((function (s__24794__$1,y,xs__5205__auto__,temp__4657__auto__,image_data,divider,range_m,xy_size_rect_colors,previous_m){
return (function sonja$core$pixelize_BANG__$_iter__24793_$_iter__24795(s__24796){
return (new cljs.core.LazySeq(null,((function (s__24794__$1,y,xs__5205__auto__,temp__4657__auto__,image_data,divider,range_m,xy_size_rect_colors,previous_m){
return (function (){
var s__24796__$1 = s__24796;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__24796__$1);
if(temp__4657__auto____$1){
var s__24796__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24796__$2)){
var c__20937__auto__ = cljs.core.chunk_first.call(null,s__24796__$2);
var size__20938__auto__ = cljs.core.count.call(null,c__20937__auto__);
var b__24798 = cljs.core.chunk_buffer.call(null,size__20938__auto__);
if((function (){var i__24797 = (0);
while(true){
if((i__24797 < size__20938__auto__)){
var x = cljs.core._nth.call(null,c__20937__auto__,i__24797);
cljs.core.chunk_append.call(null,b__24798,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__24799 = (i__24797 + (1));
i__24797 = G__24799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24798),sonja$core$pixelize_BANG__$_iter__24793_$_iter__24795.call(null,cljs.core.chunk_rest.call(null,s__24796__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24798),null);
}
} else {
var x = cljs.core.first.call(null,s__24796__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),sonja$core$pixelize_BANG__$_iter__24793_$_iter__24795.call(null,cljs.core.rest.call(null,s__24796__$2)));
}
} else {
return null;
}
break;
}
});})(s__24794__$1,y,xs__5205__auto__,temp__4657__auto__,image_data,divider,range_m,xy_size_rect_colors,previous_m))
,null,null));
});})(s__24794__$1,y,xs__5205__auto__,temp__4657__auto__,image_data,divider,range_m,xy_size_rect_colors,previous_m))
;
var fs__20936__auto__ = cljs.core.seq.call(null,iterys__20935__auto__.call(null,cljs.core.range.call(null,(0),(256),m)));
if(fs__20936__auto__){
return cljs.core.concat.call(null,fs__20936__auto__,sonja$core$pixelize_BANG__$_iter__24793.call(null,cljs.core.rest.call(null,s__24794__$1)));
} else {
var G__24800 = cljs.core.rest.call(null,s__24794__$1);
s__24794__$1 = G__24800;
continue;
}
} else {
return null;
}
break;
}
});})(image_data,divider,range_m,xy_size_rect_colors,previous_m))
,null,null));
});})(image_data,divider,range_m,xy_size_rect_colors,previous_m))
;
return iter__20939__auto__.call(null,cljs.core.range.call(null,(0),(256),m));
})()));
} else {
return null;
}
});
sonja.core.counter = reagent.core.atom.call(null,(0));
sonja.core.pow = (function sonja$core$pow(a,x){
return cljs.core.reduce.call(null,cljs.core._STAR_,cljs.core.repeat.call(null,x,a));
});
sonja.core.ease_out = (function sonja$core$ease_out(a){
return (80);
});
sonja.core.happening = (function sonja$core$happening(context){
return (function (){
setTimeout((function (){
if((cljs.core.deref.call(null,sonja.core.counter) < (32))){
return cljs.core.swap_BANG_.call(null,sonja.core.counter,cljs.core.partial.call(null,cljs.core._PLUS_,(2)));
} else {
return null;
}
}),sonja.core.ease_out.call(null,cljs.core.deref.call(null,sonja.core.counter)));

return sonja.core.pixelize_BANG_.call(null,context,cljs.core.deref.call(null,sonja.core.counter));
}).call(null);
});
sonja.core.main_component = (function sonja$core$main_component(){
var context = sonja.core.by_id.call(null,"here").getContext("2d");
if(((1) <= cljs.core.deref.call(null,sonja.core.counter))){
context.drawImage(sonja.core.by_id.call(null,"this"),(0),(0));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (context){
return (function (){
return cljs.core.reset_BANG_.call(null,sonja.core.counter,(1));
});})(context))
], null),"one more time with feeling"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sonja.core.happening,context], null)], null);
});
sonja.core.mount_root = (function sonja$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sonja.core.main_component], null),document.getElementById("app"));
});
sonja.core.init_BANG_ = (function sonja$core$init_BANG_(){
return sonja.core.mount_root.call(null);
});
sonja.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map
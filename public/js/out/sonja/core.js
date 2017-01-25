// Compiled by ClojureScript 1.9.229 {}
goog.provide('sonja.core');
goog.require('cljs.core');
goog.require('reagent.core');
sonja.core.w = (400);
sonja.core.h = (300);
sonja.core.wh = ((sonja.core.w * sonja.core.h) * (4));
sonja.core.wh_by_2 = ((sonja.core.wh / (2)) | (0));
sonja.core.by_id = (function sonja$core$by_id(id){
return document.getElementById(cljs.core.name.call(null,id));
});
sonja.core.map_px = (function sonja$core$map_px(y,x){
return (((4) * x) + (((4) * sonja.core.w) * y));
});
sonja.core.get_px = (function sonja$core$get_px(data,y,x){
var a = sonja.core.map_px.call(null,y,x);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (a){
return (function (p1__23070_SHARP_){
return (data[(a + p1__23070_SHARP_)]);
});})(a))
,cljs.core.range.call(null,(3))));
});
sonja.core.get_image_data = (function sonja$core$get_image_data(context){
return context.getImageData((0),(0),sonja.core.w,sonja.core.h);
});
sonja.core.put_image_data = (function sonja$core$put_image_data(context,image_data){
return context.putImageData(image_data,(0),(0));
});
sonja.core.counter = reagent.core.atom.call(null,(0));
sonja.core.noise_BANG_ = (function sonja$core$noise_BANG_(context){
return (function (){
setTimeout((function (){
return cljs.core.swap_BANG_.call(null,sonja.core.counter,cljs.core.partial.call(null,cljs.core._PLUS_,(1)));
}),(50));

var image_data_23072 = sonja.core.get_image_data.call(null,context);
var pixels_23073 = image_data_23072.data;
var start__21099__auto___23074 = cljs.core.system_time.call(null);
var ret__21100__auto___23075 = cljs.core.dorun.call(null,cljs.core.map.call(null,((function (start__21099__auto___23074,image_data_23072,pixels_23073){
return (function (p1__23071_SHARP_){
return (pixels_23073[(p1__23071_SHARP_ + cljs.core.rand_int.call(null,(4)))] = ((50) + cljs.core.rand_int.call(null,(50))));
});})(start__21099__auto___23074,image_data_23072,pixels_23073))
,cljs.core.range.call(null,(0),sonja.core.wh,(12))));
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__21099__auto___23074).toFixed((6))),cljs.core.str(" msecs")].join(''));


sonja.core.put_image_data.call(null,context,image_data_23072);

cljs.core.deref.call(null,sonja.core.counter);

return null;
}).call(null);
});
sonja.core.main_component = (function sonja$core$main_component(){
var context = sonja.core.by_id.call(null,"here").getContext("2d");
cljs.core.deref.call(null,sonja.core.counter);

context.drawImage(sonja.core.by_id.call(null,"this"),(0),(0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sonja.core.noise_BANG_,context], null)], null);
});
sonja.core.mount_root = (function sonja$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sonja.core.main_component], null),document.getElementById("app"));
});
sonja.core.init_BANG_ = (function sonja$core$init_BANG_(){
return sonja.core.mount_root.call(null);
});
sonja.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map
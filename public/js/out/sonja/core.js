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
return cljs.core.mapv.call(null,((function (a){
return (function (p1__24144_SHARP_){
return (data[(a + p1__24144_SHARP_)]);
});})(a))
,cljs.core.range.call(null,(3)));
});
sonja.core.get_image_data = (function sonja$core$get_image_data(context){
return context.getImageData((0),(0),sonja.core.w,sonja.core.h);
});
sonja.core.put_image_data = (function sonja$core$put_image_data(context,image_data){
return context.putImageData(image_data,(0),(0));
});
sonja.core.counter = reagent.core.atom.call(null,(0));
sonja.core.noise_BANG_ = (function sonja$core$noise_BANG_(context,image){
return (function (){
cljs.core.deref.call(null,sonja.core.counter);

setTimeout((function (){
return cljs.core.swap_BANG_.call(null,sonja.core.counter,cljs.core.partial.call(null,cljs.core._PLUS_,(1)));
}),(50));

context.drawImage(image,(0),(0));

var image_data_24169 = sonja.core.get_image_data.call(null,context);
var pixels_24170 = image_data_24169.data;
var modulated_counter_24171 = cljs.core.mod.call(null,cljs.core.deref.call(null,sonja.core.counter),(255));
var seq__24157_24172 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sonja.core.wh,(4)));
var chunk__24158_24173 = null;
var count__24159_24174 = (0);
var i__24160_24175 = (0);
while(true){
if((i__24160_24175 < count__24159_24174)){
var px_pos_24176 = cljs.core._nth.call(null,chunk__24158_24173,i__24160_24175);
var seq__24161_24177 = cljs.core.seq.call(null,cljs.core.range.call(null,(3)));
var chunk__24162_24178 = null;
var count__24163_24179 = (0);
var i__24164_24180 = (0);
while(true){
if((i__24164_24180 < count__24163_24179)){
var color_offset_24181 = cljs.core._nth.call(null,chunk__24162_24178,i__24164_24180);
var pos_24182 = (px_pos_24176 + color_offset_24181);
var px_24183 = (pixels_24170[pos_24182]);
(pixels_24170[pos_24182] = (px_24183 - cljs.core.mod.call(null,px_24183,modulated_counter_24171)));

var G__24184 = seq__24161_24177;
var G__24185 = chunk__24162_24178;
var G__24186 = count__24163_24179;
var G__24187 = (i__24164_24180 + (1));
seq__24161_24177 = G__24184;
chunk__24162_24178 = G__24185;
count__24163_24179 = G__24186;
i__24164_24180 = G__24187;
continue;
} else {
var temp__4657__auto___24188 = cljs.core.seq.call(null,seq__24161_24177);
if(temp__4657__auto___24188){
var seq__24161_24189__$1 = temp__4657__auto___24188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24161_24189__$1)){
var c__20970__auto___24190 = cljs.core.chunk_first.call(null,seq__24161_24189__$1);
var G__24191 = cljs.core.chunk_rest.call(null,seq__24161_24189__$1);
var G__24192 = c__20970__auto___24190;
var G__24193 = cljs.core.count.call(null,c__20970__auto___24190);
var G__24194 = (0);
seq__24161_24177 = G__24191;
chunk__24162_24178 = G__24192;
count__24163_24179 = G__24193;
i__24164_24180 = G__24194;
continue;
} else {
var color_offset_24195 = cljs.core.first.call(null,seq__24161_24189__$1);
var pos_24196 = (px_pos_24176 + color_offset_24195);
var px_24197 = (pixels_24170[pos_24196]);
(pixels_24170[pos_24196] = (px_24197 - cljs.core.mod.call(null,px_24197,modulated_counter_24171)));

var G__24198 = cljs.core.next.call(null,seq__24161_24189__$1);
var G__24199 = null;
var G__24200 = (0);
var G__24201 = (0);
seq__24161_24177 = G__24198;
chunk__24162_24178 = G__24199;
count__24163_24179 = G__24200;
i__24164_24180 = G__24201;
continue;
}
} else {
}
}
break;
}

var G__24202 = seq__24157_24172;
var G__24203 = chunk__24158_24173;
var G__24204 = count__24159_24174;
var G__24205 = (i__24160_24175 + (1));
seq__24157_24172 = G__24202;
chunk__24158_24173 = G__24203;
count__24159_24174 = G__24204;
i__24160_24175 = G__24205;
continue;
} else {
var temp__4657__auto___24206 = cljs.core.seq.call(null,seq__24157_24172);
if(temp__4657__auto___24206){
var seq__24157_24207__$1 = temp__4657__auto___24206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24157_24207__$1)){
var c__20970__auto___24208 = cljs.core.chunk_first.call(null,seq__24157_24207__$1);
var G__24209 = cljs.core.chunk_rest.call(null,seq__24157_24207__$1);
var G__24210 = c__20970__auto___24208;
var G__24211 = cljs.core.count.call(null,c__20970__auto___24208);
var G__24212 = (0);
seq__24157_24172 = G__24209;
chunk__24158_24173 = G__24210;
count__24159_24174 = G__24211;
i__24160_24175 = G__24212;
continue;
} else {
var px_pos_24213 = cljs.core.first.call(null,seq__24157_24207__$1);
var seq__24165_24214 = cljs.core.seq.call(null,cljs.core.range.call(null,(3)));
var chunk__24166_24215 = null;
var count__24167_24216 = (0);
var i__24168_24217 = (0);
while(true){
if((i__24168_24217 < count__24167_24216)){
var color_offset_24218 = cljs.core._nth.call(null,chunk__24166_24215,i__24168_24217);
var pos_24219 = (px_pos_24213 + color_offset_24218);
var px_24220 = (pixels_24170[pos_24219]);
(pixels_24170[pos_24219] = (px_24220 - cljs.core.mod.call(null,px_24220,modulated_counter_24171)));

var G__24221 = seq__24165_24214;
var G__24222 = chunk__24166_24215;
var G__24223 = count__24167_24216;
var G__24224 = (i__24168_24217 + (1));
seq__24165_24214 = G__24221;
chunk__24166_24215 = G__24222;
count__24167_24216 = G__24223;
i__24168_24217 = G__24224;
continue;
} else {
var temp__4657__auto___24225__$1 = cljs.core.seq.call(null,seq__24165_24214);
if(temp__4657__auto___24225__$1){
var seq__24165_24226__$1 = temp__4657__auto___24225__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24165_24226__$1)){
var c__20970__auto___24227 = cljs.core.chunk_first.call(null,seq__24165_24226__$1);
var G__24228 = cljs.core.chunk_rest.call(null,seq__24165_24226__$1);
var G__24229 = c__20970__auto___24227;
var G__24230 = cljs.core.count.call(null,c__20970__auto___24227);
var G__24231 = (0);
seq__24165_24214 = G__24228;
chunk__24166_24215 = G__24229;
count__24167_24216 = G__24230;
i__24168_24217 = G__24231;
continue;
} else {
var color_offset_24232 = cljs.core.first.call(null,seq__24165_24226__$1);
var pos_24233 = (px_pos_24213 + color_offset_24232);
var px_24234 = (pixels_24170[pos_24233]);
(pixels_24170[pos_24233] = (px_24234 - cljs.core.mod.call(null,px_24234,modulated_counter_24171)));

var G__24235 = cljs.core.next.call(null,seq__24165_24226__$1);
var G__24236 = null;
var G__24237 = (0);
var G__24238 = (0);
seq__24165_24214 = G__24235;
chunk__24166_24215 = G__24236;
count__24167_24216 = G__24237;
i__24168_24217 = G__24238;
continue;
}
} else {
}
}
break;
}

var G__24239 = cljs.core.next.call(null,seq__24157_24207__$1);
var G__24240 = null;
var G__24241 = (0);
var G__24242 = (0);
seq__24157_24172 = G__24239;
chunk__24158_24173 = G__24240;
count__24159_24174 = G__24241;
i__24160_24175 = G__24242;
continue;
}
} else {
}
}
break;
}

sonja.core.put_image_data.call(null,context,image_data_24169);

return null;
}).call(null);
});
sonja.core.main_component = (function sonja$core$main_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sonja.core.noise_BANG_,sonja.core.by_id.call(null,"here").getContext("2d"),sonja.core.by_id.call(null,"this")], null)], null);
});
sonja.core.mount_root = (function sonja$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sonja.core.main_component], null),document.getElementById("app"));
});
sonja.core.init_BANG_ = (function sonja$core$init_BANG_(){
return sonja.core.mount_root.call(null);
});
sonja.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map
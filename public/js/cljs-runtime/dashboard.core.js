goog.provide('dashboard.core');
dashboard.core.cities = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Los Angeles",new cljs.core.Keyword(null,"lat","lat",-580793929),34.05,new cljs.core.Keyword(null,"lon","lon",522068437),-118.24], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"San Francisco",new cljs.core.Keyword(null,"lat","lat",-580793929),37.77,new cljs.core.Keyword(null,"lon","lon",522068437),-122.42], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Sacramento",new cljs.core.Keyword(null,"lat","lat",-580793929),38.58,new cljs.core.Keyword(null,"lon","lon",522068437),-121.49], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"San Diego",new cljs.core.Keyword(null,"lat","lat",-580793929),32.72,new cljs.core.Keyword(null,"lon","lon",522068437),-117.16], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Fresno",new cljs.core.Keyword(null,"lat","lat",-580793929),36.74,new cljs.core.Keyword(null,"lon","lon",522068437),-119.77], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Santa Barbara",new cljs.core.Keyword(null,"lat","lat",-580793929),34.42,new cljs.core.Keyword(null,"lon","lon",522068437),-119.7], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Redding",new cljs.core.Keyword(null,"lat","lat",-580793929),40.59,new cljs.core.Keyword(null,"lon","lon",522068437),-122.39], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Bakersfield",new cljs.core.Keyword(null,"lat","lat",-580793929),35.37,new cljs.core.Keyword(null,"lon","lon",522068437),-119.02], null)], null);
dashboard.core.weather_codes = cljs.core.PersistentHashMap.fromArrays([(0),(65),(1),(55),(95),(48),(75),(99),(61),(51),(3),(2),(82),(45),(53),(81),(73),(71),(80),(63)],["Clear Sky","Heavy Rain","Mainly Clear","Heavy Drizzle","Thunderstorm","Icy Fog","Heavy Snow","Thunderstorm w/ Hail","Light Rain","Light Drizzle","Overcast","Partly Cloudy","Heavy Showers","Foggy","Drizzle","Showers","Snow","Light Snow","Light Showers","Rain"]);
dashboard.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
dashboard.core.temp_color = (function dashboard$core$temp_color(temp){
if((temp < (60))){
return "#4a90d9";
} else {
if((temp < (75))){
return "#5cb85c";
} else {
if((temp < (90))){
return "#f0ad4e";
} else {
if((temp < (105))){
return "#e8622a";
} else {
return "#cc0000";

}
}
}
}
});
dashboard.core.wind_direction = (function dashboard$core$wind_direction(degrees){
var directions = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["N","NE","E","SE","S","SW","W","NW"], null);
var index = Math.round((degrees / (45)));
var idx = cljs.core.mod(index,(8));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(directions,idx);
});
dashboard.core.fetch_city = (function dashboard$core$fetch_city(city){
var map__11969 = city;
var map__11969__$1 = cljs.core.__destructure_map(map__11969);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11969__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11969__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11969__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var url = (""+"https://api.open-meteo.com/v1/forecast"+"?latitude="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat)+"&longitude="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lon)+"&current_weather=true"+"&temperature_unit=fahrenheit"+"&windspeed_unit=mph");
return fetch(url).then((function (p1__11967_SHARP_){
return p1__11967_SHARP_.json();
})).then((function (p1__11968_SHARP_){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__11968_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var w = new cljs.core.Keyword(null,"current_weather","current_weather",-931676031).cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dashboard.core.app_state,cljs.core.assoc,name,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"temp","temp",1791541284),new cljs.core.Keyword(null,"temperature","temperature",899018429).cljs$core$IFn$_invoke$arity$1(w),new cljs.core.Keyword(null,"wind","wind",-527553074),new cljs.core.Keyword(null,"windspeed","windspeed",-823969285).cljs$core$IFn$_invoke$arity$1(w),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"winddirection","winddirection",-1714729425).cljs$core$IFn$_invoke$arity$1(w),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"weathercode","weathercode",275762059).cljs$core$IFn$_invoke$arity$1(w),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.get.cljs$core$IFn$_invoke$arity$3(dashboard.core.weather_codes,new cljs.core.Keyword(null,"weathercode","weathercode",275762059).cljs$core$IFn$_invoke$arity$1(w),"Unknown")], null));
})).catch((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dashboard.core.app_state,cljs.core.assoc,name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null));
}));
});
dashboard.core.fetch_all = (function dashboard$core$fetch_all(){
var seq__11970 = cljs.core.seq(dashboard.core.cities);
var chunk__11971 = null;
var count__11972 = (0);
var i__11973 = (0);
while(true){
if((i__11973 < count__11972)){
var city = chunk__11971.cljs$core$IIndexed$_nth$arity$2(null,i__11973);
dashboard.core.fetch_city(city);


var G__11978 = seq__11970;
var G__11979 = chunk__11971;
var G__11980 = count__11972;
var G__11981 = (i__11973 + (1));
seq__11970 = G__11978;
chunk__11971 = G__11979;
count__11972 = G__11980;
i__11973 = G__11981;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__11970);
if(temp__5825__auto__){
var seq__11970__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11970__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__11970__$1);
var G__11982 = cljs.core.chunk_rest(seq__11970__$1);
var G__11983 = c__5694__auto__;
var G__11984 = cljs.core.count(c__5694__auto__);
var G__11985 = (0);
seq__11970 = G__11982;
chunk__11971 = G__11983;
count__11972 = G__11984;
i__11973 = G__11985;
continue;
} else {
var city = cljs.core.first(seq__11970__$1);
dashboard.core.fetch_city(city);


var G__11986 = cljs.core.next(seq__11970__$1);
var G__11987 = null;
var G__11988 = (0);
var G__11989 = (0);
seq__11970 = G__11986;
chunk__11971 = G__11987;
count__11972 = G__11988;
i__11973 = G__11989;
continue;
}
} else {
return null;
}
}
break;
}
});
dashboard.core.weather_card = (function dashboard$core$weather_card(city_name){
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dashboard.core.app_state),city_name);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 2px 8px rgba(0,0,0,0.08)",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"180px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 12px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#333"], null)], null),city_name], null),(((data == null))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null)], null),"Loading..."], null):(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(data))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"Failed to load"], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"36px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700",new cljs.core.Keyword(null,"color","color",1011675173),dashboard.core.temp_color(new cljs.core.Keyword(null,"temp","temp",1791541284).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 8px"], null)], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"temp","temp",1791541284).cljs$core$IFn$_invoke$arity$1(data))+"\u00B0F")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 0",new cljs.core.Keyword(null,"color","color",1011675173),"#555",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),(""+"\uD83D\uDCA8 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"wind","wind",-527553074).cljs$core$IFn$_invoke$arity$1(data))+" mph "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dashboard.core.wind_direction(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(data))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 0",new cljs.core.Keyword(null,"color","color",1011675173),"#555",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),(""+"\uD83C\uDF24 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(data)))], null)], null)
))], null);
});
dashboard.core.app = (function dashboard$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"system-ui, sans-serif",new cljs.core.Keyword(null,"padding","padding",1660304693),"40px",new cljs.core.Keyword(null,"background","background",-863952629),"#f5f5f0",new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"8px",new cljs.core.Keyword(null,"color","color",1011675173),"#222"], null)], null),"\uD83D\uDD25 Wildfire Weather Dashboard"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#888",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),"Current conditions in high fire-risk California cities"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"repeat(auto-fill, minmax(200px, 1fr))",new cljs.core.Keyword(null,"gap","gap",80255254),"16px"], null)], null),(function (){var iter__5649__auto__ = (function dashboard$core$app_$_iter__11974(s__11975){
return (new cljs.core.LazySeq(null,(function (){
var s__11975__$1 = s__11975;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__11975__$1);
if(temp__5825__auto__){
var s__11975__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11975__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__11975__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__11977 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__11976 = (0);
while(true){
if((i__11976 < size__5648__auto__)){
var city = cljs.core._nth(c__5647__auto__,i__11976);
cljs.core.chunk_append(b__11977,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dashboard.core.weather_card,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city)], null)));

var G__11990 = (i__11976 + (1));
i__11976 = G__11990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11977),dashboard$core$app_$_iter__11974(cljs.core.chunk_rest(s__11975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11977),null);
}
} else {
var city = cljs.core.first(s__11975__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dashboard.core.weather_card,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(city)], null)),dashboard$core$app_$_iter__11974(cljs.core.rest(s__11975__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(dashboard.core.cities);
})()], null)], null);
});
dashboard.core.init = (function dashboard$core$init(){
dashboard.core.fetch_all();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dashboard.core.app], null),document.getElementById("app"));
});

//# sourceMappingURL=dashboard.core.js.map

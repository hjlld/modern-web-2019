(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ar-vr"],{"1c17":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",{staticClass:"ma-0 pa-0 grey-lighten-1"},[r("v-container",{attrs:{"grid-list-xl":"","fill-height":""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":"","align-content-center":""}},[r("v-flex",{staticClass:"display-3 font-weight-light text-center mb-5",attrs:{xs12:""}},[t._v("\n                ( VR, AR, MR ) => WebXR\n            ")]),t._l(t.items,function(e,a){return r("v-flex",{key:a,attrs:{xs6:""}},[r("v-card",{attrs:{href:e.url,target:"_blank",hover:""}},[r("v-img",{attrs:{src:e.img,height:"200px"}}),r("v-container",{staticClass:"black--text",attrs:{"fill-height":"",fluid:""}},[r("v-layout",{attrs:{"fill-height":""}},[r("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[r("span",{staticClass:"headline"},[t._v(t._s(e.title))])])],1)],1)],1)],1)}),r("v-flex",{staticClass:"title font-weight-light text-center",attrs:{xs12:""}},[t._v("\n                AR 短视频道具、AR 测量工具、AR 家居装修预览\n            ")])],2)],1)],1)},s=[],i={data:()=>({items:[{url:"https://www.youtube.com/watch?v=sWevv3zotXY",title:"Looking Glass",img:"/modern-web-2019/img/looking_glass.jpg"},{url:"https://stradavirtual.fiat.com.br/",title:"Fiat Strada",img:"/modern-web-2019/img/fiat.png"},{url:"https://weibo.com/tv/v/I1oqGlYjS?fid=1034:4403322317378716",title:"AR 化學教學工具",img:"/modern-web-2019/img/ar_education.png"},{url:"https://www.youtube.com/watch?v=-PzeWxtOGzQ",title:"Magic Leap’s Mica at GDC 2019",img:"/modern-web-2019/img/mica.jpg"}]})},n=i,l=r("2877"),o=r("6544"),c=r.n(o),d=r("b0af"),h=r("a523"),u=r("a75b"),g=r("0e8f"),m=r("adda"),p=r("a722"),v=Object(l["a"])(n,a,s,!1,null,null,null);e["default"]=v.exports;c()(v,{VCard:d["a"],VContainer:h["a"],VContent:u["a"],VFlex:g["a"],VImg:m["a"],VLayout:p["a"]})},"615b":function(t,e,r){},"6ece":function(t,e,r){},b0af:function(t,e,r){"use strict";r("615b");var a=r("10d2"),s=r("2b0e"),i=(r("6ece"),r("0789")),n=r("a9ad"),l=r("fe6c"),o=r("a452"),c=r("7560"),d=r("80d2"),h=r("58df");const u=Object(h["a"])(n["a"],Object(l["b"])(["absolute","fixed","top","bottom"]),o["a"],c["a"]);var g=u.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["e"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["e"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,width:Object(d["e"])(this.normalizedBuffer,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?i["b"]:i["c"]},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["e"])(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=Object(d["k"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["e"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),m=g,p=s["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(m,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),v=r("1c87");e["a"]=Object(h["a"])(p,v["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean},computed:{classes(){return{"v-card":!0,...v["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,...a["a"].options.computed.classes.call(this)}},styles(){const t={...a["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=p.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=ar-vr.b0f92387.js.map
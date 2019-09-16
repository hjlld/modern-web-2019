(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["compression"],{"169a":function(t,e,i){"use strict";i("368e");var s=i("2b0e"),a=s["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const i=parseInt(this[`${t}Delay`],10);this[`${t}Timeout`]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),i)}}}),n=i("f2e7"),o=i("58df"),r=i("80d2"),l=i("d9bd");const c=Object(o["a"])(a,n["a"]);var h=c.extend({name:"activatable",props:{activator:{default:null,validator:t=>{return["string","object"].includes(typeof t)}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave"],listeners:{}}),watch:{activator:"resetActivator",activatorElement(t){t&&this.addActivatorEvents()},openOnHover:"resetActivator"},mounted(){const t=Object(r["l"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(l["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.getActivator()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.activatorElement)return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.addEventListener(e,this.listeners[e])},genActivator(){const t=Object(r["k"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):t.click=t=>{this.activatorElement&&this.activatorElement.focus(),this.isActive=!this.isActive},t},getActivator(t){if(this.activatorElement)return this.activatorElement;let e=null;if(this.activator){const t=this.internalActivator?this.$el:document;e="string"===typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else t?e=t.currentTarget||t.target:this.activatorNode.length&&(e=this.activatorNode[0].elm);return this.activatorElement=e,this.activatorElement},getContentSlot(){return Object(r["k"])(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.activatorElement=null,this.getActivator()}}}),d=i("b848"),v=i("9d65");function u(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}var m=Object(o["a"])(v["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:u},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},beforeMount(){this.$nextTick(()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)})}})},mounted(){this.eager&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)})}}catch(t){console.log(t)}},methods:{getScopeIdAttrs(){const t=Object(r["j"])(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.insertBefore(this.$refs.content,t.firstChild),this.hasDetached=!0):Object(l["c"])(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}}),g=i("e707"),f=s["a"].extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout(()=>{this.isActive=!1})}}}),p=s["a"].extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(r["m"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,i=[this.stackMinZIndex,Object(r["m"])(e)],s=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let a=0;a<s.length;a++)t.includes(s[a])||i.push(Object(r["m"])(s[a]));return Math.max(...i)}}}),b=i("a293"),y=i("7560"),x=Object(o["a"])(y["a"]).extend({name:"theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:y["a"].options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find(t=>!t.isComment&&" "!==t.text)}});const A=Object(o["a"])(h,d["a"],m,g["a"],f,p,n["a"]);e["a"]=A.extend({name:"v-dialog",directives:{ClickOutside:b["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,fullWidth:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e))&&(this.$emit("click:outside"),this.persistent?(this.noClickAnimation||this.overlay!==e||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):g["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.bind()},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onKeydown(t){if(t.keyCode===r["n"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}}},render(t){const e=[],i={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:()=>{this.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:t=>{t.stopPropagation()}},style:{}};this.fullscreen||(i.style={maxWidth:"none"===this.maxWidth?void 0:Object(r["e"])(this.maxWidth),width:"auto"===this.width?void 0:Object(r["e"])(this.width)}),e.push(this.genActivator());let s=t("div",i,this.showLazyContent(this.getContentSlot()));return this.transition&&(s=t("transition",{props:{name:this.transition,origin:this.origin}},[s])),e.push(t("div",{class:this.contentClasses,attrs:{role:"document",tabindex:0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(x,{props:{root:!0,light:this.light,dark:this.dark}},[s])])),t("div",{staticClass:"v-dialog__container",attrs:{role:"dialog"},style:{display:!this.hasActivator||this.fullWidth?"block":"inline-block"}},e)}})},"368e":function(t,e,i){},"509f":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-content",{staticClass:"ma-0 pa-0 grey-lighten-1"},[i("v-container",{attrs:{"grid-list-xl":"","fill-height":""}},[i("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":"","align-content-center":""}},[i("v-flex",{staticClass:"display-4 font-weight-light text-center mb-5 text-center",attrs:{xs12:""}},[t._v("\n                當前 WebGL 渲染 3D 模型的不二選擇！\n            ")]),i("v-flex",{staticClass:"display-3 font-weight-light mb-5",attrs:{xs12:""}},[t._v("\n                網絡傳輸與顯存、內存佔用的體積平衡\n            ")]),i("v-flex",{staticClass:"display-3 font-weight-light mb-5",attrs:{xs12:""}},[t._v("\n                壓縮率與解壓縮效率的性能平衡\n            ")]),i("v-flex",{staticClass:"display-3 font-weight-light mb-5",attrs:{xs12:""}},[t._v("\n                紋理壓縮："),i("a",{attrs:{href:"https://github.com/BinomialLLC/basis_universal",target:"_blank"}},[t._v("Universal Basis")]),i("v-btn",{attrs:{text:"",large:"",color:"accent"},on:{click:function(e){t.dialog=!0}}},[t._v("與其他格式的對比")]),i("v-dialog",{attrs:{"max-width":"100vw",transition:"dialog-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-img",{attrs:{src:"/img/basis.png"}})],1)],1),i("v-flex",{staticClass:"display-3 font-weight-light mb-5",attrs:{xs12:""}},[t._v("\n                幾何體壓縮："),i("a",{attrs:{href:"https://github.com/google/draco",target:"_blank"}},[t._v("Draco")])])],1)],1)],1)},a=[],n={data:()=>({dialog:!1})},o=n,r=i("2877"),l=i("6544"),c=i.n(l),h=i("8336"),d=i("a523"),v=i("a75b"),u=i("169a"),m=i("0e8f"),g=i("adda"),f=i("a722"),p=Object(r["a"])(o,s,a,!1,null,null,null);e["default"]=p.exports;c()(p,{VBtn:h["a"],VContainer:d["a"],VContent:v["a"],VDialog:u["a"],VFlex:m["a"],VImg:g["a"],VLayout:f["a"]})}}]);
//# sourceMappingURL=compression.45a2074d.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["offscreencanvas"],{d0f2:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-content",{staticClass:"ma-0 pa-0 grey-lighten-1"},[a("v-container",{attrs:{"grid-list-xl":"","fill-height":""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":"","align-content-center":""}},[a("v-flex",{staticClass:"display-4 font-weight-light text-center mb-5",attrs:{xs12:""}},[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/OffscreenCanvas",target:"_blank"}},[e._v("Offscreencanvas")])]),a("v-flex",{attrs:{xs12:""}},[a("highlight-code",{attrs:{code:e.code}})],1),a("v-flex",{staticClass:"display-1",attrs:{xs12:""}},[a("div",[e._v("默認支援此特性：Chrome 69、Microsoft Edge Chromium")]),a("div",[e._v("需要特別設置：Firefox "),a("code",[e._v("gfx.offscreencanvas.enabled = true")])])])],1)],1)],1)},s=[],r=a("3968"),o={components:{"highlight-code":r["a"]},data:()=>({code:"\n        let canvas = document.createElement( 'canvas' );\n\n        let offscreen = canvas.transferControlToOffscreen();\n\n        worker.postMessage( offscreen, [ offscreen ] );\n        "})},c=o,l=a("2877"),f=a("6544"),i=a.n(f),d=a("a523"),v=a("a75b"),h=a("0e8f"),g=a("a722"),p=Object(l["a"])(c,n,s,!1,null,"09adbd58",null);t["default"]=p.exports;i()(p,{VContainer:d["a"],VContent:v["a"],VFlex:h["a"],VLayout:g["a"]})}}]);
//# sourceMappingURL=offscreencanvas.74f8c354.js.map
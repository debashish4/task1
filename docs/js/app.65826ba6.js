(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"343e4e8d"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"b7c13dac"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/task1/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"20be":function(e,t,n){},"359c":function(e,t,n){e.exports=n.p+"img/github.eff729a3.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},a=[],c=(n("034f"),n("2877")),i={},u=Object(c["a"])(i,o,a,!1,null,null,null),s=u.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-view"},[r("div",{staticClass:"login"},[r("p",{staticClass:"title"},[e._v("User Repos & Activity APP")]),r("p",{staticClass:"github-login"},[r("a",{attrs:{href:"https://github.com/login/oauth/authorize?scope=user&client_id="+e.client_id}},[r("img",{attrs:{src:n("359c"),alt:""}})])])])])},d=[],p={name:"Login",data:function(){return{client_id:"3981c2f907b3cfba3f22"}},mounted:function(){console.log(this.$route)}},h=p,b=(n("a888"),Object(c["a"])(h,f,d,!1,null,"4a9f9dea",null)),v=b.exports;r["a"].use(l["a"]);var m=[{path:"/",name:"Login",component:v},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("about").then(n.bind(null,"7277"))},beforeEnter:function(e,t,n){var r=e["query"]["code"];r?n():n({name:"Login"})}}];console.log("NODE_ENV","production"),console.log("VUE_APP_BASE_URL","/task1/");var g,y=new l["a"]({mode:"history",routes:m}),_=y,E=n("2f62"),w={client_id:"3981c2f907b3cfba3f22",client_secret:"e2dcf878686c71cbb8868f62903fd603dcc38ec5",code:"",access_token:""},O="SAVE_CLIENT_CODE",C="SAVE_ACCESS_TOKEN",j={saveClientCode:function(e,t){var n=e.commit;n(O,t)},saveAccessToken:function(e,t){var n=e.commit;n(C,t)}},S=n("ade3"),A=(g={},Object(S["a"])(g,O,(function(e,t){e.client_code=t})),Object(S["a"])(g,C,(function(e,t){e.access_token=t})),g);r["a"].use(E["a"]);var P=new E["a"].Store({state:w,mutations:A,actions:j});r["a"].config.productionTip=!1,new r["a"]({router:_,store:P,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){},a888:function(e,t,n){"use strict";n("20be")}});
(this["webpackJsonptodo-pwa"]=this["webpackJsonptodo-pwa"]||[]).push([[0],{11:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t(2),r=t.n(i),c=(t(11),t(5)),a=t(3),s=t(6),l=t(1);var u=function(e){var n=e.entries.map((function(n){return Object(l.jsx)("li",{onClick:function(){return t=n.key,e.del(t);var t},children:n.text},n.key)}));return Object(l.jsx)("div",{className:"itemList",children:Object(l.jsx)("ul",{children:Object(l.jsx)(s.a,{duration:250,easing:"ease-out",children:n})})})};var d=function(e){var n=Object(o.useState)([]),t=Object(c.a)(n,2),i=t[0],r=t[1],s=Object(o.useState)(""),d=Object(c.a)(s,2),f=d[0],h=d[1];return Object(o.useEffect)((function(){Object(a.a)("tasks").then((function(e){return r(null!==e&&void 0!==e?e:[])}))}),[]),Object(l.jsxs)("div",{className:"todoListMain",children:[Object(l.jsx)("div",{className:"header",children:Object(l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==f){var n=Date.now();r(i.concat({text:f,key:n})),Object(a.b)("tasks",i.concat({text:f,key:n}))}h("")},children:[Object(l.jsx)("input",{value:f,placeholder:"enter task",onChange:function(e){h(e.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"Add"})]})}),Object(l.jsx)(u,{entries:i,del:function(e){var n=i.filter((function(n){return n.key!==e}));r(n),Object(a.b)("tasks",n)}})]})},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var v=document.querySelector("#container");r.a.render(Object(l.jsx)("div",{children:Object(l.jsx)(d,{})}),v),function(e){if("serviceWorker"in navigator){if(new URL("/React-ToDo-PWA",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/React-ToDo-PWA","/service-worker.js");f?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):h(n,e)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.0ca4faa7.chunk.js.map
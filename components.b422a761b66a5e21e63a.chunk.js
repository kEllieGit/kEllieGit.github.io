/*! For license information please see components.b422a761b66a5e21e63a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[179],{8855:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});var n=r(6540);const o=function(){return n.createElement("div",{className:"copyright"},n.createElement("p",null,"© ",n.createElement("strong",null,"kEllieDev")," 2025"))}},7868:(t,e,r)=>{r.r(e),r.d(e,{default:()=>i});var n=r(6540),o=r(7767),a=r(4976);const i=function(){return(0,o.zy)(),n.createElement("nav",null,n.createElement("ul",null,n.createElement("li",null,n.createElement(a.k2,{to:"/",className:function(t){return t.isActive?"active-page":""}},"Home")),n.createElement("li",null,n.createElement(a.k2,{to:"/portfolio",className:function(t){return t.isActive?"active-page":""}},"Projects")),n.createElement("li",null,n.createElement(a.k2,{to:"/blog",className:function(t){return t.isActive?"active-page":""}},"Blog"))))}},395:(t,e,r)=>{r.d(e,{A:()=>f});var n=r(6540);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new P(n||[]);return i(a,"_invoke",{value:A(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var v="suspendedStart",m="suspendedYield",y="executing",d="completed",g={};function b(){}function w(){}function E(){}var x={};f(x,l,(function(){return this}));var k=Object.getPrototypeOf,j=k&&k(k(G([])));j&&j!==r&&n.call(j,l)&&(x=j);var L=E.prototype=b.prototype=Object.create(x);function N(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(a,i,c,l){var u=p(t[a],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==o(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,l)}))}l(u.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function A(e,r,n){var o=v;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=O(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?d:m,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=d,n.method="throw",n.arg=u.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[l];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(o(e)+" is not iterable")}return w.prototype=E,i(L,"constructor",{value:E,configurable:!0}),i(E,"constructor",{value:w,configurable:!0}),w.displayName=f(E,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,f(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},N(S.prototype),f(S.prototype,u,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},N(L),f(L,s,"Generator"),f(L,l,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function i(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var u={},s=function(t){return t&&t.id&&t.login&&t.avatar_url};const f=function(t){var e=t.username,r=c((0,n.useState)(null),2),o=r[0],l=r[1],f=c((0,n.useState)(!0),2),h=f[0],p=f[1],v=c((0,n.useState)(null),2),m=v[0],y=v[1];return(0,n.useEffect)((function(){var t=function(){var t,r=(t=a().mark((function t(){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(p(!0),y(null),!u[e]){t.next=7;break}return console.log("Cache hit for user: ".concat(e)),l(u[e]),p(!1),t.abrupt("return");case 7:return t.prev=7,console.log("Fetching user data for ".concat(e)),t.next=11,fetch("https://api.github.com/users/".concat(e));case 11:if((r=t.sent).ok){t.next=14;break}throw new Error("Error fetching profile! Check the console for more information.");case 14:return t.next=16,r.json();case 16:if(n=t.sent,!s(n)){t.next=22;break}u[e]=n,l(n),t.next=23;break;case 22:throw new Error("Invalid user data received.");case 23:t.next=28;break;case 25:t.prev=25,t.t0=t.catch(7),y(t.t0.message);case 28:return t.prev=28,p(!1),t.finish(28);case 31:case"end":return t.stop()}}),t,null,[[7,25,28,31]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,l,"next",t)}function l(t){i(a,n,o,c,l,"throw",t)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();t()}),[e]),h?n.createElement("div",null,"Loading..."):m?n.createElement("div",null,m):n.createElement("div",{className:"profile"},n.createElement("div",{className:"row"},n.createElement("img",{className:"profile-avatar",src:null==o?void 0:o.avatar_url,alt:"".concat(null==o?void 0:o.login,"'s avatar")}),n.createElement("h2",{className:"profile-name"},(null==o?void 0:o.name)||(null==o?void 0:o.login))))}},7449:(t,e,r)=>{r.d(e,{A:()=>a});var n=r(6540);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}const a=function(t){var e=t.title,r=t.description,a=t.image,i=t.techstack,c=t.organization,l=(t.releaseDate,t.links);return n.createElement("div",{className:"project-card"},a&&n.createElement("div",{className:"project-image"},n.createElement("img",{src:a,alt:e})),n.createElement("div",{className:"project-content"},n.createElement("div",{className:"project-header"},n.createElement("h3",{className:"project-title"},e),c&&n.createElement("h4",{className:"project-organization"},c)),n.createElement("p",null,r),i&&n.createElement("div",{className:"project-techstack"},i.map((function(t,e){return n.createElement("span",{key:e},t)}))),l&&n.createElement("div",{className:"project-links"},Object.entries(l).map((function(t){var e,r,a=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],c=a[1];return n.createElement("a",{className:"select-button",key:i,href:c},i)})))))}},7193:(t,e,r)=>{r.r(e),r.d(e,{SeasonManager:()=>l,default:()=>u});var n=r(6540),o=r(5418);const a=function(){return n.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}},n.createElement(o.A,{color:"white",snowflakeCount:50,radius:[.5,3],speed:[.5,1.5],wind:[.5,.5]}))};var i=r(2386),c=r(7767),l=function(){var t=(0,c.zy)(),e=(0,i.o)(),r=["/about","/contact","/projects"].includes(t.pathname);return n.createElement("div",null,r?n.createElement(n.Fragment,null):e===i.G.Winter?n.createElement(a,null):n.createElement(n.Fragment,null))};const u=l},6168:(t,e,r)=>{r.d(e,{A:()=>o});var n=r(6540);const o=function(t){var e=t.src,r=t.alt,o=t.link,a=t.className;return n.createElement("img",{onClick:function(){window.open(o,"_blank")},className:"icon ".concat(a),src:e,alt:r})}}}]);
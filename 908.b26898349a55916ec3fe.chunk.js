(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[908],{2849:e=>{"use strict";var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)},o=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var r,i=t.call(e,"constructor"),s=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!i&&!s)return!1;for(r in e);return void 0===r||t.call(e,r)},a=function(e,t){r&&"__proto__"===t.name?r(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},c=function(e,n){if("__proto__"===n){if(!t.call(e,n))return;if(i)return i(e,n).value}return e[n]};e.exports=function e(){var t,n,r,i,l,u,f=arguments[0],d=1,h=arguments.length,p=!1;for("boolean"==typeof f&&(p=f,f=arguments[1]||{},d=2),(null==f||"object"!=typeof f&&"function"!=typeof f)&&(f={});d<h;++d)if(null!=(t=arguments[d]))for(n in t)r=c(f,n),f!==(i=c(t,n))&&(p&&i&&(o(i)||(l=s(i)))?(l?(l=!1,u=r&&s(r)?r:[]):u=r&&o(r)?r:{},a(f,{name:n,newValue:e(p,u,i)})):void 0!==i&&a(f,{name:n,newValue:i}));return f}},9788:e=>{var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,r=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,o=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,a=/^[;\s]*/,c=/^\s+|\s+$/g,l="";function u(e){return e?e.replace(c,l):l}e.exports=function(e,c){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];c=c||{};var f=1,d=1;function h(e){var t=e.match(n);t&&(f+=t.length);var r=e.lastIndexOf("\n");d=~r?e.length-r:d+e.length}function p(){var e={line:f,column:d};return function(t){return t.position=new m(e),v(),t}}function m(e){this.start=e,this.end={line:f,column:d},this.source=c.source}m.prototype.content=e;var g=[];function y(t){var n=new Error(c.source+":"+f+":"+d+": "+t);if(n.reason=t,n.filename=c.source,n.line=f,n.column=d,n.source=e,!c.silent)throw n;g.push(n)}function k(t){var n=t.exec(e);if(n){var r=n[0];return h(r),e=e.slice(r.length),n}}function v(){k(r)}function x(e){var t;for(e=e||[];t=b();)!1!==t&&e.push(t);return e}function b(){var t=p();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;l!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,l===e.charAt(n-1))return y("End of comment missing");var r=e.slice(2,n-2);return d+=2,h(r),e=e.slice(n),d+=2,t({type:"comment",comment:r})}}function E(){var e=p(),n=k(i);if(n){if(b(),!k(s))return y("property missing ':'");var r=k(o),c=e({type:"declaration",property:u(n[0].replace(t,l)),value:r?u(r[0].replace(t,l)):l});return k(a),c}}return v(),function(){var e,t=[];for(x(t);e=E();)!1!==e&&(t.push(e),x(t));return t}()}},9232:(e,t,n)=>{"use strict";function r(e){if(e)throw e}n.d(t,{V:()=>r})},6206:(e,t,n)=>{"use strict";n.d(t,{s:()=>i});const r=document.createElement("i");function i(e){const t="&"+e+";";r.innerHTML=t;const n=r.textContent;return(59!==n.charCodeAt(n.length-1)||"semi"===e)&&n!==t&&n}},7471:(e,t,n)=>{"use strict";function r(){}function i(){}n.d(t,{HB:()=>i,ok:()=>r})},5732:(e,t,n)=>{"use strict";n.d(t,{H:()=>w});var r=n(7471);const i=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,s=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,o={};function a(e,t){return((t||o).jsx?s:i).test(e)}const c=/[ \t\n\f\r]/g;function l(e){return""===e.replace(c,"")}var u=n(9150),f=n(1775),d=n(2670),h=n(2485),p=n(9702),m=n(5824),g=n(5946);const y={}.hasOwnProperty,k=new Map,v=/[A-Z]/g,x=/-([a-z])/g,b=new Set(["table","tbody","thead","tfoot","tr"]),E=new Set(["td","th"]),S="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function w(e,t){if(!t||void 0===t.Fragment)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if("function"!=typeof t.jsxDEV)throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=function(e,t){return function(n,r,i,s){const o=Array.isArray(i.children),a=(0,m.PW)(n);return t(r,i,s,o,{columnNumber:a?a.column-1:void 0,fileName:e,lineNumber:a?a.line:void 0},void 0)}}(n,t.jsxDEV)}else{if("function"!=typeof t.jsx)throw new TypeError("Expected `jsx` in production options");if("function"!=typeof t.jsxs)throw new TypeError("Expected `jsxs` in production options");i=t.jsx,s=t.jsxs,r=function(e,t,n,r){const o=Array.isArray(n.children)?s:i;return r?o(t,n,r):o(t,n)}}var i,s;const o={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:!1!==t.passKeys,passNode:t.passNode||!1,schema:"svg"===t.space?u.JW:u.qy,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:!1!==t.tableCellAlignToStyle},a=I(o,e,void 0);return a&&"string"!=typeof a?a:o.create(e,o.Fragment,{children:a||void 0},void 0)}function I(e,t,n){return"element"===t.type?function(e,t,n){const r=e.schema;let i=r;"svg"===t.tagName.toLowerCase()&&"html"===r.space&&(i=u.JW,e.schema=i),e.ancestors.push(t);const s=F(e,t.tagName,!1),o=function(e,t){const n={};let r,i;for(i in t.properties)if("children"!==i&&y.call(t.properties,i)){const s=P(e,i,t.properties[i]);if(s){const[i,o]=s;e.tableCellAlignToStyle&&"align"===i&&"string"==typeof o&&E.has(t.tagName)?r=o:n[i]=o}}return r&&((n.style||(n.style={}))["css"===e.stylePropertyNameCase?"text-align":"textAlign"]=r),n}(e,t);let a=C(e,t);return b.has(t.tagName)&&(a=a.filter((function(e){return"string"!=typeof e||!("object"==typeof(t=e)?"text"===t.type&&l(t.value):l(t));var t}))),T(e,o,s,t),A(o,a),e.ancestors.pop(),e.schema=r,e.create(t,s,o,n)}(e,t,n):"mdxFlowExpression"===t.type||"mdxTextExpression"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater){const n=t.data.estree.body[0];return(0,r.ok)("ExpressionStatement"===n.type),e.evaluater.evaluateExpression(n.expression)}j(e,t.position)}(e,t):"mdxJsxFlowElement"===t.type||"mdxJsxTextElement"===t.type?function(e,t,n){const i=e.schema;let s=i;"svg"===t.name&&"html"===i.space&&(s=u.JW,e.schema=s),e.ancestors.push(t);const o=null===t.name?e.Fragment:F(e,t.name,!0),a=function(e,t){const n={};for(const i of t.attributes)if("mdxJsxExpressionAttribute"===i.type)if(i.data&&i.data.estree&&e.evaluater){const t=i.data.estree.body[0];(0,r.ok)("ExpressionStatement"===t.type);const s=t.expression;(0,r.ok)("ObjectExpression"===s.type);const o=s.properties[0];(0,r.ok)("SpreadElement"===o.type),Object.assign(n,e.evaluater.evaluateExpression(o.argument))}else j(e,t.position);else{const s=i.name;let o;if(i.value&&"object"==typeof i.value)if(i.value.data&&i.value.data.estree&&e.evaluater){const t=i.value.data.estree.body[0];(0,r.ok)("ExpressionStatement"===t.type),o=e.evaluater.evaluateExpression(t.expression)}else j(e,t.position);else o=null===i.value||i.value;n[s]=o}return n}(e,t),c=C(e,t);return T(e,a,o,t),A(a,c),e.ancestors.pop(),e.schema=i,e.create(t,o,a,n)}(e,t,n):"mdxjsEsm"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);j(e,t.position)}(e,t):"root"===t.type?function(e,t,n){const r={};return A(r,C(e,t)),e.create(t,e.Fragment,r,n)}(e,t,n):"text"===t.type?function(e,t){return t.value}(0,t):void 0}function T(e,t,n,r){"string"!=typeof n&&n!==e.Fragment&&e.passNode&&(t.node=r)}function A(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function C(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:k;for(;++r<t.children.length;){const s=t.children[r];let o;if(e.passKeys){const e="element"===s.type?s.tagName:"mdxJsxFlowElement"===s.type||"mdxJsxTextElement"===s.type?s.name:void 0;if(e){const t=i.get(e)||0;o=e+"-"+t,i.set(e,t+1)}}const a=I(e,s,o);void 0!==a&&n.push(a)}return n}function P(e,t,n){const r=(0,f.I)(e.schema,t);if(!(null==n||"number"==typeof n&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?function(e){const t={};return(""===e[e.length-1]?[...e,""]:e).join((t.padRight?" ":"")+","+(!1===t.padLeft?"":" ")).trim()}(n):(0,h.A)(n)),"style"===r.property){let t="object"==typeof n?n:function(e,t){const n={};try{(0,p.A)(t,(function(e,t){let r=e;"--"!==r.slice(0,2)&&("-ms-"===r.slice(0,4)&&(r="ms-"+r.slice(4)),r=r.replace(x,O)),n[r]=t}))}catch(t){if(!e.ignoreInvalidStyle){const n=t,r=new g.o("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=S+"#cannot-parse-style-attribute",r}}return n}(e,String(n));return"css"===e.stylePropertyNameCase&&(t=function(e){const t={};let n;for(n in e)y.call(e,n)&&(t[N(n)]=e[n]);return t}(t)),["style",t]}return["react"===e.elementAttributeNameCase&&r.space?d.H[r.property]||r.property:r.attribute,n]}}function F(e,t,n){let i;if(n)if(t.includes(".")){const e=t.split(".");let n,s=-1;for(;++s<e.length;){const t=a(e[s])?{type:"Identifier",name:e[s]}:{type:"Literal",value:e[s]};n=n?{type:"MemberExpression",object:n,property:t,computed:Boolean(s&&"Literal"===t.type),optional:!1}:t}(0,r.ok)(n,"always a result"),i=n}else i=a(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};else i={type:"Literal",value:t};if("Literal"===i.type){const t=i.value;return y.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(i);j(e)}function j(e,t){const n=new g.o("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=S+"#cannot-handle-mdx-estrees-without-createevaluater",n}function N(e){let t=e.replace(v,_);return"ms-"===t.slice(0,3)&&(t="-"+t),t}function O(e,t){return t.toUpperCase()}function _(e){return"-"+e.toLowerCase()}},9061:(e,t,n)=>{"use strict";n.d(t,{$:()=>r});const r={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]}},6672:(e,t,n)=>{"use strict";n.d(t,{Y:()=>g});const r={};function i(e,t,n){if(function(e){return Boolean(e&&"object"==typeof e)}(e)){if("value"in e)return"html"!==e.type||n?e.value:"";if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return s(e.children,t,n)}return Array.isArray(e)?s(e,t,n):""}function s(e,t,n){const r=[];let s=-1;for(;++s<e.length;)r[s]=i(e[s],t,n);return r.join("")}var o=n(3926),a=n(9756),c=n(2611);function l(e,t){const n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||!(65535&~n)||65534==(65535&n)||n>1114111?"�":String.fromCodePoint(n)}var u=n(6206);const f=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function d(e,t,n){if(t)return t;if(35===n.charCodeAt(0)){const e=n.charCodeAt(1),t=120===e||88===e;return l(n.slice(t?2:1),t?16:10)}return(0,u.s)(n)||e}var h=n(9638),p=n(7188);const m={}.hasOwnProperty;function g(e,t,n){return"string"!=typeof t&&(n=t,t=void 0),function(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(F),autolinkProtocol:E,autolinkEmail:E,atxHeading:o(A),blockQuote:o((function(){return{type:"blockquote",children:[]}})),characterEscape:E,characterReference:E,codeFenced:o(T),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(T,a),codeText:o((function(){return{type:"inlineCode",value:""}}),a),codeTextData:E,data:E,codeFlowValue:E,definition:o((function(){return{type:"definition",identifier:"",label:null,title:null,url:""}})),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o((function(){return{type:"emphasis",children:[]}})),hardBreakEscape:o(C),hardBreakTrailing:o(C),htmlFlow:o(P,a),htmlFlowData:E,htmlText:o(P,a),htmlTextData:E,image:o((function(){return{type:"image",title:null,url:"",alt:null}})),label:a,link:o(F),listItem:o((function(e){return{type:"listItem",spread:e._spread,checked:null,children:[]}})),listItemValue:function(e){this.data.expectingFirstListItemValue&&(this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0)},listOrdered:o(j,(function(){this.data.expectingFirstListItemValue=!0})),listUnordered:o(j),paragraph:o((function(){return{type:"paragraph",children:[]}})),reference:function(){this.data.referenceType="collapsed"},referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(A),strong:o((function(){return{type:"strong",children:[]}})),thematicBreak:o((function(){return{type:"thematicBreak"}}))},exit:{atxHeading:g(),atxHeadingSequence:function(e){const t=this.stack[this.stack.length-1];if(!t.depth){const n=this.sliceSerialize(e).length;t.depth=n}},autolink:g(),autolinkEmail:function(e){S.call(this,e),this.stack[this.stack.length-1].url="mailto:"+this.sliceSerialize(e)},autolinkProtocol:function(e){S.call(this,e),this.stack[this.stack.length-1].url=this.sliceSerialize(e)},blockQuote:g(),characterEscapeValue:S,characterReferenceMarkerHexadecimal:I,characterReferenceMarkerNumeric:I,characterReferenceValue:function(e){const t=this.sliceSerialize(e),n=this.data.characterReferenceType;let r;n?(r=l(t,"characterReferenceMarkerNumeric"===n?10:16),this.data.characterReferenceType=void 0):r=(0,u.s)(t);this.stack[this.stack.length-1].value+=r},characterReference:function(e){this.stack.pop().position.end=y(e.end)},codeFenced:g((function(){const e=this.resume();this.stack[this.stack.length-1].value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0})),codeFencedFence:function(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)},codeFencedFenceInfo:function(){const e=this.resume();this.stack[this.stack.length-1].lang=e},codeFencedFenceMeta:function(){const e=this.resume();this.stack[this.stack.length-1].meta=e},codeFlowValue:S,codeIndented:g((function(){const e=this.resume();this.stack[this.stack.length-1].value=e.replace(/(\r?\n|\r)$/g,"")})),codeText:g((function(){const e=this.resume();this.stack[this.stack.length-1].value=e})),codeTextData:S,data:S,definition:g(),definitionDestinationString:function(){const e=this.resume();this.stack[this.stack.length-1].url=e},definitionLabelString:function(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=(0,h.B)(this.sliceSerialize(e)).toLowerCase()},definitionTitleString:function(){const e=this.resume();this.stack[this.stack.length-1].title=e},emphasis:g(),hardBreakEscape:g(w),hardBreakTrailing:g(w),htmlFlow:g((function(){const e=this.resume();this.stack[this.stack.length-1].value=e})),htmlFlowData:S,htmlText:g((function(){const e=this.resume();this.stack[this.stack.length-1].value=e})),htmlTextData:S,image:g((function(){const e=this.stack[this.stack.length-1];if(this.data.inReference){const t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0})),label:function(){const e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];if(this.data.inReference=!0,"link"===n.type){const t=e.children;n.children=t}else n.alt=t},labelText:function(e){const t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=function(e){return e.replace(f,d)}(t),n.identifier=(0,h.B)(t).toLowerCase()},lineEnding:function(e){const n=this.stack[this.stack.length-1];if(this.data.atHardBreak)return n.children[n.children.length-1].position.end=y(e.end),void(this.data.atHardBreak=void 0);!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(E.call(this,e),S.call(this,e))},link:g((function(){const e=this.stack[this.stack.length-1];if(this.data.inReference){const t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0})),listItem:g(),listOrdered:g(),listUnordered:g(),paragraph:g(),referenceString:function(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=(0,h.B)(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType="full"},resourceDestinationString:function(){const e=this.resume();this.stack[this.stack.length-1].url=e},resourceTitleString:function(){const e=this.resume();this.stack[this.stack.length-1].title=e},resource:function(){this.data.inReference=void 0},setextHeading:g((function(){this.data.setextHeadingSlurpLineEnding=void 0})),setextHeadingLineSequence:function(e){this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).codePointAt(0)?1:2},setextHeadingText:function(){this.data.setextHeadingSlurpLineEnding=!0},strong:g(),thematicBreak:g()}};k(t,(e||{}).mdastExtensions||[]);const n={};return function(e){let r={type:"root",children:[]};const i={stack:[r],tokenStack:[],config:t,enter:c,exit:v,buffer:a,resume:b,data:n},o=[];let l=-1;for(;++l<e.length;)"listOrdered"!==e[l][1].type&&"listUnordered"!==e[l][1].type||("enter"===e[l][0]?o.push(l):l=s(e,o.pop(),l));for(l=-1;++l<e.length;){const n=t[e[l][0]];m.call(n,e[l][1].type)&&n[e[l][1].type].call(Object.assign({sliceSerialize:e[l][2].sliceSerialize},i),e[l][1])}if(i.tokenStack.length>0){const e=i.tokenStack[i.tokenStack.length-1];(e[1]||x).call(i,void 0,e[0])}for(r.position={start:y(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:y(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},l=-1;++l<t.transforms.length;)r=t.transforms[l](r)||r;return r};function s(e,t,n){let r,i,s,o,a=t-1,c=-1,l=!1;for(;++a<=n;){const t=e[a];switch(t[1].type){case"listUnordered":case"listOrdered":case"blockQuote":"enter"===t[0]?c++:c--,o=void 0;break;case"lineEndingBlank":"enter"===t[0]&&(!r||o||c||s||(s=a),o=void 0);break;case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:o=void 0}if(!c&&"enter"===t[0]&&"listItemPrefix"===t[1].type||-1===c&&"exit"===t[0]&&("listUnordered"===t[1].type||"listOrdered"===t[1].type)){if(r){let o=a;for(i=void 0;o--;){const t=e[o];if("lineEnding"===t[1].type||"lineEndingBlank"===t[1].type){if("exit"===t[0])continue;i&&(e[i][1].type="lineEndingBlank",l=!0),t[1].type="lineEnding",i=o}else if("linePrefix"!==t[1].type&&"blockQuotePrefix"!==t[1].type&&"blockQuotePrefixWhitespace"!==t[1].type&&"blockQuoteMarker"!==t[1].type&&"listItemIndent"!==t[1].type)break}s&&(!i||s<i)&&(r._spread=!0),r.end=Object.assign({},i?e[i][1].start:t[1].end),e.splice(i||a,0,["exit",r,t[2]]),a++,n++}if("listItemPrefix"===t[1].type){const i={type:"listItem",_spread:!1,start:Object.assign({},t[1].start),end:void 0};r=i,e.splice(a,0,["enter",i,t[2]]),a++,n++,s=void 0,o=!0}}}return e[t][1]._spread=l,n}function o(e,t){return function(n){c.call(this,e(n),n),t&&t.call(this,n)}}function a(){this.stack.push({type:"fragment",children:[]})}function c(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:y(t.start),end:void 0}}function g(e){return function(t){e&&e.call(this,t),v.call(this,t)}}function v(e,t){const n=this.stack.pop(),r=this.tokenStack.pop();if(!r)throw new Error("Cannot close `"+e.type+"` ("+(0,p.L)({start:e.start,end:e.end})+"): it’s not open");r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||x).call(this,e,r[0])),n.position.end=y(e.end)}function b(){return function(e){const t=r;return i(e,"boolean"!=typeof t.includeImageAlt||t.includeImageAlt,"boolean"!=typeof t.includeHtml||t.includeHtml)}(this.stack.pop())}function E(e){const t=this.stack[this.stack.length-1].children;let n=t[t.length-1];n&&"text"===n.type||(n={type:"text",value:""},n.position={start:y(e.start),end:void 0},t.push(n)),this.stack.push(n)}function S(e){const t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=y(e.end)}function w(){this.data.atHardBreak=!0}function I(e){this.data.characterReferenceType=e.type}function T(){return{type:"code",lang:null,meta:null,value:""}}function A(){return{type:"heading",depth:0,children:[]}}function C(){return{type:"break"}}function P(){return{type:"html",value:""}}function F(){return{type:"link",title:null,url:"",children:[]}}function j(e){return{type:"list",ordered:"listOrdered"===e.type,start:null,spread:e._spread,children:[]}}}(n)((0,o._)((0,a.q)(n).document().write((0,c.v)()(e,t,!0))))}function y(e){return{line:e.line,column:e.column,offset:e.offset}}function k(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?k(e,r):v(e,r)}}function v(e,t){let n;for(n in t)if(m.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function x(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+(0,p.L)({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+(0,p.L)({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+(0,p.L)({start:t.start,end:t.end})+") is still open")}},3359:(e,t,n)=>{"use strict";n.d(t,{v:()=>i});var r=n(574);function i(e,t,n,i,s,o,a,c,l){const u=l||Number.POSITIVE_INFINITY;let f=0;return function(t){return 60===t?(e.enter(i),e.enter(s),e.enter(o),e.consume(t),e.exit(o),d):null===t||32===t||41===t||(0,r.JQ)(t)?n(t):(e.enter(i),e.enter(a),e.enter(c),e.enter("chunkString",{contentType:"string"}),m(t))};function d(n){return 62===n?(e.enter(o),e.consume(n),e.exit(o),e.exit(s),e.exit(i),t):(e.enter(c),e.enter("chunkString",{contentType:"string"}),h(n))}function h(t){return 62===t?(e.exit("chunkString"),e.exit(c),d(t)):null===t||60===t||(0,r.HP)(t)?n(t):(e.consume(t),92===t?p:h)}function p(t){return 60===t||62===t||92===t?(e.consume(t),h):h(t)}function m(s){return f||null!==s&&41!==s&&!(0,r.Ee)(s)?f<u&&40===s?(e.consume(s),f++,m):41===s?(e.consume(s),f--,m):null===s||32===s||40===s||(0,r.JQ)(s)?n(s):(e.consume(s),92===s?g:m):(e.exit("chunkString"),e.exit(c),e.exit(a),e.exit(i),t(s))}function g(t){return 40===t||41===t||92===t?(e.consume(t),m):m(t)}}},5273:(e,t,n)=>{"use strict";n.d(t,{r:()=>i});var r=n(574);function i(e,t,n,i,s,o){const a=this;let c,l=0;return function(t){return e.enter(i),e.enter(s),e.consume(t),e.exit(s),e.enter(o),u};function u(d){return l>999||null===d||91===d||93===d&&!c||94===d&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(d):93===d?(e.exit(o),e.enter(s),e.consume(d),e.exit(s),e.exit(i),t):(0,r.HP)(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),u):(e.enter("chunkString",{contentType:"string"}),f(d))}function f(t){return null===t||91===t||93===t||(0,r.HP)(t)||l++>999?(e.exit("chunkString"),u(t)):(e.consume(t),c||(c=!(0,r.On)(t)),92===t?d:f)}function d(t){return 91===t||92===t||93===t?(e.consume(t),l++,f):f(t)}}},433:(e,t,n)=>{"use strict";n.d(t,{N:()=>i});var r=n(574);function i(e,t,n,i){const s=i?i-1:Number.POSITIVE_INFINITY;let o=0;return function(i){return(0,r.On)(i)?(e.enter(n),a(i)):t(i)};function a(i){return(0,r.On)(i)&&o++<s?(e.consume(i),a):(e.exit(n),t(i))}}},5997:(e,t,n)=>{"use strict";n.d(t,{f:()=>s});var r=n(433),i=n(574);function s(e,t,n,s,o,a){let c;return function(t){return 34===t||39===t||40===t?(e.enter(s),e.enter(o),e.consume(t),e.exit(o),c=40===t?41:t,l):n(t)};function l(n){return n===c?(e.enter(o),e.consume(n),e.exit(o),e.exit(s),t):(e.enter(a),u(n))}function u(t){return t===c?(e.exit(a),l(c)):null===t?n(t):(0,i.HP)(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),(0,r.N)(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(t))}function f(t){return t===c||null===t||(0,i.HP)(t)?(e.exit("chunkString"),u(t)):(e.consume(t),92===t?d:f)}function d(t){return t===c||92===t?(e.consume(t),f):f(t)}}},7076:(e,t,n)=>{"use strict";n.d(t,{Y:()=>s});var r=n(433),i=n(574);function s(e,t){let n;return function s(o){return(0,i.HP)(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n=!0,s):(0,i.On)(o)?(0,r.N)(e,s,n?"linePrefix":"lineSuffix")(o):t(o)}}},574:(e,t,n)=>{"use strict";n.d(t,{BM:()=>a,CW:()=>r,Ee:()=>f,HP:()=>u,JQ:()=>o,Ny:()=>p,On:()=>d,cx:()=>s,es:()=>h,lV:()=>i,ok:()=>c,ol:()=>l});const r=m(/[A-Za-z]/),i=m(/[\dA-Za-z]/),s=m(/[#-'*+\--9=?A-Z^-~]/);function o(e){return null!==e&&(e<32||127===e)}const a=m(/\d/),c=m(/[\dA-Fa-f]/),l=m(/[!-/:-@[-`{-~]/);function u(e){return null!==e&&e<-2}function f(e){return null!==e&&(e<0||32===e)}function d(e){return-2===e||-1===e||32===e}const h=m(/\p{P}|\p{S}/u),p=m(/\s/);function m(e){return function(t){return null!==t&&t>-1&&e.test(String.fromCharCode(t))}}},2777:(e,t,n)=>{"use strict";function r(e,t,n,r){const i=e.length;let s,o=0;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)s=Array.from(r),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);o<r.length;)s=r.slice(o,o+1e4),s.unshift(t,0),e.splice(...s),o+=1e4,t+=1e4}function i(e,t){return e.length>0?(r(e,e.length,0,t),e):t}n.d(t,{V:()=>i,m:()=>r})},691:(e,t,n)=>{"use strict";n.d(t,{S:()=>i});var r=n(574);function i(e){return null===e||(0,r.Ee)(e)||(0,r.Ny)(e)?1:(0,r.es)(e)?2:void 0}},5389:(e,t,n)=>{"use strict";n.d(t,{y:()=>s});var r=n(2777);const i={}.hasOwnProperty;function s(e){const t={};let n=-1;for(;++n<e.length;)o(t,e[n]);return t}function o(e,t){let n;for(n in t){const r=(i.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let o;if(s)for(o in s){i.call(r,o)||(r[o]=[]);const e=s[o];a(r[o],Array.isArray(e)?e:e?[e]:[])}}}function a(e,t){let n=-1;const i=[];for(;++n<t.length;)("after"===t[n].add?e:i).push(t[n]);(0,r.m)(e,0,0,i)}}}]);
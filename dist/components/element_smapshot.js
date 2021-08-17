/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,e,i,s;const n=globalThis.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,l="?"+r,a=`<${l}>`,h=document,d=(t="")=>h.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,u=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,v=/>/g,m=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,g=/'/g,C=/"/g,y=/^(?:script|style|textarea)$/i,b=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),x=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),S=new WeakMap,H=h.createTreeWalker(h,129,null,!1),$=(t,e)=>{const i=t.length-1,s=[];let n,l=2===e?"<svg>":"",h=u;for(let e=0;e<i;e++){const i=t[e];let o,d,c=-1,p=0;for(;p<i.length&&(h.lastIndex=p,d=h.exec(i),null!==d);)p=h.lastIndex,h===u?"!--"===d[1]?h=f:void 0!==d[1]?h=v:void 0!==d[2]?(y.test(d[2])&&(n=RegExp("</"+d[2],"g")),h=m):void 0!==d[3]&&(h=m):h===m?">"===d[0]?(h=null!=n?n:u,c=-1):void 0===d[1]?c=-2:(c=h.lastIndex-d[2].length,o=d[1],h=void 0===d[3]?m:'"'===d[3]?C:g):h===C||h===g?h=m:h===f||h===v?h=u:(h=m,n=void 0);const b=h===m&&t[e+1].startsWith("/>")?" ":"";l+=h===u?i+a:c>=0?(s.push(o),i.slice(0,c)+"$lit$"+i.slice(c)+r+b):i+r+(-2===c?(s.push(void 0),e):b)}const d=l+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==o?o.createHTML(d):d,s]};class _{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,a=0;const h=t.length-1,c=this.parts,[p,u]=$(t,e);if(this.el=_.createElement(p,i),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=H.nextNode())&&c.length<h;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(r)){const i=u[a++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(r),e=/([.?@])?(.*)/.exec(i);c.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?A:"?"===e[1]?L:"@"===e[1]?N:k})}else c.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(y.test(s.tagName)){const t=s.textContent.split(r),e=t.length-1;if(e>0){s.textContent=n?n.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],d()),H.nextNode(),c.push({type:2,index:++o});s.append(t[e],d())}}}else if(8===s.nodeType)if(s.data===l)c.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(r,t+1));)c.push({type:7,index:o}),t+=r.length-1}o++}}static createElement(t,e){const i=h.createElement("template");return i.innerHTML=t,i}}function P(t,e,i=t,s){var n,o,r,l;if(e===x)return e;let a=void 0!==s?null===(n=i.Σi)||void 0===n?void 0:n[s]:i.Σo;const h=c(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(o=null==a?void 0:a.O)||void 0===o||o.call(a,!1),void 0===h?a=void 0:(a=new h(t),a.T(t,i,s)),void 0!==s?(null!==(r=(l=i).Σi)&&void 0!==r?r:l.Σi=[])[s]=a:i.Σo=a),void 0!==a&&(e=P(t,a.S(t,e.values),a,s)),e}class E{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(i,!0);H.currentNode=n;let o=H.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new U(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new T(o,this,t)),this.l.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(o=H.nextNode(),r++)}return n}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class U{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=P(this,t,e),c(t)?t===w||null==t||""===t?(this.H!==w&&this.R(),this.H=w):t!==this.H&&t!==x&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return p(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(h.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=_.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(i);else{const t=new E(n,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=S.get(t.strings);return void 0===e&&S.set(t.strings,e=new _(t)),e}g(t){p(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const n of t)s===e.length?e.push(i=new U(this.k(d()),this.k(d()),this,this.options)):i=e[s],i.I(n),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class k{constructor(t,e,i,s,n){this.type=1,this.H=w,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(w),this.strings=i):this.H=w}get tagName(){return this.element.tagName}I(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=P(this,t,e,0),o=!c(t)||t!==this.H&&t!==x,o&&(this.H=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=P(this,s[i+r],e,r),l===x&&(l=this.H[r]),o||(o=!c(l)||l!==this.H[r]),l===w?t=w:t!==w&&(t+=(null!=l?l:"")+n[r+1]),this.H[r]=l}o&&!s&&this.W(t)}W(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class A extends k{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===w?void 0:t}}class L extends k{constructor(){super(...arguments),this.type=4}W(t){t&&t!==w?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class N extends k{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=P(this,t,e,0))&&void 0!==i?i:w)===x)return;const s=this.H,n=t===w&&s!==w||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==w&&(s===w||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class T{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){P(this,t)}}null===(e=(t=globalThis).litHtmlPlatformSupport)||void 0===e||e.call(t,_,U),(null!==(i=(s=globalThis).litHtmlVersions)&&void 0!==i?i:s.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const M=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol();class I{constructor(t,e){if(e!==R)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return M&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const O=new Map,V=(t,...e)=>{const i=e.reduce(((e,i,s)=>e+(t=>{if(t instanceof I)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1]),t[0]);let s=O.get(i);return void 0===s&&O.set(i,s=new I(i,R)),s},B=M?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new I(t+"",R))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var z,Z,j,W;const D={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},q=(t,e)=>e!==t&&(e==e||t==t),K={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:q};class X extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||K}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(B(t))}else void 0!==t&&e.push(B(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{M?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=K){var s,n;const o=this.constructor.Πp(t,i);if(void 0!==o&&!0===i.reflect){const r=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:D.toAttribute)(e,i.type);this.Πh=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this.Πh=null}}K(t,e){var i,s,n;const o=this.constructor,r=o.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=o.getPropertyOptions(r),l=t.converter,a=null!==(n=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==n?n:D.fromAttribute;this.Πh=r,this[r]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||q)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,J,G,Q,Y,tt;X.finalized=!0,X.shadowRootOptions={mode:"open"},null===(Z=(z=globalThis).reactiveElementPlatformSupport)||void 0===Z||Z.call(z,{ReactiveElement:X}),(null!==(j=(W=globalThis).reactiveElementVersions)&&void 0!==j?j:W.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(F=(tt=globalThis).litElementVersions)&&void 0!==F?F:tt.litElementVersions=[]).push("3.0.0-rc.1");class et extends X{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new U(e.insertBefore(d(),t),t,void 0,i)}return r.I(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return x}}et.finalized=!0,et._$litElement$=!0,null===(G=(J=globalThis).litElementHydrateSupport)||void 0===G||G.call(J,{LitElement:et}),null===(Y=(Q=globalThis).litElementPlatformSupport)||void 0===Y||Y.call(Q,{LitElement:et});window.customElements.define("element-smapshot",class extends et{static get styles(){return V`:host{font:normal 14px/1.4 Helvetica,Arial,sans-serif;text-align:center;--item-margin:10px;--item-offset:0px;--item-width:200px}.container{min-height:300px}svg{margin:10px}svg:hover{fill:#818181}#loader{display:block;border-radius:50%;width:50px;height:50px;animation:spin 2s linear infinite;margin:60px auto}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}#carousel{display:none;flex-direction:row}.btn-next,.btn-prev{background:0 0;border:0;cursor:pointer;font-size:3em;outline:0;margin:0 0 80px 0}.hidden{visibility:hidden}#contents{display:flex;flex:1;overflow:hidden;position:relative;align-items:baseline}#contents::after{content:'';position:absolute;height:100%;width:100%;pointer-events:none}article{flex-shrink:0;padding:10px;transform:translateX(calc(-1 * var(--item-offset)));transition:transform .3s;width:var(--item-width);text-align:center}a{text-decoration:none;color:#000}article .picture{height:150px;width:200px}article .title{font-size:1.1em;margin:0}article .date{font-size:.8em;margin:0}:host([looping]) article{transition:none}@media only screen and (max-width:700px){svg{width:40%;margin:5px}}@media (prefers-color-scheme:dark){.container{background:#333}svg{fill:#fff}article{color:#fff}#loader{border:8px solid #818181;border-top:8px solid #f3f3f3}.btn-next,.btn-prev{color:#fff}#contents:after{background:linear-gradient(to right,#333 0,transparent 3%,transparent 97%,#333 100%)}}@media (prefers-color-scheme:light){.container{background:#fff}svg{fill:#1f1f1f}article{color:#000}#loader{border:8px solid #f3f3f3;border-top:8px solid #000}#contents:after{background:linear-gradient(to right,#fff 0,transparent 3%,transparent 97%,#fff 100%)}}`}static get properties(){return{lat:{type:Number},long:{type:Number},limit:{type:Number},data:{type:Array},looping:{type:Boolean},_offset:{type:Number}}}constructor(){super(),this.lat="",this.long="",this.limit=10,this.data=[],this.looping=!1,this._firstIndex=0,this._offset=0}connectedCallback(){super.connectedCallback(),this.retrieveImages()}render(){return b`<div class="container"><a target="_blank" href="https://smapshot.heig-vd.ch"><svg width="236" height="22" viewBox="0 0 236 22" xmlns="http://www.w3.org/2000/svg"><path d="M7.65 21.3C6.11 21.3 4.64 21.04 3.24 20.52C1.86 19.98 0.78 19.29 0 18.45L0.69 17.31C1.43 18.09 2.42 18.73 3.66 19.23C4.92 19.71 6.24 19.95 7.62 19.95C9.62 19.95 11.13 19.57 12.15 18.81C13.17 18.05 13.68 17.06 13.68 15.84C13.68 14.9 13.41 14.15 12.87 13.59C12.33 13.03 11.66 12.6 10.86 12.3C10.06 12 8.98 11.69 7.62 11.37C6.08 10.99 4.84 10.62 3.9 10.26C2.98 9.9 2.19 9.35 1.53 8.61C0.89 7.85 0.57 6.84 0.57 5.58C0.57 4.56 0.84 3.63 1.38 2.79C1.92 1.93 2.74 1.25 3.84 0.75C4.96 0.25 6.35 0 8.01 0C9.17 0 10.31 0.17 11.43 0.51C12.55 0.85 13.52 1.31 14.34 1.89L13.77 3.12C12.93 2.54 12 2.1 10.98 1.8C9.98 1.5 8.99 1.35 8.01 1.35C6.07 1.35 4.6 1.74 3.6 2.52C2.6 3.3 2.1 4.31 2.1 5.55C2.1 6.49 2.37 7.24 2.91 7.8C3.45 8.36 4.12 8.79 4.92 9.09C5.72 9.39 6.81 9.71 8.19 10.05C9.73 10.43 10.96 10.8 11.88 11.16C12.8 11.52 13.58 12.07 14.22 12.81C14.88 13.53 15.21 14.51 15.21 15.75C15.21 16.77 14.93 17.7 14.37 18.54C13.83 19.38 12.99 20.05 11.85 20.55C10.71 21.05 9.31 21.3 7.65 21.3ZM49.2713 21.15L49.2413 3.18L40.4513 18.36H39.7013L30.9113 3.24V21.15H29.4113V0.15H30.7013L40.0913 16.38L49.4813 0.15H50.7413L50.7713 21.15H49.2713ZM80.0829 15.24H67.9029L65.2329 21.15H63.5829L73.2429 0.15H74.7729L84.4329 21.15H82.7829L80.0829 15.24ZM79.5129 13.95L73.9929 1.83L68.5029 13.95H79.5129ZM104.775 0.15C107.415 0.15 109.485 0.78 110.985 2.04C112.485 3.28 113.235 5.01 113.235 7.23C113.235 9.43 112.485 11.16 110.985 12.42C109.485 13.66 107.415 14.28 104.775 14.28H98.775V21.15H97.2452V0.15H104.775ZM104.775 12.9C107.015 12.9 108.725 12.41 109.905 11.43C111.085 10.45 111.675 9.05 111.675 7.23C111.675 5.41 111.085 4.01 109.905 3.03C108.725 2.03 107.015 1.53 104.775 1.53H98.775V12.9H104.775ZM133.211 21.3C131.671 21.3 130.201 21.04 128.801 20.52C127.421 19.98 126.341 19.29 125.561 18.45L126.251 17.31C126.991 18.09 127.981 18.73 129.221 19.23C130.481 19.71 131.801 19.95 133.181 19.95C135.181 19.95 136.691 19.57 137.711 18.81C138.731 18.05 139.241 17.06 139.241 15.84C139.241 14.9 138.971 14.15 138.431 13.59C137.891 13.03 137.221 12.6 136.421 12.3C135.621 12 134.541 11.69 133.181 11.37C131.641 10.99 130.401 10.62 129.461 10.26C128.541 9.9 127.751 9.35 127.091 8.61C126.451 7.85 126.131 6.84 126.131 5.58C126.131 4.56 126.401 3.63 126.941 2.79C127.481 1.93 128.301 1.25 129.401 0.75C130.521 0.25 131.911 0 133.571 0C134.731 0 135.871 0.17 136.991 0.51C138.111 0.85 139.081 1.31 139.901 1.89L139.331 3.12C138.491 2.54 137.561 2.1 136.541 1.8C135.541 1.5 134.551 1.35 133.571 1.35C131.631 1.35 130.161 1.74 129.161 2.52C128.161 3.3 127.661 4.31 127.661 5.55C127.661 6.49 127.931 7.24 128.471 7.8C129.011 8.36 129.681 8.79 130.481 9.09C131.281 9.39 132.371 9.71 133.751 10.05C135.291 10.43 136.521 10.8 137.441 11.16C138.361 11.52 139.141 12.07 139.781 12.81C140.441 13.53 140.771 14.51 140.771 15.75C140.771 16.77 140.491 17.7 139.931 18.54C139.391 19.38 138.551 20.05 137.411 20.55C136.271 21.05 134.871 21.3 133.211 21.3ZM172.072 0.15V21.15H170.542V11.16H156.502V21.15H154.972V0.15H156.502V9.81H170.542V0.15H172.072ZM197.315 21.3C195.255 21.3 193.395 20.84 191.735 19.92C190.075 18.98 188.765 17.7 187.805 16.08C186.865 14.46 186.395 12.65 186.395 10.65C186.395 8.65 186.865 6.84 187.805 5.22C188.765 3.6 190.075 2.33 191.735 1.41C193.395 0.47 195.255 0 197.315 0C199.375 0 201.235 0.46 202.895 1.38C204.555 2.3 205.855 3.57 206.795 5.19C207.755 6.81 208.235 8.63 208.235 10.65C208.235 12.67 207.755 14.49 206.795 16.11C205.855 17.73 204.555 19 202.895 19.92C201.235 20.84 199.375 21.3 197.315 21.3ZM197.315 19.89C199.075 19.89 200.665 19.49 202.085 18.69C203.505 17.89 204.625 16.79 205.445 15.39C206.265 13.97 206.675 12.39 206.675 10.65C206.675 8.91 206.265 7.34 205.445 5.94C204.625 4.52 203.505 3.41 202.085 2.61C200.665 1.81 199.075 1.41 197.315 1.41C195.555 1.41 193.955 1.81 192.515 2.61C191.095 3.41 189.975 4.52 189.155 5.94C188.335 7.34 187.925 8.91 187.925 10.65C187.925 12.39 188.335 13.97 189.155 15.39C189.975 16.79 191.095 17.89 192.515 18.69C193.955 19.49 195.555 19.89 197.315 19.89ZM226.269 1.53H218.709V0.15H235.359V1.53H227.799V21.15H226.269V1.53Z"/></svg></a><div id="loader"></div><div id="carousel"><button class="btn-prev" @click="${()=>this._move("left")}">&lt;</button><div id="contents">${this.data.map((({id:t,url:e,title:i,date_shot_min:s})=>b`<a target="_blank" href="https://smapshot.heig-vd.ch/visit/${t}"><article><img class="picture" src="${e}"><p class="title">${i}</p><p class="date">${s}</p></article></a>`))}</div><button class="btn-next" @click="${()=>this._move("right")}">></button></div></div><slot></slot>`}async retrieveImages(){const t=await fetch(`https://smapshot.heig-vd.ch/api/v1/images?latitude=${this.lat}&longitude=${this.long}&sortKey=distance&limit=${this.limit}`),e=await t.json();for(let t of e.rows)this.data.push({id:t.id,date_shot_min:t.date_shot_min,title:t.title,url:t.media.image_url});this.requestUpdate(),this.shadowRoot.getElementById("loader").style.display="none",this.shadowRoot.getElementById("carousel").style.display="flex"}_move(t){const e=this.shadowRoot.getElementById("contents"),i=getComputedStyle(this),s=parseFloat(i.getPropertyValue("--item-margin")),n=parseFloat(i.getPropertyValue("--item-width"))+2*s;if(this.looping){const i=e.querySelectorAll("article"),s=i.length-1;this._firstIndex="left"===t?0===this._firstIndex?s:this._firstIndex-1:this._firstIndex===s?0:this._firstIndex+1;for(let t=this._firstIndex;t<i.length;t++)i[t].style.transform=`translateX(-${n*this._firstIndex}px)`;for(let t=0;t<this._firstIndex;t++)i[t].style.transform=`translateX(${n*(i.length-this._firstIndex)}px)`}else{const i=n*this.data.length-e.clientWidth;this._offset="left"===t?this._offset-n>=0?this._offset-n:0:this._offset+n>i?i:this._offset+n}this.style.setProperty("--item-offset",`${this._offset}px`)}});
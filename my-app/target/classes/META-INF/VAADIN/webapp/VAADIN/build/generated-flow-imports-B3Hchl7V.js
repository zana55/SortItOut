const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./chunk-b80f2004533007d1ea7fcfffee7e4caeaf083d5ab7bfa83402eb5b947de71ed2-JNrOtxAk.js","./chunk-be2136a05c5be734851c1407e3884a3c6db24e95e94a1e32449f227fe52a5124-CZKy0Xe6.js","./indexhtml-iJWIKTLQ.js","./indexhtml-D5k652bw.css","./chunk-09d0b7c8457f156ff064d8a3ad4d36018d5a3e1e79a553b397db5fbe41d1b17d-C-xW-Zml.js"])))=>i.map(i=>d[i]);
import{i as m,r as g,d as E,T as I,a as oo,t as le,b as so,c as Qt,e as ro,f as no,g as ao,E as Ue,h as lo,j as co,k as uo,l as ho,_ as de}from"./indexhtml-iJWIKTLQ.js";/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ei=m`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;g("",ei,{moduleId:"lumo-overlay"});const po=m`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;g("vaadin-tooltip-overlay",[ei,po],{moduleId:"lumo-tooltip-overlay"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(i,t){return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let fo=/(url\()([^)]*)(\))/g,_o=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,ce,x;function te(i,t){if(i&&_o.test(i)||i==="//")return i;if(ce===void 0){ce=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",ce=e.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),ce)try{return new URL(i,t).href}catch{return i}return x||(x=document.implementation.createHTMLDocument("temp"),x.base=x.createElement("base"),x.head.appendChild(x.base),x.anchor=x.createElement("a"),x.body.appendChild(x.anchor)),x.base.href=t,x.anchor.href=i,x.anchor.href||i}function ot(i,t){return i.replace(fo,function(e,s,o,r){return s+"'"+te(o.replace(/["']/g,""),t)+"'"+r})}function st(i){return i.substring(0,i.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const mo=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const go=mo&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const i=new CSSStyleSheet;i.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[i],t.shadowRoot.adoptedStyleSheets[0]===i}catch{return!1}})();let vo=window.Polymer&&window.Polymer.rootPath||st(document.baseURI||window.location.href),ge=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let qe=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,bo=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,yo=window.Polymer&&window.Polymer.legacyOptimizations||!1,wo=window.Polymer&&window.Polymer.legacyWarnings||!1,Co=window.Polymer&&window.Polymer.syncInitialRender||!1,je=window.Polymer&&window.Polymer.legacyUndefined||!1,Ao=window.Polymer&&window.Polymer.orderedComputed||!1,wt=window.Polymer&&window.Polymer.removeNestedTemplates||!1,xo=window.Polymer&&window.Polymer.fastDomIf||!1,oa=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Eo=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Po=0;const v=function(i){let t=i.__mixinApplications;t||(t=new WeakMap,i.__mixinApplications=t);let e=Po++;function s(o){let r=o.__mixinSet;if(r&&r[e])return o;let n=t,a=n.get(o);if(!a){a=i(o),n.set(o,a);let l=Object.create(a.__mixinSet||r||null);l[e]=!0,a.__mixinSet=l}return a}return s};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let rt={},ti={};function Ct(i,t){rt[i]=ti[i.toLowerCase()]=t}function At(i){return rt[i]||ti[i.toLowerCase()]}function To(i){i.querySelector("style")&&console.warn("dom-module %s has style outside template",i.id)}class q extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let s=At(t);return s&&e?s.querySelector(e):s}return null}attributeChangedCallback(t,e,s,o){e!==s&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=te(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=st(e)}return this.__assetpath}register(t){if(t=t||this.id,t){if(qe&&At(t)!==void 0)throw Ct(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Ct(t,this),To(this)}}}q.prototype.modules=rt;customElements.define("dom-module",q);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const So="link[rel=import][type~=css]",Oo="include",xt="shady-unscoped";function ii(i){return q.import(i)}function Et(i){let t=i.body?i.body:i;const e=ot(t.textContent,i.baseURI),s=document.createElement("style");return s.textContent=e,s}function No(i){const t=i.trim().split(/\s+/),e=[];for(let s=0;s<t.length;s++)e.push(...Mo(t[s]));return e}function Mo(i){const t=ii(i);if(!t)return console.warn("Could not find style data in module named",i),[];if(t._styles===void 0){const e=[];e.push(...oi(t));const s=t.querySelector("template");s&&e.push(...nt(s,t.assetpath)),t._styles=e}return t._styles}function nt(i,t){if(!i._styles){const e=[],s=i.content.querySelectorAll("style");for(let o=0;o<s.length;o++){let r=s[o],n=r.getAttribute(Oo);n&&e.push(...No(n).filter(function(a,l,d){return d.indexOf(a)===l})),t&&(r.textContent=ot(r.textContent,t)),e.push(r)}i._styles=e}return i._styles}function ko(i){let t=ii(i);return t?oi(t):[]}function oi(i){const t=[],e=i.querySelectorAll(So);for(let s=0;s<e.length;s++){let o=e[s];if(o.import){const r=o.import,n=o.hasAttribute(xt);if(n&&!r._unscopedStyle){const a=Et(r);a.setAttribute(xt,""),r._unscopedStyle=a}else r._style||(r._style=Et(r));t.push(n?r._unscopedStyle:r._style)}}return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const L=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?i=>ShadyDOM.patch(i):i=>i;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function We(i){return i.indexOf(".")>=0}function D(i){let t=i.indexOf(".");return t===-1?i:i.slice(0,t)}function Lo(i,t){return i.indexOf(t+".")===0}function ve(i,t){return t.indexOf(i+".")===0}function be(i,t,e){return t+e.slice(i.length)}function Q(i){if(Array.isArray(i)){let t=[];for(let e=0;e<i.length;e++){let s=i[e].toString().split(".");for(let o=0;o<s.length;o++)t.push(s[o])}return t.join(".")}else return i}function si(i){return Array.isArray(i)?Q(i).split("."):i.toString().split(".")}function A(i,t,e){let s=i,o=si(t);for(let r=0;r<o.length;r++){if(!s)return;let n=o[r];s=s[n]}return e&&(e.path=o.join(".")),s}function Pt(i,t,e){let s=i,o=si(t),r=o[o.length-1];if(o.length>1){for(let n=0;n<o.length-1;n++){let a=o[n];if(s=s[a],!s)return}s[r]=e}else s[t]=e;return o.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ye={},zo=/-[a-z]/g,Io=/([A-Z])/g;function ri(i){return ye[i]||(ye[i]=i.indexOf("-")<0?i:i.replace(zo,t=>t[1].toUpperCase()))}function xe(i){return ye[i]||(ye[i]=i.replace(Io,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Do=0,ni=0,H=[],Fo=0,Ye=!1,ai=document.createTextNode("");new window.MutationObserver(Ro).observe(ai,{characterData:!0});function Ro(){Ye=!1;const i=H.length;for(let t=0;t<i;t++){let e=H[t];if(e)try{e()}catch(s){setTimeout(()=>{throw s})}}H.splice(0,i),ni+=i}const sa={after(i){return{run(t){return window.setTimeout(t,i)},cancel(t){window.clearTimeout(t)}}},run(i,t){return window.setTimeout(i,t)},cancel(i){window.clearTimeout(i)}},ra={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},na={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},Ho={run(i){return Ye||(Ye=!0,ai.textContent=Fo++),H.push(i),Do++},cancel(i){const t=i-ni;if(t>=0){if(!H[t])throw new Error("invalid async handle: "+i);H[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Bo=Ho,li=v(i=>{class t extends i{static createProperties(s){const o=this.prototype;for(let r in s)r in o||o._createPropertyAccessor(r)}static attributeNameForProperty(s){return s.toLowerCase()}static typeForProperty(s){}_createPropertyAccessor(s,o){this._addPropertyToAttributeMap(s),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[s]||(this.__dataHasAccessor[s]=!0,this._definePropertyAccessor(s,o))}_addPropertyToAttributeMap(s){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let o=this.__dataAttributes[s];return o||(o=this.constructor.attributeNameForProperty(s),this.__dataAttributes[o]=s),o}_definePropertyAccessor(s,o){Object.defineProperty(this,s,{get(){return this.__data[s]},set:o?function(){}:function(r){this._setPendingProperty(s,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let s in this.__dataHasAccessor)this.hasOwnProperty(s)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[s]=this[s],delete this[s])}_initializeInstanceProperties(s){Object.assign(this,s)}_setProperty(s,o){this._setPendingProperty(s,o)&&this._invalidateProperties()}_getProperty(s){return this.__data[s]}_setPendingProperty(s,o,r){let n=this.__data[s],a=this._shouldPropertyChange(s,o,n);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(s in this.__dataOld)&&(this.__dataOld[s]=n),this.__data[s]=o,this.__dataPending[s]=o),a}_isPropertyPending(s){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(s))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Bo.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const s=this.__data,o=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(s,o,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(s,o,r)),this.__dataCounter--}_shouldPropertiesChange(s,o,r){return!!o}_propertiesChanged(s,o,r){}_shouldPropertyChange(s,o,r){return r!==o&&(r===r||o===o)}attributeChangedCallback(s,o,r,n){o!==r&&this._attributeToProperty(s,r),super.attributeChangedCallback&&super.attributeChangedCallback(s,o,r,n)}_attributeToProperty(s,o,r){if(!this.__serializing){const n=this.__dataAttributes,a=n&&n[s]||s;this[a]=this._deserializeValue(o,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(s,o,r){this.__serializing=!0,r=arguments.length<3?this[s]:r,this._valueToNodeAttribute(this,r,o||this.constructor.attributeNameForProperty(s)),this.__serializing=!1}_valueToNodeAttribute(s,o,r){const n=this._serializeValue(o);(r==="class"||r==="name"||r==="slot")&&(s=L(s)),n===void 0?s.removeAttribute(r):s.setAttribute(r,n===""&&window.trustedTypes?window.trustedTypes.emptyScript:n)}_serializeValue(s){switch(typeof s){case"boolean":return s?"":void 0;default:return s!=null?s.toString():void 0}}_deserializeValue(s,o){switch(o){case Boolean:return s!==null;case Number:return Number(s);default:return s}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const di={};let ue=HTMLElement.prototype;for(;ue;){let i=Object.getOwnPropertyNames(ue);for(let t=0;t<i.length;t++)di[i[t]]=!0;ue=Object.getPrototypeOf(ue)}const Vo=window.trustedTypes?i=>trustedTypes.isHTML(i)||trustedTypes.isScript(i)||trustedTypes.isScriptURL(i):()=>!1;function Uo(i,t){if(!di[t]){let e=i[t];e!==void 0&&(i.__data?i._setPendingProperty(t,e):(i.__dataProto?i.hasOwnProperty(JSCompiler_renameProperty("__dataProto",i))||(i.__dataProto=Object.create(i.__dataProto)):i.__dataProto={},i.__dataProto[t]=e))}}const qo=v(i=>{const t=li(i);class e extends t{static createPropertiesForAttributes(){let o=this.observedAttributes;for(let r=0;r<o.length;r++)this.prototype._createPropertyAccessor(ri(o[r]))}static attributeNameForProperty(o){return xe(o)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(o){for(let r in o)this._setProperty(r,o[r])}_ensureAttribute(o,r){const n=this;n.hasAttribute(o)||this._valueToNodeAttribute(n,r,o)}_serializeValue(o){switch(typeof o){case"object":if(o instanceof Date)return o.toString();if(o){if(Vo(o))return o;try{return JSON.stringify(o)}catch{return""}}default:return super._serializeValue(o)}}_deserializeValue(o,r){let n;switch(r){case Object:try{n=JSON.parse(o)}catch{n=o}break;case Array:try{n=JSON.parse(o)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${o}`)}break;case Date:n=isNaN(o)?String(o):Number(o),n=new Date(n);break;default:n=super._deserializeValue(o,r);break}return n}_definePropertyAccessor(o,r){Uo(this,o),super._definePropertyAccessor(o,r)}_hasAccessor(o){return this.__dataHasAccessor&&this.__dataHasAccessor[o]}_isPropertyPending(o){return!!(this.__dataPending&&o in this.__dataPending)}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const jo={"dom-if":!0,"dom-repeat":!0};let Tt=!1,St=!1;function Wo(){if(!Tt){Tt=!0;const i=document.createElement("textarea");i.placeholder="a",St=i.placeholder===i.textContent}return St}function Yo(i){Wo()&&i.localName==="textarea"&&i.placeholder&&i.placeholder===i.textContent&&(i.textContent=null)}const Go=(()=>{const i=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,e,s)=>{const o=e.getAttribute(s);if(i&&s.startsWith("on-")){t.setAttribute(s,i.createScript(o,s));return}t.setAttribute(s,o)}})();function Ko(i){let t=i.getAttribute("is");if(t&&jo[t]){let e=i;for(e.removeAttribute("is"),i=e.ownerDocument.createElement(t),e.parentNode.replaceChild(i,e),i.appendChild(e);e.attributes.length;){const{name:s}=e.attributes[0];Go(i,e,s),e.removeAttribute(s)}}return i}function ci(i,t){let e=t.parentInfo&&ci(i,t.parentInfo);if(e){for(let s=e.firstChild,o=0;s;s=s.nextSibling)if(t.parentIndex===o++)return s}else return i}function $o(i,t,e,s){s.id&&(t[s.id]=e)}function Jo(i,t,e){if(e.events&&e.events.length)for(let s=0,o=e.events,r;s<o.length&&(r=o[s]);s++)i._addMethodEventListenerToNode(t,r.name,r.value,i)}function Zo(i,t,e,s){e.templateInfo&&(t._templateInfo=e.templateInfo,t._parentTemplateInfo=s)}function Xo(i,t,e){return i=i._methodHost||i,function(o){i[e]?i[e](o,o.detail):console.warn("listener method `"+e+"` not defined")}}const Qo=v(i=>{class t extends i{static _parseTemplate(s,o){if(!s._templateInfo){let r=s._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!o,r.stripWhiteSpace=o&&o.stripWhiteSpace||s.hasAttribute&&s.hasAttribute("strip-whitespace"),this._parseTemplateContent(s,r,{parent:null})}return s._templateInfo}static _parseTemplateContent(s,o,r){return this._parseTemplateNode(s.content,o,r)}static _parseTemplateNode(s,o,r){let n=!1,a=s;return a.localName=="template"&&!a.hasAttribute("preserve-content")?n=this._parseTemplateNestedTemplate(a,o,r)||n:a.localName==="slot"&&(o.hasInsertionPoint=!0),Yo(a),a.firstChild&&this._parseTemplateChildNodes(a,o,r),a.hasAttributes&&a.hasAttributes()&&(n=this._parseTemplateNodeAttributes(a,o,r)||n),n||r.noted}static _parseTemplateChildNodes(s,o,r){if(!(s.localName==="script"||s.localName==="style"))for(let n=s.firstChild,a=0,l;n;n=l){if(n.localName=="template"&&(n=Ko(n)),l=n.nextSibling,n.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)n.textContent+=c.textContent,l=c.nextSibling,s.removeChild(c),c=l;if(o.stripWhiteSpace&&!n.textContent.trim()){s.removeChild(n);continue}}let d={parentIndex:a,parentInfo:r};this._parseTemplateNode(n,o,d)&&(d.infoIndex=o.nodeInfoList.push(d)-1),n.parentNode&&a++}}static _parseTemplateNestedTemplate(s,o,r){let n=s,a=this._parseTemplate(n,o);return(a.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(s,o,r){let n=!1,a=Array.from(s.attributes);for(let l=a.length-1,d;d=a[l];l--)n=this._parseTemplateNodeAttribute(s,o,r,d.name,d.value)||n;return n}static _parseTemplateNodeAttribute(s,o,r,n,a){return n.slice(0,3)==="on-"?(s.removeAttribute(n),r.events=r.events||[],r.events.push({name:n.slice(3),value:a}),!0):n==="id"?(r.id=a,!0):!1}static _contentForTemplate(s){let o=s._templateInfo;return o&&o.content||s.content}_stampTemplate(s,o){s&&!s.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(s),o=o||this.constructor._parseTemplate(s);let r=o.nodeInfoList,n=o.content||s.content,a=document.importNode(n,!0);a.__noInsertionPoint=!o.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let d=0,c=r.length,u;d<c&&(u=r[d]);d++){let h=l[d]=ci(a,u);$o(this,a.$,h,u),Zo(this,h,u,o),Jo(this,h,u)}return a=a,a}_addMethodEventListenerToNode(s,o,r,n){n=n||s;let a=Xo(n,o,r);return this._addEventListenerToNode(s,o,a),a}_addEventListenerToNode(s,o,r){s.addEventListener(o,r)}_removeEventListenerFromNode(s,o,r){s.removeEventListener(o,r)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let ie=0;const oe=[],_={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},ui="__computeInfo",es=/[A-Z]/;function Se(i,t,e){let s=i[t];if(!s)s=i[t]={};else if(!i.hasOwnProperty(t)&&(s=i[t]=Object.create(i[t]),e))for(let o in s){let r=s[o],n=s[o]=Array(r.length);for(let a=0;a<r.length;a++)n[a]=r[a]}return s}function ee(i,t,e,s,o,r){if(t){let n=!1;const a=ie++;for(let l in e){let d=o?D(l):l,c=t[d];if(c)for(let u=0,h=c.length,p;u<h&&(p=c[u]);u++)(!p.info||p.info.lastRun!==a)&&(!o||at(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(i,l,e,s,p.info,o,r),n=!0)}return n}return!1}function ts(i,t,e,s,o,r,n,a){let l=!1,d=n?D(s):s,c=t[d];if(c)for(let u=0,h=c.length,p;u<h&&(p=c[u]);u++)(!p.info||p.info.lastRun!==e)&&(!n||at(s,p.trigger))&&(p.info&&(p.info.lastRun=e),p.fn(i,s,o,r,p.info,n,a),l=!0);return l}function at(i,t){if(t){let e=t.name;return e==i||!!(t.structured&&Lo(e,i))||!!(t.wildcard&&ve(e,i))}else return!0}function Ot(i,t,e,s,o){let r=typeof o.method=="string"?i[o.method]:o.method,n=o.property;r?r.call(i,i.__data[n],s[n]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function is(i,t,e,s,o){let r=i[_.NOTIFY],n,a=ie++;for(let d in t)t[d]&&(r&&ts(i,r,a,d,e,s,o)||o&&os(i,d,e))&&(n=!0);let l;n&&(l=i.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function os(i,t,e){let s=D(t);if(s!==t){let o=xe(s)+"-changed";return hi(i,o,e[t],t),!0}return!1}function hi(i,t,e,s){let o={value:e,queueProperty:!0};s&&(o.path=s),L(i).dispatchEvent(new CustomEvent(t,{detail:o}))}function ss(i,t,e,s,o,r){let a=(r?D(t):t)!=t?t:null,l=a?A(i,a):i.__data[t];a&&l===void 0&&(l=e[t]),hi(i,o.eventName,l,a)}function rs(i,t,e,s,o){let r,n=i.detail,a=n&&n.path;a?(s=be(e,s,a),r=n&&n.value):r=i.currentTarget[e],r=o?!r:r,(!t[_.READ_ONLY]||!t[_.READ_ONLY][s])&&t._setPendingPropertyOrPath(s,r,!0,!!a)&&(!n||!n.queueProperty)&&t._invalidateProperties()}function ns(i,t,e,s,o){let r=i.__data[t];ge&&(r=ge(r,o.attrName,"attribute",i)),i._propertyToAttribute(t,o.attrName,r)}function as(i,t,e,s){let o=i[_.COMPUTE];if(o)if(Ao){ie++;const r=ds(i),n=[];for(let l in t)Nt(l,o,n,r,s);let a;for(;a=n.shift();)pi(i,"",t,e,a)&&Nt(a.methodInfo,o,n,r,s);Object.assign(e,i.__dataOld),Object.assign(t,i.__dataPending),i.__dataPending=null}else{let r=t;for(;ee(i,o,r,e,s);)Object.assign(e,i.__dataOld),Object.assign(t,i.__dataPending),r=i.__dataPending,i.__dataPending=null}}const ls=(i,t,e)=>{let s=0,o=t.length-1,r=-1;for(;s<=o;){const n=s+o>>1,a=e.get(t[n].methodInfo)-e.get(i.methodInfo);if(a<0)s=n+1;else if(a>0)o=n-1;else{r=n;break}}r<0&&(r=o+1),t.splice(r,0,i)},Nt=(i,t,e,s,o)=>{const r=o?D(i):i,n=t[r];if(n)for(let a=0;a<n.length;a++){const l=n[a];l.info.lastRun!==ie&&(!o||at(i,l.trigger))&&(l.info.lastRun=ie,ls(l.info,e,s))}};function ds(i){let t=i.constructor.__orderedComputedDeps;if(!t){t=new Map;const e=i[_.COMPUTE];let{counts:s,ready:o,total:r}=cs(i),n;for(;n=o.shift();){t.set(n,t.size);const a=e[n];a&&a.forEach(l=>{const d=l.info.methodInfo;--r,--s[d]===0&&o.push(d)})}r!==0&&console.warn(`Computed graph for ${i.localName} incomplete; circular?`),i.constructor.__orderedComputedDeps=t}return t}function cs(i){const t=i[ui],e={},s=i[_.COMPUTE],o=[];let r=0;for(let n in t){const a=t[n];r+=e[n]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let n in s)t[n]||o.push(n);return{counts:e,ready:o,total:r}}function pi(i,t,e,s,o){let r=Ge(i,t,e,s,o);if(r===oe)return!1;let n=o.methodInfo;return i.__dataHasAccessor&&i.__dataHasAccessor[n]?i._setPendingProperty(n,r,!0):(i[n]=r,!1)}function us(i,t,e){let s=i.__dataLinkedPaths;if(s){let o;for(let r in s){let n=s[r];ve(r,t)?(o=be(r,n,t),i._setPendingPropertyOrPath(o,e,!0,!0)):ve(n,t)&&(o=be(n,r,t),i._setPendingPropertyOrPath(o,e,!0,!0))}}}function Oe(i,t,e,s,o,r,n){e.bindings=e.bindings||[];let a={kind:s,target:o,parts:r,literal:n,isCompound:r.length!==1};if(e.bindings.push(a),ms(a)){let{event:d,negate:c}=a.parts[0];a.listenerEvent=d||xe(o)+"-changed",a.listenerNegate=c}let l=t.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let c=a.parts[d];c.compoundIndex=d,hs(i,t,a,c,l)}}function hs(i,t,e,s,o){if(!s.literal)if(e.kind==="attribute"&&e.target[0]==="-")console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let r=s.dependencies,n={index:o,binding:e,part:s,evaluator:i};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=_i(l),l.wildcard=!0),i._addTemplatePropertyEffect(t,l.rootProperty,{fn:ps,info:n,trigger:l})}}}function ps(i,t,e,s,o,r,n){let a=n[o.index],l=o.binding,d=o.part;if(r&&d.source&&t.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let c=e[t];t=be(d.source,l.target,t),a._setPendingPropertyOrPath(t,c,!1,!0)&&i._enqueueClient(a)}else{let c=o.evaluator._evaluateBinding(i,d,t,e,s,r);c!==oe&&fs(i,a,l,d,c)}}function fs(i,t,e,s,o){if(o=_s(t,o,e,s),ge&&(o=ge(o,e.target,e.kind,t)),e.kind=="attribute")i._valueToNodeAttribute(t,o,e.target);else{let r=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[_.READ_ONLY]||!t[_.READ_ONLY][r])&&t._setPendingProperty(r,o)&&i._enqueueClient(t):i._setUnmanagedPropertyToNode(t,r,o)}}function _s(i,t,e,s){if(e.isCompound){let o=i.__dataCompoundStorage[e.target];o[s.compoundIndex]=t,t=o.join("")}return e.kind!=="attribute"&&(e.target==="textContent"||e.target==="value"&&(i.localName==="input"||i.localName==="textarea"))&&(t=t??""),t}function ms(i){return!!i.target&&i.kind!="attribute"&&i.kind!="text"&&!i.isCompound&&i.parts[0].mode==="{"}function gs(i,t){let{nodeList:e,nodeInfoList:s}=t;if(s.length)for(let o=0;o<s.length;o++){let r=s[o],n=e[o],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];vs(n,d),bs(n,i,d)}n.__dataHost=i}}function vs(i,t){if(t.isCompound){let e=i.__dataCompoundStorage||(i.__dataCompoundStorage={}),s=t.parts,o=new Array(s.length);for(let n=0;n<s.length;n++)o[n]=s[n].literal;let r=t.target;e[r]=o,t.literal&&t.kind=="property"&&(r==="className"&&(i=L(i)),i[r]=t.literal)}}function bs(i,t,e){if(e.listenerEvent){let s=e.parts[0];i.addEventListener(e.listenerEvent,function(o){rs(o,t,e.target,s.source,s.negate)})}}function Mt(i,t,e,s,o,r){r=t.static||r&&(typeof r!="object"||r[t.methodName]);let n={methodName:t.methodName,args:t.args,methodInfo:o,dynamicFn:r};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||i._addPropertyEffect(l.rootProperty,e,{fn:s,info:n,trigger:l});return r&&i._addPropertyEffect(t.methodName,e,{fn:s,info:n}),n}function Ge(i,t,e,s,o){let r=i._methodHost||i,n=r[o.methodName];if(n){let a=i._marshalArgs(o.args,t,e);return a===oe?oe:n.apply(r,a)}else o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const ys=[],fi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",ws="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Cs="(?:'(?:[^'\\\\]|\\\\.)*')",As='(?:"(?:[^"\\\\]|\\\\.)*")',xs="(?:"+Cs+"|"+As+")",kt="(?:("+fi+"|"+ws+"|"+xs+")\\s*)",Es="(?:"+kt+"(?:,\\s*"+kt+")*)",Ps="(?:\\(\\s*(?:"+Es+"?)\\)\\s*)",Ts="("+fi+"\\s*"+Ps+"?)",Ss="(\\[\\[|{{)\\s*",Os="(?:]]|}})",Ns="(?:(!)\\s*)?",Ms=Ss+Ns+Ts+Os,Lt=new RegExp(Ms,"g");function zt(i){let t="";for(let e=0;e<i.length;e++){let s=i[e].literal;t+=s||""}return t}function Ne(i){let t=i.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let s={methodName:t[1],static:!0,args:ys};if(t[2].trim()){let o=t[2].replace(/\\,/g,"&comma;").split(",");return ks(o,s)}else return s}return null}function ks(i,t){return t.args=i.map(function(e){let s=_i(e);return s.literal||(t.static=!1),s},this),t}function _i(i){let t=i.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},s=t[0];switch(s==="-"&&(s=t[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0;break}return e.literal||(e.rootProperty=D(t),e.structured=We(t),e.structured&&(e.wildcard=t.slice(-2)==".*",e.wildcard&&(e.name=t.slice(0,-2)))),e}function It(i,t,e){let s=A(i,e);return s===void 0&&(s=t[e]),s}function mi(i,t,e,s){const o={indexSplices:s};je&&!i._overrideLegacyUndefined&&(t.splices=o),i.notifyPath(e+".splices",o),i.notifyPath(e+".length",t.length),je&&!i._overrideLegacyUndefined&&(o.indexSplices=[])}function Y(i,t,e,s,o,r){mi(i,t,e,[{index:s,addedCount:o,removed:r,object:t,type:"splice"}])}function Ls(i){return i[0].toUpperCase()+i.substring(1)}const zs=v(i=>{const t=Qo(qo(i));class e extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return _}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(G.length){let o=G[G.length-1];o._enqueueClient(this),this.__dataHost=o}}_initializeProtoProperties(o){this.__data=Object.create(o),this.__dataPending=Object.create(o),this.__dataOld={}}_initializeInstanceProperties(o){let r=this[_.READ_ONLY];for(let n in o)(!r||!r[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=o[n])}_addPropertyEffect(o,r,n){this._createPropertyAccessor(o,r==_.READ_ONLY);let a=Se(this,r,!0)[o];a||(a=this[r][o]=[]),a.push(n)}_removePropertyEffect(o,r,n){let a=Se(this,r,!0)[o],l=a.indexOf(n);l>=0&&a.splice(l,1)}_hasPropertyEffect(o,r){let n=this[r];return!!(n&&n[o])}_hasReadOnlyEffect(o){return this._hasPropertyEffect(o,_.READ_ONLY)}_hasNotifyEffect(o){return this._hasPropertyEffect(o,_.NOTIFY)}_hasReflectEffect(o){return this._hasPropertyEffect(o,_.REFLECT)}_hasComputedEffect(o){return this._hasPropertyEffect(o,_.COMPUTE)}_setPendingPropertyOrPath(o,r,n,a){if(a||D(Array.isArray(o)?o[0]:o)!==o){if(!a){let l=A(this,o);if(o=Pt(this,o,r),!o||!super._shouldPropertyChange(o,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(o,r,n))return us(this,o,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[o])return this._setPendingProperty(o,r,n);this[o]=r}return!1}_setUnmanagedPropertyToNode(o,r,n){(n!==o[r]||typeof n=="object")&&(r==="className"&&(o=L(o)),o[r]=n)}_setPendingProperty(o,r,n){let a=this.__dataHasPaths&&We(o),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(o,r,l[o])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),o in this.__dataOld||(this.__dataOld[o]=this.__data[o]),a?this.__dataTemp[o]=r:this.__data[o]=r,this.__dataPending[o]=r,(a||this[_.NOTIFY]&&this[_.NOTIFY][o])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[o]=n),!0):!1}_setProperty(o,r){this._setPendingProperty(o,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(o){this.__dataPendingClients=this.__dataPendingClients||[],o!==this&&this.__dataPendingClients.push(o)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let o=this.__dataPendingClients;if(o){this.__dataPendingClients=null;for(let r=0;r<o.length;r++){let n=o[r];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(o,r){for(let n in o)(r||!this[_.READ_ONLY]||!this[_.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,o[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(o,r,n){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;as(this,r,n,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,n,a),this._flushClients(),ee(this,this[_.REFLECT],r,n,a),ee(this,this[_.OBSERVE],r,n,a),l&&is(this,l,r,n,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(o,r,n){this[_.PROPAGATE]&&ee(this,this[_.PROPAGATE],o,r,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,o,r,n)}_runEffectsForTemplate(o,r,n,a){const l=(d,c)=>{ee(this,o.propertyEffects,d,n,c,o.nodeList);for(let u=o.firstChild;u;u=u.nextSibling)this._runEffectsForTemplate(u,d,n,c)};o.runEffects?o.runEffects(l,r,a):l(r,a)}linkPaths(o,r){o=Q(o),r=Q(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[o]=r}unlinkPaths(o){o=Q(o),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[o]}notifySplices(o,r){let n={path:""},a=A(this,o,n);mi(this,a,n.path,r)}get(o,r){return A(r||this,o)}set(o,r,n){n?Pt(n,o,r):(!this[_.READ_ONLY]||!this[_.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,r,!0)&&this._invalidateProperties()}push(o,...r){let n={path:""},a=A(this,o,n),l=a.length,d=a.push(...r);return r.length&&Y(this,a,n.path,l,r.length,[]),d}pop(o){let r={path:""},n=A(this,o,r),a=!!n.length,l=n.pop();return a&&Y(this,n,r.path,n.length,0,[l]),l}splice(o,r,n,...a){let l={path:""},d=A(this,o,l);r<0?r=d.length-Math.floor(-r):r&&(r=Math.floor(r));let c;return arguments.length===2?c=d.splice(r):c=d.splice(r,n,...a),(a.length||c.length)&&Y(this,d,l.path,r,a.length,c),c}shift(o){let r={path:""},n=A(this,o,r),a=!!n.length,l=n.shift();return a&&Y(this,n,r.path,0,0,[l]),l}unshift(o,...r){let n={path:""},a=A(this,o,n),l=a.unshift(...r);return r.length&&Y(this,a,n.path,0,r.length,[]),l}notifyPath(o,r){let n;if(arguments.length==1){let a={path:""};r=A(this,o,a),n=a.path}else Array.isArray(o)?n=Q(o):n=o;this._setPendingPropertyOrPath(n,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(o,r){this._addPropertyEffect(o,_.READ_ONLY),r&&(this["_set"+Ls(o)]=function(n){this._setProperty(o,n)})}_createPropertyObserver(o,r,n){let a={property:o,method:r,dynamicFn:!!n};this._addPropertyEffect(o,_.OBSERVE,{fn:Ot,info:a,trigger:{name:o}}),n&&this._addPropertyEffect(r,_.OBSERVE,{fn:Ot,info:a,trigger:{name:r}})}_createMethodObserver(o,r){let n=Ne(o);if(!n)throw new Error("Malformed observer expression '"+o+"'");Mt(this,n,_.OBSERVE,Ge,null,r)}_createNotifyingProperty(o){this._addPropertyEffect(o,_.NOTIFY,{fn:ss,info:{eventName:xe(o)+"-changed",property:o}})}_createReflectedProperty(o){let r=this.constructor.attributeNameForProperty(o);r[0]==="-"?console.warn("Property "+o+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(o,_.REFLECT,{fn:ns,info:{attrName:r}})}_createComputedProperty(o,r,n){let a=Ne(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=Mt(this,a,_.COMPUTE,pi,o,n);Se(this,ui)[o]=l}_marshalArgs(o,r,n){const a=this.__data,l=[];for(let d=0,c=o.length;d<c;d++){let{name:u,structured:h,wildcard:p,value:f,literal:w}=o[d];if(!w)if(p){const C=ve(u,r),b=It(a,n,C?r:u);f={path:C?r:u,value:b,base:C?A(a,u):b}}else f=h?It(a,n,u):a[u];if(je&&!this._overrideLegacyUndefined&&f===void 0&&o.length>1)return oe;l[d]=f}return l}static addPropertyEffect(o,r,n){this.prototype._addPropertyEffect(o,r,n)}static createPropertyObserver(o,r,n){this.prototype._createPropertyObserver(o,r,n)}static createMethodObserver(o,r){this.prototype._createMethodObserver(o,r)}static createNotifyingProperty(o){this.prototype._createNotifyingProperty(o)}static createReadOnlyProperty(o,r){this.prototype._createReadOnlyProperty(o,r)}static createReflectedProperty(o){this.prototype._createReflectedProperty(o)}static createComputedProperty(o,r,n){this.prototype._createComputedProperty(o,r,n)}static bindTemplate(o){return this.prototype._bindTemplate(o)}_bindTemplate(o,r){let n=this.constructor._parseTemplate(o),a=this.__preBoundTemplateInfo==n;if(!a)for(let l in n.propertyEffects)this._createPropertyAccessor(l);if(r)if(n=Object.create(n),n.wasPreBound=a,!this.__templateInfo)this.__templateInfo=n;else{const l=o._parentTemplateInfo||this.__templateInfo,d=l.lastChild;n.parent=l,l.lastChild=n,n.previousSibling=d,d?d.nextSibling=n:l.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(o,r,n){let a=o.hostProps=o.hostProps||{};a[r]=!0;let l=o.propertyEffects=o.propertyEffects||{};(l[r]=l[r]||[]).push(n)}_stampTemplate(o,r){r=r||this._bindTemplate(o,!0),G.push(this);let n=super._stampTemplate(o,r);if(G.pop(),r.nodeList=n.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=n.firstChild;l;l=l.nextSibling)a.push(l)}return n.templateInfo=r,gs(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(o){const r=o.templateInfo,{previousSibling:n,nextSibling:a,parent:l}=r;n?n.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=n:l&&(l.lastChild=n),r.nextSibling=r.previousSibling=null;let d=r.childNodes;for(let c=0;c<d.length;c++){let u=d[c];L(L(u).parentNode).removeChild(u)}}static _parseTemplateNode(o,r,n){let a=t._parseTemplateNode.call(this,o,r,n);if(o.nodeType===Node.TEXT_NODE){let l=this._parseBindings(o.textContent,r);l&&(o.textContent=zt(l)||" ",Oe(this,r,n,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(o,r,n,a,l){let d=this._parseBindings(l,r);if(d){let c=a,u="property";es.test(a)?u="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),u="attribute");let h=zt(d);return h&&u=="attribute"&&(a=="class"&&o.hasAttribute("class")&&(h+=" "+o.getAttribute(a)),o.setAttribute(a,h)),u=="attribute"&&c=="disable-upgrade$"&&o.setAttribute(a,""),o.localName==="input"&&c==="value"&&o.setAttribute(c,""),o.removeAttribute(c),u==="property"&&(a=ri(a)),Oe(this,r,n,u,a,d,h),!0}else return t._parseTemplateNodeAttribute.call(this,o,r,n,a,l)}static _parseTemplateNestedTemplate(o,r,n){let a=t._parseTemplateNestedTemplate.call(this,o,r,n);const l=o.parentNode,d=n.templateInfo,c=l.localName==="dom-if",u=l.localName==="dom-repeat";wt&&(c||u)&&(l.removeChild(o),n=n.parentInfo,n.templateInfo=d,n.noted=!0,a=!1);let h=d.hostProps;if(xo&&c)h&&(r.hostProps=Object.assign(r.hostProps||{},h),wt||(n.parentInfo.noted=!0));else{let p="{";for(let f in h){let w=[{mode:p,source:f,dependencies:[f],hostProp:!0}];Oe(this,r,n,"property","_host_"+f,w)}}return a}static _parseBindings(o,r){let n=[],a=0,l;for(;(l=Lt.exec(o))!==null;){l.index>a&&n.push({literal:o.slice(a,l.index)});let d=l[1][0],c=!!l[2],u=l[3].trim(),h=!1,p="",f=-1;d=="{"&&(f=u.indexOf("::"))>0&&(p=u.substring(f+2),u=u.substring(0,f),h=!0);let w=Ne(u),C=[];if(w){let{args:b,methodName:y}=w;for(let Te=0;Te<b.length;Te++){let yt=b[Te];yt.literal||C.push(yt)}let F=r.dynamicFns;(F&&F[y]||w.static)&&(C.push(y),w.dynamicFn=!0)}else C.push(u);n.push({source:u,mode:d,negate:c,customEvent:h,signature:w,dependencies:C,event:p}),a=Lt.lastIndex}if(a&&a<o.length){let d=o.substring(a);d&&n.push({literal:d})}return n.length?n:null}static _evaluateBinding(o,r,n,a,l,d){let c;return r.signature?c=Ge(o,n,a,l,r.signature):n!=r.source?c=A(o,r.source):d&&We(n)?c=A(o,n):c=o.__data[n],r.negate&&(c=!c),c}}return e}),G=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Is(i){const t={};for(let e in i){const s=i[e];t[e]=typeof s=="function"?{type:s}:s}return t}const Ds=v(i=>{const t=li(i);function e(r){const n=Object.getPrototypeOf(r);return n.prototype instanceof o?n:null}function s(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let n=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(n=Is(a))}r.__ownProperties=n}return r.__ownProperties}class o extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const n=this._properties;this.__observedAttributes=n?Object.keys(n).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const n=e(this);n&&n.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const n=s(this);n&&this.createProperties(n)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const n=e(this);this.__properties=Object.assign({},n&&n._properties,s(this))}return this.__properties}static typeForProperty(n){const a=this._properties[n];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Fs="3.5.2",Dt=window.ShadyCSS&&window.ShadyCSS.cssBuild,Rs=v(i=>{const t=Ds(zs(i));function e(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let c in d){let u=d[c];"value"in u&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=u)}}return l.__propertyDefaults}function s(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function o(l,d,c,u){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,c.computed,u)),c.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):c.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),c.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):c.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),c.observer&&l._createPropertyObserver(d,c.observer,u[c.observer]),l._addPropertyToAttributeMap(d)}function r(l,d,c,u){if(!Dt){const h=d.content.querySelectorAll("style"),p=nt(d),f=ko(c),w=d.content.firstElementChild;for(let b=0;b<f.length;b++){let y=f[b];y.textContent=l._processStyleText(y.textContent,u),d.content.insertBefore(y,w)}let C=0;for(let b=0;b<p.length;b++){let y=p[b],F=h[C];F!==y?(y=y.cloneNode(!0),F.parentNode.insertBefore(y,F)):C++,y.textContent=l._processStyleText(y.textContent,u)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,c),Eo&&Dt&&go){const h=d.content.querySelectorAll("style");if(h){let p="";Array.from(h).forEach(f=>{p+=f.textContent,f.parentNode.removeChild(f)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function n(l){let d=null;if(l&&(!qe||bo)&&(d=q.import(l,"template"),qe&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends t{static get polymerElementVersion(){return Fs}static _finalizeClass(){t._finalizeClass.call(this);const d=s(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):yo||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let c in d)o(this.prototype,c,d[c],d)}static createObservers(d,c){const u=this.prototype;for(let h=0;h<d.length;h++)u._createMethodObserver(d[h],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&n(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=st(d.url);else{const c=q.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=vo,this.importPath=this.constructor.importPath;let d=e(this.constructor);if(d)for(let c in d){let u=d[c];if(this._canApplyPropertyDefault(c)){let h=typeof u.value=="function"?u.value.call(this):u.value;this._hasAccessor(c)?this._setPendingProperty(c,h,!0):this[c]=h}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,c){return ot(d,c)}static _finalizeTemplate(d){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const u=this.importPath,h=u?te(u):"";r(this,c,d,h),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const c=L(this);if(c.attachShadow)return d?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:d}),c.shadowRoot.appendChild(d),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Co&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,c){return!c&&this.importPath&&(c=te(this.importPath)),te(d,c)}static _parseTemplateContent(d,c,u){return c.dynamicFns=c.dynamicFns||this._properties,t._parseTemplateContent.call(this,d,c,u)}static _addTemplatePropertyEffect(d,c,u){return wo&&!(c in this._properties)&&!(u.info.part.signature&&u.info.part.signature.static)&&!u.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,d,c,u)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ft=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:i=>i});class gi{constructor(t,e){bi(t,e);const s=e.reduce((o,r,n)=>o+vi(r)+t[n+1],t[0]);this.value=s.toString()}toString(){return this.value}}function vi(i){if(i instanceof gi)return i.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${i}`)}function Hs(i){if(i instanceof HTMLTemplateElement)return i.innerHTML;if(i instanceof gi)return vi(i);throw new Error(`non-template value passed to Polymer's html function: ${i}`)}const P=function(t,...e){bi(t,e);const s=document.createElement("template");let o=e.reduce((r,n,a)=>r+Hs(n)+t[a+1],t[0]);return Ft&&(o=Ft.createHTML(o)),s.innerHTML=o,s},bi=(i,t)=>{if(!Array.isArray(i)||!Array.isArray(i.raw)||t.length!==i.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const O=Rs(HTMLElement);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const T=[];function Ke(i,t,e=i.getAttribute("dir")){t?i.setAttribute("dir",t):e!=null&&i.removeAttribute("dir")}function $e(){return document.documentElement.getAttribute("dir")}function Bs(){const i=$e();T.forEach(t=>{Ke(t,i)})}const Vs=new MutationObserver(Bs);Vs.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const lt=i=>class extends i{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),Ke(this,$e(),null))}attributeChangedCallback(e,s,o){if(super.attributeChangedCallback(e,s,o),e!=="dir")return;const r=$e(),n=o===r&&T.indexOf(this)===-1,a=!o&&s&&T.indexOf(this)===-1;n||a?(this.__subscribe(),Ke(this,r,o)):o!==r&&s===r&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=T.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,s,o){o==="dir"&&s===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,s,o)}_attributeToProperty(e,s,o){e==="dir"&&!s?this.dir="":super._attributeToProperty(e,s,o)}__subscribe(){T.includes(this)||T.push(this)}__unsubscribe(){T.includes(this)&&T.splice(T.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Us=m`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
    inset: 0;
    bottom: var(--vaadin-overlay-viewport-bottom);

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 0;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])),
  :host(:not([opened]):not([closing])) [part='overlay'] {
    display: none !important;
  }

  [part='overlay'] {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    pointer-events: auto;

    /* Prevent overflowing the host */
    max-width: 100%;
    box-sizing: border-box;

    -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
  }

  [part='backdrop'] {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    pointer-events: auto;
  }
`;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let we=!1,yi=[],wi=[];function Ci(){we=!0,requestAnimationFrame(function(){we=!1,qs(yi),setTimeout(function(){js(wi)})})}function qs(i){for(;i.length;)Ai(i.shift())}function js(i){for(let t=0,e=i.length;t<e;t++)Ai(i.shift())}function Ai(i){const t=i[0],e=i[1],s=i[2];try{e.apply(t,s)}catch(o){setTimeout(()=>{throw o})}}function la(i,t,e){we||Ci(),yi.push([i,t,e])}function Ws(i,t,e){we||Ci(),wi.push([i,t,e])}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ee=i=>i.test(navigator.userAgent),Je=i=>i.test(navigator.platform),Ys=i=>i.test(navigator.vendor),da=Ee(/Android/u),ca=Ee(/Chrome/u)&&Ys(/Google Inc/u),ua=Ee(/Firefox/u),Gs=Je(/^iPad/u)||Je(/^Mac/u)&&navigator.maxTouchPoints>1,Ks=Je(/^iPhone/u),$s=Ks||Gs,ha=Ee(/^((?!chrome|android).)*safari/iu),Js=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let R=new WeakMap,he=new WeakMap,pe={},Me=0;const Rt=i=>i&&i.nodeType===Node.ELEMENT_NODE,ke=(...i)=>{console.error(`Error: ${i.join(" ")}. Skip setting aria-hidden.`)},Zs=(i,t)=>Rt(i)?t.map(e=>{if(!Rt(e))return ke(e,"is not a valid element"),null;let s=e;for(;s&&s!==i;){if(i.contains(s))return e;s=s.getRootNode().host}return ke(e,"is not contained inside",i),null}).filter(e=>!!e):(ke(i,"is not a valid element"),[]),Xs=(i,t,e,s)=>{const o=Zs(t,Array.isArray(i)?i:[i]);pe[e]||(pe[e]=new WeakMap);const r=pe[e],n=[],a=new Set,l=new Set(o),d=u=>{if(!u||a.has(u))return;a.add(u);const h=u.assignedSlot;h&&d(h),d(u.parentNode||u.host)};o.forEach(d);const c=u=>{if(!u||l.has(u))return;const h=u.shadowRoot;(h?[...u.children,...h.children]:[...u.children]).forEach(f=>{if(!["template","script","style"].includes(f.localName))if(a.has(f))c(f);else{const w=f.getAttribute(s),C=w!==null&&w!=="false",b=(R.get(f)||0)+1,y=(r.get(f)||0)+1;R.set(f,b),r.set(f,y),n.push(f),b===1&&C&&he.set(f,!0),y===1&&f.setAttribute(e,"true"),C||f.setAttribute(s,"true")}})};return c(t),a.clear(),Me+=1,()=>{n.forEach(u=>{const h=R.get(u)-1,p=r.get(u)-1;R.set(u,h),r.set(u,p),h||(he.has(u)?he.delete(u):u.removeAttribute(s)),p||u.removeAttribute(e)}),Me-=1,Me||(R=new WeakMap,R=new WeakMap,he=new WeakMap,pe={})}},Qs=(i,t=document.body,e="data-aria-hidden")=>{const s=Array.from(Array.isArray(i)?i:[i]);return t&&s.push(...Array.from(t.querySelectorAll("[aria-live]"))),Xs(s,t,e,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class er{constructor(t,e){this.host=t,this.callback=typeof e=="function"?e:()=>t}showModal(){const t=this.callback();this.__showOthers=Qs(t)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let dt=!1;window.addEventListener("keydown",()=>{dt=!0},{capture:!0});window.addEventListener("mousedown",()=>{dt=!1},{capture:!0});function Ze(){let i=document.activeElement||document.body;for(;i.shadowRoot&&i.shadowRoot.activeElement;)i=i.shadowRoot.activeElement;return i}function xi(){return dt}function Ei(i){const t=i.style;if(t.visibility==="hidden"||t.display==="none")return!0;const e=window.getComputedStyle(i);return e.visibility==="hidden"||e.display==="none"}function tr(i,t){const e=Math.max(i.tabIndex,0),s=Math.max(t.tabIndex,0);return e===0||s===0?s>e:e>s}function ir(i,t){const e=[];for(;i.length>0&&t.length>0;)tr(i[0],t[0])?e.push(t.shift()):e.push(i.shift());return e.concat(i,t)}function Xe(i){const t=i.length;if(t<2)return i;const e=Math.ceil(t/2),s=Xe(i.slice(0,e)),o=Xe(i.slice(e));return ir(s,o)}function pa(i){return i.offsetParent===null&&i.clientWidth===0&&i.clientHeight===0?!0:Ei(i)}function or(i){return i.matches('[tabindex="-1"]')?!1:i.matches("input, select, textarea, button, object")?i.matches(":not([disabled])"):i.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function sr(i){return i.getRootNode().activeElement===i}function rr(i){if(!or(i))return-1;const t=i.getAttribute("tabindex")||0;return Number(t)}function Pi(i,t){if(i.nodeType!==Node.ELEMENT_NODE||Ei(i))return!1;const e=i,s=rr(e);let o=s>0;s>=0&&t.push(e);let r=[];return e.localName==="slot"?r=e.assignedNodes({flatten:!0}):r=(e.shadowRoot||e).children,[...r].forEach(n=>{o=Pi(n,t)||o}),o}function nr(i){const t=[];return Pi(i,t)?Xe(t):t}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ar{saveFocus(t){this.focusNode=t||Ze()}restoreFocus(){const t=this.focusNode;t&&(Ze()===document.body?setTimeout(()=>t.focus()):t.focus(),this.focusNode=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Le=[];class lr{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return nr(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(sr).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");Le.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,Le.pop()}__onKeyDown(t){if(this.__trapNode&&this===Array.from(Le).pop()&&t.key==="Tab"){t.preventDefault();const e=t.shiftKey;this.__focusNextElement(e)}}__focusNextElement(t=!1){const e=this.__focusableElements,s=t?-1:1,o=this.__focusedElementIndex,r=(e.length+o+s)%e.length,n=e[r];n.focus(),n.localName==="input"&&n.select()}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const re=v(i=>typeof i.prototype.addController=="function"?i:class extends i{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dr=i=>class extends re(i){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new er(this),this.__focusTrapController=new lr(this),this.__focusRestorationController=new ar}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()&&this.__focusRestorationController.restoreFocus()}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const e=Ze();return e===document.body||this._deepContains(e)}_deepContains(e){if(this.contains(e))return!0;let s=e;const o=e.ownerDocument;for(;s&&s!==o&&s!==this;)s=s.parentNode||s.host;return s===this}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _e=()=>Array.from(document.body.children).filter(i=>i instanceof HTMLElement&&i._hasOverlayStackMixin&&!i.hasAttribute("closing")).sort((i,t)=>i.__zIndex-t.__zIndex||0),cr=i=>i===_e().pop(),ur=i=>class extends i{constructor(){super(),this._hasOverlayStackMixin=!0}get _last(){return cr(this)}bringToFront(){let e="";const s=_e().filter(o=>o!==this).pop();s&&(e=s.__zIndex+1),this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),_e().forEach(e=>{e!==this&&(e.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=_e();let s;for(;(s=e.pop())&&!(s!==this&&(s.$.overlay.style.removeProperty("pointer-events"),!s.modeless)););}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hr=i=>class extends dr(ur(i)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:{type:Object},model:{type:Object},renderer:{type:Object},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),$s&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}close(e){const s=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(s),s.defaultPrevented||(this.opened=!1)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,o=window.innerWidth>e,r=document.documentElement.clientHeight;o&&r>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${r-e}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_rendererOrDataChanged(e,s,o,r){const n=this._oldOwner!==s||this._oldModel!==o;this._oldModel=o,this._oldOwner=s;const a=this._oldRenderer!==e,l=this._oldRenderer!==void 0;this._oldRenderer=e;const d=this._oldOpened!==r;this._oldOpened=r,a&&l&&(this.innerHTML="",delete this._$litPart$),r&&e&&(a||d||n)&&this.requestContentUpdate()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_openedChanged(e,s){e?(this._saveFocus(),this._animatedOpening(),Ws(this,()=>{this._trapFocus();const o=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(o)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):s&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this),s=e.getPropertyValue("animation-name");return!(e.getPropertyValue("display")==="none")&&s&&s!=="none"}_enqueueAnimation(e,s){const o=`__${e}Handler`,r=n=>{n&&n.target!==this||(s(),this.removeEventListener("animationend",r),delete this[o])};this[o]=r,this.addEventListener("animationend",r)}_flushAnimation(e){const s=`__${e}Handler`;typeof this[s]=="function"&&this[s]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(e){return this._last}_outsideClickListener(e){if(e.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(e))return;const s=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(s),this.opened&&!s.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last&&!(this.modeless&&!e.composedPath().includes(this.$.overlay))&&e.key==="Escape"){const s=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(s),this.opened&&!s.defaultPrevented&&this.close(e)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function pr(i){const t=[];for(;i;){if(i.nodeType===Node.DOCUMENT_NODE){t.push(i);break}if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){t.push(i),i=i.host;continue}if(i.assignedSlot){i=i.assignedSlot;continue}i=i.parentNode}return t}function fr(i){const t=[];let e;return i.localName==="slot"?e=i.assignedElements():(t.push(i),e=[...i.children]),e.forEach(s=>t.push(...fr(s))),t}function _r(i,t){return t?t.closest(i)||_r(i,t.getRootNode().host):null}function ct(i){return i?new Set(i.split(" ")):new Set}function Pe(i){return i?[...i].join(" "):""}function ut(i,t,e){const s=ct(i.getAttribute(t));s.add(e),i.setAttribute(t,Pe(s))}function Ti(i,t,e){const s=ct(i.getAttribute(t));if(s.delete(e),s.size===0){i.removeAttribute(t);return}i.setAttribute(t,Pe(s))}function mr(i){return i.nodeType===Node.TEXT_NODE&&i.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ze={start:"top",end:"bottom"},Ie={start:"left",end:"right"},Ht=new ResizeObserver(i=>{setTimeout(()=>{i.forEach(t=>{t.target.__overlay&&t.target.__overlay._updatePosition()})})}),gr=i=>class extends i{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.visualViewport.addEventListener("resize",this._updatePosition),window.visualViewport.addEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes=pr(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.visualViewport.removeEventListener("resize",this._updatePosition),window.visualViewport.removeEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,s){if(this.__removeUpdatePositionEventListeners(),s&&(s.__overlay=null,Ht.unobserve(s),e&&(this.__addUpdatePositionEventListeners(),s.__overlay=this,Ht.observe(s))),e){const o=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(r=>{this.__margins[r]=parseInt(o[r],10)})),this.setAttribute("dir",o.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){e.target instanceof Node&&this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),s=this.__shouldAlignStartVertically(e);this.style.justifyContent=s?"flex-start":"flex-end";const o=this.__isRTL,r=this.__shouldAlignStartHorizontally(e,o),n=!o&&r||o&&!r;this.style.alignItems=n?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,a,this.noVerticalOverlap,ze,this,s),d=this.__calculatePositionInOneDimension(e,a,this.noHorizontalOverlap,Ie,this,r);Object.assign(this.style,l,d),this.toggleAttribute("bottom-aligned",!s),this.toggleAttribute("top-aligned",s),this.toggleAttribute("end-aligned",!n),this.toggleAttribute("start-aligned",n)}__shouldAlignStartHorizontally(e,s){const o=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const r=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!s&&this.horizontalAlign==="start"||s&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,o,r,this.__margins,n,this.noHorizontalOverlap,Ie)}__shouldAlignStartVertically(e){const s=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const o=Math.min(window.innerHeight,document.documentElement.clientHeight),r=this.verticalAlign==="top";return this.__shouldAlignStart(e,s,o,this.__margins,r,this.noVerticalOverlap,ze)}__shouldAlignStart(e,s,o,r,n,a,l){const d=o-e[a?l.end:l.start]-r[l.end],c=e[a?l.start:l.end]-r[l.start],u=n?d:c,p=u>(n?c:d)||u>s;return n===p}__adjustBottomProperty(e,s,o){let r;if(e===s.end){if(s.end===ze.end){const n=Math.min(window.innerHeight,document.documentElement.clientHeight);if(o>n&&this.__oldViewportHeight){const a=this.__oldViewportHeight-n;r=o-a}this.__oldViewportHeight=n}if(s.end===Ie.end){const n=Math.min(window.innerWidth,document.documentElement.clientWidth);if(o>n&&this.__oldViewportWidth){const a=this.__oldViewportWidth-n;r=o-a}this.__oldViewportWidth=n}}return r}__calculatePositionInOneDimension(e,s,o,r,n,a){const l=a?r.start:r.end,d=a?r.end:r.start,c=parseFloat(n.style[l]||getComputedStyle(n)[l]),u=this.__adjustBottomProperty(l,r,c),h=s[a?r.start:r.end]-e[o===a?r.end:r.start],p=u?`${u}px`:`${c+h*(a?-1:1)}px`;return{[l]:p,[d]:""}}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vr=i=>class extends gr(hr(i)){static get properties(){return{position:{type:String,reflectToAttribute:!0}}}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const e=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(s=>{this.style.setProperty(`--vaadin-tooltip-offset-${s}`,e.getPropertyValue(`--vaadin-tooltip-offset-${s}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const e=this.positionTarget.getBoundingClientRect(),s=this.$.overlay.getBoundingClientRect(),o=e.width/2-s.width/2;if(this.style.left){const r=s.left+o;r>0&&(this.style.left=`${r}px`)}if(this.style.right){const r=parseFloat(this.style.right)+o;r>0&&(this.style.right=`${r}px`)}}if(this.position==="start"||this.position==="end"){const e=this.positionTarget.getBoundingClientRect(),s=this.$.overlay.getBoundingClientRect(),o=e.height/2-s.height/2;this.style.top=`${s.top+o}px`}}}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const br=m`
  :host {
    z-index: 1100;
  }

  [part='overlay'] {
    max-width: 40ch;
  }

  :host([position^='top'][top-aligned]) [part='overlay'],
  :host([position^='bottom'][top-aligned]) [part='overlay'] {
    margin-top: var(--vaadin-tooltip-offset-top, 0);
  }

  :host([position^='top'][bottom-aligned]) [part='overlay'],
  :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
    margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
  }

  :host([position^='start'][start-aligned]) [part='overlay'],
  :host([position^='end'][start-aligned]) [part='overlay'] {
    margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
  }

  :host([position^='start'][end-aligned]) [part='overlay'],
  :host([position^='end'][end-aligned]) [part='overlay'] {
    margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 1px dashed;
    }
  }
`;/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */g("vaadin-tooltip-overlay",[Us,br],{moduleId:"vaadin-tooltip-overlay-styles"});class yr extends vr(lt(I(O))){static get is(){return"vaadin-tooltip-overlay"}static get template(){return P`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}}E(yr);const wr=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,me=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Cr(){function i(){return!0}return Si(i)}function Ar(){try{return xr()?!0:Er()?me?!Pr():!Cr():!1}catch{return!1}}function xr(){return localStorage.getItem("vaadin.developmentmode.force")}function Er(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Pr(){return!!(me&&Object.keys(me).map(t=>me[t]).filter(t=>t.productionMode).length>0)}function Si(i,t){if(typeof i!="function")return;const e=wr.exec(i.toString());if(e)try{i=new Function(e[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return i(t)}window.Vaadin=window.Vaadin||{};const Bt=function(i,t){if(window.Vaadin.developmentMode)return Si(i,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Ar());function Tr(){}const Sr=function(){if(typeof Bt=="function")return Bt(Tr)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let Vt=0,Oi=0;const B=[];let Qe=!1;function Or(){Qe=!1;const i=B.length;for(let t=0;t<i;t++){const e=B[t];if(e)try{e()}catch(s){setTimeout(()=>{throw s})}}B.splice(0,i),Oi+=i}const Nr={after(i){return{run(t){return window.setTimeout(t,i)},cancel(t){window.clearTimeout(t)}}},run(i,t){return window.setTimeout(i,t)},cancel(i){window.clearTimeout(i)}},ya={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},Mr={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},Ni={run(i){Qe||(Qe=!0,queueMicrotask(()=>Or())),B.push(i);const t=Vt;return Vt+=1,t},cancel(i){const t=i-Oi;if(t>=0){if(!B[t])throw new Error(`invalid async handle: ${i}`);B[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const se=new Set;class j{static debounce(t,e,s){return t instanceof j?t._cancelAsync():t=new j,t.setConfig(e,s),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,se.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),se.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function kr(i){se.add(i)}function Lr(){const i=!!se.size;return se.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),i}const wa=()=>{let i;do i=Lr();while(i)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Sr()};let De;const Ut=new Set,W=i=>class extends lt(i){static finalize(){super.finalize();const{is:e}=this;e&&!Ut.has(e)&&(window.Vaadin.registrations.push(this),Ut.add(e),window.Vaadin.developmentModeCallback&&(De=j.debounce(De,Mr,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),kr(De)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zr=i=>class extends i{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(e,s){if(!s||e===void 0)return;const{classList:o}=s;if(this.__initialClasses||(this.__initialClasses=new Set(o)),Array.isArray(this.__previousClasses)){const n=this.__previousClasses.filter(a=>!this.__initialClasses.has(a));n.length>0&&o.remove(...n)}const r=typeof e=="string"?e.split(" ").filter(Boolean):[];r.length>0&&o.add(...r),this.__previousClasses=r}};/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ir{constructor(t,e){this.slot=t,this.callback=e,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const t=this.slot.assignedNodes({flatten:!0});let e=[];const s=[],o=[];t.length&&(e=t.filter(r=>!this._storedNodes.includes(r))),this._storedNodes.length&&this._storedNodes.forEach((r,n)=>{const a=t.indexOf(r);a===-1?s.push(r):a!==n&&o.push(r)}),(e.length||s.length||o.length)&&this.callback({addedNodes:e,movedNodes:o,removedNodes:s}),this._storedNodes=t}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Dr=0;function Mi(){return Dr++}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ne extends EventTarget{static generateId(t,e){return`${e||"default"}-${t.localName}-${Mi()}`}constructor(t,e,s,o={}){super();const{initializer:r,multiple:n,observe:a,useUniqueId:l}=o;this.host=t,this.slotName=e,this.tagName=s,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof n=="boolean"?n:!1,this.slotInitializer=r,n&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(t,e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(t.length===0){const e=this.attachDefaultNode();e&&(this.nodes=[e],this.initNode(e))}else this.nodes=t,t.forEach(e=>{this.initAddedNode(e)})}attachDefaultNode(){const{host:t,slotName:e,tagName:s}=this;let o=this.defaultNode;return!o&&s&&(o=document.createElement(s),o instanceof Element&&(e!==""&&o.setAttribute("slot",e),this.node=o,this.defaultNode=o)),o&&t.appendChild(o),o}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&t==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:e}=this;e&&e(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,e=t===""?"slot:not([name])":`slot[name=${t}]`,s=this.host.shadowRoot.querySelector(e);this.__slotObserver=new Ir(s,({addedNodes:o,removedNodes:r})=>{const n=this.multiple?this.nodes:[this.node],a=o.filter(l=>!mr(l)&&!n.includes(l));r.length&&(this.nodes=n.filter(l=>!r.includes(l)),r.forEach(l=>{this.teardownNode(l)})),a&&a.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...n,...a].filter(l=>l!==this.defaultNode),a.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const V=500;let ki=V,Li=V,zi=V;const K=new Set;let $=!1,J=null,Z=null;class Fr{constructor(t){this.host=t}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const t=this.host;return t.focusDelay!=null&&t.focusDelay>0?t.focusDelay:ki}get hoverDelay(){const t=this.host;return t.hoverDelay!=null&&t.hoverDelay>0?t.hoverDelay:Li}get hideDelay(){const t=this.host;return t.hideDelay!=null&&t.hideDelay>0?t.hideDelay:zi}get isClosing(){return K.has(this.host)}open(t={immediate:!1}){const{immediate:e,hover:s,focus:o}=t,r=s&&this.hoverDelay>0,n=o&&this.focusDelay>0;!e&&(r||n)&&!this.__closeTimeout?this.__warmupTooltip(n):this.__showTooltip()}close(t){!t&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),$&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(t){this.host[this.openedProp]=t}__flushClosingTooltips(){K.forEach(t=>{t._stateController.close(!0),K.delete(t)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),$=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(t){this._isOpened()||($?this.__showTooltip():this.__scheduleWarmUp(t))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){Z&&(clearTimeout(Z),Z=null)}__abortWarmUp(){J&&(clearTimeout(J),J=null)}__scheduleClose(){this._isOpened()&&(K.add(this.host),this.__closeTimeout=setTimeout(()=>{K.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){Z=setTimeout(()=>{Z=null,$=!1},this.hideDelay)}__scheduleWarmUp(t){const e=t?this.focusDelay:this.hoverDelay;J=setTimeout(()=>{J=null,$=!0,this.__showTooltip()},e)}}const Rr=i=>class extends zr(i){static get properties(){return{ariaTarget:{type:Object},context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},generator:{type:Object},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1,sync:!0},opened:{type:Boolean,value:!1,sync:!0},position:{type:String},shouldShow:{type:Object,value:()=>(e,s)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged",sync:!0},_effectiveAriaTarget:{type:Object,computed:"__computeAriaTarget(ariaTarget, target)",observer:"__effectiveAriaTargetChanged"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean,sync:!0},_position:{type:String,value:"bottom"},_srLabel:{type:Object},_overlayContent:{type:String}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)","__updateSrLabelText(_srLabel, _overlayContent)"]}static setDefaultFocusDelay(e){ki=e!=null&&e>=0?e:V}static setDefaultHideDelay(e){zi=e!=null&&e>=0?e:V}static setDefaultHoverDelay(e){Li=e!=null&&e>=0?e:V}constructor(){super(),this._uniqueId=`vaadin-tooltip-${Mi()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(e=>{e.forEach(s=>this.__onTargetVisibilityChange(s.isIntersecting))},{threshold:0}),this._stateController=new Fr(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}ready(){super.ready(),this._srLabelController=new ne(this,"sr-label","div",{initializer:e=>{e.id=this._uniqueId,e.setAttribute("role","tooltip"),this._srLabel=e}}),this.addController(this._srLabelController)}__computeHorizontalAlign(e){return["top-end","bottom-end","start-top","start","start-bottom"].includes(e)?"end":"start"}__computeNoHorizontalOverlap(e){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(e)}__computeNoVerticalOverlap(e){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(e)}__computeVerticalAlign(e){return["top-start","top-end","top","start-bottom","end-bottom"].includes(e)?"bottom":"top"}__computeOpened(e,s,o,r){return r&&(e?s:o)}__computePosition(e,s){return e||s}__autoOpenedChanged(e,s){e?document.addEventListener("keydown",this.__onKeyDown,!0):s&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(e){e&&(this.__setTargetByIdDebouncer=j.debounce(this.__setTargetByIdDebouncer,Ni,()=>this.__setTargetById(e)))}__setTargetById(e){if(!this.isConnected)return;const s=this.getRootNode().getElementById(e);s?this.target=s:console.warn(`No element with id="${e}" found to show tooltip.`)}__targetChanged(e,s){s&&(s.removeEventListener("mouseenter",this.__onMouseEnter),s.removeEventListener("mouseleave",this.__onMouseLeave),s.removeEventListener("focusin",this.__onFocusin),s.removeEventListener("focusout",this.__onFocusout),s.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(s)),e&&(e.addEventListener("mouseenter",this.__onMouseEnter),e.addEventListener("mouseleave",this.__onMouseLeave),e.addEventListener("focusin",this.__onFocusin),e.addEventListener("focusout",this.__onFocusout),e.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(e)}))}__onFocusin(e){this.manual||xi()&&(this.target.contains(e.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(e){this.manual||this.target.contains(e.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(e){e.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseEnter(){this._stateController.isClosing&&this._stateController.open({immediate:!0})}__onOverlayMouseLeave(e){e.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(e){const s=this.__isTargetHidden;if(this.__isTargetHidden=!e,s&&e&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!e&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(e,s){this._overlayElement&&(e||s)&&this._overlayElement.requestContentUpdate()}__tooltipRenderer(e){e.textContent=typeof this.generator=="function"?this.generator(this.context):this.text,this._overlayContent=e.textContent}__computeAriaTarget(e,s){const o=n=>n&&n.nodeType===Node.ELEMENT_NODE;return(Array.isArray(e)?e.some(o):e)?e:s}__effectiveAriaTargetChanged(e,s){s&&[s].flat().forEach(o=>{Ti(o,"aria-describedby",this._uniqueId)}),e&&[e].flat().forEach(o=>{ut(o,"aria-describedby",this._uniqueId)})}__generatorChanged(e,s,o){e&&((s!==this.__oldTextGenerator||o!==this.__oldContext)&&e.requestContentUpdate(),this.__oldTextGenerator=s,this.__oldContext=o)}__updateSrLabelText(e,s){e&&(e.textContent=s)}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hr extends Rr(oo(W(re(O)))){static get is(){return"vaadin-tooltip"}static get template(){return P`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseenter="__onOverlayMouseEnter"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>

      <slot name="sr-label"></slot>
    `}}E(Hr);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let qt=0;function Ii(i,t=[],e={}){const s=e.moduleId||`custom-style-module-${qt}`;qt+=1;const o=document.createElement("dom-module");i&&o.setAttribute("theme-for",i);const r=!!(t.length&&e.moduleId),n=[].concat(e.include||[]);n.length===0?o.__allStyles=t:r||(o.__partialStyles=t),o.innerHTML=`
    <template>
      ${n.map(a=>`<style include=${a}></style>`)}
      ${r?`<style>${t.map(a=>a.cssText).join(`
`)}</style>`:""}
    </template>
  `,o.register(s)}function Br(i){return nt(i.querySelector("template")).map(t=>so(t.textContent))}function Vr(){const t=q.prototype.modules;return Object.keys(t).map(e=>{const s=t[e],o=s.getAttribute("theme-for");return s.__allStyles||(s.__allStyles=Br(s).concat(s.__partialStyles||[])),{themeFor:o,moduleId:e,styles:s.__allStyles}})}window.Vaadin||(window.Vaadin={});window.Vaadin.styleModules={getAllThemes:Vr,registerStyles:Ii};le&&le.length>0&&(le.forEach(i=>{Ii(i.themeFor,i.styles,{moduleId:i.moduleId,include:i.include})}),le.length=0);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ur=m`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;Qt("sizing-props",Ur);const Di=m`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: var(--vaadin-button-min-width, calc(var(--_button-size) * 2));
    height: var(--_button-size);
    padding: var(--vaadin-button-padding, 0 calc(var(--_button-size) / 3 + var(--lumo-border-radius-m) / 2));
    margin: var(--vaadin-button-margin, var(--lumo-space-xs) 0);
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--vaadin-button-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--_lumo-button-text-color);
    background: var(--_lumo-button-background);
    border: var(--vaadin-button-border, none);
    border-radius: var(--vaadin-button-border-radius, var(--lumo-border-radius-m));
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
    --_button-size: var(--vaadin-button-height, var(--lumo-button-size));
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    /* Used by notification */
    --_lumo-button-background: var(--vaadin-button-background, var(--lumo-contrast-5pct));
    --_lumo-button-text-color: var(--vaadin-button-text-color, var(--lumo-primary-text-color));
    --_lumo-button-primary-background: var(--vaadin-button-primary-background, var(--lumo-primary-color));
    --_lumo-button-primary-text-color: var(--vaadin-button-primary-text-color, var(--lumo-primary-contrast-color));
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    inset: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    --_background: transparent !important;
    background: var(--vaadin-button-tertiary-background, var(--_background));
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    border: var(--vaadin-button-tertiary-border, none);
    color: var(--vaadin-button-tertiary-text-color, var(--lumo-primary-text-color));
    font-weight: var(--vaadin-button-tertiary-font-weight, 500);
    padding: var(--vaadin-button-tertiary-padding, 0 calc(var(--_button-size) / 6));
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background: var(--_lumo-button-primary-background);
    border: var(--vaadin-button-primary-border, none);
    color: var(--_lumo-button-primary-text-color);
    font-weight: var(--vaadin-button-primary-font-weight, 600);
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;g("vaadin-button",Di,{moduleId:"lumo-button"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fi extends ne{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.ariaTarget!==void 0&&(t.ariaTarget=this.ariaTarget),this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(t){this.ariaTarget=t;const e=this.node;e&&(e.ariaTarget=t)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qr=m`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`,jr=i=>i`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Wr=!1,Yr=i=>i,ht=typeof document.head.style.touchAction=="string",Ce="__polymerGestures",Fe="__polymerGesturesHandled",et="__polymerGesturesTouchAction",jt=25,Wt=5,Gr=2,Kr=["mousedown","mousemove","mouseup","click"],$r=[0,1,4,2],Jr=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function pt(i){return Kr.indexOf(i)>-1}let Ri=!1;(function(){try{const i=Object.defineProperty({},"passive",{get(){Ri=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch{}})();function Hi(i){if(!(pt(i)||i==="touchend")&&ht&&Ri&&Wr)return{passive:!0}}const Zr=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),Xr={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function z(i){const t=i.type;if(!pt(t))return!1;if(t==="mousemove"){let s=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!Jr&&(s=$r[i.which]||0),!!(s&1)}return(i.button===void 0?0:i.button)===0}function Qr(i){if(i.type==="click"){if(i.detail===0)return!0;const t=N(i);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const e=t.getBoundingClientRect(),s=i.pageX,o=i.pageY;return!(s>=e.left&&s<=e.right&&o>=e.top&&o<=e.bottom)}return!1}const S={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function en(i){let t="auto";const e=Vi(i);for(let s=0,o;s<e.length;s++)if(o=e[s],o[et]){t=o[et];break}return t}function Bi(i,t,e){i.movefn=t,i.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function U(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}const Vi=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],ae={},k=[];function tn(i,t){let e=document.elementFromPoint(i,t),s=e;for(;s&&s.shadowRoot&&!window.ShadyDOM;){const o=s;if(s=s.shadowRoot.elementFromPoint(i,t),o===s)break;s&&(e=s)}return e}function N(i){const t=Vi(i);return t.length>0?t[0]:i.target}function Ui(i){const t=i.type,s=i.currentTarget[Ce];if(!s)return;const o=s[t];if(!o)return;if(!i[Fe]&&(i[Fe]={},t.startsWith("touch"))){const n=i.changedTouches[0];if(t==="touchstart"&&i.touches.length===1&&(S.touch.id=n.identifier),S.touch.id!==n.identifier)return;ht||(t==="touchstart"||t==="touchmove")&&on(i)}const r=i[Fe];if(!r.skip){for(let n=0,a;n<k.length;n++)a=k[n],o[a.name]&&!r[a.name]&&a.flow&&a.flow.start.indexOf(i.type)>-1&&a.reset&&a.reset();for(let n=0,a;n<k.length;n++)a=k[n],o[a.name]&&!r[a.name]&&(r[a.name]=!0,a[t](i))}}function on(i){const t=i.changedTouches[0],e=i.type;if(e==="touchstart")S.touch.x=t.clientX,S.touch.y=t.clientY,S.touch.scrollDecided=!1;else if(e==="touchmove"){if(S.touch.scrollDecided)return;S.touch.scrollDecided=!0;const s=en(i);let o=!1;const r=Math.abs(S.touch.x-t.clientX),n=Math.abs(S.touch.y-t.clientY);i.cancelable&&(s==="none"?o=!0:s==="pan-x"?o=n>r:s==="pan-y"&&(o=r>n)),o?i.preventDefault():Ae("track")}}function Yt(i,t,e){return ae[t]?(sn(i,t,e),!0):!1}function Ea(i,t,e){return ae[t]?(rn(i,t,e),!0):!1}function sn(i,t,e){const s=ae[t],o=s.deps,r=s.name;let n=i[Ce];n||(i[Ce]=n={});for(let a=0,l,d;a<o.length;a++)l=o[a],!(Zr&&pt(l)&&l!=="click")&&(d=n[l],d||(n[l]=d={_count:0}),d._count===0&&i.addEventListener(l,Ui,Hi(l)),d[r]=(d[r]||0)+1,d._count=(d._count||0)+1);i.addEventListener(t,e),s.touchAction&&an(i,s.touchAction)}function rn(i,t,e){const s=ae[t],o=s.deps,r=s.name,n=i[Ce];if(n)for(let a=0,l,d;a<o.length;a++)l=o[a],d=n[l],d&&d[r]&&(d[r]=(d[r]||1)-1,d._count=(d._count||1)-1,d._count===0&&i.removeEventListener(l,Ui,Hi(l)));i.removeEventListener(t,e)}function ft(i){k.push(i),i.emits.forEach(t=>{ae[t]=i})}function nn(i){for(let t=0,e;t<k.length;t++){e=k[t];for(let s=0,o;s<e.emits.length;s++)if(o=e.emits[s],o===i)return e}return null}function an(i,t){ht&&i instanceof HTMLElement&&Ni.run(()=>{i.style.touchAction=t}),i[et]=t}function _t(i,t,e){const s=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=e,Yr(i).dispatchEvent(s),s.defaultPrevented){const o=e.preventer||e.sourceEvent;o&&o.preventDefault&&o.preventDefault()}}function Ae(i){const t=nn(i);t.info&&(t.info.prevent=!0)}ft({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){U(this.info)},mousedown(i){if(!z(i))return;const t=N(i),e=this,s=r=>{z(r)||(X("up",t,r),U(e.info))},o=r=>{z(r)&&X("up",t,r),U(e.info)};Bi(this.info,s,o),X("down",t,i)},touchstart(i){X("down",N(i),i.changedTouches[0],i)},touchend(i){X("up",N(i),i.changedTouches[0],i)}});function X(i,t,e,s){t&&_t(t,i,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:s,prevent(o){return Ae(o)}})}ft({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(i){this.moves.length>Gr&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,U(this.info)},mousedown(i){if(!z(i))return;const t=N(i),e=this,s=r=>{const n=r.clientX,a=r.clientY;Gt(e.info,n,a)&&(e.info.state=e.info.started?r.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&Ae("tap"),e.info.addMove({x:n,y:a}),z(r)||(e.info.state="end",U(e.info)),t&&Re(e.info,t,r),e.info.started=!0)},o=r=>{e.info.started&&s(r),U(e.info)};Bi(this.info,s,o),this.info.x=i.clientX,this.info.y=i.clientY},touchstart(i){const t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(i){const t=N(i),e=i.changedTouches[0],s=e.clientX,o=e.clientY;Gt(this.info,s,o)&&(this.info.state==="start"&&Ae("tap"),this.info.addMove({x:s,y:o}),Re(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend(i){const t=N(i),e=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),Re(this.info,t,e))}});function Gt(i,t,e){if(i.prevent)return!1;if(i.started)return!0;const s=Math.abs(i.x-t),o=Math.abs(i.y-e);return s>=Wt||o>=Wt}function Re(i,t,e){if(!t)return;const s=i.moves[i.moves.length-2],o=i.moves[i.moves.length-1],r=o.x-i.x,n=o.y-i.y;let a,l=0;s&&(a=o.x-s.x,l=o.y-s.y),_t(t,"track",{state:i.state,x:e.clientX,y:e.clientY,dx:r,dy:n,ddx:a,ddy:l,sourceEvent:e,hover(){return tn(e.clientX,e.clientY)}})}ft({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(i){z(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click(i){z(i)&&Kt(this.info,i)},touchstart(i){const t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(i){Kt(this.info,i.changedTouches[0],i)}});function Kt(i,t,e){const s=Math.abs(t.clientX-i.x),o=Math.abs(t.clientY-i.y),r=N(e||t);!r||Xr[r.localName]&&r.hasAttribute("disabled")||(isNaN(s)||isNaN(o)||s<=jt&&o<=jt||Qr(t))&&(i.prevent||_t(r,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qi=v(i=>class extends i{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mt=v(i=>class extends i{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ln=i=>class extends qi(mt(i)){get _activeKeys(){return[" "]}ready(){super.ready(),Yt(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),Yt(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",s=>{this._activeKeys.includes(s.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ji=v(i=>class extends i{get _keyboardActive(){return xi()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wi=i=>class extends qi(i){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,s){super._disabledChanged(e,s),e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):s&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dn=i=>class extends ln(Wi(ji(i))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(e){super._onKeyDown(e),!(e.altKey||e.shiftKey||e.ctrlKey||e.metaKey)&&this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */g("vaadin-button",qr,{moduleId:"vaadin-button-styles"});class Yi extends dn(W(I(re(O)))){static get is(){return"vaadin-button"}static get template(){return jr(P)}ready(){super.ready(),this._tooltipController=new Fi(this),this.addController(this._tooltipController)}}E(Yi);function cn({currentTarget:i}){i.hasAttribute("disableOnClick")&&(i.disabled=!0)}window.Vaadin.Flow.button={initDisableOnClick:i=>{i.__hasDisableOnClickListener||(i.addEventListener("click",cn),i.__hasDisableOnClickListener=!0)}};g("vaadin-input-container",m`
    :host {
      background: var(--_background);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      --_input-height: var(--lumo-text-field-size, var(--lumo-size-m));
      /* Default values */
      --_background: var(--vaadin-input-field-background, var(--lumo-contrast-10pct));
      --_hover-highlight: var(--vaadin-input-field-hover-highlight, var(--lumo-contrast-50pct));
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
      --_icon-color: var(--vaadin-input-field-icon-color, var(--lumo-contrast-60pct));
      --_icon-size: var(--vaadin-input-field-icon-size, var(--lumo-icon-size-m));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_invalid-hover-highlight: var(--vaadin-input-field-invalid-hover-highlight, var(--lumo-error-color-50pct));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background: var(--_hover-highlight);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--vaadin-input-field-height, var(--_input-height));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-30pct));
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background: var(--_invalid-background);
    }

    :host([invalid]:not([readonly]))::after {
      background: var(--_invalid-hover-highlight);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--_icon-color);
      width: var(--_icon-size);
      height: var(--_icon-size);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const un=m`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`;Qt("font-icons",un);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gi=m`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;g("",Gi,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hn=m`
  :host {
    --_helper-spacing: var(--vaadin-input-field-helper-spacing, 0.4em);
  }

  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  [part='helper-text'] {
    display: block;
    color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
    font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-helper-font-weight, 400);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ki=m`
  [part='label'] {
    align-self: flex-start;
    color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    font-weight: var(--vaadin-input-field-label-font-weight, 500);
    font-size: var(--vaadin-input-field-label-font-size, var(--lumo-font-size-s));
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--vaadin-input-field-focused-label-color, var(--lumo-primary-text-color));
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--vaadin-input-field-hovered-label-color, var(--lumo-body-text-color));
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    }
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-error-font-weight, 400);
    color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;g("",Ki,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pn=m`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
    font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-input-field-value-font-weight, 400);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_input-height: var(--vaadin-input-field-height, var(--lumo-text-field-size));
  }

  :host::before {
    height: var(--_input-height);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: var(--vaadin-input-field-hover-highlight-opacity, 0.1);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
  }

  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,gt=[Ki,Gi,hn,pn];g("",gt,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */g("vaadin-text-field",gt,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fn=i=>class extends i{static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",e=>{e.target===this&&e.preventDefault()}),this.addEventListener("click",e=>{e.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(s=>s.focus&&s.focus())})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _n=m`
  :host {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
      var(--vaadin-input-field-top-start-radius, var(--__border-radius))
      var(--vaadin-input-field-top-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
    --_border-radius: var(--vaadin-input-field-border-radius, 0);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  :host([dir='rtl']) {
    border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
      var(--vaadin-input-field-top-end-radius, var(--_border-radius))
      var(--vaadin-input-field-top-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Reset the native input styles */
  ::slotted(input) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  ::slotted(*) {
    flex: none;
  }

  ::slotted(:is(input, textarea))::placeholder {
    /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
    /* because ::slotted(...)::placeholder does not work in Safari. */
    font: inherit;
    color: inherit;
    /* Override default opacity in Firefox */
    opacity: 1;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */g("vaadin-input-container",_n,{moduleId:"vaadin-input-container-styles"});class mn extends fn(I(lt(O))){static get is(){return"vaadin-input-container"}static get template(){return P`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}}E(mn);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gn=m`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vn=m`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }

  @media (forced-colors: active) {
    :host(:not([readonly])) [part='input-field'] {
      outline: 1px solid;
      outline-offset: -1px;
    }
    :host([focused]) [part='input-field'] {
      outline-width: 2px;
    }
    :host([disabled]) [part='input-field'] {
      outline-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bn=m`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yn=[vn,bn,gn];/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wn extends ne{constructor(t,e){super(t,"input","input",{initializer:(s,o)=>{o.value&&(s.value=o.value),o.type&&s.setAttribute("type",o.type),s.id=this.defaultId,typeof e=="function"&&e(s)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cn=v(i=>class extends ji(Wi(i)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,s){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):s&&this._removeFocusListeners(s)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,s){super._disabledChanged(e,s),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const He=new WeakMap;function An(i){return He.has(i)||He.set(i,new Set),He.get(i)}function xn(i,t){const e=document.createElement("style");e.textContent=i,t===document?document.head.appendChild(e):t.insertBefore(e,t.firstChild)}const En=v(i=>class extends i{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),s=An(e);this.slotStyles.forEach(o=>{s.has(o)||(xn(o,e),s.add(o))})}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $i=v(i=>class extends i{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=e??"")}_inputElementChanged(e,s){e?this._addInputListeners(e):s&&this._removeInputListeners(s)}_hasInputValueChanged(e,s){(e||s)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const s=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=s.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,s){this._toggleHasValue(this._hasValue),!(e===""&&s===void 0)&&(this.__userInput||this._forwardInputValue(e))}_setHasInputValue(e){const s=e.composedPath()[0];this._hasInputValue=s.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pn=i=>class extends $i(mt(i)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",e=>this._onClearButtonMouseDown(e)),this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e)))}_onClearButtonClick(e){e.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(e){e.preventDefault(),Js||this.inputElement.focus()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Be=new Map;function vt(i){return Be.has(i)||Be.set(i,new WeakMap),Be.get(i)}function Ji(i,t){i&&i.removeAttribute(t)}function Zi(i,t){if(!i||!t)return;const e=vt(t);if(e.has(i))return;const s=ct(i.getAttribute(t));e.set(i,new Set(s))}function Tn(i,t){if(!i||!t)return;const e=vt(t),s=e.get(i);!s||s.size===0?i.removeAttribute(t):ut(i,t,Pe(s)),e.delete(i)}function Ve(i,t,e={newId:null,oldId:null,fromUser:!1}){if(!i||!t)return;const{newId:s,oldId:o,fromUser:r}=e,n=vt(t),a=n.get(i);if(!r&&a){o&&a.delete(o),s&&a.add(s);return}r&&(a?s||n.delete(i):Zi(i,t),Ji(i,t)),Ti(i,t,o);const l=s||Pe(a);l&&ut(i,t,l)}function Sn(i,t){Zi(i,t),Ji(i,t)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class On{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setAriaLabel(t){this.__setAriaLabelToAttribute(t),this.__label=t}setLabelId(t,e=!1){const s=e?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(t,s,e),e?this.__labelIdFromUser=t:this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}__setAriaLabelToAttribute(t){this.__target&&(t?(Sn(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",t)):this.__label&&(Tn(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(t,e,s){Ve(this.__target,"aria-labelledby",{newId:t,oldId:e,fromUser:s})}__setErrorIdToAriaAttribute(t,e){Ve(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setHelperIdToAriaAttribute(t,e){Ve(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setAriaRequiredAttribute(t){this.__target&&(["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bt extends ne{constructor(t,e,s,o={}){super(t,e,s,{...o,useUniqueId:!0})}initCustomNode(t){this.__updateNodeId(t),this.__notifyChange(t)}teardownNode(t){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const t=super.attachDefaultNode();return t&&this.__updateNodeId(t),t}restoreDefaultNode(){}updateDefaultNode(t){this.__notifyChange(t)}observeNode(t){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(e=>{e.forEach(s=>{const o=s.target,r=o===this.node;s.type==="attributes"?r&&this.__updateNodeId(o):(r||o.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(t){return t?t.nodeType===Node.ELEMENT_NODE&&(customElements.get(t.localName)||t.children.length>0)||t.textContent&&t.textContent.trim()!=="":!1}__notifyChange(t){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(t),node:t}}))}__updateNodeId(t){const e=!this.nodes||t===this.nodes[0];t.nodeType===Node.ELEMENT_NODE&&(!this.multiple||e)&&!t.id&&(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Nn extends bt{constructor(t){super(t,"error-message","div")}setErrorMessage(t){this.errorMessage=t,this.updateDefaultNode(this.node)}setInvalid(t){this.invalid=t,this.updateDefaultNode(this.node)}initAddedNode(t){t!==this.defaultNode&&this.initCustomNode(t)}initNode(t){this.updateDefaultNode(t)}initCustomNode(t){t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),super.initCustomNode(t)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(t){const{errorMessage:e,invalid:s}=this,o=!!(s&&e&&e.trim()!=="");t&&(t.textContent=o?e:"",t.hidden=!o,o?t.setAttribute("role","alert"):t.removeAttribute("role")),super.updateDefaultNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mn extends bt{constructor(t){super(t,"helper",null)}setHelperText(t){this.helperText=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:t}=this;if(t&&t.trim()!==""){this.tagName="div";const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.helperText),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class kn extends bt{constructor(t){super(t,"label","label")}setLabel(t){this.label=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:t}=this;if(t&&t.trim()!==""){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.label),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ln=v(i=>class extends re(i){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new kn(this),this._labelController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-label",e.detail.hasContent)})}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xi=v(i=>class extends i{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zn=i=>class extends Xi(Ln(re(i))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new On(this),this._helperController=new Mn(this),this._errorController=new Nn(this),this._errorController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",e=>{const{hasContent:s,node:o}=e.detail;this.__labelChanged(s,o)}),this._helperController.addEventListener("slot-content-changed",e=>{const{hasContent:s,node:o}=e.detail;this.toggleAttribute("has-helper",s),this.__helperChanged(s,o)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,s){e?this._fieldAriaController.setHelperId(s.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(e){this._fieldAriaController.setAriaLabel(e)}_accessibleNameRefChanged(e){this._fieldAriaController.setLabelId(e,!0)}__labelChanged(e,s){e?this._fieldAriaController.setLabelId(s.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{if(e){const s=this._errorNode;this._fieldAriaController.setErrorId(s&&s.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const In=v(i=>class extends i{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((s,o)=>{this._delegateAttribute(s,e[o])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((s,o)=>{this._delegateProperty(s,e[o])})}_delegateAttribute(e,s){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",s?"true":!1),typeof s=="boolean"?this.stateTarget.toggleAttribute(e,s):s?this.stateTarget.setAttribute(e,s):this.stateTarget.removeAttribute(e))}_delegateProperty(e,s){this.stateTarget&&(this.stateTarget[e]=s)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dn=v(i=>class extends In(Xi($i(i))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(s=>this.__isValidConstraint(s))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...s){if(!e)return;const o=this._hasValidConstraints(s),r=this.__previousHasConstraints&&!o;(this._hasValue||this.invalid)&&o?this.validate():r&&this._setInvalid(!1),this.__previousHasConstraints=o}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return!!e||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fn=i=>class extends En(Cn(Dn(zn(Pn(mt(i)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=j.debounce(this._preventInputDebouncer,Nr.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const s=e.clipboardData.getData("text");this.__allowedTextRegExp.test(s)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const s=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(s)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${e}*$`,"u")}catch(s){console.error(s)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rn=i=>class extends Fn(i){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this.validate()}_onInput(e){super._onInput(e),this.invalid&&this.validate()}_valueChanged(e,s){super._valueChanged(e,s),s!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hn{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",s=>{this.__initLabel(s.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bn=i=>class extends Rn(i){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new wn(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Hn(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */g("vaadin-text-field",yn,{moduleId:"vaadin-text-field-styles"});class Qi extends Bn(I(W(O))){static get is(){return"vaadin-text-field"}static get template(){return P`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}ready(){super.ready(),this._tooltipController=new Fi(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}E(Qi);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vn=m`
  :host {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: auto;
    background: transparent;
    outline: none;
  }
`;g("vaadin-password-field-button",[Di,Vn],{moduleId:"lumo-password-field-button"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Un=m`
  [part='reveal-button']::before {
    content: var(--lumo-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  [part='reveal-button'] {
    position: relative;
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }
`;g("vaadin-password-field",[gt,Un],{moduleId:"lumo-password-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qn extends Yi{static get is(){return"vaadin-password-field-button"}static get template(){return P`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot name="tooltip"></slot>
    `}}E(qn);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jn=P`
  <div part="reveal-button" slot="suffix">
    <slot name="reveal"></slot>
  </div>
`;let fe;class Wn extends Qi{static get is(){return"vaadin-password-field"}static get template(){if(!fe){fe=super.template.cloneNode(!0);const t=jn.content.querySelector('[part="reveal-button"]');fe.content.querySelector('[part="input-field"]').appendChild(t)}return fe}static get properties(){return{revealButtonHidden:{type:Boolean,observer:"_revealButtonHiddenChanged",value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChanged",readOnly:!0},i18n:{type:Object,value:()=>({reveal:"Show password"})}}}static get observers(){return["__i18nChanged(i18n.*)"]}constructor(){super(),this._setType("password"),this.__boundRevealButtonClick=this._onRevealButtonClick.bind(this),this.__boundRevealButtonMouseDown=this._onRevealButtonMouseDown.bind(this),this.__lastChange=""}get slotStyles(){const t=this.localName;return[...super.slotStyles,`
        ${t} [slot="input"]::-ms-reveal {
          display: none;
        }
      `]}get _revealNode(){return this._revealButtonController&&this._revealButtonController.node}ready(){super.ready(),this._revealPart=this.shadowRoot.querySelector('[part="reveal-button"]'),this._revealButtonController=new ne(this,"reveal","vaadin-password-field-button",{initializer:t=>{t.disabled=this.disabled,t.addEventListener("click",this.__boundRevealButtonClick),t.addEventListener("mousedown",this.__boundRevealButtonMouseDown)}}),this.addController(this._revealButtonController),this.__updateAriaLabel(this.i18n),this._updateToggleState(!1),this._toggleRevealHidden(this.revealButtonHidden),this.inputElement&&(this.inputElement.autocapitalize="off")}_onChange(t){super._onChange(t),this.__lastChange=this.inputElement.value}_shouldSetFocus(t){return t.target===this.inputElement||t.target===this._revealNode}_shouldRemoveFocus(t){return!(t.relatedTarget===this._revealNode||t.relatedTarget===this.inputElement&&t.target===this._revealNode)}_setFocused(t){if(super._setFocused(t),!t)this._setPasswordVisible(!1),this.__lastChange!==this.inputElement.value&&(this.__lastChange=this.inputElement.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})));else{const e=this.getRootNode().activeElement===this._revealNode;this.toggleAttribute("focus-ring",this._keyboardActive&&!e)}}__updateAriaLabel(t){t.reveal&&this._revealNode&&this._revealNode.setAttribute("aria-label",t.reveal)}__i18nChanged(t){this.__updateAriaLabel(t.base)}_revealButtonHiddenChanged(t){this._toggleRevealHidden(t)}_togglePasswordVisibility(){this._setPasswordVisible(!this.passwordVisible)}_onRevealButtonClick(){this._togglePasswordVisibility()}_onRevealButtonMouseDown(t){t.preventDefault(),this.inputElement.focus()}_toggleRevealHidden(t){this._revealNode&&(t?(this._revealPart.setAttribute("hidden",""),this._revealNode.setAttribute("tabindex","-1"),this._revealNode.setAttribute("aria-hidden","true")):(this._revealPart.removeAttribute("hidden"),this._revealNode.setAttribute("tabindex","0"),this._revealNode.removeAttribute("aria-hidden")))}_updateToggleState(t){this._revealNode&&this._revealNode.setAttribute("aria-pressed",t?"true":"false")}_passwordVisibleChanged(t){this._setType(t?"text":"password"),this._updateToggleState(t)}_disabledChanged(t,e){super._disabledChanged(t,e),this._revealNode&&(this._revealNode.disabled=t)}}E(Wn);const Yn=m`
  :host {
    max-width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='form'] {
    padding: var(--lumo-space-l);
  }

  [part='form-title'] {
    margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
  }

  ::slotted([slot='submit']) {
    margin-top: var(--lumo-space-l);
    margin-bottom: var(--lumo-space-s);
  }

  ::slotted([slot='forgot-password']) {
    margin: var(--lumo-space-s) auto;
  }

  [part='error-message'] {
    background-color: var(--lumo-error-color-10pct);
    padding: var(--lumo-space-m);
    border-radius: var(--lumo-border-radius-m);
    margin-top: var(--lumo-space-m);
    margin-bottom: var(--lumo-space-s);
    color: var(--lumo-error-text-color);
  }

  :host(:not([dir='rtl'])) [part='error-message'] {
    padding-left: var(--lumo-size-m);
  }

  :host([dir='rtl']) [part='error-message'] {
    padding-right: var(--lumo-size-m);
  }

  [part='error-message']::before {
    content: var(--lumo-icons-error);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    position: absolute;
    width: var(--lumo-size-m);
    height: 1em;
    line-height: 1;
    text-align: center;
  }

  :host(:not([dir='rtl'])) [part='error-message']::before {
    /* Visual centering */
    margin-left: calc(var(--lumo-size-m) * -0.95);
  }

  :host([dir='rtl']) [part='error-message']::before {
    /* Visual centering */
    margin-right: calc(var(--lumo-size-m) * -0.95);
  }

  [part='error-message-title'] {
    margin: 0 0 0.25em;
    color: inherit;
  }

  [part='error-message-description'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
    margin: 0;
    opacity: 0.9;
  }

  [part='footer'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-secondary-text-color);
  }
`;g("vaadin-login-form-wrapper",[ro,no,Yn],{moduleId:"lumo-login-form-wrapper"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gn=m`
  :host {
    overflow: hidden;
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='form'] {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  [part='form-title'] {
    margin: 0;
  }

  [part='error-message'] {
    position: relative;
  }
`;/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */g("vaadin-login-form-wrapper",Gn,{moduleId:"vaadin-login-form-wrapper-styles"});class Kn extends I(O){static get template(){return P`
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form"></slot>

        <slot name="custom-form-area"></slot>

        <slot name="submit"></slot>

        <slot name="forgot-password"></slot>

        <div part="footer">
          <slot name="footer"></slot>
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
    `}static get is(){return"vaadin-login-form-wrapper"}static get properties(){return{error:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object}}}}E(Kn);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $n=i=>class extends i{static get properties(){return{action:{type:String,value:null},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1},noAutofocus:{type:Boolean,value:!1},i18n:{type:Object,value(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again.",username:"Username is required",password:"Password is required"}}}},_preventAutoEnable:{type:Boolean,value:!1}}}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jn=i=>class extends $n(i){static get observers(){return["_errorChanged(error)"]}get _customFields(){return[...this.$.vaadinLoginFormWrapper.children].filter(e=>e.getAttribute("slot")==="custom-form-area"&&e.hasAttribute("name"))}async connectedCallback(){super.connectedCallback(),this.noAutofocus||(await new Promise(requestAnimationFrame),this.$.vaadinLoginUsername.focus())}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){const e=this.$.vaadinLoginUsername,s=this.$.vaadinLoginPassword;if(this.disabled||!(e.validate()&&s.validate()))return;this.error=!1,this.disabled=!0;const o={username:e.value,password:s.value},r=this._customFields;r.length&&(o.custom={},r.forEach(l=>{o.custom[l.name]=l.value}));const n={bubbles:!0,cancelable:!0,detail:o},a=this.dispatchEvent(new CustomEvent("login",n));if(this.action&&a){const l=document.querySelector("meta[name=_csrf_parameter]"),d=document.querySelector("meta[name=_csrf]");l&&d&&(this.$.csrf.name=l.content,this.$.csrf.value=d.content),this.querySelector("form").submit()}}_onFormData(e){const{formData:s}=e;this._customFields.length&&this._customFields.forEach(o=>{s.append(o.name,o.value)})}_handleInputKeydown(e){if(e.key==="Enter"){const{currentTarget:s}=e,o=s.id==="vaadinLoginUsername"?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;s.validate()&&(o.checkValidity()?this.submit():o.focus())}}_handleInputKeyup(e){const s=e.currentTarget;e.key==="Tab"&&s instanceof HTMLInputElement&&s.select()}_onForgotPasswordClick(){this.dispatchEvent(new CustomEvent("forgot-password"))}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zn extends Jn(W(I(O))){static get template(){return P`
      <style>
        vaadin-login-form-wrapper > form > * {
          width: 100%;
        }
      </style>
      <vaadin-login-form-wrapper id="vaadinLoginFormWrapper" theme$="[[_theme]]" error="[[error]]" i18n="[[i18n]]">
        <form method="POST" action$="[[action]]" on-formdata="_onFormData" slot="form">
          <input id="csrf" type="hidden" />
          <vaadin-text-field
            name="username"
            label="[[i18n.form.username]]"
            error-message="[[i18n.errorMessage.username]]"
            id="vaadinLoginUsername"
            required
            on-keydown="_handleInputKeydown"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
            autocomplete="username"
          >
            <input type="text" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-text-field>

          <vaadin-password-field
            name="password"
            label="[[i18n.form.password]]"
            error-message="[[i18n.errorMessage.password]]"
            id="vaadinLoginPassword"
            required
            on-keydown="_handleInputKeydown"
            spellcheck="false"
            autocomplete="current-password"
          >
            <input type="password" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-password-field>
        </form>

        <vaadin-button slot="submit" theme="primary contained submit" on-click="submit" disabled$="[[disabled]]">
          [[i18n.form.submit]]
        </vaadin-button>

        <vaadin-button
          slot="forgot-password"
          theme="tertiary small"
          on-click="_onForgotPasswordClick"
          hidden$="[[noForgotPassword]]"
        >
          [[i18n.form.forgotPassword]]
        </vaadin-button>
      </vaadin-login-form-wrapper>
    `}static get is(){return"vaadin-login-form"}_attachDom(t){this.appendChild(t)}}E(Zn);const Xn=m`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;g("vaadin-vertical-layout",Xn,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qn extends W(I(O)){static get template(){return P`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}E(Qn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class tt extends ao{constructor(t){if(super(t),this.it=Ue,t.type!==lo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Ue||t==null)return this._t=void 0,this.it=t;if(t===co)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}tt.directiveName="unsafeHTML",tt.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class it extends tt{}it.directiveName="unsafeSVG",it.resultType=2;const ea=uo(it);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function $t(i){let t=Ue;if(i){const e=i.cloneNode(!0);e.removeAttribute("id"),t=ho`${ea(e.outerHTML)}`}return t}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const M={},Jt=new Set;function eo(i,t){return(i||"").replace(`${t}:`,"")}function Zt(i){return i?i.split(":")[0]||"vaadin":void 0}function Xt(i,t){i._icons=[...i.querySelectorAll("[id]")].reduce((e,s)=>{const o=eo(s.id,t);return e[o]=s,e},{})}class to extends W(O){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static get attachedIcons(){return Jt}static getIconset(t){return M[t]}static getIconSvg(t,e){const s=e||Zt(t),o=this.getIconset(s);if(!t||!o)return{svg:$t(null)};const r=eo(t,s),n=o._icons[r];return{preserveAspectRatio:n?n.getAttribute("preserveAspectRatio"):null,svg:$t(n),size:o.size,viewBox:n?n.getAttribute("viewBox"):null}}static register(t,e,s){if(!M[t]){const o=document.createElement("vaadin-iconset");o.appendChild(s.content.cloneNode(!0)),M[t]=o,Xt(o,t),o.size=e,o.name=t,o.__nameChanged(t)}}connectedCallback(){super.connectedCallback(),this.style.display="none";const{name:t}=this;M[t]=this,Xt(this,t),this.__updateIcons(t)}__updateIcons(t){Jt.forEach(e=>{t===Zt(e.icon)&&e._applyIcon()})}__nameChanged(t,e){e&&(M[t]=M[e],delete M[e]),t&&this.__updateIcons(t)}}E(to);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const io=document.createElement("template");io.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"><defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs></svg>`;to.register("lumo",1e3,io);const ta=i=>{const t=[];return i==="7d2d7f3cc094bb69581cc36ea2effa7f01e71a79beb0d13e8e4fd984a3675a31"&&t.push(de(()=>import("./chunk-b80f2004533007d1ea7fcfffee7e4caeaf083d5ab7bfa83402eb5b947de71ed2-JNrOtxAk.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),i==="78ee598037fc0326f4a35070ec8eeb87fa0cd53f50d2d07f1e9e7336913d8ee8"&&t.push(de(()=>import("./chunk-09d0b7c8457f156ff064d8a3ad4d36018d5a3e1e79a553b397db5fbe41d1b17d-C-xW-Zml.js").then(e=>e.c),__vite__mapDeps([4,1,2,3]),import.meta.url)),i==="26f01a8ed2303c2562b27a0d2f62763e94720953f6d309312270b058f189ae2d"&&t.push(de(()=>import("./chunk-be2136a05c5be734851c1407e3884a3c6db24e95e94a1e32449f227fe52a5124-CZKy0Xe6.js").then(e=>e.c),__vite__mapDeps([1,2,3]),import.meta.url)),i==="4c8df3a5167de17c31698cc16dde45df786492ec8791c81025f9b259dfe38457"&&t.push(de(()=>import("./chunk-09d0b7c8457f156ff064d8a3ad4d36018d5a3e1e79a553b397db5fbe41d1b17d-C-xW-Zml.js").then(e=>e.c),__vite__mapDeps([4,1,2,3]),import.meta.url)),Promise.all(t)};window.Vaadin=window.Vaadin||{};window.Vaadin.Flow=window.Vaadin.Flow||{};window.Vaadin.Flow.loadOnDemand=ta;window.Vaadin.Flow.resetFocus=()=>{let i=document.activeElement;for(;i&&i.shadowRoot;)i=i.shadowRoot.activeElement;return!i||i.blur()||i.focus()||!0};const Ga=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{j as $,ln as A,v as B,re as C,lt as D,W as E,ji as F,zs as G,L as H,Dn as I,qe as J,mt as K,Hn as L,wo as M,xo as N,hr as O,O as P,D as Q,Ho as R,Ir as S,Fi as T,oa as U,Xi as V,na as W,Ni as X,Mr as Y,ya as Z,wa as _,gr as a,kr as a0,Nr as a1,ha as a2,ut as a3,Ti as a4,Yt as a5,In as a6,er as a7,lr as a8,la as a9,Ws as aa,ft as ab,Ae as ac,pa as ad,fr as ae,dr as af,_r as ag,ae as ah,Ea as ai,xi as aj,Wi as ak,ua as al,da as am,ca as an,ra as ao,Rn as ap,Ga as aq,Us as b,zr as c,$i as d,qi as e,sr as f,Mi as g,P as h,gt as i,Js as j,yn as k,Fn as l,wn as m,Ln as n,ei as o,Cn as p,hn as q,Ki as r,zn as s,sa as t,Gi as u,ne as v,mn as w,$s as x,yo as y,mo as z};

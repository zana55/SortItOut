import{l as Ro,u as Fo,d as $,P as Fi,w as B,s as Di,a as Do,f as Lo,r as Li,b as E,m as Mo,c as Bo,h as T,i as No,D as z,e as X,g as ee,j as oe,t as Q,E as V,k as $o,n as Be,o as Vo,p as Pt,q as _i}from"./generated-flow-imports-B5MUEhKH.js";import{b as Ho,c as Mi,e as Uo,R as Go,Q as at,k as tt,d as S,f as y,i as v,a as Wo,T as P,g as Nt}from"./indexhtml-Bykin0K9.js";import{i as $t,a as le,C as H,g as Ot,A as qo,F as jo,b as He,c as Yo,d as Bi,e as fe,f as Ni,h as Ko,j as fi,k as Qo}from"./chunk-4958b8a802b9cba40c1eb27aa6b89e396eb5776120f1535a35d907e481f35d77-UDlGPBIt.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xo=(s,i)=>s?._$litType$!==void 0,Zo=s=>s.strings===void 0;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class K{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(i,e){this._asyncModule=i,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Ue.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ue.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(i,e,t){return i instanceof K?i._cancelAsync():i=new K,i.setConfig(e,t),i}}let Ue=new Set;const Jo=function(s){Ue.add(s)},es=function(){const s=!!Ue.size;return Ue.forEach(i=>{try{i.flush()}catch(e){setTimeout(()=>{throw e})}}),s};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ts=function(){let s,i;do s=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),i=es();while(s||i)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let mi=!1;function is(){if(Ro&&!Fo){if(!mi){mi=!0;const s=document.createElement("style");s.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(s)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Vt(s,i,e,t,o){let r;o&&(r=typeof e=="object"&&e!==null,r&&(t=s.__dataTemp[i]));let n=t!==e&&(t===t||e===e);return r&&n&&(s.__dataTemp[i]=e),n}const Ht=$(s=>{class i extends s{_shouldPropertyChange(t,o,r){return Vt(this,t,o,r,!0)}}return i});$(s=>{class i extends s{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,o,r){return Vt(this,t,o,r,this.mutableData)}}return i});Ht._mutablePropertyChange=Vt;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Rt=null;function Ft(){return Rt}Ft.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Ft,writable:!0}});const $i=Fi(Ft),os=Ht($i);function ss(s,i){Rt=s,Object.setPrototypeOf(s,i.prototype),new i,Rt=null}const rs=Fi(class{});function Vi(s,i){for(let e=0;e<i.length;e++){let t=i[e];if(!!s!=!!t.__hideTemplateChildren__)if(t.nodeType===Node.TEXT_NODE)s?(t.__polymerTextContent__=t.textContent,t.textContent=""):t.textContent=t.__polymerTextContent__;else if(t.localName==="slot")if(s)t.__polymerReplaced__=document.createComment("hidden-slot"),B(B(t).parentNode).replaceChild(t.__polymerReplaced__,t);else{const o=t.__polymerReplaced__;o&&B(B(o).parentNode).replaceChild(t,o)}else t.style&&(s?(t.__polymerDisplay__=t.style.display,t.style.display="none"):t.style.display=t.__polymerDisplay__);t.__hideTemplateChildren__=s,t._showHideChildren&&t._showHideChildren(s)}}class he extends rs{constructor(i){super(),this._configureProperties(i),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let o=this.root.firstChild;o;o=o.nextSibling)e.push(o),o.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let t=this.__templatizeOptions;(i&&t.instanceProps||!t.instanceProps)&&this._enableProperties()}_configureProperties(i){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let t in i)this._setPendingProperty(t,i[t])}forwardHostProp(i,e){this._setPendingPropertyOrPath(i,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(i,e,t){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(i,e,o=>{o.model=this,t(o)});else{let o=this.__dataHost.__dataHost;o&&o._addEventListenerToNode(i,e,t)}}_showHideChildren(i){Vi(i,this.children)}_setUnmanagedPropertyToNode(i,e,t){i.__hideTemplateChildren__&&i.nodeType==Node.TEXT_NODE&&e=="textContent"?i.__polymerTextContent__=t:super._setUnmanagedPropertyToNode(i,e,t)}get parentModel(){let i=this.__parentModel;if(!i){let e;i=this;do i=i.__dataHost.__dataHost;while((e=i.__templatizeOptions)&&!e.parentModel);this.__parentModel=i}return i}dispatchEvent(i){return!0}}he.prototype.__dataHost;he.prototype.__templatizeOptions;he.prototype._methodHost;he.prototype.__templatizeOwner;he.prototype.__hostProps;const ns=Ht(he);function gi(s){let i=s.__dataHost;return i&&i._methodHost||i}function as(s,i,e){let t=e.mutableData?ns:he;Dt.mixin&&(t=Dt.mixin(t));let o=class extends t{};return o.prototype.__templatizeOptions=e,o.prototype._bindTemplate(s),hs(o,s,i,e),o}function ls(s,i,e,t){let o=e.forwardHostProp;if(o&&i.hasHostProps){const r=s.localName=="template";let n=i.templatizeTemplateClass;if(!n){if(r){let l=e.mutableData?os:$i;class u extends l{}n=i.templatizeTemplateClass=u}else{const l=s.constructor;class u extends l{}n=i.templatizeTemplateClass=u}let a=i.hostProps;for(let l in a)n.prototype._addPropertyEffect("_host_"+l,n.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:ds(l,o)}),n.prototype._createNotifyingProperty("_host_"+l);Do&&t&&ps(i,e,t)}if(s.__dataProto&&Object.assign(s.__data,s.__dataProto),r)ss(s,n),s.__dataTemp={},s.__dataPending=null,s.__dataOld=null,s._enableProperties();else{Object.setPrototypeOf(s,n.prototype);const a=i.hostProps;for(let l in a)if(l="_host_"+l,l in s){const u=s[l];delete s[l],s.__data[l]=u}}}}function ds(s,i){return function(t,o,r){i.call(t.__templatizeOwner,o.substring(6),r[o])}}function hs(s,i,e,t){let o=e.hostProps||{};for(let r in t.instanceProps){delete o[r];let n=t.notifyInstanceProp;n&&s.prototype._addPropertyEffect(r,s.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:cs(r,n)})}if(t.forwardHostProp&&i.__dataHost)for(let r in o)e.hasHostProps||(e.hasHostProps=!0),s.prototype._addPropertyEffect(r,s.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:us()})}function cs(s,i){return function(t,o,r){i.call(t.__templatizeOwner,t,o,r[o])}}function us(){return function(i,e,t){i.__dataHost._setPendingPropertyOrPath("_host_"+e,t[e],!0,!0)}}function Dt(s,i,e){if(Di&&!gi(s))throw new Error("strictTemplatePolicy: template owner not trusted");if(e=e||{},s.__templatizeOwner)throw new Error("A <template> can only be templatized once");s.__templatizeOwner=i;let o=(i?i.constructor:he)._parseTemplate(s),r=o.templatizeInstanceClass;r||(r=as(s,o,e),o.templatizeInstanceClass=r);const n=gi(s);ls(s,o,e,n);let a=class extends r{};return a.prototype._methodHost=n,a.prototype.__dataHost=s,a.prototype.__templatizeOwner=i,a.prototype.__hostProps=o.hostProps,a=a,a}function ps(s,i,e){const t=e.constructor._properties,{propertyEffects:o}=s,{instanceProps:r}=i;for(let n in o)if(!t[n]&&!(r&&r[n])){const a=o[n];for(let l=0;l<a.length;l++){const{part:u}=a[l].info;if(!(u.signature&&u.signature.static)){console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Hi extends E{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=K.debounce(this.__renderDebouncer,Mo,()=>this.__render()),Jo(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const i=B(this).parentNode;(!i||i.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!B(i).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),is()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const i=this;let e=i._templateInfo?i:B(i).querySelector("template");if(!e){let t=new MutationObserver(()=>{if(B(this).querySelector("template"))t.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return t.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let i=B(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length&&B(this).previousSibling!==e[e.length-1])for(let o=0,r;o<e.length&&(r=e[o]);o++)B(i).insertBefore(r,this)}else{if(!i||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(i)}return!0}render(){ts()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!Bo||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(i){}__teardownInstance(){}_showHideChildren(){}}class _s extends Hi{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(i){const e=this.__dataHost||this;if(Di&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const t=e._bindTemplate(this.__template,!0);t.runEffects=(o,r,n)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),r=Object.assign(a.changedProps,r)),o(r,n);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:o,changedProps:{}}),n)for(const l in r){const u=Li(l);a.changedProps[u]=this.__dataHost[u]}else Object.assign(a.changedProps,r)},this.__instance=e._stampTemplate(this.__template,t),B(i).insertBefore(this.__instance,this)}__syncHostProperties(){const i=this.__syncInfo;i&&(this.__syncInfo=null,i.runEffects(i.changedProps,!1))}__teardownInstance(){const i=this.__dataHost||this;this.__instance&&(i._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const i=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==i&&(this.__instance.__hidden=i,Vi(i,this.__instance.templateInfo.childNodes)),i||this.__syncHostProperties()}}class fs extends Hi{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(i){this.__ctor||(this.__ctor=Dt(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Li(e)]=!0))}})),this.__instance=new this.__ctor,B(i).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let i=this.__instance.children;if(i&&i.length){let e=B(i[0]).parentNode;if(e){e=B(e);for(let t=0,o;t<i.length&&(o=i[t]);t++)e.removeChild(o)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let i=this.__invalidProps;if(i){this.__invalidProps=null;for(let e in i)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const i=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==i&&(this.__instance.__hidden=i,this.__instance._showHideChildren(i)),i||this.__syncHostProperties()}}const vi=Lo?_s:fs;customElements.define(vi.is,vi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=(s,i)=>{const e=s._$AN;if(e===void 0)return!1;for(const t of e)t._$AO?.(i,!1),$e(t,i);return!0},it=s=>{let i,e;do{if((i=s._$AM)===void 0)break;e=i._$AN,e.delete(s),s=i}while(e?.size===0)},Ui=s=>{for(let i;i=s._$AM;s=i){let e=i._$AN;if(e===void 0)i._$AN=e=new Set;else if(e.has(s))break;e.add(s),vs(i)}};function ms(s){this._$AN!==void 0?(it(this),this._$AM=s,Ui(this)):this._$AM=s}function gs(s,i=!1,e=0){const t=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(i)if(Array.isArray(t))for(let r=e;r<t.length;r++)$e(t[r],!1),it(t[r]);else t!=null&&($e(t,!1),it(t));else $e(this,s)}const vs=s=>{s.type==Mi.CHILD&&(s._$AP??=gs,s._$AQ??=ms)};class bs extends Ho{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,e,t){super._$AT(i,e,t),Ui(this),this.isConnected=i._$AU}_$AO(i,e=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),e&&($e(this,i),it(this))}setValue(i){if(Zo(this.t))this.t._$AI(i,this);else{const e=[...this.t._$AH];e[this.i]=i,this.t._$AI(e,this,0)}}disconnected(){}reconnected(){}}class ys extends bs{constructor(i){if(super(i),i.type!==Mi.CHILD)throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`)}update(i,[e,t]){return this.updateContent(i,e,t),Go}updateContent(i,e,t){const{parentNode:o,startNode:r}=i,n=t!=null,a=n?this.getNewNode(e,t):null,l=this.getOldNode(i);if(clearTimeout(this.__nodeRetryTimeout),n&&!a)this.__nodeRetryTimeout=setTimeout(()=>this.updateContent(i,e,t));else{if(l===a)return;l&&a?o.replaceChild(a,l):l?o.removeChild(l):a&&r.after(a)}}getNewNode(i,e){return window.Vaadin.Flow.clients[i].getByNodeId(e)}getOldNode(i){const{startNode:e,endNode:t}=i;if(e.nextSibling!==t)return e.nextSibling}disconnected(){clearTimeout(this.__nodeRetryTimeout)}}const Gi=Uo(ys);function As(s,i){return Gi(s,i)}function Cs(s,i,e){at(tt`${i.map(t=>Gi(s,t))}`,e)}function xs(s){const i=s.insertBefore;s.insertBefore=function(e,t){return t&&t.parentNode===this?i.call(this,e,t):i.call(this,e,null)}}window.Vaadin||={};window.Vaadin.FlowComponentHost||={patchVirtualContainer:xs,getNode:As,setChildNodes:Cs};class bi extends E{static get template(){return T`
      <style>
        :host {
          animation: 1ms flow-component-renderer-appear;
        }

        @keyframes flow-component-renderer-appear {
          to {
            opacity: 1;
          }
        }
      </style>
      <slot></slot>
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",function(i){this.firstChild&&typeof this.firstChild.click=="function"&&i.target===this&&(i.stopPropagation(),this.firstChild.click())}),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=K.debounce(this._debouncer,No,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(this.appid==null)return;if(this.nodeid==null){this.firstChild&&this.removeChild(this.firstChild);return}const i=this._getRenderedComponent();this.firstChild?i?this.firstChild!==i?(this.replaceChild(i,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():i?(this.appendChild(i),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(i){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(i)}return null}onComponentRendered(){}_defineFocusTarget(){var i=this._getFirstFocusableDescendant(this.firstChild);i!==null&&i.setAttribute("focus-target","true")}_getFirstFocusableDescendant(i){if(this._isFocusable(i))return i;if(i.hasAttribute&&(i.hasAttribute("disabled")||i.hasAttribute("hidden"))||!i.children)return null;for(var e=0;e<i.children.length;e++){var t=this._getFirstFocusableDescendant(i.children[e]);if(t!==null)return t}return null}_isFocusable(i){return i.hasAttribute&&typeof i.hasAttribute=="function"&&(i.hasAttribute("disabled")||i.hasAttribute("hidden"))?!1:i.tabIndex===0}_onAnimationEnd(i){i.animationName.indexOf("flow-component-renderer-appear")===0&&this._attachRenderedComponentIfAble()}}window.customElements.define(bi.is,bi);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function me(s,i){return s.split(".").reduce((e,t)=>e?e[t]:void 0,i)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ve(s){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(s);return}s.querySelector("template")&&console.warn(`WARNING: <template> inside <${s.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ws(s){const i=[];for(;s;){if(s.nodeType===Node.DOCUMENT_NODE){i.push(s);break}if(s.nodeType===Node.DOCUMENT_FRAGMENT_NODE){i.push(s),s=s.host;continue}if(s.assignedSlot){s=s.assignedSlot;continue}s=s.parentNode}return i}function Wi(s){const i=[];let e;return s.localName==="slot"?e=s.assignedElements():(i.push(s),e=[...s.children]),e.forEach(t=>i.push(...Wi(t))),i}function Ut(s,i){return i?i.closest(s)||Ut(s,i.getRootNode().host):null}function Gt(s){return s?new Set(s.split(" ")):new Set}function lt(s){return s?[...s].join(" "):""}function Ge(s,i,e){const t=Gt(s.getAttribute(i));t.add(e),s.setAttribute(i,lt(t))}function dt(s,i,e){const t=Gt(s.getAttribute(i));if(t.delete(e),t.size===0){s.removeAttribute(i);return}s.setAttribute(i,lt(t))}function Is(s){return s.nodeType===Node.TEXT_NODE&&s.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function xe(s){return s.__cells||Array.from(s.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function N(s,i){[...s.children].forEach(i)}function we(s,i){xe(s).forEach(i),s.__detailsCell&&i(s.__detailsCell)}function qi(s,i,e){let t=1;s.forEach(o=>{t%10===0&&(t+=1),o._order=e+t*i,t+=1})}function ht(s,i,e){switch(typeof e){case"boolean":s.toggleAttribute(i,e);break;case"string":s.setAttribute(i,e);break;default:s.removeAttribute(i);break}}function de(s,i,e){i||i===""?Ge(s,"part",e):dt(s,"part",e)}function re(s,i,e){s.forEach(t=>{de(t,e,i)})}function Ve(s,i){const e=xe(s);Object.entries(i).forEach(([t,o])=>{ht(s,t,o);const r=`${t}-row`;de(s,o,r),re(e,`${r}-cell`,o)})}function yi(s,i){const e=xe(s);Object.entries(i).forEach(([t,o])=>{const r=s.getAttribute(t);if(ht(s,t,o),r){const n=`${t}-${r}-row`;de(s,!1,n),re(e,`${n}-cell`,!1)}if(o){const n=`${t}-${o}-row`;de(s,o,n),re(e,`${n}-cell`,o)}})}function ce(s,i,e,t,o){ht(s,i,e),o&&de(s,!1,o),de(s,e,t||`${i}-cell`)}class ne{constructor(i,e){this.__host=i,this.__callback=e,this.__currentSlots=[],this.__onMutation=this.__onMutation.bind(this),this.__observer=new MutationObserver(this.__onMutation),this.__observer.observe(i,{childList:!0}),this.__initialCallDebouncer=z.debounce(this.__initialCallDebouncer,X,()=>this.__onMutation())}disconnect(){this.__observer.disconnect(),this.__initialCallDebouncer.cancel(),this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(i){this.__currentSlots.forEach(e=>{i?e.addEventListener("slotchange",this.__onMutation):e.removeEventListener("slotchange",this.__onMutation)})}__onMutation(){const i=!this.__currentColumns;this.__currentColumns||=[];const e=ne.getColumns(this.__host),t=e.filter(a=>!this.__currentColumns.includes(a)),o=this.__currentColumns.filter(a=>!e.includes(a)),r=this.__currentColumns.some((a,l)=>a!==e[l]);this.__currentColumns=e,this.__toggleSlotChangeListeners(!1),this.__currentSlots=[...this.__host.children].filter(a=>a instanceof HTMLSlotElement),this.__toggleSlotChangeListeners(!0),(i||t.length||o.length||r)&&this.__callback(t,o)}static __isColumnElement(i){return i.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(i.localName)}static getColumns(i){const e=[],t=i._isColumnElement||ne.__isColumnElement;return[...i.children].forEach(o=>{t(o)?e.push(o):o instanceof HTMLSlotElement&&[...o.assignedElements({flatten:!0})].filter(r=>t(r)).forEach(r=>e.push(r))}),e}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ji=s=>class extends s{static get properties(){return{resizable:{type:Boolean,sync:!0,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)",sync:!0},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)",sync:!0},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells)","_frozenChanged(frozen, _headerCell, _footerCell, _cells)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)","_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells)","_rowHeaderChanged(rowHeader, _cells)","__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),ve(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(t=>{t.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(t=>{t.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(t=>{t.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(t=>{ce(t,"frozen",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||ce(t,"frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(t=>{ce(t,"last-frozen",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||ce(t,"first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_rowHeaderChanged(e,t){t&&t.forEach(o=>{o.setAttribute("role",e?"rowheader":"gridcell")})}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,t=>t.toUpperCase())}_reorderStatusChanged(e){const t=this.__previousReorderStatus,o=t?`reorder-${t}-cell`:"",r=`reorder-${e}-cell`;this._allCells.forEach(n=>{ce(n,"reorder-status",e,r,o)}),this.__previousReorderStatus=e}_resizableChanged(e,t){e===void 0||t===void 0||t&&[t].concat(this._emptyCells).forEach(o=>{if(o){const r=o.querySelector('[part~="resize-handle"]');if(r&&o.removeChild(r),e){const n=document.createElement("div");n.setAttribute("part","resize-handle"),o.appendChild(n)}}})}_textAlignChanged(e){if(e===void 0||this._grid===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let t;getComputedStyle(this._grid).direction==="ltr"?e==="start"?t="left":e==="end"&&(t="right"):e==="start"?t="right":e==="end"&&(t="left"),this._allCells.forEach(o=>{o._content.style.textAlign=e,getComputedStyle(o._content).textAlign!==e&&(o._content.style.textAlign=t)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)}),this._grid._debouncerHiddenChanged=z.debounce(this._grid._debouncerHiddenChanged,ee,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,t,o){const r=o&&o.item&&!t.parentElement.hidden;if(!(r||e===this._headerRenderer||e===this._footerRenderer))return;const a=[t._content,this];r&&a.push(o),e.apply(this,a)}__renderCellsContent(e,t){this.hidden||!this._grid||t.forEach(o=>{if(!o.parentElement)return;const r=this._grid.__getRowModel(o.parentElement);e&&(o._renderer!==e&&this._clearCellContent(o),o._renderer=e,this._runRenderer(e,o,r))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onHeaderRendererOrBindingChanged(e,t,...o){this._renderHeaderCellContent(e,t)}__headerFooterPartNameChanged(e,t,o,r){[{cell:e,partName:o},{cell:t,partName:r}].forEach(({cell:n,partName:a})=>{if(n){const l=n.__customParts||[];n.part.remove(...l),n.__customParts=a?a.trim().split(" "):[],n.part.add(...n.__customParts)}})}_renderBodyCellsContent(e,t){!t||!e||this.__renderCellsContent(e,t)}_onRendererOrBindingChanged(e,t,...o){this._renderBodyCellsContent(e,t)}_renderFooterCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onFooterRendererOrBindingChanged(e,t){this._renderFooterCellContent(e,t)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,t,{item:o}){this.path&&this.__setTextContent(e,me(this.path,o))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,t){return e||(t!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}},Es=s=>class extends ji(oe(s)){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)",sync:!0},path:{type:String,sync:!0},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yi extends Es(E){static get is(){return"vaadin-grid-column"}}S(Yi);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ss=!1,Ts=s=>s,Wt=typeof document.head.style.touchAction=="string",ot="__polymerGestures",xt="__polymerGesturesHandled",Lt="__polymerGesturesTouchAction",Ai=25,Ci=5,ks=2,zs=["mousedown","mousemove","mouseup","click"],Ps=[0,1,4,2],Os=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function qt(s){return zs.indexOf(s)>-1}let Ki=!1;(function(){try{const s=Object.defineProperty({},"passive",{get(){Ki=!0}});window.addEventListener("test",null,s),window.removeEventListener("test",null,s)}catch{}})();function Qi(s){if(!(qt(s)||s==="touchend")&&Wt&&Ki&&Ss)return{passive:!0}}const Rs=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),Fs={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function _e(s){const i=s.type;if(!qt(i))return!1;if(i==="mousemove"){let t=s.buttons===void 0?1:s.buttons;return s instanceof window.MouseEvent&&!Os&&(t=Ps[s.which]||0),!!(t&1)}return(s.button===void 0?0:s.button)===0}function Ds(s){if(s.type==="click"){if(s.detail===0)return!0;const i=ae(s);if(!i.nodeType||i.nodeType!==Node.ELEMENT_NODE)return!0;const e=i.getBoundingClientRect(),t=s.pageX,o=s.pageY;return!(t>=e.left&&t<=e.right&&o>=e.top&&o<=e.bottom)}return!1}const Z={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Ls(s){let i="auto";const e=Zi(s);for(let t=0,o;t<e.length;t++)if(o=e[t],o[Lt]){i=o[Lt];break}return i}function Xi(s,i,e){s.movefn=i,s.upfn=e,document.addEventListener("mousemove",i),document.addEventListener("mouseup",e)}function Ae(s){document.removeEventListener("mousemove",s.movefn),document.removeEventListener("mouseup",s.upfn),s.movefn=null,s.upfn=null}const Zi=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:s=>s.composedPath&&s.composedPath()||[],te={},ue=[];function Ms(s,i){let e=document.elementFromPoint(s,i),t=e;for(;t&&t.shadowRoot&&!window.ShadyDOM;){const o=t;if(t=t.shadowRoot.elementFromPoint(s,i),o===t)break;t&&(e=t)}return e}function ae(s){const i=Zi(s);return i.length>0?i[0]:s.target}function Ji(s){const i=s.type,t=s.currentTarget[ot];if(!t)return;const o=t[i];if(!o)return;if(!s[xt]&&(s[xt]={},i.startsWith("touch"))){const n=s.changedTouches[0];if(i==="touchstart"&&s.touches.length===1&&(Z.touch.id=n.identifier),Z.touch.id!==n.identifier)return;Wt||(i==="touchstart"||i==="touchmove")&&Bs(s)}const r=s[xt];if(!r.skip){for(let n=0,a;n<ue.length;n++)a=ue[n],o[a.name]&&!r[a.name]&&a.flow&&a.flow.start.indexOf(s.type)>-1&&a.reset&&a.reset();for(let n=0,a;n<ue.length;n++)a=ue[n],o[a.name]&&!r[a.name]&&(r[a.name]=!0,a[i](s))}}function Bs(s){const i=s.changedTouches[0],e=s.type;if(e==="touchstart")Z.touch.x=i.clientX,Z.touch.y=i.clientY,Z.touch.scrollDecided=!1;else if(e==="touchmove"){if(Z.touch.scrollDecided)return;Z.touch.scrollDecided=!0;const t=Ls(s);let o=!1;const r=Math.abs(Z.touch.x-i.clientX),n=Math.abs(Z.touch.y-i.clientY);s.cancelable&&(t==="none"?o=!0:t==="pan-x"?o=n>r:t==="pan-y"&&(o=r>n)),o?s.preventDefault():Ie("track")}}function ge(s,i,e){return te[i]?(Ns(s,i,e),!0):!1}function eo(s,i,e){return te[i]?($s(s,i,e),!0):!1}function Ns(s,i,e){const t=te[i],o=t.deps,r=t.name;let n=s[ot];n||(s[ot]=n={});for(let a=0,l,u;a<o.length;a++)l=o[a],!(Rs&&qt(l)&&l!=="click")&&(u=n[l],u||(n[l]=u={_count:0}),u._count===0&&s.addEventListener(l,Ji,Qi(l)),u[r]=(u[r]||0)+1,u._count=(u._count||0)+1);s.addEventListener(i,e),t.touchAction&&Hs(s,t.touchAction)}function $s(s,i,e){const t=te[i],o=t.deps,r=t.name,n=s[ot];if(n)for(let a=0,l,u;a<o.length;a++)l=o[a],u=n[l],u&&u[r]&&(u[r]=(u[r]||1)-1,u._count=(u._count||1)-1,u._count===0&&s.removeEventListener(l,Ji,Qi(l)));s.removeEventListener(i,e)}function ct(s){ue.push(s),s.emits.forEach(i=>{te[i]=s})}function Vs(s){for(let i=0,e;i<ue.length;i++){e=ue[i];for(let t=0,o;t<e.emits.length;t++)if(o=e.emits[t],o===s)return e}return null}function Hs(s,i){Wt&&s instanceof HTMLElement&&X.run(()=>{s.style.touchAction=i}),s[Lt]=i}function jt(s,i,e){const t=new Event(i,{bubbles:!0,cancelable:!0,composed:!0});if(t.detail=e,Ts(s).dispatchEvent(t),t.defaultPrevented){const o=e.preventer||e.sourceEvent;o&&o.preventDefault&&o.preventDefault()}}function Ie(s){const i=Vs(s);i.info&&(i.info.prevent=!0)}ct({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Ae(this.info)},mousedown(s){if(!_e(s))return;const i=ae(s),e=this,t=r=>{_e(r)||(Oe("up",i,r),Ae(e.info))},o=r=>{_e(r)&&Oe("up",i,r),Ae(e.info)};Xi(this.info,t,o),Oe("down",i,s)},touchstart(s){Oe("down",ae(s),s.changedTouches[0],s)},touchend(s){Oe("up",ae(s),s.changedTouches[0],s)}});function Oe(s,i,e,t){i&&jt(i,s,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t,prevent(o){return Ie(o)}})}ct({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(s){this.moves.length>ks&&this.moves.shift(),this.moves.push(s)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ae(this.info)},mousedown(s){if(!_e(s))return;const i=ae(s),e=this,t=r=>{const n=r.clientX,a=r.clientY;xi(e.info,n,a)&&(e.info.state=e.info.started?r.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&Ie("tap"),e.info.addMove({x:n,y:a}),_e(r)||(e.info.state="end",Ae(e.info)),i&&wt(e.info,i,r),e.info.started=!0)},o=r=>{e.info.started&&t(r),Ae(e.info)};Xi(this.info,t,o),this.info.x=s.clientX,this.info.y=s.clientY},touchstart(s){const i=s.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchmove(s){const i=ae(s),e=s.changedTouches[0],t=e.clientX,o=e.clientY;xi(this.info,t,o)&&(this.info.state==="start"&&Ie("tap"),this.info.addMove({x:t,y:o}),wt(this.info,i,e),this.info.state="track",this.info.started=!0)},touchend(s){const i=ae(s),e=s.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),wt(this.info,i,e))}});function xi(s,i,e){if(s.prevent)return!1;if(s.started)return!0;const t=Math.abs(s.x-i),o=Math.abs(s.y-e);return t>=Ci||o>=Ci}function wt(s,i,e){if(!i)return;const t=s.moves[s.moves.length-2],o=s.moves[s.moves.length-1],r=o.x-s.x,n=o.y-s.y;let a,l=0;t&&(a=o.x-t.x,l=o.y-t.y),jt(i,"track",{state:s.state,x:e.clientX,y:e.clientY,dx:r,dy:n,ddx:a,ddy:l,sourceEvent:e,hover(){return Ms(e.clientX,e.clientY)}})}ct({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(s){_e(s)&&(this.info.x=s.clientX,this.info.y=s.clientY)},click(s){_e(s)&&wi(this.info,s)},touchstart(s){const i=s.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchend(s){wi(this.info,s.changedTouches[0],s)}});function wi(s,i,e){const t=Math.abs(i.clientX-s.x),o=Math.abs(i.clientY-s.y),r=ae(e||i);!r||Fs[r.localName]&&r.hasAttribute("disabled")||(isNaN(t)||isNaN(o)||t<=Ai&&o<=Ai||Ds(i))&&(s.prevent||jt(r,"tap",{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:e}))}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Us=s=>class extends s{static get properties(){return{width:{type:String,value:"58px",sync:!0},flexGrow:{type:Number,value:0,sync:!0},selectAll:{type:Boolean,value:!1,notify:!0,sync:!0},autoSelect:{type:Boolean,value:!1,sync:!0},dragSelect:{type:Boolean,value:!1,sync:!0},_indeterminate:{type:Boolean,sync:!0},_selectAllHidden:Boolean}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, _indeterminate, _selectAllHidden)"]}_defaultHeaderRenderer(e,t){let o=e.firstElementChild;o||(o=document.createElement("vaadin-checkbox"),o.setAttribute("aria-label","Select All"),o.classList.add("vaadin-grid-select-all-checkbox"),e.appendChild(o),o.addEventListener("checked-changed",this.__onSelectAllCheckedChanged.bind(this)));const r=this.__isChecked(this.selectAll,this._indeterminate);o.__rendererChecked=r,o.checked=r,o.hidden=this._selectAllHidden,o.indeterminate=this._indeterminate}_defaultRenderer(e,t,{item:o,selected:r}){let n=e.firstElementChild;n||(n=document.createElement("vaadin-checkbox"),n.setAttribute("aria-label","Select Row"),e.appendChild(n),n.addEventListener("checked-changed",this.__onSelectRowCheckedChanged.bind(this)),ge(e,"track",this.__onCellTrack.bind(this)),e.addEventListener("mousedown",this.__onCellMouseDown.bind(this)),e.addEventListener("click",this.__onCellClick.bind(this))),n.__item=o,n.__rendererChecked=r,n.checked=r}__onSelectAllCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(this._indeterminate||e.target.checked?this._selectAll():this._deselectAll())}__onSelectRowCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(e.target.checked?this._selectItem(e.target.__item):this._deselectItem(e.target.__item))}__onCellTrack(e){if(this.dragSelect)if(this.__dragCurrentY=e.detail.y,this.__dragDy=e.detail.dy,e.detail.state==="start"){const o=this._grid._getRenderedRows().find(r=>r.contains(e.currentTarget.assignedSlot));this.__selectOnDrag=!this._grid._isSelected(o._item),this.__dragStartIndex=o.index,this.__dragStartItem=o._item,this.__dragAutoScroller()}else e.detail.state==="end"&&(this.__dragStartItem&&(this.__selectOnDrag?this._selectItem(this.__dragStartItem):this._deselectItem(this.__dragStartItem)),setTimeout(()=>{this.__dragStartIndex=void 0}))}__onCellMouseDown(e){this.dragSelect&&e.preventDefault()}__onCellClick(e){this.__dragStartIndex!==void 0&&e.preventDefault()}_onCellKeyDown(e){const t=e.composedPath()[0];if(e.keyCode===32&&(t===this._headerCell||this._cells.includes(t)&&!this.autoSelect)){const o=t._content.firstElementChild;o.checked=!o.checked}}__dragAutoScroller(){if(this.__dragStartIndex===void 0)return;const e=this._grid._getRenderedRows(),t=e.find(l=>{const u=l.getBoundingClientRect();return this.__dragCurrentY>=u.top&&this.__dragCurrentY<=u.bottom});let o=t?t.index:void 0;const r=this.__getScrollableArea();this.__dragCurrentY<r.top?o=this._grid._firstVisibleIndex:this.__dragCurrentY>r.bottom&&(o=this._grid._lastVisibleIndex),o!==void 0&&e.forEach(l=>{(o>this.__dragStartIndex&&l.index>=this.__dragStartIndex&&l.index<=o||o<this.__dragStartIndex&&l.index<=this.__dragStartIndex&&l.index>=o)&&(this.__selectOnDrag?this._selectItem(l._item):this._deselectItem(l._item),this.__dragStartItem=void 0)});const n=r.height*.15,a=10;if(this.__dragDy<0&&this.__dragCurrentY<r.top+n){const l=r.top+n-this.__dragCurrentY,u=Math.min(1,l/n);this._grid.$.table.scrollTop-=u*a}if(this.__dragDy>0&&this.__dragCurrentY>r.bottom-n){const l=this.__dragCurrentY-(r.bottom-n),u=Math.min(1,l/n);this._grid.$.table.scrollTop+=u*a}setTimeout(()=>this.__dragAutoScroller(),10)}__getScrollableArea(){const e=this._grid.$.table.getBoundingClientRect(),t=this._grid.$.header.getBoundingClientRect(),o=this._grid.$.footer.getBoundingClientRect();return{top:e.top+t.height,bottom:e.bottom-o.height,left:e.left,right:e.right,height:e.height-t.height-o.height,width:e.width}}_selectAll(){}_deselectAll(){}_selectItem(e){}_deselectItem(e){}__isChecked(e,t){return t||e}};class Mt extends Us(Yi){static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"}}}_defaultHeaderRenderer(i,e){super._defaultHeaderRenderer(i,e);const t=i.firstElementChild;t&&(t.id="selectAllCheckbox")}_selectAll(){this.selectAll=!0,this.$server.selectAll()}_deselectAll(){this.selectAll=!1,this.$server.deselectAll()}_selectItem(i){this._grid.$connector.doSelection([i],!0)}_deselectItem(i){this._grid.$connector.doDeselection([i],!0),this.selectAll=!1}}customElements.define(Mt.is,Mt);y("vaadin-input-container",v`
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
 */const Gs=v`
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
`;Wo("font-icons",Gs);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ut=v`
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
`;y("",ut,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const to=v`
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
 */const Yt=v`
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
`;y("",Yt,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ws=v`
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
`,pt=[Yt,ut,to,Ws];y("",pt,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-text-field",pt,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qs=s=>class extends s{static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",e=>{e.target===this&&e.preventDefault()}),this.addEventListener("click",e=>{e.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(t=>t.focus&&t.focus())})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const js=v`
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
 */y("vaadin-input-container",js,{moduleId:"vaadin-input-container-styles"});class io extends qs(P(oe(E))){static get is(){return"vaadin-input-container"}static get template(){return T`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}}S(io);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Kt{constructor(i,e){this.slot=i,this.callback=e,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const i=this.slot.assignedNodes({flatten:!0});let e=[];const t=[],o=[];i.length&&(e=i.filter(r=>!this._storedNodes.includes(r))),this._storedNodes.length&&this._storedNodes.forEach((r,n)=>{const a=i.indexOf(r);a===-1?t.push(r):a!==n&&o.push(r)}),(e.length||t.length||o.length)&&this.callback({addedNodes:e,movedNodes:o,removedNodes:t}),this._storedNodes=i}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Ys=0;function _t(){return Ys++}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class j extends EventTarget{static generateId(i,e){return`${e||"default"}-${i.localName}-${_t()}`}constructor(i,e,t,o={}){super();const{initializer:r,multiple:n,observe:a,useUniqueId:l}=o;this.host=i,this.slotName=e,this.tagName=t,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof n=="boolean"?n:!1,this.slotInitializer=r,n&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(i,e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let i=this.getSlotChild();i?(this.node=i,this.initAddedNode(i)):(i=this.attachDefaultNode(),this.initNode(i))}initMultiple(){const i=this.getSlotChildren();if(i.length===0){const e=this.attachDefaultNode();e&&(this.nodes=[e],this.initNode(e))}else this.nodes=i,i.forEach(e=>{this.initAddedNode(e)})}attachDefaultNode(){const{host:i,slotName:e,tagName:t}=this;let o=this.defaultNode;return!o&&t&&(o=document.createElement(t),o instanceof Element&&(e!==""&&o.setAttribute("slot",e),this.node=o,this.defaultNode=o)),o&&i.appendChild(o),o}getSlotChildren(){const{slotName:i}=this;return Array.from(this.host.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===i||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&i==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(i){const{slotInitializer:e}=this;e&&e(i,this.host)}initCustomNode(i){}teardownNode(i){}initAddedNode(i){i!==this.defaultNode&&(this.initCustomNode(i),this.initNode(i))}observeSlot(){const{slotName:i}=this,e=i===""?"slot:not([name])":`slot[name=${i}]`,t=this.host.shadowRoot.querySelector(e);this.__slotObserver=new Kt(t,({addedNodes:o,removedNodes:r})=>{const n=this.multiple?this.nodes:[this.node],a=o.filter(l=>!Is(l)&&!n.includes(l));r.length&&(this.nodes=n.filter(l=>!r.includes(l)),r.forEach(l=>{this.teardownNode(l)})),a&&a.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...n,...a].filter(l=>l!==this.defaultNode),a.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class be extends j{constructor(i){super(i,"tooltip"),this.setTarget(i)}initCustomNode(i){i.target=this.target,this.ariaTarget!==void 0&&(i.ariaTarget=this.ariaTarget),this.context!==void 0&&(i.context=this.context),this.manual!==void 0&&(i.manual=this.manual),this.opened!==void 0&&(i.opened=this.opened),this.position!==void 0&&(i._position=this.position),this.shouldShow!==void 0&&(i.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(i){this.ariaTarget=i;const e=this.node;e&&(e.ariaTarget=i)}setContext(i){this.context=i;const e=this.node;e&&(e.context=i)}setManual(i){this.manual=i;const e=this.node;e&&(e.manual=i)}setOpened(i){this.opened=i;const e=this.node;e&&(e.opened=i)}setPosition(i){this.position=i;const e=this.node;e&&(e._position=i)}setShouldShow(i){this.shouldShow=i;const e=this.node;e&&(e.shouldShow=i)}setTarget(i){this.target=i;const e=this.node;e&&(e.target=i)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ks=v`
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
 */const Qs=v`
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
 */const Xs=v`
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
 */const Qt=[Qs,Xs,Ks];/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ft extends j{constructor(i,e){super(i,"input","input",{initializer:(t,o)=>{o.value&&(t.value=o.value),o.type&&t.setAttribute("type",o.type),t.id=this.defaultId,typeof e=="function"&&e(t)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ee=$(s=>class extends s{get _keyboardActive(){return $t()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const We=$(s=>class extends s{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xt=s=>class extends We(s){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,t){super._disabledChanged(e,t),e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):t&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zt=$(s=>class extends Ee(Xt(s)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,t){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):t&&this._removeFocusListeners(t)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,t){super._disabledChanged(e,t),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Se=$(s=>class extends s{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const It=new WeakMap;function Zs(s){return It.has(s)||It.set(s,new Set),It.get(s)}function Js(s,i){const e=document.createElement("style");e.textContent=s,i===document?document.head.appendChild(e):i.insertBefore(e,i.firstChild)}const er=$(s=>class extends s{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),t=Zs(e);this.slotStyles.forEach(o=>{t.has(o)||(Js(o,e),t.add(o))})}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mt=$(s=>class extends s{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=e??"")}_inputElementChanged(e,t){e?this._addInputListeners(e):t&&this._removeInputListeners(t)}_hasInputValueChanged(e,t){(e||t)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const t=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=t.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,t){this._toggleHasValue(this._hasValue),!(e===""&&t===void 0)&&(this.__userInput||this._forwardInputValue(e))}_setHasInputValue(e){const t=e.composedPath()[0];this._hasInputValue=t.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tr=s=>class extends mt(Se(s)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",e=>this._onClearButtonMouseDown(e)),this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e)))}_onClearButtonClick(e){e.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(e){e.preventDefault(),le||this.inputElement.focus()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Et=new Map;function Jt(s){return Et.has(s)||Et.set(s,new WeakMap),Et.get(s)}function oo(s,i){s&&s.removeAttribute(i)}function so(s,i){if(!s||!i)return;const e=Jt(i);if(e.has(s))return;const t=Gt(s.getAttribute(i));e.set(s,new Set(t))}function ir(s,i){if(!s||!i)return;const e=Jt(i),t=e.get(s);!t||t.size===0?s.removeAttribute(i):Ge(s,i,lt(t)),e.delete(s)}function St(s,i,e={newId:null,oldId:null,fromUser:!1}){if(!s||!i)return;const{newId:t,oldId:o,fromUser:r}=e,n=Jt(i),a=n.get(s);if(!r&&a){o&&a.delete(o),t&&a.add(t);return}r&&(a?t||n.delete(s):so(s,i),oo(s,i)),dt(s,i,o);const l=t||lt(a);l&&Ge(s,i,l)}function or(s,i){so(s,i),oo(s,i)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class sr{constructor(i){this.host=i,this.__required=!1}setTarget(i){this.__target=i,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(i){this.__setAriaRequiredAttribute(i),this.__required=i}setAriaLabel(i){this.__setAriaLabelToAttribute(i),this.__label=i}setLabelId(i,e=!1){const t=e?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(i,t,e),e?this.__labelIdFromUser=i:this.__labelId=i}setErrorId(i){this.__setErrorIdToAriaAttribute(i,this.__errorId),this.__errorId=i}setHelperId(i){this.__setHelperIdToAriaAttribute(i,this.__helperId),this.__helperId=i}__setAriaLabelToAttribute(i){this.__target&&(i?(or(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",i)):this.__label&&(ir(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(i,e,t){St(this.__target,"aria-labelledby",{newId:i,oldId:e,fromUser:t})}__setErrorIdToAriaAttribute(i,e){St(this.__target,"aria-describedby",{newId:i,oldId:e,fromUser:!1})}__setHelperIdToAriaAttribute(i,e){St(this.__target,"aria-describedby",{newId:i,oldId:e,fromUser:!1})}__setAriaRequiredAttribute(i){this.__target&&(["input","textarea"].includes(this.__target.localName)||(i?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ei extends j{constructor(i,e,t,o={}){super(i,e,t,{...o,useUniqueId:!0})}initCustomNode(i){this.__updateNodeId(i),this.__notifyChange(i)}teardownNode(i){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const i=super.attachDefaultNode();return i&&this.__updateNodeId(i),i}restoreDefaultNode(){}updateDefaultNode(i){this.__notifyChange(i)}observeNode(i){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(e=>{e.forEach(t=>{const o=t.target,r=o===this.node;t.type==="attributes"?r&&this.__updateNodeId(o):(r||o.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(i,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(i){return i?i.nodeType===Node.ELEMENT_NODE&&(customElements.get(i.localName)||i.children.length>0)||i.textContent&&i.textContent.trim()!=="":!1}__notifyChange(i){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(i),node:i}}))}__updateNodeId(i){const e=!this.nodes||i===this.nodes[0];i.nodeType===Node.ELEMENT_NODE&&(!this.multiple||e)&&!i.id&&(i.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class rr extends ei{constructor(i){super(i,"error-message","div")}setErrorMessage(i){this.errorMessage=i,this.updateDefaultNode(this.node)}setInvalid(i){this.invalid=i,this.updateDefaultNode(this.node)}initAddedNode(i){i!==this.defaultNode&&this.initCustomNode(i)}initNode(i){this.updateDefaultNode(i)}initCustomNode(i){i.textContent&&!this.errorMessage&&(this.errorMessage=i.textContent.trim()),super.initCustomNode(i)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(i){const{errorMessage:e,invalid:t}=this,o=!!(t&&e&&e.trim()!=="");i&&(i.textContent=o?e:"",i.hidden=!o,o?i.setAttribute("role","alert"):i.removeAttribute("role")),super.updateDefaultNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class nr extends ei{constructor(i){super(i,"helper",null)}setHelperText(i){this.helperText=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:i}=this;if(i&&i.trim()!==""){this.tagName="div";const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(i){i&&(i.textContent=this.helperText),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ar extends ei{constructor(i){super(i,"label","label")}setLabel(i){this.label=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:i}=this;if(i&&i.trim()!==""){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(i){i&&(i.textContent=this.label),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ti=$(s=>class extends H(s){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new ar(this),this._labelController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-label",e.detail.hasContent)})}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ii=$(s=>class extends s{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ro=s=>class extends ii(ti(H(s))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new sr(this),this._helperController=new nr(this),this._errorController=new rr(this),this._errorController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",e=>{const{hasContent:t,node:o}=e.detail;this.__labelChanged(t,o)}),this._helperController.addEventListener("slot-content-changed",e=>{const{hasContent:t,node:o}=e.detail;this.toggleAttribute("has-helper",t),this.__helperChanged(t,o)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,t){e?this._fieldAriaController.setHelperId(t.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(e){this._fieldAriaController.setAriaLabel(e)}_accessibleNameRefChanged(e){this._fieldAriaController.setLabelId(e,!0)}__labelChanged(e,t){e?this._fieldAriaController.setLabelId(t.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{if(e){const t=this._errorNode;this._fieldAriaController.setErrorId(t&&t.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const no=$(s=>class extends s{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((t,o)=>{this._delegateAttribute(t,e[o])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((t,o)=>{this._delegateProperty(t,e[o])})}_delegateAttribute(e,t){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",t?"true":!1),typeof t=="boolean"?this.stateTarget.toggleAttribute(e,t):t?this.stateTarget.setAttribute(e,t):this.stateTarget.removeAttribute(e))}_delegateProperty(e,t){this.stateTarget&&(this.stateTarget[e]=t)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lr=$(s=>class extends no(ii(mt(s))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(t=>this.__isValidConstraint(t))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...t){if(!e)return;const o=this._hasValidConstraints(t),r=this.__previousHasConstraints&&!o;(this._hasValue||this.invalid)&&o?this.validate():r&&this._setInvalid(!1),this.__previousHasConstraints=o}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return!!e||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ao=s=>class extends er(Zt(lr(ro(tr(Se(s)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=z.debounce(this._preventInputDebouncer,Q.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const t=e.clipboardData.getData("text");this.__allowedTextRegExp.test(t)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const t=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(t)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${e}*$`,"u")}catch(t){console.error(t)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lo=s=>class extends ao(s){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this.validate()}_onInput(e){super._onInput(e),this.invalid&&this.validate()}_valueChanged(e,t){super._valueChanged(e,t),t!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qe{constructor(i,e){this.input=i,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",t=>{this.__initLabel(t.detail.node)}),this.__initLabel(e.node)}__initLabel(i){i&&(i.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&i.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const i=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",i)};this.input.addEventListener("click",i)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dr=s=>class extends lo(s){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new ft(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new qe(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-text-field",Qt,{moduleId:"vaadin-text-field-styles"});class hr extends dr(P(V(E))){static get is(){return"vaadin-text-field"}static get template(){return T`
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
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}ready(){super.ready(),this._tooltipController=new be(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}S(hr);y("vaadin-checkbox",v`
    :host {
      color: var(--vaadin-checkbox-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-checkbox-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-checkbox-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--vaadin-checkbox-border-radius, var(--lumo-border-radius-s));
      background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--_selection-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--vaadin-checkbox-checkmark-char, var(--lumo-icons-checkmark));
      color: var(--vaadin-checkbox-checkmark-color, var(--lumo-primary-contrast-color));
      font-size: var(--vaadin-checkbox-checkmark-size, calc(var(--_checkbox-size) + 2px));
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: var(--vaadin-checkbox-checkmark-char-indeterminate, '');
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background: var(--vaadin-checkbox-background-hover, var(--lumo-contrast-30pct));
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gt=s=>class extends We(Se(s)){get _activeKeys(){return[" "]}ready(){super.ready(),ge(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),ge(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",t=>{this._activeKeys.includes(t.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ho=$(s=>class extends no(We(mt(s))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const t=e.target;this._toggleChecked(t.checked)}_toggleChecked(e){this.checked=e}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cr=s=>class extends ti(ho(Zt(gt(s)))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new ft(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new qe(this.inputElement,this._labelController))}_shouldSetActive(e){return e.target.localName==="a"?!1:super._shouldSetActive(e)}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ur=v`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  ::slotted(label) {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-checkbox",ur,{moduleId:"vaadin-checkbox-styles"});class pr extends cr(V(P(E))){static get is(){return"vaadin-checkbox"}static get template(){return T`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new be(this),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}S(pr);y("vaadin-radio-button",v`
    :host {
      color: var(--vaadin-radio-button-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-radio-button-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_radio-button-size: var(--vaadin-radio-button-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-radio-button-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    [part='radio'] {
      width: var(--_radio-button-size);
      height: var(--_radio-button-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: 50%;
      background: var(--vaadin-radio-button-background, var(--lumo-contrast-20pct));
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      will-change: transform;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    /* Used for activation "halo" */
    [part='radio']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_radio-button-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
      will-change: transform, opacity;
    }

    /* Used for the dot */
    [part='radio']::after {
      content: '';
      pointer-events: none;
      width: 0;
      height: 0;
      border: var(--vaadin-radio-button-dot-size, 3px) solid
        var(--vaadin-radio-button-dot-color, var(--lumo-primary-contrast-color));
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 0.25s transform;
      will-change: transform;
      background-clip: content-box;
    }

    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([checked]) [part='radio'] {
      background-color: var(--_selection-color);
    }

    :host([checked]) [part='radio']::after {
      transform: translate(-50%, -50%) scale(1);
    }

    :host(:not([checked]):not([disabled]):hover) [part='radio'] {
      background: var(--vaadin-radio-button-background-hover, var(--lumo-contrast-30pct));
    }

    :host([active]) [part='radio'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='radio'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='radio']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    :host([focus-ring]) [part='radio'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='radio'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='radio']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }
  `,{moduleId:"lumo-radio-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _r=s=>class extends ti(ho(Zt(gt(s)))){static get properties(){return{name:{type:String,value:""},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("radio"),this.value="on"}ready(){super.ready(),this.addController(new ft(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new qe(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fr=v`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-radio-button-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='radio'],
  ::slotted(input),
  ::slotted(label) {
    grid-row: 1;
  }

  [part='radio'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='radio'] {
    width: var(--vaadin-radio-button-size, 1em);
    height: var(--vaadin-radio-button-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='radio']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-radio-button-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='radio'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) [part='radio'] {
      outline-width: 2px;
    }

    :host([disabled]) [part='radio'] {
      outline-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-radio-button",fr,{moduleId:"vaadin-radio-button-styles"});class mr extends _r(V(P(H(E)))){static get is(){return"vaadin-radio-button"}static get template(){return T`
      <div class="vaadin-radio-button-container">
        <div part="radio" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
    `}}S(mr);const gr=v`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-radio-button */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'],
  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;y("vaadin-radio-group",[Yt,to,gr],{moduleId:"lumo-radio-group"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vr=s=>class extends ro(Ee(We(Se(s)))){static get properties(){return{value:{type:String,notify:!0,value:"",observer:"__valueChanged"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__readonlyChanged"},_fieldName:{type:String}}}constructor(){super(),this.__registerRadioButton=this.__registerRadioButton.bind(this),this.__unregisterRadioButton=this.__unregisterRadioButton.bind(this),this.__onRadioButtonCheckedChange=this.__onRadioButtonCheckedChange.bind(this),this._tooltipController=new be(this),this._tooltipController.addEventListener("tooltip-changed",e=>{const t=e.detail.node;if(t&&t.isConnected){const o=this.__radioButtons.map(r=>r.inputElement);this._tooltipController.setAriaTarget(o)}else this._tooltipController.setAriaTarget([])})}get __radioButtons(){return this.__filterRadioButtons([...this.children])}get __selectedRadioButton(){return this.__radioButtons.find(e=>e.checked)}get isHorizontalRTL(){return this.__isRTL&&this._theme!=="vertical"}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","radiogroup"),this._fieldName=`${this.localName}-${_t()}`;const e=this.shadowRoot.querySelector("slot:not([name])");this._observer=new Kt(e,({addedNodes:t,removedNodes:o})=>{this.__filterRadioButtons(t).reverse().forEach(this.__registerRadioButton),this.__filterRadioButtons(o).forEach(this.__unregisterRadioButton);const r=this.__radioButtons.map(n=>n.inputElement);this._tooltipController.setAriaTarget(r)}),this.addController(this._tooltipController)}__filterRadioButtons(e){return e.filter(t=>t.nodeType===Node.ELEMENT_NODE&&t.localName==="vaadin-radio-button")}_onKeyDown(e){super._onKeyDown(e);const t=e.composedPath().find(o=>o.nodeType===Node.ELEMENT_NODE&&o.localName==="vaadin-radio-button");["ArrowLeft","ArrowUp"].includes(e.key)&&(e.preventDefault(),this.__selectNextRadioButton(t)),["ArrowRight","ArrowDown"].includes(e.key)&&(e.preventDefault(),this.__selectPrevRadioButton(t))}_invalidChanged(e){super._invalidChanged(e),e?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")}__selectNextRadioButton(e){const t=this.__radioButtons.indexOf(e);this.__selectIncRadioButton(t,this.isHorizontalRTL?1:-1)}__selectPrevRadioButton(e){const t=this.__radioButtons.indexOf(e);this.__selectIncRadioButton(t,this.isHorizontalRTL?-1:1)}__selectIncRadioButton(e,t){const o=(this.__radioButtons.length+e+t)%this.__radioButtons.length,r=this.__radioButtons[o];r.disabled?this.__selectIncRadioButton(o,t):(r.focusElement.focus(),r.focusElement.click())}__registerRadioButton(e){e.name=this._fieldName,e.addEventListener("checked-changed",this.__onRadioButtonCheckedChange),(this.disabled||this.readonly)&&(e.disabled=!0),e.checked&&this.__selectRadioButton(e)}__unregisterRadioButton(e){e.removeEventListener("checked-changed",this.__onRadioButtonCheckedChange),e.value===this.value&&this.__selectRadioButton(null)}__onRadioButtonCheckedChange(e){e.target.checked&&this.__selectRadioButton(e.target)}__valueChanged(e,t){if(!(t===void 0&&e==="")){if(e){const o=this.__radioButtons.find(r=>r.value===e);o?(this.__selectRadioButton(o),this.toggleAttribute("has-value",!0)):console.warn(`The radio button with the value "${e}" was not found.`)}else this.__selectRadioButton(null),this.removeAttribute("has-value");t!==void 0&&this.validate()}}__readonlyChanged(e,t){!e&&t===void 0||t!==e&&this.__updateRadioButtonsDisabledProperty()}_disabledChanged(e,t){super._disabledChanged(e,t),!(!e&&t===void 0)&&t!==e&&this.__updateRadioButtonsDisabledProperty()}_shouldRemoveFocus(e){return!this.contains(e.relatedTarget)}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this.validate()}__selectRadioButton(e){e?this.value=e.value:this.value="",this.__radioButtons.forEach(t=>{t.checked=t===e}),this.readonly&&this.__updateRadioButtonsDisabledProperty()}__updateRadioButtonsDisabledProperty(){this.__radioButtons.forEach(e=>{this.readonly?e.disabled=e!==this.__selectedRadioButton:e.disabled=this.disabled})}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const br=v`
  :host {
    display: inline-flex;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  .vaadin-group-field-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  [part='group-field'] {
    display: flex;
    flex-wrap: wrap;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-radio-group",br,{moduleId:"vaadin-radio-group-styles"});class yr extends vr(V(P(E))){static get is(){return"vaadin-radio-group"}static get template(){return T`
      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}}S(yr);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ar=v`
  [part='input-field'],
  [part='input-field'] ::slotted(textarea) {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] {
    /* Equal to the implicit padding in vaadin-text-field */
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part='input-field']::after {
    display: none;
  }

  :host([readonly]) [part='input-field'] {
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([readonly]) [part='input-field']::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field'] {
      background-color: var(--lumo-contrast-20pct);
    }
  }

  [part='input-field'] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  /* Vertically align icon prefix/suffix with the first line of text */
  [part='input-field'] ::slotted(vaadin-icon) {
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }
`;y("vaadin-text-area",[pt,Ar],{moduleId:"lumo-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qe=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(i=>{i.target.resizables?i.target.resizables.forEach(e=>{e._onResize(i.contentRect)}):i.target._onResize(i.contentRect)})})}),oi=$(s=>class extends s{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),Qe.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,Qe.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),Qe.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const t=e.resizables;t&&(t.delete(this),t.size===0&&Qe.unobserve(e)),this.__parent=null}}_onResize(e){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Cr extends j{constructor(i,e){super(i,"textarea","textarea",{initializer:(t,o)=>{const r=o.getAttribute("value");r&&(t.value=r);const n=o.getAttribute("name");n&&t.setAttribute("name",n),t.id=this.defaultId,typeof e=="function"&&e(t)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xr=s=>class extends oi(lo(s)){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}get clearElement(){return this.$.clearButton}_onResize(){this._updateHeight(),this.__scrollPositionUpdated()}_onScroll(){this.__scrollPositionUpdated()}ready(){super.ready(),this.addController(new Cr(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new qe(this.inputElement,this._labelController)),this.addEventListener("animationend",this._onAnimationEnd),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",e=>{const t=this._inputField.scrollTop;this._inputField.scrollTop+=e.deltaY,t!==this._inputField.scrollTop&&(e.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",`${this._inputField.scrollTop}px`)}_onAnimationEnd(e){e.animationName.indexOf("vaadin-text-area-appear")===0&&this._updateHeight()}_valueChanged(e,t){super._valueChanged(e,t),this._updateHeight()}_updateHeight(){const e=this.inputElement,t=this._inputField;if(!e||!t)return;const o=t.scrollTop,r=this.value?this.value.length:0;if(this._oldValueLength>=r){const a=getComputedStyle(t).height,l=getComputedStyle(e).width;t.style.display="block",t.style.height=a,e.style.maxWidth=l,e.style.height="auto"}this._oldValueLength=r;const n=e.scrollHeight;n>e.clientHeight&&(e.style.height=`${n}px`),e.style.removeProperty("max-width"),t.style.removeProperty("display"),t.style.removeProperty("height"),t.scrollTop=o}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const e=this.inputElement.value.match(this.pattern);return e?e[0]===e.input:!1}catch{return!0}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wr=v`
  :host {
    animation: 1ms vaadin-text-area-appear;
  }

  .vaadin-text-area-container {
    flex: auto;
  }

  /* The label, helper text and the error message should neither grow nor shrink. */
  [part='label'],
  [part='helper-text'],
  [part='error-message'] {
    flex: none;
  }

  [part='input-field'] {
    flex: auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  ::slotted(textarea) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    resize: none;
    margin: 0;
    padding: 0 0.25em;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    font-size: 1em;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  /* Override styles from <vaadin-input-container> */
  [part='input-field'] ::slotted(textarea) {
    align-self: stretch;
    white-space: pre-wrap;
  }

  [part='input-field'] ::slotted(:not(textarea)) {
    align-self: flex-start;
  }

  /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
  :host([disabled]) ::slotted(textarea) {
    user-select: none;
  }

  @keyframes vaadin-text-area-appear {
    to {
      opacity: 1;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-text-area",[Qt,wr],{moduleId:"vaadin-text-area-styles"});class Ir extends xr(P(V(E))){static get is(){return"vaadin-text-area"}static get template(){return T`
      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-scroll="_onScroll"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
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
    `}ready(){super.ready(),this._tooltipController=new be(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}S(Ir);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Te=v`
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
`;y("",Te,{moduleId:"lumo-overlay"});const Er=v`
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
`;y("vaadin-tooltip-overlay",[Te,Er],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const si=v`
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
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Sr{saveFocus(i){this.focusNode=i||Ot()}restoreFocus(){const i=this.focusNode;i&&(Ot()===document.body?setTimeout(()=>i.focus()):i.focus(),this.focusNode=null)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const co=s=>class extends H(s){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new qo(this),this.__focusTrapController=new jo(this),this.__focusRestorationController=new Sr}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()&&this.__focusRestorationController.restoreFocus()}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const e=Ot();return e===document.body||this._deepContains(e)}_deepContains(e){if(this.contains(e))return!0;let t=e;const o=e.ownerDocument;for(;t&&t!==o&&t!==this;)t=t.parentNode||t.host;return t===this}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const et=()=>Array.from(document.body.children).filter(s=>s instanceof HTMLElement&&s._hasOverlayStackMixin&&!s.hasAttribute("closing")).sort((s,i)=>s.__zIndex-i.__zIndex||0),Tr=s=>s===et().pop(),kr=s=>class extends s{constructor(){super(),this._hasOverlayStackMixin=!0}get _last(){return Tr(this)}bringToFront(){let e="";const t=et().filter(o=>o!==this).pop();t&&(e=t.__zIndex+1),this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),et().forEach(e=>{e!==this&&(e.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=et();let t;for(;(t=e.pop())&&!(t!==this&&(t.$.overlay.style.removeProperty("pointer-events"),!t.modeless)););}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ri=s=>class extends co(kr(s)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:{type:Object},model:{type:Object},renderer:{type:Object},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),He&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}close(e){const t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,o=window.innerWidth>e,r=document.documentElement.clientHeight;o&&r>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${r-e}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_rendererOrDataChanged(e,t,o,r){const n=this._oldOwner!==t||this._oldModel!==o;this._oldModel=o,this._oldOwner=t;const a=this._oldRenderer!==e,l=this._oldRenderer!==void 0;this._oldRenderer=e;const u=this._oldOpened!==r;this._oldOpened=r,a&&l&&(this.innerHTML="",delete this._$litPart$),r&&e&&(a||u||n)&&this.requestContentUpdate()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_openedChanged(e,t){e?(this._saveFocus(),this._animatedOpening(),Yo(this,()=>{this._trapFocus();const o=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(o)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):t&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this),t=e.getPropertyValue("animation-name");return!(e.getPropertyValue("display")==="none")&&t&&t!=="none"}_enqueueAnimation(e,t){const o=`__${e}Handler`,r=n=>{n&&n.target!==this||(t(),this.removeEventListener("animationend",r),delete this[o])};this[o]=r,this.addEventListener("animationend",r)}_flushAnimation(e){const t=`__${e}Handler`;typeof this[t]=="function"&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(e){return this._last}_outsideClickListener(e){if(e.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(e))return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last&&!(this.modeless&&!e.composedPath().includes(this.$.overlay))&&e.key==="Escape"){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tt={start:"top",end:"bottom"},kt={start:"left",end:"right"},Ii=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(i=>{i.target.__overlay&&i.target.__overlay._updatePosition()})})}),ni=s=>class extends s{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.visualViewport.addEventListener("resize",this._updatePosition),window.visualViewport.addEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes=ws(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.visualViewport.removeEventListener("resize",this._updatePosition),window.visualViewport.removeEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,t){if(this.__removeUpdatePositionEventListeners(),t&&(t.__overlay=null,Ii.unobserve(t),e&&(this.__addUpdatePositionEventListeners(),t.__overlay=this,Ii.observe(t))),e){const o=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(r=>{this.__margins[r]=parseInt(o[r],10)})),this.setAttribute("dir",o.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){e.target instanceof Node&&this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),t=this.__shouldAlignStartVertically(e);this.style.justifyContent=t?"flex-start":"flex-end";const o=this.__isRTL,r=this.__shouldAlignStartHorizontally(e,o),n=!o&&r||o&&!r;this.style.alignItems=n?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,a,this.noVerticalOverlap,Tt,this,t),u=this.__calculatePositionInOneDimension(e,a,this.noHorizontalOverlap,kt,this,r);Object.assign(this.style,l,u),this.toggleAttribute("bottom-aligned",!t),this.toggleAttribute("top-aligned",t),this.toggleAttribute("end-aligned",!n),this.toggleAttribute("start-aligned",n)}__shouldAlignStartHorizontally(e,t){const o=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const r=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!t&&this.horizontalAlign==="start"||t&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,o,r,this.__margins,n,this.noHorizontalOverlap,kt)}__shouldAlignStartVertically(e){const t=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const o=Math.min(window.innerHeight,document.documentElement.clientHeight),r=this.verticalAlign==="top";return this.__shouldAlignStart(e,t,o,this.__margins,r,this.noVerticalOverlap,Tt)}__shouldAlignStart(e,t,o,r,n,a,l){const u=o-e[a?l.end:l.start]-r[l.end],_=e[a?l.start:l.end]-r[l.start],p=n?u:_,b=p>(n?_:u)||p>t;return n===b}__adjustBottomProperty(e,t,o){let r;if(e===t.end){if(t.end===Tt.end){const n=Math.min(window.innerHeight,document.documentElement.clientHeight);if(o>n&&this.__oldViewportHeight){const a=this.__oldViewportHeight-n;r=o-a}this.__oldViewportHeight=n}if(t.end===kt.end){const n=Math.min(window.innerWidth,document.documentElement.clientWidth);if(o>n&&this.__oldViewportWidth){const a=this.__oldViewportWidth-n;r=o-a}this.__oldViewportWidth=n}}return r}__calculatePositionInOneDimension(e,t,o,r,n,a){const l=a?r.start:r.end,u=a?r.end:r.start,_=parseFloat(n.style[l]||getComputedStyle(n)[l]),p=this.__adjustBottomProperty(l,r,_),m=t[a?r.start:r.end]-e[o===a?r.end:r.start],b=p?`${p}px`:`${_+m*(a?-1:1)}px`;return{[l]:b,[u]:""}}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zr=s=>class extends ni(ri(s)){static get properties(){return{position:{type:String,reflectToAttribute:!0}}}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const e=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(t=>{this.style.setProperty(`--vaadin-tooltip-offset-${t}`,e.getPropertyValue(`--vaadin-tooltip-offset-${t}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),o=e.width/2-t.width/2;if(this.style.left){const r=t.left+o;r>0&&(this.style.left=`${r}px`)}if(this.style.right){const r=parseFloat(this.style.right)+o;r>0&&(this.style.right=`${r}px`)}}if(this.position==="start"||this.position==="end"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),o=e.height/2-t.height/2;this.style.top=`${t.top+o}px`}}}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pr=v`
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
 */y("vaadin-tooltip-overlay",[si,Pr],{moduleId:"vaadin-tooltip-overlay-styles"});class Or extends zr(oe(P(E))){static get is(){return"vaadin-tooltip-overlay"}static get template(){return T`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}}S(Or);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vt=s=>class extends s{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(e,t){if(!t||e===void 0)return;const{classList:o}=t;if(this.__initialClasses||(this.__initialClasses=new Set(o)),Array.isArray(this.__previousClasses)){const n=this.__previousClasses.filter(a=>!this.__initialClasses.has(a));n.length>0&&o.remove(...n)}const r=typeof e=="string"?e.split(" ").filter(Boolean):[];r.length>0&&o.add(...r),this.__previousClasses=r}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ce=500;let uo=Ce,po=Ce,_o=Ce;const Re=new Set;let Fe=!1,De=null,Le=null;class Rr{constructor(i){this.host=i}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const i=this.host;return i.focusDelay!=null&&i.focusDelay>0?i.focusDelay:uo}get hoverDelay(){const i=this.host;return i.hoverDelay!=null&&i.hoverDelay>0?i.hoverDelay:po}get hideDelay(){const i=this.host;return i.hideDelay!=null&&i.hideDelay>0?i.hideDelay:_o}get isClosing(){return Re.has(this.host)}open(i={immediate:!1}){const{immediate:e,hover:t,focus:o}=i,r=t&&this.hoverDelay>0,n=o&&this.focusDelay>0;!e&&(r||n)&&!this.__closeTimeout?this.__warmupTooltip(n):this.__showTooltip()}close(i){!i&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),Fe&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(i){this.host[this.openedProp]=i}__flushClosingTooltips(){Re.forEach(i=>{i._stateController.close(!0),Re.delete(i)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),Fe=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(i){this._isOpened()||(Fe?this.__showTooltip():this.__scheduleWarmUp(i))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){Le&&(clearTimeout(Le),Le=null)}__abortWarmUp(){De&&(clearTimeout(De),De=null)}__scheduleClose(){this._isOpened()&&(Re.add(this.host),this.__closeTimeout=setTimeout(()=>{Re.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){Le=setTimeout(()=>{Le=null,Fe=!1},this.hideDelay)}__scheduleWarmUp(i){const e=i?this.focusDelay:this.hoverDelay;De=setTimeout(()=>{De=null,Fe=!0,this.__showTooltip()},e)}}const Fr=s=>class extends vt(s){static get properties(){return{ariaTarget:{type:Object},context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},generator:{type:Object},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1,sync:!0},opened:{type:Boolean,value:!1,sync:!0},position:{type:String},shouldShow:{type:Object,value:()=>(e,t)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged",sync:!0},_effectiveAriaTarget:{type:Object,computed:"__computeAriaTarget(ariaTarget, target)",observer:"__effectiveAriaTargetChanged"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean,sync:!0},_position:{type:String,value:"bottom"},_srLabel:{type:Object},_overlayContent:{type:String}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)","__updateSrLabelText(_srLabel, _overlayContent)"]}static setDefaultFocusDelay(e){uo=e!=null&&e>=0?e:Ce}static setDefaultHideDelay(e){_o=e!=null&&e>=0?e:Ce}static setDefaultHoverDelay(e){po=e!=null&&e>=0?e:Ce}constructor(){super(),this._uniqueId=`vaadin-tooltip-${_t()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(e=>{e.forEach(t=>this.__onTargetVisibilityChange(t.isIntersecting))},{threshold:0}),this._stateController=new Rr(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}ready(){super.ready(),this._srLabelController=new j(this,"sr-label","div",{initializer:e=>{e.id=this._uniqueId,e.setAttribute("role","tooltip"),this._srLabel=e}}),this.addController(this._srLabelController)}__computeHorizontalAlign(e){return["top-end","bottom-end","start-top","start","start-bottom"].includes(e)?"end":"start"}__computeNoHorizontalOverlap(e){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(e)}__computeNoVerticalOverlap(e){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(e)}__computeVerticalAlign(e){return["top-start","top-end","top","start-bottom","end-bottom"].includes(e)?"bottom":"top"}__computeOpened(e,t,o,r){return r&&(e?t:o)}__computePosition(e,t){return e||t}__autoOpenedChanged(e,t){e?document.addEventListener("keydown",this.__onKeyDown,!0):t&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(e){e&&(this.__setTargetByIdDebouncer=z.debounce(this.__setTargetByIdDebouncer,X,()=>this.__setTargetById(e)))}__setTargetById(e){if(!this.isConnected)return;const t=this.getRootNode().getElementById(e);t?this.target=t:console.warn(`No element with id="${e}" found to show tooltip.`)}__targetChanged(e,t){t&&(t.removeEventListener("mouseenter",this.__onMouseEnter),t.removeEventListener("mouseleave",this.__onMouseLeave),t.removeEventListener("focusin",this.__onFocusin),t.removeEventListener("focusout",this.__onFocusout),t.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(t)),e&&(e.addEventListener("mouseenter",this.__onMouseEnter),e.addEventListener("mouseleave",this.__onMouseLeave),e.addEventListener("focusin",this.__onFocusin),e.addEventListener("focusout",this.__onFocusout),e.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(e)}))}__onFocusin(e){this.manual||$t()&&(this.target.contains(e.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(e){this.manual||this.target.contains(e.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(e){e.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseEnter(){this._stateController.isClosing&&this._stateController.open({immediate:!0})}__onOverlayMouseLeave(e){e.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(e){const t=this.__isTargetHidden;if(this.__isTargetHidden=!e,t&&e&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!e&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(e,t){this._overlayElement&&(e||t)&&this._overlayElement.requestContentUpdate()}__tooltipRenderer(e){e.textContent=typeof this.generator=="function"?this.generator(this.context):this.text,this._overlayContent=e.textContent}__computeAriaTarget(e,t){const o=n=>n&&n.nodeType===Node.ELEMENT_NODE;return(Array.isArray(e)?e.some(o):e)?e:t}__effectiveAriaTargetChanged(e,t){t&&[t].flat().forEach(o=>{dt(o,"aria-describedby",this._uniqueId)}),e&&[e].flat().forEach(o=>{Ge(o,"aria-describedby",this._uniqueId)})}__generatorChanged(e,t,o){e&&((t!==this.__oldTextGenerator||o!==this.__oldContext)&&e.requestContentUpdate(),this.__oldTextGenerator=t,this.__oldContext=o)}__updateSrLabelText(e,t){e&&(e.textContent=t)}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Dr extends Fr(Nt(V(H(E)))){static get is(){return"vaadin-tooltip"}static get template(){return T`
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
    `}}S(Dr);const Lr=v`
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
`;y("vaadin-button",Lr,{moduleId:"lumo-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mr=v`
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
`,Br=s=>s`
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
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nr=s=>class extends gt(Xt(Ee(s))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(e){super._onKeyDown(e),!(e.altKey||e.shiftKey||e.ctrlKey||e.metaKey)&&this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-button",Mr,{moduleId:"vaadin-button-styles"});class $r extends Nr(V(P(H(E)))){static get is(){return"vaadin-button"}static get template(){return Br(T)}ready(){super.ready(),this._tooltipController=new be(this),this.addController(this._tooltipController)}}S($r);y("vaadin-progress-bar",v`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const fo=document.createElement("template");fo.innerHTML=`
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;document.head.appendChild(fo.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vr=v`
  :host {
    display: block;
    width: 100%; /* prevent collapsing inside non-stretching column flex */
    height: 8px;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='bar'] {
    height: 100%;
  }

  [part='value'] {
    height: 100%;
    transform-origin: 0 50%;
    transform: scaleX(var(--vaadin-progress-value));
  }

  :host([dir='rtl']) [part='value'] {
    transform-origin: 100% 50%;
  }

  @media (forced-colors: active) {
    [part='bar'] {
      outline: 1px solid;
    }

    [part='value'] {
      background-color: AccentColor !important;
      forced-color-adjust: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hr=s=>class extends s{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,t,o){const r=this._normalizeValue(e,t,o);this.style.setProperty("--vaadin-progress-value",r)}_valueChanged(e){this.setAttribute("aria-valuenow",e)}_minChanged(e){this.setAttribute("aria-valuemin",e)}_maxChanged(e){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,t,o){let r;return!e&&e!==0?r=0:t>=o?r=1:(r=(e-t)/(o-t),r=Math.min(Math.max(r,0),1)),r}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-progress-bar",Vr,{moduleId:"vaadin-progress-bar-styles"});class Ur extends V(P(Hr(E))){static get is(){return"vaadin-progress-bar"}static get template(){return T`
      <div part="bar">
        <div part="value"></div>
      </div>
    `}}S(Ur);y("vaadin-upload",v`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }
  `,{moduleId:"lumo-upload"});y("vaadin-upload-icon",v`
    :host::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }
  `,{moduleId:"lumo-upload-icon"});y("vaadin-upload-file-list",v`
    ::slotted(li:not(:first-of-type)) {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload-file-list"});const Gr=v`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  ::slotted([slot='progress']) {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }
`;y("vaadin-upload-file",[ut,Gr],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wr extends P(E){static get is(){return"vaadin-upload-icon"}static get template(){return T`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `}}S(Wr);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mo=document.createElement("template");mo.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(mo.content);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qr=s=>class extends Ee(s){static get properties(){return{complete:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},file:{type:Object},fileName:{type:String},held:{type:Boolean,value:!1},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object},progress:{type:Number},status:{type:String},tabindex:{type:Number,value:0,reflectToAttribute:!0},uploading:{type:Boolean,value:!1,reflectToAttribute:!0},_progress:{type:Object}}}static get observers(){return["__updateProgress(_progress, progress, indeterminate)"]}ready(){super.ready(),this.addController(new j(this,"progress","vaadin-progress-bar",{initializer:e=>{this._progress=e}})),this.shadowRoot.addEventListener("focusin",e=>{e.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",e=>{e.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(e){return e.composedPath()[0]===this}_errorMessageChanged(e){this.toggleAttribute("error",!!e)}__updateProgress(e,t,o){e&&(e.value=isNaN(t)?0:t/100,e.indeterminate=o)}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jr=v`
  :host {
    display: block;
  }

  [hidden] {
    display: none;
  }

  [part='row'] {
    list-style-type: none;
  }

  button {
    background: transparent;
    padding: 0;
    border: none;
    box-shadow: none;
  }

  :host([complete]) ::slotted([slot='progress']),
  :host([error]) ::slotted([slot='progress']) {
    display: none !important;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-upload-file",jr,{moduleId:"vaadin-upload-file-styles"});class Yr extends qr(P(H(E))){static get template(){return T`
      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!errorMessage]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[fileName]]</div>
            <div part="status" hidden$="[[!status]]" id="status">[[status]]</div>
            <div part="error" id="error" hidden$="[[!errorMessage]]">[[errorMessage]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!errorMessage]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <slot name="progress"></slot>
    `}static get is(){return"vaadin-upload-file"}}S(Yr);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kr=s=>class extends s{static get properties(){return{items:{type:Array},i18n:{type:Object}}}static get observers(){return["__updateItems(items, i18n)"]}__updateItems(e,t){e&&t&&this.requestContentUpdate()}requestContentUpdate(){const{items:e,i18n:t}=this;at(tt`
          ${e.map(o=>tt`
              <li>
                <vaadin-upload-file
                  .file="${o}"
                  .complete="${o.complete}"
                  .errorMessage="${o.error}"
                  .fileName="${o.name}"
                  .held="${o.held}"
                  .indeterminate="${o.indeterminate}"
                  .progress="${o.progress}"
                  .status="${o.status}"
                  .uploading="${o.uploading}"
                  .i18n="${t}"
                ></vaadin-upload-file>
              </li>
            `)}
        `,this)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qr extends Kr(P(E)){static get is(){return"vaadin-upload-file-list"}static get template(){return T`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>
      <ul part="list">
        <slot></slot>
      </ul>
    `}}S(Qr);/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const q=document.createElement("div");q.style.position="fixed";q.style.clip="rect(0px, 0px, 0px, 0px)";q.setAttribute("aria-live","polite");document.body.appendChild(q);let Xe;function pe(s,i={}){const e=i.mode||"polite",t=i.timeout===void 0?150:i.timeout;e==="alert"?(q.removeAttribute("aria-live"),q.removeAttribute("role"),Xe=z.debounce(Xe,ee,()=>{q.setAttribute("role","alert")})):(Xe&&Xe.cancel(),q.removeAttribute("role"),q.setAttribute("aria-live",e)),q.textContent="",setTimeout(()=>{q.textContent=s},t)}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xr extends j{constructor(i){super(i,"add-button","vaadin-button")}initNode(i){i._isDefault&&(this.defaultNode=i),i.addEventListener("touchend",e=>{this.host._onAddFilesTouchEnd(e)}),i.addEventListener("click",e=>{this.host._onAddFilesClick(e)}),this.host._addButton=i}}class Zr extends j{constructor(i){super(i,"drop-label","span")}initNode(i){i._isDefault&&(this.defaultNode=i),this.host._dropLabel=i}}const Jr=s=>class extends s{static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:le},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[],sync:!0},maxFiles:{type:Number,value:1/0,sync:!0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}},_addButton:{type:Object},_dropLabel:{type:Object},_fileList:{type:Object},_files:{type:Array}}}static get observers(){return["__updateAddButton(_addButton, maxFiles, i18n, maxFilesReached)","__updateDropLabel(_dropLabel, maxFiles, i18n)","__updateFileList(_fileList, files, i18n)","__updateMaxFilesReached(maxFiles, files)"]}get __acceptRegexp(){if(!this.accept)return null;const e=this.accept.split(",").map(t=>{let o=t.trim();return o=o.replace(/[+.]/gu,"\\$&"),o.startsWith("\\.")&&(o=`.*${o}$`),o.replace(/\/\*/gu,"/.*")});return new RegExp(`^(${e.join("|")})$`,"iu")}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this)),this._addButtonController=new Xr(this),this.addController(this._addButtonController),this._dropLabelController=new Zr(this),this.addController(this._dropLabelController),this.addController(new j(this,"file-list","vaadin-upload-file-list",{initializer:e=>{this._fileList=e}})),this.addController(new j(this,"drop-label-icon","vaadin-upload-icon"))}_formatSize(e){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(e);const t=this.i18n.units.sizeBase||1e3,o=~~(Math.log(e)/Math.log(t)),r=Math.max(0,Math.min(3,o-1));return`${parseFloat((e/t**o).toFixed(r))} ${this.i18n.units.size[o]}`}_splitTimeByUnits(e){const t=[60,60,24,1/0],o=[0];for(let r=0;r<t.length&&e>0;r++)o[r]=e%t[r],e=Math.floor(e/t[r]);return o}_formatTime(e,t){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map(o=>(o<10?"0":"")+o).join(":")}_formatFileProgress(e){const t=e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${e.totalStr}: ${e.progress}% (${t})`}__updateMaxFilesReached(e,t){this._setMaxFilesReached(e>=0&&t.length>=e)}__updateAddButton(e,t,o,r){e&&(e.disabled=r,e===this._addButtonController.defaultNode&&(e.textContent=this._i18nPlural(t,o.addFiles)))}__updateDropLabel(e,t,o){e&&e===this._dropLabelController.defaultNode&&(e.textContent=this._i18nPlural(t,o.dropFiles))}__updateFileList(e,t,o){e&&(e.items=[...t],e.i18n=o)}_onDragover(e){e.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}Object.entries(this.headers).forEach(([t,o])=>{e.setRequestHeader(t,o)}),this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,o,r){e.elapsed=r,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(r*(t/o-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/r/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(o),e.status=this._formatFileProgress(e)}uploadFiles(e=this.files){e&&!Array.isArray(e)&&(e=[e]),e=e.filter(t=>!t.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const t=Date.now(),o=e.xhr=this._createXhr();let r,n;o.upload.onprogress=_=>{clearTimeout(r),n=Date.now();const p=(n-t)/1e3,m=_.loaded,b=_.total,I=~~(m/b*100);e.loaded=m,e.progress=I,e.indeterminate=m<=0||m>=b,e.error?e.indeterminate=e.status=void 0:e.abort||(I<100?(this._setStatus(e,b,m,p),r=setTimeout(()=>{e.status=this.i18n.uploading.status.stalled,this._renderFileList()},2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing)),this._renderFileList(),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:o}}))},o.onreadystatechange=()=>{if(o.readyState===4){if(clearTimeout(r),e.indeterminate=e.uploading=!1,e.abort||(e.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:o},cancelable:!0}))))return;o.status===0?e.error=this.i18n.uploading.error.serverUnavailable:o.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:o.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent(`upload-${e.error?"error":"success"}`,{detail:{file:e,xhr:o}})),this._renderFileList()}};const a=new FormData;if(e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:o},cancelable:!0})))return;a.append(e.formDataName,e,e.name),o.open(this.method,e.uploadTarget,!0),this._configureXhr(o),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,o.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:o}})),this._renderFileList()},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:o,formData:a},cancelable:!0}))&&o.send(a)}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._removeFile(e))}_renderFileList(){this._fileList&&this._fileList.requestContentUpdate()}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&e.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));return}const t=this.__acceptRegexp;if(t&&!(t.test(e.type)||t.test(e.name))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}));return}e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.files=[e,...this.files],this.noAuto||this._uploadFile(e)}_removeFile(e){this.files.indexOf(e)>-1&&(this.files=this.files.filter(t=>t!==e),this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:e},bubbles:!0,composed:!0})))}_onAddFilesTouchEnd(e){e.preventDefault(),this._onAddFilesClick(e)}_onAddFilesClick(e){this.maxFilesReached||(e.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileReject(e){pe(`${e.detail.file.name}: ${e.detail.error}`,{mode:"alert"})}_onUploadStart(e){pe(`${e.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(e){pe(`${e.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(e){pe(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return e===1?t.one:t.many}_isMultiple(e){return e!==1}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class en extends Jr(V(P(H(E)))){static get template(){return T`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <div part="primary-buttons">
        <slot name="add-button"></slot>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon"></slot>
          <slot name="drop-label"></slot>
        </div>
      </div>
      <slot name="file-list"></slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}}S(en);const bt=v`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--_selection-color-text);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }
  }

  :host([focus-ring]:not([disabled])) {
    box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;y("vaadin-item",bt,{moduleId:"lumo-item"});const tn=v`
  /* :hover needed to workaround https://github.com/vaadin/web-components/issues/3133 */
  :host(:hover) {
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  :host([role='menuitem'][menu-item-checked]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([aria-haspopup='true'])::after {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-xs);
    content: var(--lumo-icons-angle-right);
    color: var(--lumo-tertiary-text-color);
  }

  :host(:not([dir='rtl'])[aria-haspopup='true'])::after {
    margin-right: calc(var(--lumo-space-m) * -1);
    padding-left: var(--lumo-space-m);
  }

  :host([expanded]) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl'][aria-haspopup='true'])::after {
    content: var(--lumo-icons-angle-left);
    margin-left: calc(var(--lumo-space-m) * -1);
    padding-right: var(--lumo-space-m);
  }
`;y("vaadin-context-menu-item",[bt,tn],{moduleId:"lumo-context-menu-item"});const go=v`
  :host {
    -webkit-tap-highlight-color: transparent;
    --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
  }

  /* Dividers */
  [part='items'] ::slotted(hr) {
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) var(--lumo-border-radius-m);
    background-color: var(--lumo-contrast-10pct);
  }
`;y("vaadin-list-box",go,{moduleId:"lumo-list-box"});const on=v`
  :host {
    --_lumo-list-box-item-selected-icon-display: block;
  }

  /* Normal item */
  [part='items'] ::slotted([role='menuitem']) {
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    cursor: default;
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    padding-left: calc(var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
  }

  /* Hovered item */
  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  [part='items'] ::slotted([role='menuitem']:hover:not([disabled])),
  [part='items'] ::slotted([role='menuitem'][expanded]:not([disabled])) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl']) [part='items'] ::slotted([role='menuitem']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-border-radius-m) / 4);
  }

  /* Focused item */
  @media (pointer: coarse) {
    [part='items'] ::slotted([role='menuitem']:hover:not([expanded]):not([disabled])) {
      background-color: transparent;
    }
  }
`;y("vaadin-context-menu-list-box",[go,on],{moduleId:"lumo-context-menu-list-box"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yt=v`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;y("",yt,{moduleId:"lumo-menu-overlay-core"});const sn=v`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,vo=[Te,yt,sn];y("",vo,{moduleId:"lumo-menu-overlay"});const rn=v`
  :host([phone]) {
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom) !important;
    left: 0 !important;
    /* stylelint-enable declaration-block-no-redundant-longhand-properties */
    align-items: stretch;
    justify-content: flex-end;
  }

  /* TODO These style overrides should not be needed.
   We should instead offer a way to have non-selectable items inside the context menu. */

  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;y("vaadin-context-menu-overlay",[vo,rn],{moduleId:"lumo-context-menu-overlay"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ct({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null},reset(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},_setSourceEvent(s){this.info.sourceEvent=s;const i=s.composedPath();this.info.sourceEvent.__composedPath=i},touchstart(s){this._setSourceEvent(s),this.info.touchStartCoords={x:s.changedTouches[0].clientX,y:s.changedTouches[0].clientY};const i=s.composedPath()[0]||s.target;this._timerId=setTimeout(()=>{const e=s.changedTouches[0];s.shiftKey||(He&&(this._fired=!0,this.fire(i,e.clientX,e.clientY)),Ie("tap"))},500)},touchmove(s){const e=this.info.touchStartCoords;(Math.abs(e.x-s.changedTouches[0].clientX)>15||Math.abs(e.y-s.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend(s){this._fired&&s.preventDefault(),this._cancelTimer()},contextmenu(s){s.shiftKey||(this._setSourceEvent(s),this.fire(s.target,s.clientX,s.clientY),Ie("tap"))},fire(s,i,e){const t=this.info.sourceEvent,o=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});o.detail={x:i,y:e,sourceEvent:t},s.dispatchEvent(o),o.defaultPrevented&&t&&t.preventDefault&&t.preventDefault()}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nn=s=>class extends gt(Ee(s)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");e!==null&&(this.value=e)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(e){return!this.disabled&&!(e.type==="keydown"&&e.defaultPrevented)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){super._disabledChanged(e),e&&(this.selected=!1,this.blur())}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class an extends nn(P(oe(E))){static get is(){return"vaadin-context-menu-item"}static get template(){return T`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","menuitem")}}S(an);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Bt(s,i){const{scrollLeft:e}=s;return i!=="rtl"?e:s.scrollWidth-s.clientWidth+e}function ln(s,i,e){i!=="rtl"?s.scrollLeft=e:s.scrollLeft=s.clientWidth-s.scrollWidth+e}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dn=s=>class extends Se(s){get focused(){return(this._getItems()||[]).find(Bi)}get _vertical(){return!0}focus(){const e=this._getItems();if(Array.isArray(e)){const t=this._getAvailableIndex(e,0,null,o=>!fe(o));t>=0&&this._focus(t)}}_getItems(){return Array.from(this.children)}_onKeyDown(e){if(super._onKeyDown(e),e.metaKey||e.ctrlKey)return;const{key:t}=e,o=this._getItems()||[],r=o.indexOf(this.focused);let n,a;const u=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(t)?(a=-u,n=r-u):this.__isNextKey(t)?(a=u,n=r+u):t==="Home"?(a=1,n=0):t==="End"&&(a=-1,n=o.length-1),n=this._getAvailableIndex(o,n,a,_=>!fe(_)),n>=0&&(e.preventDefault(),this._focus(n,!0))}__isPrevKey(e){return this._vertical?e==="ArrowUp":e==="ArrowLeft"}__isNextKey(e){return this._vertical?e==="ArrowDown":e==="ArrowRight"}_focus(e,t=!1){const o=this._getItems();this._focusItem(o[e],t)}_focusItem(e){e&&(e.focus(),e.setAttribute("focus-ring",""))}_getAvailableIndex(e,t,o,r){const n=e.length;let a=t;for(let l=0;typeof a=="number"&&l<n;l+=1,a+=o||1){a<0?a=n-1:a>=n&&(a=0);const u=e[a];if(!u.hasAttribute("disabled")&&this.__isMatchingItem(u,r))return a}return-1}__isMatchingItem(e,t){return typeof t=="function"?t(e):!0}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hn=s=>class extends dn(s){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return this.orientation!=="horizontal"}focus(){this._observer&&this._observer.flush();const e=Array.isArray(this.items)?this.items:[],t=this._getAvailableIndex(e,0,null,o=>o.tabIndex===0&&!fe(o));t>=0?this._focus(t):super.focus()}ready(){super.ready(),this.addEventListener("click",t=>this._onClick(t));const e=this.shadowRoot.querySelector("slot:not([name])");this._observer=new Kt(e,()=>{this._setItems(this._filterItems(Wi(this)))})}_getItems(){return this.items}_enhanceItems(e,t,o,r){if(!r&&e){this.setAttribute("aria-orientation",t||"vertical"),e.forEach(a=>{t?a.setAttribute("orientation",t):a.removeAttribute("orientation")}),this._setFocusable(o||0);const n=e[o];e.forEach(a=>{a.selected=a===n}),n&&!n.disabled&&this._scrollToItem(o)}}_filterItems(e){return e.filter(t=>t._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let o;t&&!t.disabled&&(o=this.items.indexOf(t))>=0&&(this.selected=o)}_searchKey(e,t){this._searchReset=z.debounce(this._searchReset,Q.after(500),()=>{this._searchBuf=""}),this._searchBuf+=t.toLowerCase(),this.items.some(r=>this.__isMatchingKey(r))||(this._searchBuf=t.toLowerCase());const o=this._searchBuf.length===1?e+1:e;return this._getAvailableIndex(this.items,o,1,r=>this.__isMatchingKey(r)&&getComputedStyle(r).display!=="none")}__isMatchingKey(e){return e.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key,o=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(t)&&t.length===1){const r=this._searchKey(o,t);r>=0&&this._focus(r);return}super._onKeyDown(e)}_isItemHidden(e){return getComputedStyle(e).display==="none"}_setFocusable(e){e=this._getAvailableIndex(this.items,e,1);const t=this.items[e];this.items.forEach(o=>{o.tabIndex=o===t?0:-1})}_focus(e){this.items.forEach((t,o)=>{t.focused=o===e}),this._setFocusable(e),this._scrollToItem(e),super._focus(e)}_scrollToItem(e){const t=this.items[e];if(!t)return;const o=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],r=this._scrollerElement.getBoundingClientRect(),n=(this.items[e+1]||t).getBoundingClientRect(),a=(this.items[e-1]||t).getBoundingClientRect();let l=0;!this._isRTL&&n[o[1]]>=r[o[1]]||this._isRTL&&n[o[1]]<=r[o[1]]?l=n[o[1]]-r[o[1]]:(!this._isRTL&&a[o[0]]<=r[o[0]]||this._isRTL&&a[o[0]]>=r[o[0]])&&(l=a[o[0]]-r[o[0]]),this._scroll(l)}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=this.getAttribute("dir")||"ltr",o=Bt(this._scrollerElement,t)+e;ln(this._scrollerElement,t,o)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cn extends hn(P(oe(H(E)))){static get is(){return"vaadin-context-menu-list-box"}static get template(){return T`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}S(cn);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const un=s=>class extends co(ni(s)){static get properties(){return{parentOverlay:{type:Object,readOnly:!0},_theme:{type:String,readOnly:!0,sync:!0}}}static get observers(){return["_themeChanged(_theme)"]}ready(){super.ready(),this.restoreFocusOnClose=!0,this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&e.composedPath()[0]===this.$.overlay&&[38,40].indexOf(e.keyCode)>-1){const t=this.getFirstChild();t&&Array.isArray(t.items)&&t.items.length&&(e.preventDefault(),e.keyCode===38?t.items[t.items.length-1].focus():t.focus())}})}getFirstChild(){return this.querySelector(":not(style):not(slot)")}_themeChanged(){this.close()}getBoundaries(){const e=this.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect();let o=e.bottom-t.height;const r=this.parentOverlay;if(r&&r.hasAttribute("bottom-aligned")){const n=getComputedStyle(r);o=o-parseFloat(n.bottom)-parseFloat(n.height)}return{xMax:e.right-t.width,xMin:e.left+t.width,yMax:o}}_updatePosition(){if(super._updatePosition(),this.positionTarget&&this.parentOverlay){const e=this.$.content,t=getComputedStyle(e);!!this.style.left?this.style.left=`${parseFloat(this.style.left)+parseFloat(t.paddingLeft)}px`:this.style.right=`${parseFloat(this.style.right)+parseFloat(t.paddingRight)}px`,!!this.style.bottom?this.style.bottom=`${parseFloat(this.style.bottom)-parseFloat(t.paddingBottom)}px`:this.style.top=`${parseFloat(this.style.top)-parseFloat(t.paddingTop)}px`}}_shouldRestoreFocus(){return this.parentOverlay?!1:super._shouldRestoreFocus()}_deepContains(e){let t=Ut(this.localName,e);for(;t;){if(t===this)return!0;t=t.parentOverlay}return!1}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pn=v`
  :host {
    align-items: flex-start;
    justify-content: flex-start;
  }

  :host([right-aligned]),
  :host([end-aligned]) {
    align-items: flex-end;
  }

  :host([bottom-aligned]) {
    justify-content: flex-end;
  }

  [part='overlay'] {
    background-color: #fff;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid !important;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-context-menu-overlay",[si,pn],{moduleId:"vaadin-context-menu-overlay-styles"});class _n extends un(ri(oe(P(E)))){static get is(){return"vaadin-context-menu-overlay"}static get template(){return T`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}S(_n);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class fn{constructor(i,e){this.query=i,this.callback=e,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(i){typeof this.callback=="function"&&this.callback(i.matches)}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mn=s=>class extends s{static get properties(){return{items:{type:Array,sync:!0}}}constructor(){super(),this.__itemsOutsideClickListener=e=>{e.composedPath().some(t=>t.localName===`${this._tagNamePrefix}-overlay`)||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",()=>{this.items&&this.close()})}get _tagNamePrefix(){return"vaadin-context-menu"}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}__forwardFocus(){const e=this._overlayElement,t=e.getFirstChild();if(e.parentOverlay){const o=e.parentOverlay.querySelector("[expanded]");o&&o.hasAttribute("focused")&&t?t.focus():e.$.overlay.focus()}else t&&t.focus()}__openSubMenu(e,t,o){e.items=t._item.children,e.listenOn=t,e.overlayClass=o;const r=this._overlayElement,n=e._overlayElement;n.positionTarget=t,n.noHorizontalOverlap=!0,n._setParentOverlay(r),r.hasAttribute("theme")?e.setAttribute("theme",r.getAttribute("theme")):e.removeAttribute("theme");const a=n.$.content;a.style.minWidth="",t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:t._item.children}}))}__createComponent(e){let t;return e.component instanceof HTMLElement?t=e.component:t=document.createElement(e.component||`${this._tagNamePrefix}-item`),t._hasVaadinItemMixin&&(t.setAttribute("role","menuitem"),t.tabIndex=-1),t.localName==="hr"?t.setAttribute("role","separator"):t.setAttribute("aria-haspopup","false"),this._setMenuItemTheme(t,e,this._theme),t._item=e,e.text&&(t.textContent=e.text),e.className&&t.setAttribute("class",e.className),this.__toggleMenuComponentAttribute(t,"menu-item-checked",e.checked),this.__toggleMenuComponentAttribute(t,"disabled",e.disabled),e.children&&e.children.length&&(this.__updateExpanded(t,!1),t.setAttribute("aria-haspopup","true")),t}__initListBox(){const e=document.createElement(`${this._tagNamePrefix}-list-box`);return this._theme&&e.setAttribute("theme",this._theme),e.addEventListener("selected-changed",t=>{const{value:o}=t.detail;if(typeof o=="number"){const r=e.items[o]._item;e.selected=null,r.children||this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:r}}))}}),e}__initOverlay(){const e=this._overlayElement;e.$.backdrop.addEventListener("click",()=>{this.close()}),e.addEventListener(le?"click":"mouseover",t=>{this.__showSubMenu(t)}),e.addEventListener("keydown",t=>{const{key:o}=t,r=this.__isRTL,n=o==="ArrowRight",a=o==="ArrowLeft";!r&&n||r&&a||o==="Enter"||o===" "?this.__showSubMenu(t):!r&&a||r&&n||o==="Escape"?(o==="Escape"&&t.stopPropagation(),this.close(),this.listenOn.focus()):o==="Tab"&&this.dispatchEvent(new CustomEvent("close-all-menus"))})}__initSubMenu(){const e=document.createElement(this.constructor.is);return e._modeless=!0,e.openOn="opensubmenu",e.setAttribute("hidden",""),this.addEventListener("opened-changed",t=>{t.detail.value||this._subMenu.close()}),e.addEventListener("close-all-menus",()=>{this.dispatchEvent(new CustomEvent("close-all-menus"))}),e.addEventListener("item-selected",t=>{const{detail:o}=t;this.dispatchEvent(new CustomEvent("item-selected",{detail:o}))}),this.addEventListener("close-all-menus",()=>{this._overlayElement.close()}),this.addEventListener("item-selected",t=>{const o=t.target,r=t.detail.value,n=o.items.indexOf(r);r.keepOpen&&n>-1?(o._overlayElement.requestContentUpdate(),o._listBox._observer.flush(),o._listBox.children[n].focus()):r.keepOpen||this.close()}),e.addEventListener("opened-changed",t=>{if(!t.detail.value){const o=this._listBox.querySelector("[expanded]");o&&this.__updateExpanded(o,!1)}}),e}__showSubMenu(e,t=e.composedPath().find(o=>o.localName===`${this._tagNamePrefix}-item`)){if(!this.__openListenerActive)return;if(this._overlayElement.hasAttribute("opening")){requestAnimationFrame(()=>{this.__showSubMenu(e,t)});return}const o=this._subMenu;if(t){const{children:r}=t._item;if(o.items!==r&&o.close(),!this.opened)return;if(r&&r.length){this.__updateExpanded(t,!0);const{overlayClass:n}=this;this.__openSubMenu(o,t,n)}else o.listenOn.focus()}}__itemsRenderer(e,t,{detail:o}){this.__initMenu(e,t);const r=e.querySelector(this.constructor.is);r.closeOn=t.closeOn;const n=e.querySelector(`${this._tagNamePrefix}-list-box`);n.innerHTML="",[...o.children||t.items].forEach(a=>{const l=this.__createComponent(a);n.appendChild(l)})}_setMenuItemTheme(e,t,o){let r=e.getAttribute("theme")||o;t.theme!=null&&(r=Array.isArray(t.theme)?t.theme.join(" "):t.theme),this.__updateTheme(e,r)}__toggleMenuComponentAttribute(e,t,o){o?(e.setAttribute(t,""),e[`__has-${t}`]=!0):e[`__has-${t}`]&&(e.removeAttribute(t),e[`__has-${t}`]=!1)}__initMenu(e,t){if(e.firstElementChild)this.__updateTheme(this._listBox,this._theme);else{this.__initOverlay();const o=this.__initListBox();this._listBox=o,e.appendChild(o);const r=this.__initSubMenu();this._subMenu=r,e.appendChild(r),requestAnimationFrame(()=>{this.__openListenerActive=!0})}}__updateExpanded(e,t){e.setAttribute("aria-expanded",t.toString()),e.toggleAttribute("expanded",t)}__updateTheme(e,t){t?e.setAttribute("theme",t):e.removeAttribute("theme")}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gn=s=>class extends mn(s){static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu",sync:!0},listenOn:{type:Object,sync:!0,value(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged",sync:!0},renderer:{type:Function,sync:!0},_modeless:{type:Boolean,sync:!0},_context:{type:Object,sync:!0},_phone:{type:Boolean},_touch:{type:Boolean,value:le},_wide:{type:Boolean},_wideMediaQuery:{type:String,value:"(min-device-width: 750px)"}}}static get observers(){return["_openedChanged(opened)","_targetOrOpenOnChanged(listenOn, openOn)","_rendererChanged(renderer, items)","_touchOrWideChanged(_touch, _wide)","_overlayContextChanged(_overlayElement, _context)","_overlayModelessChanged(_overlayElement, _modeless)","_overlayPhoneChanged(_overlayElement, _phone)","_overlayThemeChanged(_overlayElement, _theme)"]}constructor(){super(),this._createOverlay(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundPreventDefault=this._preventDefault.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0),this.__restoreOpened&&this._setOpened(!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.__restoreOpened=this.opened,this.close()}ready(){super.ready(),this.addController(new fn(this._wideMediaQuery,e=>{this._wide=e}))}_createOverlay(){const e=document.createElement(`${this._tagNamePrefix}-overlay`);e.owner=this,e.addEventListener("opened-changed",t=>{this._onOverlayOpened(t)}),e.addEventListener("vaadin-overlay-open",t=>{this._onVaadinOverlayOpen(t)}),this._overlayElement=e}_onOverlayOpened(e){const t=e.detail.value;this._setOpened(t),t&&this.__alignOverlayPosition()}_onVaadinOverlayOpen(){this.__alignOverlayPosition(),this._overlayElement.style.opacity="",this.__forwardFocus()}_overlayContextChanged(e,t){e&&(e.model=t)}_overlayModelessChanged(e,t){e&&(e.modeless=t)}_overlayPhoneChanged(e,t){e&&(e.toggleAttribute("phone",t),e.withBackdrop=t)}_overlayThemeChanged(e,t){e&&(t?e.setAttribute("theme",t):e.removeAttribute("theme"))}_targetOrOpenOnChanged(e,t){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),e&&t&&(this._listen(e,t,this._boundOpen),this._oldListenOn=e,this._oldOpenOn=t)}_touchOrWideChanged(e,t){this._phone=!t&&e}_setListenOnUserSelect(e){this.listenOn.style.webkitTouchCallout=e,this.listenOn.style.webkitUserSelect=e,this.listenOn.style.userSelect=e,document.getSelection().removeAllRanges()}_closeOnChanged(e,t){const o="vaadin-overlay-outside-click",r=this._overlayElement;t&&this._unlisten(r,t,this._boundClose),e?(this._listen(r,e,this._boundClose),r.removeEventListener(o,this._boundPreventDefault)):r.addEventListener(o,this._boundPreventDefault)}_preventDefault(e){e.preventDefault()}_openedChanged(e){e?(document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this._overlayElement.opened=e}requestContentUpdate(){!this._overlayElement||!this.renderer||this._overlayElement.requestContentUpdate()}_rendererChanged(e,t){if(t){if(e)throw new Error("The items API cannot be used together with a renderer");this.closeOn==="click"&&(this.closeOn=""),e=this.__itemsRenderer}this._overlayElement.renderer=e}close(){this._setOpened(!1)}_contextTarget(e){if(this.selector){const t=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(t,o=>e.composedPath().indexOf(o)>-1)[0]}return e.target}open(e){e&&!this.opened&&(this._context={detail:e.detail,target:this._contextTarget(e)},this._context.target&&(e.preventDefault(),e.stopPropagation(),this.__x=this._getEventCoordinate(e,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(e,"y"),this.__pageYOffset=window.pageYOffset,this._overlayElement.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const e=window.pageYOffset-this.__pageYOffset,t=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-t),this.__adjustPosition("right",t),this.__adjustPosition("top",-e),this.__adjustPosition("bottom",e),this.__pageYOffset+=e,this.__pageXOffset+=t}__adjustPosition(e,t){const r=this._overlayElement.style;r[e]=`${(parseInt(r[e])||0)+t}px`}__alignOverlayPosition(){const e=this._overlayElement;if(e.positionTarget)return;const t=e.style;["top","right","bottom","left"].forEach(p=>t.removeProperty(p)),["right-aligned","end-aligned","bottom-aligned"].forEach(p=>e.removeAttribute(p));const{xMax:o,xMin:r,yMax:n}=e.getBoundaries(),a=this.__x,l=this.__y,u=document.documentElement.clientWidth,_=document.documentElement.clientHeight;this.__isRTL?a>u/2||a>r?t.right=`${Math.max(0,u-a)}px`:(t.left=`${a}px`,this._setEndAligned(e)):a<u/2||a<o?t.left=`${a}px`:(t.right=`${Math.max(0,u-a)}px`,this._setEndAligned(e)),l<_/2||l<n?t.top=`${l}px`:(t.bottom=`${Math.max(0,_-l)}px`,e.setAttribute("bottom-aligned",""))}_setEndAligned(e){e.setAttribute("end-aligned",""),this.__isRTL||e.setAttribute("right-aligned","")}_getEventCoordinate(e,t){if(e.detail instanceof Object){if(e.detail[t])return e.detail[t];if(e.detail.sourceEvent)return this._getEventCoordinate(e.detail.sourceEvent,t)}else{const o=`client${t.toUpperCase()}`,r=e.changedTouches?e.changedTouches[0][o]:e[o];if(r===0){const n=e.target.getBoundingClientRect();return t==="x"?n.left:n.top+n.height}return r}}_listen(e,t,o){te[t]?ge(e,t,o):e.addEventListener(t,o)}_unlisten(e,t,o){te[t]?eo(e,t,o):e.removeEventListener(t,o)}_onGlobalContextMenu(e){e.shiftKey||(e.preventDefault(),this.close())}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class vn extends gn(vt(H(V(Nt(E))))){static get template(){return T`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>
    `}static get is(){return"vaadin-context-menu"}ready(){super.ready(),ve(this)}_attachDom(i){const e=this.attachShadow({mode:"open"});return e.appendChild(i),e.appendChild(this._overlayElement),e}}S(vn);(function(){function s(a){return window.Vaadin.Flow.tryCatchWrapper(a,"Vaadin Context Menu")}function i(a,l){try{return window.Vaadin.Flow.clients[a].getByNodeId(l)}catch(u){console.error("Could not get node %s from app %s",l,a),console.error(u)}}function e(a,l){a.$connector||(a.$connector={generateItems:s(u=>{const _=t(l,u);a.items=_})})}function t(a,l){const u=i(a,l);if(u)return Array.from(u.children).map(_=>{const p={component:_,checked:_._checked,keepOpen:_._keepOpen,className:_.className,theme:_.__theme};return _._hasVaadinItemMixin&&_._containerNodeId&&(p.children=t(a,_._containerNodeId)),_._item=p,p})}function o(a,l){a._item&&(a._item.checked=l,a._item.keepOpen&&a.toggleAttribute("menu-item-checked",l))}function r(a,l){a._item&&(a._item.keepOpen=l)}function n(a,l){a._item&&(a._item.theme=l)}window.Vaadin.Flow.contextMenuConnector={initLazy(...a){return s(e)(...a)},generateItemsTree(...a){return s(t)(...a)},setChecked(...a){return s(o)(...a)},setKeepOpen(...a){return s(r)(...a)},setTheme(...a){return s(n)(...a)}}})();(function(){function s(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Context Menu Target")}function i(e){e.$contextMenuTargetConnector||(e.$contextMenuTargetConnector={openOnHandler:s(function(t){if(e.preventContextMenu&&e.preventContextMenu(t))return;t.preventDefault(),t.stopPropagation(),this.$contextMenuTargetConnector.openEvent=t;let o={};e.getContextMenuBeforeOpenDetail&&(o=e.getContextMenuBeforeOpenDetail(t)),e.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:o}))}),updateOpenOn:s(function(t){this.removeListener(),this.openOnEventType=t,customElements.whenDefined("vaadin-context-menu").then(s(()=>{te[t]?ge(e,t,this.openOnHandler):e.addEventListener(t,this.openOnHandler)}))}),removeListener:s(function(){this.openOnEventType&&(te[this.openOnEventType]?eo(e,this.openOnEventType,this.openOnHandler):e.removeEventListener(this.openOnEventType,this.openOnHandler))}),openMenu:s(function(t){t.open(this.openEvent)}),removeConnector:s(function(){this.removeListener(),e.$contextMenuTargetConnector=void 0})})}window.Vaadin.Flow.contextMenuTargetConnector={init(...e){return s(i)(...e)}}})();y("vaadin-overlay",Te,{moduleId:"lumo-vaadin-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-overlay",si,{moduleId:"vaadin-overlay-styles"});class bo extends ri(P(oe(E))){static get template(){return T`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}ready(){super.ready(),ve(this)}}S(bo);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bn=v`
  :host {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
    color: var(--lumo-body-text-color);
    border-radius: var(--lumo-border-radius-s);
    background-color: var(--lumo-contrast-20pct);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([focused]) [part='remove-button'] {
    color: inherit;
  }

  :host([slot='overflow']) {
    position: relative;
    min-width: var(--lumo-size-xxs);
    margin-inline-start: var(--lumo-space-s);
  }

  :host([slot='overflow'])::before,
  :host([slot='overflow'])::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-left: calc(var(--lumo-space-s) / 4) solid;
    border-radius: var(--lumo-border-radius-s);
    border-color: var(--lumo-contrast-30pct);
  }

  :host([slot='overflow'])::before {
    left: calc(-1 * var(--lumo-space-s) / 2);
  }

  :host([slot='overflow'])::after {
    left: calc(-1 * var(--lumo-space-s));
  }

  :host([count='2']) {
    margin-inline-start: calc(var(--lumo-space-s) / 2);
  }

  :host([count='2'])::after {
    display: none;
  }

  :host([count='1']) {
    margin-inline-start: 0;
  }

  :host([count='1'])::before,
  :host([count='1'])::after {
    display: none;
  }

  [part='label'] {
    font-weight: 500;
    line-height: 1.25;
  }

  [part='remove-button'] {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -0.3125em;
    margin-bottom: -0.3125em;
    margin-inline-start: auto;
    width: 1.25em;
    height: 1.25em;
    font-size: 1.5em;
    transition: none;
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
    pointer-events: none;
  }
`;y("vaadin-multi-select-combo-box-chip",[ut,bn],{moduleId:"lumo-multi-select-combo-box-chip"});const yo=v`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  :host([focused]:not([disabled])) {
    box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }
`;y("vaadin-combo-box-item",[bt,yo],{moduleId:"lumo-combo-box-item"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ao=v`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation: 1s linear infinite lumo-loader-rotate, 0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`,Co=v`
  [part='content'] {
    padding: 0;
  }

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }
`,xo=v`
  [part~='loader'] {
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  :host([dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;y("vaadin-combo-box-overlay",[Te,yt,Co,Ao,xo,v`
      :host {
        --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-combo-box-overlay"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yn=v`
  @media (any-hover: hover) {
    :host(:hover[readonly]) {
      background-color: transparent;
      cursor: default;
    }
  }
`;y("vaadin-multi-select-combo-box-item",[bt,yo,yn],{moduleId:"lumo-multi-select-combo-box-item"});y("vaadin-multi-select-combo-box-overlay",[Te,yt,Co,Ao,xo,v`
      :host {
        --_vaadin-multi-select-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-multi-select-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-multi-select-combo-box-overlay"});y("vaadin-multi-select-combo-box-container",v`
    :host([auto-expand-vertically]) {
      padding-block: var(--lumo-space-xs);
    }
  `,{moduleId:"lumo-multi-select-combo-box-container"});const An=v`
  :host([has-value]) {
    padding-inline-start: 0;
  }

  :host([has-value]) ::slotted(input:placeholder-shown) {
    caret-color: var(--lumo-body-text-color) !important;
  }

  [part='label'] {
    flex-shrink: 0;
  }

  /* Override input-container styles */
  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    min-height: auto;
    padding: 0.3125em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-body-text-color);
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([auto-expand-vertically]) ::slotted([slot='chip']) {
    margin-block: calc(var(--lumo-space-xs) / 2);
  }

  ::slotted([slot='chip']:not([readonly]):not([disabled])) {
    padding-inline-end: 0;
  }

  :host([auto-expand-vertically]) ::slotted([slot='input']) {
    min-height: calc(var(--lumo-text-field-size, var(--lumo-size-m)) - 2 * var(--lumo-space-xs));
  }

  ::slotted([slot='chip']:not(:last-of-type)),
  ::slotted([slot='overflow']:not(:last-of-type)) {
    margin-inline-end: var(--lumo-space-xs);
  }

  ::slotted([slot='chip'][focused]) {
    background-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    color: var(--lumo-primary-contrast-color);
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  :host([readonly][has-value]) [part='toggle-button'] {
    color: var(--lumo-contrast-60pct);
    cursor: var(--lumo-clickable-cursor);
  }
`;y("vaadin-multi-select-combo-box",[pt,An],{moduleId:"lumo-multi-select-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Cn extends P(E){static get is(){return"vaadin-multi-select-combo-box-chip"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},label:{type:String},item:{type:Object}}}static get template(){return T`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          align-self: center;
          white-space: nowrap;
          box-sizing: border-box;
        }

        [part='label'] {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        :host([hidden]),
        :host(:is([readonly], [disabled], [slot='overflow'])) [part='remove-button'] {
          display: none !important;
        }

        @media (forced-colors: active) {
          :host {
            outline: 1px solid;
            outline-offset: -1px;
          }
        }
      </style>
      <div part="label">[[label]]</div>
      <div part="remove-button" on-click="_onRemoveClick"></div>
    `}_onRemoveClick(i){i.stopPropagation(),this.dispatchEvent(new CustomEvent("item-removed",{detail:{item:this.item},bubbles:!0,composed:!0}))}}S(Cn);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-multi-select-combo-box-container",v`
    #wrapper {
      display: flex;
      width: 100%;
      min-width: 0;
    }

    :host([auto-expand-vertically]) #wrapper {
      flex-wrap: wrap;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-container-styles"});let Ze;class xn extends io{static get is(){return"vaadin-multi-select-combo-box-container"}static get template(){if(!Ze){Ze=super.template.cloneNode(!0);const i=Ze.content,e=i.querySelectorAll("slot"),t=document.createElement("div");t.setAttribute("id","wrapper"),i.insertBefore(t,e[2]),t.appendChild(e[0]),t.appendChild(e[1])}return Ze}static get properties(){return{autoExpandVertically:{type:Boolean,reflectToAttribute:!0}}}}S(xn);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wn=s=>class extends s{static get properties(){return{index:{type:Number},item:{type:Object},label:{type:String},selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:{type:Function}}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}static get observedAttributes(){return[...super.observedAttributes,"hidden"]}attributeChangedCallback(e,t,o){e==="hidden"&&o!==null?this.index=void 0:super.attributeChangedCallback(e,t,o)}connectedCallback(){super.connectedCallback(),this._owner=this.parentNode.owner;const e=this._owner.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._owner,e)}__rendererOrItemChanged(e,t,o){o===void 0||t===void 0||(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,t){t||(this.textContent=e)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class In extends wn(P(oe(E))){static get is(){return"vaadin-multi-select-combo-box-item"}static get template(){return T`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}}S(In);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const En=s=>class extends ni(s){static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}constructor(){super(),this.requiredVerticalSpace=200}connectedCallback(){super.connectedCallback();const e=this._comboBox,t=e&&e.getAttribute("dir");t&&this.setAttribute("dir",t)}_shouldCloseOnOutsideClick(e){const t=e.composedPath();return!t.includes(this.positionTarget)&&!t.includes(this)}_updateOverlayWidth(){const e=this.localName;this.style.setProperty(`--_${e}-default-width`,`${this.positionTarget.clientWidth}px`);const t=getComputedStyle(this._comboBox).getPropertyValue(`--${e}-width`);t===""?this.style.removeProperty(`--${e}-width`):this.style.setProperty(`--${e}-width`,t)}_setOverlayWidth(e,t){e&&t&&(this._updateOverlayWidth(),this._updatePosition())}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-multi-select-combo-box-overlay",v`
    #overlay {
      width: var(
        --vaadin-multi-select-combo-box-overlay-width,
        var(--_vaadin-multi-select-combo-box-overlay-default-width, auto)
      );
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-overlay-styles"});let Je;class Sn extends En(bo){static get is(){return"vaadin-multi-select-combo-box-overlay"}static get template(){if(!Je){Je=super.template.cloneNode(!0);const i=Je.content.querySelector('[part~="overlay"]');i.removeAttribute("tabindex");const e=document.createElement("div");e.setAttribute("part","loader"),i.insertBefore(e,i.firstElementChild)}return Je}}S(Sn);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ie=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const Ei=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),Tn=Ei&&Ei[1]>=8,Si=3,kn={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const s=this._virtualCount;return Math.max(0,s-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(s){s=this._clamp(s,0,this._maxVirtualStart),this._virtualStartVal=s},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(s){s%=this._physicalCount,s<0&&(s=this._physicalCount+s),this._physicalStartVal=s},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(s){this._physicalCountVal=s},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let s=this._firstVisibleIndexVal;if(s==null){let i=this._physicalTop+this._scrollOffset;s=this._iterateItems((e,t)=>{if(i+=this._getPhysicalSizeIncrement(e),i>this._scrollPosition)return t})||0,this._firstVisibleIndexVal=s}return s},get lastVisibleIndex(){let s=this._lastVisibleIndexVal;if(s==null){let i=this._physicalTop+this._scrollOffset;this._iterateItems((e,t)=>{i<this._scrollBottom&&(s=t),i+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=s}return s},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const s=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let i=s-this._scrollPosition;const e=i>=0;if(this._scrollPosition=s,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(i)>this._physicalSize&&this._physicalSize>0){i-=this._scrollOffset;const t=Math.round(i/this._physicalAverage);this._virtualStart+=t,this._physicalStart+=t,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const t=this._getReusables(e);e?(this._physicalTop=t.physicalTop,this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length):(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length),this._update(t.indexes,e?null:t.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),X)}},_getReusables(s){let i,e,t;const o=[],r=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let u=this._physicalTop+this._scrollOffset;const _=this._physicalBottom+this._scrollOffset,p=this._scrollPosition,m=this._scrollBottom;for(s?(i=this._physicalStart,e=p-u):(i=this._physicalEnd,e=_-m);t=this._getPhysicalSizeIncrement(i),e-=t,!(o.length>=l||e<=r);)if(s){if(a+o.length+1>=this._virtualCount||u+t>=p-this._scrollOffset)break;o.push(i),u+=t,i=(i+1)%l}else{if(n-o.length<=0||u+this._physicalSize-t<=m)break;o.push(i),u-=t,i=i===0?l-1:i-1}return{indexes:o,physicalTop:u-this._scrollOffset}},_update(s,i){if(!(s&&s.length===0||this._physicalCount===0)){if(this._assignModels(s),this._updateMetrics(s),i)for(;i.length;){const e=i.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(s){const e=this._clamp(this._physicalCount+s,Si,this._virtualCount-this._virtualStart)-this._physicalCount;let t=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const o=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let r=0;r<e;r++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-o)/e,t=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||t===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,t)),$o):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,t),X))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const s=this._getReusables(!0);this._physicalTop=s.physicalTop,this._virtualStart+=s.indexes.length,this._physicalStart+=s.indexes.length,this._update(s.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(Si))},_itemsChanged(s){s.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,ee))},_iterateItems(s,i){let e,t,o,r;if(arguments.length===2&&i){for(r=0;r<i.length;r++)if(e=i[r],t=this._computeVidx(e),(o=s.call(this,e,t))!=null)return o}else{for(e=this._physicalStart,t=this._virtualStart;e<this._physicalCount;e++,t++)if((o=s.call(this,e,t))!=null)return o;for(e=0;e<this._physicalStart;e++,t++)if((o=s.call(this,e,t))!=null)return o}},_computeVidx(s){return s>=this._physicalStart?this._virtualStart+(s-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+s},_positionItems(){this._adjustScrollPosition();let s=this._physicalTop;this._iterateItems(i=>{this.translate3d(0,`${s}px`,0,this._physicalItems[i]),s+=this._physicalSizes[i]})},_getPhysicalSizeIncrement(s){return this._physicalSizes[s]},_adjustScrollPosition(){const s=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(s!==0){this._physicalTop-=s;const i=this._scrollPosition;!Tn&&i>0&&this._resetScrollPosition(i-s)}},_resetScrollPosition(s){this.scrollTarget&&s>=0&&(this._scrollTop=s,this._scrollPosition=this._scrollTop)},_updateScrollerSize(s){const i=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=i,(s||this._scrollHeight===0||this._scrollPosition>=i-this._physicalSize||Math.abs(i-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${i}px`,this._scrollHeight=i)},scrollToIndex(s){if(typeof s!="number"||s<0||s>this.items.length-1||(Be(),this._physicalCount===0))return;s=this._clamp(s,0,this._virtualCount-1),(!this._isIndexRendered(s)||s>=this._maxVirtualStart)&&(this._virtualStart=s-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let i=this._physicalStart,e=this._virtualStart,t=0;const o=this._hiddenContentSize;for(;e<s&&t<=o;)t+=this._getPhysicalSizeIncrement(i),i=(i+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+t),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},ee)},_isIndexRendered(s){return s>=this._virtualStart&&s<=this._virtualEnd},_getPhysicalIndex(s){return(this._physicalStart+(s-this._virtualStart))%this._physicalCount},_clamp(s,i,e){return Math.min(e,Math.max(i,s))},_debounce(s,i,e){this._debouncers||(this._debouncers={}),this._debouncers[s]=z.debounce(this._debouncers[s],e,i.bind(this)),Vo(this._debouncers[s])}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zn=1e5,zt=1e3;class wo{constructor({createElements:i,updateElement:e,scrollTarget:t,scrollContainer:o,elementsContainer:r,reorderElements:n}){this.isAttached=!0,this._vidxOffset=0,this.createElements=i,this.updateElement=e,this.scrollTarget=t,this.scrollContainer=o,this.elementsContainer=r||o,this.reorderElements=n,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",a=>this.__onWheel(a)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}get _maxVirtualIndexOffset(){return this.size-this._virtualCount}__hasPlaceholders(){return this.__getVisibleElements().some(i=>i.__virtualizerPlaceholder)}scrollToIndex(i){if(typeof i!="number"||isNaN(i)||this.size===0||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),i=this._clamp(i,0,this.size-1);const e=this.__getVisibleElements().length;let t=Math.floor(i/this.size*this._virtualCount);this._virtualCount-t<e?(t=this._virtualCount-(this.size-i),this._vidxOffset=this._maxVirtualIndexOffset):t<e?i<zt?(t=i,this._vidxOffset=0):(t=zt,this._vidxOffset=i-t):this._vidxOffset=i-t,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(t),this.adjustedFirstVisibleIndex!==i&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(i)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=i)}flush(){const i=this._physicalCount;this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),Be(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush(),this._physicalCount!==i&&this.flush())}update(i=0,e=this.size-1){const t=[];this.__getVisibleElements().forEach(o=>{o.__virtualIndex>=i&&o.__virtualIndex<=e&&(this.__updateElement(o,o.__virtualIndex,!0),t.push(o))}),this.__afterElementsUpdated(t)}_updateMetrics(i){Be();let e=0,t=0;const o=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems((n,a)=>{t+=this._physicalSizes[n],this._physicalSizes[n]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[n])),e+=this._physicalSizes[n],this._physicalAverageCount+=this._physicalSizes[n]?1:0},i),this._physicalSize=this._physicalSize+e-t,this._physicalAverageCount!==o&&(this._physicalAverage=Math.round((r*o+e)/this._physicalAverageCount))}__getBorderBoxHeight(i){const e=getComputedStyle(i),t=parseFloat(e.height)||0;if(e.boxSizing==="border-box")return t;const o=parseFloat(e.paddingBottom)||0,r=parseFloat(e.paddingTop)||0,n=parseFloat(e.borderBottomWidth)||0,a=parseFloat(e.borderTopWidth)||0;return t+o+r+n+a}__updateElement(i,e,t){i.__virtualizerPlaceholder&&(i.style.paddingTop="",i.__virtualizerPlaceholder=!1),!this.__preventElementUpdates&&(i.__lastUpdatedIndex!==e||t)&&(this.updateElement(i,e),i.__lastUpdatedIndex=e)}__afterElementsUpdated(i){i.forEach(e=>{const t=e.offsetHeight;if(t===0)e.style.paddingTop=`${this.__placeholderHeight}px`,e.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=z.debounce(this.__placeholderClearDebouncer,ee,()=>this._resizeHandler());else{this.__elementHeightQueue.push(t),this.__elementHeightQueue.shift();const o=this.__elementHeightQueue.filter(r=>r!==void 0);this.__placeholderHeight=Math.round(o.reduce((r,n)=>r+n,0)/o.length)}}),this.__pendingScrollToIndex!==void 0&&!this.__hasPlaceholders()&&this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(i){const e=this.__getVisibleElements().find(t=>t.__virtualIndex===i);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(i){if(i===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let e,t;if(i>0&&(e=this.adjustedFirstVisibleIndex,t=this.__getIndexScrollOffset(e)),this.__size=i,this._itemsChanged({path:"items"}),Be(),i>0){e=Math.min(e,i-1),this.scrollToIndex(e);const o=this.__getIndexScrollOffset(e);t!==void 0&&o!==void 0&&(this._scrollTop+=t-o)}this.__preventElementUpdates=!1,this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),Be()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(i){this.scrollTarget.scrollTop=i}get items(){return{length:Math.min(this.size,zn)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const i=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(i["padding-top"],10),this._isRTL=i.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(i){const e=this.createElements(i),t=document.createDocumentFragment();return e.forEach(o=>{o.style.position="absolute",t.appendChild(o),this.__resizeObserver.observe(o)}),this.elementsContainer.appendChild(t),e}_assignModels(i){const e=[];this._iterateItems((t,o)=>{const r=this._physicalItems[t];r.hidden=o>=this.size,r.hidden?delete r.__lastUpdatedIndex:(r.__virtualIndex=o+(this._vidxOffset||0),this.__updateElement(r,r.__virtualIndex),e.push(r))},i),this.__afterElementsUpdated(e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(i,e,t,o){o.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const i=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const e=i>=0,t=this._getReusables(!e);t.indexes.length&&(this._physicalTop=t.physicalTop,e?(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length):(this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length),this._resizeHandler())}i&&(this.__fixInvalidItemPositioningDebouncer=z.debounce(this.__fixInvalidItemPositioningDebouncer,Q.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=z.debounce(this.__scrollReorderDebouncer,Q.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(i)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const i=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,t=this.adjustedFirstVisibleIndex===0,o=this.adjustedLastVisibleIndex===this.size-1;if(i&&!t||e&&!o){const r=e,n=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(r?-1:1),this._scrollHandler(),this._ratio=n}}__onWheel(i){if(i.ctrlKey||this._hasScrolledAncestor(i.target,i.deltaX,i.deltaY))return;let e=i.deltaY;if(i.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:i.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame){this._deltaYAcc+=e,i.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=z.debounce(this.__debouncerWheelAnimationFrame,ee,()=>{this._wheelAnimationFrame=!1});const t=Math.abs(i.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,i.deltaX,e)?(i.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=i.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=z.debounce(this._debouncerIgnoreNewWheel,Q.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&t<=this._previousMomentum||this._ignoreNewWheel?i.preventDefault():t>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=t}_hasScrolledAncestor(i,e,t){if(i===this.scrollTarget||i===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(i,e,t)&&["auto","scroll"].indexOf(getComputedStyle(i).overflow)!==-1)return!0;if(i!==this&&i.parentElement)return this._hasScrolledAncestor(i.parentElement,e,t)}_canScroll(i,e,t){return t>0&&i.scrollTop<i.scrollHeight-i.offsetHeight||t<0&&i.scrollTop>0||e>0&&i.scrollLeft<i.scrollWidth-i.offsetWidth||e<0&&i.scrollLeft>0}_increasePoolIfNeeded(i){if(this._physicalCount>2&&i){const t=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(i,Math.min(100,t)))}else super._increasePoolIfNeeded(i)}_getScrollLineHeight(){const i=document.createElement("div");i.style.fontSize="initial",i.style.display="none",document.body.appendChild(i);const e=window.getComputedStyle(i).fontSize;return document.body.removeChild(i),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(i=>!i.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const i=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),o=e.find(a=>a.contains(this.elementsContainer.getRootNode().activeElement)||a.contains(this.scrollTarget.getRootNode().activeElement))||e[0];if(!o)return;const r=o.__virtualIndex-i,n=e.indexOf(o)-r;if(n>0)for(let a=0;a<n;a++)this.elementsContainer.appendChild(e[a]);else if(n<0)for(let a=e.length+n;a<e.length;a++)this.elementsContainer.insertBefore(e[a],e[0]);if(Ni){const{transform:a}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=a})}}_adjustVirtualIndexOffset(i){const e=this._maxVirtualIndexOffset;if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(i)>1e4){const t=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight);this._vidxOffset=Math.round(t*e)}else{const t=this._vidxOffset,o=zt,r=100;this._scrollTop===0?(this._vidxOffset=0,t!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<o&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex+(t-this._vidxOffset))),this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=e,t!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-o&&this._vidxOffset<e&&(this._vidxOffset+=Math.min(e-this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-t)))}}}Object.setPrototypeOf(wo.prototype,kn);class Io{constructor(i){this.__adapter=new wo(i)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(i){this.__adapter.size=i}scrollToIndex(i){this.__adapter.scrollToIndex(i)}update(i=0,e=this.size-1){this.__adapter.update(i,e)}flush(){this.__adapter.flush()}}/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pn=s=>class extends s{static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object,observer:"__selectedItemChanged"},itemIdPath:{type:String},owner:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(t=>parseInt(t,10)).reduce((t,o)=>t+o)}return this._cachedViewportTotalPaddingBottom}ready(){super.ready(),this.setAttribute("role","listbox"),this.id=`${this.localName}-${_t()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.addEventListener("click",e=>e.stopPropagation()),this.__patchWheelOverScrolling()}requestContentUpdate(){this.opened&&this.__virtualizer.update()}scrollIntoView(e){if(!(this.opened&&e>=0))return;const t=this._visibleItemsCount();let o=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),o=e-t+1):e>this.__virtualizer.firstVisibleIndex&&(o=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,o));const r=[...this.children].find(u=>!u.hidden&&u.index===this.__virtualizer.lastVisibleIndex);if(!r||e!==r.index)return;const n=r.getBoundingClientRect(),a=this.getBoundingClientRect(),l=n.bottom-a.bottom+this._viewportTotalPaddingBottom;l>0&&(this.scrollTop+=l)}_isItemSelected(e,t,o){return e instanceof ie?!1:o&&e!==void 0&&t!==void 0?me(o,e)===me(o,t):e===t}__initVirtualizer(){this.__virtualizer=new Io({createElements:this.__createElements.bind(this),updateElement:this._updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}__itemsChanged(e){e&&this.__virtualizer&&(this.__setVirtualizerItems(e),this.requestContentUpdate())}__loadingChanged(){this.requestContentUpdate()}__openedChanged(e){e&&(this.__virtualizer||(this.__initVirtualizer(),this.items&&this.__setVirtualizerItems(this.items)),this.requestContentUpdate())}__setVirtualizerItems(e){this.__virtualizer.size=e.length,this.__virtualizer.flush()}__selectedItemChanged(){this.requestContentUpdate()}__focusedIndexChanged(e,t){e!==t&&this.requestContentUpdate(),e>=0&&!this.loading&&this.scrollIntoView(e)}__rendererChanged(e,t){(e||t)&&this.requestContentUpdate()}__createElements(e){return[...Array(e)].map(()=>{const t=document.createElement(`${this.__hostTagName}-item`);return t.addEventListener("click",this.__boundOnItemClick),t.tabIndex="-1",t.style.width="100%",t})}_updateElement(e,t){const o=this.items[t],r=this.focusedIndex,n=this._isItemSelected(o,this.selectedItem,this.itemIdPath);e.setProperties({item:o,index:t,label:this.getItemLabel(o),selected:n,renderer:this.renderer,focused:!this.loading&&r===t}),e.id=`${this.__hostTagName}-item-${t}`,e.setAttribute("role",t!==void 0?"option":!1),e.setAttribute("aria-selected",n.toString()),e.setAttribute("aria-posinset",t+1),e.setAttribute("aria-setsize",this.items.length),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme"),o instanceof ie&&this.__requestItemByIndex(t)}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",e=>{const t=this.scrollTop===0,o=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(t&&e.deltaY<0||o&&e.deltaY>0)&&e.preventDefault()})}__requestItemByIndex(e){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:e,currentScrollerPos:this._oldScrollerPosition}}))})}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class On extends Pn(E){static get is(){return"vaadin-multi-select-combo-box-scroller"}static get template(){return T`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-multi-select-combo-box-items-container-border-width);
          border-style: var(--_vaadin-multi-select-combo-box-items-container-border-style);
          border-color: var(--_vaadin-multi-select-combo-box-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-multiselectable","true")}_isItemSelected(i,e,t){return i instanceof ie||this.owner.readonly?!1:this.owner._findIndex(i,this.owner.selectedItems,t)>-1}_updateElement(i,e){super._updateElement(i,e),i.toggleAttribute("readonly",this.owner.readonly)}}S(On);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rn=s=>class extends s{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new ie},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}ready(){super.ready(),this._scroller.addEventListener("index-requested",e=>{const t=e.detail.index,o=e.detail.currentScrollerPos,r=Math.floor(this.pageSize*1.5);if(!this._shouldSkipIndex(t,r,o)&&t!==void 0){const n=this._getPageForIndex(t);this._shouldLoadPage(n)&&this._loadPage(n)}})}_dataProviderFilterChanged(e){if(this.__previousDataProviderFilter===void 0&&e===""){this.__previousDataProviderFilter=e;return}this.__previousDataProviderFilter!==e&&(this.__previousDataProviderFilter=e,this._pendingRequests={},this.loading=this._shouldFetchData(),this.size=void 0,this.clearCache())}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,t,o){return o!==0&&e>=o-t&&e<=o+t}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const t=this.filteredItems[e*this.pageSize];return t!==void 0?t instanceof ie:this.size===void 0}_loadPage(e){if(this._pendingRequests[e]||!this.dataProvider)return;const t={page:e,pageSize:this.pageSize,filter:this.filter},o=(r,n)=>{if(this._pendingRequests[e]!==o)return;const a=this.filteredItems?[...this.filteredItems]:[];a.splice(t.page*t.pageSize,r.length,...r),this.filteredItems=a,!this.opened&&!this._isInputFocused()&&this._commitValue(),n!==void 0&&(this.size=n),delete this._pendingRequests[e],Object.keys(this._pendingRequests).length===0&&(this.loading=!1)};this._pendingRequests[e]=o,this.loading=!0,this.dataProvider(t,o)}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?(this._forceNextRequest=!1,this._loadPage(0)):this._forceNextRequest=!0}_sizeChanged(e=0){const t=(this.filteredItems||[]).slice(0,e);for(let o=0;o<e;o++)t[o]=t[o]!==void 0?t[o]:this.__placeHolder;this.filteredItems=t,this._flushPendingRequests(e)}_pageSizeChanged(e,t){if(Math.floor(e)!==e||e<1)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.dataProvider=t}),this.clearCache()}_ensureItemsOrDataProvider(e){if(this.items!==void 0&&this.dataProvider!==void 0)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,t){if(e&&t!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const o=this.__getItemIndexByValue(this.filteredItems,t);(o<0||!this._getItemLabel(this.filteredItems[o]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests){const t=Math.ceil(e/this.pageSize);Object.entries(this._pendingRequests).forEach(([o,r])=>{parseInt(o)>=t&&r([],e)})}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fn{constructor(i){this.host=i,i.addEventListener("opened-changed",()=>{i.opened||this.__setVirtualKeyboardEnabled(!1)}),i.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),i.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(i){this.host.inputElement&&(this.host.inputElement.inputMode=i?"":"none")}}/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ti(s){return s!=null}function ki(s,i){return s.findIndex(e=>e instanceof ie?!1:i(e))}const Dn=s=>class extends vt(H(ii(Ee(Se(mt(We(s))))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged"},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_dropdownItems:{type:Array},_closeOnBlurIsPrevented:Boolean,_scroller:Object,_overlayOpened:{type:Boolean,observer:"_overlayOpenedChanged"}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, _dropdownItems, loading)","_updateScroller(_scroller, _dropdownItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super(),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _nativeInput(){return this.inputElement}_inputElementChanged(e){super._inputElementChanged(e);const t=this._nativeInput;t&&(t.autocomplete="off",t.autocapitalize="off",t.setAttribute("role","combobox"),t.setAttribute("aria-autocomplete","list"),t.setAttribute("aria-expanded",!!this.opened),t.setAttribute("spellcheck","false"),t.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame(()=>{this._overlayElement.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),ve(this),this.addController(new Fn(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){this._scroller&&(this._scroller.requestContentUpdate(),this._getItemElements().forEach(e=>{e.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(e,t,o){super._propertiesChanged(e,t,o),t.filter!==void 0&&this._filterChanged(t.filter)}_initOverlay(){const e=this.$.overlay;e._comboBox=this,e.addEventListener("touchend",this._boundOnOverlayTouchAction),e.addEventListener("touchmove",this._boundOnOverlayTouchAction),e.addEventListener("mousedown",t=>t.preventDefault()),e.addEventListener("opened-changed",t=>{this._overlayOpened=t.detail.value}),this._overlayElement=e}_initScroller(e){const t=`${this._tagNamePrefix}-scroller`,o=this._overlayElement;o.renderer=n=>{n.firstChild||n.appendChild(document.createElement(t))},o.requestContentUpdate();const r=o.querySelector(t);r.owner=e||this,r.getItemLabel=this._getItemLabel.bind(this),r.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this._scroller=r}_updateScroller(e,t,o,r,n,a,l,u,_){e&&(o&&(e.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),e.setProperties({items:o?t:[],opened:o,loading:r,selectedItem:n,itemIdPath:a,focusedIndex:l,renderer:u,theme:_}))}_openedOrItemsChanged(e,t,o){this._overlayOpened=!!(e&&(o||t&&t.length))}_overlayOpenedChanged(e,t){e?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):t&&this._dropdownItems&&this._dropdownItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(e,t){t!==void 0&&this._updateActiveDescendant(e)}_isInputFocused(){return this.inputElement&&Bi(this.inputElement)}_updateActiveDescendant(e){const t=this._nativeInput;if(!t)return;const o=this._getItemElements().find(r=>r.index===e);o?t.setAttribute("aria-activedescendant",o.id):t.removeAttribute("aria-activedescendant")}_openedChanged(e,t){if(t===void 0)return;e?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this._isInputFocused()&&!le&&this.inputElement&&this.inputElement.focus(),this._overlayElement.restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this._isInputFocused()&&this.setAttribute("focus-ring",""));const o=this._nativeInput;o&&(o.setAttribute("aria-expanded",!!e),e?o.setAttribute("aria-controls",this._scroller.id):o.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onClearButtonClick(e){e.preventDefault(),this._onClearAction(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(e){e.preventDefault(),this.opened?this.close():this.open()}_onHostClick(e){this.autoOpenDisabled||(e.preventDefault(),this.open())}_onClick(e){this._isClearButton(e)?this._onClearButtonClick(e):e.composedPath().includes(this._toggleElement)?this._onToggleButtonClick(e):this._onHostClick(e)}_onKeyDown(e){super._onKeyDown(e),e.key==="Tab"?this._overlayElement.restoreFocusOnClose=!1:e.key==="ArrowDown"?(this._onArrowDown(),e.preventDefault()):e.key==="ArrowUp"&&(this._onArrowUp(),e.preventDefault())}_getItemLabel(e){let t=e&&this.itemLabelPath?me(this.itemLabelPath,e):void 0;return t==null&&(t=e?e.toString():""),t}_getItemValue(e){let t=e&&this.itemValuePath?me(this.itemValuePath,e):void 0;return t===void 0&&(t=e?e.toString():""),t}_onArrowDown(){if(this.opened){const e=this._dropdownItems;e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this._dropdownItems;e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const e=this._dropdownItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(e),this._markAllSelectionRange()}}_setSelectionRange(e,t){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(e,t)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(e){if(!this._hasValidInputValue()){e.preventDefault(),e.stopPropagation();return}this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_hasValidInputValue(){const e=this._focusedIndex<0&&this._inputElementValue!==""&&this._getItemLabel(this.selectedItem)!==this._inputElementValue;return this.allowCustomValue||!e}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(e.stopPropagation(),this._onClearAction()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",t=>t.preventDefault()),e.addEventListener("click",()=>{le&&!this._isInputFocused()&&document.activeElement.blur()}))}_onClearAction(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){this._lastCommittedValue=this.value}_onClosed(){(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const e=this._dropdownItems[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem),this._focusedIndex=-1}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=[this.selectedItem,...this._dropdownItems||[]],t=e[this.__getItemIndexByLabel(e,this._inputElementValue)];if(this.allowCustomValue&&!t){const o=this._inputElementValue;this._lastCustomValue=o;const r=new CustomEvent("custom-value-set",{detail:o,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(r),r.defaultPrevented||(this.value=o)}else!this.allowCustomValue&&!this.opened&&t?this.value=this._getItemValue(t):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}_onInput(e){const t=this._inputElementValue,o={};this.filter===t?this._filterChanged(this.filter):o.filter=t,!this.opened&&!this._isClearButton(e)&&!this.autoOpenDisabled&&(o.opened=!0),this.setProperties(o)}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){typeof e!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(e==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const t=this._getItemValue(e);if(this.value!==t&&(this.value=t,this.value!==t))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}}_valueChanged(e,t){e===""&&t===void 0||(Ti(e)?(this._getItemValue(this.selectedItem)!==e&&this._selectItemForValue(e),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){document.hasFocus()&&this.validate(),this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.items=t}),e?this.filteredItems=e.slice(0):t&&(this.filteredItems=null)}_filteredItemsChanged(e,t){this._setDropdownItems(e);const o=t?t[this._focusedIndex]:null,r=this.__getItemIndexByValue(e,this.value);(this.selectedItem===null||this.selectedItem===void 0)&&r>=0&&(this.selectedItem=e[r]);const n=this.__getItemIndexByValue(e,this._getItemValue(o));n>-1?this._focusedIndex=n:this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this.filter)}_filterItems(e,t){return e&&e.filter(r=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(r).toString().toLowerCase().indexOf(t)>-1))}_selectItemForValue(e){const t=this.__getItemIndexByValue(this.filteredItems,e),o=this.selectedItem;t>=0?this.selectedItem=this.filteredItems[t]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&o===null&&this._selectedItemChanged(this.selectedItem)}_setDropdownItems(e){this._dropdownItems=e}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(e){this._scroller&&this._scroller.scrollIntoView(e)}__getItemIndexByValue(e,t){return!e||!Ti(t)?-1:ki(e,o=>this._getItemValue(o)===t)}__getItemIndexByLabel(e,t){return!e||!t?-1:ki(e,o=>this._getItemLabel(o).toString().toLowerCase()===t.toString().toLowerCase())}_overlaySelectedItemChanged(e){e.stopPropagation(),!(e.detail.item instanceof ie)&&this.opened&&(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close())}_setFocused(e){if(super._setFocused(e),!e&&!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}this._closeOrCommit()}}_shouldRemoveFocus(e){return e.relatedTarget&&e.relatedTarget.localName===`${this._tagNamePrefix}-item`?!1:e.relatedTarget===this._overlayElement?(e.composedPath()[0].focus(),!1):!0}_onTouchend(e){!this.clearElement||e.composedPath()[0]!==this.clearElement||(e.preventDefault(),this._onClearAction())}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ln extends Rn(Dn(P(E))){static get is(){return"vaadin-multi-select-combo-box-internal"}static get template(){return T`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-multi-select-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_target]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-multi-select-combo-box-overlay>
    `}static get properties(){return{filteredItems:{type:Array,notify:!0},loading:{type:Boolean,notify:!0},size:{type:Number,notify:!0},selectedItems:{type:Array,value:()=>[]},selectedItemsOnTop:{type:Boolean,value:!1},lastFilter:{type:String,notify:!0},topGroup:{type:Array,observer:"_topGroupChanged"},_target:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}get _tagNamePrefix(){return"vaadin-multi-select-combo-box"}open(){!this.disabled&&!(this.readonly&&this.selectedItems.length===0)&&(this.opened=!0)}ready(){super.ready(),this._target=this,this._toggleElement=this.querySelector(".toggle-button")}_setDropdownItems(i){if(this.readonly){this._dropdownItems=this.selectedItems;return}if(this.filter||!this.selectedItemsOnTop){this._dropdownItems=i;return}if(i&&i.length&&this.topGroup&&this.topGroup.length){const e=i.filter(t=>this._comboBox._findIndex(t,this.topGroup,this.itemIdPath)===-1);this._dropdownItems=this.topGroup.concat(e);return}this._dropdownItems=i}_topGroupChanged(i){i&&this._setDropdownItems(this.filteredItems)}_initScroller(){const i=this.getRootNode().host;this._comboBox=i,super._initScroller(i)}_onEnter(i){if(this.opened){if(i.preventDefault(),i.stopPropagation(),this.readonly)this.close();else if(this._hasValidInputValue()){const e=this._dropdownItems[this._focusedIndex];this._commitValue(),this._focusedIndex=this._dropdownItems.indexOf(e)}return}super._onEnter(i)}_onEscape(i){if(this.readonly){i.stopPropagation(),this.opened&&this.close();return}super._onEscape(i)}_commitValue(){this.lastFilter=this.filter,super._commitValue()}_onArrowDown(){this.readonly?this.opened||this.open():super._onArrowDown()}_onArrowUp(){this.readonly?this.opened||this.open():super._onArrowUp()}_setFocused(i){i||(this._ignoreCommitValue=!0),super._setFocused(i),!i&&this.readonly&&!this._closeOnBlurIsPrevented&&this.close()}_detectAndDispatchChange(){if(this._ignoreCommitValue){this._ignoreCommitValue=!1,this.selectedItem=null,this._inputElementValue="";return}super._detectAndDispatchChange()}_overlaySelectedItemChanged(i){i.stopPropagation(),!this.readonly&&(i.detail.item instanceof ie||this.opened&&this.dispatchEvent(new CustomEvent("combo-box-item-selected",{detail:{item:i.detail.item}})))}_shouldLoadPage(i){return this.readonly?!1:super._shouldLoadPage(i)}clearCache(){this.readonly||super.clearCache()}}S(Ln);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mn=v`
  :host {
    --input-min-width: var(--vaadin-multi-select-combo-box-input-min-width, 4em);
    --_chip-min-width: var(--vaadin-multi-select-combo-box-chip-min-width, 50px);
  }

  #chips {
    display: flex;
    align-items: center;
  }

  ::slotted(input) {
    box-sizing: border-box;
    flex: 1 0 var(--input-min-width);
  }

  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    flex: 0 1 auto;
  }

  ::slotted([slot='chip']) {
    overflow: hidden;
  }

  :host(:is([readonly], [disabled])) ::slotted(input) {
    flex-grow: 0;
    flex-basis: 0;
    padding: 0;
  }

  :host([auto-expand-vertically]) #chips {
    display: contents;
  }

  :host([auto-expand-horizontally]) [class$='container'] {
    width: auto;
  }
`;y("vaadin-multi-select-combo-box",[Qt,Mn],{moduleId:"vaadin-multi-select-combo-box-styles"});class Bn extends oi(ao(P(V(E)))){static get is(){return"vaadin-multi-select-combo-box"}static get template(){return T`
      <div class="vaadin-multi-select-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-multi-select-combo-box-internal
          id="comboBox"
          items="[[__effectiveItems]]"
          item-id-path="[[itemIdPath]]"
          item-label-path="[[itemLabelPath]]"
          item-value-path="[[itemValuePath]]"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          allow-custom-value="[[allowCustomValue]]"
          overlay-class="[[overlayClass]]"
          data-provider="[[dataProvider]]"
          filter="{{filter}}"
          last-filter="{{_lastFilter}}"
          loading="{{loading}}"
          size="{{size}}"
          filtered-items="[[__effectiveFilteredItems]]"
          selected-items="[[selectedItems]]"
          selected-items-on-top="[[selectedItemsOnTop]]"
          top-group="[[_topGroup]]"
          opened="{{opened}}"
          renderer="[[renderer]]"
          theme$="[[_theme]]"
          on-combo-box-item-selected="_onComboBoxItemSelected"
          on-change="_onComboBoxChange"
          on-custom-value-set="_onCustomValueSet"
          on-filtered-items-changed="_onFilteredItemsChanged"
        >
          <vaadin-multi-select-combo-box-container
            part="input-field"
            auto-expand-vertically="[[autoExpandVertically]]"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="overflow" slot="prefix"></slot>
            <div id="chips" part="chips" slot="prefix">
              <slot name="chip"></slot>
            </div>
            <slot name="input"></slot>
            <div
              id="clearButton"
              part="clear-button"
              slot="suffix"
              on-touchend="_onClearButtonTouchend"
              aria-hidden="true"
            ></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-multi-select-combo-box-container>
        </vaadin-multi-select-combo-box-internal>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{autoExpandHorizontally:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_autoExpandHorizontallyChanged"},autoExpandVertically:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_autoExpandVerticallyChanged"},autoOpenDisabled:Boolean,clearButtonVisible:{type:Boolean,reflectToAttribute:!0,observer:"_clearButtonVisibleChanged",value:!1},items:{type:Array},itemLabelPath:{type:String,value:"label"},itemValuePath:{type:String,value:"value"},itemIdPath:{type:String},i18n:{type:Object,value:()=>({cleared:"Selection cleared",focused:"focused. Press Backspace to remove",selected:"added to selection",deselected:"removed from selection",total:"{count} items selected"})},loading:{type:Boolean,value:!1,reflectToAttribute:!0},overlayClass:{type:String},readonly:{type:Boolean,value:!1,observer:"_readonlyChanged",reflectToAttribute:!0},selectedItems:{type:Array,value:()=>[],notify:!0},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},size:{type:Number},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object},allowCustomValue:{type:Boolean,value:!1},placeholder:{type:String,value:"",observer:"_placeholderChanged"},renderer:Function,filter:{type:String,value:"",notify:!0},filteredItems:Array,selectedItemsOnTop:{type:Boolean,value:!1},value:{type:String},__effectiveItems:{type:Array,computed:"__computeEffectiveItems(items, selectedItems, readonly)"},__effectiveFilteredItems:{type:Array,computed:"__computeEffectiveFilteredItems(items, filteredItems, selectedItems, readonly)"},_overflowItems:{type:Array,value:()=>[]},_focusedChipIndex:{type:Number,value:-1,observer:"_focusedChipIndexChanged"},_lastFilter:{type:String},_topGroup:{type:Array}}}static get observers(){return["_selectedItemsChanged(selectedItems, selectedItems.*)","__updateOverflowChip(_overflow, _overflowItems, disabled, readonly)","__updateTopGroup(selectedItemsOnTop, selectedItems, opened)"]}get slotStyles(){const i=this.localName;return[...super.slotStyles,`
        ${i}[has-value] input::placeholder {
          color: transparent !important;
          forced-color-adjust: none;
        }
      `]}get clearElement(){return this.$.clearButton}get _chips(){return[...this.querySelectorAll('[slot="chip"]')]}get _hasValue(){return this.selectedItems&&this.selectedItems.length>0}ready(){super.ready(),this.addController(new ft(this,i=>{this._setInputElement(i),this._setFocusElement(i),this.stateTarget=i,this.ariaTarget=i})),this.addController(new qe(this.inputElement,this._labelController)),this._tooltipController=new be(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(i=>!i.opened),this._inputField=this.shadowRoot.querySelector('[part="input-field"]'),this._overflowController=new j(this,"overflow","vaadin-multi-select-combo-box-chip",{initializer:i=>{i.addEventListener("mousedown",e=>this._preventBlur(e)),this._overflow=i}}),this.addController(this._overflowController),this.__updateChips(),ve(this)}checkValidity(){return this.required&&!this.readonly?this._hasValue:!0}clear(){this.__updateSelection([]),pe(this.i18n.cleared)}clearCache(){this.$&&this.$.comboBox&&this.$.comboBox.clearCache()}requestContentUpdate(){this.$&&this.$.comboBox&&this.$.comboBox.requestContentUpdate()}_disabledChanged(i,e){super._disabledChanged(i,e),(i||e)&&this.__updateChips()}_inputElementChanged(i){super._inputElementChanged(i),i&&this.$.comboBox._setInputElement(i)}_setFocused(i){super._setFocused(i),!i&&document.hasFocus()&&(this._focusedChipIndex=-1,this.validate())}_onResize(){this.__updateChips()}_delegateAttribute(i,e){if(this.stateTarget){if(i==="required"){this._delegateAttribute("aria-required",e?"true":!1);return}super._delegateAttribute(i,e)}}_autoExpandHorizontallyChanged(i,e){(i||e)&&this.__updateChips()}_autoExpandVerticallyChanged(i,e){(i||e)&&this.__updateChips()}_clearButtonVisibleChanged(i,e){(i||e)&&this.__updateChips()}_onFilteredItemsChanged(i){const{value:e}=i.detail;(Array.isArray(e)||e==null)&&(this.filteredItems=e)}_readonlyChanged(i,e){(i||e)&&this.__updateChips(),this.dataProvider&&this.clearCache()}_pageSizeChanged(i,e){(Math.floor(i)!==i||i<=0)&&(this.pageSize=e,console.error('"pageSize" value must be an integer > 0')),this.$.comboBox.pageSize=this.pageSize}_placeholderChanged(i){const e=this.__tmpA11yPlaceholder;e!==i&&(this.__savedPlaceholder=i,e&&(this.placeholder=e))}_selectedItemsChanged(i){if(this._toggleHasValue(this._hasValue),this._hasValue){const e=this._mergeItemLabels(i);this.__tmpA11yPlaceholder=e,this.placeholder=e}else delete this.__tmpA11yPlaceholder,this.placeholder=this.__savedPlaceholder;this.__updateChips(),this.requestContentUpdate(),this.opened&&this.$.comboBox.$.overlay._updateOverlayWidth()}_getItemLabel(i){return this.$.comboBox._getItemLabel(i)}_mergeItemLabels(i){return i.map(e=>this._getItemLabel(e)).join(", ")}_findIndex(i,e,t){if(t&&i){for(let o=0;o<e.length;o++)if(e[o]&&e[o][t]===i[t])return o;return-1}return e.indexOf(i)}__clearFilter(){this.filter="",this.$.comboBox.clear()}__announceItem(i,e,t){const o=e?"selected":"deselected",r=this.i18n.total.replace("{count}",t||0);pe(`${i} ${this.i18n[o]} ${r}`)}__removeItem(i){const e=[...this.selectedItems];e.splice(e.indexOf(i),1),this.__updateSelection(e);const t=this._getItemLabel(i);this.__announceItem(t,!1,e.length)}__selectItem(i){const e=[...this.selectedItems],t=this._findIndex(i,e,this.itemIdPath),o=this._getItemLabel(i);let r=!1;if(t!==-1){const n=this._lastFilter;if(n&&n.toLowerCase()===o.toLowerCase()){this.__clearFilter();return}e.splice(t,1)}else e.push(i),r=!0;this.__updateSelection(e),this.__clearFilter(),this.__announceItem(o,r,e.length)}__updateSelection(i){this.selectedItems=i,this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__updateTopGroup(i,e,t){i?t||(this._topGroup=[...e]):this._topGroup=[]}__createChip(i){const e=document.createElement("vaadin-multi-select-combo-box-chip");e.setAttribute("slot","chip"),e.item=i,e.disabled=this.disabled,e.readonly=this.readonly;const t=this._getItemLabel(i);return e.label=t,e.setAttribute("title",t),e.addEventListener("item-removed",o=>this._onItemRemoved(o)),e.addEventListener("mousedown",o=>this._preventBlur(o)),e}__getOverflowWidth(){const i=this._overflow;i.style.visibility="hidden",i.removeAttribute("hidden");const e=i.getAttribute("count");i.setAttribute("count","99");const t=getComputedStyle(i),o=i.clientWidth+parseInt(t.marginInlineStart);return i.setAttribute("count",e),i.setAttribute("hidden",""),i.style.visibility="",o}__updateChips(){if(!this._inputField||!this.inputElement)return;this._chips.forEach(n=>{n.remove()});const i=[...this.selectedItems],e=this._inputField.$.wrapper.clientWidth,t=parseInt(getComputedStyle(this.inputElement).flexBasis);let o=e-t;i.length>1&&(o-=this.__getOverflowWidth());const r=parseInt(getComputedStyle(this).getPropertyValue("--_chip-min-width"));if(this.autoExpandHorizontally){const n=[];for(let u=i.length-1,_=null;u>=0;u--){const p=this.__createChip(i[u]);this.insertBefore(p,_),_=p,n.unshift(p)}const a=[],l=this._inputField.$.wrapper.clientWidth-this.$.chips.clientWidth;if(!this.autoExpandVertically&&l<t){for(;n.length>1;){n.pop().remove(),a.unshift(i.pop());const _=a.length>0?t+this.__getOverflowWidth():t;if(this._inputField.$.wrapper.clientWidth-this.$.chips.clientWidth>=_)break}n.length===1&&(n[0].style.maxWidth=`${Math.max(r,o)}px`)}this._overflowItems=a;return}for(let n=i.length-1,a=null;n>=0;n--){const l=this.__createChip(i[n]);if(this.insertBefore(l,a),!this.autoExpandVertically&&this.$.chips.clientWidth>o)if(a===null)l.style.maxWidth=`${Math.max(r,o)}px`;else{l.remove();break}i.pop(),a=l}this._overflowItems=i}__updateOverflowChip(i,e,t,o){if(i){const r=e.length;i.label=`${r}`,i.setAttribute("count",`${r}`),i.setAttribute("title",this._mergeItemLabels(e)),i.toggleAttribute("hidden",r===0),i.disabled=t,i.readonly=o}}_onClearButtonTouchend(i){i.preventDefault(),i.stopPropagation(),this.clear()}_onClearButtonClick(i){i.stopPropagation(),this.clear()}_onChange(i){i.stopPropagation()}_onEscape(i){this.clearButtonVisible&&this.selectedItems&&this.selectedItems.length&&(i.stopPropagation(),this.selectedItems=[])}_onKeyDown(i){super._onKeyDown(i);const e=this._chips;if(!this.readonly&&e.length>0)switch(i.key){case"Backspace":this._onBackSpace(e);break;case"ArrowLeft":this._onArrowLeft(e,i);break;case"ArrowRight":this._onArrowRight(e,i);break;default:this._focusedChipIndex=-1;break}}_onArrowLeft(i,e){if(this.inputElement.selectionStart!==0)return;const t=this._focusedChipIndex;t!==-1&&e.preventDefault();let o;this.__isRTL?t===i.length-1?o=-1:t>-1&&(o=t+1):t===-1?o=i.length-1:t>0&&(o=t-1),o!==void 0&&(this._focusedChipIndex=o)}_onArrowRight(i,e){if(this.inputElement.selectionStart!==0)return;const t=this._focusedChipIndex;t!==-1&&e.preventDefault();let o;this.__isRTL?t===-1?o=i.length-1:t>0&&(o=t-1):t===i.length-1?o=-1:t>-1&&(o=t+1),o!==void 0&&(this._focusedChipIndex=o)}_onBackSpace(i){if(this.inputElement.selectionStart!==0)return;const e=this._focusedChipIndex;e===-1?this._focusedChipIndex=i.length-1:(this.__removeItem(i[e].item),this._focusedChipIndex=-1)}_focusedChipIndexChanged(i,e){if(i>-1||e>-1){const t=this._chips;if(t.forEach((o,r)=>{o.toggleAttribute("focused",r===i)}),i>-1){const o=t[i].item,r=this._getItemLabel(o);pe(`${r} ${this.i18n.focused}`)}}}_onComboBoxChange(){const i=this.$.comboBox.selectedItem;i&&this.__selectItem(i)}_onComboBoxItemSelected(i){this.__selectItem(i.detail.item)}_onCustomValueSet(i){i.preventDefault(),i.stopPropagation(),this.__clearFilter(),this.dispatchEvent(new CustomEvent("custom-value-set",{detail:i.detail,composed:!0,bubbles:!0}))}_onItemRemoved(i){this.__removeItem(i.detail.item)}_preventBlur(i){i.preventDefault()}__computeEffectiveItems(i,e,t){return i&&t?e:i}__computeEffectiveFilteredItems(i,e,t,o){return!i&&o?t:e}}S(Bn);(function(){const s=function(i){return window.Vaadin.Flow.tryCatchWrapper(i,"Vaadin Combo Box")};window.Vaadin.Flow.comboBoxConnector={initLazy:i=>s(function(e){if(e.$connector)return;e.$connector={};const t={};let o={},r="";const n=new window.Vaadin.ComboBoxPlaceholder,a=(()=>{let p="",m=!1;return{needsDataCommunicatorReset:()=>m=!0,getLastFilterSentToServer:()=>p,requestData:(C,L,M)=>{const U=L-C,F=M.filter;e.$server.setRequestedRange(C,U,F),p=F,m&&(e.$server.resetDataCommunicator(),m=!1)}}})(),l=(p=Object.keys(t))=>{p.forEach(m=>{t[m]([],e.size),delete t[m];const b=parseInt(m)*e.pageSize,I=b+e.pageSize,w=Math.min(I,e.filteredItems.length);for(let C=b;C<w;C++)e.filteredItems[C]=n})};e.dataProvider=function(p,m){if(p.pageSize!=e.pageSize)throw"Invalid pageSize";if(e._clientSideFilter)if(o[0]){_(o[0],p.filter,m);return}else p.filter="";if(p.filter!==r){o={},r=p.filter,this._filterDebouncer=K.debounce(this._filterDebouncer,Pt.after(500),()=>{if(a.getLastFilterSentToServer()===p.filter&&a.needsDataCommunicatorReset(),p.filter!==r)throw new Error("Expected params.filter to be '"+r+"' but was '"+p.filter+"'");this._filterDebouncer=void 0,l(),e.dataProvider(p,m)});return}if(this._filterDebouncer){t[p.page]=m;return}if(o[p.page])u(p.page,m);else{t[p.page]=m;const I=Math.max(p.pageSize*2,500),w=Object.keys(t).map(M=>parseInt(M)),C=Math.min(...w),L=Math.max(...w);if(w.length*p.pageSize>I)p.page===C?l([String(L)]):l([String(C)]),e.dataProvider(p,m);else if(L-C+1!==w.length)l();else{const M=p.pageSize*C,U=p.pageSize*(L+1);a.requestData(M,U,p)}}},e.$connector.clear=s((p,m)=>{const b=Math.floor(p/e.pageSize),I=Math.ceil(m/e.pageSize);for(let w=b;w<b+I;w++)delete o[w]}),e.$connector.filter=s(function(p,m){return m=m?m.toString().toLowerCase():"",e._getItemLabel(p,e.itemLabelPath).toString().toLowerCase().indexOf(m)>-1}),e.$connector.set=s(function(p,m,b){if(b!=a.getLastFilterSentToServer())return;if(p%e.pageSize!=0)throw"Got new data to index "+p+" which is not aligned with the page size of "+e.pageSize;if(p===0&&m.length===0&&t[0]){o[0]=[];return}const I=p/e.pageSize,w=Math.ceil(m.length/e.pageSize);for(let C=0;C<w;C++){let L=I+C,M=m.slice(C*e.pageSize,(C+1)*e.pageSize);o[L]=M}}),e.$connector.updateData=s(function(p){const m=new Map(p.map(b=>[b.key,b]));e.filteredItems=e.filteredItems.map(b=>m.get(b.key)||b)}),e.$connector.updateSize=s(function(p){e._clientSideFilter||(e.size=p)}),e.$connector.reset=s(function(){l(),o={},e.clearCache()}),e.$connector.confirm=s(function(p,m){if(m!=a.getLastFilterSentToServer())return;let b=Object.getOwnPropertyNames(t);for(let I=0;I<b.length;I++){let w=b[I];o[w]&&u(w,t[w])}e.$server.confirmUpdate(p)});const u=s(function(p,m){let b=o[p];e._clientSideFilter?_(b,e.filter,m):(delete o[p],m(b,e.size))}),_=s(function(p,m,b){let I=p;m&&(I=p.filter(w=>e.$connector.filter(w,m))),b(I,I.length)});e.addEventListener("custom-value-set",s(p=>p.preventDefault()))})(i)}})();window.Vaadin.ComboBoxPlaceholder=ie;y("vaadin-grid",v`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    /* Hide header row top border if previous row is hidden */
    [part~='row'][hidden] + [part~='row'] [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nn=s=>class extends s{static get observers(){return["_a11yUpdateGridSize(size, _columnTree)"]}_a11yGetHeaderRowCount(e){return e.filter(t=>t.some(o=>o.headerRenderer||o.path||o.header)).length}_a11yGetFooterRowCount(e){return e.filter(t=>t.some(o=>o.headerRenderer)).length}_a11yUpdateGridSize(e,t){if(e===void 0||t===void 0)return;const o=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",o&&o.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){N(this.$.header,(e,t)=>{e.setAttribute("aria-rowindex",t+1)})}_a11yUpdateFooterRows(){N(this.$.footer,(e,t)=>{e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)})}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",!!t),we(e,o=>{o.setAttribute("aria-selected",!!t)})}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,t){t>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",t+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,t){we(e,o=>{o!==t&&o.setAttribute("aria-controls",t.id)})}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let t=e.parentNode;for(;t&&t.localName!=="vaadin-grid-cell-content";)t=t.parentNode;t&&t.assignedSlot&&t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Eo=s=>{if(!s.parentNode)return!1;const e=Array.from(s.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(t=>{const o=t.getAttribute("part");return!(o&&o.includes("body-cell"))}).includes(s);return!s.disabled&&e&&s.offsetParent&&getComputedStyle(s).visibility!=="hidden"},$n=s=>class extends s{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,o=t?t.item:null;o&&(this.activeItem=this._itemsEqual(this.activeItem,o)?null:o)}_onClick(e){if(e.defaultPrevented)return;const t=e.composedPath(),o=t[t.indexOf(this.$.table)-3];if(!o||o.getAttribute("part").indexOf("details-cell")>-1)return;const r=o._content,n=this.getRootNode().activeElement;!r.contains(n)&&!this._isFocusable(e.target)&&!(e.target instanceof HTMLLabelElement)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(o.parentElement)}}))}_isFocusable(e){return Eo(e)}};function ye(s,i){return s.split(".").reduce((e,t)=>e[t],i)}function zi(s,i,e){if(e.length===0)return!1;let t=!0;return s.forEach(({path:o})=>{if(!o||o.indexOf(".")===-1)return;const r=o.replace(/\.[^.]*$/u,"");ye(r,e[0])===void 0&&(console.warn(`Path "${o}" used for ${i} does not exist in all of the items, ${i} is disabled.`),t=!1)}),t}function st(s){return[void 0,null].indexOf(s)>=0?"":isNaN(s)?s.toString():s}function Pi(s,i){return s=st(s),i=st(i),s<i?-1:s>i?1:0}function Vn(s,i){return s.sort((e,t)=>i.map(o=>o.direction==="asc"?Pi(ye(o.path,e),ye(o.path,t)):o.direction==="desc"?Pi(ye(o.path,t),ye(o.path,e)):0).reduce((o,r)=>o!==0?o:r,0))}function Hn(s,i){return s.filter(e=>i.every(t=>{const o=st(ye(t.path,e)),r=st(t.value).toString().toLowerCase();return o.toString().toLowerCase().includes(r)}))}const Un=s=>(i,e)=>{let t=s?[...s]:[];i.filters&&zi(i.filters,"filtering",t)&&(t=Hn(t,i.filters)),Array.isArray(i.sortOrders)&&i.sortOrders.length&&zi(i.sortOrders,"sorting",t)&&(t=Vn(t,i.sortOrders));const o=Math.min(t.length,i.pageSize),r=i.page*o,n=r+o,a=t.slice(r,n);e(a,t.length)};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gn=s=>class extends s{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, _filters, _sorters, items.*)"]}__setArrayDataProvider(e){const t=Un(this.items);t.__items=e,this._arrayDataProvider=t,this.size=e.length,this.dataProvider=t}__dataProviderOrItemsChanged(e,t,o){o&&(this._arrayDataProvider?e!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):t?this._arrayDataProvider.__items===t?(this.clearCache(),this.size=this._flatSize):this.__setArrayDataProvider(t):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):t&&this.__setArrayDataProvider(t))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wn=s=>class extends s{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),ge(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),le||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const t=e.composedPath(),o=t[t.indexOf(this.$.header)-2];if(!o||!o._content||o._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.composedPath&&e.composedPath();if(t&&t.some(r=>r.hasAttribute&&r.hasAttribute("draggable")))return;const o=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!o||!o.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=o._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(o),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const o=this._getTargetColumn(t,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,o)&&this._isSwappableByPosition(o,e.detail.x)){const r=this._columnTree.findIndex(_=>_.includes(o)),n=this._getColumnsInOrder(r),a=n.indexOf(this._draggedColumn),l=n.indexOf(o),u=a<l?1:-1;for(let _=a;_!==l;_+=u)this._swapColumnOrders(this._draggedColumn,n[_+u])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(t=>!t.hidden).sort((t,o)=>t._order-o._order)}_cellFromPoint(e=0,t=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const o=this.shadowRoot.elementFromPoint(e,t);return this.$.scroller.toggleAttribute("no-content-pointer-events",!1),this._getCellFromElement(o)}_getCellFromElement(e){if(e){if(e._column)return e;const{parentElement:t}=e;if(t&&t._focusButton===e)return t}return null}_updateGhostPosition(e,t){const o=this._reorderGhost.getBoundingClientRect(),r=e-o.width/2,n=t-o.height/2,a=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=a-(o.left-r),this._reorderGhost._top=l-(o.top-n),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const t=this._reorderGhost;t.textContent=e._content.innerText;const o=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(r=>{t.style[r]=o[r]}),t}_updateOrders(e){e!==void 0&&(e[0].forEach(t=>{t._order=0}),qi(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,t){N(e.parentNode,o=>{/column/u.test(o.localName)&&this._isSwapAllowed(o,e)&&(o._reorderStatus=t)})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,t){if(e&&t){const o=e!==t,r=e.parentElement===t.parentElement,n=e.frozen&&t.frozen||e.frozenToEnd&&t.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!t.frozen&&!t.frozenToEnd;return o&&r&&n}}_isSwappableByPosition(e,t){const o=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(a=>e.contains(a._column)),r=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),n=o.getBoundingClientRect();return n.left>r.left?t>n.right-r.width:t<n.left+r.width}_swapColumnOrders(e,t){[e._order,t._order]=[t._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let o=e._column;for(;o.parentElement!==t.parentElement&&o!==this;)o=o.parentElement;return o.parentElement===t.parentElement?o:e._column}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qn=s=>class extends s{ready(){super.ready();const e=this.$.scroller;ge(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",t=>e.hasAttribute("column-resizing")&&t.preventDefault()),e.addEventListener("contextmenu",t=>t.target.getAttribute("part")==="resize-handle"&&t.preventDefault()),e.addEventListener("mousedown",t=>t.target.getAttribute("part")==="resize-handle"&&t.preventDefault())}_onHeaderTrack(e){const t=e.target;if(t.getAttribute("part")==="resize-handle"){let r=t.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);r.localName==="vaadin-grid-column-group";)r=r._childColumns.slice(0).sort((p,m)=>p._order-m._order).filter(p=>!p.hidden).pop();const n=this.__isRTL,a=e.detail.x,l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),u=l.find(p=>p._column===r);if(u.offsetWidth){const p=getComputedStyle(u._content),m=10+parseInt(p.paddingLeft)+parseInt(p.paddingRight)+parseInt(p.borderLeftWidth)+parseInt(p.borderRightWidth)+parseInt(p.marginLeft)+parseInt(p.marginRight);let b;const I=u.offsetWidth,w=u.getBoundingClientRect();u.hasAttribute("frozen-to-end")?b=I+(n?a-w.right:w.left-a):b=I+(n?w.left-a:a-w.right),r.width=`${Math.max(m,b)}px`,r.flexGrow=0}l.sort((p,m)=>p._column._order-m._column._order).forEach((p,m,b)=>{m<b.indexOf(u)&&(p._column.width=`${p.offsetWidth}px`,p._column.flexGrow=0)});const _=this._frozenToEndCells[0];if(_&&this.$.table.scrollWidth>this.$.table.offsetWidth){const p=_.getBoundingClientRect(),m=a-(n?p.right:p.left);(n&&m<=0||!n&&m>=0)&&(this.$.table.scrollLeft+=m)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:r}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function rt(s,i,e=0){let t=i;for(const o of s.subCaches){const r=o.parentCacheIndex;if(t<=r)break;if(t<=r+o.flatSize)return rt(o,t-r-1,e+1);t-=o.flatSize}return{cache:s,item:s.items[t],index:t,page:Math.floor(t/s.pageSize),level:e}}function So({getItemId:s},i,e,t=0,o=0){for(let r=0;r<i.items.length;r++){const n=i.items[r];if(n&&s(n)===s(e))return{cache:i,level:t,item:n,index:r,page:Math.floor(r/i.pageSize),subCache:i.getSubCache(r),flatIndex:o+i.getFlatIndex(r)}}for(const r of i.subCaches){const n=o+i.getFlatIndex(r.parentCacheIndex),a=So({getItemId:s},r,e,t+1,n+1);if(a)return a}}function To(s,[i,...e],t=0){i===1/0&&(i=s.size-1);const o=s.getFlatIndex(i),r=s.getSubCache(i);return r&&r.flatSize>0&&e.length?To(r,e,t+o+1):t+o}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ai{context;size=0;pageSize;items=[];pendingRequests={};__subCacheByIndex={};__flatSize=0;constructor(i,e,t,o,r){this.context=i,this.pageSize=e,this.size=t||0,this.parentCache=o,this.parentCacheIndex=r,this.__flatSize=t||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return Object.keys(this.pendingRequests).length>0?!0:this.subCaches.some(i=>i.isLoading)}get flatSize(){return this.__flatSize}get effectiveSize(){return console.warn("<vaadin-grid> The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.flatSize}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((i,e)=>(e.recalculateFlatSize(),i+e.flatSize),0):0}setPage(i,e){const t=i*this.pageSize;e.forEach((o,r)=>{this.items[t+r]=o})}getSubCache(i){return this.__subCacheByIndex[i]}removeSubCache(i){delete this.__subCacheByIndex[i]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(i){const e=new ai(this.context,this.pageSize,0,this,i);return this.__subCacheByIndex[i]=e,e}getFlatIndex(i){const e=Math.max(0,Math.min(this.size-1,i));return this.subCaches.reduce((t,o)=>{const r=o.parentCacheIndex;return e>r?t+o.flatSize:t},e)}getItemForIndex(i){console.warn("<vaadin-grid> The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{item:e}=rt(this,i);return e}getCacheAndIndex(i){console.warn("<vaadin-grid> The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{cache:e,index:t}=rt(this,i);return{cache:e,scaledIndex:t}}updateSize(){console.warn("<vaadin-grid> The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25."),this.recalculateFlatSize()}ensureSubCacheForScaledIndex(i){if(console.warn("<vaadin-grid> The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25."),!this.getSubCache(i)){const e=this.createSubCache(i);this.context.__controller.__loadCachePage(e,0)}}get grid(){return console.warn("<vaadin-grid> The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.context.__controller.host}get itemCaches(){return console.warn("<vaadin-grid> The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.__subCacheByIndex}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class jn extends EventTarget{host;dataProvider;dataProviderParams;size;pageSize;isExpanded;getItemId;rootCache;constructor(i,{size:e,pageSize:t,isExpanded:o,getItemId:r,dataProvider:n,dataProviderParams:a}){super(),this.host=i,this.pageSize=t,this.getItemId=r,this.isExpanded=o,this.dataProvider=n,this.dataProviderParams=a,this.rootCache=this.__createRootCache(e)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(i){this.pageSize=i,this.clearCache()}setDataProvider(i){this.dataProvider=i,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.__createRootCache(this.rootCache.size)}getFlatIndexContext(i){return rt(this.rootCache,i)}getItemContext(i){return So({getItemId:this.getItemId},this.rootCache,i)}getFlatIndexByPath(i){return To(this.rootCache,i)}ensureFlatIndexLoaded(i){const{cache:e,page:t,item:o}=this.getFlatIndexContext(i);o||this.__loadCachePage(e,t)}ensureFlatIndexHierarchy(i){const{cache:e,item:t,index:o}=this.getFlatIndexContext(i);if(t&&this.isExpanded(t)&&!e.getSubCache(o)){const r=e.createSubCache(o);this.__loadCachePage(r,0)}}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(i){return new ai(this.__cacheContext,this.pageSize,i)}__loadCachePage(i,e){if(!this.dataProvider||i.pendingRequests[e])return;let t={page:e,pageSize:this.pageSize,parentItem:i.parentItem};this.dataProviderParams&&(t={...t,...this.dataProviderParams()});const o=(r,n)=>{n!==void 0?i.size=n:t.parentItem&&(i.size=r.length),i.setPage(e,r),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete i.pendingRequests[e],this.dispatchEvent(new CustomEvent("page-loaded"))};i.pendingRequests[e]=o,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(t,o)}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yn=s=>class extends s{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super(),this._dataProviderController=new jn(this,{size:this.size,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})}),this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this)),this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this)),this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}get _cache(){return console.warn("<vaadin-grid> The `_cache` property is deprecated and will be removed in Vaadin 25."),this._dataProviderController.rootCache}get _effectiveSize(){return console.warn("<vaadin-grid> The `_effectiveSize` property is deprecated and will be removed in Vaadin 25."),this._flatSize}_sizeChanged(e){this._dataProviderController.rootCache.size=e,this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(e,t){!t&&e==="children"||this.requestContentUpdate()}_getItem(e,t){if(e>=this._flatSize)return;t.index=e;const{item:o}=this._dataProviderController.getFlatIndexContext(e);o?(this.__updateLoading(t,!1),this._updateItem(t,o),this._isExpanded(o)&&this._dataProviderController.ensureFlatIndexHierarchy(e)):(this.__updateLoading(t,!0),this._dataProviderController.ensureFlatIndexLoaded(e))}__updateLoading(e,t){const o=xe(e);ht(e,"loading",t),re(o,"loading-row-cell",t)}getItemId(e){return this.itemIdPath?me(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize,this.__updateVisibleRows()}__computeExpandedKeys(e,t){const o=t||[],r=new Set;return o.forEach(n=>{r.add(this.getItemId(n))}),r}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(t=>!this._itemsEqual(t,e)))}_getIndexLevel(e=0){const{level:t}=this._dataProviderController.getFlatIndexContext(e);return t}_loadPage(e,t){console.warn("<vaadin-grid> The `_loadPage` method is deprecated and will be removed in Vaadin 25."),this._dataProviderController.__loadCachePage(t,e)}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize=this._dataProviderController.flatSize,this._getRenderedRows().forEach(e=>{this._dataProviderController.ensureFlatIndexHierarchy(e.index)}),this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=z.debounce(this._debouncerApplyCachedData,Q.after(0),()=>{this._setLoading(!1),this._getRenderedRows().forEach(e=>{const{item:t}=this._dataProviderController.getFlatIndexContext(e.index);t&&this._getItem(e.index,e)}),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()}),this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=z.debounce(this.__clearCacheDebouncer,X,()=>this.clearCache())}clearCache(){this._dataProviderController.clearCache(),this._dataProviderController.rootCache.size=this.size,this._dataProviderController.recalculateFlatSize(),this._hasData=!1,this.__updateVisibleRows(),(!this.__virtualizer||!this.__virtualizer.size)&&this._dataProviderController.loadFirstPage()}_pageSizeChanged(e,t){this._dataProviderController.setPageSize(e),t!==void 0&&e!==t&&this.clearCache()}_checkSize(){this.size===void 0&&this._flatSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,t){this._dataProviderController.setDataProvider(e?e.bind(this):null),t!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=z.debounce(this._debouncerCheckSize,Q.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let o=-1;return t.forEach((r,n)=>{this._itemsEqual(r,e)&&(o=n)}),o}scrollToIndex(...e){let t;for(;t!==(t=this._dataProviderController.getFlatIndexByPath(e));)this._scrollToFlatIndex(t);(this._dataProviderController.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndexes=e)}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Me={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},se={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},Kn=!("draggable"in document.createElement("div")),Qn=s=>class extends s{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if(t.localName==="vaadin-grid-cell-content"&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const a=t.style.transform;t.style.top=/translateY\((.*)\)/u.exec(a)[1],t.style.transform="none",requestAnimationFrame(()=>{t.style.top="",t.style.transform=a})}const o=t.getBoundingClientRect();Kn?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-o.left,e.clientY-o.top);let r=[t];this._isSelected(t._item)&&(r=this.__getViewportRows().filter(a=>this._isSelected(a._item)).filter(a=>!this.dragFilter||this.dragFilter(this.__getRowModel(a)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(r)),Ve(t,{dragstart:r.length>1?`${r.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-o.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-o.top+10}px`),requestAnimationFrame(()=>{Ve(t,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y","")});const n=new CustomEvent("grid-dragstart",{detail:{draggedItems:r.map(a=>a._item),setDragData:(a,l)=>e.dataTransfer.setData(a,l),setDraggedItemsCount:a=>t.setAttribute("dragstart",a)}});n.originalEvent=e,this.dispatchEvent(n)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let t=e.composedPath().find(o=>o.localName==="tr");if(!this._flatSize||this.dropMode===Me.ON_GRID)this._dropLocation=se.EMPTY;else if(!t||t.parentNode!==this.$.items){if(t)return;if(this.dropMode===Me.BETWEEN||this.dropMode===Me.ON_TOP_OR_BETWEEN)t=Array.from(this.$.items.children).filter(o=>!o.hidden).pop(),this._dropLocation=se.BELOW;else return}else{const o=t.getBoundingClientRect();if(this._dropLocation=se.ON_TOP,this.dropMode===Me.BETWEEN){const r=e.clientY-o.top<o.bottom-e.clientY;this._dropLocation=r?se.ABOVE:se.BELOW}else this.dropMode===Me.ON_TOP_OR_BETWEEN&&(e.clientY-o.top<o.height/3?this._dropLocation=se.ABOVE:e.clientY-o.top>o.height/3*2&&(this._dropLocation=se.BELOW))}if(t&&t.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===se.EMPTY?this.toggleAttribute("dragover",!0):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&yi(t,{dragover:this._dropLocation})):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,o=this.$.footer.getBoundingClientRect().top,r=t-e+this.__dndAutoScrollThreshold,n=e-o+this.__dndAutoScrollThreshold;let a=0;if(n>0?a=n*2:r>0&&(a=-r*2),a){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=a,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(o=>{const r=o.getBoundingClientRect();return r.bottom>e&&r.top<t})}_clearDragStyles(){this.removeAttribute("dragover"),N(this.$.items,e=>{yi(e,{dragover:null})})}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(r=>({type:r,data:e.dataTransfer.getData(r)}));this._clearDragStyles();const o=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});o.originalEvent=e,this.dispatchEvent(o)}}__formatDefaultTransferData(e){return e.map(t=>Array.from(t.children).filter(o=>!o.hidden&&o.getAttribute("part").indexOf("details-cell")===-1).sort((o,r)=>o._column._order>r._column._order?1:-1).map(o=>o._content.textContent.trim()).filter(o=>o).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){N(this.$.items,e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,t){const o=this.loading||e.hasAttribute("loading"),r=!this.rowsDraggable||o||this.dragFilter&&!this.dragFilter(t),n=!this.dropMode||o||this.dropFilter&&!this.dropFilter(t);we(e,a=>{r?a._content.removeAttribute("draggable"):a._content.setAttribute("draggable",!0)}),Ve(e,{"drag-disabled":!!r,"drop-disabled":!!n})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ko(s,i){if(!s||!i||s.length!==i.length)return!1;for(let e=0,t=s.length;e<t;e++)if(s[e]instanceof Array&&i[e]instanceof Array){if(!ko(s[e],i[e]))return!1}else if(s[e]!==i[e])return!1;return!0}const Xn=s=>class extends s{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some(t=>t.localName==="vaadin-grid-column-group")}_getChildColumns(e){return ne.getColumns(e)}_flattenColumnGroups(e){return e.map(t=>t.localName==="vaadin-grid-column-group"?this._getChildColumns(t):[t]).reduce((t,o)=>t.concat(o),[])}_getColumnTree(){const e=ne.getColumns(this),t=[e];let o=e;for(;this._hasColumnGroups(o);)o=this._flattenColumnGroups(o),t.push(o);return t}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=z.debounce(this.__updateColumnTreeDebouncer,X,()=>this._updateColumnTree())}_updateColumnTree(){const e=this._getColumnTree();ko(e,this._columnTree)||(e.forEach(t=>{t.forEach(o=>{o.performUpdate&&o.performUpdate()})}),this._columnTree=e)}_addNodeObserver(){this._observer=new ne(this,(e,t)=>{const o=t.flatMap(n=>n._allCells),r=n=>o.filter(a=>a&&a._content.contains(n)).length;this.__removeSorters(this._sorters.filter(r)),this.__removeFilters(this._filters.filter(r)),this._debounceUpdateColumnTree(),this._debouncerCheckImports=z.debounce(this._debouncerCheckImports,Q.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{this.querySelector(e)&&!customElements.get(e)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((t,o)=>t._column._order-o._column._order).forEach((t,o,r)=>{ce(t,"first-column",o===0),ce(t,"last-column",o===r.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zn=s=>class extends s{getEventContext(e){const t={},o=e.__composedPath||e.composedPath(),r=o[o.indexOf(this.$.table)-3];return r&&(t.section=["body","header","footer","details"].find(n=>r.getAttribute("part").indexOf(n)>-1),r._column&&(t.column=r._column),(t.section==="body"||t.section==="details")&&Object.assign(t,this.__getRowModel(r.parentElement))),t}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jn=s=>class extends s{static get properties(){return{_filters:{type:Array,value:()=>[]}}}constructor(){super(),this._filterChanged=this._filterChanged.bind(this),this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(t=>e.indexOf(t)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ea=s=>class extends s{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(t=>{const o=this[t];if(e){const r=o&&o.parentElement;this.__isCell(o)?this[t]=r:this.__isCell(r)&&(this[t]=r.parentElement)}else if(!e&&this.__isRow(o)){const r=o.firstElementChild;this[t]=r._focusButton||r}})}get _visibleItemsCount(){return this._lastVisibleIndex-this._firstVisibleIndex-1}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,t){t&&dt(t,"part","focused-cell"),e&&Ge(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach(t=>{if(t.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=t;else{let o=this._itemsFocusable.parentElement,r=this._itemsFocusable;if(o){this.__isCell(o)&&(r=o,o=o.parentElement);const n=[...o.children].indexOf(r);this._itemsFocusable=this.__getFocusable(t,t.children[n])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const t=e.key;let o;switch(t){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":o="Navigation";break;case"Enter":case"Escape":case"F2":o="Interaction";break;case"Tab":o="Tab";break;case" ":o="Space";break}this._detectInteracting(e),this.interacting&&o!=="Interaction"&&(o=void 0),o&&this[`_on${o}KeyDown`](e,t)}_ensureScrolledToIndex(e){[...this.$.items.children].find(o=>o.index===e)?this.__scrollIntoViewport(e):this.scrollToIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const t=e._item;return!!(t&&me(this.itemHasChildrenPath,t)&&!this._isExpanded(t))}}__isRowCollapsible(e){return this._isExpanded(e._item)}__isDetailsCell(e){return e.matches('[part~="details-cell"]')}__isCell(e){return e instanceof HTMLTableCellElement}__isRow(e){return e instanceof HTMLTableRowElement}__getIndexOfChildElement(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}_onNavigationKeyDown(e,t){e.preventDefault();const o=this.__isRTL,r=e.composedPath().find(p=>this.__isRow(p)),n=e.composedPath().find(p=>this.__isCell(p));let a=0,l=0;switch(t){case"ArrowRight":a=o?-1:1;break;case"ArrowLeft":a=o?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?l=-1/0:a=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?l=1/0:a=1/0;break;case"ArrowDown":l=1;break;case"ArrowUp":l=-1;break;case"PageDown":if(this.$.items.contains(r)){const p=this.__getIndexInGroup(r,this._focusedItemIndex);this._scrollToFlatIndex(p)}l=this._visibleItemsCount;break;case"PageUp":l=-this._visibleItemsCount;break}if(this.__rowFocusMode&&!r||!this.__rowFocusMode&&!n)return;const u=o?"ArrowLeft":"ArrowRight",_=o?"ArrowRight":"ArrowLeft";if(t===u){if(this.__rowFocusMode){if(this.__isRowExpandable(r)){this.expandItem(r._item);return}this.__rowFocusMode=!1,this._onCellNavigation(r.firstElementChild,0,0);return}}else if(t===_)if(this.__rowFocusMode){if(this.__isRowCollapsible(r)){this.collapseItem(r._item);return}}else{const p=[...r.children].sort((m,b)=>m._order-b._order);if(n===p[0]||this.__isDetailsCell(n)){this.__rowFocusMode=!0,this._onRowNavigation(r,0);return}}this.__rowFocusMode?this._onRowNavigation(r,l):this._onCellNavigation(n,a,l)}_onRowNavigation(e,t){const{dstRow:o}=this.__navigateRows(t,e);o&&o.focus()}__getIndexInGroup(e,t){return e.parentNode===this.$.items?t!==void 0?t:e.index:this.__getIndexOfChildElement(e)}__navigateRows(e,t,o){const r=this.__getIndexInGroup(t,this._focusedItemIndex),n=t.parentNode,a=(n===this.$.items?this._flatSize:n.children.length)-1;let l=Math.max(0,Math.min(r+e,a));if(n!==this.$.items){if(l>r)for(;l<a&&n.children[l].hidden;)l+=1;else if(l<r)for(;l>0&&n.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:n.children[l]}}let u=!1;if(o){const _=this.__isDetailsCell(o);if(n===this.$.items){const p=t._item,{item:m}=this._dataProviderController.getFlatIndexContext(l);_?u=e===0:u=e===1&&this._isDetailsOpened(p)||e===-1&&l!==r&&this._isDetailsOpened(m),u!==_&&(e===1&&u||e===-1&&!u)&&(l=r)}}return this._ensureScrolledToIndex(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...n.children].find(_=>!_.hidden&&_.index===l),dstIsRowDetails:u}}_onCellNavigation(e,t,o){const r=e.parentNode,{dstRow:n,dstIsRowDetails:a}=this.__navigateRows(o,r,e);if(!n)return;let l=this.__getIndexOfChildElement(e);this.$.items.contains(e)&&(l=[...this.$.sizer.children].findIndex(m=>m._column===e._column));const u=this.__isDetailsCell(e),_=r.parentNode,p=this.__getIndexInGroup(r,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(u?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(_,p).filter(m=>!m.hidden)[l]._order),a)[...n.children].find(b=>this.__isDetailsCell(b)).focus();else{const m=this.__getIndexInGroup(n,this._focusedItemIndex),b=this._getColumns(_,m).filter(O=>!O.hidden),I=b.map(O=>O._order).sort((O,G)=>O-G),w=I.length-1,C=I.indexOf(I.slice(0).sort((O,G)=>Math.abs(O-this._focusedColumnOrder)-Math.abs(G-this._focusedColumnOrder))[0]),L=o===0&&u?C:Math.max(0,Math.min(C+t,w));L!==C&&(this._focusedColumnOrder=void 0);const U=b.reduce((O,G,ke)=>(O[G._order]=ke,O),{})[I[L]];let F;if(this.$.items.contains(e)){const O=this.$.sizer.children[U];this._lazyColumns&&(this.__isColumnInViewport(O._column)||O.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),F=[...n.children].find(G=>G._column===O._column),this._scrollHorizontallyToCell(F)}else F=n.children[U],this._scrollHorizontallyToCell(F);F.focus()}}_onInteractionKeyDown(e,t){const o=e.composedPath()[0],r=o.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(o.type);let n;switch(t){case"Enter":n=this.interacting?!r:!0;break;case"Escape":n=!1;break;case"F2":n=!this.interacting;break}const{cell:a}=this._getGridEventLocation(e);if(this.interacting!==n&&a!==null)if(n){const l=a._content.querySelector("[focus-target]")||[...a._content.querySelectorAll("*")].find(u=>this._isFocusable(u));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,a.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);t==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,t){const o=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let r=o.indexOf(e);for(r+=t;r>=0&&r<=o.length-1;){let a=o[r];if(a&&!this.__rowFocusMode&&(a=o[r].parentNode),!a||a.hidden)r+=t;else break}let n=o[r];if(n&&!this.__isHorizontallyInViewport(n)){const a=this._getColumnsInOrder().find(l=>this.__isColumnInViewport(l));if(a)if(n===this._headerFocusable)n=a._headerCell;else if(n===this._itemsFocusable){const l=n._column._cells.indexOf(n);n=a._cells[l]}else n===this._footerFocusable&&(n=a._footerCell)}return n}_onTabKeyDown(e){const t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t){if(e.stopPropagation(),t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){let o=t;const r=this.__isRow(t)?t:t.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),r.index!==this._focusedItemIndex&&this.__isCell(t)){const n=Array.from(r.children).indexOf(this._itemsFocusable),a=Array.from(this.$.items.children).find(l=>!l.hidden&&l.index===this._focusedItemIndex);a&&(o=a.children[n])}e.preventDefault(),o.focus()}else e.preventDefault(),t.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0],o=this.__isRow(t);(o||!t._content||!t._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(o?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(o?t:t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const o=this.hasAttribute("navigating");t._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",o)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._isMousedown||this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:t,cell:o,row:r}=this._getGridEventLocation(e);if(!(!o&&!this.__rowFocusMode)){if(this._detectInteracting(e),t&&(o||r))if(this._activeRowGroup=t,this.$.header===t?this._headerFocusable=this.__getFocusable(r,o):this.$.items===t?this._itemsFocusable=this.__getFocusable(r,o):this.$.footer===t&&(this._footerFocusable=this.__getFocusable(r,o)),o){const n=this.getEventContext(e);this.__pendingBodyCellFocus=this.loading&&n.section==="body",this.__pendingBodyCellFocus||o.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:n}})),this._focusedCell=o._focusButton||o,$t()&&e.target===o&&this._showTooltip(e)}else this._focusedCell=null;this._detectFocusedItemIndex(e)}}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(e,t){return this.__rowFocusMode?e:t._focusButton||t}_detectInteracting(e){const t=e.composedPath().some(o=>o.localName==="vaadin-grid-cell-content");this._setInteracting(t),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(e){const{section:t,row:o}=this._getGridEventLocation(e);t===this.$.items&&(this._focusedItemIndex=o.index)}_updateGridSectionFocusTarget(e){if(!e)return;const t=this._getGridSectionFromFocusTarget(e),o=this.interacting&&t===this._activeRowGroup;e.tabIndex=o?-1:0}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(e,t){let o=this._columnTree.length-1;return e===this.$.header?o=t:e===this.$.footer&&(o=this._columnTree.length-1-t),this._columnTree[o]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(!this.$&&this.performUpdate&&this.performUpdate(),["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const t=[...this.$[e].children].find(r=>r.offsetHeight),o=t?[...t.children].find(r=>!r.hidden):null;t&&o&&(this[`_${e}Focusable`]=this.__getFocusable(t,o))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),t=e?[...e.children].find(o=>!o.hidden):null;t&&e&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(e,t))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||this.__isDetailsCell(e))return;const t=e.getBoundingClientRect(),o=e.parentNode,r=Array.from(o.children).indexOf(e),n=this.$.table.getBoundingClientRect();let a=n.left,l=n.right;for(let u=r-1;u>=0;u--){const _=o.children[u];if(!(_.hasAttribute("hidden")||this.__isDetailsCell(_))&&(_.hasAttribute("frozen")||_.hasAttribute("frozen-to-end"))){a=_.getBoundingClientRect().right;break}}for(let u=r+1;u<o.children.length;u++){const _=o.children[u];if(!(_.hasAttribute("hidden")||this.__isDetailsCell(_))&&(_.hasAttribute("frozen")||_.hasAttribute("frozen-to-end"))){l=_.getBoundingClientRect().left;break}}t.left<a&&(this.$.table.scrollLeft+=Math.round(t.left-a)),t.right>l&&(this.$.table.scrollLeft+=Math.round(t.right-l))}_getGridEventLocation(e){const t=e.composedPath(),o=t.indexOf(this.$.table),r=o>=1?t[o-1]:null,n=o>=2?t[o-2]:null,a=o>=3?t[o-3]:null;return{section:r,row:n,cell:a}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ta=s=>class extends s{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:t})=>{this._updateDetailsCellHeight(t.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){e&&this._columnTree&&N(this.$.items,t=>{if(!t.querySelector("[part~=details-cell]")){this._updateRow(t,this._columnTree[this._columnTree.length-1]);const o=this._isDetailsOpened(t._item);this._toggleDetailsCell(t,o)}})}_detailsOpenedItemsChanged(e,t){N(this.$.items,o=>{if(o.hasAttribute("details-opened")){this._updateItem(o,o._item);return}t&&this._isDetailsOpened(o._item)&&this._updateItem(o,o._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,t){const o=e.querySelector('[part~="details-cell"]');o&&(o.hidden=!t,!o.hidden&&this.rowDetailsRenderer&&(o._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const t=e.querySelector('[part~="details-cell"]');t&&(this.__updateDetailsRowPadding(e,t),requestAnimationFrame(()=>this.__updateDetailsRowPadding(e,t)))}__updateDetailsRowPadding(e,t){t.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${t.offsetHeight}px`)}_updateDetailsCellHeights(){N(this.$.items,e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(t=>!this._itemsEqual(t,e)))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oi={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},ia=s=>class extends oi(s){static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){const e=!fe(this);e&&this.__previousVisible===!1&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=e}}_scrollToFlatIndex(e){e=Math.min(this._flatSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const t=[...this.$.items.children].find(o=>o.index===e);if(t){const o=t.getBoundingClientRect(),r=this.$.footer.getBoundingClientRect().top,n=this.$.header.getBoundingClientRect().bottom;o.bottom>r?this.$.table.scrollTop+=o.bottom-r:o.top<n&&(this.$.table.scrollTop-=n-o.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=z.debounce(this._debounceScrolling,Q.after(Oi.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=z.debounce(this._debounceColumnContentVisibility,Q.after(Oi.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())}),this._firefox&&!fe(this)&&this.__previousVisible!==!1&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(!this._columnTree||!this._areSizerCellsAssigned())return;const e=this._getColumnsInOrder();let t=!1;if(e.forEach(o=>{const r=this._lazyColumns&&!this.__isColumnInViewport(o);o._bodyContentHidden!==r&&(t=!0,o._cells.forEach(n=>{if(n!==o._sizerCell){if(r)n.remove();else if(n.__parentRow){const a=[...n.__parentRow.children].find(l=>e.indexOf(l._column)>e.indexOf(o));n.__parentRow.insertBefore(n,a)}}})),o._bodyContentHidden=r}),t&&this._frozenCellsChanged(),this._lazyColumns){const o=[...e].reverse().find(a=>a.frozen),r=this.__getColumnEnd(o),n=e.find(a=>!a.frozen&&!a._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(n)-r,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return e.frozen||e.frozenToEnd?!0:this.__isHorizontallyInViewport(e._sizerCell)}__isHorizontallyInViewport(e){return e.offsetLeft+e.offsetWidth>=this._scrollLeft&&e.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,t){t==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",t),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=z.debounce(this._debounceOverflow,ee,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top");const o=Bt(t,this.getAttribute("dir"));o>0&&(e+=" start"),o<t.scrollWidth-t.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/giu,n=>n==="start"?"end":"start")),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left");const r=e.trim();r.length>0&&this.getAttribute("overflow")!==r?this.setAttribute("overflow",r):r.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=z.debounce(this._debouncerCacheElements,X,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=z.debounce(this.__debounceUpdateFrozenColumn,X,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((r,n)=>r._order-n._order);let t,o;for(let r=0;r<e.length;r++){const n=e[r];n._lastFrozen=!1,n._firstFrozenToEnd=!1,o===void 0&&n.frozenToEnd&&!n.hidden&&(o=r),n.frozen&&!n.hidden&&(t=r)}t!==void 0&&(e[t]._lastFrozen=!0),o!==void 0&&(e[o]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const e=this.$.table.scrollWidth,t=this.$.table.clientWidth,o=Math.max(0,this.$.table.scrollLeft),r=Bt(this.$.table,this.getAttribute("dir")),n=`translate(${-o}px, 0)`;this.$.header.style.transform=n,this.$.footer.style.transform=n,this.$.items.style.transform=n;const a=this.__isRTL?r+t-e:o,l=`translate(${a}px, 0)`;this._frozenCells.forEach(m=>{m.style.transform=l});const u=this.__isRTL?r:o+t-e,_=`translate(${u}px, 0)`;let p=_;if(this._lazyColumns&&this._areSizerCellsAssigned()){const m=this._getColumnsInOrder(),b=[...m].reverse().find(M=>!M.frozenToEnd&&!M._bodyContentHidden),I=this.__getColumnEnd(b),w=m.find(M=>M.frozenToEnd),C=this.__getColumnStart(w);p=`translate(${u+(C-I)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(m=>{this.$.items.contains(m)?m.style.transform=p:m.style.transform=_}),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-a}px`)}_areSizerCellsAssigned(){return this._getColumnsInOrder().every(e=>e._sizerCell)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oa=s=>class extends s{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(t=>!this._itemsEqual(t,e)))}_toggleItem(e){this._isSelected(e)?this.deselectItem(e):this.selectItem(e)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,t){const o=t||[],r=new Set;return o.forEach(n=>{r.add(this.getItemId(n))}),r}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Ri="prepend";const sa=s=>class extends s{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>Ri},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){Ri=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const t=e.target;e.stopPropagation(),t._grid=this,this.__updateSorter(t,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(t=>e.indexOf(t)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,t)=>{e._order=this._sorters.length>1?t:null})}__appendSorter(e){e.direction?this._sorters.includes(e)||this._sorters.push(e):this._removeArrayItem(this._sorters,e),this.__updateSortOrders()}__prependSorter(e){this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders()}__updateSorter(e,t,o){if(!(!e.direction&&this._sorters.indexOf(e)===-1)){if(e._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!o)||this.multiSortOnShiftClick&&t)this.multiSortPriority==="append"?this.__appendSorter(e):this.__prependSorter(e);else if(e.direction||this.multiSortOnShiftClick){const r=this._sorters.filter(n=>n!==e);this._sorters=e.direction?[e]:[],r.forEach(n=>{n._order=null,n.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,t){const o=e.indexOf(t);o>-1&&e.splice(o,1)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ra=s=>class extends s{static get properties(){return{cellClassNameGenerator:{type:Function,sync:!0},cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){N(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellClassNames(e,this.__getRowModel(e))})}generateCellPartNames(){N(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellPartNames(e,this.__getRowModel(e))})}_generateCellClassNames(e,t){we(e,o=>{if(o.__generatedClasses&&o.__generatedClasses.forEach(r=>o.classList.remove(r)),this.cellClassNameGenerator){const r=this.cellClassNameGenerator(o._column,t);o.__generatedClasses=r&&r.split(" ").filter(n=>n.length>0),o.__generatedClasses&&o.__generatedClasses.forEach(n=>o.classList.add(n))}})}_generateCellPartNames(e,t){we(e,o=>{if(o.__generatedParts&&o.__generatedParts.forEach(r=>{de(o,null,r)}),this.cellPartNameGenerator){const r=this.cellPartNameGenerator(o._column,t);o.__generatedParts=r&&r.split(" ").filter(n=>n.length>0),o.__generatedParts&&o.__generatedParts.forEach(n=>{de(o,!0,n)})}})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const na=s=>class extends Gn(Yn(Xn($n(ia(oa(sa(ta(ea(Nn(Jn(Wn(qn(Zn(Qn(ra(Xt(s))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:Ni},_ios:{type:Boolean,value:He},_firefox:{type:Boolean,value:Ko},_android:{type:Boolean,value:fi},_touchDevice:{type:Boolean,value:le},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const i=this.__getFirstVisibleItem();return i?i.index:void 0}get _lastVisibleIndex(){const i=this.__getLastVisibleItem();return i?i.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(i=>this._isInViewport(i))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(i=>this._isInViewport(i))}_isInViewport(i){const e=this.$.table.getBoundingClientRect(),t=i.getBoundingClientRect(),o=this.$.header.getBoundingClientRect().height,r=this.$.footer.getBoundingClientRect().height;return t.bottom>e.top+o&&t.top<e.bottom-r}_getRenderedRows(){return Array.from(this.$.items.children).filter(i=>!i.hidden).sort((i,e)=>i.index-e.index)}_getRowContainingNode(i){const e=Ut("vaadin-grid-cell-content",i);return e?e.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(i,e){const t=this.__getRowModel(e);return this.getItemId(i)===this.getItemId(t.item)}ready(){super.ready(),this.__virtualizer=new Io({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>{this.__updateColumnsBodyContentHidden(),this.__tryToRecalculateColumnWidthsIfPending()})).observe(this.$.table),ve(this),this._tooltipController=new be(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}__getBodyCellCoordinates(i){if(this.$.items.contains(i)&&i.localName==="td")return{item:i.parentElement._item,column:i._column}}__focusBodyCell({item:i,column:e}){const t=this._getRenderedRows().find(r=>r._item===i),o=t&&[...t.children].find(r=>r._column===e);o&&o.focus()}_focusFirstVisibleRow(){const i=this.__getFirstVisibleItem();this.__rowFocusMode=!0,i.focus()}_flatSizeChanged(i,e,t,o){if(e&&t&&o){const r=this.shadowRoot.activeElement,n=this.__getBodyCellCoordinates(r),a=e.size||0;e.size=i,e.update(a-1,a-1),i<a&&e.update(i-1,i-1),n&&r.parentElement.hidden&&this.__focusBodyCell(n),this._resetKeyboardNavigation()}}__getIntrinsicWidth(i){return this.__intrinsicWidthCache.has(i)||this.__calculateAndCacheIntrinsicWidths([i]),this.__intrinsicWidthCache.get(i)}__getDistributedWidth(i,e){if(i==null||i===this)return 0;const t=Math.max(this.__getIntrinsicWidth(i),this.__getDistributedWidth((i.assignedSlot||i).parentElement,i));if(!e)return t;const o=i,r=t,n=o._visibleChildColumns.map(_=>this.__getIntrinsicWidth(_)).reduce((_,p)=>_+p,0),a=Math.max(0,r-n),u=this.__getIntrinsicWidth(e)/n*a;return this.__getIntrinsicWidth(e)+u}_recalculateColumnWidths(i){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(o=>{o.__debounceUpdateHeaderFooterRowVisibility&&o.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map;const e=this._firstVisibleIndex,t=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(o=>o.index>=e&&o.index<=t),this.__calculateAndCacheIntrinsicWidths(i),i.forEach(o=>{o.width=`${this.__getDistributedWidth(o)}px`})}__setVisibleCellContentAutoWidth(i,e){i._allCells.filter(t=>this.$.items.contains(t)?this.__viewportRowsCache.includes(t.parentElement):!0).forEach(t=>{t.__measuringAutoWidth=e,t.__measuringAutoWidth?(t.__originalWidth=t.style.width,t.style.width="auto",t.style.position="absolute"):(t.style.width=t.__originalWidth,delete t.__originalWidth,t.style.position="")})}__getAutoWidthCellsMaxWidth(i){return i._allCells.reduce((e,t)=>t.__measuringAutoWidth?Math.max(e,t.offsetWidth+1):e,0)}__calculateAndCacheIntrinsicWidths(i){i.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!0)),i.forEach(e=>{const t=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,t)}),i.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!1))}recalculateColumnWidths(){if(!this._columnTree)return;if(fe(this)||this._dataProviderController.isLoading()){this.__pendingRecalculateColumnWidths=!0;return}const i=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(i)}__tryToRecalculateColumnWidthsIfPending(){if(!this.__pendingRecalculateColumnWidths||fe(this)||this._dataProviderController.isLoading()||[...this.$.items.children].some(t=>t.index===void 0))return;[...this.$.items.children].some(t=>t.clientHeight>0)&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(i){const e=[];for(let t=0;t<i;t++){const o=document.createElement("tr");o.setAttribute("part","row body-row"),o.setAttribute("role","row"),o.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(o,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(o)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(t=>{t.isConnected&&t._cells&&(t._cells=[...t._cells])}),this.__afterCreateScrollerRowsDebouncer=z.debounce(this.__afterCreateScrollerRowsDebouncer,ee,()=>{this._afterScroll(),this.__tryToRecalculateColumnWidthsIfPending()}),e}_createCell(i,e){const o=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,r=document.createElement("vaadin-grid-cell-content");r.setAttribute("slot",o);const n=document.createElement(i);n.id=o.replace("-content-","-"),n.setAttribute("role",i==="td"?"gridcell":"columnheader"),!fi&&!He&&(n.addEventListener("mouseenter",l=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(l)}),n.addEventListener("mouseleave",()=>{this._hideTooltip()}),n.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const a=document.createElement("slot");if(a.setAttribute("name",o),e&&e._focusButtonMode){const l=document.createElement("div");l.setAttribute("role","button"),l.setAttribute("tabindex","-1"),n.appendChild(l),n._focusButton=l,n.focus=function(){n._focusButton.focus()},l.appendChild(a)}else n.setAttribute("tabindex","-1"),n.appendChild(a);return n._content=r,r.addEventListener("mousedown",()=>{if(Qo){const l=u=>{const _=r.contains(this.getRootNode().activeElement),p=u.composedPath().includes(r);!_&&p&&n.focus(),document.removeEventListener("mouseup",l,!0)};document.addEventListener("mouseup",l,!0)}else setTimeout(()=>{r.contains(this.getRootNode().activeElement)||n.focus()})}),n}_updateRow(i,e,t="body",o=!1,r=!1){const n=document.createDocumentFragment();we(i,a=>{a._vacant=!0}),i.innerHTML="",t==="body"&&(i.__cells=[],i.__detailsCell=null),e.filter(a=>!a.hidden).forEach((a,l,u)=>{let _;if(t==="body"){a._cells||(a._cells=[]),_=a._cells.find(m=>m._vacant),_||(_=this._createCell("td",a),a._onCellKeyDown&&_.addEventListener("keydown",a._onCellKeyDown.bind(a)),a._cells.push(_)),_.setAttribute("part","cell body-cell"),_.__parentRow=i,i.__cells.push(_);const p=i===this.$.sizer;if((!a._bodyContentHidden||p)&&i.appendChild(_),p&&(a._sizerCell=_),l===u.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const m=this._detailsCells.find(b=>b._vacant)||this._createCell("td");this._detailsCells.indexOf(m)===-1&&this._detailsCells.push(m),m._content.parentElement||n.appendChild(m._content),this._configureDetailsCell(m),i.appendChild(m),i.__detailsCell=m,this._a11ySetRowDetailsCell(i,m),m._vacant=!1}r||(a._cells=[...a._cells])}else{const p=t==="header"?"th":"td";o||a.localName==="vaadin-grid-column-group"?(_=a[`_${t}Cell`],_||(_=this._createCell(p),a._onCellKeyDown&&_.addEventListener("keydown",a._onCellKeyDown.bind(a))),_._column=a,i.appendChild(_),a[`_${t}Cell`]=_):(a._emptyCells||(a._emptyCells=[]),_=a._emptyCells.find(m=>m._vacant)||this._createCell(p),_._column=a,i.appendChild(_),a._emptyCells.indexOf(_)===-1&&a._emptyCells.push(_)),_.part.add("cell",`${t}-cell`)}_._content.parentElement||n.appendChild(_._content),_._vacant=!1,_._column=a}),t!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(i),this.appendChild(n),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(i)}__debounceUpdateHeaderFooterRowVisibility(i){i.__debounceUpdateHeaderFooterRowVisibility=z.debounce(i.__debounceUpdateHeaderFooterRowVisibility,X,()=>this.__updateHeaderFooterRowVisibility(i))}__updateHeaderFooterRowVisibility(i){if(!i)return;const e=Array.from(i.children).filter(t=>{const o=t._column;if(o._emptyCells&&o._emptyCells.indexOf(t)>-1)return!1;if(i.parentElement===this.$.header){if(o.headerRenderer)return!0;if(o.header===null)return!1;if(o.path||o.header!==void 0)return!0}else if(o.footerRenderer)return!0;return!1});i.hidden!==!e.length&&(i.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(i,e){this._preventScrollerRotatingCellFocus(i,e),this._columnTree&&(this._updateRowOrderParts(i,e),this._a11yUpdateRowRowindex(i,e),this._getItem(e,i))}_columnTreeChanged(i){this._renderColumnTree(i),this.recalculateColumnWidths(),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(i,e=i.index){Ve(i,{first:e===0,last:e===this._flatSize-1,odd:e%2!==0,even:e%2===0})}_updateRowStateParts(i,{expanded:e,selected:t,detailsOpened:o}){Ve(i,{expanded:e,collapsed:this.__isRowExpandable(i),selected:t,"details-opened":o})}_renderColumnTree(i){for(N(this.$.items,e=>{this._updateRow(e,i[i.length-1],"body",!1,!0);const t=this.__getRowModel(e);this._updateRowOrderParts(e),this._updateRowStateParts(e,t),this._filterDragAndDrop(e,t)});this.$.header.children.length<i.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>i.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);N(this.$.header,(e,t,o)=>{this._updateRow(e,i[t],"header",t===i.length-1);const r=xe(e);re(r,"first-header-row-cell",t===0),re(r,"last-header-row-cell",t===o.length-1)}),N(this.$.footer,(e,t,o)=>{this._updateRow(e,i[i.length-1-t],"footer",t===0);const r=xe(e);re(r,"first-footer-row-cell",t===0),re(r,"last-footer-row-cell",t===o.length-1)}),this._updateRow(this.$.sizer,i[i.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.generateCellClassNames(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}_updateItem(i,e){i._item=e;const t=this.__getRowModel(i);this._toggleDetailsCell(i,t.detailsOpened),this._a11yUpdateRowLevel(i,t.level),this._a11yUpdateRowSelected(i,t.selected),this._updateRowStateParts(i,t),this._generateCellClassNames(i,t),this._generateCellPartNames(i,t),this._filterDragAndDrop(i,t),N(i,o=>{if(!(o._column&&!o._column.isConnected)&&o._renderer){const r=o._column||this;o._renderer.call(r,o._content,r,t)}}),this._updateDetailsCellHeight(i),this._a11yUpdateRowExpanded(i,t.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(i){i.animationName.indexOf("vaadin-grid-appear")===0&&(i.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(i){return{index:i.index,item:i._item,level:this._getIndexLevel(i.index),expanded:this._isExpanded(i._item),selected:this._isSelected(i._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(i._item)}}_showTooltip(i){const e=this._tooltipController.node;e&&e.isConnected&&(this._tooltipController.setTarget(i.target),this._tooltipController.setContext(this.getEventContext(i)),e._stateController.open({focus:i.type==="focusin",hover:i.type==="mouseenter"}))}_hideTooltip(i){const e=this._tooltipController&&this._tooltipController.node;e&&e._stateController.close(i)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach(i=>{i.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})})}__updateVisibleRows(i,e){this.__virtualizer&&this.__virtualizer.update(i,e)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const aa=v`
  @keyframes vaadin-grid-appear {
    to {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    animation: 1ms vaadin-grid-appear;
    height: 400px;
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  #scroller {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    transform: translateY(0);
    width: auto;
    height: auto;
    position: absolute;
    inset: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    flex-grow: 0;
    width: 100%;
  }

  :host([all-rows-visible]) #scroller {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :host([all-rows-visible]) #items {
    min-height: 1px;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    outline: none;
    /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  #header,
  #footer {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    overflow: visible;
    width: 100%;
    z-index: 1;
  }

  #header {
    top: 0;
  }

  th {
    text-align: inherit;
  }

  /* Safari doesn't work with "inherit" */
  [safari] th {
    text-align: initial;
  }

  #footer {
    bottom: 0;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    overflow: visible;
  }

  [part~='row'] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items [part~='row'] {
    position: absolute;
  }

  #items [part~='row']:empty {
    height: 100%;
  }

  [part~='cell']:not([part~='details-cell']) {
    flex-shrink: 0;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }

  [part~='cell'] > [tabindex] {
    display: flex;
    align-items: inherit;
    outline: none;
    position: absolute;
    inset: 0;
  }

  [part~='details-cell'] {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [hidden] {
    display: none !important;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  [no-scrollbars][safari] #table,
  [no-scrollbars][firefox] #table {
    overflow: hidden;
  }

  /* Reordering styles */
  :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
  :host([reordering]) [part~='resize-handle'],
  #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  [part~='reorder-ghost'] {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    opacity: 0.5;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    left: 0;
  }

  :host([reordering]) {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Resizing styles */
  [part~='resize-handle'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  [part~='resize-handle']::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 35px;
    transform: translateX(-50%);
  }

  [last-column] [part~='resize-handle']::before,
  [last-frozen] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
    right: 0;
  }

  [frozen-to-end] [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  [frozen-to-end] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  [first-frozen-to-end] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  /* Hide resize handle if scrolled to end */
  :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
    display: none;
  }

  #scroller[column-resizing] {
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    position: absolute;
    visibility: hidden;
  }

  #sizer [part~='details-cell'] {
    display: none !important;
  }

  #sizer [part~='cell'][hidden] {
    display: none !important;
  }

  #sizer [part~='cell'] {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer [part~='cell']::before {
    content: '-';
  }

  #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  /* RTL specific styles */

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  :host([dir='rtl']) [part~='reorder-ghost'] {
    left: auto;
    right: 0;
  }

  :host([dir='rtl']) [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [part~='resize-handle']::before {
    transform: translateX(50%);
  }

  :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
  :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
    right: 0;
    left: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
    right: 0;
    left: auto;
  }

  @media (forced-colors: active) {
    [part~='selected-row'] [part~='first-column-cell']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border: 2px solid;
    }

    [part~='focused-cell']::before {
      outline: 2px solid !important;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-grid",aa,{moduleId:"vaadin-grid-styles"});class Ne extends na(V(P(H(E)))){static get template(){return T`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}}S(Ne);y("vaadin-grid-sorter",v`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zo=document.createElement("template");zo.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(zo.content);y("vaadin-grid-sorter",v`
    :host {
      display: inline-flex;
      cursor: pointer;
      max-width: 100%;
    }

    [part='content'] {
      flex: 1 1 auto;
    }

    [part='indicators'] {
      position: relative;
      align-self: center;
      flex: none;
    }

    [part='order'] {
      display: inline;
      vertical-align: super;
    }

    [part='indicators']::before {
      font-family: 'vaadin-grid-sorter-icons';
      display: inline-block;
    }

    :host(:not([direction])) [part='indicators']::before {
      content: '\\e901';
    }

    :host([direction='asc']) [part='indicators']::before {
      content: '\\e900';
    }

    :host([direction='desc']) [part='indicators']::before {
      content: '\\e902';
    }
  `,{moduleId:"vaadin-grid-sorter-styles"});const la=s=>class extends s{static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null,sync:!0},_order:{type:Number,value:null,sync:!0},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(e,t){t!==!1&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this._isConnected||(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:!!this._shiftClick,fromSorterClick:!!this._fromSorterClick},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(e){return e===null?"":e+1}_onClick(e){if(e.defaultPrevented)return;const t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),this._shiftClick=e.shiftKey,this._fromSorterClick=!0,this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class da extends la(P(oe(E))){static get template(){return T`
      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}}S(da);(function(){const s=function(i){return window.Vaadin.Flow.tryCatchWrapper(i,"Vaadin Grid")};window.Vaadin.Flow.gridConnector={initLazy:i=>s(function(e){if(e.$connector)return;const t=e._dataProviderController;t.ensureFlatIndexHierarchyOriginal=t.ensureFlatIndexHierarchy,t.ensureFlatIndexHierarchy=s(function(d){const{item:h}=this.getFlatIndexContext(d);if(!h||!this.isExpanded(h))return;e.$connector.hasCacheForParentKey(e.getItemId(h))?this.ensureFlatIndexHierarchyOriginal(d):e.$connector.beforeEnsureFlatIndexHierarchy(d,h)}),t.isLoadingOriginal=t.isLoading,t.isLoading=s(function(){return e.$connector.hasEnsureSubCacheQueue()||this.isLoadingOriginal()});const o={},r={},n={},a=50,l=20;let u=[],_,p=[],m;const b=150;let I,w={};const C="null";w[C]=[0,0];let L=null,M=null;const U=["SINGLE","NONE","MULTI"];let F={},O="SINGLE",G=!1;e.size=0,e.itemIdPath="key";function ke(d){return{[e.itemIdPath]:d}}e.$connector={},e.$connector.hasCacheForParentKey=s(d=>n[d]?.size!==void 0),e.$connector.hasEnsureSubCacheQueue=s(()=>p.length>0),e.$connector.hasParentRequestQueue=s(()=>u.length>0),e.$connector.hasRootRequestQueue=s(()=>Object.keys(o).length>0||!!I?.isActive()),e.$connector.beforeEnsureFlatIndexHierarchy=s(function(d,h){p.push({flatIndex:d,itemkey:e.getItemId(h)}),m=K.debounce(m,_i,()=>{for(;p.length;)e.$connector.flushEnsureSubCache()})}),e.$connector.doSelection=s(function(d,h){O==="NONE"||!d.length||h&&e.hasAttribute("disabled")||(O==="SINGLE"&&(F={}),d.forEach(c=>{c&&(F[c.key]=c,c.selected=!0,h&&e.$server.select(c.key));const f=!e.activeItem||!c||c.key!=e.activeItem.key;!h&&O==="SINGLE"&&f&&(e.activeItem=c)}),e.selectedItems=Object.values(F))}),e.$connector.doDeselection=s(function(d,h){if(O==="NONE"||!d.length||h&&e.hasAttribute("disabled"))return;const c=e.selectedItems.slice();for(;d.length;){const f=d.shift();for(let g=0;g<c.length;g++){const x=c[g];if(f?.key===x.key){c.splice(g,1);break}}f&&(delete F[f.key],delete f.selected,h&&e.$server.deselect(f.key))}e.selectedItems=c}),e.__activeItemChanged=s(function(d,h){O=="SINGLE"&&(d?F[d.key]||e.$connector.doSelection([d],!0):h&&F[h.key]&&(e.__deselectDisallowed?e.activeItem=h:e.$connector.doDeselection([h],!0)))}),e._createPropertyObserver("activeItem","__activeItemChanged",!0),e.__activeItemChangedDetails=s(function(d,h){e.__disallowDetailsOnClick||d==null&&h===void 0||(d&&!d.detailsOpened?e.$server.setDetailsVisible(d.key):e.$server.setDetailsVisible(null))}),e._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),e.$connector._getSameLevelPage=s(function(d,h,c){if((h.parentItem?e.getItemId(h.parentItem):C)===d)return Math.floor(c/e.pageSize);const{parentCache:g,parentCacheIndex:x}=h;return g?this._getSameLevelPage(d,g,x):null}),e.$connector.flushEnsureSubCache=s(function(){const d=p.shift();return d?(t.ensureFlatIndexHierarchyOriginal(d.flatIndex),!0):!1}),e.$connector.debounceRootRequest=s(function(d){const h=e._hasData?b:0;I=K.debounce(I,Pt.after(h),()=>{e.$connector.fetchPage((c,f)=>e.$server.setRequestedRange(c,f),d,C)})}),e.$connector.flushParentRequests=s(function(){const d=[];u.splice(0,l).forEach(({parentKey:h,page:c})=>{e.$connector.fetchPage((f,g)=>d.push({parentKey:h,firstIndex:f,size:g}),c,h)}),d.length&&e.$server.setParentRequestedRanges(d)}),e.$connector.debounceParentRequest=s(function(d,h){u=u.filter(c=>c.parentKey!==d),u.push({parentKey:d,page:h}),_=K.debounce(_,Pt.after(a),()=>{for(;u.length;)e.$connector.flushParentRequests()})}),e.$connector.fetchPage=s(function(d,h,c){c===C&&(h=Math.min(h,Math.floor((e.size-1)/e.pageSize)));const f=e._getRenderedRows();let g=f.length>0?f[0].index:0,x=f.length>0?f[f.length-1].index:0,A=x-g,D=Math.max(0,g-A),R=Math.min(x+A,e._flatSize),k=[null,null];for(let Y=D;Y<=R;Y++){const{cache:ze,index:Oo}=t.getFlatIndexContext(Y),Pe=e.$connector._getSameLevelPage(c,ze,Oo);Pe!==null&&(k[0]=Math.min(k[0]??Pe,Pe),k[1]=Math.max(k[1]??Pe,Pe))}(k.some(Y=>Y===null)||h<k[0]||h>k[1])&&(k=[h,h]);let W=w[c]||[-1,-1];if(W[0]!=k[0]||W[1]!=k[1]){w[c]=k;let Y=k[1]-k[0]+1;d(k[0]*e.pageSize,Y*e.pageSize)}}),e.dataProvider=s(function(d,h){if(d.pageSize!=e.pageSize)throw"Invalid pageSize";let c=d.page;if(d.parentItem){let f=e.getItemId(d.parentItem);r[f]||(r[f]={});const g=t.getItemContext(d.parentItem);n[f]?.[c]&&g.subCache?(c=Math.min(c,Math.floor(n[f].size/e.pageSize)),p=[],h(n[f][c],n[f].size)):(r[f][c]=h,e.$connector.debounceParentRequest(f,c))}else{if(c=Math.min(c,Math.floor(e.size/e.pageSize)),e.size===0){h([],0);return}n[C]?.[c]?h(n[C][c]):(o[c]=h,e.$connector.debounceRootRequest(c))}}),e.$connector.setSorterDirections=s(function(d){G=!0,setTimeout(s(()=>{try{const h=Array.from(e.querySelectorAll("vaadin-grid-sorter"));e._sorters.forEach(c=>{h.includes(c)||h.push(c)}),h.forEach(c=>{c.direction=null}),e.multiSortPriority!=="append"&&(d=d.reverse()),d.forEach(({column:c,direction:f})=>{h.forEach(g=>{g.getAttribute("path")===c&&(g.direction=f)})})}finally{G=!1}}))}),e._updateItem=s(function(d,h){Ne.prototype._updateItem.call(e,d,h),d.hidden||Array.from(d.children).forEach(c=>{Array.from(c?._content?.__templateInstance?.children||[]).forEach(f=>{f._attachRenderedComponentIfAble&&f._attachRenderedComponentIfAble(),Array.from(f?.children||[]).forEach(g=>{g._attachRenderedComponentIfAble&&g._attachRenderedComponentIfAble()})})}),O===U[1]&&(d.removeAttribute("aria-selected"),Array.from(d.children).forEach(c=>c.removeAttribute("aria-selected")))});const li=s(function(d,h){if(d==null||e.$server.updateExpandedState==null)return;let c=e.getItemId(d);e.$server.updateExpandedState(c,h)});e.expandItem=s(function(d){li(d,!0),Ne.prototype.expandItem.call(e,d)}),e.collapseItem=s(function(d){li(d,!1),Ne.prototype.collapseItem.call(e,d)});const je=function(d){if(!d||!Array.isArray(d))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(d);let h=Array.from(e.detailsOpenedItems),c=!1;for(let f=0;f<d.length;++f){const g=d[f];g&&(g.detailsOpened?e._getItemIndexInArray(g,h)<0&&h.push(g):e._getItemIndexInArray(g,h)>=0&&h.splice(e._getItemIndexInArray(g,h),1),F[g.key]&&(F[g.key]=g,g.selected=!0,c=!0))}e.detailsOpenedItems=h,c&&e.selectedItems.splice(0,e.selectedItems.length,...Object.values(F))},At=function(d,h){let c;if((h||C)!==C){c=n[h][d];const f=ke(h),g=t.getItemContext(f);if(g&&g.subCache){const x=r[h],A=x&&x[d];di(d,c,A,g.subCache)}}else c=n[C][d],di(d,c,o[d],t.rootCache);return c},di=function(d,h,c,f){if(!c){let g=d*e.pageSize,x=g+e.pageSize;if(h){if(f&&f.items)for(let A=g;A<x;A++)f.items[A]&&(f.items[A]=h[A-g])}else if(f&&f.items)for(let A=g;A<x;A++)delete f.items[A]}},hi=function(){Ct(),e.__updateVisibleRows()},Ct=function(){t.recalculateFlatSize(),e._flatSize=t.flatSize},Ye=function(d){if(!d||!e.$||e.$.items.childElementCount===0)return;const h=d.map(f=>f.key),c=e._getRenderedRows().filter(f=>f._item&&h.includes(f._item.key)).map(f=>f.index);c.length>0&&e.__updateVisibleRows(c[0],c[c.length-1])};e.$connector.set=s(function(d,h,c){if(d%e.pageSize!=0)throw"Got new data to index "+d+" which is not aligned with the page size of "+e.pageSize;let f=c||C;const g=d/e.pageSize,x=Math.ceil(h.length/e.pageSize);f===C&&(M=[g,g+x-1]);for(let A=0;A<x;A++){let D=g+A,R=h.slice(A*e.pageSize,(A+1)*e.pageSize);n[f]||(n[f]={}),n[f][D]=R,e.$connector.doSelection(R.filter(W=>W.selected)),e.$connector.doDeselection(R.filter(W=>!W.selected&&F[W.key]));const k=At(D,f);k&&(je(k),Ye(k))}});const ci=function(d){let h=d.parentUniqueKey||C;if(n[h]){for(let c in n[h])for(let f in n[h][c])if(e.getItemId(n[h][c][f])===e.getItemId(d))return{page:c,index:f,parentKey:h}}return null};e.$connector.updateHierarchicalData=s(function(d){let h=[];for(let f=0;f<d.length;f++){let g=ci(d[f]);if(g){n[g.parentKey][g.page][g.index]=d[f];let x=g.parentKey+":"+g.page;h[x]||(h[x]={parentKey:g.parentKey,page:g.page})}}let c=Object.keys(h);for(let f=0;f<c.length;f++){let g=h[c[f]];const x=At(g.page,g.parentKey);x&&(je(x),Ye(x))}}),e.$connector.updateFlatData=s(function(d){for(let h=0;h<d.length;h++){let c=ci(d[h]);if(c){n[c.parentKey][c.page][c.index]=d[h];const f=parseInt(c.page)*e.pageSize+parseInt(c.index),{rootCache:g}=t;g.items[f]&&(g.items[f]=d[h])}}je(d),Ye(d)}),e.$connector.clearExpanded=s(function(){e.expandedItems=[],p=[],u=[]});const Po=function(){const d=w[C];if(!d||!L)return;const h=L[1]-L[0]+1,c=Array.from({length:h},(f,g)=>L[0]+g);if(M){const[f,g]=M;for(let x=f;x<=g;x++){const A=c.indexOf(x);A>=0&&c.splice(A,1)}}c.some(f=>f>=d[0]&&f<=d[1])&&(d[0]=-1,d[1]=-1)};e.$connector.clear=s(function(d,h,c){let f=c||C;if(!n[f]||Object.keys(n[f]).length===0)return;if(d%e.pageSize!=0)throw"Got cleared data for index "+d+" which is not aligned with the page size of "+e.pageSize;let g=Math.floor(d/e.pageSize),x=Math.ceil(h/e.pageSize);f===C&&(L=[g,g+x-1]);for(let R=0;R<x;R++){let k=g+R,W=n[f][k];e.$connector.doDeselection(W.filter(ze=>F[ze.key])),W.forEach(ze=>e.closeItemDetails(ze)),delete n[f][k];const Y=At(k,c);Y&&je(Y),Ye(W)}let A=t.rootCache;if(c){const R=ke(f);A=t.getItemContext(R).subCache}const D=d+x*e.pageSize;for(let R=d;R<D;R++)delete A.items[R],A.removeSubCache(R);Ct()}),e.$connector.reset=s(function(){e.size=0,Ke(n),Ke(t.rootCache.items),Ke(w),m&&m.cancel(),_&&_.cancel(),I&&I.cancel(),m=void 0,_=void 0,p=[],u=[],hi()});const Ke=d=>Object.keys(d).forEach(h=>delete d[h]);e.$connector.updateSize=d=>e.size=d,e.$connector.updateUniqueItemIdPath=d=>e.itemIdPath=d,e.$connector.expandItems=s(function(d){let h=Array.from(e.expandedItems);d.filter(c=>!e._isExpanded(c)).forEach(c=>h.push(c)),e.expandedItems=h}),e.$connector.collapseItems=s(function(d){let h=Array.from(e.expandedItems);d.forEach(c=>{let f=e._getItemIndexInArray(c,h);f>=0&&h.splice(f,1)}),e.expandedItems=h,d.forEach(c=>e.$connector.removeFromQueue(c))}),e.$connector.removeFromQueue=s(function(d){let h=e.getItemId(d);Object.values(r[h]||{}).forEach(c=>c([])),delete r[h],p=p.filter(c=>c.itemkey!==h),u=u.filter(c=>c.parentKey!==h)}),e.$connector.confirmParent=s(function(d,h,c){n[h]||(n[h]={});const f=n[h].size!==c;n[h].size=c,c===0&&(n[h][0]=[]);let g=Object.getOwnPropertyNames(r[h]||{});for(let x=0;x<g.length;x++){let A=g[x],D=w[h]||[0,0];const R=r[h][A];if(n[h]&&n[h][A]||A<D[0]||A>D[1]){delete r[h][A];let k=n[h][A]||new Array(c);R(k,c)}else R&&c===0&&(delete r[h][A],R([],c))}if(f&&g.length===0){const x=ke(h),A=t.getItemContext(x);A&&A.subCache&&(A.subCache.size=c),Ct()}e.$server.confirmParentUpdate(d,h),e.loading||(e.__confirmParentUpdateDebouncer=K.debounce(e.__confirmParentUpdateDebouncer,_i,()=>e.__updateVisibleRows()))}),e.$connector.confirm=s(function(d){let h=Object.getOwnPropertyNames(o);for(let c=0;c<h.length;c++){let f=h[c],g=w[C]||[0,0];const x=e.size?Math.ceil(e.size/e.pageSize)-1:0,A=Math.min(g[1],x),D=o[f];n[C]?.[f]||f<g[0]||+f>A?(delete o[f],n[C][f]?D(n[C][f]):(D(new Array(e.pageSize)),e.requestContentUpdate())):D&&e.size===0&&(delete o[f],D([]))}Po(),M=null,L=null,e.$server.confirmUpdate(d)}),e.$connector.ensureHierarchy=s(function(){for(let d in n)d!==C&&delete n[d];Ke(w),t.rootCache.removeSubCaches(),hi()}),e.$connector.setSelectionMode=s(function(d){if((typeof d=="string"||d instanceof String)&&U.indexOf(d)>=0)O=d,F={},e.$connector.updateMultiSelectable();else throw"Attempted to set an invalid selection mode"}),e.$connector.updateMultiSelectable=s(function(){e.$&&(O===U[0]?e.$.table.setAttribute("aria-multiselectable",!1):O===U[1]?e.$.table.removeAttribute("aria-multiselectable"):e.$.table.setAttribute("aria-multiselectable",!0))}),e._createPropertyObserver("isAttached",()=>e.$connector.updateMultiSelectable());const ui=d=>h=>{d&&(d(h),d=null)};e.$connector.setHeaderRenderer=s(function(d,h){const{content:c,showSorter:f,sorterPath:g}=h;if(c===null){d.headerRenderer=null;return}d.headerRenderer=ui(x=>{x.innerHTML="";let A=x;if(f){const D=document.createElement("vaadin-grid-sorter");D.setAttribute("path",g);const R=c instanceof Node?c.textContent:c;R&&D.setAttribute("aria-label",`Sort by ${R}`),x.appendChild(D),A=D}c instanceof Node?A.appendChild(c):A.textContent=c})}),e.__applySorters=()=>{const d=e._mapSorters(),h=JSON.stringify(e._previousSorters)!==JSON.stringify(d);e._previousSorters=d,Ne.prototype.__applySorters.call(e),h&&!G&&e.$server.sortersChanged(d)},e.$connector.setFooterRenderer=s(function(d,h){const{content:c}=h;if(c===null){d.footerRenderer=null;return}d.footerRenderer=ui(f=>{f.innerHTML="",c instanceof Node?f.appendChild(c):f.textContent=c})}),e.addEventListener("vaadin-context-menu-before-open",s(function(d){const{key:h,columnId:c}=d.detail;e.$server.updateContextMenuTargetItem(h,c)})),e.getContextMenuBeforeOpenDetail=s(function(d){const h=d.detail.sourceEvent||d,c=e.getEventContext(h),f=c.item?.key||"",g=c.column?.id||"";return{key:f,columnId:g}}),e.preventContextMenu=s(function(d){const h=d.type==="click",{column:c}=e.getEventContext(d);return h&&c instanceof Mt}),e.addEventListener("click",s(d=>pi(d,"item-click"))),e.addEventListener("dblclick",s(d=>pi(d,"item-double-click"))),e.addEventListener("column-resize",s(d=>{e._getColumnsInOrder().filter(c=>!c.hidden).forEach(c=>{c.dispatchEvent(new CustomEvent("column-drag-resize"))}),e.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:d.detail.resizedColumn._flowId}}))})),e.addEventListener("column-reorder",s(d=>{const h=e._columnTree.slice(0).pop().filter(c=>c._flowId).sort((c,f)=>c._order-f._order).map(c=>c._flowId);e.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:h}}))})),e.addEventListener("cell-focus",s(d=>{const h=e.getEventContext(d);["header","body","footer"].indexOf(h.section)!==-1&&e.dispatchEvent(new CustomEvent("grid-cell-focus",{detail:{itemKey:h.item?h.item.key:null,internalColumnId:h.column?h.column._flowId:null,section:h.section}}))}));function pi(d,h){if(d.defaultPrevented)return;const c=d.target;if(Eo(c)||c instanceof HTMLLabelElement)return;const f=e.getEventContext(d),g=f.section;f.item&&g!=="details"&&(d.itemKey=f.item.key,f.column&&(d.internalColumnId=f.column._flowId),e.dispatchEvent(new CustomEvent(h,{detail:d})))}e.cellClassNameGenerator=s(function(d,h){const c=h.item.style;if(c)return(c.row||"")+" "+(d&&c[d._flowId]||"")}),e.cellPartNameGenerator=s(function(d,h){const c=h.item.part;if(c)return(c.row||"")+" "+(d&&c[d._flowId]||"")}),e.dropFilter=s(d=>d.item&&!d.item.dropDisabled),e.dragFilter=s(d=>d.item&&!d.item.dragDisabled),e.addEventListener("grid-dragstart",s(d=>{e._isSelected(d.detail.draggedItems[0])?(e.__selectionDragData?Object.keys(e.__selectionDragData).forEach(h=>{d.detail.setDragData(h,e.__selectionDragData[h])}):(e.__dragDataTypes||[]).forEach(h=>{d.detail.setDragData(h,d.detail.draggedItems.map(c=>c.dragData[h]).join(`
`))}),e.__selectionDraggedItemsCount>1&&d.detail.setDraggedItemsCount(e.__selectionDraggedItemsCount)):(e.__dragDataTypes||[]).forEach(h=>{d.detail.setDragData(h,d.detail.draggedItems[0].dragData[h])})}))})(i)}})();function ha({currentTarget:s}){s.hasAttribute("disableOnClick")&&(s.disabled=!0)}window.Vaadin.Flow.button={initDisableOnClick:s=>{s.__hasDisableOnClickListener||(s.addEventListener("click",ha),s.__hasDisableOnClickListener=!0)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ca=s=>class extends ji(s){static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0,sync:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(i,e){i==="hidden"&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/u.test(i)&&this._updateFlexAndWidth(),i==="frozen"&&!this.frozen&&(this.frozen=e),i==="lastFrozen"&&!this._lastFrozen&&(this._lastFrozen=e),i==="frozenToEnd"&&!this.frozenToEnd&&(this.frozenToEnd=e),i==="firstFrozenToEnd"&&!this._firstFrozenToEnd&&(this._firstFrozenToEnd=e)}_groupOrderChanged(i,e){if(e){const t=e.slice(0);if(!i){t.forEach(a=>{a._order=0});return}const o=/(0+)$/u.exec(i).pop().length,r=~~(Math.log(e.length)/Math.LN10)+1,n=10**(o-r);t[0]&&t[0]._order&&t.sort((a,l)=>a._order-l._order),qi(t,n,i)}}_groupReorderStatusChanged(i,e){i===void 0||e===void 0||e.forEach(t=>{t._reorderStatus=i})}_groupResizableChanged(i,e){i===void 0||e===void 0||e.forEach(t=>{t.resizable=i})}_updateVisibleChildColumns(i){this._visibleChildColumns=Array.prototype.filter.call(i,e=>!e.hidden),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(this._visibleChildColumns.length>0){const i=this._visibleChildColumns.reduce((e,t)=>(e+=` + ${(t.width||"0px").replace("calc","")}`,e),"").substring(3);this._setWidth(`calc(${i})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(i,e)=>i+e.flexGrow,0))}}__scheduleAutoFreezeWarning(i,e){if(this._grid){const t=e.replace(/([A-Z])/gu,"-$1").toLowerCase(),o=i[0][e]||i[0].hasAttribute(t);i.every(n=>(n[e]||n.hasAttribute(t))===o)||(this._grid.__autoFreezeWarningDebouncer=z.debounce(this._grid.__autoFreezeWarningDebouncer,ee,()=>{console.warn(`WARNING: Joining ${e} and non-${e} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${e}. Otherwise, exclude the ${e} columns from the joined group.`)}))}}_groupFrozenChanged(i,e){e===void 0||i===void 0||i!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozen"),Array.from(e).forEach(t=>{t.frozen=i}))}_groupFrozenToEndChanged(i,e){e===void 0||i===void 0||i!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozenToEnd"),Array.from(e).forEach(t=>{t.frozenToEnd=i}))}_groupHiddenChanged(i){(i||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const i=this._autoHidden;this._autoHidden=(this._visibleChildColumns||[]).length===0,(i||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(i=>{i.hidden=this.hidden})}_colSpanChanged(i,e,t){e&&(e.setAttribute("colspan",i),this._grid&&this._grid._a11yUpdateCellColspan(e,i)),t&&(t.setAttribute("colspan",i),this._grid&&this._grid._a11yUpdateCellColspan(t,i))}_getChildColumns(i){return ne.getColumns(i)}_addNodeObserver(){this._observer=new ne(this,()=>{this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,this._grid&&this._grid._debounceUpdateColumnTree&&this._grid._debounceUpdateColumnTree()}),this._observer.flush()}_isColumnElement(i){return i.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(i.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ua extends ca(E){static get is(){return"vaadin-grid-column-group"}}S(ua);const nt=window;nt.Vaadin=nt.Vaadin||{};nt.Vaadin.setLitRenderer=(s,i,e,t,o,r)=>{const n=Function(`
    "use strict";

    const [render, html, returnChannel] = arguments;

    return (root, model, itemKey) => {
      const { item, index } = model;
      ${o.map(l=>`
          const ${l} = (...args) => {
            if (itemKey !== undefined) {
              returnChannel('${l}', itemKey, args[0] instanceof Event ? [] : [...args]);
            }
          }`).join("")}

      render(html\`${e}\`, root)
    }
  `)(at,tt,t),a=(l,u,_)=>{const{item:p}=_;l.__litRenderer!==a&&(l.innerHTML="",delete l._$litPart$,l.__litRenderer=a);const m={};for(const b in p)b.startsWith(r)&&(m[b.replace(r,"")]=p[b]);n(l,{..._,item:m},p.key)};a.__rendererId=r,s[i]=a};nt.Vaadin.unsetLitRenderer=(s,i,e)=>{s[i]?.__rendererId===e&&(s[i]=void 0)};y("vaadin-notification-card",v`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot\$='stretch']) {
      margin: 0;
    }

    :host([slot\$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot\$='stretch'])) {
        display: flex;
      }

      :host([slot\$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot\$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-primary-contrast-color);
      --vaadin-button-primary-background: var(--lumo-primary-contrast-color);
      --vaadin-button-primary-text-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --vaadin-button-background: var(--lumo-contrast-20pct);
      --vaadin-button-text-color: var(--lumo-base-color);
      --vaadin-button-primary-background: var(--lumo-base-color);
      --vaadin-button-primary-text-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-success-contrast-color);
      --vaadin-button-primary-background: var(--lumo-success-contrast-color);
      --vaadin-button-primary-text-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-error-contrast-color);
      --vaadin-button-primary-background: var(--lumo-error-contrast-color);
      --vaadin-button-primary-text-color: var(--lumo-error-text-color);
    }

    :host([theme~='warning']) [part='overlay'] {
      background: var(--lumo-warning-color);
      color: var(--lumo-warning-contrast-color);
      box-shadow: inset 0 0 0 1px var(--lumo-contrast-20pct), var(--lumo-box-shadow-l);
    }

    :host([theme~='warning']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-warning-contrast-color);
      --vaadin-button-primary-background: var(--lumo-shade-50pct);
      --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pa extends P(V(E)){static get template(){return T`
      <style>
        :host {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          pointer-events: none;
        }

        [region-group] {
          flex: 1 1 0%;
          display: flex;
        }

        [region-group='top'] {
          align-items: flex-start;
        }

        [region-group='bottom'] {
          align-items: flex-end;
        }

        [region-group] > [region] {
          flex: 1 1 0%;
        }

        @media (max-width: 420px) {
          [region-group] {
            flex-direction: column;
            align-items: stretch;
          }

          [region-group='top'] {
            justify-content: flex-start;
          }

          [region-group='bottom'] {
            justify-content: flex-end;
          }

          [region-group] > [region] {
            flex: initial;
          }
        }
      </style>

      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),He&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_openedChanged(i){i?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}_detectIosNavbar(){const i=window.innerHeight,t=window.innerWidth>i,o=document.documentElement.clientHeight;t&&o>i?this.style.bottom=`${o-i}px`:this.style.bottom="0"}_onVaadinOverlayClose(i){const e=i.detail.sourceEvent;e&&e.composedPath().indexOf(this)>=0&&i.preventDefault()}}class _a extends P(E){static get template(){return T`
      <style>
        :host {
          display: block;
        }

        [part='overlay'] {
          pointer-events: auto;
        }

        @media (forced-colors: active) {
          [part='overlay'] {
            outline: 3px solid;
          }
        }
      </style>

      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class J extends vt(Nt(V(E))){static get template(){return T`
      <style>
        :host {
          display: none !important;
        }
      </style>
      <vaadin-notification-card theme$="[[_theme]]"> </vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _overlayElement)"]}static show(i,e){return Xo(i)?J._createAndShowNotification(t=>{at(i,t)},e):J._createAndShowNotification(t=>{t.innerText=i},e)}static _createAndShowNotification(i,e){const t=document.createElement(J.is);return e&&Number.isFinite(e.duration)&&(t.duration=e.duration),e&&e.position&&(t.position=e.position),e&&e.theme&&t.setAttribute("theme",e.theme),t.renderer=i,document.body.appendChild(t),t.opened=!0,t.addEventListener("opened-changed",o=>{o.detail.value||t.remove()}),t}get _container(){return J._container||(J._container=document.createElement("vaadin-notification-container"),document.body.appendChild(J._container)),J._container}get _card(){return this._overlayElement}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-notification-card"),ve(this)}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected||(this.opened=!1)})}requestContentUpdate(){this.renderer&&this.renderer(this._card,this)}_rendererChanged(i,e,t){if(!t)return;const o=this._oldRenderer!==i;this._oldRenderer=i,o&&(t.innerHTML="",delete t._$litPart$),e&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}_openedChanged(i){i?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}__cleanUpOpeningClosingState(){this._card.removeAttribute("opening"),this._card.removeAttribute("closing"),this._card.removeEventListener("animationend",this.__animationEndListener)}_animatedAppendNotificationCard(){this._card?(this.__cleanUpOpeningClosingState(),this._card.setAttribute("opening",""),this._appendNotificationCard(),this.__animationEndListener=()=>this.__cleanUpOpeningClosingState(),this._card.addEventListener("animationend",this.__animationEndListener),this._didAnimateNotificationAppend=!0):this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(this._card){if(!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._card.slot=this.position,this._container.firstElementChild&&/top/u.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=!!this._container.firstElementChild}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this.__cleanUpOpeningClosingState(),this._card.setAttribute("closing","");const i=getComputedStyle(this._card).getPropertyValue("animation-name");i&&i!=="none"?(this.__animationEndListener=()=>{this._removeNotificationCard(),this.__cleanUpOpeningClosingState()},this._card.addEventListener("animationend",this.__animationEndListener)):this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(i,e){e&&(clearTimeout(this._durationTimeoutId),i>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),i)))}}S(pa);S(_a);S(J);

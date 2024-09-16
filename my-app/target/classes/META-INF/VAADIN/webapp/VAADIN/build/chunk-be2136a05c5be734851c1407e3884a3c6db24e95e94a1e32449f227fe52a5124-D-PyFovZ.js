import{l as Ps,u as Rs,d as L,a as fi,w as D,s as mi,b as Ds,f as Ls,r as gi,P,m as Fs,c as Ms,h as F,i as Ns,e as I,g as q,j as Y,D as ce,E as ie,k as U,n as Bs,o as Te,p as Hs,q as Yt,t as Qt}from"./generated-flow-imports-BTegz7Qs.js";import{b as $s,c as vi,e as Vs,R as Ws,Q as bi,k as yi,d as R,i as y,f as A,T as H,g as Ci,a as Gs}from"./indexhtml-D7XKlZ_T.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jn=(o,i)=>o?._$litType$!==void 0,Us=o=>o.strings===void 0;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class K{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(i,e){this._asyncModule=i,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Pe.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Pe.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(i,e,t){return i instanceof K?i._cancelAsync():i=new K,i.setConfig(e,t),i}}let Pe=new Set;const qs=function(o){Pe.add(o)},js=function(){const o=!!Pe.size;return Pe.forEach(i=>{try{i.flush()}catch(e){setTimeout(()=>{throw e})}}),o};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ks=function(){let o,i;do o=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),i=js();while(o||i)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Xt=!1;function Ys(){if(Ps&&!Rs){if(!Xt){Xt=!0;const o=document.createElement("style");o.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(o)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Et(o,i,e,t,s){let r;s&&(r=typeof e=="object"&&e!==null,r&&(t=o.__dataTemp[i]));let n=t!==e&&(t===t||e===e);return r&&n&&(o.__dataTemp[i]=e),n}const It=L(o=>{class i extends o{_shouldPropertyChange(t,s,r){return Et(this,t,s,r,!0)}}return i});L(o=>{class i extends o{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,s,r){return Et(this,t,s,r,this.mutableData)}}return i});It._mutablePropertyChange=Et;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let mt=null;function gt(){return mt}gt.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:gt,writable:!0}});const xi=fi(gt),Qs=It(xi);function Xs(o,i){mt=o,Object.setPrototypeOf(o,i.prototype),new i,mt=null}const Zs=fi(class{});function wi(o,i){for(let e=0;e<i.length;e++){let t=i[e];if(!!o!=!!t.__hideTemplateChildren__)if(t.nodeType===Node.TEXT_NODE)o?(t.__polymerTextContent__=t.textContent,t.textContent=""):t.textContent=t.__polymerTextContent__;else if(t.localName==="slot")if(o)t.__polymerReplaced__=document.createComment("hidden-slot"),D(D(t).parentNode).replaceChild(t.__polymerReplaced__,t);else{const s=t.__polymerReplaced__;s&&D(D(s).parentNode).replaceChild(t,s)}else t.style&&(o?(t.__polymerDisplay__=t.style.display,t.style.display="none"):t.style.display=t.__polymerDisplay__);t.__hideTemplateChildren__=o,t._showHideChildren&&t._showHideChildren(o)}}class se extends Zs{constructor(i){super(),this._configureProperties(i),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let s=this.root.firstChild;s;s=s.nextSibling)e.push(s),s.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let t=this.__templatizeOptions;(i&&t.instanceProps||!t.instanceProps)&&this._enableProperties()}_configureProperties(i){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let t in i)this._setPendingProperty(t,i[t])}forwardHostProp(i,e){this._setPendingPropertyOrPath(i,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(i,e,t){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(i,e,s=>{s.model=this,t(s)});else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(i,e,t)}}_showHideChildren(i){wi(i,this.children)}_setUnmanagedPropertyToNode(i,e,t){i.__hideTemplateChildren__&&i.nodeType==Node.TEXT_NODE&&e=="textContent"?i.__polymerTextContent__=t:super._setUnmanagedPropertyToNode(i,e,t)}get parentModel(){let i=this.__parentModel;if(!i){let e;i=this;do i=i.__dataHost.__dataHost;while((e=i.__templatizeOptions)&&!e.parentModel);this.__parentModel=i}return i}dispatchEvent(i){return!0}}se.prototype.__dataHost;se.prototype.__templatizeOptions;se.prototype._methodHost;se.prototype.__templatizeOwner;se.prototype.__hostProps;const Js=It(se);function Zt(o){let i=o.__dataHost;return i&&i._methodHost||i}function eo(o,i,e){let t=e.mutableData?Js:se;vt.mixin&&(t=vt.mixin(t));let s=class extends t{};return s.prototype.__templatizeOptions=e,s.prototype._bindTemplate(o),so(s,o,i,e),s}function to(o,i,e,t){let s=e.forwardHostProp;if(s&&i.hasHostProps){const r=o.localName=="template";let n=i.templatizeTemplateClass;if(!n){if(r){let l=e.mutableData?Qs:xi;class u extends l{}n=i.templatizeTemplateClass=u}else{const l=o.constructor;class u extends l{}n=i.templatizeTemplateClass=u}let a=i.hostProps;for(let l in a)n.prototype._addPropertyEffect("_host_"+l,n.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:io(l,s)}),n.prototype._createNotifyingProperty("_host_"+l);Ds&&t&&no(i,e,t)}if(o.__dataProto&&Object.assign(o.__data,o.__dataProto),r)Xs(o,n),o.__dataTemp={},o.__dataPending=null,o.__dataOld=null,o._enableProperties();else{Object.setPrototypeOf(o,n.prototype);const a=i.hostProps;for(let l in a)if(l="_host_"+l,l in o){const u=o[l];delete o[l],o.__data[l]=u}}}}function io(o,i){return function(t,s,r){i.call(t.__templatizeOwner,s.substring(6),r[s])}}function so(o,i,e,t){let s=e.hostProps||{};for(let r in t.instanceProps){delete s[r];let n=t.notifyInstanceProp;n&&o.prototype._addPropertyEffect(r,o.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:oo(r,n)})}if(t.forwardHostProp&&i.__dataHost)for(let r in s)e.hasHostProps||(e.hasHostProps=!0),o.prototype._addPropertyEffect(r,o.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:ro()})}function oo(o,i){return function(t,s,r){i.call(t.__templatizeOwner,t,s,r[s])}}function ro(){return function(i,e,t){i.__dataHost._setPendingPropertyOrPath("_host_"+e,t[e],!0,!0)}}function vt(o,i,e){if(mi&&!Zt(o))throw new Error("strictTemplatePolicy: template owner not trusted");if(e=e||{},o.__templatizeOwner)throw new Error("A <template> can only be templatized once");o.__templatizeOwner=i;let s=(i?i.constructor:se)._parseTemplate(o),r=s.templatizeInstanceClass;r||(r=eo(o,s,e),s.templatizeInstanceClass=r);const n=Zt(o);to(o,s,e,n);let a=class extends r{};return a.prototype._methodHost=n,a.prototype.__dataHost=o,a.prototype.__templatizeOwner=i,a.prototype.__hostProps=s.hostProps,a=a,a}function no(o,i,e){const t=e.constructor._properties,{propertyEffects:s}=o,{instanceProps:r}=i;for(let n in s)if(!t[n]&&!(r&&r[n])){const a=s[n];for(let l=0;l<a.length;l++){const{part:u}=a[l].info;if(!(u.signature&&u.signature.static)){console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Ai extends P{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=K.debounce(this.__renderDebouncer,Fs,()=>this.__render()),qs(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const i=D(this).parentNode;(!i||i.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!D(i).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Ys()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const i=this;let e=i._templateInfo?i:D(i).querySelector("template");if(!e){let t=new MutationObserver(()=>{if(D(this).querySelector("template"))t.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return t.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let i=D(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length&&D(this).previousSibling!==e[e.length-1])for(let s=0,r;s<e.length&&(r=e[s]);s++)D(i).insertBefore(r,this)}else{if(!i||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(i)}return!0}render(){Ks()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!Ms||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(i){}__teardownInstance(){}_showHideChildren(){}}class ao extends Ai{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(i){const e=this.__dataHost||this;if(mi&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const t=e._bindTemplate(this.__template,!0);t.runEffects=(s,r,n)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),r=Object.assign(a.changedProps,r)),s(r,n);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:s,changedProps:{}}),n)for(const l in r){const u=gi(l);a.changedProps[u]=this.__dataHost[u]}else Object.assign(a.changedProps,r)},this.__instance=e._stampTemplate(this.__template,t),D(i).insertBefore(this.__instance,this)}__syncHostProperties(){const i=this.__syncInfo;i&&(this.__syncInfo=null,i.runEffects(i.changedProps,!1))}__teardownInstance(){const i=this.__dataHost||this;this.__instance&&(i._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const i=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==i&&(this.__instance.__hidden=i,wi(i,this.__instance.templateInfo.childNodes)),i||this.__syncHostProperties()}}class lo extends Ai{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(i){this.__ctor||(this.__ctor=vt(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[gi(e)]=!0))}})),this.__instance=new this.__ctor,D(i).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let i=this.__instance.children;if(i&&i.length){let e=D(i[0]).parentNode;if(e){e=D(e);for(let t=0,s;t<i.length&&(s=i[t]);t++)e.removeChild(s)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let i=this.__invalidProps;if(i){this.__invalidProps=null;for(let e in i)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const i=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==i&&(this.__instance.__hidden=i,this.__instance._showHideChildren(i)),i||this.__syncHostProperties()}}const Jt=Ls?ao:lo;customElements.define(Jt.is,Jt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=(o,i)=>{const e=o._$AN;if(e===void 0)return!1;for(const t of e)t._$AO?.(i,!1),ze(t,i);return!0},Ue=o=>{let i,e;do{if((i=o._$AM)===void 0)break;e=i._$AN,e.delete(o),o=i}while(e?.size===0)},Ei=o=>{for(let i;i=o._$AM;o=i){let e=i._$AN;if(e===void 0)i._$AN=e=new Set;else if(e.has(o))break;e.add(o),uo(i)}};function ho(o){this._$AN!==void 0?(Ue(this),this._$AM=o,Ei(this)):this._$AM=o}function co(o,i=!1,e=0){const t=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(i)if(Array.isArray(t))for(let r=e;r<t.length;r++)ze(t[r],!1),Ue(t[r]);else t!=null&&(ze(t,!1),Ue(t));else ze(this,o)}const uo=o=>{o.type==vi.CHILD&&(o._$AP??=co,o._$AQ??=ho)};class _o extends $s{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,e,t){super._$AT(i,e,t),Ei(this),this.isConnected=i._$AU}_$AO(i,e=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),e&&(ze(this,i),Ue(this))}setValue(i){if(Us(this.t))this.t._$AI(i,this);else{const e=[...this.t._$AH];e[this.i]=i,this.t._$AI(e,this,0)}}disconnected(){}reconnected(){}}class po extends _o{constructor(i){if(super(i),i.type!==vi.CHILD)throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`)}update(i,[e,t]){return this.updateContent(i,e,t),Ws}updateContent(i,e,t){const{parentNode:s,startNode:r}=i,n=t!=null,a=n?this.getNewNode(e,t):null,l=this.getOldNode(i);if(clearTimeout(this.__nodeRetryTimeout),n&&!a)this.__nodeRetryTimeout=setTimeout(()=>this.updateContent(i,e,t));else{if(l===a)return;l&&a?s.replaceChild(a,l):l?s.removeChild(l):a&&r.after(a)}}getNewNode(i,e){return window.Vaadin.Flow.clients[i].getByNodeId(e)}getOldNode(i){const{startNode:e,endNode:t}=i;if(e.nextSibling!==t)return e.nextSibling}disconnected(){clearTimeout(this.__nodeRetryTimeout)}}const Ii=Vs(po);function fo(o,i){return Ii(o,i)}function mo(o,i,e){bi(yi`${i.map(t=>Ii(o,t))}`,e)}function go(o){const i=o.insertBefore;o.insertBefore=function(e,t){return t&&t.parentNode===this?i.call(this,e,t):i.call(this,e,null)}}window.Vaadin||={};window.Vaadin.FlowComponentHost||={patchVirtualContainer:go,getNode:fo,setChildNodes:mo};class ei extends P{static get template(){return F`
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
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",function(i){this.firstChild&&typeof this.firstChild.click=="function"&&i.target===this&&(i.stopPropagation(),this.firstChild.click())}),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=K.debounce(this._debouncer,Ns,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(this.appid==null)return;if(this.nodeid==null){this.firstChild&&this.removeChild(this.firstChild);return}const i=this._getRenderedComponent();this.firstChild?i?this.firstChild!==i?(this.replaceChild(i,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():i?(this.appendChild(i),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(i){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(i)}return null}onComponentRendered(){}_defineFocusTarget(){var i=this._getFirstFocusableDescendant(this.firstChild);i!==null&&i.setAttribute("focus-target","true")}_getFirstFocusableDescendant(i){if(this._isFocusable(i))return i;if(i.hasAttribute&&(i.hasAttribute("disabled")||i.hasAttribute("hidden"))||!i.children)return null;for(var e=0;e<i.children.length;e++){var t=this._getFirstFocusableDescendant(i.children[e]);if(t!==null)return t}return null}_isFocusable(i){return i.hasAttribute&&typeof i.hasAttribute=="function"&&(i.hasAttribute("disabled")||i.hasAttribute("hidden"))?!1:i.tabIndex===0}_onAnimationEnd(i){i.animationName.indexOf("flow-component-renderer-appear")===0&&this._attachRenderedComponentIfAble()}}window.customElements.define(ei.is,ei);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function St(o,i){return o.split(".").reduce((e,t)=>e?e[t]:void 0,i)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Tt(o){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(o);return}o.querySelector("template")&&console.warn(`WARNING: <template> inside <${o.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function vo(o){const i=[];for(;o;){if(o.nodeType===Node.DOCUMENT_NODE){i.push(o);break}if(o.nodeType===Node.DOCUMENT_FRAGMENT_NODE){i.push(o),o=o.host;continue}if(o.assignedSlot){o=o.assignedSlot;continue}o=o.parentNode}return i}function Si(o){const i=[];let e;return o.localName==="slot"?e=o.assignedElements():(i.push(o),e=[...o.children]),e.forEach(t=>i.push(...Si(t))),i}function Ot(o,i){return i?i.closest(o)||Ot(o,i.getRootNode().host):null}function zt(o){return o?new Set(o.split(" ")):new Set}function Xe(o){return o?[...o].join(" "):""}function De(o,i,e){const t=zt(o.getAttribute(i));t.add(e),o.setAttribute(i,Xe(t))}function Ze(o,i,e){const t=zt(o.getAttribute(i));if(t.delete(e),t.size===0){o.removeAttribute(i);return}o.setAttribute(i,Xe(t))}function bo(o){return o.nodeType===Node.TEXT_NODE&&o.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function me(o){return o.__cells||Array.from(o.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function M(o,i){[...o.children].forEach(i)}function ge(o,i){me(o).forEach(i),o.__detailsCell&&i(o.__detailsCell)}function Ti(o,i,e){let t=1;o.forEach(s=>{t%10===0&&(t+=1),s._order=e+t*i,t+=1})}function Je(o,i,e){switch(typeof e){case"boolean":o.toggleAttribute(i,e);break;case"string":o.setAttribute(i,e);break;default:o.removeAttribute(i);break}}function te(o,i,e){i||i===""?De(o,"part",e):Ze(o,"part",e)}function Z(o,i,e){o.forEach(t=>{te(t,e,i)})}function ke(o,i){const e=me(o);Object.entries(i).forEach(([t,s])=>{Je(o,t,s);const r=`${t}-row`;te(o,s,r),Z(e,`${r}-cell`,s)})}function ti(o,i){const e=me(o);Object.entries(i).forEach(([t,s])=>{const r=o.getAttribute(t);if(Je(o,t,s),r){const n=`${t}-${r}-row`;te(o,!1,n),Z(e,`${n}-cell`,!1)}if(s){const n=`${t}-${s}-row`;te(o,s,n),Z(e,`${n}-cell`,s)}})}function ne(o,i,e,t,s){Je(o,i,e),s&&te(o,!1,s),te(o,e,t||`${i}-cell`)}class J{constructor(i,e){this.__host=i,this.__callback=e,this.__currentSlots=[],this.__onMutation=this.__onMutation.bind(this),this.__observer=new MutationObserver(this.__onMutation),this.__observer.observe(i,{childList:!0}),this.__initialCallDebouncer=I.debounce(this.__initialCallDebouncer,q,()=>this.__onMutation())}disconnect(){this.__observer.disconnect(),this.__initialCallDebouncer.cancel(),this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(i){this.__currentSlots.forEach(e=>{i?e.addEventListener("slotchange",this.__onMutation):e.removeEventListener("slotchange",this.__onMutation)})}__onMutation(){const i=!this.__currentColumns;this.__currentColumns||=[];const e=J.getColumns(this.__host),t=e.filter(a=>!this.__currentColumns.includes(a)),s=this.__currentColumns.filter(a=>!e.includes(a)),r=this.__currentColumns.some((a,l)=>a!==e[l]);this.__currentColumns=e,this.__toggleSlotChangeListeners(!1),this.__currentSlots=[...this.__host.children].filter(a=>a instanceof HTMLSlotElement),this.__toggleSlotChangeListeners(!0),(i||t.length||s.length||r)&&this.__callback(t,s)}static __isColumnElement(i){return i.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(i.localName)}static getColumns(i){const e=[],t=i._isColumnElement||J.__isColumnElement;return[...i.children].forEach(s=>{t(s)?e.push(s):s instanceof HTMLSlotElement&&[...s.assignedElements({flatten:!0})].filter(r=>t(r)).forEach(r=>e.push(r))}),e}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oi=o=>class extends o{static get properties(){return{resizable:{type:Boolean,sync:!0,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)",sync:!0},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)",sync:!0},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells)","_frozenChanged(frozen, _headerCell, _footerCell, _cells)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)","_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells)","_rowHeaderChanged(rowHeader, _cells)","__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),Tt(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(t=>{t.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(t=>{t.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(t=>{t.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(t=>{ne(t,"frozen",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||ne(t,"frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(t=>{ne(t,"last-frozen",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||ne(t,"first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_rowHeaderChanged(e,t){t&&t.forEach(s=>{s.setAttribute("role",e?"rowheader":"gridcell")})}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,t=>t.toUpperCase())}_reorderStatusChanged(e){const t=this.__previousReorderStatus,s=t?`reorder-${t}-cell`:"",r=`reorder-${e}-cell`;this._allCells.forEach(n=>{ne(n,"reorder-status",e,r,s)}),this.__previousReorderStatus=e}_resizableChanged(e,t){e===void 0||t===void 0||t&&[t].concat(this._emptyCells).forEach(s=>{if(s){const r=s.querySelector('[part~="resize-handle"]');if(r&&s.removeChild(r),e){const n=document.createElement("div");n.setAttribute("part","resize-handle"),s.appendChild(n)}}})}_textAlignChanged(e){if(e===void 0||this._grid===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let t;getComputedStyle(this._grid).direction==="ltr"?e==="start"?t="left":e==="end"&&(t="right"):e==="start"?t="right":e==="end"&&(t="left"),this._allCells.forEach(s=>{s._content.style.textAlign=e,getComputedStyle(s._content).textAlign!==e&&(s._content.style.textAlign=t)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)}),this._grid._debouncerHiddenChanged=I.debounce(this._grid._debouncerHiddenChanged,Y,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,t,s){const r=s&&s.item&&!t.parentElement.hidden;if(!(r||e===this._headerRenderer||e===this._footerRenderer))return;const a=[t._content,this];r&&a.push(s),e.apply(this,a)}__renderCellsContent(e,t){this.hidden||!this._grid||t.forEach(s=>{if(!s.parentElement)return;const r=this._grid.__getRowModel(s.parentElement);e&&(s._renderer!==e&&this._clearCellContent(s),s._renderer=e,this._runRenderer(e,s,r))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onHeaderRendererOrBindingChanged(e,t,...s){this._renderHeaderCellContent(e,t)}__headerFooterPartNameChanged(e,t,s,r){[{cell:e,partName:s},{cell:t,partName:r}].forEach(({cell:n,partName:a})=>{if(n){const l=n.__customParts||[];n.part.remove(...l),n.__customParts=a?a.trim().split(" "):[],n.part.add(...n.__customParts)}})}_renderBodyCellsContent(e,t){!t||!e||this.__renderCellsContent(e,t)}_onRendererOrBindingChanged(e,t,...s){this._renderBodyCellsContent(e,t)}_renderFooterCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onFooterRendererOrBindingChanged(e,t){this._renderFooterCellContent(e,t)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,t,{item:s}){this.path&&this.__setTextContent(e,St(this.path,s))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,t){return e||(t!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}},yo=o=>class extends Oi(ce(o)){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)",sync:!0},path:{type:String,sync:!0},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zi extends yo(P){static get is(){return"vaadin-grid-column"}}R(zi);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Co=!1,xo=o=>o,kt=typeof document.head.style.touchAction=="string",qe="__polymerGestures",rt="__polymerGesturesHandled",bt="__polymerGesturesTouchAction",ii=25,si=5,wo=2,Ao=["mousedown","mousemove","mouseup","click"],Eo=[0,1,4,2],Io=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Pt(o){return Ao.indexOf(o)>-1}let ki=!1;(function(){try{const o=Object.defineProperty({},"passive",{get(){ki=!0}});window.addEventListener("test",null,o),window.removeEventListener("test",null,o)}catch{}})();function Pi(o){if(!(Pt(o)||o==="touchend")&&kt&&ki&&Co)return{passive:!0}}const So=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),To={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function le(o){const i=o.type;if(!Pt(i))return!1;if(i==="mousemove"){let t=o.buttons===void 0?1:o.buttons;return o instanceof window.MouseEvent&&!Io&&(t=Eo[o.which]||0),!!(t&1)}return(o.button===void 0?0:o.button)===0}function Oo(o){if(o.type==="click"){if(o.detail===0)return!0;const i=ee(o);if(!i.nodeType||i.nodeType!==Node.ELEMENT_NODE)return!0;const e=i.getBoundingClientRect(),t=o.pageX,s=o.pageY;return!(t>=e.left&&t<=e.right&&s>=e.top&&s<=e.bottom)}return!1}const j={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function zo(o){let i="auto";const e=Di(o);for(let t=0,s;t<e.length;t++)if(s=e[t],s[bt]){i=s[bt];break}return i}function Ri(o,i,e){o.movefn=i,o.upfn=e,document.addEventListener("mousemove",i),document.addEventListener("mouseup",e)}function pe(o){document.removeEventListener("mousemove",o.movefn),document.removeEventListener("mouseup",o.upfn),o.movefn=null,o.upfn=null}const Di=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:o=>o.composedPath&&o.composedPath()||[],Q={},ae=[];function ko(o,i){let e=document.elementFromPoint(o,i),t=e;for(;t&&t.shadowRoot&&!window.ShadyDOM;){const s=t;if(t=t.shadowRoot.elementFromPoint(o,i),s===t)break;t&&(e=t)}return e}function ee(o){const i=Di(o);return i.length>0?i[0]:o.target}function Li(o){const i=o.type,t=o.currentTarget[qe];if(!t)return;const s=t[i];if(!s)return;if(!o[rt]&&(o[rt]={},i.startsWith("touch"))){const n=o.changedTouches[0];if(i==="touchstart"&&o.touches.length===1&&(j.touch.id=n.identifier),j.touch.id!==n.identifier)return;kt||(i==="touchstart"||i==="touchmove")&&Po(o)}const r=o[rt];if(!r.skip){for(let n=0,a;n<ae.length;n++)a=ae[n],s[a.name]&&!r[a.name]&&a.flow&&a.flow.start.indexOf(o.type)>-1&&a.reset&&a.reset();for(let n=0,a;n<ae.length;n++)a=ae[n],s[a.name]&&!r[a.name]&&(r[a.name]=!0,a[i](o))}}function Po(o){const i=o.changedTouches[0],e=o.type;if(e==="touchstart")j.touch.x=i.clientX,j.touch.y=i.clientY,j.touch.scrollDecided=!1;else if(e==="touchmove"){if(j.touch.scrollDecided)return;j.touch.scrollDecided=!0;const t=zo(o);let s=!1;const r=Math.abs(j.touch.x-i.clientX),n=Math.abs(j.touch.y-i.clientY);o.cancelable&&(t==="none"?s=!0:t==="pan-x"?s=n>r:t==="pan-y"&&(s=r>n)),s?o.preventDefault():ve("track")}}function de(o,i,e){return Q[i]?(Ro(o,i,e),!0):!1}function Fi(o,i,e){return Q[i]?(Do(o,i,e),!0):!1}function Ro(o,i,e){const t=Q[i],s=t.deps,r=t.name;let n=o[qe];n||(o[qe]=n={});for(let a=0,l,u;a<s.length;a++)l=s[a],!(So&&Pt(l)&&l!=="click")&&(u=n[l],u||(n[l]=u={_count:0}),u._count===0&&o.addEventListener(l,Li,Pi(l)),u[r]=(u[r]||0)+1,u._count=(u._count||0)+1);o.addEventListener(i,e),t.touchAction&&Fo(o,t.touchAction)}function Do(o,i,e){const t=Q[i],s=t.deps,r=t.name,n=o[qe];if(n)for(let a=0,l,u;a<s.length;a++)l=s[a],u=n[l],u&&u[r]&&(u[r]=(u[r]||1)-1,u._count=(u._count||1)-1,u._count===0&&o.removeEventListener(l,Li,Pi(l)));o.removeEventListener(i,e)}function et(o){ae.push(o),o.emits.forEach(i=>{Q[i]=o})}function Lo(o){for(let i=0,e;i<ae.length;i++){e=ae[i];for(let t=0,s;t<e.emits.length;t++)if(s=e.emits[t],s===o)return e}return null}function Fo(o,i){kt&&o instanceof HTMLElement&&q.run(()=>{o.style.touchAction=i}),o[bt]=i}function Rt(o,i,e){const t=new Event(i,{bubbles:!0,cancelable:!0,composed:!0});if(t.detail=e,xo(o).dispatchEvent(t),t.defaultPrevented){const s=e.preventer||e.sourceEvent;s&&s.preventDefault&&s.preventDefault()}}function ve(o){const i=Lo(o);i.info&&(i.info.prevent=!0)}et({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){pe(this.info)},mousedown(o){if(!le(o))return;const i=ee(o),e=this,t=r=>{le(r)||(xe("up",i,r),pe(e.info))},s=r=>{le(r)&&xe("up",i,r),pe(e.info)};Ri(this.info,t,s),xe("down",i,o)},touchstart(o){xe("down",ee(o),o.changedTouches[0],o)},touchend(o){xe("up",ee(o),o.changedTouches[0],o)}});function xe(o,i,e,t){i&&Rt(i,o,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t,prevent(s){return ve(s)}})}et({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(o){this.moves.length>wo&&this.moves.shift(),this.moves.push(o)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,pe(this.info)},mousedown(o){if(!le(o))return;const i=ee(o),e=this,t=r=>{const n=r.clientX,a=r.clientY;oi(e.info,n,a)&&(e.info.state=e.info.started?r.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&ve("tap"),e.info.addMove({x:n,y:a}),le(r)||(e.info.state="end",pe(e.info)),i&&nt(e.info,i,r),e.info.started=!0)},s=r=>{e.info.started&&t(r),pe(e.info)};Ri(this.info,t,s),this.info.x=o.clientX,this.info.y=o.clientY},touchstart(o){const i=o.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchmove(o){const i=ee(o),e=o.changedTouches[0],t=e.clientX,s=e.clientY;oi(this.info,t,s)&&(this.info.state==="start"&&ve("tap"),this.info.addMove({x:t,y:s}),nt(this.info,i,e),this.info.state="track",this.info.started=!0)},touchend(o){const i=ee(o),e=o.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),nt(this.info,i,e))}});function oi(o,i,e){if(o.prevent)return!1;if(o.started)return!0;const t=Math.abs(o.x-i),s=Math.abs(o.y-e);return t>=si||s>=si}function nt(o,i,e){if(!i)return;const t=o.moves[o.moves.length-2],s=o.moves[o.moves.length-1],r=s.x-o.x,n=s.y-o.y;let a,l=0;t&&(a=s.x-t.x,l=s.y-t.y),Rt(i,"track",{state:o.state,x:e.clientX,y:e.clientY,dx:r,dy:n,ddx:a,ddy:l,sourceEvent:e,hover(){return ko(e.clientX,e.clientY)}})}et({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(o){le(o)&&(this.info.x=o.clientX,this.info.y=o.clientY)},click(o){le(o)&&ri(this.info,o)},touchstart(o){const i=o.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchend(o){ri(this.info,o.changedTouches[0],o)}});function ri(o,i,e){const t=Math.abs(i.clientX-o.x),s=Math.abs(i.clientY-o.y),r=ee(e||i);!r||To[r.localName]&&r.hasAttribute("disabled")||(isNaN(t)||isNaN(s)||t<=ii&&s<=ii||Oo(i))&&(o.prevent||Rt(r,"tap",{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:e}))}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mo=o=>class extends o{static get properties(){return{width:{type:String,value:"58px",sync:!0},flexGrow:{type:Number,value:0,sync:!0},selectAll:{type:Boolean,value:!1,notify:!0,sync:!0},autoSelect:{type:Boolean,value:!1,sync:!0},dragSelect:{type:Boolean,value:!1,sync:!0},_indeterminate:{type:Boolean,sync:!0},_selectAllHidden:Boolean}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, _indeterminate, _selectAllHidden)"]}_defaultHeaderRenderer(e,t){let s=e.firstElementChild;s||(s=document.createElement("vaadin-checkbox"),s.setAttribute("aria-label","Select All"),s.classList.add("vaadin-grid-select-all-checkbox"),e.appendChild(s),s.addEventListener("checked-changed",this.__onSelectAllCheckedChanged.bind(this)));const r=this.__isChecked(this.selectAll,this._indeterminate);s.__rendererChecked=r,s.checked=r,s.hidden=this._selectAllHidden,s.indeterminate=this._indeterminate}_defaultRenderer(e,t,{item:s,selected:r}){let n=e.firstElementChild;n||(n=document.createElement("vaadin-checkbox"),n.setAttribute("aria-label","Select Row"),e.appendChild(n),n.addEventListener("checked-changed",this.__onSelectRowCheckedChanged.bind(this)),de(e,"track",this.__onCellTrack.bind(this)),e.addEventListener("mousedown",this.__onCellMouseDown.bind(this)),e.addEventListener("click",this.__onCellClick.bind(this))),n.__item=s,n.__rendererChecked=r,n.checked=r}__onSelectAllCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(this._indeterminate||e.target.checked?this._selectAll():this._deselectAll())}__onSelectRowCheckedChanged(e){e.target.checked!==e.target.__rendererChecked&&(e.target.checked?this._selectItem(e.target.__item):this._deselectItem(e.target.__item))}__onCellTrack(e){if(this.dragSelect)if(this.__dragCurrentY=e.detail.y,this.__dragDy=e.detail.dy,e.detail.state==="start"){const s=this._grid._getRenderedRows().find(r=>r.contains(e.currentTarget.assignedSlot));this.__selectOnDrag=!this._grid._isSelected(s._item),this.__dragStartIndex=s.index,this.__dragStartItem=s._item,this.__dragAutoScroller()}else e.detail.state==="end"&&(this.__dragStartItem&&(this.__selectOnDrag?this._selectItem(this.__dragStartItem):this._deselectItem(this.__dragStartItem)),setTimeout(()=>{this.__dragStartIndex=void 0}))}__onCellMouseDown(e){this.dragSelect&&e.preventDefault()}__onCellClick(e){this.__dragStartIndex!==void 0&&e.preventDefault()}_onCellKeyDown(e){const t=e.composedPath()[0];if(e.keyCode===32&&(t===this._headerCell||this._cells.includes(t)&&!this.autoSelect)){const s=t._content.firstElementChild;s.checked=!s.checked}}__dragAutoScroller(){if(this.__dragStartIndex===void 0)return;const e=this._grid._getRenderedRows(),t=e.find(l=>{const u=l.getBoundingClientRect();return this.__dragCurrentY>=u.top&&this.__dragCurrentY<=u.bottom});let s=t?t.index:void 0;const r=this.__getScrollableArea();this.__dragCurrentY<r.top?s=this._grid._firstVisibleIndex:this.__dragCurrentY>r.bottom&&(s=this._grid._lastVisibleIndex),s!==void 0&&e.forEach(l=>{(s>this.__dragStartIndex&&l.index>=this.__dragStartIndex&&l.index<=s||s<this.__dragStartIndex&&l.index<=this.__dragStartIndex&&l.index>=s)&&(this.__selectOnDrag?this._selectItem(l._item):this._deselectItem(l._item),this.__dragStartItem=void 0)});const n=r.height*.15,a=10;if(this.__dragDy<0&&this.__dragCurrentY<r.top+n){const l=r.top+n-this.__dragCurrentY,u=Math.min(1,l/n);this._grid.$.table.scrollTop-=u*a}if(this.__dragDy>0&&this.__dragCurrentY>r.bottom-n){const l=this.__dragCurrentY-(r.bottom-n),u=Math.min(1,l/n);this._grid.$.table.scrollTop+=u*a}setTimeout(()=>this.__dragAutoScroller(),10)}__getScrollableArea(){const e=this._grid.$.table.getBoundingClientRect(),t=this._grid.$.header.getBoundingClientRect(),s=this._grid.$.footer.getBoundingClientRect();return{top:e.top+t.height,bottom:e.bottom-s.height,left:e.left,right:e.right,height:e.height-t.height-s.height,width:e.width}}_selectAll(){}_deselectAll(){}_selectItem(e){}_deselectItem(e){}__isChecked(e,t){return t||e}};class yt extends Mo(zi){static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"}}}_defaultHeaderRenderer(i,e){super._defaultHeaderRenderer(i,e);const t=i.firstElementChild;t&&(t.id="selectAllCheckbox")}_selectAll(){this.selectAll=!0,this.$server.selectAll()}_deselectAll(){this.selectAll=!1,this.$server.deselectAll()}_selectItem(i){this._grid.$connector.doSelection([i],!0)}_deselectItem(i){this._grid.$connector.doDeselection([i],!0),this.selectAll=!1}}customElements.define(yt.is,yt);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oe=L(o=>typeof o.prototype.addController=="function"?o:class extends o{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dt=L(o=>class extends o{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tt=L(o=>class extends o{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mi=o=>class extends Dt(tt(o)){get _activeKeys(){return[" "]}ready(){super.ready(),de(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),de(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",t=>{this._activeKeys.includes(t.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Lt=!1;window.addEventListener("keydown",()=>{Lt=!0},{capture:!0});window.addEventListener("mousedown",()=>{Lt=!1},{capture:!0});function Ct(){let o=document.activeElement||document.body;for(;o.shadowRoot&&o.shadowRoot.activeElement;)o=o.shadowRoot.activeElement;return o}function Ft(){return Lt}function Ni(o){const i=o.style;if(i.visibility==="hidden"||i.display==="none")return!0;const e=window.getComputedStyle(o);return e.visibility==="hidden"||e.display==="none"}function No(o,i){const e=Math.max(o.tabIndex,0),t=Math.max(i.tabIndex,0);return e===0||t===0?t>e:e>t}function Bo(o,i){const e=[];for(;o.length>0&&i.length>0;)No(o[0],i[0])?e.push(i.shift()):e.push(o.shift());return e.concat(o,i)}function xt(o){const i=o.length;if(i<2)return o;const e=Math.ceil(i/2),t=xt(o.slice(0,e)),s=xt(o.slice(e));return Bo(t,s)}function he(o){return o.offsetParent===null&&o.clientWidth===0&&o.clientHeight===0?!0:Ni(o)}function Ho(o){return o.matches('[tabindex="-1"]')?!1:o.matches("input, select, textarea, button, object")?o.matches(":not([disabled])"):o.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function Bi(o){return o.getRootNode().activeElement===o}function $o(o){if(!Ho(o))return-1;const i=o.getAttribute("tabindex")||0;return Number(i)}function Hi(o,i){if(o.nodeType!==Node.ELEMENT_NODE||Ni(o))return!1;const e=o,t=$o(e);let s=t>0;t>=0&&i.push(e);let r=[];return e.localName==="slot"?r=e.assignedNodes({flatten:!0}):r=(e.shadowRoot||e).children,[...r].forEach(n=>{s=Hi(n,i)||s}),s}function Vo(o){const i=[];return Hi(o,i)?xt(i):i}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $i=L(o=>class extends o{get _keyboardActive(){return Ft()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vi=o=>class extends Dt(o){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,t){super._disabledChanged(e,t),e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):t&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wi=L(o=>class extends $i(Vi(o)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,t){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):t&&this._removeFocusListeners(t)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,t){super._disabledChanged(e,t),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gi=L(o=>class extends o{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((t,s)=>{this._delegateAttribute(t,e[s])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((t,s)=>{this._delegateProperty(t,e[s])})}_delegateAttribute(e,t){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",t?"true":!1),typeof t=="boolean"?this.stateTarget.toggleAttribute(e,t):t?this.stateTarget.setAttribute(e,t):this.stateTarget.removeAttribute(e))}_delegateProperty(e,t){this.stateTarget&&(this.stateTarget[e]=t)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mt=L(o=>class extends o{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=e??"")}_inputElementChanged(e,t){e?this._addInputListeners(e):t&&this._removeInputListeners(t)}_hasInputValueChanged(e,t){(e||t)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const t=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=t.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,t){this._toggleHasValue(this._hasValue),!(e===""&&t===void 0)&&(this.__userInput||this._forwardInputValue(e))}_setHasInputValue(e){const t=e.composedPath()[0];this._hasInputValue=t.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wo=L(o=>class extends Gi(Dt(Mt(o))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const t=e.target;this._toggleChecked(t.checked)}_toggleChecked(e){this.checked=e}});/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ui{constructor(i,e){this.slot=i,this.callback=e,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const i=this.slot.assignedNodes({flatten:!0});let e=[];const t=[],s=[];i.length&&(e=i.filter(r=>!this._storedNodes.includes(r))),this._storedNodes.length&&this._storedNodes.forEach((r,n)=>{const a=i.indexOf(r);a===-1?t.push(r):a!==n&&s.push(r)}),(e.length||t.length||s.length)&&this.callback({addedNodes:e,movedNodes:s,removedNodes:t}),this._storedNodes=i}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Go=0;function qi(){return Go++}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Le extends EventTarget{static generateId(i,e){return`${e||"default"}-${i.localName}-${qi()}`}constructor(i,e,t,s={}){super();const{initializer:r,multiple:n,observe:a,useUniqueId:l}=s;this.host=i,this.slotName=e,this.tagName=t,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof n=="boolean"?n:!1,this.slotInitializer=r,n&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(i,e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let i=this.getSlotChild();i?(this.node=i,this.initAddedNode(i)):(i=this.attachDefaultNode(),this.initNode(i))}initMultiple(){const i=this.getSlotChildren();if(i.length===0){const e=this.attachDefaultNode();e&&(this.nodes=[e],this.initNode(e))}else this.nodes=i,i.forEach(e=>{this.initAddedNode(e)})}attachDefaultNode(){const{host:i,slotName:e,tagName:t}=this;let s=this.defaultNode;return!s&&t&&(s=document.createElement(t),s instanceof Element&&(e!==""&&s.setAttribute("slot",e),this.node=s,this.defaultNode=s)),s&&i.appendChild(s),s}getSlotChildren(){const{slotName:i}=this;return Array.from(this.host.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===i||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&i==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(i){const{slotInitializer:e}=this;e&&e(i,this.host)}initCustomNode(i){}teardownNode(i){}initAddedNode(i){i!==this.defaultNode&&(this.initCustomNode(i),this.initNode(i))}observeSlot(){const{slotName:i}=this,e=i===""?"slot:not([name])":`slot[name=${i}]`,t=this.host.shadowRoot.querySelector(e);this.__slotObserver=new Ui(t,({addedNodes:s,removedNodes:r})=>{const n=this.multiple?this.nodes:[this.node],a=s.filter(l=>!bo(l)&&!n.includes(l));r.length&&(this.nodes=n.filter(l=>!r.includes(l)),r.forEach(l=>{this.teardownNode(l)})),a&&a.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...n,...a].filter(l=>l!==this.defaultNode),a.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Uo extends Le{constructor(i,e){super(i,"input","input",{initializer:(t,s)=>{s.value&&(t.value=s.value),s.type&&t.setAttribute("type",s.type),t.id=this.defaultId,typeof e=="function"&&e(t)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Nt extends Le{constructor(i,e,t,s={}){super(i,e,t,{...s,useUniqueId:!0})}initCustomNode(i){this.__updateNodeId(i),this.__notifyChange(i)}teardownNode(i){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const i=super.attachDefaultNode();return i&&this.__updateNodeId(i),i}restoreDefaultNode(){}updateDefaultNode(i){this.__notifyChange(i)}observeNode(i){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(e=>{e.forEach(t=>{const s=t.target,r=s===this.node;t.type==="attributes"?r&&this.__updateNodeId(s):(r||s.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(i,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(i){return i?i.nodeType===Node.ELEMENT_NODE&&(customElements.get(i.localName)||i.children.length>0)||i.textContent&&i.textContent.trim()!=="":!1}__notifyChange(i){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(i),node:i}}))}__updateNodeId(i){const e=!this.nodes||i===this.nodes[0];i.nodeType===Node.ELEMENT_NODE&&(!this.multiple||e)&&!i.id&&(i.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qo extends Nt{constructor(i){super(i,"label","label")}setLabel(i){this.label=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:i}=this;if(i&&i.trim()!==""){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(i){i&&(i.textContent=this.label),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ji=L(o=>class extends oe(o){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new qo(this),this._labelController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-label",e.detail.hasContent)})}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ki{constructor(i,e){this.input=i,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",t=>{this.__initLabel(t.detail.node)}),this.__initLabel(e.node)}__initLabel(i){i&&(i.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&i.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const i=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",i)};this.input.addEventListener("click",i)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jo=y`
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
 */const Yi=y`
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
`;A("",Yi,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bt extends Le{constructor(i){super(i,"tooltip"),this.setTarget(i)}initCustomNode(i){i.target=this.target,this.ariaTarget!==void 0&&(i.ariaTarget=this.ariaTarget),this.context!==void 0&&(i.context=this.context),this.manual!==void 0&&(i.manual=this.manual),this.opened!==void 0&&(i.opened=this.opened),this.position!==void 0&&(i._position=this.position),this.shouldShow!==void 0&&(i.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(i){this.ariaTarget=i;const e=this.node;e&&(e.ariaTarget=i)}setContext(i){this.context=i;const e=this.node;e&&(e.context=i)}setManual(i){this.manual=i;const e=this.node;e&&(e.manual=i)}setOpened(i){this.opened=i;const e=this.node;e&&(e.opened=i)}setPosition(i){this.position=i;const e=this.node;e&&(e._position=i)}setShouldShow(i){this.shouldShow=i;const e=this.node;e&&(e.shouldShow=i)}setTarget(i){this.target=i;const e=this.node;e&&(e.target=i)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const at=new Map;function Ht(o){return at.has(o)||at.set(o,new WeakMap),at.get(o)}function Qi(o,i){o&&o.removeAttribute(i)}function Xi(o,i){if(!o||!i)return;const e=Ht(i);if(e.has(o))return;const t=zt(o.getAttribute(i));e.set(o,new Set(t))}function Ko(o,i){if(!o||!i)return;const e=Ht(i),t=e.get(o);!t||t.size===0?o.removeAttribute(i):De(o,i,Xe(t)),e.delete(o)}function lt(o,i,e={newId:null,oldId:null,fromUser:!1}){if(!o||!i)return;const{newId:t,oldId:s,fromUser:r}=e,n=Ht(i),a=n.get(o);if(!r&&a){s&&a.delete(s),t&&a.add(t);return}r&&(a?t||n.delete(o):Xi(o,i),Qi(o,i)),Ze(o,i,s);const l=t||Xe(a);l&&De(o,i,l)}function Yo(o,i){Xi(o,i),Qi(o,i)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qo{constructor(i){this.host=i,this.__required=!1}setTarget(i){this.__target=i,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(i){this.__setAriaRequiredAttribute(i),this.__required=i}setAriaLabel(i){this.__setAriaLabelToAttribute(i),this.__label=i}setLabelId(i,e=!1){const t=e?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(i,t,e),e?this.__labelIdFromUser=i:this.__labelId=i}setErrorId(i){this.__setErrorIdToAriaAttribute(i,this.__errorId),this.__errorId=i}setHelperId(i){this.__setHelperIdToAriaAttribute(i,this.__helperId),this.__helperId=i}__setAriaLabelToAttribute(i){this.__target&&(i?(Yo(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",i)):this.__label&&(Ko(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(i,e,t){lt(this.__target,"aria-labelledby",{newId:i,oldId:e,fromUser:t})}__setErrorIdToAriaAttribute(i,e){lt(this.__target,"aria-describedby",{newId:i,oldId:e,fromUser:!1})}__setHelperIdToAriaAttribute(i,e){lt(this.__target,"aria-describedby",{newId:i,oldId:e,fromUser:!1})}__setAriaRequiredAttribute(i){this.__target&&(["input","textarea"].includes(this.__target.localName)||(i?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xo extends Nt{constructor(i){super(i,"error-message","div")}setErrorMessage(i){this.errorMessage=i,this.updateDefaultNode(this.node)}setInvalid(i){this.invalid=i,this.updateDefaultNode(this.node)}initAddedNode(i){i!==this.defaultNode&&this.initCustomNode(i)}initNode(i){this.updateDefaultNode(i)}initCustomNode(i){i.textContent&&!this.errorMessage&&(this.errorMessage=i.textContent.trim()),super.initCustomNode(i)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(i){const{errorMessage:e,invalid:t}=this,s=!!(t&&e&&e.trim()!=="");i&&(i.textContent=s?e:"",i.hidden=!s,s?i.setAttribute("role","alert"):i.removeAttribute("role")),super.updateDefaultNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zo extends Nt{constructor(i){super(i,"helper",null)}setHelperText(i){this.helperText=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:i}=this;if(i&&i.trim()!==""){this.tagName="div";const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(i){i&&(i.textContent=this.helperText),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zi=L(o=>class extends o{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jo=o=>class extends Zi(ji(oe(o))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new Qo(this),this._helperController=new Zo(this),this._errorController=new Xo(this),this._errorController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",e=>{const{hasContent:t,node:s}=e.detail;this.__labelChanged(t,s)}),this._helperController.addEventListener("slot-content-changed",e=>{const{hasContent:t,node:s}=e.detail;this.toggleAttribute("has-helper",t),this.__helperChanged(t,s)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,t){e?this._fieldAriaController.setHelperId(t.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(e){this._fieldAriaController.setAriaLabel(e)}_accessibleNameRefChanged(e){this._fieldAriaController.setLabelId(e,!0)}__labelChanged(e,t){e?this._fieldAriaController.setLabelId(t.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{if(e){const t=this._errorNode;this._fieldAriaController.setErrorId(t&&t.id)}else this._fieldAriaController.setErrorId(null)})}};A("vaadin-app-layout",y`
    [part='navbar'],
    [part='drawer'] {
      background-color: var(--lumo-base-color);
      background-clip: padding-box;
    }

    [part='navbar'] {
      min-height: var(--lumo-size-xl);
      border-bottom: 1px solid var(--lumo-contrast-10pct);
    }

    [part='navbar'][bottom] {
      border-bottom: none;
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    [part='drawer'] {
      border-inline-end: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer'] {
      border-inline-end: none;
      box-shadow: var(--lumo-box-shadow-s);
    }

    :host([primary-section='navbar']) [part='navbar'] {
      border: none;
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host([primary-section='drawer']:not([overlay])) [part='drawer'] {
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }
  `,{moduleId:"lumo-app-layout"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const it=o=>o.test(navigator.userAgent),wt=o=>o.test(navigator.platform),er=o=>o.test(navigator.vendor),ni=it(/Android/u),tr=it(/Chrome/u)&&er(/Google Inc/u),ir=it(/Firefox/u),sr=wt(/^iPad/u)||wt(/^Mac/u)&&navigator.maxTouchPoints>1,or=wt(/^iPhone/u),Re=or||sr,Ji=it(/^((?!chrome|android).)*safari/iu),Fe=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function es(){if(Re){const o=window.innerHeight,e=window.innerWidth>o,t=document.documentElement.clientHeight;e&&t>o?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${t-o}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}es();window.addEventListener("resize",es);const ts=document.createElement("template");ts.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(ts.content);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let je=!1,is=[],ss=[];function os(){je=!0,requestAnimationFrame(function(){je=!1,rr(is),setTimeout(function(){nr(ss)})})}function rr(o){for(;o.length;)rs(o.shift())}function nr(o){for(let i=0,e=o.length;i<e;i++)rs(o.shift())}function rs(o){const i=o[0],e=o[1],t=o[2];try{e.apply(i,t)}catch(s){setTimeout(()=>{throw s})}}function ar(o,i,e){je||os(),is.push([o,i,e])}function ns(o,i,e){je||os(),ss.push([o,i,e])}/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let ue=new WeakMap,He=new WeakMap,$e={},dt=0;const ai=o=>o&&o.nodeType===Node.ELEMENT_NODE,ht=(...o)=>{console.error(`Error: ${o.join(" ")}. Skip setting aria-hidden.`)},lr=(o,i)=>ai(o)?i.map(e=>{if(!ai(e))return ht(e,"is not a valid element"),null;let t=e;for(;t&&t!==o;){if(o.contains(t))return e;t=t.getRootNode().host}return ht(e,"is not contained inside",o),null}).filter(e=>!!e):(ht(o,"is not a valid element"),[]),dr=(o,i,e,t)=>{const s=lr(i,Array.isArray(o)?o:[o]);$e[e]||($e[e]=new WeakMap);const r=$e[e],n=[],a=new Set,l=new Set(s),u=f=>{if(!f||a.has(f))return;a.add(f);const g=f.assignedSlot;g&&u(g),u(f.parentNode||f.host)};s.forEach(u);const p=f=>{if(!f||l.has(f))return;const g=f.shadowRoot;(g?[...f.children,...g.children]:[...f.children]).forEach(w=>{if(!["template","script","style"].includes(w.localName))if(a.has(w))p(w);else{const O=w.getAttribute(t),x=O!==null&&O!=="false",N=(ue.get(w)||0)+1,B=(r.get(w)||0)+1;ue.set(w,N),r.set(w,B),n.push(w),N===1&&x&&He.set(w,!0),B===1&&w.setAttribute(e,"true"),x||w.setAttribute(t,"true")}})};return p(i),a.clear(),dt+=1,()=>{n.forEach(f=>{const g=ue.get(f)-1,C=r.get(f)-1;ue.set(f,g),r.set(f,C),g||(He.has(f)?He.delete(f):f.removeAttribute(t)),C||f.removeAttribute(e)}),dt-=1,dt||(ue=new WeakMap,ue=new WeakMap,He=new WeakMap,$e={})}},hr=(o,i=document.body,e="data-aria-hidden")=>{const t=Array.from(Array.isArray(o)?o:[o]);return i&&t.push(...Array.from(i.querySelectorAll("[aria-live]"))),dr(t,i,e,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class as{constructor(i,e){this.host=i,this.callback=typeof e=="function"?e:()=>i}showModal(){const i=this.callback();this.__showOthers=hr(i)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ct=[];class ls{constructor(i){this.host=i,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return Vo(this.__trapNode)}get __focusedElementIndex(){const i=this.__focusableElements;return i.indexOf(i.filter(Bi).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(i){if(this.__trapNode=i,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");ct.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,ct.pop()}__onKeyDown(i){if(this.__trapNode&&this===Array.from(ct).pop()&&i.key==="Tab"){i.preventDefault();const e=i.shiftKey;this.__focusNextElement(e)}}__focusNextElement(i=!1){const e=this.__focusableElements,t=i?-1:1,s=this.__focusedElementIndex,r=(e.length+s+t)%e.length,n=e[r];n.focus(),n.localName==="input"&&n.select()}}/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cr extends ie(H(oe(P))){static get template(){return F`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --_vaadin-app-layout-drawer-width: var(--vaadin-app-layout-drawer-width, 16em);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-block: var(--vaadin-app-layout-navbar-offset-top) var(--vaadin-app-layout-navbar-offset-bottom);
          padding-inline-start: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'] {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          inset-inline: 0;
          transition: inset-inline-start var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host([primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          inset-inline-start: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          inset-inline: var(--vaadin-app-layout-navbar-offset-left, 0) auto;
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: var(--_vaadin-app-layout-drawer-width);
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
          display: flex;
          flex-direction: column;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          inset: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          transform: translateX(100%);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host([drawer-opened]:not([overlay])) {
          padding-inline-start: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
            --_vaadin-app-layout-drawer-width: var(--vaadin-app-layout-drawer-width, 20em);
          }
        }

        /* If a vaadin-scroller is used in the drawer, allow it to take all remaining space and contain scrolling */
        [part='drawer'] ::slotted(vaadin-scroller) {
          flex: 1;
          overscroll-behavior: contain;
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar" on-slotchange="_updateTouchOptimizedMode"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer">
        <slot name="drawer" id="drawerSlot" on-slotchange="_updateDrawerSize"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden>
        <slot id="touchSlot" name="navbar touch-optimized" on-slotchange="_updateTouchOptimizedMode"></slot>
      </div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__onDrawerKeyDown=this.__onDrawerKeyDown.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__ariaModalController=new as(this,()=>[...this.querySelectorAll('vaadin-drawer-toggle, [slot="drawer"]')]),this.__focusTrapController=new ls(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),ar(this,this._afterFirstRender),this._updateTouchOptimizedMode(),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{requestAnimationFrame(()=>{this.__isDrawerAnimating?this.__updateOffsetSizePending=!0:this._updateOffsetSize()})}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener),window.addEventListener("keydown",this.__onDrawerKeyDown)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded(),this.$.drawer.addEventListener("transitionstart",()=>{this.__isDrawerAnimating=!0}),this.$.drawer.addEventListener("transitionend",()=>{this.__updateOffsetSizePending&&(this.__updateOffsetSizePending=!1,this._updateOffsetSize()),requestAnimationFrame(()=>{this.__isDrawerAnimating=!1})})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener),window.removeEventListener("keydown",this.__onDrawerKeyDown)}__primarySectionChanged(i){["navbar","drawer"].includes(i)||this.set("primarySection","navbar")}__drawerOpenedChanged(i,e){this.overlay&&(i?this.__trapFocusInDrawer():e&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(i){i.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const i=this.querySelector("vaadin-drawer-toggle");i&&i.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const i=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;i===0?(e.setAttribute("hidden",""),this.style.setProperty("--_vaadin-app-layout-drawer-width",0)):(e.removeAttribute("hidden"),this.style.removeProperty("--_vaadin-app-layout-drawer-width")),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const e=this.$.navbarTop.getBoundingClientRect(),s=this.$.navbarBottom.getBoundingClientRect(),n=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${e.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${s.height}px`),this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${n.width}px`)}_updateOverlayMode(){const i=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&i&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(i),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const i=this.$.drawer;this.overlay?(i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label",this.i18n.drawer)):(i.removeAttribute("role"),i.removeAttribute("aria-modal"),i.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(i=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){i();return}this.$.drawer.addEventListener("transitionend",i,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__ariaModalController.close(),this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const i=this.querySelector("vaadin-drawer-toggle");i&&(i.focus(),i.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(i){i.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(i,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),i&&window.addEventListener(i,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(i){i.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(i){return(getComputedStyle(this).getPropertyValue(i)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const i=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(t=>{t.getAttribute("slot").indexOf("touch-optimized")>-1&&(t.__touchOptimized=!0),i&&t.__touchOptimized?t.setAttribute("slot","navbar-bottom"):t.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),this.$.navbarBottom.querySelector("[name=navbar-bottom]").assignedNodes().length===0?this.$.navbarBottom.setAttribute("hidden",""):this.$.navbarBottom.removeAttribute("hidden"),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),ns(this,()=>{this.removeAttribute("no-anim")})}}R(cr);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $t=y`
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
`;A("",$t,{moduleId:"lumo-overlay"});const ur=y`
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
`;A("vaadin-tooltip-overlay",[$t,ur],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ds=y`
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
 */class _r{saveFocus(i){this.focusNode=i||Ct()}restoreFocus(){const i=this.focusNode;i&&(Ct()===document.body?setTimeout(()=>i.focus()):i.focus(),this.focusNode=null)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hs=o=>class extends oe(o){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new as(this),this.__focusTrapController=new ls(this),this.__focusRestorationController=new _r}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()&&this.__focusRestorationController.restoreFocus()}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const e=Ct();return e===document.body||this._deepContains(e)}_deepContains(e){if(this.contains(e))return!0;let t=e;const s=e.ownerDocument;for(;t&&t!==s&&t!==this;)t=t.parentNode||t.host;return t===this}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ge=()=>Array.from(document.body.children).filter(o=>o instanceof HTMLElement&&o._hasOverlayStackMixin&&!o.hasAttribute("closing")).sort((o,i)=>o.__zIndex-i.__zIndex||0),pr=o=>o===Ge().pop(),fr=o=>class extends o{constructor(){super(),this._hasOverlayStackMixin=!0}get _last(){return pr(this)}bringToFront(){let e="";const t=Ge().filter(s=>s!==this).pop();t&&(e=t.__zIndex+1),this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),Ge().forEach(e=>{e!==this&&(e.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=Ge();let t;for(;(t=e.pop())&&!(t!==this&&(t.$.overlay.style.removeProperty("pointer-events"),!t.modeless)););}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cs=o=>class extends hs(fr(o)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:{type:Object},model:{type:Object},renderer:{type:Object},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),Re&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}close(e){const t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,s=window.innerWidth>e,r=document.documentElement.clientHeight;s&&r>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${r-e}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_rendererOrDataChanged(e,t,s,r){const n=this._oldOwner!==t||this._oldModel!==s;this._oldModel=s,this._oldOwner=t;const a=this._oldRenderer!==e,l=this._oldRenderer!==void 0;this._oldRenderer=e;const u=this._oldOpened!==r;this._oldOpened=r,a&&l&&(this.innerHTML="",delete this._$litPart$),r&&e&&(a||u||n)&&this.requestContentUpdate()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_openedChanged(e,t){e?(this._saveFocus(),this._animatedOpening(),ns(this,()=>{this._trapFocus();const s=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(s)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):t&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this),t=e.getPropertyValue("animation-name");return!(e.getPropertyValue("display")==="none")&&t&&t!=="none"}_enqueueAnimation(e,t){const s=`__${e}Handler`,r=n=>{n&&n.target!==this||(t(),this.removeEventListener("animationend",r),delete this[s])};this[s]=r,this.addEventListener("animationend",r)}_flushAnimation(e){const t=`__${e}Handler`;typeof this[t]=="function"&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(e){return this._last}_outsideClickListener(e){if(e.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(e))return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last&&!(this.modeless&&!e.composedPath().includes(this.$.overlay))&&e.key==="Escape"){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ut={start:"top",end:"bottom"},_t={start:"left",end:"right"},li=new ResizeObserver(o=>{setTimeout(()=>{o.forEach(i=>{i.target.__overlay&&i.target.__overlay._updatePosition()})})}),us=o=>class extends o{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.visualViewport.addEventListener("resize",this._updatePosition),window.visualViewport.addEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes=vo(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.visualViewport.removeEventListener("resize",this._updatePosition),window.visualViewport.removeEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,t){if(this.__removeUpdatePositionEventListeners(),t&&(t.__overlay=null,li.unobserve(t),e&&(this.__addUpdatePositionEventListeners(),t.__overlay=this,li.observe(t))),e){const s=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(r=>{this.__margins[r]=parseInt(s[r],10)})),this.setAttribute("dir",s.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){e.target instanceof Node&&this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),t=this.__shouldAlignStartVertically(e);this.style.justifyContent=t?"flex-start":"flex-end";const s=this.__isRTL,r=this.__shouldAlignStartHorizontally(e,s),n=!s&&r||s&&!r;this.style.alignItems=n?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,a,this.noVerticalOverlap,ut,this,t),u=this.__calculatePositionInOneDimension(e,a,this.noHorizontalOverlap,_t,this,r);Object.assign(this.style,l,u),this.toggleAttribute("bottom-aligned",!t),this.toggleAttribute("top-aligned",t),this.toggleAttribute("end-aligned",!n),this.toggleAttribute("start-aligned",n)}__shouldAlignStartHorizontally(e,t){const s=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const r=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!t&&this.horizontalAlign==="start"||t&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,s,r,this.__margins,n,this.noHorizontalOverlap,_t)}__shouldAlignStartVertically(e){const t=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const s=Math.min(window.innerHeight,document.documentElement.clientHeight),r=this.verticalAlign==="top";return this.__shouldAlignStart(e,t,s,this.__margins,r,this.noVerticalOverlap,ut)}__shouldAlignStart(e,t,s,r,n,a,l){const u=s-e[a?l.end:l.start]-r[l.end],p=e[a?l.start:l.end]-r[l.start],f=n?u:p,C=f>(n?p:u)||f>t;return n===C}__adjustBottomProperty(e,t,s){let r;if(e===t.end){if(t.end===ut.end){const n=Math.min(window.innerHeight,document.documentElement.clientHeight);if(s>n&&this.__oldViewportHeight){const a=this.__oldViewportHeight-n;r=s-a}this.__oldViewportHeight=n}if(t.end===_t.end){const n=Math.min(window.innerWidth,document.documentElement.clientWidth);if(s>n&&this.__oldViewportWidth){const a=this.__oldViewportWidth-n;r=s-a}this.__oldViewportWidth=n}}return r}__calculatePositionInOneDimension(e,t,s,r,n,a){const l=a?r.start:r.end,u=a?r.end:r.start,p=parseFloat(n.style[l]||getComputedStyle(n)[l]),f=this.__adjustBottomProperty(l,r,p),g=t[a?r.start:r.end]-e[s===a?r.end:r.start],C=f?`${f}px`:`${p+g*(a?-1:1)}px`;return{[l]:C,[u]:""}}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mr=o=>class extends us(cs(o)){static get properties(){return{position:{type:String,reflectToAttribute:!0}}}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const e=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(t=>{this.style.setProperty(`--vaadin-tooltip-offset-${t}`,e.getPropertyValue(`--vaadin-tooltip-offset-${t}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),s=e.width/2-t.width/2;if(this.style.left){const r=t.left+s;r>0&&(this.style.left=`${r}px`)}if(this.style.right){const r=parseFloat(this.style.right)+s;r>0&&(this.style.right=`${r}px`)}}if(this.position==="start"||this.position==="end"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),s=e.height/2-t.height/2;this.style.top=`${t.top+s}px`}}}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gr=y`
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
 */A("vaadin-tooltip-overlay",[ds,gr],{moduleId:"vaadin-tooltip-overlay-styles"});class vr extends mr(ce(H(P))){static get is(){return"vaadin-tooltip-overlay"}static get template(){return F`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}}R(vr);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _s=o=>class extends o{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(e,t){if(!t||e===void 0)return;const{classList:s}=t;if(this.__initialClasses||(this.__initialClasses=new Set(s)),Array.isArray(this.__previousClasses)){const n=this.__previousClasses.filter(a=>!this.__initialClasses.has(a));n.length>0&&s.remove(...n)}const r=typeof e=="string"?e.split(" ").filter(Boolean):[];r.length>0&&s.add(...r),this.__previousClasses=r}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fe=500;let ps=fe,fs=fe,ms=fe;const we=new Set;let Ae=!1,Ee=null,Ie=null;class br{constructor(i){this.host=i}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const i=this.host;return i.focusDelay!=null&&i.focusDelay>0?i.focusDelay:ps}get hoverDelay(){const i=this.host;return i.hoverDelay!=null&&i.hoverDelay>0?i.hoverDelay:fs}get hideDelay(){const i=this.host;return i.hideDelay!=null&&i.hideDelay>0?i.hideDelay:ms}get isClosing(){return we.has(this.host)}open(i={immediate:!1}){const{immediate:e,hover:t,focus:s}=i,r=t&&this.hoverDelay>0,n=s&&this.focusDelay>0;!e&&(r||n)&&!this.__closeTimeout?this.__warmupTooltip(n):this.__showTooltip()}close(i){!i&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),Ae&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(i){this.host[this.openedProp]=i}__flushClosingTooltips(){we.forEach(i=>{i._stateController.close(!0),we.delete(i)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),Ae=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(i){this._isOpened()||(Ae?this.__showTooltip():this.__scheduleWarmUp(i))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){Ie&&(clearTimeout(Ie),Ie=null)}__abortWarmUp(){Ee&&(clearTimeout(Ee),Ee=null)}__scheduleClose(){this._isOpened()&&(we.add(this.host),this.__closeTimeout=setTimeout(()=>{we.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){Ie=setTimeout(()=>{Ie=null,Ae=!1},this.hideDelay)}__scheduleWarmUp(i){const e=i?this.focusDelay:this.hoverDelay;Ee=setTimeout(()=>{Ee=null,Ae=!0,this.__showTooltip()},e)}}const yr=o=>class extends _s(o){static get properties(){return{ariaTarget:{type:Object},context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},generator:{type:Object},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1,sync:!0},opened:{type:Boolean,value:!1,sync:!0},position:{type:String},shouldShow:{type:Object,value:()=>(e,t)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged",sync:!0},_effectiveAriaTarget:{type:Object,computed:"__computeAriaTarget(ariaTarget, target)",observer:"__effectiveAriaTargetChanged"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean,sync:!0},_position:{type:String,value:"bottom"},_srLabel:{type:Object},_overlayContent:{type:String}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)","__updateSrLabelText(_srLabel, _overlayContent)"]}static setDefaultFocusDelay(e){ps=e!=null&&e>=0?e:fe}static setDefaultHideDelay(e){ms=e!=null&&e>=0?e:fe}static setDefaultHoverDelay(e){fs=e!=null&&e>=0?e:fe}constructor(){super(),this._uniqueId=`vaadin-tooltip-${qi()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(e=>{e.forEach(t=>this.__onTargetVisibilityChange(t.isIntersecting))},{threshold:0}),this._stateController=new br(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}ready(){super.ready(),this._srLabelController=new Le(this,"sr-label","div",{initializer:e=>{e.id=this._uniqueId,e.setAttribute("role","tooltip"),this._srLabel=e}}),this.addController(this._srLabelController)}__computeHorizontalAlign(e){return["top-end","bottom-end","start-top","start","start-bottom"].includes(e)?"end":"start"}__computeNoHorizontalOverlap(e){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(e)}__computeNoVerticalOverlap(e){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(e)}__computeVerticalAlign(e){return["top-start","top-end","top","start-bottom","end-bottom"].includes(e)?"bottom":"top"}__computeOpened(e,t,s,r){return r&&(e?t:s)}__computePosition(e,t){return e||t}__autoOpenedChanged(e,t){e?document.addEventListener("keydown",this.__onKeyDown,!0):t&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(e){e&&(this.__setTargetByIdDebouncer=I.debounce(this.__setTargetByIdDebouncer,q,()=>this.__setTargetById(e)))}__setTargetById(e){if(!this.isConnected)return;const t=this.getRootNode().getElementById(e);t?this.target=t:console.warn(`No element with id="${e}" found to show tooltip.`)}__targetChanged(e,t){t&&(t.removeEventListener("mouseenter",this.__onMouseEnter),t.removeEventListener("mouseleave",this.__onMouseLeave),t.removeEventListener("focusin",this.__onFocusin),t.removeEventListener("focusout",this.__onFocusout),t.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(t)),e&&(e.addEventListener("mouseenter",this.__onMouseEnter),e.addEventListener("mouseleave",this.__onMouseLeave),e.addEventListener("focusin",this.__onFocusin),e.addEventListener("focusout",this.__onFocusout),e.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(e)}))}__onFocusin(e){this.manual||Ft()&&(this.target.contains(e.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(e){this.manual||this.target.contains(e.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(e){e.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseEnter(){this._stateController.isClosing&&this._stateController.open({immediate:!0})}__onOverlayMouseLeave(e){e.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(e){const t=this.__isTargetHidden;if(this.__isTargetHidden=!e,t&&e&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!e&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(e,t){this._overlayElement&&(e||t)&&this._overlayElement.requestContentUpdate()}__tooltipRenderer(e){e.textContent=typeof this.generator=="function"?this.generator(this.context):this.text,this._overlayContent=e.textContent}__computeAriaTarget(e,t){const s=n=>n&&n.nodeType===Node.ELEMENT_NODE;return(Array.isArray(e)?e.some(s):e)?e:t}__effectiveAriaTargetChanged(e,t){t&&[t].flat().forEach(s=>{Ze(s,"aria-describedby",this._uniqueId)}),e&&[e].flat().forEach(s=>{De(s,"aria-describedby",this._uniqueId)})}__generatorChanged(e,t,s){e&&((t!==this.__oldTextGenerator||s!==this.__oldContext)&&e.requestContentUpdate(),this.__oldTextGenerator=t,this.__oldContext=s)}__updateSrLabelText(e,t){e&&(e.textContent=t)}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Cr extends yr(Ci(ie(oe(P)))){static get is(){return"vaadin-tooltip"}static get template(){return F`
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
    `}}R(Cr);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xr=y`
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
`;Gs("font-icons",xr);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gs=y`
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
`;A("",gs,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const W=document.createElement("div");W.style.position="fixed";W.style.clip="rect(0px, 0px, 0px, 0px)";W.setAttribute("aria-live","polite");document.body.appendChild(W);let Ve;function ga(o,i={}){const e=i.mode||"polite",t=i.timeout===void 0?150:i.timeout;e==="alert"?(W.removeAttribute("aria-live"),W.removeAttribute("role"),Ve=I.debounce(Ve,Y,()=>{W.setAttribute("role","alert")})):(Ve&&Ve.cancel(),W.removeAttribute("role"),W.setAttribute("aria-live",e)),W.textContent="",setTimeout(()=>{W.textContent=o},t)}const vs=y`
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
`;A("vaadin-item",vs,{moduleId:"lumo-item"});const wr=y`
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
`;A("vaadin-context-menu-item",[vs,wr],{moduleId:"lumo-context-menu-item"});const bs=y`
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
`;A("vaadin-list-box",bs,{moduleId:"lumo-list-box"});const Ar=y`
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
`;A("vaadin-context-menu-list-box",[bs,Ar],{moduleId:"lumo-context-menu-list-box"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ys=y`
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
`;A("",ys,{moduleId:"lumo-menu-overlay-core"});const Er=y`
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
`,Cs=[$t,ys,Er];A("",Cs,{moduleId:"lumo-menu-overlay"});const Ir=y`
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
`;A("vaadin-context-menu-overlay",[Cs,Ir],{moduleId:"lumo-context-menu-overlay"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */et({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null},reset(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},_setSourceEvent(o){this.info.sourceEvent=o;const i=o.composedPath();this.info.sourceEvent.__composedPath=i},touchstart(o){this._setSourceEvent(o),this.info.touchStartCoords={x:o.changedTouches[0].clientX,y:o.changedTouches[0].clientY};const i=o.composedPath()[0]||o.target;this._timerId=setTimeout(()=>{const e=o.changedTouches[0];o.shiftKey||(Re&&(this._fired=!0,this.fire(i,e.clientX,e.clientY)),ve("tap"))},500)},touchmove(o){const e=this.info.touchStartCoords;(Math.abs(e.x-o.changedTouches[0].clientX)>15||Math.abs(e.y-o.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend(o){this._fired&&o.preventDefault(),this._cancelTimer()},contextmenu(o){o.shiftKey||(this._setSourceEvent(o),this.fire(o.target,o.clientX,o.clientY),ve("tap"))},fire(o,i,e){const t=this.info.sourceEvent,s=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});s.detail={x:i,y:e,sourceEvent:t},o.dispatchEvent(s),s.defaultPrevented&&t&&t.preventDefault&&t.preventDefault()}});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sr=o=>class extends Mi($i(o)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");e!==null&&(this.value=e)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(e){return!this.disabled&&!(e.type==="keydown"&&e.defaultPrevented)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){super._disabledChanged(e),e&&(this.selected=!1,this.blur())}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Tr extends Sr(H(ce(P))){static get is(){return"vaadin-context-menu-item"}static get template(){return F`
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
    `}ready(){super.ready(),this.setAttribute("role","menuitem")}}R(Tr);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function At(o,i){const{scrollLeft:e}=o;return i!=="rtl"?e:o.scrollWidth-o.clientWidth+e}function Or(o,i,e){i!=="rtl"?o.scrollLeft=e:o.scrollLeft=o.clientWidth-o.scrollWidth+e}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zr=o=>class extends tt(o){get focused(){return(this._getItems()||[]).find(Bi)}get _vertical(){return!0}focus(){const e=this._getItems();if(Array.isArray(e)){const t=this._getAvailableIndex(e,0,null,s=>!he(s));t>=0&&this._focus(t)}}_getItems(){return Array.from(this.children)}_onKeyDown(e){if(super._onKeyDown(e),e.metaKey||e.ctrlKey)return;const{key:t}=e,s=this._getItems()||[],r=s.indexOf(this.focused);let n,a;const u=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(t)?(a=-u,n=r-u):this.__isNextKey(t)?(a=u,n=r+u):t==="Home"?(a=1,n=0):t==="End"&&(a=-1,n=s.length-1),n=this._getAvailableIndex(s,n,a,p=>!he(p)),n>=0&&(e.preventDefault(),this._focus(n,!0))}__isPrevKey(e){return this._vertical?e==="ArrowUp":e==="ArrowLeft"}__isNextKey(e){return this._vertical?e==="ArrowDown":e==="ArrowRight"}_focus(e,t=!1){const s=this._getItems();this._focusItem(s[e],t)}_focusItem(e){e&&(e.focus(),e.setAttribute("focus-ring",""))}_getAvailableIndex(e,t,s,r){const n=e.length;let a=t;for(let l=0;typeof a=="number"&&l<n;l+=1,a+=s||1){a<0?a=n-1:a>=n&&(a=0);const u=e[a];if(!u.hasAttribute("disabled")&&this.__isMatchingItem(u,r))return a}return-1}__isMatchingItem(e,t){return typeof t=="function"?t(e):!0}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kr=o=>class extends zr(o){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return this.orientation!=="horizontal"}focus(){this._observer&&this._observer.flush();const e=Array.isArray(this.items)?this.items:[],t=this._getAvailableIndex(e,0,null,s=>s.tabIndex===0&&!he(s));t>=0?this._focus(t):super.focus()}ready(){super.ready(),this.addEventListener("click",t=>this._onClick(t));const e=this.shadowRoot.querySelector("slot:not([name])");this._observer=new Ui(e,()=>{this._setItems(this._filterItems(Si(this)))})}_getItems(){return this.items}_enhanceItems(e,t,s,r){if(!r&&e){this.setAttribute("aria-orientation",t||"vertical"),e.forEach(a=>{t?a.setAttribute("orientation",t):a.removeAttribute("orientation")}),this._setFocusable(s||0);const n=e[s];e.forEach(a=>{a.selected=a===n}),n&&!n.disabled&&this._scrollToItem(s)}}_filterItems(e){return e.filter(t=>t._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let s;t&&!t.disabled&&(s=this.items.indexOf(t))>=0&&(this.selected=s)}_searchKey(e,t){this._searchReset=I.debounce(this._searchReset,U.after(500),()=>{this._searchBuf=""}),this._searchBuf+=t.toLowerCase(),this.items.some(r=>this.__isMatchingKey(r))||(this._searchBuf=t.toLowerCase());const s=this._searchBuf.length===1?e+1:e;return this._getAvailableIndex(this.items,s,1,r=>this.__isMatchingKey(r)&&getComputedStyle(r).display!=="none")}__isMatchingKey(e){return e.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key,s=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(t)&&t.length===1){const r=this._searchKey(s,t);r>=0&&this._focus(r);return}super._onKeyDown(e)}_isItemHidden(e){return getComputedStyle(e).display==="none"}_setFocusable(e){e=this._getAvailableIndex(this.items,e,1);const t=this.items[e];this.items.forEach(s=>{s.tabIndex=s===t?0:-1})}_focus(e){this.items.forEach((t,s)=>{t.focused=s===e}),this._setFocusable(e),this._scrollToItem(e),super._focus(e)}_scrollToItem(e){const t=this.items[e];if(!t)return;const s=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],r=this._scrollerElement.getBoundingClientRect(),n=(this.items[e+1]||t).getBoundingClientRect(),a=(this.items[e-1]||t).getBoundingClientRect();let l=0;!this._isRTL&&n[s[1]]>=r[s[1]]||this._isRTL&&n[s[1]]<=r[s[1]]?l=n[s[1]]-r[s[1]]:(!this._isRTL&&a[s[0]]<=r[s[0]]||this._isRTL&&a[s[0]]>=r[s[0]])&&(l=a[s[0]]-r[s[0]]),this._scroll(l)}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=this.getAttribute("dir")||"ltr",s=At(this._scrollerElement,t)+e;Or(this._scrollerElement,t,s)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pr extends kr(H(ce(oe(P)))){static get is(){return"vaadin-context-menu-list-box"}static get template(){return F`
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
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}R(Pr);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rr=o=>class extends hs(us(o)){static get properties(){return{parentOverlay:{type:Object,readOnly:!0},_theme:{type:String,readOnly:!0,sync:!0}}}static get observers(){return["_themeChanged(_theme)"]}ready(){super.ready(),this.restoreFocusOnClose=!0,this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&e.composedPath()[0]===this.$.overlay&&[38,40].indexOf(e.keyCode)>-1){const t=this.getFirstChild();t&&Array.isArray(t.items)&&t.items.length&&(e.preventDefault(),e.keyCode===38?t.items[t.items.length-1].focus():t.focus())}})}getFirstChild(){return this.querySelector(":not(style):not(slot)")}_themeChanged(){this.close()}getBoundaries(){const e=this.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect();let s=e.bottom-t.height;const r=this.parentOverlay;if(r&&r.hasAttribute("bottom-aligned")){const n=getComputedStyle(r);s=s-parseFloat(n.bottom)-parseFloat(n.height)}return{xMax:e.right-t.width,xMin:e.left+t.width,yMax:s}}_updatePosition(){if(super._updatePosition(),this.positionTarget&&this.parentOverlay){const e=this.$.content,t=getComputedStyle(e);!!this.style.left?this.style.left=`${parseFloat(this.style.left)+parseFloat(t.paddingLeft)}px`:this.style.right=`${parseFloat(this.style.right)+parseFloat(t.paddingRight)}px`,!!this.style.bottom?this.style.bottom=`${parseFloat(this.style.bottom)-parseFloat(t.paddingBottom)}px`:this.style.top=`${parseFloat(this.style.top)-parseFloat(t.paddingTop)}px`}}_shouldRestoreFocus(){return this.parentOverlay?!1:super._shouldRestoreFocus()}_deepContains(e){let t=Ot(this.localName,e);for(;t;){if(t===this)return!0;t=t.parentOverlay}return!1}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dr=y`
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
 */A("vaadin-context-menu-overlay",[ds,Dr],{moduleId:"vaadin-context-menu-overlay-styles"});class Lr extends Rr(cs(ce(H(P)))){static get is(){return"vaadin-context-menu-overlay"}static get template(){return F`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}R(Lr);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fr{constructor(i,e){this.query=i,this.callback=e,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(i){typeof this.callback=="function"&&this.callback(i.matches)}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mr=o=>class extends o{static get properties(){return{items:{type:Array,sync:!0}}}constructor(){super(),this.__itemsOutsideClickListener=e=>{e.composedPath().some(t=>t.localName===`${this._tagNamePrefix}-overlay`)||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",()=>{this.items&&this.close()})}get _tagNamePrefix(){return"vaadin-context-menu"}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}__forwardFocus(){const e=this._overlayElement,t=e.getFirstChild();if(e.parentOverlay){const s=e.parentOverlay.querySelector("[expanded]");s&&s.hasAttribute("focused")&&t?t.focus():e.$.overlay.focus()}else t&&t.focus()}__openSubMenu(e,t,s){e.items=t._item.children,e.listenOn=t,e.overlayClass=s;const r=this._overlayElement,n=e._overlayElement;n.positionTarget=t,n.noHorizontalOverlap=!0,n._setParentOverlay(r),r.hasAttribute("theme")?e.setAttribute("theme",r.getAttribute("theme")):e.removeAttribute("theme");const a=n.$.content;a.style.minWidth="",t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:t._item.children}}))}__createComponent(e){let t;return e.component instanceof HTMLElement?t=e.component:t=document.createElement(e.component||`${this._tagNamePrefix}-item`),t._hasVaadinItemMixin&&(t.setAttribute("role","menuitem"),t.tabIndex=-1),t.localName==="hr"?t.setAttribute("role","separator"):t.setAttribute("aria-haspopup","false"),this._setMenuItemTheme(t,e,this._theme),t._item=e,e.text&&(t.textContent=e.text),e.className&&t.setAttribute("class",e.className),this.__toggleMenuComponentAttribute(t,"menu-item-checked",e.checked),this.__toggleMenuComponentAttribute(t,"disabled",e.disabled),e.children&&e.children.length&&(this.__updateExpanded(t,!1),t.setAttribute("aria-haspopup","true")),t}__initListBox(){const e=document.createElement(`${this._tagNamePrefix}-list-box`);return this._theme&&e.setAttribute("theme",this._theme),e.addEventListener("selected-changed",t=>{const{value:s}=t.detail;if(typeof s=="number"){const r=e.items[s]._item;e.selected=null,r.children||this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:r}}))}}),e}__initOverlay(){const e=this._overlayElement;e.$.backdrop.addEventListener("click",()=>{this.close()}),e.addEventListener(Fe?"click":"mouseover",t=>{this.__showSubMenu(t)}),e.addEventListener("keydown",t=>{const{key:s}=t,r=this.__isRTL,n=s==="ArrowRight",a=s==="ArrowLeft";!r&&n||r&&a||s==="Enter"||s===" "?this.__showSubMenu(t):!r&&a||r&&n||s==="Escape"?(s==="Escape"&&t.stopPropagation(),this.close(),this.listenOn.focus()):s==="Tab"&&this.dispatchEvent(new CustomEvent("close-all-menus"))})}__initSubMenu(){const e=document.createElement(this.constructor.is);return e._modeless=!0,e.openOn="opensubmenu",e.setAttribute("hidden",""),this.addEventListener("opened-changed",t=>{t.detail.value||this._subMenu.close()}),e.addEventListener("close-all-menus",()=>{this.dispatchEvent(new CustomEvent("close-all-menus"))}),e.addEventListener("item-selected",t=>{const{detail:s}=t;this.dispatchEvent(new CustomEvent("item-selected",{detail:s}))}),this.addEventListener("close-all-menus",()=>{this._overlayElement.close()}),this.addEventListener("item-selected",t=>{const s=t.target,r=t.detail.value,n=s.items.indexOf(r);r.keepOpen&&n>-1?(s._overlayElement.requestContentUpdate(),s._listBox._observer.flush(),s._listBox.children[n].focus()):r.keepOpen||this.close()}),e.addEventListener("opened-changed",t=>{if(!t.detail.value){const s=this._listBox.querySelector("[expanded]");s&&this.__updateExpanded(s,!1)}}),e}__showSubMenu(e,t=e.composedPath().find(s=>s.localName===`${this._tagNamePrefix}-item`)){if(!this.__openListenerActive)return;if(this._overlayElement.hasAttribute("opening")){requestAnimationFrame(()=>{this.__showSubMenu(e,t)});return}const s=this._subMenu;if(t){const{children:r}=t._item;if(s.items!==r&&s.close(),!this.opened)return;if(r&&r.length){this.__updateExpanded(t,!0);const{overlayClass:n}=this;this.__openSubMenu(s,t,n)}else s.listenOn.focus()}}__itemsRenderer(e,t,{detail:s}){this.__initMenu(e,t);const r=e.querySelector(this.constructor.is);r.closeOn=t.closeOn;const n=e.querySelector(`${this._tagNamePrefix}-list-box`);n.innerHTML="",[...s.children||t.items].forEach(a=>{const l=this.__createComponent(a);n.appendChild(l)})}_setMenuItemTheme(e,t,s){let r=e.getAttribute("theme")||s;t.theme!=null&&(r=Array.isArray(t.theme)?t.theme.join(" "):t.theme),this.__updateTheme(e,r)}__toggleMenuComponentAttribute(e,t,s){s?(e.setAttribute(t,""),e[`__has-${t}`]=!0):e[`__has-${t}`]&&(e.removeAttribute(t),e[`__has-${t}`]=!1)}__initMenu(e,t){if(e.firstElementChild)this.__updateTheme(this._listBox,this._theme);else{this.__initOverlay();const s=this.__initListBox();this._listBox=s,e.appendChild(s);const r=this.__initSubMenu();this._subMenu=r,e.appendChild(r),requestAnimationFrame(()=>{this.__openListenerActive=!0})}}__updateExpanded(e,t){e.setAttribute("aria-expanded",t.toString()),e.toggleAttribute("expanded",t)}__updateTheme(e,t){t?e.setAttribute("theme",t):e.removeAttribute("theme")}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nr=o=>class extends Mr(o){static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu",sync:!0},listenOn:{type:Object,sync:!0,value(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged",sync:!0},renderer:{type:Function,sync:!0},_modeless:{type:Boolean,sync:!0},_context:{type:Object,sync:!0},_phone:{type:Boolean},_touch:{type:Boolean,value:Fe},_wide:{type:Boolean},_wideMediaQuery:{type:String,value:"(min-device-width: 750px)"}}}static get observers(){return["_openedChanged(opened)","_targetOrOpenOnChanged(listenOn, openOn)","_rendererChanged(renderer, items)","_touchOrWideChanged(_touch, _wide)","_overlayContextChanged(_overlayElement, _context)","_overlayModelessChanged(_overlayElement, _modeless)","_overlayPhoneChanged(_overlayElement, _phone)","_overlayThemeChanged(_overlayElement, _theme)"]}constructor(){super(),this._createOverlay(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundPreventDefault=this._preventDefault.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0),this.__restoreOpened&&this._setOpened(!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.__restoreOpened=this.opened,this.close()}ready(){super.ready(),this.addController(new Fr(this._wideMediaQuery,e=>{this._wide=e}))}_createOverlay(){const e=document.createElement(`${this._tagNamePrefix}-overlay`);e.owner=this,e.addEventListener("opened-changed",t=>{this._onOverlayOpened(t)}),e.addEventListener("vaadin-overlay-open",t=>{this._onVaadinOverlayOpen(t)}),this._overlayElement=e}_onOverlayOpened(e){const t=e.detail.value;this._setOpened(t),t&&this.__alignOverlayPosition()}_onVaadinOverlayOpen(){this.__alignOverlayPosition(),this._overlayElement.style.opacity="",this.__forwardFocus()}_overlayContextChanged(e,t){e&&(e.model=t)}_overlayModelessChanged(e,t){e&&(e.modeless=t)}_overlayPhoneChanged(e,t){e&&(e.toggleAttribute("phone",t),e.withBackdrop=t)}_overlayThemeChanged(e,t){e&&(t?e.setAttribute("theme",t):e.removeAttribute("theme"))}_targetOrOpenOnChanged(e,t){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),e&&t&&(this._listen(e,t,this._boundOpen),this._oldListenOn=e,this._oldOpenOn=t)}_touchOrWideChanged(e,t){this._phone=!t&&e}_setListenOnUserSelect(e){this.listenOn.style.webkitTouchCallout=e,this.listenOn.style.webkitUserSelect=e,this.listenOn.style.userSelect=e,document.getSelection().removeAllRanges()}_closeOnChanged(e,t){const s="vaadin-overlay-outside-click",r=this._overlayElement;t&&this._unlisten(r,t,this._boundClose),e?(this._listen(r,e,this._boundClose),r.removeEventListener(s,this._boundPreventDefault)):r.addEventListener(s,this._boundPreventDefault)}_preventDefault(e){e.preventDefault()}_openedChanged(e){e?(document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this._overlayElement.opened=e}requestContentUpdate(){!this._overlayElement||!this.renderer||this._overlayElement.requestContentUpdate()}_rendererChanged(e,t){if(t){if(e)throw new Error("The items API cannot be used together with a renderer");this.closeOn==="click"&&(this.closeOn=""),e=this.__itemsRenderer}this._overlayElement.renderer=e}close(){this._setOpened(!1)}_contextTarget(e){if(this.selector){const t=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(t,s=>e.composedPath().indexOf(s)>-1)[0]}return e.target}open(e){e&&!this.opened&&(this._context={detail:e.detail,target:this._contextTarget(e)},this._context.target&&(e.preventDefault(),e.stopPropagation(),this.__x=this._getEventCoordinate(e,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(e,"y"),this.__pageYOffset=window.pageYOffset,this._overlayElement.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const e=window.pageYOffset-this.__pageYOffset,t=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-t),this.__adjustPosition("right",t),this.__adjustPosition("top",-e),this.__adjustPosition("bottom",e),this.__pageYOffset+=e,this.__pageXOffset+=t}__adjustPosition(e,t){const r=this._overlayElement.style;r[e]=`${(parseInt(r[e])||0)+t}px`}__alignOverlayPosition(){const e=this._overlayElement;if(e.positionTarget)return;const t=e.style;["top","right","bottom","left"].forEach(f=>t.removeProperty(f)),["right-aligned","end-aligned","bottom-aligned"].forEach(f=>e.removeAttribute(f));const{xMax:s,xMin:r,yMax:n}=e.getBoundaries(),a=this.__x,l=this.__y,u=document.documentElement.clientWidth,p=document.documentElement.clientHeight;this.__isRTL?a>u/2||a>r?t.right=`${Math.max(0,u-a)}px`:(t.left=`${a}px`,this._setEndAligned(e)):a<u/2||a<s?t.left=`${a}px`:(t.right=`${Math.max(0,u-a)}px`,this._setEndAligned(e)),l<p/2||l<n?t.top=`${l}px`:(t.bottom=`${Math.max(0,p-l)}px`,e.setAttribute("bottom-aligned",""))}_setEndAligned(e){e.setAttribute("end-aligned",""),this.__isRTL||e.setAttribute("right-aligned","")}_getEventCoordinate(e,t){if(e.detail instanceof Object){if(e.detail[t])return e.detail[t];if(e.detail.sourceEvent)return this._getEventCoordinate(e.detail.sourceEvent,t)}else{const s=`client${t.toUpperCase()}`,r=e.changedTouches?e.changedTouches[0][s]:e[s];if(r===0){const n=e.target.getBoundingClientRect();return t==="x"?n.left:n.top+n.height}return r}}_listen(e,t,s){Q[t]?de(e,t,s):e.addEventListener(t,s)}_unlisten(e,t,s){Q[t]?Fi(e,t,s):e.removeEventListener(t,s)}_onGlobalContextMenu(e){e.shiftKey||(e.preventDefault(),this.close())}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Br extends Nr(_s(oe(ie(Ci(P))))){static get template(){return F`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>
    `}static get is(){return"vaadin-context-menu"}ready(){super.ready(),Tt(this)}_attachDom(i){const e=this.attachShadow({mode:"open"});return e.appendChild(i),e.appendChild(this._overlayElement),e}}R(Br);(function(){function o(a){return window.Vaadin.Flow.tryCatchWrapper(a,"Vaadin Context Menu")}function i(a,l){try{return window.Vaadin.Flow.clients[a].getByNodeId(l)}catch(u){console.error("Could not get node %s from app %s",l,a),console.error(u)}}function e(a,l){a.$connector||(a.$connector={generateItems:o(u=>{const p=t(l,u);a.items=p})})}function t(a,l){const u=i(a,l);if(u)return Array.from(u.children).map(p=>{const f={component:p,checked:p._checked,keepOpen:p._keepOpen,className:p.className,theme:p.__theme};return p._hasVaadinItemMixin&&p._containerNodeId&&(f.children=t(a,p._containerNodeId)),p._item=f,f})}function s(a,l){a._item&&(a._item.checked=l,a._item.keepOpen&&a.toggleAttribute("menu-item-checked",l))}function r(a,l){a._item&&(a._item.keepOpen=l)}function n(a,l){a._item&&(a._item.theme=l)}window.Vaadin.Flow.contextMenuConnector={initLazy(...a){return o(e)(...a)},generateItemsTree(...a){return o(t)(...a)},setChecked(...a){return o(s)(...a)},setKeepOpen(...a){return o(r)(...a)},setTheme(...a){return o(n)(...a)}}})();(function(){function o(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Context Menu Target")}function i(e){e.$contextMenuTargetConnector||(e.$contextMenuTargetConnector={openOnHandler:o(function(t){if(e.preventContextMenu&&e.preventContextMenu(t))return;t.preventDefault(),t.stopPropagation(),this.$contextMenuTargetConnector.openEvent=t;let s={};e.getContextMenuBeforeOpenDetail&&(s=e.getContextMenuBeforeOpenDetail(t)),e.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:s}))}),updateOpenOn:o(function(t){this.removeListener(),this.openOnEventType=t,customElements.whenDefined("vaadin-context-menu").then(o(()=>{Q[t]?de(e,t,this.openOnHandler):e.addEventListener(t,this.openOnHandler)}))}),removeListener:o(function(){this.openOnEventType&&(Q[this.openOnEventType]?Fi(e,this.openOnEventType,this.openOnHandler):e.removeEventListener(this.openOnEventType,this.openOnHandler))}),openMenu:o(function(t){t.open(this.openEvent)}),removeConnector:o(function(){this.removeListener(),e.$contextMenuTargetConnector=void 0})})}window.Vaadin.Flow.contextMenuTargetConnector={init(...e){return o(i)(...e)}}})();A("vaadin-input-container",y`
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
 */const Hr=y`
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
`,xs=[Yi,gs,jo,Hr];A("",xs,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $r=o=>class extends o{static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",e=>{e.target===this&&e.preventDefault()}),this.addEventListener("click",e=>{e.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(t=>t.focus&&t.focus())})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vr=y`
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
 */A("vaadin-input-container",Vr,{moduleId:"vaadin-input-container-styles"});class Wr extends $r(H(ce(P))){static get is(){return"vaadin-input-container"}static get template(){return F`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}}R(Wr);/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const di=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),Gr=di&&di[1]>=8,hi=3,Ur={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const o=this._virtualCount;return Math.max(0,o-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(o){o=this._clamp(o,0,this._maxVirtualStart),this._virtualStartVal=o},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(o){o%=this._physicalCount,o<0&&(o=this._physicalCount+o),this._physicalStartVal=o},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(o){this._physicalCountVal=o},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let o=this._firstVisibleIndexVal;if(o==null){let i=this._physicalTop+this._scrollOffset;o=this._iterateItems((e,t)=>{if(i+=this._getPhysicalSizeIncrement(e),i>this._scrollPosition)return t})||0,this._firstVisibleIndexVal=o}return o},get lastVisibleIndex(){let o=this._lastVisibleIndexVal;if(o==null){let i=this._physicalTop+this._scrollOffset;this._iterateItems((e,t)=>{i<this._scrollBottom&&(o=t),i+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=o}return o},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const o=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let i=o-this._scrollPosition;const e=i>=0;if(this._scrollPosition=o,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(i)>this._physicalSize&&this._physicalSize>0){i-=this._scrollOffset;const t=Math.round(i/this._physicalAverage);this._virtualStart+=t,this._physicalStart+=t,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const t=this._getReusables(e);e?(this._physicalTop=t.physicalTop,this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length):(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length),this._update(t.indexes,e?null:t.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),q)}},_getReusables(o){let i,e,t;const s=[],r=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let u=this._physicalTop+this._scrollOffset;const p=this._physicalBottom+this._scrollOffset,f=this._scrollPosition,g=this._scrollBottom;for(o?(i=this._physicalStart,e=f-u):(i=this._physicalEnd,e=p-g);t=this._getPhysicalSizeIncrement(i),e-=t,!(s.length>=l||e<=r);)if(o){if(a+s.length+1>=this._virtualCount||u+t>=f-this._scrollOffset)break;s.push(i),u+=t,i=(i+1)%l}else{if(n-s.length<=0||u+this._physicalSize-t<=g)break;s.push(i),u-=t,i=i===0?l-1:i-1}return{indexes:s,physicalTop:u-this._scrollOffset}},_update(o,i){if(!(o&&o.length===0||this._physicalCount===0)){if(this._assignModels(o),this._updateMetrics(o),i)for(;i.length;){const e=i.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(o){const e=this._clamp(this._physicalCount+o,hi,this._virtualCount-this._virtualStart)-this._physicalCount;let t=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const s=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let r=0;r<e;r++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-s)/e,t=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||t===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,t)),Bs):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,t),q))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const o=this._getReusables(!0);this._physicalTop=o.physicalTop,this._virtualStart+=o.indexes.length,this._physicalStart+=o.indexes.length,this._update(o.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(hi))},_itemsChanged(o){o.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,Y))},_iterateItems(o,i){let e,t,s,r;if(arguments.length===2&&i){for(r=0;r<i.length;r++)if(e=i[r],t=this._computeVidx(e),(s=o.call(this,e,t))!=null)return s}else{for(e=this._physicalStart,t=this._virtualStart;e<this._physicalCount;e++,t++)if((s=o.call(this,e,t))!=null)return s;for(e=0;e<this._physicalStart;e++,t++)if((s=o.call(this,e,t))!=null)return s}},_computeVidx(o){return o>=this._physicalStart?this._virtualStart+(o-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+o},_positionItems(){this._adjustScrollPosition();let o=this._physicalTop;this._iterateItems(i=>{this.translate3d(0,`${o}px`,0,this._physicalItems[i]),o+=this._physicalSizes[i]})},_getPhysicalSizeIncrement(o){return this._physicalSizes[o]},_adjustScrollPosition(){const o=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(o!==0){this._physicalTop-=o;const i=this._scrollPosition;!Gr&&i>0&&this._resetScrollPosition(i-o)}},_resetScrollPosition(o){this.scrollTarget&&o>=0&&(this._scrollTop=o,this._scrollPosition=this._scrollTop)},_updateScrollerSize(o){const i=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=i,(o||this._scrollHeight===0||this._scrollPosition>=i-this._physicalSize||Math.abs(i-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${i}px`,this._scrollHeight=i)},scrollToIndex(o){if(typeof o!="number"||o<0||o>this.items.length-1||(Te(),this._physicalCount===0))return;o=this._clamp(o,0,this._virtualCount-1),(!this._isIndexRendered(o)||o>=this._maxVirtualStart)&&(this._virtualStart=o-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let i=this._physicalStart,e=this._virtualStart,t=0;const s=this._hiddenContentSize;for(;e<o&&t<=s;)t+=this._getPhysicalSizeIncrement(i),i=(i+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+t),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},Y)},_isIndexRendered(o){return o>=this._virtualStart&&o<=this._virtualEnd},_getPhysicalIndex(o){return(this._physicalStart+(o-this._virtualStart))%this._physicalCount},_clamp(o,i,e){return Math.min(e,Math.max(i,o))},_debounce(o,i,e){this._debouncers||(this._debouncers={}),this._debouncers[o]=I.debounce(this._debouncers[o],e,i.bind(this)),Hs(this._debouncers[o])}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qr=1e5,pt=1e3;class ws{constructor({createElements:i,updateElement:e,scrollTarget:t,scrollContainer:s,elementsContainer:r,reorderElements:n}){this.isAttached=!0,this._vidxOffset=0,this.createElements=i,this.updateElement=e,this.scrollTarget=t,this.scrollContainer=s,this.elementsContainer=r||s,this.reorderElements=n,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",a=>this.__onWheel(a)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}get _maxVirtualIndexOffset(){return this.size-this._virtualCount}__hasPlaceholders(){return this.__getVisibleElements().some(i=>i.__virtualizerPlaceholder)}scrollToIndex(i){if(typeof i!="number"||isNaN(i)||this.size===0||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),i=this._clamp(i,0,this.size-1);const e=this.__getVisibleElements().length;let t=Math.floor(i/this.size*this._virtualCount);this._virtualCount-t<e?(t=this._virtualCount-(this.size-i),this._vidxOffset=this._maxVirtualIndexOffset):t<e?i<pt?(t=i,this._vidxOffset=0):(t=pt,this._vidxOffset=i-t):this._vidxOffset=i-t,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(t),this.adjustedFirstVisibleIndex!==i&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(i)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=i)}flush(){const i=this._physicalCount;this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),Te(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush(),this._physicalCount!==i&&this.flush())}update(i=0,e=this.size-1){const t=[];this.__getVisibleElements().forEach(s=>{s.__virtualIndex>=i&&s.__virtualIndex<=e&&(this.__updateElement(s,s.__virtualIndex,!0),t.push(s))}),this.__afterElementsUpdated(t)}_updateMetrics(i){Te();let e=0,t=0;const s=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems((n,a)=>{t+=this._physicalSizes[n],this._physicalSizes[n]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[n])),e+=this._physicalSizes[n],this._physicalAverageCount+=this._physicalSizes[n]?1:0},i),this._physicalSize=this._physicalSize+e-t,this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((r*s+e)/this._physicalAverageCount))}__getBorderBoxHeight(i){const e=getComputedStyle(i),t=parseFloat(e.height)||0;if(e.boxSizing==="border-box")return t;const s=parseFloat(e.paddingBottom)||0,r=parseFloat(e.paddingTop)||0,n=parseFloat(e.borderBottomWidth)||0,a=parseFloat(e.borderTopWidth)||0;return t+s+r+n+a}__updateElement(i,e,t){i.__virtualizerPlaceholder&&(i.style.paddingTop="",i.__virtualizerPlaceholder=!1),!this.__preventElementUpdates&&(i.__lastUpdatedIndex!==e||t)&&(this.updateElement(i,e),i.__lastUpdatedIndex=e)}__afterElementsUpdated(i){i.forEach(e=>{const t=e.offsetHeight;if(t===0)e.style.paddingTop=`${this.__placeholderHeight}px`,e.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=I.debounce(this.__placeholderClearDebouncer,Y,()=>this._resizeHandler());else{this.__elementHeightQueue.push(t),this.__elementHeightQueue.shift();const s=this.__elementHeightQueue.filter(r=>r!==void 0);this.__placeholderHeight=Math.round(s.reduce((r,n)=>r+n,0)/s.length)}}),this.__pendingScrollToIndex!==void 0&&!this.__hasPlaceholders()&&this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(i){const e=this.__getVisibleElements().find(t=>t.__virtualIndex===i);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(i){if(i===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let e,t;if(i>0&&(e=this.adjustedFirstVisibleIndex,t=this.__getIndexScrollOffset(e)),this.__size=i,this._itemsChanged({path:"items"}),Te(),i>0){e=Math.min(e,i-1),this.scrollToIndex(e);const s=this.__getIndexScrollOffset(e);t!==void 0&&s!==void 0&&(this._scrollTop+=t-s)}this.__preventElementUpdates=!1,this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),Te()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(i){this.scrollTarget.scrollTop=i}get items(){return{length:Math.min(this.size,qr)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const i=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(i["padding-top"],10),this._isRTL=i.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(i){const e=this.createElements(i),t=document.createDocumentFragment();return e.forEach(s=>{s.style.position="absolute",t.appendChild(s),this.__resizeObserver.observe(s)}),this.elementsContainer.appendChild(t),e}_assignModels(i){const e=[];this._iterateItems((t,s)=>{const r=this._physicalItems[t];r.hidden=s>=this.size,r.hidden?delete r.__lastUpdatedIndex:(r.__virtualIndex=s+(this._vidxOffset||0),this.__updateElement(r,r.__virtualIndex),e.push(r))},i),this.__afterElementsUpdated(e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(i,e,t,s){s.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const i=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const e=i>=0,t=this._getReusables(!e);t.indexes.length&&(this._physicalTop=t.physicalTop,e?(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length):(this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length),this._resizeHandler())}i&&(this.__fixInvalidItemPositioningDebouncer=I.debounce(this.__fixInvalidItemPositioningDebouncer,U.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=I.debounce(this.__scrollReorderDebouncer,U.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(i)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const i=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,t=this.adjustedFirstVisibleIndex===0,s=this.adjustedLastVisibleIndex===this.size-1;if(i&&!t||e&&!s){const r=e,n=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(r?-1:1),this._scrollHandler(),this._ratio=n}}__onWheel(i){if(i.ctrlKey||this._hasScrolledAncestor(i.target,i.deltaX,i.deltaY))return;let e=i.deltaY;if(i.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:i.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame){this._deltaYAcc+=e,i.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=I.debounce(this.__debouncerWheelAnimationFrame,Y,()=>{this._wheelAnimationFrame=!1});const t=Math.abs(i.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,i.deltaX,e)?(i.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=i.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=I.debounce(this._debouncerIgnoreNewWheel,U.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&t<=this._previousMomentum||this._ignoreNewWheel?i.preventDefault():t>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=t}_hasScrolledAncestor(i,e,t){if(i===this.scrollTarget||i===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(i,e,t)&&["auto","scroll"].indexOf(getComputedStyle(i).overflow)!==-1)return!0;if(i!==this&&i.parentElement)return this._hasScrolledAncestor(i.parentElement,e,t)}_canScroll(i,e,t){return t>0&&i.scrollTop<i.scrollHeight-i.offsetHeight||t<0&&i.scrollTop>0||e>0&&i.scrollLeft<i.scrollWidth-i.offsetWidth||e<0&&i.scrollLeft>0}_increasePoolIfNeeded(i){if(this._physicalCount>2&&i){const t=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(i,Math.min(100,t)))}else super._increasePoolIfNeeded(i)}_getScrollLineHeight(){const i=document.createElement("div");i.style.fontSize="initial",i.style.display="none",document.body.appendChild(i);const e=window.getComputedStyle(i).fontSize;return document.body.removeChild(i),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(i=>!i.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const i=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),s=e.find(a=>a.contains(this.elementsContainer.getRootNode().activeElement)||a.contains(this.scrollTarget.getRootNode().activeElement))||e[0];if(!s)return;const r=s.__virtualIndex-i,n=e.indexOf(s)-r;if(n>0)for(let a=0;a<n;a++)this.elementsContainer.appendChild(e[a]);else if(n<0)for(let a=e.length+n;a<e.length;a++)this.elementsContainer.insertBefore(e[a],e[0]);if(Ji){const{transform:a}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=a})}}_adjustVirtualIndexOffset(i){const e=this._maxVirtualIndexOffset;if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(i)>1e4){const t=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight);this._vidxOffset=Math.round(t*e)}else{const t=this._vidxOffset,s=pt,r=100;this._scrollTop===0?(this._vidxOffset=0,t!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<s&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex+(t-this._vidxOffset))),this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=e,t!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-s&&this._vidxOffset<e&&(this._vidxOffset+=Math.min(e-this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-t)))}}}Object.setPrototypeOf(ws.prototype,Ur);class jr{constructor(i){this.__adapter=new ws(i)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(i){this.__adapter.size=i}scrollToIndex(i){this.__adapter.scrollToIndex(i)}update(i=0,e=this.size-1){this.__adapter.update(i,e)}flush(){this.__adapter.flush()}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const We=new ResizeObserver(o=>{setTimeout(()=>{o.forEach(i=>{i.target.resizables?i.target.resizables.forEach(e=>{e._onResize(i.contentRect)}):i.target._onResize(i.contentRect)})})}),As=L(o=>class extends o{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),We.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,We.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),We.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const t=e.resizables;t&&(t.delete(this),t.size===0&&We.unobserve(e)),this.__parent=null}}_onResize(e){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ft=new WeakMap;function Kr(o){return ft.has(o)||ft.set(o,new Set),ft.get(o)}function Yr(o,i){const e=document.createElement("style");e.textContent=o,i===document?document.head.appendChild(e):i.insertBefore(e,i.firstChild)}const Qr=L(o=>class extends o{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),t=Kr(e);this.slotStyles.forEach(s=>{t.has(s)||(Yr(s,e),t.add(s))})}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xr=o=>class extends Mt(tt(o)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",e=>this._onClearButtonMouseDown(e)),this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e)))}_onClearButtonClick(e){e.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(e){e.preventDefault(),Fe||this.inputElement.focus()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zr=L(o=>class extends Gi(Zi(Mt(o))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(t=>this.__isValidConstraint(t))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...t){if(!e)return;const s=this._hasValidConstraints(t),r=this.__previousHasConstraints&&!s;(this._hasValue||this.invalid)&&s?this.validate():r&&this._setInvalid(!1),this.__previousHasConstraints=s}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return!!e||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jr=o=>class extends Qr(Wi(Zr(Jo(Xr(tt(o)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=I.debounce(this._preventInputDebouncer,U.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const t=e.clipboardData.getData("text");this.__allowedTextRegExp.test(t)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const t=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(t)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${e}*$`,"u")}catch(t){console.error(t)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const en=y`
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
 */const tn=y`
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
 */const sn=y`
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
 */const on=[tn,sn,en];A("vaadin-checkbox",y`
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
  `,{moduleId:"lumo-checkbox"});A("vaadin-grid",y`
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
 */const rn=o=>class extends o{static get observers(){return["_a11yUpdateGridSize(size, _columnTree)"]}_a11yGetHeaderRowCount(e){return e.filter(t=>t.some(s=>s.headerRenderer||s.path||s.header)).length}_a11yGetFooterRowCount(e){return e.filter(t=>t.some(s=>s.headerRenderer)).length}_a11yUpdateGridSize(e,t){if(e===void 0||t===void 0)return;const s=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",s&&s.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){M(this.$.header,(e,t)=>{e.setAttribute("aria-rowindex",t+1)})}_a11yUpdateFooterRows(){M(this.$.footer,(e,t)=>{e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)})}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",!!t),ge(e,s=>{s.setAttribute("aria-selected",!!t)})}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,t){t>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",t+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,t){ge(e,s=>{s!==t&&s.setAttribute("aria-controls",t.id)})}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let t=e.parentNode;for(;t&&t.localName!=="vaadin-grid-cell-content";)t=t.parentNode;t&&t.assignedSlot&&t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Es=o=>{if(!o.parentNode)return!1;const e=Array.from(o.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(t=>{const s=t.getAttribute("part");return!(s&&s.includes("body-cell"))}).includes(o);return!o.disabled&&e&&o.offsetParent&&getComputedStyle(o).visibility!=="hidden"},nn=o=>class extends o{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,s=t?t.item:null;s&&(this.activeItem=this._itemsEqual(this.activeItem,s)?null:s)}_onClick(e){if(e.defaultPrevented)return;const t=e.composedPath(),s=t[t.indexOf(this.$.table)-3];if(!s||s.getAttribute("part").indexOf("details-cell")>-1)return;const r=s._content,n=this.getRootNode().activeElement;!r.contains(n)&&!this._isFocusable(e.target)&&!(e.target instanceof HTMLLabelElement)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(s.parentElement)}}))}_isFocusable(e){return Es(e)}};function _e(o,i){return o.split(".").reduce((e,t)=>e[t],i)}function ci(o,i,e){if(e.length===0)return!1;let t=!0;return o.forEach(({path:s})=>{if(!s||s.indexOf(".")===-1)return;const r=s.replace(/\.[^.]*$/u,"");_e(r,e[0])===void 0&&(console.warn(`Path "${s}" used for ${i} does not exist in all of the items, ${i} is disabled.`),t=!1)}),t}function Ke(o){return[void 0,null].indexOf(o)>=0?"":isNaN(o)?o.toString():o}function ui(o,i){return o=Ke(o),i=Ke(i),o<i?-1:o>i?1:0}function an(o,i){return o.sort((e,t)=>i.map(s=>s.direction==="asc"?ui(_e(s.path,e),_e(s.path,t)):s.direction==="desc"?ui(_e(s.path,t),_e(s.path,e)):0).reduce((s,r)=>s!==0?s:r,0))}function ln(o,i){return o.filter(e=>i.every(t=>{const s=Ke(_e(t.path,e)),r=Ke(t.value).toString().toLowerCase();return s.toString().toLowerCase().includes(r)}))}const dn=o=>(i,e)=>{let t=o?[...o]:[];i.filters&&ci(i.filters,"filtering",t)&&(t=ln(t,i.filters)),Array.isArray(i.sortOrders)&&i.sortOrders.length&&ci(i.sortOrders,"sorting",t)&&(t=an(t,i.sortOrders));const s=Math.min(t.length,i.pageSize),r=i.page*s,n=r+s,a=t.slice(r,n);e(a,t.length)};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hn=o=>class extends o{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, _filters, _sorters, items.*)"]}__setArrayDataProvider(e){const t=dn(this.items);t.__items=e,this._arrayDataProvider=t,this.size=e.length,this.dataProvider=t}__dataProviderOrItemsChanged(e,t,s){s&&(this._arrayDataProvider?e!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):t?this._arrayDataProvider.__items===t?(this.clearCache(),this.size=this._flatSize):this.__setArrayDataProvider(t):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):t&&this.__setArrayDataProvider(t))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cn=o=>class extends o{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),de(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),Fe||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const t=e.composedPath(),s=t[t.indexOf(this.$.header)-2];if(!s||!s._content||s._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.composedPath&&e.composedPath();if(t&&t.some(r=>r.hasAttribute&&r.hasAttribute("draggable")))return;const s=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!s||!s.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=s._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(s),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const s=this._getTargetColumn(t,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,s)&&this._isSwappableByPosition(s,e.detail.x)){const r=this._columnTree.findIndex(p=>p.includes(s)),n=this._getColumnsInOrder(r),a=n.indexOf(this._draggedColumn),l=n.indexOf(s),u=a<l?1:-1;for(let p=a;p!==l;p+=u)this._swapColumnOrders(this._draggedColumn,n[p+u])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(t=>!t.hidden).sort((t,s)=>t._order-s._order)}_cellFromPoint(e=0,t=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const s=this.shadowRoot.elementFromPoint(e,t);return this.$.scroller.toggleAttribute("no-content-pointer-events",!1),this._getCellFromElement(s)}_getCellFromElement(e){if(e){if(e._column)return e;const{parentElement:t}=e;if(t&&t._focusButton===e)return t}return null}_updateGhostPosition(e,t){const s=this._reorderGhost.getBoundingClientRect(),r=e-s.width/2,n=t-s.height/2,a=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=a-(s.left-r),this._reorderGhost._top=l-(s.top-n),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const t=this._reorderGhost;t.textContent=e._content.innerText;const s=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(r=>{t.style[r]=s[r]}),t}_updateOrders(e){e!==void 0&&(e[0].forEach(t=>{t._order=0}),Ti(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,t){M(e.parentNode,s=>{/column/u.test(s.localName)&&this._isSwapAllowed(s,e)&&(s._reorderStatus=t)})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,t){if(e&&t){const s=e!==t,r=e.parentElement===t.parentElement,n=e.frozen&&t.frozen||e.frozenToEnd&&t.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!t.frozen&&!t.frozenToEnd;return s&&r&&n}}_isSwappableByPosition(e,t){const s=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(a=>e.contains(a._column)),r=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),n=s.getBoundingClientRect();return n.left>r.left?t>n.right-r.width:t<n.left+r.width}_swapColumnOrders(e,t){[e._order,t._order]=[t._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let s=e._column;for(;s.parentElement!==t.parentElement&&s!==this;)s=s.parentElement;return s.parentElement===t.parentElement?s:e._column}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const un=o=>class extends o{ready(){super.ready();const e=this.$.scroller;de(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",t=>e.hasAttribute("column-resizing")&&t.preventDefault()),e.addEventListener("contextmenu",t=>t.target.getAttribute("part")==="resize-handle"&&t.preventDefault()),e.addEventListener("mousedown",t=>t.target.getAttribute("part")==="resize-handle"&&t.preventDefault())}_onHeaderTrack(e){const t=e.target;if(t.getAttribute("part")==="resize-handle"){let r=t.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);r.localName==="vaadin-grid-column-group";)r=r._childColumns.slice(0).sort((f,g)=>f._order-g._order).filter(f=>!f.hidden).pop();const n=this.__isRTL,a=e.detail.x,l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),u=l.find(f=>f._column===r);if(u.offsetWidth){const f=getComputedStyle(u._content),g=10+parseInt(f.paddingLeft)+parseInt(f.paddingRight)+parseInt(f.borderLeftWidth)+parseInt(f.borderRightWidth)+parseInt(f.marginLeft)+parseInt(f.marginRight);let C;const w=u.offsetWidth,O=u.getBoundingClientRect();u.hasAttribute("frozen-to-end")?C=w+(n?a-O.right:O.left-a):C=w+(n?O.left-a:a-O.right),r.width=`${Math.max(g,C)}px`,r.flexGrow=0}l.sort((f,g)=>f._column._order-g._column._order).forEach((f,g,C)=>{g<C.indexOf(u)&&(f._column.width=`${f.offsetWidth}px`,f._column.flexGrow=0)});const p=this._frozenToEndCells[0];if(p&&this.$.table.scrollWidth>this.$.table.offsetWidth){const f=p.getBoundingClientRect(),g=a-(n?f.right:f.left);(n&&g<=0||!n&&g>=0)&&(this.$.table.scrollLeft+=g)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:r}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ye(o,i,e=0){let t=i;for(const s of o.subCaches){const r=s.parentCacheIndex;if(t<=r)break;if(t<=r+s.flatSize)return Ye(s,t-r-1,e+1);t-=s.flatSize}return{cache:o,item:o.items[t],index:t,page:Math.floor(t/o.pageSize),level:e}}function Is({getItemId:o},i,e,t=0,s=0){for(let r=0;r<i.items.length;r++){const n=i.items[r];if(n&&o(n)===o(e))return{cache:i,level:t,item:n,index:r,page:Math.floor(r/i.pageSize),subCache:i.getSubCache(r),flatIndex:s+i.getFlatIndex(r)}}for(const r of i.subCaches){const n=s+i.getFlatIndex(r.parentCacheIndex),a=Is({getItemId:o},r,e,t+1,n+1);if(a)return a}}function Ss(o,[i,...e],t=0){i===1/0&&(i=o.size-1);const s=o.getFlatIndex(i),r=o.getSubCache(i);return r&&r.flatSize>0&&e.length?Ss(r,e,t+s+1):t+s}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vt{context;size=0;pageSize;items=[];pendingRequests={};__subCacheByIndex={};__flatSize=0;constructor(i,e,t,s,r){this.context=i,this.pageSize=e,this.size=t||0,this.parentCache=s,this.parentCacheIndex=r,this.__flatSize=t||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return Object.keys(this.pendingRequests).length>0?!0:this.subCaches.some(i=>i.isLoading)}get flatSize(){return this.__flatSize}get effectiveSize(){return console.warn("<vaadin-grid> The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.flatSize}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((i,e)=>(e.recalculateFlatSize(),i+e.flatSize),0):0}setPage(i,e){const t=i*this.pageSize;e.forEach((s,r)=>{this.items[t+r]=s})}getSubCache(i){return this.__subCacheByIndex[i]}removeSubCache(i){delete this.__subCacheByIndex[i]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(i){const e=new Vt(this.context,this.pageSize,0,this,i);return this.__subCacheByIndex[i]=e,e}getFlatIndex(i){const e=Math.max(0,Math.min(this.size-1,i));return this.subCaches.reduce((t,s)=>{const r=s.parentCacheIndex;return e>r?t+s.flatSize:t},e)}getItemForIndex(i){console.warn("<vaadin-grid> The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{item:e}=Ye(this,i);return e}getCacheAndIndex(i){console.warn("<vaadin-grid> The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{cache:e,index:t}=Ye(this,i);return{cache:e,scaledIndex:t}}updateSize(){console.warn("<vaadin-grid> The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25."),this.recalculateFlatSize()}ensureSubCacheForScaledIndex(i){if(console.warn("<vaadin-grid> The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25."),!this.getSubCache(i)){const e=this.createSubCache(i);this.context.__controller.__loadCachePage(e,0)}}get grid(){return console.warn("<vaadin-grid> The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.context.__controller.host}get itemCaches(){return console.warn("<vaadin-grid> The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.__subCacheByIndex}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _n extends EventTarget{host;dataProvider;dataProviderParams;size;pageSize;isExpanded;getItemId;rootCache;constructor(i,{size:e,pageSize:t,isExpanded:s,getItemId:r,dataProvider:n,dataProviderParams:a}){super(),this.host=i,this.pageSize=t,this.getItemId=r,this.isExpanded=s,this.dataProvider=n,this.dataProviderParams=a,this.rootCache=this.__createRootCache(e)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(i){this.pageSize=i,this.clearCache()}setDataProvider(i){this.dataProvider=i,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.__createRootCache(this.rootCache.size)}getFlatIndexContext(i){return Ye(this.rootCache,i)}getItemContext(i){return Is({getItemId:this.getItemId},this.rootCache,i)}getFlatIndexByPath(i){return Ss(this.rootCache,i)}ensureFlatIndexLoaded(i){const{cache:e,page:t,item:s}=this.getFlatIndexContext(i);s||this.__loadCachePage(e,t)}ensureFlatIndexHierarchy(i){const{cache:e,item:t,index:s}=this.getFlatIndexContext(i);if(t&&this.isExpanded(t)&&!e.getSubCache(s)){const r=e.createSubCache(s);this.__loadCachePage(r,0)}}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(i){return new Vt(this.__cacheContext,this.pageSize,i)}__loadCachePage(i,e){if(!this.dataProvider||i.pendingRequests[e])return;let t={page:e,pageSize:this.pageSize,parentItem:i.parentItem};this.dataProviderParams&&(t={...t,...this.dataProviderParams()});const s=(r,n)=>{n!==void 0?i.size=n:t.parentItem&&(i.size=r.length),i.setPage(e,r),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete i.pendingRequests[e],this.dispatchEvent(new CustomEvent("page-loaded"))};i.pendingRequests[e]=s,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(t,s)}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pn=o=>class extends o{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super(),this._dataProviderController=new _n(this,{size:this.size,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})}),this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this)),this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this)),this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}get _cache(){return console.warn("<vaadin-grid> The `_cache` property is deprecated and will be removed in Vaadin 25."),this._dataProviderController.rootCache}get _effectiveSize(){return console.warn("<vaadin-grid> The `_effectiveSize` property is deprecated and will be removed in Vaadin 25."),this._flatSize}_sizeChanged(e){this._dataProviderController.rootCache.size=e,this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(e,t){!t&&e==="children"||this.requestContentUpdate()}_getItem(e,t){if(e>=this._flatSize)return;t.index=e;const{item:s}=this._dataProviderController.getFlatIndexContext(e);s?(this.__updateLoading(t,!1),this._updateItem(t,s),this._isExpanded(s)&&this._dataProviderController.ensureFlatIndexHierarchy(e)):(this.__updateLoading(t,!0),this._dataProviderController.ensureFlatIndexLoaded(e))}__updateLoading(e,t){const s=me(e);Je(e,"loading",t),Z(s,"loading-row-cell",t)}getItemId(e){return this.itemIdPath?St(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize,this.__updateVisibleRows()}__computeExpandedKeys(e,t){const s=t||[],r=new Set;return s.forEach(n=>{r.add(this.getItemId(n))}),r}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(t=>!this._itemsEqual(t,e)))}_getIndexLevel(e=0){const{level:t}=this._dataProviderController.getFlatIndexContext(e);return t}_loadPage(e,t){console.warn("<vaadin-grid> The `_loadPage` method is deprecated and will be removed in Vaadin 25."),this._dataProviderController.__loadCachePage(t,e)}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize=this._dataProviderController.flatSize,this._getRenderedRows().forEach(e=>{this._dataProviderController.ensureFlatIndexHierarchy(e.index)}),this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=I.debounce(this._debouncerApplyCachedData,U.after(0),()=>{this._setLoading(!1),this._getRenderedRows().forEach(e=>{const{item:t}=this._dataProviderController.getFlatIndexContext(e.index);t&&this._getItem(e.index,e)}),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()}),this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=I.debounce(this.__clearCacheDebouncer,q,()=>this.clearCache())}clearCache(){this._dataProviderController.clearCache(),this._dataProviderController.rootCache.size=this.size,this._dataProviderController.recalculateFlatSize(),this._hasData=!1,this.__updateVisibleRows(),(!this.__virtualizer||!this.__virtualizer.size)&&this._dataProviderController.loadFirstPage()}_pageSizeChanged(e,t){this._dataProviderController.setPageSize(e),t!==void 0&&e!==t&&this.clearCache()}_checkSize(){this.size===void 0&&this._flatSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,t){this._dataProviderController.setDataProvider(e?e.bind(this):null),t!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=I.debounce(this._debouncerCheckSize,U.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let s=-1;return t.forEach((r,n)=>{this._itemsEqual(r,e)&&(s=n)}),s}scrollToIndex(...e){let t;for(;t!==(t=this._dataProviderController.getFlatIndexByPath(e));)this._scrollToFlatIndex(t);(this._dataProviderController.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndexes=e)}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Se={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},X={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},fn=!("draggable"in document.createElement("div")),mn=o=>class extends o{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if(t.localName==="vaadin-grid-cell-content"&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const a=t.style.transform;t.style.top=/translateY\((.*)\)/u.exec(a)[1],t.style.transform="none",requestAnimationFrame(()=>{t.style.top="",t.style.transform=a})}const s=t.getBoundingClientRect();fn?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-s.left,e.clientY-s.top);let r=[t];this._isSelected(t._item)&&(r=this.__getViewportRows().filter(a=>this._isSelected(a._item)).filter(a=>!this.dragFilter||this.dragFilter(this.__getRowModel(a)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(r)),ke(t,{dragstart:r.length>1?`${r.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-s.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-s.top+10}px`),requestAnimationFrame(()=>{ke(t,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y","")});const n=new CustomEvent("grid-dragstart",{detail:{draggedItems:r.map(a=>a._item),setDragData:(a,l)=>e.dataTransfer.setData(a,l),setDraggedItemsCount:a=>t.setAttribute("dragstart",a)}});n.originalEvent=e,this.dispatchEvent(n)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let t=e.composedPath().find(s=>s.localName==="tr");if(!this._flatSize||this.dropMode===Se.ON_GRID)this._dropLocation=X.EMPTY;else if(!t||t.parentNode!==this.$.items){if(t)return;if(this.dropMode===Se.BETWEEN||this.dropMode===Se.ON_TOP_OR_BETWEEN)t=Array.from(this.$.items.children).filter(s=>!s.hidden).pop(),this._dropLocation=X.BELOW;else return}else{const s=t.getBoundingClientRect();if(this._dropLocation=X.ON_TOP,this.dropMode===Se.BETWEEN){const r=e.clientY-s.top<s.bottom-e.clientY;this._dropLocation=r?X.ABOVE:X.BELOW}else this.dropMode===Se.ON_TOP_OR_BETWEEN&&(e.clientY-s.top<s.height/3?this._dropLocation=X.ABOVE:e.clientY-s.top>s.height/3*2&&(this._dropLocation=X.BELOW))}if(t&&t.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===X.EMPTY?this.toggleAttribute("dragover",!0):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&ti(t,{dragover:this._dropLocation})):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,s=this.$.footer.getBoundingClientRect().top,r=t-e+this.__dndAutoScrollThreshold,n=e-s+this.__dndAutoScrollThreshold;let a=0;if(n>0?a=n*2:r>0&&(a=-r*2),a){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=a,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(s=>{const r=s.getBoundingClientRect();return r.bottom>e&&r.top<t})}_clearDragStyles(){this.removeAttribute("dragover"),M(this.$.items,e=>{ti(e,{dragover:null})})}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(r=>({type:r,data:e.dataTransfer.getData(r)}));this._clearDragStyles();const s=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});s.originalEvent=e,this.dispatchEvent(s)}}__formatDefaultTransferData(e){return e.map(t=>Array.from(t.children).filter(s=>!s.hidden&&s.getAttribute("part").indexOf("details-cell")===-1).sort((s,r)=>s._column._order>r._column._order?1:-1).map(s=>s._content.textContent.trim()).filter(s=>s).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){M(this.$.items,e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,t){const s=this.loading||e.hasAttribute("loading"),r=!this.rowsDraggable||s||this.dragFilter&&!this.dragFilter(t),n=!this.dropMode||s||this.dropFilter&&!this.dropFilter(t);ge(e,a=>{r?a._content.removeAttribute("draggable"):a._content.setAttribute("draggable",!0)}),ke(e,{"drag-disabled":!!r,"drop-disabled":!!n})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ts(o,i){if(!o||!i||o.length!==i.length)return!1;for(let e=0,t=o.length;e<t;e++)if(o[e]instanceof Array&&i[e]instanceof Array){if(!Ts(o[e],i[e]))return!1}else if(o[e]!==i[e])return!1;return!0}const gn=o=>class extends o{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some(t=>t.localName==="vaadin-grid-column-group")}_getChildColumns(e){return J.getColumns(e)}_flattenColumnGroups(e){return e.map(t=>t.localName==="vaadin-grid-column-group"?this._getChildColumns(t):[t]).reduce((t,s)=>t.concat(s),[])}_getColumnTree(){const e=J.getColumns(this),t=[e];let s=e;for(;this._hasColumnGroups(s);)s=this._flattenColumnGroups(s),t.push(s);return t}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=I.debounce(this.__updateColumnTreeDebouncer,q,()=>this._updateColumnTree())}_updateColumnTree(){const e=this._getColumnTree();Ts(e,this._columnTree)||(e.forEach(t=>{t.forEach(s=>{s.performUpdate&&s.performUpdate()})}),this._columnTree=e)}_addNodeObserver(){this._observer=new J(this,(e,t)=>{const s=t.flatMap(n=>n._allCells),r=n=>s.filter(a=>a&&a._content.contains(n)).length;this.__removeSorters(this._sorters.filter(r)),this.__removeFilters(this._filters.filter(r)),this._debounceUpdateColumnTree(),this._debouncerCheckImports=I.debounce(this._debouncerCheckImports,U.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{this.querySelector(e)&&!customElements.get(e)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((t,s)=>t._column._order-s._column._order).forEach((t,s,r)=>{ne(t,"first-column",s===0),ne(t,"last-column",s===r.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vn=o=>class extends o{getEventContext(e){const t={},s=e.__composedPath||e.composedPath(),r=s[s.indexOf(this.$.table)-3];return r&&(t.section=["body","header","footer","details"].find(n=>r.getAttribute("part").indexOf(n)>-1),r._column&&(t.column=r._column),(t.section==="body"||t.section==="details")&&Object.assign(t,this.__getRowModel(r.parentElement))),t}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bn=o=>class extends o{static get properties(){return{_filters:{type:Array,value:()=>[]}}}constructor(){super(),this._filterChanged=this._filterChanged.bind(this),this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(t=>e.indexOf(t)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yn=o=>class extends o{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(t=>{const s=this[t];if(e){const r=s&&s.parentElement;this.__isCell(s)?this[t]=r:this.__isCell(r)&&(this[t]=r.parentElement)}else if(!e&&this.__isRow(s)){const r=s.firstElementChild;this[t]=r._focusButton||r}})}get _visibleItemsCount(){return this._lastVisibleIndex-this._firstVisibleIndex-1}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,t){t&&Ze(t,"part","focused-cell"),e&&De(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach(t=>{if(t.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=t;else{let s=this._itemsFocusable.parentElement,r=this._itemsFocusable;if(s){this.__isCell(s)&&(r=s,s=s.parentElement);const n=[...s.children].indexOf(r);this._itemsFocusable=this.__getFocusable(t,t.children[n])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const t=e.key;let s;switch(t){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":s="Navigation";break;case"Enter":case"Escape":case"F2":s="Interaction";break;case"Tab":s="Tab";break;case" ":s="Space";break}this._detectInteracting(e),this.interacting&&s!=="Interaction"&&(s=void 0),s&&this[`_on${s}KeyDown`](e,t)}_ensureScrolledToIndex(e){[...this.$.items.children].find(s=>s.index===e)?this.__scrollIntoViewport(e):this.scrollToIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const t=e._item;return!!(t&&St(this.itemHasChildrenPath,t)&&!this._isExpanded(t))}}__isRowCollapsible(e){return this._isExpanded(e._item)}__isDetailsCell(e){return e.matches('[part~="details-cell"]')}__isCell(e){return e instanceof HTMLTableCellElement}__isRow(e){return e instanceof HTMLTableRowElement}__getIndexOfChildElement(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}_onNavigationKeyDown(e,t){e.preventDefault();const s=this.__isRTL,r=e.composedPath().find(f=>this.__isRow(f)),n=e.composedPath().find(f=>this.__isCell(f));let a=0,l=0;switch(t){case"ArrowRight":a=s?-1:1;break;case"ArrowLeft":a=s?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?l=-1/0:a=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?l=1/0:a=1/0;break;case"ArrowDown":l=1;break;case"ArrowUp":l=-1;break;case"PageDown":if(this.$.items.contains(r)){const f=this.__getIndexInGroup(r,this._focusedItemIndex);this._scrollToFlatIndex(f)}l=this._visibleItemsCount;break;case"PageUp":l=-this._visibleItemsCount;break}if(this.__rowFocusMode&&!r||!this.__rowFocusMode&&!n)return;const u=s?"ArrowLeft":"ArrowRight",p=s?"ArrowRight":"ArrowLeft";if(t===u){if(this.__rowFocusMode){if(this.__isRowExpandable(r)){this.expandItem(r._item);return}this.__rowFocusMode=!1,this._onCellNavigation(r.firstElementChild,0,0);return}}else if(t===p)if(this.__rowFocusMode){if(this.__isRowCollapsible(r)){this.collapseItem(r._item);return}}else{const f=[...r.children].sort((g,C)=>g._order-C._order);if(n===f[0]||this.__isDetailsCell(n)){this.__rowFocusMode=!0,this._onRowNavigation(r,0);return}}this.__rowFocusMode?this._onRowNavigation(r,l):this._onCellNavigation(n,a,l)}_onRowNavigation(e,t){const{dstRow:s}=this.__navigateRows(t,e);s&&s.focus()}__getIndexInGroup(e,t){return e.parentNode===this.$.items?t!==void 0?t:e.index:this.__getIndexOfChildElement(e)}__navigateRows(e,t,s){const r=this.__getIndexInGroup(t,this._focusedItemIndex),n=t.parentNode,a=(n===this.$.items?this._flatSize:n.children.length)-1;let l=Math.max(0,Math.min(r+e,a));if(n!==this.$.items){if(l>r)for(;l<a&&n.children[l].hidden;)l+=1;else if(l<r)for(;l>0&&n.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:n.children[l]}}let u=!1;if(s){const p=this.__isDetailsCell(s);if(n===this.$.items){const f=t._item,{item:g}=this._dataProviderController.getFlatIndexContext(l);p?u=e===0:u=e===1&&this._isDetailsOpened(f)||e===-1&&l!==r&&this._isDetailsOpened(g),u!==p&&(e===1&&u||e===-1&&!u)&&(l=r)}}return this._ensureScrolledToIndex(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...n.children].find(p=>!p.hidden&&p.index===l),dstIsRowDetails:u}}_onCellNavigation(e,t,s){const r=e.parentNode,{dstRow:n,dstIsRowDetails:a}=this.__navigateRows(s,r,e);if(!n)return;let l=this.__getIndexOfChildElement(e);this.$.items.contains(e)&&(l=[...this.$.sizer.children].findIndex(g=>g._column===e._column));const u=this.__isDetailsCell(e),p=r.parentNode,f=this.__getIndexInGroup(r,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(u?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(p,f).filter(g=>!g.hidden)[l]._order),a)[...n.children].find(C=>this.__isDetailsCell(C)).focus();else{const g=this.__getIndexInGroup(n,this._focusedItemIndex),C=this._getColumns(p,g).filter(S=>!S.hidden),w=C.map(S=>S._order).sort((S,$)=>S-$),O=w.length-1,x=w.indexOf(w.slice(0).sort((S,$)=>Math.abs(S-this._focusedColumnOrder)-Math.abs($-this._focusedColumnOrder))[0]),N=s===0&&u?x:Math.max(0,Math.min(x+t,O));N!==x&&(this._focusedColumnOrder=void 0);const re=C.reduce((S,$,be)=>(S[$._order]=be,S),{})[w[N]];let k;if(this.$.items.contains(e)){const S=this.$.sizer.children[re];this._lazyColumns&&(this.__isColumnInViewport(S._column)||S.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),k=[...n.children].find($=>$._column===S._column),this._scrollHorizontallyToCell(k)}else k=n.children[re],this._scrollHorizontallyToCell(k);k.focus()}}_onInteractionKeyDown(e,t){const s=e.composedPath()[0],r=s.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(s.type);let n;switch(t){case"Enter":n=this.interacting?!r:!0;break;case"Escape":n=!1;break;case"F2":n=!this.interacting;break}const{cell:a}=this._getGridEventLocation(e);if(this.interacting!==n&&a!==null)if(n){const l=a._content.querySelector("[focus-target]")||[...a._content.querySelectorAll("*")].find(u=>this._isFocusable(u));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,a.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);t==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,t){const s=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let r=s.indexOf(e);for(r+=t;r>=0&&r<=s.length-1;){let a=s[r];if(a&&!this.__rowFocusMode&&(a=s[r].parentNode),!a||a.hidden)r+=t;else break}let n=s[r];if(n&&!this.__isHorizontallyInViewport(n)){const a=this._getColumnsInOrder().find(l=>this.__isColumnInViewport(l));if(a)if(n===this._headerFocusable)n=a._headerCell;else if(n===this._itemsFocusable){const l=n._column._cells.indexOf(n);n=a._cells[l]}else n===this._footerFocusable&&(n=a._footerCell)}return n}_onTabKeyDown(e){const t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t){if(e.stopPropagation(),t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){let s=t;const r=this.__isRow(t)?t:t.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),r.index!==this._focusedItemIndex&&this.__isCell(t)){const n=Array.from(r.children).indexOf(this._itemsFocusable),a=Array.from(this.$.items.children).find(l=>!l.hidden&&l.index===this._focusedItemIndex);a&&(s=a.children[n])}e.preventDefault(),s.focus()}else e.preventDefault(),t.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0],s=this.__isRow(t);(s||!t._content||!t._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(s?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(s?t:t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const s=this.hasAttribute("navigating");t._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",s)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._isMousedown||this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:t,cell:s,row:r}=this._getGridEventLocation(e);if(!(!s&&!this.__rowFocusMode)){if(this._detectInteracting(e),t&&(s||r))if(this._activeRowGroup=t,this.$.header===t?this._headerFocusable=this.__getFocusable(r,s):this.$.items===t?this._itemsFocusable=this.__getFocusable(r,s):this.$.footer===t&&(this._footerFocusable=this.__getFocusable(r,s)),s){const n=this.getEventContext(e);this.__pendingBodyCellFocus=this.loading&&n.section==="body",this.__pendingBodyCellFocus||s.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:n}})),this._focusedCell=s._focusButton||s,Ft()&&e.target===s&&this._showTooltip(e)}else this._focusedCell=null;this._detectFocusedItemIndex(e)}}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(e,t){return this.__rowFocusMode?e:t._focusButton||t}_detectInteracting(e){const t=e.composedPath().some(s=>s.localName==="vaadin-grid-cell-content");this._setInteracting(t),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(e){const{section:t,row:s}=this._getGridEventLocation(e);t===this.$.items&&(this._focusedItemIndex=s.index)}_updateGridSectionFocusTarget(e){if(!e)return;const t=this._getGridSectionFromFocusTarget(e),s=this.interacting&&t===this._activeRowGroup;e.tabIndex=s?-1:0}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(e,t){let s=this._columnTree.length-1;return e===this.$.header?s=t:e===this.$.footer&&(s=this._columnTree.length-1-t),this._columnTree[s]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(!this.$&&this.performUpdate&&this.performUpdate(),["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const t=[...this.$[e].children].find(r=>r.offsetHeight),s=t?[...t.children].find(r=>!r.hidden):null;t&&s&&(this[`_${e}Focusable`]=this.__getFocusable(t,s))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),t=e?[...e.children].find(s=>!s.hidden):null;t&&e&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(e,t))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||this.__isDetailsCell(e))return;const t=e.getBoundingClientRect(),s=e.parentNode,r=Array.from(s.children).indexOf(e),n=this.$.table.getBoundingClientRect();let a=n.left,l=n.right;for(let u=r-1;u>=0;u--){const p=s.children[u];if(!(p.hasAttribute("hidden")||this.__isDetailsCell(p))&&(p.hasAttribute("frozen")||p.hasAttribute("frozen-to-end"))){a=p.getBoundingClientRect().right;break}}for(let u=r+1;u<s.children.length;u++){const p=s.children[u];if(!(p.hasAttribute("hidden")||this.__isDetailsCell(p))&&(p.hasAttribute("frozen")||p.hasAttribute("frozen-to-end"))){l=p.getBoundingClientRect().left;break}}t.left<a&&(this.$.table.scrollLeft+=Math.round(t.left-a)),t.right>l&&(this.$.table.scrollLeft+=Math.round(t.right-l))}_getGridEventLocation(e){const t=e.composedPath(),s=t.indexOf(this.$.table),r=s>=1?t[s-1]:null,n=s>=2?t[s-2]:null,a=s>=3?t[s-3]:null;return{section:r,row:n,cell:a}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cn=o=>class extends o{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:t})=>{this._updateDetailsCellHeight(t.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){e&&this._columnTree&&M(this.$.items,t=>{if(!t.querySelector("[part~=details-cell]")){this._updateRow(t,this._columnTree[this._columnTree.length-1]);const s=this._isDetailsOpened(t._item);this._toggleDetailsCell(t,s)}})}_detailsOpenedItemsChanged(e,t){M(this.$.items,s=>{if(s.hasAttribute("details-opened")){this._updateItem(s,s._item);return}t&&this._isDetailsOpened(s._item)&&this._updateItem(s,s._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,t){const s=e.querySelector('[part~="details-cell"]');s&&(s.hidden=!t,!s.hidden&&this.rowDetailsRenderer&&(s._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const t=e.querySelector('[part~="details-cell"]');t&&(this.__updateDetailsRowPadding(e,t),requestAnimationFrame(()=>this.__updateDetailsRowPadding(e,t)))}__updateDetailsRowPadding(e,t){t.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${t.offsetHeight}px`)}_updateDetailsCellHeights(){M(this.$.items,e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(t=>!this._itemsEqual(t,e)))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _i={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},xn=o=>class extends As(o){static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){const e=!he(this);e&&this.__previousVisible===!1&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=e}}_scrollToFlatIndex(e){e=Math.min(this._flatSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const t=[...this.$.items.children].find(s=>s.index===e);if(t){const s=t.getBoundingClientRect(),r=this.$.footer.getBoundingClientRect().top,n=this.$.header.getBoundingClientRect().bottom;s.bottom>r?this.$.table.scrollTop+=s.bottom-r:s.top<n&&(this.$.table.scrollTop-=n-s.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=I.debounce(this._debounceScrolling,U.after(_i.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=I.debounce(this._debounceColumnContentVisibility,U.after(_i.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())}),this._firefox&&!he(this)&&this.__previousVisible!==!1&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(!this._columnTree||!this._areSizerCellsAssigned())return;const e=this._getColumnsInOrder();let t=!1;if(e.forEach(s=>{const r=this._lazyColumns&&!this.__isColumnInViewport(s);s._bodyContentHidden!==r&&(t=!0,s._cells.forEach(n=>{if(n!==s._sizerCell){if(r)n.remove();else if(n.__parentRow){const a=[...n.__parentRow.children].find(l=>e.indexOf(l._column)>e.indexOf(s));n.__parentRow.insertBefore(n,a)}}})),s._bodyContentHidden=r}),t&&this._frozenCellsChanged(),this._lazyColumns){const s=[...e].reverse().find(a=>a.frozen),r=this.__getColumnEnd(s),n=e.find(a=>!a.frozen&&!a._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(n)-r,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return e.frozen||e.frozenToEnd?!0:this.__isHorizontallyInViewport(e._sizerCell)}__isHorizontallyInViewport(e){return e.offsetLeft+e.offsetWidth>=this._scrollLeft&&e.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,t){t==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",t),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=I.debounce(this._debounceOverflow,Y,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top");const s=At(t,this.getAttribute("dir"));s>0&&(e+=" start"),s<t.scrollWidth-t.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/giu,n=>n==="start"?"end":"start")),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left");const r=e.trim();r.length>0&&this.getAttribute("overflow")!==r?this.setAttribute("overflow",r):r.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=I.debounce(this._debouncerCacheElements,q,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=I.debounce(this.__debounceUpdateFrozenColumn,q,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((r,n)=>r._order-n._order);let t,s;for(let r=0;r<e.length;r++){const n=e[r];n._lastFrozen=!1,n._firstFrozenToEnd=!1,s===void 0&&n.frozenToEnd&&!n.hidden&&(s=r),n.frozen&&!n.hidden&&(t=r)}t!==void 0&&(e[t]._lastFrozen=!0),s!==void 0&&(e[s]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const e=this.$.table.scrollWidth,t=this.$.table.clientWidth,s=Math.max(0,this.$.table.scrollLeft),r=At(this.$.table,this.getAttribute("dir")),n=`translate(${-s}px, 0)`;this.$.header.style.transform=n,this.$.footer.style.transform=n,this.$.items.style.transform=n;const a=this.__isRTL?r+t-e:s,l=`translate(${a}px, 0)`;this._frozenCells.forEach(g=>{g.style.transform=l});const u=this.__isRTL?r:s+t-e,p=`translate(${u}px, 0)`;let f=p;if(this._lazyColumns&&this._areSizerCellsAssigned()){const g=this._getColumnsInOrder(),C=[...g].reverse().find(B=>!B.frozenToEnd&&!B._bodyContentHidden),w=this.__getColumnEnd(C),O=g.find(B=>B.frozenToEnd),x=this.__getColumnStart(O);f=`translate(${u+(x-w)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(g=>{this.$.items.contains(g)?g.style.transform=f:g.style.transform=p}),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-a}px`)}_areSizerCellsAssigned(){return this._getColumnsInOrder().every(e=>e._sizerCell)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wn=o=>class extends o{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(t=>!this._itemsEqual(t,e)))}_toggleItem(e){this._isSelected(e)?this.deselectItem(e):this.selectItem(e)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,t){const s=t||[],r=new Set;return s.forEach(n=>{r.add(this.getItemId(n))}),r}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let pi="prepend";const An=o=>class extends o{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>pi},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){pi=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const t=e.target;e.stopPropagation(),t._grid=this,this.__updateSorter(t,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(t=>e.indexOf(t)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,t)=>{e._order=this._sorters.length>1?t:null})}__appendSorter(e){e.direction?this._sorters.includes(e)||this._sorters.push(e):this._removeArrayItem(this._sorters,e),this.__updateSortOrders()}__prependSorter(e){this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders()}__updateSorter(e,t,s){if(!(!e.direction&&this._sorters.indexOf(e)===-1)){if(e._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!s)||this.multiSortOnShiftClick&&t)this.multiSortPriority==="append"?this.__appendSorter(e):this.__prependSorter(e);else if(e.direction||this.multiSortOnShiftClick){const r=this._sorters.filter(n=>n!==e);this._sorters=e.direction?[e]:[],r.forEach(n=>{n._order=null,n.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,t){const s=e.indexOf(t);s>-1&&e.splice(s,1)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const En=o=>class extends o{static get properties(){return{cellClassNameGenerator:{type:Function,sync:!0},cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){M(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellClassNames(e,this.__getRowModel(e))})}generateCellPartNames(){M(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellPartNames(e,this.__getRowModel(e))})}_generateCellClassNames(e,t){ge(e,s=>{if(s.__generatedClasses&&s.__generatedClasses.forEach(r=>s.classList.remove(r)),this.cellClassNameGenerator){const r=this.cellClassNameGenerator(s._column,t);s.__generatedClasses=r&&r.split(" ").filter(n=>n.length>0),s.__generatedClasses&&s.__generatedClasses.forEach(n=>s.classList.add(n))}})}_generateCellPartNames(e,t){ge(e,s=>{if(s.__generatedParts&&s.__generatedParts.forEach(r=>{te(s,null,r)}),this.cellPartNameGenerator){const r=this.cellPartNameGenerator(s._column,t);s.__generatedParts=r&&r.split(" ").filter(n=>n.length>0),s.__generatedParts&&s.__generatedParts.forEach(n=>{te(s,!0,n)})}})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const In=o=>class extends hn(pn(gn(nn(xn(wn(An(Cn(yn(rn(bn(cn(un(vn(mn(En(Vi(o))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:Ji},_ios:{type:Boolean,value:Re},_firefox:{type:Boolean,value:ir},_android:{type:Boolean,value:ni},_touchDevice:{type:Boolean,value:Fe},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const i=this.__getFirstVisibleItem();return i?i.index:void 0}get _lastVisibleIndex(){const i=this.__getLastVisibleItem();return i?i.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(i=>this._isInViewport(i))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(i=>this._isInViewport(i))}_isInViewport(i){const e=this.$.table.getBoundingClientRect(),t=i.getBoundingClientRect(),s=this.$.header.getBoundingClientRect().height,r=this.$.footer.getBoundingClientRect().height;return t.bottom>e.top+s&&t.top<e.bottom-r}_getRenderedRows(){return Array.from(this.$.items.children).filter(i=>!i.hidden).sort((i,e)=>i.index-e.index)}_getRowContainingNode(i){const e=Ot("vaadin-grid-cell-content",i);return e?e.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(i,e){const t=this.__getRowModel(e);return this.getItemId(i)===this.getItemId(t.item)}ready(){super.ready(),this.__virtualizer=new jr({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>{this.__updateColumnsBodyContentHidden(),this.__tryToRecalculateColumnWidthsIfPending()})).observe(this.$.table),Tt(this),this._tooltipController=new Bt(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}__getBodyCellCoordinates(i){if(this.$.items.contains(i)&&i.localName==="td")return{item:i.parentElement._item,column:i._column}}__focusBodyCell({item:i,column:e}){const t=this._getRenderedRows().find(r=>r._item===i),s=t&&[...t.children].find(r=>r._column===e);s&&s.focus()}_focusFirstVisibleRow(){const i=this.__getFirstVisibleItem();this.__rowFocusMode=!0,i.focus()}_flatSizeChanged(i,e,t,s){if(e&&t&&s){const r=this.shadowRoot.activeElement,n=this.__getBodyCellCoordinates(r),a=e.size||0;e.size=i,e.update(a-1,a-1),i<a&&e.update(i-1,i-1),n&&r.parentElement.hidden&&this.__focusBodyCell(n),this._resetKeyboardNavigation()}}__getIntrinsicWidth(i){return this.__intrinsicWidthCache.has(i)||this.__calculateAndCacheIntrinsicWidths([i]),this.__intrinsicWidthCache.get(i)}__getDistributedWidth(i,e){if(i==null||i===this)return 0;const t=Math.max(this.__getIntrinsicWidth(i),this.__getDistributedWidth((i.assignedSlot||i).parentElement,i));if(!e)return t;const s=i,r=t,n=s._visibleChildColumns.map(p=>this.__getIntrinsicWidth(p)).reduce((p,f)=>p+f,0),a=Math.max(0,r-n),u=this.__getIntrinsicWidth(e)/n*a;return this.__getIntrinsicWidth(e)+u}_recalculateColumnWidths(i){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(s=>{s.__debounceUpdateHeaderFooterRowVisibility&&s.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map;const e=this._firstVisibleIndex,t=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(s=>s.index>=e&&s.index<=t),this.__calculateAndCacheIntrinsicWidths(i),i.forEach(s=>{s.width=`${this.__getDistributedWidth(s)}px`})}__setVisibleCellContentAutoWidth(i,e){i._allCells.filter(t=>this.$.items.contains(t)?this.__viewportRowsCache.includes(t.parentElement):!0).forEach(t=>{t.__measuringAutoWidth=e,t.__measuringAutoWidth?(t.__originalWidth=t.style.width,t.style.width="auto",t.style.position="absolute"):(t.style.width=t.__originalWidth,delete t.__originalWidth,t.style.position="")})}__getAutoWidthCellsMaxWidth(i){return i._allCells.reduce((e,t)=>t.__measuringAutoWidth?Math.max(e,t.offsetWidth+1):e,0)}__calculateAndCacheIntrinsicWidths(i){i.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!0)),i.forEach(e=>{const t=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,t)}),i.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!1))}recalculateColumnWidths(){if(!this._columnTree)return;if(he(this)||this._dataProviderController.isLoading()){this.__pendingRecalculateColumnWidths=!0;return}const i=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(i)}__tryToRecalculateColumnWidthsIfPending(){if(!this.__pendingRecalculateColumnWidths||he(this)||this._dataProviderController.isLoading()||[...this.$.items.children].some(t=>t.index===void 0))return;[...this.$.items.children].some(t=>t.clientHeight>0)&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(i){const e=[];for(let t=0;t<i;t++){const s=document.createElement("tr");s.setAttribute("part","row body-row"),s.setAttribute("role","row"),s.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(s,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(s)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(t=>{t.isConnected&&t._cells&&(t._cells=[...t._cells])}),this.__afterCreateScrollerRowsDebouncer=I.debounce(this.__afterCreateScrollerRowsDebouncer,Y,()=>{this._afterScroll(),this.__tryToRecalculateColumnWidthsIfPending()}),e}_createCell(i,e){const s=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,r=document.createElement("vaadin-grid-cell-content");r.setAttribute("slot",s);const n=document.createElement(i);n.id=s.replace("-content-","-"),n.setAttribute("role",i==="td"?"gridcell":"columnheader"),!ni&&!Re&&(n.addEventListener("mouseenter",l=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(l)}),n.addEventListener("mouseleave",()=>{this._hideTooltip()}),n.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const a=document.createElement("slot");if(a.setAttribute("name",s),e&&e._focusButtonMode){const l=document.createElement("div");l.setAttribute("role","button"),l.setAttribute("tabindex","-1"),n.appendChild(l),n._focusButton=l,n.focus=function(){n._focusButton.focus()},l.appendChild(a)}else n.setAttribute("tabindex","-1"),n.appendChild(a);return n._content=r,r.addEventListener("mousedown",()=>{if(tr){const l=u=>{const p=r.contains(this.getRootNode().activeElement),f=u.composedPath().includes(r);!p&&f&&n.focus(),document.removeEventListener("mouseup",l,!0)};document.addEventListener("mouseup",l,!0)}else setTimeout(()=>{r.contains(this.getRootNode().activeElement)||n.focus()})}),n}_updateRow(i,e,t="body",s=!1,r=!1){const n=document.createDocumentFragment();ge(i,a=>{a._vacant=!0}),i.innerHTML="",t==="body"&&(i.__cells=[],i.__detailsCell=null),e.filter(a=>!a.hidden).forEach((a,l,u)=>{let p;if(t==="body"){a._cells||(a._cells=[]),p=a._cells.find(g=>g._vacant),p||(p=this._createCell("td",a),a._onCellKeyDown&&p.addEventListener("keydown",a._onCellKeyDown.bind(a)),a._cells.push(p)),p.setAttribute("part","cell body-cell"),p.__parentRow=i,i.__cells.push(p);const f=i===this.$.sizer;if((!a._bodyContentHidden||f)&&i.appendChild(p),f&&(a._sizerCell=p),l===u.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const g=this._detailsCells.find(C=>C._vacant)||this._createCell("td");this._detailsCells.indexOf(g)===-1&&this._detailsCells.push(g),g._content.parentElement||n.appendChild(g._content),this._configureDetailsCell(g),i.appendChild(g),i.__detailsCell=g,this._a11ySetRowDetailsCell(i,g),g._vacant=!1}r||(a._cells=[...a._cells])}else{const f=t==="header"?"th":"td";s||a.localName==="vaadin-grid-column-group"?(p=a[`_${t}Cell`],p||(p=this._createCell(f),a._onCellKeyDown&&p.addEventListener("keydown",a._onCellKeyDown.bind(a))),p._column=a,i.appendChild(p),a[`_${t}Cell`]=p):(a._emptyCells||(a._emptyCells=[]),p=a._emptyCells.find(g=>g._vacant)||this._createCell(f),p._column=a,i.appendChild(p),a._emptyCells.indexOf(p)===-1&&a._emptyCells.push(p)),p.part.add("cell",`${t}-cell`)}p._content.parentElement||n.appendChild(p._content),p._vacant=!1,p._column=a}),t!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(i),this.appendChild(n),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(i)}__debounceUpdateHeaderFooterRowVisibility(i){i.__debounceUpdateHeaderFooterRowVisibility=I.debounce(i.__debounceUpdateHeaderFooterRowVisibility,q,()=>this.__updateHeaderFooterRowVisibility(i))}__updateHeaderFooterRowVisibility(i){if(!i)return;const e=Array.from(i.children).filter(t=>{const s=t._column;if(s._emptyCells&&s._emptyCells.indexOf(t)>-1)return!1;if(i.parentElement===this.$.header){if(s.headerRenderer)return!0;if(s.header===null)return!1;if(s.path||s.header!==void 0)return!0}else if(s.footerRenderer)return!0;return!1});i.hidden!==!e.length&&(i.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(i,e){this._preventScrollerRotatingCellFocus(i,e),this._columnTree&&(this._updateRowOrderParts(i,e),this._a11yUpdateRowRowindex(i,e),this._getItem(e,i))}_columnTreeChanged(i){this._renderColumnTree(i),this.recalculateColumnWidths(),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(i,e=i.index){ke(i,{first:e===0,last:e===this._flatSize-1,odd:e%2!==0,even:e%2===0})}_updateRowStateParts(i,{expanded:e,selected:t,detailsOpened:s}){ke(i,{expanded:e,collapsed:this.__isRowExpandable(i),selected:t,"details-opened":s})}_renderColumnTree(i){for(M(this.$.items,e=>{this._updateRow(e,i[i.length-1],"body",!1,!0);const t=this.__getRowModel(e);this._updateRowOrderParts(e),this._updateRowStateParts(e,t),this._filterDragAndDrop(e,t)});this.$.header.children.length<i.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>i.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);M(this.$.header,(e,t,s)=>{this._updateRow(e,i[t],"header",t===i.length-1);const r=me(e);Z(r,"first-header-row-cell",t===0),Z(r,"last-header-row-cell",t===s.length-1)}),M(this.$.footer,(e,t,s)=>{this._updateRow(e,i[i.length-1-t],"footer",t===0);const r=me(e);Z(r,"first-footer-row-cell",t===0),Z(r,"last-footer-row-cell",t===s.length-1)}),this._updateRow(this.$.sizer,i[i.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.generateCellClassNames(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}_updateItem(i,e){i._item=e;const t=this.__getRowModel(i);this._toggleDetailsCell(i,t.detailsOpened),this._a11yUpdateRowLevel(i,t.level),this._a11yUpdateRowSelected(i,t.selected),this._updateRowStateParts(i,t),this._generateCellClassNames(i,t),this._generateCellPartNames(i,t),this._filterDragAndDrop(i,t),M(i,s=>{if(!(s._column&&!s._column.isConnected)&&s._renderer){const r=s._column||this;s._renderer.call(r,s._content,r,t)}}),this._updateDetailsCellHeight(i),this._a11yUpdateRowExpanded(i,t.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(i){i.animationName.indexOf("vaadin-grid-appear")===0&&(i.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(i){return{index:i.index,item:i._item,level:this._getIndexLevel(i.index),expanded:this._isExpanded(i._item),selected:this._isSelected(i._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(i._item)}}_showTooltip(i){const e=this._tooltipController.node;e&&e.isConnected&&(this._tooltipController.setTarget(i.target),this._tooltipController.setContext(this.getEventContext(i)),e._stateController.open({focus:i.type==="focusin",hover:i.type==="mouseenter"}))}_hideTooltip(i){const e=this._tooltipController&&this._tooltipController.node;e&&e._stateController.close(i)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach(i=>{i.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})})}__updateVisibleRows(i,e){this.__virtualizer&&this.__virtualizer.update(i,e)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sn=y`
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
 */A("vaadin-grid",Sn,{moduleId:"vaadin-grid-styles"});class Oe extends In(ie(H(oe(P)))){static get template(){return F`
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
    `}static get is(){return"vaadin-grid"}}R(Oe);A("vaadin-grid-sorter",y`
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
 */const Os=document.createElement("template");Os.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Os.content);A("vaadin-grid-sorter",y`
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
  `,{moduleId:"vaadin-grid-sorter-styles"});const Tn=o=>class extends o{static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null,sync:!0},_order:{type:Number,value:null,sync:!0},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(e,t){t!==!1&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this._isConnected||(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:!!this._shiftClick,fromSorterClick:!!this._fromSorterClick},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(e){return e===null?"":e+1}_onClick(e){if(e.defaultPrevented)return;const t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),this._shiftClick=e.shiftKey,this._fromSorterClick=!0,this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class On extends Tn(H(ce(P))){static get template(){return F`
      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}}R(On);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zn=o=>class extends ji(Wo(Wi(Mi(o)))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new Uo(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Ki(this.inputElement,this._labelController))}_shouldSetActive(e){return e.target.localName==="a"?!1:super._shouldSetActive(e)}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kn=y`
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
 */A("vaadin-checkbox",kn,{moduleId:"vaadin-checkbox-styles"});class Pn extends zn(ie(H(P))){static get is(){return"vaadin-checkbox"}static get template(){return F`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Bt(this),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}R(Pn);(function(){const o=function(i){return window.Vaadin.Flow.tryCatchWrapper(i,"Vaadin Grid")};window.Vaadin.Flow.gridConnector={initLazy:i=>o(function(e){if(e.$connector)return;const t=e._dataProviderController;t.ensureFlatIndexHierarchyOriginal=t.ensureFlatIndexHierarchy,t.ensureFlatIndexHierarchy=o(function(d){const{item:h}=this.getFlatIndexContext(d);if(!h||!this.isExpanded(h))return;e.$connector.hasCacheForParentKey(e.getItemId(h))?this.ensureFlatIndexHierarchyOriginal(d):e.$connector.beforeEnsureFlatIndexHierarchy(d,h)}),t.isLoadingOriginal=t.isLoading,t.isLoading=o(function(){return e.$connector.hasEnsureSubCacheQueue()||this.isLoadingOriginal()});const s={},r={},n={},a=50,l=20;let u=[],p,f=[],g;const C=150;let w,O={};const x="null";O[x]=[0,0];let N=null,B=null;const re=["SINGLE","NONE","MULTI"];let k={},S="SINGLE",$=!1;e.size=0,e.itemIdPath="key";function be(d){return{[e.itemIdPath]:d}}e.$connector={},e.$connector.hasCacheForParentKey=o(d=>n[d]?.size!==void 0),e.$connector.hasEnsureSubCacheQueue=o(()=>f.length>0),e.$connector.hasParentRequestQueue=o(()=>u.length>0),e.$connector.hasRootRequestQueue=o(()=>Object.keys(s).length>0||!!w?.isActive()),e.$connector.beforeEnsureFlatIndexHierarchy=o(function(d,h){f.push({flatIndex:d,itemkey:e.getItemId(h)}),g=K.debounce(g,Yt,()=>{for(;f.length;)e.$connector.flushEnsureSubCache()})}),e.$connector.doSelection=o(function(d,h){S==="NONE"||!d.length||h&&e.hasAttribute("disabled")||(S==="SINGLE"&&(k={}),d.forEach(c=>{c&&(k[c.key]=c,c.selected=!0,h&&e.$server.select(c.key));const _=!e.activeItem||!c||c.key!=e.activeItem.key;!h&&S==="SINGLE"&&_&&(e.activeItem=c)}),e.selectedItems=Object.values(k))}),e.$connector.doDeselection=o(function(d,h){if(S==="NONE"||!d.length||h&&e.hasAttribute("disabled"))return;const c=e.selectedItems.slice();for(;d.length;){const _=d.shift();for(let m=0;m<c.length;m++){const b=c[m];if(_?.key===b.key){c.splice(m,1);break}}_&&(delete k[_.key],delete _.selected,h&&e.$server.deselect(_.key))}e.selectedItems=c}),e.__activeItemChanged=o(function(d,h){S=="SINGLE"&&(d?k[d.key]||e.$connector.doSelection([d],!0):h&&k[h.key]&&(e.__deselectDisallowed?e.activeItem=h:e.$connector.doDeselection([h],!0)))}),e._createPropertyObserver("activeItem","__activeItemChanged",!0),e.__activeItemChangedDetails=o(function(d,h){e.__disallowDetailsOnClick||d==null&&h===void 0||(d&&!d.detailsOpened?e.$server.setDetailsVisible(d.key):e.$server.setDetailsVisible(null))}),e._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),e.$connector._getSameLevelPage=o(function(d,h,c){if((h.parentItem?e.getItemId(h.parentItem):x)===d)return Math.floor(c/e.pageSize);const{parentCache:m,parentCacheIndex:b}=h;return m?this._getSameLevelPage(d,m,b):null}),e.$connector.flushEnsureSubCache=o(function(){const d=f.shift();return d?(t.ensureFlatIndexHierarchyOriginal(d.flatIndex),!0):!1}),e.$connector.debounceRootRequest=o(function(d){const h=e._hasData?C:0;w=K.debounce(w,Qt.after(h),()=>{e.$connector.fetchPage((c,_)=>e.$server.setRequestedRange(c,_),d,x)})}),e.$connector.flushParentRequests=o(function(){const d=[];u.splice(0,l).forEach(({parentKey:h,page:c})=>{e.$connector.fetchPage((_,m)=>d.push({parentKey:h,firstIndex:_,size:m}),c,h)}),d.length&&e.$server.setParentRequestedRanges(d)}),e.$connector.debounceParentRequest=o(function(d,h){u=u.filter(c=>c.parentKey!==d),u.push({parentKey:d,page:h}),p=K.debounce(p,Qt.after(a),()=>{for(;u.length;)e.$connector.flushParentRequests()})}),e.$connector.fetchPage=o(function(d,h,c){c===x&&(h=Math.min(h,Math.floor((e.size-1)/e.pageSize)));const _=e._getRenderedRows();let m=_.length>0?_[0].index:0,b=_.length>0?_[_.length-1].index:0,v=b-m,z=Math.max(0,m-v),T=Math.min(b+v,e._flatSize),E=[null,null];for(let G=z;G<=T;G++){const{cache:ye,index:ks}=t.getFlatIndexContext(G),Ce=e.$connector._getSameLevelPage(c,ye,ks);Ce!==null&&(E[0]=Math.min(E[0]??Ce,Ce),E[1]=Math.max(E[1]??Ce,Ce))}(E.some(G=>G===null)||h<E[0]||h>E[1])&&(E=[h,h]);let V=O[c]||[-1,-1];if(V[0]!=E[0]||V[1]!=E[1]){O[c]=E;let G=E[1]-E[0]+1;d(E[0]*e.pageSize,G*e.pageSize)}}),e.dataProvider=o(function(d,h){if(d.pageSize!=e.pageSize)throw"Invalid pageSize";let c=d.page;if(d.parentItem){let _=e.getItemId(d.parentItem);r[_]||(r[_]={});const m=t.getItemContext(d.parentItem);n[_]?.[c]&&m.subCache?(c=Math.min(c,Math.floor(n[_].size/e.pageSize)),f=[],h(n[_][c],n[_].size)):(r[_][c]=h,e.$connector.debounceParentRequest(_,c))}else{if(c=Math.min(c,Math.floor(e.size/e.pageSize)),e.size===0){h([],0);return}n[x]?.[c]?h(n[x][c]):(s[c]=h,e.$connector.debounceRootRequest(c))}}),e.$connector.setSorterDirections=o(function(d){$=!0,setTimeout(o(()=>{try{const h=Array.from(e.querySelectorAll("vaadin-grid-sorter"));e._sorters.forEach(c=>{h.includes(c)||h.push(c)}),h.forEach(c=>{c.direction=null}),e.multiSortPriority!=="append"&&(d=d.reverse()),d.forEach(({column:c,direction:_})=>{h.forEach(m=>{m.getAttribute("path")===c&&(m.direction=_)})})}finally{$=!1}}))}),e._updateItem=o(function(d,h){Oe.prototype._updateItem.call(e,d,h),d.hidden||Array.from(d.children).forEach(c=>{Array.from(c?._content?.__templateInstance?.children||[]).forEach(_=>{_._attachRenderedComponentIfAble&&_._attachRenderedComponentIfAble(),Array.from(_?.children||[]).forEach(m=>{m._attachRenderedComponentIfAble&&m._attachRenderedComponentIfAble()})})}),S===re[1]&&(d.removeAttribute("aria-selected"),Array.from(d.children).forEach(c=>c.removeAttribute("aria-selected")))});const Wt=o(function(d,h){if(d==null||e.$server.updateExpandedState==null)return;let c=e.getItemId(d);e.$server.updateExpandedState(c,h)});e.expandItem=o(function(d){Wt(d,!0),Oe.prototype.expandItem.call(e,d)}),e.collapseItem=o(function(d){Wt(d,!1),Oe.prototype.collapseItem.call(e,d)});const Me=function(d){if(!d||!Array.isArray(d))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(d);let h=Array.from(e.detailsOpenedItems),c=!1;for(let _=0;_<d.length;++_){const m=d[_];m&&(m.detailsOpened?e._getItemIndexInArray(m,h)<0&&h.push(m):e._getItemIndexInArray(m,h)>=0&&h.splice(e._getItemIndexInArray(m,h),1),k[m.key]&&(k[m.key]=m,m.selected=!0,c=!0))}e.detailsOpenedItems=h,c&&e.selectedItems.splice(0,e.selectedItems.length,...Object.values(k))},st=function(d,h){let c;if((h||x)!==x){c=n[h][d];const _=be(h),m=t.getItemContext(_);if(m&&m.subCache){const b=r[h],v=b&&b[d];Gt(d,c,v,m.subCache)}}else c=n[x][d],Gt(d,c,s[d],t.rootCache);return c},Gt=function(d,h,c,_){if(!c){let m=d*e.pageSize,b=m+e.pageSize;if(h){if(_&&_.items)for(let v=m;v<b;v++)_.items[v]&&(_.items[v]=h[v-m])}else if(_&&_.items)for(let v=m;v<b;v++)delete _.items[v]}},Ut=function(){ot(),e.__updateVisibleRows()},ot=function(){t.recalculateFlatSize(),e._flatSize=t.flatSize},Ne=function(d){if(!d||!e.$||e.$.items.childElementCount===0)return;const h=d.map(_=>_.key),c=e._getRenderedRows().filter(_=>_._item&&h.includes(_._item.key)).map(_=>_.index);c.length>0&&e.__updateVisibleRows(c[0],c[c.length-1])};e.$connector.set=o(function(d,h,c){if(d%e.pageSize!=0)throw"Got new data to index "+d+" which is not aligned with the page size of "+e.pageSize;let _=c||x;const m=d/e.pageSize,b=Math.ceil(h.length/e.pageSize);_===x&&(B=[m,m+b-1]);for(let v=0;v<b;v++){let z=m+v,T=h.slice(v*e.pageSize,(v+1)*e.pageSize);n[_]||(n[_]={}),n[_][z]=T,e.$connector.doSelection(T.filter(V=>V.selected)),e.$connector.doDeselection(T.filter(V=>!V.selected&&k[V.key]));const E=st(z,_);E&&(Me(E),Ne(E))}});const qt=function(d){let h=d.parentUniqueKey||x;if(n[h]){for(let c in n[h])for(let _ in n[h][c])if(e.getItemId(n[h][c][_])===e.getItemId(d))return{page:c,index:_,parentKey:h}}return null};e.$connector.updateHierarchicalData=o(function(d){let h=[];for(let _=0;_<d.length;_++){let m=qt(d[_]);if(m){n[m.parentKey][m.page][m.index]=d[_];let b=m.parentKey+":"+m.page;h[b]||(h[b]={parentKey:m.parentKey,page:m.page})}}let c=Object.keys(h);for(let _=0;_<c.length;_++){let m=h[c[_]];const b=st(m.page,m.parentKey);b&&(Me(b),Ne(b))}}),e.$connector.updateFlatData=o(function(d){for(let h=0;h<d.length;h++){let c=qt(d[h]);if(c){n[c.parentKey][c.page][c.index]=d[h];const _=parseInt(c.page)*e.pageSize+parseInt(c.index),{rootCache:m}=t;m.items[_]&&(m.items[_]=d[h])}}Me(d),Ne(d)}),e.$connector.clearExpanded=o(function(){e.expandedItems=[],f=[],u=[]});const zs=function(){const d=O[x];if(!d||!N)return;const h=N[1]-N[0]+1,c=Array.from({length:h},(_,m)=>N[0]+m);if(B){const[_,m]=B;for(let b=_;b<=m;b++){const v=c.indexOf(b);v>=0&&c.splice(v,1)}}c.some(_=>_>=d[0]&&_<=d[1])&&(d[0]=-1,d[1]=-1)};e.$connector.clear=o(function(d,h,c){let _=c||x;if(!n[_]||Object.keys(n[_]).length===0)return;if(d%e.pageSize!=0)throw"Got cleared data for index "+d+" which is not aligned with the page size of "+e.pageSize;let m=Math.floor(d/e.pageSize),b=Math.ceil(h/e.pageSize);_===x&&(N=[m,m+b-1]);for(let T=0;T<b;T++){let E=m+T,V=n[_][E];e.$connector.doDeselection(V.filter(ye=>k[ye.key])),V.forEach(ye=>e.closeItemDetails(ye)),delete n[_][E];const G=st(E,c);G&&Me(G),Ne(V)}let v=t.rootCache;if(c){const T=be(_);v=t.getItemContext(T).subCache}const z=d+b*e.pageSize;for(let T=d;T<z;T++)delete v.items[T],v.removeSubCache(T);ot()}),e.$connector.reset=o(function(){e.size=0,Be(n),Be(t.rootCache.items),Be(O),g&&g.cancel(),p&&p.cancel(),w&&w.cancel(),g=void 0,p=void 0,f=[],u=[],Ut()});const Be=d=>Object.keys(d).forEach(h=>delete d[h]);e.$connector.updateSize=d=>e.size=d,e.$connector.updateUniqueItemIdPath=d=>e.itemIdPath=d,e.$connector.expandItems=o(function(d){let h=Array.from(e.expandedItems);d.filter(c=>!e._isExpanded(c)).forEach(c=>h.push(c)),e.expandedItems=h}),e.$connector.collapseItems=o(function(d){let h=Array.from(e.expandedItems);d.forEach(c=>{let _=e._getItemIndexInArray(c,h);_>=0&&h.splice(_,1)}),e.expandedItems=h,d.forEach(c=>e.$connector.removeFromQueue(c))}),e.$connector.removeFromQueue=o(function(d){let h=e.getItemId(d);Object.values(r[h]||{}).forEach(c=>c([])),delete r[h],f=f.filter(c=>c.itemkey!==h),u=u.filter(c=>c.parentKey!==h)}),e.$connector.confirmParent=o(function(d,h,c){n[h]||(n[h]={});const _=n[h].size!==c;n[h].size=c,c===0&&(n[h][0]=[]);let m=Object.getOwnPropertyNames(r[h]||{});for(let b=0;b<m.length;b++){let v=m[b],z=O[h]||[0,0];const T=r[h][v];if(n[h]&&n[h][v]||v<z[0]||v>z[1]){delete r[h][v];let E=n[h][v]||new Array(c);T(E,c)}else T&&c===0&&(delete r[h][v],T([],c))}if(_&&m.length===0){const b=be(h),v=t.getItemContext(b);v&&v.subCache&&(v.subCache.size=c),ot()}e.$server.confirmParentUpdate(d,h),e.loading||(e.__confirmParentUpdateDebouncer=K.debounce(e.__confirmParentUpdateDebouncer,Yt,()=>e.__updateVisibleRows()))}),e.$connector.confirm=o(function(d){let h=Object.getOwnPropertyNames(s);for(let c=0;c<h.length;c++){let _=h[c],m=O[x]||[0,0];const b=e.size?Math.ceil(e.size/e.pageSize)-1:0,v=Math.min(m[1],b),z=s[_];n[x]?.[_]||_<m[0]||+_>v?(delete s[_],n[x][_]?z(n[x][_]):(z(new Array(e.pageSize)),e.requestContentUpdate())):z&&e.size===0&&(delete s[_],z([]))}zs(),B=null,N=null,e.$server.confirmUpdate(d)}),e.$connector.ensureHierarchy=o(function(){for(let d in n)d!==x&&delete n[d];Be(O),t.rootCache.removeSubCaches(),Ut()}),e.$connector.setSelectionMode=o(function(d){if((typeof d=="string"||d instanceof String)&&re.indexOf(d)>=0)S=d,k={},e.$connector.updateMultiSelectable();else throw"Attempted to set an invalid selection mode"}),e.$connector.updateMultiSelectable=o(function(){e.$&&(S===re[0]?e.$.table.setAttribute("aria-multiselectable",!1):S===re[1]?e.$.table.removeAttribute("aria-multiselectable"):e.$.table.setAttribute("aria-multiselectable",!0))}),e._createPropertyObserver("isAttached",()=>e.$connector.updateMultiSelectable());const jt=d=>h=>{d&&(d(h),d=null)};e.$connector.setHeaderRenderer=o(function(d,h){const{content:c,showSorter:_,sorterPath:m}=h;if(c===null){d.headerRenderer=null;return}d.headerRenderer=jt(b=>{b.innerHTML="";let v=b;if(_){const z=document.createElement("vaadin-grid-sorter");z.setAttribute("path",m);const T=c instanceof Node?c.textContent:c;T&&z.setAttribute("aria-label",`Sort by ${T}`),b.appendChild(z),v=z}c instanceof Node?v.appendChild(c):v.textContent=c})}),e.__applySorters=()=>{const d=e._mapSorters(),h=JSON.stringify(e._previousSorters)!==JSON.stringify(d);e._previousSorters=d,Oe.prototype.__applySorters.call(e),h&&!$&&e.$server.sortersChanged(d)},e.$connector.setFooterRenderer=o(function(d,h){const{content:c}=h;if(c===null){d.footerRenderer=null;return}d.footerRenderer=jt(_=>{_.innerHTML="",c instanceof Node?_.appendChild(c):_.textContent=c})}),e.addEventListener("vaadin-context-menu-before-open",o(function(d){const{key:h,columnId:c}=d.detail;e.$server.updateContextMenuTargetItem(h,c)})),e.getContextMenuBeforeOpenDetail=o(function(d){const h=d.detail.sourceEvent||d,c=e.getEventContext(h),_=c.item?.key||"",m=c.column?.id||"";return{key:_,columnId:m}}),e.preventContextMenu=o(function(d){const h=d.type==="click",{column:c}=e.getEventContext(d);return h&&c instanceof yt}),e.addEventListener("click",o(d=>Kt(d,"item-click"))),e.addEventListener("dblclick",o(d=>Kt(d,"item-double-click"))),e.addEventListener("column-resize",o(d=>{e._getColumnsInOrder().filter(c=>!c.hidden).forEach(c=>{c.dispatchEvent(new CustomEvent("column-drag-resize"))}),e.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:d.detail.resizedColumn._flowId}}))})),e.addEventListener("column-reorder",o(d=>{const h=e._columnTree.slice(0).pop().filter(c=>c._flowId).sort((c,_)=>c._order-_._order).map(c=>c._flowId);e.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:h}}))})),e.addEventListener("cell-focus",o(d=>{const h=e.getEventContext(d);["header","body","footer"].indexOf(h.section)!==-1&&e.dispatchEvent(new CustomEvent("grid-cell-focus",{detail:{itemKey:h.item?h.item.key:null,internalColumnId:h.column?h.column._flowId:null,section:h.section}}))}));function Kt(d,h){if(d.defaultPrevented)return;const c=d.target;if(Es(c)||c instanceof HTMLLabelElement)return;const _=e.getEventContext(d),m=_.section;_.item&&m!=="details"&&(d.itemKey=_.item.key,_.column&&(d.internalColumnId=_.column._flowId),e.dispatchEvent(new CustomEvent(h,{detail:d})))}e.cellClassNameGenerator=o(function(d,h){const c=h.item.style;if(c)return(c.row||"")+" "+(d&&c[d._flowId]||"")}),e.cellPartNameGenerator=o(function(d,h){const c=h.item.part;if(c)return(c.row||"")+" "+(d&&c[d._flowId]||"")}),e.dropFilter=o(d=>d.item&&!d.item.dropDisabled),e.dragFilter=o(d=>d.item&&!d.item.dragDisabled),e.addEventListener("grid-dragstart",o(d=>{e._isSelected(d.detail.draggedItems[0])?(e.__selectionDragData?Object.keys(e.__selectionDragData).forEach(h=>{d.detail.setDragData(h,e.__selectionDragData[h])}):(e.__dragDataTypes||[]).forEach(h=>{d.detail.setDragData(h,d.detail.draggedItems.map(c=>c.dragData[h]).join(`
`))}),e.__selectionDraggedItemsCount>1&&d.detail.setDraggedItemsCount(e.__selectionDraggedItemsCount)):(e.__dragDataTypes||[]).forEach(h=>{d.detail.setDragData(h,d.detail.draggedItems[0].dragData[h])})}))})(i)}})();/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rn=o=>class extends Jr(o){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this.validate()}_onInput(e){super._onInput(e),this.invalid&&this.validate()}_valueChanged(e,t){super._valueChanged(e,t),t!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dn=y`
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
`;A("vaadin-text-area",[xs,Dn],{moduleId:"lumo-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ln extends Le{constructor(i,e){super(i,"textarea","textarea",{initializer:(t,s)=>{const r=s.getAttribute("value");r&&(t.value=r);const n=s.getAttribute("name");n&&t.setAttribute("name",n),t.id=this.defaultId,typeof e=="function"&&e(t)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fn=o=>class extends As(Rn(o)){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}get clearElement(){return this.$.clearButton}_onResize(){this._updateHeight(),this.__scrollPositionUpdated()}_onScroll(){this.__scrollPositionUpdated()}ready(){super.ready(),this.addController(new Ln(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Ki(this.inputElement,this._labelController)),this.addEventListener("animationend",this._onAnimationEnd),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",e=>{const t=this._inputField.scrollTop;this._inputField.scrollTop+=e.deltaY,t!==this._inputField.scrollTop&&(e.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",`${this._inputField.scrollTop}px`)}_onAnimationEnd(e){e.animationName.indexOf("vaadin-text-area-appear")===0&&this._updateHeight()}_valueChanged(e,t){super._valueChanged(e,t),this._updateHeight()}_updateHeight(){const e=this.inputElement,t=this._inputField;if(!e||!t)return;const s=t.scrollTop,r=this.value?this.value.length:0;if(this._oldValueLength>=r){const a=getComputedStyle(t).height,l=getComputedStyle(e).width;t.style.display="block",t.style.height=a,e.style.maxWidth=l,e.style.height="auto"}this._oldValueLength=r;const n=e.scrollHeight;n>e.clientHeight&&(e.style.height=`${n}px`),e.style.removeProperty("max-width"),t.style.removeProperty("display"),t.style.removeProperty("height"),t.scrollTop=s}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const e=this.inputElement.value.match(this.pattern);return e?e[0]===e.input:!1}catch{return!0}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mn=y`
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
 */A("vaadin-text-area",[on,Mn],{moduleId:"vaadin-text-area-styles"});class Nn extends Fn(H(ie(P))){static get is(){return"vaadin-text-area"}static get template(){return F`
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
    `}ready(){super.ready(),this._tooltipController=new Bt(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}R(Nn);const Bn=y`
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
`;A("vaadin-vertical-layout",Bn,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hn extends ie(H(P)){static get template(){return F`
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
    `}static get is(){return"vaadin-vertical-layout"}}R(Hn);const $n=y`
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
`;A("vaadin-horizontal-layout",$n,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vn extends ie(H(P)){static get template(){return F`
      <style>
        :host {
          display: flex;
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
    `}static get is(){return"vaadin-horizontal-layout"}}R(Vn);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wn=o=>class extends Oi(o){static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0,sync:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(i,e){i==="hidden"&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/u.test(i)&&this._updateFlexAndWidth(),i==="frozen"&&!this.frozen&&(this.frozen=e),i==="lastFrozen"&&!this._lastFrozen&&(this._lastFrozen=e),i==="frozenToEnd"&&!this.frozenToEnd&&(this.frozenToEnd=e),i==="firstFrozenToEnd"&&!this._firstFrozenToEnd&&(this._firstFrozenToEnd=e)}_groupOrderChanged(i,e){if(e){const t=e.slice(0);if(!i){t.forEach(a=>{a._order=0});return}const s=/(0+)$/u.exec(i).pop().length,r=~~(Math.log(e.length)/Math.LN10)+1,n=10**(s-r);t[0]&&t[0]._order&&t.sort((a,l)=>a._order-l._order),Ti(t,n,i)}}_groupReorderStatusChanged(i,e){i===void 0||e===void 0||e.forEach(t=>{t._reorderStatus=i})}_groupResizableChanged(i,e){i===void 0||e===void 0||e.forEach(t=>{t.resizable=i})}_updateVisibleChildColumns(i){this._visibleChildColumns=Array.prototype.filter.call(i,e=>!e.hidden),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(this._visibleChildColumns.length>0){const i=this._visibleChildColumns.reduce((e,t)=>(e+=` + ${(t.width||"0px").replace("calc","")}`,e),"").substring(3);this._setWidth(`calc(${i})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(i,e)=>i+e.flexGrow,0))}}__scheduleAutoFreezeWarning(i,e){if(this._grid){const t=e.replace(/([A-Z])/gu,"-$1").toLowerCase(),s=i[0][e]||i[0].hasAttribute(t);i.every(n=>(n[e]||n.hasAttribute(t))===s)||(this._grid.__autoFreezeWarningDebouncer=I.debounce(this._grid.__autoFreezeWarningDebouncer,Y,()=>{console.warn(`WARNING: Joining ${e} and non-${e} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${e}. Otherwise, exclude the ${e} columns from the joined group.`)}))}}_groupFrozenChanged(i,e){e===void 0||i===void 0||i!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozen"),Array.from(e).forEach(t=>{t.frozen=i}))}_groupFrozenToEndChanged(i,e){e===void 0||i===void 0||i!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozenToEnd"),Array.from(e).forEach(t=>{t.frozenToEnd=i}))}_groupHiddenChanged(i){(i||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const i=this._autoHidden;this._autoHidden=(this._visibleChildColumns||[]).length===0,(i||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(i=>{i.hidden=this.hidden})}_colSpanChanged(i,e,t){e&&(e.setAttribute("colspan",i),this._grid&&this._grid._a11yUpdateCellColspan(e,i)),t&&(t.setAttribute("colspan",i),this._grid&&this._grid._a11yUpdateCellColspan(t,i))}_getChildColumns(i){return J.getColumns(i)}_addNodeObserver(){this._observer=new J(this,()=>{this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,this._grid&&this._grid._debounceUpdateColumnTree&&this._grid._debounceUpdateColumnTree()}),this._observer.flush()}_isColumnElement(i){return i.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(i.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Gn extends Wn(P){static get is(){return"vaadin-grid-column-group"}}R(Gn);const Qe=window;Qe.Vaadin=Qe.Vaadin||{};Qe.Vaadin.setLitRenderer=(o,i,e,t,s,r)=>{const n=Function(`
    "use strict";

    const [render, html, returnChannel] = arguments;

    return (root, model, itemKey) => {
      const { item, index } = model;
      ${s.map(l=>`
          const ${l} = (...args) => {
            if (itemKey !== undefined) {
              returnChannel('${l}', itemKey, args[0] instanceof Event ? [] : [...args]);
            }
          }`).join("")}

      render(html\`${e}\`, root)
    }
  `)(bi,yi,t),a=(l,u,p)=>{const{item:f}=p;l.__litRenderer!==a&&(l.innerHTML="",delete l._$litPart$,l.__litRenderer=a);const g={};for(const C in f)C.startsWith(r)&&(g[C.replace(r,"")]=f[C]);n(l,{...p,item:g},f.key)};a.__rendererId=r,o[i]=a};Qe.Vaadin.unsetLitRenderer=(o,i,e)=>{o[i]?.__rendererId===e&&(o[i]=void 0)};const Qa=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{Mi as A,Vi as B,Wo as C,Wi as D,Rn as E,Jo as F,Re as G,jn as H,Uo as I,Qa as J,tt as K,ji as L,cs as O,us as P,As as R,Ui as S,Bt as T,jr as V,Ki as a,oe as b,$i as c,Dt as d,Le as e,gs as f,qi as g,jo as h,Fe as i,ga as j,ds as k,vs as l,ys as m,xs as n,$t as o,Tt as p,Wr as q,Yi as r,St as s,_s as t,Zi as u,Mt as v,Bi as w,on as x,Jr as y,K as z};

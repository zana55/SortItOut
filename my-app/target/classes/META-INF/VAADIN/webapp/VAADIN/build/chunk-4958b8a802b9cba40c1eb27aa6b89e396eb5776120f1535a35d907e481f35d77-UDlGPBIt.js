import{E,b as A,h as k,d as j}from"./generated-flow-imports-B5MUEhKH.js";import{i as C,f as O,d as z,T as S}from"./indexhtml-Bykin0K9.js";const U=C`
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
`;O("vaadin-horizontal-layout",U,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Q extends E(S(A)){static get template(){return k`
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
    `}static get is(){return"vaadin-horizontal-layout"}}z(Q);const X=C`
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
`;O("vaadin-vertical-layout",X,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class G extends E(S(A)){static get template(){return k`
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
    `}static get is(){return"vaadin-vertical-layout"}}z(G);O("vaadin-app-layout",C`
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
 */const m=t=>t.test(navigator.userAgent),g=t=>t.test(navigator.platform),J=t=>t.test(navigator.vendor),ye=m(/Android/u),ge=m(/Chrome/u)&&J(/Google Inc/u),xe=m(/Firefox/u),Y=g(/^iPad/u)||g(/^Mac/u)&&navigator.maxTouchPoints>1,Z=g(/^iPhone/u),ee=Z||Y,Ee=m(/^((?!chrome|android).)*safari/iu),Ae=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function N(){if(ee){const t=window.innerHeight,a=window.innerWidth>t,r=document.documentElement.clientHeight;a&&r>t?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${r-t}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}N();window.addEventListener("resize",N);const R=document.createElement("template");R.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(R.content);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let v=!1,$=[],B=[];function V(){v=!0,requestAnimationFrame(function(){v=!1,te($),setTimeout(function(){ae(B)})})}function te(t){for(;t.length;)K(t.shift())}function ae(t){for(let e=0,a=t.length;e<a;e++)K(t.shift())}function K(t){const e=t[0],a=t[1],r=t[2];try{a.apply(e,r)}catch(n){setTimeout(()=>{throw n})}}function re(t,e,a){v||V(),$.push([t,e,a])}function oe(t,e,a){v||V(),B.push([t,e,a])}/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let c=new WeakMap,u=new WeakMap,p={},_=0;const P=t=>t&&t.nodeType===Node.ELEMENT_NODE,w=(...t)=>{console.error(`Error: ${t.join(" ")}. Skip setting aria-hidden.`)},ne=(t,e)=>P(t)?e.map(a=>{if(!P(a))return w(a,"is not a valid element"),null;let r=a;for(;r&&r!==t;){if(t.contains(r))return a;r=r.getRootNode().host}return w(a,"is not contained inside",t),null}).filter(a=>!!a):(w(t,"is not a valid element"),[]),ie=(t,e,a,r)=>{const n=ne(e,Array.isArray(t)?t:[t]);p[a]||(p[a]=new WeakMap);const s=p[a],d=[],h=new Set,q=new Set(n),f=o=>{if(!o||h.has(o))return;h.add(o);const l=o.assignedSlot;l&&f(l),f(o.parentNode||o.host)};n.forEach(f);const D=o=>{if(!o||q.has(o))return;const l=o.shadowRoot;(l?[...o.children,...l.children]:[...o.children]).forEach(i=>{if(!["template","script","style"].includes(i.localName))if(h.has(i))D(i);else{const L=i.getAttribute(r),M=L!==null&&L!=="false",F=(c.get(i)||0)+1,I=(s.get(i)||0)+1;c.set(i,F),s.set(i,I),d.push(i),F===1&&M&&u.set(i,!0),I===1&&i.setAttribute(a,"true"),M||i.setAttribute(r,"true")}})};return D(e),h.clear(),_+=1,()=>{d.forEach(o=>{const l=c.get(o)-1,b=s.get(o)-1;c.set(o,l),s.set(o,b),l||(u.has(o)?u.delete(o):o.removeAttribute(r)),b||o.removeAttribute(a)}),_-=1,_||(c=new WeakMap,c=new WeakMap,u=new WeakMap,p={})}},se=(t,e=document.body,a="data-aria-hidden")=>{const r=Array.from(Array.isArray(t)?t:[t]);return e&&r.push(...Array.from(e.querySelectorAll("[aria-live]"))),ie(r,e,a,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class de{constructor(e,a){this.host=e,this.callback=typeof a=="function"?a:()=>e}showModal(){const e=this.callback();this.__showOthers=se(e)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let T=!1;window.addEventListener("keydown",()=>{T=!0},{capture:!0});window.addEventListener("mousedown",()=>{T=!1},{capture:!0});function ke(){let t=document.activeElement||document.body;for(;t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}function Ce(){return T}function H(t){const e=t.style;if(e.visibility==="hidden"||e.display==="none")return!0;const a=window.getComputedStyle(t);return a.visibility==="hidden"||a.display==="none"}function le(t,e){const a=Math.max(t.tabIndex,0),r=Math.max(e.tabIndex,0);return a===0||r===0?r>a:a>r}function ce(t,e){const a=[];for(;t.length>0&&e.length>0;)le(t[0],e[0])?a.push(e.shift()):a.push(t.shift());return a.concat(t,e)}function x(t){const e=t.length;if(e<2)return t;const a=Math.ceil(e/2),r=x(t.slice(0,a)),n=x(t.slice(a));return ce(r,n)}function Oe(t){return t.offsetParent===null&&t.clientWidth===0&&t.clientHeight===0?!0:H(t)}function he(t){return t.matches('[tabindex="-1"]')?!1:t.matches("input, select, textarea, button, object")?t.matches(":not([disabled])"):t.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function ue(t){return t.getRootNode().activeElement===t}function pe(t){if(!he(t))return-1;const e=t.getAttribute("tabindex")||0;return Number(e)}function W(t,e){if(t.nodeType!==Node.ELEMENT_NODE||H(t))return!1;const a=t,r=pe(a);let n=r>0;r>=0&&e.push(a);let s=[];return a.localName==="slot"?s=a.assignedNodes({flatten:!0}):s=(a.shadowRoot||a).children,[...s].forEach(d=>{n=W(d,e)||n}),n}function ve(t){const e=[];return W(t,e)?x(e):e}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const y=[];class me{constructor(e){this.host=e,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return ve(this.__trapNode)}get __focusedElementIndex(){const e=this.__focusableElements;return e.indexOf(e.filter(ue).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(e){if(this.__trapNode=e,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");y.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,y.pop()}__onKeyDown(e){if(this.__trapNode&&this===Array.from(y).pop()&&e.key==="Tab"){e.preventDefault();const a=e.shiftKey;this.__focusNextElement(a)}}__focusNextElement(e=!1){const a=this.__focusableElements,r=e?-1:1,n=this.__focusedElementIndex,s=(a.length+n+r)%a.length,d=a[s];d.focus(),d.localName==="input"&&d.select()}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fe=j(t=>typeof t.prototype.addController=="function"?t:class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(a=>{a.hostConnected&&a.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(a=>{a.hostDisconnected&&a.hostDisconnected()})}addController(a){this.__controllers.add(a),this.$!==void 0&&this.isConnected&&a.hostConnected&&a.hostConnected()}removeController(a){this.__controllers.delete(a)}});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class be extends E(S(fe(A))){static get template(){return k`
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
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__onDrawerKeyDown=this.__onDrawerKeyDown.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__ariaModalController=new de(this,()=>[...this.querySelectorAll('vaadin-drawer-toggle, [slot="drawer"]')]),this.__focusTrapController=new me(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),re(this,this._afterFirstRender),this._updateTouchOptimizedMode(),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{requestAnimationFrame(()=>{this.__isDrawerAnimating?this.__updateOffsetSizePending=!0:this._updateOffsetSize()})}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener),window.addEventListener("keydown",this.__onDrawerKeyDown)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded(),this.$.drawer.addEventListener("transitionstart",()=>{this.__isDrawerAnimating=!0}),this.$.drawer.addEventListener("transitionend",()=>{this.__updateOffsetSizePending&&(this.__updateOffsetSizePending=!1,this._updateOffsetSize()),requestAnimationFrame(()=>{this.__isDrawerAnimating=!1})})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener),window.removeEventListener("keydown",this.__onDrawerKeyDown)}__primarySectionChanged(e){["navbar","drawer"].includes(e)||this.set("primarySection","navbar")}__drawerOpenedChanged(e,a){this.overlay&&(e?this.__trapFocusInDrawer():a&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(e){e.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const e=this.querySelector("vaadin-drawer-toggle");e&&e.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const e=this.querySelectorAll("[slot=drawer]").length,a=this.$.drawer;e===0?(a.setAttribute("hidden",""),this.style.setProperty("--_vaadin-app-layout-drawer-width",0)):(a.removeAttribute("hidden"),this.style.removeProperty("--_vaadin-app-layout-drawer-width")),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const a=this.$.navbarTop.getBoundingClientRect(),n=this.$.navbarBottom.getBoundingClientRect(),d=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${a.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${n.height}px`),this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${d.width}px`)}_updateOverlayMode(){const e=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&e&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(e),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const e=this.$.drawer;this.overlay?(e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label",this.i18n.drawer)):(e.removeAttribute("role"),e.removeAttribute("aria-modal"),e.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(e=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){e();return}this.$.drawer.addEventListener("transitionend",e,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__ariaModalController.close(),this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const e=this.querySelector("vaadin-drawer-toggle");e&&(e.focus(),e.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(e){e.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(e,a){a&&window.removeEventListener(a,this.__closeOverlayDrawerListener),e&&window.addEventListener(e,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(e){e.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(e){return(getComputedStyle(this).getPropertyValue(e)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const e=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",a=this.querySelectorAll('[slot*="navbar"]');a.length>0&&Array.from(a).forEach(r=>{r.getAttribute("slot").indexOf("touch-optimized")>-1&&(r.__touchOptimized=!0),e&&r.__touchOptimized?r.setAttribute("slot","navbar-bottom"):r.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),this.$.navbarBottom.querySelector("[name=navbar-bottom]").assignedNodes().length===0?this.$.navbarBottom.setAttribute("hidden",""):this.$.navbarBottom.removeAttribute("hidden"),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),oe(this,()=>{this.removeAttribute("no-anim")})}}z(be);const Se=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{de as A,fe as C,me as F,Ae as a,ee as b,oe as c,ue as d,Oe as e,Ee as f,ke as g,xe as h,Ce as i,ye as j,ge as k,Se as l};

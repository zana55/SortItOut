import{L as se,C as ae,D as ne,A as le,I as U,a as q,b as V,r as de,h as ue,F as ce,c as L,d as Q,K as G,T as j,g as W,S as he,f as H,e as B,i as T,j as E,o as D,k as pe,O as me,p as R,l as Y,m as X,n as Ae,q as ge,P as fe,s as P,V as _e,t as ve,u as be,v as ye,w as Ce,x as xe,R as Ie,y as we,z as Ee}from"./chunk-be2136a05c5be734851c1407e3884a3c6db24e95e94a1e32449f227fe52a5124-D-PyFovZ.js";import{E as S,P as b,h as y,D as J,t as Be}from"./generated-flow-imports-BTegz7Qs.js";import{f as h,i as c,T as C,d as f,Q as Se,k as O}from"./indexhtml-D7XKlZ_T.js";import"./chunk-6e9f10314bcc1c9187b5216bd9a4ea9fed464d221575e154b13f9e2e3e1f0b87-BigdA2Md.js";h("vaadin-radio-button",c`
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
 */const ke=s=>class extends se(ae(ne(le(s)))){static get properties(){return{name:{type:String,value:""},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("radio"),this.value="on"}ready(){super.ready(),this.addController(new U(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new q(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fe=c`
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
 */h("vaadin-radio-button",Fe,{moduleId:"vaadin-radio-button-styles"});class Pe extends ke(S(C(V(b)))){static get is(){return"vaadin-radio-button"}static get template(){return y`
      <div class="vaadin-radio-button-container">
        <div part="radio" aria-hidden="true"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>
      </div>
    `}}f(Pe);const Ve=c`
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
`;h("vaadin-radio-group",[de,ue,Ve],{moduleId:"lumo-radio-group"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ze=s=>class extends ce(L(Q(G(s)))){static get properties(){return{value:{type:String,notify:!0,value:"",observer:"__valueChanged"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__readonlyChanged"},_fieldName:{type:String}}}constructor(){super(),this.__registerRadioButton=this.__registerRadioButton.bind(this),this.__unregisterRadioButton=this.__unregisterRadioButton.bind(this),this.__onRadioButtonCheckedChange=this.__onRadioButtonCheckedChange.bind(this),this._tooltipController=new j(this),this._tooltipController.addEventListener("tooltip-changed",e=>{const t=e.detail.node;if(t&&t.isConnected){const r=this.__radioButtons.map(o=>o.inputElement);this._tooltipController.setAriaTarget(r)}else this._tooltipController.setAriaTarget([])})}get __radioButtons(){return this.__filterRadioButtons([...this.children])}get __selectedRadioButton(){return this.__radioButtons.find(e=>e.checked)}get isHorizontalRTL(){return this.__isRTL&&this._theme!=="vertical"}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","radiogroup"),this._fieldName=`${this.localName}-${W()}`;const e=this.shadowRoot.querySelector("slot:not([name])");this._observer=new he(e,({addedNodes:t,removedNodes:r})=>{this.__filterRadioButtons(t).reverse().forEach(this.__registerRadioButton),this.__filterRadioButtons(r).forEach(this.__unregisterRadioButton);const o=this.__radioButtons.map(n=>n.inputElement);this._tooltipController.setAriaTarget(o)}),this.addController(this._tooltipController)}__filterRadioButtons(e){return e.filter(t=>t.nodeType===Node.ELEMENT_NODE&&t.localName==="vaadin-radio-button")}_onKeyDown(e){super._onKeyDown(e);const t=e.composedPath().find(r=>r.nodeType===Node.ELEMENT_NODE&&r.localName==="vaadin-radio-button");["ArrowLeft","ArrowUp"].includes(e.key)&&(e.preventDefault(),this.__selectNextRadioButton(t)),["ArrowRight","ArrowDown"].includes(e.key)&&(e.preventDefault(),this.__selectPrevRadioButton(t))}_invalidChanged(e){super._invalidChanged(e),e?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")}__selectNextRadioButton(e){const t=this.__radioButtons.indexOf(e);this.__selectIncRadioButton(t,this.isHorizontalRTL?1:-1)}__selectPrevRadioButton(e){const t=this.__radioButtons.indexOf(e);this.__selectIncRadioButton(t,this.isHorizontalRTL?-1:1)}__selectIncRadioButton(e,t){const r=(this.__radioButtons.length+e+t)%this.__radioButtons.length,o=this.__radioButtons[r];o.disabled?this.__selectIncRadioButton(r,t):(o.focusElement.focus(),o.focusElement.click())}__registerRadioButton(e){e.name=this._fieldName,e.addEventListener("checked-changed",this.__onRadioButtonCheckedChange),(this.disabled||this.readonly)&&(e.disabled=!0),e.checked&&this.__selectRadioButton(e)}__unregisterRadioButton(e){e.removeEventListener("checked-changed",this.__onRadioButtonCheckedChange),e.value===this.value&&this.__selectRadioButton(null)}__onRadioButtonCheckedChange(e){e.target.checked&&this.__selectRadioButton(e.target)}__valueChanged(e,t){if(!(t===void 0&&e==="")){if(e){const r=this.__radioButtons.find(o=>o.value===e);r?(this.__selectRadioButton(r),this.toggleAttribute("has-value",!0)):console.warn(`The radio button with the value "${e}" was not found.`)}else this.__selectRadioButton(null),this.removeAttribute("has-value");t!==void 0&&this.validate()}}__readonlyChanged(e,t){!e&&t===void 0||t!==e&&this.__updateRadioButtonsDisabledProperty()}_disabledChanged(e,t){super._disabledChanged(e,t),!(!e&&t===void 0)&&t!==e&&this.__updateRadioButtonsDisabledProperty()}_shouldRemoveFocus(e){return!this.contains(e.relatedTarget)}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this.validate()}__selectRadioButton(e){e?this.value=e.value:this.value="",this.__radioButtons.forEach(t=>{t.checked=t===e}),this.readonly&&this.__updateRadioButtonsDisabledProperty()}__updateRadioButtonsDisabledProperty(){this.__radioButtons.forEach(e=>{this.readonly?e.disabled=e!==this.__selectedRadioButton:e.disabled=this.disabled})}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Te=c`
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
 */h("vaadin-radio-group",Te,{moduleId:"vaadin-radio-group-styles"});class Le extends ze(S(C(b))){static get is(){return"vaadin-radio-group"}static get template(){return y`
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
    `}}f(Le);h("vaadin-progress-bar",c`
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
  `,{moduleId:"lumo-progress-bar"});const Z=document.createElement("template");Z.innerHTML=`
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
`;document.head.appendChild(Z.content);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const De=c`
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
 */const Re=s=>class extends s{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,t,r){const o=this._normalizeValue(e,t,r);this.style.setProperty("--vaadin-progress-value",o)}_valueChanged(e){this.setAttribute("aria-valuenow",e)}_minChanged(e){this.setAttribute("aria-valuemin",e)}_maxChanged(e){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,t,r){let o;return!e&&e!==0?o=0:t>=r?o=1:(o=(e-t)/(r-t),o=Math.min(Math.max(o,0),1)),o}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */h("vaadin-progress-bar",De,{moduleId:"vaadin-progress-bar-styles"});class Me extends S(C(Re(b))){static get is(){return"vaadin-progress-bar"}static get template(){return y`
      <div part="bar">
        <div part="value"></div>
      </div>
    `}}f(Me);h("vaadin-upload",c`
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
  `,{moduleId:"lumo-upload"});h("vaadin-upload-icon",c`
    :host::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }
  `,{moduleId:"lumo-upload-icon"});h("vaadin-upload-file-list",c`
    ::slotted(li:not(:first-of-type)) {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload-file-list"});const Oe=c`
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
`;h("vaadin-upload-file",[H,Oe],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $e extends C(b){static get is(){return"vaadin-upload-icon"}static get template(){return y`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `}}f($e);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const K=document.createElement("template");K.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(K.content);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ne=s=>class extends L(s){static get properties(){return{complete:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},file:{type:Object},fileName:{type:String},held:{type:Boolean,value:!1},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object},progress:{type:Number},status:{type:String},tabindex:{type:Number,value:0,reflectToAttribute:!0},uploading:{type:Boolean,value:!1,reflectToAttribute:!0},_progress:{type:Object}}}static get observers(){return["__updateProgress(_progress, progress, indeterminate)"]}ready(){super.ready(),this.addController(new B(this,"progress","vaadin-progress-bar",{initializer:e=>{this._progress=e}})),this.shadowRoot.addEventListener("focusin",e=>{e.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",e=>{e.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(e){return e.composedPath()[0]===this}_errorMessageChanged(e){this.toggleAttribute("error",!!e)}__updateProgress(e,t,r){e&&(e.value=isNaN(t)?0:t/100,e.indeterminate=r)}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ue=c`
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
 */h("vaadin-upload-file",Ue,{moduleId:"vaadin-upload-file-styles"});class qe extends Ne(C(V(b))){static get template(){return y`
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
    `}static get is(){return"vaadin-upload-file"}}f(qe);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qe=s=>class extends s{static get properties(){return{items:{type:Array},i18n:{type:Object}}}static get observers(){return["__updateItems(items, i18n)"]}__updateItems(e,t){e&&t&&this.requestContentUpdate()}requestContentUpdate(){const{items:e,i18n:t}=this;Se(O`
          ${e.map(r=>O`
              <li>
                <vaadin-upload-file
                  .file="${r}"
                  .complete="${r.complete}"
                  .errorMessage="${r.error}"
                  .fileName="${r.name}"
                  .held="${r.held}"
                  .indeterminate="${r.indeterminate}"
                  .progress="${r.progress}"
                  .status="${r.status}"
                  .uploading="${r.uploading}"
                  .i18n="${t}"
                ></vaadin-upload-file>
              </li>
            `)}
        `,this)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ge extends Qe(C(b)){static get is(){return"vaadin-upload-file-list"}static get template(){return y`
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
    `}}f(Ge);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class je extends B{constructor(i){super(i,"add-button","vaadin-button")}initNode(i){i._isDefault&&(this.defaultNode=i),i.addEventListener("touchend",e=>{this.host._onAddFilesTouchEnd(e)}),i.addEventListener("click",e=>{this.host._onAddFilesClick(e)}),this.host._addButton=i}}class We extends B{constructor(i){super(i,"drop-label","span")}initNode(i){i._isDefault&&(this.defaultNode=i),this.host._dropLabel=i}}const He=s=>class extends s{static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:T},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[],sync:!0},maxFiles:{type:Number,value:1/0,sync:!0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}},_addButton:{type:Object},_dropLabel:{type:Object},_fileList:{type:Object},_files:{type:Array}}}static get observers(){return["__updateAddButton(_addButton, maxFiles, i18n, maxFilesReached)","__updateDropLabel(_dropLabel, maxFiles, i18n)","__updateFileList(_fileList, files, i18n)","__updateMaxFilesReached(maxFiles, files)"]}get __acceptRegexp(){if(!this.accept)return null;const e=this.accept.split(",").map(t=>{let r=t.trim();return r=r.replace(/[+.]/gu,"\\$&"),r.startsWith("\\.")&&(r=`.*${r}$`),r.replace(/\/\*/gu,"/.*")});return new RegExp(`^(${e.join("|")})$`,"iu")}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this)),this._addButtonController=new je(this),this.addController(this._addButtonController),this._dropLabelController=new We(this),this.addController(this._dropLabelController),this.addController(new B(this,"file-list","vaadin-upload-file-list",{initializer:e=>{this._fileList=e}})),this.addController(new B(this,"drop-label-icon","vaadin-upload-icon"))}_formatSize(e){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(e);const t=this.i18n.units.sizeBase||1e3,r=~~(Math.log(e)/Math.log(t)),o=Math.max(0,Math.min(3,r-1));return`${parseFloat((e/t**r).toFixed(o))} ${this.i18n.units.size[r]}`}_splitTimeByUnits(e){const t=[60,60,24,1/0],r=[0];for(let o=0;o<t.length&&e>0;o++)r[o]=e%t[o],e=Math.floor(e/t[o]);return r}_formatTime(e,t){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map(r=>(r<10?"0":"")+r).join(":")}_formatFileProgress(e){const t=e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${e.totalStr}: ${e.progress}% (${t})`}__updateMaxFilesReached(e,t){this._setMaxFilesReached(e>=0&&t.length>=e)}__updateAddButton(e,t,r,o){e&&(e.disabled=o,e===this._addButtonController.defaultNode&&(e.textContent=this._i18nPlural(t,r.addFiles)))}__updateDropLabel(e,t,r){e&&e===this._dropLabelController.defaultNode&&(e.textContent=this._i18nPlural(t,r.dropFiles))}__updateFileList(e,t,r){e&&(e.items=[...t],e.i18n=r)}_onDragover(e){e.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}Object.entries(this.headers).forEach(([t,r])=>{e.setRequestHeader(t,r)}),this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,r,o){e.elapsed=o,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(o*(t/r-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/o/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(r),e.status=this._formatFileProgress(e)}uploadFiles(e=this.files){e&&!Array.isArray(e)&&(e=[e]),e=e.filter(t=>!t.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const t=Date.now(),r=e.xhr=this._createXhr();let o,n;r.upload.onprogress=v=>{clearTimeout(o),n=Date.now();const a=(n-t)/1e3,l=v.loaded,d=v.total,p=~~(l/d*100);e.loaded=l,e.progress=p,e.indeterminate=l<=0||l>=d,e.error?e.indeterminate=e.status=void 0:e.abort||(p<100?(this._setStatus(e,d,l,a),o=setTimeout(()=>{e.status=this.i18n.uploading.status.stalled,this._renderFileList()},2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing)),this._renderFileList(),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:r}}))},r.onreadystatechange=()=>{if(r.readyState===4){if(clearTimeout(o),e.indeterminate=e.uploading=!1,e.abort||(e.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:r},cancelable:!0}))))return;r.status===0?e.error=this.i18n.uploading.error.serverUnavailable:r.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:r.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent(`upload-${e.error?"error":"success"}`,{detail:{file:e,xhr:r}})),this._renderFileList()}};const u=new FormData;if(e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:r},cancelable:!0})))return;u.append(e.formDataName,e,e.name),r.open(this.method,e.uploadTarget,!0),this._configureXhr(r),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,r.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:r}})),this._renderFileList()},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:r,formData:u},cancelable:!0}))&&r.send(u)}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._removeFile(e))}_renderFileList(){this._fileList&&this._fileList.requestContentUpdate()}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&e.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));return}const t=this.__acceptRegexp;if(t&&!(t.test(e.type)||t.test(e.name))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}));return}e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.files=[e,...this.files],this.noAuto||this._uploadFile(e)}_removeFile(e){this.files.indexOf(e)>-1&&(this.files=this.files.filter(t=>t!==e),this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:e},bubbles:!0,composed:!0})))}_onAddFilesTouchEnd(e){e.preventDefault(),this._onAddFilesClick(e)}_onAddFilesClick(e){this.maxFilesReached||(e.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileReject(e){E(`${e.detail.file.name}: ${e.detail.error}`,{mode:"alert"})}_onUploadStart(e){E(`${e.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(e){E(`${e.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(e){E(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return e===1?t.one:t.many}_isMultiple(e){return e!==1}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ye extends He(S(C(V(b)))){static get template(){return y`
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
    `}static get is(){return"vaadin-upload"}}f(Ye);h("vaadin-overlay",D,{moduleId:"lumo-vaadin-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */h("vaadin-overlay",pe,{moduleId:"vaadin-overlay-styles"});class ee extends me(C(J(b))){static get template(){return y`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}ready(){super.ready(),R(this)}}f(ee);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xe=c`
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
`;h("vaadin-multi-select-combo-box-chip",[H,Xe],{moduleId:"lumo-multi-select-combo-box-chip"});const te=c`
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
`;h("vaadin-combo-box-item",[Y,te],{moduleId:"lumo-combo-box-item"});/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ie=c`
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
`,re=c`
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
`,oe=c`
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
`;h("vaadin-combo-box-overlay",[D,X,re,ie,oe,c`
      :host {
        --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-combo-box-overlay"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Je=c`
  @media (any-hover: hover) {
    :host(:hover[readonly]) {
      background-color: transparent;
      cursor: default;
    }
  }
`;h("vaadin-multi-select-combo-box-item",[Y,te,Je],{moduleId:"lumo-multi-select-combo-box-item"});h("vaadin-multi-select-combo-box-overlay",[D,X,re,ie,oe,c`
      :host {
        --_vaadin-multi-select-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-multi-select-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-multi-select-combo-box-overlay"});h("vaadin-multi-select-combo-box-container",c`
    :host([auto-expand-vertically]) {
      padding-block: var(--lumo-space-xs);
    }
  `,{moduleId:"lumo-multi-select-combo-box-container"});const Ze=c`
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
`;h("vaadin-multi-select-combo-box",[Ae,Ze],{moduleId:"lumo-multi-select-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ke extends C(b){static get is(){return"vaadin-multi-select-combo-box-chip"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},label:{type:String},item:{type:Object}}}static get template(){return y`
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
    `}_onRemoveClick(i){i.stopPropagation(),this.dispatchEvent(new CustomEvent("item-removed",{detail:{item:this.item},bubbles:!0,composed:!0}))}}f(Ke);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */h("vaadin-multi-select-combo-box-container",c`
    #wrapper {
      display: flex;
      width: 100%;
      min-width: 0;
    }

    :host([auto-expand-vertically]) #wrapper {
      flex-wrap: wrap;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-container-styles"});let k;class et extends ge{static get is(){return"vaadin-multi-select-combo-box-container"}static get template(){if(!k){k=super.template.cloneNode(!0);const i=k.content,e=i.querySelectorAll("slot"),t=document.createElement("div");t.setAttribute("id","wrapper"),i.insertBefore(t,e[2]),t.appendChild(e[0]),t.appendChild(e[1])}return k}static get properties(){return{autoExpandVertically:{type:Boolean,reflectToAttribute:!0}}}}f(et);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tt=s=>class extends s{static get properties(){return{index:{type:Number},item:{type:Object},label:{type:String},selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:{type:Function}}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}static get observedAttributes(){return[...super.observedAttributes,"hidden"]}attributeChangedCallback(e,t,r){e==="hidden"&&r!==null?this.index=void 0:super.attributeChangedCallback(e,t,r)}connectedCallback(){super.connectedCallback(),this._owner=this.parentNode.owner;const e=this._owner.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._owner,e)}__rendererOrItemChanged(e,t,r){r===void 0||t===void 0||(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,t){t||(this.textContent=e)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class it extends tt(C(J(b))){static get is(){return"vaadin-multi-select-combo-box-item"}static get template(){return y`
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
    `}}f(it);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rt=s=>class extends fe(s){static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}constructor(){super(),this.requiredVerticalSpace=200}connectedCallback(){super.connectedCallback();const e=this._comboBox,t=e&&e.getAttribute("dir");t&&this.setAttribute("dir",t)}_shouldCloseOnOutsideClick(e){const t=e.composedPath();return!t.includes(this.positionTarget)&&!t.includes(this)}_updateOverlayWidth(){const e=this.localName;this.style.setProperty(`--_${e}-default-width`,`${this.positionTarget.clientWidth}px`);const t=getComputedStyle(this._comboBox).getPropertyValue(`--${e}-width`);t===""?this.style.removeProperty(`--${e}-width`):this.style.setProperty(`--${e}-width`,t)}_setOverlayWidth(e,t){e&&t&&(this._updateOverlayWidth(),this._updatePosition())}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */h("vaadin-multi-select-combo-box-overlay",c`
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
  `,{moduleId:"vaadin-multi-select-combo-box-overlay-styles"});let F;class ot extends rt(ee){static get is(){return"vaadin-multi-select-combo-box-overlay"}static get template(){if(!F){F=super.template.cloneNode(!0);const i=F.content.querySelector('[part~="overlay"]');i.removeAttribute("tabindex");const e=document.createElement("div");e.setAttribute("part","loader"),i.insertBefore(e,i.firstElementChild)}return F}}f(ot);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const x=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const st=s=>class extends s{static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object,observer:"__selectedItemChanged"},itemIdPath:{type:String},owner:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(t=>parseInt(t,10)).reduce((t,r)=>t+r)}return this._cachedViewportTotalPaddingBottom}ready(){super.ready(),this.setAttribute("role","listbox"),this.id=`${this.localName}-${W()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.addEventListener("click",e=>e.stopPropagation()),this.__patchWheelOverScrolling()}requestContentUpdate(){this.opened&&this.__virtualizer.update()}scrollIntoView(e){if(!(this.opened&&e>=0))return;const t=this._visibleItemsCount();let r=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),r=e-t+1):e>this.__virtualizer.firstVisibleIndex&&(r=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,r));const o=[...this.children].find(_=>!_.hidden&&_.index===this.__virtualizer.lastVisibleIndex);if(!o||e!==o.index)return;const n=o.getBoundingClientRect(),u=this.getBoundingClientRect(),A=n.bottom-u.bottom+this._viewportTotalPaddingBottom;A>0&&(this.scrollTop+=A)}_isItemSelected(e,t,r){return e instanceof x?!1:r&&e!==void 0&&t!==void 0?P(r,e)===P(r,t):e===t}__initVirtualizer(){this.__virtualizer=new _e({createElements:this.__createElements.bind(this),updateElement:this._updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}__itemsChanged(e){e&&this.__virtualizer&&(this.__setVirtualizerItems(e),this.requestContentUpdate())}__loadingChanged(){this.requestContentUpdate()}__openedChanged(e){e&&(this.__virtualizer||(this.__initVirtualizer(),this.items&&this.__setVirtualizerItems(this.items)),this.requestContentUpdate())}__setVirtualizerItems(e){this.__virtualizer.size=e.length,this.__virtualizer.flush()}__selectedItemChanged(){this.requestContentUpdate()}__focusedIndexChanged(e,t){e!==t&&this.requestContentUpdate(),e>=0&&!this.loading&&this.scrollIntoView(e)}__rendererChanged(e,t){(e||t)&&this.requestContentUpdate()}__createElements(e){return[...Array(e)].map(()=>{const t=document.createElement(`${this.__hostTagName}-item`);return t.addEventListener("click",this.__boundOnItemClick),t.tabIndex="-1",t.style.width="100%",t})}_updateElement(e,t){const r=this.items[t],o=this.focusedIndex,n=this._isItemSelected(r,this.selectedItem,this.itemIdPath);e.setProperties({item:r,index:t,label:this.getItemLabel(r),selected:n,renderer:this.renderer,focused:!this.loading&&o===t}),e.id=`${this.__hostTagName}-item-${t}`,e.setAttribute("role",t!==void 0?"option":!1),e.setAttribute("aria-selected",n.toString()),e.setAttribute("aria-posinset",t+1),e.setAttribute("aria-setsize",this.items.length),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme"),r instanceof x&&this.__requestItemByIndex(t)}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",e=>{const t=this.scrollTop===0,r=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(t&&e.deltaY<0||r&&e.deltaY>0)&&e.preventDefault()})}__requestItemByIndex(e){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:e,currentScrollerPos:this._oldScrollerPosition}}))})}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class at extends st(b){static get is(){return"vaadin-multi-select-combo-box-scroller"}static get template(){return y`
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
    `}ready(){super.ready(),this.setAttribute("aria-multiselectable","true")}_isItemSelected(i,e,t){return i instanceof x||this.owner.readonly?!1:this.owner._findIndex(i,this.owner.selectedItems,t)>-1}_updateElement(i,e){super._updateElement(i,e),i.toggleAttribute("readonly",this.owner.readonly)}}f(at);/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nt=s=>class extends s{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new x},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}ready(){super.ready(),this._scroller.addEventListener("index-requested",e=>{const t=e.detail.index,r=e.detail.currentScrollerPos,o=Math.floor(this.pageSize*1.5);if(!this._shouldSkipIndex(t,o,r)&&t!==void 0){const n=this._getPageForIndex(t);this._shouldLoadPage(n)&&this._loadPage(n)}})}_dataProviderFilterChanged(e){if(this.__previousDataProviderFilter===void 0&&e===""){this.__previousDataProviderFilter=e;return}this.__previousDataProviderFilter!==e&&(this.__previousDataProviderFilter=e,this._pendingRequests={},this.loading=this._shouldFetchData(),this.size=void 0,this.clearCache())}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,t,r){return r!==0&&e>=r-t&&e<=r+t}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const t=this.filteredItems[e*this.pageSize];return t!==void 0?t instanceof x:this.size===void 0}_loadPage(e){if(this._pendingRequests[e]||!this.dataProvider)return;const t={page:e,pageSize:this.pageSize,filter:this.filter},r=(o,n)=>{if(this._pendingRequests[e]!==r)return;const u=this.filteredItems?[...this.filteredItems]:[];u.splice(t.page*t.pageSize,o.length,...o),this.filteredItems=u,!this.opened&&!this._isInputFocused()&&this._commitValue(),n!==void 0&&(this.size=n),delete this._pendingRequests[e],Object.keys(this._pendingRequests).length===0&&(this.loading=!1)};this._pendingRequests[e]=r,this.loading=!0,this.dataProvider(t,r)}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?(this._forceNextRequest=!1,this._loadPage(0)):this._forceNextRequest=!0}_sizeChanged(e=0){const t=(this.filteredItems||[]).slice(0,e);for(let r=0;r<e;r++)t[r]=t[r]!==void 0?t[r]:this.__placeHolder;this.filteredItems=t,this._flushPendingRequests(e)}_pageSizeChanged(e,t){if(Math.floor(e)!==e||e<1)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.dataProvider=t}),this.clearCache()}_ensureItemsOrDataProvider(e){if(this.items!==void 0&&this.dataProvider!==void 0)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,t){if(e&&t!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const r=this.__getItemIndexByValue(this.filteredItems,t);(r<0||!this._getItemLabel(this.filteredItems[r]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests){const t=Math.ceil(e/this.pageSize);Object.entries(this._pendingRequests).forEach(([r,o])=>{parseInt(r)>=t&&o([],e)})}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lt{constructor(i){this.host=i,i.addEventListener("opened-changed",()=>{i.opened||this.__setVirtualKeyboardEnabled(!1)}),i.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),i.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(i){this.host.inputElement&&(this.host.inputElement.inputMode=i?"":"none")}}/**
 * @license
 * Copyright (c) 2015 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function $(s){return s!=null}function N(s,i){return s.findIndex(e=>e instanceof x?!1:i(e))}const dt=s=>class extends ve(V(be(L(G(ye(Q(s))))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged"},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_dropdownItems:{type:Array},_closeOnBlurIsPrevented:Boolean,_scroller:Object,_overlayOpened:{type:Boolean,observer:"_overlayOpenedChanged"}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, _dropdownItems, loading)","_updateScroller(_scroller, _dropdownItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super(),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _nativeInput(){return this.inputElement}_inputElementChanged(e){super._inputElementChanged(e);const t=this._nativeInput;t&&(t.autocomplete="off",t.autocapitalize="off",t.setAttribute("role","combobox"),t.setAttribute("aria-autocomplete","list"),t.setAttribute("aria-expanded",!!this.opened),t.setAttribute("spellcheck","false"),t.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame(()=>{this._overlayElement.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),R(this),this.addController(new lt(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){this._scroller&&(this._scroller.requestContentUpdate(),this._getItemElements().forEach(e=>{e.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(e,t,r){super._propertiesChanged(e,t,r),t.filter!==void 0&&this._filterChanged(t.filter)}_initOverlay(){const e=this.$.overlay;e._comboBox=this,e.addEventListener("touchend",this._boundOnOverlayTouchAction),e.addEventListener("touchmove",this._boundOnOverlayTouchAction),e.addEventListener("mousedown",t=>t.preventDefault()),e.addEventListener("opened-changed",t=>{this._overlayOpened=t.detail.value}),this._overlayElement=e}_initScroller(e){const t=`${this._tagNamePrefix}-scroller`,r=this._overlayElement;r.renderer=n=>{n.firstChild||n.appendChild(document.createElement(t))},r.requestContentUpdate();const o=r.querySelector(t);o.owner=e||this,o.getItemLabel=this._getItemLabel.bind(this),o.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this._scroller=o}_updateScroller(e,t,r,o,n,u,A,_,v){e&&(r&&(e.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),e.setProperties({items:r?t:[],opened:r,loading:o,selectedItem:n,itemIdPath:u,focusedIndex:A,renderer:_,theme:v}))}_openedOrItemsChanged(e,t,r){this._overlayOpened=!!(e&&(r||t&&t.length))}_overlayOpenedChanged(e,t){e?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):t&&this._dropdownItems&&this._dropdownItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(e,t){t!==void 0&&this._updateActiveDescendant(e)}_isInputFocused(){return this.inputElement&&Ce(this.inputElement)}_updateActiveDescendant(e){const t=this._nativeInput;if(!t)return;const r=this._getItemElements().find(o=>o.index===e);r?t.setAttribute("aria-activedescendant",r.id):t.removeAttribute("aria-activedescendant")}_openedChanged(e,t){if(t===void 0)return;e?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this._isInputFocused()&&!T&&this.inputElement&&this.inputElement.focus(),this._overlayElement.restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this._isInputFocused()&&this.setAttribute("focus-ring",""));const r=this._nativeInput;r&&(r.setAttribute("aria-expanded",!!e),e?r.setAttribute("aria-controls",this._scroller.id):r.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onClearButtonClick(e){e.preventDefault(),this._onClearAction(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(e){e.preventDefault(),this.opened?this.close():this.open()}_onHostClick(e){this.autoOpenDisabled||(e.preventDefault(),this.open())}_onClick(e){this._isClearButton(e)?this._onClearButtonClick(e):e.composedPath().includes(this._toggleElement)?this._onToggleButtonClick(e):this._onHostClick(e)}_onKeyDown(e){super._onKeyDown(e),e.key==="Tab"?this._overlayElement.restoreFocusOnClose=!1:e.key==="ArrowDown"?(this._onArrowDown(),e.preventDefault()):e.key==="ArrowUp"&&(this._onArrowUp(),e.preventDefault())}_getItemLabel(e){let t=e&&this.itemLabelPath?P(this.itemLabelPath,e):void 0;return t==null&&(t=e?e.toString():""),t}_getItemValue(e){let t=e&&this.itemValuePath?P(this.itemValuePath,e):void 0;return t===void 0&&(t=e?e.toString():""),t}_onArrowDown(){if(this.opened){const e=this._dropdownItems;e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this._dropdownItems;e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const e=this._dropdownItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(e),this._markAllSelectionRange()}}_setSelectionRange(e,t){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(e,t)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(e){if(!this._hasValidInputValue()){e.preventDefault(),e.stopPropagation();return}this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_hasValidInputValue(){const e=this._focusedIndex<0&&this._inputElementValue!==""&&this._getItemLabel(this.selectedItem)!==this._inputElementValue;return this.allowCustomValue||!e}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(e.stopPropagation(),this._onClearAction()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",t=>t.preventDefault()),e.addEventListener("click",()=>{T&&!this._isInputFocused()&&document.activeElement.blur()}))}_onClearAction(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){this._lastCommittedValue=this.value}_onClosed(){(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const e=this._dropdownItems[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem),this._focusedIndex=-1}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=[this.selectedItem,...this._dropdownItems||[]],t=e[this.__getItemIndexByLabel(e,this._inputElementValue)];if(this.allowCustomValue&&!t){const r=this._inputElementValue;this._lastCustomValue=r;const o=new CustomEvent("custom-value-set",{detail:r,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(o),o.defaultPrevented||(this.value=r)}else!this.allowCustomValue&&!this.opened&&t?this.value=this._getItemValue(t):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}_onInput(e){const t=this._inputElementValue,r={};this.filter===t?this._filterChanged(this.filter):r.filter=t,!this.opened&&!this._isClearButton(e)&&!this.autoOpenDisabled&&(r.opened=!0),this.setProperties(r)}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){typeof e!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(e==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const t=this._getItemValue(e);if(this.value!==t&&(this.value=t,this.value!==t))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}}_valueChanged(e,t){e===""&&t===void 0||($(e)?(this._getItemValue(this.selectedItem)!==e&&this._selectItemForValue(e),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){document.hasFocus()&&this.validate(),this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.items=t}),e?this.filteredItems=e.slice(0):t&&(this.filteredItems=null)}_filteredItemsChanged(e,t){this._setDropdownItems(e);const r=t?t[this._focusedIndex]:null,o=this.__getItemIndexByValue(e,this.value);(this.selectedItem===null||this.selectedItem===void 0)&&o>=0&&(this.selectedItem=e[o]);const n=this.__getItemIndexByValue(e,this._getItemValue(r));n>-1?this._focusedIndex=n:this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this.filter)}_filterItems(e,t){return e&&e.filter(o=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(o).toString().toLowerCase().indexOf(t)>-1))}_selectItemForValue(e){const t=this.__getItemIndexByValue(this.filteredItems,e),r=this.selectedItem;t>=0?this.selectedItem=this.filteredItems[t]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&r===null&&this._selectedItemChanged(this.selectedItem)}_setDropdownItems(e){this._dropdownItems=e}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(e){this._scroller&&this._scroller.scrollIntoView(e)}__getItemIndexByValue(e,t){return!e||!$(t)?-1:N(e,r=>this._getItemValue(r)===t)}__getItemIndexByLabel(e,t){return!e||!t?-1:N(e,r=>this._getItemLabel(r).toString().toLowerCase()===t.toString().toLowerCase())}_overlaySelectedItemChanged(e){e.stopPropagation(),!(e.detail.item instanceof x)&&this.opened&&(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close())}_setFocused(e){if(super._setFocused(e),!e&&!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}this._closeOrCommit()}}_shouldRemoveFocus(e){return e.relatedTarget&&e.relatedTarget.localName===`${this._tagNamePrefix}-item`?!1:e.relatedTarget===this._overlayElement?(e.composedPath()[0].focus(),!1):!0}_onTouchend(e){!this.clearElement||e.composedPath()[0]!==this.clearElement||(e.preventDefault(),this._onClearAction())}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ut extends nt(dt(C(b))){static get is(){return"vaadin-multi-select-combo-box-internal"}static get template(){return y`
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
    `}static get properties(){return{filteredItems:{type:Array,notify:!0},loading:{type:Boolean,notify:!0},size:{type:Number,notify:!0},selectedItems:{type:Array,value:()=>[]},selectedItemsOnTop:{type:Boolean,value:!1},lastFilter:{type:String,notify:!0},topGroup:{type:Array,observer:"_topGroupChanged"},_target:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}get _tagNamePrefix(){return"vaadin-multi-select-combo-box"}open(){!this.disabled&&!(this.readonly&&this.selectedItems.length===0)&&(this.opened=!0)}ready(){super.ready(),this._target=this,this._toggleElement=this.querySelector(".toggle-button")}_setDropdownItems(i){if(this.readonly){this._dropdownItems=this.selectedItems;return}if(this.filter||!this.selectedItemsOnTop){this._dropdownItems=i;return}if(i&&i.length&&this.topGroup&&this.topGroup.length){const e=i.filter(t=>this._comboBox._findIndex(t,this.topGroup,this.itemIdPath)===-1);this._dropdownItems=this.topGroup.concat(e);return}this._dropdownItems=i}_topGroupChanged(i){i&&this._setDropdownItems(this.filteredItems)}_initScroller(){const i=this.getRootNode().host;this._comboBox=i,super._initScroller(i)}_onEnter(i){if(this.opened){if(i.preventDefault(),i.stopPropagation(),this.readonly)this.close();else if(this._hasValidInputValue()){const e=this._dropdownItems[this._focusedIndex];this._commitValue(),this._focusedIndex=this._dropdownItems.indexOf(e)}return}super._onEnter(i)}_onEscape(i){if(this.readonly){i.stopPropagation(),this.opened&&this.close();return}super._onEscape(i)}_commitValue(){this.lastFilter=this.filter,super._commitValue()}_onArrowDown(){this.readonly?this.opened||this.open():super._onArrowDown()}_onArrowUp(){this.readonly?this.opened||this.open():super._onArrowUp()}_setFocused(i){i||(this._ignoreCommitValue=!0),super._setFocused(i),!i&&this.readonly&&!this._closeOnBlurIsPrevented&&this.close()}_detectAndDispatchChange(){if(this._ignoreCommitValue){this._ignoreCommitValue=!1,this.selectedItem=null,this._inputElementValue="";return}super._detectAndDispatchChange()}_overlaySelectedItemChanged(i){i.stopPropagation(),!this.readonly&&(i.detail.item instanceof x||this.opened&&this.dispatchEvent(new CustomEvent("combo-box-item-selected",{detail:{item:i.detail.item}})))}_shouldLoadPage(i){return this.readonly?!1:super._shouldLoadPage(i)}clearCache(){this.readonly||super.clearCache()}}f(ut);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ct=c`
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
`;h("vaadin-multi-select-combo-box",[xe,ct],{moduleId:"vaadin-multi-select-combo-box-styles"});class ht extends Ie(we(C(S(b)))){static get is(){return"vaadin-multi-select-combo-box"}static get template(){return y`
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
      `]}get clearElement(){return this.$.clearButton}get _chips(){return[...this.querySelectorAll('[slot="chip"]')]}get _hasValue(){return this.selectedItems&&this.selectedItems.length>0}ready(){super.ready(),this.addController(new U(this,i=>{this._setInputElement(i),this._setFocusElement(i),this.stateTarget=i,this.ariaTarget=i})),this.addController(new q(this.inputElement,this._labelController)),this._tooltipController=new j(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(i=>!i.opened),this._inputField=this.shadowRoot.querySelector('[part="input-field"]'),this._overflowController=new B(this,"overflow","vaadin-multi-select-combo-box-chip",{initializer:i=>{i.addEventListener("mousedown",e=>this._preventBlur(e)),this._overflow=i}}),this.addController(this._overflowController),this.__updateChips(),R(this)}checkValidity(){return this.required&&!this.readonly?this._hasValue:!0}clear(){this.__updateSelection([]),E(this.i18n.cleared)}clearCache(){this.$&&this.$.comboBox&&this.$.comboBox.clearCache()}requestContentUpdate(){this.$&&this.$.comboBox&&this.$.comboBox.requestContentUpdate()}_disabledChanged(i,e){super._disabledChanged(i,e),(i||e)&&this.__updateChips()}_inputElementChanged(i){super._inputElementChanged(i),i&&this.$.comboBox._setInputElement(i)}_setFocused(i){super._setFocused(i),!i&&document.hasFocus()&&(this._focusedChipIndex=-1,this.validate())}_onResize(){this.__updateChips()}_delegateAttribute(i,e){if(this.stateTarget){if(i==="required"){this._delegateAttribute("aria-required",e?"true":!1);return}super._delegateAttribute(i,e)}}_autoExpandHorizontallyChanged(i,e){(i||e)&&this.__updateChips()}_autoExpandVerticallyChanged(i,e){(i||e)&&this.__updateChips()}_clearButtonVisibleChanged(i,e){(i||e)&&this.__updateChips()}_onFilteredItemsChanged(i){const{value:e}=i.detail;(Array.isArray(e)||e==null)&&(this.filteredItems=e)}_readonlyChanged(i,e){(i||e)&&this.__updateChips(),this.dataProvider&&this.clearCache()}_pageSizeChanged(i,e){(Math.floor(i)!==i||i<=0)&&(this.pageSize=e,console.error('"pageSize" value must be an integer > 0')),this.$.comboBox.pageSize=this.pageSize}_placeholderChanged(i){const e=this.__tmpA11yPlaceholder;e!==i&&(this.__savedPlaceholder=i,e&&(this.placeholder=e))}_selectedItemsChanged(i){if(this._toggleHasValue(this._hasValue),this._hasValue){const e=this._mergeItemLabels(i);this.__tmpA11yPlaceholder=e,this.placeholder=e}else delete this.__tmpA11yPlaceholder,this.placeholder=this.__savedPlaceholder;this.__updateChips(),this.requestContentUpdate(),this.opened&&this.$.comboBox.$.overlay._updateOverlayWidth()}_getItemLabel(i){return this.$.comboBox._getItemLabel(i)}_mergeItemLabels(i){return i.map(e=>this._getItemLabel(e)).join(", ")}_findIndex(i,e,t){if(t&&i){for(let r=0;r<e.length;r++)if(e[r]&&e[r][t]===i[t])return r;return-1}return e.indexOf(i)}__clearFilter(){this.filter="",this.$.comboBox.clear()}__announceItem(i,e,t){const r=e?"selected":"deselected",o=this.i18n.total.replace("{count}",t||0);E(`${i} ${this.i18n[r]} ${o}`)}__removeItem(i){const e=[...this.selectedItems];e.splice(e.indexOf(i),1),this.__updateSelection(e);const t=this._getItemLabel(i);this.__announceItem(t,!1,e.length)}__selectItem(i){const e=[...this.selectedItems],t=this._findIndex(i,e,this.itemIdPath),r=this._getItemLabel(i);let o=!1;if(t!==-1){const n=this._lastFilter;if(n&&n.toLowerCase()===r.toLowerCase()){this.__clearFilter();return}e.splice(t,1)}else e.push(i),o=!0;this.__updateSelection(e),this.__clearFilter(),this.__announceItem(r,o,e.length)}__updateSelection(i){this.selectedItems=i,this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__updateTopGroup(i,e,t){i?t||(this._topGroup=[...e]):this._topGroup=[]}__createChip(i){const e=document.createElement("vaadin-multi-select-combo-box-chip");e.setAttribute("slot","chip"),e.item=i,e.disabled=this.disabled,e.readonly=this.readonly;const t=this._getItemLabel(i);return e.label=t,e.setAttribute("title",t),e.addEventListener("item-removed",r=>this._onItemRemoved(r)),e.addEventListener("mousedown",r=>this._preventBlur(r)),e}__getOverflowWidth(){const i=this._overflow;i.style.visibility="hidden",i.removeAttribute("hidden");const e=i.getAttribute("count");i.setAttribute("count","99");const t=getComputedStyle(i),r=i.clientWidth+parseInt(t.marginInlineStart);return i.setAttribute("count",e),i.setAttribute("hidden",""),i.style.visibility="",r}__updateChips(){if(!this._inputField||!this.inputElement)return;this._chips.forEach(n=>{n.remove()});const i=[...this.selectedItems],e=this._inputField.$.wrapper.clientWidth,t=parseInt(getComputedStyle(this.inputElement).flexBasis);let r=e-t;i.length>1&&(r-=this.__getOverflowWidth());const o=parseInt(getComputedStyle(this).getPropertyValue("--_chip-min-width"));if(this.autoExpandHorizontally){const n=[];for(let _=i.length-1,v=null;_>=0;_--){const a=this.__createChip(i[_]);this.insertBefore(a,v),v=a,n.unshift(a)}const u=[],A=this._inputField.$.wrapper.clientWidth-this.$.chips.clientWidth;if(!this.autoExpandVertically&&A<t){for(;n.length>1;){n.pop().remove(),u.unshift(i.pop());const v=u.length>0?t+this.__getOverflowWidth():t;if(this._inputField.$.wrapper.clientWidth-this.$.chips.clientWidth>=v)break}n.length===1&&(n[0].style.maxWidth=`${Math.max(o,r)}px`)}this._overflowItems=u;return}for(let n=i.length-1,u=null;n>=0;n--){const A=this.__createChip(i[n]);if(this.insertBefore(A,u),!this.autoExpandVertically&&this.$.chips.clientWidth>r)if(u===null)A.style.maxWidth=`${Math.max(o,r)}px`;else{A.remove();break}i.pop(),u=A}this._overflowItems=i}__updateOverflowChip(i,e,t,r){if(i){const o=e.length;i.label=`${o}`,i.setAttribute("count",`${o}`),i.setAttribute("title",this._mergeItemLabels(e)),i.toggleAttribute("hidden",o===0),i.disabled=t,i.readonly=r}}_onClearButtonTouchend(i){i.preventDefault(),i.stopPropagation(),this.clear()}_onClearButtonClick(i){i.stopPropagation(),this.clear()}_onChange(i){i.stopPropagation()}_onEscape(i){this.clearButtonVisible&&this.selectedItems&&this.selectedItems.length&&(i.stopPropagation(),this.selectedItems=[])}_onKeyDown(i){super._onKeyDown(i);const e=this._chips;if(!this.readonly&&e.length>0)switch(i.key){case"Backspace":this._onBackSpace(e);break;case"ArrowLeft":this._onArrowLeft(e,i);break;case"ArrowRight":this._onArrowRight(e,i);break;default:this._focusedChipIndex=-1;break}}_onArrowLeft(i,e){if(this.inputElement.selectionStart!==0)return;const t=this._focusedChipIndex;t!==-1&&e.preventDefault();let r;this.__isRTL?t===i.length-1?r=-1:t>-1&&(r=t+1):t===-1?r=i.length-1:t>0&&(r=t-1),r!==void 0&&(this._focusedChipIndex=r)}_onArrowRight(i,e){if(this.inputElement.selectionStart!==0)return;const t=this._focusedChipIndex;t!==-1&&e.preventDefault();let r;this.__isRTL?t===-1?r=i.length-1:t>0&&(r=t-1):t===i.length-1?r=-1:t>-1&&(r=t+1),r!==void 0&&(this._focusedChipIndex=r)}_onBackSpace(i){if(this.inputElement.selectionStart!==0)return;const e=this._focusedChipIndex;e===-1?this._focusedChipIndex=i.length-1:(this.__removeItem(i[e].item),this._focusedChipIndex=-1)}_focusedChipIndexChanged(i,e){if(i>-1||e>-1){const t=this._chips;if(t.forEach((r,o)=>{r.toggleAttribute("focused",o===i)}),i>-1){const r=t[i].item,o=this._getItemLabel(r);E(`${o} ${this.i18n.focused}`)}}}_onComboBoxChange(){const i=this.$.comboBox.selectedItem;i&&this.__selectItem(i)}_onComboBoxItemSelected(i){this.__selectItem(i.detail.item)}_onCustomValueSet(i){i.preventDefault(),i.stopPropagation(),this.__clearFilter(),this.dispatchEvent(new CustomEvent("custom-value-set",{detail:i.detail,composed:!0,bubbles:!0}))}_onItemRemoved(i){this.__removeItem(i.detail.item)}_preventBlur(i){i.preventDefault()}__computeEffectiveItems(i,e,t){return i&&t?e:i}__computeEffectiveFilteredItems(i,e,t,r){return!i&&r?t:e}}f(ht);(function(){const s=function(i){return window.Vaadin.Flow.tryCatchWrapper(i,"Vaadin Combo Box")};window.Vaadin.Flow.comboBoxConnector={initLazy:i=>s(function(e){if(e.$connector)return;e.$connector={};const t={};let r={},o="";const n=new window.Vaadin.ComboBoxPlaceholder,u=(()=>{let a="",l=!1;return{needsDataCommunicatorReset:()=>l=!0,getLastFilterSentToServer:()=>a,requestData:(g,I,w)=>{const z=I-g,M=w.filter;e.$server.setRequestedRange(g,z,M),a=M,l&&(e.$server.resetDataCommunicator(),l=!1)}}})(),A=(a=Object.keys(t))=>{a.forEach(l=>{t[l]([],e.size),delete t[l];const d=parseInt(l)*e.pageSize,p=d+e.pageSize,m=Math.min(p,e.filteredItems.length);for(let g=d;g<m;g++)e.filteredItems[g]=n})};e.dataProvider=function(a,l){if(a.pageSize!=e.pageSize)throw"Invalid pageSize";if(e._clientSideFilter)if(r[0]){v(r[0],a.filter,l);return}else a.filter="";if(a.filter!==o){r={},o=a.filter,this._filterDebouncer=Ee.debounce(this._filterDebouncer,Be.after(500),()=>{if(u.getLastFilterSentToServer()===a.filter&&u.needsDataCommunicatorReset(),a.filter!==o)throw new Error("Expected params.filter to be '"+o+"' but was '"+a.filter+"'");this._filterDebouncer=void 0,A(),e.dataProvider(a,l)});return}if(this._filterDebouncer){t[a.page]=l;return}if(r[a.page])_(a.page,l);else{t[a.page]=l;const p=Math.max(a.pageSize*2,500),m=Object.keys(t).map(w=>parseInt(w)),g=Math.min(...m),I=Math.max(...m);if(m.length*a.pageSize>p)a.page===g?A([String(I)]):A([String(g)]),e.dataProvider(a,l);else if(I-g+1!==m.length)A();else{const w=a.pageSize*g,z=a.pageSize*(I+1);u.requestData(w,z,a)}}},e.$connector.clear=s((a,l)=>{const d=Math.floor(a/e.pageSize),p=Math.ceil(l/e.pageSize);for(let m=d;m<d+p;m++)delete r[m]}),e.$connector.filter=s(function(a,l){return l=l?l.toString().toLowerCase():"",e._getItemLabel(a,e.itemLabelPath).toString().toLowerCase().indexOf(l)>-1}),e.$connector.set=s(function(a,l,d){if(d!=u.getLastFilterSentToServer())return;if(a%e.pageSize!=0)throw"Got new data to index "+a+" which is not aligned with the page size of "+e.pageSize;if(a===0&&l.length===0&&t[0]){r[0]=[];return}const p=a/e.pageSize,m=Math.ceil(l.length/e.pageSize);for(let g=0;g<m;g++){let I=p+g,w=l.slice(g*e.pageSize,(g+1)*e.pageSize);r[I]=w}}),e.$connector.updateData=s(function(a){const l=new Map(a.map(d=>[d.key,d]));e.filteredItems=e.filteredItems.map(d=>l.get(d.key)||d)}),e.$connector.updateSize=s(function(a){e._clientSideFilter||(e.size=a)}),e.$connector.reset=s(function(){A(),r={},e.clearCache()}),e.$connector.confirm=s(function(a,l){if(l!=u.getLastFilterSentToServer())return;let d=Object.getOwnPropertyNames(t);for(let p=0;p<d.length;p++){let m=d[p];r[m]&&_(m,t[m])}e.$server.confirmUpdate(a)});const _=s(function(a,l){let d=r[a];e._clientSideFilter?v(d,e.filter,l):(delete r[a],l(d,e.size))}),v=s(function(a,l,d){let p=a;l&&(p=a.filter(m=>e.$connector.filter(m,l))),d(p,p.length)});e.addEventListener("custom-value-set",s(a=>a.preventDefault()))})(i)}})();window.Vaadin.ComboBoxPlaceholder=x;

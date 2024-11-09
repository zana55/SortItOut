import { injectGlobalWebcomponentCss } from 'Frontend/generated/jar-resources/theme-util.js';

import '@vaadin/tooltip/src/vaadin-tooltip.js';
import '@vaadin/polymer-legacy-adapter/style-modules.js';
import '@vaadin/button/src/vaadin-button.js';
import 'Frontend/generated/jar-resources/buttonFunctions.js';
import '@vaadin/login/src/vaadin-login-form.js';
import '@vaadin/vertical-layout/src/vaadin-vertical-layout.js';
import '@vaadin/common-frontend/ConnectionIndicator.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';

const loadOnDemand = (key) => {
  const pending = [];
  if (key === '26f01a8ed2303c2562b27a0d2f62763e94720953f6d309312270b058f189ae2d') {
    pending.push(import('./chunks/chunk-c5674e19855ce7746dfcb39c5261f3333d40e312209ba8ecd5a16277c7e07457.js'));
  }
  if (key === '78ee598037fc0326f4a35070ec8eeb87fa0cd53f50d2d07f1e9e7336913d8ee8') {
    pending.push(import('./chunks/chunk-ed44f8777e13edec1c32ebae184e35ef2a772685e74bb473ca9ca05ddad5140c.js'));
  }
  if (key === '7d2d7f3cc094bb69581cc36ea2effa7f01e71a79beb0d13e8e4fd984a3675a31') {
    pending.push(import('./chunks/chunk-187cb882fc21471124d48e289b95cbc243cca49fad728fbcce6c795ed86e4e98.js'));
  }
  if (key === '4c8df3a5167de17c31698cc16dde45df786492ec8791c81025f9b259dfe38457') {
    pending.push(import('./chunks/chunk-ed44f8777e13edec1c32ebae184e35ef2a772685e74bb473ca9ca05ddad5140c.js'));
  }
  return Promise.all(pending);
}

window.Vaadin = window.Vaadin || {};
window.Vaadin.Flow = window.Vaadin.Flow || {};
window.Vaadin.Flow.loadOnDemand = loadOnDemand;
window.Vaadin.Flow.resetFocus = () => {
 let ae=document.activeElement;
 while(ae&&ae.shadowRoot) ae = ae.shadowRoot.activeElement;
 return !ae || ae.blur() || ae.focus() || true;
}
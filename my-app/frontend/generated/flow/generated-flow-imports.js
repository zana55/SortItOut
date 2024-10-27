import '@vaadin/common-frontend/ConnectionIndicator.js';
import '@vaadin/polymer-legacy-adapter/style-modules.js';
import '@vaadin/vaadin-lumo-styles/color-global.js';
import '@vaadin/vaadin-lumo-styles/typography-global.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';

const loadOnDemand = (key) => {
  const pending = [];
  if (key === '26f01a8ed2303c2562b27a0d2f62763e94720953f6d309312270b058f189ae2d') {
    pending.push(import('./chunks/chunk-be2136a05c5be734851c1407e3884a3c6db24e95e94a1e32449f227fe52a5124.js'));
  }
  if (key === '7d2d7f3cc094bb69581cc36ea2effa7f01e71a79beb0d13e8e4fd984a3675a31') {
    pending.push(import('./chunks/chunk-880795888fde3514b216ac4ff4920b053089c82e784ec96cfe652dbbd5cfa66a.js'));
  }
  if (key === '78ee598037fc0326f4a35070ec8eeb87fa0cd53f50d2d07f1e9e7336913d8ee8') {
    pending.push(import('./chunks/chunk-6e9f10314bcc1c9187b5216bd9a4ea9fed464d221575e154b13f9e2e3e1f0b87.js'));
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
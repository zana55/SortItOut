function Pd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.webPush=!1;window.Vaadin.featureFlags.formFillerAddon=!1;window.Vaadin.featureFlags.hillaI18n=!1;window.Vaadin.featureFlags.copilotFlow=!1;window.Vaadin.featureFlags.copilotI18n=!1;window.Vaadin.featureFlags.copilotExperimentalFeatures=!1;function Td(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zd={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io=Symbol.for("react.element"),$m=Symbol.for("react.portal"),Mm=Symbol.for("react.fragment"),Dm=Symbol.for("react.strict_mode"),Om=Symbol.for("react.profiler"),Am=Symbol.for("react.provider"),Im=Symbol.for("react.context"),Fm=Symbol.for("react.forward_ref"),Um=Symbol.for("react.suspense"),jm=Symbol.for("react.memo"),Vm=Symbol.for("react.lazy"),Ou=Symbol.iterator;function Bm(e){return e===null||typeof e!="object"?null:(e=Ou&&e[Ou]||e["@@iterator"],typeof e=="function"?e:null)}var Rd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ld=Object.assign,Nd={};function Mr(e,t,n){this.props=e,this.context=t,this.refs=Nd,this.updater=n||Rd}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $d(){}$d.prototype=Mr.prototype;function cs(e,t,n){this.props=e,this.context=t,this.refs=Nd,this.updater=n||Rd}var ds=cs.prototype=new $d;ds.constructor=cs;Ld(ds,Mr.prototype);ds.isPureReactComponent=!0;var Au=Array.isArray,Md=Object.prototype.hasOwnProperty,fs={current:null},Dd={key:!0,ref:!0,__self:!0,__source:!0};function Od(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Md.call(t,r)&&!Dd.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Io,type:e,key:i,ref:l,props:o,_owner:fs.current}}function Hm(e,t){return{$$typeof:Io,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ps(e){return typeof e=="object"&&e!==null&&e.$$typeof===Io}function Wm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Iu=/\/+/g;function Ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wm(""+e.key):t.toString(36)}function xi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Io:case $m:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ml(l,0):r,Au(o)?(n="",e!=null&&(n=e.replace(Iu,"$&/")+"/"),xi(o,t,n,"",function(u){return u})):o!=null&&(ps(o)&&(o=Hm(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Iu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Au(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Ml(i,s);l+=xi(i,t,n,a,o)}else if(a=Bm(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Ml(i,s++),l+=xi(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ei(e,t,n){if(e==null)return e;var r=[],o=0;return xi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Qm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},wi={transition:null},Km={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:wi,ReactCurrentOwner:fs};function Ad(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:ei,forEach:function(e,t,n){ei(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ei(e,function(){t++}),t},toArray:function(e){return ei(e,function(t){return t})||[]},only:function(e){if(!ps(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Mr;Y.Fragment=Mm;Y.Profiler=Om;Y.PureComponent=cs;Y.StrictMode=Dm;Y.Suspense=Um;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Km;Y.act=Ad;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ld({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=fs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Md.call(t,a)&&!Dd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Io,type:e.type,key:o,ref:i,props:r,_owner:l}};Y.createContext=function(e){return e={$$typeof:Im,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Am,_context:e},e.Consumer=e};Y.createElement=Od;Y.createFactory=function(e){var t=Od.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Fm,render:e}};Y.isValidElement=ps;Y.lazy=function(e){return{$$typeof:Vm,_payload:{_status:-1,_result:e},_init:Qm}};Y.memo=function(e,t){return{$$typeof:jm,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=wi.transition;wi.transition={};try{e()}finally{wi.transition=t}};Y.unstable_act=Ad;Y.useCallback=function(e,t){return qe.current.useCallback(e,t)};Y.useContext=function(e){return qe.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};Y.useEffect=function(e,t){return qe.current.useEffect(e,t)};Y.useId=function(){return qe.current.useId()};Y.useImperativeHandle=function(e,t,n){return qe.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return qe.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return qe.current.useReducer(e,t,n)};Y.useRef=function(e){return qe.current.useRef(e)};Y.useState=function(e){return qe.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return qe.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return qe.current.useTransition()};Y.version="18.3.1";zd.exports=Y;var b=zd.exports;const Gm=Td(b),Ym=Pd({__proto__:null,default:Gm},[b]);var Id={exports:{}},pt={},Fd={exports:{}},Ud={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,O){var H=L.length;L.push(O);e:for(;0<H;){var te=H-1>>>1,oe=L[te];if(0<o(oe,O))L[te]=O,L[H]=oe,H=te;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var O=L[0],H=L.pop();if(H!==O){L[0]=H;e:for(var te=0,oe=L.length,Ne=oe>>>1;te<Ne;){var Fe=2*(te+1)-1,yt=L[Fe],Pe=Fe+1,Ue=L[Pe];if(0>o(yt,H))Pe<oe&&0>o(Ue,yt)?(L[te]=Ue,L[Pe]=H,te=Pe):(L[te]=yt,L[Fe]=H,te=Fe);else if(Pe<oe&&0>o(Ue,H))L[te]=Ue,L[Pe]=H,te=Pe;else break e}}return O}function o(L,O){var H=L.sortIndex-O.sortIndex;return H!==0?H:L.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,c=null,p=3,v=!1,w=!1,k=!1,z=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=L)r(u),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(u)}}function E(L){if(k=!1,y(L),!w)if(n(a)!==null)w=!0,tt(T);else{var O=n(u);O!==null&&gt(E,O.startTime-L)}}function T(L,O){w=!1,k&&(k=!1,h(g),g=-1),v=!0;var H=p;try{for(y(O),c=n(a);c!==null&&(!(c.expirationTime>O)||L&&!W());){var te=c.callback;if(typeof te=="function"){c.callback=null,p=c.priorityLevel;var oe=te(c.expirationTime<=O);O=e.unstable_now(),typeof oe=="function"?c.callback=oe:c===n(a)&&r(a),y(O)}else r(a);c=n(a)}if(c!==null)var Ne=!0;else{var Fe=n(u);Fe!==null&&gt(E,Fe.startTime-O),Ne=!1}return Ne}finally{c=null,p=H,v=!1}}var $=!1,M=null,g=-1,j=5,D=-1;function W(){return!(e.unstable_now()-D<j)}function J(){if(M!==null){var L=e.unstable_now();D=L;var O=!0;try{O=M(!0,L)}finally{O?pe():($=!1,M=null)}}else $=!1}var pe;if(typeof f=="function")pe=function(){f(J)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Ie=se.port2;se.port1.onmessage=J,pe=function(){Ie.postMessage(null)}}else pe=function(){z(J,0)};function tt(L){M=L,$||($=!0,pe())}function gt(L,O){g=z(function(){L(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,tt(T))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(L){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var H=p;p=O;try{return L()}finally{p=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var H=p;p=L;try{return O()}finally{p=H}},e.unstable_scheduleCallback=function(L,O,H){var te=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?te+H:te):H=te,L){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=H+oe,L={id:d++,callback:O,priorityLevel:L,startTime:H,expirationTime:oe,sortIndex:-1},H>te?(L.sortIndex=H,t(u,L),n(a)===null&&L===n(u)&&(k?(h(g),g=-1):k=!0,gt(E,H-te))):(L.sortIndex=oe,t(a,L),w||v||(w=!0,tt(T))),L},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(L){var O=p;return function(){var H=p;p=O;try{return L.apply(this,arguments)}finally{p=H}}}})(Ud);Fd.exports=Ud;var Xm=Fd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm=b,ft=Xm;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jd=new Set,ho={};function Xn(e,t){Cr(e,t),Cr(e+"Capture",t)}function Cr(e,t){for(ho[e]=t,e=0;e<t.length;e++)jd.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pa=Object.prototype.hasOwnProperty,Zm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fu={},Uu={};function qm(e){return pa.call(Uu,e)?!0:pa.call(Fu,e)?!1:Zm.test(e)?Uu[e]=!0:(Fu[e]=!0,!1)}function eh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function th(e,t,n,r){if(t===null||typeof t>"u"||eh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var ms=/[\-:]([a-z])/g;function hs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ms,hs);He[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ms,hs);He[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ms,hs);He[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function vs(e,t,n,r){var o=He.hasOwnProperty(t)?He[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(th(t,n,o,r)&&(n=null),r||o===null?qm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Zt=Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ti=Symbol.for("react.element"),ir=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),gs=Symbol.for("react.strict_mode"),ma=Symbol.for("react.profiler"),Vd=Symbol.for("react.provider"),Bd=Symbol.for("react.context"),ys=Symbol.for("react.forward_ref"),ha=Symbol.for("react.suspense"),va=Symbol.for("react.suspense_list"),xs=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Hd=Symbol.for("react.offscreen"),ju=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,Dl;function Zr(e){if(Dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Dl=t&&t[1]||""}return`
`+Dl+e}var Ol=!1;function Al(e,t){if(!e||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zr(e):""}function nh(e){switch(e.tag){case 5:return Zr(e.type);case 16:return Zr("Lazy");case 13:return Zr("Suspense");case 19:return Zr("SuspenseList");case 0:case 2:case 15:return e=Al(e.type,!1),e;case 11:return e=Al(e.type.render,!1),e;case 1:return e=Al(e.type,!0),e;default:return""}}function ga(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case ir:return"Portal";case ma:return"Profiler";case gs:return"StrictMode";case ha:return"Suspense";case va:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bd:return(e.displayName||"Context")+".Consumer";case Vd:return(e._context.displayName||"Context")+".Provider";case ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xs:return t=e.displayName||null,t!==null?t:ga(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return ga(e(t))}catch{}}return null}function rh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ga(t);case 8:return t===gs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oh(e){var t=Wd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ni(e){e._valueTracker||(e._valueTracker=oh(e))}function Qd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ya(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=En(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kd(e,t){t=t.checked,t!=null&&vs(e,"checked",t,!1)}function xa(e,t){Kd(e,t);var n=En(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wa(e,t.type,n):t.hasOwnProperty("defaultValue")&&wa(e,t.type,En(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wa(e,t,n){(t!=="number"||$i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qr=Array.isArray;function yr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+En(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Sa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(qr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:En(n)}}function Gd(e,t){var n=En(t.value),r=En(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ka(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ri,Xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ri=ri||document.createElement("div"),ri.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ri.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ih=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(e){ih.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ro[t]=ro[e]})});function Jd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ro.hasOwnProperty(e)&&ro[e]?(""+t).trim():t+"px"}function Zd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Jd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var lh=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ea(e,t){if(t){if(lh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Ca(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _a=null;function ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ba=null,xr=null,wr=null;function Qu(e){if(e=jo(e)){if(typeof ba!="function")throw Error(P(280));var t=e.stateNode;t&&(t=fl(t),ba(e.stateNode,e.type,t))}}function qd(e){xr?wr?wr.push(e):wr=[e]:xr=e}function ef(){if(xr){var e=xr,t=wr;if(wr=xr=null,Qu(e),t)for(e=0;e<t.length;e++)Qu(t[e])}}function tf(e,t){return e(t)}function nf(){}var Il=!1;function rf(e,t,n){if(Il)return e(t,n);Il=!0;try{return tf(e,t,n)}finally{Il=!1,(xr!==null||wr!==null)&&(nf(),ef())}}function go(e,t){var n=e.stateNode;if(n===null)return null;var r=fl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Pa=!1;if(Gt)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Pa=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Pa=!1}function ah(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var oo=!1,Mi=null,Di=!1,Ta=null,sh={onError:function(e){oo=!0,Mi=e}};function uh(e,t,n,r,o,i,l,s,a){oo=!1,Mi=null,ah.apply(sh,arguments)}function ch(e,t,n,r,o,i,l,s,a){if(uh.apply(this,arguments),oo){if(oo){var u=Mi;oo=!1,Mi=null}else throw Error(P(198));Di||(Di=!0,Ta=u)}}function Jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function of(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ku(e){if(Jn(e)!==e)throw Error(P(188))}function dh(e){var t=e.alternate;if(!t){if(t=Jn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ku(o),e;if(i===r)return Ku(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function lf(e){return e=dh(e),e!==null?af(e):null}function af(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=af(e);if(t!==null)return t;e=e.sibling}return null}var sf=ft.unstable_scheduleCallback,Gu=ft.unstable_cancelCallback,fh=ft.unstable_shouldYield,ph=ft.unstable_requestPaint,Ee=ft.unstable_now,mh=ft.unstable_getCurrentPriorityLevel,Ss=ft.unstable_ImmediatePriority,uf=ft.unstable_UserBlockingPriority,Oi=ft.unstable_NormalPriority,hh=ft.unstable_LowPriority,cf=ft.unstable_IdlePriority,sl=null,At=null;function vh(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:xh,gh=Math.log,yh=Math.LN2;function xh(e){return e>>>=0,e===0?32:31-(gh(e)/yh|0)|0}var oi=64,ii=4194304;function eo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ai(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=eo(s):(i&=l,i!==0&&(r=eo(i)))}else l=n&~o,l!==0?r=eo(l):i!==0&&(r=eo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lt(t),o=1<<n,r|=e[n],t&=~o;return r}function wh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Lt(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=wh(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function df(){var e=oi;return oi<<=1,!(oi&4194240)&&(oi=64),e}function Fl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=n}function kh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Lt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ks(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var re=0;function ff(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pf,Es,mf,hf,vf,Ra=!1,li=[],mn=null,hn=null,vn=null,yo=new Map,xo=new Map,an=[],Eh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yu(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":yo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(t.pointerId)}}function Vr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=jo(t),t!==null&&Es(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ch(e,t,n,r,o){switch(t){case"focusin":return mn=Vr(mn,e,t,n,r,o),!0;case"dragenter":return hn=Vr(hn,e,t,n,r,o),!0;case"mouseover":return vn=Vr(vn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return yo.set(i,Vr(yo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,xo.set(i,Vr(xo.get(i)||null,e,t,n,r,o)),!0}return!1}function gf(e){var t=Dn(e.target);if(t!==null){var n=Jn(t);if(n!==null){if(t=n.tag,t===13){if(t=of(n),t!==null){e.blockedOn=t,vf(e.priority,function(){mf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Si(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=La(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_a=r,n.target.dispatchEvent(r),_a=null}else return t=jo(n),t!==null&&Es(t),e.blockedOn=n,!1;t.shift()}return!0}function Xu(e,t,n){Si(e)&&n.delete(t)}function _h(){Ra=!1,mn!==null&&Si(mn)&&(mn=null),hn!==null&&Si(hn)&&(hn=null),vn!==null&&Si(vn)&&(vn=null),yo.forEach(Xu),xo.forEach(Xu)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,Ra||(Ra=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,_h)))}function wo(e){function t(o){return Br(o,e)}if(0<li.length){Br(li[0],e);for(var n=1;n<li.length;n++){var r=li[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&Br(mn,e),hn!==null&&Br(hn,e),vn!==null&&Br(vn,e),yo.forEach(t),xo.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)gf(n),n.blockedOn===null&&an.shift()}var Sr=Zt.ReactCurrentBatchConfig,Ii=!0;function bh(e,t,n,r){var o=re,i=Sr.transition;Sr.transition=null;try{re=1,Cs(e,t,n,r)}finally{re=o,Sr.transition=i}}function Ph(e,t,n,r){var o=re,i=Sr.transition;Sr.transition=null;try{re=4,Cs(e,t,n,r)}finally{re=o,Sr.transition=i}}function Cs(e,t,n,r){if(Ii){var o=La(e,t,n,r);if(o===null)Yl(e,t,r,Fi,n),Yu(e,r);else if(Ch(o,e,t,n,r))r.stopPropagation();else if(Yu(e,r),t&4&&-1<Eh.indexOf(e)){for(;o!==null;){var i=jo(o);if(i!==null&&pf(i),i=La(e,t,n,r),i===null&&Yl(e,t,r,Fi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Yl(e,t,r,null,n)}}var Fi=null;function La(e,t,n,r){if(Fi=null,e=ws(r),e=Dn(e),e!==null)if(t=Jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=of(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fi=e,null}function yf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mh()){case Ss:return 1;case uf:return 4;case Oi:case hh:return 16;case cf:return 536870912;default:return 16}default:return 16}}var dn=null,_s=null,ki=null;function xf(){if(ki)return ki;var e,t=_s,n=t.length,r,o="value"in dn?dn.value:dn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ki=o.slice(e,1<r?1-r:void 0)}function Ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function Ju(){return!1}function mt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ai:Ju,this.isPropagationStopped=Ju,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=mt(Dr),Uo=ge({},Dr,{view:0,detail:0}),Th=mt(Uo),Ul,jl,Hr,ul=ge({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(Ul=e.screenX-Hr.screenX,jl=e.screenY-Hr.screenY):jl=Ul=0,Hr=e),Ul)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),Zu=mt(ul),zh=ge({},ul,{dataTransfer:0}),Rh=mt(zh),Lh=ge({},Uo,{relatedTarget:0}),Vl=mt(Lh),Nh=ge({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),$h=mt(Nh),Mh=ge({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dh=mt(Mh),Oh=ge({},Dr,{data:0}),qu=mt(Oh),Ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fh[e])?!!t[e]:!1}function Ps(){return Uh}var jh=ge({},Uo,{key:function(e){if(e.key){var t=Ah[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ih[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?Ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vh=mt(jh),Bh=ge({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ec=mt(Bh),Hh=ge({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),Wh=mt(Hh),Qh=ge({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kh=mt(Qh),Gh=ge({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yh=mt(Gh),Xh=[9,13,27,32],Ts=Gt&&"CompositionEvent"in window,io=null;Gt&&"documentMode"in document&&(io=document.documentMode);var Jh=Gt&&"TextEvent"in window&&!io,wf=Gt&&(!Ts||io&&8<io&&11>=io),tc=" ",nc=!1;function Sf(e,t){switch(e){case"keyup":return Xh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function Zh(e,t){switch(e){case"compositionend":return kf(t);case"keypress":return t.which!==32?null:(nc=!0,tc);case"textInput":return e=t.data,e===tc&&nc?null:e;default:return null}}function qh(e,t){if(ar)return e==="compositionend"||!Ts&&Sf(e,t)?(e=xf(),ki=_s=dn=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wf&&t.locale!=="ko"?null:t.data;default:return null}}var ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ev[e.type]:t==="textarea"}function Ef(e,t,n,r){qd(r),t=Ui(t,"onChange"),0<t.length&&(n=new bs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var lo=null,So=null;function tv(e){Mf(e,0)}function cl(e){var t=cr(e);if(Qd(t))return e}function nv(e,t){if(e==="change")return t}var Cf=!1;if(Gt){var Bl;if(Gt){var Hl="oninput"in document;if(!Hl){var oc=document.createElement("div");oc.setAttribute("oninput","return;"),Hl=typeof oc.oninput=="function"}Bl=Hl}else Bl=!1;Cf=Bl&&(!document.documentMode||9<document.documentMode)}function ic(){lo&&(lo.detachEvent("onpropertychange",_f),So=lo=null)}function _f(e){if(e.propertyName==="value"&&cl(So)){var t=[];Ef(t,So,e,ws(e)),rf(tv,t)}}function rv(e,t,n){e==="focusin"?(ic(),lo=t,So=n,lo.attachEvent("onpropertychange",_f)):e==="focusout"&&ic()}function ov(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(So)}function iv(e,t){if(e==="click")return cl(t)}function lv(e,t){if(e==="input"||e==="change")return cl(t)}function av(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $t=typeof Object.is=="function"?Object.is:av;function ko(e,t){if($t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!pa.call(t,o)||!$t(e[o],t[o]))return!1}return!0}function lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ac(e,t){var n=lc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lc(n)}}function bf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pf(){for(var e=window,t=$i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sv(e){var t=Pf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bf(n.ownerDocument.documentElement,n)){if(r!==null&&zs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ac(n,i);var l=ac(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uv=Gt&&"documentMode"in document&&11>=document.documentMode,sr=null,Na=null,ao=null,$a=!1;function sc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$a||sr==null||sr!==$i(r)||(r=sr,"selectionStart"in r&&zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&ko(ao,r)||(ao=r,r=Ui(Na,"onSelect"),0<r.length&&(t=new bs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=sr)))}function si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ur={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},Wl={},Tf={};Gt&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function dl(e){if(Wl[e])return Wl[e];if(!ur[e])return e;var t=ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tf)return Wl[e]=t[n];return e}var zf=dl("animationend"),Rf=dl("animationiteration"),Lf=dl("animationstart"),Nf=dl("transitionend"),$f=new Map,uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(e,t){$f.set(e,t),Xn(t,[e])}for(var Ql=0;Ql<uc.length;Ql++){var Kl=uc[Ql],cv=Kl.toLowerCase(),dv=Kl[0].toUpperCase()+Kl.slice(1);_n(cv,"on"+dv)}_n(zf,"onAnimationEnd");_n(Rf,"onAnimationIteration");_n(Lf,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(Nf,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function cc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ch(r,t,void 0,e),e.currentTarget=null}function Mf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;cc(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;cc(o,s,u),i=a}}}if(Di)throw e=Ta,Di=!1,Ta=null,e}function ce(e,t){var n=t[Ia];n===void 0&&(n=t[Ia]=new Set);var r=e+"__bubble";n.has(r)||(Df(t,e,2,!1),n.add(r))}function Gl(e,t,n){var r=0;t&&(r|=4),Df(n,e,r,t)}var ui="_reactListening"+Math.random().toString(36).slice(2);function Eo(e){if(!e[ui]){e[ui]=!0,jd.forEach(function(n){n!=="selectionchange"&&(fv.has(n)||Gl(n,!1,e),Gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ui]||(t[ui]=!0,Gl("selectionchange",!1,t))}}function Df(e,t,n,r){switch(yf(t)){case 1:var o=bh;break;case 4:o=Ph;break;default:o=Cs}n=o.bind(null,t,n,e),o=void 0,!Pa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Yl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Dn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}rf(function(){var u=i,d=ws(n),c=[];e:{var p=$f.get(e);if(p!==void 0){var v=bs,w=e;switch(e){case"keypress":if(Ei(n)===0)break e;case"keydown":case"keyup":v=Vh;break;case"focusin":w="focus",v=Vl;break;case"focusout":w="blur",v=Vl;break;case"beforeblur":case"afterblur":v=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Wh;break;case zf:case Rf:case Lf:v=$h;break;case Nf:v=Kh;break;case"scroll":v=Th;break;case"wheel":v=Yh;break;case"copy":case"cut":case"paste":v=Dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ec}var k=(t&4)!==0,z=!k&&e==="scroll",h=k?p!==null?p+"Capture":null:p;k=[];for(var f=u,y;f!==null;){y=f;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,h!==null&&(E=go(f,h),E!=null&&k.push(Co(f,E,y)))),z)break;f=f.return}0<k.length&&(p=new v(p,w,null,n,d),c.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==_a&&(w=n.relatedTarget||n.fromElement)&&(Dn(w)||w[Yt]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?Dn(w):null,w!==null&&(z=Jn(w),w!==z||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(k=Zu,E="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(k=ec,E="onPointerLeave",h="onPointerEnter",f="pointer"),z=v==null?p:cr(v),y=w==null?p:cr(w),p=new k(E,f+"leave",v,n,d),p.target=z,p.relatedTarget=y,E=null,Dn(d)===u&&(k=new k(h,f+"enter",w,n,d),k.target=y,k.relatedTarget=z,E=k),z=E,v&&w)t:{for(k=v,h=w,f=0,y=k;y;y=er(y))f++;for(y=0,E=h;E;E=er(E))y++;for(;0<f-y;)k=er(k),f--;for(;0<y-f;)h=er(h),y--;for(;f--;){if(k===h||h!==null&&k===h.alternate)break t;k=er(k),h=er(h)}k=null}else k=null;v!==null&&dc(c,p,v,k,!1),w!==null&&z!==null&&dc(c,z,w,k,!0)}}e:{if(p=u?cr(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var T=nv;else if(rc(p))if(Cf)T=lv;else{T=ov;var $=rv}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=iv);if(T&&(T=T(e,u))){Ef(c,T,n,d);break e}$&&$(e,p,u),e==="focusout"&&($=p._wrapperState)&&$.controlled&&p.type==="number"&&wa(p,"number",p.value)}switch($=u?cr(u):window,e){case"focusin":(rc($)||$.contentEditable==="true")&&(sr=$,Na=u,ao=null);break;case"focusout":ao=Na=sr=null;break;case"mousedown":$a=!0;break;case"contextmenu":case"mouseup":case"dragend":$a=!1,sc(c,n,d);break;case"selectionchange":if(uv)break;case"keydown":case"keyup":sc(c,n,d)}var M;if(Ts)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ar?Sf(e,n)&&(g="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(wf&&n.locale!=="ko"&&(ar||g!=="onCompositionStart"?g==="onCompositionEnd"&&ar&&(M=xf()):(dn=d,_s="value"in dn?dn.value:dn.textContent,ar=!0)),$=Ui(u,g),0<$.length&&(g=new qu(g,e,null,n,d),c.push({event:g,listeners:$}),M?g.data=M:(M=kf(n),M!==null&&(g.data=M)))),(M=Jh?Zh(e,n):qh(e,n))&&(u=Ui(u,"onBeforeInput"),0<u.length&&(d=new qu("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=M))}Mf(c,t)})}function Co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ui(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=go(e,n),i!=null&&r.unshift(Co(e,i,o)),i=go(e,t),i!=null&&r.push(Co(e,i,o))),e=e.return}return r}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=go(n,i),a!=null&&l.unshift(Co(n,a,s))):o||(a=go(n,i),a!=null&&l.push(Co(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var pv=/\r\n?/g,mv=/\u0000|\uFFFD/g;function fc(e){return(typeof e=="string"?e:""+e).replace(pv,`
`).replace(mv,"")}function ci(e,t,n){if(t=fc(t),fc(e)!==t&&n)throw Error(P(425))}function ji(){}var Ma=null,Da=null;function Oa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Aa=typeof setTimeout=="function"?setTimeout:void 0,hv=typeof clearTimeout=="function"?clearTimeout:void 0,pc=typeof Promise=="function"?Promise:void 0,vv=typeof queueMicrotask=="function"?queueMicrotask:typeof pc<"u"?function(e){return pc.resolve(null).then(e).catch(gv)}:Aa;function gv(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),wo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);wo(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Or=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Or,_o="__reactProps$"+Or,Yt="__reactContainer$"+Or,Ia="__reactEvents$"+Or,yv="__reactListeners$"+Or,xv="__reactHandles$"+Or;function Dn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mc(e);e!==null;){if(n=e[Ot])return n;e=mc(e)}return t}e=n,n=e.parentNode}return null}function jo(e){return e=e[Ot]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function fl(e){return e[_o]||null}var Fa=[],dr=-1;function bn(e){return{current:e}}function de(e){0>dr||(e.current=Fa[dr],Fa[dr]=null,dr--)}function ae(e,t){dr++,Fa[dr]=e.current,e.current=t}var Cn={},Ye=bn(Cn),ot=bn(!1),Vn=Cn;function _r(e,t){var n=e.type.contextTypes;if(!n)return Cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function it(e){return e=e.childContextTypes,e!=null}function Vi(){de(ot),de(Ye)}function hc(e,t,n){if(Ye.current!==Cn)throw Error(P(168));ae(Ye,t),ae(ot,n)}function Of(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,rh(e)||"Unknown",o));return ge({},n,r)}function Bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,Vn=Ye.current,ae(Ye,e),ae(ot,ot.current),!0}function vc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Of(e,t,Vn),r.__reactInternalMemoizedMergedChildContext=e,de(ot),de(Ye),ae(Ye,e)):de(ot),ae(ot,n)}var Ht=null,pl=!1,Jl=!1;function Af(e){Ht===null?Ht=[e]:Ht.push(e)}function wv(e){pl=!0,Af(e)}function Pn(){if(!Jl&&Ht!==null){Jl=!0;var e=0,t=re;try{var n=Ht;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ht=null,pl=!1}catch(o){throw Ht!==null&&(Ht=Ht.slice(e+1)),sf(Ss,Pn),o}finally{re=t,Jl=!1}}return null}var fr=[],pr=0,Hi=null,Wi=0,xt=[],wt=0,Bn=null,Wt=1,Qt="";function $n(e,t){fr[pr++]=Wi,fr[pr++]=Hi,Hi=e,Wi=t}function If(e,t,n){xt[wt++]=Wt,xt[wt++]=Qt,xt[wt++]=Bn,Bn=e;var r=Wt;e=Qt;var o=32-Lt(r)-1;r&=~(1<<o),n+=1;var i=32-Lt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Wt=1<<32-Lt(t)+o|n<<o|r,Qt=i+e}else Wt=1<<i|n<<o|r,Qt=e}function Rs(e){e.return!==null&&($n(e,1),If(e,1,0))}function Ls(e){for(;e===Hi;)Hi=fr[--pr],fr[pr]=null,Wi=fr[--pr],fr[pr]=null;for(;e===Bn;)Bn=xt[--wt],xt[wt]=null,Qt=xt[--wt],xt[wt]=null,Wt=xt[--wt],xt[wt]=null}var dt=null,ct=null,fe=!1,Rt=null;function Ff(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ct=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Wt,overflow:Qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ct=null,!0):!1;default:return!1}}function Ua(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ja(e){if(fe){var t=ct;if(t){var n=t;if(!gc(e,t)){if(Ua(e))throw Error(P(418));t=gn(n.nextSibling);var r=dt;t&&gc(e,t)?Ff(r,n):(e.flags=e.flags&-4097|2,fe=!1,dt=e)}}else{if(Ua(e))throw Error(P(418));e.flags=e.flags&-4097|2,fe=!1,dt=e}}}function yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function di(e){if(e!==dt)return!1;if(!fe)return yc(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oa(e.type,e.memoizedProps)),t&&(t=ct)){if(Ua(e))throw Uf(),Error(P(418));for(;t;)Ff(e,t),t=gn(t.nextSibling)}if(yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=dt?gn(e.stateNode.nextSibling):null;return!0}function Uf(){for(var e=ct;e;)e=gn(e.nextSibling)}function br(){ct=dt=null,fe=!1}function Ns(e){Rt===null?Rt=[e]:Rt.push(e)}var Sv=Zt.ReactCurrentBatchConfig;function Wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function fi(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xc(e){var t=e._init;return t(e._payload)}function jf(e){function t(h,f){if(e){var y=h.deletions;y===null?(h.deletions=[f],h.flags|=16):y.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=Sn(h,f),h.index=0,h.sibling=null,h}function i(h,f,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<f?(h.flags|=2,f):y):(h.flags|=2,f)):(h.flags|=1048576,f)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,y,E){return f===null||f.tag!==6?(f=oa(y,h.mode,E),f.return=h,f):(f=o(f,y),f.return=h,f)}function a(h,f,y,E){var T=y.type;return T===lr?d(h,f,y.props.children,E,y.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===on&&xc(T)===f.type)?(E=o(f,y.props),E.ref=Wr(h,f,y),E.return=h,E):(E=Ri(y.type,y.key,y.props,null,h.mode,E),E.ref=Wr(h,f,y),E.return=h,E)}function u(h,f,y,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=ia(y,h.mode,E),f.return=h,f):(f=o(f,y.children||[]),f.return=h,f)}function d(h,f,y,E,T){return f===null||f.tag!==7?(f=jn(y,h.mode,E,T),f.return=h,f):(f=o(f,y),f.return=h,f)}function c(h,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=oa(""+f,h.mode,y),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ti:return y=Ri(f.type,f.key,f.props,null,h.mode,y),y.ref=Wr(h,null,f),y.return=h,y;case ir:return f=ia(f,h.mode,y),f.return=h,f;case on:var E=f._init;return c(h,E(f._payload),y)}if(qr(f)||Ur(f))return f=jn(f,h.mode,y,null),f.return=h,f;fi(h,f)}return null}function p(h,f,y,E){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:s(h,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ti:return y.key===T?a(h,f,y,E):null;case ir:return y.key===T?u(h,f,y,E):null;case on:return T=y._init,p(h,f,T(y._payload),E)}if(qr(y)||Ur(y))return T!==null?null:d(h,f,y,E,null);fi(h,y)}return null}function v(h,f,y,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(y)||null,s(f,h,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ti:return h=h.get(E.key===null?y:E.key)||null,a(f,h,E,T);case ir:return h=h.get(E.key===null?y:E.key)||null,u(f,h,E,T);case on:var $=E._init;return v(h,f,y,$(E._payload),T)}if(qr(E)||Ur(E))return h=h.get(y)||null,d(f,h,E,T,null);fi(f,E)}return null}function w(h,f,y,E){for(var T=null,$=null,M=f,g=f=0,j=null;M!==null&&g<y.length;g++){M.index>g?(j=M,M=null):j=M.sibling;var D=p(h,M,y[g],E);if(D===null){M===null&&(M=j);break}e&&M&&D.alternate===null&&t(h,M),f=i(D,f,g),$===null?T=D:$.sibling=D,$=D,M=j}if(g===y.length)return n(h,M),fe&&$n(h,g),T;if(M===null){for(;g<y.length;g++)M=c(h,y[g],E),M!==null&&(f=i(M,f,g),$===null?T=M:$.sibling=M,$=M);return fe&&$n(h,g),T}for(M=r(h,M);g<y.length;g++)j=v(M,h,g,y[g],E),j!==null&&(e&&j.alternate!==null&&M.delete(j.key===null?g:j.key),f=i(j,f,g),$===null?T=j:$.sibling=j,$=j);return e&&M.forEach(function(W){return t(h,W)}),fe&&$n(h,g),T}function k(h,f,y,E){var T=Ur(y);if(typeof T!="function")throw Error(P(150));if(y=T.call(y),y==null)throw Error(P(151));for(var $=T=null,M=f,g=f=0,j=null,D=y.next();M!==null&&!D.done;g++,D=y.next()){M.index>g?(j=M,M=null):j=M.sibling;var W=p(h,M,D.value,E);if(W===null){M===null&&(M=j);break}e&&M&&W.alternate===null&&t(h,M),f=i(W,f,g),$===null?T=W:$.sibling=W,$=W,M=j}if(D.done)return n(h,M),fe&&$n(h,g),T;if(M===null){for(;!D.done;g++,D=y.next())D=c(h,D.value,E),D!==null&&(f=i(D,f,g),$===null?T=D:$.sibling=D,$=D);return fe&&$n(h,g),T}for(M=r(h,M);!D.done;g++,D=y.next())D=v(M,h,g,D.value,E),D!==null&&(e&&D.alternate!==null&&M.delete(D.key===null?g:D.key),f=i(D,f,g),$===null?T=D:$.sibling=D,$=D);return e&&M.forEach(function(J){return t(h,J)}),fe&&$n(h,g),T}function z(h,f,y,E){if(typeof y=="object"&&y!==null&&y.type===lr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ti:e:{for(var T=y.key,$=f;$!==null;){if($.key===T){if(T=y.type,T===lr){if($.tag===7){n(h,$.sibling),f=o($,y.props.children),f.return=h,h=f;break e}}else if($.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===on&&xc(T)===$.type){n(h,$.sibling),f=o($,y.props),f.ref=Wr(h,$,y),f.return=h,h=f;break e}n(h,$);break}else t(h,$);$=$.sibling}y.type===lr?(f=jn(y.props.children,h.mode,E,y.key),f.return=h,h=f):(E=Ri(y.type,y.key,y.props,null,h.mode,E),E.ref=Wr(h,f,y),E.return=h,h=E)}return l(h);case ir:e:{for($=y.key;f!==null;){if(f.key===$)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(h,f.sibling),f=o(f,y.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=ia(y,h.mode,E),f.return=h,h=f}return l(h);case on:return $=y._init,z(h,f,$(y._payload),E)}if(qr(y))return w(h,f,y,E);if(Ur(y))return k(h,f,y,E);fi(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(h,f.sibling),f=o(f,y),f.return=h,h=f):(n(h,f),f=oa(y,h.mode,E),f.return=h,h=f),l(h)):n(h,f)}return z}var Pr=jf(!0),Vf=jf(!1),Qi=bn(null),Ki=null,mr=null,$s=null;function Ms(){$s=mr=Ki=null}function Ds(e){var t=Qi.current;de(Qi),e._currentValue=t}function Va(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kr(e,t){Ki=e,$s=mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if($s!==e)if(e={context:e,memoizedValue:t,next:null},mr===null){if(Ki===null)throw Error(P(308));mr=e,Ki.dependencies={lanes:0,firstContext:e}}else mr=mr.next=e;return t}var On=null;function Os(e){On===null?On=[e]:On.push(e)}function Bf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Os(t)):(n.next=o.next,o.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function As(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Xt(e,n)}return o=r.interleaved,o===null?(t.next=t,Os(r)):(t.next=o.next,o.next=t),r.interleaved=t,Xt(e,n)}function Ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ks(e,n)}}function wc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gi(e,t,n,r){var o=e.updateQueue;ln=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(i!==null){var c=o.baseState;l=0,d=u=a=null,s=i;do{var p=s.lane,v=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(p=t,v=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){c=w.call(v,c,p);break e}c=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,p=typeof w=="function"?w.call(v,c,p):w,p==null)break e;c=ge({},c,p);break e;case 2:ln=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=v,a=c):d=d.next=v,l|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(d===null&&(a=c),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Wn|=l,e.lanes=l,e.memoizedState=c}}function Sc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var Vo={},It=bn(Vo),bo=bn(Vo),Po=bn(Vo);function An(e){if(e===Vo)throw Error(P(174));return e}function Is(e,t){switch(ae(Po,t),ae(bo,e),ae(It,Vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ka(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ka(t,e)}de(It),ae(It,t)}function Tr(){de(It),de(bo),de(Po)}function Wf(e){An(Po.current);var t=An(It.current),n=ka(t,e.type);t!==n&&(ae(bo,e),ae(It,n))}function Fs(e){bo.current===e&&(de(It),de(bo))}var he=bn(0);function Yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zl=[];function Us(){for(var e=0;e<Zl.length;e++)Zl[e]._workInProgressVersionPrimary=null;Zl.length=0}var _i=Zt.ReactCurrentDispatcher,ql=Zt.ReactCurrentBatchConfig,Hn=0,ve=null,ze=null,Me=null,Xi=!1,so=!1,To=0,kv=0;function Qe(){throw Error(P(321))}function js(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$t(e[n],t[n]))return!1;return!0}function Vs(e,t,n,r,o,i){if(Hn=i,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_i.current=e===null||e.memoizedState===null?bv:Pv,e=n(r,o),so){i=0;do{if(so=!1,To=0,25<=i)throw Error(P(301));i+=1,Me=ze=null,t.updateQueue=null,_i.current=Tv,e=n(r,o)}while(so)}if(_i.current=Ji,t=ze!==null&&ze.next!==null,Hn=0,Me=ze=ve=null,Xi=!1,t)throw Error(P(300));return e}function Bs(){var e=To!==0;return To=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ve.memoizedState=Me=e:Me=Me.next=e,Me}function Ct(){if(ze===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Me===null?ve.memoizedState:Me.next;if(t!==null)Me=t,ze=e;else{if(e===null)throw Error(P(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Me===null?ve.memoizedState=Me=e:Me=Me.next=e}return Me}function zo(e,t){return typeof t=="function"?t(e):t}function ea(e){var t=Ct(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ze,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var d=u.lane;if((Hn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=c,l=r):a=a.next=c,ve.lanes|=d,Wn|=d}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,$t(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ve.lanes|=i,Wn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ta(e){var t=Ct(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);$t(i,t.memoizedState)||(rt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Qf(){}function Kf(e,t){var n=ve,r=Ct(),o=t(),i=!$t(r.memoizedState,o);if(i&&(r.memoizedState=o,rt=!0),r=r.queue,Hs(Xf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Ro(9,Yf.bind(null,n,r,o,t),void 0,null),Oe===null)throw Error(P(349));Hn&30||Gf(n,t,o)}return o}function Gf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yf(e,t,n,r){t.value=n,t.getSnapshot=r,Jf(t)&&Zf(e)}function Xf(e,t,n){return n(function(){Jf(t)&&Zf(e)})}function Jf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$t(e,n)}catch{return!0}}function Zf(e){var t=Xt(e,1);t!==null&&Nt(t,e,1,-1)}function kc(e){var t=Dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t.queue=e,e=e.dispatch=_v.bind(null,ve,e),[t.memoizedState,e]}function Ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qf(){return Ct().memoizedState}function bi(e,t,n,r){var o=Dt();ve.flags|=e,o.memoizedState=Ro(1|t,n,void 0,r===void 0?null:r)}function ml(e,t,n,r){var o=Ct();r=r===void 0?null:r;var i=void 0;if(ze!==null){var l=ze.memoizedState;if(i=l.destroy,r!==null&&js(r,l.deps)){o.memoizedState=Ro(t,n,i,r);return}}ve.flags|=e,o.memoizedState=Ro(1|t,n,i,r)}function Ec(e,t){return bi(8390656,8,e,t)}function Hs(e,t){return ml(2048,8,e,t)}function ep(e,t){return ml(4,2,e,t)}function tp(e,t){return ml(4,4,e,t)}function np(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rp(e,t,n){return n=n!=null?n.concat([e]):null,ml(4,4,np.bind(null,t,e),n)}function Ws(){}function op(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&js(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ip(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&js(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lp(e,t,n){return Hn&21?($t(n,t)||(n=df(),ve.lanes|=n,Wn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function Ev(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{re=n,ql.transition=r}}function ap(){return Ct().memoizedState}function Cv(e,t,n){var r=wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sp(e))up(t,n);else if(n=Bf(e,t,n,r),n!==null){var o=Ze();Nt(n,e,r,o),cp(n,t,r)}}function _v(e,t,n){var r=wn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sp(e))up(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,$t(s,l)){var a=t.interleaved;a===null?(o.next=o,Os(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Bf(e,t,o,r),n!==null&&(o=Ze(),Nt(n,e,r,o),cp(n,t,r))}}function sp(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function up(e,t){so=Xi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ks(e,n)}}var Ji={readContext:Et,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},bv={readContext:Et,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Ec,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bi(4194308,4,np.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return bi(4,2,e,t)},useMemo:function(e,t){var n=Dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cv.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:kc,useDebugValue:Ws,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=kc(!1),t=e[0];return e=Ev.bind(null,e[1]),Dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,o=Dt();if(fe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Oe===null)throw Error(P(349));Hn&30||Gf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ec(Xf.bind(null,r,i,e),[e]),r.flags|=2048,Ro(9,Yf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Dt(),t=Oe.identifierPrefix;if(fe){var n=Qt,r=Wt;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=To++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pv={readContext:Et,useCallback:op,useContext:Et,useEffect:Hs,useImperativeHandle:rp,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:ip,useReducer:ea,useRef:qf,useState:function(){return ea(zo)},useDebugValue:Ws,useDeferredValue:function(e){var t=Ct();return lp(t,ze.memoizedState,e)},useTransition:function(){var e=ea(zo)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Qf,useSyncExternalStore:Kf,useId:ap,unstable_isNewReconciler:!1},Tv={readContext:Et,useCallback:op,useContext:Et,useEffect:Hs,useImperativeHandle:rp,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:ip,useReducer:ta,useRef:qf,useState:function(){return ta(zo)},useDebugValue:Ws,useDeferredValue:function(e){var t=Ct();return ze===null?t.memoizedState=e:lp(t,ze.memoizedState,e)},useTransition:function(){var e=ta(zo)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Qf,useSyncExternalStore:Kf,useId:ap,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ba(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hl={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),o=wn(e),i=Kt(r,o);i.payload=t,n!=null&&(i.callback=n),t=yn(e,i,o),t!==null&&(Nt(t,e,o,r),Ci(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),o=wn(e),i=Kt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=yn(e,i,o),t!==null&&(Nt(t,e,o,r),Ci(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=wn(e),o=Kt(n,r);o.tag=2,t!=null&&(o.callback=t),t=yn(e,o,r),t!==null&&(Nt(t,e,r,n),Ci(t,e,r))}};function Cc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!ko(n,r)||!ko(o,i):!0}function dp(e,t,n){var r=!1,o=Cn,i=t.contextType;return typeof i=="object"&&i!==null?i=Et(i):(o=it(t)?Vn:Ye.current,r=t.contextTypes,i=(r=r!=null)?_r(e,o):Cn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function _c(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function Ha(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},As(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Et(i):(i=it(t)?Vn:Ye.current,o.context=_r(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ba(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&hl.enqueueReplaceState(o,o.state,null),Gi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,t){try{var n="",r=t;do n+=nh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function na(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zv=typeof WeakMap=="function"?WeakMap:Map;function fp(e,t,n){n=Kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qi||(qi=!0,ts=r),Wa(e,t)},n}function pp(e,t,n){n=Kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Wa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Wa(e,t),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function bc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Bv.bind(null,e,t,n),t.then(e,e))}function Pc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Kt(-1,1),t.tag=2,yn(n,t,1))),n.lanes|=1),e)}var Rv=Zt.ReactCurrentOwner,rt=!1;function Je(e,t,n,r){t.child=e===null?Vf(t,null,n,r):Pr(t,e.child,n,r)}function zc(e,t,n,r,o){n=n.render;var i=t.ref;return kr(t,o),r=Vs(e,t,n,r,i,o),n=Bs(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Jt(e,t,o)):(fe&&n&&Rs(t),t.flags|=1,Je(e,t,r,o),t.child)}function Rc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!qs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,mp(e,t,i,r,o)):(e=Ri(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:ko,n(l,r)&&e.ref===t.ref)return Jt(e,t,o)}return t.flags|=1,e=Sn(i,r),e.ref=t.ref,e.return=t,t.child=e}function mp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ko(i,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,Jt(e,t,o)}return Qa(e,t,n,r,o)}function hp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(vr,st),st|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(vr,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ae(vr,st),st|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ae(vr,st),st|=r;return Je(e,t,o,n),t.child}function vp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qa(e,t,n,r,o){var i=it(n)?Vn:Ye.current;return i=_r(t,i),kr(t,o),n=Vs(e,t,n,r,i,o),r=Bs(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Jt(e,t,o)):(fe&&r&&Rs(t),t.flags|=1,Je(e,t,n,o),t.child)}function Lc(e,t,n,r,o){if(it(n)){var i=!0;Bi(t)}else i=!1;if(kr(t,o),t.stateNode===null)Pi(e,t),dp(t,n,r),Ha(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Et(u):(u=it(n)?Vn:Ye.current,u=_r(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&_c(t,l,r,u),ln=!1;var p=t.memoizedState;l.state=p,Gi(t,r,l,o),a=t.memoizedState,s!==r||p!==a||ot.current||ln?(typeof d=="function"&&(Ba(t,n,d,r),a=t.memoizedState),(s=ln||Cc(t,n,s,r,p,a,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Hf(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Pt(t.type,s),l.props=u,c=t.pendingProps,p=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Et(a):(a=it(n)?Vn:Ye.current,a=_r(t,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==c||p!==a)&&_c(t,l,r,a),ln=!1,p=t.memoizedState,l.state=p,Gi(t,r,l,o);var w=t.memoizedState;s!==c||p!==w||ot.current||ln?(typeof v=="function"&&(Ba(t,n,v,r),w=t.memoizedState),(u=ln||Cc(t,n,u,r,p,w,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ka(e,t,n,r,i,o)}function Ka(e,t,n,r,o,i){vp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&vc(t,n,!1),Jt(e,t,i);r=t.stateNode,Rv.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Pr(t,e.child,null,i),t.child=Pr(t,null,s,i)):Je(e,t,s,i),t.memoizedState=r.state,o&&vc(t,n,!0),t.child}function gp(e){var t=e.stateNode;t.pendingContext?hc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hc(e,t.context,!1),Is(e,t.containerInfo)}function Nc(e,t,n,r,o){return br(),Ns(o),t.flags|=256,Je(e,t,n,r),t.child}var Ga={dehydrated:null,treeContext:null,retryLane:0};function Ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function yp(e,t,n){var r=t.pendingProps,o=he.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ae(he,o&1),e===null)return ja(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=yl(l,r,0,null),e=jn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ya(n),t.memoizedState=Ga,e):Qs(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Lv(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Sn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Sn(s,i):(i=jn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ya(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ga,r}return i=e.child,e=i.sibling,r=Sn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qs(e,t){return t=yl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pi(e,t,n,r){return r!==null&&Ns(r),Pr(t,e.child,null,n),e=Qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lv(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=na(Error(P(422))),pi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=yl({mode:"visible",children:r.children},o,0,null),i=jn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Pr(t,e.child,null,l),t.child.memoizedState=Ya(l),t.memoizedState=Ga,i);if(!(t.mode&1))return pi(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(P(419)),r=na(i,r,void 0),pi(e,t,l,r)}if(s=(l&e.childLanes)!==0,rt||s){if(r=Oe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Xt(e,o),Nt(r,e,o,-1))}return Zs(),r=na(Error(P(421))),pi(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Hv.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ct=gn(o.nextSibling),dt=t,fe=!0,Rt=null,e!==null&&(xt[wt++]=Wt,xt[wt++]=Qt,xt[wt++]=Bn,Wt=e.id,Qt=e.overflow,Bn=t),t=Qs(t,r.children),t.flags|=4096,t)}function $c(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Va(e.return,t,n)}function ra(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function xp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Je(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$c(e,n,t);else if(e.tag===19)$c(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(he,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Yi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ra(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Yi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ra(t,!0,n,null,i);break;case"together":ra(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nv(e,t,n){switch(t.tag){case 3:gp(t),br();break;case 5:Wf(t);break;case 1:it(t.type)&&Bi(t);break;case 4:Is(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ae(Qi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?yp(e,t,n):(ae(he,he.current&1),e=Jt(e,t,n),e!==null?e.sibling:null);ae(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ae(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,hp(e,t,n)}return Jt(e,t,n)}var wp,Xa,Sp,kp;wp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xa=function(){};Sp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,An(It.current);var i=null;switch(n){case"input":o=ya(e,o),r=ya(e,r),i=[];break;case"select":o=ge({},o,{value:void 0}),r=ge({},r,{value:void 0}),i=[];break;case"textarea":o=Sa(e,o),r=Sa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ji)}Ea(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ho.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o?.[u],r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ho.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ce("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};kp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qr(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $v(e,t,n){var r=t.pendingProps;switch(Ls(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return it(t.type)&&Vi(),Ke(t),null;case 3:return r=t.stateNode,Tr(),de(ot),de(Ye),Us(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(di(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rt!==null&&(os(Rt),Rt=null))),Xa(e,t),Ke(t),null;case 5:Fs(t);var o=An(Po.current);if(n=t.type,e!==null&&t.stateNode!=null)Sp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ke(t),null}if(e=An(It.current),di(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ot]=t,r[_o]=i,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(o=0;o<to.length;o++)ce(to[o],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":Vu(r,i),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ce("invalid",r);break;case"textarea":Hu(r,i),ce("invalid",r)}Ea(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ci(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ci(r.textContent,s,e),o=["children",""+s]):ho.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ce("scroll",r)}switch(n){case"input":ni(r),Bu(r,i,!0);break;case"textarea":ni(r),Wu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ji)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ot]=t,e[_o]=r,wp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ca(n,r),n){case"dialog":ce("cancel",e),ce("close",e),o=r;break;case"iframe":case"object":case"embed":ce("load",e),o=r;break;case"video":case"audio":for(o=0;o<to.length;o++)ce(to[o],e);o=r;break;case"source":ce("error",e),o=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),o=r;break;case"details":ce("toggle",e),o=r;break;case"input":Vu(e,r),o=ya(e,r),ce("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ge({},r,{value:void 0}),ce("invalid",e);break;case"textarea":Hu(e,r),o=Sa(e,r),ce("invalid",e);break;default:o=r}Ea(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Zd(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Xd(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&vo(e,a):typeof a=="number"&&vo(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ho.hasOwnProperty(i)?a!=null&&i==="onScroll"&&ce("scroll",e):a!=null&&vs(e,i,a,l))}switch(n){case"input":ni(e),Bu(e,r,!1);break;case"textarea":ni(e),Wu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?yr(e,!!r.multiple,i,!1):r.defaultValue!=null&&yr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ji)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)kp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=An(Po.current),An(It.current),di(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(i=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:ci(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ci(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Ke(t),null;case 13:if(de(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&ct!==null&&t.mode&1&&!(t.flags&128))Uf(),br(),t.flags|=98560,i=!1;else if(i=di(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[Ot]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),i=!1}else Rt!==null&&(os(Rt),Rt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?Le===0&&(Le=3):Zs())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return Tr(),Xa(e,t),e===null&&Eo(t.stateNode.containerInfo),Ke(t),null;case 10:return Ds(t.type._context),Ke(t),null;case 17:return it(t.type)&&Vi(),Ke(t),null;case 19:if(de(he),i=t.memoizedState,i===null)return Ke(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Qr(i,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Yi(e),l!==null){for(t.flags|=128,Qr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(he,he.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ee()>Rr&&(t.flags|=128,r=!0,Qr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!fe)return Ke(t),null}else 2*Ee()-i.renderingStartTime>Rr&&n!==1073741824&&(t.flags|=128,r=!0,Qr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ee(),t.sibling=null,n=he.current,ae(he,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return Js(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?st&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Mv(e,t){switch(Ls(t),t.tag){case 1:return it(t.type)&&Vi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),de(ot),de(Ye),Us(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fs(t),null;case 13:if(de(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(he),null;case 4:return Tr(),null;case 10:return Ds(t.type._context),null;case 22:case 23:return Js(),null;case 24:return null;default:return null}}var mi=!1,Ge=!1,Dv=typeof WeakSet=="function"?WeakSet:Set,I=null;function hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function Ja(e,t,n){try{n()}catch(r){Se(e,t,r)}}var Mc=!1;function Ov(e,t){if(Ma=Ii,e=Pf(),zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,d=0,c=e,p=null;t:for(;;){for(var v;c!==n||o!==0&&c.nodeType!==3||(s=l+o),c!==i||r!==0&&c.nodeType!==3||(a=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(v=c.firstChild)!==null;)p=c,c=v;for(;;){if(c===e)break t;if(p===n&&++u===o&&(s=l),p===i&&++d===r&&(a=l),(v=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Da={focusedElem:e,selectionRange:n},Ii=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,z=w.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?k:Pt(t.type,k),z);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){Se(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return w=Mc,Mc=!1,w}function uo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ja(t,n,i)}o=o.next}while(o!==r)}}function vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Za(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ep(e){var t=e.alternate;t!==null&&(e.alternate=null,Ep(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[_o],delete t[Ia],delete t[yv],delete t[xv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cp(e){return e.tag===5||e.tag===3||e.tag===4}function Dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji));else if(r!==4&&(e=e.child,e!==null))for(qa(e,t,n),e=e.sibling;e!==null;)qa(e,t,n),e=e.sibling}function es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(es(e,t,n),e=e.sibling;e!==null;)es(e,t,n),e=e.sibling}var Ve=null,Tt=!1;function nn(e,t,n){for(n=n.child;n!==null;)_p(e,t,n),n=n.sibling}function _p(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:Ge||hr(n,t);case 6:var r=Ve,o=Tt;Ve=null,nn(e,t,n),Ve=r,Tt=o,Ve!==null&&(Tt?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Tt?(e=Ve,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),wo(e)):Xl(Ve,n.stateNode));break;case 4:r=Ve,o=Tt,Ve=n.stateNode.containerInfo,Tt=!0,nn(e,t,n),Ve=r,Tt=o;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ja(n,t,l),o=o.next}while(o!==r)}nn(e,t,n);break;case 1:if(!Ge&&(hr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Se(n,t,s)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,nn(e,t,n),Ge=r):nn(e,t,n);break;default:nn(e,t,n)}}function Oc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dv),t.forEach(function(r){var o=Wv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function _t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Ve=s.stateNode,Tt=!1;break e;case 3:Ve=s.stateNode.containerInfo,Tt=!0;break e;case 4:Ve=s.stateNode.containerInfo,Tt=!0;break e}s=s.return}if(Ve===null)throw Error(P(160));_p(i,l,o),Ve=null,Tt=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){Se(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bp(t,e),t=t.sibling}function bp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Mt(e),r&4){try{uo(3,e,e.return),vl(3,e)}catch(k){Se(e,e.return,k)}try{uo(5,e,e.return)}catch(k){Se(e,e.return,k)}}break;case 1:_t(t,e),Mt(e),r&512&&n!==null&&hr(n,n.return);break;case 5:if(_t(t,e),Mt(e),r&512&&n!==null&&hr(n,n.return),e.flags&32){var o=e.stateNode;try{vo(o,"")}catch(k){Se(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Kd(o,i),Ca(s,l);var u=Ca(s,i);for(l=0;l<a.length;l+=2){var d=a[l],c=a[l+1];d==="style"?Zd(o,c):d==="dangerouslySetInnerHTML"?Xd(o,c):d==="children"?vo(o,c):vs(o,d,c,u)}switch(s){case"input":xa(o,i);break;case"textarea":Gd(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?yr(o,!!i.multiple,v,!1):p!==!!i.multiple&&(i.defaultValue!=null?yr(o,!!i.multiple,i.defaultValue,!0):yr(o,!!i.multiple,i.multiple?[]:"",!1))}o[_o]=i}catch(k){Se(e,e.return,k)}}break;case 6:if(_t(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){Se(e,e.return,k)}}break;case 3:if(_t(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(t.containerInfo)}catch(k){Se(e,e.return,k)}break;case 4:_t(t,e),Mt(e);break;case 13:_t(t,e),Mt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ys=Ee())),r&4&&Oc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(u=Ge)||d,_t(t,e),Ge=u):_t(t,e),Mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(I=e,d=e.child;d!==null;){for(c=I=d;I!==null;){switch(p=I,v=p.child,p.tag){case 0:case 11:case 14:case 15:uo(4,p,p.return);break;case 1:hr(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){Se(r,n,k)}}break;case 5:hr(p,p.return);break;case 22:if(p.memoizedState!==null){Ic(c);continue}}v!==null?(v.return=p,I=v):Ic(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=c.stateNode,a=c.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Jd("display",l))}catch(k){Se(e,e.return,k)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(k){Se(e,e.return,k)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:_t(t,e),Mt(e),r&4&&Oc(e);break;case 21:break;default:_t(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cp(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(vo(o,""),r.flags&=-33);var i=Dc(e);es(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Dc(e);qa(e,s,l);break;default:throw Error(P(161))}}catch(a){Se(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Av(e,t,n){I=e,Pp(e)}function Pp(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||mi;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Ge;s=mi;var u=Ge;if(mi=l,(Ge=a)&&!u)for(I=o;I!==null;)l=I,a=l.child,l.tag===22&&l.memoizedState!==null?Fc(o):a!==null?(a.return=l,I=a):Fc(o);for(;i!==null;)I=i,Pp(i),i=i.sibling;I=o,mi=s,Ge=u}Ac(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,I=i):Ac(e)}}function Ac(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ge||vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Sc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Sc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&wo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ge||t.flags&512&&Za(t)}catch(p){Se(t,t.return,p)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Ic(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Fc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(a){Se(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){Se(t,o,a)}}var i=t.return;try{Za(t)}catch(a){Se(t,i,a)}break;case 5:var l=t.return;try{Za(t)}catch(a){Se(t,l,a)}}}catch(a){Se(t,t.return,a)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var Iv=Math.ceil,Zi=Zt.ReactCurrentDispatcher,Ks=Zt.ReactCurrentOwner,kt=Zt.ReactCurrentBatchConfig,q=0,Oe=null,be=null,Be=0,st=0,vr=bn(0),Le=0,Lo=null,Wn=0,gl=0,Gs=0,co=null,nt=null,Ys=0,Rr=1/0,Bt=null,qi=!1,ts=null,xn=null,hi=!1,fn=null,el=0,fo=0,ns=null,Ti=-1,zi=0;function Ze(){return q&6?Ee():Ti!==-1?Ti:Ti=Ee()}function wn(e){return e.mode&1?q&2&&Be!==0?Be&-Be:Sv.transition!==null?(zi===0&&(zi=df()),zi):(e=re,e!==0||(e=window.event,e=e===void 0?16:yf(e.type)),e):1}function Nt(e,t,n,r){if(50<fo)throw fo=0,ns=null,Error(P(185));Fo(e,n,r),(!(q&2)||e!==Oe)&&(e===Oe&&(!(q&2)&&(gl|=n),Le===4&&sn(e,Be)),lt(e,r),n===1&&q===0&&!(t.mode&1)&&(Rr=Ee()+500,pl&&Pn()))}function lt(e,t){var n=e.callbackNode;Sh(e,t);var r=Ai(e,e===Oe?Be:0);if(r===0)n!==null&&Gu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gu(n),t===1)e.tag===0?wv(Uc.bind(null,e)):Af(Uc.bind(null,e)),vv(function(){!(q&6)&&Pn()}),n=null;else{switch(ff(r)){case 1:n=Ss;break;case 4:n=uf;break;case 16:n=Oi;break;case 536870912:n=cf;break;default:n=Oi}n=Dp(n,Tp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tp(e,t){if(Ti=-1,zi=0,q&6)throw Error(P(327));var n=e.callbackNode;if(Er()&&e.callbackNode!==n)return null;var r=Ai(e,e===Oe?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=tl(e,r);else{t=r;var o=q;q|=2;var i=Rp();(Oe!==e||Be!==t)&&(Bt=null,Rr=Ee()+500,Un(e,t));do try{jv();break}catch(s){zp(e,s)}while(!0);Ms(),Zi.current=i,q=o,be!==null?t=0:(Oe=null,Be=0,t=Le)}if(t!==0){if(t===2&&(o=za(e),o!==0&&(r=o,t=rs(e,o))),t===1)throw n=Lo,Un(e,0),sn(e,r),lt(e,Ee()),n;if(t===6)sn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Fv(o)&&(t=tl(e,r),t===2&&(i=za(e),i!==0&&(r=i,t=rs(e,i))),t===1))throw n=Lo,Un(e,0),sn(e,r),lt(e,Ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Mn(e,nt,Bt);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=Ys+500-Ee(),10<t)){if(Ai(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Aa(Mn.bind(null,e,nt,Bt),t);break}Mn(e,nt,Bt);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Lt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Iv(r/1960))-r,10<r){e.timeoutHandle=Aa(Mn.bind(null,e,nt,Bt),r);break}Mn(e,nt,Bt);break;case 5:Mn(e,nt,Bt);break;default:throw Error(P(329))}}}return lt(e,Ee()),e.callbackNode===n?Tp.bind(null,e):null}function rs(e,t){var n=co;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=tl(e,t),e!==2&&(t=nt,nt=n,t!==null&&os(t)),e}function os(e){nt===null?nt=e:nt.push.apply(nt,e)}function Fv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!$t(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~Gs,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lt(t),r=1<<n;e[n]=-1,t&=~r}}function Uc(e){if(q&6)throw Error(P(327));Er();var t=Ai(e,0);if(!(t&1))return lt(e,Ee()),null;var n=tl(e,t);if(e.tag!==0&&n===2){var r=za(e);r!==0&&(t=r,n=rs(e,r))}if(n===1)throw n=Lo,Un(e,0),sn(e,t),lt(e,Ee()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,nt,Bt),lt(e,Ee()),null}function Xs(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Rr=Ee()+500,pl&&Pn())}}function Qn(e){fn!==null&&fn.tag===0&&!(q&6)&&Er();var t=q;q|=1;var n=kt.transition,r=re;try{if(kt.transition=null,re=1,e)return e()}finally{re=r,kt.transition=n,q=t,!(q&6)&&Pn()}}function Js(){st=vr.current,de(vr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hv(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Ls(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vi();break;case 3:Tr(),de(ot),de(Ye),Us();break;case 5:Fs(r);break;case 4:Tr();break;case 13:de(he);break;case 19:de(he);break;case 10:Ds(r.type._context);break;case 22:case 23:Js()}n=n.return}if(Oe=e,be=e=Sn(e.current,null),Be=st=t,Le=0,Lo=null,Gs=gl=Wn=0,nt=co=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}On=null}return e}function zp(e,t){do{var n=be;try{if(Ms(),_i.current=Ji,Xi){for(var r=ve.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Xi=!1}if(Hn=0,Me=ze=ve=null,so=!1,To=0,Ks.current=null,n===null||n.return===null){Le=1,Lo=t,be=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=Be,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Pc(l);if(v!==null){v.flags&=-257,Tc(v,l,s,i,t),v.mode&1&&bc(i,u,t),t=v,a=u;var w=t.updateQueue;if(w===null){var k=new Set;k.add(a),t.updateQueue=k}else w.add(a);break e}else{if(!(t&1)){bc(i,u,t),Zs();break e}a=Error(P(426))}}else if(fe&&s.mode&1){var z=Pc(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Tc(z,l,s,i,t),Ns(zr(a,s));break e}}i=a=zr(a,s),Le!==4&&(Le=2),co===null?co=[i]:co.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=fp(i,a,t);wc(i,h);break e;case 1:s=a;var f=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(xn===null||!xn.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=pp(i,s,t);wc(i,E);break e}}i=i.return}while(i!==null)}Np(n)}catch(T){t=T,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function Rp(){var e=Zi.current;return Zi.current=Ji,e===null?Ji:e}function Zs(){(Le===0||Le===3||Le===2)&&(Le=4),Oe===null||!(Wn&268435455)&&!(gl&268435455)||sn(Oe,Be)}function tl(e,t){var n=q;q|=2;var r=Rp();(Oe!==e||Be!==t)&&(Bt=null,Un(e,t));do try{Uv();break}catch(o){zp(e,o)}while(!0);if(Ms(),q=n,Zi.current=r,be!==null)throw Error(P(261));return Oe=null,Be=0,Le}function Uv(){for(;be!==null;)Lp(be)}function jv(){for(;be!==null&&!fh();)Lp(be)}function Lp(e){var t=Mp(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?Np(e):be=t,Ks.current=null}function Np(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Mv(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,be=null;return}}else if(n=$v(n,t,st),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Le===0&&(Le=5)}function Mn(e,t,n){var r=re,o=kt.transition;try{kt.transition=null,re=1,Vv(e,t,n,r)}finally{kt.transition=o,re=r}return null}function Vv(e,t,n,r){do Er();while(fn!==null);if(q&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(kh(e,i),e===Oe&&(be=Oe=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hi||(hi=!0,Dp(Oi,function(){return Er(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=kt.transition,kt.transition=null;var l=re;re=1;var s=q;q|=4,Ks.current=null,Ov(e,n),bp(n,e),sv(Da),Ii=!!Ma,Da=Ma=null,e.current=n,Av(n),ph(),q=s,re=l,kt.transition=i}else e.current=n;if(hi&&(hi=!1,fn=e,el=o),i=e.pendingLanes,i===0&&(xn=null),vh(n.stateNode),lt(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(qi)throw qi=!1,e=ts,ts=null,e;return el&1&&e.tag!==0&&Er(),i=e.pendingLanes,i&1?e===ns?fo++:(fo=0,ns=e):fo=0,Pn(),null}function Er(){if(fn!==null){var e=ff(el),t=kt.transition,n=re;try{if(kt.transition=null,re=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,el=0,q&6)throw Error(P(331));var o=q;for(q|=4,I=e.current;I!==null;){var i=I,l=i.child;if(I.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:uo(8,d,i)}var c=d.child;if(c!==null)c.return=d,I=c;else for(;I!==null;){d=I;var p=d.sibling,v=d.return;if(Ep(d),d===u){I=null;break}if(p!==null){p.return=v,I=p;break}I=v}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var z=k.sibling;k.sibling=null,k=z}while(k!==null)}}I=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,I=l;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:uo(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,I=h;break e}I=i.return}}var f=e.current;for(I=f;I!==null;){l=I;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,I=y;else e:for(l=f;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:vl(9,s)}}catch(T){Se(s,s.return,T)}if(s===l){I=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,I=E;break e}I=s.return}}if(q=o,Pn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{re=n,kt.transition=t}}return!1}function jc(e,t,n){t=zr(n,t),t=fp(e,t,1),e=yn(e,t,1),t=Ze(),e!==null&&(Fo(e,1,t),lt(e,t))}function Se(e,t,n){if(e.tag===3)jc(e,e,n);else for(;t!==null;){if(t.tag===3){jc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=zr(n,e),e=pp(t,e,1),t=yn(t,e,1),e=Ze(),t!==null&&(Fo(t,1,e),lt(t,e));break}}t=t.return}}function Bv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Be&n)===n&&(Le===4||Le===3&&(Be&130023424)===Be&&500>Ee()-Ys?Un(e,0):Gs|=n),lt(e,t)}function $p(e,t){t===0&&(e.mode&1?(t=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):t=1);var n=Ze();e=Xt(e,t),e!==null&&(Fo(e,t,n),lt(e,n))}function Hv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$p(e,n)}function Wv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),$p(e,n)}var Mp;Mp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return rt=!1,Nv(e,t,n);rt=!!(e.flags&131072)}else rt=!1,fe&&t.flags&1048576&&If(t,Wi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pi(e,t),e=t.pendingProps;var o=_r(t,Ye.current);kr(t,n),o=Vs(null,t,r,e,o,n);var i=Bs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(i=!0,Bi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,As(t),o.updater=hl,t.stateNode=o,o._reactInternals=t,Ha(t,r,e,n),t=Ka(null,t,r,!0,i,n)):(t.tag=0,fe&&i&&Rs(t),Je(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Kv(r),e=Pt(r,e),o){case 0:t=Qa(null,t,r,e,n);break e;case 1:t=Lc(null,t,r,e,n);break e;case 11:t=zc(null,t,r,e,n);break e;case 14:t=Rc(null,t,r,Pt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),Qa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),Lc(e,t,r,o,n);case 3:e:{if(gp(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Hf(e,t),Gi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=zr(Error(P(423)),t),t=Nc(e,t,r,n,o);break e}else if(r!==o){o=zr(Error(P(424)),t),t=Nc(e,t,r,n,o);break e}else for(ct=gn(t.stateNode.containerInfo.firstChild),dt=t,fe=!0,Rt=null,n=Vf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===o){t=Jt(e,t,n);break e}Je(e,t,r,n)}t=t.child}return t;case 5:return Wf(t),e===null&&ja(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Oa(r,o)?l=null:i!==null&&Oa(r,i)&&(t.flags|=32),vp(e,t),Je(e,t,l,n),t.child;case 6:return e===null&&ja(t),null;case 13:return yp(e,t,n);case 4:return Is(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pr(t,null,r,n):Je(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),zc(e,t,r,o,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ae(Qi,r._currentValue),r._currentValue=l,i!==null)if($t(i.value,l)){if(i.children===o.children&&!ot.current){t=Jt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Kt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Va(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(P(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Va(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Je(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,kr(t,n),o=Et(o),r=r(o),t.flags|=1,Je(e,t,r,n),t.child;case 14:return r=t.type,o=Pt(r,t.pendingProps),o=Pt(r.type,o),Rc(e,t,r,o,n);case 15:return mp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Pt(r,o),Pi(e,t),t.tag=1,it(r)?(e=!0,Bi(t)):e=!1,kr(t,n),dp(t,r,o),Ha(t,r,o,n),Ka(null,t,r,!0,e,n);case 19:return xp(e,t,n);case 22:return hp(e,t,n)}throw Error(P(156,t.tag))};function Dp(e,t){return sf(e,t)}function Qv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new Qv(e,t,n,r)}function qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kv(e){if(typeof e=="function")return qs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ys)return 11;if(e===xs)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ri(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")qs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case lr:return jn(n.children,o,i,t);case gs:l=8,o|=8;break;case ma:return e=St(12,n,t,o|2),e.elementType=ma,e.lanes=i,e;case ha:return e=St(13,n,t,o),e.elementType=ha,e.lanes=i,e;case va:return e=St(19,n,t,o),e.elementType=va,e.lanes=i,e;case Hd:return yl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vd:l=10;break e;case Bd:l=9;break e;case ys:l=11;break e;case xs:l=14;break e;case on:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=St(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function jn(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function yl(e,t,n,r){return e=St(22,e,r,t),e.elementType=Hd,e.lanes=n,e.stateNode={isHidden:!1},e}function oa(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function ia(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fl(0),this.expirationTimes=Fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function eu(e,t,n,r,o,i,l,s,a){return e=new Gv(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=St(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},As(i),e}function Yv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ir,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Op(e){if(!e)return Cn;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(it(n))return Of(e,n,t)}return t}function Ap(e,t,n,r,o,i,l,s,a){return e=eu(n,r,!0,e,o,i,l,s,a),e.context=Op(null),n=e.current,r=Ze(),o=wn(n),i=Kt(r,o),i.callback=t??null,yn(n,i,o),e.current.lanes=o,Fo(e,o,r),lt(e,r),e}function xl(e,t,n,r){var o=t.current,i=Ze(),l=wn(o);return n=Op(n),t.context===null?t.context=n:t.pendingContext=n,t=Kt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yn(o,t,l),e!==null&&(Nt(e,o,l,i),Ci(e,o,l)),l}function nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tu(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}function Xv(){return null}var Ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function nu(e){this._internalRoot=e}wl.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));xl(e,t,null,null)};wl.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){xl(null,e,null,null)}),t[Yt]=null}};function wl(e){this._internalRoot=e}wl.prototype.unstable_scheduleHydration=function(e){if(e){var t=hf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&gf(e)}};function ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bc(){}function Jv(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=nl(l);i.call(u)}}var l=Ap(t,r,e,0,null,!1,!1,"",Bc);return e._reactRootContainer=l,e[Yt]=l.current,Eo(e.nodeType===8?e.parentNode:e),Qn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=nl(a);s.call(u)}}var a=eu(e,0,!1,null,null,!1,!1,"",Bc);return e._reactRootContainer=a,e[Yt]=a.current,Eo(e.nodeType===8?e.parentNode:e),Qn(function(){xl(t,a,n,r)}),a}function kl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=nl(l);s.call(a)}}xl(t,l,e,o)}else l=Jv(n,t,e,o,r);return nl(l)}pf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=eo(t.pendingLanes);n!==0&&(ks(t,n|1),lt(t,Ee()),!(q&6)&&(Rr=Ee()+500,Pn()))}break;case 13:Qn(function(){var r=Xt(e,1);if(r!==null){var o=Ze();Nt(r,e,1,o)}}),tu(e,1)}};Es=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=Ze();Nt(t,e,134217728,n)}tu(e,134217728)}};mf=function(e){if(e.tag===13){var t=wn(e),n=Xt(e,t);if(n!==null){var r=Ze();Nt(n,e,t,r)}tu(e,t)}};hf=function(){return re};vf=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};ba=function(e,t,n){switch(t){case"input":if(xa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=fl(r);if(!o)throw Error(P(90));Qd(r),xa(r,o)}}}break;case"textarea":Gd(e,n);break;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}};tf=Xs;nf=Qn;var Zv={usingClientEntryPoint:!1,Events:[jo,cr,fl,qd,ef,Xs]},Kr={findFiberByHostInstance:Dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qv={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lf(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||Xv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{sl=vi.inject(qv),At=vi}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zv;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ru(t))throw Error(P(200));return Yv(e,t,null,n)};pt.createRoot=function(e,t){if(!ru(e))throw Error(P(299));var n=!1,r="",o=Ip;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=eu(e,1,!1,null,null,n,!1,r,o),e[Yt]=t.current,Eo(e.nodeType===8?e.parentNode:e),new nu(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=lf(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return Qn(e)};pt.hydrate=function(e,t,n){if(!Sl(t))throw Error(P(200));return kl(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!ru(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Ip;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Ap(t,null,e,1,n??null,o,!1,i,l),e[Yt]=t.current,Eo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new wl(t)};pt.render=function(e,t,n){if(!Sl(t))throw Error(P(200));return kl(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!Sl(e))throw Error(P(40));return e._reactRootContainer?(Qn(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};pt.unstable_batchedUpdates=Xs;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Sl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return kl(e,t,n,!1,r)};pt.version="18.3.1-next-f1338f8080-20240426";function Fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fp)}catch(e){console.error(e)}}Fp(),Id.exports=pt;var ou=Id.exports;const eg=Td(ou),tg=Pd({__proto__:null,default:eg},[ou]);var Up,Hc=ou;Up=Hc.createRoot,Hc.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function me(){return me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}var _e;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_e||(_e={}));const Wc="popstate";function ng(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:s}=r.location;return No("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Bo(o)}return og(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function rg(){return Math.random().toString(36).substr(2,8)}function Qc(e,t){return{usr:e.state,key:e.key,idx:t}}function No(e,t,n,r){return n===void 0&&(n=null),me({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Tn(t):t,{state:n,key:t&&t.key||r||rg()})}function Bo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Tn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function og(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=_e.Pop,a=null,u=d();u==null&&(u=0,l.replaceState(me({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function c(){s=_e.Pop;let z=d(),h=z==null?null:z-u;u=z,a&&a({action:s,location:k.location,delta:h})}function p(z,h){s=_e.Push;let f=No(k.location,z,h);u=d()+1;let y=Qc(f,u),E=k.createHref(f);try{l.pushState(y,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;o.location.assign(E)}i&&a&&a({action:s,location:k.location,delta:1})}function v(z,h){s=_e.Replace;let f=No(k.location,z,h);u=d();let y=Qc(f,u),E=k.createHref(f);l.replaceState(y,"",E),i&&a&&a({action:s,location:k.location,delta:0})}function w(z){let h=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof z=="string"?z:Bo(z);return f=f.replace(/ $/,"%20"),X(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let k={get action(){return s},get location(){return e(o,l)},listen(z){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Wc,c),a=z,()=>{o.removeEventListener(Wc,c),a=null}},createHref(z){return t(o,z)},createURL:w,encodeLocation(z){let h=w(z);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:v,go(z){return l.go(z)}};return k}var ie;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ie||(ie={}));const ig=new Set(["lazy","caseSensitive","path","id","index","children"]);function lg(e){return e.index===!0}function $o(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let l=[...n,String(i)],s=typeof o.id=="string"?o.id:l.join("-");if(X(o.index!==!0||!o.children,"Cannot specify children on an index route"),X(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),lg(o)){let a=me({},o,t(o),{id:s});return r[s]=a,a}else{let a=me({},o,t(o),{id:s,children:void 0});return r[s]=a,o.children&&(a.children=$o(o.children,t,l,r)),a}})}function un(e,t,n){return n===void 0&&(n="/"),Li(e,t,n,!1)}function Li(e,t,n,r){let o=typeof t=="string"?Tn(t):t,i=Kn(o.pathname||"/",n);if(i==null)return null;let l=jp(e);sg(l);let s=null;for(let a=0;s==null&&a<l.length;++a){let u=xg(i);s=gg(l[a],u,r)}return s}function ag(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function jp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(X(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=kn([r,a.relativePath]),d=n.concat(a);i.children&&i.children.length>0&&(X(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jp(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:hg(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let a of Vp(i.path))o(i,l,a)}),t}function Vp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Vp(r.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),o&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function sg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:vg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ug=/^:[\w-]+$/,cg=3,dg=2,fg=1,pg=10,mg=-2,Kc=e=>e==="*";function hg(e,t){let n=e.split("/"),r=n.length;return n.some(Kc)&&(r+=mg),t&&(r+=dg),n.filter(o=>!Kc(o)).reduce((o,i)=>o+(ug.test(i)?cg:i===""?fg:pg),r)}function vg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function gg(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,o={},i="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",c=Gc({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),p=a.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Gc({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},d)),!c)return null;Object.assign(o,c.params),l.push({params:o,pathname:kn([i,c.pathname]),pathnameBase:kg(kn([i,c.pathnameBase])),route:p}),c.pathnameBase!=="/"&&(i=kn([i,c.pathnameBase]))}return l}function Gc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=yg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:p,isOptional:v}=d;if(p==="*"){let k=s[c]||"";l=i.slice(0,i.length-k.length).replace(/(.)\/+$/,"$1")}const w=s[c];return v&&!w?u[p]=void 0:u[p]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function yg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function xg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Lr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Kn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function wg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Tn(e):e;return{pathname:n?n.startsWith("/")?n:Sg(n,t):t,search:Eg(r),hash:Cg(o)}}function Sg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function la(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hp(e,t){let n=Bp(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Wp(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Tn(e):(o=me({},e),X(!o.pathname||!o.pathname.includes("?"),la("?","pathname","search",o)),X(!o.pathname||!o.pathname.includes("#"),la("#","pathname","hash",o)),X(!o.search||!o.search.includes("#"),la("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=n;else{let c=t.length-1;if(!r&&l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),c-=1;o.pathname=p.join("/")}s=c>=0?t[c]:"/"}let a=wg(o,s),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const kn=e=>e.join("/").replace(/\/\/+/g,"/"),kg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Eg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Cg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class rl{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function El(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qp=["post","put","patch","delete"],_g=new Set(Qp),bg=["get",...Qp],Pg=new Set(bg),Tg=new Set([301,302,303,307,308]),zg=new Set([307,308]),aa={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Rg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},rr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},iu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lg=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Kp="remix-router-transitions";function Ng(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;X(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let m=e.detectErrorBoundary;o=x=>({hasErrorBoundary:m(x)})}else o=Lg;let i={},l=$o(e.routes,o,void 0,i),s,a=e.basename||"/",u=e.unstable_dataStrategy||Ig,d=e.unstable_patchRoutesOnNavigation,c=me({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),p=null,v=new Set,w=1e3,k=new Set,z=null,h=null,f=null,y=e.hydrationData!=null,E=un(l,e.history.location,a),T=null;if(E==null&&!d){let m=Xe(404,{pathname:e.history.location.pathname}),{matches:x,route:S}=rd(l);E=x,T={[S.id]:m}}E&&!e.hydrationData&&Go(E,l,e.history.location.pathname).active&&(E=null);let $;if(E)if(E.some(m=>m.route.lazy))$=!1;else if(!E.some(m=>m.route.loader))$=!0;else if(c.v7_partialHydration){let m=e.hydrationData?e.hydrationData.loaderData:null,x=e.hydrationData?e.hydrationData.errors:null,S=C=>C.route.loader?typeof C.route.loader=="function"&&C.route.loader.hydrate===!0?!1:m&&m[C.route.id]!==void 0||x&&x[C.route.id]!==void 0:!0;if(x){let C=E.findIndex(A=>x[A.route.id]!==void 0);$=E.slice(0,C+1).every(S)}else $=E.every(S)}else $=e.hydrationData!=null;else if($=!1,E=[],c.v7_partialHydration){let m=Go(null,l,e.history.location.pathname);m.active&&m.matches&&(E=m.matches)}let M,g={historyAction:e.history.action,location:e.history.location,matches:E,initialized:$,navigation:aa,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||T,fetchers:new Map,blockers:new Map},j=_e.Pop,D=!1,W,J=!1,pe=new Map,se=null,Ie=!1,tt=!1,gt=[],L=new Set,O=new Map,H=0,te=-1,oe=new Map,Ne=new Set,Fe=new Map,yt=new Map,Pe=new Set,Ue=new Map,_=new Map,N=new Map,K;function je(){if(p=e.history.listen(m=>{let{action:x,location:S,delta:C}=m;if(K){K(),K=void 0;return}Lr(_.size===0||C!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let A=Lu({currentLocation:g.location,nextLocation:S,historyAction:x});if(A&&C!=null){let V=new Promise(Q=>{K=Q});e.history.go(C*-1),Qo(A,{state:"blocked",location:S,proceed(){Qo(A,{state:"proceeding",proceed:void 0,reset:void 0,location:S}),V.then(()=>e.history.go(C))},reset(){let Q=new Map(g.blockers);Q.set(A,rr),ye({blockers:Q})}});return}return Rn(x,S)}),n){qg(t,pe);let m=()=>e0(t,pe);t.addEventListener("pagehide",m),se=()=>t.removeEventListener("pagehide",m)}return g.initialized||Rn(_e.Pop,g.location,{initialHydration:!0}),M}function We(){p&&p(),se&&se(),v.clear(),W&&W.abort(),g.fetchers.forEach((m,x)=>Wo(x)),g.blockers.forEach((m,x)=>Ru(x))}function Te(m){return v.add(m),()=>v.delete(m)}function ye(m,x){x===void 0&&(x={}),g=me({},g,m);let S=[],C=[];c.v7_fetcherPersist&&g.fetchers.forEach((A,V)=>{A.state==="idle"&&(Pe.has(V)?C.push(V):S.push(V))}),[...v].forEach(A=>A(g,{deletedFetchers:C,unstable_viewTransitionOpts:x.viewTransitionOpts,unstable_flushSync:x.flushSync===!0})),c.v7_fetcherPersist&&(S.forEach(A=>g.fetchers.delete(A)),C.forEach(A=>Wo(A)))}function Zn(m,x,S){var C,A;let{flushSync:V}=S===void 0?{}:S,Q=g.actionData!=null&&g.navigation.formMethod!=null&&zt(g.navigation.formMethod)&&g.navigation.state==="loading"&&((C=m.state)==null?void 0:C._isRedirect)!==!0,R;x.actionData?Object.keys(x.actionData).length>0?R=x.actionData:R=null:Q?R=g.actionData:R=null;let B=x.loaderData?td(g.loaderData,x.loaderData,x.matches||[],x.errors):g.loaderData,F=g.blockers;F.size>0&&(F=new Map(F),F.forEach((ne,ue)=>F.set(ue,rr)));let U=D===!0||g.navigation.formMethod!=null&&zt(g.navigation.formMethod)&&((A=m.state)==null?void 0:A._isRedirect)!==!0;s&&(l=s,s=void 0),Ie||j===_e.Pop||(j===_e.Push?e.history.push(m,m.state):j===_e.Replace&&e.history.replace(m,m.state));let ee;if(j===_e.Pop){let ne=pe.get(g.location.pathname);ne&&ne.has(m.pathname)?ee={currentLocation:g.location,nextLocation:m}:pe.has(m.pathname)&&(ee={currentLocation:m,nextLocation:g.location})}else if(J){let ne=pe.get(g.location.pathname);ne?ne.add(m.pathname):(ne=new Set([m.pathname]),pe.set(g.location.pathname,ne)),ee={currentLocation:g.location,nextLocation:m}}ye(me({},x,{actionData:R,loaderData:B,historyAction:j,location:m,initialized:!0,navigation:aa,revalidation:"idle",restoreScrollPosition:$u(m,x.matches||g.matches),preventScrollReset:U,blockers:F}),{viewTransitionOpts:ee,flushSync:V===!0}),j=_e.Pop,D=!1,J=!1,Ie=!1,tt=!1,gt=[]}async function Eu(m,x){if(typeof m=="number"){e.history.go(m);return}let S=is(g.location,g.matches,a,c.v7_prependBasename,m,c.v7_relativeSplatPath,x?.fromRouteId,x?.relative),{path:C,submission:A,error:V}=Yc(c.v7_normalizeFormMethod,!1,S,x),Q=g.location,R=No(g.location,C,x&&x.state);R=me({},R,e.history.encodeLocation(R));let B=x&&x.replace!=null?x.replace:void 0,F=_e.Push;B===!0?F=_e.Replace:B===!1||A!=null&&zt(A.formMethod)&&A.formAction===g.location.pathname+g.location.search&&(F=_e.Replace);let U=x&&"preventScrollReset"in x?x.preventScrollReset===!0:void 0,ee=(x&&x.unstable_flushSync)===!0,ne=Lu({currentLocation:Q,nextLocation:R,historyAction:F});if(ne){Qo(ne,{state:"blocked",location:R,proceed(){Qo(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),Eu(m,x)},reset(){let ue=new Map(g.blockers);ue.set(ne,rr),ye({blockers:ue})}});return}return await Rn(F,R,{submission:A,pendingError:V,preventScrollReset:U,replace:x&&x.replace,enableViewTransition:x&&x.unstable_viewTransition,flushSync:ee})}function xm(){if(Ll(),ye({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Rn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Rn(j||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation,enableViewTransition:J===!0})}}async function Rn(m,x,S){W&&W.abort(),W=null,j=m,Ie=(S&&S.startUninterruptedRevalidation)===!0,zm(g.location,g.matches),D=(S&&S.preventScrollReset)===!0,J=(S&&S.enableViewTransition)===!0;let C=s||l,A=S&&S.overrideNavigation,V=un(C,x,a),Q=(S&&S.flushSync)===!0,R=Go(V,C,x.pathname);if(R.active&&R.matches&&(V=R.matches),!V){let{error:Z,notFoundMatches:$e,route:Ce}=Nl(x.pathname);Zn(x,{matches:$e,loaderData:{},errors:{[Ce.id]:Z}},{flushSync:Q});return}if(g.initialized&&!tt&&Hg(g.location,x)&&!(S&&S.submission&&zt(S.submission.formMethod))){Zn(x,{matches:V},{flushSync:Q});return}W=new AbortController;let B=tr(e.history,x,W.signal,S&&S.submission),F;if(S&&S.pendingError)F=[gr(V).route.id,{type:ie.error,error:S.pendingError}];else if(S&&S.submission&&zt(S.submission.formMethod)){let Z=await wm(B,x,S.submission,V,R.active,{replace:S.replace,flushSync:Q});if(Z.shortCircuited)return;if(Z.pendingActionResult){let[$e,Ce]=Z.pendingActionResult;if(ut(Ce)&&El(Ce.error)&&Ce.error.status===404){W=null,Zn(x,{matches:Z.matches,loaderData:{},errors:{[$e]:Ce.error}});return}}V=Z.matches||V,F=Z.pendingActionResult,A=sa(x,S.submission),Q=!1,R.active=!1,B=tr(e.history,B.url,B.signal)}let{shortCircuited:U,matches:ee,loaderData:ne,errors:ue}=await Sm(B,x,V,R.active,A,S&&S.submission,S&&S.fetcherSubmission,S&&S.replace,S&&S.initialHydration===!0,Q,F);U||(W=null,Zn(x,me({matches:ee||V},nd(F),{loaderData:ne,errors:ue})))}async function wm(m,x,S,C,A,V){V===void 0&&(V={}),Ll();let Q=Jg(x,S);if(ye({navigation:Q},{flushSync:V.flushSync===!0}),A){let F=await Yo(C,x.pathname,m.signal);if(F.type==="aborted")return{shortCircuited:!0};if(F.type==="error"){let{boundaryId:U,error:ee}=Ko(x.pathname,F);return{matches:F.partialMatches,pendingActionResult:[U,{type:ie.error,error:ee}]}}else if(F.matches)C=F.matches;else{let{notFoundMatches:U,error:ee,route:ne}=Nl(x.pathname);return{matches:U,pendingActionResult:[ne.id,{type:ie.error,error:ee}]}}}let R,B=no(C,x);if(!B.route.action&&!B.route.lazy)R={type:ie.error,error:Xe(405,{method:m.method,pathname:x.pathname,routeId:B.route.id})};else if(R=(await Ir("action",g,m,[B],C,null))[B.route.id],m.signal.aborted)return{shortCircuited:!0};if(In(R)){let F;return V&&V.replace!=null?F=V.replace:F=Zc(R.response.headers.get("Location"),new URL(m.url),a)===g.location.pathname+g.location.search,await Ln(m,R,!0,{submission:S,replace:F}),{shortCircuited:!0}}if(pn(R))throw Xe(400,{type:"defer-action"});if(ut(R)){let F=gr(C,B.route.id);return(V&&V.replace)!==!0&&(j=_e.Push),{matches:C,pendingActionResult:[F.route.id,R]}}return{matches:C,pendingActionResult:[B.route.id,R]}}async function Sm(m,x,S,C,A,V,Q,R,B,F,U){let ee=A||sa(x,V),ne=V||Q||id(ee),ue=!Ie&&(!c.v7_partialHydration||!B);if(C){if(ue){let xe=Cu(U);ye(me({navigation:ee},xe!==void 0?{actionData:xe}:{}),{flushSync:F})}let G=await Yo(S,x.pathname,m.signal);if(G.type==="aborted")return{shortCircuited:!0};if(G.type==="error"){let{boundaryId:xe,error:at}=Ko(x.pathname,G);return{matches:G.partialMatches,loaderData:{},errors:{[xe]:at}}}else if(G.matches)S=G.matches;else{let{error:xe,notFoundMatches:at,route:we}=Nl(x.pathname);return{matches:at,loaderData:{},errors:{[we.id]:xe}}}}let Z=s||l,[$e,Ce]=Xc(e.history,g,S,ne,x,c.v7_partialHydration&&B===!0,c.v7_skipActionErrorRevalidation,tt,gt,L,Pe,Fe,Ne,Z,a,U);if($l(G=>!(S&&S.some(xe=>xe.route.id===G))||$e&&$e.some(xe=>xe.route.id===G)),te=++H,$e.length===0&&Ce.length===0){let G=Tu();return Zn(x,me({matches:S,loaderData:{},errors:U&&ut(U[1])?{[U[0]]:U[1].error}:null},nd(U),G?{fetchers:new Map(g.fetchers)}:{}),{flushSync:F}),{shortCircuited:!0}}if(ue){let G={};if(!C){G.navigation=ee;let xe=Cu(U);xe!==void 0&&(G.actionData=xe)}Ce.length>0&&(G.fetchers=km(Ce)),ye(G,{flushSync:F})}Ce.forEach(G=>{O.has(G.key)&&en(G.key),G.controller&&O.set(G.key,G.controller)});let Fr=()=>Ce.forEach(G=>en(G.key));W&&W.signal.addEventListener("abort",Fr);let{loaderResults:Ut,fetcherResults:qn}=await _u(g,S,$e,Ce,m);if(m.signal.aborted)return{shortCircuited:!0};W&&W.signal.removeEventListener("abort",Fr),Ce.forEach(G=>O.delete(G.key));let tn=gi(Ut);if(tn)return await Ln(m,tn.result,!0,{replace:R}),{shortCircuited:!0};if(tn=gi(qn),tn)return Ne.add(tn.key),await Ln(m,tn.result,!0,{replace:R}),{shortCircuited:!0};let{loaderData:Xo,errors:jt}=ed(g,S,$e,Ut,U,Ce,qn,Ue);Ue.forEach((G,xe)=>{G.subscribe(at=>{(at||G.done)&&Ue.delete(xe)})}),c.v7_partialHydration&&B&&g.errors&&Object.entries(g.errors).filter(G=>{let[xe]=G;return!$e.some(at=>at.route.id===xe)}).forEach(G=>{let[xe,at]=G;jt=Object.assign(jt||{},{[xe]:at})});let Jo=Tu(),Zo=zu(te),qo=Jo||Zo||Ce.length>0;return me({matches:S,loaderData:Xo,errors:jt},qo?{fetchers:new Map(g.fetchers)}:{})}function Cu(m){if(m&&!ut(m[1]))return{[m[0]]:m[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function km(m){return m.forEach(x=>{let S=g.fetchers.get(x.key),C=Gr(void 0,S?S.data:void 0);g.fetchers.set(x.key,C)}),new Map(g.fetchers)}function Em(m,x,S,C){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");O.has(m)&&en(m);let A=(C&&C.unstable_flushSync)===!0,V=s||l,Q=is(g.location,g.matches,a,c.v7_prependBasename,S,c.v7_relativeSplatPath,x,C?.relative),R=un(V,Q,a),B=Go(R,V,Q);if(B.active&&B.matches&&(R=B.matches),!R){Ft(m,x,Xe(404,{pathname:Q}),{flushSync:A});return}let{path:F,submission:U,error:ee}=Yc(c.v7_normalizeFormMethod,!0,Q,C);if(ee){Ft(m,x,ee,{flushSync:A});return}let ne=no(R,F);if(D=(C&&C.preventScrollReset)===!0,U&&zt(U.formMethod)){Cm(m,x,F,ne,R,B.active,A,U);return}Fe.set(m,{routeId:x,path:F}),_m(m,x,F,ne,R,B.active,A,U)}async function Cm(m,x,S,C,A,V,Q,R){Ll(),Fe.delete(m);function B(we){if(!we.route.action&&!we.route.lazy){let Vt=Xe(405,{method:R.formMethod,pathname:S,routeId:x});return Ft(m,x,Vt,{flushSync:Q}),!0}return!1}if(!V&&B(C))return;let F=g.fetchers.get(m);qt(m,Zg(R,F),{flushSync:Q});let U=new AbortController,ee=tr(e.history,S,U.signal,R);if(V){let we=await Yo(A,S,ee.signal);if(we.type==="aborted")return;if(we.type==="error"){let{error:Vt}=Ko(S,we);Ft(m,x,Vt,{flushSync:Q});return}else if(we.matches){if(A=we.matches,C=no(A,S),B(C))return}else{Ft(m,x,Xe(404,{pathname:S}),{flushSync:Q});return}}O.set(m,U);let ne=H,Z=(await Ir("action",g,ee,[C],A,m))[C.route.id];if(ee.signal.aborted){O.get(m)===U&&O.delete(m);return}if(c.v7_fetcherPersist&&Pe.has(m)){if(In(Z)||ut(Z)){qt(m,rn(void 0));return}}else{if(In(Z))if(O.delete(m),te>ne){qt(m,rn(void 0));return}else return Ne.add(m),qt(m,Gr(R)),Ln(ee,Z,!1,{fetcherSubmission:R});if(ut(Z)){Ft(m,x,Z.error);return}}if(pn(Z))throw Xe(400,{type:"defer-action"});let $e=g.navigation.location||g.location,Ce=tr(e.history,$e,U.signal),Fr=s||l,Ut=g.navigation.state!=="idle"?un(Fr,g.navigation.location,a):g.matches;X(Ut,"Didn't find any matches after fetcher action");let qn=++H;oe.set(m,qn);let tn=Gr(R,Z.data);g.fetchers.set(m,tn);let[Xo,jt]=Xc(e.history,g,Ut,R,$e,!1,c.v7_skipActionErrorRevalidation,tt,gt,L,Pe,Fe,Ne,Fr,a,[C.route.id,Z]);jt.filter(we=>we.key!==m).forEach(we=>{let Vt=we.key,Du=g.fetchers.get(Vt),Nm=Gr(void 0,Du?Du.data:void 0);g.fetchers.set(Vt,Nm),O.has(Vt)&&en(Vt),we.controller&&O.set(Vt,we.controller)}),ye({fetchers:new Map(g.fetchers)});let Jo=()=>jt.forEach(we=>en(we.key));U.signal.addEventListener("abort",Jo);let{loaderResults:Zo,fetcherResults:qo}=await _u(g,Ut,Xo,jt,Ce);if(U.signal.aborted)return;U.signal.removeEventListener("abort",Jo),oe.delete(m),O.delete(m),jt.forEach(we=>O.delete(we.key));let G=gi(Zo);if(G)return Ln(Ce,G.result,!1);if(G=gi(qo),G)return Ne.add(G.key),Ln(Ce,G.result,!1);let{loaderData:xe,errors:at}=ed(g,Ut,Xo,Zo,void 0,jt,qo,Ue);if(g.fetchers.has(m)){let we=rn(Z.data);g.fetchers.set(m,we)}zu(qn),g.navigation.state==="loading"&&qn>te?(X(j,"Expected pending action"),W&&W.abort(),Zn(g.navigation.location,{matches:Ut,loaderData:xe,errors:at,fetchers:new Map(g.fetchers)})):(ye({errors:at,loaderData:td(g.loaderData,xe,Ut,at),fetchers:new Map(g.fetchers)}),tt=!1)}async function _m(m,x,S,C,A,V,Q,R){let B=g.fetchers.get(m);qt(m,Gr(R,B?B.data:void 0),{flushSync:Q});let F=new AbortController,U=tr(e.history,S,F.signal);if(V){let Z=await Yo(A,S,U.signal);if(Z.type==="aborted")return;if(Z.type==="error"){let{error:$e}=Ko(S,Z);Ft(m,x,$e,{flushSync:Q});return}else if(Z.matches)A=Z.matches,C=no(A,S);else{Ft(m,x,Xe(404,{pathname:S}),{flushSync:Q});return}}O.set(m,F);let ee=H,ue=(await Ir("loader",g,U,[C],A,m))[C.route.id];if(pn(ue)&&(ue=await lu(ue,U.signal,!0)||ue),O.get(m)===F&&O.delete(m),!U.signal.aborted){if(Pe.has(m)){qt(m,rn(void 0));return}if(In(ue))if(te>ee){qt(m,rn(void 0));return}else{Ne.add(m),await Ln(U,ue,!1);return}if(ut(ue)){Ft(m,x,ue.error);return}X(!pn(ue),"Unhandled fetcher deferred data"),qt(m,rn(ue.data))}}async function Ln(m,x,S,C){let{submission:A,fetcherSubmission:V,replace:Q}=C===void 0?{}:C;x.response.headers.has("X-Remix-Revalidate")&&(tt=!0);let R=x.response.headers.get("Location");X(R,"Expected a Location header on the redirect Response"),R=Zc(R,new URL(m.url),a);let B=No(g.location,R,{_isRedirect:!0});if(n){let Z=!1;if(x.response.headers.has("X-Remix-Reload-Document"))Z=!0;else if(iu.test(R)){const $e=e.history.createURL(R);Z=$e.origin!==t.location.origin||Kn($e.pathname,a)==null}if(Z){Q?t.location.replace(R):t.location.assign(R);return}}W=null;let F=Q===!0||x.response.headers.has("X-Remix-Replace")?_e.Replace:_e.Push,{formMethod:U,formAction:ee,formEncType:ne}=g.navigation;!A&&!V&&U&&ee&&ne&&(A=id(g.navigation));let ue=A||V;if(zg.has(x.response.status)&&ue&&zt(ue.formMethod))await Rn(F,B,{submission:me({},ue,{formAction:R}),preventScrollReset:D,enableViewTransition:S?J:void 0});else{let Z=sa(B,A);await Rn(F,B,{overrideNavigation:Z,fetcherSubmission:V,preventScrollReset:D,enableViewTransition:S?J:void 0})}}async function Ir(m,x,S,C,A,V){let Q,R={};try{Q=await Fg(u,m,x,S,C,A,V,i,o)}catch(B){return C.forEach(F=>{R[F.route.id]={type:ie.error,error:B}}),R}for(let[B,F]of Object.entries(Q))if(Qg(F)){let U=F.result;R[B]={type:ie.redirect,response:Vg(U,S,B,A,a,c.v7_relativeSplatPath)}}else R[B]=await jg(F);return R}async function _u(m,x,S,C,A){let V=m.matches,Q=Ir("loader",m,A,S,x,null),R=Promise.all(C.map(async U=>{if(U.matches&&U.match&&U.controller){let ne=(await Ir("loader",m,tr(e.history,U.path,U.controller.signal),[U.match],U.matches,U.key))[U.match.route.id];return{[U.key]:ne}}else return Promise.resolve({[U.key]:{type:ie.error,error:Xe(404,{pathname:U.path})}})})),B=await Q,F=(await R).reduce((U,ee)=>Object.assign(U,ee),{});return await Promise.all([Yg(x,B,A.signal,V,m.loaderData),Xg(x,F,C)]),{loaderResults:B,fetcherResults:F}}function Ll(){tt=!0,gt.push(...$l()),Fe.forEach((m,x)=>{O.has(x)&&(L.add(x),en(x))})}function qt(m,x,S){S===void 0&&(S={}),g.fetchers.set(m,x),ye({fetchers:new Map(g.fetchers)},{flushSync:(S&&S.flushSync)===!0})}function Ft(m,x,S,C){C===void 0&&(C={});let A=gr(g.matches,x);Wo(m),ye({errors:{[A.route.id]:S},fetchers:new Map(g.fetchers)},{flushSync:(C&&C.flushSync)===!0})}function bu(m){return c.v7_fetcherPersist&&(yt.set(m,(yt.get(m)||0)+1),Pe.has(m)&&Pe.delete(m)),g.fetchers.get(m)||Rg}function Wo(m){let x=g.fetchers.get(m);O.has(m)&&!(x&&x.state==="loading"&&oe.has(m))&&en(m),Fe.delete(m),oe.delete(m),Ne.delete(m),Pe.delete(m),L.delete(m),g.fetchers.delete(m)}function bm(m){if(c.v7_fetcherPersist){let x=(yt.get(m)||0)-1;x<=0?(yt.delete(m),Pe.add(m)):yt.set(m,x)}else Wo(m);ye({fetchers:new Map(g.fetchers)})}function en(m){let x=O.get(m);X(x,"Expected fetch controller: "+m),x.abort(),O.delete(m)}function Pu(m){for(let x of m){let S=bu(x),C=rn(S.data);g.fetchers.set(x,C)}}function Tu(){let m=[],x=!1;for(let S of Ne){let C=g.fetchers.get(S);X(C,"Expected fetcher: "+S),C.state==="loading"&&(Ne.delete(S),m.push(S),x=!0)}return Pu(m),x}function zu(m){let x=[];for(let[S,C]of oe)if(C<m){let A=g.fetchers.get(S);X(A,"Expected fetcher: "+S),A.state==="loading"&&(en(S),oe.delete(S),x.push(S))}return Pu(x),x.length>0}function Pm(m,x){let S=g.blockers.get(m)||rr;return _.get(m)!==x&&_.set(m,x),S}function Ru(m){g.blockers.delete(m),_.delete(m)}function Qo(m,x){let S=g.blockers.get(m)||rr;X(S.state==="unblocked"&&x.state==="blocked"||S.state==="blocked"&&x.state==="blocked"||S.state==="blocked"&&x.state==="proceeding"||S.state==="blocked"&&x.state==="unblocked"||S.state==="proceeding"&&x.state==="unblocked","Invalid blocker state transition: "+S.state+" -> "+x.state);let C=new Map(g.blockers);C.set(m,x),ye({blockers:C})}function Lu(m){let{currentLocation:x,nextLocation:S,historyAction:C}=m;if(_.size===0)return;_.size>1&&Lr(!1,"A router only supports one blocker at a time");let A=Array.from(_.entries()),[V,Q]=A[A.length-1],R=g.blockers.get(V);if(!(R&&R.state==="proceeding")&&Q({currentLocation:x,nextLocation:S,historyAction:C}))return V}function Nl(m){let x=Xe(404,{pathname:m}),S=s||l,{matches:C,route:A}=rd(S);return $l(),{notFoundMatches:C,route:A,error:x}}function Ko(m,x){return{boundaryId:gr(x.partialMatches).route.id,error:Xe(400,{type:"route-discovery",pathname:m,message:x.error!=null&&"message"in x.error?x.error:String(x.error)})}}function $l(m){let x=[];return Ue.forEach((S,C)=>{(!m||m(C))&&(S.cancel(),x.push(C),Ue.delete(C))}),x}function Tm(m,x,S){if(z=m,f=x,h=S||null,!y&&g.navigation===aa){y=!0;let C=$u(g.location,g.matches);C!=null&&ye({restoreScrollPosition:C})}return()=>{z=null,f=null,h=null}}function Nu(m,x){return h&&h(m,x.map(C=>ag(C,g.loaderData)))||m.key}function zm(m,x){if(z&&f){let S=Nu(m,x);z[S]=f()}}function $u(m,x){if(z){let S=Nu(m,x),C=z[S];if(typeof C=="number")return C}return null}function Go(m,x,S){if(d){if(k.has(S))return{active:!1,matches:m};if(m){if(Object.keys(m[0].params).length>0)return{active:!0,matches:Li(x,S,a,!0)}}else return{active:!0,matches:Li(x,S,a,!0)||[]}}return{active:!1,matches:null}}async function Yo(m,x,S){let C=m;for(;;){let A=s==null,V=s||l;try{await Og(d,x,C,V,i,o,N,S)}catch(B){return{type:"error",error:B,partialMatches:C}}finally{A&&(l=[...l])}if(S.aborted)return{type:"aborted"};let Q=un(V,x,a);if(Q)return Mu(x,k),{type:"success",matches:Q};let R=Li(V,x,a,!0);if(!R||C.length===R.length&&C.every((B,F)=>B.route.id===R[F].route.id))return Mu(x,k),{type:"success",matches:null};C=R}}function Mu(m,x){if(x.size>=w){let S=x.values().next().value;x.delete(S)}x.add(m)}function Rm(m){i={},s=$o(m,o,void 0,i)}function Lm(m,x){let S=s==null;Yp(m,x,s||l,i,o),S&&(l=[...l],ye({}))}return M={get basename(){return a},get future(){return c},get state(){return g},get routes(){return l},get window(){return t},initialize:je,subscribe:Te,enableScrollRestoration:Tm,navigate:Eu,fetch:Em,revalidate:xm,createHref:m=>e.history.createHref(m),encodeLocation:m=>e.history.encodeLocation(m),getFetcher:bu,deleteFetcher:bm,dispose:We,getBlocker:Pm,deleteBlocker:Ru,patchRoutes:Lm,_internalFetchControllers:O,_internalActiveDeferreds:Ue,_internalSetRoutes:Rm},M}function $g(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function is(e,t,n,r,o,i,l,s){let a,u;if(l){a=[];for(let c of t)if(a.push(c),c.route.id===l){u=c;break}}else a=t,u=t[t.length-1];let d=Wp(o||".",Hp(a,i),Kn(e.pathname,n)||e.pathname,s==="path");return o==null&&(d.search=e.search,d.hash=e.hash),(o==null||o===""||o===".")&&u&&u.route.index&&!au(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:kn([n,d.pathname])),Bo(d)}function Yc(e,t,n,r){if(!r||!$g(r))return{path:n};if(r.formMethod&&!Gg(r.formMethod))return{path:n,error:Xe(405,{method:r.formMethod})};let o=()=>({path:n,error:Xe(400,{type:"invalid-body"})}),i=r.formMethod||"get",l=e?i.toUpperCase():i.toLowerCase(),s=Xp(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!zt(l))return o();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((v,w)=>{let[k,z]=w;return""+v+k+"="+z+`
`},""):String(r.body);return{path:n,submission:{formMethod:l,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!zt(l))return o();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:l,formAction:s,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return o()}}}X(typeof FormData=="function","FormData is not available in this environment");let a,u;if(r.formData)a=ls(r.formData),u=r.formData;else if(r.body instanceof FormData)a=ls(r.body),u=r.body;else if(r.body instanceof URLSearchParams)a=r.body,u=qc(a);else if(r.body==null)a=new URLSearchParams,u=new FormData;else try{a=new URLSearchParams(r.body),u=qc(a)}catch{return o()}let d={formMethod:l,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(zt(d.formMethod))return{path:n,submission:d};let c=Tn(n);return t&&c.search&&au(c.search)&&a.append("index",""),c.search="?"+a,{path:Bo(c),submission:d}}function Mg(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Xc(e,t,n,r,o,i,l,s,a,u,d,c,p,v,w,k){let z=k?ut(k[1])?k[1].error:k[1].data:void 0,h=e.createURL(t.location),f=e.createURL(o),y=k&&ut(k[1])?k[0]:void 0,E=y?Mg(n,y):n,T=k?k[1].statusCode:void 0,$=l&&T&&T>=400,M=E.filter((j,D)=>{let{route:W}=j;if(W.lazy)return!0;if(W.loader==null)return!1;if(i)return typeof W.loader!="function"||W.loader.hydrate?!0:t.loaderData[W.id]===void 0&&(!t.errors||t.errors[W.id]===void 0);if(Dg(t.loaderData,t.matches[D],j)||a.some(se=>se===j.route.id))return!0;let J=t.matches[D],pe=j;return Jc(j,me({currentUrl:h,currentParams:J.params,nextUrl:f,nextParams:pe.params},r,{actionResult:z,actionStatus:T,defaultShouldRevalidate:$?!1:s||h.pathname+h.search===f.pathname+f.search||h.search!==f.search||Gp(J,pe)}))}),g=[];return c.forEach((j,D)=>{if(i||!n.some(Ie=>Ie.route.id===j.routeId)||d.has(D))return;let W=un(v,j.path,w);if(!W){g.push({key:D,routeId:j.routeId,path:j.path,matches:null,match:null,controller:null});return}let J=t.fetchers.get(D),pe=no(W,j.path),se=!1;p.has(D)?se=!1:u.has(D)?(u.delete(D),se=!0):J&&J.state!=="idle"&&J.data===void 0?se=s:se=Jc(pe,me({currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:z,actionStatus:T,defaultShouldRevalidate:$?!1:s})),se&&g.push({key:D,routeId:j.routeId,path:j.path,matches:W,match:pe,controller:new AbortController})}),[M,g]}function Dg(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function Gp(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Jc(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Og(e,t,n,r,o,i,l,s){let a=[t,...n.map(u=>u.route.id)].join("-");try{let u=l.get(a);u||(u=e({path:t,matches:n,patch:(d,c)=>{s.aborted||Yp(d,c,r,o,i)}}),l.set(a,u)),u&&Wg(u)&&await u}finally{l.delete(a)}}function Yp(e,t,n,r,o){if(e){var i;let l=r[e];X(l,"No route found to patch children into: routeId = "+e);let s=$o(t,o,[e,"patch",String(((i=l.children)==null?void 0:i.length)||"0")],r);l.children?l.children.push(...s):l.children=s}else{let l=$o(t,o,["patch",String(n.length||"0")],r);n.push(...l)}}async function Ag(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];X(o,"No route found in manifest");let i={};for(let l in r){let a=o[l]!==void 0&&l!=="hasErrorBoundary";Lr(!a,'Route "'+o.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!a&&!ig.has(l)&&(i[l]=r[l])}Object.assign(o,i),Object.assign(o,me({},t(o),{lazy:void 0}))}async function Ig(e){let{matches:t}=e,n=t.filter(o=>o.shouldLoad);return(await Promise.all(n.map(o=>o.resolve()))).reduce((o,i,l)=>Object.assign(o,{[n[l].route.id]:i}),{})}async function Fg(e,t,n,r,o,i,l,s,a,u){let d=i.map(v=>v.route.lazy?Ag(v.route,a,s):void 0),c=i.map((v,w)=>{let k=d[w],z=o.some(f=>f.route.id===v.route.id);return me({},v,{shouldLoad:z,resolve:async f=>(f&&r.method==="GET"&&(v.route.lazy||v.route.loader)&&(z=!0),z?Ug(t,r,v,k,f,u):Promise.resolve({type:ie.data,result:void 0}))})}),p=await e({matches:c,request:r,params:i[0].params,fetcherKey:l,context:u});try{await Promise.all(d)}catch{}return p}async function Ug(e,t,n,r,o,i){let l,s,a=u=>{let d,c=new Promise((w,k)=>d=k);s=()=>d(),t.signal.addEventListener("abort",s);let p=w=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:i},...w!==void 0?[w]:[]),v=(async()=>{try{return{type:"data",result:await(o?o(k=>p(k)):p())}}catch(w){return{type:"error",result:w}}})();return Promise.race([v,c])};try{let u=n.route[e];if(r)if(u){let d,[c]=await Promise.all([a(u).catch(p=>{d=p}),r]);if(d!==void 0)throw d;l=c}else if(await r,u=n.route[e],u)l=await a(u);else if(e==="action"){let d=new URL(t.url),c=d.pathname+d.search;throw Xe(405,{method:t.method,pathname:c,routeId:n.route.id})}else return{type:ie.data,result:void 0};else if(u)l=await a(u);else{let d=new URL(t.url),c=d.pathname+d.search;throw Xe(404,{pathname:c})}X(l.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:ie.error,result:u}}finally{s&&t.signal.removeEventListener("abort",s)}return l}async function jg(e){let{result:t,type:n}=e;if(Jp(t)){let u;try{let d=t.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?t.body==null?u=null:u=await t.json():u=await t.text()}catch(d){return{type:ie.error,error:d}}return n===ie.error?{type:ie.error,error:new rl(t.status,t.statusText,u),statusCode:t.status,headers:t.headers}:{type:ie.data,data:u,statusCode:t.status,headers:t.headers}}if(n===ie.error){if(od(t)){var r;if(t.data instanceof Error){var o;return{type:ie.error,error:t.data,statusCode:(o=t.init)==null?void 0:o.status}}t=new rl(((r=t.init)==null?void 0:r.status)||500,void 0,t.data)}return{type:ie.error,error:t,statusCode:El(t)?t.status:void 0}}if(Kg(t)){var i,l;return{type:ie.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((l=t.init)==null?void 0:l.headers)&&new Headers(t.init.headers)}}if(od(t)){var s,a;return{type:ie.data,data:t.data,statusCode:(s=t.init)==null?void 0:s.status,headers:(a=t.init)!=null&&a.headers?new Headers(t.init.headers):void 0}}return{type:ie.data,data:t}}function Vg(e,t,n,r,o,i){let l=e.headers.get("Location");if(X(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!iu.test(l)){let s=r.slice(0,r.findIndex(a=>a.route.id===n)+1);l=is(new URL(t.url),s,o,!0,l,i),e.headers.set("Location",l)}return e}function Zc(e,t,n){if(iu.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=Kn(o.pathname,n)!=null;if(o.origin===t.origin&&i)return o.pathname+o.search+o.hash}return e}function tr(e,t,n,r){let o=e.createURL(Xp(t)).toString(),i={signal:n};if(r&&zt(r.formMethod)){let{formMethod:l,formEncType:s}=r;i.method=l.toUpperCase(),s==="application/json"?(i.headers=new Headers({"Content-Type":s}),i.body=JSON.stringify(r.json)):s==="text/plain"?i.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?i.body=ls(r.formData):i.body=r.formData}return new Request(o,i)}function ls(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function qc(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Bg(e,t,n,r,o){let i={},l=null,s,a=!1,u={},d=n&&ut(n[1])?n[1].error:void 0;return e.forEach(c=>{if(!(c.route.id in t))return;let p=c.route.id,v=t[p];if(X(!In(v),"Cannot handle redirect results in processLoaderData"),ut(v)){let w=v.error;d!==void 0&&(w=d,d=void 0),l=l||{};{let k=gr(e,p);l[k.route.id]==null&&(l[k.route.id]=w)}i[p]=void 0,a||(a=!0,s=El(v.error)?v.error.status:500),v.headers&&(u[p]=v.headers)}else pn(v)?(r.set(p,v.deferredData),i[p]=v.deferredData.data,v.statusCode!=null&&v.statusCode!==200&&!a&&(s=v.statusCode),v.headers&&(u[p]=v.headers)):(i[p]=v.data,v.statusCode&&v.statusCode!==200&&!a&&(s=v.statusCode),v.headers&&(u[p]=v.headers))}),d!==void 0&&n&&(l={[n[0]]:d},i[n[0]]=void 0),{loaderData:i,errors:l,statusCode:s||200,loaderHeaders:u}}function ed(e,t,n,r,o,i,l,s){let{loaderData:a,errors:u}=Bg(t,r,o,s);return i.forEach(d=>{let{key:c,match:p,controller:v}=d,w=l[c];if(X(w,"Did not find corresponding fetcher result"),!(v&&v.signal.aborted))if(ut(w)){let k=gr(e.matches,p?.route.id);u&&u[k.route.id]||(u=me({},u,{[k.route.id]:w.error})),e.fetchers.delete(c)}else if(In(w))X(!1,"Unhandled fetcher revalidation redirect");else if(pn(w))X(!1,"Unhandled fetcher deferred data");else{let k=rn(w.data);e.fetchers.set(c,k)}}),{loaderData:a,errors:u}}function td(e,t,n,r){let o=me({},t);for(let i of n){let l=i.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(o[l]=t[l]):e[l]!==void 0&&i.route.loader&&(o[l]=e[l]),r&&r.hasOwnProperty(l))break}return o}function nd(e){return e?ut(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function gr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function rd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Xe(e,t){let{pathname:n,routeId:r,method:o,type:i,message:l}=t===void 0?{}:t,s="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(s="Bad Request",i==="route-discovery"?a='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+l):o&&n&&r?a="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?a="defer() is not supported in actions":i==="invalid-body"&&(a="Unable to encode submission body")):e===403?(s="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",a='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",o&&n&&r?a="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(a='Invalid request method "'+o.toUpperCase()+'"')),new rl(e||500,s,new Error(a),!0)}function gi(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,o]=t[n];if(In(o))return{key:r,result:o}}}function Xp(e){let t=typeof e=="string"?Tn(e):e;return Bo(me({},t,{hash:""}))}function Hg(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Wg(e){return typeof e=="object"&&e!=null&&"then"in e}function Qg(e){return Jp(e.result)&&Tg.has(e.result.status)}function pn(e){return e.type===ie.deferred}function ut(e){return e.type===ie.error}function In(e){return(e&&e.type)===ie.redirect}function od(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Kg(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Jp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Gg(e){return Pg.has(e.toLowerCase())}function zt(e){return _g.has(e.toLowerCase())}async function Yg(e,t,n,r,o){let i=Object.entries(t);for(let l=0;l<i.length;l++){let[s,a]=i[l],u=e.find(p=>p?.route.id===s);if(!u)continue;let d=r.find(p=>p.route.id===u.route.id),c=d!=null&&!Gp(d,u)&&(o&&o[u.route.id])!==void 0;pn(a)&&c&&await lu(a,n,!1).then(p=>{p&&(t[s]=p)})}}async function Xg(e,t,n){for(let r=0;r<n.length;r++){let{key:o,routeId:i,controller:l}=n[r],s=t[o];e.find(u=>u?.route.id===i)&&pn(s)&&(X(l,"Expected an AbortController for revalidating fetcher deferred result"),await lu(s,l.signal,!0).then(u=>{u&&(t[o]=u)}))}}async function lu(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ie.data,data:e.deferredData.unwrappedData}}catch(o){return{type:ie.error,error:o}}return{type:ie.data,data:e.deferredData.data}}}function au(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function no(e,t){let n=typeof t=="string"?Tn(t).search:t.search;if(e[e.length-1].route.index&&au(n||""))return e[e.length-1];let r=Bp(e);return r[r.length-1]}function id(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:l}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}}}function sa(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Jg(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Gr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Zg(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function rn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function qg(e,t){try{let n=e.sessionStorage.getItem(Kp);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function e0(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(Kp,JSON.stringify(n))}catch(r){Lr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nr(){return Nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nr.apply(this,arguments)}const Cl=b.createContext(null),Zp=b.createContext(null),_l=b.createContext(null),su=b.createContext(null),Ar=b.createContext({outlet:null,matches:[],isDataRoute:!1}),qp=b.createContext(null);function bl(){return b.useContext(su)!=null}function uu(){return bl()||X(!1),b.useContext(su).location}function em(e){b.useContext(_l).static||b.useLayoutEffect(e)}function t0(){let{isDataRoute:e}=b.useContext(Ar);return e?p0():n0()}function n0(){bl()||X(!1);let e=b.useContext(Cl),{basename:t,future:n,navigator:r}=b.useContext(_l),{matches:o}=b.useContext(Ar),{pathname:i}=uu(),l=JSON.stringify(Hp(o,n.v7_relativeSplatPath)),s=b.useRef(!1);return em(()=>{s.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let c=Wp(u,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:kn([t,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[t,r,l,i,e])}function r0(e,t,n,r){bl()||X(!1);let{navigator:o}=b.useContext(_l),{matches:i}=b.useContext(Ar),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=uu(),d;d=u;let c=d.pathname||"/",p=c;if(a!=="/"){let k=a.replace(/^\//,"").split("/");p="/"+c.replace(/^\//,"").split("/").slice(k.length).join("/")}let v=un(e,{pathname:p});return s0(v&&v.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:kn([a,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?a:kn([a,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r)}function o0(){let e=c0(),t=El(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:o},n):null,null)}const i0=b.createElement(o0,null);class l0 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Ar.Provider,{value:this.props.routeContext},b.createElement(qp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function a0(e){let{routeContext:t,match:n,children:r}=e,o=b.useContext(Cl);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Ar.Provider,{value:t},r)}function s0(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let d=l.findIndex(c=>c.route.id&&s?.[c.route.id]!==void 0);d>=0||X(!1),l=l.slice(0,Math.min(l.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let c=l[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:p,errors:v}=n,w=c.route.loader&&p[c.route.id]===void 0&&(!v||v[c.route.id]===void 0);if(c.route.lazy||w){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,c,p)=>{let v,w=!1,k=null,z=null;n&&(v=s&&c.route.id?s[c.route.id]:void 0,k=c.route.errorElement||i0,a&&(u<0&&p===0?(m0("route-fallback"),w=!0,z=null):u===p&&(w=!0,z=c.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,p+1)),f=()=>{let y;return v?y=k:w?y=z:c.route.Component?y=b.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=d,b.createElement(a0,{match:c,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||p===0)?b.createElement(l0,{location:n.location,revalidation:n.revalidation,component:k,error:v,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var cu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(cu||{}),Mo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Mo||{});function tm(e){let t=b.useContext(Cl);return t||X(!1),t}function nm(e){let t=b.useContext(Zp);return t||X(!1),t}function u0(e){let t=b.useContext(Ar);return t||X(!1),t}function rm(e){let t=u0(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function c0(){var e;let t=b.useContext(qp),n=nm(Mo.UseRouteError),r=rm(Mo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}let d0=0;function f0(e){let{router:t,basename:n}=tm(cu.UseBlocker),r=nm(Mo.UseBlocker),[o,i]=b.useState(""),l=b.useCallback(s=>{if(typeof e!="function")return!!e;if(n==="/")return e(s);let{currentLocation:a,nextLocation:u,historyAction:d}=s;return e({currentLocation:Nr({},a,{pathname:Kn(a.pathname,n)||a.pathname}),nextLocation:Nr({},u,{pathname:Kn(u.pathname,n)||u.pathname}),historyAction:d})},[n,e]);return b.useEffect(()=>{let s=String(++d0);return i(s),()=>t.deleteBlocker(s)},[t]),b.useEffect(()=>{o!==""&&t.getBlocker(o,l)},[t,o,l]),o&&r.blockers.has(o)?r.blockers.get(o):rr}function p0(){let{router:e}=tm(cu.UseNavigateStable),t=rm(Mo.UseNavigateStable),n=b.useRef(!1);return em(()=>{n.current=!0}),b.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Nr({fromRouteId:t},i)))},[e,t])}const ld={};function m0(e,t,n){ld[e]||(ld[e]=!0)}function h0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=_e.Pop,navigator:i,static:l=!1,future:s}=e;bl()&&X(!1);let a=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:a,navigator:i,static:l,future:Nr({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof r=="string"&&(r=Tn(r));let{pathname:d="/",search:c="",hash:p="",state:v=null,key:w="default"}=r,k=b.useMemo(()=>{let z=Kn(d,a);return z==null?null:{location:{pathname:z,search:c,hash:p,state:v,key:w},navigationType:o}},[a,d,c,p,v,w,o]);return k==null?null:b.createElement(_l.Provider,{value:u},b.createElement(su.Provider,{children:n,value:k}))}new Promise(()=>{});function v0(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:b.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:b.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:b.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ol.apply(this,arguments)}const g0="6";try{window.__reactRouterVersion=g0}catch{}function y0(e,t){return Ng({basename:t?.basename,future:ol({},t?.future,{v7_prependBasename:!0}),history:ng({window:t?.window}),hydrationData:t?.hydrationData||x0(),routes:e,mapRouteProperties:v0,unstable_dataStrategy:t?.unstable_dataStrategy,unstable_patchRoutesOnNavigation:t?.unstable_patchRoutesOnNavigation,window:t?.window}).initialize()}function x0(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=ol({},t,{errors:w0(t.errors)})),t}function w0(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new rl(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let l=new i(o.message);l.stack="",n[r]=l}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const S0=b.createContext({isTransitioning:!1}),k0=b.createContext(new Map),E0="startTransition",ad=Ym[E0],C0="flushSync",sd=tg[C0];function _0(e){ad?ad(e):e()}function Yr(e){sd?sd(e):e()}class b0{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function P0(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=b.useState(n.state),[l,s]=b.useState(),[a,u]=b.useState({isTransitioning:!1}),[d,c]=b.useState(),[p,v]=b.useState(),[w,k]=b.useState(),z=b.useRef(new Map),{v7_startTransition:h}=r||{},f=b.useCallback(g=>{h?_0(g):g()},[h]),y=b.useCallback((g,j)=>{let{deletedFetchers:D,unstable_flushSync:W,unstable_viewTransitionOpts:J}=j;D.forEach(se=>z.current.delete(se)),g.fetchers.forEach((se,Ie)=>{se.data!==void 0&&z.current.set(Ie,se.data)});let pe=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!J||pe){W?Yr(()=>i(g)):f(()=>i(g));return}if(W){Yr(()=>{p&&(d&&d.resolve(),p.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:J.currentLocation,nextLocation:J.nextLocation})});let se=n.window.document.startViewTransition(()=>{Yr(()=>i(g))});se.finished.finally(()=>{Yr(()=>{c(void 0),v(void 0),s(void 0),u({isTransitioning:!1})})}),Yr(()=>v(se));return}p?(d&&d.resolve(),p.skipTransition(),k({state:g,currentLocation:J.currentLocation,nextLocation:J.nextLocation})):(s(g),u({isTransitioning:!0,flushSync:!1,currentLocation:J.currentLocation,nextLocation:J.nextLocation}))},[n.window,p,d,z,f]);b.useLayoutEffect(()=>n.subscribe(y),[n,y]),b.useEffect(()=>{a.isTransitioning&&!a.flushSync&&c(new b0)},[a]),b.useEffect(()=>{if(d&&l&&n.window){let g=l,j=d.promise,D=n.window.document.startViewTransition(async()=>{f(()=>i(g)),await j});D.finished.finally(()=>{c(void 0),v(void 0),s(void 0),u({isTransitioning:!1})}),v(D)}},[f,l,d,n.window]),b.useEffect(()=>{d&&l&&o.location.key===l.location.key&&d.resolve()},[d,p,o.location,l]),b.useEffect(()=>{!a.isTransitioning&&w&&(s(w.state),u({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),k(void 0))},[a.isTransitioning,w]),b.useEffect(()=>{},[]);let E=b.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,j,D)=>n.navigate(g,{state:j,preventScrollReset:D?.preventScrollReset}),replace:(g,j,D)=>n.navigate(g,{replace:!0,state:j,preventScrollReset:D?.preventScrollReset})}),[n]),T=n.basename||"/",$=b.useMemo(()=>({router:n,navigator:E,static:!1,basename:T}),[n,E,T]),M=b.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return b.createElement(b.Fragment,null,b.createElement(Cl.Provider,{value:$},b.createElement(Zp.Provider,{value:o},b.createElement(k0.Provider,{value:z.current},b.createElement(S0.Provider,{value:a},b.createElement(h0,{basename:T,location:o.location,navigationType:o.historyAction,navigator:E,future:M},o.initialized||n.future.v7_partialHydration?b.createElement(T0,{routes:n.routes,future:n.future,state:o}):t))))),null)}const T0=b.memo(z0);function z0(e){let{routes:t,future:n,state:r}=e;return r0(t,void 0,r,n)}var ud;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ud||(ud={}));var cd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(cd||(cd={}));const R0="modulepreload",L0=function(e,t){return new URL(e,t).href},dd={},as=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),s=l?.nonce||l?.getAttribute("nonce");o=Promise.all(n.map(a=>{if(a=L0(a,r),a in dd)return;dd[a]=!0;const u=a.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!r)for(let v=i.length-1;v>=0;v--){const w=i[v];if(w.href===a&&(!u||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":R0,u||(p.as="script",p.crossOrigin=""),p.href=a,s&&p.setAttribute("nonce",s),document.head.appendChild(p),u)return new Promise((v,w)=>{p.addEventListener("load",v),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${a}`)))})}))}return o.then(()=>t()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})};var ua,Re;(function(e){e.CONNECTED="connected",e.LOADING="loading",e.RECONNECTING="reconnecting",e.CONNECTION_LOST="connection-lost"})(Re||(Re={}));class N0{constructor(t){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=t,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(n=>{var r;(r=n.active)===null||r===void 0||r.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(t){this.stateChangeListeners.add(t)}removeStateChangeListener(t){this.stateChangeListeners.delete(t)}loadingStarted(){this.state=Re.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(Re.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(Re.CONNECTION_LOST)}decreaseLoadingCount(t){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=t))}get state(){return this.connectionState}set state(t){if(t!==this.connectionState){const n=this.connectionState;this.connectionState=t,this.loadingCount=0;for(const r of this.stateChangeListeners)r(n,this.connectionState)}}get online(){return this.connectionState===Re.CONNECTED||this.connectionState===Re.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(t){typeof t.data=="object"&&t.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(t.data.result===!0&&(this.state=Re.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const $0=e=>!!(e==="localhost"||e==="[::1]"||/^127\.\d+\.\d+\.\d+$/u.exec(e)),yi=window;if(!(!((ua=yi.Vaadin)===null||ua===void 0)&&ua.connectionState)){let e;$0(window.location.hostname)?e=!0:e=navigator.onLine,yi.Vaadin||(yi.Vaadin={}),yi.Vaadin.connectionState=new N0(e?Re.CONNECTED:Re.CONNECTION_LOST)}function ht(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(i=(o<3?l(i):o>3?l(t,n,i):l(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ni=globalThis,du=Ni.ShadowRoot&&(Ni.ShadyCSS===void 0||Ni.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fu=Symbol(),fd=new WeakMap;let pu=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==fu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(du&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=fd.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&fd.set(n,t))}return t}toString(){return this.cssText}};const om=e=>new pu(typeof e=="string"?e:e+"",void 0,fu),ke=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new pu(n,e,fu)},M0=(e,t)=>{if(du)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=Ni.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},pd=du?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return om(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:D0,defineProperty:O0,getOwnPropertyDescriptor:A0,getOwnPropertyNames:I0,getOwnPropertySymbols:F0,getPrototypeOf:U0}=Object,Pl=globalThis,md=Pl.trustedTypes,j0=md?md.emptyScript:"",V0=Pl.reactiveElementPolyfillSupport,po=(e,t)=>e,il={toAttribute(e,t){switch(t){case Boolean:e=e?j0:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},mu=(e,t)=>!D0(e,t),hd={attribute:!0,type:String,converter:il,reflect:!1,hasChanged:mu};Symbol.metadata??=Symbol("metadata"),Pl.litPropertyMetadata??=new WeakMap;class or extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=hd){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&O0(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=A0(this.prototype,t)??{get(){return this[n]},set(l){this[n]=l}};return{get(){return o?.call(this)},set(l){const s=o?.call(this);i.call(this,l),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??hd}static _$Ei(){if(this.hasOwnProperty(po("elementProperties")))return;const t=U0(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(po("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(po("properties"))){const n=this.properties,r=[...I0(n),...F0(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(pd(o))}else t!==void 0&&n.push(pd(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return M0(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:il).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,n){const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=r.getPropertyOptions(o),l=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:il;this._$Em=o,this[o]=l.fromAttribute(n,i.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??mu)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,i]of r)i.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],i)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(n=>this._$EC(n,this[n])),this._$EU()}updated(t){}firstUpdated(t){}}or.elementStyles=[],or.shadowRootOptions={mode:"open"},or[po("elementProperties")]=new Map,or[po("finalized")]=new Map,V0?.({ReactiveElement:or}),(Pl.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hu=globalThis,ll=hu.trustedTypes,vd=ll?ll.createPolicy("lit-html",{createHTML:e=>e}):void 0,im="$lit$",cn=`lit$${Math.random().toFixed(9).slice(2)}$`,lm="?"+cn,B0=`<${lm}>`,Gn=document,Do=()=>Gn.createComment(""),Oo=e=>e===null||typeof e!="object"&&typeof e!="function",vu=Array.isArray,H0=e=>vu(e)||typeof e?.[Symbol.iterator]=="function",ca=`[ 	
\f\r]`,Xr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gd=/-->/g,yd=/>/g,Nn=RegExp(`>|${ca}(?:([^\\s"'>=/]+)(${ca}*=${ca}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xd=/'/g,wd=/"/g,am=/^(?:script|style|textarea|title)$/i,sm=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),W0=sm(1),l1=sm(2),Yn=Symbol.for("lit-noChange"),De=Symbol.for("lit-nothing"),Sd=new WeakMap,Fn=Gn.createTreeWalker(Gn,129);function um(e,t){if(!vu(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return vd!==void 0?vd.createHTML(t):t}const Q0=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":t===3?"<math>":"",l=Xr;for(let s=0;s<n;s++){const a=e[s];let u,d,c=-1,p=0;for(;p<a.length&&(l.lastIndex=p,d=l.exec(a),d!==null);)p=l.lastIndex,l===Xr?d[1]==="!--"?l=gd:d[1]!==void 0?l=yd:d[2]!==void 0?(am.test(d[2])&&(o=RegExp("</"+d[2],"g")),l=Nn):d[3]!==void 0&&(l=Nn):l===Nn?d[0]===">"?(l=o??Xr,c=-1):d[1]===void 0?c=-2:(c=l.lastIndex-d[2].length,u=d[1],l=d[3]===void 0?Nn:d[3]==='"'?wd:xd):l===wd||l===xd?l=Nn:l===gd||l===yd?l=Xr:(l=Nn,o=void 0);const v=l===Nn&&e[s+1].startsWith("/>")?" ":"";i+=l===Xr?a+B0:c>=0?(r.push(u),a.slice(0,c)+im+a.slice(c)+cn+v):a+cn+(c===-2?s:v)}return[um(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Ao{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,l=0;const s=t.length-1,a=this.parts,[u,d]=Q0(t,n);if(this.el=Ao.createElement(u,r),Fn.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=Fn.nextNode())!==null&&a.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(im)){const p=d[l++],v=o.getAttribute(c).split(cn),w=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:w[2],strings:v,ctor:w[1]==="."?G0:w[1]==="?"?Y0:w[1]==="@"?X0:Tl}),o.removeAttribute(c)}else c.startsWith(cn)&&(a.push({type:6,index:i}),o.removeAttribute(c));if(am.test(o.tagName)){const c=o.textContent.split(cn),p=c.length-1;if(p>0){o.textContent=ll?ll.emptyScript:"";for(let v=0;v<p;v++)o.append(c[v],Do()),Fn.nextNode(),a.push({type:2,index:++i});o.append(c[p],Do())}}}else if(o.nodeType===8)if(o.data===lm)a.push({type:2,index:i});else{let c=-1;for(;(c=o.data.indexOf(cn,c+1))!==-1;)a.push({type:7,index:i}),c+=cn.length-1}i++}}static createElement(t,n){const r=Gn.createElement("template");return r.innerHTML=t,r}}function $r(e,t,n=e,r){if(t===Yn)return t;let o=r!==void 0?n.o?.[r]:n.l;const i=Oo(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n.o??=[])[r]=o:n.l=o),o!==void 0&&(t=$r(e,o._$AS(e,t.values),o,r)),t}class K0{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=(t?.creationScope??Gn).importNode(n,!0);Fn.currentNode=o;let i=Fn.nextNode(),l=0,s=0,a=r[0];for(;a!==void 0;){if(l===a.index){let u;a.type===2?u=new Ho(i,i.nextSibling,this,t):a.type===1?u=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(u=new J0(i,this,t)),this._$AV.push(u),a=r[++s]}l!==a?.index&&(i=Fn.nextNode(),l++)}return Fn.currentNode=Gn,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Ho{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,n,r,o){this.type=2,this._$AH=De,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this.v=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=$r(this,t,n),Oo(t)?t===De||t==null||t===""?(this._$AH!==De&&this._$AR(),this._$AH=De):t!==this._$AH&&t!==Yn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):H0(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==De&&Oo(this._$AH)?this._$AA.nextSibling.data=t:this.T(Gn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ao.createElement(um(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{const i=new K0(o,this),l=i.u(this.options);i.p(n),this.T(l),this._$AH=i}}_$AC(t){let n=Sd.get(t.strings);return n===void 0&&Sd.set(t.strings,n=new Ao(t)),n}k(t){vu(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new Ho(this.O(Do()),this.O(Do()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this.v=t,this._$AP?.(t))}}class Tl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=De,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=De}_$AI(t,n=this,r,o){const i=this.strings;let l=!1;if(i===void 0)t=$r(this,t,n,0),l=!Oo(t)||t!==this._$AH&&t!==Yn,l&&(this._$AH=t);else{const s=t;let a,u;for(t=i[0],a=0;a<i.length-1;a++)u=$r(this,s[r+a],n,a),u===Yn&&(u=this._$AH[a]),l||=!Oo(u)||u!==this._$AH[a],u===De?t=De:t!==De&&(t+=(u??"")+i[a+1]),this._$AH[a]=u}l&&!o&&this.j(t)}j(t){t===De?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class G0 extends Tl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===De?void 0:t}}class Y0 extends Tl{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==De)}}let X0=class extends Tl{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=$r(this,t,n,0)??De)===Yn)return;const r=this._$AH,o=t===De&&r!==De||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==De&&(r===De||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}};class J0{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){$r(this,t)}}const Z0=hu.litHtmlPolyfillSupport;Z0?.(Ao,Ho),(hu.litHtmlVersions??=[]).push("3.2.0");const q0=(e,t,n)=>{const r=n?.renderBefore??t;let o=r._$litPart$;if(o===void 0){const i=n?.renderBefore??null;r._$litPart$=o=new Ho(t.insertBefore(Do(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mo extends or{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=q0(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return Yn}}mo._$litElement$=!0,mo.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:mo});const ey=globalThis.litElementPolyfillSupport;ey?.({LitElement:mo});(globalThis.litElementVersions??=[]).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ty={attribute:!0,type:String,converter:il,reflect:!1,hasChanged:mu},ny=(e=ty,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,e),r==="accessor"){const{name:l}=n;return{set(s){const a=t.get.call(this);t.set.call(this,s),this.requestUpdate(l,a,e)},init(s){return s!==void 0&&this.P(l,void 0,e),s}}}if(r==="setter"){const{name:l}=n;return function(s){const a=this[l];t.call(this,s),this.requestUpdate(l,a,e)}}throw Error("Unsupported decorator location: "+r)};function vt(e){return(t,n)=>typeof n=="object"?ny(e,t,n):((r,o,i)=>{const l=o.hasOwnProperty(i);return o.constructor.createProperty(i,l?{...r,wrapped:!0}:r),l?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ry={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},oy=e=>(...t)=>({_$litDirective$:e,values:t});class iy{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this.t=t,this._$AM=n,this.i=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ly=oy(class extends iy{constructor(e){if(super(e),e.type!==ry.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const o=!!t[r];o===this.st.has(r)||this.nt?.has(r)||(o?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return Yn}}),da="css-loading-indicator";var bt;(function(e){e.IDLE="",e.FIRST="first",e.SECOND="second",e.THIRD="third"})(bt||(bt={}));class Ae extends mo{static create(){var t,n;const r=window;return!((t=r.Vaadin)===null||t===void 0)&&t.connectionIndicator||(r.Vaadin||(r.Vaadin={}),r.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(r.Vaadin.connectionIndicator)),(n=r.Vaadin)===null||n===void 0?void 0:n.connectionIndicator}constructor(){super(),this.firstDelay=450,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=bt.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=Re.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}render(){return W0`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${ly({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var t;super.connectedCallback();const n=window;!((t=n.Vaadin)===null||t===void 0)&&t.connectionState&&(this.connectionStateStore=n.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(t){t!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=t,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var t;const n=(t=this.connectionStateStore)===null||t===void 0?void 0:t.state;return this.offline=n===Re.CONNECTION_LOST,this.reconnecting=n===Re.RECONNECTING,this.updateLoading(n===Re.LOADING),this.loading?!1:n!==this.lastMessageState?(this.lastMessageState=n,!0):!1}updateLoading(t){this.loading=t,this.loadingBarState=bt.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,t,()=>{this.loadingBarState=bt.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,t,()=>{this.loadingBarState=bt.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,t,()=>{this.loadingBarState=bt.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(da)){const t=document.createElement("style");t.id=da,t.textContent=this.getDefaultStyle(),document.head.appendChild(t)}}else{const t=document.getElementById(da);t&&document.head.removeChild(t)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case bt.IDLE:return"display: none";case bt.FIRST:case bt.SECOND:case bt.THIRD:return"display: block";default:return""}}timeoutFor(t,n,r,o){return t!==0&&window.clearTimeout(t),n?window.setTimeout(r,o):0}static get instance(){return Ae.create()}}ht([vt({type:Number})],Ae.prototype,"firstDelay",void 0);ht([vt({type:Number})],Ae.prototype,"secondDelay",void 0);ht([vt({type:Number})],Ae.prototype,"thirdDelay",void 0);ht([vt({type:Number})],Ae.prototype,"expandedDuration",void 0);ht([vt({type:String})],Ae.prototype,"onlineText",void 0);ht([vt({type:String})],Ae.prototype,"offlineText",void 0);ht([vt({type:String})],Ae.prototype,"reconnectingText",void 0);ht([vt({type:Boolean,reflect:!0})],Ae.prototype,"offline",void 0);ht([vt({type:Boolean,reflect:!0})],Ae.prototype,"reconnecting",void 0);ht([vt({type:Boolean,reflect:!0})],Ae.prototype,"expanded",void 0);ht([vt({type:Boolean,reflect:!0})],Ae.prototype,"loading",void 0);ht([vt({type:String})],Ae.prototype,"loadingBarState",void 0);ht([vt({type:Boolean})],Ae.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",Ae);Ae.instance;var kd;const al=window;al.Vaadin||(al.Vaadin={});(kd=al.Vaadin).registrations||(kd.registrations=[]);al.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});class Ed extends Error{}const Jr=window.document.body,le=window;let ay=class{constructor(t){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,this.navigation="",Jr.$=Jr.$||[],this.config=t||{},le.Vaadin=le.Vaadin||{},le.Vaadin.Flow=le.Vaadin.Flow||{},le.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const n=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||n&&n.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,le.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,le.Vaadin.connectionState.loadingFinished(),!le.Vaadin.listener&&(le.Vaadin.listener={},document.addEventListener("click",t=>{t.target&&(t.target.hasAttribute("router-link")?this.navigation="link":t.composedPath().some(n=>n.nodeName==="A")&&(this.navigation="client"))},{capture:!0}))}get action(){return async t=>{if(this.pathname=t.pathname,le.Vaadin.connectionState.online)try{await this.flowInit()}catch(n){if(n instanceof Ed)return le.Vaadin.connectionState.state=Re.CONNECTION_LOST,this.offlineStubAction();throw n}else return this.offlineStubAction();return this.container.onBeforeEnter=(n,r)=>this.flowNavigate(n,r),this.container.onBeforeLeave=(n,r)=>this.flowLeave(n,r),this.container}}async flowLeave(t,n){const{connectionState:r}=le.Vaadin;return this.pathname===t.pathname||!this.isFlowClientLoaded()||r.offline?Promise.resolve({}):new Promise(o=>{this.loadingStarted(),this.container.serverConnected=i=>{o(n&&i?n.prevent():{}),this.loadingFinished()},Jr.$server.leaveNavigation(this.getFlowRoutePath(t),this.getFlowRouteQuery(t))})}async flowNavigate(t,n){return this.response?new Promise(r=>{this.loadingStarted(),this.container.serverConnected=(o,i)=>{n&&o?r(n.prevent()):n&&n.redirect&&i?r(n.redirect(i.pathname)):(this.container.style.display="",r(this.container)),this.loadingFinished()},this.container.serverPaused=()=>{this.loadingFinished()},Jr.$server.connectClient(this.getFlowRoutePath(t),this.getFlowRouteQuery(t),this.appShellTitle,history.state,this.navigation),this.navigation="history"}):Promise.resolve(this.container)}getFlowRoutePath(t){return decodeURIComponent(t.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(t){return t.search&&t.search.substring(1)||""}async flowInit(){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi();const{pushScript:t,appConfig:n}=this.response;typeof t=="string"&&await this.loadScript(t);const{appId:r}=n;await(await as(()=>import("./FlowBootstrap-CHUuW4WK.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(r),await this.config.imports());const i=`flow-container-${r.toLowerCase()}`,l=document.querySelector(i);l?this.container=l:(this.container=document.createElement(i),this.container.id=r),Jr.$[r]=this.container;const s=await as(()=>import("./FlowClient-BZ2ixoyw.js"),[],import.meta.url);await this.flowInitClient(s),this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(t){return new Promise((n,r)=>{const o=document.createElement("script");o.onload=()=>n(),o.onerror=r,o.src=t,document.body.appendChild(o)})}injectAppIdScript(t){const n=t.substring(0,t.lastIndexOf("-")),r=document.createElement("script");r.type="module",r.setAttribute("data-app-id",n),document.body.append(r)}async flowInitClient(t){return t.init(),new Promise(n=>{const r=setInterval(()=>{Object.keys(le.Vaadin.Flow.clients).filter(i=>i!=="TypeScript").reduce((i,l)=>i||le.Vaadin.Flow.clients[l].isActive(),!1)||(clearInterval(r),n())},5)})}async flowInitUi(){const t=le.Vaadin&&le.Vaadin.TypeScript&&le.Vaadin.TypeScript.initial;return t?(le.Vaadin.TypeScript.initial=void 0,Promise.resolve(t)):new Promise((n,r)=>{const i=new XMLHttpRequest,l=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}`;i.open("GET",l),i.onerror=()=>r(new Ed(`Invalid server response when initializing Flow UI.
        ${i.status}
        ${i.responseText}`)),i.onload=()=>{const s=i.getResponseHeader("content-type");s&&s.indexOf("application/json")!==-1?n(JSON.parse(i.responseText)):i.onerror()},i.send()})}addConnectionIndicator(){Ae.create(),le.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){le.Vaadin.connectionState.state=Re.RECONNECTING;const t=new XMLHttpRequest;t.open("HEAD","sw.js"),t.onload=()=>{le.Vaadin.connectionState.state=Re.CONNECTED},t.onerror=()=>{le.Vaadin.connectionState.state=Re.CONNECTION_LOST},setTimeout(()=>t.send(),50)}}),le.addEventListener("offline",()=>{this.isFlowClientLoaded()||(le.Vaadin.connectionState.state=Re.CONNECTION_LOST)})}async offlineStubAction(){const t=document.createElement("iframe");t.setAttribute("src","./offline-stub.html"),t.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let r;const o=()=>{r!==void 0&&(le.Vaadin.connectionState.removeStateChangeListener(r),r=void 0)};return t.onBeforeEnter=(i,l,s)=>{r=()=>{le.Vaadin.connectionState.online&&(o(),s.render(i,!1))},le.Vaadin.connectionState.addStateChangeListener(r)},t.onBeforeLeave=(i,l,s)=>{o()},t}isFlowClientLoaded(){return this.response!==void 0}};var cm={exports:{}},zl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy=b,uy=Symbol.for("react.element"),cy=Symbol.for("react.fragment"),dy=Object.prototype.hasOwnProperty,fy=sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,py={key:!0,ref:!0,__self:!0,__source:!0};function dm(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)dy.call(t,r)&&!py.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:uy,type:e,key:i,ref:l,props:o,_owner:fy.current}}zl.Fragment=cy;zl.jsx=dm;zl.jsxs=dm;cm.exports=zl;var gu=cm.exports;const my=new ay({imports:()=>as(()=>import("./generated-flow-imports-BTegz7Qs.js").then(e=>e.v),[],import.meta.url)}),fa={render(){return Promise.resolve()}};function hy(e){const t=e.port,n=e.protocol,i=n==="http:"&&t==="80"||n==="https:"&&t==="443"?e.hostname:e.host;return`${n}//${i}`}function fm(e){if(e.href.startsWith(document.baseURI))return"/"+e.href.slice(document.baseURI.length)}function vy(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let i=0;i<n.length;i++){const l=n[i];if(l.nodeName&&l.nodeName.toLowerCase()==="a"){t=l;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a")return;const r=t;if(r.target&&r.target.toLowerCase()!=="_self"||r.hasAttribute("download")||r.hasAttribute("router-ignore"))return;if(r.pathname===window.location.pathname&&r.hash!==""){window.location.hash=r.hash;return}if((r.origin||hy(r))===window.location.origin)return fm(new URL(r.href,r.baseURI))}function Cd(e,t){setTimeout(()=>window.dispatchEvent(new CustomEvent("vaadin-navigated",{detail:{pathname:e,search:t}})))}function pm(){}const _d=()=>pm;function yu(){const e=b.useRef(null),t=t0(),n=f0(({currentLocation:v,nextLocation:w})=>(l.current=l.current||w.pathname===v.pathname&&w.search===v.search&&w.hash===v.hash,!0)),{pathname:r,search:o,hash:i}=uu(),l=b.useRef(!1),s=b.useRef(!1),a=b.useRef(void 0),u=b.useCallback(v=>{const w=vy(v);w&&(v&&v.preventDefault&&v.preventDefault(),l.current=!1,s.current=!0,t(w))},[t]),d=b.useCallback(v=>{const w=v.detail,k=fm(w);k&&(v.preventDefault(),t(k))},[t]),c=b.useCallback(v=>{const w="/"+v.detail.url;l.current=!v.detail.callback,t(w,{state:v.detail.state,replace:v.detail.replace})},[t]),p=b.useCallback(v=>()=>{t(v,{replace:!0})},[t]);return b.useEffect(()=>(window.addEventListener("vaadin-router-go",d),window.addEventListener("vaadin-navigate",c),()=>{window.removeEventListener("vaadin-router-go",d),window.removeEventListener("vaadin-navigate",c)}),[d,c]),b.useEffect(()=>()=>{a.current?.parentNode?.removeChild(a.current),a.current=void 0},[]),b.useEffect(()=>{if(n.state==="blocked"){if(l.current&&!s.current){n.proceed();return}s.current=!1;const{pathname:v,search:w}=n.location,k=window?.Vaadin?.routesConfig||[];let z=un(Array.from(k),window.location.pathname);z&&z.filter(h=>h.route?.element?.type?.name===yu.name).length!=0?(a.current?.onBeforeEnter?.call(a?.current,{pathname:v,search:w},{prevent(){n.reset(),l.current=!1},redirect:p,continue(){n.proceed()}},fa),l.current=!0):Promise.resolve(a.current?.onBeforeLeave?.call(a?.current,{pathname:v,search:w},{prevent:_d},fa)).then(h=>{h===pm&&a.current?a.current.serverConnected=f=>{f?n.reset():(n.proceed(),window.removeEventListener("click",u))}:(n.proceed(),window.removeEventListener("click",u))})}},[n.state,n.location]),b.useEffect(()=>{if(l.current){l.current=!1,Cd(r,o);return}my.serverSideRoutes[0].action({pathname:r,search:o}).then(v=>{const w=e.current?.parentNode;return w&&w!==v.parentNode&&(w.append(v),window.addEventListener("click",u),a.current=v),v.onBeforeEnter?.call(v,{pathname:r,search:o},{prevent:_d,redirect:p,continue(){Cd(r,o)}},fa)}).then(v=>{typeof v=="function"&&v()})},[r,o,i]),gu.jsx("output",{ref:e})}yu.type="FlowContainer";const gy=[{path:"/*",element:gu.jsx(yu,{})}];function yy(){const e=[...gy];return{router:y0([...e],{basename:new URL(document.baseURI).pathname}),routes:e}}const{router:xy,routes:wy}=yy();function Sy(){return gu.jsx(P0,{router:xy})}const ss=document.getElementById("outlet");let mm=ss._root??Up(ss);ss._root=mm;mm.render(b.createElement(Sy));window.Vaadin??={};window.Vaadin.routesConfig=wy;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ky=e=>class extends e{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(n,r,o){super.attributeChangedCallback(n,r,o),n==="theme"&&this._set_theme(o)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hm=[];function vm(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}function Ey(e){return vm(customElements.get(e))}function Cy(e=[]){return[e].flat(1/0).filter(t=>t instanceof pu?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Rl(e,t,n={}){e&&Ey(e)&&console.warn(`The custom element definition for "${e}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),t=Cy(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,n):hm.push({themeFor:e,styles:t,include:n.include,moduleId:n.moduleId})}function us(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():hm}function _y(e,t){return(e||"").split(" ").some(n=>new RegExp(`^${n.split("*").join(".*")}$`,"u").test(t))}function by(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function gm(e){const t=[];return e.include&&[].concat(e.include).forEach(n=>{const r=us().find(o=>o.moduleId===n);r?t.push(...gm(r),...r.styles):console.warn(`Included moduleId ${n} not found in style registry`)},e.styles),t}function Py(e,t){const n=document.createElement("style");n.innerHTML=e.map(r=>r.cssText).join(`
`),t.content.appendChild(n)}function Ty(e){const t=`${e}-default-theme`,n=us().filter(r=>r.moduleId!==t&&_y(r.themeFor,e)).map(r=>({...r,styles:[...gm(r),...r.styles],includePriority:by(r.moduleId)})).sort((r,o)=>o.includePriority-r.includePriority);return n.length>0?n:us().filter(r=>r.moduleId===t)}const c1=e=>class extends ky(e){static finalize(){if(super.finalize(),this.elementStyles)return;const n=this.prototype._template;!n||vm(this)||Py(this.getStylesForThis(),n)}static finalizeStyles(n){const r=this.getStylesForThis();return n?[...super.finalizeStyles(n),...r]:r}static getStylesForThis(){const n=Object.getPrototypeOf(this.prototype),r=(n?n.constructor.__themes:[])||[];this.__themes=[...r,...Ty(this.is)];const o=this.__themes.flatMap(i=>i.styles);return o.filter((i,l)=>l===o.lastIndexOf(i))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zy=(e,...t)=>{const n=document.createElement("style");n.id=e,n.textContent=t.map(r=>r.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",n)},zn=(e,...t)=>{zy(`lumo-${e}`,t)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ry(e){const t=customElements.get(e.is);if(!t)Object.defineProperty(e,"version",{get(){return"24.3.13"}}),customElements.define(e.is,e);else{const n=t.version;n&&e.version&&n===e.version?console.warn(`The component ${e.is} has been loaded twice`):console.error(`Tried to define ${e.is} version ${e.version} when version ${t.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ly extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}Ry(Ly);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ny=ke`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,xu=ke`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Rl("",xu,{moduleId:"lumo-typography"});zn("typography-props",Ny);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $y=ke`
  ${om(xu.cssText.replace(/,\s*:host/su,""))}
`;zn("typography",$y);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const My=ke`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;zn("color-props",My);const wu=ke`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;Rl("",wu,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */zn("color",wu);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dy=ke`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;ke`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`;zn("style-props",Dy);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Su=ke`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='warning'] {
    color: var(--lumo-warning-text-color);
    background-color: var(--lumo-warning-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning'][theme~='primary'] {
    color: var(--lumo-warning-contrast-color);
    background-color: var(--lumo-warning-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning']:not([icon]):empty {
    background-color: var(--lumo-warning-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;Rl("",Su,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */zn("badge",Su);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oy=ke`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ay=ke`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-tint-5 {
    background-color: var(--lumo-tint-5pct);
  }
  .bg-tint-10 {
    background-color: var(--lumo-tint-10pct);
  }
  .bg-tint-20 {
    background-color: var(--lumo-tint-20pct);
  }
  .bg-tint-30 {
    background-color: var(--lumo-tint-30pct);
  }
  .bg-tint-40 {
    background-color: var(--lumo-tint-40pct);
  }
  .bg-tint-50 {
    background-color: var(--lumo-tint-50pct);
  }
  .bg-tint-60 {
    background-color: var(--lumo-tint-60pct);
  }
  .bg-tint-70 {
    background-color: var(--lumo-tint-70pct);
  }
  .bg-tint-80 {
    background-color: var(--lumo-tint-80pct);
  }
  .bg-tint-90 {
    background-color: var(--lumo-tint-90pct);
  }
  .bg-tint {
    background-color: var(--lumo-tint);
  }

  .bg-shade-5 {
    background-color: var(--lumo-shade-5pct);
  }
  .bg-shade-10 {
    background-color: var(--lumo-shade-10pct);
  }
  .bg-shade-20 {
    background-color: var(--lumo-shade-20pct);
  }
  .bg-shade-30 {
    background-color: var(--lumo-shade-30pct);
  }
  .bg-shade-40 {
    background-color: var(--lumo-shade-40pct);
  }
  .bg-shade-50 {
    background-color: var(--lumo-shade-50pct);
  }
  .bg-shade-60 {
    background-color: var(--lumo-shade-60pct);
  }
  .bg-shade-70 {
    background-color: var(--lumo-shade-70pct);
  }
  .bg-shade-80 {
    background-color: var(--lumo-shade-80pct);
  }
  .bg-shade-90 {
    background-color: var(--lumo-shade-90pct);
  }
  .bg-shade {
    background-color: var(--lumo-shade);
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }

  .bg-warning {
    background-color: var(--lumo-warning-color);
  }
  .bg-warning-10 {
    background-color: var(--lumo-warning-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Iy=ke`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-b {
    border-bottom: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-e {
    border-inline-end: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-l {
    border-left: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-r {
    border-right: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-s {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-t {
    border-top: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-dashed {
    --lumo-utility-border-style: dashed;
  }
  .border-dotted {
    --lumo-utility-border-style: dotted;
  }

  /* === Border color === */
  .border-contrast-5 {
    --lumo-utility-border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    --lumo-utility-border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    --lumo-utility-border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    --lumo-utility-border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    --lumo-utility-border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    --lumo-utility-border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    --lumo-utility-border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    --lumo-utility-border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    --lumo-utility-border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    --lumo-utility-border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    --lumo-utility-border-color: var(--lumo-contrast);
  }

  .border-primary {
    --lumo-utility-border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    --lumo-utility-border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    --lumo-utility-border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    --lumo-utility-border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    --lumo-utility-border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    --lumo-utility-border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    --lumo-utility-border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    --lumo-utility-border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    --lumo-utility-border-color: var(--lumo-success-color-10pct);
  }

  .border-warning {
    --lumo-utility-border-color: var(--lumo-warning-color);
  }
  .border-warning-10 {
    --lumo-utility-border-color: var(--lumo-warning-color-10pct);
  }
  .border-warning-strong {
    --lumo-utility-border-color: var(--lumo-warning-text-color);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
  .rounded-full {
    border-radius: 9999px;
  }

  /* === Divide === */
  .divide-x > * + * {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .divide-y > * + * {
    border-block-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fy=ke`
  /* === Backdrop filter === */
  .backdrop-blur-none {
    backdrop-filter: blur(0);
  }
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
  .backdrop-blur {
    backdrop-filter: blur(8px);
  }
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
  .backdrop-blur-lg {
    backdrop-filter: blur(16px);
  }
  .backdrop-blur-xl {
    backdrop-filter: blur(24px);
  }
  .backdrop-blur-2xl {
    backdrop-filter: blur(40px);
  }
  .backdrop-blur-3xl {
    backdrop-filter: blur(64px);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Uy=ke`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }
  .col-span-full {
    grid-column: 1 / -1;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }
  .row-span-full {
    grid-row: 1 / -1;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jy=ke`
  /* === Aspect ratio === */
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .aspect-video {
    aspect-ratio: 16 / 9;
  }

  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Top, end, bottom, start === */
  .-bottom-xs {
    bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-bottom-s {
    bottom: calc(var(--lumo-space-s) / -1);
  }
  .-bottom-m {
    bottom: calc(var(--lumo-space-m) / -1);
  }
  .-bottom-l {
    bottom: calc(var(--lumo-space-l) / -1);
  }
  .-bottom-xl {
    bottom: calc(var(--lumo-space-xl) / -1);
  }
  .-bottom-full {
    bottom: -100%;
  }
  .bottom-0 {
    bottom: 0;
  }
  .bottom-xs {
    bottom: var(--lumo-space-xs);
  }
  .bottom-s {
    bottom: var(--lumo-space-s);
  }
  .bottom-m {
    bottom: var(--lumo-space-m);
  }
  .bottom-l {
    bottom: var(--lumo-space-l);
  }
  .bottom-xl {
    bottom: var(--lumo-space-xl);
  }
  .bottom-auto {
    bottom: auto;
  }
  .bottom-full {
    bottom: 100%;
  }

  .-end-xs {
    inset-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-end-s {
    inset-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-end-m {
    inset-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-end-l {
    inset-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-end-xl {
    inset-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .-end-full {
    inset-inline-end: -100%;
  }
  .end-0 {
    inset-inline-end: 0;
  }
  .end-xs {
    inset-inline-end: var(--lumo-space-xs);
  }
  .end-s {
    inset-inline-end: var(--lumo-space-s);
  }
  .end-m {
    inset-inline-end: var(--lumo-space-m);
  }
  .end-l {
    inset-inline-end: var(--lumo-space-l);
  }
  .end-xl {
    inset-inline-end: var(--lumo-space-xl);
  }
  .end-auto {
    inset-inline-end: auto;
  }
  .end-full {
    inset-inline-end: 100%;
  }

  .-start-xs {
    inset-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-start-s {
    inset-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-start-m {
    inset-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-start-l {
    inset-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-start-xl {
    inset-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .-start-full {
    inset-inline-start: -100%;
  }
  .start-0 {
    inset-inline-start: 0;
  }
  .start-xs {
    inset-inline-start: var(--lumo-space-xs);
  }
  .start-s {
    inset-inline-start: var(--lumo-space-s);
  }
  .start-m {
    inset-inline-start: var(--lumo-space-m);
  }
  .start-l {
    inset-inline-start: var(--lumo-space-l);
  }
  .start-xl {
    inset-inline-start: var(--lumo-space-xl);
  }
  .start-auto {
    inset-inline-start: auto;
  }
  .start-full {
    inset-inline-start: 100%;
  }

  .-top-xs {
    top: calc(var(--lumo-space-xs) / -1);
  }
  .-top-s {
    top: calc(var(--lumo-space-s) / -1);
  }
  .-top-m {
    top: calc(var(--lumo-space-m) / -1);
  }
  .-top-l {
    top: calc(var(--lumo-space-l) / -1);
  }
  .-top-xl {
    top: calc(var(--lumo-space-xl) / -1);
  }
  .-top-full {
    top: -100%;
  }
  .top-0 {
    top: 0;
  }
  .top-xs {
    top: var(--lumo-space-xs);
  }
  .top-s {
    top: var(--lumo-space-s);
  }
  .top-m {
    top: var(--lumo-space-m);
  }
  .top-l {
    top: var(--lumo-space-l);
  }
  .top-xl {
    top: var(--lumo-space-xl);
  }
  .top-auto {
    top: auto;
  }
  .top-full {
    top: 100%;
  }

  /* === Visibility === */
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }

  /* === Z-index === */
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    /* Display */
    .sm\\:block {
      display: block;
    }
    .sm\\:flex {
      display: flex;
    }
    .sm\\grid {
      display: grid;
    }
    .sm\\:hidden {
      display: none;
    }
    .sm\\:inline {
      display: inline;
    }
    .sm\\:inline-block {
      display: inline-block;
    }
    .sm\\:inline-flex {
      display: inline-flex;
    }
    .sm\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .sm\\:absolute {
      position: absolute;
    }
    .sm\\:fixed {
      position: fixed;
    }
    .sm\\:relative {
      position: relative;
    }
    .sm\\:static {
      position: static;
    }
    .sm\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 768px) {
    /* Display */
    .md\\:block {
      display: block;
    }
    .md\\:flex {
      display: flex;
    }
    .md\\grid {
      display: grid;
    }
    .md\\:hidden {
      display: none;
    }
    .md\\:inline {
      display: inline;
    }
    .md\\:inline-block {
      display: inline-block;
    }
    .md\\:inline-flex {
      display: inline-flex;
    }
    .md\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .md\\:absolute {
      position: absolute;
    }
    .md\\:fixed {
      position: fixed;
    }
    .md\\:relative {
      position: relative;
    }
    .md\\:static {
      position: static;
    }
    .md\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1024px) {
    /* Display */
    .lg\\:block {
      display: block;
    }
    .lg\\:flex {
      display: flex;
    }
    .lg\\grid {
      display: grid;
    }
    .lg\\:hidden {
      display: none;
    }
    .lg\\:inline {
      display: inline;
    }
    .lg\\:inline-block {
      display: inline-block;
    }
    .lg\\:inline-flex {
      display: inline-flex;
    }
    .lg\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .lg\\:absolute {
      position: absolute;
    }
    .lg\\:fixed {
      position: fixed;
    }
    .lg\\:relative {
      position: relative;
    }
    .lg\\:static {
      position: static;
    }
    .lg\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1280px) {
    /* Display */
    .xl\\:block {
      display: block;
    }
    .xl\\:flex {
      display: flex;
    }
    .xl\\grid {
      display: grid;
    }
    .xl\\:hidden {
      display: none;
    }
    .xl\\:inline {
      display: inline;
    }
    .xl\\:inline-block {
      display: inline-block;
    }
    .xl\\:inline-flex {
      display: inline-flex;
    }
    .xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .xl\\:absolute {
      position: absolute;
    }
    .xl\\:fixed {
      position: fixed;
    }
    .xl\\:relative {
      position: relative;
    }
    .xl\\:static {
      position: static;
    }
    .xl\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1536px) {
    /* Display */
    .\\32xl\\:block {
      display: block;
    }
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\grid {
      display: grid;
    }
    .\\32xl\\:hidden {
      display: none;
    }
    .\\32xl\\:inline {
      display: inline;
    }
    .\\32xl\\:inline-block {
      display: inline-block;
    }
    .\\32xl\\:inline-flex {
      display: inline-flex;
    }
    .\\32xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .\\32xl\\:absolute {
      position: absolute;
    }
    .\\32xl\\:fixed {
      position: fixed;
    }
    .\\32xl\\:relative {
      position: relative;
    }
    .\\32xl\\:static {
      position: static;
    }
    .\\32xl\\:sticky {
      position: sticky;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vy=ke`
  /* === Box shadow === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const By=ke`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hy=ke`
  /* === Margin === */
  .-m-xs {
    margin: calc(var(--lumo-space-xs) / -1);
  }
  .-m-s {
    margin: calc(var(--lumo-space-s) / -1);
  }
  .-m-m {
    margin: calc(var(--lumo-space-m) / -1);
  }
  .-m-l {
    margin: calc(var(--lumo-space-l) / -1);
  }
  .-m-xl {
    margin: calc(var(--lumo-space-xl) / -1);
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }
  .m-auto {
    margin: auto;
  }

  /* === Margin (bottom) === */
  .-mb-xs {
    margin-bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-mb-s {
    margin-bottom: calc(var(--lumo-space-s) / -1);
  }
  .-mb-m {
    margin-bottom: calc(var(--lumo-space-m) / -1);
  }
  .-mb-l {
    margin-bottom: calc(var(--lumo-space-l) / -1);
  }
  .-mb-xl {
    margin-bottom: calc(var(--lumo-space-xl) / -1);
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }
  .mb-auto {
    margin-bottom: auto;
  }

  /* === Margin (end) === */
  .-me-xs {
    margin-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-me-s {
    margin-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-me-m {
    margin-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-me-l {
    margin-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-me-xl {
    margin-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }
  .me-auto {
    margin-inline-end: auto;
  }

  /* === Margin (horizontal) === */
  .-mx-xs {
    margin-inline: calc(var(--lumo-space-xs) / -1);
  }
  .-mx-s {
    margin-inline: calc(var(--lumo-space-s) / -1);
  }
  .-mx-m {
    margin-inline: calc(var(--lumo-space-m) / -1);
  }
  .-mx-l {
    margin-inline: calc(var(--lumo-space-l) / -1);
  }
  .-mx-xl {
    margin-inline: calc(var(--lumo-space-xl) / -1);
  }
  .mx-0 {
    margin-inline: 0;
  }
  .mx-xs {
    margin-inline: var(--lumo-space-xs);
  }
  .mx-s {
    margin-inline: var(--lumo-space-s);
  }
  .mx-m {
    margin-inline: var(--lumo-space-m);
  }
  .mx-l {
    margin-inline: var(--lumo-space-l);
  }
  .mx-xl {
    margin-inline: var(--lumo-space-xl);
  }
  .mx-auto {
    margin-inline: auto;
  }

  /* === Margin (left) === */
  .-ml-xs {
    margin-left: calc(var(--lumo-space-xs) / -1);
  }
  .-ml-s {
    margin-left: calc(var(--lumo-space-s) / -1);
  }
  .-ml-m {
    margin-left: calc(var(--lumo-space-m) / -1);
  }
  .-ml-l {
    margin-left: calc(var(--lumo-space-l) / -1);
  }
  .-ml-xl {
    margin-left: calc(var(--lumo-space-xl) / -1);
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }
  .ml-auto {
    margin-left: auto;
  }

  /* === Margin (right) === */
  .-mr-xs {
    margin-right: calc(var(--lumo-space-xs) / -1);
  }
  .-mr-s {
    margin-right: calc(var(--lumo-space-s) / -1);
  }
  .-mr-m {
    margin-right: calc(var(--lumo-space-m) / -1);
  }
  .-mr-l {
    margin-right: calc(var(--lumo-space-l) / -1);
  }
  .-mr-xl {
    margin-right: calc(var(--lumo-space-xl) / -1);
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }
  .mr-auto {
    margin-right: auto;
  }

  /* === Margin (start) === */
  .-ms-xs {
    margin-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-ms-s {
    margin-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-ms-m {
    margin-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-ms-l {
    margin-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-ms-xl {
    margin-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }
  .ms-auto {
    margin-inline-start: auto;
  }

  /* === Margin (top) === */
  .-mt-xs {
    margin-top: calc(var(--lumo-space-xs) / -1);
  }
  .-mt-s {
    margin-top: calc(var(--lumo-space-s) / -1);
  }
  .-mt-m {
    margin-top: calc(var(--lumo-space-m) / -1);
  }
  .-mt-l {
    margin-top: calc(var(--lumo-space-l) / -1);
  }
  .-mt-xl {
    margin-top: calc(var(--lumo-space-xl) / -1);
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }
  .mt-auto {
    margin-top: auto;
  }

  /* === Margin (vertical) === */
  .-my-xs {
    margin-block: calc(var(--lumo-space-xs) / -1);
  }
  .-my-s {
    margin-block: calc(var(--lumo-space-s) / -1);
  }
  .-my-m {
    margin-block: calc(var(--lumo-space-m) / -1);
  }
  .-my-l {
    margin-block: calc(var(--lumo-space-l) / -1);
  }
  .-my-xl {
    margin-block: calc(var(--lumo-space-xl) / -1);
  }
  .my-0 {
    margin-block: 0;
  }
  .my-xs {
    margin-block: var(--lumo-space-xs);
  }
  .my-s {
    margin-block: var(--lumo-space-s);
  }
  .my-m {
    margin-block: var(--lumo-space-m);
  }
  .my-l {
    margin-block: var(--lumo-space-l);
  }
  .my-xl {
    margin-block: var(--lumo-space-xl);
  }
  .my-auto {
    margin-block: auto;
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wy=ke`
  .transition {
    transition: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow,
      transform, filter, backdrop-filter 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-all {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-colors {
    transition: color, background-color, border-color, text-decoration-color, fill,
      stroke 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-none {
    transition: none;
  }
  .transition-opacity {
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-shadow {
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-transform {
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qy=ke`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line clamp === */
  [class*='line-clamp-'] {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  .line-clamp-1 {
    -webkit-line-clamp: 1;
  }
  .line-clamp-2 {
    -webkit-line-clamp: 2;
  }
  .line-clamp-3 {
    -webkit-line-clamp: 3;
  }
  .line-clamp-4 {
    -webkit-line-clamp: 4;
  }
  .line-clamp-5 {
    -webkit-line-clamp: 5;
  }
  .line-clamp-6 {
    -webkit-line-clamp: 6;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }
  .text-warning {
    color: var(--lumo-warning-text-color);
  }
  .text-warning-contrast {
    color: var(--lumo-warning-contrast-color);
  }

  /* == Text decoration === */
  .line-through {
    text-decoration-line: line-through;
  }
  .no-underline {
    text-decoration-line: none;
  }
  .underline {
    text-decoration-line: underline;
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-break-spaces {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ku=ke`
${Oy}
${Ay}
${Iy}
${Fy}
${Uy}
${jy}
${Vy}
${By}
${Hy}
${Wy}
${Qy}
`;Rl("",ku,{moduleId:"lumo-utility"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */zn("utility",ku);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),n=new WeakMap,r=typeof DOMException=="object"?Error:DOMException,o=Object.defineProperty,i=Array.prototype.forEach,l=/@import.+?;?$/gm;function s(_){var N=_.replace(l,"");return N!==_&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),N.trim()}function a(_){return"isConnected"in _?_.isConnected:document.contains(_)}function u(_){return _.filter(function(N,K){return _.indexOf(N)===K})}function d(_,N){return _.filter(function(K){return N.indexOf(K)===-1})}function c(_){_.parentNode.removeChild(_)}function p(_){return _.shadowRoot||n.get(_)}var v=["addRule","deleteRule","insertRule","removeRule"],w=CSSStyleSheet,k=w.prototype;k.replace=function(){return Promise.reject(new r("Can't call replace on non-constructed CSSStyleSheets."))},k.replaceSync=function(){throw new r("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function z(_){return typeof _=="object"?J.isPrototypeOf(_)||k.isPrototypeOf(_):!1}function h(_){return typeof _=="object"?k.isPrototypeOf(_):!1}var f=new WeakMap,y=new WeakMap,E=new WeakMap,T=new WeakMap;function $(_,N){var K=document.createElement("style");return E.get(_).set(N,K),y.get(_).push(N),K}function M(_,N){return E.get(_).get(N)}function g(_,N){E.get(_).delete(N),y.set(_,y.get(_).filter(function(K){return K!==N}))}function j(_,N){requestAnimationFrame(function(){N.textContent=f.get(_).textContent,T.get(_).forEach(function(K){return N.sheet[K.method].apply(N.sheet,K.args)})})}function D(_){if(!f.has(_))throw new TypeError("Illegal invocation")}function W(){var _=this,N=document.createElement("style");t.body.appendChild(N),f.set(_,N),y.set(_,[]),E.set(_,new WeakMap),T.set(_,[])}var J=W.prototype;J.replace=function(N){try{return this.replaceSync(N),Promise.resolve(this)}catch(K){return Promise.reject(K)}},J.replaceSync=function(N){if(D(this),typeof N=="string"){var K=this;f.get(K).textContent=s(N),T.set(K,[]),y.get(K).forEach(function(je){je.isConnected()&&j(K,M(K,je))})}},o(J,"cssRules",{configurable:!0,enumerable:!0,get:function(){return D(this),f.get(this).sheet.cssRules}}),o(J,"media",{configurable:!0,enumerable:!0,get:function(){return D(this),f.get(this).sheet.media}}),v.forEach(function(_){J[_]=function(){var N=this;D(N);var K=arguments;T.get(N).push({method:_,args:K}),y.get(N).forEach(function(We){if(We.isConnected()){var Te=M(N,We).sheet;Te[_].apply(Te,K)}});var je=f.get(N).sheet;return je[_].apply(je,K)}}),o(W,Symbol.hasInstance,{configurable:!0,value:z});var pe={childList:!0,subtree:!0},se=new WeakMap;function Ie(_){var N=se.get(_);return N||(N=new Fe(_),se.set(_,N)),N}function tt(_){o(_.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return Ie(this).sheets},set:function(N){Ie(this).update(N)}})}function gt(_,N){for(var K=document.createNodeIterator(_,NodeFilter.SHOW_ELEMENT,function(We){return p(We)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),je=void 0;je=K.nextNode();)N(p(je))}var L=new WeakMap,O=new WeakMap,H=new WeakMap;function te(_,N){return N instanceof HTMLStyleElement&&O.get(_).some(function(K){return M(K,_)})}function oe(_){var N=L.get(_);return N instanceof Document?N.body:N}function Ne(_){var N=document.createDocumentFragment(),K=O.get(_),je=H.get(_),We=oe(_);je.disconnect(),K.forEach(function(Te){N.appendChild(M(Te,_)||$(Te,_))}),We.insertBefore(N,null),je.observe(We,pe),K.forEach(function(Te){j(Te,M(Te,_))})}function Fe(_){var N=this;N.sheets=[],L.set(N,_),O.set(N,[]),H.set(N,new MutationObserver(function(K,je){if(!document){je.disconnect();return}K.forEach(function(We){e||i.call(We.addedNodes,function(Te){Te instanceof Element&&gt(Te,function(ye){Ie(ye).connect()})}),i.call(We.removedNodes,function(Te){Te instanceof Element&&(te(N,Te)&&Ne(N),e||gt(Te,function(ye){Ie(ye).disconnect()}))})})}))}if(Fe.prototype={isConnected:function(){var _=L.get(this);return _ instanceof Document?_.readyState!=="loading":a(_.host)},connect:function(){var _=oe(this);H.get(this).observe(_,pe),O.get(this).length>0&&Ne(this),gt(_,function(N){Ie(N).connect()})},disconnect:function(){H.get(this).disconnect()},update:function(_){var N=this,K=L.get(N)===document?"Document":"ShadowRoot";if(!Array.isArray(_))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+K+": Iterator getter is not callable.");if(!_.every(z))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+K+": Failed to convert value to 'CSSStyleSheet'");if(_.some(h))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+K+": Can't adopt non-constructed stylesheets");N.sheets=_;var je=O.get(N),We=u(_),Te=d(je,We);Te.forEach(function(ye){c(M(ye,N)),g(ye,N)}),O.set(N,We),N.isConnected()&&We.length>0&&Ne(N)}},window.CSSStyleSheet=W,tt(Document),"ShadowRoot"in window){tt(ShadowRoot);var yt=Element.prototype,Pe=yt.attachShadow;yt.attachShadow=function(N){var K=Pe.call(this,N);return N.mode==="closed"&&n.set(this,K),K}}var Ue=Ie(document);Ue.isConnected()?Ue.connect():document.addEventListener("DOMContentLoaded",Ue.connect.bind(Ue))})();const{toString:Ky}=Object.prototype;function Gy(e){return Ky.call(e)==="[object RegExp]"}function Yy(e,{preserve:t=!0,whitespace:n=!0,all:r}={}){if(r)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let o=t,i;typeof t=="function"?(o=!1,i=t):Gy(t)&&(o=!1,i=d=>t.test(d));let l=!1,s="",a="",u="";for(let d=0;d<e.length;d++){if(s=e[d],e[d-1]!=="\\"&&(s==='"'||s==="'")&&(l===s?l=!1:l||(l=s)),!l&&s==="/"&&e[d+1]==="*"){const c=e[d+2]==="!";let p=d+2;for(;p<e.length;p++){if(e[p]==="*"&&e[p+1]==="/"){o&&c||i&&i(a)?u+=`/*${a}*/`:n||(e[p+2]===`
`?p++:e[p+2]+e[p+3]===`\r
`&&(p+=2)),a="";break}a+=e[p]}d=p+1;continue}u+=s}return u}const Xy=CSSStyleSheet.toString().includes("document.createElement"),Jy=(e,t)=>{const n=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(e)!=null&&(e=Yy(e));for(var r,o=e;(r=n.exec(e))!==null;){o=o.replace(r[0],"");const i=document.createElement("link");i.rel="stylesheet",i.href=r[2]||r[4];const l=r[1]||r[5];l&&(i.media=l),t===document?document.head.appendChild(i):t.appendChild(i)}return o},Zy=(e,t,n)=>(n?t.adoptedStyleSheets=[e,...t.adoptedStyleSheets]:t.adoptedStyleSheets=[...t.adoptedStyleSheets,e],()=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter(r=>r!==e)}),qy=(e,t,n)=>{const r=new CSSStyleSheet;return r.replaceSync(e),Xy?Zy(r,t,n):(n?t.adoptedStyleSheets.splice(0,0,r):t.adoptedStyleSheets.push(r),()=>{t.adoptedStyleSheets.splice(t.adoptedStyleSheets.indexOf(r),1)})},e1=(e,t)=>{const n=document.createElement("style");return n.type="text/css",n.textContent=e,document.head.insertBefore(n,void 0),()=>{n.remove()}},nr=(e,t,n,r)=>{if(n===document){const i=t1(e);if(window.Vaadin.theme.injectedGlobalCss.indexOf(i)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(i)}const o=Jy(e,n);return n===document?e1(o):qy(o,n,r)};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function bd(e){let t,n,r=2166136261;for(t=0,n=e.length;t<n;t++)r^=e.charCodeAt(t),r+=(r<<1)+(r<<4)+(r<<7)+(r<<8)+(r<<24);return("0000000"+(r>>>0).toString(16)).substr(-8)}function t1(e){let t=bd(e);return t+bd(t+e)}document["_vaadintheme_my-app_componentCss"]||(document["_vaadintheme_my-app_componentCss"]=!0);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ym=ke`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;zn("spacing-props",ym);const n1=ke`vaadin-button::part(label){font-size:16px}vaadin-multi-select-combo-box>label{display:inline-block;overflow:visible;text-overflow:clip;font-size:16px}vaadin-text-area>label{display:inline-block;overflow:visible;text-overflow:clip;font-size:16px}vaadin-grid::part(cell){font-size:16px}vaadin-radio-button>label{font-size:16px}vaadin-radio-group>label{font-size:16px}vaadin-checkbox>label{font-size:16px}vaadin-text-field::part(label){font-size:16px}[slot=drawer]:is(header,footer):is(:empty){display:none}html{--lumo-primary-color: plum;--lumo-primary-text-color: black;--lumo-secondary-text-color: purple}`,r1=e=>{const t=[];e!==document&&(t.push(nr(xu.cssText,"",e,!0)),t.push(nr(wu.cssText,"",e,!0)),t.push(nr(ym.cssText,"",e,!0)),t.push(nr(Su.cssText,"",e,!0)),t.push(nr(ku.cssText,"",e,!0)),t.push(nr(n1.toString(),"",e)))},o1=r1;o1(document);export{De as D,l1 as O,q0 as Q,Yn as R,c1 as T,as as _,zn as a,iy as b,ry as c,Ry as d,oy as e,Rl as f,ky as g,ke as i,W0 as k,om as r,hm as t};

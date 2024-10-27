function Gd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.webPush=!1;window.Vaadin.featureFlags.formFillerAddon=!1;window.Vaadin.featureFlags.hillaI18n=!1;window.Vaadin.featureFlags.fullstackSignals=!1;window.Vaadin.featureFlags.copilotExperimentalFeatures=!1;function Yd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xd={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),hh=Symbol.for("react.portal"),vh=Symbol.for("react.fragment"),gh=Symbol.for("react.strict_mode"),yh=Symbol.for("react.profiler"),xh=Symbol.for("react.provider"),wh=Symbol.for("react.context"),Sh=Symbol.for("react.forward_ref"),kh=Symbol.for("react.suspense"),Eh=Symbol.for("react.memo"),Ch=Symbol.for("react.lazy"),ec=Symbol.iterator;function _h(e){return e===null||typeof e!="object"?null:(e=ec&&e[ec]||e["@@iterator"],typeof e=="function"?e:null)}var Jd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zd=Object.assign,qd={};function Ur(e,t,n){this.props=e,this.context=t,this.refs=qd,this.updater=n||Jd}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ef(){}ef.prototype=Ur.prototype;function Ts(e,t,n){this.props=e,this.context=t,this.refs=qd,this.updater=n||Jd}var zs=Ts.prototype=new ef;zs.constructor=Ts;Zd(zs,Ur.prototype);zs.isPureReactComponent=!0;var tc=Array.isArray,tf=Object.prototype.hasOwnProperty,Rs={current:null},nf={key:!0,ref:!0,__self:!0,__source:!0};function rf(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)tf.call(t,r)&&!nf.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Qo,type:e,key:i,ref:l,props:o,_owner:Rs.current}}function bh(e,t){return{$$typeof:Qo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ls(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qo}function Ph(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nc=/\/+/g;function Hl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ph(""+e.key):t.toString(36)}function Ti(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Qo:case hh:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Hl(l,0):r,tc(o)?(n="",e!=null&&(n=e.replace(nc,"$&/")+"/"),Ti(o,t,n,"",function(u){return u})):o!=null&&(Ls(o)&&(o=bh(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(nc,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",tc(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Hl(i,a);l+=Ti(i,t,n,s,o)}else if(s=_h(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Hl(i,a++),l+=Ti(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ui(e,t,n){if(e==null)return e;var r=[],o=0;return Ti(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Th(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var et={current:null},zi={transition:null},zh={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:zi,ReactCurrentOwner:Rs};function of(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:ui,forEach:function(e,t,n){ui(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ui(e,function(){t++}),t},toArray:function(e){return ui(e,function(t){return t})||[]},only:function(e){if(!Ls(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Ur;X.Fragment=vh;X.Profiler=yh;X.PureComponent=Ts;X.StrictMode=gh;X.Suspense=kh;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zh;X.act=of;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Rs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)tf.call(t,s)&&!nf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qo,type:e.type,key:o,ref:i,props:r,_owner:l}};X.createContext=function(e){return e={$$typeof:wh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xh,_context:e},e.Consumer=e};X.createElement=rf;X.createFactory=function(e){var t=rf.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:Sh,render:e}};X.isValidElement=Ls;X.lazy=function(e){return{$$typeof:Ch,_payload:{_status:-1,_result:e},_init:Th}};X.memo=function(e,t){return{$$typeof:Eh,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=zi.transition;zi.transition={};try{e()}finally{zi.transition=t}};X.unstable_act=of;X.useCallback=function(e,t){return et.current.useCallback(e,t)};X.useContext=function(e){return et.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return et.current.useDeferredValue(e)};X.useEffect=function(e,t){return et.current.useEffect(e,t)};X.useId=function(){return et.current.useId()};X.useImperativeHandle=function(e,t,n){return et.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return et.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return et.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return et.current.useMemo(e,t)};X.useReducer=function(e,t,n){return et.current.useReducer(e,t,n)};X.useRef=function(e){return et.current.useRef(e)};X.useState=function(e){return et.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return et.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return et.current.useTransition()};X.version="18.3.1";Xd.exports=X;var C=Xd.exports;const Rh=Yd(C),Lh=Gd({__proto__:null,default:Rh},[C]);var lf={exports:{}},ht={},af={exports:{}},sf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,O){var W=N.length;N.push(O);e:for(;0<W;){var ne=W-1>>>1,le=N[ne];if(0<o(le,O))N[ne]=O,N[W]=le,W=ne;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var O=N[0],W=N.pop();if(W!==O){N[0]=W;e:for(var ne=0,le=N.length,De=le>>>1;ne<De;){var Ue=2*(ne+1)-1,wt=N[Ue],ze=Ue+1,je=N[ze];if(0>o(wt,W))ze<le&&0>o(je,wt)?(N[ne]=je,N[ze]=W,ne=ze):(N[ne]=wt,N[Ue]=W,ne=Ue);else if(ze<le&&0>o(je,W))N[ne]=je,N[ze]=W,ne=ze;else break e}}return O}function o(N,O){var W=N.sortIndex-O.sortIndex;return W!==0?W:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,f=null,p=3,x=!1,E=!1,w=!1,z=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=N)r(u),O.sortIndex=O.expirationTime,t(s,O);else break;O=n(u)}}function k(N){if(w=!1,h(N),!E)if(n(s)!==null)E=!0,rt(T);else{var O=n(u);O!==null&&xt(k,O.startTime-N)}}function T(N,O){E=!1,w&&(w=!1,v(g),g=-1),x=!0;var W=p;try{for(h(O),f=n(s);f!==null&&(!(f.expirationTime>O)||N&&!H());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,p=f.priorityLevel;var le=ne(f.expirationTime<=O);O=e.unstable_now(),typeof le=="function"?f.callback=le:f===n(s)&&r(s),h(O)}else r(s);f=n(s)}if(f!==null)var De=!0;else{var Ue=n(u);Ue!==null&&xt(k,Ue.startTime-O),De=!1}return De}finally{f=null,p=W,x=!1}}var $=!1,R=null,g=-1,F=5,M=-1;function H(){return!(e.unstable_now()-M<F)}function G(){if(R!==null){var N=e.unstable_now();M=N;var O=!0;try{O=R(!0,N)}finally{O?te():($=!1,R=null)}}else $=!1}var te;if(typeof c=="function")te=function(){c(G)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,_e=ie.port2;ie.port1.onmessage=G,te=function(){_e.postMessage(null)}}else te=function(){z(G,0)};function rt(N){R=N,$||($=!0,te())}function xt(N,O){g=z(function(){N(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){E||x||(E=!0,rt(T))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var W=p;p=O;try{return N()}finally{p=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=p;p=N;try{return O()}finally{p=W}},e.unstable_scheduleCallback=function(N,O,W){var ne=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ne+W:ne):W=ne,N){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=W+le,N={id:d++,callback:O,priorityLevel:N,startTime:W,expirationTime:le,sortIndex:-1},W>ne?(N.sortIndex=W,t(u,N),n(s)===null&&N===n(u)&&(w?(v(g),g=-1):w=!0,xt(k,W-ne))):(N.sortIndex=le,t(s,N),E||x||(E=!0,rt(T))),N},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(N){var O=p;return function(){var W=p;p=O;try{return N.apply(this,arguments)}finally{p=W}}}})(sf);af.exports=sf;var $h=af.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh=C,mt=$h;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uf=new Set,Co={};function er(e,t){zr(e,t),zr(e+"Capture",t)}function zr(e,t){for(Co[e]=t,e=0;e<t.length;e++)uf.add(t[e])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ta=Object.prototype.hasOwnProperty,Dh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rc={},oc={};function Mh(e){return Ta.call(oc,e)?!0:Ta.call(rc,e)?!1:Dh.test(e)?oc[e]=!0:(rc[e]=!0,!1)}function Oh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ah(e,t,n,r){if(t===null||typeof t>"u"||Oh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];We[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var $s=/[\-:]([a-z])/g;function Ns(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($s,Ns);We[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($s,Ns);We[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($s,Ns);We[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ds(e,t,n,r){var o=We.hasOwnProperty(t)?We[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ah(t,n,o,r)&&(n=null),r||o===null?Mh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var en=Nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ci=Symbol.for("react.element"),ur=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),Ms=Symbol.for("react.strict_mode"),za=Symbol.for("react.profiler"),cf=Symbol.for("react.provider"),df=Symbol.for("react.context"),Os=Symbol.for("react.forward_ref"),Ra=Symbol.for("react.suspense"),La=Symbol.for("react.suspense_list"),As=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),ff=Symbol.for("react.offscreen"),ic=Symbol.iterator;function Qr(e){return e===null||typeof e!="object"?null:(e=ic&&e[ic]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,Wl;function oo(e){if(Wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wl=t&&t[1]||""}return`
`+Wl+e}var Ql=!1;function Kl(e,t){if(!e||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oo(e):""}function Ih(e){switch(e.tag){case 5:return oo(e.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return e=Kl(e.type,!1),e;case 11:return e=Kl(e.type.render,!1),e;case 1:return e=Kl(e.type,!0),e;default:return""}}function $a(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cr:return"Fragment";case ur:return"Portal";case za:return"Profiler";case Ms:return"StrictMode";case Ra:return"Suspense";case La:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case df:return(e.displayName||"Context")+".Consumer";case cf:return(e._context.displayName||"Context")+".Provider";case Os:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case As:return t=e.displayName||null,t!==null?t:$a(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return $a(e(t))}catch{}}return null}function Fh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $a(t);case 8:return t===Ms?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uh(e){var t=pf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function di(e){e._valueTracker||(e._valueTracker=Uh(e))}function mf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Na(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function lc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hf(e,t){t=t.checked,t!=null&&Ds(e,"checked",t,!1)}function Da(e,t){hf(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ma(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ma(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ac(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ma(e,t,n){(t!=="number"||Vi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var io=Array.isArray;function kr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Oa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(io(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function vf(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function uc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Aa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fi,yf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fi=fi||document.createElement("div"),fi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _o(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jh=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(e){jh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),uo[t]=uo[e]})});function xf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||uo.hasOwnProperty(e)&&uo[e]?(""+t).trim():t+"px"}function wf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=xf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Vh=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ia(e,t){if(t){if(Vh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Fa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ua=null;function Is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ja=null,Er=null,Cr=null;function cc(e){if(e=Yo(e)){if(typeof ja!="function")throw Error(P(280));var t=e.stateNode;t&&(t=kl(t),ja(e.stateNode,e.type,t))}}function Sf(e){Er?Cr?Cr.push(e):Cr=[e]:Er=e}function kf(){if(Er){var e=Er,t=Cr;if(Cr=Er=null,cc(e),t)for(e=0;e<t.length;e++)cc(t[e])}}function Ef(e,t){return e(t)}function Cf(){}var Gl=!1;function _f(e,t,n){if(Gl)return e(t,n);Gl=!0;try{return Ef(e,t,n)}finally{Gl=!1,(Er!==null||Cr!==null)&&(Cf(),kf())}}function bo(e,t){var n=e.stateNode;if(n===null)return null;var r=kl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Va=!1;if(Xt)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){Va=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{Va=!1}function Bh(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var co=!1,Bi=null,Hi=!1,Ba=null,Hh={onError:function(e){co=!0,Bi=e}};function Wh(e,t,n,r,o,i,l,a,s){co=!1,Bi=null,Bh.apply(Hh,arguments)}function Qh(e,t,n,r,o,i,l,a,s){if(Wh.apply(this,arguments),co){if(co){var u=Bi;co=!1,Bi=null}else throw Error(P(198));Hi||(Hi=!0,Ba=u)}}function tr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dc(e){if(tr(e)!==e)throw Error(P(188))}function Kh(e){var t=e.alternate;if(!t){if(t=tr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return dc(o),e;if(i===r)return dc(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Pf(e){return e=Kh(e),e!==null?Tf(e):null}function Tf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tf(e);if(t!==null)return t;e=e.sibling}return null}var zf=mt.unstable_scheduleCallback,fc=mt.unstable_cancelCallback,Gh=mt.unstable_shouldYield,Yh=mt.unstable_requestPaint,Ce=mt.unstable_now,Xh=mt.unstable_getCurrentPriorityLevel,Fs=mt.unstable_ImmediatePriority,Rf=mt.unstable_UserBlockingPriority,Wi=mt.unstable_NormalPriority,Jh=mt.unstable_LowPriority,Lf=mt.unstable_IdlePriority,yl=null,Ft=null;function Zh(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(yl,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:tv,qh=Math.log,ev=Math.LN2;function tv(e){return e>>>=0,e===0?32:31-(qh(e)/ev|0)|0}var pi=64,mi=4194304;function lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=lo(a):(i&=l,i!==0&&(r=lo(i)))}else l=n&~o,l!==0?r=lo(l):i!==0&&(r=lo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),o=1<<n,r|=e[n],t&=~o;return r}function nv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Nt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=nv(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $f(){var e=pi;return pi<<=1,!(pi&4194240)&&(pi=64),e}function Yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ko(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function ov(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Nt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Us(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var oe=0;function Nf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Df,js,Mf,Of,Af,Wa=!1,hi=[],vn=null,gn=null,yn=null,Po=new Map,To=new Map,un=[],iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pc(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":Po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(t.pointerId)}}function Gr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Yo(t),t!==null&&js(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function lv(e,t,n,r,o){switch(t){case"focusin":return vn=Gr(vn,e,t,n,r,o),!0;case"dragenter":return gn=Gr(gn,e,t,n,r,o),!0;case"mouseover":return yn=Gr(yn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Po.set(i,Gr(Po.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,To.set(i,Gr(To.get(i)||null,e,t,n,r,o)),!0}return!1}function If(e){var t=In(e.target);if(t!==null){var n=tr(t);if(n!==null){if(t=n.tag,t===13){if(t=bf(n),t!==null){e.blockedOn=t,Af(e.priority,function(){Mf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ua=r,n.target.dispatchEvent(r),Ua=null}else return t=Yo(n),t!==null&&js(t),e.blockedOn=n,!1;t.shift()}return!0}function mc(e,t,n){Ri(e)&&n.delete(t)}function av(){Wa=!1,vn!==null&&Ri(vn)&&(vn=null),gn!==null&&Ri(gn)&&(gn=null),yn!==null&&Ri(yn)&&(yn=null),Po.forEach(mc),To.forEach(mc)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wa||(Wa=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,av)))}function zo(e){function t(o){return Yr(o,e)}if(0<hi.length){Yr(hi[0],e);for(var n=1;n<hi.length;n++){var r=hi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&Yr(vn,e),gn!==null&&Yr(gn,e),yn!==null&&Yr(yn,e),Po.forEach(t),To.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)If(n),n.blockedOn===null&&un.shift()}var _r=en.ReactCurrentBatchConfig,Ki=!0;function sv(e,t,n,r){var o=oe,i=_r.transition;_r.transition=null;try{oe=1,Vs(e,t,n,r)}finally{oe=o,_r.transition=i}}function uv(e,t,n,r){var o=oe,i=_r.transition;_r.transition=null;try{oe=4,Vs(e,t,n,r)}finally{oe=o,_r.transition=i}}function Vs(e,t,n,r){if(Ki){var o=Qa(e,t,n,r);if(o===null)ia(e,t,r,Gi,n),pc(e,r);else if(lv(o,e,t,n,r))r.stopPropagation();else if(pc(e,r),t&4&&-1<iv.indexOf(e)){for(;o!==null;){var i=Yo(o);if(i!==null&&Df(i),i=Qa(e,t,n,r),i===null&&ia(e,t,r,Gi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ia(e,t,r,null,n)}}var Gi=null;function Qa(e,t,n,r){if(Gi=null,e=Is(r),e=In(e),e!==null)if(t=tr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function Ff(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xh()){case Fs:return 1;case Rf:return 4;case Wi:case Jh:return 16;case Lf:return 536870912;default:return 16}default:return 16}}var pn=null,Bs=null,Li=null;function Uf(){if(Li)return Li;var e,t=Bs,n=t.length,r,o="value"in pn?pn.value:pn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Li=o.slice(e,1<r?1-r:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vi(){return!0}function hc(){return!1}function vt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vi:hc,this.isPropagationStopped=hc,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hs=vt(jr),Go=ye({},jr,{view:0,detail:0}),cv=vt(Go),Xl,Jl,Xr,xl=ye({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(Xl=e.screenX-Xr.screenX,Jl=e.screenY-Xr.screenY):Jl=Xl=0,Xr=e),Xl)},movementY:function(e){return"movementY"in e?e.movementY:Jl}}),vc=vt(xl),dv=ye({},xl,{dataTransfer:0}),fv=vt(dv),pv=ye({},Go,{relatedTarget:0}),Zl=vt(pv),mv=ye({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=vt(mv),vv=ye({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gv=vt(vv),yv=ye({},jr,{data:0}),gc=vt(yv),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sv[e])?!!t[e]:!1}function Ws(){return kv}var Ev=ye({},Go,{key:function(e){if(e.key){var t=xv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cv=vt(Ev),_v=ye({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yc=vt(_v),bv=ye({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),Pv=vt(bv),Tv=ye({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=vt(Tv),Rv=ye({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lv=vt(Rv),$v=[9,13,27,32],Qs=Xt&&"CompositionEvent"in window,fo=null;Xt&&"documentMode"in document&&(fo=document.documentMode);var Nv=Xt&&"TextEvent"in window&&!fo,jf=Xt&&(!Qs||fo&&8<fo&&11>=fo),xc=" ",wc=!1;function Vf(e,t){switch(e){case"keyup":return $v.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function Dv(e,t){switch(e){case"compositionend":return Bf(t);case"keypress":return t.which!==32?null:(wc=!0,xc);case"textInput":return e=t.data,e===xc&&wc?null:e;default:return null}}function Mv(e,t){if(dr)return e==="compositionend"||!Qs&&Vf(e,t)?(e=Uf(),Li=Bs=pn=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jf&&t.locale!=="ko"?null:t.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ov[e.type]:t==="textarea"}function Hf(e,t,n,r){Sf(r),t=Yi(t,"onChange"),0<t.length&&(n=new Hs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var po=null,Ro=null;function Av(e){tp(e,0)}function wl(e){var t=mr(e);if(mf(t))return e}function Iv(e,t){if(e==="change")return t}var Wf=!1;if(Xt){var ql;if(Xt){var ea="oninput"in document;if(!ea){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),ea=typeof kc.oninput=="function"}ql=ea}else ql=!1;Wf=ql&&(!document.documentMode||9<document.documentMode)}function Ec(){po&&(po.detachEvent("onpropertychange",Qf),Ro=po=null)}function Qf(e){if(e.propertyName==="value"&&wl(Ro)){var t=[];Hf(t,Ro,e,Is(e)),_f(Av,t)}}function Fv(e,t,n){e==="focusin"?(Ec(),po=t,Ro=n,po.attachEvent("onpropertychange",Qf)):e==="focusout"&&Ec()}function Uv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(Ro)}function jv(e,t){if(e==="click")return wl(t)}function Vv(e,t){if(e==="input"||e==="change")return wl(t)}function Bv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:Bv;function Lo(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ta.call(t,o)||!Mt(e[o],t[o]))return!1}return!0}function Cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _c(e,t){var n=Cc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cc(n)}}function Kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gf(){for(var e=window,t=Vi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vi(e.document)}return t}function Ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hv(e){var t=Gf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kf(n.ownerDocument.documentElement,n)){if(r!==null&&Ks(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=_c(n,i);var l=_c(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wv=Xt&&"documentMode"in document&&11>=document.documentMode,fr=null,Ka=null,mo=null,Ga=!1;function bc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ga||fr==null||fr!==Vi(r)||(r=fr,"selectionStart"in r&&Ks(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&Lo(mo,r)||(mo=r,r=Yi(Ka,"onSelect"),0<r.length&&(t=new Hs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fr)))}function gi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pr={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionend:gi("Transition","TransitionEnd")},ta={},Yf={};Xt&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Sl(e){if(ta[e])return ta[e];if(!pr[e])return e;var t=pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yf)return ta[e]=t[n];return e}var Xf=Sl("animationend"),Jf=Sl("animationiteration"),Zf=Sl("animationstart"),qf=Sl("transitionend"),ep=new Map,Pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){ep.set(e,t),er(t,[e])}for(var na=0;na<Pc.length;na++){var ra=Pc[na],Qv=ra.toLowerCase(),Kv=ra[0].toUpperCase()+ra.slice(1);Tn(Qv,"on"+Kv)}Tn(Xf,"onAnimationEnd");Tn(Jf,"onAnimationIteration");Tn(Zf,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(qf,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Tc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qh(r,t,void 0,e),e.currentTarget=null}function tp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Tc(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Tc(o,a,u),i=s}}}if(Hi)throw e=Ba,Hi=!1,Ba=null,e}function fe(e,t){var n=t[qa];n===void 0&&(n=t[qa]=new Set);var r=e+"__bubble";n.has(r)||(np(t,e,2,!1),n.add(r))}function oa(e,t,n){var r=0;t&&(r|=4),np(n,e,r,t)}var yi="_reactListening"+Math.random().toString(36).slice(2);function $o(e){if(!e[yi]){e[yi]=!0,uf.forEach(function(n){n!=="selectionchange"&&(Gv.has(n)||oa(n,!1,e),oa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yi]||(t[yi]=!0,oa("selectionchange",!1,t))}}function np(e,t,n,r){switch(Ff(t)){case 1:var o=sv;break;case 4:o=uv;break;default:o=Vs}n=o.bind(null,t,n,e),o=void 0,!Va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ia(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=In(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}_f(function(){var u=i,d=Is(n),f=[];e:{var p=ep.get(e);if(p!==void 0){var x=Hs,E=e;switch(e){case"keypress":if($i(n)===0)break e;case"keydown":case"keyup":x=Cv;break;case"focusin":E="focus",x=Zl;break;case"focusout":E="blur",x=Zl;break;case"beforeblur":case"afterblur":x=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Pv;break;case Xf:case Jf:case Zf:x=hv;break;case qf:x=zv;break;case"scroll":x=cv;break;case"wheel":x=Lv;break;case"copy":case"cut":case"paste":x=gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=yc}var w=(t&4)!==0,z=!w&&e==="scroll",v=w?p!==null?p+"Capture":null:p;w=[];for(var c=u,h;c!==null;){h=c;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,v!==null&&(k=bo(c,v),k!=null&&w.push(No(c,k,h)))),z)break;c=c.return}0<w.length&&(p=new x(p,E,null,n,d),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&n!==Ua&&(E=n.relatedTarget||n.fromElement)&&(In(E)||E[Jt]))break e;if((x||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,x?(E=n.relatedTarget||n.toElement,x=u,E=E?In(E):null,E!==null&&(z=tr(E),E!==z||E.tag!==5&&E.tag!==6)&&(E=null)):(x=null,E=u),x!==E)){if(w=vc,k="onMouseLeave",v="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=yc,k="onPointerLeave",v="onPointerEnter",c="pointer"),z=x==null?p:mr(x),h=E==null?p:mr(E),p=new w(k,c+"leave",x,n,d),p.target=z,p.relatedTarget=h,k=null,In(d)===u&&(w=new w(v,c+"enter",E,n,d),w.target=h,w.relatedTarget=z,k=w),z=k,x&&E)t:{for(w=x,v=E,c=0,h=w;h;h=or(h))c++;for(h=0,k=v;k;k=or(k))h++;for(;0<c-h;)w=or(w),c--;for(;0<h-c;)v=or(v),h--;for(;c--;){if(w===v||v!==null&&w===v.alternate)break t;w=or(w),v=or(v)}w=null}else w=null;x!==null&&zc(f,p,x,w,!1),E!==null&&z!==null&&zc(f,z,E,w,!0)}}e:{if(p=u?mr(u):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var T=Iv;else if(Sc(p))if(Wf)T=Vv;else{T=Uv;var $=Fv}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=jv);if(T&&(T=T(e,u))){Hf(f,T,n,d);break e}$&&$(e,p,u),e==="focusout"&&($=p._wrapperState)&&$.controlled&&p.type==="number"&&Ma(p,"number",p.value)}switch($=u?mr(u):window,e){case"focusin":(Sc($)||$.contentEditable==="true")&&(fr=$,Ka=u,mo=null);break;case"focusout":mo=Ka=fr=null;break;case"mousedown":Ga=!0;break;case"contextmenu":case"mouseup":case"dragend":Ga=!1,bc(f,n,d);break;case"selectionchange":if(Wv)break;case"keydown":case"keyup":bc(f,n,d)}var R;if(Qs)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else dr?Vf(e,n)&&(g="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(jf&&n.locale!=="ko"&&(dr||g!=="onCompositionStart"?g==="onCompositionEnd"&&dr&&(R=Uf()):(pn=d,Bs="value"in pn?pn.value:pn.textContent,dr=!0)),$=Yi(u,g),0<$.length&&(g=new gc(g,e,null,n,d),f.push({event:g,listeners:$}),R?g.data=R:(R=Bf(n),R!==null&&(g.data=R)))),(R=Nv?Dv(e,n):Mv(e,n))&&(u=Yi(u,"onBeforeInput"),0<u.length&&(d=new gc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=R))}tp(f,t)})}function No(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=bo(e,n),i!=null&&r.unshift(No(e,i,o)),i=bo(e,t),i!=null&&r.push(No(e,i,o))),e=e.return}return r}function or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=bo(n,i),s!=null&&l.unshift(No(n,s,a))):o||(s=bo(n,i),s!=null&&l.push(No(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Yv=/\r\n?/g,Xv=/\u0000|\uFFFD/g;function Rc(e){return(typeof e=="string"?e:""+e).replace(Yv,`
`).replace(Xv,"")}function xi(e,t,n){if(t=Rc(t),Rc(e)!==t&&n)throw Error(P(425))}function Xi(){}var Ya=null,Xa=null;function Ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Za=typeof setTimeout=="function"?setTimeout:void 0,Jv=typeof clearTimeout=="function"?clearTimeout:void 0,Lc=typeof Promise=="function"?Promise:void 0,Zv=typeof queueMicrotask=="function"?queueMicrotask:typeof Lc<"u"?function(e){return Lc.resolve(null).then(e).catch(qv)}:Za;function qv(e){setTimeout(function(){throw e})}function la(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),zo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);zo(t)}function xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),It="__reactFiber$"+Vr,Do="__reactProps$"+Vr,Jt="__reactContainer$"+Vr,qa="__reactEvents$"+Vr,eg="__reactListeners$"+Vr,tg="__reactHandles$"+Vr;function In(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$c(e);e!==null;){if(n=e[It])return n;e=$c(e)}return t}e=n,n=e.parentNode}return null}function Yo(e){return e=e[It]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function kl(e){return e[Do]||null}var es=[],hr=-1;function zn(e){return{current:e}}function pe(e){0>hr||(e.current=es[hr],es[hr]=null,hr--)}function ce(e,t){hr++,es[hr]=e.current,e.current=t}var Pn={},Xe=zn(Pn),lt=zn(!1),Qn=Pn;function Rr(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function at(e){return e=e.childContextTypes,e!=null}function Ji(){pe(lt),pe(Xe)}function Nc(e,t,n){if(Xe.current!==Pn)throw Error(P(168));ce(Xe,t),ce(lt,n)}function rp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,Fh(e)||"Unknown",o));return ye({},n,r)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Qn=Xe.current,ce(Xe,e),ce(lt,lt.current),!0}function Dc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=rp(e,t,Qn),r.__reactInternalMemoizedMergedChildContext=e,pe(lt),pe(Xe),ce(Xe,e)):pe(lt),ce(lt,n)}var Qt=null,El=!1,aa=!1;function op(e){Qt===null?Qt=[e]:Qt.push(e)}function ng(e){El=!0,op(e)}function Rn(){if(!aa&&Qt!==null){aa=!0;var e=0,t=oe;try{var n=Qt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,El=!1}catch(o){throw Qt!==null&&(Qt=Qt.slice(e+1)),zf(Fs,Rn),o}finally{oe=t,aa=!1}}return null}var vr=[],gr=0,qi=null,el=0,St=[],kt=0,Kn=null,Kt=1,Gt="";function On(e,t){vr[gr++]=el,vr[gr++]=qi,qi=e,el=t}function ip(e,t,n){St[kt++]=Kt,St[kt++]=Gt,St[kt++]=Kn,Kn=e;var r=Kt;e=Gt;var o=32-Nt(r)-1;r&=~(1<<o),n+=1;var i=32-Nt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Kt=1<<32-Nt(t)+o|n<<o|r,Gt=i+e}else Kt=1<<i|n<<o|r,Gt=e}function Gs(e){e.return!==null&&(On(e,1),ip(e,1,0))}function Ys(e){for(;e===qi;)qi=vr[--gr],vr[gr]=null,el=vr[--gr],vr[gr]=null;for(;e===Kn;)Kn=St[--kt],St[kt]=null,Gt=St[--kt],St[kt]=null,Kt=St[--kt],St[kt]=null}var pt=null,ft=null,me=!1,$t=null;function lp(e,t){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,ft=xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kn!==null?{id:Kt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pt=e,ft=null,!0):!1;default:return!1}}function ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ns(e){if(me){var t=ft;if(t){var n=t;if(!Mc(e,t)){if(ts(e))throw Error(P(418));t=xn(n.nextSibling);var r=pt;t&&Mc(e,t)?lp(r,n):(e.flags=e.flags&-4097|2,me=!1,pt=e)}}else{if(ts(e))throw Error(P(418));e.flags=e.flags&-4097|2,me=!1,pt=e}}}function Oc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function wi(e){if(e!==pt)return!1;if(!me)return Oc(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ja(e.type,e.memoizedProps)),t&&(t=ft)){if(ts(e))throw ap(),Error(P(418));for(;t;)lp(e,t),t=xn(t.nextSibling)}if(Oc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=pt?xn(e.stateNode.nextSibling):null;return!0}function ap(){for(var e=ft;e;)e=xn(e.nextSibling)}function Lr(){ft=pt=null,me=!1}function Xs(e){$t===null?$t=[e]:$t.push(e)}var rg=en.ReactCurrentBatchConfig;function Jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Si(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ac(e){var t=e._init;return t(e._payload)}function sp(e){function t(v,c){if(e){var h=v.deletions;h===null?(v.deletions=[c],v.flags|=16):h.push(c)}}function n(v,c){if(!e)return null;for(;c!==null;)t(v,c),c=c.sibling;return null}function r(v,c){for(v=new Map;c!==null;)c.key!==null?v.set(c.key,c):v.set(c.index,c),c=c.sibling;return v}function o(v,c){return v=En(v,c),v.index=0,v.sibling=null,v}function i(v,c,h){return v.index=h,e?(h=v.alternate,h!==null?(h=h.index,h<c?(v.flags|=2,c):h):(v.flags|=2,c)):(v.flags|=1048576,c)}function l(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,c,h,k){return c===null||c.tag!==6?(c=ma(h,v.mode,k),c.return=v,c):(c=o(c,h),c.return=v,c)}function s(v,c,h,k){var T=h.type;return T===cr?d(v,c,h.props.children,k,h.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===an&&Ac(T)===c.type)?(k=o(c,h.props),k.ref=Jr(v,c,h),k.return=v,k):(k=Fi(h.type,h.key,h.props,null,v.mode,k),k.ref=Jr(v,c,h),k.return=v,k)}function u(v,c,h,k){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=ha(h,v.mode,k),c.return=v,c):(c=o(c,h.children||[]),c.return=v,c)}function d(v,c,h,k,T){return c===null||c.tag!==7?(c=Wn(h,v.mode,k,T),c.return=v,c):(c=o(c,h),c.return=v,c)}function f(v,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ma(""+c,v.mode,h),c.return=v,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ci:return h=Fi(c.type,c.key,c.props,null,v.mode,h),h.ref=Jr(v,null,c),h.return=v,h;case ur:return c=ha(c,v.mode,h),c.return=v,c;case an:var k=c._init;return f(v,k(c._payload),h)}if(io(c)||Qr(c))return c=Wn(c,v.mode,h,null),c.return=v,c;Si(v,c)}return null}function p(v,c,h,k){var T=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return T!==null?null:a(v,c,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ci:return h.key===T?s(v,c,h,k):null;case ur:return h.key===T?u(v,c,h,k):null;case an:return T=h._init,p(v,c,T(h._payload),k)}if(io(h)||Qr(h))return T!==null?null:d(v,c,h,k,null);Si(v,h)}return null}function x(v,c,h,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return v=v.get(h)||null,a(c,v,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ci:return v=v.get(k.key===null?h:k.key)||null,s(c,v,k,T);case ur:return v=v.get(k.key===null?h:k.key)||null,u(c,v,k,T);case an:var $=k._init;return x(v,c,h,$(k._payload),T)}if(io(k)||Qr(k))return v=v.get(h)||null,d(c,v,k,T,null);Si(c,k)}return null}function E(v,c,h,k){for(var T=null,$=null,R=c,g=c=0,F=null;R!==null&&g<h.length;g++){R.index>g?(F=R,R=null):F=R.sibling;var M=p(v,R,h[g],k);if(M===null){R===null&&(R=F);break}e&&R&&M.alternate===null&&t(v,R),c=i(M,c,g),$===null?T=M:$.sibling=M,$=M,R=F}if(g===h.length)return n(v,R),me&&On(v,g),T;if(R===null){for(;g<h.length;g++)R=f(v,h[g],k),R!==null&&(c=i(R,c,g),$===null?T=R:$.sibling=R,$=R);return me&&On(v,g),T}for(R=r(v,R);g<h.length;g++)F=x(R,v,g,h[g],k),F!==null&&(e&&F.alternate!==null&&R.delete(F.key===null?g:F.key),c=i(F,c,g),$===null?T=F:$.sibling=F,$=F);return e&&R.forEach(function(H){return t(v,H)}),me&&On(v,g),T}function w(v,c,h,k){var T=Qr(h);if(typeof T!="function")throw Error(P(150));if(h=T.call(h),h==null)throw Error(P(151));for(var $=T=null,R=c,g=c=0,F=null,M=h.next();R!==null&&!M.done;g++,M=h.next()){R.index>g?(F=R,R=null):F=R.sibling;var H=p(v,R,M.value,k);if(H===null){R===null&&(R=F);break}e&&R&&H.alternate===null&&t(v,R),c=i(H,c,g),$===null?T=H:$.sibling=H,$=H,R=F}if(M.done)return n(v,R),me&&On(v,g),T;if(R===null){for(;!M.done;g++,M=h.next())M=f(v,M.value,k),M!==null&&(c=i(M,c,g),$===null?T=M:$.sibling=M,$=M);return me&&On(v,g),T}for(R=r(v,R);!M.done;g++,M=h.next())M=x(R,v,g,M.value,k),M!==null&&(e&&M.alternate!==null&&R.delete(M.key===null?g:M.key),c=i(M,c,g),$===null?T=M:$.sibling=M,$=M);return e&&R.forEach(function(G){return t(v,G)}),me&&On(v,g),T}function z(v,c,h,k){if(typeof h=="object"&&h!==null&&h.type===cr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ci:e:{for(var T=h.key,$=c;$!==null;){if($.key===T){if(T=h.type,T===cr){if($.tag===7){n(v,$.sibling),c=o($,h.props.children),c.return=v,v=c;break e}}else if($.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===an&&Ac(T)===$.type){n(v,$.sibling),c=o($,h.props),c.ref=Jr(v,$,h),c.return=v,v=c;break e}n(v,$);break}else t(v,$);$=$.sibling}h.type===cr?(c=Wn(h.props.children,v.mode,k,h.key),c.return=v,v=c):(k=Fi(h.type,h.key,h.props,null,v.mode,k),k.ref=Jr(v,c,h),k.return=v,v=k)}return l(v);case ur:e:{for($=h.key;c!==null;){if(c.key===$)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(v,c.sibling),c=o(c,h.children||[]),c.return=v,v=c;break e}else{n(v,c);break}else t(v,c);c=c.sibling}c=ha(h,v.mode,k),c.return=v,v=c}return l(v);case an:return $=h._init,z(v,c,$(h._payload),k)}if(io(h))return E(v,c,h,k);if(Qr(h))return w(v,c,h,k);Si(v,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(v,c.sibling),c=o(c,h),c.return=v,v=c):(n(v,c),c=ma(h,v.mode,k),c.return=v,v=c),l(v)):n(v,c)}return z}var $r=sp(!0),up=sp(!1),tl=zn(null),nl=null,yr=null,Js=null;function Zs(){Js=yr=nl=null}function qs(e){var t=tl.current;pe(tl),e._currentValue=t}function rs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function br(e,t){nl=e,Js=yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(it=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(Js!==e)if(e={context:e,memoizedValue:t,next:null},yr===null){if(nl===null)throw Error(P(308));yr=e,nl.dependencies={lanes:0,firstContext:e}}else yr=yr.next=e;return t}var Fn=null;function eu(e){Fn===null?Fn=[e]:Fn.push(e)}function cp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,eu(t)):(n.next=o.next,o.next=n),t.interleaved=n,Zt(e,r)}function Zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Zt(e,n)}return o=r.interleaved,o===null?(t.next=t,eu(r)):(t.next=o.next,o.next=t),r.interleaved=t,Zt(e,n)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Us(e,n)}}function Ic(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rl(e,t,n,r){var o=e.updateQueue;sn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;l=0,d=u=s=null,a=i;do{var p=a.lane,x=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=e,w=a;switch(p=t,x=n,w.tag){case 1:if(E=w.payload,typeof E=="function"){f=E.call(x,f,p);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=w.payload,p=typeof E=="function"?E.call(x,f,p):E,p==null)break e;f=ye({},f,p);break e;case 2:sn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else x={eventTime:x,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=x,s=f):d=d.next=x,l|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Yn|=l,e.lanes=l,e.memoizedState=f}}function Fc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var Xo={},Ut=zn(Xo),Mo=zn(Xo),Oo=zn(Xo);function Un(e){if(e===Xo)throw Error(P(174));return e}function nu(e,t){switch(ce(Oo,t),ce(Mo,e),ce(Ut,Xo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Aa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Aa(t,e)}pe(Ut),ce(Ut,t)}function Nr(){pe(Ut),pe(Mo),pe(Oo)}function fp(e){Un(Oo.current);var t=Un(Ut.current),n=Aa(t,e.type);t!==n&&(ce(Mo,e),ce(Ut,n))}function ru(e){Mo.current===e&&(pe(Ut),pe(Mo))}var ve=zn(0);function ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sa=[];function ou(){for(var e=0;e<sa.length;e++)sa[e]._workInProgressVersionPrimary=null;sa.length=0}var Di=en.ReactCurrentDispatcher,ua=en.ReactCurrentBatchConfig,Gn=0,ge=null,Le=null,Oe=null,il=!1,ho=!1,Ao=0,og=0;function Ke(){throw Error(P(321))}function iu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function lu(e,t,n,r,o,i){if(Gn=i,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Di.current=e===null||e.memoizedState===null?sg:ug,e=n(r,o),ho){i=0;do{if(ho=!1,Ao=0,25<=i)throw Error(P(301));i+=1,Oe=Le=null,t.updateQueue=null,Di.current=cg,e=n(r,o)}while(ho)}if(Di.current=ll,t=Le!==null&&Le.next!==null,Gn=0,Oe=Le=ge=null,il=!1,t)throw Error(P(300));return e}function au(){var e=Ao!==0;return Ao=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ge.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function bt(){if(Le===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Oe===null?ge.memoizedState:Oe.next;if(t!==null)Oe=t,Le=e;else{if(e===null)throw Error(P(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Oe===null?ge.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Io(e,t){return typeof t=="function"?t(e):t}function ca(e){var t=bt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var d=u.lane;if((Gn&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,l=r):s=s.next=f,ge.lanes|=d,Yn|=d}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Mt(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ge.lanes|=i,Yn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function da(e){var t=bt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Mt(i,t.memoizedState)||(it=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function pp(){}function mp(e,t){var n=ge,r=bt(),o=t(),i=!Mt(r.memoizedState,o);if(i&&(r.memoizedState=o,it=!0),r=r.queue,su(gp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Fo(9,vp.bind(null,n,r,o,t),void 0,null),Ie===null)throw Error(P(349));Gn&30||hp(n,t,o)}return o}function hp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vp(e,t,n,r){t.value=n,t.getSnapshot=r,yp(t)&&xp(e)}function gp(e,t,n){return n(function(){yp(t)&&xp(e)})}function yp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function xp(e){var t=Zt(e,1);t!==null&&Dt(t,e,1,-1)}function Uc(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t.queue=e,e=e.dispatch=ag.bind(null,ge,e),[t.memoizedState,e]}function Fo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wp(){return bt().memoizedState}function Mi(e,t,n,r){var o=At();ge.flags|=e,o.memoizedState=Fo(1|t,n,void 0,r===void 0?null:r)}function Cl(e,t,n,r){var o=bt();r=r===void 0?null:r;var i=void 0;if(Le!==null){var l=Le.memoizedState;if(i=l.destroy,r!==null&&iu(r,l.deps)){o.memoizedState=Fo(t,n,i,r);return}}ge.flags|=e,o.memoizedState=Fo(1|t,n,i,r)}function jc(e,t){return Mi(8390656,8,e,t)}function su(e,t){return Cl(2048,8,e,t)}function Sp(e,t){return Cl(4,2,e,t)}function kp(e,t){return Cl(4,4,e,t)}function Ep(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cp(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4,4,Ep.bind(null,t,e),n)}function uu(){}function _p(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&iu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bp(e,t){var n=bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&iu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pp(e,t,n){return Gn&21?(Mt(n,t)||(n=$f(),ge.lanes|=n,Yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n)}function ig(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=ua.transition;ua.transition={};try{e(!1),t()}finally{oe=n,ua.transition=r}}function Tp(){return bt().memoizedState}function lg(e,t,n){var r=kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zp(e))Rp(t,n);else if(n=cp(e,t,n,r),n!==null){var o=qe();Dt(n,e,r,o),Lp(n,t,r)}}function ag(e,t,n){var r=kn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zp(e))Rp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Mt(a,l)){var s=t.interleaved;s===null?(o.next=o,eu(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=cp(e,t,o,r),n!==null&&(o=qe(),Dt(n,e,r,o),Lp(n,t,r))}}function zp(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Rp(e,t){ho=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Us(e,n)}}var ll={readContext:_t,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},sg={readContext:_t,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:jc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mi(4194308,4,Ep.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mi(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lg.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:Uc,useDebugValue:uu,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=Uc(!1),t=e[0];return e=ig.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,o=At();if(me){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Ie===null)throw Error(P(349));Gn&30||hp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,jc(gp.bind(null,r,i,e),[e]),r.flags|=2048,Fo(9,vp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=At(),t=Ie.identifierPrefix;if(me){var n=Gt,r=Kt;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ao++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=og++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ug={readContext:_t,useCallback:_p,useContext:_t,useEffect:su,useImperativeHandle:Cp,useInsertionEffect:Sp,useLayoutEffect:kp,useMemo:bp,useReducer:ca,useRef:wp,useState:function(){return ca(Io)},useDebugValue:uu,useDeferredValue:function(e){var t=bt();return Pp(t,Le.memoizedState,e)},useTransition:function(){var e=ca(Io)[0],t=bt().memoizedState;return[e,t]},useMutableSource:pp,useSyncExternalStore:mp,useId:Tp,unstable_isNewReconciler:!1},cg={readContext:_t,useCallback:_p,useContext:_t,useEffect:su,useImperativeHandle:Cp,useInsertionEffect:Sp,useLayoutEffect:kp,useMemo:bp,useReducer:da,useRef:wp,useState:function(){return da(Io)},useDebugValue:uu,useDeferredValue:function(e){var t=bt();return Le===null?t.memoizedState=e:Pp(t,Le.memoizedState,e)},useTransition:function(){var e=da(Io)[0],t=bt().memoizedState;return[e,t]},useMutableSource:pp,useSyncExternalStore:mp,useId:Tp,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function os(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _l={isMounted:function(e){return(e=e._reactInternals)?tr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),o=kn(e),i=Yt(r,o);i.payload=t,n!=null&&(i.callback=n),t=wn(e,i,o),t!==null&&(Dt(t,e,o,r),Ni(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),o=kn(e),i=Yt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=wn(e,i,o),t!==null&&(Dt(t,e,o,r),Ni(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=kn(e),o=Yt(n,r);o.tag=2,t!=null&&(o.callback=t),t=wn(e,o,r),t!==null&&(Dt(t,e,r,n),Ni(t,e,r))}};function Vc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Lo(n,r)||!Lo(o,i):!0}function $p(e,t,n){var r=!1,o=Pn,i=t.contextType;return typeof i=="object"&&i!==null?i=_t(i):(o=at(t)?Qn:Xe.current,r=t.contextTypes,i=(r=r!=null)?Rr(e,o):Pn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_l.enqueueReplaceState(t,t.state,null)}function is(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},tu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=_t(i):(i=at(t)?Qn:Xe.current,o.context=Rr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(os(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&_l.enqueueReplaceState(o,o.state,null),rl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var n="",r=t;do n+=Ih(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function fa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dg=typeof WeakMap=="function"?WeakMap:Map;function Np(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,vs=r),ls(e,t)},n}function Dp(e,t,n){n=Yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ls(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ls(e,t),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Hc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=_g.bind(null,e,t,n),t.then(e,e))}function Wc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,wn(n,t,1))),n.lanes|=1),e)}var fg=en.ReactCurrentOwner,it=!1;function Ze(e,t,n,r){t.child=e===null?up(t,null,n,r):$r(t,e.child,n,r)}function Kc(e,t,n,r,o){n=n.render;var i=t.ref;return br(t,o),r=lu(e,t,n,r,i,o),n=au(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qt(e,t,o)):(me&&n&&Gs(t),t.flags|=1,Ze(e,t,r,o),t.child)}function Gc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!gu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Mp(e,t,i,r,o)):(e=Fi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(l,r)&&e.ref===t.ref)return qt(e,t,o)}return t.flags|=1,e=En(i,r),e.ref=t.ref,e.return=t,t.child=e}function Mp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Lo(i,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(it=!0);else return t.lanes=e.lanes,qt(e,t,o)}return as(e,t,n,r,o)}function Op(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(wr,ct),ct|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(wr,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ce(wr,ct),ct|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ce(wr,ct),ct|=r;return Ze(e,t,o,n),t.child}function Ap(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function as(e,t,n,r,o){var i=at(n)?Qn:Xe.current;return i=Rr(t,i),br(t,o),n=lu(e,t,n,r,i,o),r=au(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qt(e,t,o)):(me&&r&&Gs(t),t.flags|=1,Ze(e,t,n,o),t.child)}function Yc(e,t,n,r,o){if(at(n)){var i=!0;Zi(t)}else i=!1;if(br(t,o),t.stateNode===null)Oi(e,t),$p(t,n,r),is(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=at(n)?Qn:Xe.current,u=Rr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Bc(t,l,r,u),sn=!1;var p=t.memoizedState;l.state=p,rl(t,r,l,o),s=t.memoizedState,a!==r||p!==s||lt.current||sn?(typeof d=="function"&&(os(t,n,d,r),s=t.memoizedState),(a=sn||Vc(t,n,a,r,p,s,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,dp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:zt(t.type,a),l.props=u,f=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=_t(s):(s=at(n)?Qn:Xe.current,s=Rr(t,s));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||p!==s)&&Bc(t,l,r,s),sn=!1,p=t.memoizedState,l.state=p,rl(t,r,l,o);var E=t.memoizedState;a!==f||p!==E||lt.current||sn?(typeof x=="function"&&(os(t,n,x,r),E=t.memoizedState),(u=sn||Vc(t,n,u,r,p,E,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,E,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,E,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),l.props=r,l.state=E,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ss(e,t,n,r,i,o)}function ss(e,t,n,r,o,i){Ap(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Dc(t,n,!1),qt(e,t,i);r=t.stateNode,fg.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=$r(t,e.child,null,i),t.child=$r(t,null,a,i)):Ze(e,t,a,i),t.memoizedState=r.state,o&&Dc(t,n,!0),t.child}function Ip(e){var t=e.stateNode;t.pendingContext?Nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nc(e,t.context,!1),nu(e,t.containerInfo)}function Xc(e,t,n,r,o){return Lr(),Xs(o),t.flags|=256,Ze(e,t,n,r),t.child}var us={dehydrated:null,treeContext:null,retryLane:0};function cs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fp(e,t,n){var r=t.pendingProps,o=ve.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ce(ve,o&1),e===null)return ns(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Tl(l,r,0,null),e=Wn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=cs(n),t.memoizedState=us,e):cu(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return pg(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=En(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=En(a,i):(i=Wn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?cs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=us,r}return i=e.child,e=i.sibling,r=En(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cu(e,t){return t=Tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ki(e,t,n,r){return r!==null&&Xs(r),$r(t,e.child,null,n),e=cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pg(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=fa(Error(P(422))),ki(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Tl({mode:"visible",children:r.children},o,0,null),i=Wn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&$r(t,e.child,null,l),t.child.memoizedState=cs(l),t.memoizedState=us,i);if(!(t.mode&1))return ki(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(P(419)),r=fa(i,r,void 0),ki(e,t,l,r)}if(a=(l&e.childLanes)!==0,it||a){if(r=Ie,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Zt(e,o),Dt(r,e,o,-1))}return vu(),r=fa(Error(P(421))),ki(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=bg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ft=xn(o.nextSibling),pt=t,me=!0,$t=null,e!==null&&(St[kt++]=Kt,St[kt++]=Gt,St[kt++]=Kn,Kt=e.id,Gt=e.overflow,Kn=t),t=cu(t,r.children),t.flags|=4096,t)}function Jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),rs(e.return,t,n)}function pa(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Up(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ze(e,t,r.children,n),r=ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jc(e,n,t);else if(e.tag===19)Jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ve,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ol(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),pa(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ol(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}pa(t,!0,n,null,i);break;case"together":pa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=En(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mg(e,t,n){switch(t.tag){case 3:Ip(t),Lr();break;case 5:fp(t);break;case 1:at(t.type)&&Zi(t);break;case 4:nu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ce(tl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?Fp(e,t,n):(ce(ve,ve.current&1),e=qt(e,t,n),e!==null?e.sibling:null);ce(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Up(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ce(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,Op(e,t,n)}return qt(e,t,n)}var jp,ds,Vp,Bp;jp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ds=function(){};Vp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Un(Ut.current);var i=null;switch(n){case"input":o=Na(e,o),r=Na(e,r),i=[];break;case"select":o=ye({},o,{value:void 0}),r=ye({},r,{value:void 0}),i=[];break;case"textarea":o=Oa(e,o),r=Oa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xi)}Ia(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Co.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Co.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&fe("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Bp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Zr(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hg(e,t,n){var r=t.pendingProps;switch(Ys(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return at(t.type)&&Ji(),Ge(t),null;case 3:return r=t.stateNode,Nr(),pe(lt),pe(Xe),ou(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$t!==null&&(xs($t),$t=null))),ds(e,t),Ge(t),null;case 5:ru(t);var o=Un(Oo.current);if(n=t.type,e!==null&&t.stateNode!=null)Vp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ge(t),null}if(e=Un(Ut.current),wi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[It]=t,r[Do]=i,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(o=0;o<ao.length;o++)fe(ao[o],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":lc(r,i),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},fe("invalid",r);break;case"textarea":sc(r,i),fe("invalid",r)}Ia(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&xi(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&xi(r.textContent,a,e),o=["children",""+a]):Co.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&fe("scroll",r)}switch(n){case"input":di(r),ac(r,i,!0);break;case"textarea":di(r),uc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[It]=t,e[Do]=r,jp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Fa(n,r),n){case"dialog":fe("cancel",e),fe("close",e),o=r;break;case"iframe":case"object":case"embed":fe("load",e),o=r;break;case"video":case"audio":for(o=0;o<ao.length;o++)fe(ao[o],e);o=r;break;case"source":fe("error",e),o=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),o=r;break;case"details":fe("toggle",e),o=r;break;case"input":lc(e,r),o=Na(e,r),fe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ye({},r,{value:void 0}),fe("invalid",e);break;case"textarea":sc(e,r),o=Oa(e,r),fe("invalid",e);break;default:o=r}Ia(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?wf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&yf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&_o(e,s):typeof s=="number"&&_o(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Co.hasOwnProperty(i)?s!=null&&i==="onScroll"&&fe("scroll",e):s!=null&&Ds(e,i,s,l))}switch(n){case"input":di(e),ac(e,r,!1);break;case"textarea":di(e),uc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?kr(e,!!r.multiple,i,!1):r.defaultValue!=null&&kr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Xi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ge(t),null;case 6:if(e&&t.stateNode!=null)Bp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Un(Oo.current),Un(Ut.current),wi(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(i=r.nodeValue!==n)&&(e=pt,e!==null))switch(e.tag){case 3:xi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Ge(t),null;case 13:if(pe(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&ft!==null&&t.mode&1&&!(t.flags&128))ap(),Lr(),t.flags|=98560,i=!1;else if(i=wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[It]=t}else Lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ge(t),i=!1}else $t!==null&&(xs($t),$t=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Ne===0&&(Ne=3):vu())),t.updateQueue!==null&&(t.flags|=4),Ge(t),null);case 4:return Nr(),ds(e,t),e===null&&$o(t.stateNode.containerInfo),Ge(t),null;case 10:return qs(t.type._context),Ge(t),null;case 17:return at(t.type)&&Ji(),Ge(t),null;case 19:if(pe(ve),i=t.memoizedState,i===null)return Ge(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Zr(i,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ol(e),l!==null){for(t.flags|=128,Zr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ve,ve.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ce()>Mr&&(t.flags|=128,r=!0,Zr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ol(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Zr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!me)return Ge(t),null}else 2*Ce()-i.renderingStartTime>Mr&&n!==1073741824&&(t.flags|=128,r=!0,Zr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ce(),t.sibling=null,n=ve.current,ce(ve,r?n&1|2:n&1),t):(Ge(t),null);case 22:case 23:return hu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ct&1073741824&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function vg(e,t){switch(Ys(t),t.tag){case 1:return at(t.type)&&Ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),pe(lt),pe(Xe),ou(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ru(t),null;case 13:if(pe(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(ve),null;case 4:return Nr(),null;case 10:return qs(t.type._context),null;case 22:case 23:return hu(),null;case 24:return null;default:return null}}var Ei=!1,Ye=!1,gg=typeof WeakSet=="function"?WeakSet:Set,I=null;function xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function fs(e,t,n){try{n()}catch(r){ke(e,t,r)}}var Zc=!1;function yg(e,t){if(Ya=Ki,e=Gf(),Ks(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var x;f!==n||o!==0&&f.nodeType!==3||(a=l+o),f!==i||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(x=f.firstChild)!==null;)p=f,f=x;for(;;){if(f===e)break t;if(p===n&&++u===o&&(a=l),p===i&&++d===r&&(s=l),(x=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xa={focusedElem:e,selectionRange:n},Ki=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var w=E.memoizedProps,z=E.memoizedState,v=t.stateNode,c=v.getSnapshotBeforeUpdate(t.elementType===t.type?w:zt(t.type,w),z);v.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){ke(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return E=Zc,Zc=!1,E}function vo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&fs(t,n,i)}o=o.next}while(o!==r)}}function bl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ps(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hp(e){var t=e.alternate;t!==null&&(e.alternate=null,Hp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[Do],delete t[qa],delete t[eg],delete t[tg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wp(e){return e.tag===5||e.tag===3||e.tag===4}function qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ms(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xi));else if(r!==4&&(e=e.child,e!==null))for(ms(e,t,n),e=e.sibling;e!==null;)ms(e,t,n),e=e.sibling}function hs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hs(e,t,n),e=e.sibling;e!==null;)hs(e,t,n),e=e.sibling}var Be=null,Rt=!1;function on(e,t,n){for(n=n.child;n!==null;)Qp(e,t,n),n=n.sibling}function Qp(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:Ye||xr(n,t);case 6:var r=Be,o=Rt;Be=null,on(e,t,n),Be=r,Rt=o,Be!==null&&(Rt?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Rt?(e=Be,n=n.stateNode,e.nodeType===8?la(e.parentNode,n):e.nodeType===1&&la(e,n),zo(e)):la(Be,n.stateNode));break;case 4:r=Be,o=Rt,Be=n.stateNode.containerInfo,Rt=!0,on(e,t,n),Be=r,Rt=o;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&fs(n,t,l),o=o.next}while(o!==r)}on(e,t,n);break;case 1:if(!Ye&&(xr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,t,a)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,on(e,t,n),Ye=r):on(e,t,n);break;default:on(e,t,n)}}function ed(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gg),t.forEach(function(r){var o=Pg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Be=a.stateNode,Rt=!1;break e;case 3:Be=a.stateNode.containerInfo,Rt=!0;break e;case 4:Be=a.stateNode.containerInfo,Rt=!0;break e}a=a.return}if(Be===null)throw Error(P(160));Qp(i,l,o),Be=null,Rt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ke(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kp(t,e),t=t.sibling}function Kp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),Ot(e),r&4){try{vo(3,e,e.return),bl(3,e)}catch(w){ke(e,e.return,w)}try{vo(5,e,e.return)}catch(w){ke(e,e.return,w)}}break;case 1:Pt(t,e),Ot(e),r&512&&n!==null&&xr(n,n.return);break;case 5:if(Pt(t,e),Ot(e),r&512&&n!==null&&xr(n,n.return),e.flags&32){var o=e.stateNode;try{_o(o,"")}catch(w){ke(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&hf(o,i),Fa(a,l);var u=Fa(a,i);for(l=0;l<s.length;l+=2){var d=s[l],f=s[l+1];d==="style"?wf(o,f):d==="dangerouslySetInnerHTML"?yf(o,f):d==="children"?_o(o,f):Ds(o,d,f,u)}switch(a){case"input":Da(o,i);break;case"textarea":vf(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?kr(o,!!i.multiple,x,!1):p!==!!i.multiple&&(i.defaultValue!=null?kr(o,!!i.multiple,i.defaultValue,!0):kr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Do]=i}catch(w){ke(e,e.return,w)}}break;case 6:if(Pt(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ke(e,e.return,w)}}break;case 3:if(Pt(t,e),Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(t.containerInfo)}catch(w){ke(e,e.return,w)}break;case 4:Pt(t,e),Ot(e);break;case 13:Pt(t,e),Ot(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(pu=Ce())),r&4&&ed(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(u=Ye)||d,Pt(t,e),Ye=u):Pt(t,e),Ot(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(I=e,d=e.child;d!==null;){for(f=I=d;I!==null;){switch(p=I,x=p.child,p.tag){case 0:case 11:case 14:case 15:vo(4,p,p.return);break;case 1:xr(p,p.return);var E=p.stateNode;if(typeof E.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(w){ke(r,n,w)}}break;case 5:xr(p,p.return);break;case 22:if(p.memoizedState!==null){nd(f);continue}}x!==null?(x.return=p,I=x):nd(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=xf("display",l))}catch(w){ke(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ke(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pt(t,e),Ot(e),r&4&&ed(e);break;case 21:break;default:Pt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wp(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(_o(o,""),r.flags&=-33);var i=qc(e);hs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=qc(e);ms(e,a,l);break;default:throw Error(P(161))}}catch(s){ke(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xg(e,t,n){I=e,Gp(e)}function Gp(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Ei;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Ye;a=Ei;var u=Ye;if(Ei=l,(Ye=s)&&!u)for(I=o;I!==null;)l=I,s=l.child,l.tag===22&&l.memoizedState!==null?rd(o):s!==null?(s.return=l,I=s):rd(o);for(;i!==null;)I=i,Gp(i),i=i.sibling;I=o,Ei=a,Ye=u}td(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,I=i):td(e)}}function td(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||bl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Fc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&zo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ye||t.flags&512&&ps(t)}catch(p){ke(t,t.return,p)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function nd(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function rd(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bl(4,t)}catch(s){ke(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ke(t,o,s)}}var i=t.return;try{ps(t)}catch(s){ke(t,i,s)}break;case 5:var l=t.return;try{ps(t)}catch(s){ke(t,l,s)}}}catch(s){ke(t,t.return,s)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var wg=Math.ceil,al=en.ReactCurrentDispatcher,du=en.ReactCurrentOwner,Ct=en.ReactCurrentBatchConfig,q=0,Ie=null,Te=null,He=0,ct=0,wr=zn(0),Ne=0,Uo=null,Yn=0,Pl=0,fu=0,go=null,ot=null,pu=0,Mr=1/0,Wt=null,sl=!1,vs=null,Sn=null,Ci=!1,mn=null,ul=0,yo=0,gs=null,Ai=-1,Ii=0;function qe(){return q&6?Ce():Ai!==-1?Ai:Ai=Ce()}function kn(e){return e.mode&1?q&2&&He!==0?He&-He:rg.transition!==null?(Ii===0&&(Ii=$f()),Ii):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Ff(e.type)),e):1}function Dt(e,t,n,r){if(50<yo)throw yo=0,gs=null,Error(P(185));Ko(e,n,r),(!(q&2)||e!==Ie)&&(e===Ie&&(!(q&2)&&(Pl|=n),Ne===4&&cn(e,He)),st(e,r),n===1&&q===0&&!(t.mode&1)&&(Mr=Ce()+500,El&&Rn()))}function st(e,t){var n=e.callbackNode;rv(e,t);var r=Qi(e,e===Ie?He:0);if(r===0)n!==null&&fc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fc(n),t===1)e.tag===0?ng(od.bind(null,e)):op(od.bind(null,e)),Zv(function(){!(q&6)&&Rn()}),n=null;else{switch(Nf(r)){case 1:n=Fs;break;case 4:n=Rf;break;case 16:n=Wi;break;case 536870912:n=Lf;break;default:n=Wi}n=nm(n,Yp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yp(e,t){if(Ai=-1,Ii=0,q&6)throw Error(P(327));var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var r=Qi(e,e===Ie?He:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cl(e,r);else{t=r;var o=q;q|=2;var i=Jp();(Ie!==e||He!==t)&&(Wt=null,Mr=Ce()+500,Hn(e,t));do try{Eg();break}catch(a){Xp(e,a)}while(!0);Zs(),al.current=i,q=o,Te!==null?t=0:(Ie=null,He=0,t=Ne)}if(t!==0){if(t===2&&(o=Ha(e),o!==0&&(r=o,t=ys(e,o))),t===1)throw n=Uo,Hn(e,0),cn(e,r),st(e,Ce()),n;if(t===6)cn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Sg(o)&&(t=cl(e,r),t===2&&(i=Ha(e),i!==0&&(r=i,t=ys(e,i))),t===1))throw n=Uo,Hn(e,0),cn(e,r),st(e,Ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:An(e,ot,Wt);break;case 3:if(cn(e,r),(r&130023424)===r&&(t=pu+500-Ce(),10<t)){if(Qi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Za(An.bind(null,e,ot,Wt),t);break}An(e,ot,Wt);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Nt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wg(r/1960))-r,10<r){e.timeoutHandle=Za(An.bind(null,e,ot,Wt),r);break}An(e,ot,Wt);break;case 5:An(e,ot,Wt);break;default:throw Error(P(329))}}}return st(e,Ce()),e.callbackNode===n?Yp.bind(null,e):null}function ys(e,t){var n=go;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=cl(e,t),e!==2&&(t=ot,ot=n,t!==null&&xs(t)),e}function xs(e){ot===null?ot=e:ot.push.apply(ot,e)}function Sg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Mt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t){for(t&=~fu,t&=~Pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function od(e){if(q&6)throw Error(P(327));Pr();var t=Qi(e,0);if(!(t&1))return st(e,Ce()),null;var n=cl(e,t);if(e.tag!==0&&n===2){var r=Ha(e);r!==0&&(t=r,n=ys(e,r))}if(n===1)throw n=Uo,Hn(e,0),cn(e,t),st(e,Ce()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,ot,Wt),st(e,Ce()),null}function mu(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Mr=Ce()+500,El&&Rn())}}function Xn(e){mn!==null&&mn.tag===0&&!(q&6)&&Pr();var t=q;q|=1;var n=Ct.transition,r=oe;try{if(Ct.transition=null,oe=1,e)return e()}finally{oe=r,Ct.transition=n,q=t,!(q&6)&&Rn()}}function hu(){ct=wr.current,pe(wr)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jv(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(Ys(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ji();break;case 3:Nr(),pe(lt),pe(Xe),ou();break;case 5:ru(r);break;case 4:Nr();break;case 13:pe(ve);break;case 19:pe(ve);break;case 10:qs(r.type._context);break;case 22:case 23:hu()}n=n.return}if(Ie=e,Te=e=En(e.current,null),He=ct=t,Ne=0,Uo=null,fu=Pl=Yn=0,ot=go=null,Fn!==null){for(t=0;t<Fn.length;t++)if(n=Fn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Fn=null}return e}function Xp(e,t){do{var n=Te;try{if(Zs(),Di.current=ll,il){for(var r=ge.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}il=!1}if(Gn=0,Oe=Le=ge=null,ho=!1,Ao=0,du.current=null,n===null||n.return===null){Ne=1,Uo=t,Te=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=He,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Wc(l);if(x!==null){x.flags&=-257,Qc(x,l,a,i,t),x.mode&1&&Hc(i,u,t),t=x,s=u;var E=t.updateQueue;if(E===null){var w=new Set;w.add(s),t.updateQueue=w}else E.add(s);break e}else{if(!(t&1)){Hc(i,u,t),vu();break e}s=Error(P(426))}}else if(me&&a.mode&1){var z=Wc(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Qc(z,l,a,i,t),Xs(Dr(s,a));break e}}i=s=Dr(s,a),Ne!==4&&(Ne=2),go===null?go=[i]:go.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=Np(i,s,t);Ic(i,v);break e;case 1:a=s;var c=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Sn===null||!Sn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Dp(i,a,t);Ic(i,k);break e}}i=i.return}while(i!==null)}qp(n)}catch(T){t=T,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function Jp(){var e=al.current;return al.current=ll,e===null?ll:e}function vu(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ie===null||!(Yn&268435455)&&!(Pl&268435455)||cn(Ie,He)}function cl(e,t){var n=q;q|=2;var r=Jp();(Ie!==e||He!==t)&&(Wt=null,Hn(e,t));do try{kg();break}catch(o){Xp(e,o)}while(!0);if(Zs(),q=n,al.current=r,Te!==null)throw Error(P(261));return Ie=null,He=0,Ne}function kg(){for(;Te!==null;)Zp(Te)}function Eg(){for(;Te!==null&&!Gh();)Zp(Te)}function Zp(e){var t=tm(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?qp(e):Te=t,du.current=null}function qp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vg(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Te=null;return}}else if(n=hg(n,t,ct),n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Ne===0&&(Ne=5)}function An(e,t,n){var r=oe,o=Ct.transition;try{Ct.transition=null,oe=1,Cg(e,t,n,r)}finally{Ct.transition=o,oe=r}return null}function Cg(e,t,n,r){do Pr();while(mn!==null);if(q&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ov(e,i),e===Ie&&(Te=Ie=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ci||(Ci=!0,nm(Wi,function(){return Pr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ct.transition,Ct.transition=null;var l=oe;oe=1;var a=q;q|=4,du.current=null,yg(e,n),Kp(n,e),Hv(Xa),Ki=!!Ya,Xa=Ya=null,e.current=n,xg(n),Yh(),q=a,oe=l,Ct.transition=i}else e.current=n;if(Ci&&(Ci=!1,mn=e,ul=o),i=e.pendingLanes,i===0&&(Sn=null),Zh(n.stateNode),st(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(sl)throw sl=!1,e=vs,vs=null,e;return ul&1&&e.tag!==0&&Pr(),i=e.pendingLanes,i&1?e===gs?yo++:(yo=0,gs=e):yo=0,Rn(),null}function Pr(){if(mn!==null){var e=Nf(ul),t=Ct.transition,n=oe;try{if(Ct.transition=null,oe=16>e?16:e,mn===null)var r=!1;else{if(e=mn,mn=null,ul=0,q&6)throw Error(P(331));var o=q;for(q|=4,I=e.current;I!==null;){var i=I,l=i.child;if(I.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:vo(8,d,i)}var f=d.child;if(f!==null)f.return=d,I=f;else for(;I!==null;){d=I;var p=d.sibling,x=d.return;if(Hp(d),d===u){I=null;break}if(p!==null){p.return=x,I=p;break}I=x}}}var E=i.alternate;if(E!==null){var w=E.child;if(w!==null){E.child=null;do{var z=w.sibling;w.sibling=null,w=z}while(w!==null)}}I=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,I=l;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:vo(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,I=v;break e}I=i.return}}var c=e.current;for(I=c;I!==null;){l=I;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,I=h;else e:for(l=c;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bl(9,a)}}catch(T){ke(a,a.return,T)}if(a===l){I=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,I=k;break e}I=a.return}}if(q=o,Rn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(yl,e)}catch{}r=!0}return r}finally{oe=n,Ct.transition=t}}return!1}function id(e,t,n){t=Dr(n,t),t=Np(e,t,1),e=wn(e,t,1),t=qe(),e!==null&&(Ko(e,1,t),st(e,t))}function ke(e,t,n){if(e.tag===3)id(e,e,n);else for(;t!==null;){if(t.tag===3){id(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=Dr(n,e),e=Dp(t,e,1),t=wn(t,e,1),e=qe(),t!==null&&(Ko(t,1,e),st(t,e));break}}t=t.return}}function _g(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(He&n)===n&&(Ne===4||Ne===3&&(He&130023424)===He&&500>Ce()-pu?Hn(e,0):fu|=n),st(e,t)}function em(e,t){t===0&&(e.mode&1?(t=mi,mi<<=1,!(mi&130023424)&&(mi=4194304)):t=1);var n=qe();e=Zt(e,t),e!==null&&(Ko(e,t,n),st(e,n))}function bg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),em(e,n)}function Pg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),em(e,n)}var tm;tm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)it=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return it=!1,mg(e,t,n);it=!!(e.flags&131072)}else it=!1,me&&t.flags&1048576&&ip(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oi(e,t),e=t.pendingProps;var o=Rr(t,Xe.current);br(t,n),o=lu(null,t,r,e,o,n);var i=au();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(r)?(i=!0,Zi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,tu(t),o.updater=_l,t.stateNode=o,o._reactInternals=t,is(t,r,e,n),t=ss(null,t,r,!0,i,n)):(t.tag=0,me&&i&&Gs(t),Ze(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=zg(r),e=zt(r,e),o){case 0:t=as(null,t,r,e,n);break e;case 1:t=Yc(null,t,r,e,n);break e;case 11:t=Kc(null,t,r,e,n);break e;case 14:t=Gc(null,t,r,zt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zt(r,o),as(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zt(r,o),Yc(e,t,r,o,n);case 3:e:{if(Ip(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,dp(e,t),rl(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Dr(Error(P(423)),t),t=Xc(e,t,r,n,o);break e}else if(r!==o){o=Dr(Error(P(424)),t),t=Xc(e,t,r,n,o);break e}else for(ft=xn(t.stateNode.containerInfo.firstChild),pt=t,me=!0,$t=null,n=up(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lr(),r===o){t=qt(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return fp(t),e===null&&ns(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ja(r,o)?l=null:i!==null&&Ja(r,i)&&(t.flags|=32),Ap(e,t),Ze(e,t,l,n),t.child;case 6:return e===null&&ns(t),null;case 13:return Fp(e,t,n);case 4:return nu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$r(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zt(r,o),Kc(e,t,r,o,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ce(tl,r._currentValue),r._currentValue=l,i!==null)if(Mt(i.value,l)){if(i.children===o.children&&!lt.current){t=qt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Yt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),rs(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(P(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),rs(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,br(t,n),o=_t(o),r=r(o),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,o=zt(r,t.pendingProps),o=zt(r.type,o),Gc(e,t,r,o,n);case 15:return Mp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zt(r,o),Oi(e,t),t.tag=1,at(r)?(e=!0,Zi(t)):e=!1,br(t,n),$p(t,r,o),is(t,r,o,n),ss(null,t,r,!0,e,n);case 19:return Up(e,t,n);case 22:return Op(e,t,n)}throw Error(P(156,t.tag))};function nm(e,t){return zf(e,t)}function Tg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,n,r){return new Tg(e,t,n,r)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zg(e){if(typeof e=="function")return gu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Os)return 11;if(e===As)return 14}return 2}function En(e,t){var n=e.alternate;return n===null?(n=Et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")gu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case cr:return Wn(n.children,o,i,t);case Ms:l=8,o|=8;break;case za:return e=Et(12,n,t,o|2),e.elementType=za,e.lanes=i,e;case Ra:return e=Et(13,n,t,o),e.elementType=Ra,e.lanes=i,e;case La:return e=Et(19,n,t,o),e.elementType=La,e.lanes=i,e;case ff:return Tl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cf:l=10;break e;case df:l=9;break e;case Os:l=11;break e;case As:l=14;break e;case an:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Et(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Wn(e,t,n,r){return e=Et(7,e,r,t),e.lanes=n,e}function Tl(e,t,n,r){return e=Et(22,e,r,t),e.elementType=ff,e.lanes=n,e.stateNode={isHidden:!1},e}function ma(e,t,n){return e=Et(6,e,null,t),e.lanes=n,e}function ha(e,t,n){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function yu(e,t,n,r,o,i,l,a,s){return e=new Rg(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tu(i),e}function Lg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rm(e){if(!e)return Pn;e=e._reactInternals;e:{if(tr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(at(n))return rp(e,n,t)}return t}function om(e,t,n,r,o,i,l,a,s){return e=yu(n,r,!0,e,o,i,l,a,s),e.context=rm(null),n=e.current,r=qe(),o=kn(n),i=Yt(r,o),i.callback=t??null,wn(n,i,o),e.current.lanes=o,Ko(e,o,r),st(e,r),e}function zl(e,t,n,r){var o=t.current,i=qe(),l=kn(o);return n=rm(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wn(o,t,l),e!==null&&(Dt(e,o,l,i),Ni(e,o,l)),l}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xu(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}function $g(){return null}var im=typeof reportError=="function"?reportError:function(e){console.error(e)};function wu(e){this._internalRoot=e}Rl.prototype.render=wu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));zl(e,t,null,null)};Rl.prototype.unmount=wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xn(function(){zl(null,e,null,null)}),t[Jt]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Of();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&If(e)}};function Su(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ad(){}function Ng(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=dl(l);i.call(u)}}var l=om(t,r,e,0,null,!1,!1,"",ad);return e._reactRootContainer=l,e[Jt]=l.current,$o(e.nodeType===8?e.parentNode:e),Xn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=dl(s);a.call(u)}}var s=yu(e,0,!1,null,null,!1,!1,"",ad);return e._reactRootContainer=s,e[Jt]=s.current,$o(e.nodeType===8?e.parentNode:e),Xn(function(){zl(t,s,n,r)}),s}function $l(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=dl(l);a.call(s)}}zl(t,l,e,o)}else l=Ng(n,t,e,o,r);return dl(l)}Df=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lo(t.pendingLanes);n!==0&&(Us(t,n|1),st(t,Ce()),!(q&6)&&(Mr=Ce()+500,Rn()))}break;case 13:Xn(function(){var r=Zt(e,1);if(r!==null){var o=qe();Dt(r,e,1,o)}}),xu(e,1)}};js=function(e){if(e.tag===13){var t=Zt(e,134217728);if(t!==null){var n=qe();Dt(t,e,134217728,n)}xu(e,134217728)}};Mf=function(e){if(e.tag===13){var t=kn(e),n=Zt(e,t);if(n!==null){var r=qe();Dt(n,e,t,r)}xu(e,t)}};Of=function(){return oe};Af=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};ja=function(e,t,n){switch(t){case"input":if(Da(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=kl(r);if(!o)throw Error(P(90));mf(r),Da(r,o)}}}break;case"textarea":vf(e,n);break;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}};Ef=mu;Cf=Xn;var Dg={usingClientEntryPoint:!1,Events:[Yo,mr,kl,Sf,kf,mu]},qr={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mg={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pf(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||$g,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{yl=_i.inject(Mg),Ft=_i}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dg;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(t))throw Error(P(200));return Lg(e,t,null,n)};ht.createRoot=function(e,t){if(!Su(e))throw Error(P(299));var n=!1,r="",o=im;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=yu(e,1,!1,null,null,n,!1,r,o),e[Jt]=t.current,$o(e.nodeType===8?e.parentNode:e),new wu(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Pf(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return Xn(e)};ht.hydrate=function(e,t,n){if(!Ll(t))throw Error(P(200));return $l(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!Su(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=im;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=om(t,null,e,1,n??null,o,!1,i,l),e[Jt]=t.current,$o(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Rl(t)};ht.render=function(e,t,n){if(!Ll(t))throw Error(P(200));return $l(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!Ll(e))throw Error(P(40));return e._reactRootContainer?(Xn(function(){$l(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};ht.unstable_batchedUpdates=mu;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ll(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return $l(e,t,n,!1,r)};ht.version="18.3.1-next-f1338f8080-20240426";function lm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lm)}catch(e){console.error(e)}}lm(),lf.exports=ht;var Nl=lf.exports;const Og=Yd(Nl),Ag=Gd({__proto__:null,default:Og},[Nl]);var am,sd=Nl;am=sd.createRoot,sd.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},he.apply(this,arguments)}var Pe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pe||(Pe={}));const ud="popstate";function Ig(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return jo("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Jo(o)}return Ug(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Or(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Fg(){return Math.random().toString(36).substr(2,8)}function cd(e,t){return{usr:e.state,key:e.key,idx:t}}function jo(e,t,n,r){return n===void 0&&(n=null),he({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ln(t):t,{state:n,key:t&&t.key||r||Fg()})}function Jo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ln(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ug(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=Pe.Pop,s=null,u=d();u==null&&(u=0,l.replaceState(he({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function f(){a=Pe.Pop;let z=d(),v=z==null?null:z-u;u=z,s&&s({action:a,location:w.location,delta:v})}function p(z,v){a=Pe.Push;let c=jo(w.location,z,v);u=d()+1;let h=cd(c,u),k=w.createHref(c);try{l.pushState(h,"",k)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;o.location.assign(k)}i&&s&&s({action:a,location:w.location,delta:1})}function x(z,v){a=Pe.Replace;let c=jo(w.location,z,v);u=d();let h=cd(c,u),k=w.createHref(c);l.replaceState(h,"",k),i&&s&&s({action:a,location:w.location,delta:0})}function E(z){let v=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof z=="string"?z:Jo(z);return c=c.replace(/ $/,"%20"),J(v,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,v)}let w={get action(){return a},get location(){return e(o,l)},listen(z){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(ud,f),s=z,()=>{o.removeEventListener(ud,f),s=null}},createHref(z){return t(o,z)},createURL:E,encodeLocation(z){let v=E(z);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:x,go(z){return l.go(z)}};return w}var ae;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ae||(ae={}));const jg=new Set(["lazy","caseSensitive","path","id","index","children"]);function Vg(e){return e.index===!0}function Vo(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let l=[...n,String(i)],a=typeof o.id=="string"?o.id:l.join("-");if(J(o.index!==!0||!o.children,"Cannot specify children on an index route"),J(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Vg(o)){let s=he({},o,t(o),{id:a});return r[a]=s,s}else{let s=he({},o,t(o),{id:a,children:void 0});return r[a]=s,o.children&&(s.children=Vo(o.children,t,l,r)),s}})}function dn(e,t,n){return n===void 0&&(n="/"),Ui(e,t,n,!1)}function Ui(e,t,n,r){let o=typeof t=="string"?Ln(t):t,i=Jn(o.pathname||"/",n);if(i==null)return null;let l=sm(e);Hg(l);let a=null;for(let s=0;a==null&&s<l.length;++s){let u=t0(i);a=qg(l[s],u,r)}return a}function Bg(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function sm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(J(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Cn([r,s.relativePath]),d=n.concat(s);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sm(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Jg(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of um(i.path))o(i,l,s)}),t}function um(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=um(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Hg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Zg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Wg=/^:[\w-]+$/,Qg=3,Kg=2,Gg=1,Yg=10,Xg=-2,dd=e=>e==="*";function Jg(e,t){let n=e.split("/"),r=n.length;return n.some(dd)&&(r+=Xg),t&&(r+=Kg),n.filter(o=>!dd(o)).reduce((o,i)=>o+(Wg.test(i)?Qg:i===""?Gg:Yg),r)}function Zg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function qg(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,o={},i="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=fd({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d),p=s.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=fd({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},d)),!f)return null;Object.assign(o,f.params),l.push({params:o,pathname:Cn([i,f.pathname]),pathnameBase:o0(Cn([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=Cn([i,f.pathnameBase]))}return l}function fd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=e0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:x}=d;if(p==="*"){let w=a[f]||"";l=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const E=a[f];return x&&!E?u[p]=void 0:u[p]=(E||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function e0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Or(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function t0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Or(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function n0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Ln(e):e;return{pathname:n?n.startsWith("/")?n:r0(n,t):t,search:i0(r),hash:l0(o)}}function r0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function va(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dm(e,t){let n=cm(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fm(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Ln(e):(o=he({},e),J(!o.pathname||!o.pathname.includes("?"),va("?","pathname","search",o)),J(!o.pathname||!o.pathname.includes("#"),va("#","pathname","hash",o)),J(!o.search||!o.search.includes("#"),va("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}a=f>=0?t[f]:"/"}let s=n0(o,a),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const Cn=e=>e.join("/").replace(/\/\/+/g,"/"),o0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),i0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,l0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class fl{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Dl(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pm=["post","put","patch","delete"],a0=new Set(pm),s0=["get",...pm],u0=new Set(s0),c0=new Set([301,302,303,307,308]),d0=new Set([307,308]),ga={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},f0={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ar={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ku=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p0=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),mm="remix-router-transitions";function m0(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;J(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let m=e.detectErrorBoundary;o=y=>({hasErrorBoundary:m(y)})}else o=p0;let i={},l=Vo(e.routes,o,void 0,i),a,s=e.basename||"/",u=e.unstable_dataStrategy||w0,d=e.unstable_patchRoutesOnNavigation,f=he({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),p=null,x=new Set,E=1e3,w=new Set,z=null,v=null,c=null,h=e.hydrationData!=null,k=dn(l,e.history.location,s),T=null;if(k==null&&!d){let m=Je(404,{pathname:e.history.location.pathname}),{matches:y,route:S}=Sd(l);k=y,T={[S.id]:m}}k&&!e.hydrationData&&ri(k,l,e.history.location.pathname).active&&(k=null);let $;if(k)if(k.some(m=>m.route.lazy))$=!1;else if(!k.some(m=>m.route.loader))$=!0;else if(f.v7_partialHydration){let m=e.hydrationData?e.hydrationData.loaderData:null,y=e.hydrationData?e.hydrationData.errors:null,S=_=>_.route.loader?typeof _.route.loader=="function"&&_.route.loader.hydrate===!0?!1:m&&m[_.route.id]!==void 0||y&&y[_.route.id]!==void 0:!0;if(y){let _=k.findIndex(A=>y[A.route.id]!==void 0);$=k.slice(0,_+1).every(S)}else $=k.every(S)}else $=e.hydrationData!=null;else if($=!1,k=[],f.v7_partialHydration){let m=ri(null,l,e.history.location.pathname);m.active&&m.matches&&(k=m.matches)}let R,g={historyAction:e.history.action,location:e.history.location,matches:k,initialized:$,navigation:ga,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||T,fetchers:new Map,blockers:new Map},F=Pe.Pop,M=!1,H,G=!1,te=new Map,ie=null,_e=!1,rt=!1,xt=[],N=new Set,O=new Map,W=0,ne=-1,le=new Map,De=new Set,Ue=new Map,wt=new Map,ze=new Set,je=new Map,b=new Map,D=new Map,K;function Ve(){if(p=e.history.listen(m=>{let{action:y,location:S,delta:_}=m;if(K){K(),K=void 0;return}Or(b.size===0||_!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let A=Yu({currentLocation:g.location,nextLocation:S,historyAction:y});if(A&&_!=null){let V=new Promise(Q=>{K=Q});e.history.go(_*-1),ti(A,{state:"blocked",location:S,proceed(){ti(A,{state:"proceeding",proceed:void 0,reset:void 0,location:S}),V.then(()=>e.history.go(_))},reset(){let Q=new Map(g.blockers);Q.set(A,ar),xe({blockers:Q})}});return}return Nn(y,S)}),n){M0(t,te);let m=()=>O0(t,te);t.addEventListener("pagehide",m),ie=()=>t.removeEventListener("pagehide",m)}return g.initialized||Nn(Pe.Pop,g.location,{initialHydration:!0}),R}function Qe(){p&&p(),ie&&ie(),x.clear(),H&&H.abort(),g.fetchers.forEach((m,y)=>ei(y)),g.blockers.forEach((m,y)=>Gu(y))}function Re(m){return x.add(m),()=>x.delete(m)}function xe(m,y){y===void 0&&(y={}),g=he({},g,m);let S=[],_=[];f.v7_fetcherPersist&&g.fetchers.forEach((A,V)=>{A.state==="idle"&&(ze.has(V)?_.push(V):S.push(V))}),[...x].forEach(A=>A(g,{deletedFetchers:_,unstable_viewTransitionOpts:y.viewTransitionOpts,unstable_flushSync:y.flushSync===!0})),f.v7_fetcherPersist&&(S.forEach(A=>g.fetchers.delete(A)),_.forEach(A=>ei(A)))}function nr(m,y,S){var _,A;let{flushSync:V}=S===void 0?{}:S,Q=g.actionData!=null&&g.navigation.formMethod!=null&&Lt(g.navigation.formMethod)&&g.navigation.state==="loading"&&((_=m.state)==null?void 0:_._isRedirect)!==!0,L;y.actionData?Object.keys(y.actionData).length>0?L=y.actionData:L=null:Q?L=g.actionData:L=null;let B=y.loaderData?xd(g.loaderData,y.loaderData,y.matches||[],y.errors):g.loaderData,U=g.blockers;U.size>0&&(U=new Map(U),U.forEach((re,de)=>U.set(de,ar)));let j=M===!0||g.navigation.formMethod!=null&&Lt(g.navigation.formMethod)&&((A=m.state)==null?void 0:A._isRedirect)!==!0;a&&(l=a,a=void 0),_e||F===Pe.Pop||(F===Pe.Push?e.history.push(m,m.state):F===Pe.Replace&&e.history.replace(m,m.state));let ee;if(F===Pe.Pop){let re=te.get(g.location.pathname);re&&re.has(m.pathname)?ee={currentLocation:g.location,nextLocation:m}:te.has(m.pathname)&&(ee={currentLocation:m,nextLocation:g.location})}else if(G){let re=te.get(g.location.pathname);re?re.add(m.pathname):(re=new Set([m.pathname]),te.set(g.location.pathname,re)),ee={currentLocation:g.location,nextLocation:m}}xe(he({},y,{actionData:L,loaderData:B,historyAction:F,location:m,initialized:!0,navigation:ga,revalidation:"idle",restoreScrollPosition:Ju(m,y.matches||g.matches),preventScrollReset:j,blockers:U}),{viewTransitionOpts:ee,flushSync:V===!0}),F=Pe.Pop,M=!1,G=!1,_e=!1,rt=!1,xt=[]}async function ju(m,y){if(typeof m=="number"){e.history.go(m);return}let S=ws(g.location,g.matches,s,f.v7_prependBasename,m,f.v7_relativeSplatPath,y==null?void 0:y.fromRouteId,y==null?void 0:y.relative),{path:_,submission:A,error:V}=pd(f.v7_normalizeFormMethod,!1,S,y),Q=g.location,L=jo(g.location,_,y&&y.state);L=he({},L,e.history.encodeLocation(L));let B=y&&y.replace!=null?y.replace:void 0,U=Pe.Push;B===!0?U=Pe.Replace:B===!1||A!=null&&Lt(A.formMethod)&&A.formAction===g.location.pathname+g.location.search&&(U=Pe.Replace);let j=y&&"preventScrollReset"in y?y.preventScrollReset===!0:void 0,ee=(y&&y.unstable_flushSync)===!0,re=Yu({currentLocation:Q,nextLocation:L,historyAction:U});if(re){ti(re,{state:"blocked",location:L,proceed(){ti(re,{state:"proceeding",proceed:void 0,reset:void 0,location:L}),ju(m,y)},reset(){let de=new Map(g.blockers);de.set(re,ar),xe({blockers:de})}});return}return await Nn(U,L,{submission:A,pendingError:V,preventScrollReset:j,replace:y&&y.replace,enableViewTransition:y&&y.unstable_viewTransition,flushSync:ee})}function th(){if(jl(),xe({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Nn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Nn(F||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation,enableViewTransition:G===!0})}}async function Nn(m,y,S){H&&H.abort(),H=null,F=m,_e=(S&&S.startUninterruptedRevalidation)===!0,dh(g.location,g.matches),M=(S&&S.preventScrollReset)===!0,G=(S&&S.enableViewTransition)===!0;let _=a||l,A=S&&S.overrideNavigation,V=dn(_,y,s),Q=(S&&S.flushSync)===!0,L=ri(V,_,y.pathname);if(L.active&&L.matches&&(V=L.matches),!V){let{error:Z,notFoundMatches:Me,route:be}=Vl(y.pathname);nr(y,{matches:Me,loaderData:{},errors:{[be.id]:Z}},{flushSync:Q});return}if(g.initialized&&!rt&&b0(g.location,y)&&!(S&&S.submission&&Lt(S.submission.formMethod))){nr(y,{matches:V},{flushSync:Q});return}H=new AbortController;let B=ir(e.history,y,H.signal,S&&S.submission),U;if(S&&S.pendingError)U=[Sr(V).route.id,{type:ae.error,error:S.pendingError}];else if(S&&S.submission&&Lt(S.submission.formMethod)){let Z=await nh(B,y,S.submission,V,L.active,{replace:S.replace,flushSync:Q});if(Z.shortCircuited)return;if(Z.pendingActionResult){let[Me,be]=Z.pendingActionResult;if(dt(be)&&Dl(be.error)&&be.error.status===404){H=null,nr(y,{matches:Z.matches,loaderData:{},errors:{[Me]:be.error}});return}}V=Z.matches||V,U=Z.pendingActionResult,A=ya(y,S.submission),Q=!1,L.active=!1,B=ir(e.history,B.url,B.signal)}let{shortCircuited:j,matches:ee,loaderData:re,errors:de}=await rh(B,y,V,L.active,A,S&&S.submission,S&&S.fetcherSubmission,S&&S.replace,S&&S.initialHydration===!0,Q,U);j||(H=null,nr(y,he({matches:ee||V},wd(U),{loaderData:re,errors:de})))}async function nh(m,y,S,_,A,V){V===void 0&&(V={}),jl();let Q=N0(y,S);if(xe({navigation:Q},{flushSync:V.flushSync===!0}),A){let U=await oi(_,y.pathname,m.signal);if(U.type==="aborted")return{shortCircuited:!0};if(U.type==="error"){let{boundaryId:j,error:ee}=ni(y.pathname,U);return{matches:U.partialMatches,pendingActionResult:[j,{type:ae.error,error:ee}]}}else if(U.matches)_=U.matches;else{let{notFoundMatches:j,error:ee,route:re}=Vl(y.pathname);return{matches:j,pendingActionResult:[re.id,{type:ae.error,error:ee}]}}}let L,B=so(_,y);if(!B.route.action&&!B.route.lazy)L={type:ae.error,error:Je(405,{method:m.method,pathname:y.pathname,routeId:B.route.id})};else if(L=(await Hr("action",g,m,[B],_,null))[B.route.id],m.signal.aborted)return{shortCircuited:!0};if(jn(L)){let U;return V&&V.replace!=null?U=V.replace:U=vd(L.response.headers.get("Location"),new URL(m.url),s)===g.location.pathname+g.location.search,await Dn(m,L,!0,{submission:S,replace:U}),{shortCircuited:!0}}if(hn(L))throw Je(400,{type:"defer-action"});if(dt(L)){let U=Sr(_,B.route.id);return(V&&V.replace)!==!0&&(F=Pe.Push),{matches:_,pendingActionResult:[U.route.id,L]}}return{matches:_,pendingActionResult:[B.route.id,L]}}async function rh(m,y,S,_,A,V,Q,L,B,U,j){let ee=A||ya(y,V),re=V||Q||Ed(ee),de=!_e&&(!f.v7_partialHydration||!B);if(_){if(de){let we=Vu(j);xe(he({navigation:ee},we!==void 0?{actionData:we}:{}),{flushSync:U})}let Y=await oi(S,y.pathname,m.signal);if(Y.type==="aborted")return{shortCircuited:!0};if(Y.type==="error"){let{boundaryId:we,error:ut}=ni(y.pathname,Y);return{matches:Y.partialMatches,loaderData:{},errors:{[we]:ut}}}else if(Y.matches)S=Y.matches;else{let{error:we,notFoundMatches:ut,route:Se}=Vl(y.pathname);return{matches:ut,loaderData:{},errors:{[Se.id]:we}}}}let Z=a||l,[Me,be]=md(e.history,g,S,re,y,f.v7_partialHydration&&B===!0,f.v7_skipActionErrorRevalidation,rt,xt,N,ze,Ue,De,Z,s,j);if(Bl(Y=>!(S&&S.some(we=>we.route.id===Y))||Me&&Me.some(we=>we.route.id===Y)),ne=++W,Me.length===0&&be.length===0){let Y=Qu();return nr(y,he({matches:S,loaderData:{},errors:j&&dt(j[1])?{[j[0]]:j[1].error}:null},wd(j),Y?{fetchers:new Map(g.fetchers)}:{}),{flushSync:U}),{shortCircuited:!0}}if(de){let Y={};if(!_){Y.navigation=ee;let we=Vu(j);we!==void 0&&(Y.actionData=we)}be.length>0&&(Y.fetchers=oh(be)),xe(Y,{flushSync:U})}be.forEach(Y=>{O.has(Y.key)&&nn(Y.key),Y.controller&&O.set(Y.key,Y.controller)});let Wr=()=>be.forEach(Y=>nn(Y.key));H&&H.signal.addEventListener("abort",Wr);let{loaderResults:Vt,fetcherResults:rr}=await Bu(g,S,Me,be,m);if(m.signal.aborted)return{shortCircuited:!0};H&&H.signal.removeEventListener("abort",Wr),be.forEach(Y=>O.delete(Y.key));let rn=bi(Vt);if(rn)return await Dn(m,rn.result,!0,{replace:L}),{shortCircuited:!0};if(rn=bi(rr),rn)return De.add(rn.key),await Dn(m,rn.result,!0,{replace:L}),{shortCircuited:!0};let{loaderData:ii,errors:Bt}=yd(g,S,Me,Vt,j,be,rr,je);je.forEach((Y,we)=>{Y.subscribe(ut=>{(ut||Y.done)&&je.delete(we)})}),f.v7_partialHydration&&B&&g.errors&&Object.entries(g.errors).filter(Y=>{let[we]=Y;return!Me.some(ut=>ut.route.id===we)}).forEach(Y=>{let[we,ut]=Y;Bt=Object.assign(Bt||{},{[we]:ut})});let li=Qu(),ai=Ku(ne),si=li||ai||be.length>0;return he({matches:S,loaderData:ii,errors:Bt},si?{fetchers:new Map(g.fetchers)}:{})}function Vu(m){if(m&&!dt(m[1]))return{[m[0]]:m[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function oh(m){return m.forEach(y=>{let S=g.fetchers.get(y.key),_=eo(void 0,S?S.data:void 0);g.fetchers.set(y.key,_)}),new Map(g.fetchers)}function ih(m,y,S,_){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");O.has(m)&&nn(m);let A=(_&&_.unstable_flushSync)===!0,V=a||l,Q=ws(g.location,g.matches,s,f.v7_prependBasename,S,f.v7_relativeSplatPath,y,_==null?void 0:_.relative),L=dn(V,Q,s),B=ri(L,V,Q);if(B.active&&B.matches&&(L=B.matches),!L){jt(m,y,Je(404,{pathname:Q}),{flushSync:A});return}let{path:U,submission:j,error:ee}=pd(f.v7_normalizeFormMethod,!0,Q,_);if(ee){jt(m,y,ee,{flushSync:A});return}let re=so(L,U);if(M=(_&&_.preventScrollReset)===!0,j&&Lt(j.formMethod)){lh(m,y,U,re,L,B.active,A,j);return}Ue.set(m,{routeId:y,path:U}),ah(m,y,U,re,L,B.active,A,j)}async function lh(m,y,S,_,A,V,Q,L){jl(),Ue.delete(m);function B(Se){if(!Se.route.action&&!Se.route.lazy){let Ht=Je(405,{method:L.formMethod,pathname:S,routeId:y});return jt(m,y,Ht,{flushSync:Q}),!0}return!1}if(!V&&B(_))return;let U=g.fetchers.get(m);tn(m,D0(L,U),{flushSync:Q});let j=new AbortController,ee=ir(e.history,S,j.signal,L);if(V){let Se=await oi(A,S,ee.signal);if(Se.type==="aborted")return;if(Se.type==="error"){let{error:Ht}=ni(S,Se);jt(m,y,Ht,{flushSync:Q});return}else if(Se.matches){if(A=Se.matches,_=so(A,S),B(_))return}else{jt(m,y,Je(404,{pathname:S}),{flushSync:Q});return}}O.set(m,j);let re=W,Z=(await Hr("action",g,ee,[_],A,m))[_.route.id];if(ee.signal.aborted){O.get(m)===j&&O.delete(m);return}if(f.v7_fetcherPersist&&ze.has(m)){if(jn(Z)||dt(Z)){tn(m,ln(void 0));return}}else{if(jn(Z))if(O.delete(m),ne>re){tn(m,ln(void 0));return}else return De.add(m),tn(m,eo(L)),Dn(ee,Z,!1,{fetcherSubmission:L});if(dt(Z)){jt(m,y,Z.error);return}}if(hn(Z))throw Je(400,{type:"defer-action"});let Me=g.navigation.location||g.location,be=ir(e.history,Me,j.signal),Wr=a||l,Vt=g.navigation.state!=="idle"?dn(Wr,g.navigation.location,s):g.matches;J(Vt,"Didn't find any matches after fetcher action");let rr=++W;le.set(m,rr);let rn=eo(L,Z.data);g.fetchers.set(m,rn);let[ii,Bt]=md(e.history,g,Vt,L,Me,!1,f.v7_skipActionErrorRevalidation,rt,xt,N,ze,Ue,De,Wr,s,[_.route.id,Z]);Bt.filter(Se=>Se.key!==m).forEach(Se=>{let Ht=Se.key,qu=g.fetchers.get(Ht),mh=eo(void 0,qu?qu.data:void 0);g.fetchers.set(Ht,mh),O.has(Ht)&&nn(Ht),Se.controller&&O.set(Ht,Se.controller)}),xe({fetchers:new Map(g.fetchers)});let li=()=>Bt.forEach(Se=>nn(Se.key));j.signal.addEventListener("abort",li);let{loaderResults:ai,fetcherResults:si}=await Bu(g,Vt,ii,Bt,be);if(j.signal.aborted)return;j.signal.removeEventListener("abort",li),le.delete(m),O.delete(m),Bt.forEach(Se=>O.delete(Se.key));let Y=bi(ai);if(Y)return Dn(be,Y.result,!1);if(Y=bi(si),Y)return De.add(Y.key),Dn(be,Y.result,!1);let{loaderData:we,errors:ut}=yd(g,Vt,ii,ai,void 0,Bt,si,je);if(g.fetchers.has(m)){let Se=ln(Z.data);g.fetchers.set(m,Se)}Ku(rr),g.navigation.state==="loading"&&rr>ne?(J(F,"Expected pending action"),H&&H.abort(),nr(g.navigation.location,{matches:Vt,loaderData:we,errors:ut,fetchers:new Map(g.fetchers)})):(xe({errors:ut,loaderData:xd(g.loaderData,we,Vt,ut),fetchers:new Map(g.fetchers)}),rt=!1)}async function ah(m,y,S,_,A,V,Q,L){let B=g.fetchers.get(m);tn(m,eo(L,B?B.data:void 0),{flushSync:Q});let U=new AbortController,j=ir(e.history,S,U.signal);if(V){let Z=await oi(A,S,j.signal);if(Z.type==="aborted")return;if(Z.type==="error"){let{error:Me}=ni(S,Z);jt(m,y,Me,{flushSync:Q});return}else if(Z.matches)A=Z.matches,_=so(A,S);else{jt(m,y,Je(404,{pathname:S}),{flushSync:Q});return}}O.set(m,U);let ee=W,de=(await Hr("loader",g,j,[_],A,m))[_.route.id];if(hn(de)&&(de=await Eu(de,j.signal,!0)||de),O.get(m)===U&&O.delete(m),!j.signal.aborted){if(ze.has(m)){tn(m,ln(void 0));return}if(jn(de))if(ne>ee){tn(m,ln(void 0));return}else{De.add(m),await Dn(j,de,!1);return}if(dt(de)){jt(m,y,de.error);return}J(!hn(de),"Unhandled fetcher deferred data"),tn(m,ln(de.data))}}async function Dn(m,y,S,_){let{submission:A,fetcherSubmission:V,replace:Q}=_===void 0?{}:_;y.response.headers.has("X-Remix-Revalidate")&&(rt=!0);let L=y.response.headers.get("Location");J(L,"Expected a Location header on the redirect Response"),L=vd(L,new URL(m.url),s);let B=jo(g.location,L,{_isRedirect:!0});if(n){let Z=!1;if(y.response.headers.has("X-Remix-Reload-Document"))Z=!0;else if(ku.test(L)){const Me=e.history.createURL(L);Z=Me.origin!==t.location.origin||Jn(Me.pathname,s)==null}if(Z){Q?t.location.replace(L):t.location.assign(L);return}}H=null;let U=Q===!0||y.response.headers.has("X-Remix-Replace")?Pe.Replace:Pe.Push,{formMethod:j,formAction:ee,formEncType:re}=g.navigation;!A&&!V&&j&&ee&&re&&(A=Ed(g.navigation));let de=A||V;if(d0.has(y.response.status)&&de&&Lt(de.formMethod))await Nn(U,B,{submission:he({},de,{formAction:L}),preventScrollReset:M,enableViewTransition:S?G:void 0});else{let Z=ya(B,A);await Nn(U,B,{overrideNavigation:Z,fetcherSubmission:V,preventScrollReset:M,enableViewTransition:S?G:void 0})}}async function Hr(m,y,S,_,A,V){let Q,L={};try{Q=await S0(u,m,y,S,_,A,V,i,o)}catch(B){return _.forEach(U=>{L[U.route.id]={type:ae.error,error:B}}),L}for(let[B,U]of Object.entries(Q))if(T0(U)){let j=U.result;L[B]={type:ae.redirect,response:C0(j,S,B,A,s,f.v7_relativeSplatPath)}}else L[B]=await E0(U);return L}async function Bu(m,y,S,_,A){let V=m.matches,Q=Hr("loader",m,A,S,y,null),L=Promise.all(_.map(async j=>{if(j.matches&&j.match&&j.controller){let re=(await Hr("loader",m,ir(e.history,j.path,j.controller.signal),[j.match],j.matches,j.key))[j.match.route.id];return{[j.key]:re}}else return Promise.resolve({[j.key]:{type:ae.error,error:Je(404,{pathname:j.path})}})})),B=await Q,U=(await L).reduce((j,ee)=>Object.assign(j,ee),{});return await Promise.all([L0(y,B,A.signal,V,m.loaderData),$0(y,U,_)]),{loaderResults:B,fetcherResults:U}}function jl(){rt=!0,xt.push(...Bl()),Ue.forEach((m,y)=>{O.has(y)&&(N.add(y),nn(y))})}function tn(m,y,S){S===void 0&&(S={}),g.fetchers.set(m,y),xe({fetchers:new Map(g.fetchers)},{flushSync:(S&&S.flushSync)===!0})}function jt(m,y,S,_){_===void 0&&(_={});let A=Sr(g.matches,y);ei(m),xe({errors:{[A.route.id]:S},fetchers:new Map(g.fetchers)},{flushSync:(_&&_.flushSync)===!0})}function Hu(m){return f.v7_fetcherPersist&&(wt.set(m,(wt.get(m)||0)+1),ze.has(m)&&ze.delete(m)),g.fetchers.get(m)||f0}function ei(m){let y=g.fetchers.get(m);O.has(m)&&!(y&&y.state==="loading"&&le.has(m))&&nn(m),Ue.delete(m),le.delete(m),De.delete(m),ze.delete(m),N.delete(m),g.fetchers.delete(m)}function sh(m){if(f.v7_fetcherPersist){let y=(wt.get(m)||0)-1;y<=0?(wt.delete(m),ze.add(m)):wt.set(m,y)}else ei(m);xe({fetchers:new Map(g.fetchers)})}function nn(m){let y=O.get(m);J(y,"Expected fetch controller: "+m),y.abort(),O.delete(m)}function Wu(m){for(let y of m){let S=Hu(y),_=ln(S.data);g.fetchers.set(y,_)}}function Qu(){let m=[],y=!1;for(let S of De){let _=g.fetchers.get(S);J(_,"Expected fetcher: "+S),_.state==="loading"&&(De.delete(S),m.push(S),y=!0)}return Wu(m),y}function Ku(m){let y=[];for(let[S,_]of le)if(_<m){let A=g.fetchers.get(S);J(A,"Expected fetcher: "+S),A.state==="loading"&&(nn(S),le.delete(S),y.push(S))}return Wu(y),y.length>0}function uh(m,y){let S=g.blockers.get(m)||ar;return b.get(m)!==y&&b.set(m,y),S}function Gu(m){g.blockers.delete(m),b.delete(m)}function ti(m,y){let S=g.blockers.get(m)||ar;J(S.state==="unblocked"&&y.state==="blocked"||S.state==="blocked"&&y.state==="blocked"||S.state==="blocked"&&y.state==="proceeding"||S.state==="blocked"&&y.state==="unblocked"||S.state==="proceeding"&&y.state==="unblocked","Invalid blocker state transition: "+S.state+" -> "+y.state);let _=new Map(g.blockers);_.set(m,y),xe({blockers:_})}function Yu(m){let{currentLocation:y,nextLocation:S,historyAction:_}=m;if(b.size===0)return;b.size>1&&Or(!1,"A router only supports one blocker at a time");let A=Array.from(b.entries()),[V,Q]=A[A.length-1],L=g.blockers.get(V);if(!(L&&L.state==="proceeding")&&Q({currentLocation:y,nextLocation:S,historyAction:_}))return V}function Vl(m){let y=Je(404,{pathname:m}),S=a||l,{matches:_,route:A}=Sd(S);return Bl(),{notFoundMatches:_,route:A,error:y}}function ni(m,y){return{boundaryId:Sr(y.partialMatches).route.id,error:Je(400,{type:"route-discovery",pathname:m,message:y.error!=null&&"message"in y.error?y.error:String(y.error)})}}function Bl(m){let y=[];return je.forEach((S,_)=>{(!m||m(_))&&(S.cancel(),y.push(_),je.delete(_))}),y}function ch(m,y,S){if(z=m,c=y,v=S||null,!h&&g.navigation===ga){h=!0;let _=Ju(g.location,g.matches);_!=null&&xe({restoreScrollPosition:_})}return()=>{z=null,c=null,v=null}}function Xu(m,y){return v&&v(m,y.map(_=>Bg(_,g.loaderData)))||m.key}function dh(m,y){if(z&&c){let S=Xu(m,y);z[S]=c()}}function Ju(m,y){if(z){let S=Xu(m,y),_=z[S];if(typeof _=="number")return _}return null}function ri(m,y,S){if(d){if(w.has(S))return{active:!1,matches:m};if(m){if(Object.keys(m[0].params).length>0)return{active:!0,matches:Ui(y,S,s,!0)}}else return{active:!0,matches:Ui(y,S,s,!0)||[]}}return{active:!1,matches:null}}async function oi(m,y,S){let _=m;for(;;){let A=a==null,V=a||l;try{await y0(d,y,_,V,i,o,D,S)}catch(B){return{type:"error",error:B,partialMatches:_}}finally{A&&(l=[...l])}if(S.aborted)return{type:"aborted"};let Q=dn(V,y,s);if(Q)return Zu(y,w),{type:"success",matches:Q};let L=Ui(V,y,s,!0);if(!L||_.length===L.length&&_.every((B,U)=>B.route.id===L[U].route.id))return Zu(y,w),{type:"success",matches:null};_=L}}function Zu(m,y){if(y.size>=E){let S=y.values().next().value;y.delete(S)}y.add(m)}function fh(m){i={},a=Vo(m,o,void 0,i)}function ph(m,y){let S=a==null;vm(m,y,a||l,i,o),S&&(l=[...l],xe({}))}return R={get basename(){return s},get future(){return f},get state(){return g},get routes(){return l},get window(){return t},initialize:Ve,subscribe:Re,enableScrollRestoration:ch,navigate:ju,fetch:ih,revalidate:th,createHref:m=>e.history.createHref(m),encodeLocation:m=>e.history.encodeLocation(m),getFetcher:Hu,deleteFetcher:sh,dispose:Qe,getBlocker:uh,deleteBlocker:Gu,patchRoutes:ph,_internalFetchControllers:O,_internalActiveDeferreds:je,_internalSetRoutes:fh},R}function h0(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function ws(e,t,n,r,o,i,l,a){let s,u;if(l){s=[];for(let f of t)if(s.push(f),f.route.id===l){u=f;break}}else s=t,u=t[t.length-1];let d=fm(o||".",dm(s,i),Jn(e.pathname,n)||e.pathname,a==="path");return o==null&&(d.search=e.search,d.hash=e.hash),(o==null||o===""||o===".")&&u&&u.route.index&&!Cu(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Cn([n,d.pathname])),Jo(d)}function pd(e,t,n,r){if(!r||!h0(r))return{path:n};if(r.formMethod&&!R0(r.formMethod))return{path:n,error:Je(405,{method:r.formMethod})};let o=()=>({path:n,error:Je(400,{type:"invalid-body"})}),i=r.formMethod||"get",l=e?i.toUpperCase():i.toLowerCase(),a=gm(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Lt(l))return o();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((x,E)=>{let[w,z]=E;return""+x+w+"="+z+`
`},""):String(r.body);return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!Lt(l))return o();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return o()}}}J(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=Ss(r.formData),u=r.formData;else if(r.body instanceof FormData)s=Ss(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=gd(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=gd(s)}catch{return o()}let d={formMethod:l,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Lt(d.formMethod))return{path:n,submission:d};let f=Ln(n);return t&&f.search&&Cu(f.search)&&s.append("index",""),f.search="?"+s,{path:Jo(f),submission:d}}function v0(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function md(e,t,n,r,o,i,l,a,s,u,d,f,p,x,E,w){let z=w?dt(w[1])?w[1].error:w[1].data:void 0,v=e.createURL(t.location),c=e.createURL(o),h=w&&dt(w[1])?w[0]:void 0,k=h?v0(n,h):n,T=w?w[1].statusCode:void 0,$=l&&T&&T>=400,R=k.filter((F,M)=>{let{route:H}=F;if(H.lazy)return!0;if(H.loader==null)return!1;if(i)return typeof H.loader!="function"||H.loader.hydrate?!0:t.loaderData[H.id]===void 0&&(!t.errors||t.errors[H.id]===void 0);if(g0(t.loaderData,t.matches[M],F)||s.some(ie=>ie===F.route.id))return!0;let G=t.matches[M],te=F;return hd(F,he({currentUrl:v,currentParams:G.params,nextUrl:c,nextParams:te.params},r,{actionResult:z,actionStatus:T,defaultShouldRevalidate:$?!1:a||v.pathname+v.search===c.pathname+c.search||v.search!==c.search||hm(G,te)}))}),g=[];return f.forEach((F,M)=>{if(i||!n.some(_e=>_e.route.id===F.routeId)||d.has(M))return;let H=dn(x,F.path,E);if(!H){g.push({key:M,routeId:F.routeId,path:F.path,matches:null,match:null,controller:null});return}let G=t.fetchers.get(M),te=so(H,F.path),ie=!1;p.has(M)?ie=!1:u.has(M)?(u.delete(M),ie=!0):G&&G.state!=="idle"&&G.data===void 0?ie=a:ie=hd(te,he({currentUrl:v,currentParams:t.matches[t.matches.length-1].params,nextUrl:c,nextParams:n[n.length-1].params},r,{actionResult:z,actionStatus:T,defaultShouldRevalidate:$?!1:a})),ie&&g.push({key:M,routeId:F.routeId,path:F.path,matches:H,match:te,controller:new AbortController})}),[R,g]}function g0(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function hm(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function hd(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function y0(e,t,n,r,o,i,l,a){let s=[t,...n.map(u=>u.route.id)].join("-");try{let u=l.get(s);u||(u=e({path:t,matches:n,patch:(d,f)=>{a.aborted||vm(d,f,r,o,i)}}),l.set(s,u)),u&&P0(u)&&await u}finally{l.delete(s)}}function vm(e,t,n,r,o){if(e){var i;let l=r[e];J(l,"No route found to patch children into: routeId = "+e);let a=Vo(t,o,[e,"patch",String(((i=l.children)==null?void 0:i.length)||"0")],r);l.children?l.children.push(...a):l.children=a}else{let l=Vo(t,o,["patch",String(n.length||"0")],r);n.push(...l)}}async function x0(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];J(o,"No route found in manifest");let i={};for(let l in r){let s=o[l]!==void 0&&l!=="hasErrorBoundary";Or(!s,'Route "'+o.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!s&&!jg.has(l)&&(i[l]=r[l])}Object.assign(o,i),Object.assign(o,he({},t(o),{lazy:void 0}))}async function w0(e){let{matches:t}=e,n=t.filter(o=>o.shouldLoad);return(await Promise.all(n.map(o=>o.resolve()))).reduce((o,i,l)=>Object.assign(o,{[n[l].route.id]:i}),{})}async function S0(e,t,n,r,o,i,l,a,s,u){let d=i.map(x=>x.route.lazy?x0(x.route,s,a):void 0),f=i.map((x,E)=>{let w=d[E],z=o.some(c=>c.route.id===x.route.id);return he({},x,{shouldLoad:z,resolve:async c=>(c&&r.method==="GET"&&(x.route.lazy||x.route.loader)&&(z=!0),z?k0(t,r,x,w,c,u):Promise.resolve({type:ae.data,result:void 0}))})}),p=await e({matches:f,request:r,params:i[0].params,fetcherKey:l,context:u});try{await Promise.all(d)}catch{}return p}async function k0(e,t,n,r,o,i){let l,a,s=u=>{let d,f=new Promise((E,w)=>d=w);a=()=>d(),t.signal.addEventListener("abort",a);let p=E=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:i},...E!==void 0?[E]:[]),x=(async()=>{try{return{type:"data",result:await(o?o(w=>p(w)):p())}}catch(E){return{type:"error",result:E}}})();return Promise.race([x,f])};try{let u=n.route[e];if(r)if(u){let d,[f]=await Promise.all([s(u).catch(p=>{d=p}),r]);if(d!==void 0)throw d;l=f}else if(await r,u=n.route[e],u)l=await s(u);else if(e==="action"){let d=new URL(t.url),f=d.pathname+d.search;throw Je(405,{method:t.method,pathname:f,routeId:n.route.id})}else return{type:ae.data,result:void 0};else if(u)l=await s(u);else{let d=new URL(t.url),f=d.pathname+d.search;throw Je(404,{pathname:f})}J(l.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:ae.error,result:u}}finally{a&&t.signal.removeEventListener("abort",a)}return l}async function E0(e){let{result:t,type:n}=e;if(ym(t)){let u;try{let d=t.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?t.body==null?u=null:u=await t.json():u=await t.text()}catch(d){return{type:ae.error,error:d}}return n===ae.error?{type:ae.error,error:new fl(t.status,t.statusText,u),statusCode:t.status,headers:t.headers}:{type:ae.data,data:u,statusCode:t.status,headers:t.headers}}if(n===ae.error){if(kd(t)){var r;if(t.data instanceof Error){var o;return{type:ae.error,error:t.data,statusCode:(o=t.init)==null?void 0:o.status}}t=new fl(((r=t.init)==null?void 0:r.status)||500,void 0,t.data)}return{type:ae.error,error:t,statusCode:Dl(t)?t.status:void 0}}if(z0(t)){var i,l;return{type:ae.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((l=t.init)==null?void 0:l.headers)&&new Headers(t.init.headers)}}if(kd(t)){var a,s;return{type:ae.data,data:t.data,statusCode:(a=t.init)==null?void 0:a.status,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}}return{type:ae.data,data:t}}function C0(e,t,n,r,o,i){let l=e.headers.get("Location");if(J(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!ku.test(l)){let a=r.slice(0,r.findIndex(s=>s.route.id===n)+1);l=ws(new URL(t.url),a,o,!0,l,i),e.headers.set("Location",l)}return e}function vd(e,t,n){if(ku.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=Jn(o.pathname,n)!=null;if(o.origin===t.origin&&i)return o.pathname+o.search+o.hash}return e}function ir(e,t,n,r){let o=e.createURL(gm(t)).toString(),i={signal:n};if(r&&Lt(r.formMethod)){let{formMethod:l,formEncType:a}=r;i.method=l.toUpperCase(),a==="application/json"?(i.headers=new Headers({"Content-Type":a}),i.body=JSON.stringify(r.json)):a==="text/plain"?i.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?i.body=Ss(r.formData):i.body=r.formData}return new Request(o,i)}function Ss(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function gd(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function _0(e,t,n,r,o){let i={},l=null,a,s=!1,u={},d=n&&dt(n[1])?n[1].error:void 0;return e.forEach(f=>{if(!(f.route.id in t))return;let p=f.route.id,x=t[p];if(J(!jn(x),"Cannot handle redirect results in processLoaderData"),dt(x)){let E=x.error;d!==void 0&&(E=d,d=void 0),l=l||{};{let w=Sr(e,p);l[w.route.id]==null&&(l[w.route.id]=E)}i[p]=void 0,s||(s=!0,a=Dl(x.error)?x.error.status:500),x.headers&&(u[p]=x.headers)}else hn(x)?(r.set(p,x.deferredData),i[p]=x.deferredData.data,x.statusCode!=null&&x.statusCode!==200&&!s&&(a=x.statusCode),x.headers&&(u[p]=x.headers)):(i[p]=x.data,x.statusCode&&x.statusCode!==200&&!s&&(a=x.statusCode),x.headers&&(u[p]=x.headers))}),d!==void 0&&n&&(l={[n[0]]:d},i[n[0]]=void 0),{loaderData:i,errors:l,statusCode:a||200,loaderHeaders:u}}function yd(e,t,n,r,o,i,l,a){let{loaderData:s,errors:u}=_0(t,r,o,a);return i.forEach(d=>{let{key:f,match:p,controller:x}=d,E=l[f];if(J(E,"Did not find corresponding fetcher result"),!(x&&x.signal.aborted))if(dt(E)){let w=Sr(e.matches,p==null?void 0:p.route.id);u&&u[w.route.id]||(u=he({},u,{[w.route.id]:E.error})),e.fetchers.delete(f)}else if(jn(E))J(!1,"Unhandled fetcher revalidation redirect");else if(hn(E))J(!1,"Unhandled fetcher deferred data");else{let w=ln(E.data);e.fetchers.set(f,w)}}),{loaderData:s,errors:u}}function xd(e,t,n,r){let o=he({},t);for(let i of n){let l=i.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(o[l]=t[l]):e[l]!==void 0&&i.route.loader&&(o[l]=e[l]),r&&r.hasOwnProperty(l))break}return o}function wd(e){return e?dt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Sr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Sd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Je(e,t){let{pathname:n,routeId:r,method:o,type:i,message:l}=t===void 0?{}:t,a="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(a="Bad Request",i==="route-discovery"?s='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+l):o&&n&&r?s="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(a="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",s='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",o&&n&&r?s="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new fl(e||500,a,new Error(s),!0)}function bi(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,o]=t[n];if(jn(o))return{key:r,result:o}}}function gm(e){let t=typeof e=="string"?Ln(e):e;return Jo(he({},t,{hash:""}))}function b0(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function P0(e){return typeof e=="object"&&e!=null&&"then"in e}function T0(e){return ym(e.result)&&c0.has(e.result.status)}function hn(e){return e.type===ae.deferred}function dt(e){return e.type===ae.error}function jn(e){return(e&&e.type)===ae.redirect}function kd(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function z0(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function ym(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function R0(e){return u0.has(e.toLowerCase())}function Lt(e){return a0.has(e.toLowerCase())}async function L0(e,t,n,r,o){let i=Object.entries(t);for(let l=0;l<i.length;l++){let[a,s]=i[l],u=e.find(p=>(p==null?void 0:p.route.id)===a);if(!u)continue;let d=r.find(p=>p.route.id===u.route.id),f=d!=null&&!hm(d,u)&&(o&&o[u.route.id])!==void 0;hn(s)&&f&&await Eu(s,n,!1).then(p=>{p&&(t[a]=p)})}}async function $0(e,t,n){for(let r=0;r<n.length;r++){let{key:o,routeId:i,controller:l}=n[r],a=t[o];e.find(u=>(u==null?void 0:u.route.id)===i)&&hn(a)&&(J(l,"Expected an AbortController for revalidating fetcher deferred result"),await Eu(a,l.signal,!0).then(u=>{u&&(t[o]=u)}))}}async function Eu(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ae.data,data:e.deferredData.unwrappedData}}catch(o){return{type:ae.error,error:o}}return{type:ae.data,data:e.deferredData.data}}}function Cu(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function so(e,t){let n=typeof t=="string"?Ln(t).search:t.search;if(e[e.length-1].route.index&&Cu(n||""))return e[e.length-1];let r=cm(e);return r[r.length-1]}function Ed(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:l}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}}}function ya(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function N0(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function eo(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function D0(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function ln(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function M0(e,t){try{let n=e.sessionStorage.getItem(mm);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function O0(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(mm,JSON.stringify(n))}catch(r){Or(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ar(){return Ar=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ar.apply(this,arguments)}const Ml=C.createContext(null),xm=C.createContext(null),Ol=C.createContext(null),_u=C.createContext(null),Br=C.createContext({outlet:null,matches:[],isDataRoute:!1}),wm=C.createContext(null);function Al(){return C.useContext(_u)!=null}function bu(){return Al()||J(!1),C.useContext(_u).location}function Sm(e){C.useContext(Ol).static||C.useLayoutEffect(e)}function km(){let{isDataRoute:e}=C.useContext(Br);return e?G0():A0()}function A0(){Al()||J(!1);let e=C.useContext(Ml),{basename:t,future:n,navigator:r}=C.useContext(Ol),{matches:o}=C.useContext(Br),{pathname:i}=bu(),l=JSON.stringify(dm(o,n.v7_relativeSplatPath)),a=C.useRef(!1);return Sm(()=>{a.current=!0}),C.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=fm(u,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Cn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,l,i,e])}function I0(e,t,n,r){Al()||J(!1);let{navigator:o}=C.useContext(Ol),{matches:i}=C.useContext(Br),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=bu(),d;d=u;let f=d.pathname||"/",p=f;if(s!=="/"){let w=s.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let x=dn(e,{pathname:p});return B0(x&&x.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Cn([s,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:Cn([s,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n,r)}function F0(){let e=W0(),t=Dl(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,null)}const U0=C.createElement(F0,null);class j0 extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(Br.Provider,{value:this.props.routeContext},C.createElement(wm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function V0(e){let{routeContext:t,match:n,children:r}=e,o=C.useContext(Ml);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Br.Provider,{value:t},r)}function B0(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||J(!1),l=l.slice(0,Math.min(l.length,d+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let f=l[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:x}=n,E=f.route.loader&&p[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||E){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,f,p)=>{let x,E=!1,w=null,z=null;n&&(x=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||U0,s&&(u<0&&p===0?(Y0("route-fallback"),E=!0,z=null):u===p&&(E=!0,z=f.route.hydrateFallbackElement||null)));let v=t.concat(l.slice(0,p+1)),c=()=>{let h;return x?h=w:E?h=z:f.route.Component?h=C.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=d,C.createElement(V0,{match:f,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?C.createElement(j0,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:c(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):c()},null)}var Pu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Pu||{}),Bo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bo||{});function Em(e){let t=C.useContext(Ml);return t||J(!1),t}function Cm(e){let t=C.useContext(xm);return t||J(!1),t}function H0(e){let t=C.useContext(Br);return t||J(!1),t}function _m(e){let t=H0(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function W0(){var e;let t=C.useContext(wm),n=Cm(Bo.UseRouteError),r=_m(Bo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}let Q0=0;function K0(e){let{router:t,basename:n}=Em(Pu.UseBlocker),r=Cm(Bo.UseBlocker),[o,i]=C.useState(""),l=C.useCallback(a=>{if(typeof e!="function")return!!e;if(n==="/")return e(a);let{currentLocation:s,nextLocation:u,historyAction:d}=a;return e({currentLocation:Ar({},s,{pathname:Jn(s.pathname,n)||s.pathname}),nextLocation:Ar({},u,{pathname:Jn(u.pathname,n)||u.pathname}),historyAction:d})},[n,e]);return C.useEffect(()=>{let a=String(++Q0);return i(a),()=>t.deleteBlocker(a)},[t]),C.useEffect(()=>{o!==""&&t.getBlocker(o,l)},[t,o,l]),o&&r.blockers.has(o)?r.blockers.get(o):ar}function G0(){let{router:e}=Em(Pu.UseNavigateStable),t=_m(Bo.UseNavigateStable),n=C.useRef(!1);return Sm(()=>{n.current=!0}),C.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ar({fromRouteId:t},i)))},[e,t])}const Cd={};function Y0(e,t,n){Cd[e]||(Cd[e]=!0)}function X0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Pe.Pop,navigator:i,static:l=!1,future:a}=e;Al()&&J(!1);let s=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:s,navigator:i,static:l,future:Ar({v7_relativeSplatPath:!1},a)}),[s,a,i,l]);typeof r=="string"&&(r=Ln(r));let{pathname:d="/",search:f="",hash:p="",state:x=null,key:E="default"}=r,w=C.useMemo(()=>{let z=Jn(d,s);return z==null?null:{location:{pathname:z,search:f,hash:p,state:x,key:E},navigationType:o}},[s,d,f,p,x,E,o]);return w==null?null:C.createElement(Ol.Provider,{value:u},C.createElement(_u.Provider,{children:n,value:w}))}new Promise(()=>{});function J0(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:C.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:C.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:C.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pl.apply(this,arguments)}const Z0="6";try{window.__reactRouterVersion=Z0}catch{}function q0(e,t){return m0({basename:t==null?void 0:t.basename,future:pl({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Ig({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||ey(),routes:e,mapRouteProperties:J0,unstable_dataStrategy:t==null?void 0:t.unstable_dataStrategy,unstable_patchRoutesOnNavigation:t==null?void 0:t.unstable_patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function ey(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=pl({},t,{errors:ty(t.errors)})),t}function ty(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new fl(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let l=new i(o.message);l.stack="",n[r]=l}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const ny=C.createContext({isTransitioning:!1}),ry=C.createContext(new Map),oy="startTransition",_d=Lh[oy],iy="flushSync",bd=Ag[iy];function ly(e){_d?_d(e):e()}function to(e){bd?bd(e):e()}class ay{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function sy(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=C.useState(n.state),[l,a]=C.useState(),[s,u]=C.useState({isTransitioning:!1}),[d,f]=C.useState(),[p,x]=C.useState(),[E,w]=C.useState(),z=C.useRef(new Map),{v7_startTransition:v}=r||{},c=C.useCallback(g=>{v?ly(g):g()},[v]),h=C.useCallback((g,F)=>{let{deletedFetchers:M,unstable_flushSync:H,unstable_viewTransitionOpts:G}=F;M.forEach(ie=>z.current.delete(ie)),g.fetchers.forEach((ie,_e)=>{ie.data!==void 0&&z.current.set(_e,ie.data)});let te=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!G||te){H?to(()=>i(g)):c(()=>i(g));return}if(H){to(()=>{p&&(d&&d.resolve(),p.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:G.currentLocation,nextLocation:G.nextLocation})});let ie=n.window.document.startViewTransition(()=>{to(()=>i(g))});ie.finished.finally(()=>{to(()=>{f(void 0),x(void 0),a(void 0),u({isTransitioning:!1})})}),to(()=>x(ie));return}p?(d&&d.resolve(),p.skipTransition(),w({state:g,currentLocation:G.currentLocation,nextLocation:G.nextLocation})):(a(g),u({isTransitioning:!0,flushSync:!1,currentLocation:G.currentLocation,nextLocation:G.nextLocation}))},[n.window,p,d,z,c]);C.useLayoutEffect(()=>n.subscribe(h),[n,h]),C.useEffect(()=>{s.isTransitioning&&!s.flushSync&&f(new ay)},[s]),C.useEffect(()=>{if(d&&l&&n.window){let g=l,F=d.promise,M=n.window.document.startViewTransition(async()=>{c(()=>i(g)),await F});M.finished.finally(()=>{f(void 0),x(void 0),a(void 0),u({isTransitioning:!1})}),x(M)}},[c,l,d,n.window]),C.useEffect(()=>{d&&l&&o.location.key===l.location.key&&d.resolve()},[d,p,o.location,l]),C.useEffect(()=>{!s.isTransitioning&&E&&(a(E.state),u({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),w(void 0))},[s.isTransitioning,E]),C.useEffect(()=>{},[]);let k=C.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,F,M)=>n.navigate(g,{state:F,preventScrollReset:M==null?void 0:M.preventScrollReset}),replace:(g,F,M)=>n.navigate(g,{replace:!0,state:F,preventScrollReset:M==null?void 0:M.preventScrollReset})}),[n]),T=n.basename||"/",$=C.useMemo(()=>({router:n,navigator:k,static:!1,basename:T}),[n,k,T]),R=C.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return C.createElement(C.Fragment,null,C.createElement(Ml.Provider,{value:$},C.createElement(xm.Provider,{value:o},C.createElement(ry.Provider,{value:z.current},C.createElement(ny.Provider,{value:s},C.createElement(X0,{basename:T,location:o.location,navigationType:o.historyAction,navigator:k,future:R},o.initialized||n.future.v7_partialHydration?C.createElement(uy,{routes:n.routes,future:n.future,state:o}):t))))),null)}const uy=C.memo(cy);function cy(e){let{routes:t,future:n,state:r}=e;return I0(t,void 0,r,n)}var Pd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pd||(Pd={}));var Td;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Td||(Td={}));const dy="modulepreload",fy=function(e,t){return new URL(e,t).href},zd={},ks=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=fy(u,r),u in zd)return;zd[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!r)for(let E=l.length-1;E>=0;E--){const w=l[E];if(w.href===u&&(!d||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const x=document.createElement("link");if(x.rel=d?"stylesheet":dy,d||(x.as="script"),x.crossOrigin="",x.href=u,s&&x.setAttribute("nonce",s),document.head.appendChild(x),d)return new Promise((E,w)=>{x.addEventListener("load",E),x.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var xa,$e;(function(e){e.CONNECTED="connected",e.LOADING="loading",e.RECONNECTING="reconnecting",e.CONNECTION_LOST="connection-lost"})($e||($e={}));class py{constructor(t){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=t,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(n=>{var r;(r=n.active)===null||r===void 0||r.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(t){this.stateChangeListeners.add(t)}removeStateChangeListener(t){this.stateChangeListeners.delete(t)}loadingStarted(){this.state=$e.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount($e.CONNECTED)}loadingFailed(){this.decreaseLoadingCount($e.CONNECTION_LOST)}decreaseLoadingCount(t){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=t))}get state(){return this.connectionState}set state(t){if(t!==this.connectionState){const n=this.connectionState;this.connectionState=t,this.loadingCount=0;for(const r of this.stateChangeListeners)r(n,this.connectionState)}}get online(){return this.connectionState===$e.CONNECTED||this.connectionState===$e.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(t){typeof t.data=="object"&&t.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(t.data.result===!0&&(this.state=$e.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const my=e=>!!(e==="localhost"||e==="[::1]"||/^127\.\d+\.\d+\.\d+$/u.exec(e)),Pi=window;if(!(!((xa=Pi.Vaadin)===null||xa===void 0)&&xa.connectionState)){let e;my(window.location.hostname)?e=!0:e=navigator.onLine,Pi.Vaadin||(Pi.Vaadin={}),Pi.Vaadin.connectionState=new py(e?$e.CONNECTED:$e.CONNECTION_LOST)}function gt(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(i=(o<3?l(i):o>3?l(t,n,i):l(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=globalThis,Tu=ji.ShadowRoot&&(ji.ShadyCSS===void 0||ji.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zu=Symbol(),Rd=new WeakMap;let Ru=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==zu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Tu&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Rd.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Rd.set(n,t))}return t}toString(){return this.cssText}};const bm=e=>new Ru(typeof e=="string"?e:e+"",void 0,zu),Ee=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Ru(n,e,zu)},hy=(e,t)=>{if(Tu)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=ji.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},Ld=Tu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return bm(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vy,defineProperty:gy,getOwnPropertyDescriptor:yy,getOwnPropertyNames:xy,getOwnPropertySymbols:wy,getPrototypeOf:Sy}=Object,_n=globalThis,$d=_n.trustedTypes,ky=$d?$d.emptyScript:"",wa=_n.reactiveElementPolyfillSupport,xo=(e,t)=>e,ml={toAttribute(e,t){switch(t){case Boolean:e=e?ky:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Lu=(e,t)=>!vy(e,t),Nd={attribute:!0,type:String,converter:ml,reflect:!1,hasChanged:Lu};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_n.litPropertyMetadata??(_n.litPropertyMetadata=new WeakMap);let sr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Nd){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&gy(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=yy(this.prototype,t)??{get(){return this[n]},set(l){this[n]=l}};return{get(){return o==null?void 0:o.call(this)},set(l){const a=o==null?void 0:o.call(this);i.call(this,l),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Nd}static _$Ei(){if(this.hasOwnProperty(xo("elementProperties")))return;const t=Sy(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(xo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xo("properties"))){const n=this.properties,r=[...xy(n),...wy(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(Ld(o))}else t!==void 0&&n.push(Ld(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hy(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const l=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:ml).toAttribute(n,r.type);this._$Em=t,l==null?this.removeAttribute(o):this.setAttribute(o,l),this._$Em=null}}_$AK(t,n){var i;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const l=r.getPropertyOptions(o),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((i=l.converter)==null?void 0:i.fromAttribute)!==void 0?l.converter:ml;this._$Em=o,this[o]=a.fromAttribute(n,l.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Lu)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,l]of this._$Ep)this[i]=l;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,l]of o)l.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],l)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}};sr.elementStyles=[],sr.shadowRootOptions={mode:"open"},sr[xo("elementProperties")]=new Map,sr[xo("finalized")]=new Map,wa==null||wa({ReactiveElement:sr}),(_n.reactiveElementVersions??(_n.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wo=globalThis,hl=wo.trustedTypes,Dd=hl?hl.createPolicy("lit-html",{createHTML:e=>e}):void 0,Pm="$lit$",fn=`lit$${Math.random().toFixed(9).slice(2)}$`,Tm="?"+fn,Ey=`<${Tm}>`,Zn=document,Ho=()=>Zn.createComment(""),Wo=e=>e===null||typeof e!="object"&&typeof e!="function",$u=Array.isArray,Cy=e=>$u(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Sa=`[ 	
\f\r]`,no=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Md=/-->/g,Od=/>/g,Mn=RegExp(`>|${Sa}(?:([^\\s"'>=/]+)(${Sa}*=${Sa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ad=/'/g,Id=/"/g,zm=/^(?:script|style|textarea|title)$/i,Rm=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),_y=Rm(1),ix=Rm(2),qn=Symbol.for("lit-noChange"),Ae=Symbol.for("lit-nothing"),Fd=new WeakMap,Vn=Zn.createTreeWalker(Zn,129);function Lm(e,t){if(!$u(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dd!==void 0?Dd.createHTML(t):t}const by=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":t===3?"<math>":"",l=no;for(let a=0;a<n;a++){const s=e[a];let u,d,f=-1,p=0;for(;p<s.length&&(l.lastIndex=p,d=l.exec(s),d!==null);)p=l.lastIndex,l===no?d[1]==="!--"?l=Md:d[1]!==void 0?l=Od:d[2]!==void 0?(zm.test(d[2])&&(o=RegExp("</"+d[2],"g")),l=Mn):d[3]!==void 0&&(l=Mn):l===Mn?d[0]===">"?(l=o??no,f=-1):d[1]===void 0?f=-2:(f=l.lastIndex-d[2].length,u=d[1],l=d[3]===void 0?Mn:d[3]==='"'?Id:Ad):l===Id||l===Ad?l=Mn:l===Md||l===Od?l=no:(l=Mn,o=void 0);const x=l===Mn&&e[a+1].startsWith("/>")?" ":"";i+=l===no?s+Ey:f>=0?(r.push(u),s.slice(0,f)+Pm+s.slice(f)+fn+x):s+fn+(f===-2?a:x)}return[Lm(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};let Es=class $m{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,l=0;const a=t.length-1,s=this.parts,[u,d]=by(t,n);if(this.el=$m.createElement(u,r),Vn.currentNode=this.el.content,n===2||n===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=Vn.nextNode())!==null&&s.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(Pm)){const p=d[l++],x=o.getAttribute(f).split(fn),E=/([.?@])?(.*)/.exec(p);s.push({type:1,index:i,name:E[2],strings:x,ctor:E[1]==="."?Ty:E[1]==="?"?zy:E[1]==="@"?Ry:Il}),o.removeAttribute(f)}else f.startsWith(fn)&&(s.push({type:6,index:i}),o.removeAttribute(f));if(zm.test(o.tagName)){const f=o.textContent.split(fn),p=f.length-1;if(p>0){o.textContent=hl?hl.emptyScript:"";for(let x=0;x<p;x++)o.append(f[x],Ho()),Vn.nextNode(),s.push({type:2,index:++i});o.append(f[p],Ho())}}}else if(o.nodeType===8)if(o.data===Tm)s.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(fn,f+1))!==-1;)s.push({type:7,index:i}),f+=fn.length-1}i++}}static createElement(t,n){const r=Zn.createElement("template");return r.innerHTML=t,r}};function Ir(e,t,n=e,r){var l,a;if(t===qn)return t;let o=r!==void 0?(l=n._$Co)==null?void 0:l[r]:n._$Cl;const i=Wo(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(t=Ir(e,o._$AS(e,t.values),o,r)),t}let Py=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??Zn).importNode(n,!0);Vn.currentNode=o;let i=Vn.nextNode(),l=0,a=0,s=r[0];for(;s!==void 0;){if(l===s.index){let u;s.type===2?u=new Nu(i,i.nextSibling,this,t):s.type===1?u=new s.ctor(i,s.name,s.strings,this,t):s.type===6&&(u=new Ly(i,this,t)),this._$AV.push(u),s=r[++a]}l!==(s==null?void 0:s.index)&&(i=Vn.nextNode(),l++)}return Vn.currentNode=Zn,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}},Nu=class Nm{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=Ae,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Ir(this,t,n),Wo(t)?t===Ae||t==null||t===""?(this._$AH!==Ae&&this._$AR(),this._$AH=Ae):t!==this._$AH&&t!==qn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Cy(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ae&&Wo(this._$AH)?this._$AA.nextSibling.data=t:this.T(Zn.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Es.createElement(Lm(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const l=new Py(o,this),a=l.u(this.options);l.p(n),this.T(a),this._$AH=l}}_$AC(t){let n=Fd.get(t.strings);return n===void 0&&Fd.set(t.strings,n=new Es(t)),n}k(t){$u(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new Nm(this.O(Ho()),this.O(Ho()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},Il=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=Ae,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Ae}_$AI(t,n=this,r,o){const i=this.strings;let l=!1;if(i===void 0)t=Ir(this,t,n,0),l=!Wo(t)||t!==this._$AH&&t!==qn,l&&(this._$AH=t);else{const a=t;let s,u;for(t=i[0],s=0;s<i.length-1;s++)u=Ir(this,a[r+s],n,s),u===qn&&(u=this._$AH[s]),l||(l=!Wo(u)||u!==this._$AH[s]),u===Ae?t=Ae:t!==Ae&&(t+=(u??"")+i[s+1]),this._$AH[s]=u}l&&!o&&this.j(t)}j(t){t===Ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class Ty extends Il{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ae?void 0:t}}let zy=class extends Il{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ae)}};class Ry extends Il{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=Ir(this,t,n,0)??Ae)===qn)return;const r=this._$AH,o=t===Ae&&r!==Ae||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==Ae&&(r===Ae||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class Ly{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ir(this,t)}}const ka=wo.litHtmlPolyfillSupport;ka==null||ka(Es,Nu),(wo.litHtmlVersions??(wo.litHtmlVersions=[])).push("3.2.1");const $y=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new Nu(t.insertBefore(Ho(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let So=class extends sr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$y(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return qn}};var Kd;So._$litElement$=!0,So.finalized=!0,(Kd=globalThis.litElementHydrateSupport)==null||Kd.call(globalThis,{LitElement:So});const Ea=globalThis.litElementPolyfillSupport;Ea==null||Ea({LitElement:So});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ny={attribute:!0,type:String,converter:ml,reflect:!1,hasChanged:Lu},Dy=(e=Ny,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,e),r==="accessor"){const{name:l}=n;return{set(a){const s=t.get.call(this);t.set.call(this,a),this.requestUpdate(l,s,e)},init(a){return a!==void 0&&this.P(l,void 0,e),a}}}if(r==="setter"){const{name:l}=n;return function(a){const s=this[l];t.call(this,a),this.requestUpdate(l,s,e)}}throw Error("Unsupported decorator location: "+r)};function yt(e){return(t,n)=>typeof n=="object"?Dy(e,t,n):((r,o,i)=>{const l=o.hasOwnProperty(i);return o.constructor.createProperty(i,l?{...r,wrapped:!0}:r),l?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const My={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Oy=e=>(...t)=>({_$litDirective$:e,values:t});let Ay=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Iy=Oy(class extends Ay{constructor(e){var t;if(super(e),e.type!==My.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(t)}const n=e.element.classList;for(const i of this.st)i in t||(n.remove(i),this.st.delete(i));for(const i in t){const l=!!t[i];l===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(l?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return qn}}),Ca="css-loading-indicator";var Tt;(function(e){e.IDLE="",e.FIRST="first",e.SECOND="second",e.THIRD="third"})(Tt||(Tt={}));class Fe extends So{static create(){var t,n;const r=window;return!((t=r.Vaadin)===null||t===void 0)&&t.connectionIndicator||(r.Vaadin||(r.Vaadin={}),r.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(r.Vaadin.connectionIndicator)),(n=r.Vaadin)===null||n===void 0?void 0:n.connectionIndicator}constructor(){super(),this.firstDelay=450,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=Tt.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=$e.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}render(){return _y`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${Iy({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var t;super.connectedCallback();const n=window;!((t=n.Vaadin)===null||t===void 0)&&t.connectionState&&(this.connectionStateStore=n.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(t){t!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=t,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var t;const n=(t=this.connectionStateStore)===null||t===void 0?void 0:t.state;return this.offline=n===$e.CONNECTION_LOST,this.reconnecting=n===$e.RECONNECTING,this.updateLoading(n===$e.LOADING),this.loading?!1:n!==this.lastMessageState?(this.lastMessageState=n,!0):!1}updateLoading(t){this.loading=t,this.loadingBarState=Tt.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,t,()=>{this.loadingBarState=Tt.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,t,()=>{this.loadingBarState=Tt.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,t,()=>{this.loadingBarState=Tt.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(Ca)){const t=document.createElement("style");t.id=Ca,t.textContent=this.getDefaultStyle(),document.head.appendChild(t)}}else{const t=document.getElementById(Ca);t&&document.head.removeChild(t)}}getDefaultStyle(){return`
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
    `}getLoadingBarStyle(){switch(this.loadingBarState){case Tt.IDLE:return"display: none";case Tt.FIRST:case Tt.SECOND:case Tt.THIRD:return"display: block";default:return""}}timeoutFor(t,n,r,o){return t!==0&&window.clearTimeout(t),n?window.setTimeout(r,o):0}static get instance(){return Fe.create()}}gt([yt({type:Number})],Fe.prototype,"firstDelay",void 0);gt([yt({type:Number})],Fe.prototype,"secondDelay",void 0);gt([yt({type:Number})],Fe.prototype,"thirdDelay",void 0);gt([yt({type:Number})],Fe.prototype,"expandedDuration",void 0);gt([yt({type:String})],Fe.prototype,"onlineText",void 0);gt([yt({type:String})],Fe.prototype,"offlineText",void 0);gt([yt({type:String})],Fe.prototype,"reconnectingText",void 0);gt([yt({type:Boolean,reflect:!0})],Fe.prototype,"offline",void 0);gt([yt({type:Boolean,reflect:!0})],Fe.prototype,"reconnecting",void 0);gt([yt({type:Boolean,reflect:!0})],Fe.prototype,"expanded",void 0);gt([yt({type:Boolean,reflect:!0})],Fe.prototype,"loading",void 0);gt([yt({type:String})],Fe.prototype,"loadingBarState",void 0);gt([yt({type:Boolean})],Fe.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",Fe);Fe.instance;var Ud;const vl=window;vl.Vaadin||(vl.Vaadin={});(Ud=vl.Vaadin).registrations||(Ud.registrations=[]);vl.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});class jd extends Error{}const ro=window.document.body,se=window;let Fy=class{constructor(t){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,this.navigation="",ro.$=ro.$||[],this.config=t||{},se.Vaadin=se.Vaadin||{},se.Vaadin.Flow=se.Vaadin.Flow||{},se.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const n=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||n&&n.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,se.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,se.Vaadin.connectionState.loadingFinished(),!se.Vaadin.listener&&(se.Vaadin.listener={},document.addEventListener("click",t=>{t.target&&(t.target.hasAttribute("router-link")?this.navigation="link":t.composedPath().some(n=>n.nodeName==="A")&&(this.navigation="client"))},{capture:!0}))}get action(){return async t=>{if(this.pathname=t.pathname,se.Vaadin.connectionState.online)try{await this.flowInit()}catch(n){if(n instanceof jd)return se.Vaadin.connectionState.state=$e.CONNECTION_LOST,this.offlineStubAction();throw n}else return this.offlineStubAction();return this.container.onBeforeEnter=(n,r)=>this.flowNavigate(n,r),this.container.onBeforeLeave=(n,r)=>this.flowLeave(n,r),this.container}}async flowLeave(t,n){const{connectionState:r}=se.Vaadin;return this.pathname===t.pathname||!this.isFlowClientLoaded()||r.offline?Promise.resolve({}):new Promise(o=>{this.loadingStarted(),this.container.serverConnected=i=>{o(n&&i?n.prevent():{}),this.loadingFinished()},ro.$server.leaveNavigation(this.getFlowRoutePath(t),this.getFlowRouteQuery(t))})}async flowNavigate(t,n){return this.response?new Promise(r=>{this.loadingStarted(),this.container.serverConnected=(o,i)=>{n&&o?r(n.prevent()):n&&n.redirect&&i?r(n.redirect(i.pathname)):(this.container.style.display="",r(this.container)),this.loadingFinished()},this.container.serverPaused=()=>{this.loadingFinished()},ro.$server.connectClient(this.getFlowRoutePath(t),this.getFlowRouteQuery(t),this.appShellTitle,history.state,this.navigation),this.navigation="history"}):Promise.resolve(this.container)}getFlowRoutePath(t){return decodeURIComponent(t.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(t){return t.search&&t.search.substring(1)||""}async flowInit(){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi();const{pushScript:t,appConfig:n}=this.response;typeof t=="string"&&await this.loadScript(t);const{appId:r}=n;await(await ks(()=>import("./FlowBootstrap-CHUuW4WK.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(r),await this.config.imports());const i=`flow-container-${r.toLowerCase()}`,l=document.querySelector(i);l?this.container=l:(this.container=document.createElement(i),this.container.id=r),ro.$[r]=this.container;const a=await ks(()=>import("./FlowClient-BZ2ixoyw.js"),[],import.meta.url);await this.flowInitClient(a),this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(t){return new Promise((n,r)=>{const o=document.createElement("script");o.onload=()=>n(),o.onerror=r,o.src=t,document.body.appendChild(o)})}injectAppIdScript(t){const n=t.substring(0,t.lastIndexOf("-")),r=document.createElement("script");r.type="module",r.setAttribute("data-app-id",n),document.body.append(r)}async flowInitClient(t){return t.init(),new Promise(n=>{const r=setInterval(()=>{Object.keys(se.Vaadin.Flow.clients).filter(i=>i!=="TypeScript").reduce((i,l)=>i||se.Vaadin.Flow.clients[l].isActive(),!1)||(clearInterval(r),n())},5)})}async flowInitUi(){const t=se.Vaadin&&se.Vaadin.TypeScript&&se.Vaadin.TypeScript.initial;return t?(se.Vaadin.TypeScript.initial=void 0,Promise.resolve(t)):new Promise((n,r)=>{const i=new XMLHttpRequest,l=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}`;i.open("GET",l),i.onerror=()=>r(new jd(`Invalid server response when initializing Flow UI.
        ${i.status}
        ${i.responseText}`)),i.onload=()=>{const a=i.getResponseHeader("content-type");a&&a.indexOf("application/json")!==-1?n(JSON.parse(i.responseText)):i.onerror()},i.send()})}addConnectionIndicator(){Fe.create(),se.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){se.Vaadin.connectionState.state=$e.RECONNECTING;const t=new XMLHttpRequest;t.open("HEAD","sw.js"),t.onload=()=>{se.Vaadin.connectionState.state=$e.CONNECTED},t.onerror=()=>{se.Vaadin.connectionState.state=$e.CONNECTION_LOST},setTimeout(()=>t.send(),50)}}),se.addEventListener("offline",()=>{this.isFlowClientLoaded()||(se.Vaadin.connectionState.state=$e.CONNECTION_LOST)})}async offlineStubAction(){const t=document.createElement("iframe");t.setAttribute("src","./offline-stub.html"),t.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let r;const o=()=>{r!==void 0&&(se.Vaadin.connectionState.removeStateChangeListener(r),r=void 0)};return t.onBeforeEnter=(i,l,a)=>{r=()=>{se.Vaadin.connectionState.online&&(o(),a.render(i,!1))},se.Vaadin.connectionState.addStateChangeListener(r)},t.onBeforeLeave=(i,l,a)=>{o()},t}isFlowClientLoaded(){return this.response!==void 0}};var Dm={exports:{}},Fl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uy=C,jy=Symbol.for("react.element"),Vy=Symbol.for("react.fragment"),By=Object.prototype.hasOwnProperty,Hy=Uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wy={key:!0,ref:!0,__self:!0,__source:!0};function Mm(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)By.call(t,r)&&!Wy.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:jy,type:e,key:i,ref:l,props:o,_owner:Hy.current}}Fl.Fragment=Vy;Fl.jsx=Mm;Fl.jsxs=Mm;Dm.exports=Fl;var ko=Dm.exports,Qy=Symbol.for("preact-signals");function Du(){if(Tr>1)Tr--;else{for(var e,t=!1;Eo!==void 0;){var n=Eo;for(Eo=void 0,Cs++;n!==void 0;){var r=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&Am(n))try{n.c()}catch(o){t||(e=o,t=!0)}n=r}}if(Cs=0,Tr--,t)throw e}}var ue=void 0,Eo=void 0,Tr=0,Cs=0,gl=0;function Om(e){if(ue!==void 0){var t=e.n;if(t===void 0||t.t!==ue)return t={i:0,S:e,p:ue.s,n:void 0,t:ue,e:void 0,x:void 0,r:t},ue.s!==void 0&&(ue.s.n=t),ue.s=t,e.n=t,32&ue.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=ue.s,t.n=void 0,ue.s.n=t,ue.s=t),t}}function nt(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}nt.prototype.brand=Qy;nt.prototype.h=function(){return!0};nt.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};nt.prototype.U=function(e){if(this.t!==void 0){var t=e.e,n=e.x;t!==void 0&&(t.x=n,e.e=void 0),n!==void 0&&(n.e=t,e.x=void 0),e===this.t&&(this.t=n)}};nt.prototype.subscribe=function(e){var t=this;return jm(function(){var n=t.value,r=ue;ue=void 0;try{e(n)}finally{ue=r}})};nt.prototype.valueOf=function(){return this.value};nt.prototype.toString=function(){return this.value+""};nt.prototype.toJSON=function(){return this.value};nt.prototype.peek=function(){var e=ue;ue=void 0;try{return this.value}finally{ue=e}};Object.defineProperty(nt.prototype,"value",{get:function(){var e=Om(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Cs>100)throw new Error("Cycle detected");this.v=e,this.i++,gl++,Tr++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Du()}}}});function Am(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Im(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Fm(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function Zo(e){nt.call(this,void 0),this.x=e,this.s=void 0,this.g=gl-1,this.f=4}(Zo.prototype=new nt).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===gl))return!0;if(this.g=gl,this.f|=1,this.i>0&&!Am(this))return this.f&=-2,!0;var e=ue;try{Im(this),ue=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return ue=e,Fm(this),this.f&=-2,!0};Zo.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}nt.prototype.S.call(this,e)};Zo.prototype.U=function(e){if(this.t!==void 0&&(nt.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};Zo.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(Zo.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Om(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Um(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Tr++;var n=ue;ue=void 0;try{t()}catch(r){throw e.f&=-2,e.f|=8,Mu(e),r}finally{ue=n,Du()}}}function Mu(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Um(e)}function Ky(e){if(ue!==this)throw new Error("Out-of-order effect");Fm(this),ue=e,this.f&=-2,8&this.f&&Mu(this),Du()}function qo(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}qo.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};qo.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Um(this),Im(this),Tr++;var e=ue;return ue=this,Ky.bind(this,e)};qo.prototype.N=function(){2&this.f||(this.f|=2,this.o=Eo,Eo=this)};qo.prototype.d=function(){this.f|=8,1&this.f||Mu(this)};function jm(e){var t=new qo(e);try{t.c()}catch(n){throw t.d(),n}return t.d.bind(t)}var Vm={exports:{}},Bm={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr=C;function Gy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yy=typeof Object.is=="function"?Object.is:Gy,Xy=Fr.useState,Jy=Fr.useEffect,Zy=Fr.useLayoutEffect,qy=Fr.useDebugValue;function e1(e,t){var n=t(),r=Xy({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return Zy(function(){o.value=n,o.getSnapshot=t,_a(o)&&i({inst:o})},[e,n,t]),Jy(function(){return _a(o)&&i({inst:o}),e(function(){_a(o)&&i({inst:o})})},[e]),qy(n),n}function _a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yy(e,n)}catch{return!0}}function t1(e,t){return t()}var n1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?t1:e1;Bm.useSyncExternalStore=Fr.useSyncExternalStore!==void 0?Fr.useSyncExternalStore:n1;Vm.exports=Bm;var r1=Vm.exports,Hm={};/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1=Symbol.for("react.fragment");Hm.Fragment=o1;Hm.jsxDEV=void 0;var i1=Symbol.for("react.element"),Vd=function(){},Bn,Wm=Symbol.dispose||Symbol.for("Symbol.dispose");function ba(e,t){var n=t.effect.S();return Bn=t,l1.bind(t,e,n)}function l1(e,t){t(),Bn=e}var Bd,_s;(Bd={u:0,effect:{s:void 0,c:function(){},S:function(){return Vd},d:function(){}},subscribe:function(){return Vd},getSnapshot:function(){return 0},S:function(){},f:function(){}})[Wm]=function(){};var a1=Promise.prototype.then.bind(Promise.resolve());function s1(){_s||(_s=a1(u1))}function u1(){var e;_s=void 0,(e=Bn)==null||e.f()}function Qm(e){s1();var t=C.useRef();t.current==null&&(t.current=function(r){var o,i,l,a,s=0,u=jm(function(){i=this});return i.c=function(){s=s+1|0,a&&a()},(o={u:r,effect:i,subscribe:function(d){return a=d,function(){s=s+1|0,a=void 0,u()}},getSnapshot:function(){return s},S:function(){if(Bn!=null){var d=Bn.u,f=this.u;d==0&&f==0||d==0&&f==1?(Bn.f(),l=ba(void 0,this)):d==1&&f==0||d==2&&f==0||(l=ba(Bn,this))}else l=ba(void 0,this)},f:function(){var d=l;l=void 0,d==null||d()}})[Wm]=function(){this.f()},o}(e));var n=t.current;return r1.useSyncExternalStore(n.subscribe,n.getSnapshot,n.getSnapshot),n.S(),n}Object.defineProperties(nt.prototype,{$$typeof:{configurable:!0,value:i1},type:{configurable:!0,value:function(e){var t=e.data,n=Qm(1);try{return t.value}finally{n.f()}}},props:{configurable:!0,get:function(){return{data:this}}},ref:{configurable:!0,value:null}});function Km(e){return Qm(e)}const c1=new Fy({imports:()=>ks(()=>import("./generated-flow-imports-IG436xZy.js").then(e=>e.v),[],import.meta.url)}),Pa={render(){return Promise.resolve()}};function d1(e){const t=e.port,n=e.protocol,i=n==="http:"&&t==="80"||n==="https:"&&t==="443"?e.hostname:e.host;return`${n}//${i}`}function Gm(e){if(e.href.startsWith(document.baseURI))return"/"+e.href.slice(document.baseURI.length)}function f1(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let i=0;i<n.length;i++){const l=n[i];if(l.nodeName&&l.nodeName.toLowerCase()==="a"){t=l;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a")return;const r=t;if(r.target&&r.target.toLowerCase()!=="_self"||r.hasAttribute("download")||r.hasAttribute("router-ignore"))return;if(r.pathname===window.location.pathname&&r.hash!==""){window.location.hash=r.hash;return}if((r.origin||d1(r))===window.location.origin)return Gm(new URL(r.href,r.baseURI))}function Hd(e,t){setTimeout(()=>{window.dispatchEvent(new CustomEvent("vaadin-navigated",{detail:{pathname:e,search:t}})),delete window.Vaadin.Flow.navigation})}function Ym(){}const Wd=()=>Ym;function p1(e,t){switch(t.type){case"add":return[...e,t.entry];case"remove":return e.filter(({domNode:n})=>n!==t.entry.domNode);default:return e}}function m1(e,t){const n=km(),r=C.useRef([]).current,[o,i]=C.useState(0),l=C.useCallback(()=>{const u=r.shift();if(u===void 0)return;(async()=>{e.current&&(await e.current,e.current=void 0),t.current=!u.callback,n(u.to,u.opts),i(r.length)})()},[n,i]),a=C.useCallback(()=>{queueMicrotask(l)},[l]),s=C.useCallback((u,d,f)=>{r.push({to:u,callback:d,opts:f}),i(r.length),r.length===1&&a()},[i,a]);return C.useEffect(()=>()=>{a()},[o,a]),s}function Ou(){var e=Km(1);try{const t=C.useRef(null),n=km(),r=K0(({currentLocation:c,nextLocation:h})=>(i.current=i.current||h.pathname===c.pathname&&h.search===c.search&&h.hash===c.hash,!0)),o=bu(),i=C.useRef(!1),l=C.useRef(!1),a=C.useRef(void 0),s=C.useRef(void 0),u=m1(s,i),[d,f]=C.useReducer(p1,[]),p=C.useCallback(c=>{c.preventDefault(),f({type:"remove",entry:c.detail})},[f]),x=C.useCallback(c=>{c.preventDefault(),c.detail.domNode.addEventListener("flow-portal-remove",p,{once:!0}),f({type:"add",entry:c.detail})},[f,p]),E=C.useCallback(c=>{const h=f1(c);h&&(c&&c.preventDefault&&c.preventDefault(),i.current=!1,l.current=!0,n(h),window.dispatchEvent(new CustomEvent("close-overlay-drawer")))},[n]),w=C.useCallback(c=>{const h=c.detail,k=Gm(h);k&&(c.preventDefault(),n(k))},[n]),z=C.useCallback(c=>{window.Vaadin.Flow.navigation=!0;const h="/"+c.detail.url;l.current=!1,u(h,c.detail.callback,{state:c.detail.state,replace:c.detail.replace})},[n]),v=C.useCallback(c=>()=>{n(c,{replace:!0})},[n]);return C.useEffect(()=>(window.addEventListener("vaadin-router-go",w),window.addEventListener("vaadin-navigate",z),()=>{window.removeEventListener("vaadin-router-go",w),window.removeEventListener("vaadin-navigate",z)}),[w,z]),C.useEffect(()=>()=>{var c,h,k;(h=(c=a.current)==null?void 0:c.parentNode)==null||h.removeChild(a.current),(k=a.current)==null||k.removeEventListener("flow-portal-add",x),a.current=void 0},[]),C.useEffect(()=>{var c,h,k,T,$;if(r.state==="blocked"){let R;if(s.current=new Promise((G,te)=>R={resolve:G,reject:te}),i.current&&!l.current){r.proceed(),R.resolve();return}l.current=!1;const{pathname:g,search:F}=r.location,M=((c=window==null?void 0:window.Vaadin)==null?void 0:c.routesConfig)||[];let H=dn(Array.from(M),g);H&&H.filter(G=>{var te,ie,_e;return((_e=(ie=(te=G.route)==null?void 0:te.element)==null?void 0:ie.type)==null?void 0:_e.name)===Ou.name}).length!=0?((k=(h=a.current)==null?void 0:h.onBeforeEnter)==null||k.call(a==null?void 0:a.current,{pathname:g,search:F},{prevent(){r.reset(),R.resolve(),i.current=!1},redirect:v,continue(){r.proceed(),R.resolve()}},Pa),i.current=!0):Promise.resolve(($=(T=a.current)==null?void 0:T.onBeforeLeave)==null?void 0:$.call(a==null?void 0:a.current,{pathname:g,search:F},{prevent:Wd},Pa)).then(G=>{G===Ym&&a.current?a.current.serverConnected=te=>{te?(r.reset(),R.resolve()):(r.proceed(),R.resolve())}:(r.proceed(),R.resolve())})}},[r.state,r.location]),C.useEffect(()=>{if(r.state!=="blocked"){if(i.current){i.current=!1,Hd(o.pathname,o.search);return}c1.serverSideRoutes[0].action({pathname:o.pathname,search:o.search}).then(c=>{var k,T;const h=(k=t.current)==null?void 0:k.parentNode;return h&&h!==c.parentNode&&(h.append(c),c.addEventListener("flow-portal-add",x),window.addEventListener("click",E),a.current=c),(T=c.onBeforeEnter)==null?void 0:T.call(c,{pathname:o.pathname,search:o.search},{prevent:Wd,redirect:v,continue(){Hd(o.pathname,o.search)}},Pa)}).then(c=>{typeof c=="function"&&c()})}},[o]),ko.jsxs(ko.Fragment,{children:[ko.jsx("output",{ref:t,style:{display:"none"}}),d.map(({children:c,domNode:h})=>Nl.createPortal(c,h))]})}finally{e.f()}}Ou.type="FlowContainer";const h1=[{path:"/*",element:ko.jsx(Ou,{})}];function v1(){const e=[...h1];return{router:q0([...e],{basename:new URL(document.baseURI).pathname}),routes:e}}const{router:g1,routes:y1}=v1();function x1(){var e=Km(1);try{return ko.jsx(sy,{router:g1})}finally{e.f()}}const bs=document.getElementById("outlet");let Xm=bs._root??am(bs);bs._root=Xm;Xm.render(C.createElement(x1));window.Vaadin??(window.Vaadin={});window.Vaadin.routesConfig=y1;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const w1=e=>class extends e{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(n,r,o){super.attributeChangedCallback(n,r,o),n==="theme"&&this._set_theme(o)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jm=[];function Zm(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}function S1(e){return Zm(customElements.get(e))}function k1(e=[]){return[e].flat(1/0).filter(t=>t instanceof Ru?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Ul(e,t,n={}){e&&S1(e)&&console.warn(`The custom element definition for "${e}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),t=k1(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,n):Jm.push({themeFor:e,styles:t,include:n.include,moduleId:n.moduleId})}function Ps(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():Jm}function E1(e,t){return(e||"").split(" ").some(n=>new RegExp(`^${n.split("*").join(".*")}$`,"u").test(t))}function C1(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function qm(e){const t=[];return e.include&&[].concat(e.include).forEach(n=>{const r=Ps().find(o=>o.moduleId===n);r?t.push(...qm(r),...r.styles):console.warn(`Included moduleId ${n} not found in style registry`)},e.styles),t}function _1(e,t){const n=document.createElement("style");n.innerHTML=e.map(r=>r.cssText).join(`
`),t.content.appendChild(n)}function b1(e){const t=`${e}-default-theme`,n=Ps().filter(r=>r.moduleId!==t&&E1(r.themeFor,e)).map(r=>({...r,styles:[...qm(r),...r.styles],includePriority:C1(r.moduleId)})).sort((r,o)=>o.includePriority-r.includePriority);return n.length>0?n:Ps().filter(r=>r.moduleId===t)}const px=e=>class extends w1(e){static finalize(){if(super.finalize(),this.elementStyles)return;const n=this.prototype._template;!n||Zm(this)||_1(this.getStylesForThis(),n)}static finalizeStyles(n){const r=this.getStylesForThis();return n?[...super.finalizeStyles(n),...r]:r}static getStylesForThis(){const n=Object.getPrototypeOf(this.prototype),r=(n?n.constructor.__themes:[])||[];this.__themes=[...r,...b1(this.is)];const o=this.__themes.flatMap(i=>i.styles);return o.filter((i,l)=>l===o.lastIndexOf(i))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const P1=(e,...t)=>{const n=document.createElement("style");n.id=e,n.textContent=t.map(r=>r.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",n)},$n=(e,...t)=>{P1(`lumo-${e}`,t)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function T1(e){const t=customElements.get(e.is);if(!t)Object.defineProperty(e,"version",{get(){return"24.3.13"}}),customElements.define(e.is,e);else{const n=t.version;n&&e.version&&n===e.version?console.warn(`The component ${e.is} has been loaded twice`):console.error(`Tried to define ${e.is} version ${e.version} when version ${t.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class z1 extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}T1(z1);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const R1=Ee`
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
`,Au=Ee`
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
`;Ul("",Au,{moduleId:"lumo-typography"});$n("typography-props",R1);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const L1=Ee`
  ${bm(Au.cssText.replace(/,\s*:host/su,""))}
`;$n("typography",L1);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $1=Ee`
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
`;$n("color-props",$1);const Iu=Ee`
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
`;Ul("",Iu,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */$n("color",Iu);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const N1=Ee`
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
`;Ee`
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
`;$n("style-props",N1);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fu=Ee`
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
`;Ul("",Fu,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */$n("badge",Fu);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const D1=Ee`
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
 */const M1=Ee`
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
 */const O1=Ee`
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
 */const A1=Ee`
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
 */const I1=Ee`
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
 */const F1=Ee`
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
 */const U1=Ee`
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
 */const j1=Ee`
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
 */const V1=Ee`
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
 */const B1=Ee`
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
 */const H1=Ee`
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
 */const Uu=Ee`
${D1}
${M1}
${O1}
${A1}
${I1}
${F1}
${U1}
${j1}
${V1}
${B1}
${H1}
`;Ul("",Uu,{moduleId:"lumo-utility"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */$n("utility",Uu);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),n=new WeakMap,r=typeof DOMException=="object"?Error:DOMException,o=Object.defineProperty,i=Array.prototype.forEach,l=/@import.+?;?$/gm;function a(b){var D=b.replace(l,"");return D!==b&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),D.trim()}function s(b){return"isConnected"in b?b.isConnected:document.contains(b)}function u(b){return b.filter(function(D,K){return b.indexOf(D)===K})}function d(b,D){return b.filter(function(K){return D.indexOf(K)===-1})}function f(b){b.parentNode.removeChild(b)}function p(b){return b.shadowRoot||n.get(b)}var x=["addRule","deleteRule","insertRule","removeRule"],E=CSSStyleSheet,w=E.prototype;w.replace=function(){return Promise.reject(new r("Can't call replace on non-constructed CSSStyleSheets."))},w.replaceSync=function(){throw new r("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function z(b){return typeof b=="object"?G.isPrototypeOf(b)||w.isPrototypeOf(b):!1}function v(b){return typeof b=="object"?w.isPrototypeOf(b):!1}var c=new WeakMap,h=new WeakMap,k=new WeakMap,T=new WeakMap;function $(b,D){var K=document.createElement("style");return k.get(b).set(D,K),h.get(b).push(D),K}function R(b,D){return k.get(b).get(D)}function g(b,D){k.get(b).delete(D),h.set(b,h.get(b).filter(function(K){return K!==D}))}function F(b,D){requestAnimationFrame(function(){D.textContent=c.get(b).textContent,T.get(b).forEach(function(K){return D.sheet[K.method].apply(D.sheet,K.args)})})}function M(b){if(!c.has(b))throw new TypeError("Illegal invocation")}function H(){var b=this,D=document.createElement("style");t.body.appendChild(D),c.set(b,D),h.set(b,[]),k.set(b,new WeakMap),T.set(b,[])}var G=H.prototype;G.replace=function(D){try{return this.replaceSync(D),Promise.resolve(this)}catch(K){return Promise.reject(K)}},G.replaceSync=function(D){if(M(this),typeof D=="string"){var K=this;c.get(K).textContent=a(D),T.set(K,[]),h.get(K).forEach(function(Ve){Ve.isConnected()&&F(K,R(K,Ve))})}},o(G,"cssRules",{configurable:!0,enumerable:!0,get:function(){return M(this),c.get(this).sheet.cssRules}}),o(G,"media",{configurable:!0,enumerable:!0,get:function(){return M(this),c.get(this).sheet.media}}),x.forEach(function(b){G[b]=function(){var D=this;M(D);var K=arguments;T.get(D).push({method:b,args:K}),h.get(D).forEach(function(Qe){if(Qe.isConnected()){var Re=R(D,Qe).sheet;Re[b].apply(Re,K)}});var Ve=c.get(D).sheet;return Ve[b].apply(Ve,K)}}),o(H,Symbol.hasInstance,{configurable:!0,value:z});var te={childList:!0,subtree:!0},ie=new WeakMap;function _e(b){var D=ie.get(b);return D||(D=new Ue(b),ie.set(b,D)),D}function rt(b){o(b.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return _e(this).sheets},set:function(D){_e(this).update(D)}})}function xt(b,D){for(var K=document.createNodeIterator(b,NodeFilter.SHOW_ELEMENT,function(Qe){return p(Qe)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),Ve=void 0;Ve=K.nextNode();)D(p(Ve))}var N=new WeakMap,O=new WeakMap,W=new WeakMap;function ne(b,D){return D instanceof HTMLStyleElement&&O.get(b).some(function(K){return R(K,b)})}function le(b){var D=N.get(b);return D instanceof Document?D.body:D}function De(b){var D=document.createDocumentFragment(),K=O.get(b),Ve=W.get(b),Qe=le(b);Ve.disconnect(),K.forEach(function(Re){D.appendChild(R(Re,b)||$(Re,b))}),Qe.insertBefore(D,null),Ve.observe(Qe,te),K.forEach(function(Re){F(Re,R(Re,b))})}function Ue(b){var D=this;D.sheets=[],N.set(D,b),O.set(D,[]),W.set(D,new MutationObserver(function(K,Ve){if(!document){Ve.disconnect();return}K.forEach(function(Qe){e||i.call(Qe.addedNodes,function(Re){Re instanceof Element&&xt(Re,function(xe){_e(xe).connect()})}),i.call(Qe.removedNodes,function(Re){Re instanceof Element&&(ne(D,Re)&&De(D),e||xt(Re,function(xe){_e(xe).disconnect()}))})})}))}if(Ue.prototype={isConnected:function(){var b=N.get(this);return b instanceof Document?b.readyState!=="loading":s(b.host)},connect:function(){var b=le(this);W.get(this).observe(b,te),O.get(this).length>0&&De(this),xt(b,function(D){_e(D).connect()})},disconnect:function(){W.get(this).disconnect()},update:function(b){var D=this,K=N.get(D)===document?"Document":"ShadowRoot";if(!Array.isArray(b))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+K+": Iterator getter is not callable.");if(!b.every(z))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+K+": Failed to convert value to 'CSSStyleSheet'");if(b.some(v))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+K+": Can't adopt non-constructed stylesheets");D.sheets=b;var Ve=O.get(D),Qe=u(b),Re=d(Ve,Qe);Re.forEach(function(xe){f(R(xe,D)),g(xe,D)}),O.set(D,Qe),D.isConnected()&&Qe.length>0&&De(D)}},window.CSSStyleSheet=H,rt(Document),"ShadowRoot"in window){rt(ShadowRoot);var wt=Element.prototype,ze=wt.attachShadow;wt.attachShadow=function(D){var K=ze.call(this,D);return D.mode==="closed"&&n.set(this,K),K}}var je=_e(document);je.isConnected()?je.connect():document.addEventListener("DOMContentLoaded",je.connect.bind(je))})();const{toString:W1}=Object.prototype;function Q1(e){return W1.call(e)==="[object RegExp]"}function K1(e,{preserve:t=!0,whitespace:n=!0,all:r}={}){if(r)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let o=t,i;typeof t=="function"?(o=!1,i=t):Q1(t)&&(o=!1,i=d=>t.test(d));let l=!1,a="",s="",u="";for(let d=0;d<e.length;d++){if(a=e[d],e[d-1]!=="\\"&&(a==='"'||a==="'")&&(l===a?l=!1:l||(l=a)),!l&&a==="/"&&e[d+1]==="*"){const f=e[d+2]==="!";let p=d+2;for(;p<e.length;p++){if(e[p]==="*"&&e[p+1]==="/"){o&&f||i&&i(s)?u+=`/*${s}*/`:n||(e[p+2]===`
`?p++:e[p+2]+e[p+3]===`\r
`&&(p+=2)),s="";break}s+=e[p]}d=p+1;continue}u+=a}return u}const G1=CSSStyleSheet.toString().includes("document.createElement"),Y1=(e,t)=>{const n=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(e)!=null&&(e=K1(e));for(var r,o=e;(r=n.exec(e))!==null;){o=o.replace(r[0],"");const i=document.createElement("link");i.rel="stylesheet",i.href=r[2]||r[4];const l=r[1]||r[5];l&&(i.media=l),t===document?document.head.appendChild(i):t.appendChild(i)}return o},X1=(e,t,n)=>(n?t.adoptedStyleSheets=[e,...t.adoptedStyleSheets]:t.adoptedStyleSheets=[...t.adoptedStyleSheets,e],()=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter(r=>r!==e)}),J1=(e,t,n)=>{const r=new CSSStyleSheet;return r.replaceSync(e),G1?X1(r,t,n):(n?t.adoptedStyleSheets.splice(0,0,r):t.adoptedStyleSheets.push(r),()=>{t.adoptedStyleSheets.splice(t.adoptedStyleSheets.indexOf(r),1)})},Z1=(e,t)=>{const n=document.createElement("style");return n.type="text/css",n.textContent=e,document.head.insertBefore(n,void 0),()=>{n.remove()}},lr=(e,t,n,r)=>{if(n===document){const i=q1(e);if(window.Vaadin.theme.injectedGlobalCss.indexOf(i)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(i)}const o=Y1(e,n);return n===document?Z1(o):J1(o,n,r)};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function Qd(e){let t,n,r=2166136261;for(t=0,n=e.length;t<n;t++)r^=e.charCodeAt(t),r+=(r<<1)+(r<<4)+(r<<7)+(r<<8)+(r<<24);return("0000000"+(r>>>0).toString(16)).substr(-8)}function q1(e){let t=Qd(e);return t+Qd(t+e)}document["_vaadintheme_my-app_componentCss"]||(document["_vaadintheme_my-app_componentCss"]=!0);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const eh=Ee`
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
`;$n("spacing-props",eh);const ex=Ee`vaadin-button::part(label){font-size:16px}vaadin-multi-select-combo-box>label{display:inline-block;overflow:visible;text-overflow:clip;font-size:16px}vaadin-text-area>label{display:inline-block;overflow:visible;text-overflow:clip;font-size:16px}vaadin-grid::part(cell){font-size:16px}vaadin-radio-button>label{font-size:16px}vaadin-radio-group>label{font-size:16px}vaadin-checkbox>label{font-size:16px}vaadin-text-field::part(label){font-size:16px}[slot=drawer]:is(header,footer):is(:empty){display:none}html{--lumo-primary-color: plum;--lumo-primary-text-color: black;--lumo-secondary-text-color: purple}`,tx=e=>{const t=[];e!==document&&(t.push(lr(Au.cssText,"",e,!0)),t.push(lr(Iu.cssText,"",e,!0)),t.push(lr(eh.cssText,"",e,!0)),t.push(lr(Fu.cssText,"",e,!0)),t.push(lr(Uu.cssText,"",e,!0)),t.push(lr(ex.toString(),"",e)))},nx=tx;nx(document);export{$y as B,Ae as E,qn as T,ks as _,$n as a,Ay as b,My as c,ix as d,Oy as e,T1 as f,Ul as g,px as h,Ee as i,w1 as j,bm as r,Jm as t,_y as x};

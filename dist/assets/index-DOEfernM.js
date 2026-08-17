var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function w(e,t){return ne(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function T(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function E(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function D(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,D(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+T(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),D(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=w(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+T(a,u),c+=D(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+T(a,u++),c+=D(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return D(E(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return D(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,re());else{var t=n(l);t!==null&&T(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function w(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&T(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?re():ee=!1}}}var re;if(typeof y==`function`)re=function(){y(w)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=w,re=function(){ae.postMessage(null)}}else re=function(){_(w,0)};function T(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,T(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,re()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),w=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),T=Symbol.iterator;function E(e){return typeof e!=`object`||!e?null:(e=T&&e[T]||e[`@@iterator`],typeof e==`function`?e:null)}var D=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===D?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case w:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function fe(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function A(e,t){ue++,le[ue]=e.current,e.current=t}var pe=de(null),me=de(null),he=de(null),ge=de(null);function j(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wd(t),e=Gd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(pe),A(pe,e)}function _e(){fe(pe),fe(me),fe(he)}function ve(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Gd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function ye(e){me.current===e&&(fe(pe),fe(me)),ge.current===e&&(fe(ge),Qf._currentValue=ce)}var be,xe;function Se(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Se(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se(`Lazy`);case 13:return e.child!==t&&t!==null?Se(`Suspense Fallback`):Se(`Suspense`);case 19:return Se(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Se(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mf(e);e!==null;){if(n=e[pt])return n;e=mf(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return De.call(Nt,e)?!0:De.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(wu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function M(){return!1}function Tn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:M,this.isPropagationStopped=M,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=Tn(En),On=m({},En,{view:0,detail:0}),kn=Tn(On),An,jn,Mn,Nn=m({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=Tn(Nn),Fn=Tn(m({},Nn,{dataTransfer:0})),In=Tn(m({},On,{relatedTarget:0})),Ln=Tn(m({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=Tn(m({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=Tn(m({},En,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=Tn(m({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=Tn(m({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=Tn(m({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),Jn=Tn(m({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Yn=Tn(m({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=Tn(m({},En,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=gn&&`CompositionEvent`in window,$n=null;gn&&`documentMode`in document&&($n=document.documentMode);var er=gn&&`TextEvent`in window&&!$n,tr=gn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!Qn&&ir(e,t)?(e=Sn(),xn=bn=yn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=kd(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){Sd(e,0)}function hr(e){if(Ht(wt(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(gn){var vr;if(gn){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){fr&&(fr.detachEvent(`onpropertychange`,Sr),pr=fr=null)}function Sr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,ln(e)),mn(mr,t)}}function Cr(e,t,n){e===`focusin`?(xr(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=gn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Ut(r)||(r=Ir,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&kr(Rr,r)||(Rr=r,r=kd(Lr,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};gn&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),Jr=Gr(`animationstart`),Yr=Gr(`transitionrun`),Xr=Gr(`transitionstart`),Zr=Gr(`transitioncancel`),Qr=Gr(`transitionend`),$r=new Map,ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ei.push(`scrollEnd`);function ti(e,t){$r.set(e,t),kt(t,[e])}var ni=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ri=[],ii=0,ai=0;function oi(){for(var e=ii,t=ai=ii=0;t<e;){var n=ri[t];ri[t++]=null;var r=ri[t];ri[t++]=null;var i=ri[t];ri[t++]=null;var a=ri[t];if(ri[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ui(n,i,a)}}function si(e,t,n,r){ri[ii++]=e,ri[ii++]=t,ri[ii++]=n,ri[ii++]=r,ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ci(e,t,n,r){return si(e,t,n,r),di(e)}function li(e,t){return si(e,null,null,t),di(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function di(e){if(50<hu)throw hu=0,gu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=Wf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=mi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=mi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=mi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case w:s=14;break a;case re:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function xi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var Ti=[],Ei=0,Di=null,Oi=0,ki=[],Ai=0,ji=null,Mi=1,Ni=``;function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=Di,Di=e,Oi=t}function Fi(e,t,n){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,ji=e;var r=Mi;e=Ni;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mi=1<<32-We(t)+i|n<<i|r,Ni=a+e}else Mi=1<<a|n<<i|r,Ni=e}function Ii(e){e.return!==null&&(Pi(e,1),Fi(e,1,0))}function Li(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null;for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Ni=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null}function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,Mi=t.id,Ni=t.overflow,ji=e}var zi=null,N=null,P=!1,Bi=null,Vi=!1,Hi=Error(i(519));function Ui(e){throw Yi(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Hi}function Wi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Y(`cancel`,t),Y(`close`,t);break;case`iframe`:case`object`:case`embed`:Y(`load`,t);break;case`video`:case`audio`:for(n=0;n<bd.length;n++)Y(bd[n],t);break;case`source`:Y(`error`,t);break;case`img`:case`image`:case`link`:Y(`error`,t),Y(`load`,t);break;case`details`:Y(`toggle`,t);break;case`input`:Y(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Y(`invalid`,t);break;case`textarea`:Y(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Fd(t.textContent,n)?(r.popover!=null&&(Y(`beforetoggle`,t),Y(`toggle`,t)),r.onScroll!=null&&Y(`scroll`,t),r.onScrollEnd!=null&&Y(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Ui(e,!0)}function Gi(e){for(zi=e.return;zi;)switch(zi.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:zi=zi.return}}function Ki(e){if(e!==zi)return!1;if(!P)return Gi(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Kd(e.type,e.memoizedProps)),n=!n),n&&N&&Ui(e),Gi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=pf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=pf(e)}else t===27?(t=N,ef(e.type)?(e=ff,ff=null,N=e):N=t):N=zi?df(e.stateNode.nextSibling):null;return!0}function qi(){N=zi=null,P=!1}function Ji(){var e=Bi;return e!==null&&(nu===null?nu=e:nu.push.apply(nu,e),Bi=null),e}function Yi(e){Bi===null?Bi=[e]:Bi.push(e)}var Xi=de(null),Zi=null,Qi=null;function $i(e,t,n){A(Xi,t._currentValue),t._currentValue=n}function ea(e){e._currentValue=Xi.current,fe(Xi)}function ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function na(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ta(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ta(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ra(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&na(t,e,n,r),t.flags|=262144}function ia(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){Zi=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oa(e){return ca(Zi,e)}function sa(e,t){return Zi===null&&aa(e),ca(e,t)}function ca(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(i(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var la=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ua=t.unstable_scheduleCallback,da=t.unstable_NormalPriority,fa={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new la,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&ua(da,function(){e.controller.abort()})}var F=null,ha=0,ga=0,_a=null;function va(e,t){if(F===null){var n=F=[];ha=0,ga=md(),_a={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ha++,t.then(ya,ya),t}function ya(){if(--ha===0&&F!==null){_a!==null&&(_a.status=`fulfilled`);var e=F;F=null,ga=0,_a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ba(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var xa=O.S;O.S=function(e,t){au=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&va(e,t),xa!==null&&xa(e,t)};var Sa=de(null);function Ca(){var e=Sa.current;return e===null?H.pooledCache:e}function wa(e,t){t===null?A(Sa,Sa.current):A(Sa,t.pool)}function Ta(){var e=Ca();return e===null?null:{parent:fa._currentValue,pool:e}}var Ea=Error(i(460)),Da=Error(i(474)),Oa=Error(i(542)),ka={then:function(){}};function Aa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=H,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e}throw Na=t,Ea}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Na=e,Ea):e}}var Na=null;function Pa(){if(Na===null)throw Error(i(459));var e=Na;return Na=null,e}function Fa(e){if(e===Ea||e===Oa)throw Error(i(483))}var Ia=null,La=0;function Ra(e){var t=La;return La+=1,Ia===null&&(Ia=[]),ja(Ia,e,t)}function za(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ba(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Va(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&Ma(i)===t.type)?(t=a(t,n.props),za(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),za(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=vi(t.type,t.key,t.props,null,e.mode,n),za(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case re:return t=Ma(t),f(e,t,n)}if(se(t)||E(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ra(t),n);if(t.$$typeof===S)return f(e,sa(e,t),n);Ba(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case re:return n=Ma(n),p(e,t,n,r)}if(se(n)||E(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ra(n),r);if(n.$$typeof===S)return p(e,t,sa(e,n),r);Ba(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=Ma(r),m(e,t,n,r,i)}if(se(r)||E(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ra(r),i);if(r.$$typeof===S)return m(e,t,n,sa(t,r),i);Ba(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&Pi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&Pi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&Pi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&Pi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&Pi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&Pi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&Ma(l)===r.type){n(e,r.sibling),c=a(r,o.props),za(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),za(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case re:return o=Ma(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(E(o)){if(l=E(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ra(o),c);if(o.$$typeof===S)return b(e,r,sa(e,o),c);Ba(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{La=0;var i=b(e,t,n,r);return Ia=null,i}catch(t){if(t===Ea||t===Oa)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ha=Va(!0),Ua=Va(!1),Wa=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ka(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=di(e),ui(e,null,n),t}return si(e,r,t,n),di(e)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Za=!1;function Qa(){if(Za){var e=_a;if(e!==null)throw e}}function $a(e,t,n,r){Za=!1;var i=e.updateQueue;Wa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(W&f)===f:(r&f)===f){f!==0&&f===ga&&(Za=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Wa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Xl|=o,e.lanes=o,e.memoizedState=d}}function eo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function to(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)eo(n[e],t)}var no=de(null),ro=de(0);function io(e,t){e=Jl,A(ro,e),A(no,t),Jl=e|t.baseLanes}function ao(){A(ro,Jl),A(no,no.current)}function oo(){Jl=ro.current,fe(no),fe(ro)}var so=de(null),co=null;function lo(e){var t=e.alternate;A(mo,mo.current&1),A(so,e),co===null&&(t===null||no.current!==null||t.memoizedState!==null)&&(co=e)}function I(e){A(mo,mo.current),A(so,e),co===null&&(co=e)}function uo(e){e.tag===22?(A(mo,mo.current),A(so,e),co===null&&(co=e)):fo(e)}function fo(){A(mo,mo.current),A(so,so.current)}function po(e){fe(so),co===e&&(co=null),fe(mo)}var mo=de(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||cf(n)||lf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=0,L=null,R=null,_o=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function To(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return go=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Ws:Gs,bo=!1,a=n(r,i),bo=!1,yo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){O.H=Us;var t=R!==null&&R.next!==null;if(go=0,_o=R=L=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||cc||(e=e.dependencies,e!==null&&ia(e)&&(cc=!0))}function ko(e,t,n,r){L=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,_o=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Ks,o=t(n,r)}while(yo);return o}function Ao(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function jo(){var e=xo!==0;return xo=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}go=0,_o=R=L=null,yo=!1,So=xo=0,Co=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _o===null?L.memoizedState=_o=e:_o=_o.next=e,_o}function Fo(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=_o===null?L.memoizedState:_o.next;if(t!==null)_o=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},_o===null?L.memoizedState=_o=e:_o=_o.next=e}return _o}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=ja(Co,e,t),t=L,(_o===null?t.memoizedState:_o.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===S)return oa(e)}throw Error(i(438,String(e)))}function zo(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(Fo(),R,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(go&f)===f:(W&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ga&&(d=!0);else if((go&p)===p){u=u.next,p===ga&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,Xl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,Xl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(cc=!0,d&&(n=_a,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=Fo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(cc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wo(e,t,n){var r=L,a=Fo(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((R||a).memoizedState,n);if(s&&(a.memoizedState=n,cc=!0),a=a.queue,hs(qo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||_o!==null&&_o.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),H===null)throw Error(i(349));o||go&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=Io(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function Yo(e){var t=li(e,2);t!==null&&yu(t,e,2)}function Xo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),bo){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,R,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,a){if(Bs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,$o(t,o)):(o.next=n.next,t.pending=n.next=o)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(P){var n=H.formState;if(n!==null){a:{var r=L;if(P){if(N){b:{for(var i=N,a=Vi;i.nodeType!==8;){if(!a){i=null;break b}if(i=df(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){N=df(i.nextSibling),r=i.data===`F!`;break a}}Ui(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,L,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,L,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(Fo(),R,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===Ea?Oa:e}else r=t;t=Fo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=Fo(),n=R;if(n!==null)return ss(t,n,e);Fo(),t=t.memoizedState,n=Fo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=Io(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return Fo().memoizedState}function fs(e,t,n,r){var i=Po();L.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=Fo();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&Eo(r,R.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(L.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=Io(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=Fo().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(V&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),bo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||go&1073741824&&!(W&261930)?e.memoizedState=t:(e.memoizedState=n,e=vu(),L.lanes|=e,Xl|=e,n)}function Es(e,t,n,r){return Or(n,t)?n:no.current===null?!(go&42)||go&1073741824&&!(W&261930)?(cc=!0,e.memoizedState=n):(e=vu(),L.lanes|=e,Xl|=e,t):(e=Ts(e,n,r),Or(e,t)||(cc=!0),e)}function Ds(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,zs(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,ba(c,r),_u(e)):Rs(e,t,r,_u(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},_u())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=As(e).queue;Ds(e,a,t,ce,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},_u())}function Ms(){return oa(Qf)}function Ns(){return Fo().memoizedState}function Ps(){return Fo().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_u();e=qa(n);var r=Ja(t,e,n);r!==null&&(yu(r,t,n),Ya(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=_u();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=ci(e,t,n,r),n!==null&&(yu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,_u())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return si(e,t,i,0),H===null&&oi(),!1}catch{}if(n=ci(e,t,i,r),n!==null)return yu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:md(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(i(479))}else t=ci(e,n,r,2),t!==null&&yu(t,e,2)}function Bs(e){var t=e.alternate;return e===L||t!==null&&t===L}function Vs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Us={readContext:oa,use:Ro,useCallback:To,useContext:To,useEffect:To,useImperativeHandle:To,useLayoutEffect:To,useInsertionEffect:To,useMemo:To,useReducer:To,useRef:To,useState:To,useDebugValue:To,useDeferredValue:To,useTransition:To,useSyncExternalStore:To,useId:To,useHostTransitionStatus:To,useFormState:To,useActionState:To,useOptimistic:To,useMemoCache:To,useCacheRefresh:To};Us.useEffectEvent=To;var Ws={readContext:oa,use:Ro,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:oa,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(bo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(bo){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Po(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,L,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=Po();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),H===null)throw Error(i(349));W&127||Go(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ms(qo.bind(null,r,o,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,o,n,t),null),n},useId:function(){var e=Po(),t=H.identifierPrefix;if(P){var n=Ni,r=Mi;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Po().memoizedState=Fs.bind(null,L)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(V&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:oa,use:Ro,useCallback:Cs,useContext:oa,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(Fo(),R.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=Fo().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(Fo(),R,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:oa,use:Ro,useCallback:Cs,useContext:oa,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=Fo();return R===null?Ts(n,e,t):Es(n,R.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=Fo().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=Fo();return R===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,R,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_u(),i=qa(r);i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(yu(t,e,r),Ya(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_u(),i=qa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(yu(t,e,r),Ya(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_u(),r=qa(n);r.tag=2,t!=null&&(r.callback=t),t=Ja(e,r,n),t!==null&&(yu(t,e,n),Ya(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ni(e)}function $s(e){console.error(e)}function ec(e){ni(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=qa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=qa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(su===null?su=new Set([this]):su.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ra(t,n,a,!0),n=so.current,n!==null){switch(n.tag){case 31:case 13:return co===null?ju():n.alternate===null&&Yl===0&&(Yl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ju(e,r,a)),!1;case 22:return n.flags|=65536,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ju(e,r,a)),!1}throw Error(i(435,n.tag))}return Ju(e,r,a),ju(),!1}if(P)return t=so.current,t===null?(r!==Hi&&(t=Error(i(423),{cause:r}),Yi(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=rc(e.stateNode,r,a),Xa(e,a),Yl!==4&&(Yl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Hi&&(e=Error(i(422),{cause:r}),Yi(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),tu===null?tu=[o]:tu.push(o),Yl!==4&&(Yl=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=rc(n.stateNode,r,e),Xa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(su===null||!su.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ic(a),ac(a,e,n,r),Xa(n,a),!1}n=n.return}while(n!==null);return!1}var sc=Error(i(461)),cc=!1;function lc(e,t,n,r){t.child=e===null?Ua(t,null,n,r):Ha(t,e.child,n,r)}function uc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return aa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!cc?(Mo(e,t,i),Pc(e,t,i)):(P&&s&&Ii(t),t.flags|=1,lc(e,t,r,i),t.child)}function dc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,fc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Fc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return Pc(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function fc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref){if(cc=!1,t.pendingProps=r=a,Fc(e,i))e.flags&131072&&(cc=!0);else return t.lanes=e.lanes,Pc(e,t,i)}}return bc(e,t,n,r,i)}function pc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return hc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wa(t,a===null?null:a.cachePool),a===null?ao():io(t,a),uo(t);else return r=t.lanes=536870912,hc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&wa(t,null),ao(),fo(t)):(wa(t,a.cachePool),io(t,a),fo(t),t.memoizedState=null);return lc(e,t,i,n),t.child}function mc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hc(e,t,n,r,i){var a=Ca();return a=a===null?null:{parent:fa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&wa(t,null),ao(),uo(t),e!==null&&ra(e,t,r,!0),t.childLanes=i,null}function gc(e,t){return t=kc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function _c(e,t,n){return Ha(t,e.child,null,n),e=gc(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function vc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=gc(t,r),t.lanes=536870912,mc(null,e);if(I(t),(e=N)?(e=sf(e,Vi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return t.lanes=536870912,null}return gc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(I(t),a){if(t.flags&256)t.flags&=-257,t=_c(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(cc||ra(e,t,n,!1),a=(n&e.childLanes)!==0,cc||a){if(r=H,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,li(e,s),yu(r,e,s),sc;ju(),t=_c(e,t,n)}else e=o.treeContext,N=df(s.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=gc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function yc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function bc(e,t,n,r,i){return aa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!cc?(Mo(e,t,i),Pc(e,t,i)):(P&&r&&Ii(t),t.flags|=1,lc(e,t,n,i),t.child)}function xc(e,t,n,r,i,a){return aa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!cc?(Mo(e,t,a),Pc(e,t,a)):(P&&r&&Ii(t),t.flags|=1,lc(e,t,n,a),t.child)}function Sc(e,t,n,r,i){if(aa(t),t.stateNode===null){var a=fi,o=n.contextType;typeof o==`object`&&o&&(a=oa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ga(t),o=n.contextType,a.context=typeof o==`object`&&o?oa(o):fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),$a(t,r,a,i),Qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=fi,typeof u==`object`&&u&&(o=oa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),Wa=!1;var f=t.memoizedState;a.state=f,$a(t,r,a,i),Qa(),l=t.memoizedState,s||f!==l||Wa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=Wa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ka(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=fi,typeof l==`object`&&l&&(c=oa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),Wa=!1,f=t.memoizedState,a.state=f,$a(t,r,a,i),Qa();var p=t.memoizedState;o!==d||f!==p||Wa||e!==null&&e.dependencies!==null&&ia(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=Wa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ia(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,yc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ha(t,e.child,null,i),t.child=Ha(t,null,n,i)):lc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Pc(e,t,i),e}function Cc(e,t,n,r){return qi(),t.flags|=256,lc(e,t,n,r),t.child}var wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tc(e){return{baseLanes:e,cachePool:Ta()}}function Ec(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=$l),e}function Dc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(mo.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(P){if(a?lo(t):fo(t),(e=N)?(e=sf(e,Vi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return lf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(fo(t),a=t.mode,c=kc({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Tc(n),r.childLanes=Ec(e,s,n),t.memoizedState=wc,mc(null,r)):(lo(t),Oc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(lo(t),t.flags&=-257,t=Ac(e,t,n)):t.memoizedState===null?(fo(t),c=r.fallback,a=t.mode,r=kc({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ha(t,e.child,null,n),r=t.child,r.memoizedState=Tc(n),r.childLanes=Ec(e,s,n),t.memoizedState=wc,t=mc(null,r)):(fo(t),t.child=e.child,t.flags|=128,t=null);else if(lo(t),lf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Yi({value:r,source:null,stack:null}),t=Ac(e,t,n)}else if(cc||ra(e,t,n,!1),s=(n&e.childLanes)!==0,cc||s){if(s=H,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,li(e,r),yu(s,e,r),sc;cf(c)||ju(),t=Ac(e,t,n)}else cf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,N=df(c.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=Oc(t,r.children),t.flags|=4096);return t}return a?(fo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,mc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Tc(n):(a=c.cachePool,a===null?a=Ta():(l=fa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Ec(e,s,n),t.memoizedState=wc,mc(e.child,r)):(lo(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Oc(e,t){return t=kc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function kc(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Ac(e,t,n){return Ha(t,e.child,null,n),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ta(e.return,t,n)}function Mc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Nc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=mo.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,A(mo,o),lc(e,t,r,n),r=P?Oi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,n,t);else if(e.tag===19)jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Mc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Mc(t,!0,n,null,a,r);break;case`together`:Mc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Pc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ra(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ia(e)))}function Ic(e,t,n){switch(t.tag){case 3:j(t,t.stateNode.containerInfo),$i(t,fa,e.memoizedState.cache),qi();break;case 27:case 5:ve(t);break;case 4:j(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,I(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(lo(t),e=Pc(e,t,n),e===null?null:e.sibling):Dc(e,t,n):(lo(t),t.flags|=128,null);lo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ra(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Nc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(mo,mo.current),r)break;return null;case 22:return t.lanes=0,pc(e,t,n,t.pendingProps);case 24:$i(t,fa,e.memoizedState.cache)}return Pc(e,t,n)}function Lc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)cc=!0;else{if(!Fc(e,n)&&!(t.flags&128))return cc=!1,Ic(e,t,n);cc=!!(e.flags&131072)}}else cc=!1,P&&t.flags&1048576&&Fi(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=Zs(e,r),t.tag=1,t=Sc(null,t,e,r,n)):(t.tag=0,t=bc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=uc(null,t,e,r,n);break a}if(a===w){t.tag=14,t=dc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return bc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Zs(r,t.pendingProps),Sc(e,t,r,a,n);case 3:a:{if(j(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ka(e,t),$a(t,r,null,n);var s=t.memoizedState;if(r=s.cache,$i(t,fa,r),r!==o.cache&&na(t,[fa],n,!0),Qa(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Cc(e,t,r,n);break a}if(r!==a){a=wi(Error(i(424)),t),Yi(a),t=Cc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(N=df(e.firstChild),zi=t,P=!0,Bi=null,Vi=!0,n=Ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qi(),r===a){t=Pc(e,t,n);break a}lc(e,t,r,n)}t=t.child}return t;case 26:return yc(e,t),e===null?(n=jf(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,r=Ud(he.current).createElement(n),r[pt]=t,r[mt]=e,Ld(r,n,e),Et(r),t.stateNode=r):t.memoizedState=jf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&P&&(r=t.stateNode=hf(t.type,t.pendingProps,he.current),zi=t,Vi=!0,a=N,ef(t.type)?(ff=a,N=df(r.firstChild)):N=a),lc(e,t,t.pendingProps.children,n),yc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=N)&&(r=af(r,t.type,t.pendingProps,Vi),r===null?a=!1:(t.stateNode=r,zi=t,N=df(r.firstChild),Vi=!1,a=!0)),a||Ui(t)),ve(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Kd(a,o)?r=null:s!==null&&Kd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,Ao,null,null,n),Qf._currentValue=a),yc(e,t),lc(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=N)&&(n=of(n,t.pendingProps,Vi),n===null?e=!1:(t.stateNode=n,zi=t,N=null,e=!0)),e||Ui(t)),null;case 13:return Dc(e,t,n);case 4:return j(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ha(t,null,r,n):lc(e,t,r,n),t.child;case 11:return uc(e,t,t.type,t.pendingProps,n);case 7:return lc(e,t,t.pendingProps,n),t.child;case 8:return lc(e,t,t.pendingProps.children,n),t.child;case 12:return lc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,$i(t,t.type,r.value),lc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,aa(t),a=oa(a),r=r(a),t.flags|=1,lc(e,t,r,n),t.child;case 14:return dc(e,t,t.type,t.pendingProps,n);case 15:return fc(e,t,t.type,t.pendingProps,n);case 19:return Nc(e,t,n);case 31:return vc(e,t,n);case 22:return pc(e,t,n,t.pendingProps);case 24:return aa(t),r=oa(fa),e===null?(a=Ca(),a===null&&(a=H,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ga(t),$i(t,fa,a)):((e.lanes&n)!==0&&(Ka(e,t),$a(t,null,null,n),Qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,$i(t,fa,r),r!==a.cache&&na(t,[fa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,fa,r))),lc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Rc(e){e.flags|=4}function zc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ou())e.flags|=8192;else throw Na=ka,Da}}else e.flags&=-16777217}function Bc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Gf(t)){if(Ou())e.flags|=8192;else throw Na=ka,Da}}function Vc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,eu|=t)}function Hc(e,t){if(!P)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function z(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Uc(e,t,n){var r=t.pendingProps;switch(Li(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return z(t),null;case 1:return z(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ea(fa),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?Rc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ji())),z(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Rc(t),o===null?(z(t),zc(t,a,null,r,n)):(z(t),Bc(t,o))):o?o===e.memoizedState?(z(t),t.flags&=-16777217):(Rc(t),z(t),Bc(t,o)):(e=e.memoizedProps,e!==r&&Rc(t),z(t),zc(t,a,e,r,n)),null;case 27:if(ye(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Rc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return z(t),null}e=pe.current,Ki(t)?Wi(t,e):(e=hf(a,r,n),t.stateNode=e,Rc(t))}return z(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Rc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return z(t),null}if(o=pe.current,Ki(t))Wi(t,o);else{var s=Ud(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Ld(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Rc(t)}}return z(t),zc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Rc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,Ki(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=zi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Fd(e.nodeValue,n)),e||Ui(t,!0)}else e=Ud(e).createTextNode(r),e[pt]=t,t.stateNode=e}return z(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ki(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;z(t),e=!1}else n=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if(t.flags&128)throw Error(i(558))}return z(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;z(t),a=!1}else a=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(po(t),t):(po(t),null)}return po(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vc(t,t.updateQueue),z(t),null);case 4:return _e(),e===null&&Td(t.stateNode.containerInfo),z(t),null;case 10:return ea(t.type),z(t),null;case 19:if(fe(mo),r=t.memoizedState,r===null)return z(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Hc(r,!1);else{if(Yl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ho(e),o!==null){for(t.flags|=128,Hc(r,!1),e=o.updateQueue,t.updateQueue=e,Vc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return A(mo,mo.current&1|2),P&&Pi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>ou&&(t.flags|=128,a=!0,Hc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=ho(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Vc(t,e),Hc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!P)return z(t),null}else 2*Me()-r.renderingStartTime>ou&&n!==536870912&&(t.flags|=128,a=!0,Hc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(z(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=mo.current,A(mo,a?n&1|2:n&1),P&&Pi(t,r.treeForkCount),e);case 22:case 23:return po(t),oo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(z(t),t.subtreeFlags&6&&(t.flags|=8192)):z(t),n=t.updateQueue,n!==null&&Vc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(Sa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ea(fa),z(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Wc(e,t){switch(Li(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ea(fa),_e(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(mo),null;case 4:return _e(),null;case 10:return ea(t.type),null;case 22:case 23:return po(t),oo(),e!==null&&fe(Sa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ea(fa),null;case 25:return null;default:return null}}function Gc(e,t){switch(Li(t),t.tag){case 3:ea(fa),_e();break;case 26:case 27:case 5:ye(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:fe(mo);break;case 10:ea(t.type);break;case 22:case 23:po(t),oo(),e!==null&&fe(Sa);break;case 24:ea(fa)}}function Kc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){J(t,t.return,e)}}function qc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){J(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){J(t,t.return,e)}}function Jc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{to(t,n)}catch(t){J(e,e.return,t)}}}function Yc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){J(e,t,n)}}function Xc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){J(e,t,n)}}function Zc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){J(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){J(e,t,n)}else n.current=null}}function Qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){J(e,e.return,t)}}function $c(e,t,n){try{var r=e.stateNode;Rd(r,e.type,n,t),r[mt]=t}catch(t){J(e,e.return,t)}}function el(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ef(e.type)||e.tag===4}function tl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||el(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ef(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&ef(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&ef(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(rl(e,t,n),e=e.sibling;e!==null;)rl(e,t,n),e=e.sibling}function il(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ld(t,r,n),t[pt]=e,t[mt]=n}catch(t){J(e,e.return,t)}}var al=!1,ol=!1,sl=!1,cl=typeof WeakSet==`function`?WeakSet:Set,ll=null;function ul(e,t){if(e=e.containerInfo,Vd=sp,e=Nr(e),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Hd={focusedElem:e,selectionRange:n},sp=!1,ll=t;ll!==null;)if(t=ll,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ll=e;else for(;ll!==null;){switch(t=ll,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Zs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){J(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)rf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:rf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ll=e;break}ll=t.return}}function dl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Tl(e,n),r&4&&Kc(5,n);break;case 1:if(Tl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){J(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){J(n,n.return,e)}}}r&64&&Jc(n),r&512&&Xc(n,n.return);break;case 3:if(Tl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{to(e,t)}catch(e){J(n,n.return,e)}}break;case 27:t===null&&r&4&&il(n);case 26:case 5:Tl(e,n),t===null&&r&4&&Qc(n),r&512&&Xc(n,n.return);break;case 12:Tl(e,n);break;case 31:Tl(e,n),r&4&&gl(e,n);break;case 13:Tl(e,n),r&4&&_l(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zu.bind(null,n),uf(e,n))));break;case 22:if(r=n.memoizedState!==null||al,!r){t=t!==null&&t.memoizedState!==null||ol,i=al;var a=ol;al=r,(ol=t)&&!a?Dl(e,n,!!(n.subtreeFlags&8772)):Tl(e,n),al=i,ol=a}break;case 30:break;default:Tl(e,n)}}function fl(e){var t=e.alternate;t!==null&&(e.alternate=null,fl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var B=null,pl=!1;function ml(e,t,n){for(n=n.child;n!==null;)hl(e,t,n),n=n.sibling}function hl(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:ol||Zc(n,t),ml(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ol||Zc(n,t);var r=B,i=pl;ef(n.type)&&(B=n.stateNode,pl=!1),ml(e,t,n),gf(n.stateNode),B=r,pl=i;break;case 5:ol||Zc(n,t);case 6:if(r=B,i=pl,B=null,ml(e,t,n),B=r,pl=i,B!==null){if(pl)try{(B.nodeType===9?B.body:B.nodeName===`HTML`?B.ownerDocument.body:B).removeChild(n.stateNode)}catch(e){J(n,t,e)}else try{B.removeChild(n.stateNode)}catch(e){J(n,t,e)}}break;case 18:B!==null&&(pl?(e=B,tf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):tf(B,n.stateNode));break;case 4:r=B,i=pl,B=n.stateNode.containerInfo,pl=!0,ml(e,t,n),B=r,pl=i;break;case 0:case 11:case 14:case 15:qc(2,n,t),ol||qc(4,n,t),ml(e,t,n);break;case 1:ol||(Zc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Yc(n,t,r)),ml(e,t,n);break;case 21:ml(e,t,n);break;case 22:ol=(r=ol)||n.memoizedState!==null,ml(e,t,n),ol=r;break;default:ml(e,t,n)}}function gl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){J(t,t.return,e)}}}function _l(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){J(t,t.return,e)}}function vl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new cl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new cl),t;default:throw Error(i(435,e.tag))}}function yl(e,t){var n=vl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Qu.bind(null,e,t);t.then(r,r)}})}function bl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(ef(c.type)){B=c.stateNode,pl=!1;break a}break;case 5:B=c.stateNode,pl=!1;break a;case 3:case 4:B=c.stateNode.containerInfo,pl=!0;break a}c=c.return}if(B===null)throw Error(i(160));hl(o,s,a),B=null,pl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Sl(t,e),t=t.sibling}var xl=null;function Sl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bl(t,e),Cl(e),r&4&&(qc(3,e,e.return),Kc(3,e),qc(5,e,e.return));break;case 1:bl(t,e),Cl(e),r&512&&(ol||n===null||Zc(n,n.return)),r&64&&al&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=xl;if(bl(t,e),Cl(e),r&512&&(ol||n===null||Zc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Ld(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Hf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Ld(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Hf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Ld(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Uf(a,e.type,e.stateNode)}else e.stateNode=Lf(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&$c(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Uf(a,e.type,e.stateNode):Lf(a,r,e.memoizedProps))}break;case 27:bl(t,e),Cl(e),r&512&&(ol||n===null||Zc(n,n.return)),n!==null&&r&4&&$c(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bl(t,e),Cl(e),r&512&&(ol||n===null||Zc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){J(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,$c(e,a,n===null?a:n.memoizedProps)),r&1024&&(sl=!0);break;case 6:if(bl(t,e),Cl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){J(e,e.return,t)}}break;case 3:if(Vf=null,a=xl,xl=yf(t.containerInfo),bl(t,e),xl=a,Cl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){J(e,e.return,t)}sl&&(sl=!1,wl(e));break;case 4:r=xl,xl=yf(e.stateNode.containerInfo),bl(t,e),Cl(e),xl=r;break;case 12:bl(t,e),Cl(e);break;case 31:bl(t,e),Cl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 13:bl(t,e),Cl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(iu=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=al,d=ol;if(al=u||a,ol=d||l,bl(t,e),ol=d,al=u,Cl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||al||ol||El(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){J(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){J(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?nf(m,!0):nf(l.stateNode,!1)}catch(e){J(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,yl(e,n))));break;case 19:bl(t,e),Cl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,yl(e,r)));break;case 30:break;case 21:break;default:bl(t,e),Cl(e)}}function Cl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(el(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;rl(e,tl(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),rl(e,tl(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;nl(e,tl(e),s);break;default:throw Error(i(161))}}catch(t){J(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)dl(e,t.alternate,t),t=t.sibling}function El(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:qc(4,t,t.return),El(t);break;case 1:Zc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Yc(t,t.return,n),El(t);break;case 27:gf(t.stateNode);case 26:case 5:Zc(t,t.return),El(t);break;case 22:t.memoizedState===null&&El(t);break;case 30:El(t);break;default:El(t)}e=e.sibling}}function Dl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Dl(i,a,n),Kc(4,a);break;case 1:if(Dl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){J(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)eo(c[i],s)}catch(e){J(r,r.return,e)}}n&&o&64&&Jc(a),Xc(a,a.return);break;case 27:il(a);case 26:case 5:Dl(i,a,n),n&&r===null&&o&4&&Qc(a),Xc(a,a.return);break;case 12:Dl(i,a,n);break;case 31:Dl(i,a,n),n&&o&4&&gl(i,a);break;case 13:Dl(i,a,n),n&&o&4&&_l(i,a);break;case 22:a.memoizedState===null&&Dl(i,a,n),Xc(a,a.return);break;case 30:break;default:Dl(i,a,n)}t=t.sibling}}function Ol(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function kl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function Al(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jl(e,t,n,r),t=t.sibling}function jl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Al(e,t,n,r),i&2048&&Kc(9,t);break;case 1:Al(e,t,n,r);break;case 3:Al(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){Al(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){J(t,t.return,e)}}else Al(e,t,n,r);break;case 31:Al(e,t,n,r);break;case 13:Al(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Al(e,t,n,r):(a._visibility|=2,Ml(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Al(e,t,n,r):Nl(e,t),i&2048&&Ol(o,t);break;case 24:Al(e,t,n,r),i&2048&&kl(t.alternate,t);break;default:Al(e,t,n,r)}}function Ml(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ml(a,o,s,c,i),Kc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ml(a,o,s,c,i)):u._visibility&2?Ml(a,o,s,c,i):Nl(a,o),i&&l&2048&&Ol(o.alternate,o);break;case 24:Ml(a,o,s,c,i),i&&l&2048&&kl(o.alternate,o);break;default:Ml(a,o,s,c,i)}t=t.sibling}}function Nl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Nl(n,r),i&2048&&Ol(r.alternate,r);break;case 24:Nl(n,r),i&2048&&kl(r.alternate,r);break;default:Nl(n,r)}t=t.sibling}}var Pl=8192;function Fl(e,t,n){if(e.subtreeFlags&Pl)for(e=e.child;e!==null;)Il(e,t,n),e=e.sibling}function Il(e,t,n){switch(e.tag){case 26:Fl(e,t,n),e.flags&Pl&&e.memoizedState!==null&&Kf(n,xl,e.memoizedState,e.memoizedProps);break;case 5:Fl(e,t,n);break;case 3:case 4:var r=xl;xl=yf(e.stateNode.containerInfo),Fl(e,t,n),xl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Pl,Pl=16777216,Fl(e,t,n),Pl=r):Fl(e,t,n));break;default:Fl(e,t,n)}}function Ll(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Rl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ll=r,Vl(r,e)}Ll(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zl(e),e=e.sibling}function zl(e){switch(e.tag){case 0:case 11:case 15:Rl(e),e.flags&2048&&qc(9,e,e.return);break;case 3:Rl(e);break;case 12:Rl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bl(e)):Rl(e);break;default:Rl(e)}}function Bl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ll=r,Vl(r,e)}Ll(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:qc(8,t,t.return),Bl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Bl(t));break;default:Bl(t)}e=e.sibling}}function Vl(e,t){for(;ll!==null;){var n=ll;switch(n.tag){case 0:case 11:case 15:qc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ll=r;else a:for(n=e;ll!==null;){r=ll;var i=r.sibling,a=r.return;if(fl(r),r===n){ll=null;break a}if(i!==null){i.return=a,ll=i;break a}ll=a}}}var Hl={getCacheForType:function(e){var t=oa(fa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return oa(fa).controller.signal}},Ul=typeof WeakMap==`function`?WeakMap:Map,V=0,H=null,U=null,W=0,G=0,Wl=null,Gl=!1,Kl=!1,ql=!1,Jl=0,Yl=0,Xl=0,Zl=0,Ql=0,$l=0,eu=0,tu=null,nu=null,ru=!1,iu=0,au=0,ou=1/0,K=null,su=null,cu=0,lu=null,uu=null,du=0,fu=0,pu=null,mu=null,hu=0,gu=null;function _u(){return V&2&&W!==0?W&-W:O.T===null?ut():md()}function vu(){if($l===0){if(!(W&536870912)||P){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),$l=e}else $l=536870912}return e=so.current,e!==null&&(e.flags|=32),$l}function yu(e,t,n){(e===H&&(G===2||G===9)||e.cancelPendingCommit!==null)&&(Eu(e,0),Cu(e,W,$l,!1)),rt(e,n),(!(V&2)||e!==H)&&(e===H&&(!(V&2)&&(Zl|=n),Yl===4&&Cu(e,W,$l,!1)),od(e))}function bu(e,t,n){if(V&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||$e(e,t),a=r?q(e,t):Mu(e,t,!0),o=r;do{if(a===0){Kl&&!r&&Cu(e,t,0,!1);break}if(n=e.current.alternate,o&&!Su(n)){a=Mu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=tu;var l=c.current.memoizedState.isDehydrated;if(l&&(Eu(c,s).flags|=256),s=Mu(c,s,!1),s!==2){if(ql&&!l){c.errorRecoveryDisabledLanes|=o,Zl|=o,a=4;break a}o=nu,nu=a,o!==null&&(nu===null?nu=o:nu.push.apply(nu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Eu(e,0),Cu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Cu(r,t,$l,!Gl);break a;case 2:nu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=iu+300-Me(),10<a)){if(Cu(r,t,$l,!Gl),Qe(r,0,!0)!==0)break a;du=t,r.timeoutHandle=Yd(xu.bind(null,r,n,nu,K,ru,t,$l,Zl,eu,Gl,o,`Throttled`,-0,0),a);break a}xu(r,n,nu,K,ru,t,$l,Zl,eu,Gl,o,null,-0,0)}break}while(1);od(e)}function xu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Il(t,a,d);var m=(a&62914560)===a?iu-Me():(a&4194048)===a?au-Me():0;if(m=Jf(d,m),m!==null){du=a,e.cancelPendingCommit=m(Bu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Cu(e,a,o,!l);return}}Bu(e,t,a,n,r,i,o,s,c)}function Su(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cu(e,t,n,r){t&=~Ql,t&=~Zl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function wu(){return V&6?!0:(sd(0,!1),!1)}function Tu(){if(U!==null){if(G===0)var e=U.return;else e=U,Qi=Zi=null,No(e),Ia=null,La=0,e=U;for(;e!==null;)Gc(e.alternate,e),e=e.return;U=null}}function Eu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Xd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),du=0,Tu(),H=e,U=n=gi(e.current,null),W=t,G=0,Wl=null,Gl=!1,Kl=$e(e,t),ql=!1,eu=$l=Ql=Zl=Xl=Yl=0,nu=tu=null,ru=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Jl=t,oi(),n}function Du(e,t){L=null,O.H=Us,t===Ea||t===Oa?(t=Pa(),G=3):t===Da?(t=Pa(),G=4):G=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Wl=t,U===null&&(Yl=1,tc(e,wi(t,e.current)))}function Ou(){var e=so.current;return e===null?!0:(W&4194048)===W?co===null:(W&62914560)===W||W&536870912?e===co:!1}function ku(){var e=O.H;return O.H=Us,e===null?Us:e}function Au(){var e=O.A;return O.A=Hl,e}function ju(){Yl=4,Gl||(W&4194048)!==W&&so.current!==null||(Kl=!0),!(Xl&134217727)&&!(Zl&134217727)||H===null||Cu(H,W,$l,!1)}function Mu(e,t,n){var r=V;V|=2;var i=ku(),a=Au();(H!==e||W!==t)&&(K=null,Eu(e,t)),t=!1;var o=Yl;a:do try{if(G!==0&&U!==null){var s=U,c=Wl;switch(G){case 8:Tu(),o=6;break a;case 3:case 2:case 9:case 6:so.current===null&&(t=!0);var l=G;if(G=0,Wl=null,Lu(e,s,c,l),n&&Kl){o=0;break a}break;default:l=G,G=0,Wl=null,Lu(e,s,c,l)}}Nu(),o=Yl;break}catch(t){Du(e,t)}while(1);return t&&e.shellSuspendCounter++,Qi=Zi=null,V=r,O.H=i,O.A=a,U===null&&(H=null,W=0,oi()),o}function Nu(){for(;U!==null;)Fu(U)}function q(e,t){var n=V;V|=2;var r=ku(),a=Au();H!==e||W!==t?(K=null,ou=Me()+500,Eu(e,t)):Kl=$e(e,t);a:do try{if(G!==0&&U!==null){t=U;var o=Wl;b:switch(G){case 1:G=0,Wl=null,Lu(e,t,o,1);break;case 2:case 9:if(Aa(o)){G=0,Wl=null,Iu(t);break}t=function(){G!==2&&G!==9||H!==e||(G=7),od(e)},o.then(t,t);break a;case 3:G=7;break a;case 4:G=5;break a;case 7:Aa(o)?(G=0,Wl=null,Iu(t)):(G=0,Wl=null,Lu(e,t,o,7));break;case 5:var s=null;switch(U.tag){case 26:s=U.memoizedState;case 5:case 27:var c=U;if(s?Gf(s):c.stateNode.complete){G=0,Wl=null;var l=c.sibling;if(l!==null)U=l;else{var u=c.return;u===null?U=null:(U=u,Ru(u))}break b}}G=0,Wl=null,Lu(e,t,o,5);break;case 6:G=0,Wl=null,Lu(e,t,o,6);break;case 8:Tu(),Yl=6;break a;default:throw Error(i(462))}}Pu();break}catch(t){Du(e,t)}while(1);return Qi=Zi=null,O.H=r,O.A=a,V=n,U===null?(H=null,W=0,oi(),Yl):0}function Pu(){for(;U!==null&&!Ae();)Fu(U)}function Fu(e){var t=Lc(e.alternate,e,Jl);e.memoizedProps=e.pendingProps,t===null?Ru(e):U=t}function Iu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=xc(n,t,t.pendingProps,t.type,void 0,W);break;case 11:t=xc(n,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:No(t);default:Gc(n,t),t=U=_i(t,Jl),t=Lc(n,t,Jl)}e.memoizedProps=e.pendingProps,t===null?Ru(e):U=t}function Lu(e,t,n,r){Qi=Zi=null,No(t),Ia=null,La=0;var i=t.return;try{if(oc(e,i,t,n,W)){Yl=1,tc(e,wi(n,e.current)),U=null;return}}catch(t){if(i!==null)throw U=i,t;Yl=1,tc(e,wi(n,e.current)),U=null;return}t.flags&32768?(P||r===1?e=!0:Kl||W&536870912?e=!1:(Gl=e=!0,(r===2||r===9||r===3||r===6)&&(r=so.current,r!==null&&r.tag===13&&(r.flags|=16384))),zu(t,e)):Ru(t)}function Ru(e){var t=e;do{if(t.flags&32768){zu(t,Gl);return}e=t.return;var n=Uc(t.alternate,t,Jl);if(n!==null){U=n;return}if(t=t.sibling,t!==null){U=t;return}U=t=e}while(t!==null);Yl===0&&(Yl=5)}function zu(e,t){do{var n=Wc(e.alternate,e);if(n!==null){n.flags&=32767,U=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){U=e;return}U=e=n}while(e!==null);Yl=6,U=null}function Bu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Gu();while(cu!==0);if(V&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ai,it(e,n,o,s,c,l),e===H&&(U=H=null,W=0),uu=t,lu=e,du=n,fu=o,pu=a,mu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,$u(Ie,function(){return Ku(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=V,V|=4;try{ul(e,t,n)}finally{V=s,k.p=a,O.T=r}}cu=1,Vu(),Hu(),Uu()}}function Vu(){if(cu===1){cu=0;var e=lu,t=uu,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=V;V|=4;try{Sl(t,e);var a=Hd,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mr(s.ownerDocument.documentElement,s)){if(c!==null&&Pr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Vd,Hd=Vd=null}finally{V=i,k.p=r,O.T=n}}e.current=t,cu=2}}function Hu(){if(cu===2){cu=0;var e=lu,t=uu,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=V;V|=4;try{dl(e,t.alternate,t)}finally{V=i,k.p=r,O.T=n}}cu=3}}function Uu(){if(cu===4||cu===3){cu=0,je();var e=lu,t=uu,n=du,r=mu;t.subtreeFlags&10256||t.flags&10256?cu=5:(cu=0,uu=lu=null,Wu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(su=null),lt(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}du&3&&Gu(),od(e),i=e.pendingLanes,n&261930&&i&42?e===gu?hu++:(hu=0,gu=e):hu=0,sd(0,!1)}}function Wu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Gu(){return Vu(),Hu(),Uu(),Ku()}function Ku(){if(cu!==5)return!1;var e=lu,t=fu;fu=0;var n=lt(du),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=pu,pu=null;var o=lu,s=du;if(cu=0,uu=lu=null,du=0,V&6)throw Error(i(331));var c=V;if(V|=4,zl(o.current),jl(o,o.current,s,n),V=c,sd(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{k.p=a,O.T=r,Wu(e,t)}}function qu(e,t,n){t=wi(n,t),t=rc(e.stateNode,t,2),e=Ja(e,t,2),e!==null&&(rt(e,2),od(e))}function J(e,t,n){if(e.tag===3)qu(e,e,n);else for(;t!==null;){if(t.tag===3){qu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(su===null||!su.has(r))){e=wi(n,e),n=ic(2),r=Ja(t,n,2),r!==null&&(ac(n,r,t,e),rt(r,2),od(r));break}}t=t.return}}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ul;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ql=!0,i.add(n),e=Yu.bind(null,e,t,n),t.then(e,e))}function Yu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,H===e&&(W&n)===n&&(Yl===4||Yl===3&&(W&62914560)===W&&300>Me()-iu?!(V&2)&&Eu(e,0):Ql|=n,eu===W&&(eu=0)),od(e)}function Xu(e,t){t===0&&(t=tt()),e=li(e,t),e!==null&&(rt(e,t),od(e))}function Zu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Qu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Xu(e,n)}function $u(e,t){return Oe(e,t)}var ed=null,td=null,nd=!1,rd=!1,id=!1,ad=0;function od(e){e!==td&&e.next===null&&(td===null?ed=td=e:td=td.next=e),rd=!0,nd||(nd=!0,pd())}function sd(e,t){if(!id&&rd){id=!0;do for(var n=!1,r=ed;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,fd(r,a))}else a=W,a=Qe(r,r===H?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,fd(r,a))}r=r.next}while(n);id=!1}}function cd(){ld()}function ld(){rd=nd=!1;var e=0;ad!==0&&Jd()&&(e=ad);for(var t=Me(),n=null,r=ed;r!==null;){var i=r.next,a=ud(r,t);a===0?(r.next=null,n===null?ed=i:n.next=i,i===null&&(td=n)):(n=r,(e!==0||a&3)&&(rd=!0)),r=i}cu!==0&&cu!==5||sd(e,!1),ad!==0&&(ad=0)}function ud(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=H,n=W,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(G===2||G===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),lt(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=dd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function dd(e,t){if(cu!==0&&cu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Gu()&&e.callbackNode!==n)return null;var r=W;return r=Qe(e,e===H?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(bu(e,r,t),ud(e,Me()),e.callbackNode!=null&&e.callbackNode===n?dd.bind(null,e):null)}function fd(e,t){if(Gu())return null;bu(e,t,!0)}function pd(){Qd(function(){V&6?Oe(Pe,cd):ld()})}function md(){if(ad===0){var e=ga;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),ad=e}return ad}function hd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function gd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function _d(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=hd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?hd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Dn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ad!==0){var e=o?gd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?gd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var vd=0;vd<ei.length;vd++){var yd=ei[vd];ti(yd.toLowerCase(),`on`+(yd[0].toUpperCase()+yd.slice(1)))}ti(Kr,`onAnimationEnd`),ti(qr,`onAnimationIteration`),ti(Jr,`onAnimationStart`),ti(`dblclick`,`onDoubleClick`),ti(`focusin`,`onFocus`),ti(`focusout`,`onBlur`),ti(Yr,`onTransitionRun`),ti(Xr,`onTransitionStart`),ti(Zr,`onTransitionCancel`),ti(Qr,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var bd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),xd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(bd));function Sd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}}}}function Y(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Ed(t,e,2,!1),n.add(r))}function Cd(e,t,n){var r=0;t&&(r|=4),Ed(n,e,r,t)}var wd=`_reactListening`+Math.random().toString(36).slice(2);function Td(e){if(!e[wd]){e[wd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(xd.has(t)||Cd(t,!1,e),Cd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wd]||(t[wd]=!0,Cd(`selectionchange`,!1,t))}}function Ed(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Dd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=$r.get(e);if(c!==void 0){var l=Dn,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=qn;break;case Kr:case qr:case Jr:l=Ln;break;case Qr:l=Jn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=Yn;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Xn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Od(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ad,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&jd(s,c,l,d,!1),u!==null&&f!==null&&jd(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(ur(c)){if(_r)v=Er;else{v=wr;var y=Cr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=gr):v=Tr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,or=!0)),y=kd(r,x),0<y.length&&(x=new zn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=er?sr(e,n):cr(e,n))&&(x=kd(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),_d(s,e,r,n,i)}Sd(s,t)})}function Od(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Od(e,i,a)),i=hn(e,t),i!=null&&r.push(Od(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ad(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Od(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Od(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Md=/\r\n?/g,Nd=/\u0000|\uFFFD/g;function Pd(e){return(typeof e==`string`?e:``+e).replace(Md,`
`).replace(Nd,``)}function Fd(e,t){return t=Pd(t),Pd(e)===t}function X(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&X(e,t,`name`,a.name,a,null),X(e,t,`formEncType`,a.formEncType,a,null),X(e,t,`formMethod`,a.formMethod,a,null),X(e,t,`formTarget`,a.formTarget,a,null)):(X(e,t,`encType`,a.encType,a,null),X(e,t,`method`,a.method,a,null),X(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Y(`scroll`,e);break;case`onScrollEnd`:r!=null&&Y(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Y(`beforetoggle`,e),Y(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Id(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Y(`scroll`,e);break;case`onScrollEnd`:r!=null&&Y(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Ld(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Y(`error`,e),Y(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:X(e,t,o,s,n,null)}}a&&X(e,t,`srcSet`,n.srcSet,n,null),r&&X(e,t,`src`,n.src,n,null);return;case`input`:Y(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:X(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Y(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:X(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Y(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:X(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:X(e,t,l,r,n,null)}return;case`dialog`:Y(`beforetoggle`,e),Y(`toggle`,e),Y(`cancel`,e),Y(`close`,e);break;case`iframe`:case`object`:Y(`load`,e);break;case`video`:case`audio`:for(r=0;r<bd.length;r++)Y(bd[r],e);break;case`image`:Y(`error`,e),Y(`load`,e);break;case`details`:Y(`toggle`,e);break;case`embed`:case`source`:case`link`:Y(`error`,e),Y(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:X(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Id(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&X(e,t,c,r,n,null))}function Rd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||X(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&X(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||X(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&X(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:X(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&X(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:X(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:X(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&X(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:X(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Id(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Id(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&X(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||X(e,t,f,p,r,m)}function zd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Bd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&zd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&zd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Vd=null,Hd=null;function Ud(e){return e.nodeType===9?e:e.ownerDocument}function Wd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Gd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Kd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qd=null;function Jd(){var e=window.event;return e&&e.type===`popstate`?e!==qd&&(qd=e,!0):(qd=null,!1)}var Yd=typeof setTimeout==`function`?setTimeout:void 0,Xd=typeof clearTimeout==`function`?clearTimeout:void 0,Zd=typeof Promise==`function`?Promise:void 0,Qd=typeof queueMicrotask==`function`?queueMicrotask:Zd===void 0?Yd:function(e){return Zd.resolve(null).then(e).catch($d)};function $d(e){setTimeout(function(){throw e})}function ef(e){return e===`head`}function tf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)gf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,gf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&gf(e.ownerDocument.body)}n=i}while(n);Np(t)}function nf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function rf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:rf(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function af(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=df(e.nextSibling),e===null)break}return null}function of(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=df(e.nextSibling),e===null))return null;return e}function sf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=df(e.nextSibling),e===null))return null;return e}function cf(e){return e.data===`$?`||e.data===`$~`}function lf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function uf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function df(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var ff=null;function pf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return df(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function mf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function hf(e,t,n){switch(t=Ud(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var _f=new Map,vf=new Set;function yf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Z=k.d;k.d={f:bf,r:xf,D:wf,C:Tf,L:Ef,m:Df,X:kf,S:Of,M:Af};function bf(){var e=Z.f(),t=wu();return e||t}function xf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?js(t):Z.r(e)}var Sf=typeof document>`u`?null:document;function Cf(e,t,n){var r=Sf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),vf.has(i)||(vf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Ld(t,`link`,e),Et(t),r.head.appendChild(t)))}}function wf(e){Z.D(e),Cf(`dns-prefetch`,e,null)}function Tf(e,t){Z.C(e,t),Cf(`preconnect`,e,t)}function Ef(e,t,n){Z.L(e,t,n);var r=Sf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Mf(e);break;case`script`:a=Ff(e)}_f.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),_f.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Q(a))||t===`script`&&r.querySelector(If(a))||(t=r.createElement(`link`),Ld(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Df(e,t){Z.m(e,t);var n=Sf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Ff(e)}if(!_f.has(a)&&(e=m({rel:`modulepreload`,href:e},t),_f.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(If(a)))return}r=n.createElement(`link`),Ld(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Of(e,t,n){Z.S(e,t,n);var r=Sf;if(r&&e){var i=Tt(r).hoistableStyles,a=Mf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Q(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=_f.get(a))&&zf(e,n);var c=o=r.createElement(`link`);Et(c),Ld(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Rf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function kf(e,t){Z.X(e,t);var n=Sf;if(n&&e){var r=Tt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=m({src:e,async:!0},t),(t=_f.get(i))&&Bf(e,t),a=n.createElement(`script`),Et(a),Ld(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Af(e,t){Z.M(e,t);var n=Sf;if(n&&e){var r=Tt(n).hoistableScripts,i=Ff(e),a=r.get(i);a||(a=n.querySelector(If(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=_f.get(i))&&Bf(e,t),a=n.createElement(`script`),Et(a),Ld(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function jf(e,t,n,r){var a=(a=he.current)?yf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Mf(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Mf(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Q(e)))&&!o._p&&(s.instance=o,s.state.loading=5),_f.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},_f.set(e,n),o||Pf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Ff(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Mf(e){return`href="`+Gt(e)+`"`}function Q(e){return`link[rel="stylesheet"][`+e+`]`}function Nf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Pf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Ld(t,`link`,n),Et(t),e.head.appendChild(t))}function Ff(e){return`[src="`+Gt(e)+`"]`}function If(e){return`script[async]`+e}function Lf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Ld(r,`style`,a),Rf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Mf(n.href);var o=e.querySelector(Q(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Nf(n),(a=_f.get(a))&&zf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Ld(o,`link`,r),t.state.loading|=4,Rf(o,n.precedence,e),t.instance=o;case`script`:return o=Ff(n.src),(a=e.querySelector(If(o)))?(t.instance=a,Et(a),a):(r=n,(a=_f.get(o))&&(r=m({},n),Bf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Ld(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Rf(r,n.precedence,e));return t.instance}function Rf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Bf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Vf=null;function Hf(e,t,n){if(Vf===null){var r=new Map,i=Vf=new Map;i.set(n,r)}else i=Vf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Wf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Gf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Kf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Mf(r.href),a=t.querySelector(Q(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Nf(r),(i=_f.get(i))&&zf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Ld(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Yf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var qf=0;function Jf(e,t){return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&qf===0&&(qf=62500*Bd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>qf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xf=null;function Zf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xf=new Map,t.forEach($,e),Xf=null,Yf.call(e))}function $(e,t){if(!(t.state.loading&4)){var n=Xf.get(e);if(n)var r=n.get(null);else{n=new Map,Xf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Yf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ga(a),e}function tp(e){return e?(e=fi,e):fi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=qa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ja(e,r,t),n!==null&&(yu(n,e,t),Ya(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=li(e,67108864);t!==null&&yu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=_u();t=ct(t);var n=li(e,t);n!==null&&yu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Dd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}od(a),!(V&6)&&(ou=Me()+500,sd(0,!1))}}break;case 31:case 13:s=li(a,2),s!==null&&yu(s,a,2),wu(),ip(a,2)}if(a=dp(r),a===null&&Dd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Dd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,_u(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),wu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ve=zp.inject(Rp),He=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Qs,s=$s,c=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Td(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d(),1),y=_();function b(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function x(e){if(Array.isArray(e))return e}function ee(e){if(Array.isArray(e))return b(e)}function S(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,k(r.key),r)}}function te(e,t,n){return t&&C(e.prototype,t),n&&C(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ne(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=le(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function w(e,t,n){return(t=k(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ie(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ae(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?E(Object(n),!0).forEach(function(t){w(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function oe(e,t){return x(e)||ie(e,t)||le(e,t)||ae()}function se(e){return ee(e)||re(e)||le(e)||T()}function O(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function k(e){var t=O(e,`string`);return typeof t==`symbol`?t:t+``}function ce(e){"@babel/helpers - typeof";return ce=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ce(e)}function le(e,t){if(e){if(typeof e==`string`)return b(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}var ue=function(){},de={},fe={},A=null,pe={mark:ue,measure:ue};try{typeof window<`u`&&(de=window),typeof document<`u`&&(fe=document),typeof MutationObserver<`u`&&(A=MutationObserver),typeof performance<`u`&&(pe=performance)}catch{}var me=(de.navigator||{}).userAgent,he=me===void 0?``:me,ge=de,j=fe,_e=A,ve=pe;ge.document;var ye=!!j.documentElement&&!!j.head&&typeof j.addEventListener==`function`&&typeof j.createElement==`function`,be=~he.indexOf(`MSIE`)||~he.indexOf(`Trident/`),xe,Se=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Ce=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,we={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Te={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ee=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],De=`classic`,Oe=`duotone`,ke=`sharp`,Ae=`sharp-duotone`,je=`chisel`,Me=`etch`,Ne=`graphite`,Pe=`jelly`,Fe=`jelly-duo`,Ie=`jelly-fill`,Le=`mosaic`,Re=`notdog`,ze=`notdog-duo`,Be=`pixel`,Ve=`slab`,He=`slab-duo`,Ue=`slab-press`,We=`slab-press-duo`,Ge=`thumbprint`,Ke=`utility`,qe=`utility-duo`,Je=`utility-fill`,Ye=`vellum`,Xe=`whiteboard`,Ze=`Classic`,Qe=`Duotone`,$e=`Sharp`,et=`Sharp Duotone`,tt=`Chisel`,nt=`Etch`,rt=`Graphite`,it=`Jelly`,at=`Jelly Duo`,ot=`Jelly Fill`,st=`Mosaic`,ct=`Notdog`,lt=`Notdog Duo`,ut=`Pixel`,dt=`Slab`,ft=`Slab Duo`,pt=`Slab Press`,mt=`Slab Press Duo`,ht=`Thumbprint`,gt=`Utility`,_t=`Utility Duo`,vt=`Utility Fill`,yt=`Vellum`,bt=`Whiteboard`,xt=[De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe];xe={},w(w(w(w(w(w(w(w(w(w(xe,De,Ze),Oe,Qe),ke,$e),Ae,et),je,tt),Me,nt),Ne,rt),Pe,it),Fe,at),Ie,ot),w(w(w(w(w(w(w(w(w(w(xe,Le,st),Re,ct),ze,lt),Be,ut),Ve,dt),He,ft),Ue,pt),We,mt),Ge,ht),Ke,gt),w(w(w(w(xe,qe,_t),Je,vt),Ye,yt),Xe,bt);var St={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Ct={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},wt=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Tt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Et=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Dt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Ot=[`kit`];w(w({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var kt={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},At={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},jt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Mt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Nt,Pt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ft=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Nt={},w(w(w(w(w(w(w(w(w(w(Nt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),w(w(w(w(w(w(w(w(w(w(Nt,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),w(w(w(w(Nt,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),w(w({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var It={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Lt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Rt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},zt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Ft,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Bt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Vt=[1,2,3,4,5,6,7,8,9,10],Ht=Vt.concat([11,12,13,14,15,16,17,18,19,20]),Ut=[].concat(se(Object.keys(Lt)),Bt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Pt.GROUP,Pt.SWAP_OPACITY,Pt.PRIMARY,Pt.SECONDARY],Vt.map(function(e){return`${e}x`}),Ht.map(function(e){return`w-${e}`})),Wt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},Gt=`___FONT_AWESOME___`,Kt=16,qt=`fa`,Jt=`svg-inline--fa`,Yt=`data-fa-i2svg`,Xt=`data-fa-pseudo-element`,Zt=`data-fa-pseudo-element-pending`,Qt=`data-prefix`,$t=`data-icon`,en=`fontawesome-i2svg`,tn=`async`,nn=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],rn=[`::before`,`::after`,`:before`,`:after`],an=function(){try{return!0}catch{return!1}}();function on(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[De]}})}var sn=D({},we);sn[De]=D(D(D(D({},{"fa-duotone":`duotone`}),we[De]),Dt.kit),Dt[`kit-duotone`]);var cn=on(sn),ln=D({},Tt);ln[De]=D(D(D(D({},{duotone:`fad`}),ln[De]),Mt.kit),Mt[`kit-duotone`]);var un=on(ln),dn=D({},Rt);dn[De]=D(D({},dn[De]),jt.kit);var fn=on(dn),pn=D({},It);pn[De]=D(D({},pn[De]),kt.kit),on(pn);var mn=Se,hn=`fa-layers-text`,gn=Ce;on(D({},St));var _n=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],vn=Te,yn=[].concat(se(Ot),se(Ut)),bn=ge.FontAwesomeConfig||{};function xn(e){var t=j.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Sn(e){return e===``?!0:e===`false`?!1:e===`true`||e}j&&typeof j.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=oe(e,2),n=t[0],r=t[1],i=Sn(xn(n));i!=null&&(bn[r]=i)});var Cn={styleDefault:`solid`,familyDefault:De,cssPrefix:qt,replacementClass:Jt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};bn.familyPrefix&&(bn.cssPrefix=bn.familyPrefix);var wn=D(D({},Cn),bn);wn.autoReplaceSvg||(wn.observeMutations=!1);var M={};Object.keys(Cn).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(t){wn[e]=t,Tn.forEach(function(e){return e(M)})},get:function(){return wn[e]}})}),Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(e){wn.cssPrefix=e,Tn.forEach(function(e){return e(M)})},get:function(){return wn.cssPrefix}}),ge.FontAwesomeConfig=M;var Tn=[];function En(e){return Tn.push(e),function(){Tn.splice(Tn.indexOf(e),1)}}var Dn=Kt,On={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function kn(e){if(!(!e||!ye)){var t=j.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=j.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return j.head.insertBefore(t,r),e}}var An=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function jn(){for(var e=12,t=``;e-->0;)t+=An[Math.random()*62|0];return t}function Mn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Nn(e){return e.classList?Mn(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function Pn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Fn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${Pn(e[n])}" `},``).trim()}function In(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Ln(e){return e.size!==On.size||e.x!==On.x||e.y!==On.y||e.rotate!==On.rotate||e.flipX||e.flipY}function Rn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function zn(e){var t=e.transform,n=e.width,r=n===void 0?Kt:n,i=e.height,a=i===void 0?Kt:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&be?`translate(${t.x/Dn-r/2}em, ${t.y/Dn-a/2}em) `:s?`translate(calc(-50% + ${t.x/Dn}em), calc(-50% + ${t.y/Dn}em)) `:`translate(${t.x/Dn}em, ${t.y/Dn}em) `,c+=`scale(${t.size/Dn*(t.flipX?-1:1)}, ${t.size/Dn*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var Bn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Vn(){var e=qt,t=Jt,n=M.cssPrefix,r=M.replacementClass,i=Bn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Hn=!1;function Un(){M.autoAddCss&&!Hn&&(kn(Vn()),Hn=!0)}var Wn={mixout:function(){return{dom:{css:Vn,insertCss:Un}}},hooks:function(){return{beforeDOMElementCreation:function(){Un()},beforeI2svg:function(){Un()}}}},Gn=ge||{};Gn[Gt]||(Gn[Gt]={}),Gn[Gt].styles||(Gn[Gt].styles={}),Gn[Gt].hooks||(Gn[Gt].hooks={}),Gn[Gt].shims||(Gn[Gt].shims=[]);var Kn=Gn[Gt],qn=[],Jn=function(){j.removeEventListener(`DOMContentLoaded`,Jn),Yn=1,qn.map(function(e){return e()})},Yn=!1;ye&&(Yn=(j.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(j.readyState),Yn||j.addEventListener(`DOMContentLoaded`,Jn));function Xn(e){ye&&(Yn?setTimeout(e,0):qn.push(e))}function Zn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?Pn(e):`<${t} ${Fn(r)}>${a.map(Zn).join(``)}</${t}>`}function Qn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var $n=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},er=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:$n(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function tr(e){return se(e).length===1?e.codePointAt(0).toString(16):null}function nr(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function rr(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=nr(t);typeof Kn.hooks.addPack==`function`&&!r?Kn.hooks.addPack(e,nr(t)):Kn.styles[e]=D(D({},Kn.styles[e]||{}),i),e===`fas`&&rr(`fa`,t)}var ir=Kn.styles,ar=Kn.shims,or=Object.keys(fn),sr=or.reduce(function(e,t){return e[t]=Object.keys(fn[t]),e},{}),cr=null,lr={},ur={},dr={},fr={},pr={};function mr(e){return~yn.indexOf(e)}function hr(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!mr(i)?i:null}var gr=function(){var e=function(e){return er(ir,function(t,n,r){return t[r]=er(n,e,{}),t},{})};lr=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),ur=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),pr=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in ir||M.autoFetchSvg,n=er(ar,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});dr=n.names,fr=n.unicodes,cr=Tr(M.styleDefault,{family:M.familyDefault})};En(function(e){cr=Tr(e.styleDefault,{family:M.familyDefault})}),gr();function _r(e,t){return(lr[e]||{})[t]}function vr(e,t){return(ur[e]||{})[t]}function yr(e,t){return(pr[e]||{})[t]}function br(e){return dr[e]||{prefix:null,iconName:null}}function xr(e){var t=fr[e],n=_r(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function Sr(){return cr}var Cr=function(){return{prefix:null,iconName:null,rest:[]}};function wr(e){var t=De,n=or.reduce(function(e,t){return e[t]=`${M.cssPrefix}-${t}`,e},{});return xt.forEach(function(r){(e.includes(n[r])||e.some(function(e){return sr[r].includes(e)}))&&(t=r)}),t}function Tr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?De:t,r=cn[n][e];if(n===Oe&&!e)return`fad`;var i=un[n][e]||un[n][r],a=e in Kn.styles?e:null;return i||a||null}function Er(e){var t=[],n=null;return e.forEach(function(e){var r=hr(M.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Dr(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Or=zt.concat(Et);function kr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=Dr(e.filter(function(e){return Or.includes(e)})),a=Dr(e.filter(function(e){return!Or.includes(e)})),o=oe(i.filter(function(e){return r=e,!Ee.includes(e)}),1)[0],s=o===void 0?null:o,c=wr(i),l=D(D({},Er(a)),{},{prefix:Tr(s,{family:c})});return D(D(D({},l),Nr({values:e,family:c,styles:ir,config:M,canonical:l,givenPrefix:r})),Ar(n,r,l))}function Ar(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?br(i):{},o=yr(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!ir.far&&ir.fas&&!M.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var jr=xt.filter(function(e){return e!==De||e!==Oe}),Mr=Object.keys(Rt).filter(function(e){return e!==De}).map(function(e){return Object.keys(Rt[e])}).flat();function Nr(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===Oe,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&jr.includes(n)&&(Object.keys(s).find(function(e){return Mr.includes(e)})||l.autoFetchSvg)&&(r.prefix=wt.get(n).defaultShortPrefixId,r.iconName=yr(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=Sr()||`fas`),r}var Pr=function(){function e(){S(this,e),this.definitions={}}return te(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=D(D({},e.definitions[n]||{}),t[n]),rr(n,t[n]);var r=fn[De][n];r&&rr(r,t[n]),gr()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Fr=[],Ir={},Lr={},Rr=Object.keys(Lr);function zr(e,t){var n=t.mixoutsTo;return Fr=e,Ir={},Object.keys(Lr).forEach(function(e){Rr.indexOf(e)===-1&&delete Lr[e]}),Fr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),ce(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){Ir[e]||(Ir[e]=[]),Ir[e].push(r[e])})}e.provides&&e.provides(Lr)}),n}function Br(e,t){var n=[...arguments].slice(2);return(Ir[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Vr(e){var t=[...arguments].slice(1);(Ir[e]||[]).forEach(function(e){e.apply(null,t)})}function Hr(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Lr[e]?Lr[e].apply(null,t):void 0}function Ur(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||Sr();if(t)return t=yr(n,t)||t,Qn(Wr.definitions,n,t)||Qn(Kn.styles,n,t)}var Wr=new Pr,Gr={noAuto:function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Vr(`noAuto`)},config:M,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ye?(Vr(`beforeI2svg`,e),Hr(`pseudoElements2svg`,e),Hr(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Xn(function(){Kr({autoReplaceSvgRoot:t}),Vr(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(ce(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:yr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Tr(e[0]);return{prefix:n,iconName:yr(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${M.cssPrefix}-`)>-1||e.match(mn))){var r=kr(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||Sr(),iconName:yr(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=Sr();return{prefix:i,iconName:yr(i,e)||e}}}},library:Wr,findIconDefinition:Ur,toHtml:Zn},Kr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?j:e;(Object.keys(Kn.styles).length>0||M.autoFetchSvg)&&ye&&M.autoReplaceSvg&&Gr.dom.i2svg({node:t})};function qr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Zn(e)})}}),Object.defineProperty(e,"node",{get:function(){if(ye){var t=j.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Jr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Ln(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=In(D(D({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Yr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${M.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:D(D({},i),{},{id:o}),children:r}]}]}function Xr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Zr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[M.replacementClass,a?`${M.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:D(D({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Xr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[Yt]=``);var _=D(D({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:D({},l.styles)}),v=r.found&&n.found?Hr(`generateAbstractMask`,_)||{children:[],attributes:{}}:Hr(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Yr(_):Jr(_)}function Qr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=D(D({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[Yt]=``);var l=D({},a.styles);Ln(i)&&(l.transform=zn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=In(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function $r(e){var t=e.content,n=e.extra,r=D(D({},n.attributes),{},{class:n.classes.join(` `)}),i=In(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var ei=Kn.styles;function ti(e){var t=e[0],n=e[1],r=oe(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${M.cssPrefix}-${vn.GROUP}`},children:[{tag:`path`,attributes:{class:`${M.cssPrefix}-${vn.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${M.cssPrefix}-${vn.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var ni={found:!1,width:512,height:512};function ri(e,t){!an&&!M.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function ii(e,t){var n=t;return t===`fa`&&M.styleDefault!==null&&(t=Sr()),new Promise(function(r,i){if(n===`fa`){var a=br(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&ei[t]&&ei[t][e]){var o=ei[t][e];return r(ti(o))}ri(e,t),r(D(D({},ni),{},{icon:M.showMissingIcons&&e&&Hr(`missingIconAbstract`)||{}}))})}var ai=function(){},oi=M.measurePerformance&&ve&&ve.mark&&ve.measure?ve:{mark:ai,measure:ai},si=`FA "7.3.1"`,ci=function(e){return oi.mark(`${si} ${e} begins`),function(){return li(e)}},li=function(e){oi.mark(`${si} ${e} ends`),oi.measure(`${si} ${e}`,`${si} ${e} begins`,`${si} ${e} ends`)},ui={begin:ci,end:li},di=function(){};function fi(e){return typeof(e.getAttribute?e.getAttribute(Yt):null)==`string`}function pi(e){var t=e.getAttribute?e.getAttribute(Qt):null,n=e.getAttribute?e.getAttribute($t):null;return t&&n}function mi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function hi(){return M.autoReplaceSvg===!0?bi.replace:bi[M.autoReplaceSvg]||bi.replace}function gi(e){return j.createElementNS(`http://www.w3.org/2000/svg`,e)}function _i(e){return j.createElement(e)}function vi(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?gi:_i:t;if(typeof e==`string`)return j.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(vi(e,{ceFn:n}))}),r}function yi(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var bi={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(vi(e),t)}),t.getAttribute(Yt)===null&&M.keepOriginalSource){var n=j.createComment(yi(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~Nn(t).indexOf(M.replacementClass))return bi.replace(e);var r=RegExp(`${M.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===M.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Zn(e)}).join(`
`);t.setAttribute(Yt,``),t.innerHTML=a}};function xi(e){e()}function Si(e,t){var n=typeof t==`function`?t:di;if(e.length===0)n();else{var r=xi;M.mutateApproach===tn&&(r=ge.requestAnimationFrame||xi),r(function(){var t=hi(),r=ui.begin(`mutate`);e.map(t),r(),n()})}}var Ci=!1;function wi(){Ci=!0}function Ti(){Ci=!1}var Ei=null;function Di(e){if(_e&&M.observeMutations){var t=e.treeCallback,n=t===void 0?di:t,r=e.nodeCallback,i=r===void 0?di:r,a=e.pseudoElementsCallback,o=a===void 0?di:a,s=e.observeMutationsRoot,c=s===void 0?j:s;Ei=new _e(function(e){if(!Ci){var t=Sr();Mn(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!fi(e.addedNodes[0])&&(M.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&M.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&fi(e.target)&&~_n.indexOf(e.attributeName)){if(e.attributeName===`class`&&pi(e.target)){var r=kr(Nn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Qt,a||t),s&&e.target.setAttribute($t,s)}else mi(e.target)&&i(e.target)}})}}),ye&&Ei.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Oi(){Ei&&Ei.disconnect()}function ki(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Ai(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=kr(Nn(e));return i.prefix||=Sr(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=vr(i.prefix,e.innerText)||_r(i.prefix,tr(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function ji(e){return Mn(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Mi(){return{iconName:null,prefix:null,transform:On,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ai(e),r=n.iconName,i=n.prefix,a=n.rest,o=ji(e),s=Br(`parseNodeAttributes`,{},e);return D({iconName:r,prefix:i,transform:On,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?ki(e):[],attributes:o}},s)}var Pi=Kn.styles;function Fi(e){var t=M.autoReplaceSvg===`nest`?Ni(e,{styleParser:!1}):Ni(e);return~t.extra.classes.indexOf(hn)?Hr(`generateLayersText`,e,t):Hr(`generateSvgReplacementMutation`,e,t)}function Ii(){return[].concat(se(Et),se(zt))}function Li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ye)return Promise.resolve();var n=j.documentElement.classList,r=function(e){return n.add(`${en}-${e}`)},i=function(e){return n.remove(`${en}-${e}`)},a=M.autoFetchSvg?Ii():Ee.concat(Object.keys(Pi));a.includes(`fa`)||a.push(`fa`);var o=[`.${hn}:not([${Yt}])`].concat(a.map(function(e){return`.${e}:not([${Yt}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=Mn(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=ui.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Fi(t);n&&e.push(n)}catch(e){an||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Si(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fi(e).then(function(e){e&&Si([e],t)})}function zi(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ur(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Ur(i||{}),e(r,D(D({},n),{},{mask:i}))}}var N=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?On:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return qr(D({type:`icon`},e),function(){return Vr(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Zr({icons:{main:ti(v),mask:s?ti(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:D(D({},On),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},P={mixout:function(){return{icon:zi(N)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Li,e.nodeCallback=Ri,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?j:t,r=e.callback;return Li(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([ii(n,r),o.iconName?ii(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=oe(o,2),u=l[0],d=l[1];t([e,Zr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=In(a);o.length>0&&(n.style=o);var s;return Ln(i)&&(s=Hr(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Bi={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return qr({type:`layer`},function(){Vr(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${M.cssPrefix}-layers`].concat(se(r)).join(` `)},children:n}]})}}}},Vi={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return qr({type:`counter`,content:e},function(){return Vr(`beforeDOMElementCreation`,{content:e,params:t}),$r({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${M.cssPrefix}-layers-counter`].concat(se(a))}})})}}}},Hi={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?On:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return qr({type:`text`,content:e},function(){return Vr(`beforeDOMElementCreation`,{content:e,params:t}),Qr({content:e,transform:D(D({},On),r),extra:{attributes:s,styles:l,classes:[`${M.cssPrefix}-layers-text`].concat(se(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(be){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Qr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Ui=RegExp(`"`,`ug`),Wi=[1105920,1112319],Gi=D(D(D(D({},{FontAwesome:{normal:`fas`,400:`fas`}}),Ct),Wt),At),Ki=Object.keys(Gi).reduce(function(e,t){return e[t.toLowerCase()]=Gi[t],e},{}),qi=Object.keys(Ki).reduce(function(e,t){var n=Ki[t];return e[t]=n[900]||se(Object.entries(n))[0][1],e},{});function Ji(e){return tr(se(e.replace(Ui,``))[0]||``)}function Yi(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Ui,``),r=n.codePointAt(0),i=r>=Wi[0]&&r<=Wi[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Xi(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Ki[n]||{})[i]||qi[n]}function Zi(e,t){var n=`${Zt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Mn(e.children).filter(function(e){return e.getAttribute(Xt)===t})[0],o=ge.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(gn),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Xi(s,l),p=Ji(d),m=c[0].startsWith(`FontAwesome`),h=Yi(o),g=_r(f,p),_=g;if(m){var v=xr(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Qt)!==f||a.getAttribute($t)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Mi(),b=y.extra;b.attributes[Xt]=t,ii(g,f).then(function(i){var a=Zr(D(D({},y),{},{icons:{main:i,mask:Cr()},prefix:f,iconName:_,extra:b,watchable:!0})),o=j.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Zn(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Qi(e){return Promise.all([Zi(e,`::before`),Zi(e,`::after`)])}function $i(e){return e.parentNode!==document.head&&!~nn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Xt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var ea=function(e){return!!e&&rn.some(function(t){return e.includes(t)})},ta=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=ne(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(ea(a)){var o=rn.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function na(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(ye){var n;if(t)n=e;else if(M.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=ne(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=ne(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=ne(ta(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){M.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=Mn(n).filter($i).map(Qi),i=ui.begin(`searchPseudoElements`);wi(),Promise.all(r).then(function(){i(),Ti(),e()}).catch(function(){i(),Ti(),t()})})}}var ra={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=na,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?j:t;M.searchPseudoElements&&na(n)}}},ia=!1,aa={mixout:function(){return{dom:{unwatch:function(){wi(),ia=!0}}}},hooks:function(){return{bootstrap:function(){Di(Br(`mutationObserverCallbacks`,{}))},noAuto:function(){Oi()},watch:function(e){var t=e.observeMutationsRoot;ia?Ti():Di(Br(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},oa=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},sa={mixout:function(){return{parse:{transform:function(e){return oa(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=oa(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:D({},a.outer),children:[{tag:`g`,attributes:D({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:D(D({},t.icon.attributes),a.path)}]}]}}}},ca={x:0,y:0,width:`100%`,height:`100%`};function la(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function ua(e){return e.tag===`g`?e.children:[e]}zr([Wn,P,Bi,Vi,Hi,ra,aa,sa,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?kr(n.split(` `).map(function(e){return e.trim()})):Cr();return r.prefix||=Sr(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Rn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:D(D({},ca),{},{fill:`white`})},p=c.children?{children:c.children.map(la)}:{},m={tag:`g`,attributes:D({},d.inner),children:[la(D({tag:c.tag,attributes:D(D({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:D({},d.outer),children:[m]},g=`mask-${a||jn()}`,_=`clip-${a||jn()}`,v={tag:`mask`,attributes:D(D({},ca),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:ua(u)},v]};return t.push(y,{tag:`rect`,attributes:D({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},ca)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;ge.matchMedia&&(t=ge.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:D(D({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=D(D({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:D(D({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:D(D({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:D(D({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:D(D({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:D(D({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:D(D({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:D(D({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:Gr}),Gr.noAuto;var da=Gr.config;Gr.library,Gr.dom;var fa=Gr.parse;Gr.findIconDefinition,Gr.toHtml;var pa=Gr.icon;Gr.layer,Gr.text,Gr.counter;var ma=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),F=o(((e,t)=>{t.exports=ma()}))();function ha(e){return e-=0,e===e}function ga(e){return ha(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var _a=(e,t)=>v.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function va(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ya=new Map,ba=1e3;function xa(e){if(ya.has(e))return ya.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=ga(n);t[e.startsWith(`webkit`)?va(e):e]=r}}}n=a+1}if(ya.size===ba){let e=ya.keys().next().value;e&&ya.delete(e)}return ya.set(e,t),t}function Sa(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),Sa(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=xa(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[ga(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(_a)))}return e(t.tag,{...a,...u},...r)}var Ca=Sa.bind(null,v.createElement),wa=(e,t)=>{let n=(0,v.useId)();return e||(t?n:void 0)},Ta=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var Ea=`searchPseudoElementsFullScan`in da&&typeof da.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,Da=Number.parseInt(Ea)>=7,Oa=()=>Da,ka=`fa`,Aa={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},ja={left:`fa-pull-left`,right:`fa-pull-right`},Ma={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},Na={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},Pa={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},Fa={default:`fa-layers`};function Ia(e){let t=da.cssPrefix||da.familyPrefix||ka;return t===ka?e:e.replace(new RegExp(String.raw`(?<=^|\s)${ka}-`,`g`),`${t}-`)}function La(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:b,canvasRoomy:x,flip360:ee,buzz:S,float:C,jello:te,spinSnap:ne,spinSnap4:w,spinSnap8:re,swing:ie,wag:ae,className:T}=e,E=[];return T&&E.push(...T.split(` `)),t&&E.push(Aa.beat),n&&E.push(Aa.fade),r&&E.push(Aa.beatFade),i&&E.push(Aa.bounce),a&&E.push(Aa.shake),o&&E.push(Aa.spin),c&&E.push(Aa.spinReverse),s&&E.push(Aa.spinPulse),l&&E.push(Aa.pulse),u&&E.push(Pa.fixedWidth),d&&E.push(Pa.inverse),f&&E.push(Pa.border),p===!0&&E.push(Pa.flip),(p===`horizontal`||p===`both`)&&E.push(Pa.flipHorizontal),(p===`vertical`||p===`both`)&&E.push(Pa.flipVertical),m!=null&&E.push(Na[m]),h!=null&&h!==0&&E.push(Ma[h]),g!=null&&E.push(ja[g]),_&&E.push(Pa.swapOpacity),Oa()?(v&&E.push(Pa.rotateBy),y&&E.push(Pa.widthAuto),b&&E.push(Pa.canvasSquare),x&&E.push(Pa.canvasRoomy),ee&&E.push(Aa.flip360),S&&E.push(Aa.buzz),C&&E.push(Aa.float),te&&E.push(Aa.jello),ne&&E.push(Aa.spinSnap),w&&E.push(Aa.spinSnap4),re&&E.push(Aa.spinSnap8),ie&&E.push(Aa.swing),ae&&E.push(Aa.wag),(da.cssPrefix||da.familyPrefix||ka)===ka?E:E.map(Ia)):E}var Ra=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function za(e){if(e)return Ra(e)?e:fa.icon(e)}function Ba(e){return Object.keys(e)}var Va=new Ta(`FontAwesomeIcon`),Ha={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},Ua=new Set(Object.keys(Ha)),Wa=v.forwardRef((e,t)=>{let n={...Ha,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=wa(c,!!i),d=wa(s,!!o),f=za(r);if(!f)return Va.error(`Icon lookup is undefined`,r),null;let p=La(n),m=typeof l==`string`?fa.transform(l):l,h=za(i),g=pa(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return Va.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of Ba(n))Ua.has(e)||(v[e]=n[e]);return Ca(_[0],v)});Wa.displayName=`FontAwesomeIcon`,`${Fa.default}${Pa.fixedWidth}`;var Ga={prefix:`fas`,iconName:`envelope`,icon:[512,512,[128386,9993,61443],`f0e0`,`M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z`]},Ka={prefix:`fas`,iconName:`magnifying-glass`,icon:[512,512,[128269,`search`],`f002`,`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`]},qa={prefix:`fas`,iconName:`clock`,icon:[512,512,[128339,`clock-four`],`f017`,`M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z`]},Ja={prefix:`fas`,iconName:`headset`,icon:[448,512,[],`f590`,`M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z`]},Ya={prefix:`fas`,iconName:`truck-fast`,icon:[640,512,[`shipping-fast`],`f48b`,`M64 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L621.3 192c12 12 18.7 28.3 18.7 45.3L640 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-3.3 0c-35.3 0-64-28.7-64-64l0-48-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 144c-13.3 0-24-10.7-24-24S10.7 96 24 96l40 0zM576 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM256 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z`]},Xa={prefix:`fas`,iconName:`phone`,icon:[512,512,[128222,128379],`f095`,`M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z`]},Za={prefix:`fas`,iconName:`shield-halved`,icon:[512,512,[`shield-alt`],`f3ed`,`M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z`]},Qa={prefix:`fas`,iconName:`location-dot`,icon:[384,512,[`map-marker-alt`],`f3c5`,`M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z`]},$a={prefix:`fas`,iconName:`cart-shopping`,icon:[640,512,[128722,`shopping-cart`],`f07a`,`M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z`]},eo=`modulepreload`,to=function(e){return`/`+e},no={},ro=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=to(t,n),t=s(t),t in no)return;no[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:eo,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},io=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,ao=/^[\\/]{2}/;function oo(e,t){return t+e.replace(/\\/g,`/`)}var so=`popstate`;function co(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function lo(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return mo(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ho(t)}return L(t,n,null,e)}function I(e,t){if(e===!1||e==null)throw Error(t)}function uo(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function fo(){return Math.random().toString(36).substring(2,10)}function po(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function mo(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?go(t):t,state:n,key:t&&t.key||r||fo(),mask:i}}function ho({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function go(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function L(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=co(e)?e:mo(h.location,e,t);n&&n(r,e),l=u()+1;let d=po(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=co(e)?e:mo(h.location,e,t);n&&n(r,e),l=u();let i=po(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return R(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(so,d),c=e,()=>{i.removeEventListener(so,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function R(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),I(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ho(t);return i=i.replace(/ $/,`%20`),!n&&ao.test(i)&&(i=r+i),new URL(i,r)}function _o(e,t,n=`/`){return vo(e,t,n,!1)}function vo(e,t,n,r,i){let a=Lo((typeof t==`string`?go(t):t).pathname||`/`,n);if(a==null)return null;let o=i??yo(e),s=null,c=Io(a);for(let e=0;s==null&&e<o.length;++e)s=Mo(o[e],c,r);return s}function yo(e){let t=bo(e);return So(t),t}function bo(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;I(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Go([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(I(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),bo(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Ao(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Fo(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of xo(e.path))a(e,t,!0,n)}),t}function xo(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=xo(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function So(e){e.sort((e,t)=>e.score===t.score?jo(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var Co=/^:[\w-]+$/,wo=3,To=2,Eo=1,Do=10,Oo=-2,ko=e=>e===`*`;function Ao(e,t){let n=e.split(`/`),r=n.length;return n.some(ko)&&(r+=Oo),t&&(r+=To),n.filter(e=>!ko(e)).reduce((e,t)=>e+(Co.test(t)?wo:t===``?Eo:Do),r)}function jo(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Mo(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Po(u,l,s.matcher,s.compiledParams):No(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=No({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Go([a,d.pathname]),pathnameBase:qo(Go([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Go([a,d.pathnameBase]))}return o}function No(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Fo(e.path,e.caseSensitive,e.end);return Po(e,t,n,r)}function Po(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Fo(e,t=!1,n=!0){uo(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Io(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return uo(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Lo(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ro(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?go(e):e,a;return n?(n=Wo(n),a=n.startsWith(`/`)?zo(n.substring(1),`/`):zo(n,t)):a=t,{pathname:a,search:Jo(r),hash:Yo(i)}}function zo(e,t){let n=Ko(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Bo(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Vo(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ho(e){let t=Vo(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Uo(e,t,n,r=!1){let i;typeof e==`string`?i=go(e):(i={...e},I(!i.pathname||!i.pathname.includes(`?`),Bo(`?`,`pathname`,`search`,i)),I(!i.pathname||!i.pathname.includes(`#`),Bo(`#`,`pathname`,`hash`,i)),I(!i.search||!i.search.includes(`#`),Bo(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ro(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Wo=e=>e.replace(/[\\/]{2,}/g,`/`),Go=e=>Wo(e.join(`/`)),Ko=e=>e.replace(/\/+$/,``),qo=e=>Ko(e).replace(/^\/*/,`/`),Jo=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Yo=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Xo=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Zo(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Qo(e){return Go(e.map(e=>e.route.path).filter(Boolean))||`/`}var $o=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function es(e,t){let n=e;if(typeof n!=`string`||!io.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if($o)try{let e=new URL(window.location.href),r=ao.test(n)?new URL(oo(n,e.protocol)):new URL(n),a=Lo(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{uo(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var ts=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(ts);var ns=[`GET`,...ts];new Set(ns);var rs=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function is(e){try{return rs.includes(new URL(e).protocol)}catch{return!1}}var as=v.createContext(null);as.displayName=`DataRouter`;var os=v.createContext(null);os.displayName=`DataRouterState`;var ss=v.createContext(!1);function cs(){return v.useContext(ss)}var ls=v.createContext({isTransitioning:!1});ls.displayName=`ViewTransition`;var us=v.createContext(new Map);us.displayName=`Fetchers`;var ds=v.createContext(null);ds.displayName=`Await`;var fs=v.createContext(null);fs.displayName=`Navigation`;var ps=v.createContext(null);ps.displayName=`Location`;var ms=v.createContext({outlet:null,matches:[],isDataRoute:!1});ms.displayName=`Route`;var hs=v.createContext(null);hs.displayName=`RouteError`;var gs=`REACT_ROUTER_ERROR`,_s=`REDIRECT`,vs=`ROUTE_ERROR_RESPONSE`;function ys(e){if(e.startsWith(`${gs}:${_s}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function bs(e){if(e.startsWith(`${gs}:${vs}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Xo(t.status,t.statusText,t.data)}catch{}}function xs(e,{relative:t}={}){I(Ss(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=v.useContext(fs),{hash:i,pathname:a,search:o}=Os(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Go([n,a])),r.createHref({pathname:s,search:o,hash:i})}function Ss(){return v.useContext(ps)!=null}function Cs(){return I(Ss(),`useLocation() may be used only in the context of a <Router> component.`),v.useContext(ps).location}var ws=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function Ts(e){v.useContext(fs).static||v.useLayoutEffect(e)}function Es(){let{isDataRoute:e}=v.useContext(ms);return e?Gs():Ds()}function Ds(){I(Ss(),`useNavigate() may be used only in the context of a <Router> component.`);let e=v.useContext(as),{basename:t,navigator:n}=v.useContext(fs),{matches:r}=v.useContext(ms),{pathname:i}=Cs(),a=JSON.stringify(Ho(r)),o=v.useRef(!1);return Ts(()=>{o.current=!0}),v.useCallback((r,s={})=>{if(uo(o.current,ws),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Uo(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Go([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}v.createContext(null);function Os(e,{relative:t}={}){let{matches:n}=v.useContext(ms),{pathname:r}=Cs(),i=JSON.stringify(Ho(n));return v.useMemo(()=>Uo(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function ks(e,t){return As(e,t)}function As(e,t,n){I(Ss(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=v.useContext(fs),{matches:i}=v.useContext(ms),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;qs(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=Cs(),d;if(t){let e=typeof t==`string`?go(t):t;I(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):_o(e,{pathname:p});uo(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),uo(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ls(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Go([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Go([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?v.createElement(ps.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function js(){let e=Ws(),t=Zo(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=v.createElement(v.Fragment,null,v.createElement(`p`,null,`💿 Hey developer 👋`),v.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,v.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,v.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:i},n):null,o)}var Ms=v.createElement(js,null),Ns=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=bs(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:v.createElement(ms.Provider,{value:this.props.routeContext},v.createElement(hs.Provider,{value:e,children:this.props.component}));return this.context?v.createElement(Fs,{error:e},t):t}};Ns.contextType=ss;var Ps=new WeakMap;function Fs({children:e,error:t}){let{basename:n}=v.useContext(fs);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ys(t.digest);if(e){let r=Ps.get(t);if(r)throw r;let i=es(e.location,n),a=i.absoluteURL||i.to;if(is(a))throw Error(`Invalid redirect location`);if($o&&!Ps.get(t)){if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Ps.set(t,n),n}}return v.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Is({routeContext:e,match:t,children:n}){let r=v.useContext(as);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(ms.Provider,{value:e},n)}function Ls(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);I(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Qo(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Ms,o&&(s<0&&c===0?(qs(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?v.createElement(n.route.Component,null):n.route.element?n.route.element:e,v.createElement(Is,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?v.createElement(Ns,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Rs(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zs(e){let t=v.useContext(as);return I(t,Rs(e)),t}function Bs(e){let t=v.useContext(os);return I(t,Rs(e)),t}function Vs(e){let t=v.useContext(ms);return I(t,Rs(e)),t}function Hs(e){let t=Vs(e),n=t.matches[t.matches.length-1];return I(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Us(){return Hs(`useRouteId`)}function Ws(){let e=v.useContext(hs),t=Bs(`useRouteError`),n=Hs(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Gs(){let{router:e}=zs(`useNavigate`),t=Hs(`useNavigate`),n=v.useRef(!1);return Ts(()=>{n.current=!0}),v.useCallback(async(r,i={})=>{uo(n.current,ws),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Ks={};function qs(e,t,n){!t&&!Ks[e]&&(Ks[e]=!0,uo(!1,n))}v.memo(Js);function Js({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return As(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Ys(e){I(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Xs({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){I(!Ss(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=v.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=go(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=v.useMemo(()=>{let e=Lo(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return uo(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:v.createElement(fs.Provider,{value:c},v.createElement(ps.Provider,{children:t,value:h}))}function Zs({children:e,location:t}){return ks(Qs(e),t)}v.Component;function Qs(e,t=[]){let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,Qs(e.props.children,i));return}I(e.type===Ys,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),I(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Qs(e.props.children,i)),n.push(a)}),n}var $s=`get`,ec=`application/x-www-form-urlencoded`;function tc(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function nc(e){return tc(e)&&e.tagName.toLowerCase()===`button`}function rc(e){return tc(e)&&e.tagName.toLowerCase()===`form`}function ic(e){return tc(e)&&e.tagName.toLowerCase()===`input`}function ac(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function oc(e,t){return e.button===0&&(!t||t===`_self`)&&!ac(e)}var sc=null;function cc(){if(sc===null)try{new FormData(document.createElement(`form`),0),sc=!1}catch{sc=!0}return sc}var lc=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function uc(e){return e!=null&&!lc.has(e)?(uo(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ec}"`),null):e}function dc(e,t){let n,r,i,a,o;if(rc(e)){let o=e.getAttribute(`action`);r=o?Lo(o,t):null,n=e.getAttribute(`method`)||$s,i=uc(e.getAttribute(`enctype`))||ec,a=new FormData(e)}else if(nc(e)||ic(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Lo(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||$s,i=uc(e.getAttribute(`formenctype`))||uc(o.getAttribute(`enctype`))||ec,a=new FormData(o,e),!cc()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(tc(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=$s,r=null,i=ec,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function fc(e,t){if(e===!1||e==null)throw Error(t)}function pc(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Lo(i.pathname,t)===`/`?`${Ko(t)}/_root.${r}`:`${Ko(i.pathname)}.${r}`,i}async function mc(e,t){if(e.id in t)return t[e.id];try{let n=await ro(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hc(e){return e!=null&&typeof e.page==`string`}function gc(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function _c(e,t,n){return Sc((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await mc(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(gc).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function vc(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function yc(e,t,{includeHydrateFallback:n}={}){return bc(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function bc(e){return[...new Set(e)]}function xc(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Sc(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!hc(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(xc(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Cc(){let e=v.useContext(as);return fc(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function wc(){let e=v.useContext(os);return fc(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Tc=v.createContext(void 0);Tc.displayName=`FrameworkContext`;function Ec(){let e=v.useContext(Tc);return fc(e,`You must render this element inside a <HydratedRouter> element`),e}function Dc(e,t){let n=v.useContext(Tc),[r,i]=v.useState(!1),[a,o]=v.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=v.useRef(null);v.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),v.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Oc(s,p),onBlur:Oc(c,m),onMouseEnter:Oc(l,p),onMouseLeave:Oc(u,m),onTouchStart:Oc(d,p)}]:[a,f,{}]:[!1,f,{}]}function Oc(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function kc({page:e,...t}){let n=cs(),{nonce:r}=Ec(),{router:i}=Cc(),a=v.useMemo(()=>_o(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?v.createElement(jc,{page:e,matches:a,...t}):v.createElement(Mc,{page:e,matches:a,...t})):null}function Ac(e){let{manifest:t,routeModules:n}=Ec(),[r,i]=v.useState([]);return v.useEffect(()=>{let r=!1;return _c(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function jc({page:e,matches:t,...n}){let r=Cs(),{future:i}=Ec(),{basename:a}=Cc(),o=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=pc(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,o.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Mc({page:e,matches:t,...n}){let r=Cs(),{future:i,manifest:a,routeModules:o}=Ec(),{basename:s}=Cc(),{loaderData:c,matches:l}=wc(),u=v.useMemo(()=>vc(e,t,l,a,r,`data`),[e,t,l,a,r]),d=v.useMemo(()=>vc(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=pc(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=v.useMemo(()=>yc(d,a),[d,a]),m=Ac(d);return v.createElement(v.Fragment,null,f.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>v.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>v.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Nc(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}v.Component;var Pc=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Pc&&(window.__reactRouterVersion=`7.18.2`)}catch{}function Fc({basename:e,children:t,useTransitions:n,window:r}){let i=v.useRef();i.current??=lo({window:r,v5Compat:!0});let a=i.current,[o,s]=v.useState({action:a.action,location:a.location}),c=v.useCallback(e=>{n===!1?s(e):v.startTransition(()=>s(e))},[n]);return v.useLayoutEffect(()=>a.listen(c),[a,c]),v.createElement(Xs,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var Ic=v.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=v.useContext(fs),y=typeof l==`string`&&io.test(l),b=es(l,h);l=b.to;let x=xs(l,{relative:r}),ee=Cs(),S=null;if(o){let e=Uo(o,[],ee.mask?ee.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Go([h,e.pathname])),S=g.createHref(e)}let[C,te,ne]=Dc(n,p),w=Vc(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function re(t){e&&e(t),t.defaultPrevented||w(t)}let ie=!(b.isExternal||i),ae=v.createElement(`a`,{...p,...ne,href:(ie?S:void 0)||b.absoluteURL||x,onClick:ie?re:e,ref:Nc(m,te),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return C&&!y?v.createElement(v.Fragment,null,ae,v.createElement(kc,{page:x})):ae});Ic.displayName=`Link`;var Lc=v.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Os(a,{relative:c.relative}),d=Cs(),f=v.useContext(os),{navigator:p,basename:m}=v.useContext(fs),h=f!=null&&Gc(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Lo(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(b)===`/`,ee=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),S={isActive:x,isPending:ee,isTransitioning:h},C=x?e:void 0,te;te=typeof n==`function`?n(S):[n,x?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ne=typeof i==`function`?i(S):i;return v.createElement(Ic,{...c,"aria-current":C,className:te,ref:l,style:ne,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Lc.displayName=`NavLink`;var Rc=v.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=$s,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=v.useContext(fs),g=Uc(),_=Wc(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&io.test(s);return v.createElement(`form`,{ref:m,method:y,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?v.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Rc.displayName=`Form`;function zc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bc(e){let t=v.useContext(as);return I(t,zc(e)),t}function Vc(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=Es(),d=Cs(),f=Os(e,{relative:o});return v.useCallback(p=>{if(oc(p,t)){p.preventDefault();let t=n===void 0?ho(d)===ho(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?v.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Hc=0,z=()=>`__${String(++Hc)}__`;function Uc(){let{router:e}=Bc(`useSubmit`),{basename:t}=v.useContext(fs),n=Us(),r=e.fetch,i=e.navigate;return v.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=dc(e,t);if(a.navigate===!1){let e=a.fetcherKey||z();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Wc(e,{relative:t}={}){let{basename:n}=v.useContext(fs),r=v.useContext(ms);I(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Os(e||`.`,{relative:t})},o=Cs();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Go([n,a.pathname])),ho(a)}function Gc(e,{relative:t}={}){let n=v.useContext(ls);I(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Bc(`useViewTransitionState`),i=Os(e,{relative:t});if(!n.isTransitioning)return!1;let a=Lo(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Lo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return No(i.pathname,o)!=null||No(i.pathname,a)!=null}var Kc=()=>{let e=Es();return(0,F.jsxs)(`div`,{className:`bg-slate-50 `,children:[(0,F.jsxs)(`div`,{className:`p-5`,children:[(0,F.jsx)(`div`,{className:` h-50 overflow-hidden `,children:(0,F.jsx)(`img`,{src:`Collection-header.jpg`,alt:``,className:`h-full w-full object-cover  rounded-xl`})}),(0,F.jsxs)(`div`,{className:`absolute text-center top-37 left-20`,children:[(0,F.jsx)(`p`,{className:`text-4xl font-bold `,children:`Shop by Categories`}),(0,F.jsxs)(`p`,{className:`text-xl mt-2`,children:[`Find everything you need `,(0,F.jsx)(`br`,{}),`in one place`]})]})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-3 item-center place-items-center mt-5 pb-[50px] `,children:[(0,F.jsxs)(`div`,{className:`relative h-80 w-110 hover:-translate-y-2  duration-300 mb-5 `,children:[(0,F.jsx)(`img`,{src:`Collection1.png`,alt:``,className:`rounded-xl`}),(0,F.jsxs)(`div`,{className:`absolute  top-28 left-5`,children:[(0,F.jsx)(`p`,{className:`text-2xl font-semibold `,children:`Men's Fashion`}),(0,F.jsx)(`button`,{className:`bg-black px-3 py-1 text-white mt-2 rounded-md hover:cursor-pointer hover:scale-105 duration-300`,onClick:()=>e(`/mens-product`),children:`Explore ➔`})]})]}),(0,F.jsxs)(`div`,{className:`relative h-80 w-110 hover:-translate-y-2  duration-300 mb-5 `,children:[(0,F.jsx)(`img`,{src:`Collection2.png`,alt:``,className:`rounded-xl`}),(0,F.jsxs)(`div`,{className:`absolute top-28 left-5`,children:[(0,F.jsx)(`p`,{className:`text-2xl font-semibold `,children:`Women's Fashion`}),(0,F.jsx)(`button`,{className:`bg-black px-3 py-1 text-white mt-2 rounded-md hover:scale-105 duration-300`,onClick:()=>e(`/womens-product`),children:`Explore ➔`})]})]}),(0,F.jsxs)(`div`,{className:`relative h-80 w-110 hover:-translate-y-2  duration-300 mb-5`,children:[(0,F.jsx)(`img`,{src:`Collection3.png`,alt:``,className:`rounded-xl`}),(0,F.jsxs)(`div`,{className:`absolute  top-28 left-5`,children:[(0,F.jsx)(`p`,{className:`text-2xl font-semibold `,children:`Accessories `}),(0,F.jsx)(`button`,{className:`bg-black px-3 py-1 text-white mt-2 rounded-md hover:scale-105 duration-300`,onClick:()=>e(`/accessories-product`),children:`Explore ➔`})]})]}),(0,F.jsxs)(`div`,{className:`relative h-80 w-110 hover:-translate-y-2  duration-300 `,children:[(0,F.jsx)(`img`,{src:`Collection4.png`,alt:``,className:`rounded-xl`}),(0,F.jsxs)(`div`,{className:`absolute  top-28 left-5`,children:[(0,F.jsx)(`p`,{className:`text-2xl font-semibold `,children:`Footwears`}),(0,F.jsx)(`button`,{className:`bg-black px-3 py-1 text-white mt-2 rounded-md hover:scale-105 duration-300`,onClick:()=>e(`/footwear-product`),children:`Explore ➔`})]})]}),(0,F.jsxs)(`div`,{className:`relative h-80 w-110 hover:-translate-y-2  duration-300 `,children:[(0,F.jsx)(`img`,{src:`Collection5.png`,alt:``,className:`rounded-xl`}),(0,F.jsxs)(`div`,{className:`absolute  top-28 left-5`,children:[(0,F.jsx)(`p`,{className:`text-2xl font-semibold `,children:`Backpacks`}),(0,F.jsx)(`button`,{className:`bg-black px-3 py-1 text-white mt-2 rounded-md hover:scale-105 duration-300`,onClick:()=>e(`/bag-product`),children:`Explore ➔`})]})]}),(0,F.jsxs)(`div`,{className:`relative h-80 w-110 hover:-translate-y-2  duration-300 `,children:[(0,F.jsx)(`img`,{src:`Collection6.jpg`,alt:``,className:`rounded-xl`}),(0,F.jsxs)(`div`,{className:`absolute  top-28 left-5`,children:[(0,F.jsx)(`p`,{className:`text-2xl font-semibold `,children:`Sunglasses`}),(0,F.jsx)(`button`,{className:`bg-black px-3 py-1 text-white mt-2 rounded-md hover:scale-105 duration-300`,onClick:()=>e(`/sunglasses-product`),children:`Explore ➔`})]})]})]})]})},qc=()=>{let e=Es();return(0,F.jsxs)(`div`,{className:`flex justify-between  bg-slate-200 text-black py-5 px-10 `,children:[(0,F.jsx)(`div`,{children:(0,F.jsx)(`p`,{className:`text-4xl font-semibold`,children:`ZORVEX`})}),(0,F.jsxs)(`div`,{className:`flex gap-8 mt-1 mr-28`,children:[(0,F.jsx)(`button`,{className:`text-[19px] cursor-pointer hover:border-b-3 `,onClick:()=>e(`/`),children:`Home`}),(0,F.jsx)(`button`,{className:` text-[19px] cursor-pointer hover:border-b-3  `,onClick:()=>e(`/collection`),children:`Collections`}),(0,F.jsx)(`button`,{className:` text-[19px] cursor-pointer hover:border-b-3`,onClick:()=>e(`/contact`),children:`Contact`})]}),(0,F.jsx)(`div`,{className:`mt-3`,children:(0,F.jsx)(Wa,{icon:$a,className:`text-3xl`})})]})},Jc=()=>{let e=Es();return(0,F.jsxs)(`div`,{className:`bg-slate-50 pb-[50px]`,children:[(0,F.jsx)(`div`,{className:`pt-5 w-full h-85 overflow-hidden flex justify-center `,children:(0,F.jsx)(`img`,{src:`Header-image.png`,className:` h-full w-[95%] overflow-hidden rounded-xl`,alt:`Fashion`})}),(0,F.jsxs)(`div`,{className:`absolute top-48 left-30`,children:[(0,F.jsx)(`p`,{className:`text-5xl font-semibold text-white text-center`,children:`Define Your Style`}),(0,F.jsx)(`p`,{className:`text-xl mt-3 text-white text-center`,children:`Discover fashion that feels like you`}),(0,F.jsx)(`button`,{onClick:()=>e(`/collection`),className:`bg-blue-600 hover:bg-blue-700 p-2 rounded-md mt-4 text-white block mx-auto hover:cursor-pointer hover:scale-110 duration-300`,children:`Shop Now`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-5 px-12 mt-9 mb-5`,children:[(0,F.jsx)(`div`,{className:`h-px bg-black flex-1`}),(0,F.jsx)(`h2`,{className:`text-2xl font-bold text-[#172b4d]`,children:`Explore Collections`}),(0,F.jsx)(`div`,{className:`h-px bg-black flex-1`})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-4 gap-4 px-12 `,children:[(0,F.jsxs)(`div`,{className:`relative h-44 overflow-hidden rounded-sm hover:-translate-y-2  duration-300  `,children:[(0,F.jsx)(`img`,{src:`https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800`,alt:``,className:`w-full h-full object-cover `}),(0,F.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 bg-black/55 py-3 text-center`,children:(0,F.jsx)(`p`,{className:`text-white font-bold text-lg`,children:`Men's Fashion`})})]}),(0,F.jsxs)(`div`,{className:` relative h-44 rounded-sm overflow-hidden hover:-translate-y-2  duration-300  `,children:[(0,F.jsx)(`img`,{src:`https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800`,alt:`Women's Fashion`,className:`h-full w-full object-cover`}),(0,F.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 text-center bg-black/55 py-3  `,children:(0,F.jsx)(`p`,{className:`text-white font-bold text-lg  `,children:`Women's Fashion`})})]}),(0,F.jsxs)(`div`,{className:` relative h-44 rounded-sm overflow-hidden hover:-translate-y-2  duration-300  `,children:[(0,F.jsx)(`img`,{src:`https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800`,alt:`Footwear`,className:`h-full w-full object-cover`}),(0,F.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 text-center bg-black/55 py-3  `,children:(0,F.jsx)(`p`,{className:`text-white font-bold text-lg  `,children:`Footwear`})})]}),(0,F.jsxs)(`div`,{className:` relative h-44 rounded-sm overflow-hidden hover:-translate-y-2  duration-300  `,children:[(0,F.jsx)(`img`,{src:`https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800`,alt:`Accessories`,className:`h-full w-full object-cover`}),(0,F.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 text-center bg-black/55 py-3  `,children:(0,F.jsx)(`p`,{className:`text-white font-bold text-lg  `,children:`Accessories`})})]})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-5 px-12 mt-10 mb-5`,children:[(0,F.jsx)(`div`,{className:`h-px bg-black flex-1`}),(0,F.jsx)(`h2`,{className:`text-2xl font-bold text-[#172b4d]`,children:`Featured Products`}),(0,F.jsx)(`div`,{className:`h-px bg-black flex-1`})]}),(0,F.jsxs)(`div`,{className:`grid grid-cols-4 gap-4 px-12`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`div`,{className:`relative h-44 overflow-hidden rounded-t-lg `,children:(0,F.jsx)(`img`,{src:`https://assets.ajio.com/medias/sys_master/root1/20260204/l7kA/698329d6cbfa0d5608c0364d/-473Wx593H-702858995-blue-MODEL.jpg`,alt:``,className:`w-full h-full object-cover hover:scale-105 duration-500 `})}),(0,F.jsxs)(`div`,{className:`bg-slate-200  px-5 pt-2 pb-5 mb-10 rounded-b-lg`,children:[(0,F.jsx)(`p`,{className:`text-black  text-xl font-medium text-center`,children:`Denim Jacket`}),(0,F.jsx)(`p`,{className:`text-black font-bold text-lg text-center pt-4`,children:`₹2,500`}),(0,F.jsx)(`button`,{className:`block text-white font-medium  px-20 py-2 bg-black mx-auto rounded-md mt-7  hover:cursor-pointer hover:scale-110 duration-300`,children:`Add to Cart`})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`div`,{className:`relative h-44 overflow-hidden rounded-t-lg `,children:(0,F.jsx)(`img`,{src:`https://tohl.in/cdn/shop/files/LAURENWOMEN_SSHOULDERBAG-BLACK1.jpg?v=1776673318&width=1500`,alt:``,className:`w-full h-full object-cover hover:scale-105 duration-500 `})}),(0,F.jsxs)(`div`,{className:`bg-slate-200 px-5 pt-2 pb-5 mb-10 rounded-b-lg`,children:[(0,F.jsx)(`p`,{className:`text-black  text-xl font-medium text-center`,children:`Leather Tote Bag`}),(0,F.jsx)(`p`,{className:`text-black font-bold text-lg text-center pt-4`,children:`₹1,250`}),(0,F.jsx)(`button`,{className:`block text-white font-medium px-20 py-2 bg-black mx-auto rounded-md mt-7  hover:cursor-pointer hover:scale-110 duration-300`,children:`Add to Cart`})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`div`,{className:`relative h-44 overflow-hidden rounded-t-lg `,children:(0,F.jsx)(`img`,{src:`https://image.made-in-china.com/202f0j00eFrkvKTBrMui/Vintage-Casual-Sports-Training-Shoes-Sneaker-Men-Loafers-Custom-Summer-Casual-Sneakers.webp`,alt:``,className:`w-full h-full object-cover hover:scale-105 duration-300 `})}),(0,F.jsxs)(`div`,{className:`bg-slate-200 px-5 pt-2 pb-5 mb-10 rounded-b-lg`,children:[(0,F.jsx)(`p`,{className:`text-black  text-xl font-medium text-center`,children:`Casual Sneakers`}),(0,F.jsx)(`p`,{className:`text-black font-bold text-lg text-center pt-4`,children:`₹3,600`}),(0,F.jsx)(`button`,{className:`block text-white font-medium px-20 py-2 bg-black mx-auto rounded-md mt-7  hover:cursor-pointer hover:scale-110 duration-300`,children:`Add to Cart`})]})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`div`,{className:`relative h-44 overflow-hidden rounded-t-lg `,children:(0,F.jsx)(`img`,{src:`https://d3muc2kgcen4ha.cloudfront.net/storage/Series/June2025/HomeImage26062025160015.jpg`,alt:``,className:`w-full h-full object-cover hover:scale-105 duration-300 `})}),(0,F.jsxs)(`div`,{className:`bg-slate-200 px-5 pt-2 pb-5 mb-10 rounded-b-lg`,children:[(0,F.jsxs)(`p`,{className:`text-black  text-xl font-medium text-center`,children:[`Citizen Pro-Master Watch`,` `]}),(0,F.jsx)(`p`,{className:`text-black font-bold text-lg text-center pt-4`,children:`₹12,000`}),(0,F.jsx)(`button`,{className:`block text-white font-medium px-20 py-2 bg-black mx-auto rounded-md mt-7  hover:cursor-pointer hover:scale-110 duration-300`,children:`Add to Cart`})]})]})]})]})]})},Yc=()=>(0,F.jsxs)(`div`,{className:`flex justify-center gap-75 bg-slate-200 pt-15 pb-10 pl-10`,children:[(0,F.jsxs)(`div`,{className:`flex gap-3 `,children:[(0,F.jsx)(Wa,{icon:Ya,className:`text-3xl text-[#172b4d]`}),(0,F.jsxs)(`div`,{className:`-mt-5 ml-2`,children:[(0,F.jsx)(`p`,{className:`font-bold text-lg`,children:`Fast Delivery`}),(0,F.jsxs)(`p`,{children:[`Fast delivery to `,(0,F.jsx)(`br`,{}),`your doorstep`]})]})]}),(0,F.jsxs)(`div`,{className:`flex gap-3`,children:[(0,F.jsx)(Wa,{icon:Za,className:`text-3xl text-[#172b4d]`}),(0,F.jsxs)(`div`,{className:`-mt-5 `,children:[(0,F.jsx)(`p`,{className:`font-bold text-lg`,children:`Secure Shopping`}),(0,F.jsxs)(`p`,{children:[`100% secure checkout `,(0,F.jsx)(`br`,{}),` and payments`]})]})]}),(0,F.jsxs)(`div`,{className:`flex gap-3`,children:[(0,F.jsx)(Wa,{icon:Ja,className:`text-3xl text-[#172b4d]`}),(0,F.jsxs)(`div`,{className:`-mt-5 `,children:[(0,F.jsx)(`p`,{className:`font-bold text-lg`,children:`24/7 Customer Support`}),(0,F.jsxs)(`p`,{children:[`We're always here `,(0,F.jsx)(`br`,{}),`to help you`]})]})]})]});function Xc(e,t){return function(){return e.apply(t,arguments)}}var{toString:Zc}=Object.prototype,{getPrototypeOf:Qc}=Object,{iterator:$c,toStringTag:el}=Symbol,tl=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),nl=(e,t)=>{let n=e,r=[];for(;n!=null&&n!==Object.prototype;){if(r.indexOf(n)!==-1)return!1;if(r.push(n),tl(n,t))return!0;n=Qc(n)}return!1},rl=(e,t)=>e!=null&&nl(e,t)?e[t]:void 0,il=(e=>t=>{let n=Zc.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),al=e=>(e=e.toLowerCase(),t=>il(t)===e),ol=e=>t=>typeof t===e,{isArray:sl}=Array,cl=ol(`undefined`);function ll(e){return e!==null&&!cl(e)&&e.constructor!==null&&!cl(e.constructor)&&B(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var ul=al(`ArrayBuffer`);function dl(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ul(e.buffer),t}var fl=ol(`string`),B=ol(`function`),pl=ol(`number`),ml=e=>typeof e==`object`&&!!e,hl=e=>e===!0||e===!1,gl=e=>{if(!ml(e))return!1;let t=Qc(e);return(t===null||t===Object.prototype||Qc(t)===null)&&!nl(e,el)&&!nl(e,$c)},_l=e=>{if(!ml(e)||ll(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},vl=al(`Date`),yl=al(`File`),bl=e=>!!(e&&e.uri!==void 0),xl=e=>e&&e.getParts!==void 0,Sl=al(`Blob`),Cl=al(`FileList`),wl=al(`Set`),Tl=e=>ml(e)&&B(e.pipe);function El(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var Dl=El(),Ol=Dl.FormData===void 0?void 0:Dl.FormData,kl=e=>{if(!e)return!1;if(Ol&&e instanceof Ol)return!0;let t=Qc(e);if(!t||t===Object.prototype||!B(e.append))return!1;let n=il(e);return n===`formdata`||n===`object`&&B(e.toString)&&e.toString()===`[object FormData]`},Al=al(`URLSearchParams`),[jl,Ml,Nl,Pl]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(al),Fl=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function Il(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),sl(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(ll(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function Ll(e,t){if(ll(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-->0;)if(i=n[r],t===i.toLowerCase())return i;return null}var Rl=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,zl=e=>!cl(e)&&e!==Rl;function Bl(...e){let{caseless:t,skipUndefined:n}=zl(this)&&this||{},r={},i=(e,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=t&&typeof i==`string`&&Ll(r,i)||i,o=tl(r,a)?r[a]:void 0;gl(o)&&gl(e)?r[a]=Bl(o,e):gl(e)?r[a]=Bl({},e):sl(e)?r[a]=e.slice():(!n||!cl(e))&&(r[a]=e)};for(let t=0,n=e.length;t<n;t++){let n=e[t];if(!n||ll(n)||(Il(n,i),typeof n!=`object`||sl(n)))continue;let r=Object.getOwnPropertySymbols(n);for(let e=0;e<r.length;e++){let t=r[e];ql.call(n,t)&&i(n[t],t)}}return r}var Vl=(e,t,n,{allOwnKeys:r}={})=>(Il(t,(t,r)=>{n&&B(t)?Object.defineProperty(e,r,{__proto__:null,value:Xc(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{__proto__:null,value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Hl=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ul=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},V=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-->0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&Qc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},H=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},U=e=>{if(!e)return null;if(sl(e))return e;let t=e.length;if(!pl(t))return null;let n=Array(t);for(;t-->0;)n[t]=e[t];return n},W=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&Qc(Uint8Array)),G=(e,t)=>{let n=(e&&e[$c]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},Wl=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Gl=al(`HTMLFormElement`),Kl=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),{propertyIsEnumerable:ql}=Object.prototype,Jl=al(`RegExp`),Yl=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};Il(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},Xl=e=>{Yl(e,(t,n)=>{if(B(e)&&[`arguments`,`caller`,`callee`].includes(n))return!1;let r=e[n];if(B(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},Zl=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return sl(e)?r(e):r(String(e).split(t)),n},Ql=()=>{},$l=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function eu(e){return!!(e&&B(e.append)&&e[el]===`FormData`&&e[$c])}var tu=e=>{let t=new WeakSet,n=e=>{if(ml(e)){if(t.has(e))return;if(ll(e))return e;if(!(`toJSON`in e)){t.add(e);let r;if(wl(e)){r=[];for(let t of e){let e=n(t);!cl(e)&&r.push(e)}}else r=sl(e)?[]:{},Il(e,(e,t)=>{let i=n(e);!cl(i)&&(r[t]=i)});return t.delete(e),r}}return e};return n(e)},nu=al(`AsyncFunction`),ru=e=>e&&(ml(e)||B(e))&&B(e.then)&&B(e.catch),iu=((e,t)=>e?setImmediate:t?((e,t)=>(Rl.addEventListener(`message`,({source:n,data:r})=>{n===Rl&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),Rl.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,B(Rl.postMessage)),au=typeof queueMicrotask<`u`?queueMicrotask.bind(Rl):typeof process<`u`&&process.nextTick||iu,ou=e=>e!=null&&B(e[$c]),K={isArray:sl,isArrayBuffer:ul,isBuffer:ll,isFormData:kl,isArrayBufferView:dl,isString:fl,isNumber:pl,isBoolean:hl,isObject:ml,isPlainObject:gl,isEmptyObject:_l,isReadableStream:jl,isRequest:Ml,isResponse:Nl,isHeaders:Pl,isUndefined:cl,isDate:vl,isFile:yl,isReactNativeBlob:bl,isReactNative:xl,isBlob:Sl,isRegExp:Jl,isFunction:B,isStream:Tl,isURLSearchParams:Al,isTypedArray:W,isFileList:Cl,forEach:Il,merge:Bl,extend:Vl,trim:Fl,stripBOM:Hl,inherits:Ul,toFlatObject:V,kindOf:il,kindOfTest:al,endsWith:H,toArray:U,forEachEntry:G,matchAll:Wl,isHTMLForm:Gl,hasOwnProperty:tl,hasOwnProp:tl,hasOwnInPrototypeChain:nl,getSafeProp:rl,reduceDescriptors:Yl,freezeMethods:Xl,toObjectSet:Zl,toCamelCase:Kl,noop:Ql,toFiniteNumber:$l,findKey:Ll,global:Rl,isContextDefined:zl,isSpecCompliantForm:eu,toJSONObject:tu,isAsyncFn:nu,isThenable:ru,setImmediate:iu,asap:au,isIterable:ou,isSafeIterable:e=>e!=null&&nl(e,$c)&&ou(e)},su=K.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),cu=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim();let a=K.hasOwnProp(t,n);!n||a&&K.hasOwnProp(su,n)||(n===`set-cookie`?a?t[n].push(r):t[n]=[r]:t[n]=a?t[n]+`, `+r:r)}),t};function lu(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}var uu=RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`,`g`),du=RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`,`g`);function fu(e,t){return K.isArray(e)?e.map(e=>fu(e,t)):lu(String(e).replace(t,``))}var pu=e=>fu(e,uu),mu=e=>fu(e,du);function hu(e){let t=Object.create(null);return K.forEach(e.toJSON(),(e,n)=>{t[n]=mu(e)}),t}var gu=Symbol(`internals`);function _u(e){return e&&String(e).trim().toLowerCase()}function vu(e){return e===!1||e==null?e:K.isArray(e)?e.map(vu):pu(String(e))}function yu(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var bu=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function xu(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}function Su(e){let t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let n=``;for(let r=1;r<t;r++){let i=e.charCodeAt(r);if(i===34||i===92&&(r+=1,r>=t))return e;n+=e[r]}return n}function Cu(e){let t=Object.create(null),n=String(e),r=0,i=!1,a=!1;function o(e){let i=xu(n.slice(r,e)),a=i.indexOf(`=`);if(a<1)return;let o=xu(i.slice(0,a));if(!bu.test(o))return;let s=o.toLowerCase();if(s===`__proto__`||s===`constructor`||s===`prototype`)return;let c=xu(i.slice(a+1));t[s]=Su(c)}for(let e=0;e<n.length;e++){let t=n.charCodeAt(e);i?a?a=!1:t===92?a=!0:t===34&&(i=!1):t===34?i=!0:(t===44||t===59)&&(o(e),r=e+1)}return o(n.length),t}var wu=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Tu(e,t,n,r,i){if(K.isFunction(r))return r.call(this,t,n);if(i&&(t=n),K.isString(t)){if(K.isString(r))return t.indexOf(r)!==-1;if(K.isRegExp(r))return r.test(t)}}function Eu(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Du(e,t){let n=K.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Ou=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=_u(t);if(!i)return;let a=K.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=vu(e))}let a=(e,t)=>K.forEach(e,(e,n)=>i(e,n,t));if(K.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(K.isString(e)&&(e=e.trim())&&!wu(e))a(cu(e),t);else if(K.isObject(e)&&K.isSafeIterable(e)){let n=Object.create(null),r,i;for(let t of e){if(!K.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);i=t[0],K.hasOwnProp(n,i)?(r=n[i],n[i]=K.isArray(r)?[...r,t[1]]:[r,t[1]]):n[i]=t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=_u(e),e){let n=K.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return yu(e);if(K.isFunction(t))return t.call(this,e,n);if(K.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=_u(e),e){let n=K.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||Tu(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=_u(e),e){let i=K.findKey(n,e);i&&(!t||Tu(n,n[i],i,t))&&(delete n[i],r=!0)}}return K.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||Tu(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return K.forEach(this,(r,i)=>{let a=K.findKey(n,i);if(a){t[a]=vu(r),delete t[i];return}let o=e?Eu(i):String(i).trim();o!==i&&delete t[i],t[o]=vu(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return K.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&K.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){let e=this.get(`set-cookie`);return K.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return Cu(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[gu]=this[gu]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=_u(e);t[r]||(Du(n,e),t[r]=!0)}return K.isArray(e)?e.forEach(r):r(e),this}};Ou.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),K.reduceDescriptors(Ou.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),K.freezeMethods(Ou);var ku=`[REDACTED ****]`;function Au(e){if(K.hasOwnProp(e,`toJSON`))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(K.hasOwnProp(t,`toJSON`))return!0;t=Object.getPrototypeOf(t)}return!1}function ju(e,t){let n=new Set(t.map(e=>String(e).toLowerCase())),r=[],i=e=>{if(typeof e!=`object`||!e||K.isBuffer(e))return e;if(r.indexOf(e)!==-1)return;e instanceof Ou&&(e=e.toJSON()),r.push(e);let t;if(K.isArray(e))t=[],e.forEach((e,n)=>{let r=i(e);K.isUndefined(r)||(t[n]=r)});else{if(!K.isPlainObject(e)&&Au(e))return r.pop(),e;t=Object.create(null);for(let[r,a]of Object.entries(e)){let e=n.has(r.toLowerCase())?ku:i(a);K.isUndefined(e)||(t[r]=e)}}return r.pop(),t};return i(e)}function Mu(e){try{return String(e)}catch{return``}}function Nu(e){return e.errors.map(e=>{try{return e&&e.message?Mu(e.message):Mu(e)}catch{return``}}).filter(Boolean).join(`; `)||e.name||`AggregateError`}var q=class e extends Error{static from(t,n,r,i,a,o){let s=t.message;!s&&K.isArray(t.errors)&&t.errors.length&&(s=Nu(t));let c=new e(s,n||t.code,r,i,a);return Object.defineProperty(c,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),o&&Object.assign(c,o),c}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){let e=this.config,t=e&&K.hasOwnProp(e,`redact`)?e.redact:void 0,n=K.isArray(t)&&t.length>0?ju(e,t):K.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};q.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,q.ERR_BAD_OPTION=`ERR_BAD_OPTION`,q.ECONNABORTED=`ECONNABORTED`,q.ETIMEDOUT=`ETIMEDOUT`,q.ECONNREFUSED=`ECONNREFUSED`,q.ERR_NETWORK=`ERR_NETWORK`,q.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,q.ERR_DEPRECATED=`ERR_DEPRECATED`,q.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,q.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,q.ERR_CANCELED=`ERR_CANCELED`,q.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,q.ERR_INVALID_URL=`ERR_INVALID_URL`,q.ERR_FORM_DATA_DEPTH_EXCEEDED=`ERR_FORM_DATA_DEPTH_EXCEEDED`;function Pu(e){return K.isPlainObject(e)||K.isArray(e)}function Fu(e){return K.endsWith(e,`[]`)?e.slice(0,-2):e}function Iu(e,t,n){return e?e.concat(t).map(function(e,t){return e=Fu(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function Lu(e){return K.isArray(e)&&!e.some(Pu)}var Ru=K.toFlatObject(K,{},null,function(e){return/^is[A-Z]/.test(e)});function zu(e,t,n){if(!K.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=K.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!K.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||m,a=n.dots,o=n.indexes,s=n.Blob||typeof Blob<`u`&&Blob,c=n.maxDepth===void 0?100:n.maxDepth,l=s&&K.isSpecCompliantForm(t),u=[];if(!K.isFunction(i))throw TypeError(`visitor must be a function`);function d(e){if(e===null)return``;if(K.isDate(e))return e.toISOString();if(K.isBoolean(e))return e.toString();if(!l&&K.isBlob(e))throw new q(`Blob is not supported. Use a Buffer instead.`);if(K.isArrayBuffer(e)||K.isTypedArray(e)){if(l&&typeof s==`function`)return new s([e]);throw new q(`Blob is not supported. Use a Buffer instead.`,q.ERR_NOT_SUPPORT)}return e}function f(e){if(e>c)throw new q(`Object is too deeply nested (`+e+` levels). Max depth: `+c,q.ERR_FORM_DATA_DEPTH_EXCEEDED)}function p(e,t){if(c===1/0)return JSON.stringify(e);let n=[];return JSON.stringify(e,function(e,r){if(!K.isObject(r))return r;for(;n.length&&n[n.length-1]!==this;)n.pop();return n.push(r),f(t+n.length-1),r})}function m(e,n,i){let s=e;if(K.isReactNative(t)&&K.isReactNativeBlob(e))return t.append(Iu(i,n,a),d(e)),!1;if(e&&!i&&typeof e==`object`){if(K.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=p(e,1);else if(K.isArray(e)&&Lu(e)||(K.isFileList(e)||K.endsWith(n,`[]`))&&(s=K.toArray(e)))return n=Fu(n),s.forEach(function(e,r){!(K.isUndefined(e)||e===null)&&t.append(o===!0?Iu([n],r,a):o===null?n:n+`[]`,d(e))}),!1}return Pu(e)?!0:(t.append(Iu(i,n,a),d(e)),!1)}let h=Object.assign(Ru,{defaultVisitor:m,convertValue:d,isVisitable:Pu});function g(e,n,r=0){if(!K.isUndefined(e)){if(f(r),u.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));u.push(e),K.forEach(e,function(e,a){(!(K.isUndefined(e)||e===null)&&i.call(t,e,K.isString(a)?a.trim():a,n,h))===!0&&g(e,n?n.concat(a):[a],r+1)}),u.pop()}}if(!K.isObject(e))throw TypeError(`data must be an object`);return g(e),t}function Bu(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function Vu(e,t){this._pairs=[],e&&zu(e,this,t)}var Hu=Vu.prototype;Hu.append=function(e,t){this._pairs.push([e,t])},Hu.toString=function(e){let t=e?t=>e.call(this,t,Bu):Bu;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function Uu(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function Wu(e,t,n){if(!t)return e;e||=``;let r=K.isFunction(n)?{serialize:n}:n,i=K.getSafeProp(r,`encode`)||Uu,a=K.getSafeProp(r,`serialize`),o;if(o=a?a(t,r):K.isURLSearchParams(t)?t.toString():new Vu(t,r).toString(i),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var Gu=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){K.forEach(this.handlers,function(t){t!==null&&e(t)})}},Ku={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},qu={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:Vu,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},J=s({hasBrowserEnv:()=>Ju,hasStandardBrowserEnv:()=>Xu,hasStandardBrowserWebWorkerEnv:()=>Zu,navigator:()=>Yu,origin:()=>Qu}),Ju=typeof window<`u`&&typeof document<`u`,Yu=typeof navigator==`object`&&navigator||void 0,Xu=Ju&&(!Yu||[`ReactNative`,`NativeScript`,`NS`].indexOf(Yu.product)<0),Zu=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,Qu=Ju&&window.location.href||`http://localhost`,$u={...J,...qu};function ed(e,t){return zu(e,new $u.classes.URLSearchParams,{visitor:function(e,t,n,r){return $u.isNode&&K.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}var td=100;function nd(e){if(e>td)throw new q(`FormData field is too deeply nested (`+e+` levels). Max depth: `+td,q.ERR_FORM_DATA_DEPTH_EXCEEDED)}function rd(e){let t=[],n=/[^.[\]]+|\[([^.[\]]*)]/g,r;for(;(r=n.exec(e))!==null;)nd(t.length),t.push(r[0]===`[]`?``:r[1]||r[0]);return t}function id(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function ad(e){function t(e,n,r,i){nd(i);let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&K.isArray(r)?r.length:a,s?(K.hasOwnProp(r,a)?r[a]=K.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):((!K.hasOwnProp(r,a)||!K.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&K.isArray(r[a])&&(r[a]=id(r[a])),!o)}if(K.isFormData(e)&&K.isFunction(e.entries)){let n={};return K.forEachEntry(e,(e,r)=>{t(rd(e),r,n,0)}),n}return null}var od=(e,t)=>e!=null&&K.hasOwnProp(e,t)?e[t]:void 0;function sd(e,t,n){if(K.isString(e))try{return(t||JSON.parse)(e),K.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var cd={transitional:Ku,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=K.isObject(e);if(i&&K.isHTMLForm(e)&&(e=new FormData(e)),K.isFormData(e))return r?JSON.stringify(ad(e)):e;if(K.isArrayBuffer(e)||K.isBuffer(e)||K.isStream(e)||K.isFile(e)||K.isBlob(e)||K.isReadableStream(e))return e;if(K.isArrayBufferView(e))return e.buffer;if(K.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){let t=od(this,`formSerializer`);if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return ed(e,t).toString();if((a=K.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let n=od(this,`env`),r=n&&n.FormData;return zu(a?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType(`application/json`,!1),sd(e)):e}],transformResponse:[function(e){let t=od(this,`transitional`)||cd.transitional,n=t&&t.forcedJSONParsing,r=od(this,`responseType`),i=r===`json`;if(K.isResponse(e)||K.isReadableStream(e))return e;if(e&&K.isString(e)&&(n&&!r||i)){let n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,od(this,`parseReviver`))}catch(e){if(n)throw e.name===`SyntaxError`?q.from(e,q.ERR_BAD_RESPONSE,this,null,od(this,`response`)):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:$u.classes.FormData,Blob:$u.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};K.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`],e=>{cd.headers[e]={}});function ld(e,t){let n=this||cd,r=t||n,i=Ou.from(r.headers),a=r.data;return K.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function ud(e){return!!(e&&e.__CANCEL__)}var dd=class extends q{constructor(e,t,n){super(e??`canceled`,q.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function fd(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new q(`Request failed with status code `+n.status,n.status>=400&&n.status<500?q.ERR_BAD_REQUEST:q.ERR_BAD_RESPONSE,n.config,n.request,n))}function pd(e){let t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||``}function md(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function hd(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var gd=(e,t,n=3)=>{let r=0,i=md(50,250);return hd(n=>{if(!n||typeof n.loaded!=`number`)return;let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=Math.max(0,o==null?a:Math.min(a,o)),c=Math.max(0,s-r),l=i(c);r=Math.max(r,s),e({loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-s)/l:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},_d=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},vd=(e,t=K.asap)=>(...n)=>t(()=>e(...n)),yd=$u.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,$u.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL($u.origin),$u.navigator&&/(msie|trident)/i.test($u.navigator.userAgent)):()=>!0,bd=$u.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];K.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),K.isString(r)&&s.push(`path=${r}`),K.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),K.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.split(`;`);for(let n=0;n<t.length;n++){let r=t[n].replace(/^\s+/,``),i=r.indexOf(`=`);if(i!==-1&&r.slice(0,i)===e)try{return decodeURIComponent(r.slice(i+1))}catch{return r.slice(i+1)}}return null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function xd(e){return typeof e==`string`&&/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Sd(e,t){if(!t)return e;let n=e.length;for(;n>0&&e.charCodeAt(n-1)===47;)n--;return e.slice(0,n)+`/`+t.replace(/^\/+/,``)}var Y=/^https?:(?!\/\/)/i,Cd=/[\t\n\r]/g;function wd(e){let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t)}function Td(e){return wd(e).replace(Cd,``)}function Ed(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,n=``)=>`${t}${n}${ku}`)}function Dd(e){let t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${ku}@`),n=t.indexOf(`#`),r=(n===-1?t:t.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${ku}`);return n===-1?r:`${r}#${Ed(t.slice(n+1))}`}function Od(e,t){if(typeof e==`string`){let n=Td(e);if(Y.test(n))throw new q(`Invalid URL ${JSON.stringify(Dd(n))}: missing "//" after protocol`,q.ERR_INVALID_URL,t)}}function kd(e,t,n,r){Od(t,r);let i=!xd(t);return e&&(i||n===!1)?(Od(e,r),Sd(e,t)):t}var Ad=e=>e instanceof Ou?{...e}:e,jd=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function Md(e,t){e||={},t||={};let n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(e,t,n,r){return K.isPlainObject(e)&&K.isPlainObject(t)?K.merge.call({caseless:r},e,t):K.isPlainObject(t)?K.merge({},t):K.isArray(t)?t.slice():t}function i(e,t,n,i){if(!K.isUndefined(t))return r(e,t,n,i);if(!K.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!K.isUndefined(t))return r(void 0,t)}function o(e,t){if(!K.isUndefined(t))return r(void 0,t);if(!K.isUndefined(e))return r(void 0,e)}function s(n){let r=K.hasOwnProp(t,`transitional`)?t.transitional:void 0;if(!K.isUndefined(r)){if(K.isPlainObject(r)){if(K.hasOwnProp(r,n))return r[n]}else return}let i=K.hasOwnProp(e,`transitional`)?e.transitional:void 0;if(K.isPlainObject(i)&&K.hasOwnProp(i,n))return i[n]}function c(n,i,a){if(K.hasOwnProp(t,a))return r(n,i);if(K.hasOwnProp(e,a))return r(void 0,n)}let l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:c,headers:(e,t,n)=>i(Ad(e),Ad(t),n,!0)};return K.forEach(jd({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=K.hasOwnProp(l,r)?l[r]:i,o=a(K.hasOwnProp(e,r)?e[r]:void 0,K.hasOwnProp(t,r)?t[r]:void 0,r);K.isUndefined(o)&&a!==c||(n[r]=o)}),K.hasOwnProp(t,`validateStatus`)&&K.isUndefined(t.validateStatus)&&s(`validateStatusUndefinedResolves`)===!1&&(K.hasOwnProp(e,`validateStatus`)?n.validateStatus=r(void 0,e.validateStatus):delete n.validateStatus),n}var Nd=[`content-type`,`content-length`];function Pd(e,t,n){if(n!==`content-only`){e.set(t);return}Object.entries(t||{}).forEach(([t,n])=>{Nd.includes(t.toLowerCase())&&e.set(t,n)})}var Fd=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function X(e){let t=Md({},e),n=e=>K.hasOwnProp(t,e)?t[e]:void 0,r=n(`data`),i=n(`withXSRFToken`),a=n(`xsrfHeaderName`),o=n(`xsrfCookieName`),s=n(`headers`),c=n(`auth`),l=n(`baseURL`),u=n(`allowAbsoluteUrls`),d=n(`url`);if(t.headers=s=Ou.from(s),t.url=Wu(kd(l,d,u,t),n(`params`),n(`paramsSerializer`)),c){let t=K.getSafeProp(c,`username`)||``,n=K.getSafeProp(c,`password`)||``;try{s.set(`Authorization`,`Basic `+btoa(t+`:`+(n?Fd(n):``)))}catch(t){throw q.from(t,q.ERR_BAD_OPTION_VALUE,e)}}if(K.isFormData(r)&&($u.hasStandardBrowserEnv||$u.hasStandardBrowserWebWorkerEnv||K.isReactNative(r)?s.setContentType(void 0):K.isFunction(r.getHeaders)&&Pd(s,r.getHeaders(),n(`formDataHeaderPolicy`))),$u.hasStandardBrowserEnv&&(K.isFunction(i)&&(i=i(t)),i===!0||i==null&&yd(t.url))){let e=a&&o&&bd.read(o);e&&s.set(a,e)}return t}var Id=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=X(e),i=r.data,a=Ou.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=Ou.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());fd(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.startsWith(`file:`))||setTimeout(g)},h.onabort=function(){h&&=(n(new q(`Request aborted`,q.ECONNABORTED,e,h)),m(),null)},h.onerror=function(t){let r=new q(t&&t.message?t.message:`Network Error`,q.ERR_NETWORK,e,h);r.event=t||null,n(r),m(),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||Ku;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new q(t,i.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,e,h)),m(),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&K.forEach(hu(a),function(e,t){h.setRequestHeader(t,e)}),K.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=gd(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=gd(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new dd(null,e,h):t),h.abort(),m(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=pd(r.url);if(_&&!$u.protocols.includes(_)){n(new q(`Unsupported protocol `+_+`:`,q.ERR_BAD_REQUEST,e)),m();return}h.send(i||null)})},Ld=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;let n=new AbortController,r=!1,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof q?t:new dd(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new q(`timeout of ${t}ms exceeded`,q.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>{if(!r){if(e.aborted){i.call(e);return}e.addEventListener(`abort`,i,{once:!0})}});let{signal:s}=n;return s.unsubscribe=()=>K.asap(o),s},Rd=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},zd=async function*(e,t){for await(let n of Bd(e))yield*Rd(n,t)},Bd=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Vd=(e,t,n,r)=>{let i=zd(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})},Hd=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,Ud=(e,t,n)=>t+2<n&&Hd(e.charCodeAt(t+1))&&Hd(e.charCodeAt(t+2)),Wd=e=>e<=57?e-48:(e&223)-55,Gd=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,Kd=e=>e===9||e===10||e===12||e===13||e===32,qd=e=>{let t=Math.floor(e/4),n=e%4;return t*3+(n===2?1:n===3?2:0)},Jd=e=>{let t=e.length,n=0;return t>0&&e.charCodeAt(t-1)===61&&(n++,t>1&&e.charCodeAt(t-2)===61&&n++),Math.floor((t-n)*3/4)},Yd=e=>{let t=e.length,n=0,r=0,i=!1;for(let a=0;a<t;a++){let o=e.charCodeAt(a);if(o===37&&Ud(e,a,t)&&(o=Wd(e.charCodeAt(a+1))*16+Wd(e.charCodeAt(a+2)),a+=2),!Kd(o)){if(o===61){r++;continue}if(!Gd(o)||r>0){i=!0;continue}n++}}return i||r>2||r>0&&(n+r)%4!=0||n%4==1?Jd(e):qd(n)},Xd=(e,t)=>{if(!e||typeof e!=`string`||!e.startsWith(`data:`))return 0;let n=e.indexOf(`,`);if(n<0)return 0;let r=e.slice(5,n),i=e.slice(n+1);if(/;base64/i.test(r))return t(i);let a=0;for(let e=0,t=i.length;e<t;e++){let n=i.charCodeAt(e);if(n===37&&Ud(i,e,t))a+=1,e+=2;else if(n<128)a+=1;else if(n<2048)a+=2;else if(n>=55296&&n<=56319&&e+1<t){let t=i.charCodeAt(e+1);t>=56320&&t<=57343?(a+=4,e++):a+=3}else a+=3}return a};function Zd(e){let t=typeof e==`string`?e.indexOf(`#`):-1;return Xd(t===-1?e:e.slice(0,t),Yd)}var Qd=`1.19.0`,$d=65536,{isFunction:ef}=K,tf=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),nf=e=>{if(!K.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},rf=(e,...t)=>{try{return!!e(...t)}catch{return!1}},af=e=>{let t=e.indexOf(`://`),n=e;return t!==-1&&(n=n.slice(t+3)),n.includes(`@`)||n.includes(`:`)},of=e=>{let t=K.global!==void 0&&K.global!==null?K.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=K.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);let{fetch:i,Request:a,Response:o}=e,s=i?ef(i):typeof fetch==`function`,c=ef(a),l=ef(o);if(!s)return!1;let u=s&&ef(n),d=s&&(typeof r==`function`?(e=>t=>e.encode(t))(new r):async e=>new Uint8Array(await new a(e).arrayBuffer())),f=c&&u&&rf(()=>{let e=!1,t=new a($u.origin,{body:new n,method:`POST`,get duplex(){return e=!0,`half`}}),r=t.headers.has(`Content-Type`);return t.body!=null&&t.body.cancel(),e&&!r}),p=l&&u&&rf(()=>K.isReadableStream(new o(``).body)),m={stream:p&&(e=>e.body)};s&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!m[e]&&(m[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new q(`Response type '${e}' is not supported`,q.ERR_NOT_SUPPORT,n)})});let h=async e=>{if(e==null)return 0;if(K.isBlob(e))return e.size;if(K.isSpecCompliantForm(e))return(await new a($u.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(K.isArrayBufferView(e)||K.isArrayBuffer(e))return e.byteLength;if(K.isURLSearchParams(e)&&(e+=``),K.isString(e))return(await d(e)).byteLength},g=async(e,t)=>K.toFiniteNumber(e.getContentLength())??h(t);return async e=>{let{url:t,method:n,data:s,signal:l,cancelToken:d,timeout:_,onDownloadProgress:v,onUploadProgress:y,responseType:b,headers:x,withCredentials:ee=`same-origin`,fetchOptions:S,maxContentLength:C,maxBodyLength:te}=X(e),ne=K.isNumber(C)&&C>-1,w=K.isNumber(te)&&te>-1,re=t=>K.hasOwnProp(e,t)?e[t]:void 0,ie=i||fetch;b=b?(b+``).toLowerCase():`text`;let ae=Ld([l,d&&d.toAbortSignal()],_),T=null,E=ae&&ae.unsubscribe&&(()=>{ae.unsubscribe()}),D,oe=null,se=()=>new q(`Request body larger than maxBodyLength limit`,q.ERR_BAD_REQUEST,e,T);try{let i,l=re(`auth`);if(l&&(i={username:K.getSafeProp(l,`username`)||``,password:K.getSafeProp(l,`password`)||``}),af(t)){let e=new URL(t,$u.origin);!i&&(e.username||e.password)&&(i={username:nf(e.username),password:nf(e.password)}),(e.username||e.password)&&(e.username=``,e.password=``,t=e.href)}if(i&&(x.delete(`authorization`),x.set(`Authorization`,`Basic `+btoa(tf((i.username||``)+`:`+(i.password||``))))),ne&&typeof t==`string`&&t.startsWith(`data:`)&&Zd(t)>C)throw new q(`maxContentLength size of `+C+` exceeded`,q.ERR_BAD_RESPONSE,e,T);if(w&&n!==`get`&&n!==`head`){let e=await h(s);if(typeof e==`number`&&isFinite(e)&&(D=e,e>te))throw se()}let d=w&&(K.isReadableStream(s)||K.isStream(s)),_=(e,t,n)=>Vd(e,$d,e=>{if(w&&e>te)throw oe=se();t&&t(e)},n);if(f&&n!==`get`&&n!==`head`&&(y||d)){if(D??=await g(x,s),D!==0||d){let e=new a(t,{method:`POST`,body:s,duplex:`half`}),n;if(K.isFormData(s)&&(n=e.headers.get(`content-type`))&&x.setContentType(n),e.body){let[t,n]=y&&_d(D,gd(vd(y)))||[];s=_(e.body,t,n)}}}else if(d&&!c&&u&&n!==`get`&&n!==`head`)s=_(s);else if(d&&c&&!f&&n!==`get`&&n!==`head`)throw new q(`Stream request bodies are not supported by the current fetch implementation`,q.ERR_NOT_SUPPORT,e,T);K.isString(ee)||(ee=ee?`include`:`omit`);let O=c&&`credentials`in a.prototype;if(K.isFormData(s)){let e=x.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&x.delete(`content-type`)}x.set(`User-Agent`,`axios/`+Qd,!1);let k={...S,signal:ae,method:n.toUpperCase(),headers:hu(x.normalize()),body:s,duplex:`half`,credentials:O?ee:void 0};T=c&&new a(t,k);let ce=await(c?ie(T,S):ie(t,k)),le=Ou.from(ce.headers);if(ne){let t=K.toFiniteNumber(le.getContentLength());if(t!=null&&t>C)throw new q(`maxContentLength size of `+C+` exceeded`,q.ERR_BAD_RESPONSE,e,T)}let ue=p&&(b===`stream`||b===`response`);if(p&&ce.body&&(v||ne||ue&&E)){let t={};[`status`,`statusText`,`headers`].forEach(e=>{t[e]=ce[e]});let n=K.toFiniteNumber(le.getContentLength()),[r,i]=v&&_d(n,gd(vd(v),!0))||[],a=0;ce=new o(Vd(ce.body,$d,t=>{if(ne&&(a=t,a>C))throw new q(`maxContentLength size of `+C+` exceeded`,q.ERR_BAD_RESPONSE,e,T);r&&r(t)},()=>{i&&i(),E&&E()}),t)}b||=`text`;let de=await m[K.findKey(m,b)||`text`](ce,e);if(ne&&!p&&!ue){let t;if(de!=null&&(typeof de.byteLength==`number`?t=de.byteLength:typeof de.size==`number`?t=de.size:typeof de==`string`&&(t=typeof r==`function`?new r().encode(de).byteLength:de.length)),typeof t==`number`&&t>C)throw new q(`maxContentLength size of `+C+` exceeded`,q.ERR_BAD_RESPONSE,e,T)}return!ue&&E&&E(),await new Promise((t,n)=>{fd(t,n,{data:de,headers:Ou.from(ce.headers),status:ce.status,statusText:ce.statusText,config:e,request:T})})}catch(t){if(E&&E(),ae&&ae.aborted&&ae.reason instanceof q){let n=ae.reason;throw n.config=e,T&&(n.request=T),t!==n&&Object.defineProperty(n,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),n}if(oe)throw T&&!oe.request&&(oe.request=T),oe;if(t instanceof q)throw T&&!t.request&&(t.request=T),t;if(t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)){let n=new q(`Network Error`,q.ERR_NETWORK,e,T,t&&t.response);throw Object.defineProperty(n,"cause",{__proto__:null,value:t.cause||t,writable:!0,enumerable:!1,configurable:!0}),n}throw q.from(t,t&&t.code,e,T,t&&t.response)}}},sf=new Map,cf=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=sf;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:of(t)),l=c;return c};cf();var lf={http:null,xhr:Id,fetch:{get:cf}};K.forEach(lf,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});var uf=e=>`- ${e}`,df=e=>K.isFunction(e)||e===null||e===!1;function ff(e,t){e=K.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!df(r)&&(i=lf[(n=String(r)).toLowerCase()],i===void 0))throw new q(`Unknown adapter '${n}'`);if(i&&(K.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new q(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(uf).join(`
`):` `+uf(e[0]):`as no adapter specified`),q.ERR_NOT_SUPPORT)}return i}var pf={getAdapter:ff,adapters:lf};function mf(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new dd(null,e)}function hf(e){return mf(e),e.headers=Ou.from(e.headers),e.data=ld.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),pf.getAdapter(e.adapter||cd.adapter,e)(e).then(function(t){mf(e),e.response=t;try{t.data=ld.call(e,e.transformResponse,t)}finally{delete e.response}return t.headers=Ou.from(t.headers),t},function(t){if(!ud(t)&&(mf(e),t&&t.response)){e.response=t.response;try{t.response.data=ld.call(e,e.transformResponse,t.response)}finally{delete e.response}t.response.headers=Ou.from(t.response.headers)}return Promise.reject(t)})}var gf={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{gf[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var _f={};gf.transitional=function(e,t,n){function r(e,t){return`[Axios v`+Qd+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new q(r(i,` has been removed`+(t?` in `+t:``)),q.ERR_DEPRECATED);return t&&!_f[i]&&(_f[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),!e||e(n,i,a)}},gf.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function vf(e,t,n){if(typeof e!=`object`||!e)throw new q(`options must be an object`,q.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-->0;){let a=r[i],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new q(`option `+a+` must be `+n,q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new q(`Unknown option `+a,q.ERR_BAD_OPTION)}}var yf={assertOptions:vf,validators:gf},Z=yf.validators,bf=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Gu,response:new Gu}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=(()=>{if(!t.stack)return``;let e=t.stack.indexOf(`
`);return e===-1?``:t.stack.slice(e+1)})();try{if(!e.stack)e.stack=n;else if(n){let t=n.indexOf(`
`),r=t===-1?-1:n.indexOf(`
`,t+1),i=r===-1?``:n.slice(r+1);String(e.stack).endsWith(i)||(e.stack+=`
`+n)}}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=Md(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&yf.assertOptions(n,{silentJSONParsing:Z.transitional(Z.boolean),forcedJSONParsing:Z.transitional(Z.boolean),clarifyTimeoutError:Z.transitional(Z.boolean),legacyInterceptorReqResOrdering:Z.transitional(Z.boolean),advertiseZstdAcceptEncoding:Z.transitional(Z.boolean),validateStatusUndefinedResolves:Z.transitional(Z.boolean)},!1),r!=null&&(K.isFunction(r)?t.paramsSerializer={serialize:r}:yf.assertOptions(r,{encode:Z.function,serialize:Z.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),yf.assertOptions(t,{baseUrl:Z.spelling(`baseURL`),withXsrfToken:Z.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&K.merge(i.common,i[t.method]);i&&K.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`,`common`],e=>{delete i[e]}),t.headers=Ou.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||Ku;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[hf.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e?e(f):f}catch(e){if(!t){l=Promise.reject(e);break}try{let n=t.call(this,e);K.isThenable(n)&&(l=Promise.resolve(n).then(()=>hf.call(this,f)))}catch(e){l=Promise.reject(e)}break}}if(!l)try{l=hf.call(this,f)}catch(e){l=Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=Md(this.defaults,e),Wu(kd(e.baseURL,e.url,e.allowAbsoluteUrls,e),e.params,e.paramsSerializer)}};K.forEach([`delete`,`get`,`head`,`options`],function(e){bf.prototype[e]=function(t,n){return this.request(Md(n||{},{method:e,url:t,data:n&&K.hasOwnProp(n,`data`)?n.data:void 0}))}}),K.forEach([`post`,`put`,`patch`,`query`],function(e){function t(t){return function(n,r,i){return this.request(Md(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}bf.prototype[e]=t(),e!==`query`&&(bf.prototype[e+`Form`]=t(!0))});var xf=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-->0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new dd(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function Sf(e){return function(t){return e.apply(null,t)}}function Cf(e){return K.isObject(e)&&e.isAxiosError===!0}var wf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(wf).forEach(([e,t])=>{wf[t]=e});function Tf(e){let t=new bf(e),n=Xc(bf.prototype.request,t);return K.extend(n,bf.prototype,t,{allOwnKeys:!0}),K.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Tf(Md(e,t))},n}var Ef=Tf(cd);Ef.Axios=bf,Ef.CanceledError=dd,Ef.CancelToken=xf,Ef.isCancel=ud,Ef.VERSION=Qd,Ef.toFormData=zu,Ef.AxiosError=q,Ef.Cancel=Ef.CanceledError,Ef.all=function(e){return Promise.all(e)},Ef.spread=Sf,Ef.isAxiosError=Cf,Ef.mergeConfig=Md,Ef.AxiosHeaders=Ou,Ef.formToJSON=e=>ad(K.isHTMLForm(e)?new FormData(e):e),Ef.getAdapter=pf.getAdapter,Ef.HttpStatusCode=wf,Ef.default=Ef;function Df(e){let[t,n]=(0,v.useState)([]),[r,i]=(0,v.useState)(``),[a,o]=(0,v.useState)(!0);return(0,v.useEffect)(()=>{(async()=>{try{let t=await Ef.get(e);n(t.data)}catch(e){i(e.message)}finally{o(!1)}})()},[]),{data:t,loading:a}}function Of(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<`u`){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}Of(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var kf=function(){return kf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},kf.apply(this,arguments)};function Af(e){return Af=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Af(e)}var jf=/^\s+/,Mf=/\s+$/;function Q(e,t){if(t||={},(e||=``)instanceof Q)return e;if(!(this instanceof Q))return new Q(e,t);var n=function(e){var t={r:0,g:0,b:0},n=1,r=null,i=null,a=null,o=!1,s=!1;typeof e==`string`&&(e=function(e){e=e.replace(jf,``).replace(Mf,``).toLowerCase();var t,n=!1;if(Yf[e])e=Yf[e],n=!0;else if(e==`transparent`)return{r:0,g:0,b:0,a:0,format:`name`};return(t=sp.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=sp.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=sp.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=sp.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=sp.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=sp.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=sp.hex8.exec(e))?{r:$f(t[1]),g:$f(t[2]),b:$f(t[3]),a:rp(t[4]),format:n?`name`:`hex8`}:(t=sp.hex6.exec(e))?{r:$f(t[1]),g:$f(t[2]),b:$f(t[3]),format:n?`name`:`hex`}:(t=sp.hex4.exec(e))?{r:$f(t[1]+``+t[1]),g:$f(t[2]+``+t[2]),b:$f(t[3]+``+t[3]),a:rp(t[4]+``+t[4]),format:n?`name`:`hex8`}:(t=sp.hex3.exec(e))?{r:$f(t[1]+``+t[1]),g:$f(t[2]+``+t[2]),b:$f(t[3]+``+t[3]),format:n?`name`:`hex`}:!1}(e)),Af(e)==`object`&&(cp(e.r)&&cp(e.g)&&cp(e.b)?(c=e.r,l=e.g,u=e.b,t={r:255*$(c,255),g:255*$(l,255),b:255*$(u,255)},o=!0,s=String(e.r).substr(-1)===`%`?`prgb`:`rgb`):cp(e.h)&&cp(e.s)&&cp(e.v)?(r=tp(e.s),i=tp(e.v),t=function(e,t,n){e=6*$(e,360),t=$(t,100),n=$(n,100);var r=Math.floor(e),i=e-r,a=n*(1-t),o=n*(1-i*t),s=n*(1-(1-i)*t),c=r%6,l=[n,o,a,a,s,n][c],u=[s,n,n,o,a,a][c],d=[a,a,s,n,n,o][c];return{r:255*l,g:255*u,b:255*d}}(e.h,r,i),o=!0,s=`hsv`):cp(e.h)&&cp(e.s)&&cp(e.l)&&(r=tp(e.s),a=tp(e.l),t=function(e,t,n){var r,i,a;function o(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(e=$(e,360),t=$(t,100),n=$(n,100),t===0)r=i=a=n;else{var s=n<.5?n*(1+t):n+t-n*t,c=2*n-s;r=o(c,s,e+1/3),i=o(c,s,e),a=o(c,s,e-1/3)}return{r:255*r,g:255*i,b:255*a}}(e.h,r,a),o=!0,s=`hsl`),e.hasOwnProperty(`a`)&&(n=e.a));var c,l,u;return n=Zf(n),{ok:o,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function Nf(e,t,n){e=$(e,255),t=$(t,255),n=$(n,255);var r,i,a=Math.max(e,t,n),o=Math.min(e,t,n),s=(a+o)/2;if(a==o)r=i=0;else{var c=a-o;switch(i=s>.5?c/(2-a-o):c/(a+o),a){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:i,l:s}}function Pf(e,t,n){e=$(e,255),t=$(t,255),n=$(n,255);var r,i,a=Math.max(e,t,n),o=Math.min(e,t,n),s=a,c=a-o;if(i=a===0?0:c/a,a==o)r=0;else{switch(a){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:i,v:s}}function Ff(e,t,n,r){var i=[ep(Math.round(e).toString(16)),ep(Math.round(t).toString(16)),ep(Math.round(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join(``)}function If(e,t,n,r){return[ep(np(r)),ep(Math.round(e).toString(16)),ep(Math.round(t).toString(16)),ep(Math.round(n).toString(16))].join(``)}function Lf(e,t){t=t===0?0:t||10;var n=Q(e).toHsl();return n.s-=t/100,n.s=Qf(n.s),Q(n)}function Rf(e,t){t=t===0?0:t||10;var n=Q(e).toHsl();return n.s+=t/100,n.s=Qf(n.s),Q(n)}function zf(e){return Q(e).desaturate(100)}function Bf(e,t){t=t===0?0:t||10;var n=Q(e).toHsl();return n.l+=t/100,n.l=Qf(n.l),Q(n)}function Vf(e,t){t=t===0?0:t||10;var n=Q(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),Q(n)}function Hf(e,t){t=t===0?0:t||10;var n=Q(e).toHsl();return n.l-=t/100,n.l=Qf(n.l),Q(n)}function Uf(e,t){var n=Q(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,Q(n)}function Wf(e){var t=Q(e).toHsl();return t.h=(t.h+180)%360,Q(t)}function Gf(e,t){if(isNaN(t)||t<=0)throw Error(`Argument to polyad must be a positive number`);for(var n=Q(e).toHsl(),r=[Q(e)],i=360/t,a=1;a<t;a++)r.push(Q({h:(n.h+a*i)%360,s:n.s,l:n.l}));return r}function Kf(e){var t=Q(e).toHsl(),n=t.h;return[Q(e),Q({h:(n+72)%360,s:t.s,l:t.l}),Q({h:(n+216)%360,s:t.s,l:t.l})]}function qf(e,t,n){t||=6,n||=30;var r=Q(e).toHsl(),i=360/n,a=[Q(e)];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(Q(r));return a}function Jf(e,t){t||=6;for(var n=Q(e).toHsv(),r=n.h,i=n.s,a=n.v,o=[],s=1/t;t--;)o.push(Q({h:r,s:i,v:a})),a=(a+s)%1;return o}Q.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:((e+.055)/1.055)**2.4)+.7152*(t<=.03928?t/12.92:((t+.055)/1.055)**2.4)+.0722*(n<=.03928?n/12.92:((n+.055)/1.055)**2.4)},setAlpha:function(e){return this._a=Zf(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Pf(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Pf(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?`hsv(`+t+`, `+n+`%, `+r+`%)`:`hsva(`+t+`, `+n+`%, `+r+`%, `+this._roundA+`)`},toHsl:function(){var e=Nf(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Nf(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?`hsl(`+t+`, `+n+`%, `+r+`%)`:`hsla(`+t+`, `+n+`%, `+r+`%, `+this._roundA+`)`},toHex:function(e){return Ff(this._r,this._g,this._b,e)},toHexString:function(e){return`#`+this.toHex(e)},toHex8:function(e){return function(e,t,n,r,i){var a=[ep(Math.round(e).toString(16)),ep(Math.round(t).toString(16)),ep(Math.round(n).toString(16)),ep(np(r))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join(``)}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return`#`+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?`rgb(`+Math.round(this._r)+`, `+Math.round(this._g)+`, `+Math.round(this._b)+`)`:`rgba(`+Math.round(this._r)+`, `+Math.round(this._g)+`, `+Math.round(this._b)+`, `+this._roundA+`)`},toPercentageRgb:function(){return{r:Math.round(100*$(this._r,255))+`%`,g:Math.round(100*$(this._g,255))+`%`,b:Math.round(100*$(this._b,255))+`%`,a:this._a}},toPercentageRgbString:function(){return this._a==1?`rgb(`+Math.round(100*$(this._r,255))+`%, `+Math.round(100*$(this._g,255))+`%, `+Math.round(100*$(this._b,255))+`%)`:`rgba(`+Math.round(100*$(this._r,255))+`%, `+Math.round(100*$(this._g,255))+`%, `+Math.round(100*$(this._b,255))+`%, `+this._roundA+`)`},toName:function(){return this._a===0?`transparent`:!(this._a<1)&&(Xf[Ff(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t=`#`+If(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?`GradientType = 1, `:``;if(e){var i=Q(e);n=`#`+If(i._r,i._g,i._b,i._a)}return`progid:DXImageTransform.Microsoft.gradient(`+r+`startColorstr=`+t+`,endColorstr=`+n+`)`},toString:function(e){var t=!!e;e||=this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||e!==`hex`&&e!==`hex6`&&e!==`hex3`&&e!==`hex4`&&e!==`hex8`&&e!==`name`?(e===`rgb`&&(n=this.toRgbString()),e===`prgb`&&(n=this.toPercentageRgbString()),e!==`hex`&&e!==`hex6`||(n=this.toHexString()),e===`hex3`&&(n=this.toHexString(!0)),e===`hex4`&&(n=this.toHex8String(!0)),e===`hex8`&&(n=this.toHex8String()),e===`name`&&(n=this.toName()),e===`hsl`&&(n=this.toHslString()),e===`hsv`&&(n=this.toHsvString()),n||this.toHexString()):e===`name`&&this._a===0?this.toName():this.toRgbString()},clone:function(){return Q(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(Bf,arguments)},brighten:function(){return this._applyModification(Vf,arguments)},darken:function(){return this._applyModification(Hf,arguments)},desaturate:function(){return this._applyModification(Lf,arguments)},saturate:function(){return this._applyModification(Rf,arguments)},greyscale:function(){return this._applyModification(zf,arguments)},spin:function(){return this._applyModification(Uf,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(qf,arguments)},complement:function(){return this._applyCombination(Wf,arguments)},monochromatic:function(){return this._applyCombination(Jf,arguments)},splitcomplement:function(){return this._applyCombination(Kf,arguments)},triad:function(){return this._applyCombination(Gf,[3])},tetrad:function(){return this._applyCombination(Gf,[4])}},Q.fromRatio=function(e,t){if(Af(e)==`object`){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r===`a`?e[r]:tp(e[r]));e=n}return Q(e,t)},Q.equals=function(e,t){return!(!e||!t)&&Q(e).toRgbString()==Q(t).toRgbString()},Q.random=function(){return Q.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},Q.mix=function(e,t,n){n=n===0?0:n||50;var r=Q(e).toRgb(),i=Q(t).toRgb(),a=n/100;return Q({r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a})},Q.readability=function(e,t){var n=Q(e),r=Q(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},Q.isReadable=function(e,t,n){var r,i,a=Q.readability(e,t);switch(i=!1,(r=function(e){var t=((e||={level:`AA`,size:`small`}).level||`AA`).toUpperCase(),n=(e.size||`small`).toLowerCase();return t!==`AA`&&t!==`AAA`&&(t=`AA`),n!==`small`&&n!==`large`&&(n=`small`),{level:t,size:n}}(n)).level+r.size){case`AAsmall`:case`AAAlarge`:i=a>=4.5;break;case`AAlarge`:i=a>=3;break;case`AAAsmall`:i=a>=7}return i},Q.mostReadable=function(e,t,n){var r,i,a,o,s=null,c=0;i=(n||={}).includeFallbackColors,a=n.level,o=n.size;for(var l=0;l<t.length;l++)(r=Q.readability(e,t[l]))>c&&(c=r,s=Q(t[l]));return Q.isReadable(e,s,{level:a,size:o})||!i?s:(n.includeFallbackColors=!1,Q.mostReadable(e,[`#fff`,`#000`],n))};var Yf=Q.names={aliceblue:`f0f8ff`,antiquewhite:`faebd7`,aqua:`0ff`,aquamarine:`7fffd4`,azure:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`000`,blanchedalmond:`ffebcd`,blue:`00f`,blueviolet:`8a2be2`,brown:`a52a2a`,burlywood:`deb887`,burntsienna:`ea7e5d`,cadetblue:`5f9ea0`,chartreuse:`7fff00`,chocolate:`d2691e`,coral:`ff7f50`,cornflowerblue:`6495ed`,cornsilk:`fff8dc`,crimson:`dc143c`,cyan:`0ff`,darkblue:`00008b`,darkcyan:`008b8b`,darkgoldenrod:`b8860b`,darkgray:`a9a9a9`,darkgreen:`006400`,darkgrey:`a9a9a9`,darkkhaki:`bdb76b`,darkmagenta:`8b008b`,darkolivegreen:`556b2f`,darkorange:`ff8c00`,darkorchid:`9932cc`,darkred:`8b0000`,darksalmon:`e9967a`,darkseagreen:`8fbc8f`,darkslateblue:`483d8b`,darkslategray:`2f4f4f`,darkslategrey:`2f4f4f`,darkturquoise:`00ced1`,darkviolet:`9400d3`,deeppink:`ff1493`,deepskyblue:`00bfff`,dimgray:`696969`,dimgrey:`696969`,dodgerblue:`1e90ff`,firebrick:`b22222`,floralwhite:`fffaf0`,forestgreen:`228b22`,fuchsia:`f0f`,gainsboro:`dcdcdc`,ghostwhite:`f8f8ff`,gold:`ffd700`,goldenrod:`daa520`,gray:`808080`,green:`008000`,greenyellow:`adff2f`,grey:`808080`,honeydew:`f0fff0`,hotpink:`ff69b4`,indianred:`cd5c5c`,indigo:`4b0082`,ivory:`fffff0`,khaki:`f0e68c`,lavender:`e6e6fa`,lavenderblush:`fff0f5`,lawngreen:`7cfc00`,lemonchiffon:`fffacd`,lightblue:`add8e6`,lightcoral:`f08080`,lightcyan:`e0ffff`,lightgoldenrodyellow:`fafad2`,lightgray:`d3d3d3`,lightgreen:`90ee90`,lightgrey:`d3d3d3`,lightpink:`ffb6c1`,lightsalmon:`ffa07a`,lightseagreen:`20b2aa`,lightskyblue:`87cefa`,lightslategray:`789`,lightslategrey:`789`,lightsteelblue:`b0c4de`,lightyellow:`ffffe0`,lime:`0f0`,limegreen:`32cd32`,linen:`faf0e6`,magenta:`f0f`,maroon:`800000`,mediumaquamarine:`66cdaa`,mediumblue:`0000cd`,mediumorchid:`ba55d3`,mediumpurple:`9370db`,mediumseagreen:`3cb371`,mediumslateblue:`7b68ee`,mediumspringgreen:`00fa9a`,mediumturquoise:`48d1cc`,mediumvioletred:`c71585`,midnightblue:`191970`,mintcream:`f5fffa`,mistyrose:`ffe4e1`,moccasin:`ffe4b5`,navajowhite:`ffdead`,navy:`000080`,oldlace:`fdf5e6`,olive:`808000`,olivedrab:`6b8e23`,orange:`ffa500`,orangered:`ff4500`,orchid:`da70d6`,palegoldenrod:`eee8aa`,palegreen:`98fb98`,paleturquoise:`afeeee`,palevioletred:`db7093`,papayawhip:`ffefd5`,peachpuff:`ffdab9`,peru:`cd853f`,pink:`ffc0cb`,plum:`dda0dd`,powderblue:`b0e0e6`,purple:`800080`,rebeccapurple:`663399`,red:`f00`,rosybrown:`bc8f8f`,royalblue:`4169e1`,saddlebrown:`8b4513`,salmon:`fa8072`,sandybrown:`f4a460`,seagreen:`2e8b57`,seashell:`fff5ee`,sienna:`a0522d`,silver:`c0c0c0`,skyblue:`87ceeb`,slateblue:`6a5acd`,slategray:`708090`,slategrey:`708090`,snow:`fffafa`,springgreen:`00ff7f`,steelblue:`4682b4`,tan:`d2b48c`,teal:`008080`,thistle:`d8bfd8`,tomato:`ff6347`,turquoise:`40e0d0`,violet:`ee82ee`,wheat:`f5deb3`,white:`fff`,whitesmoke:`f5f5f5`,yellow:`ff0`,yellowgreen:`9acd32`},Xf=Q.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(Yf);function Zf(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function $(e,t){(function(e){return typeof e==`string`&&e.indexOf(`.`)!=-1&&parseFloat(e)===1})(e)&&(e=`100%`);var n=function(e){return typeof e==`string`&&e.indexOf(`%`)!=-1}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function Qf(e){return Math.min(1,Math.max(0,e))}function $f(e){return parseInt(e,16)}function ep(e){return e.length==1?`0`+e:``+e}function tp(e){return e<=1&&(e=100*e+`%`),e}function np(e){return Math.round(255*parseFloat(e)).toString(16)}function rp(e){return $f(e)/255}var ip,ap,op,sp=(ap=`[\\s|\\(]+(`+(ip=`(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`)+`)[,|\\s]+(`+ip+`)[,|\\s]+(`+ip+`)\\s*\\)?`,op=`[\\s|\\(]+(`+ip+`)[,|\\s]+(`+ip+`)[,|\\s]+(`+ip+`)[,|\\s]+(`+ip+`)\\s*\\)?`,{CSS_UNIT:new RegExp(ip),rgb:RegExp(`rgb`+ap),rgba:RegExp(`rgba`+op),hsl:RegExp(`hsl`+ap),hsla:RegExp(`hsla`+op),hsv:RegExp(`hsv`+ap),hsva:RegExp(`hsva`+op),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function cp(e){return!!sp.CSS_UNIT.exec(e)}var lp=function(e,t){var n=(typeof e==`string`?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=n,i=parseFloat(t),a=i+i/5*r*-1;return(a==0||a<=2**-52)&&(a=.1),{animationPeriod:a+`s`}}return{animationPeriod:t}},up=function(e,t){var n=e||{},r=``;switch(t){case`small`:r=`12px`;break;case`medium`:r=`16px`;break;case`large`:r=`20px`;break;default:r=void 0}var i={};if(n.fontSize){var a=n.fontSize;i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(n,[`fontSize`]),r=a}return{fontSize:r,styles:i}},dp={color:`currentColor`,mixBlendMode:`difference`,width:`unset`,display:`block`,paddingTop:`2px`},fp=function(e){var t=e.className,n=e.text,r=e.textColor,i=e.staticText,a=e.style;return n?v.createElement(`span`,{className:`rli-d-i-b rli-text-format ${t||``}`.trim(),style:kf(kf(kf({},i&&dp),r&&{color:r,mixBlendMode:`unset`}),a&&a)},typeof n==`string`&&n.length?n:`loading`):null},pp=`rgb(50, 205, 50)`;function mp(e,t){if(t===void 0&&(t=0),e.length===0)throw Error(`Input array cannot be empty!`);var n=[];return function e(t,r){return r===void 0&&(r=0),n.push.apply(n,t),n.length<r&&e(n,r),n.slice(0,r)}(e,t)}Of(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);var hp=Q(pp).toRgb(),gp=Array.from({length:4},(function(e,t){return`--atom-phase${t+1}-rgb`})),_p=function(e){var t=up(e?.style,e?.size),n=t.styles,r=t.fontSize,i=e?.easing,a=lp(e?.speedPlus,`1s`).animationPeriod,o=function(e){var t={};if(e instanceof Array){for(var n=mp(e,gp.length),r=0;r<n.length&&!(r>=4);r++)try{if(!(s=Q(n[r])).isValid())throw Error(`invalid color`);var i=(c=s.toRgb()).r,a=c.g,o=c.b;t[gp[r]]=`${i}, ${a}, ${o}`}catch{i=hp.r,a=hp.g,o=hp.b,t[gp[r]]=`${i}, ${a}, ${o}`,console.warn(`Possibly an invalid color( ${n[r]} ) passed to Atom indicator!`)}return t}try{if(typeof e!=`string`)throw Error(`Color String expected`);var s;if(!(s=Q(e)).isValid())throw Error(`Invalid color`);var c;for(i=(c=s.toRgb()).r,a=c.g,o=c.b,r=0;r<gp.length;r++)t[gp[r]]=`${i}, ${a}, ${o}`}catch(n){for(n instanceof Error?console.warn(`[${n.message}]: Received "${typeof e}" instead with value, ${JSON.stringify(e)}`):console.warn(`${JSON.stringify(e)} received in <Atom /> indicator cannot be processed. Using default instead!`),r=0;r<gp.length;r++)i=hp.r,a=hp.g,o=hp.b,t[gp[r]]=`${i}, ${a}, ${o}`}return t}(e?.color??``);return v.createElement(`span`,{className:`rli-d-i-b atom-rli-bounding-box`,style:kf(kf(kf(kf(kf({},r&&{fontSize:r}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),o),n),role:`status`,"aria-live":`polite`,"aria-label":`Loading`},v.createElement(`span`,{className:`rli-d-i-b atom-indicator`},v.createElement(`span`,{className:`rli-d-i-b electron-orbit`}),v.createElement(`span`,{className:`rli-d-i-b electron-orbit`}),v.createElement(`span`,{className:`rli-d-i-b electron-orbit`})),v.createElement(fp,{className:`atom-text`,staticText:!0,text:e?.text,textColor:e?.textColor}))};Of(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--commet-phase${t+1}-color`})),Of(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--OP-annulus-phase${t+1}-color`}));function vp(e){return e&&e.Math===Math&&e}Of(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`),vp(typeof window==`object`&&window)||vp(typeof self==`object`&&self)||vp(typeof global==`object`&&global)||function(){return this}()||Function(`return this`)(),Array.from({length:4},(function(e,t){return`--OP-dotted-phase${t+1}-color`})),Of(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--OP-spokes-phase${t+1}-color`})),Of(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`),Array.from({length:4},(function(e,t){return`--OP-annulus-dual-sectors-phase${t+1}-color`})),Of(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return[`--OP-annulus-track-phase${t+1}-color`,`--OP-annulus-sector-phase${t+1}-color`]})),Of(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--four-square-phase${t+1}-color`})),Of(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--mosaic-phase${t+1}-color`})),Of(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--riple-phase${t+1}-color`})),Of(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--TD-pulsate-phase${t+1}-color`})),Of(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--TD-brick-stack-phase${t+1}-color`})),Of(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--TD-bob-phase${t+1}-color`})),Of(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--TD-bounce-phase${t+1}-color`})),Of(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--shape-phase${t+1}-color`})),Of(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--trophySpin-phase${t+1}-color`})),Of(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--slab-phase${t+1}-color`})),Of(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`),Array.from({length:4},(function(e,t){return`--life-line-phase${t+1}-color`}));var yp=()=>{let[e,t]=(0,v.useState)(``),{data:n,loading:r}=Df(`https://zorvex-api.onrender.com/mensFashion`);console.log(e);let i=n.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return console.log(i),r?(0,F.jsx)(`div`,{className:`flex  justify-center pt-[13%]  py-[20%]`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(_p,{color:`black`,size:`large`,text:``,textColor:``,className:``}),(0,F.jsx)(`h3`,{className:`text-black text-xl font-bold text-center `,children:`Loading.....`})]})}):(0,F.jsxs)(`div`,{className:`bg-slate-50 `,children:[(0,F.jsxs)(`div`,{className:`py-5 `,children:[(0,F.jsx)(`p`,{className:`text-4xl font-bold text-center`,children:`Men's Fashion`}),(0,F.jsx)(`p`,{className:`text-2xl text-center mt-3`,children:`Elevate your everyday style with timeless men’s fashion`})]}),(0,F.jsxs)(`div`,{className:`flex justify-center py-5`,children:[(0,F.jsx)(`p`,{className:`absolute left-[20.5%] top-58 text-2xl`,children:(0,F.jsx)(Wa,{icon:Ka})}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search products...`,onChange:e=>t(e.target.value),className:`w-[60%] border-1 py-2 rounded-xl placeholder:text-xl indent-12`})]}),(0,F.jsx)(`div`,{className:`grid grid-cols-3 place-items-center pb-20  `,children:i.map(e=>(0,F.jsxs)(`div`,{className:`h-110 w-80 bg-[#EBC0A0] rounded-md overflow-hidden mt-10 border-3 hover:scale-105 duration-500 mb-10 shadow-[0_8px_25px_rgba(0,0,0,0.08)]`,children:[(0,F.jsx)(`div`,{className:`h-60 w-80 bg-black  overflow-hidden   border-b-3 `,children:(0,F.jsx)(`img`,{className:`h-full w-full object-cover  `,src:e.image,alt:``})}),(0,F.jsx)(`p`,{className:`text-black text-center text-[20px] font-medium mt-2 `,children:e.name}),(0,F.jsxs)(`p`,{className:`text-black text-[22px]  font-bold text-center mt-5`,children:[`₹`,e.price]}),(0,F.jsx)(`button`,{className:`text-black px-10 py-1 bg-black text-white block mx-auto mt-10 rounded-sm hover:scale-105 duration-500`,children:`Add to Cart`})]}))})]})},bp=()=>{let{data:e,loading:t}=Df(`https://zorvex-api.onrender.com/womensFashion`),[n,r]=(0,v.useState)(``),i=e.filter(e=>e.name.toLowerCase().includes(n.toLowerCase()));return t?(0,F.jsx)(`div`,{className:`flex  justify-center pt-[13%]  py-[20%]`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(_p,{color:`black`,size:`large`,text:``,textColor:``,className:``}),(0,F.jsx)(`h3`,{className:`text-black text-xl font-bold text-center `,children:`Loading.....`})]})}):(0,F.jsxs)(`div`,{className:`bg-slate-50`,children:[(0,F.jsxs)(`div`,{className:`py-5`,children:[(0,F.jsx)(`p`,{className:`text-4xl font-bold text-center`,children:`Women's Fashion`}),(0,F.jsx)(`p`,{className:`text-2xl text-center mt-3`,children:`Discover effortless elegance with modern women’s fashion`})]}),(0,F.jsxs)(`div`,{className:`flex justify-center py-5`,children:[(0,F.jsx)(`p`,{className:`absolute left-[20.5%] top-58 text-2xl`,children:(0,F.jsx)(Wa,{icon:Ka})}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search products...`,onChange:e=>r(e.target.value),className:`w-[60%] border-1 py-2 rounded-xl placeholder:text-xl indent-12`})]}),(0,F.jsx)(`div`,{className:`grid grid-cols-3 place-items-center pb-20  `,children:i.map(e=>(0,F.jsxs)(`div`,{className:`h-110 w-80 bg-[#EBC0A0] rounded-md overflow-hidden mt-10  mb-10 border-5 hover:scale-105 duration-500`,children:[(0,F.jsx)(`div`,{className:`h-60 w-80 bg-black  overflow-hidden   pb-1 `,children:(0,F.jsx)(`img`,{className:`h-full w-full object-cover  `,src:e.image,alt:``})}),(0,F.jsx)(`p`,{className:`text-black text-center text-[20px] font-medium mt-2 `,children:e.name}),(0,F.jsxs)(`p`,{className:`text-black text-[22px]  font-bold text-center mt-5`,children:[`₹`,e.price]}),(0,F.jsx)(`button`,{className:`text-black px-10 py-1 bg-black text-white block mx-auto mt-10 rounded-sm hover:scale-105 duration-500`,children:`Add to Cart`})]}))})]})},xp=()=>{let{data:e,loading:t}=Df(`https://zorvex-api.onrender.com/accessories`),[n,r]=(0,v.useState)(``),i=e.filter(e=>e.name.toLowerCase().includes(n.toLowerCase()));return t?(0,F.jsx)(`div`,{className:`flex  justify-center pt-[13%]  py-[20%]`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(_p,{color:`black`,size:`large`,text:``,textColor:``,className:``}),(0,F.jsx)(`h3`,{className:`text-black text-xl font-bold text-center `,children:`Loading.....`})]})}):(0,F.jsxs)(`div`,{className:`bg-slate-50 `,children:[(0,F.jsxs)(`div`,{className:`py-5`,children:[(0,F.jsx)(`p`,{className:`text-4xl font-bold text-center`,children:`Accessories`}),(0,F.jsx)(`p`,{className:`text-2xl text-center mt-3`,children:`Complete your look with stylish everyday accessories`})]}),(0,F.jsxs)(`div`,{className:`flex justify-center py-5`,children:[(0,F.jsx)(`p`,{className:`absolute left-[20.5%] top-58 text-2xl`,children:(0,F.jsx)(Wa,{icon:Ka})}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search products...`,onChange:e=>r(e.target.value),className:`w-[60%] border-1 py-2 rounded-xl placeholder:text-xl indent-12`})]}),(0,F.jsx)(`div`,{className:`grid grid-cols-3 place-items-center pb-20  `,children:i.map(e=>(0,F.jsxs)(`div`,{className:`h-110 w-80 bg-[#EBC0A0] rounded-md overflow-hidden mt-10 mb-10 border-5 hover:scale-105 duration-500`,children:[(0,F.jsx)(`div`,{className:`h-60 w-80 bg-black  overflow-hidden   pb-1 `,children:(0,F.jsx)(`img`,{className:`h-full w-full object-cover  `,src:e.image,alt:``})}),(0,F.jsx)(`p`,{className:`text-black text-center text-[20px] font-medium mt-2 `,children:e.name}),(0,F.jsxs)(`p`,{className:`text-black text-[22px]  font-bold text-center mt-5`,children:[`₹`,e.price]}),(0,F.jsx)(`button`,{className:`text-black px-10 py-1 bg-black text-white block mx-auto mt-10 rounded-sm hover:scale-105 duration-500`,children:`Add to Cart`})]}))})]})},Sp=()=>{let{data:e,loading:t}=Df(`https://zorvex-api.onrender.com/footwear`),[n,r]=(0,v.useState)(``),i=e.filter(e=>e.name.toLowerCase().includes(n.toLowerCase()));return t?(0,F.jsx)(`div`,{className:`flex  justify-center pt-[13%]  py-[20%]`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(_p,{color:`black`,size:`large`,text:``,textColor:``,className:``}),(0,F.jsx)(`h3`,{className:`text-black text-xl font-bold text-center `,children:`Loading.....`})]})}):(0,F.jsxs)(`div`,{className:`bg-slate-50`,children:[(0,F.jsxs)(`div`,{className:`py-5`,children:[(0,F.jsx)(`p`,{className:`text-4xl font-bold text-center`,children:`Footwears`}),(0,F.jsx)(`p`,{className:`text-2xl text-center mt-3`,children:`Step into comfort and style with footwear made for you`})]}),(0,F.jsxs)(`div`,{className:`flex justify-center py-5`,children:[(0,F.jsx)(`p`,{className:`absolute left-[20.5%] top-58 text-2xl`,children:(0,F.jsx)(Wa,{icon:Ka})}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search products...`,onChange:e=>r(e.target.value),className:`w-[60%] border-1 py-2 rounded-xl placeholder:text-xl indent-12`})]}),(0,F.jsx)(`div`,{className:`grid grid-cols-3 place-items-center pb-20  `,children:i.map(e=>(0,F.jsxs)(`div`,{className:`h-110 w-80 bg-[#EBC0A0] rounded-md overflow-hidden mt-10 mb-10 border-5 hover:scale-105 duration-500`,children:[(0,F.jsx)(`div`,{className:`h-60 w-80 bg-black  overflow-hidden   pb-1 `,children:(0,F.jsx)(`img`,{className:`h-full w-full object-cover  `,src:e.image,alt:``})}),(0,F.jsx)(`p`,{className:`text-black text-center text-[20px] font-medium mt-2 `,children:e.name}),(0,F.jsxs)(`p`,{className:`text-black text-[22px]  font-bold text-center mt-5`,children:[`₹`,e.price]}),(0,F.jsx)(`button`,{className:`text-black px-10 py-1 bg-black text-white block mx-auto mt-10 rounded-sm hover:scale-105 duration-500`,children:`Add to Cart`})]}))})]})},Cp=()=>{let{data:e,loading:t}=Df(`https://zorvex-api.onrender.com/bags`),[n,r]=(0,v.useState)(``),i=e.filter(e=>e.name.toLowerCase().includes(n.toLowerCase()));return t?(0,F.jsx)(`div`,{className:`flex  justify-center pt-[13%]  py-[20%]`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(_p,{color:`black`,size:`large`,text:``,textColor:``,className:``}),(0,F.jsx)(`h3`,{className:`text-black text-xl font-bold text-center `,children:`Loading.....`})]})}):(0,F.jsxs)(`div`,{className:`bg-slate-50`,children:[(0,F.jsxs)(`div`,{className:`py-5`,children:[(0,F.jsx)(`p`,{className:`text-4xl font-bold text-center`,children:`Backpacks`}),(0,F.jsx)(`p`,{className:`text-2xl text-center mt-3`,children:`Carry your essentials in style with premium backpacks`})]}),(0,F.jsxs)(`div`,{className:`flex justify-center py-5`,children:[(0,F.jsx)(`p`,{className:`absolute left-[20.5%] top-58 text-2xl`,children:(0,F.jsx)(Wa,{icon:Ka})}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search products...`,onChange:e=>r(e.target.value),className:`w-[60%] border-1 py-2 rounded-xl placeholder:text-xl indent-12`})]}),(0,F.jsx)(`div`,{className:`grid grid-cols-3 place-items-center pb-20  `,children:i.map(e=>(0,F.jsxs)(`div`,{className:`h-110 w-80 bg-[#EBC0A0] rounded-md overflow-hidden mt-10 mb-10 border-5 hover:scale-105 duration-500`,children:[(0,F.jsx)(`div`,{className:`h-60 w-80 bg-black  overflow-hidden   pb-1 `,children:(0,F.jsx)(`img`,{className:`h-full w-full object-cover  `,src:e.image,alt:``})}),(0,F.jsx)(`p`,{className:`text-black text-center text-[20px] font-medium mt-2 `,children:e.name}),(0,F.jsxs)(`p`,{className:`text-black text-[22px]  font-bold text-center mt-5`,children:[`₹`,e.price]}),(0,F.jsx)(`button`,{className:`text-black px-10 py-1 bg-black text-white block mx-auto mt-10 rounded-sm hover:scale-105 duration-500`,children:`Add to Cart`})]}))})]})},wp=()=>{let{data:e,loading:t}=Df(`https://zorvex-api.onrender.com/sunglasses`),[n,r]=(0,v.useState)(``),i=e.filter(e=>e.name.toLowerCase().includes(n.toLowerCase()));return t?(0,F.jsx)(`div`,{className:`flex  justify-center pt-[13%]  py-[20%]`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(_p,{color:`black`,size:`large`,text:``,textColor:``,className:``}),(0,F.jsx)(`h3`,{className:`text-black text-xl font-bold text-center `,children:`Loading.....`})]})}):(0,F.jsxs)(`div`,{className:`bg-slate-50`,children:[(0,F.jsxs)(`div`,{className:`py-5`,children:[(0,F.jsx)(`p`,{className:`text-4xl font-bold text-center`,children:`Sunglasses`}),(0,F.jsx)(`p`,{className:`text-2xl text-center mt-3`,children:`Protect your eyes while elevating your everyday look`})]}),(0,F.jsxs)(`div`,{className:`flex justify-center py-5`,children:[(0,F.jsx)(`p`,{className:`absolute left-[20.5%] top-58 text-2xl`,children:(0,F.jsx)(Wa,{icon:Ka})}),(0,F.jsx)(`input`,{type:`text`,placeholder:`Search products...`,onChange:e=>r(e.target.value),className:`w-[60%] border-1 py-2 rounded-xl placeholder:text-xl indent-12`})]}),(0,F.jsx)(`div`,{className:`grid grid-cols-3 place-items-center pb-20  `,children:i.map(e=>(0,F.jsxs)(`div`,{className:`h-110 w-80 bg-[#EBC0A0] rounded-md overflow-hidden mt-10 mb-10 border-5 hover:scale-105 duration-500`,children:[(0,F.jsx)(`div`,{className:`h-60 w-80 bg-black  overflow-hidden   pb-1 `,children:(0,F.jsx)(`img`,{className:`h-full w-full object-cover  `,src:e.image,alt:``})}),(0,F.jsx)(`p`,{className:`text-black text-center text-[20px] font-medium mt-2 `,children:e.name}),(0,F.jsxs)(`p`,{className:`text-black text-[22px]  font-bold text-center mt-5`,children:[`₹`,e.price]}),(0,F.jsx)(`button`,{className:`text-black px-10 py-1 bg-black text-white block mx-auto mt-10 rounded-sm hover:scale-105 duration-500`,children:`Add to Cart`})]}))})]})},Tp=()=>(0,F.jsxs)(`div`,{className:`bg-slate-50`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`p`,{className:`text-4xl font-bold text-center py-5`,children:`Contact Us`}),(0,F.jsx)(`p`,{className:`text-2xl  text-center `,children:`We’re here to help - reach out anytime, and we’ll be happy to assist.`})]}),(0,F.jsxs)(`div`,{className:`flex justify-between mt-10 bg-[#F7D0B0]`,children:[(0,F.jsxs)(`div`,{className:`bg-[#F7D0B0] h-100 w-full `,children:[(0,F.jsx)(`p`,{className:`text-2xl font-bold text-center text-black pt-5 `,children:`Send us a Message`}),(0,F.jsx)(`p`,{className:`text-lg  text-center text-black pt-1 `,children:`Fill out the form below and we will get back to you soon`}),(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`div`,{className:`flex pt-5 justify-center `,children:[(0,F.jsx)(`input`,{type:`text`,placeholder:`Your Name`,className:`w-[41.5%] mr-5 py-[5px]  rounded-[8px] border-1 indent-3 focus:outline-none`}),` `,(0,F.jsx)(`input`,{type:`text`,placeholder:`Email`,className:` py-[5px] w-[41.5%]  rounded-[8px] border-1 indent-3 focus:outline-none`})]}),(0,F.jsx)(`div`,{className:`py-5 flex justify-center`,children:(0,F.jsx)(`input`,{type:`text`,placeholder:`Subject`,className:` w-[86%]  py-[5px]  rounded-[8px] border-1 indent-3 focus:outline-none`})}),(0,F.jsx)(`div`,{className:`flex justify-center`,children:(0,F.jsx)(`textarea`,{name:``,id:``,placeholder:`Your Message`,className:` h-30 w-[86%]    rounded-[8px] border-1 indent-3 focus:outline-none placeholder:py-[5px]`})}),(0,F.jsx)(`button`,{className:`mt-4 py-1 px-20 bg-black text-white rounded-md block mx-auto hover:scale-105 duration-500`,children:`Send Message ⟶`})]})]}),(0,F.jsx)(`div`,{children:(0,F.jsx)(`div`,{className:`h-100 w-200 overflow-hidden rounded-l-3xl`,children:(0,F.jsx)(`img`,{src:`Contact-image.png`,alt:``})})})]}),(0,F.jsxs)(`div`,{className:` py-10  flex justify-around`,children:[(0,F.jsxs)(`div`,{className:`bg-[#F7D0B0] h-50 w-50 rounded-xl flex flex-col justify-center hover:-translate-y-3 duration-300`,children:[(0,F.jsx)(`p`,{className:`text-center text-5xl`,children:(0,F.jsx)(Wa,{icon:Qa})}),(0,F.jsx)(`p`,{className:`text-center text-2xl font-bold mt-3`,children:`Visit Us`}),(0,F.jsxs)(`p`,{className:`text-center text-base mt-2`,children:[`Chennai, TamilNadu `,(0,F.jsx)(`br`,{}),`India`]})]}),(0,F.jsxs)(`div`,{className:`bg-[#F7D0B0] h-50 w-50 rounded-xl flex flex-col justify-center hover:-translate-y-3 duration-300`,children:[(0,F.jsxs)(`p`,{className:`text-center text-5xl`,children:[(0,F.jsx)(Wa,{icon:Ga}),` `]}),(0,F.jsx)(`p`,{className:`text-center text-2xl font-bold mt-3`,children:`Email Us`}),(0,F.jsxs)(`p`,{className:`text-center text-base mt-2`,children:[`hazeef135@gmail.com`,(0,F.jsx)(`br`,{}),`We'll reply within 24h`]})]}),(0,F.jsxs)(`div`,{className:`bg-[#F7D0B0] h-50 w-50 rounded-xl flex flex-col justify-center hover:-translate-y-3 duration-300`,children:[(0,F.jsxs)(`p`,{className:`text-center text-5xl`,children:[(0,F.jsx)(Wa,{icon:Xa}),` `]}),(0,F.jsx)(`p`,{className:`text-center text-2xl font-bold mt-3`,children:`Call Us`}),(0,F.jsxs)(`p`,{className:`text-center text-base mt-2`,children:[`+91 9344275867`,(0,F.jsx)(`br`,{}),`Connect with us anytime`]})]}),(0,F.jsxs)(`div`,{className:`bg-[#F7D0B0] h-50 w-50 rounded-xl flex flex-col justify-center hover:-translate-y-3 duration-300`,children:[(0,F.jsxs)(`p`,{className:`text-center text-5xl`,children:[(0,F.jsx)(Wa,{icon:qa}),` `]}),(0,F.jsx)(`p`,{className:`text-center text-2xl font-bold mt-3`,children:`Working Hours`}),(0,F.jsxs)(`p`,{className:`text-center text-base mt-2`,children:[`Mon - Sat, 9AM - 6PM`,(0,F.jsx)(`br`,{}),`Sunday Closed`]})]})]})]});function Ep(){return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(Fc,{children:[(0,F.jsx)(qc,{}),(0,F.jsxs)(Zs,{children:[(0,F.jsx)(Ys,{path:`/`,element:(0,F.jsx)(Jc,{})}),(0,F.jsx)(Ys,{path:`/collection`,element:(0,F.jsx)(Kc,{})}),(0,F.jsx)(Ys,{path:`/contact`,element:(0,F.jsx)(Tp,{})}),(0,F.jsx)(Ys,{path:`/mens-product`,element:(0,F.jsx)(yp,{})}),(0,F.jsx)(Ys,{path:`/womens-product`,element:(0,F.jsx)(bp,{})}),(0,F.jsx)(Ys,{path:`/accessories-product`,element:(0,F.jsx)(xp,{})}),(0,F.jsx)(Ys,{path:`/footwear-product`,element:(0,F.jsx)(Sp,{})}),(0,F.jsx)(Ys,{path:`/bag-product`,element:(0,F.jsx)(Cp,{})}),(0,F.jsx)(Ys,{path:`/sunglasses-product`,element:(0,F.jsx)(wp,{})})]}),(0,F.jsx)(Yc,{})]})})}(0,y.createRoot)(document.getElementById(`root`)).render((0,F.jsx)(v.StrictMode,{children:(0,F.jsx)(Ep,{})}));
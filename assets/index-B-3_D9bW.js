var Bu=Object.defineProperty;var Fu=(t,e,n)=>e in t?Bu(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var te=(t,e,n)=>Fu(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function wi(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const re={},fn=[],tt=()=>{},Hu=()=>!1,ns=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ki=t=>t.startsWith("onUpdate:"),_e=Object.assign,Ei=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ju=Object.prototype.hasOwnProperty,G=(t,e)=>ju.call(t,e),F=Array.isArray,dn=t=>rs(t)==="[object Map]",Za=t=>rs(t)==="[object Set]",H=t=>typeof t=="function",ce=t=>typeof t=="string",Bt=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Ya=t=>(oe(t)||H(t))&&H(t.then)&&H(t.catch),Qa=Object.prototype.toString,rs=t=>Qa.call(t),zu=t=>rs(t).slice(8,-1),el=t=>rs(t)==="[object Object]",Ii=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bn=wi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ss=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vu=/-(\w)/g,Me=ss(t=>t.replace(Vu,(e,n)=>n?n.toUpperCase():"")),Wu=/\B([A-Z])/g,en=ss(t=>t.replace(Wu,"-$1").toLowerCase()),is=ss(t=>t.charAt(0).toUpperCase()+t.slice(1)),ks=ss(t=>t?`on${is(t)}`:""),Lt=(t,e)=>!Object.is(t,e),Rr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},tl=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},qs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vo;const os=()=>vo||(vo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ti(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?Ju(r):Ti(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ce(t)||oe(t))return t}const qu=/;(?![^(]*\))/g,Ku=/:([^]+)/,Gu=/\/\*[^]*?\*\//g;function Ju(t){const e={};return t.replace(Gu,"").split(qu).forEach(n=>{if(n){const r=n.split(Ku);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function as(t){let e="";if(ce(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=as(t[n]);r&&(e+=r+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Xu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zu=wi(Xu);function nl(t){return!!t||t===""}const rl=t=>!!(t&&t.__v_isRef===!0),Un=t=>ce(t)?t:t==null?"":F(t)||oe(t)&&(t.toString===Qa||!H(t.toString))?rl(t)?Un(t.value):JSON.stringify(t,sl,2):String(t),sl=(t,e)=>rl(e)?sl(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Es(r,i)+" =>"]=s,n),{})}:Za(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Es(n))}:Bt(e)?Es(e):oe(e)&&!F(e)&&!el(e)?String(e):e,Es=(t,e="")=>{var n;return Bt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class Yu{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!e&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Se;try{return Se=this,e()}finally{Se=n}}}on(){++this._on===1&&(this.prevScope=Se,Se=this)}off(){this._on>0&&--this._on===0&&(Se=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qu(){return Se}let ie;const Is=new WeakSet;class il{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Is.has(this)&&(Is.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||al(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yo(this),ll(this);const e=ie,n=Be;ie=this,Be=!0;try{return this.fn()}finally{cl(this),ie=e,Be=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xi(e);this.deps=this.depsTail=void 0,yo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Is.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ks(this)&&this.run()}get dirty(){return Ks(this)}}let ol=0,Fn,Hn;function al(t,e=!1){if(t.flags|=8,e){t.next=Hn,Hn=t;return}t.next=Fn,Fn=t}function Si(){ol++}function Ri(){if(--ol>0)return;if(Hn){let e=Hn;for(Hn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Fn;){let e=Fn;for(Fn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ll(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cl(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),xi(r),eh(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ks(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ul(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ul(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===er)||(t.globalVersion=er,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ks(t))))return;t.flags|=2;const e=t.dep,n=ie,r=Be;ie=t,Be=!0;try{ll(t);const s=t.fn(t._value);(e.version===0||Lt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ie=n,Be=r,cl(t),t.flags&=-3}}function xi(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)xi(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function eh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Be=!0;const hl=[];function _t(){hl.push(Be),Be=!1}function bt(){const t=hl.pop();Be=t===void 0?!0:t}function yo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ie;ie=void 0;try{e()}finally{ie=n}}}let er=0;class th{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ci{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ie||!Be||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink=new th(ie,this),ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,fl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=r)}return n}trigger(e){this.version++,er++,this.notify(e)}notify(e){Si();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ri()}}}function fl(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)fl(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Gs=new WeakMap,Wt=Symbol(""),Js=Symbol(""),tr=Symbol("");function pe(t,e,n){if(Be&&ie){let r=Gs.get(t);r||Gs.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ci),s.map=r,s.key=n),s.track()}}function ut(t,e,n,r,s,i){const o=Gs.get(t);if(!o){er++;return}const a=l=>{l&&l.trigger()};if(Si(),e==="clear")o.forEach(a);else{const l=F(t),c=l&&Ii(n);if(l&&n==="length"){const u=Number(r);o.forEach((f,h)=>{(h==="length"||h===tr||!Bt(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(tr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Wt)),dn(t)&&a(o.get(Js)));break;case"delete":l||(a(o.get(Wt)),dn(t)&&a(o.get(Js)));break;case"set":dn(t)&&a(o.get(Wt));break}}Ri()}function an(t){const e=K(t);return e===t?e:(pe(e,"iterate",tr),Fe(t)?e:e.map(ye))}function Ai(t){return pe(t=K(t),"iterate",tr),t}const nh={__proto__:null,[Symbol.iterator](){return Ts(this,Symbol.iterator,ye)},concat(...t){return an(this).concat(...t.map(e=>F(e)?an(e):e))},entries(){return Ts(this,"entries",t=>(t[1]=ye(t[1]),t))},every(t,e){return ot(this,"every",t,e,void 0,arguments)},filter(t,e){return ot(this,"filter",t,e,n=>n.map(ye),arguments)},find(t,e){return ot(this,"find",t,e,ye,arguments)},findIndex(t,e){return ot(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ot(this,"findLast",t,e,ye,arguments)},findLastIndex(t,e){return ot(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ot(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ss(this,"includes",t)},indexOf(...t){return Ss(this,"indexOf",t)},join(t){return an(this).join(t)},lastIndexOf(...t){return Ss(this,"lastIndexOf",t)},map(t,e){return ot(this,"map",t,e,void 0,arguments)},pop(){return An(this,"pop")},push(...t){return An(this,"push",t)},reduce(t,...e){return wo(this,"reduce",t,e)},reduceRight(t,...e){return wo(this,"reduceRight",t,e)},shift(){return An(this,"shift")},some(t,e){return ot(this,"some",t,e,void 0,arguments)},splice(...t){return An(this,"splice",t)},toReversed(){return an(this).toReversed()},toSorted(t){return an(this).toSorted(t)},toSpliced(...t){return an(this).toSpliced(...t)},unshift(...t){return An(this,"unshift",t)},values(){return Ts(this,"values",ye)}};function Ts(t,e,n){const r=Ai(t),s=r[e]();return r!==t&&!Fe(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const rh=Array.prototype;function ot(t,e,n,r,s,i){const o=Ai(t),a=o!==t&&!Fe(t),l=o[e];if(l!==rh[e]){const f=l.apply(t,i);return a?ye(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,ye(f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,r);return a&&s?s(u):u}function wo(t,e,n,r){const s=Ai(t);let i=n;return s!==t&&(Fe(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,ye(a),l,t)}),s[e](i,...r)}function Ss(t,e,n){const r=K(t);pe(r,"iterate",tr);const s=r[e](...n);return(s===-1||s===!1)&&Di(n[0])?(n[0]=K(n[0]),r[e](...n)):s}function An(t,e,n=[]){_t(),Si();const r=K(t)[e].apply(t,n);return Ri(),bt(),r}const sh=wi("__proto__,__v_isRef,__isVue"),dl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bt));function ih(t){Bt(t)||(t=String(t));const e=K(this);return pe(e,"has",t),e.hasOwnProperty(t)}class pl{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?gh:bl:i?_l:ml).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!s){let l;if(o&&(l=nh[n]))return l;if(n==="hasOwnProperty")return ih}const a=Reflect.get(e,n,me(e)?e:r);return(Bt(n)?dl.has(n):sh(n))||(s||pe(e,"get",n),i)?a:me(a)?o&&Ii(n)?a:a.value:oe(a)?s?yl(a):ls(a):a}}class gl extends pl{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Jt(i);if(!Fe(r)&&!Jt(r)&&(i=K(i),r=K(r)),!F(e)&&me(i)&&!me(r))return l?!1:(i.value=r,!0)}const o=F(e)&&Ii(n)?Number(n)<e.length:G(e,n),a=Reflect.set(e,n,r,me(e)?e:s);return e===K(s)&&(o?Lt(r,i)&&ut(e,"set",n,r):ut(e,"add",n,r)),a}deleteProperty(e,n){const r=G(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ut(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Bt(n)||!dl.has(n))&&pe(e,"has",n),r}ownKeys(e){return pe(e,"iterate",F(e)?"length":Wt),Reflect.ownKeys(e)}}class oh extends pl{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ah=new gl,lh=new oh,ch=new gl(!0);const Xs=t=>t,yr=t=>Reflect.getPrototypeOf(t);function uh(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=dn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Xs:e?Zs:ye;return!e&&pe(i,"iterate",l?Js:Wt),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function wr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function hh(t,e){const n={get(s){const i=this.__v_raw,o=K(i),a=K(s);t||(Lt(s,a)&&pe(o,"get",s),pe(o,"get",a));const{has:l}=yr(o),c=e?Xs:t?Zs:ye;if(l.call(o,s))return c(i.get(s));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pe(K(s),"iterate",Wt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=K(i),a=K(s);return t||(Lt(s,a)&&pe(o,"has",s),pe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=K(a),c=e?Xs:t?Zs:ye;return!t&&pe(l,"iterate",Wt),a.forEach((u,f)=>s.call(i,c(u),c(f),o))}};return _e(n,t?{add:wr("add"),set:wr("set"),delete:wr("delete"),clear:wr("clear")}:{add(s){!e&&!Fe(s)&&!Jt(s)&&(s=K(s));const i=K(this);return yr(i).has.call(i,s)||(i.add(s),ut(i,"add",s,s)),this},set(s,i){!e&&!Fe(i)&&!Jt(i)&&(i=K(i));const o=K(this),{has:a,get:l}=yr(o);let c=a.call(o,s);c||(s=K(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,i),c?Lt(i,u)&&ut(o,"set",s,i):ut(o,"add",s,i),this},delete(s){const i=K(this),{has:o,get:a}=yr(i);let l=o.call(i,s);l||(s=K(s),l=o.call(i,s)),a&&a.call(i,s);const c=i.delete(s);return l&&ut(i,"delete",s,void 0),c},clear(){const s=K(this),i=s.size!==0,o=s.clear();return i&&ut(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=uh(s,t,e)}),n}function Pi(t,e){const n=hh(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const fh={get:Pi(!1,!1)},dh={get:Pi(!1,!0)},ph={get:Pi(!0,!1)};const ml=new WeakMap,_l=new WeakMap,bl=new WeakMap,gh=new WeakMap;function mh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _h(t){return t.__v_skip||!Object.isExtensible(t)?0:mh(zu(t))}function ls(t){return Jt(t)?t:Oi(t,!1,ah,fh,ml)}function vl(t){return Oi(t,!1,ch,dh,_l)}function yl(t){return Oi(t,!0,lh,ph,bl)}function Oi(t,e,n,r,s){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=_h(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function jn(t){return Jt(t)?jn(t.__v_raw):!!(t&&t.__v_isReactive)}function Jt(t){return!!(t&&t.__v_isReadonly)}function Fe(t){return!!(t&&t.__v_isShallow)}function Di(t){return t?!!t.__v_raw:!1}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function bh(t){return!G(t,"__v_skip")&&Object.isExtensible(t)&&tl(t,"__v_skip",!0),t}const ye=t=>oe(t)?ls(t):t,Zs=t=>oe(t)?yl(t):t;function me(t){return t?t.__v_isRef===!0:!1}function Mr(t){return wl(t,!1)}function vh(t){return wl(t,!0)}function wl(t,e){return me(t)?t:new yh(t,e)}class yh{constructor(e,n){this.dep=new Ci,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:K(e),this._value=n?e:ye(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Fe(e)||Jt(e);e=r?e:K(e),Lt(e,n)&&(this._rawValue=e,this._value=r?e:ye(e),this.dep.trigger())}}function qt(t){return me(t)?t.value:t}const wh={get:(t,e,n)=>e==="__v_raw"?t:qt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function kl(t){return jn(t)?t:new Proxy(t,wh)}class kh{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ci(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=er-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return al(this,!0),!0}get value(){const e=this.dep.track();return ul(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Eh(t,e,n=!1){let r,s;return H(t)?r=t:(r=t.get,s=t.set),new kh(r,s,n)}const kr={},Ur=new WeakMap;let zt;function Ih(t,e=!1,n=zt){if(n){let r=Ur.get(n);r||Ur.set(n,r=[]),r.push(t)}}function Th(t,e,n=re){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,c=I=>s?I:Fe(I)||s===!1||s===0?ht(I,1):ht(I);let u,f,h,g,_=!1,k=!1;if(me(t)?(f=()=>t.value,_=Fe(t)):jn(t)?(f=()=>c(t),_=!0):F(t)?(k=!0,_=t.some(I=>jn(I)||Fe(I)),f=()=>t.map(I=>{if(me(I))return I.value;if(jn(I))return c(I);if(H(I))return l?l(I,2):I()})):H(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){_t();try{h()}finally{bt()}}const I=zt;zt=u;try{return l?l(t,3,[g]):t(g)}finally{zt=I}}:f=tt,e&&s){const I=f,j=s===!0?1/0:s;f=()=>ht(I(),j)}const O=Qu(),D=()=>{u.stop(),O&&O.active&&Ei(O.effects,u)};if(i&&e){const I=e;e=(...j)=>{I(...j),D()}}let R=k?new Array(t.length).fill(kr):kr;const C=I=>{if(!(!(u.flags&1)||!u.dirty&&!I))if(e){const j=u.run();if(s||_||(k?j.some((X,z)=>Lt(X,R[z])):Lt(j,R))){h&&h();const X=zt;zt=u;try{const z=[j,R===kr?void 0:k&&R[0]===kr?[]:R,g];l?l(e,3,z):e(...z),R=j}finally{zt=X}}}else u.run()};return a&&a(C),u=new il(f),u.scheduler=o?()=>o(C,!1):C,g=I=>Ih(I,!1,u),h=u.onStop=()=>{const I=Ur.get(u);if(I){if(l)l(I,4);else for(const j of I)j();Ur.delete(u)}},e?r?C(!0):R=u.run():o?o(C.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function ht(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,me(t))ht(t.value,e,n);else if(F(t))for(let r=0;r<t.length;r++)ht(t[r],e,n);else if(Za(t)||dn(t))t.forEach(r=>{ht(r,e,n)});else if(el(t)){for(const r in t)ht(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ht(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cr(t,e,n,r){try{return r?t(...r):t()}catch(s){cs(s,e,n)}}function st(t,e,n,r){if(H(t)){const s=cr(t,e,n,r);return s&&Ya(s)&&s.catch(i=>{cs(i,e,n)}),s}if(F(t)){const s=[];for(let i=0;i<t.length;i++)s.push(st(t[i],e,n,r));return s}}function cs(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||re;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(i){_t(),cr(i,null,10,[t,l,c]),bt();return}}Sh(t,n,s,r,o)}function Sh(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const we=[];let Ze=-1;const pn=[];let xt=null,ln=0;const El=Promise.resolve();let $r=null;function Ni(t){const e=$r||El;return t?e.then(this?t.bind(this):t):e}function Rh(t){let e=Ze+1,n=we.length;for(;e<n;){const r=e+n>>>1,s=we[r],i=nr(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Li(t){if(!(t.flags&1)){const e=nr(t),n=we[we.length-1];!n||!(t.flags&2)&&e>=nr(n)?we.push(t):we.splice(Rh(e),0,t),t.flags|=1,Il()}}function Il(){$r||($r=El.then(Sl))}function xh(t){F(t)?pn.push(...t):xt&&t.id===-1?xt.splice(ln+1,0,t):t.flags&1||(pn.push(t),t.flags|=1),Il()}function ko(t,e,n=Ze+1){for(;n<we.length;n++){const r=we[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;we.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Tl(t){if(pn.length){const e=[...new Set(pn)].sort((n,r)=>nr(n)-nr(r));if(pn.length=0,xt){xt.push(...e);return}for(xt=e,ln=0;ln<xt.length;ln++){const n=xt[ln];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xt=null,ln=0}}const nr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sl(t){try{for(Ze=0;Ze<we.length;Ze++){const e=we[Ze];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),cr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ze<we.length;Ze++){const e=we[Ze];e&&(e.flags&=-2)}Ze=-1,we.length=0,Tl(),$r=null,(we.length||pn.length)&&Sl()}}let Ae=null,Rl=null;function Br(t){const e=Ae;return Ae=t,Rl=t&&t.type.__scopeId||null,e}function xl(t,e=Ae,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Oo(-1);const i=Br(e);let o;try{o=t(...s)}finally{Br(i),r._d&&Oo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ch(t,e){if(Ae===null)return t;const n=ds(Ae),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=re]=e[s];i&&(H(i)&&(i={mounted:i,updated:i}),i.deep&&ht(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ht(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(_t(),st(l,n,8,[t.el,a,t,e]),bt())}}const Ah=Symbol("_vte"),Ph=t=>t.__isTeleport;function Mi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Mi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function tn(t,e){return H(t)?_e({name:t.name},e,{setup:t}):t}function Cl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Fr(t,e,n,r,s=!1){if(F(t)){t.forEach((_,k)=>Fr(_,e&&(F(e)?e[k]:e),n,r,s));return}if(zn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Fr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ds(r.component):r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===re?a.refs={}:a.refs,f=a.setupState,h=K(f),g=f===re?()=>!1:_=>G(h,_);if(c!=null&&c!==l&&(ce(c)?(u[c]=null,g(c)&&(f[c]=null)):me(c)&&(c.value=null)),H(l))cr(l,a,12,[o,u]);else{const _=ce(l),k=me(l);if(_||k){const O=()=>{if(t.f){const D=_?g(l)?f[l]:u[l]:l.value;s?F(D)&&Ei(D,i):F(D)?D.includes(i)||D.push(i):_?(u[l]=[i],g(l)&&(f[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else _?(u[l]=o,g(l)&&(f[l]=o)):k&&(l.value=o,t.k&&(u[t.k]=o))};o?(O.id=-1,Ce(O,n)):O()}}}os().requestIdleCallback;os().cancelIdleCallback;const zn=t=>!!t.type.__asyncLoader,Al=t=>t.type.__isKeepAlive;function Oh(t,e){Pl(t,"a",e)}function Dh(t,e){Pl(t,"da",e)}function Pl(t,e,n=ge){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(us(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Al(s.parent.vnode)&&Nh(r,e,n,s),s=s.parent}}function Nh(t,e,n,r){const s=us(e,t,r,!0);Hr(()=>{Ei(r[e],s)},n)}function us(t,e,n=ge,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{_t();const a=hr(n),l=st(e,n,t,o);return a(),bt(),l});return r?s.unshift(i):s.push(i),i}}const kt=t=>(e,n=ge)=>{(!sr||t==="sp")&&us(t,(...r)=>e(...r),n)},Lh=kt("bm"),Vn=kt("m"),Mh=kt("bu"),Uh=kt("u"),$h=kt("bum"),Hr=kt("um"),Bh=kt("sp"),Fh=kt("rtg"),Hh=kt("rtc");function jh(t,e=ge){us("ec",t,e)}const zh="components";function Vh(t,e){return qh(zh,t,!0,e)||t}const Wh=Symbol.for("v-ndc");function qh(t,e,n=!0,r=!1){const s=Ae||ge;if(s){const i=s.type;{const a=Nf(i,!1);if(a&&(a===e||a===Me(e)||a===is(Me(e))))return i}const o=Eo(s[t]||i[t],e)||Eo(s.appContext[t],e);return!o&&r?i:o}}function Eo(t,e){return t&&(t[e]||t[Me(e)]||t[is(Me(e))])}const Ys=t=>t?Yl(t)?ds(t):Ys(t.parent):null,Wn=_e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ys(t.parent),$root:t=>Ys(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Dl(t),$forceUpdate:t=>t.f||(t.f=()=>{Li(t.update)}),$nextTick:t=>t.n||(t.n=Ni.bind(t.proxy)),$watch:t=>pf.bind(t)}),Rs=(t,e)=>t!==re&&!t.__isScriptSetup&&G(t,e),Kh={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Rs(r,e))return o[e]=1,r[e];if(s!==re&&G(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&G(c,e))return o[e]=3,i[e];if(n!==re&&G(n,e))return o[e]=4,n[e];Qs&&(o[e]=0)}}const u=Wn[e];let f,h;if(u)return e==="$attrs"&&pe(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==re&&G(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,G(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Rs(s,e)?(s[e]=n,!0):r!==re&&G(r,e)?(r[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==re&&G(t,o)||Rs(e,o)||(a=i[0])&&G(a,o)||G(r,o)||G(Wn,o)||G(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Io(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qs=!0;function Gh(t){const e=Dl(t),n=t.proxy,r=t.ctx;Qs=!1,e.beforeCreate&&To(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:_,activated:k,deactivated:O,beforeDestroy:D,beforeUnmount:R,destroyed:C,unmounted:I,render:j,renderTracked:X,renderTriggered:z,errorCaptured:fe,serverPrefetch:De,expose:Ne,inheritAttrs:It,components:Ft,directives:Ve,filters:xn}=e;if(c&&Jh(c,r,null),o)for(const Q in o){const W=o[Q];H(W)&&(r[Q]=W.bind(n))}if(s){const Q=s.call(n,n);oe(Q)&&(t.data=ls(Q))}if(Qs=!0,i)for(const Q in i){const W=i[Q],it=H(W)?W.bind(n,n):H(W.get)?W.get.bind(n,n):tt,Tt=!H(W)&&H(W.set)?W.set.bind(n):tt,We=Ue({get:it,set:Tt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>We.value,set:Ie=>We.value=Ie})}if(a)for(const Q in a)Ol(a[Q],r,n,Q);if(l){const Q=H(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(W=>{xr(W,Q[W])})}u&&To(u,t,"c");function ue(Q,W){F(W)?W.forEach(it=>Q(it.bind(n))):W&&Q(W.bind(n))}if(ue(Lh,f),ue(Vn,h),ue(Mh,g),ue(Uh,_),ue(Oh,k),ue(Dh,O),ue(jh,fe),ue(Hh,X),ue(Fh,z),ue($h,R),ue(Hr,I),ue(Bh,De),F(Ne))if(Ne.length){const Q=t.exposed||(t.exposed={});Ne.forEach(W=>{Object.defineProperty(Q,W,{get:()=>n[W],set:it=>n[W]=it})})}else t.exposed||(t.exposed={});j&&t.render===tt&&(t.render=j),It!=null&&(t.inheritAttrs=It),Ft&&(t.components=Ft),Ve&&(t.directives=Ve),De&&Cl(t)}function Jh(t,e,n=tt){F(t)&&(t=ei(t));for(const r in t){const s=t[r];let i;oe(s)?"default"in s?i=He(s.from||r,s.default,!0):i=He(s.from||r):i=He(s),me(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function To(t,e,n){st(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ol(t,e,n,r){let s=r.includes(".")?ql(n,r):()=>n[r];if(ce(t)){const i=e[t];H(i)&&qn(s,i)}else if(H(t))qn(s,t.bind(n));else if(oe(t))if(F(t))t.forEach(i=>Ol(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&qn(s,i,t)}}function Dl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>jr(l,c,o,!0)),jr(l,e,o)),oe(e)&&i.set(e,l),l}function jr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&jr(t,i,n,!0),s&&s.forEach(o=>jr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Xh[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Xh={data:So,props:Ro,emits:Ro,methods:$n,computed:$n,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:$n,directives:$n,watch:Yh,provide:So,inject:Zh};function So(t,e){return e?t?function(){return _e(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Zh(t,e){return $n(ei(t),ei(e))}function ei(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function $n(t,e){return t?_e(Object.create(null),t,e):e}function Ro(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:_e(Object.create(null),Io(t),Io(e??{})):e}function Yh(t,e){if(!t)return e;if(!e)return t;const n=_e(Object.create(null),t);for(const r in e)n[r]=ve(t[r],e[r]);return n}function Nl(){return{app:null,config:{isNativeTag:Hu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qh=0;function ef(t,e){return function(r,s=null){H(r)||(r=_e({},r)),s!=null&&!oe(s)&&(s=null);const i=Nl(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:Qh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Mf,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(c,...f)):H(u)&&(o.add(u),u(c,...f))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,f){return f?(i.components[u]=f,c):i.components[u]},directive(u,f){return f?(i.directives[u]=f,c):i.directives[u]},mount(u,f,h){if(!l){const g=c._ceVNode||he(r,s);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),t(g,u,h),l=!0,c._container=u,u.__vue_app__=c,ds(g.component)}},onUnmount(u){a.push(u)},unmount(){l&&(st(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return i.provides[u]=f,c},runWithContext(u){const f=gn;gn=c;try{return u()}finally{gn=f}}};return c}}let gn=null;function xr(t,e){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[t]=e}}function He(t,e,n=!1){const r=ge||Ae;if(r||gn){const s=gn?gn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}const Ll={},Ml=()=>Object.create(Ll),Ul=t=>Object.getPrototypeOf(t)===Ll;function tf(t,e,n,r=!1){const s={},i=Ml();t.propsDefaults=Object.create(null),$l(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:vl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(hs(t.emitsOptions,h))continue;const g=e[h];if(l)if(G(i,h))g!==i[h]&&(i[h]=g,c=!0);else{const _=Me(h);s[_]=ti(l,a,_,g,t,!1)}else g!==i[h]&&(i[h]=g,c=!0)}}}else{$l(t,e,s,i)&&(c=!0);let u;for(const f in a)(!e||!G(e,f)&&((u=en(f))===f||!G(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ti(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!G(e,f))&&(delete i[f],c=!0)}c&&ut(t.attrs,"set","")}function $l(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Bn(l))continue;const c=e[l];let u;s&&G(s,u=Me(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:hs(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=K(n),c=a||re;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ti(s,l,f,c[f],t,!G(c,f))}}return o}function ti(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=G(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&H(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=hr(s);r=c[n]=l.call(null,e),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}const rf=new WeakMap;function Bl(t,e,n=!1){const r=n?rf:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!H(t)){const u=f=>{l=!0;const[h,g]=Bl(f,e,!0);_e(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return oe(t)&&r.set(t,fn),fn;if(F(i))for(let u=0;u<i.length;u++){const f=Me(i[u]);xo(f)&&(o[f]=re)}else if(i)for(const u in i){const f=Me(u);if(xo(f)){const h=i[u],g=o[f]=F(h)||H(h)?{type:h}:_e({},h),_=g.type;let k=!1,O=!0;if(F(_))for(let D=0;D<_.length;++D){const R=_[D],C=H(R)&&R.name;if(C==="Boolean"){k=!0;break}else C==="String"&&(O=!1)}else k=H(_)&&_.name==="Boolean";g[0]=k,g[1]=O,(k||G(g,"default"))&&a.push(f)}}const c=[o,a];return oe(t)&&r.set(t,c),c}function xo(t){return t[0]!=="$"&&!Bn(t)}const Ui=t=>t[0]==="_"||t==="$stable",$i=t=>F(t)?t.map(Ye):[Ye(t)],sf=(t,e,n)=>{if(e._n)return e;const r=xl((...s)=>$i(e(...s)),n);return r._c=!1,r},Fl=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ui(s))continue;const i=t[s];if(H(i))e[s]=sf(s,i,r);else if(i!=null){const o=$i(i);e[s]=()=>o}}},Hl=(t,e)=>{const n=$i(e);t.slots.default=()=>n},jl=(t,e,n)=>{for(const r in e)(n||!Ui(r))&&(t[r]=e[r])},of=(t,e,n)=>{const r=t.slots=Ml();if(t.vnode.shapeFlag&32){const s=e._;s?(jl(r,e,n),n&&tl(r,"_",s,!0)):Fl(e,r)}else e&&Hl(t,e)},af=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:jl(s,e,n):(i=!e.$stable,Fl(e,s)),o=e}else e&&(Hl(t,e),o={default:1});if(i)for(const a in s)!Ui(a)&&o[a]==null&&delete s[a]},Ce=wf;function lf(t){return cf(t)}function cf(t,e){const n=os();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=tt,insertStaticContent:_}=t,k=(d,p,m,b=null,w=null,y=null,x=void 0,S=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Pn(d,p)&&(b=v(d),Ie(d,w,y,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:E,ref:U,shapeFlag:P}=p;switch(E){case fs:O(d,p,m,b);break;case vn:D(d,p,m,b);break;case Cs:d==null&&R(p,m,b,x);break;case ct:Ft(d,p,m,b,w,y,x,S,T);break;default:P&1?j(d,p,m,b,w,y,x,S,T):P&6?Ve(d,p,m,b,w,y,x,S,T):(P&64||P&128)&&E.process(d,p,m,b,w,y,x,S,T,L)}U!=null&&w&&Fr(U,d&&d.ref,y,p||d,!p)},O=(d,p,m,b)=>{if(d==null)r(p.el=a(p.children),m,b);else{const w=p.el=d.el;p.children!==d.children&&c(w,p.children)}},D=(d,p,m,b)=>{d==null?r(p.el=l(p.children||""),m,b):p.el=d.el},R=(d,p,m,b)=>{[d.el,d.anchor]=_(d.children,p,m,b,d.el,d.anchor)},C=({el:d,anchor:p},m,b)=>{let w;for(;d&&d!==p;)w=h(d),r(d,m,b),d=w;r(p,m,b)},I=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),s(d),d=m;s(p)},j=(d,p,m,b,w,y,x,S,T)=>{p.type==="svg"?x="svg":p.type==="math"&&(x="mathml"),d==null?X(p,m,b,w,y,x,S,T):De(d,p,w,y,x,S,T)},X=(d,p,m,b,w,y,x,S)=>{let T,E;const{props:U,shapeFlag:P,transition:M,dirs:B}=d;if(T=d.el=o(d.type,y,U&&U.is,U),P&8?u(T,d.children):P&16&&fe(d.children,T,null,b,w,xs(d,y),x,S),B&&Ht(d,null,b,"created"),z(T,d,d.scopeId,x,b),U){for(const se in U)se!=="value"&&!Bn(se)&&i(T,se,null,U[se],y,b);"value"in U&&i(T,"value",null,U.value,y),(E=U.onVnodeBeforeMount)&&Je(E,b,d)}B&&Ht(d,null,b,"beforeMount");const V=uf(w,M);V&&M.beforeEnter(T),r(T,p,m),((E=U&&U.onVnodeMounted)||V||B)&&Ce(()=>{E&&Je(E,b,d),V&&M.enter(T),B&&Ht(d,null,b,"mounted")},w)},z=(d,p,m,b,w)=>{if(m&&g(d,m),b)for(let y=0;y<b.length;y++)g(d,b[y]);if(w){let y=w.subTree;if(p===y||Gl(y.type)&&(y.ssContent===p||y.ssFallback===p)){const x=w.vnode;z(d,x,x.scopeId,x.slotScopeIds,w.parent)}}},fe=(d,p,m,b,w,y,x,S,T=0)=>{for(let E=T;E<d.length;E++){const U=d[E]=S?Ct(d[E]):Ye(d[E]);k(null,U,p,m,b,w,y,x,S)}},De=(d,p,m,b,w,y,x)=>{const S=p.el=d.el;let{patchFlag:T,dynamicChildren:E,dirs:U}=p;T|=d.patchFlag&16;const P=d.props||re,M=p.props||re;let B;if(m&&jt(m,!1),(B=M.onVnodeBeforeUpdate)&&Je(B,m,p,d),U&&Ht(p,d,m,"beforeUpdate"),m&&jt(m,!0),(P.innerHTML&&M.innerHTML==null||P.textContent&&M.textContent==null)&&u(S,""),E?Ne(d.dynamicChildren,E,S,m,b,xs(p,w),y):x||W(d,p,S,null,m,b,xs(p,w),y,!1),T>0){if(T&16)It(S,P,M,m,w);else if(T&2&&P.class!==M.class&&i(S,"class",null,M.class,w),T&4&&i(S,"style",P.style,M.style,w),T&8){const V=p.dynamicProps;for(let se=0;se<V.length;se++){const Z=V[se],Re=P[Z],Te=M[Z];(Te!==Re||Z==="value")&&i(S,Z,Re,Te,w,m)}}T&1&&d.children!==p.children&&u(S,p.children)}else!x&&E==null&&It(S,P,M,m,w);((B=M.onVnodeUpdated)||U)&&Ce(()=>{B&&Je(B,m,p,d),U&&Ht(p,d,m,"updated")},b)},Ne=(d,p,m,b,w,y,x)=>{for(let S=0;S<p.length;S++){const T=d[S],E=p[S],U=T.el&&(T.type===ct||!Pn(T,E)||T.shapeFlag&70)?f(T.el):m;k(T,E,U,null,b,w,y,x,!0)}},It=(d,p,m,b,w)=>{if(p!==m){if(p!==re)for(const y in p)!Bn(y)&&!(y in m)&&i(d,y,p[y],null,w,b);for(const y in m){if(Bn(y))continue;const x=m[y],S=p[y];x!==S&&y!=="value"&&i(d,y,S,x,w,b)}"value"in m&&i(d,"value",p.value,m.value,w)}},Ft=(d,p,m,b,w,y,x,S,T)=>{const E=p.el=d?d.el:a(""),U=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:M,slotScopeIds:B}=p;B&&(S=S?S.concat(B):B),d==null?(r(E,m,b),r(U,m,b),fe(p.children||[],m,U,w,y,x,S,T)):P>0&&P&64&&M&&d.dynamicChildren?(Ne(d.dynamicChildren,M,m,w,y,x,S),(p.key!=null||w&&p===w.subTree)&&zl(d,p,!0)):W(d,p,m,U,w,y,x,S,T)},Ve=(d,p,m,b,w,y,x,S,T)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?w.ctx.activate(p,m,b,x,T):xn(p,m,b,w,y,x,T):rn(d,p,T)},xn=(d,p,m,b,w,y,x)=>{const S=d.component=Cf(d,b,w);if(Al(d)&&(S.ctx.renderer=L),Af(S,!1,x),S.asyncDep){if(w&&w.registerDep(S,ue,x),!d.el){const T=S.subTree=he(vn);D(null,T,p,m)}}else ue(S,d,p,m,w,y,x)},rn=(d,p,m)=>{const b=p.component=d.component;if(vf(d,p,m))if(b.asyncDep&&!b.asyncResolved){Q(b,p,m);return}else b.next=p,b.update();else p.el=d.el,b.vnode=p},ue=(d,p,m,b,w,y,x)=>{const S=()=>{if(d.isMounted){let{next:P,bu:M,u:B,parent:V,vnode:se}=d;{const Ke=Vl(d);if(Ke){P&&(P.el=se.el,Q(d,P,x)),Ke.asyncDep.then(()=>{d.isUnmounted||S()});return}}let Z=P,Re;jt(d,!1),P?(P.el=se.el,Q(d,P,x)):P=se,M&&Rr(M),(Re=P.props&&P.props.onVnodeBeforeUpdate)&&Je(Re,V,P,se),jt(d,!0);const Te=Ao(d),qe=d.subTree;d.subTree=Te,k(qe,Te,f(qe.el),v(qe),d,w,y),P.el=Te.el,Z===null&&yf(d,Te.el),B&&Ce(B,w),(Re=P.props&&P.props.onVnodeUpdated)&&Ce(()=>Je(Re,V,P,se),w)}else{let P;const{el:M,props:B}=p,{bm:V,m:se,parent:Z,root:Re,type:Te}=d,qe=zn(p);jt(d,!1),V&&Rr(V),!qe&&(P=B&&B.onVnodeBeforeMount)&&Je(P,Z,p),jt(d,!0);{Re.ce&&Re.ce._injectChildStyle(Te);const Ke=d.subTree=Ao(d);k(null,Ke,m,b,d,w,y),p.el=Ke.el}if(se&&Ce(se,w),!qe&&(P=B&&B.onVnodeMounted)){const Ke=p;Ce(()=>Je(P,Z,Ke),w)}(p.shapeFlag&256||Z&&zn(Z.vnode)&&Z.vnode.shapeFlag&256)&&d.a&&Ce(d.a,w),d.isMounted=!0,p=m=b=null}};d.scope.on();const T=d.effect=new il(S);d.scope.off();const E=d.update=T.run.bind(T),U=d.job=T.runIfDirty.bind(T);U.i=d,U.id=d.uid,T.scheduler=()=>Li(U),jt(d,!0),E()},Q=(d,p,m)=>{p.component=d;const b=d.vnode.props;d.vnode=p,d.next=null,nf(d,p.props,b,m),af(d,p.children,m),_t(),ko(d),bt()},W=(d,p,m,b,w,y,x,S,T=!1)=>{const E=d&&d.children,U=d?d.shapeFlag:0,P=p.children,{patchFlag:M,shapeFlag:B}=p;if(M>0){if(M&128){Tt(E,P,m,b,w,y,x,S,T);return}else if(M&256){it(E,P,m,b,w,y,x,S,T);return}}B&8?(U&16&&Le(E,w,y),P!==E&&u(m,P)):U&16?B&16?Tt(E,P,m,b,w,y,x,S,T):Le(E,w,y,!0):(U&8&&u(m,""),B&16&&fe(P,m,b,w,y,x,S,T))},it=(d,p,m,b,w,y,x,S,T)=>{d=d||fn,p=p||fn;const E=d.length,U=p.length,P=Math.min(E,U);let M;for(M=0;M<P;M++){const B=p[M]=T?Ct(p[M]):Ye(p[M]);k(d[M],B,m,null,w,y,x,S,T)}E>U?Le(d,w,y,!0,!1,P):fe(p,m,b,w,y,x,S,T,P)},Tt=(d,p,m,b,w,y,x,S,T)=>{let E=0;const U=p.length;let P=d.length-1,M=U-1;for(;E<=P&&E<=M;){const B=d[E],V=p[E]=T?Ct(p[E]):Ye(p[E]);if(Pn(B,V))k(B,V,m,null,w,y,x,S,T);else break;E++}for(;E<=P&&E<=M;){const B=d[P],V=p[M]=T?Ct(p[M]):Ye(p[M]);if(Pn(B,V))k(B,V,m,null,w,y,x,S,T);else break;P--,M--}if(E>P){if(E<=M){const B=M+1,V=B<U?p[B].el:b;for(;E<=M;)k(null,p[E]=T?Ct(p[E]):Ye(p[E]),m,V,w,y,x,S,T),E++}}else if(E>M)for(;E<=P;)Ie(d[E],w,y,!0),E++;else{const B=E,V=E,se=new Map;for(E=V;E<=M;E++){const xe=p[E]=T?Ct(p[E]):Ye(p[E]);xe.key!=null&&se.set(xe.key,E)}let Z,Re=0;const Te=M-V+1;let qe=!1,Ke=0;const Cn=new Array(Te);for(E=0;E<Te;E++)Cn[E]=0;for(E=B;E<=P;E++){const xe=d[E];if(Re>=Te){Ie(xe,w,y,!0);continue}let Ge;if(xe.key!=null)Ge=se.get(xe.key);else for(Z=V;Z<=M;Z++)if(Cn[Z-V]===0&&Pn(xe,p[Z])){Ge=Z;break}Ge===void 0?Ie(xe,w,y,!0):(Cn[Ge-V]=E+1,Ge>=Ke?Ke=Ge:qe=!0,k(xe,p[Ge],m,null,w,y,x,S,T),Re++)}const _o=qe?hf(Cn):fn;for(Z=_o.length-1,E=Te-1;E>=0;E--){const xe=V+E,Ge=p[xe],bo=xe+1<U?p[xe+1].el:b;Cn[E]===0?k(null,Ge,m,bo,w,y,x,S,T):qe&&(Z<0||E!==_o[Z]?We(Ge,m,bo,2):Z--)}}},We=(d,p,m,b,w=null)=>{const{el:y,type:x,transition:S,children:T,shapeFlag:E}=d;if(E&6){We(d.component.subTree,p,m,b);return}if(E&128){d.suspense.move(p,m,b);return}if(E&64){x.move(d,p,m,L);return}if(x===ct){r(y,p,m);for(let P=0;P<T.length;P++)We(T[P],p,m,b);r(d.anchor,p,m);return}if(x===Cs){C(d,p,m);return}if(b!==2&&E&1&&S)if(b===0)S.beforeEnter(y),r(y,p,m),Ce(()=>S.enter(y),w);else{const{leave:P,delayLeave:M,afterLeave:B}=S,V=()=>{d.ctx.isUnmounted?s(y):r(y,p,m)},se=()=>{P(y,()=>{V(),B&&B()})};M?M(y,V,se):se()}else r(y,p,m)},Ie=(d,p,m,b=!1,w=!1)=>{const{type:y,props:x,ref:S,children:T,dynamicChildren:E,shapeFlag:U,patchFlag:P,dirs:M,cacheIndex:B}=d;if(P===-2&&(w=!1),S!=null&&(_t(),Fr(S,null,m,d,!0),bt()),B!=null&&(p.renderCache[B]=void 0),U&256){p.ctx.deactivate(d);return}const V=U&1&&M,se=!zn(d);let Z;if(se&&(Z=x&&x.onVnodeBeforeUnmount)&&Je(Z,p,d),U&6)vr(d.component,m,b);else{if(U&128){d.suspense.unmount(m,b);return}V&&Ht(d,null,p,"beforeUnmount"),U&64?d.type.remove(d,p,m,L,b):E&&!E.hasOnce&&(y!==ct||P>0&&P&64)?Le(E,p,m,!1,!0):(y===ct&&P&384||!w&&U&16)&&Le(T,p,m),b&&sn(d)}(se&&(Z=x&&x.onVnodeUnmounted)||V)&&Ce(()=>{Z&&Je(Z,p,d),V&&Ht(d,null,p,"unmounted")},m)},sn=d=>{const{type:p,el:m,anchor:b,transition:w}=d;if(p===ct){on(m,b);return}if(p===Cs){I(d);return}const y=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:x,delayLeave:S}=w,T=()=>x(m,y);S?S(d.el,y,T):T()}else y()},on=(d,p)=>{let m;for(;d!==p;)m=h(d),s(d),d=m;s(p)},vr=(d,p,m)=>{const{bum:b,scope:w,job:y,subTree:x,um:S,m:T,a:E,parent:U,slots:{__:P}}=d;Co(T),Co(E),b&&Rr(b),U&&F(P)&&P.forEach(M=>{U.renderCache[M]=void 0}),w.stop(),y&&(y.flags|=8,Ie(x,d,p,m)),S&&Ce(S,p),Ce(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Le=(d,p,m,b=!1,w=!1,y=0)=>{for(let x=y;x<d.length;x++)Ie(d[x],p,m,b,w)},v=d=>{if(d.shapeFlag&6)return v(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),m=p&&p[Ah];return m?h(m):p};let N=!1;const A=(d,p,m)=>{d==null?p._vnode&&Ie(p._vnode,null,null,!0):k(p._vnode||null,d,p,null,null,null,m),p._vnode=d,N||(N=!0,ko(),Tl(),N=!1)},L={p:k,um:Ie,m:We,r:sn,mt:xn,mc:fe,pc:W,pbc:Ne,n:v,o:t};return{render:A,hydrate:void 0,createApp:ef(A)}}function xs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function jt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function uf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function zl(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ct(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&zl(o,a)),a.type===fs&&(a.el=o.el),a.type===vn&&!a.el&&(a.el=o.el)}}function hf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Vl(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vl(e)}function Co(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ff=Symbol.for("v-scx"),df=()=>He(ff);function qn(t,e,n){return Wl(t,e,n)}function Wl(t,e,n=re){const{immediate:r,deep:s,flush:i,once:o}=n,a=_e({},n),l=e&&r||!e&&i!=="post";let c;if(sr){if(i==="sync"){const g=df();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=tt,g.resume=tt,g.pause=tt,g}}const u=ge;a.call=(g,_,k)=>st(g,u,_,k);let f=!1;i==="post"?a.scheduler=g=>{Ce(g,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,_)=>{_?g():Li(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const h=Th(t,e,a);return sr&&(c?c.push(h):l&&h()),h}function pf(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?ql(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=hr(this),a=Wl(s,i.bind(r),n);return o(),a}function ql(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const gf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Me(e)}Modifiers`]||t[`${en(e)}Modifiers`];function mf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||re;let s=n;const i=e.startsWith("update:"),o=i&&gf(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>ce(u)?u.trim():u)),o.number&&(s=n.map(qs)));let a,l=r[a=ks(e)]||r[a=ks(Me(e))];!l&&i&&(l=r[a=ks(en(e))]),l&&st(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,st(c,t,6,s)}}function Kl(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const l=c=>{const u=Kl(c,e,!0);u&&(a=!0,_e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(oe(t)&&r.set(t,null),null):(F(i)?i.forEach(l=>o[l]=null):_e(o,i),oe(t)&&r.set(t,o),o)}function hs(t,e){return!t||!ns(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,en(e))||G(t,e))}function Ao(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:g,ctx:_,inheritAttrs:k}=t,O=Br(t);let D,R;try{if(n.shapeFlag&4){const I=s||r,j=I;D=Ye(c.call(j,I,u,f,g,h,_)),R=a}else{const I=e;D=Ye(I.length>1?I(f,{attrs:a,slots:o,emit:l}):I(f,null)),R=e.props?a:_f(a)}}catch(I){Kn.length=0,cs(I,t,1),D=he(vn)}let C=D;if(R&&k!==!1){const I=Object.keys(R),{shapeFlag:j}=C;I.length&&j&7&&(i&&I.some(ki)&&(R=bf(R,i)),C=yn(C,R,!1,!0))}return n.dirs&&(C=yn(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&Mi(C,n.transition),D=C,Br(O),D}const _f=t=>{let e;for(const n in t)(n==="class"||n==="style"||ns(n))&&((e||(e={}))[n]=t[n]);return e},bf=(t,e)=>{const n={};for(const r in t)(!ki(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function vf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Po(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!hs(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Po(r,o,c):!0:!!o;return!1}function Po(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!hs(n,i))return!0}return!1}function yf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Gl=t=>t.__isSuspense;function wf(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):xh(t)}const ct=Symbol.for("v-fgt"),fs=Symbol.for("v-txt"),vn=Symbol.for("v-cmt"),Cs=Symbol.for("v-stc"),Kn=[];let Pe=null;function ur(t=!1){Kn.push(Pe=t?null:[])}function kf(){Kn.pop(),Pe=Kn[Kn.length-1]||null}let rr=1;function Oo(t,e=!1){rr+=t,t<0&&Pe&&e&&(Pe.hasOnce=!0)}function Jl(t){return t.dynamicChildren=rr>0?Pe||fn:null,kf(),rr>0&&Pe&&Pe.push(t),t}function Bi(t,e,n,r,s,i){return Jl(de(t,e,n,r,s,i,!0))}function Xl(t,e,n,r,s){return Jl(he(t,e,n,r,s,!0))}function zr(t){return t?t.__v_isVNode===!0:!1}function Pn(t,e){return t.type===e.type&&t.key===e.key}const Zl=({key:t})=>t??null,Cr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ce(t)||me(t)||H(t)?{i:Ae,r:t,k:e,f:!!n}:t:null);function de(t,e=null,n=null,r=0,s=null,i=t===ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zl(e),ref:e&&Cr(e),scopeId:Rl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ae};return a?(Fi(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ce(n)?8:16),rr>0&&!o&&Pe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pe.push(l),l}const he=Ef;function Ef(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Wh)&&(t=vn),zr(t)){const a=yn(t,e,!0);return n&&Fi(a,n),rr>0&&!i&&Pe&&(a.shapeFlag&6?Pe[Pe.indexOf(t)]=a:Pe.push(a)),a.patchFlag=-2,a}if(Lf(t)&&(t=t.__vccOpts),e){e=If(e);let{class:a,style:l}=e;a&&!ce(a)&&(e.class=as(a)),oe(l)&&(Di(l)&&!F(l)&&(l=_e({},l)),e.style=Ti(l))}const o=ce(t)?1:Gl(t)?128:Ph(t)?64:oe(t)?4:H(t)?2:0;return de(t,e,n,r,s,o,i,!0)}function If(t){return t?Di(t)||Ul(t)?_e({},t):t:null}function yn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?Sf(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Zl(c),ref:e&&e.ref?n&&i?F(i)?i.concat(Cr(e)):[i,Cr(e)]:Cr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ct?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Mi(u,l.clone(u)),u}function Tf(t=" ",e=0){return he(fs,null,t,e)}function Ye(t){return t==null||typeof t=="boolean"?he(vn):F(t)?he(ct,null,t.slice()):zr(t)?Ct(t):he(fs,null,String(t))}function Ct(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yn(t)}function Fi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ul(e)?e._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),r&64?(n=16,e=[Tf(e)]):n=8);t.children=e,t.shapeFlag|=n}function Sf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=as([e.class,r.class]));else if(s==="style")e.style=Ti([e.style,r.style]);else if(ns(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Je(t,e,n,r=null){st(t,e,7,[n,r])}const Rf=Nl();let xf=0;function Cf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Rf,i={uid:xf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bl(r,s),emitsOptions:Kl(r,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=mf.bind(null,i),t.ce&&t.ce(i),i}let ge=null,Vr,ni;{const t=os(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Vr=e("__VUE_INSTANCE_SETTERS__",n=>ge=n),ni=e("__VUE_SSR_SETTERS__",n=>sr=n)}const hr=t=>{const e=ge;return Vr(t),t.scope.on(),()=>{t.scope.off(),Vr(e)}},Do=()=>{ge&&ge.scope.off(),Vr(null)};function Yl(t){return t.vnode.shapeFlag&4}let sr=!1;function Af(t,e=!1,n=!1){e&&ni(e);const{props:r,children:s}=t.vnode,i=Yl(t);tf(t,r,i,e),of(t,s,n||e);const o=i?Pf(t,e):void 0;return e&&ni(!1),o}function Pf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Kh);const{setup:r}=n;if(r){_t();const s=t.setupContext=r.length>1?Df(t):null,i=hr(t),o=cr(r,t,0,[t.props,s]),a=Ya(o);if(bt(),i(),(a||t.sp)&&!zn(t)&&Cl(t),a){if(o.then(Do,Do),e)return o.then(l=>{No(t,l)}).catch(l=>{cs(l,t,0)});t.asyncDep=o}else No(t,o)}else Ql(t)}function No(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=kl(e)),Ql(t)}function Ql(t,e,n){const r=t.type;t.render||(t.render=r.render||tt);{const s=hr(t);_t();try{Gh(t)}finally{bt(),s()}}}const Of={get(t,e){return pe(t,"get",""),t[e]}};function Df(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Of),slots:t.slots,emit:t.emit,expose:e}}function ds(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(kl(bh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wn)return Wn[n](t)},has(e,n){return n in e||n in Wn}})):t.proxy}function Nf(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Lf(t){return H(t)&&"__vccOpts"in t}const Ue=(t,e)=>Eh(t,e,sr);function ec(t,e,n){const r=arguments.length;return r===2?oe(e)&&!F(e)?zr(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&zr(n)&&(n=[n]),he(t,e,n))}const Mf="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ri;const Lo=typeof window<"u"&&window.trustedTypes;if(Lo)try{ri=Lo.createPolicy("vue",{createHTML:t=>t})}catch{}const tc=ri?t=>ri.createHTML(t):t=>t,Uf="http://www.w3.org/2000/svg",$f="http://www.w3.org/1998/Math/MathML",lt=typeof document<"u"?document:null,Mo=lt&&lt.createElement("template"),Bf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?lt.createElementNS(Uf,t):e==="mathml"?lt.createElementNS($f,t):n?lt.createElement(t,{is:n}):lt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>lt.createTextNode(t),createComment:t=>lt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>lt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Mo.innerHTML=tc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Mo.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ff=Symbol("_vtc");function Hf(t,e,n){const r=t[Ff];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Uo=Symbol("_vod"),jf=Symbol("_vsh"),zf=Symbol(""),Vf=/(^|;)\s*display\s*:/;function Wf(t,e,n){const r=t.style,s=ce(n);let i=!1;if(n&&!s){if(e)if(ce(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ar(r,a,"")}else for(const o in e)n[o]==null&&Ar(r,o,"");for(const o in n)o==="display"&&(i=!0),Ar(r,o,n[o])}else if(s){if(e!==n){const o=r[zf];o&&(n+=";"+o),r.cssText=n,i=Vf.test(n)}}else e&&t.removeAttribute("style");Uo in t&&(t[Uo]=i?r.display:"",t[jf]&&(r.display="none"))}const $o=/\s*!important$/;function Ar(t,e,n){if(F(n))n.forEach(r=>Ar(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=qf(t,e);$o.test(n)?t.setProperty(en(r),n.replace($o,""),"important"):t[r]=n}}const Bo=["Webkit","Moz","ms"],As={};function qf(t,e){const n=As[e];if(n)return n;let r=Me(e);if(r!=="filter"&&r in t)return As[e]=r;r=is(r);for(let s=0;s<Bo.length;s++){const i=Bo[s]+r;if(i in t)return As[e]=i}return e}const Fo="http://www.w3.org/1999/xlink";function Ho(t,e,n,r,s,i=Zu(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Fo,e.slice(6,e.length)):t.setAttributeNS(Fo,e,n):n==null||i&&!nl(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Bt(n)?String(n):n)}function jo(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?tc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=nl(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function cn(t,e,n,r){t.addEventListener(e,n,r)}function Kf(t,e,n,r){t.removeEventListener(e,n,r)}const zo=Symbol("_vei");function Gf(t,e,n,r,s=null){const i=t[zo]||(t[zo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Jf(e);if(r){const c=i[e]=Yf(r,s);cn(t,a,c,l)}else o&&(Kf(t,a,o,l),i[e]=void 0)}}const Vo=/(?:Once|Passive|Capture)$/;function Jf(t){let e;if(Vo.test(t)){e={};let r;for(;r=t.match(Vo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):en(t.slice(2)),e]}let Ps=0;const Xf=Promise.resolve(),Zf=()=>Ps||(Xf.then(()=>Ps=0),Ps=Date.now());function Yf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;st(Qf(r,n.value),e,5,[r])};return n.value=t,n.attached=Zf(),n}function Qf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ed=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Hf(t,r,o):e==="style"?Wf(t,n,r):ns(e)?ki(e)||Gf(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):td(t,e,r,o))?(jo(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ho(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ce(r))?jo(t,Me(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ho(t,e,r,o))};function td(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wo(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wo(e)&&ce(n)?!1:e in t}const qo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Rr(e,n):e};function nd(t){t.target.composing=!0}function Ko(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Os=Symbol("_assign"),rd={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Os]=qo(s);const i=r||s.props&&s.props.type==="number";cn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=qs(a)),t[Os](a)}),n&&cn(t,"change",()=>{t.value=t.value.trim()}),e||(cn(t,"compositionstart",nd),cn(t,"compositionend",Ko),cn(t,"change",Ko))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Os]=qo(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?qs(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},sd=_e({patchProp:ed},Bf);let Go;function id(){return Go||(Go=lf(sd))}const od=(...t)=>{const e=id().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ld(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,ad(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ad(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ld(t){return ce(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const un=typeof document<"u";function nc(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&nc(t.default)}const q=Object.assign;function Ds(t,e){const n={};for(const r in e){const s=e[r];n[r]=je(s)?s.map(t):t(s)}return n}const Gn=()=>{},je=Array.isArray,rc=/#/g,ud=/&/g,hd=/\//g,fd=/=/g,dd=/\?/g,sc=/\+/g,pd=/%5B/g,gd=/%5D/g,ic=/%5E/g,md=/%60/g,oc=/%7B/g,_d=/%7C/g,ac=/%7D/g,bd=/%20/g;function Hi(t){return encodeURI(""+t).replace(_d,"|").replace(pd,"[").replace(gd,"]")}function vd(t){return Hi(t).replace(oc,"{").replace(ac,"}").replace(ic,"^")}function si(t){return Hi(t).replace(sc,"%2B").replace(bd,"+").replace(rc,"%23").replace(ud,"%26").replace(md,"`").replace(oc,"{").replace(ac,"}").replace(ic,"^")}function yd(t){return si(t).replace(fd,"%3D")}function wd(t){return Hi(t).replace(rc,"%23").replace(dd,"%3F")}function kd(t){return t==null?"":wd(t).replace(hd,"%2F")}function ir(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ed=/\/$/,Id=t=>t.replace(Ed,"");function Ns(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=xd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ir(o)}}function Td(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&wn(e.matched[r],n.matched[s])&&lc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function wn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function lc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Rd(t[n],e[n]))return!1;return!0}function Rd(t,e){return je(t)?Xo(t,e):je(e)?Xo(e,t):t===e}function Xo(t,e){return je(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function xd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const St={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var or;(function(t){t.pop="pop",t.push="push"})(or||(or={}));var Jn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jn||(Jn={}));function Cd(t){if(!t)if(un){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Id(t)}const Ad=/^[^#]+#/;function Pd(t,e){return t.replace(Ad,"#")+e}function Od(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ps=()=>({left:window.scrollX,top:window.scrollY});function Dd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Od(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zo(t,e){return(history.state?history.state.position-e:-1)+t}const ii=new Map;function Nd(t,e){ii.set(t,e)}function Ld(t){const e=ii.get(t);return ii.delete(t),e}let Md=()=>location.protocol+"//"+location.host;function cc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Jo(l,"")}return Jo(n,t)+r+s}function Ud(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=cc(t,location),_=n.value,k=e.value;let O=0;if(h){if(n.value=g,e.value=h,o&&o===_){o=null;return}O=k?h.position-k.position:0}else r(g);s.forEach(D=>{D(n.value,_,{delta:O,type:or.pop,direction:O?O>0?Jn.forward:Jn.back:Jn.unknown})})};function l(){o=n.value}function c(h){s.push(h);const g=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return i.push(g),g}function u(){const{history:h}=window;h.state&&h.replaceState(q({},h.state,{scroll:ps()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Yo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ps():null}}function $d(t){const{history:e,location:n}=window,r={value:cc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Md()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(l,c){const u=q({},e.state,Yo(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=q({},s.value,e.state,{forward:l,scroll:ps()});i(u.current,u,!0);const f=q({},Yo(r.value,l,null),{position:u.position+1},c);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Bd(t){t=Cd(t);const e=$d(t),n=Ud(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:Pd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Fd(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Bd(t)}function Hd(t){return typeof t=="string"||t&&typeof t=="object"}function uc(t){return typeof t=="string"||typeof t=="symbol"}const hc=Symbol("");var Qo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qo||(Qo={}));function kn(t,e){return q(new Error,{type:t,[hc]:!0},e)}function at(t,e){return t instanceof Error&&hc in t&&(e==null||!!(t.type&e))}const ea="[^/]+?",jd={sensitive:!1,strict:!1,start:!0,end:!0},zd=/[.+*?^${}()[\]/\\]/g;function Vd(t,e){const n=q({},jd,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(zd,"\\$&"),g+=40;else if(h.type===1){const{value:_,repeatable:k,optional:O,regexp:D}=h;i.push({name:_,repeatable:k,optional:O});const R=D||ea;if(R!==ea){g+=10;try{new RegExp(`(${R})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${_}" (${R}): `+I.message)}}let C=k?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(C=O&&c.length<2?`(?:/${C})`:"/"+C),O&&(C+="?"),s+=C,g+=20,O&&(g+=-8),k&&(g+=-20),R===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",_=i[h-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:k,optional:O}=g,D=_ in c?c[_]:"";if(je(D)&&!k)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const R=je(D)?D.join("/"):D;if(!R)if(O)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=R}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function Wd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function fc(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Wd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ta(r))return 1;if(ta(s))return-1}return s.length-r.length}function ta(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qd={type:0,value:""},Kd=/[a-zA-Z0-9_]/;function Gd(t){if(!t)return[[]];if(t==="/")return[[qd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function f(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Kd.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function Jd(t,e,n){const r=Vd(Gd(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Xd(t,e){const n=[],r=new Map;e=ia({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,g){const _=!g,k=ra(f);k.aliasOf=g&&g.record;const O=ia(e,f),D=[k];if("alias"in f){const I=typeof f.alias=="string"?[f.alias]:f.alias;for(const j of I)D.push(ra(q({},k,{components:g?g.record.components:k.components,path:j,aliasOf:g?g.record:k})))}let R,C;for(const I of D){const{path:j}=I;if(h&&j[0]!=="/"){const X=h.record.path,z=X[X.length-1]==="/"?"":"/";I.path=h.record.path+(j&&z+j)}if(R=Jd(I,h,O),g?g.alias.push(R):(C=C||R,C!==R&&C.alias.push(R),_&&f.name&&!sa(R)&&o(f.name)),dc(R)&&l(R),k.children){const X=k.children;for(let z=0;z<X.length;z++)i(X[z],R,g&&g.children[z])}g=g||R}return C?()=>{o(C)}:Gn}function o(f){if(uc(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const h=Qd(f,n);n.splice(h,0,f),f.record.name&&!sa(f)&&r.set(f.record.name,f)}function c(f,h){let g,_={},k,O;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw kn(1,{location:f});O=g.record.name,_=q(na(h.params,g.keys.filter(C=>!C.optional).concat(g.parent?g.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),f.params&&na(f.params,g.keys.map(C=>C.name))),k=g.stringify(_)}else if(f.path!=null)k=f.path,g=n.find(C=>C.re.test(k)),g&&(_=g.parse(k),O=g.record.name);else{if(g=h.name?r.get(h.name):n.find(C=>C.re.test(h.path)),!g)throw kn(1,{location:f,currentLocation:h});O=g.record.name,_=q({},h.params,f.params),k=g.stringify(_)}const D=[];let R=g;for(;R;)D.unshift(R.record),R=R.parent;return{name:O,path:k,params:_,matched:D,meta:Yd(D)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function na(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ra(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Zd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Zd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function sa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Yd(t){return t.reduce((e,n)=>q(e,n.meta),{})}function ia(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Qd(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;fc(t,e[i])<0?r=i:n=i+1}const s=ep(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function ep(t){let e=t;for(;e=e.parent;)if(dc(e)&&fc(t,e)===0)return e}function dc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function tp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(sc," "),o=i.indexOf("="),a=ir(o<0?i:i.slice(0,o)),l=o<0?null:ir(i.slice(o+1));if(a in e){let c=e[a];je(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function oa(t){let e="";for(let n in t){const r=t[n];if(n=yd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(je(r)?r.map(i=>i&&si(i)):[r&&si(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function np(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=je(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const rp=Symbol(""),aa=Symbol(""),gs=Symbol(""),ji=Symbol(""),oi=Symbol("");function On(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function At(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(kn(4,{from:n,to:e})):h instanceof Error?l(h):Hd(h)?l(kn(2,{from:e,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Ls(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(nc(l)){const u=(l.__vccOpts||l)[e];u&&i.push(At(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=cd(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&At(g,n,r,o,a,s)()}))}}return i}function la(t){const e=He(gs),n=He(ji),r=Ue(()=>{const l=qt(t.to);return e.resolve(l)}),s=Ue(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(wn.bind(null,u));if(h>-1)return h;const g=ca(l[c-2]);return c>1&&ca(u)===g&&f[f.length-1].path!==g?f.findIndex(wn.bind(null,l[c-2])):h}),i=Ue(()=>s.value>-1&&lp(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&lc(n.params,r.value.params));function a(l={}){if(ap(l)){const c=e[qt(t.replace)?"replace":"push"](qt(t.to)).catch(Gn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function sp(t){return t.length===1?t[0]:t}const ip=tn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:la,setup(t,{slots:e}){const n=ls(la(t)),{options:r}=He(gs),s=Ue(()=>({[ua(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ua(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&sp(e.default(n));return t.custom?i:ec("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),op=ip;function ap(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lp(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!je(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ca(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ua=(t,e,n)=>t??e??n,cp=tn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=He(oi),s=Ue(()=>t.route||r.value),i=He(aa,0),o=Ue(()=>{let c=qt(i);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ue(()=>s.value.matched[o.value]);xr(aa,Ue(()=>o.value+1)),xr(rp,a),xr(oi,s);const l=Mr();return qn(()=>[l.value,a.value,t.name],([c,u,f],[h,g,_])=>{u&&(u.instances[f]=c,g&&g!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!wn(u,g)||!h)&&(u.enterCallbacks[f]||[]).forEach(k=>k(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return ha(n.default,{Component:h,route:c});const g=f.props[u],_=g?g===!0?c.params:typeof g=="function"?g(c):g:null,O=ec(h,q({},_,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ha(n.default,{Component:O,route:c})||O}}});function ha(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const pc=cp;function up(t){const e=Xd(t.routes,t),n=t.parseQuery||tp,r=t.stringifyQuery||oa,s=t.history,i=On(),o=On(),a=On(),l=vh(St);let c=St;un&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ds.bind(null,v=>""+v),f=Ds.bind(null,kd),h=Ds.bind(null,ir);function g(v,N){let A,L;return uc(v)?(A=e.getRecordMatcher(v),L=N):L=v,e.addRoute(L,A)}function _(v){const N=e.getRecordMatcher(v);N&&e.removeRoute(N)}function k(){return e.getRoutes().map(v=>v.record)}function O(v){return!!e.getRecordMatcher(v)}function D(v,N){if(N=q({},N||l.value),typeof v=="string"){const m=Ns(n,v,N.path),b=e.resolve({path:m.path},N),w=s.createHref(m.fullPath);return q(m,b,{params:h(b.params),hash:ir(m.hash),redirectedFrom:void 0,href:w})}let A;if(v.path!=null)A=q({},v,{path:Ns(n,v.path,N.path).path});else{const m=q({},v.params);for(const b in m)m[b]==null&&delete m[b];A=q({},v,{params:f(m)}),N.params=f(N.params)}const L=e.resolve(A,N),ee=v.hash||"";L.params=u(h(L.params));const d=Td(r,q({},v,{hash:vd(ee),path:L.path})),p=s.createHref(d);return q({fullPath:d,hash:ee,query:r===oa?np(v.query):v.query||{}},L,{redirectedFrom:void 0,href:p})}function R(v){return typeof v=="string"?Ns(n,v,l.value.path):q({},v)}function C(v,N){if(c!==v)return kn(8,{from:N,to:v})}function I(v){return z(v)}function j(v){return I(q(R(v),{replace:!0}))}function X(v){const N=v.matched[v.matched.length-1];if(N&&N.redirect){const{redirect:A}=N;let L=typeof A=="function"?A(v):A;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=R(L):{path:L},L.params={}),q({query:v.query,hash:v.hash,params:L.path!=null?{}:v.params},L)}}function z(v,N){const A=c=D(v),L=l.value,ee=v.state,d=v.force,p=v.replace===!0,m=X(A);if(m)return z(q(R(m),{state:typeof m=="object"?q({},ee,m.state):ee,force:d,replace:p}),N||A);const b=A;b.redirectedFrom=N;let w;return!d&&Sd(r,L,A)&&(w=kn(16,{to:b,from:L}),We(L,L,!0,!1)),(w?Promise.resolve(w):Ne(b,L)).catch(y=>at(y)?at(y,2)?y:Tt(y):W(y,b,L)).then(y=>{if(y){if(at(y,2))return z(q({replace:p},R(y.to),{state:typeof y.to=="object"?q({},ee,y.to.state):ee,force:d}),N||b)}else y=Ft(b,L,!0,p,ee);return It(b,L,y),y})}function fe(v,N){const A=C(v,N);return A?Promise.reject(A):Promise.resolve()}function De(v){const N=on.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(v):v()}function Ne(v,N){let A;const[L,ee,d]=hp(v,N);A=Ls(L.reverse(),"beforeRouteLeave",v,N);for(const m of L)m.leaveGuards.forEach(b=>{A.push(At(b,v,N))});const p=fe.bind(null,v,N);return A.push(p),Le(A).then(()=>{A=[];for(const m of i.list())A.push(At(m,v,N));return A.push(p),Le(A)}).then(()=>{A=Ls(ee,"beforeRouteUpdate",v,N);for(const m of ee)m.updateGuards.forEach(b=>{A.push(At(b,v,N))});return A.push(p),Le(A)}).then(()=>{A=[];for(const m of d)if(m.beforeEnter)if(je(m.beforeEnter))for(const b of m.beforeEnter)A.push(At(b,v,N));else A.push(At(m.beforeEnter,v,N));return A.push(p),Le(A)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),A=Ls(d,"beforeRouteEnter",v,N,De),A.push(p),Le(A))).then(()=>{A=[];for(const m of o.list())A.push(At(m,v,N));return A.push(p),Le(A)}).catch(m=>at(m,8)?m:Promise.reject(m))}function It(v,N,A){a.list().forEach(L=>De(()=>L(v,N,A)))}function Ft(v,N,A,L,ee){const d=C(v,N);if(d)return d;const p=N===St,m=un?history.state:{};A&&(L||p?s.replace(v.fullPath,q({scroll:p&&m&&m.scroll},ee)):s.push(v.fullPath,ee)),l.value=v,We(v,N,A,p),Tt()}let Ve;function xn(){Ve||(Ve=s.listen((v,N,A)=>{if(!vr.listening)return;const L=D(v),ee=X(L);if(ee){z(q(ee,{replace:!0,force:!0}),L).catch(Gn);return}c=L;const d=l.value;un&&Nd(Zo(d.fullPath,A.delta),ps()),Ne(L,d).catch(p=>at(p,12)?p:at(p,2)?(z(q(R(p.to),{force:!0}),L).then(m=>{at(m,20)&&!A.delta&&A.type===or.pop&&s.go(-1,!1)}).catch(Gn),Promise.reject()):(A.delta&&s.go(-A.delta,!1),W(p,L,d))).then(p=>{p=p||Ft(L,d,!1),p&&(A.delta&&!at(p,8)?s.go(-A.delta,!1):A.type===or.pop&&at(p,20)&&s.go(-1,!1)),It(L,d,p)}).catch(Gn)}))}let rn=On(),ue=On(),Q;function W(v,N,A){Tt(v);const L=ue.list();return L.length?L.forEach(ee=>ee(v,N,A)):console.error(v),Promise.reject(v)}function it(){return Q&&l.value!==St?Promise.resolve():new Promise((v,N)=>{rn.add([v,N])})}function Tt(v){return Q||(Q=!v,xn(),rn.list().forEach(([N,A])=>v?A(v):N()),rn.reset()),v}function We(v,N,A,L){const{scrollBehavior:ee}=t;if(!un||!ee)return Promise.resolve();const d=!A&&Ld(Zo(v.fullPath,0))||(L||!A)&&history.state&&history.state.scroll||null;return Ni().then(()=>ee(v,N,d)).then(p=>p&&Dd(p)).catch(p=>W(p,v,N))}const Ie=v=>s.go(v);let sn;const on=new Set,vr={currentRoute:l,listening:!0,addRoute:g,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:D,options:t,push:I,replace:j,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ue.add,isReady:it,install(v){const N=this;v.component("RouterLink",op),v.component("RouterView",pc),v.config.globalProperties.$router=N,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(l)}),un&&!sn&&l.value===St&&(sn=!0,I(s.location).catch(ee=>{}));const A={};for(const ee in St)Object.defineProperty(A,ee,{get:()=>l.value[ee],enumerable:!0});v.provide(gs,N),v.provide(ji,vl(A)),v.provide(oi,l);const L=v.unmount;on.add(v),v.unmount=function(){on.delete(v),on.size<1&&(c=St,Ve&&Ve(),Ve=null,l.value=St,sn=!1,Q=!1),L()}}};function Le(v){return v.reduce((N,A)=>N.then(()=>De(A)),Promise.resolve())}return vr}function hp(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>wn(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>wn(c,l))||s.push(l))}return[n,r,s]}function fp(){return He(gs)}function gc(t){return He(ji)}const dp=tn({__name:"App",setup(t){return(e,n)=>(ur(),Xl(qt(pc)))}}),pp=["onClick"],gp=["src","alt"],mp={class:"card-content"},_p={class:"meta"},bp=tn({__name:"ProjectCard",props:{title:{},description:{},imgSrc:{},alt:{},year:{},author:{},highlight:{type:Boolean},slug:{}},setup(t){return(e,n)=>{const r=Vh("router-link");return ur(),Xl(r,{to:`/posts/${e.slug}`,custom:""},{default:xl(({navigate:s})=>[de("div",{class:as(["card",e.highlight?"card--highlight":""]),onClick:s,style:{cursor:"pointer"}},[de("img",{src:e.imgSrc,alt:e.alt},null,8,gp),de("div",mp,[de("h3",null,Un(e.title),1),de("p",null,Un(e.description),1),de("div",_p,Un(e.year)+" · "+Un(e.author),1)])],10,pp)]),_:1},8,["to"])}}}),ms=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Dn=ms(bp,[["__scopeId","data-v-1d99547c"]]),vp=()=>{};var fa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(h=64)),r.push(n[u],n[f],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new wp;const h=i<<2|a>>4;if(r.push(h),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const _=c<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kp=function(t){const e=mc(t);return _c.encodeByteArray(e,!0)},Wr=function(t){return kp(t).replace(/\./g,"")},bc=function(t){try{return _c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=()=>Ep().__FIREBASE_DEFAULTS__,Tp=()=>{if(typeof process>"u"||typeof fa>"u")return;const t=fa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Sp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bc(t[1]);return e&&JSON.parse(e)},zi=()=>{try{return vp()||Ip()||Tp()||Sp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vc=t=>{var e,n;return(n=(e=zi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rp=t=>{const e=vc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yc=()=>{var t;return(t=zi())===null||t===void 0?void 0:t.config},wc=t=>{var e;return(e=zi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t){return t.endsWith(".cloudworkstations.dev")}async function kc(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wr(JSON.stringify(n)),Wr(JSON.stringify(o)),""].join(".")}const Xn={};function Ap(){const t={prod:[],emulator:[]};for(const e of Object.keys(Xn))Xn[e]?t.emulator.push(e):t.prod.push(e);return t}function Pp(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let da=!1;function Ec(t,e){if(typeof window>"u"||typeof document>"u"||!fr(window.location.host)||Xn[t]===e||Xn[t]||da)return;Xn[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",i=Ap().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,g){h.setAttribute("width","24"),h.setAttribute("id",g),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{da=!0,o()},h}function u(h,g){h.setAttribute("id",g),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function f(){const h=Pp(r),g=n("text"),_=document.getElementById(g)||document.createElement("span"),k=n("learnmore"),O=document.getElementById(k)||document.createElement("a"),D=n("preprendIcon"),R=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const C=h.element;a(C),u(O,k);const I=c();l(R,D),C.append(R,_,O,I),document.body.appendChild(C)}i?(_.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Op(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Dp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Np(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mp(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Up(){try{return typeof indexedDB=="object"}catch{return!1}}function $p(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="FirebaseError";class Et extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bp,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dr.prototype.create)}}class dr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Fp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Et(s,a,r)}}function Fp(t,e){return t.replace(Hp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Hp=/\{\$([^}]+)}/g;function jp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function En(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(pa(i)&&pa(o)){if(!En(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function pa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zp(t,e){const n=new Vp(t,e);return n.subscribe.bind(n)}class Vp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Wp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ms),s.error===void 0&&(s.error=Ms),s.complete===void 0&&(s.complete=Ms);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ms(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gp(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kp(t){return t===Vt?void 0:t}function Gp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Xp={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Zp=ne.INFO,Yp={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Qp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Yp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ic{constructor(e){this.name=e,this._logLevel=Zp,this._logHandler=Qp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const eg=(t,e)=>e.some(n=>t instanceof n);let ga,ma;function tg(){return ga||(ga=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ng(){return ma||(ma=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tc=new WeakMap,ai=new WeakMap,Sc=new WeakMap,Us=new WeakMap,Vi=new WeakMap;function rg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tc.set(n,t)}).catch(()=>{}),Vi.set(e,t),e}function sg(t){if(ai.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ai.set(t,e)}let li={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ai.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ig(t){li=t(li)}function og(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($s(this),e,...n);return Sc.set(r,e.sort?e.sort():[e]),Mt(r)}:ng().includes(t)?function(...e){return t.apply($s(this),e),Mt(Tc.get(this))}:function(...e){return Mt(t.apply($s(this),e))}}function ag(t){return typeof t=="function"?og(t):(t instanceof IDBTransaction&&sg(t),eg(t,tg())?new Proxy(t,li):t)}function Mt(t){if(t instanceof IDBRequest)return rg(t);if(Us.has(t))return Us.get(t);const e=ag(t);return e!==t&&(Us.set(t,e),Vi.set(e,t)),e}const $s=t=>Vi.get(t);function lg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Mt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mt(o.result),l.oldVersion,l.newVersion,Mt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const cg=["get","getKey","getAll","getAllKeys","count"],ug=["put","add","delete","clear"],Bs=new Map;function _a(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bs.get(e))return Bs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ug.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cg.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Bs.set(e,i),i}ig(t=>({...t,get:(e,n,r)=>_a(e,n)||t.get(e,n,r),has:(e,n)=>!!_a(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ci="@firebase/app",ba="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Ic("@firebase/app"),dg="@firebase/app-compat",pg="@firebase/analytics-compat",gg="@firebase/analytics",mg="@firebase/app-check-compat",_g="@firebase/app-check",bg="@firebase/auth",vg="@firebase/auth-compat",yg="@firebase/database",wg="@firebase/data-connect",kg="@firebase/database-compat",Eg="@firebase/functions",Ig="@firebase/functions-compat",Tg="@firebase/installations",Sg="@firebase/installations-compat",Rg="@firebase/messaging",xg="@firebase/messaging-compat",Cg="@firebase/performance",Ag="@firebase/performance-compat",Pg="@firebase/remote-config",Og="@firebase/remote-config-compat",Dg="@firebase/storage",Ng="@firebase/storage-compat",Lg="@firebase/firestore",Mg="@firebase/ai",Ug="@firebase/firestore-compat",$g="firebase",Bg="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="[DEFAULT]",Fg={[ci]:"fire-core",[dg]:"fire-core-compat",[gg]:"fire-analytics",[pg]:"fire-analytics-compat",[_g]:"fire-app-check",[mg]:"fire-app-check-compat",[bg]:"fire-auth",[vg]:"fire-auth-compat",[yg]:"fire-rtdb",[wg]:"fire-data-connect",[kg]:"fire-rtdb-compat",[Eg]:"fire-fn",[Ig]:"fire-fn-compat",[Tg]:"fire-iid",[Sg]:"fire-iid-compat",[Rg]:"fire-fcm",[xg]:"fire-fcm-compat",[Cg]:"fire-perf",[Ag]:"fire-perf-compat",[Pg]:"fire-rc",[Og]:"fire-rc-compat",[Dg]:"fire-gcs",[Ng]:"fire-gcs-compat",[Lg]:"fire-fst",[Ug]:"fire-fst-compat",[Mg]:"fire-vertex","fire-js":"fire-js",[$g]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Map,Hg=new Map,hi=new Map;function va(t,e){try{t.container.addComponent(e)}catch(n){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function In(t){const e=t.name;if(hi.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;hi.set(e,t);for(const n of qr.values())va(n,t);for(const n of Hg.values())va(n,t);return!0}function Wi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ut=new dr("app","Firebase",jg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=Bg;function Rc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ui,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Ut.create("bad-app-name",{appName:String(s)});if(n||(n=yc()),!n)throw Ut.create("no-options");const i=qr.get(s);if(i){if(En(n,i.options)&&En(r,i.config))return i;throw Ut.create("duplicate-app",{appName:s})}const o=new Jp(s);for(const l of hi.values())o.addComponent(l);const a=new zg(n,r,o);return qr.set(s,a),a}function xc(t=ui){const e=qr.get(t);if(!e&&t===ui&&yc())return Rc();if(!e)throw Ut.create("no-app",{appName:t});return e}function $t(t,e,n){var r;let s=(r=Fg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(a.join(" "));return}In(new Xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="firebase-heartbeat-database",Wg=1,ar="firebase-heartbeat-store";let Fs=null;function Cc(){return Fs||(Fs=lg(Vg,Wg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ar)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ut.create("idb-open",{originalErrorMessage:t.message})})),Fs}async function qg(t){try{const n=(await Cc()).transaction(ar),r=await n.objectStore(ar).get(Ac(t));return await n.done,r}catch(e){if(e instanceof Et)vt.warn(e.message);else{const n=Ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(n.message)}}}async function ya(t,e){try{const r=(await Cc()).transaction(ar,"readwrite");await r.objectStore(ar).put(e,Ac(t)),await r.done}catch(n){if(n instanceof Et)vt.warn(n.message);else{const r=Ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vt.warn(r.message)}}}function Ac(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=1024,Gg=30;class Jg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wa();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Gg){const o=Yg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){vt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wa(),{heartbeatsToSend:r,unsentEntries:s}=Xg(this._heartbeatsCache.heartbeats),i=Wr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return vt.warn(n),""}}}function wa(){return new Date().toISOString().substring(0,10)}function Xg(t,e=Kg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ka(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ka(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Up()?$p().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ya(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ya(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ka(t){return Wr(JSON.stringify({version:2,heartbeats:t})).length}function Yg(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t){In(new Xt("platform-logger",e=>new hg(e),"PRIVATE")),In(new Xt("heartbeat",e=>new Jg(e),"PRIVATE")),$t(ci,ba,t),$t(ci,ba,"esm2017"),$t("fire-js","")}Qg("");var em="firebase",tm="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(em,tm,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="firebasestorage.googleapis.com",Oc="storageBucket",nm=2*60*1e3,rm=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le extends Et{constructor(e,n,r=0){super(Hs(e),`Firebase Storage: ${n} (${Hs(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hs(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ae||(ae={}));function Hs(t){return"storage/"+t}function qi(){const t="An unknown error occurred, please check the error payload for server response.";return new le(ae.UNKNOWN,t)}function sm(t){return new le(ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function im(t){return new le(ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function om(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new le(ae.UNAUTHENTICATED,t)}function am(){return new le(ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function lm(t){return new le(ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function cm(){return new le(ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function um(){return new le(ae.CANCELED,"User canceled the upload/download.")}function hm(t){return new le(ae.INVALID_URL,"Invalid URL '"+t+"'.")}function fm(t){return new le(ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function dm(){return new le(ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Oc+"' property when initializing the app?")}function pm(){return new le(ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gm(){return new le(ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function mm(t){return new le(ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function fi(t){return new le(ae.INVALID_ARGUMENT,t)}function Dc(){return new le(ae.APP_DELETED,"The Firebase app was deleted.")}function _m(t){return new le(ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Zn(t,e){return new le(ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Nn(t){throw new le(ae.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Oe.makeFromUrl(e,n)}catch{return new Oe(e,"")}if(r.path==="")return r;throw fm(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(I){I.path_=decodeURIComponent(I.path)}const u="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${u}/b/${s}/o${h}`,"i"),_={bucket:1,path:3},k=n===Pc?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",D=new RegExp(`^https?://${k}/${s}/${O}`,"i"),C=[{regex:a,indices:l,postModify:i},{regex:g,indices:_,postModify:c},{regex:D,indices:{bucket:1,path:2},postModify:c}];for(let I=0;I<C.length;I++){const j=C[I],X=j.regex.exec(e);if(X){const z=X[j.indices.bucket];let fe=X[j.indices.path];fe||(fe=""),r=new Oe(z,fe),j.postModify(r);break}}if(r==null)throw hm(e);return r}}class bm{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...O){c||(c=!0,e.apply(null,O))}function f(O){s=setTimeout(()=>{s=null,t(g,l())},O)}function h(){i&&clearTimeout(i)}function g(O,...D){if(c){h();return}if(O){h(),u.call(null,O,...D);return}if(l()||o){h(),u.call(null,O,...D);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,f(C)}let _=!1;function k(O){_||(_=!0,h(),!c&&(s!==null?(O||(a=2),clearTimeout(s),f(0)):O||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function ym(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){return t!==void 0}function km(t){return typeof t=="object"&&!Array.isArray(t)}function Ki(t){return typeof t=="string"||t instanceof String}function Ea(t){return Gi()&&t instanceof Blob}function Gi(){return typeof Blob<"u"}function Ia(t,e,n,r){if(r<e)throw fi(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw fi(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Nc(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Kt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Kt||(Kt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,r,s,i,o,a,l,c,u,f,h=!0,g=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=f,this.retry=h,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,k)=>{this.resolve_=_,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Er(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Kt.NO_ERROR,l=i.getStatus();if(!a||Em(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Kt.ABORT;r(!1,new Er(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Er(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());wm(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=qi();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Dc():um();o(l)}else{const l=cm();o(l)}};this.canceled_?n(!1,new Er(!1,null,!0)):this.backoffId_=vm(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ym(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Er{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Tm(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Sm(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Rm(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xm(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Cm(t,e,n,r,s,i,o=!0,a=!1){const l=Nc(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return Rm(u,e),Tm(u,n),Sm(u,i),xm(u,r),new Im(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Pm(...t){const e=Am();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Gi())return new Blob(t);throw new le(ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Om(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t){if(typeof atob>"u")throw mm("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class js{constructor(e,n){this.data=e,this.contentType=n||null}}function Nm(t,e){switch(t){case et.RAW:return new js(Lc(e));case et.BASE64:case et.BASE64URL:return new js(Mc(t,e));case et.DATA_URL:return new js(Mm(e),Um(e))}throw qi()}function Lc(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Lm(t){let e;try{e=decodeURIComponent(t)}catch{throw Zn(et.DATA_URL,"Malformed data URL.")}return Lc(e)}function Mc(t,e){switch(t){case et.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Zn(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case et.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Zn(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Dm(e)}catch(s){throw s.message.includes("polyfill")?s:Zn(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Uc{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Zn(et.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=$m(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Mm(t){const e=new Uc(t);return e.base64?Mc(et.BASE64,e.rest):Lm(e.rest)}function Um(t){return new Uc(t).contentType}function $m(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n){let r=0,s="";Ea(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ea(this.data_)){const r=this.data_,s=Om(r,e,n);return s===null?null:new Pt(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Pt(r,!0)}}static getBlob(...e){if(Gi()){const n=e.map(r=>r instanceof Pt?r.data_:r);return new Pt(Pm.apply(null,n))}else{const n=e.map(o=>Ki(o)?Nm(et.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Pt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(t){let e;try{e=JSON.parse(t)}catch{return null}return km(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Fm(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Bc(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t,e){return e}class be{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Hm}}let Ir=null;function jm(t){return!Ki(t)||t.length<2?t:Bc(t)}function Fc(){if(Ir)return Ir;const t=[];t.push(new be("bucket")),t.push(new be("generation")),t.push(new be("metageneration")),t.push(new be("name","fullPath",!0));function e(i,o){return jm(o)}const n=new be("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new be("size");return s.xform=r,t.push(s),t.push(new be("timeCreated")),t.push(new be("updated")),t.push(new be("md5Hash",null,!0)),t.push(new be("cacheControl",null,!0)),t.push(new be("contentDisposition",null,!0)),t.push(new be("contentEncoding",null,!0)),t.push(new be("contentLanguage",null,!0)),t.push(new be("contentType",null,!0)),t.push(new be("metadata","customMetadata",!0)),Ir=t,Ir}function zm(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Oe(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Vm(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return zm(r,t),r}function Hc(t,e,n){const r=$c(e);return r===null?null:Vm(t,r,n)}function Wm(t,e,n,r){const s=$c(e);if(s===null||!Ki(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,f=t.fullPath,h="/b/"+o(u)+"/o/"+o(f),g=_s(h,n,r),_=Nc({alt:"media",token:c});return g+_})[0]}function qm(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Ji{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t){if(!t)throw qi()}function Km(t,e){function n(r,s){const i=Hc(t,s,e);return jc(i!==null),i}return n}function Gm(t,e){function n(r,s){const i=Hc(t,s,e);return jc(i!==null),Wm(i,s,t.host,t._protocol)}return n}function zc(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=am():s=om():n.getStatus()===402?s=im(t.bucket):n.getStatus()===403?s=lm(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Vc(t){const e=zc(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=sm(t.path)),i.serverResponse=s.serverResponse,i}return n}function Jm(t,e,n){const r=e.fullServerUrl(),s=_s(r,t.host,t._protocol)+"?alt=media",i="GET",o=t.maxOperationRetryTime,a=new Ji(s,i,(l,c)=>c,o);return a.errorHandler=Vc(e),a}function Xm(t,e,n){const r=e.fullServerUrl(),s=_s(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ji(s,i,Gm(t,n),o);return a.errorHandler=Vc(e),a}function Zm(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ym(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Zm(null,e)),r}function Qm(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let I=0;I<2;I++)C=C+Math.random().toString().slice(2);return C}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Ym(e,r,s),u=qm(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,h=`\r
--`+l+"--",g=Pt.getBlob(f,r,h);if(g===null)throw pm();const _={name:c.fullPath},k=_s(i,t.host,t._protocol),O="POST",D=t.maxUploadRetryTime,R=new Ji(k,O,Km(t,n),D);return R.urlParams=_,R.headers=o,R.body=g.uploadData(),R.errorHandler=zc(e),R}class Wc{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Kt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Kt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Kt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Nn("cannot .send() more than once");if(fr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Nn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Nn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Nn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Nn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class e_ extends Wc{initXhr(){this.xhr_.responseType="text"}}function qc(){return new e_}class t_ extends Wc{initXhr(){this.xhr_.responseType="blob"}}function n_(){return new t_}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){this._service=e,n instanceof Oe?this._location=n:this._location=Oe.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Zt(e,n)}get root(){const e=new Oe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bc(this._location.path)}get storage(){return this._service}get parent(){const e=Bm(this._location.path);if(e===null)return null;const n=new Oe(this._location.bucket,e);return new Zt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _m(e)}}function r_(t,e){t._throwIfRoot("getBlob");const n=Jm(t.storage,t._location);return t.storage.makeRequestWithTokens(n,n_).then(r=>r)}function s_(t,e,n){t._throwIfRoot("uploadBytes");const r=Qm(t.storage,t._location,Fc(),new Pt(e,!0),n);return t.storage.makeRequestWithTokens(r,qc).then(s=>({metadata:s,ref:t}))}function i_(t){t._throwIfRoot("getDownloadURL");const e=Xm(t.storage,t._location,Fc());return t.storage.makeRequestWithTokens(e,qc).then(n=>{if(n===null)throw gm();return n})}function o_(t,e){const n=Fm(t._location.path,e),r=new Oe(t._location.bucket,n);return new Zt(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t){return/^[A-Za-z]+:\/\//.test(t)}function l_(t,e){return new Zt(t,e)}function Kc(t,e){if(t instanceof Xi){const n=t;if(n._bucket==null)throw dm();const r=new Zt(n,n._bucket);return e!=null?Kc(r,e):r}else return e!==void 0?o_(t,e):t}function c_(t,e){if(e&&a_(e)){if(t instanceof Xi)return l_(t,e);throw fi("To use ref(service, url), the first argument must be a Storage instance.")}else return Kc(t,e)}function Ta(t,e){const n=e==null?void 0:e[Oc];return n==null?null:Oe.makeFromBucketSpec(n,t)}function u_(t,e,n,r={}){t.host=`${e}:${n}`;const s=fr(e);s&&(kc(`https://${t.host}`),Ec("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Cp(i,t.app.options.projectId))}class Xi{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Pc,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nm,this._maxUploadRetryTime=rm,this._requests=new Set,s!=null?this._bucket=Oe.makeFromBucketSpec(s,this._host):this._bucket=Ta(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Oe.makeFromBucketSpec(this._url,e):this._bucket=Ta(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ia("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ia("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zt(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new bm(Dc());{const o=Cm(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Sa="@firebase/storage",Ra="0.13.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="storage";function xa(t,e,n){return t=ze(t),s_(t,e,n)}function Jc(t){return t=ze(t),i_(t)}function di(t,e){return t=ze(t),c_(t,e)}function h_(t=xc(),e){t=ze(t);const r=Wi(t,Gc).getImmediate({identifier:e}),s=Rp("storage");return s&&f_(r,...s),r}function f_(t,e,n,r={}){u_(t,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t,e){return t=ze(t),r_(t)}function p_(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Xi(n,r,s,e,Sn)}function g_(){In(new Xt(Gc,p_,"PUBLIC").setMultipleInstances(!0)),$t(Sa,Ra,""),$t(Sa,Ra,"esm2017")}g_();function Zi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Xc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const m_=Xc,Zc=new dr("auth","Firebase",Xc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Ic("@firebase/auth");function __(t,...e){Kr.logLevel<=ne.WARN&&Kr.warn(`Auth (${Sn}): ${t}`,...e)}function Pr(t,...e){Kr.logLevel<=ne.ERROR&&Kr.error(`Auth (${Sn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,...e){throw Yi(t,...e)}function nt(t,...e){return Yi(t,...e)}function Yc(t,e,n){const r=Object.assign(Object.assign({},m_()),{[e]:n});return new dr("auth","Firebase",r).create(e,{appName:t.name})}function Gt(t){return Yc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zc.create(t,...e)}function $(t,e,...n){if(!t)throw Yi(e,...n)}function dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pr(e),new Error(e)}function wt(t,e){t||dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function b_(){return Ca()==="http:"||Ca()==="https:"}function Ca(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b_()||Np()||"connection"in navigator)?navigator.onLine:!0}function y_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){this.shortDelay=e,this.longDelay=n,wt(n>e,"Short delay should be less than long delay!"),this.isMobile=Op()||Lp()}get(){return v_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t,e){wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],E_=new gr(3e4,6e4);function eo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rn(t,e,n,r,s={}){return eu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=pr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return Dp()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&fr(t.emulatorConfig.host)&&(c.credentials="include"),Qc.fetch()(await tu(t,t.config.apiHost,n,a),c)})}async function eu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},w_),e);try{const s=new T_(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Tr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Tr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Tr(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Yc(t,u,c);yt(t,u)}}catch(s){if(s instanceof Et)throw s;yt(t,"network-request-failed",{message:String(s)})}}async function I_(t,e,n,r,s={}){const i=await Rn(t,e,n,r,s);return"mfaPendingCredential"in i&&yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function tu(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Qi(t.config,s):`${t.config.apiScheme}://${s}`;return k_.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class T_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),E_.get())})}}function Tr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S_(t,e){return Rn(t,"POST","/v1/accounts:delete",e)}async function Gr(t,e){return Rn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function R_(t,e=!1){const n=ze(t),r=await n.getIdToken(e),s=to(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Yn(zs(s.auth_time)),issuedAtTime:Yn(zs(s.iat)),expirationTime:Yn(zs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zs(t){return Number(t)*1e3}function to(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pr("JWT malformed, contained fewer than 3 sections"),null;try{const s=bc(n);return s?JSON.parse(s):(Pr("Failed to decode base64 JWT payload"),null)}catch(s){return Pr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Aa(t){const e=to(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Et&&x_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function x_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yn(this.lastLoginAt),this.creationTime=Yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await lr(t,Gr(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?nu(i.providerUserInfo):[],a=P_(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new gi(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function A_(t){const e=ze(t);await Jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function P_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function nu(t){return t.map(e=>{var{providerId:n}=e,r=Zi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(t,e){const n=await eu(t,{},async()=>{const r=pr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await tu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function D_(t,e){return Rn(t,"POST","/v2/accounts:revokeToken",eo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Aa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=Aa(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await O_(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new mn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mn,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $e{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new C_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await lr(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return R_(this,e)}reload(){return A_(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $e(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Jr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(Gt(this.auth));const e=await this.getIdToken();return await lr(this,S_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,D=(c=n.createdAt)!==null&&c!==void 0?c:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:I,isAnonymous:j,providerData:X,stsTokenManager:z}=n;$(C&&z,e,"internal-error");const fe=mn.fromJSON(this.name,z);$(typeof C=="string",e,"internal-error"),Rt(f,e.name),Rt(h,e.name),$(typeof I=="boolean",e,"internal-error"),$(typeof j=="boolean",e,"internal-error"),Rt(g,e.name),Rt(_,e.name),Rt(k,e.name),Rt(O,e.name),Rt(D,e.name),Rt(R,e.name);const De=new $e({uid:C,auth:e,email:h,emailVerified:I,displayName:f,isAnonymous:j,photoURL:_,phoneNumber:g,tenantId:k,stsTokenManager:fe,createdAt:D,lastLoginAt:R});return X&&Array.isArray(X)&&(De.providerData=X.map(Ne=>Object.assign({},Ne))),O&&(De._redirectEventId=O),De}static async _fromIdTokenResponse(e,n,r=!1){const s=new mn;s.updateFromServerResponse(n);const i=new $e({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Jr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?nu(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new mn;a.updateFromIdToken(r);const l=new $e({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new gi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new Map;function pt(t){wt(t instanceof Function,"Expected a class definition");let e=Pa.get(t);return e?(wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pa.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ru.type="NONE";const Oa=ru;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t,e,n){return`firebase:${t}:${e}:${n}`}class _n{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Or(this.userKey,s.apiKey,i),this.fullPersistenceKey=Or("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Gr(this.auth,{idToken:e}).catch(()=>{});return n?$e._fromGetAccountInfoResponse(this.auth,n,e):null}return $e._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _n(pt(Oa),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||pt(Oa);const o=Or(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let f;if(typeof u=="string"){const h=await Gr(e,{idToken:u}).catch(()=>{});if(!h)break;f=await $e._fromGetAccountInfoResponse(e,h,u)}else f=$e._fromJSON(e,u);c!==i&&(a=f),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new _n(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new _n(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(au(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(su(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cu(e))return"Blackberry";if(uu(e))return"Webos";if(iu(e))return"Safari";if((e.includes("chrome/")||ou(e))&&!e.includes("edge/"))return"Chrome";if(lu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function su(t=Ee()){return/firefox\//i.test(t)}function iu(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ou(t=Ee()){return/crios\//i.test(t)}function au(t=Ee()){return/iemobile/i.test(t)}function lu(t=Ee()){return/android/i.test(t)}function cu(t=Ee()){return/blackberry/i.test(t)}function uu(t=Ee()){return/webos/i.test(t)}function no(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function N_(t=Ee()){var e;return no(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function L_(){return Mp()&&document.documentMode===10}function hu(t=Ee()){return no(t)||lu(t)||uu(t)||cu(t)||/windows phone/i.test(t)||au(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t,e=[]){let n;switch(t){case"Browser":n=Da(Ee());break;case"Worker":n=`${Da(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(t,e={}){return Rn(t,"GET","/v2/passwordPolicy",eo(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=6;class B_{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Na(this),this.idTokenSubscription=new Na(this),this.beforeStateQueue=new M_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pt(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Gr(this,{idToken:e}),r=await $e._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=y_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(Gt(this));const n=e?ze(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(Gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(Gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await U_(this),n=new B_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new dr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await D_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&__(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ro(t){return ze(t)}class Na{constructor(e){this.auth=e,this.observer=null,this.addObserver=zp(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function H_(t){so=t}function j_(t){return so.loadJS(t)}function z_(){return so.gapiScript}function V_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t,e){const n=Wi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(En(i,e??{}))return s;yt(s,"already-initialized")}return n.initialize({options:e})}function q_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function K_(t,e,n){const r=ro(t);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=du(e),{host:o,port:a}=G_(e),l=a===null?"":`:${a}`,c={url:`${i}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(En(c,r.config.emulator)&&En(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,fr(o)?(kc(`${i}//${o}${l}`),Ec("Auth",!0)):J_()}function du(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function G_(t){const e=du(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:La(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:La(o)}}}function La(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function J_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,n){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(t,e){return I_(t,"POST","/v1/accounts:signInWithIdp",eo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="http://localhost";class Yt extends pu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Yt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bn(e,n)}buildRequest(){const e={requestUri:X_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends gu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends mr{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yt._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dt.credential(n,r)}catch{return null}}}Dt.GOOGLE_SIGN_IN_METHOD="google.com";Dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends mr{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends mr{constructor(){super("twitter.com")}static credential(e,n){return Yt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $e._fromIdTokenResponse(e,r,s),o=Ma(r);return new Tn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ma(r);return new Tn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ma(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Et{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Xr(e,n,r,s)}}function mu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xr._fromErrorAndOperation(t,i,e,r):i})}async function Z_(t,e,n=!1){const r=await lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(t,e,n=!1){const{auth:r}=t;if(Qe(r.app))return Promise.reject(Gt(r));const s="reauthenticate";try{const i=await lr(t,mu(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=to(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),Tn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&yt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(t,e,n=!1){if(Qe(t.app))return Promise.reject(Gt(t));const r="signIn",s=await mu(t,r,e),i=await Tn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function eb(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function tb(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}const Zr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zr,"1"),this.storage.removeItem(Zr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=1e3,rb=10;class bu extends _u{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);L_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,rb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bu.type="LOCAL";const sb=bu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends _u{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vu.type="SESSION";const yu=vu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new bs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await ib(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=io("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function ab(t){rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function lb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ub(){return wu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="firebaseLocalStorageDb",hb=1,Yr="firebaseLocalStorage",Eu="fbase_key";class _r{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vs(t,e){return t.transaction([Yr],e?"readwrite":"readonly").objectStore(Yr)}function fb(){const t=indexedDB.deleteDatabase(ku);return new _r(t).toPromise()}function mi(){const t=indexedDB.open(ku,hb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yr,{keyPath:Eu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yr)?e(r):(r.close(),await fb(),e(await mi()))})})}async function Ua(t,e,n){const r=vs(t,!0).put({[Eu]:e,value:n});return new _r(r).toPromise()}async function db(t,e){const n=vs(t,!1).get(e),r=await new _r(n).toPromise();return r===void 0?null:r.value}function $a(t,e){const n=vs(t,!0).delete(e);return new _r(n).toPromise()}const pb=800,gb=3;class Iu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bs._getInstance(ub()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lb(),!this.activeServiceWorker)return;this.sender=new ob(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mi();return await Ua(e,Zr,"1"),await $a(e,Zr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ua(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>db(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$a(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=vs(s,!1).getAll();return new _r(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iu.type="LOCAL";const mb=Iu;new gr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t,e){return e?pt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends pu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bb(t){return Q_(t.auth,new oo(t),t.bypassAuthState)}function vb(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Y_(n,new oo(t),t.bypassAuthState)}async function yb(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Z_(n,new oo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bb;case"linkViaPopup":case"linkViaRedirect":return yb;case"reauthViaPopup":case"reauthViaRedirect":return vb;default:yt(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=new gr(2e3,1e4);class hn extends Tu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hn.currentPopupAction&&hn.currentPopupAction.cancel(),hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=io();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wb.get())};e()}}hn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="pendingRedirect",Dr=new Map;class Eb extends Tu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Dr.get(this.auth._key());if(!e){try{const r=await Ib(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Dr.set(this.auth._key(),e)}return this.bypassAuthState||Dr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ib(t,e){const n=Rb(e),r=Sb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Tb(t,e){Dr.set(t._key(),e)}function Sb(t){return pt(t._redirectPersistence)}function Rb(t){return Or(kb,t.config.apiKey,t.name)}async function xb(t,e,n=!1){if(Qe(t.app))return Promise.reject(Gt(t));const r=ro(t),s=_b(r,e),o=await new Eb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=10*60*1e3;class Ab{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Su(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ba(e))}saveEventToCache(e){this.cachedEventUids.add(Ba(e)),this.lastProcessedEventTime=Date.now()}}function Ba(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Su({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Su(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ob(t,e={}){return Rn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nb=/^https?/;async function Lb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ob(t);for(const n of e)try{if(Mb(n))return}catch{}yt(t,"unauthorized-domain")}function Mb(t){const e=pi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Nb.test(n))return!1;if(Db.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=new gr(3e4,6e4);function Fa(){const t=rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $b(t){return new Promise((e,n)=>{var r,s,i;function o(){Fa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fa(),n(nt(t,"network-request-failed"))},timeout:Ub.get()})}if(!((s=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rt().gapi)===null||i===void 0)&&i.load)o();else{const a=V_("iframefcb");return rt()[a]=()=>{gapi.load?o():n(nt(t,"network-request-failed"))},j_(`${z_()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Nr=null,e})}let Nr=null;function Bb(t){return Nr=Nr||$b(t),Nr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=new gr(5e3,15e3),Hb="__/auth/iframe",jb="emulator/auth/iframe",zb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wb(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qi(e,jb):`https://${t.config.authDomain}/${Hb}`,r={apiKey:e.apiKey,appName:t.name,v:Sn},s=Vb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${pr(r).slice(1)}`}async function qb(t){const e=await Bb(t),n=rt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:Wb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=rt().setTimeout(()=>{i(o)},Fb.get());function l(){rt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gb=500,Jb=600,Xb="_blank",Zb="http://localhost";class Ha{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Yb(t,e,n,r=Gb,s=Jb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Kb),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Ee().toLowerCase();n&&(a=ou(c)?Xb:n),su(c)&&(e=e||Zb,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(N_(c)&&a!=="_self")return Qb(e||"",a),new Ha(null);const f=window.open(e||"",a,u);$(f,t,"popup-blocked");try{f.focus()}catch{}return new Ha(f)}function Qb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="__/auth/handler",tv="emulator/auth/handler",nv=encodeURIComponent("fac");async function ja(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Sn,eventId:s};if(e instanceof gu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",jp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof mr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${nv}=${encodeURIComponent(l)}`:"";return`${rv(t)}?${pr(a).slice(1)}${c}`}function rv({config:t}){return t.emulator?Qi(t,tv):`https://${t.authDomain}/${ev}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="webStorageSupport";class sv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yu,this._completeRedirectFn=xb,this._overrideRedirectResult=Tb}async _openPopup(e,n,r,s){var i;wt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ja(e,n,r,pi(),s);return Yb(e,o,io())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ja(e,n,r,pi(),s);return ab(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qb(e),r=new Ab(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vs,{type:Vs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Vs];o!==void 0&&n(!!o),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hu()||iu()||no()}}const iv=sv;var za="@firebase/auth",Va="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lv(t){In(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fu(t)},c=new F_(r,s,i,l);return q_(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),In(new Xt("auth-internal",e=>{const n=ro(e.getProvider("auth").getImmediate());return(r=>new ov(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(za,Va,av(t)),$t(za,Va,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=5*60,uv=wc("authIdTokenMaxAge")||cv;let Wa=null;const hv=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uv)return;const s=n==null?void 0:n.token;Wa!==s&&(Wa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function fv(t=xc()){const e=Wi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=W_(t,{popupRedirectResolver:iv,persistence:[mb,sb,yu]}),r=wc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=hv(i.toString());tb(n,o,()=>o(n.currentUser)),eb(n,a=>o(a))}}const s=vc("auth");return s&&K_(n,`http://${s}`),n}function dv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}H_({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",dv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lv("Browser");const pv={apiKey:"AIzaSyBaYQuN_Z38gGN4-3-620vCNaZouFIsB88",authDomain:"projects-f102b.firebaseapp.com",projectId:"projects-f102b",storageBucket:"projects-f102b.firebasestorage.app",messagingSenderId:"913795101584",appId:"1:913795101584:web:9c2eb3078513b7d1333915",measurementId:"G-VQBK66P7KE"},Ru=Rc(pv),_i=h_(Ru);fv(Ru);new ft;const gv={class:"container"},mv=tn({__name:"Projects",setup(t){fp();const e=async()=>{window.location.href="https://github.com/heyingdu"};return(n,r)=>(ur(),Bi("section",null,[de("header",{class:"header"},[r[1]||(r[1]=de("div",{class:"text-group"},[de("h1",{class:"title"},"Projects"),de("p",{class:"subtitle"},"Shanghai, China")],-1)),de("button",{class:"github-btn",onClick:e,"aria-label":"Login with GitHub"},r[0]||(r[0]=[de("svg",{height:"24",width:"24",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[de("path",{d:"M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.66 7.66 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z"})],-1)]))]),de("div",gv,[he(Dn,{highlight:"",title:"Deep Bayesian Analysis on Kidney Transplant",description:"A research project focused on applying deep survival models to kidney transplant datasets using Bayesian methods.",imgSrc:"/images/kidney.png",alt:"Kidney Project",year:"2025",author:"Heying Du",slug:"DeepSurv-kidney"}),he(Dn,{title:"Targeted MLE",description:"Causal effects; Mediation Analysis",imgSrc:"/images/TMLE.png",alt:"TMLE",year:"2025",author:"Heying Du",slug:""}),he(Dn,{title:"AI tool for data analysis",description:"Applied AI to analyze data and provide insights.",imgSrc:"/images/ai.png",alt:"AI tool for data analysis",year:"2025",author:"Heying Du",slug:""}),he(Dn,{title:"GMM for Mixture of Distributions",description:"Applied GMM to model the distribution of a mixture of distributions.",imgSrc:"/images/gmm.png",alt:"GMM",year:"2024",author:"Heying Du",slug:""}),he(Dn,{title:"Data management system development",description:"Developed a React + Django-based dashboard for public health data visualization and institutional reporting.",imgSrc:"/images/dashboard.png",alt:"Dashboard",year:"2025",author:"Heying Du",slug:""})])]))}}),_v=ms(mv,[["__scopeId","data-v-939d3866"]]),bv=tn({__name:"Writer",setup(t){const n=gc().params.id,r=Mr(""),s=Mr(null),i=di(_i,`posts/${n}.md`);return Vn(()=>{const o=a=>{(a.metaKey||a.ctrlKey)&&a.key==="s"&&(a.preventDefault(),a.stopPropagation())};window.addEventListener("keydown",o),Hr(()=>{window.removeEventListener("keydown",o)})}),Vn(async()=>{try{const a=await(await d_(i)).text();r.value=a}catch{r.value=""}}),qn(r,async o=>{const a=new Blob([o],{type:"text/plain"});await xa(i,a)}),Vn(()=>{const o=async a=>{if(!a.clipboardData)return;const l=a.clipboardData.items;for(const c of l)if(c.type.startsWith("image/")){a.preventDefault();const u=c.getAsFile();if(!u)return;const f=di(_i,`images/${Date.now()}-${u.name}`);await xa(f,u);const h=await Jc(f),g=s.value;if(!g)return;const _=r.value.substring(0,g.selectionStart),k=r.value.substring(g.selectionEnd),O=`![image](${h})`;r.value=`${_}${O}
${k}`,Ni(()=>{g.focus(),g.selectionStart=g.selectionEnd=_.length+O.length+1})}};window.addEventListener("paste",o),Hr(()=>{window.removeEventListener("paste",o)})}),(o,a)=>Ch((ur(),Bi("textarea",{"onUpdate:modelValue":a[0]||(a[0]=l=>r.value=l),class:"fullscreen-editor",ref_key:"editorRef",ref:s},null,512)),[[rd,r.value]])}}),vv=ms(bv,[["__scopeId","data-v-21280338"]]);function ao(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var nn=ao();function xu(t){nn=t}var Qn={exec:()=>null};function J(t,e=""){let n=typeof t=="string"?t:t.source;const r={replace:(s,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(ke.caret,"$1"),n=n.replace(s,o),r},getRegex:()=>new RegExp(n,e)};return r}var ke={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},yv=/^(?:[ \t]*(?:\n|$))+/,wv=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,kv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,br=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ev=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,lo=/(?:[*+-]|\d{1,9}[.)])/,Cu=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Au=J(Cu).replace(/bull/g,lo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Iv=J(Cu).replace(/bull/g,lo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),co=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Tv=/^[^\n]+/,uo=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Sv=J(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",uo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Rv=J(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,lo).getRegex(),ys="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ho=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,xv=J("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ho).replace("tag",ys).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Pu=J(co).replace("hr",br).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ys).getRegex(),Cv=J(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Pu).getRegex(),fo={blockquote:Cv,code:wv,def:Sv,fences:kv,heading:Ev,hr:br,html:xv,lheading:Au,list:Rv,newline:yv,paragraph:Pu,table:Qn,text:Tv},qa=J("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",br).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ys).getRegex(),Av={...fo,lheading:Iv,table:qa,paragraph:J(co).replace("hr",br).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",qa).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ys).getRegex()},Pv={...fo,html:J(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ho).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Qn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:J(co).replace("hr",br).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Au).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ov=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Dv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ou=/^( {2,}|\\)\n(?!\s*$)/,Nv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ws=/[\p{P}\p{S}]/u,po=/[\s\p{P}\p{S}]/u,Du=/[^\s\p{P}\p{S}]/u,Lv=J(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,po).getRegex(),Nu=/(?!~)[\p{P}\p{S}]/u,Mv=/(?!~)[\s\p{P}\p{S}]/u,Uv=/(?:[^\s\p{P}\p{S}]|~)/u,$v=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Lu=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Bv=J(Lu,"u").replace(/punct/g,ws).getRegex(),Fv=J(Lu,"u").replace(/punct/g,Nu).getRegex(),Mu="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Hv=J(Mu,"gu").replace(/notPunctSpace/g,Du).replace(/punctSpace/g,po).replace(/punct/g,ws).getRegex(),jv=J(Mu,"gu").replace(/notPunctSpace/g,Uv).replace(/punctSpace/g,Mv).replace(/punct/g,Nu).getRegex(),zv=J("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Du).replace(/punctSpace/g,po).replace(/punct/g,ws).getRegex(),Vv=J(/\\(punct)/,"gu").replace(/punct/g,ws).getRegex(),Wv=J(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),qv=J(ho).replace("(?:-->|$)","-->").getRegex(),Kv=J("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",qv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Qr=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Gv=J(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Qr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Uu=J(/^!?\[(label)\]\[(ref)\]/).replace("label",Qr).replace("ref",uo).getRegex(),$u=J(/^!?\[(ref)\](?:\[\])?/).replace("ref",uo).getRegex(),Jv=J("reflink|nolink(?!\\()","g").replace("reflink",Uu).replace("nolink",$u).getRegex(),go={_backpedal:Qn,anyPunctuation:Vv,autolink:Wv,blockSkip:$v,br:Ou,code:Dv,del:Qn,emStrongLDelim:Bv,emStrongRDelimAst:Hv,emStrongRDelimUnd:zv,escape:Ov,link:Gv,nolink:$u,punctuation:Lv,reflink:Uu,reflinkSearch:Jv,tag:Kv,text:Nv,url:Qn},Xv={...go,link:J(/^!?\[(label)\]\((.*?)\)/).replace("label",Qr).getRegex(),reflink:J(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Qr).getRegex()},bi={...go,emStrongRDelimAst:jv,emStrongLDelim:Fv,url:J(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Zv={...bi,br:J(Ou).replace("{2,}","*").getRegex(),text:J(bi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Sr={normal:fo,gfm:Av,pedantic:Pv},Ln={normal:go,gfm:bi,breaks:Zv,pedantic:Xv},Yv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ka=t=>Yv[t];function Xe(t,e){if(e){if(ke.escapeTest.test(t))return t.replace(ke.escapeReplace,Ka)}else if(ke.escapeTestNoEncode.test(t))return t.replace(ke.escapeReplaceNoEncode,Ka);return t}function Ga(t){try{t=encodeURI(t).replace(ke.percentDecode,"%")}catch{return null}return t}function Ja(t,e){var i;const n=t.replace(ke.findPipe,(o,a,l)=>{let c=!1,u=a;for(;--u>=0&&l[u]==="\\";)c=!c;return c?"|":" |"}),r=n.split(ke.splitPipe);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!((i=r.at(-1))!=null&&i.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(ke.slashPipe,"|");return r}function Mn(t,e,n){const r=t.length;if(r===0)return"";let s=0;for(;s<r&&t.charAt(r-s-1)===e;)s++;return t.slice(0,r-s)}function Qv(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function Xa(t,e,n,r,s){const i=e.href,o=e.title||null,a=t[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;const l={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:o,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,l}function ey(t,e,n){const r=t.match(n.other.indentCodeCompensation);if(r===null)return e;const s=r[1];return e.split(`
`).map(i=>{const o=i.match(n.other.beginningSpace);if(o===null)return i;const[a]=o;return a.length>=s.length?i.slice(s.length):i}).join(`
`)}var es=class{constructor(t){te(this,"options");te(this,"rules");te(this,"lexer");this.options=t||nn}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Mn(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],r=ey(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){const r=Mn(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Mn(e[0],`
`)}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){let n=Mn(e[0],`
`).split(`
`),r="",s="";const i=[];for(;n.length>0;){let o=!1;const a=[];let l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))a.push(n[l]),o=!0;else if(!o)a.push(n[l]);else break;n=n.slice(l);const c=a.join(`
`),u=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${c}`:c,s=s?`${s}
${u}`:u;const f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,i,!0),this.lexer.state.top=f,n.length===0)break;const h=i.at(-1);if((h==null?void 0:h.type)==="code")break;if((h==null?void 0:h.type)==="blockquote"){const g=h,_=g.raw+`
`+n.join(`
`),k=this.blockquote(_);i[i.length-1]=k,r=r.substring(0,r.length-g.raw.length)+k.raw,s=s.substring(0,s.length-g.text.length)+k.text;break}else if((h==null?void 0:h.type)==="list"){const g=h,_=g.raw+`
`+n.join(`
`),k=this.list(_);i[i.length-1]=k,r=r.substring(0,r.length-h.raw.length)+k.raw,s=s.substring(0,s.length-g.raw.length)+k.raw,n=_.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:s}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let o=!1;for(;t;){let l=!1,c="",u="";if(!(e=i.exec(t))||this.rules.block.hr.test(t))break;c=e[0],t=t.substring(c.length);let f=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,D=>" ".repeat(3*D.length)),h=t.split(`
`,1)[0],g=!f.trim(),_=0;if(this.options.pedantic?(_=2,u=f.trimStart()):g?_=e[1].length+1:(_=e[2].search(this.rules.other.nonSpaceChar),_=_>4?1:_,u=f.slice(_),_+=e[1].length),g&&this.rules.other.blankLine.test(h)&&(c+=h+`
`,t=t.substring(h.length+1),l=!0),!l){const D=this.rules.other.nextBulletRegex(_),R=this.rules.other.hrRegex(_),C=this.rules.other.fencesBeginRegex(_),I=this.rules.other.headingBeginRegex(_),j=this.rules.other.htmlBeginRegex(_);for(;t;){const X=t.split(`
`,1)[0];let z;if(h=X,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),z=h):z=h.replace(this.rules.other.tabCharGlobal,"    "),C.test(h)||I.test(h)||j.test(h)||D.test(h)||R.test(h))break;if(z.search(this.rules.other.nonSpaceChar)>=_||!h.trim())u+=`
`+z.slice(_);else{if(g||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||C.test(f)||I.test(f)||R.test(f))break;u+=`
`+h}!g&&!h.trim()&&(g=!0),c+=X+`
`,t=t.substring(X.length+1),f=z.slice(_)}}s.loose||(o?s.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(o=!0));let k=null,O;this.options.gfm&&(k=this.rules.other.listIsTask.exec(u),k&&(O=k[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:c,task:!!k,checked:O,loose:!1,text:u,tokens:[]}),s.raw+=c}const a=s.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let l=0;l<s.items.length;l++)if(this.lexer.state.top=!1,s.items[l].tokens=this.lexer.blockTokens(s.items[l].text,[]),!s.loose){const c=s.items[l].tokens.filter(f=>f.type==="space"),u=c.length>0&&c.some(f=>this.rules.other.anyLine.test(f.raw));s.loose=u}if(s.loose)for(let l=0;l<s.items.length;l++)s.items[l].loose=!0;return s}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:r,title:s}}}table(t){var o;const e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const n=Ja(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(o=e[3])!=null&&o.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const a of r)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<n.length;a++)i.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:i.align[a]});for(const a of s)i.rows.push(Ja(a,i.header.length).map((l,c)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:i.align[c]})));return i}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=Mn(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=Qv(e[2],"()");if(i===-2)return;if(i>-1){const a=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],s=i[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Xa(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){const r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return Xa(n,s,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...r[0]].length-1;let o,a,l=i,c=0;const u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*t.length+i);(r=u.exec(e))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(a=[...o].length,r[3]||r[4]){l+=a;continue}else if((r[5]||r[6])&&i%3&&!((i+a)%3)){c+=a;continue}if(l-=a,l>0)continue;a=Math.min(a,a+l+c);const f=[...r[0]][0].length,h=t.slice(0,i+r.index+f+a);if(Math.min(i,a)%2){const _=h.slice(1,-1);return{type:"em",raw:h,text:_,tokens:this.lexer.inlineTokens(_)}}const g=h.slice(2,-2);return{type:"strong",raw:h,text:g,tokens:this.lexer.inlineTokens(g)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let i;do i=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(i!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){const n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},gt=class vi{constructor(e){te(this,"tokens");te(this,"options");te(this,"state");te(this,"tokenizer");te(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||nn,this.options.tokenizer=this.options.tokenizer||new es,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:ke,block:Sr.normal,inline:Ln.normal};this.options.pedantic?(n.block=Sr.pedantic,n.inline=Ln.pedantic):this.options.gfm&&(n.block=Sr.gfm,this.options.breaks?n.inline=Ln.breaks:n.inline=Ln.gfm),this.tokenizer.rules=n}static get rules(){return{block:Sr,inline:Ln}}static lex(e,n){return new vi(n).lex(e)}static lexInline(e,n){return new vi(n).inlineTokens(e)}lex(e){e=e.replace(ke.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){var s,i,o;for(this.options.pedantic&&(e=e.replace(ke.tabCharGlobal,"    ").replace(ke.spaceLine,""));e;){let a;if((i=(s=this.options.extensions)==null?void 0:s.block)!=null&&i.some(c=>(a=c.call({lexer:this},e,n))?(e=e.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.space(e)){e=e.substring(a.raw.length);const c=n.at(-1);a.raw.length===1&&c!==void 0?c.raw+=`
`:n.push(a);continue}if(a=this.tokenizer.code(e)){e=e.substring(a.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.at(-1).src=c.text):n.push(a);continue}if(a=this.tokenizer.fences(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.heading(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.hr(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.blockquote(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.list(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.html(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.def(e)){e=e.substring(a.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="paragraph"||(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.raw,this.inlineQueue.at(-1).src=c.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.lheading(e)){e=e.substring(a.raw.length),n.push(a);continue}let l=e;if((o=this.options.extensions)!=null&&o.startBlock){let c=1/0;const u=e.slice(1);let f;this.options.extensions.startBlock.forEach(h=>{f=h.call({lexer:this},u),typeof f=="number"&&f>=0&&(c=Math.min(c,f))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(this.state.top&&(a=this.tokenizer.paragraph(l))){const c=n.at(-1);r&&(c==null?void 0:c.type)==="paragraph"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(a),r=l.length!==e.length,e=e.substring(a.raw.length);continue}if(a=this.tokenizer.text(e)){e=e.substring(a.raw.length);const c=n.at(-1);(c==null?void 0:c.type)==="text"?(c.raw+=`
`+a.raw,c.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(a);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var a,l,c;let r=e,s=null;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)u.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,o="";for(;e;){i||(o=""),i=!1;let u;if((l=(a=this.options.extensions)==null?void 0:a.inline)!=null&&l.some(h=>(u=h.call({lexer:this},e,n))?(e=e.substring(u.raw.length),n.push(u),!0):!1))continue;if(u=this.tokenizer.escape(e)){e=e.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.tag(e)){e=e.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.link(e)){e=e.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(u.raw.length);const h=n.at(-1);u.type==="text"&&(h==null?void 0:h.type)==="text"?(h.raw+=u.raw,h.text+=u.text):n.push(u);continue}if(u=this.tokenizer.emStrong(e,r,o)){e=e.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.codespan(e)){e=e.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.br(e)){e=e.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.del(e)){e=e.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.autolink(e)){e=e.substring(u.raw.length),n.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(e))){e=e.substring(u.raw.length),n.push(u);continue}let f=e;if((c=this.options.extensions)!=null&&c.startInline){let h=1/0;const g=e.slice(1);let _;this.options.extensions.startInline.forEach(k=>{_=k.call({lexer:this},g),typeof _=="number"&&_>=0&&(h=Math.min(h,_))}),h<1/0&&h>=0&&(f=e.substring(0,h+1))}if(u=this.tokenizer.inlineText(f)){e=e.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(o=u.raw.slice(-1)),i=!0;const h=n.at(-1);(h==null?void 0:h.type)==="text"?(h.raw+=u.raw,h.text+=u.text):n.push(u);continue}if(e){const h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return n}},ts=class{constructor(t){te(this,"options");te(this,"parser");this.options=t||nn}space(t){return""}code({text:t,lang:e,escaped:n}){var i;const r=(i=(e||"").match(ke.notSpaceStart))==null?void 0:i[0],s=t.replace(ke.endingNewline,"")+`
`;return r?'<pre><code class="language-'+Xe(r)+'">'+(n?s:Xe(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:Xe(s,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){const e=t.ordered,n=t.start;let r="";for(let o=0;o<t.items.length;o++){const a=t.items[o];r+=this.listitem(a)}const s=e?"ol":"ul",i=e&&n!==1?' start="'+n+'"':"";return"<"+s+i+`>
`+r+"</"+s+`>
`}listitem(t){var n;let e="";if(t.task){const r=this.checkbox({checked:!!t.checked});t.loose?((n=t.tokens[0])==null?void 0:n.type)==="paragraph"?(t.tokens[0].text=r+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=r+" "+Xe(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):e+=r+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let s=0;s<t.header.length;s++)n+=this.tablecell(t.header[s]);e+=this.tablerow({text:n});let r="";for(let s=0;s<t.rows.length;s++){const i=t.rows[s];n="";for(let o=0;o<i.length;o++)n+=this.tablecell(i[o]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){const e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Xe(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){const r=this.parser.parseInline(n),s=Ga(t);if(s===null)return r;t=s;let i='<a href="'+t+'"';return e&&(i+=' title="'+Xe(e)+'"'),i+=">"+r+"</a>",i}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));const s=Ga(t);if(s===null)return Xe(n);t=s;let i=`<img src="${t}" alt="${n}"`;return e&&(i+=` title="${Xe(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Xe(t.text)}},mo=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},mt=class yi{constructor(e){te(this,"options");te(this,"renderer");te(this,"textRenderer");this.options=e||nn,this.options.renderer=this.options.renderer||new ts,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new mo}static parse(e,n){return new yi(n).parse(e)}static parseInline(e,n){return new yi(n).parseInline(e)}parse(e,n=!0){var s,i;let r="";for(let o=0;o<e.length;o++){const a=e[o];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[a.type]){const c=a,u=this.options.extensions.renderers[c.type].call({parser:this},c);if(u!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){r+=u||"";continue}}const l=a;switch(l.type){case"space":{r+=this.renderer.space(l);continue}case"hr":{r+=this.renderer.hr(l);continue}case"heading":{r+=this.renderer.heading(l);continue}case"code":{r+=this.renderer.code(l);continue}case"table":{r+=this.renderer.table(l);continue}case"blockquote":{r+=this.renderer.blockquote(l);continue}case"list":{r+=this.renderer.list(l);continue}case"html":{r+=this.renderer.html(l);continue}case"paragraph":{r+=this.renderer.paragraph(l);continue}case"text":{let c=l,u=this.renderer.text(c);for(;o+1<e.length&&e[o+1].type==="text";)c=e[++o],u+=`
`+this.renderer.text(c);n?r+=this.renderer.paragraph({type:"paragraph",raw:u,text:u,tokens:[{type:"text",raw:u,text:u,escaped:!0}]}):r+=u;continue}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}parseInline(e,n=this.renderer){var s,i;let r="";for(let o=0;o<e.length;o++){const a=e[o];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[a.type]){const c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=c||"";continue}}const l=a;switch(l.type){case"escape":{r+=n.text(l);break}case"html":{r+=n.html(l);break}case"link":{r+=n.link(l);break}case"image":{r+=n.image(l);break}case"strong":{r+=n.strong(l);break}case"em":{r+=n.em(l);break}case"codespan":{r+=n.codespan(l);break}case"br":{r+=n.br(l);break}case"del":{r+=n.del(l);break}case"text":{r+=n.text(l);break}default:{const c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return r}},Ws,Lr=(Ws=class{constructor(t){te(this,"options");te(this,"block");this.options=t||nn}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?gt.lex:gt.lexInline}provideParser(){return this.block?mt.parse:mt.parseInline}},te(Ws,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Ws),ty=class{constructor(...t){te(this,"defaults",ao());te(this,"options",this.setOptions);te(this,"parse",this.parseMarkdown(!0));te(this,"parseInline",this.parseMarkdown(!1));te(this,"Parser",mt);te(this,"Renderer",ts);te(this,"TextRenderer",mo);te(this,"Lexer",gt);te(this,"Tokenizer",es);te(this,"Hooks",Lr);this.use(...t)}walkTokens(t,e){var r,s;let n=[];for(const i of t)switch(n=n.concat(e.call(this,i)),i.type){case"table":{const o=i;for(const a of o.header)n=n.concat(this.walkTokens(a.tokens,e));for(const a of o.rows)for(const l of a)n=n.concat(this.walkTokens(l.tokens,e));break}case"list":{const o=i;n=n.concat(this.walkTokens(o.items,e));break}default:{const o=i;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[o.type]?this.defaults.extensions.childTokens[o.type].forEach(a=>{const l=o[a].flat(1/0);n=n.concat(this.walkTokens(l,e))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const i=e.renderers[s.name];i?e.renderers[s.name]=function(...o){let a=s.renderer.apply(this,o);return a===!1&&(a=i.apply(this,o)),a}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=e[s.level];i?i.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),n.renderer){const s=this.defaults.renderer||new ts(this.defaults);for(const i in n.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const o=i,a=n.renderer[o],l=s[o];s[o]=(...c)=>{let u=a.apply(s,c);return u===!1&&(u=l.apply(s,c)),u||""}}r.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new es(this.defaults);for(const i in n.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const o=i,a=n.tokenizer[o],l=s[o];s[o]=(...c)=>{let u=a.apply(s,c);return u===!1&&(u=l.apply(s,c)),u}}r.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new Lr;for(const i in n.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const o=i,a=n.hooks[o],l=s[o];Lr.passThroughHooks.has(i)?s[o]=c=>{if(this.defaults.async)return Promise.resolve(a.call(s,c)).then(f=>l.call(s,f));const u=a.call(s,c);return l.call(s,u)}:s[o]=(...c)=>{let u=a.apply(s,c);return u===!1&&(u=l.apply(s,c)),u}}r.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(o){let a=[];return a.push(i.call(this,o)),s&&(a=a.concat(s.call(this,o))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return gt.lex(t,e??this.defaults)}parser(t,e){return mt.parse(t,e??this.defaults)}parseMarkdown(t){return(n,r)=>{const s={...r},i={...this.defaults,...s},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=t);const a=i.hooks?i.hooks.provideLexer():t?gt.lex:gt.lexInline,l=i.hooks?i.hooks.provideParser():t?mt.parse:mt.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(c=>a(c,i)).then(c=>i.hooks?i.hooks.processAllTokens(c):c).then(c=>i.walkTokens?Promise.all(this.walkTokens(c,i.walkTokens)).then(()=>c):c).then(c=>l(c,i)).then(c=>i.hooks?i.hooks.postprocess(c):c).catch(o);try{i.hooks&&(n=i.hooks.preprocess(n));let c=a(n,i);i.hooks&&(c=i.hooks.processAllTokens(c)),i.walkTokens&&this.walkTokens(c,i.walkTokens);let u=l(c,i);return i.hooks&&(u=i.hooks.postprocess(u)),u}catch(c){return o(c)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const r="<p>An error occurred:</p><pre>"+Xe(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},Qt=new ty;function Y(t,e){return Qt.parse(t,e)}Y.options=Y.setOptions=function(t){return Qt.setOptions(t),Y.defaults=Qt.defaults,xu(Y.defaults),Y};Y.getDefaults=ao;Y.defaults=nn;Y.use=function(...t){return Qt.use(...t),Y.defaults=Qt.defaults,xu(Y.defaults),Y};Y.walkTokens=function(t,e){return Qt.walkTokens(t,e)};Y.parseInline=Qt.parseInline;Y.Parser=mt;Y.parser=mt.parse;Y.Renderer=ts;Y.TextRenderer=mo;Y.Lexer=gt;Y.lexer=gt.lex;Y.Tokenizer=es;Y.Hooks=Lr;Y.parse=Y;Y.options;Y.setOptions;Y.use;Y.walkTokens;Y.parseInline;mt.parse;gt.lex;const ny=["innerHTML"],ry=tn({__name:"Post",setup(t){const e=Mr(""),n=gc();return Vn(async()=>{const r=n.params.id;try{const s=di(_i,`posts/${r}.md`),i=await Jc(s),a=await(await fetch(i)).text();e.value=await Y(a)}catch{e.value="<p>❌</p>"}}),(r,s)=>(ur(),Bi("div",{class:"markdown-body",innerHTML:e.value},null,8,ny))}}),sy=ms(ry,[["__scopeId","data-v-ec29d4d5"]]),iy=[{path:"/",name:"Home",component:_v},{path:"/writer/:id",name:"Writer",component:vv},{path:"/posts/:id",name:"Post",component:sy}],oy=up({history:Fd(),routes:iy});od(dp).use(oy).mount("#app");

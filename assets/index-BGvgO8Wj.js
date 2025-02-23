var vc=Object.defineProperty;var Ia=o=>{throw TypeError(o)};var bc=(o,e,t)=>e in o?vc(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var ut=(o,e,t)=>bc(o,typeof e!="symbol"?e+"":e,t),Js=(o,e,t)=>e.has(o)||Ia("Cannot "+t);var zi=(o,e,t)=>(Js(o,e,"read from private field"),t?t.call(o):e.get(o)),Qs=(o,e,t)=>e.has(o)?Ia("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,t),Fa=(o,e,t,n)=>(Js(o,e,"write to private field"),n?n.call(o,t):e.set(o,t),t),je=(o,e,t)=>(Js(o,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();class Je{static getDotProduct(e,t,n,i){return e*n+t*i}static getMagnitudeSquared(e,t){return Je.getDotProduct(e,t,e,t)}static getMagnitude(e,t){return Math.sqrt(Je.getMagnitudeSquared(e,t))}static getNormalized(e,t){if(e===0&&t===0)return[e,t];const n=1/Je.getMagnitude(e,t);return[e*n,t*n]}static getFromAngle(e){return[Math.cos(e),Math.sin(e)]}static getRandom(e=1){const t=Je.getFromAngle(Math.random()*Math.PI*2),n=Math.random()*e;return[t[0]*n,t[1]*n]}static lerp(e,t,n){return e+n*(t-e)}static v3arraylerp(e,t,n){return[this.lerp(e[0],t[0],n),this.lerp(e[1],t[1],n),this.lerp(e[2],t[2],n)]}}const wc="modulepreload",Mc=function(o){return"https://tcbarker.github.io/TPT/"+o},ka={},Sc=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=Mc(l),l in ka)return;ka[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":wc,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="145",Tc=0,Na=1,Ec=2,Sl=1,Tl=2,Ki=3,Kn=0,Pt=1,cn=2,Cn=0,bi=1,Ua=2,Oa=3,Ba=4,Ac=5,yi=100,Cc=101,Lc=102,za=103,Ga=104,Rc=200,Dc=201,Pc=202,Ic=203,El=204,Al=205,Fc=206,kc=207,Nc=208,Uc=209,Oc=210,Bc=0,zc=1,Gc=2,Or=3,Vc=4,Hc=5,Wc=6,qc=7,qs=0,jc=1,Xc=2,dn=0,Kc=1,Yc=2,Zc=3,$c=4,Jc=5,Cl=300,Mi=301,Si=302,Br=303,zr=304,js=306,Ti=1e3,bt=1001,Vs=1002,ht=1003,Gr=1004,Vr=1005,st=1006,Ll=1007,Qn=1008,Yn=1009,Qc=1010,eh=1011,Rl=1012,th=1013,Gn=1014,zt=1015,hn=1016,nh=1017,ih=1018,wi=1020,sh=1021,rh=1022,Gt=1023,ah=1024,oh=1025,Wn=1026,Ei=1027,lh=1028,ch=1029,hh=1030,uh=1031,dh=1033,er=33776,tr=33777,nr=33778,ir=33779,Va=35840,Ha=35841,Wa=35842,qa=35843,fh=36196,ja=37492,Xa=37496,Ka=37808,Ya=37809,Za=37810,$a=37811,Ja=37812,Qa=37813,eo=37814,to=37815,no=37816,io=37817,so=37818,ro=37819,ao=37820,oo=37821,lo=36492,Qi=2300,Ai=2301,sr=2302,co=2400,ho=2401,uo=2402,ph=2500,mh=1,Dl=2,Ln=3e3,Ve=3001,gh=3200,_h=3201,Ri=0,xh=1,an="srgb",Vn="srgb-linear",rr=7680,yh=519,Hr=35044,fo="300 es",Wr=1035;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let po=1234567;const Zi=Math.PI/180,es=180/Math.PI;function Ht(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[o&255]+dt[o>>8&255]+dt[o>>16&255]+dt[o>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function pt(o,e,t){return Math.max(e,Math.min(t,o))}function fa(o,e){return(o%e+e)%e}function vh(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function bh(o,e,t){return o!==e?(t-o)/(e-o):0}function $i(o,e,t){return(1-t)*o+t*e}function wh(o,e,t,n){return $i(o,e,1-Math.exp(-t*n))}function Mh(o,e=1){return e-Math.abs(fa(o,e*2)-e)}function Sh(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Th(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Eh(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Ah(o,e){return o+Math.random()*(e-o)}function Ch(o){return o*(.5-Math.random())}function Lh(o){o!==void 0&&(po=o);let e=po+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rh(o){return o*Zi}function Dh(o){return o*es}function qr(o){return(o&o-1)===0&&o!==0}function Pl(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Hs(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Ph(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),p=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":o.set(a*h,l*u,l*d,a*c);break;case"YZY":o.set(l*d,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*d,a*h,a*c);break;case"XZX":o.set(a*h,l*g,l*p,a*c);break;case"YXY":o.set(l*p,a*h,l*g,a*c);break;case"ZYZ":o.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xe(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Ih=Object.freeze({__proto__:null,DEG2RAD:Zi,RAD2DEG:es,generateUUID:Ht,clamp:pt,euclideanModulo:fa,mapLinear:vh,inverseLerp:bh,lerp:$i,damp:wh,pingpong:Mh,smoothstep:Sh,smootherstep:Th,randInt:Eh,randFloat:Ah,randFloatSpread:Ch,seededRandom:Lh,degToRad:Rh,radToDeg:Dh,isPowerOfTwo:qr,ceilPowerOfTwo:Pl,floorPowerOfTwo:Hs,setQuaternionFromProperEuler:Ph,normalize:Xe,denormalize:un});class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],m=i[0],f=i[3],_=i[6],y=i[1],v=i[4],b=i[7],w=i[2],E=i[5],C=i[8];return s[0]=r*m+a*y+l*w,s[3]=r*f+a*v+l*E,s[6]=r*_+a*b+l*C,s[1]=c*m+h*y+u*w,s[4]=c*f+h*v+u*E,s[7]=c*_+h*b+u*C,s[2]=d*m+p*y+g*w,s[5]=d*f+p*v+g*E,s[8]=d*_+p*b+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-n*s*h+n*a*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*r-a*c,d=a*l-h*s,p=c*s-r*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(i*c-h*n)*m,e[2]=(a*n-i*r)*m,e[3]=d*m,e[4]=(h*t-i*l)*m,e[5]=(i*s-a*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(r*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],r=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*r+n*c,i[6]=t*a+n*h,i[1]=-n*s+t*l,i[4]=-n*r+t*c,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Il(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ts(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function qn(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Us(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const ar={[an]:{[Vn]:qn},[Vn]:{[an]:Us}},kt={legacyMode:!0,get workingColorSpace(){return Vn},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(ar[e]&&ar[e][t]!==void 0){const n=ar[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},it={r:0,g:0,b:0},Nt={h:0,s:0,l:0},cs={h:0,s:0,l:0};function or(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function hs(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Vn){return this.r=e,this.g=t,this.b=n,kt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Vn){if(e=fa(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=or(r,s,e+1/3),this.g=or(r,s,e),this.b=or(r,s,e-1/3)}return kt.toWorkingColorSpace(this,i),this}setStyle(e,t=an){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,kt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,kt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,kt.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,kt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=an){const n=Fl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return kt.fromWorkingColorSpace(hs(this,it),e),pt(it.r*255,0,255)<<16^pt(it.g*255,0,255)<<8^pt(it.b*255,0,255)<<0}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vn){kt.fromWorkingColorSpace(hs(this,it),t);const n=it.r,i=it.g,s=it.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Vn){return kt.fromWorkingColorSpace(hs(this,it),t),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=an){return kt.fromWorkingColorSpace(hs(this,it),e),e!==an?`color(${e} ${it.r} ${it.g} ${it.b})`:`rgb(${it.r*255|0},${it.g*255|0},${it.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Nt),Nt.h+=e,Nt.s+=t,Nt.l+=n,this.setHSL(Nt.h,Nt.s,Nt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nt),e.getHSL(cs);const n=$i(Nt.h,cs.h,t),i=$i(Nt.s,cs.s,t),s=$i(Nt.l,cs.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}pe.NAMES=Fl;let si;class kl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=ts("canvas")),si.width=e.width,si.height=e.height;const n=si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ts("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=qn(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Nl{constructor(e=null){this.isSource=!0,this.uuid=Ht(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(lr(i[r].image)):s.push(lr(i[r]))}else s=lr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function lr(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?kl.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fh=0;class vt extends Di{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=bt,i=bt,s=st,r=Qn,a=Gt,l=Yn,c=1,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Ht(),this.name="",this.source=new Nl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case bt:e.x=e.x<0?0:1;break;case Vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case bt:e.y=e.y<0?0:1;break;case Vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=Cl;class Ke{constructor(e=0,t=0,n=0,i=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],m=l[2],f=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(p+1)/2,w=(_+1)/2,E=(h+d)/4,C=(u+m)/4,x=(g+f)/4;return v>b&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=E/n,s=C/n):b>w?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=E/i,s=x/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=C/s,i=x/s),this.set(n,i,s,t),this}let y=Math.sqrt((f-g)*(f-g)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(u-m)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zn extends Di{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:st,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ul extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kh extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],p=s[r+1],g=s[r+2],m=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(u!==m||l!==d||c!==p||h!==g){let f=1-a;const _=l*d+c*p+h*g+u*m,y=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const w=Math.sqrt(v),E=Math.atan2(w,_*y);f=Math.sin(f*E)/w,a=Math.sin(a*E)/w}const b=a*y;if(l=l*f+d*b,c=c*f+p*b,h=h*f+g*b,u=u*f+m*b,f===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],d=s[r+1],p=s[r+2],g=s[r+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(r-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(r-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-n*c,this._z=s*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=l*t+r*i-a*n,h=l*n+a*t-s*i,u=l*i+s*n-r*t,d=-s*t-r*n-a*i;return this.x=c*l+d*-s+h*-a-u*-r,this.y=h*l+d*-r+u*-s-c*-a,this.z=u*l+d*-a+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cr.copy(this).projectOnVector(e),this.sub(cr)}reflect(e){return this.sub(cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cr=new L,mo=new ei;class Pi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>r&&(r=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,r,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>r&&(r=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,r,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,a=s.count;r<a;r++)In.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(In)}else n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox),hr.applyMatrix4(e.matrixWorld),this.union(hr);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),us.subVectors(this.max,Gi),ri.subVectors(e.a,Gi),ai.subVectors(e.b,Gi),oi.subVectors(e.c,Gi),gn.subVectors(ai,ri),_n.subVectors(oi,ai),Fn.subVectors(ri,oi);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Fn.z,Fn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Fn.z,0,-Fn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Fn.y,Fn.x,0];return!ur(t,ri,ai,oi,us)||(t=[1,0,0,0,1,0,0,0,1],!ur(t,ri,ai,oi,us))?!1:(ds.crossVectors(gn,_n),t=[ds.x,ds.y,ds.z],ur(t,ri,ai,oi,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return In.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(In).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($t),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $t=[new L,new L,new L,new L,new L,new L,new L,new L],In=new L,hr=new Pi,ri=new L,ai=new L,oi=new L,gn=new L,_n=new L,Fn=new L,Gi=new L,us=new L,ds=new L,kn=new L;function ur(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){kn.fromArray(o,s);const a=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),l=e.dot(kn),c=t.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Nh=new Pi,go=new L,fs=new L,dr=new L;class Ii{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(dr.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?fs.set(0,0,1).multiplyScalar(e.radius):fs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(go.copy(e.center).add(fs)),this.expandByPoint(go.copy(e.center).sub(fs)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new L,fr=new L,ps=new L,xn=new L,pr=new L,ms=new L,mr=new L;class Xs{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.direction).multiplyScalar(t).add(this.origin),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fr.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(fr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(ps),a=xn.dot(this.direction),l=-xn.dot(ps),c=xn.lengthSq(),h=Math.abs(1-r*r);let u,d,p,g;if(h>0)if(u=r*l-a,d=r*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const m=1/h;u*=m,d*=m,p=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(ps).multiplyScalar(d).add(fr),p}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const n=Jt.dot(this.direction),i=Jt.dot(Jt)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,n,i,s){pr.subVectors(t,e),ms.subVectors(n,e),mr.crossVectors(pr,ms);let r=this.direction.dot(mr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;xn.subVectors(this.origin,e);const l=a*this.direction.dot(ms.crossVectors(xn,ms));if(l<0)return null;const c=a*this.direction.dot(pr.cross(xn));if(c<0||l+c>r)return null;const h=-a*xn.dot(mr);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,a,l,c,h,u,d,p,g,m,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=g,_[11]=m,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/li.setFromMatrixColumn(e,0).length(),s=1/li.setFromMatrixColumn(e,1).length(),r=1/li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,p=r*u,g=a*h,m=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,m=c*u;t[0]=d+m*a,t[4]=g*a-p,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=p*a-g,t[6]=m+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,m=c*u;t[0]=d-m*a,t[4]=-r*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=r*h,t[9]=m-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,p=r*u,g=a*h,m=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,p=r*c,g=a*l,m=a*c;t[0]=l*h,t[4]=m-d*u,t[8]=g*u+p,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-m*u}else if(e.order==="XZY"){const d=r*l,p=r*c,g=a*l,m=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=r*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uh,e,Oh)}lookAt(e,t,n){const i=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),yn.crossVectors(n,Tt),yn.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),yn.crossVectors(n,Tt)),yn.normalize(),gs.crossVectors(Tt,yn),i[0]=yn.x,i[4]=gs.x,i[8]=Tt.x,i[1]=yn.y,i[5]=gs.y,i[9]=Tt.y,i[2]=yn.z,i[6]=gs.z,i[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],m=n[6],f=n[10],_=n[14],y=n[3],v=n[7],b=n[11],w=n[15],E=i[0],C=i[4],x=i[8],T=i[12],P=i[1],O=i[5],Q=i[9],U=i[13],I=i[2],B=i[6],K=i[10],X=i[14],z=i[3],k=i[7],D=i[11],Y=i[15];return s[0]=r*E+a*P+l*I+c*z,s[4]=r*C+a*O+l*B+c*k,s[8]=r*x+a*Q+l*K+c*D,s[12]=r*T+a*U+l*X+c*Y,s[1]=h*E+u*P+d*I+p*z,s[5]=h*C+u*O+d*B+p*k,s[9]=h*x+u*Q+d*K+p*D,s[13]=h*T+u*U+d*X+p*Y,s[2]=g*E+m*P+f*I+_*z,s[6]=g*C+m*O+f*B+_*k,s[10]=g*x+m*Q+f*K+_*D,s[14]=g*T+m*U+f*X+_*Y,s[3]=y*E+v*P+b*I+w*z,s[7]=y*C+v*O+b*B+w*k,s[11]=y*x+v*Q+b*K+w*D,s[15]=y*T+v*U+b*X+w*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],m=e[7],f=e[11],_=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*p-n*l*p)+m*(+t*l*p-t*c*d+s*r*d-i*r*p+i*c*h-s*l*h)+f*(+t*c*u-t*a*p-s*r*u+n*r*p+s*a*h-n*c*h)+_*(-i*a*h-t*l*u+t*a*d+i*r*u-n*r*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],m=e[13],f=e[14],_=e[15],y=u*f*c-m*d*c+m*l*p-a*f*p-u*l*_+a*d*_,v=g*d*c-h*f*c-g*l*p+r*f*p+h*l*_-r*d*_,b=h*m*c-g*u*c+g*a*p-r*m*p-h*a*_+r*u*_,w=g*u*l-h*m*l-g*a*d+r*m*d+h*a*f-r*u*f,E=t*y+n*v+i*b+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=y*C,e[1]=(m*d*s-u*f*s-m*i*p+n*f*p+u*i*_-n*d*_)*C,e[2]=(a*f*s-m*l*s+m*i*c-n*f*c-a*i*_+n*l*_)*C,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*p-n*l*p)*C,e[4]=v*C,e[5]=(h*f*s-g*d*s+g*i*p-t*f*p-h*i*_+t*d*_)*C,e[6]=(g*l*s-r*f*s-g*i*c+t*f*c+r*i*_-t*l*_)*C,e[7]=(r*d*s-h*l*s+h*i*c-t*d*c-r*i*p+t*l*p)*C,e[8]=b*C,e[9]=(g*u*s-h*m*s-g*n*p+t*m*p+h*n*_-t*u*_)*C,e[10]=(r*m*s-g*a*s+g*n*c-t*m*c-r*n*_+t*a*_)*C,e[11]=(h*a*s-r*u*s-h*n*c+t*u*c+r*n*p-t*a*p)*C,e[12]=w*C,e[13]=(h*m*i-g*u*i+g*n*d-t*m*d-h*n*f+t*u*f)*C,e[14]=(g*a*i-r*m*i-g*n*l+t*m*l+r*n*f-t*a*f)*C,e[15]=(r*u*i-h*a*i+h*n*l-t*u*l-r*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,c=s*r,h=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,h=r+r,u=a+a,d=s*c,p=s*h,g=s*u,m=r*h,f=r*u,_=a*u,y=l*c,v=l*h,b=l*u,w=n.x,E=n.y,C=n.z;return i[0]=(1-(m+_))*w,i[1]=(p+b)*w,i[2]=(g-v)*w,i[3]=0,i[4]=(p-b)*E,i[5]=(1-(d+_))*E,i[6]=(f+y)*E,i[7]=0,i[8]=(g+v)*C,i[9]=(f-y)*C,i[10]=(1-(d+m))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=li.set(i[0],i[1],i[2]).length();const r=li.set(i[4],i[5],i[6]).length(),a=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ut.copy(this);const c=1/s,h=1/r,u=1/a;return Ut.elements[0]*=c,Ut.elements[1]*=c,Ut.elements[2]*=c,Ut.elements[4]*=h,Ut.elements[5]*=h,Ut.elements[6]*=h,Ut.elements[8]*=u,Ut.elements[9]*=u,Ut.elements[10]*=u,t.setFromRotationMatrix(Ut),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(r+s)/(r-s),p=-2*r*s/(r-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,r){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(r-s),u=(t+e)*l,d=(n+i)*c,p=(r+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const li=new L,Ut=new Ue,Uh=new L(0,0,0),Oh=new L(1,1,1),yn=new L,gs=new L,Tt=new L,_o=new Ue,xo=new ei;class rs{constructor(e=0,t=0,n=0,i=rs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-pt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _o.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_o,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xo.setFromEuler(this),this.setFromQuaternion(xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}rs.DefaultOrder="XYZ";rs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class pa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bh=0;const yo=new L,ci=new ei,Qt=new Ue,_s=new L,Vi=new L,zh=new L,Gh=new ei,vo=new L(1,0,0),bo=new L(0,1,0),wo=new L(0,0,1),Vh={type:"added"},Mo={type:"removed"};class Qe extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Ht(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DefaultUp.clone();const e=new L,t=new rs,n=new ei,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Dt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=Qe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qe.DefaultMatrixWorldAutoUpdate,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(vo,e)}rotateY(e){return this.rotateOnAxis(bo,e)}rotateZ(e){return this.rotateOnAxis(wo,e)}translateOnAxis(e,t){return yo.copy(e).applyQuaternion(this.quaternion),this.position.add(yo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vo,e)}translateY(e){return this.translateOnAxis(bo,e)}translateZ(e){return this.translateOnAxis(wo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_s.copy(e):_s.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(Vi,_s,this.up):Qt.lookAt(_s,Vi,this.up),this.quaternion.setFromRotationMatrix(Qt),i&&(Qt.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(Qt),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Mo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,zh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Gh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),p=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Qe.DefaultUp=new L(0,1,0);Qe.DefaultMatrixAutoUpdate=!0;Qe.DefaultMatrixWorldAutoUpdate=!0;const Ot=new L,en=new L,gr=new L,tn=new L,hi=new L,ui=new L,So=new L,_r=new L,xr=new L,yr=new L;class on{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ot.subVectors(e,t),i.cross(Ot);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ot.subVectors(i,t),en.subVectors(n,t),gr.subVectors(e,t);const r=Ot.dot(Ot),a=Ot.dot(en),l=Ot.dot(gr),c=en.dot(en),h=en.dot(gr),u=r*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,p=(c*l-a*h)*d,g=(r*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,tn),tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getUV(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,tn),l.set(0,0),l.addScaledVector(s,tn.x),l.addScaledVector(r,tn.y),l.addScaledVector(a,tn.z),l}static isFrontFacing(e,t,n,i){return Ot.subVectors(n,t),en.subVectors(e,t),Ot.cross(en).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Ot.cross(en).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return on.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;hi.subVectors(i,n),ui.subVectors(s,n),_r.subVectors(e,n);const l=hi.dot(_r),c=ui.dot(_r);if(l<=0&&c<=0)return t.copy(n);xr.subVectors(e,i);const h=hi.dot(xr),u=ui.dot(xr);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(hi,r);yr.subVectors(e,s);const p=hi.dot(yr),g=ui.dot(yr);if(g>=0&&p<=g)return t.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ui,a);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return So.subVectors(s,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(So,a);const _=1/(f+m+d);return r=m*_,a=d*_,t.copy(n).addScaledVector(hi,r).addScaledVector(ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Hh=0;class At extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Ht(),this.name="",this.type="Material",this.blending=bi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=El,this.blendDst=Al,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class An extends At{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new L,xs=new Ie;class wt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Hr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array),s=Xe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ol extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bl extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wh=0;const Rt=new Ue,vr=new Qe,di=new L,Et=new Pi,Hi=new Pi,ot=new L;class Ft extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Ht(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Il(e)?Bl:Ol)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,n){return Rt.makeTranslation(e,t,n),this.applyMatrix4(Rt),this}scale(e,t,n){return Rt.makeScale(e,t,n),this.applyMatrix4(Rt),this}lookAt(e){return vr.lookAt(e),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Et.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Et.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Et.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Et.min),this.boundingBox.expandByPoint(Et.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Et.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(Et.min,Hi.min),Et.expandByPoint(ot),ot.addVectors(Et.max,Hi.max),Et.expandByPoint(ot)):(Et.expandByPoint(Hi.min),Et.expandByPoint(Hi.max))}Et.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ot));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ot.fromBufferAttribute(a,c),l&&(di.fromBufferAttribute(e,c),ot.add(di)),i=Math.max(i,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let P=0;P<a;P++)c[P]=new L,h[P]=new L;const u=new L,d=new L,p=new L,g=new Ie,m=new Ie,f=new Ie,_=new L,y=new L;function v(P,O,Q){u.fromArray(i,P*3),d.fromArray(i,O*3),p.fromArray(i,Q*3),g.fromArray(r,P*2),m.fromArray(r,O*2),f.fromArray(r,Q*2),d.sub(u),p.sub(u),m.sub(g),f.sub(g);const U=1/(m.x*f.y-f.x*m.y);isFinite(U)&&(_.copy(d).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(U),y.copy(p).multiplyScalar(m.x).addScaledVector(d,-f.x).multiplyScalar(U),c[P].add(_),c[O].add(_),c[Q].add(_),h[P].add(y),h[O].add(y),h[Q].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let P=0,O=b.length;P<O;++P){const Q=b[P],U=Q.start,I=Q.count;for(let B=U,K=U+I;B<K;B+=3)v(n[B+0],n[B+1],n[B+2])}const w=new L,E=new L,C=new L,x=new L;function T(P){C.fromArray(s,P*3),x.copy(C);const O=c[P];w.copy(O),w.sub(C.multiplyScalar(C.dot(O))).normalize(),E.crossVectors(x,O);const U=E.dot(h[P])<0?-1:1;l[P*4]=w.x,l[P*4+1]=w.y,l[P*4+2]=w.z,l[P*4+3]=U}for(let P=0,O=b.length;P<O;++P){const Q=b[P],U=Q.start,I=Q.count;for(let B=U,K=U+I;B<K;B+=3)T(n[B+0]),T(n[B+1]),T(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,r=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),m=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,f),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let m=0,f=l.length;m<f;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*h;for(let _=0;_<h;_++)d[g++]=c[p++]}return new wt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const To=new Ue,fi=new Xs,br=new Ii,vn=new L,bn=new L,wn=new L,wr=new L,Mr=new L,Sr=new L,ys=new L,vs=new L,bs=new L,ws=new Ie,Ms=new Ie,Ss=new Ie,Tr=new L,Ts=new L;class Vt extends Qe{constructor(e=new Ft,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),e.ray.intersectsSphere(br)===!1)||(To.copy(s).invert(),fi.copy(e.ray).applyMatrix4(To),n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1))return;let r;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const _=p[m],y=i[_.materialIndex],v=Math.max(_.start,g.start),b=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let w=v,E=b;w<E;w+=3){const C=a.getX(w),x=a.getX(w+1),T=a.getX(w+2);r=Es(this,y,e,fi,l,c,h,u,d,C,x,T),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let _=m,y=f;_<y;_+=3){const v=a.getX(_),b=a.getX(_+1),w=a.getX(_+2);r=Es(this,i,e,fi,l,c,h,u,d,v,b,w),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const _=p[m],y=i[_.materialIndex],v=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let w=v,E=b;w<E;w+=3){const C=w,x=w+1,T=w+2;r=Es(this,y,e,fi,l,c,h,u,d,C,x,T),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let _=m,y=f;_<y;_+=3){const v=_,b=_+1,w=_+2;r=Es(this,i,e,fi,l,c,h,u,d,v,b,w),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function qh(o,e,t,n,i,s,r,a){let l;if(e.side===Pt?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side!==cn,a),l===null)return null;Ts.copy(a),Ts.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Ts);return c<t.near||c>t.far?null:{distance:c,point:Ts.clone(),object:o}}function Es(o,e,t,n,i,s,r,a,l,c,h,u){vn.fromBufferAttribute(i,c),bn.fromBufferAttribute(i,h),wn.fromBufferAttribute(i,u);const d=o.morphTargetInfluences;if(s&&d){ys.set(0,0,0),vs.set(0,0,0),bs.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const f=d[g],_=s[g];f!==0&&(wr.fromBufferAttribute(_,c),Mr.fromBufferAttribute(_,h),Sr.fromBufferAttribute(_,u),r?(ys.addScaledVector(wr,f),vs.addScaledVector(Mr,f),bs.addScaledVector(Sr,f)):(ys.addScaledVector(wr.sub(vn),f),vs.addScaledVector(Mr.sub(bn),f),bs.addScaledVector(Sr.sub(wn),f)))}vn.add(ys),bn.add(vs),wn.add(bs)}o.isSkinnedMesh&&(o.boneTransform(c,vn),o.boneTransform(h,bn),o.boneTransform(u,wn));const p=qh(o,e,t,n,vn,bn,wn,Tr);if(p){a&&(ws.fromBufferAttribute(a,c),Ms.fromBufferAttribute(a,h),Ss.fromBufferAttribute(a,u),p.uv=on.getUV(Tr,vn,bn,wn,ws,Ms,Ss,new Ie)),l&&(ws.fromBufferAttribute(l,c),Ms.fromBufferAttribute(l,h),Ss.fromBufferAttribute(l,u),p.uv2=on.getUV(Tr,vn,bn,wn,ws,Ms,Ss,new Ie));const g={a:c,b:h,c:u,normal:new L,materialIndex:0};on.getNormal(vn,bn,wn,g.normal),p.face=g}return p}class Fi extends Ft{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function g(m,f,_,y,v,b,w,E,C,x,T){const P=b/C,O=w/x,Q=b/2,U=w/2,I=E/2,B=C+1,K=x+1;let X=0,z=0;const k=new L;for(let D=0;D<K;D++){const Y=D*O-U;for(let $=0;$<B;$++){const Z=$*P-Q;k[m]=Z*y,k[f]=Y*v,k[_]=I,c.push(k.x,k.y,k.z),k[m]=0,k[f]=0,k[_]=E>0?1:-1,h.push(k.x,k.y,k.z),u.push($/C),u.push(1-D/x),X+=1}}for(let D=0;D<x;D++)for(let Y=0;Y<C;Y++){const $=d+Y+B*D,Z=d+Y+B*(D+1),oe=d+(Y+1)+B*(D+1),ve=d+(Y+1)+B*D;l.push($,Z,ve),l.push(Z,oe,ve),z+=6}a.addGroup(p,z,T),p+=z,d+=X}}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ci(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ft(o){const e={};for(let t=0;t<o.length;t++){const n=Ci(o[t]);for(const i in n)e[i]=n[i]}return e}function jh(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const Xh={clone:Ci,merge:ft};var Kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends At{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=jh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let zl=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class yt extends zl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pi=90,mi=1;class Zh extends Qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new yt(pi,mi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);const s=new yt(pi,mi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(-1,0,0)),this.add(s);const r=new yt(pi,mi,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new L(0,1,0)),this.add(r);const a=new yt(pi,mi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);const l=new yt(pi,mi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new yt(pi,mi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=dn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Gl extends vt{constructor(e,t,n,i,s,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Mi,super(e,t,n,i,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $h extends Zn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:st}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Fi(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:Cn});s.uniforms.tEquirect.value=t;const r=new Vt(i,s),a=t.minFilter;return t.minFilter===Qn&&(t.minFilter=st),new Zh(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Er=new L,Jh=new L,Qh=new Dt;class Un{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Er.subVectors(n,t).cross(Jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qh.getNormalMatrix(e),i=this.coplanarPoint(Er).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Ii,As=new L;class ma{constructor(e=new Un,t=new Un,n=new Un,i=new Un,s=new Un,r=new Un){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],p=n[9],g=n[10],m=n[11],f=n[12],_=n[13],y=n[14],v=n[15];return t[0].setComponents(a-i,u-l,m-d,v-f).normalize(),t[1].setComponents(a+i,u+l,m+d,v+f).normalize(),t[2].setComponents(a+s,u+c,m+p,v+_).normalize(),t[3].setComponents(a-s,u-c,m-p,v-_).normalize(),t[4].setComponents(a-r,u-h,m-g,v-y).normalize(),t[5].setComponents(a+r,u+h,m+g,v+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(As.x=i.normal.x>0?e.max.x:e.min.x,As.y=i.normal.y>0?e.max.y:e.min.y,As.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vl(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function eu(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,p=o.createBuffer();o.bindBuffer(h,p),o.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,p=h.updateRange;o.bindBuffer(u,c),p.count===-1?o.bufferSubData(u,0,d):(t?o.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):o.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(o.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:r,remove:a,update:l}}class ga extends Ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],m=[],f=[];for(let _=0;_<h;_++){const y=_*d-r;for(let v=0;v<c;v++){const b=v*u-s;g.push(b,-y,0),m.push(0,0,1),f.push(v/a),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){const v=y+c*_,b=y+c*(_+1),w=y+1+c*(_+1),E=y+1+c*_;p.push(v,b,E),p.push(b,w,E)}this.setIndex(p),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(m,3)),this.setAttribute("uv",new It(f,2))}static fromJSON(e){return new ga(e.width,e.height,e.widthSegments,e.heightSegments)}}var tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ou="vec3 transformed = vec3( position );",lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,hu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,bu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Au="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ru=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ou=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Hu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,qu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ju=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ku=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Yu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Zu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$u=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,md=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Td=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ld=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,kd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ud=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Od=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,qd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,jd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Xd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Kd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Yd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,$d=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ef=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,af=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,of=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,df=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_f=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Rf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:tu,alphamap_pars_fragment:nu,alphatest_fragment:iu,alphatest_pars_fragment:su,aomap_fragment:ru,aomap_pars_fragment:au,begin_vertex:ou,beginnormal_vertex:lu,bsdfs:cu,iridescence_fragment:hu,bumpmap_pars_fragment:uu,clipping_planes_fragment:du,clipping_planes_pars_fragment:fu,clipping_planes_pars_vertex:pu,clipping_planes_vertex:mu,color_fragment:gu,color_pars_fragment:_u,color_pars_vertex:xu,color_vertex:yu,common:vu,cube_uv_reflection_fragment:bu,defaultnormal_vertex:wu,displacementmap_pars_vertex:Mu,displacementmap_vertex:Su,emissivemap_fragment:Tu,emissivemap_pars_fragment:Eu,encodings_fragment:Au,encodings_pars_fragment:Cu,envmap_fragment:Lu,envmap_common_pars_fragment:Ru,envmap_pars_fragment:Du,envmap_pars_vertex:Pu,envmap_physical_pars_fragment:Wu,envmap_vertex:Iu,fog_vertex:Fu,fog_pars_vertex:ku,fog_fragment:Nu,fog_pars_fragment:Uu,gradientmap_pars_fragment:Ou,lightmap_fragment:Bu,lightmap_pars_fragment:zu,lights_lambert_fragment:Gu,lights_lambert_pars_fragment:Vu,lights_pars_begin:Hu,lights_toon_fragment:qu,lights_toon_pars_fragment:ju,lights_phong_fragment:Xu,lights_phong_pars_fragment:Ku,lights_physical_fragment:Yu,lights_physical_pars_fragment:Zu,lights_fragment_begin:$u,lights_fragment_maps:Ju,lights_fragment_end:Qu,logdepthbuf_fragment:ed,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:sd,map_pars_fragment:rd,map_particle_fragment:ad,map_particle_pars_fragment:od,metalnessmap_fragment:ld,metalnessmap_pars_fragment:cd,morphcolor_vertex:hd,morphnormal_vertex:ud,morphtarget_pars_vertex:dd,morphtarget_vertex:fd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:gd,normal_pars_vertex:_d,normal_vertex:xd,normalmap_pars_fragment:yd,clearcoat_normal_fragment_begin:vd,clearcoat_normal_fragment_maps:bd,clearcoat_pars_fragment:wd,iridescence_pars_fragment:Md,output_fragment:Sd,packing:Td,premultiplied_alpha_fragment:Ed,project_vertex:Ad,dithering_fragment:Cd,dithering_pars_fragment:Ld,roughnessmap_fragment:Rd,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:Pd,shadowmap_pars_vertex:Id,shadowmap_vertex:Fd,shadowmask_pars_fragment:kd,skinbase_vertex:Nd,skinning_pars_vertex:Ud,skinning_vertex:Od,skinnormal_vertex:Bd,specularmap_fragment:zd,specularmap_pars_fragment:Gd,tonemapping_fragment:Vd,tonemapping_pars_fragment:Hd,transmission_fragment:Wd,transmission_pars_fragment:qd,uv_pars_fragment:jd,uv_pars_vertex:Xd,uv_vertex:Kd,uv2_pars_fragment:Yd,uv2_pars_vertex:Zd,uv2_vertex:$d,worldpos_vertex:Jd,background_vert:Qd,background_frag:ef,cube_vert:tf,cube_frag:nf,depth_vert:sf,depth_frag:rf,distanceRGBA_vert:af,distanceRGBA_frag:of,equirect_vert:lf,equirect_frag:cf,linedashed_vert:hf,linedashed_frag:uf,meshbasic_vert:df,meshbasic_frag:ff,meshlambert_vert:pf,meshlambert_frag:mf,meshmatcap_vert:gf,meshmatcap_frag:_f,meshnormal_vert:xf,meshnormal_frag:yf,meshphong_vert:vf,meshphong_frag:bf,meshphysical_vert:wf,meshphysical_frag:Mf,meshtoon_vert:Sf,meshtoon_frag:Tf,points_vert:Ef,points_frag:Af,shadow_vert:Cf,shadow_frag:Lf,sprite_vert:Rf,sprite_frag:Df},te={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dt},uv2Transform:{value:new Dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}}},jt={basic:{uniforms:ft([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:ft([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new pe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:ft([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:ft([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:ft([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new pe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:ft([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:ft([te.points,te.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:ft([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:ft([te.common,te.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:ft([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:ft([te.sprite,te.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null}},vertexShader:De.background_vert,fragmentShader:De.background_frag},cube:{uniforms:ft([te.envmap,{opacity:{value:1}}]),vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:ft([te.common,te.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:ft([te.lights,te.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};jt.physical={uniforms:ft([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};function Pf(o,e,t,n,i,s){const r=new pe(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function p(m,f){let _=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=e.get(y));const v=o.xr,b=v.getSession&&v.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?g(r,a):y&&y.isColor&&(g(y,1),_=!0),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===js)?(c===void 0&&(c=new Vt(new Fi(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ci(jt.cube.uniforms),vertexShader:jt.cube.vertexShader,fragmentShader:jt.cube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(h!==y||u!==y.version||d!==o.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Vt(new ga(2,2),new $n({name:"BackgroundMaterial",uniforms:Ci(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==o.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=o.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,f){t.buffers.color.setClear(m.r,m.g,m.b,f,s)}return{getClearColor:function(){return r},setClearColor:function(m,f=1){r.set(m),a=f,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(r,a)},render:p}}function If(o,e,t,n){const i=o.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=f(null);let c=l,h=!1;function u(I,B,K,X,z){let k=!1;if(r){const D=m(X,K,B);c!==D&&(c=D,p(c.object)),k=_(I,X,K,z),k&&y(I,X,K,z)}else{const D=B.wireframe===!0;(c.geometry!==X.id||c.program!==K.id||c.wireframe!==D)&&(c.geometry=X.id,c.program=K.id,c.wireframe=D,k=!0)}z!==null&&t.update(z,34963),(k||h)&&(h=!1,x(I,B,K,X),z!==null&&o.bindBuffer(34963,t.get(z).buffer))}function d(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function p(I){return n.isWebGL2?o.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?o.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function m(I,B,K){const X=K.wireframe===!0;let z=a[I.id];z===void 0&&(z={},a[I.id]=z);let k=z[B.id];k===void 0&&(k={},z[B.id]=k);let D=k[X];return D===void 0&&(D=f(d()),k[X]=D),D}function f(I){const B=[],K=[],X=[];for(let z=0;z<i;z++)B[z]=0,K[z]=0,X[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:X,object:I,attributes:{},index:null}}function _(I,B,K,X){const z=c.attributes,k=B.attributes;let D=0;const Y=K.getAttributes();for(const $ in Y)if(Y[$].location>=0){const oe=z[$];let ve=k[$];if(ve===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(ve=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(ve=I.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;D++}return c.attributesNum!==D||c.index!==X}function y(I,B,K,X){const z={},k=B.attributes;let D=0;const Y=K.getAttributes();for(const $ in Y)if(Y[$].location>=0){let oe=k[$];oe===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor));const ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),z[$]=ve,D++}c.attributes=z,c.attributesNum=D,c.index=X}function v(){const I=c.newAttributes;for(let B=0,K=I.length;B<K;B++)I[B]=0}function b(I){w(I,0)}function w(I,B){const K=c.newAttributes,X=c.enabledAttributes,z=c.attributeDivisors;K[I]=1,X[I]===0&&(o.enableVertexAttribArray(I),X[I]=1),z[I]!==B&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),z[I]=B)}function E(){const I=c.newAttributes,B=c.enabledAttributes;for(let K=0,X=B.length;K<X;K++)B[K]!==I[K]&&(o.disableVertexAttribArray(K),B[K]=0)}function C(I,B,K,X,z,k){n.isWebGL2===!0&&(K===5124||K===5125)?o.vertexAttribIPointer(I,B,K,z,k):o.vertexAttribPointer(I,B,K,X,z,k)}function x(I,B,K,X){if(n.isWebGL2===!1&&(I.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const z=X.attributes,k=K.getAttributes(),D=B.defaultAttributeValues;for(const Y in k){const $=k[Y];if($.location>=0){let Z=z[Y];if(Z===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){const oe=Z.normalized,ve=Z.itemSize,W=t.get(Z);if(W===void 0)continue;const Oe=W.buffer,ge=W.type,ue=W.bytesPerElement;if(Z.isInterleavedBufferAttribute){const ae=Z.data,ze=ae.stride,we=Z.offset;if(ae.isInstancedInterleavedBuffer){for(let me=0;me<$.locationSize;me++)w($.location+me,ae.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let me=0;me<$.locationSize;me++)b($.location+me);o.bindBuffer(34962,Oe);for(let me=0;me<$.locationSize;me++)C($.location+me,ve/$.locationSize,ge,oe,ze*ue,(we+ve/$.locationSize*me)*ue)}else{if(Z.isInstancedBufferAttribute){for(let ae=0;ae<$.locationSize;ae++)w($.location+ae,Z.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ae=0;ae<$.locationSize;ae++)b($.location+ae);o.bindBuffer(34962,Oe);for(let ae=0;ae<$.locationSize;ae++)C($.location+ae,ve/$.locationSize,ge,oe,ve*ue,ve/$.locationSize*ae*ue)}}else if(D!==void 0){const oe=D[Y];if(oe!==void 0)switch(oe.length){case 2:o.vertexAttrib2fv($.location,oe);break;case 3:o.vertexAttrib3fv($.location,oe);break;case 4:o.vertexAttrib4fv($.location,oe);break;default:o.vertexAttrib1fv($.location,oe)}}}}E()}function T(){Q();for(const I in a){const B=a[I];for(const K in B){const X=B[K];for(const z in X)g(X[z].object),delete X[z];delete B[K]}delete a[I]}}function P(I){if(a[I.id]===void 0)return;const B=a[I.id];for(const K in B){const X=B[K];for(const z in X)g(X[z].object),delete X[z];delete B[K]}delete a[I.id]}function O(I){for(const B in a){const K=a[B];if(K[I.id]===void 0)continue;const X=K[I.id];for(const z in X)g(X[z].object),delete X[z];delete K[I.id]}}function Q(){U(),h=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Q,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:b,disableUnusedAttributes:E}}function Ff(o,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function a(c,h){o.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,p;if(i)d=o,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,h,u),t.update(h,s,u)}this.setMode=r,this.render=a,this.renderInstances=l}function kf(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=o.getParameter(34930),d=o.getParameter(35660),p=o.getParameter(3379),g=o.getParameter(34076),m=o.getParameter(34921),f=o.getParameter(36347),_=o.getParameter(36348),y=o.getParameter(36349),v=d>0,b=r||e.has("OES_texture_float"),w=v&&b,E=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:E}}function Nf(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Un,a=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const g=u.length!==0||d||n!==0||i;return i=d,t=h(u,p,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,p){const g=u.clippingPlanes,m=u.clipIntersection,f=u.clipShadows,_=o.get(u);if(!i||g===null||g.length===0||s&&!f)s?h(null):c();else{const y=s?0:n,v=y*4;let b=_.clippingState||null;l.value=b,b=h(g,d,v,p);for(let w=0;w!==v;++w)b[w]=t[w];_.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const m=u!==null?u.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const _=p+m*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<_)&&(f=new Float32Array(_));for(let v=0,b=p;v!==m;++v,b+=4)r.copy(u[v]).applyMatrix4(y,a),r.normal.toArray(f,b),f[b+3]=r.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function Uf(o){let e=new WeakMap;function t(r,a){return a===Br?r.mapping=Mi:a===zr&&(r.mapping=Si),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===Br||a===zr)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new $h(l.height/2);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class _a extends zl{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vi=4,Eo=[.125,.215,.35,.446,.526,.582],zn=20,Ar=new _a,Ao=new pe;let Cr=null;const On=(1+Math.sqrt(5))/2,_i=1/On,Co=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,On,_i),new L(0,On,-_i),new L(_i,0,On),new L(-_i,0,On),new L(On,_i,0),new L(-On,_i,0)];class jr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Cr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Do(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ro(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cr),e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:st,minFilter:st,generateMipmaps:!1,type:hn,format:Gt,encoding:Ln,depthBuffer:!1},i=Lo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Of(s)),this._blurMaterial=Bf(s,e,t)}return i}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,Ar)}_sceneToCubeUV(e,t,n,i){const a=new yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ao),h.toneMapping=dn,h.autoClear=!1;const p=new An({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new Vt(new Fi,p);let m=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(Ao),m=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const v=this._cubeSize;Cs(i,y*v,_>2?v:0,v,v),h.setRenderTarget(i),m&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Mi||e.mapping===Si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Do()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ro());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Cs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Ar)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Co[(i-1)%Co.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Vt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zn-1),m=s/g,f=isFinite(s)?1+Math.floor(h*m):zn;f>zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${zn}`);const _=[];let y=0;for(let C=0;C<zn;++C){const x=C/m,T=Math.exp(-x*x/2);_.push(T),C===0?y+=T:C<f&&(y+=2*T)}for(let C=0;C<_.length;C++)_[C]=_[C]/y;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const b=this._sizeLods[i],w=3*b*(i>v-vi?i-v+vi:0),E=4*(this._cubeSize-b);Cs(t,w,E,3*b,2*b),l.setRenderTarget(t),l.render(u,Ar)}}function Of(o){const e=[],t=[],n=[];let i=o;const s=o-vi+1+Eo.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-vi?l=Eo[r-o+vi-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,m=3,f=2,_=1,y=new Float32Array(m*g*p),v=new Float32Array(f*g*p),b=new Float32Array(_*g*p);for(let E=0;E<p;E++){const C=E%3*2/3-1,x=E>2?0:-1,T=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];y.set(T,m*g*E),v.set(d,f*g*E);const P=[E,E,E,E,E,E];b.set(P,_*g*E)}const w=new Ft;w.setAttribute("position",new wt(y,m)),w.setAttribute("uv",new wt(v,f)),w.setAttribute("faceIndex",new wt(b,_)),e.push(w),i>vi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lo(o,e,t){const n=new Zn(o,e,t);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Bf(o,e,t){const n=new Float32Array(zn),i=new L(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Ro(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Do(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function xa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zf(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Br||l===zr,h=l===Mi||l===Si;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new jr(o)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new jr(o));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Gf(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vf(o,e,t,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let f=0,_=m.length;f<_;f++)e.update(m[f],34962)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const y=p.array;m=p.version;for(let v=0,b=y.length;v<b;v+=3){const w=y[v+0],E=y[v+1],C=y[v+2];d.push(w,E,E,C,C,w)}}else{const y=g.array;m=g.version;for(let v=0,b=y.length/3-1;v<b;v+=3){const w=v+0,E=v+1,C=v+2;d.push(w,E,E,C,C,w)}}const f=new(Il(d)?Bl:Ol)(d,1);f.version=m;const _=s.get(u);_&&e.remove(_),s.set(u,f)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Hf(o,e,t,n){const i=n.isWebGL2;let s;function r(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,p){o.drawElements(s,p,a,d*l),t.update(p,s,1)}function u(d,p,g){if(g===0)return;let m,f;if(i)m=o,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,p,a,d*l,g),t.update(p,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=u}function Wf(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qf(o,e){return o[0]-e[0]}function jf(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Xf(o,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new Ke,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=m!==void 0?m.length:0;let _=s.get(h);if(_===void 0||_.count!==f){let K=function(){I.dispose(),s.delete(h),h.removeEventListener("dispose",K)};var g=K;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let P=0;b===!0&&(P=1),w===!0&&(P=2),E===!0&&(P=3);let O=h.attributes.position.count*P,Q=1;O>e.maxTextureSize&&(Q=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const U=new Float32Array(O*Q*4*f),I=new Ul(U,O,Q,f);I.type=zt,I.needsUpdate=!0;const B=P*4;for(let X=0;X<f;X++){const z=C[X],k=x[X],D=T[X],Y=O*Q*4*X;for(let $=0;$<z.count;$++){const Z=$*B;b===!0&&(r.fromBufferAttribute(z,$),U[Y+Z+0]=r.x,U[Y+Z+1]=r.y,U[Y+Z+2]=r.z,U[Y+Z+3]=0),w===!0&&(r.fromBufferAttribute(k,$),U[Y+Z+4]=r.x,U[Y+Z+5]=r.y,U[Y+Z+6]=r.z,U[Y+Z+7]=0),E===!0&&(r.fromBufferAttribute(D,$),U[Y+Z+8]=r.x,U[Y+Z+9]=r.y,U[Y+Z+10]=r.z,U[Y+Z+11]=D.itemSize===4?r.w:1)}}_={count:f,texture:I,size:new Ie(O,Q)},s.set(h,_),h.addEventListener("dispose",K)}let y=0;for(let b=0;b<p.length;b++)y+=p[b];const v=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(o,"morphTargetBaseInfluence",v),d.getUniforms().setValue(o,"morphTargetInfluences",p),d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let f=n[h.id];if(f===void 0||f.length!==m){f=[];for(let w=0;w<m;w++)f[w]=[w,0];n[h.id]=f}for(let w=0;w<m;w++){const E=f[w];E[0]=w,E[1]=p[w]}f.sort(jf);for(let w=0;w<8;w++)w<m&&f[w][1]?(a[w][0]=f[w][0],a[w][1]=f[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(qf);const _=h.morphAttributes.position,y=h.morphAttributes.normal;let v=0;for(let w=0;w<8;w++){const E=a[w],C=E[0],x=E[1];C!==Number.MAX_SAFE_INTEGER&&x?(_&&h.getAttribute("morphTarget"+w)!==_[C]&&h.setAttribute("morphTarget"+w,_[C]),y&&h.getAttribute("morphNormal"+w)!==y[C]&&h.setAttribute("morphNormal"+w,y[C]),i[w]=x,v+=x):(_&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),y&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),i[w]=0)}const b=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(o,"morphTargetBaseInfluence",b),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Kf(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const Hl=new vt,Wl=new Ul,ql=new kh,jl=new Gl,Po=[],Io=[],Fo=new Float32Array(16),ko=new Float32Array(9),No=new Float32Array(4);function ki(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=Po[i];if(s===void 0&&(s=new Float32Array(i),Po[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function rt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function at(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Ks(o,e){let t=Io[e];t===void 0&&(t=new Int32Array(e),Io[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Yf(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Zf(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;o.uniform2fv(this.addr,e),at(t,e)}}function $f(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;o.uniform3fv(this.addr,e),at(t,e)}}function Jf(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;o.uniform4fv(this.addr,e),at(t,e)}}function Qf(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(rt(t,n))return;No.set(n),o.uniformMatrix2fv(this.addr,!1,No),at(t,n)}}function ep(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(rt(t,n))return;ko.set(n),o.uniformMatrix3fv(this.addr,!1,ko),at(t,n)}}function tp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(rt(t,n))return;Fo.set(n),o.uniformMatrix4fv(this.addr,!1,Fo),at(t,n)}}function np(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function ip(o,e){const t=this.cache;rt(t,e)||(o.uniform2iv(this.addr,e),at(t,e))}function sp(o,e){const t=this.cache;rt(t,e)||(o.uniform3iv(this.addr,e),at(t,e))}function rp(o,e){const t=this.cache;rt(t,e)||(o.uniform4iv(this.addr,e),at(t,e))}function ap(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function op(o,e){const t=this.cache;rt(t,e)||(o.uniform2uiv(this.addr,e),at(t,e))}function lp(o,e){const t=this.cache;rt(t,e)||(o.uniform3uiv(this.addr,e),at(t,e))}function cp(o,e){const t=this.cache;rt(t,e)||(o.uniform4uiv(this.addr,e),at(t,e))}function hp(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Hl,i)}function up(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ql,i)}function dp(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jl,i)}function fp(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wl,i)}function pp(o){switch(o){case 5126:return Yf;case 35664:return Zf;case 35665:return $f;case 35666:return Jf;case 35674:return Qf;case 35675:return ep;case 35676:return tp;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return sp;case 35669:case 35673:return rp;case 5125:return ap;case 36294:return op;case 36295:return lp;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return fp}}function mp(o,e){o.uniform1fv(this.addr,e)}function gp(o,e){const t=ki(e,this.size,2);o.uniform2fv(this.addr,t)}function _p(o,e){const t=ki(e,this.size,3);o.uniform3fv(this.addr,t)}function xp(o,e){const t=ki(e,this.size,4);o.uniform4fv(this.addr,t)}function yp(o,e){const t=ki(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function vp(o,e){const t=ki(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function bp(o,e){const t=ki(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function wp(o,e){o.uniform1iv(this.addr,e)}function Mp(o,e){o.uniform2iv(this.addr,e)}function Sp(o,e){o.uniform3iv(this.addr,e)}function Tp(o,e){o.uniform4iv(this.addr,e)}function Ep(o,e){o.uniform1uiv(this.addr,e)}function Ap(o,e){o.uniform2uiv(this.addr,e)}function Cp(o,e){o.uniform3uiv(this.addr,e)}function Lp(o,e){o.uniform4uiv(this.addr,e)}function Rp(o,e,t){const n=this.cache,i=e.length,s=Ks(t,i);rt(n,s)||(o.uniform1iv(this.addr,s),at(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Hl,s[r])}function Dp(o,e,t){const n=this.cache,i=e.length,s=Ks(t,i);rt(n,s)||(o.uniform1iv(this.addr,s),at(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||ql,s[r])}function Pp(o,e,t){const n=this.cache,i=e.length,s=Ks(t,i);rt(n,s)||(o.uniform1iv(this.addr,s),at(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||jl,s[r])}function Ip(o,e,t){const n=this.cache,i=e.length,s=Ks(t,i);rt(n,s)||(o.uniform1iv(this.addr,s),at(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Wl,s[r])}function Fp(o){switch(o){case 5126:return mp;case 35664:return gp;case 35665:return _p;case 35666:return xp;case 35674:return yp;case 35675:return vp;case 35676:return bp;case 5124:case 35670:return wp;case 35667:case 35671:return Mp;case 35668:case 35672:return Sp;case 35669:case 35673:return Tp;case 5125:return Ep;case 36294:return Ap;case 36295:return Cp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Ip}}class kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=pp(t.type)}}class Np{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Fp(t.type)}}class Up{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Lr=/(\w+)(\])?(\[|\.)?/g;function Uo(o,e){o.seq.push(e),o.map[e.id]=e}function Op(o,e,t){const n=o.name,i=n.length;for(Lr.lastIndex=0;;){const s=Lr.exec(n),r=Lr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Uo(t,c===void 0?new kp(a,o,e):new Np(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new Up(a),Uo(t,u)),t=u}}}class Os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Op(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Oo(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Bp=0;function zp(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function Gp(o){switch(o){case Ln:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Bo(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+zp(o.getShaderSource(e),r)}else return i}function Vp(o,e){const t=Gp(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Hp(o,e){let t;switch(e){case Kc:t="Linear";break;case Yc:t="Reinhard";break;case Zc:t="OptimizedCineon";break;case $c:t="ACESFilmic";break;case Jc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wp(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yi).join(`
`)}function qp(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jp(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function Yi(o){return o!==""}function zo(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Go(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xr(o){return o.replace(Xp,Kp)}function Kp(o,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Xr(t)}const Yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vo(o){return o.replace(Yp,Zp)}function Zp(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ho(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $p(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Sl?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function Jp(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Mi:case Si:e="ENVMAP_TYPE_CUBE";break;case js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qp(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Si:e="ENVMAP_MODE_REFRACTION";break}return e}function em(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case qs:e="ENVMAP_BLENDING_MULTIPLY";break;case jc:e="ENVMAP_BLENDING_MIX";break;case Xc:e="ENVMAP_BLENDING_ADD";break}return e}function tm(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nm(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=$p(t),c=Jp(t),h=Qp(t),u=em(t),d=tm(t),p=t.isWebGL2?"":Wp(t),g=qp(s),m=i.createProgram();let f,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Yi).join(`
`),f.length>0&&(f+=`
`),_=[p,g].filter(Yi).join(`
`),_.length>0&&(_+=`
`)):(f=[Ho(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),_=[p,Ho(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?De.tonemapping_pars_fragment:"",t.toneMapping!==dn?Hp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,Vp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),r=Xr(r),r=zo(r,t),r=Go(r,t),a=Xr(a),a=zo(a,t),a=Go(a,t),r=Vo(r),a=Vo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=y+f+r,b=y+_+a,w=Oo(i,35633,v),E=Oo(i,35632,b);if(i.attachShader(m,w),i.attachShader(m,E),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),o.debug.checkShaderErrors){const T=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(w).trim(),O=i.getShaderInfoLog(E).trim();let Q=!0,U=!0;if(i.getProgramParameter(m,35714)===!1){Q=!1;const I=Bo(i,w,"vertex"),B=Bo(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+T+`
`+I+`
`+B)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||O==="")&&(U=!1);U&&(this.diagnostics={runnable:Q,programLog:T,vertexShader:{log:P,prefix:f},fragmentShader:{log:O,prefix:_}})}i.deleteShader(w),i.deleteShader(E);let C;this.getUniforms=function(){return C===void 0&&(C=new Os(i,m)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=jp(i,m)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Bp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=E,this}let im=0;class sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rm(e),t.set(e,n)),n}}class rm{constructor(e){this.id=im++,this.code=e,this.usedTimes=0}}function am(o,e,t,n,i,s,r){const a=new pa,l=new sm,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x,T,P,O,Q){const U=O.fog,I=Q.geometry,B=x.isMeshStandardMaterial?O.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||B),X=K&&K.mapping===js?K.image.height:null,z=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const k=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,D=k!==void 0?k.length:0;let Y=0;I.morphAttributes.position!==void 0&&(Y=1),I.morphAttributes.normal!==void 0&&(Y=2),I.morphAttributes.color!==void 0&&(Y=3);let $,Z,oe,ve;if(z){const ze=jt[z];$=ze.vertexShader,Z=ze.fragmentShader}else $=x.vertexShader,Z=x.fragmentShader,l.update(x),oe=l.getVertexShaderID(x),ve=l.getFragmentShaderID(x);const W=o.getRenderTarget(),Oe=x.alphaTest>0,ge=x.clearcoat>0,ue=x.iridescence>0;return{isWebGL2:h,shaderID:z,shaderName:x.type,vertexShader:$,fragmentShader:Z,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:d,outputEncoding:W===null?o.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:Ln,map:!!x.map,matcap:!!x.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:X,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===xh,tangentSpaceNormalMap:x.normalMapType===Ri,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ve,clearcoat:ge,clearcoatMap:ge&&!!x.clearcoatMap,clearcoatRoughnessMap:ge&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!x.clearcoatNormalMap,iridescence:ue,iridescenceMap:ue&&!!x.iridescenceMap,iridescenceThicknessMap:ue&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===bi,alphaMap:!!x.alphaMap,alphaTest:Oe,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!I.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!U,useFog:x.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:Y,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:dn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cn,flipSided:x.side===Pt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(_(T,x),y(T,x),T.push(o.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function _(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),x.push(a.mask)}function v(x){const T=g[x.type];let P;if(T){const O=jt[T];P=Xh.clone(O.uniforms)}else P=x.uniforms;return P}function b(x,T){let P;for(let O=0,Q=c.length;O<Q;O++){const U=c[O];if(U.cacheKey===T){P=U,++P.usedTimes;break}}return P===void 0&&(P=new nm(o,T,x,s),c.push(P)),P}function w(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:b,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:C}}function om(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function lm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Wo(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function qo(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(u,d,p,g,m,f){let _=o[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:f},o[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=p,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=m,_.group=f),e++,_}function a(u,d,p,g,m,f){const _=r(u,d,p,g,m,f);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(u,d,p,g,m,f){const _=r(u,d,p,g,m,f);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(u,d){t.length>1&&t.sort(u||lm),n.length>1&&n.sort(d||Wo),i.length>1&&i.sort(d||Wo)}function h(){for(let u=e,d=o.length;u<d;u++){const p=o[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function cm(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new qo,o.set(n,[r])):i>=s.length?(r=new qo,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function hm(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new pe};break;case"SpotLight":t={position:new L,direction:new L,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new L,halfWidth:new L,halfHeight:new L};break}return o[e.id]=t,t}}}function um(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let dm=0;function fm(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function pm(o,e){const t=new hm,n=um(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new L);const s=new L,r=new Ue,a=new Ue;function l(h,u){let d=0,p=0,g=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let m=0,f=0,_=0,y=0,v=0,b=0,w=0,E=0,C=0,x=0;h.sort(fm);const T=u!==!0?Math.PI:1;for(let O=0,Q=h.length;O<Q;O++){const U=h[O],I=U.color,B=U.intensity,K=U.distance,X=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=I.r*B*T,p+=I.g*B*T,g+=I.b*B*T;else if(U.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(U.sh.coefficients[z],B);else if(U.isDirectionalLight){const z=t.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const k=U.shadow,D=n.get(U);D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=U.shadow.matrix,b++}i.directional[m]=z,m++}else if(U.isSpotLight){const z=t.get(U);z.position.setFromMatrixPosition(U.matrixWorld),z.color.copy(I).multiplyScalar(B*T),z.distance=K,z.coneCos=Math.cos(U.angle),z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),z.decay=U.decay,i.spot[_]=z;const k=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,k.updateMatrices(U),U.castShadow&&x++),i.spotLightMatrix[_]=k.matrix,U.castShadow){const D=n.get(U);D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=X,E++}_++}else if(U.isRectAreaLight){const z=t.get(U);z.color.copy(I).multiplyScalar(B),z.halfWidth.set(U.width*.5,0,0),z.halfHeight.set(0,U.height*.5,0),i.rectArea[y]=z,y++}else if(U.isPointLight){const z=t.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity*T),z.distance=U.distance,z.decay=U.decay,U.castShadow){const k=U.shadow,D=n.get(U);D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,D.shadowCameraNear=k.camera.near,D.shadowCameraFar=k.camera.far,i.pointShadow[f]=D,i.pointShadowMap[f]=X,i.pointShadowMatrix[f]=U.shadow.matrix,w++}i.point[f]=z,f++}else if(U.isHemisphereLight){const z=t.get(U);z.skyColor.copy(U.color).multiplyScalar(B*T),z.groundColor.copy(U.groundColor).multiplyScalar(B*T),i.hemi[v]=z,v++}}y>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==m||P.pointLength!==f||P.spotLength!==_||P.rectAreaLength!==y||P.hemiLength!==v||P.numDirectionalShadows!==b||P.numPointShadows!==w||P.numSpotShadows!==E||P.numSpotMaps!==C)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=y,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=E+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,P.directionalLength=m,P.pointLength=f,P.spotLength=_,P.rectAreaLength=y,P.hemiLength=v,P.numDirectionalShadows=b,P.numPointShadows=w,P.numSpotShadows=E,P.numSpotMaps=C,i.version=dm++)}function c(h,u){let d=0,p=0,g=0,m=0,f=0;const _=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const b=h[y];if(b.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),d++}else if(b.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const w=i.rectArea[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),a.identity(),r.copy(b.matrixWorld),r.premultiply(_),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),p++}else if(b.isHemisphereLight){const w=i.hemi[f];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(_),f++}}}return{setup:l,setupView:c,state:i}}function jo(o,e){const t=new pm(o,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function mm(o,e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let l;return a===void 0?(l=new jo(o,e),t.set(s,[l])):r>=a.length?(l=new jo(o,e),a.push(l)):l=a[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class gm extends At{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _m extends At{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vm(o,e,t){let n=new ma;const i=new Ie,s=new Ie,r=new Ke,a=new gm({depthPacking:_h}),l=new _m,c={},h=t.maxTextureSize,u={0:Pt,1:Kn,2:cn},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:xm,fragmentShader:ym}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Vt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sl,this.render=function(b,w,E){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const C=o.getRenderTarget(),x=o.getActiveCubeFace(),T=o.getActiveMipmapLevel(),P=o.state;P.setBlending(Cn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let O=0,Q=b.length;O<Q;O++){const U=b[O],I=U.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const B=I.getFrameExtents();if(i.multiply(B),s.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/B.x),i.x=s.x*B.x,I.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/B.y),i.y=s.y*B.y,I.mapSize.y=s.y)),I.map===null){const X=this.type!==Ki?{minFilter:ht,magFilter:ht}:{};I.map=new Zn(i.x,i.y,X),I.map.texture.name=U.name+".shadowMap",I.camera.updateProjectionMatrix()}o.setRenderTarget(I.map),o.clear();const K=I.getViewportCount();for(let X=0;X<K;X++){const z=I.getViewport(X);r.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),P.viewport(r),I.updateMatrices(U,X),n=I.getFrustum(),v(w,E,I.camera,U,this.type)}I.isPointLightShadow!==!0&&this.type===Ki&&_(I,E),I.needsUpdate=!1}f.needsUpdate=!1,o.setRenderTarget(C,x,T)};function _(b,w){const E=e.update(m);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Zn(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(w,null,E,d,m,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(w,null,E,p,m,null)}function y(b,w,E,C,x,T){let P=null;const O=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0?P=O:P=E.isPointLight===!0?l:a,o.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const Q=P.uuid,U=w.uuid;let I=c[Q];I===void 0&&(I={},c[Q]=I);let B=I[U];B===void 0&&(B=P.clone(),I[U]=B),P=B}return P.visible=w.visible,P.wireframe=w.wireframe,T===Ki?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:u[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaTest,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=C,P.farDistance=x),P}function v(b,w,E,C,x){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Ki)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const O=e.update(b),Q=b.material;if(Array.isArray(Q)){const U=O.groups;for(let I=0,B=U.length;I<B;I++){const K=U[I],X=Q[K.materialIndex];if(X&&X.visible){const z=y(b,X,C,E.near,E.far,x);o.renderBufferDirect(E,null,O,z,b,K)}}}else if(Q.visible){const U=y(b,Q,C,E.near,E.far,x);o.renderBufferDirect(E,null,O,U,b,null)}}const P=b.children;for(let O=0,Q=P.length;O<Q;O++)v(P[O],w,E,C,x)}}function bm(o,e,t){const n=t.isWebGL2;function i(){let R=!1;const le=new Ke;let ee=null;const q=new Ke(0,0,0,0);return{setMask:function(ie){ee!==ie&&!R&&(o.colorMask(ie,ie,ie,ie),ee=ie)},setLocked:function(ie){R=ie},setClear:function(ie,xe,Ye,et,pn){pn===!0&&(ie*=et,xe*=et,Ye*=et),le.set(ie,xe,Ye,et),q.equals(le)===!1&&(o.clearColor(ie,xe,Ye,et),q.copy(le))},reset:function(){R=!1,ee=null,q.set(-1,0,0,0)}}}function s(){let R=!1,le=null,ee=null,q=null;return{setTest:function(ie){ie?Oe(2929):ge(2929)},setMask:function(ie){le!==ie&&!R&&(o.depthMask(ie),le=ie)},setFunc:function(ie){if(ee!==ie){switch(ie){case Bc:o.depthFunc(512);break;case zc:o.depthFunc(519);break;case Gc:o.depthFunc(513);break;case Or:o.depthFunc(515);break;case Vc:o.depthFunc(514);break;case Hc:o.depthFunc(518);break;case Wc:o.depthFunc(516);break;case qc:o.depthFunc(517);break;default:o.depthFunc(515)}ee=ie}},setLocked:function(ie){R=ie},setClear:function(ie){q!==ie&&(o.clearDepth(ie),q=ie)},reset:function(){R=!1,le=null,ee=null,q=null}}}function r(){let R=!1,le=null,ee=null,q=null,ie=null,xe=null,Ye=null,et=null,pn=null;return{setTest:function(Ze){R||(Ze?Oe(2960):ge(2960))},setMask:function(Ze){le!==Ze&&!R&&(o.stencilMask(Ze),le=Ze)},setFunc:function(Ze,Zt,Ct){(ee!==Ze||q!==Zt||ie!==Ct)&&(o.stencilFunc(Ze,Zt,Ct),ee=Ze,q=Zt,ie=Ct)},setOp:function(Ze,Zt,Ct){(xe!==Ze||Ye!==Zt||et!==Ct)&&(o.stencilOp(Ze,Zt,Ct),xe=Ze,Ye=Zt,et=Ct)},setLocked:function(Ze){R=Ze},setClear:function(Ze){pn!==Ze&&(o.clearStencil(Ze),pn=Ze)},reset:function(){R=!1,le=null,ee=null,q=null,ie=null,xe=null,Ye=null,et=null,pn=null}}}const a=new i,l=new s,c=new r,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,m=[],f=null,_=!1,y=null,v=null,b=null,w=null,E=null,C=null,x=null,T=!1,P=null,O=null,Q=null,U=null,I=null;const B=o.getParameter(35661);let K=!1,X=0;const z=o.getParameter(7938);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),K=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),K=X>=2);let k=null,D={};const Y=o.getParameter(3088),$=o.getParameter(2978),Z=new Ke().fromArray(Y),oe=new Ke().fromArray($);function ve(R,le,ee){const q=new Uint8Array(4),ie=o.createTexture();o.bindTexture(R,ie),o.texParameteri(R,10241,9728),o.texParameteri(R,10240,9728);for(let xe=0;xe<ee;xe++)o.texImage2D(le+xe,0,6408,1,1,0,6408,5121,q);return ie}const W={};W[3553]=ve(3553,3553,1),W[34067]=ve(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(2929),l.setFunc(Or),mt(!1),Wt(Na),Oe(2884),lt(Cn);function Oe(R){d[R]!==!0&&(o.enable(R),d[R]=!0)}function ge(R){d[R]!==!1&&(o.disable(R),d[R]=!1)}function ue(R,le){return p[R]!==le?(o.bindFramebuffer(R,le),p[R]=le,n&&(R===36009&&(p[36160]=le),R===36160&&(p[36009]=le)),!0):!1}function ae(R,le){let ee=m,q=!1;if(R)if(ee=g.get(le),ee===void 0&&(ee=[],g.set(le,ee)),R.isWebGLMultipleRenderTargets){const ie=R.texture;if(ee.length!==ie.length||ee[0]!==36064){for(let xe=0,Ye=ie.length;xe<Ye;xe++)ee[xe]=36064+xe;ee.length=ie.length,q=!0}}else ee[0]!==36064&&(ee[0]=36064,q=!0);else ee[0]!==1029&&(ee[0]=1029,q=!0);q&&(t.isWebGL2?o.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function ze(R){return f!==R?(o.useProgram(R),f=R,!0):!1}const we={[yi]:32774,[Cc]:32778,[Lc]:32779};if(n)we[za]=32775,we[Ga]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(we[za]=R.MIN_EXT,we[Ga]=R.MAX_EXT)}const me={[Rc]:0,[Dc]:1,[Pc]:768,[El]:770,[Oc]:776,[Nc]:774,[Fc]:772,[Ic]:769,[Al]:771,[Uc]:775,[kc]:773};function lt(R,le,ee,q,ie,xe,Ye,et){if(R===Cn){_===!0&&(ge(3042),_=!1);return}if(_===!1&&(Oe(3042),_=!0),R!==Ac){if(R!==y||et!==T){if((v!==yi||E!==yi)&&(o.blendEquation(32774),v=yi,E=yi),et)switch(R){case bi:o.blendFuncSeparate(1,771,1,771);break;case Ua:o.blendFunc(1,1);break;case Oa:o.blendFuncSeparate(0,769,0,1);break;case Ba:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case bi:o.blendFuncSeparate(770,771,1,771);break;case Ua:o.blendFunc(770,1);break;case Oa:o.blendFuncSeparate(0,769,0,1);break;case Ba:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,w=null,C=null,x=null,y=R,T=et}return}ie=ie||le,xe=xe||ee,Ye=Ye||q,(le!==v||ie!==E)&&(o.blendEquationSeparate(we[le],we[ie]),v=le,E=ie),(ee!==b||q!==w||xe!==C||Ye!==x)&&(o.blendFuncSeparate(me[ee],me[q],me[xe],me[Ye]),b=ee,w=q,C=xe,x=Ye),y=R,T=null}function Mt(R,le){R.side===cn?ge(2884):Oe(2884);let ee=R.side===Pt;le&&(ee=!ee),mt(ee),R.blending===bi&&R.transparent===!1?lt(Cn):lt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const q=R.stencilWrite;c.setTest(q),q&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),qe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Oe(32926):ge(32926)}function mt(R){P!==R&&(R?o.frontFace(2304):o.frontFace(2305),P=R)}function Wt(R){R!==Tc?(Oe(2884),R!==O&&(R===Na?o.cullFace(1029):R===Ec?o.cullFace(1028):o.cullFace(1032))):ge(2884),O=R}function ct(R){R!==Q&&(K&&o.lineWidth(R),Q=R)}function qe(R,le,ee){R?(Oe(32823),(U!==le||I!==ee)&&(o.polygonOffset(le,ee),U=le,I=ee)):ge(32823)}function Kt(R){R?Oe(3089):ge(3089)}function Yt(R){R===void 0&&(R=33984+B-1),k!==R&&(o.activeTexture(R),k=R)}function A(R,le,ee){ee===void 0&&(k===null?ee=33984+B-1:ee=k);let q=D[ee];q===void 0&&(q={type:void 0,texture:void 0},D[ee]=q),(q.type!==R||q.texture!==le)&&(k!==ee&&(o.activeTexture(ee),k=ee),o.bindTexture(R,le||W[R]),q.type=R,q.texture=le)}function M(){const R=D[k];R!==void 0&&R.type!==void 0&&(o.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function V(){try{o.compressedTexImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{o.texSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{o.texSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{o.texStorage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{o.texStorage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{o.texImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{o.texImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(R){Z.equals(R)===!1&&(o.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function ce(R){oe.equals(R)===!1&&(o.viewport(R.x,R.y,R.z,R.w),oe.copy(R))}function _e(R,le){let ee=u.get(le);ee===void 0&&(ee=new WeakMap,u.set(le,ee));let q=ee.get(R);q===void 0&&(q=o.getUniformBlockIndex(le,R.name),ee.set(R,q))}function Ce(R,le){const q=u.get(le).get(R);h.get(R)!==q&&(o.uniformBlockBinding(le,q,R.__bindingPointIndex),h.set(R,q))}function We(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},k=null,D={},p={},g=new WeakMap,m=[],f=null,_=!1,y=null,v=null,b=null,w=null,E=null,C=null,x=null,T=!1,P=null,O=null,Q=null,U=null,I=null,Z.set(0,0,o.canvas.width,o.canvas.height),oe.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:ge,bindFramebuffer:ue,drawBuffers:ae,useProgram:ze,setBlending:lt,setMaterial:Mt,setFlipSided:mt,setCullFace:Wt,setLineWidth:ct,setPolygonOffset:qe,setScissorTest:Kt,activeTexture:Yt,bindTexture:A,unbindTexture:M,compressedTexImage2D:V,texImage2D:j,texImage3D:fe,updateUBOMapping:_e,uniformBlockBinding:Ce,texStorage2D:Me,texStorage3D:re,texSubImage2D:J,texSubImage3D:ne,compressedTexSubImage2D:se,scissor:Se,viewport:ce,reset:We}}function wm(o,e,t,n,i,s,r){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,M){return _?new OffscreenCanvas(A,M):ts("canvas")}function v(A,M,V,J){let ne=1;if((A.width>J||A.height>J)&&(ne=J/Math.max(A.width,A.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const se=M?Hs:Math.floor,Me=se(ne*A.width),re=se(ne*A.height);m===void 0&&(m=y(Me,re));const j=V?y(Me,re):m;return j.width=Me,j.height=re,j.getContext("2d").drawImage(A,0,0,Me,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Me+"x"+re+")."),j}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function b(A){return qr(A.width)&&qr(A.height)}function w(A){return a?!1:A.wrapS!==bt||A.wrapT!==bt||A.minFilter!==ht&&A.minFilter!==st}function E(A,M){return A.generateMipmaps&&M&&A.minFilter!==ht&&A.minFilter!==st}function C(A){o.generateMipmap(A)}function x(A,M,V,J,ne=!1){if(a===!1)return M;if(A!==null){if(o[A]!==void 0)return o[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=M;return M===6403&&(V===5126&&(se=33326),V===5131&&(se=33325),V===5121&&(se=33321)),M===33319&&(V===5126&&(se=33328),V===5131&&(se=33327),V===5121&&(se=33323)),M===6408&&(V===5126&&(se=34836),V===5131&&(se=34842),V===5121&&(se=J===Ve&&ne===!1?35907:32856),V===32819&&(se=32854),V===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function T(A,M,V){return E(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==ht&&A.minFilter!==st?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function P(A){return A===ht||A===Gr||A===Vr?9728:9729}function O(A){const M=A.target;M.removeEventListener("dispose",O),U(M),M.isVideoTexture&&g.delete(M)}function Q(A){const M=A.target;M.removeEventListener("dispose",Q),B(M)}function U(A){const M=n.get(A);if(M.__webglInit===void 0)return;const V=A.source,J=f.get(V);if(J){const ne=J[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&I(A),Object.keys(J).length===0&&f.delete(V)}n.remove(A)}function I(A){const M=n.get(A);o.deleteTexture(M.__webglTexture);const V=A.source,J=f.get(V);delete J[M.__cacheKey],r.memory.textures--}function B(A){const M=A.texture,V=n.get(A),J=n.get(M);if(J.__webglTexture!==void 0&&(o.deleteTexture(J.__webglTexture),r.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)o.deleteFramebuffer(V.__webglFramebuffer[ne]),V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer[ne]);else{if(o.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&o.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&o.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ne=0;ne<V.__webglColorRenderbuffer.length;ne++)V.__webglColorRenderbuffer[ne]&&o.deleteRenderbuffer(V.__webglColorRenderbuffer[ne]);V.__webglDepthRenderbuffer&&o.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,se=M.length;ne<se;ne++){const Me=n.get(M[ne]);Me.__webglTexture&&(o.deleteTexture(Me.__webglTexture),r.memory.textures--),n.remove(M[ne])}n.remove(M),n.remove(A)}let K=0;function X(){K=0}function z(){const A=K;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),K+=1,A}function k(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.encoding),M.join()}function D(A,M){const V=n.get(A);if(A.isVideoTexture&&Kt(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(V,A,M);return}}t.bindTexture(3553,V.__webglTexture,33984+M)}function Y(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){ge(V,A,M);return}t.bindTexture(35866,V.__webglTexture,33984+M)}function $(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){ge(V,A,M);return}t.bindTexture(32879,V.__webglTexture,33984+M)}function Z(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){ue(V,A,M);return}t.bindTexture(34067,V.__webglTexture,33984+M)}const oe={[Ti]:10497,[bt]:33071,[Vs]:33648},ve={[ht]:9728,[Gr]:9984,[Vr]:9986,[st]:9729,[Ll]:9985,[Qn]:9987};function W(A,M,V){if(V?(o.texParameteri(A,10242,oe[M.wrapS]),o.texParameteri(A,10243,oe[M.wrapT]),(A===32879||A===35866)&&o.texParameteri(A,32882,oe[M.wrapR]),o.texParameteri(A,10240,ve[M.magFilter]),o.texParameteri(A,10241,ve[M.minFilter])):(o.texParameteri(A,10242,33071),o.texParameteri(A,10243,33071),(A===32879||A===35866)&&o.texParameteri(A,32882,33071),(M.wrapS!==bt||M.wrapT!==bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(A,10240,P(M.magFilter)),o.texParameteri(A,10241,P(M.minFilter)),M.minFilter!==ht&&M.minFilter!==st&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(M.type===zt&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===hn&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(o.texParameterf(A,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Oe(A,M){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",O));const J=M.source;let ne=f.get(J);ne===void 0&&(ne={},f.set(J,ne));const se=k(M);if(se!==A.__cacheKey){ne[se]===void 0&&(ne[se]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,V=!0),ne[se].usedTimes++;const Me=ne[A.__cacheKey];Me!==void 0&&(ne[A.__cacheKey].usedTimes--,Me.usedTimes===0&&I(M)),A.__cacheKey=se,A.__webglTexture=ne[se].texture}return V}function ge(A,M,V){let J=3553;M.isDataArrayTexture&&(J=35866),M.isData3DTexture&&(J=32879);const ne=Oe(A,M),se=M.source;t.bindTexture(J,A.__webglTexture,33984+V);const Me=n.get(se);if(se.version!==Me.__version||ne===!0){t.activeTexture(33984+V),o.pixelStorei(37440,M.flipY),o.pixelStorei(37441,M.premultiplyAlpha),o.pixelStorei(3317,M.unpackAlignment),o.pixelStorei(37443,0);const re=w(M)&&b(M.image)===!1;let j=v(M.image,re,!1,h);j=Yt(M,j);const fe=b(j)||a,Se=s.convert(M.format,M.encoding);let ce=s.convert(M.type),_e=x(M.internalFormat,Se,ce,M.encoding,M.isVideoTexture);W(J,M,fe);let Ce;const We=M.mipmaps,R=a&&M.isVideoTexture!==!0,le=Me.__version===void 0||ne===!0,ee=T(M,j,fe);if(M.isDepthTexture)_e=6402,a?M.type===zt?_e=36012:M.type===Gn?_e=33190:M.type===wi?_e=35056:_e=33189:M.type===zt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Wn&&_e===6402&&M.type!==Rl&&M.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Gn,ce=s.convert(M.type)),M.format===Ei&&_e===6402&&(_e=34041,M.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=wi,ce=s.convert(M.type))),le&&(R?t.texStorage2D(3553,1,_e,j.width,j.height):t.texImage2D(3553,0,_e,j.width,j.height,0,Se,ce,null));else if(M.isDataTexture)if(We.length>0&&fe){R&&le&&t.texStorage2D(3553,ee,_e,We[0].width,We[0].height);for(let q=0,ie=We.length;q<ie;q++)Ce=We[q],R?t.texSubImage2D(3553,q,0,0,Ce.width,Ce.height,Se,ce,Ce.data):t.texImage2D(3553,q,_e,Ce.width,Ce.height,0,Se,ce,Ce.data);M.generateMipmaps=!1}else R?(le&&t.texStorage2D(3553,ee,_e,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,Se,ce,j.data)):t.texImage2D(3553,0,_e,j.width,j.height,0,Se,ce,j.data);else if(M.isCompressedTexture){R&&le&&t.texStorage2D(3553,ee,_e,We[0].width,We[0].height);for(let q=0,ie=We.length;q<ie;q++)Ce=We[q],M.format!==Gt?Se!==null?R?t.compressedTexSubImage2D(3553,q,0,0,Ce.width,Ce.height,Se,Ce.data):t.compressedTexImage2D(3553,q,_e,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?t.texSubImage2D(3553,q,0,0,Ce.width,Ce.height,Se,ce,Ce.data):t.texImage2D(3553,q,_e,Ce.width,Ce.height,0,Se,ce,Ce.data)}else if(M.isDataArrayTexture)R?(le&&t.texStorage3D(35866,ee,_e,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,Se,ce,j.data)):t.texImage3D(35866,0,_e,j.width,j.height,j.depth,0,Se,ce,j.data);else if(M.isData3DTexture)R?(le&&t.texStorage3D(32879,ee,_e,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,Se,ce,j.data)):t.texImage3D(32879,0,_e,j.width,j.height,j.depth,0,Se,ce,j.data);else if(M.isFramebufferTexture){if(le)if(R)t.texStorage2D(3553,ee,_e,j.width,j.height);else{let q=j.width,ie=j.height;for(let xe=0;xe<ee;xe++)t.texImage2D(3553,xe,_e,q,ie,0,Se,ce,null),q>>=1,ie>>=1}}else if(We.length>0&&fe){R&&le&&t.texStorage2D(3553,ee,_e,We[0].width,We[0].height);for(let q=0,ie=We.length;q<ie;q++)Ce=We[q],R?t.texSubImage2D(3553,q,0,0,Se,ce,Ce):t.texImage2D(3553,q,_e,Se,ce,Ce);M.generateMipmaps=!1}else R?(le&&t.texStorage2D(3553,ee,_e,j.width,j.height),t.texSubImage2D(3553,0,0,0,Se,ce,j)):t.texImage2D(3553,0,_e,Se,ce,j);E(M,fe)&&C(J),Me.__version=se.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ue(A,M,V){if(M.image.length!==6)return;const J=Oe(A,M),ne=M.source;t.bindTexture(34067,A.__webglTexture,33984+V);const se=n.get(ne);if(ne.version!==se.__version||J===!0){t.activeTexture(33984+V),o.pixelStorei(37440,M.flipY),o.pixelStorei(37441,M.premultiplyAlpha),o.pixelStorei(3317,M.unpackAlignment),o.pixelStorei(37443,0);const Me=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,j=[];for(let q=0;q<6;q++)!Me&&!re?j[q]=v(M.image[q],!1,!0,c):j[q]=re?M.image[q].image:M.image[q],j[q]=Yt(M,j[q]);const fe=j[0],Se=b(fe)||a,ce=s.convert(M.format,M.encoding),_e=s.convert(M.type),Ce=x(M.internalFormat,ce,_e,M.encoding),We=a&&M.isVideoTexture!==!0,R=se.__version===void 0||J===!0;let le=T(M,fe,Se);W(34067,M,Se);let ee;if(Me){We&&R&&t.texStorage2D(34067,le,Ce,fe.width,fe.height);for(let q=0;q<6;q++){ee=j[q].mipmaps;for(let ie=0;ie<ee.length;ie++){const xe=ee[ie];M.format!==Gt?ce!==null?We?t.compressedTexSubImage2D(34069+q,ie,0,0,xe.width,xe.height,ce,xe.data):t.compressedTexImage2D(34069+q,ie,Ce,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(34069+q,ie,0,0,xe.width,xe.height,ce,_e,xe.data):t.texImage2D(34069+q,ie,Ce,xe.width,xe.height,0,ce,_e,xe.data)}}}else{ee=M.mipmaps,We&&R&&(ee.length>0&&le++,t.texStorage2D(34067,le,Ce,j[0].width,j[0].height));for(let q=0;q<6;q++)if(re){We?t.texSubImage2D(34069+q,0,0,0,j[q].width,j[q].height,ce,_e,j[q].data):t.texImage2D(34069+q,0,Ce,j[q].width,j[q].height,0,ce,_e,j[q].data);for(let ie=0;ie<ee.length;ie++){const Ye=ee[ie].image[q].image;We?t.texSubImage2D(34069+q,ie+1,0,0,Ye.width,Ye.height,ce,_e,Ye.data):t.texImage2D(34069+q,ie+1,Ce,Ye.width,Ye.height,0,ce,_e,Ye.data)}}else{We?t.texSubImage2D(34069+q,0,0,0,ce,_e,j[q]):t.texImage2D(34069+q,0,Ce,ce,_e,j[q]);for(let ie=0;ie<ee.length;ie++){const xe=ee[ie];We?t.texSubImage2D(34069+q,ie+1,0,0,ce,_e,xe.image[q]):t.texImage2D(34069+q,ie+1,Ce,ce,_e,xe.image[q])}}}E(M,Se)&&C(34067),se.__version=ne.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ae(A,M,V,J,ne){const se=s.convert(V.format,V.encoding),Me=s.convert(V.type),re=x(V.internalFormat,se,Me,V.encoding);n.get(M).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,re,M.width,M.height,M.depth,0,se,Me,null):t.texImage2D(ne,0,re,M.width,M.height,0,se,Me,null)),t.bindFramebuffer(36160,A),qe(M)?d.framebufferTexture2DMultisampleEXT(36160,J,ne,n.get(V).__webglTexture,0,ct(M)):o.framebufferTexture2D(36160,J,ne,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(A,M,V){if(o.bindRenderbuffer(36161,A),M.depthBuffer&&!M.stencilBuffer){let J=33189;if(V||qe(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===zt?J=36012:ne.type===Gn&&(J=33190));const se=ct(M);qe(M)?d.renderbufferStorageMultisampleEXT(36161,se,J,M.width,M.height):o.renderbufferStorageMultisample(36161,se,J,M.width,M.height)}else o.renderbufferStorage(36161,J,M.width,M.height);o.framebufferRenderbuffer(36160,36096,36161,A)}else if(M.depthBuffer&&M.stencilBuffer){const J=ct(M);V&&qe(M)===!1?o.renderbufferStorageMultisample(36161,J,35056,M.width,M.height):qe(M)?d.renderbufferStorageMultisampleEXT(36161,J,35056,M.width,M.height):o.renderbufferStorage(36161,34041,M.width,M.height),o.framebufferRenderbuffer(36160,33306,36161,A)}else{const J=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<J.length;ne++){const se=J[ne],Me=s.convert(se.format,se.encoding),re=s.convert(se.type),j=x(se.internalFormat,Me,re,se.encoding),fe=ct(M);V&&qe(M)===!1?o.renderbufferStorageMultisample(36161,fe,j,M.width,M.height):qe(M)?d.renderbufferStorageMultisampleEXT(36161,fe,j,M.width,M.height):o.renderbufferStorage(36161,j,M.width,M.height)}}o.bindRenderbuffer(36161,null)}function we(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture,ne=ct(M);if(M.depthTexture.format===Wn)qe(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,ne):o.framebufferTexture2D(36160,36096,3553,J,0);else if(M.depthTexture.format===Ei)qe(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,ne):o.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function me(A){const M=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");we(M.__webglFramebuffer,A)}else if(V){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=o.createRenderbuffer(),ze(M.__webglDepthbuffer[J],A,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=o.createRenderbuffer(),ze(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function lt(A,M,V){const J=n.get(A);M!==void 0&&ae(J.__webglFramebuffer,A,A.texture,36064,3553),V!==void 0&&me(A)}function Mt(A){const M=A.texture,V=n.get(A),J=n.get(M);A.addEventListener("dispose",Q),A.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=o.createTexture()),J.__version=M.version,r.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,se=A.isWebGLMultipleRenderTargets===!0,Me=b(A)||a;if(ne){V.__webglFramebuffer=[];for(let re=0;re<6;re++)V.__webglFramebuffer[re]=o.createFramebuffer()}else{if(V.__webglFramebuffer=o.createFramebuffer(),se)if(i.drawBuffers){const re=A.texture;for(let j=0,fe=re.length;j<fe;j++){const Se=n.get(re[j]);Se.__webglTexture===void 0&&(Se.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&qe(A)===!1){const re=se?M:[M];V.__webglMultisampledFramebuffer=o.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let j=0;j<re.length;j++){const fe=re[j];V.__webglColorRenderbuffer[j]=o.createRenderbuffer(),o.bindRenderbuffer(36161,V.__webglColorRenderbuffer[j]);const Se=s.convert(fe.format,fe.encoding),ce=s.convert(fe.type),_e=x(fe.internalFormat,Se,ce,fe.encoding,A.isXRRenderTarget===!0),Ce=ct(A);o.renderbufferStorageMultisample(36161,Ce,_e,A.width,A.height),o.framebufferRenderbuffer(36160,36064+j,36161,V.__webglColorRenderbuffer[j])}o.bindRenderbuffer(36161,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=o.createRenderbuffer(),ze(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,J.__webglTexture),W(34067,M,Me);for(let re=0;re<6;re++)ae(V.__webglFramebuffer[re],A,M,36064,34069+re);E(M,Me)&&C(34067),t.unbindTexture()}else if(se){const re=A.texture;for(let j=0,fe=re.length;j<fe;j++){const Se=re[j],ce=n.get(Se);t.bindTexture(3553,ce.__webglTexture),W(3553,Se,Me),ae(V.__webglFramebuffer,A,Se,36064+j,3553),E(Se,Me)&&C(3553)}t.unbindTexture()}else{let re=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?re=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,J.__webglTexture),W(re,M,Me),ae(V.__webglFramebuffer,A,M,36064,re),E(M,Me)&&C(re),t.unbindTexture()}A.depthBuffer&&me(A)}function mt(A){const M=b(A)||a,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let J=0,ne=V.length;J<ne;J++){const se=V[J];if(E(se,M)){const Me=A.isWebGLCubeRenderTarget?34067:3553,re=n.get(se).__webglTexture;t.bindTexture(Me,re),C(Me),t.unbindTexture()}}}function Wt(A){if(a&&A.samples>0&&qe(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,J=A.height;let ne=16384;const se=[],Me=A.stencilBuffer?33306:36096,re=n.get(A),j=A.isWebGLMultipleRenderTargets===!0;if(j)for(let fe=0;fe<M.length;fe++)t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+fe,36161,null),t.bindFramebuffer(36160,re.__webglFramebuffer),o.framebufferTexture2D(36009,36064+fe,3553,null,0);t.bindFramebuffer(36008,re.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,re.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){se.push(36064+fe),A.depthBuffer&&se.push(Me);const Se=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Se===!1&&(A.depthBuffer&&(ne|=256),A.stencilBuffer&&(ne|=1024)),j&&o.framebufferRenderbuffer(36008,36064,36161,re.__webglColorRenderbuffer[fe]),Se===!0&&(o.invalidateFramebuffer(36008,[Me]),o.invalidateFramebuffer(36009,[Me])),j){const ce=n.get(M[fe]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ce,0)}o.blitFramebuffer(0,0,V,J,0,0,V,J,ne,9728),p&&o.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let fe=0;fe<M.length;fe++){t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+fe,36161,re.__webglColorRenderbuffer[fe]);const Se=n.get(M[fe]).__webglTexture;t.bindFramebuffer(36160,re.__webglFramebuffer),o.framebufferTexture2D(36009,36064+fe,3553,Se,0)}t.bindFramebuffer(36009,re.__webglMultisampledFramebuffer)}}function ct(A){return Math.min(u,A.samples)}function qe(A){const M=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Kt(A){const M=r.render.frame;g.get(A)!==M&&(g.set(A,M),A.update())}function Yt(A,M){const V=A.encoding,J=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Wr||V!==Ln&&(V===Ve?a===!1?e.has("EXT_sRGB")===!0&&J===Gt?(A.format=Wr,A.minFilter=st,A.generateMipmaps=!1):M=kl.sRGBToLinear(M):(J!==Gt||ne!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),M}this.allocateTextureUnit=z,this.resetTextureUnits=X,this.setTexture2D=D,this.setTexture2DArray=Y,this.setTexture3D=$,this.setTextureCube=Z,this.rebindTextures=lt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=qe}function Mm(o,e,t){const n=t.isWebGL2;function i(s,r=null){let a;if(s===Yn)return 5121;if(s===nh)return 32819;if(s===ih)return 32820;if(s===Qc)return 5120;if(s===eh)return 5122;if(s===Rl)return 5123;if(s===th)return 5124;if(s===Gn)return 5125;if(s===zt)return 5126;if(s===hn)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===sh)return 6406;if(s===Gt)return 6408;if(s===ah)return 6409;if(s===oh)return 6410;if(s===Wn)return 6402;if(s===Ei)return 34041;if(s===lh)return 6403;if(s===rh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Wr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ch)return 36244;if(s===hh)return 33319;if(s===uh)return 33320;if(s===dh)return 36249;if(s===er||s===tr||s===nr||s===ir)if(r===Ve)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===er)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===er)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ir)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Va||s===Ha||s===Wa||s===qa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Va)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ha)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ja||s===Xa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ja)return r===Ve?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Xa)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ka||s===Ya||s===Za||s===$a||s===Ja||s===Qa||s===eo||s===to||s===no||s===io||s===so||s===ro||s===ao||s===oo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ka)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ya)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Za)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$a)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ja)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qa)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===eo)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===to)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===no)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===io)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===so)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ro)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ao)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===oo)return r===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===lo)return r===Ve?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===wi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class Sm extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hn extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tm={type:"move"};class Rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const m of e.hand.values()){const f=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const y=new Hn;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[m.jointName]=y,c.add(y)}const _=c.joints[m.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}}class Em extends vt{constructor(e,t,n,i,s,r,a,l,c,h){if(h=h!==void 0?h:Wn,h!==Wn&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wn&&(n=Gn),n===void 0&&h===Ei&&(n=wi),super(null,i,s,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ht,this.minFilter=l!==void 0?l:ht,this.flipY=!1,this.generateMipmaps=!1}}class Am extends Di{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=null,c=null,h=null,u=null,d=null,p=null;const g=t.getContextAttributes();let m=null,f=null;const _=[],y=[],v=new yt;v.layers.enable(1),v.viewport=new Ke;const b=new yt;b.layers.enable(2),b.viewport=new Ke;const w=[v,b],E=new Sm;E.layers.enable(1),E.layers.enable(2);let C=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let D=_[k];return D===void 0&&(D=new Rr,_[k]=D),D.getTargetRaySpace()},this.getControllerGrip=function(k){let D=_[k];return D===void 0&&(D=new Rr,_[k]=D),D.getGripSpace()},this.getHand=function(k){let D=_[k];return D===void 0&&(D=new Rr,_[k]=D),D.getHandSpace()};function T(k){const D=y.indexOf(k.inputSource);if(D===-1)return;const Y=_[D];Y!==void 0&&Y.dispatchEvent({type:k.type,data:k.inputSource})}function P(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",O);for(let k=0;k<_.length;k++){const D=y[k];D!==null&&(y[k]=null,_[k].disconnect(D))}C=null,x=null,e.setRenderTarget(m),d=null,u=null,h=null,i=null,f=null,z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",P),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const D={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,D),i.updateRenderState({baseLayer:d}),f=new Zn(d.framebufferWidth,d.framebufferHeight,{format:Gt,type:Yn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let D=null,Y=null,$=null;g.depth&&($=g.stencil?35056:33190,D=g.stencil?Ei:Wn,Y=g.stencil?wi:Gn);const Z={colorFormat:32856,depthFormat:$,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(Z),i.updateRenderState({layers:[u]}),f=new Zn(u.textureWidth,u.textureHeight,{format:Gt,type:Yn,depthTexture:new Em(u.textureWidth,u.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const oe=e.properties.get(f);oe.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await i.requestReferenceSpace(a),z.setContext(i),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(k){for(let D=0;D<k.removed.length;D++){const Y=k.removed[D],$=y.indexOf(Y);$>=0&&(y[$]=null,_[$].dispatchEvent({type:"disconnected",data:Y}))}for(let D=0;D<k.added.length;D++){const Y=k.added[D];let $=y.indexOf(Y);if($===-1){for(let oe=0;oe<_.length;oe++)if(oe>=y.length){y.push(Y),$=oe;break}else if(y[oe]===null){y[oe]=Y,$=oe;break}if($===-1)break}const Z=_[$];Z&&Z.dispatchEvent({type:"connected",data:Y})}}const Q=new L,U=new L;function I(k,D,Y){Q.setFromMatrixPosition(D.matrixWorld),U.setFromMatrixPosition(Y.matrixWorld);const $=Q.distanceTo(U),Z=D.projectionMatrix.elements,oe=Y.projectionMatrix.elements,ve=Z[14]/(Z[10]-1),W=Z[14]/(Z[10]+1),Oe=(Z[9]+1)/Z[5],ge=(Z[9]-1)/Z[5],ue=(Z[8]-1)/Z[0],ae=(oe[8]+1)/oe[0],ze=ve*ue,we=ve*ae,me=$/(-ue+ae),lt=me*-ue;D.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(lt),k.translateZ(me),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Mt=ve+me,mt=W+me,Wt=ze-lt,ct=we+($-lt),qe=Oe*W/mt*Mt,Kt=ge*W/mt*Mt;k.projectionMatrix.makePerspective(Wt,ct,qe,Kt,Mt,mt)}function B(k,D){D===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(D.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;E.near=b.near=v.near=k.near,E.far=b.far=v.far=k.far,(C!==E.near||x!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,x=E.far);const D=k.parent,Y=E.cameras;B(E,D);for(let Z=0;Z<Y.length;Z++)B(Y[Z],D);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),k.matrix.copy(E.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const $=k.children;for(let Z=0,oe=$.length;Z<oe;Z++)$[Z].updateMatrixWorld(!0);Y.length===2?I(E,v,b):E.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(k){u!==null&&(u.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let K=null;function X(k,D){if(c=D.getViewerPose(l||r),p=D,c!==null){const Y=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let $=!1;Y.length!==E.cameras.length&&(E.cameras.length=0,$=!0);for(let Z=0;Z<Y.length;Z++){const oe=Y[Z];let ve=null;if(d!==null)ve=d.getViewport(oe);else{const Oe=h.getViewSubImage(u,oe);ve=Oe.viewport,Z===0&&(e.setRenderTargetTextures(f,Oe.colorTexture,u.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(f))}let W=w[Z];W===void 0&&(W=new yt,W.layers.enable(Z),W.viewport=new Ke,w[Z]=W),W.matrix.fromArray(oe.transform.matrix),W.projectionMatrix.fromArray(oe.projectionMatrix),W.viewport.set(ve.x,ve.y,ve.width,ve.height),Z===0&&E.matrix.copy(W.matrix),$===!0&&E.cameras.push(W)}}for(let Y=0;Y<_.length;Y++){const $=y[Y],Z=_[Y];$!==null&&Z!==void 0&&Z.update($,D,l||r)}K&&K(k,D),p=null}const z=new Vl;z.setAnimationLoop(X),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}function Cm(o,e){function t(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,_,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(m,f):f.isMeshToonMaterial?(i(m,f),h(m,f)):f.isMeshPhongMaterial?(i(m,f),c(m,f)):f.isMeshStandardMaterial?(i(m,f),u(m,f),f.isMeshPhysicalMaterial&&d(m,f,v)):f.isMeshMatcapMaterial?(i(m,f),p(m,f)):f.isMeshDepthMaterial?i(m,f):f.isMeshDistanceMaterial?(i(m,f),g(m,f)):f.isMeshNormalMaterial?i(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&r(m,f)):f.isPointsMaterial?a(m,f,_,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Pt&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Pt&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const b=o.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*b}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let y;f.map?y=f.map:f.specularMap?y=f.specularMap:f.displacementMap?y=f.displacementMap:f.normalMap?y=f.normalMap:f.bumpMap?y=f.bumpMap:f.roughnessMap?y=f.roughnessMap:f.metalnessMap?y=f.metalnessMap:f.alphaMap?y=f.alphaMap:f.emissiveMap?y=f.emissiveMap:f.clearcoatMap?y=f.clearcoatMap:f.clearcoatNormalMap?y=f.clearcoatNormalMap:f.clearcoatRoughnessMap?y=f.clearcoatRoughnessMap:f.iridescenceMap?y=f.iridescenceMap:f.iridescenceThicknessMap?y=f.iridescenceThicknessMap:f.specularIntensityMap?y=f.specularIntensityMap:f.specularColorMap?y=f.specularColorMap:f.transmissionMap?y=f.transmissionMap:f.thicknessMap?y=f.thicknessMap:f.sheenColorMap?y=f.sheenColorMap:f.sheenRoughnessMap&&(y=f.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let v;f.aoMap?v=f.aoMap:f.lightMap&&(v=f.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uv2Transform.value.copy(v.matrix))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function r(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function a(m,f,_,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=y*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Pt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Lm(o,e,t,n){let i={},s={},r=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(y,v){const b=v.program;n.uniformBlockBinding(y,b)}function c(y,v){let b=i[y.id];b===void 0&&(g(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",f));const w=v.program;n.updateUBOMapping(y,w);const E=e.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function h(y){const v=u();y.__bindingPointIndex=v;const b=o.createBuffer(),w=y.__size,E=y.usage;return o.bindBuffer(35345,b),o.bufferData(35345,w,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,v,b),b}function u(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],b=y.uniforms,w=y.__cache;o.bindBuffer(35345,v);for(let E=0,C=b.length;E<C;E++){const x=b[E];if(p(x,E,w)===!0){const T=x.value,P=x.__offset;typeof T=="number"?(x.__data[0]=T,o.bufferSubData(35345,P,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):T.toArray(x.__data),o.bufferSubData(35345,P,x.__data))}}o.bindBuffer(35345,null)}function p(y,v,b){const w=y.value;if(b[v]===void 0)return typeof w=="number"?b[v]=w:b[v]=w.clone(),!0;if(typeof w=="number"){if(b[v]!==w)return b[v]=w,!0}else{const E=b[v];if(E.equals(w)===!1)return E.copy(w),!0}return!1}function g(y){const v=y.uniforms;let b=0;const w=16;let E=0;for(let C=0,x=v.length;C<x;C++){const T=v[C],P=m(T);if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=b,C>0){E=b%w;const O=w-E;E!==0&&O-P.boundary<0&&(b+=w-E,T.__offset=b)}b+=P.storage}return E=b%w,E>0&&(b+=w-E),y.__size=b,y.__cache={},this}function m(y){const v=y.value,b={boundary:0,storage:0};return typeof v=="number"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function f(y){const v=y.target;v.removeEventListener("dispose",f);const b=r.indexOf(v.__bindingPointIndex);r.splice(b,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function _(){for(const y in i)o.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:l,update:c,dispose:_}}function Rm(){const o=ts("canvas");return o.style.display="block",o}function Xl(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:Rm(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,r=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let u=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ln,this.physicallyCorrectLights=!1,this.toneMapping=dn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let f=!1,_=0,y=0,v=null,b=-1,w=null;const E=new Ke,C=new Ke;let x=null,T=e.width,P=e.height,O=1,Q=null,U=null;const I=new Ke(0,0,T,P),B=new Ke(0,0,T,P);let K=!1;const X=new ma;let z=!1,k=!1,D=null;const Y=new Ue,$=new Ie,Z=new L,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return v===null?O:1}let W=t;function Oe(S,N){for(let G=0;G<S.length;G++){const F=S[G],H=e.getContext(F,N);if(H!==null)return H}return null}try{const S={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${da}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",Ce,!1),e.addEventListener("webglcontextcreationerror",We,!1),W===null){const N=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&N.shift(),W=Oe(N,S),W===null)throw Oe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ge,ue,ae,ze,we,me,lt,Mt,mt,Wt,ct,qe,Kt,Yt,A,M,V,J,ne,se,Me,re,j,fe;function Se(){ge=new Gf(W),ue=new kf(W,ge,o),ge.init(ue),re=new Mm(W,ge,ue),ae=new bm(W,ge,ue),ze=new Wf,we=new om,me=new wm(W,ge,ae,we,ue,re,ze),lt=new Uf(m),Mt=new zf(m),mt=new eu(W,ue),j=new If(W,ge,mt,ue),Wt=new Vf(W,mt,ze,j),ct=new Kf(W,Wt,mt,ze),ne=new Xf(W,ue,me),M=new Nf(we),qe=new am(m,lt,Mt,ge,ue,j,M),Kt=new Cm(m,we),Yt=new cm,A=new mm(ge,ue),J=new Pf(m,lt,ae,ct,h,r),V=new vm(m,ct,ue),fe=new Lm(W,ze,ue,ae),se=new Ff(W,ge,ze,ue),Me=new Hf(W,ge,ze,ue),ze.programs=qe.programs,m.capabilities=ue,m.extensions=ge,m.properties=we,m.renderLists=Yt,m.shadowMap=V,m.state=ae,m.info=ze}Se();const ce=new Am(m,W);this.xr=ce,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const S=ge.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ge.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(S){S!==void 0&&(O=S,this.setSize(T,P,!1))},this.getSize=function(S){return S.set(T,P)},this.setSize=function(S,N,G){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=S,P=N,e.width=Math.floor(S*O),e.height=Math.floor(N*O),G!==!1&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(T*O,P*O).floor()},this.setDrawingBufferSize=function(S,N,G){T=S,P=N,O=G,e.width=Math.floor(S*G),e.height=Math.floor(N*G),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(I)},this.setViewport=function(S,N,G,F){S.isVector4?I.set(S.x,S.y,S.z,S.w):I.set(S,N,G,F),ae.viewport(E.copy(I).multiplyScalar(O).floor())},this.getScissor=function(S){return S.copy(B)},this.setScissor=function(S,N,G,F){S.isVector4?B.set(S.x,S.y,S.z,S.w):B.set(S,N,G,F),ae.scissor(C.copy(B).multiplyScalar(O).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(S){ae.setScissorTest(K=S)},this.setOpaqueSort=function(S){Q=S},this.setTransparentSort=function(S){U=S},this.getClearColor=function(S){return S.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(S=!0,N=!0,G=!0){let F=0;S&&(F|=16384),N&&(F|=256),G&&(F|=1024),W.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",Ce,!1),e.removeEventListener("webglcontextcreationerror",We,!1),Yt.dispose(),A.dispose(),we.dispose(),lt.dispose(),Mt.dispose(),ct.dispose(),j.dispose(),fe.dispose(),qe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",xe),ce.removeEventListener("sessionend",Ye),D&&(D.dispose(),D=null),et.stop()};function _e(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const S=ze.autoReset,N=V.enabled,G=V.autoUpdate,F=V.needsUpdate,H=V.type;Se(),ze.autoReset=S,V.enabled=N,V.autoUpdate=G,V.needsUpdate=F,V.type=H}function We(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function R(S){const N=S.target;N.removeEventListener("dispose",R),le(N)}function le(S){ee(S),we.remove(S)}function ee(S){const N=we.get(S).programs;N!==void 0&&(N.forEach(function(G){qe.releaseProgram(G)}),S.isShaderMaterial&&qe.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,G,F,H,de){N===null&&(N=oe);const Te=H.isMesh&&H.matrixWorld.determinant()<0,Le=gc(S,N,G,F,H);ae.setMaterial(F,Te);let Ee=G.index;const Ge=G.attributes.position;if(Ee===null){if(Ge===void 0||Ge.count===0)return}else if(Ee.count===0)return;let Fe=1;F.wireframe===!0&&(Ee=Wt.getWireframeAttribute(G),Fe=2),j.setup(H,F,Le,G,Ee);let ke,$e=se;Ee!==null&&(ke=mt.get(Ee),$e=Me,$e.setIndex(ke));const Dn=Ee!==null?Ee.count:Ge.count,ti=G.drawRange.start*Fe,ni=G.drawRange.count*Fe,qt=de!==null?de.start*Fe:0,Be=de!==null?de.count*Fe:1/0,ii=Math.max(ti,qt),tt=Math.min(Dn,ti+ni,qt+Be)-1,Lt=Math.max(0,tt-ii+1);if(Lt!==0){if(H.isMesh)F.wireframe===!0?(ae.setLineWidth(F.wireframeLinewidth*ve()),$e.setMode(1)):$e.setMode(4);else if(H.isLine){let mn=F.linewidth;mn===void 0&&(mn=1),ae.setLineWidth(mn*ve()),H.isLineSegments?$e.setMode(1):H.isLineLoop?$e.setMode(2):$e.setMode(3)}else H.isPoints?$e.setMode(0):H.isSprite&&$e.setMode(4);if(H.isInstancedMesh)$e.renderInstances(ii,Lt,H.count);else if(G.isInstancedBufferGeometry){const mn=Math.min(G.instanceCount,G._maxInstanceCount);$e.renderInstances(ii,Lt,mn)}else $e.render(ii,Lt)}},this.compile=function(S,N){function G(F,H,de){F.transparent===!0&&F.side===cn?(F.side=Pt,F.needsUpdate=!0,ls(F,H,de),F.side=Kn,F.needsUpdate=!0,ls(F,H,de),F.side=cn):ls(F,H,de)}d=A.get(S),d.init(),g.push(d),S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights(m.physicallyCorrectLights),S.traverse(function(F){const H=F.material;if(H)if(Array.isArray(H))for(let de=0;de<H.length;de++){const Te=H[de];G(Te,S,F)}else G(H,S,F)}),g.pop(),d=null};let q=null;function ie(S){q&&q(S)}function xe(){et.stop()}function Ye(){et.start()}const et=new Vl;et.setAnimationLoop(ie),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(S){q=S,ce.setAnimationLoop(S),S===null?et.stop():et.start()},ce.addEventListener("sessionstart",xe),ce.addEventListener("sessionend",Ye),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(N),N=ce.getCamera()),S.isScene===!0&&S.onBeforeRender(m,S,N,v),d=A.get(S,g.length),d.init(),g.push(d),Y.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(Y),k=this.localClippingEnabled,z=M.init(this.clippingPlanes,k,N),u=Yt.get(S,p.length),u.init(),p.push(u),pn(S,N,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(Q,U),z===!0&&M.beginShadows();const G=d.state.shadowsArray;if(V.render(G,S,N),z===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(u,S),d.setupLights(m.physicallyCorrectLights),N.isArrayCamera){const F=N.cameras;for(let H=0,de=F.length;H<de;H++){const Te=F[H];Ze(u,S,Te,Te.viewport)}}else Ze(u,S,N);v!==null&&(me.updateMultisampleRenderTarget(v),me.updateRenderTargetMipmap(v)),S.isScene===!0&&S.onAfterRender(m,S,N),j.resetDefaultState(),b=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function pn(S,N,G,F){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){F&&Z.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Y);const Te=ct.update(S),Le=S.material;Le.visible&&u.push(S,Te,Le,G,Z.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==ze.render.frame&&(S.skeleton.update(),S.skeleton.frame=ze.render.frame),!S.frustumCulled||X.intersectsObject(S))){F&&Z.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Y);const Te=ct.update(S),Le=S.material;if(Array.isArray(Le)){const Ee=Te.groups;for(let Ge=0,Fe=Ee.length;Ge<Fe;Ge++){const ke=Ee[Ge],$e=Le[ke.materialIndex];$e&&$e.visible&&u.push(S,Te,$e,G,Z.z,ke)}}else Le.visible&&u.push(S,Te,Le,G,Z.z,null)}}const de=S.children;for(let Te=0,Le=de.length;Te<Le;Te++)pn(de[Te],N,G,F)}function Ze(S,N,G,F){const H=S.opaque,de=S.transmissive,Te=S.transparent;d.setupLightsView(G),de.length>0&&Zt(H,N,G),F&&ae.viewport(E.copy(F)),H.length>0&&Ct(H,N,G),de.length>0&&Ct(de,N,G),Te.length>0&&Ct(Te,N,G),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Zt(S,N,G){const F=ue.isWebGL2;D===null&&(D=new Zn(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?hn:Yn,minFilter:Qn,samples:F&&s===!0?4:0})),m.getDrawingBufferSize($),F?D.setSize($.x,$.y):D.setSize(Hs($.x),Hs($.y));const H=m.getRenderTarget();m.setRenderTarget(D),m.clear();const de=m.toneMapping;m.toneMapping=dn,Ct(S,N,G),m.toneMapping=de,me.updateMultisampleRenderTarget(D),me.updateRenderTargetMipmap(D),m.setRenderTarget(H)}function Ct(S,N,G){const F=N.isScene===!0?N.overrideMaterial:null;for(let H=0,de=S.length;H<de;H++){const Te=S[H],Le=Te.object,Ee=Te.geometry,Ge=F===null?Te.material:F,Fe=Te.group;Le.layers.test(G.layers)&&mc(Le,N,G,Ee,Ge,Fe)}}function mc(S,N,G,F,H,de){S.onBeforeRender(m,N,G,F,H,de),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(m,N,G,F,S,de),H.transparent===!0&&H.side===cn?(H.side=Pt,H.needsUpdate=!0,m.renderBufferDirect(G,N,F,H,S,de),H.side=Kn,H.needsUpdate=!0,m.renderBufferDirect(G,N,F,H,S,de),H.side=cn):m.renderBufferDirect(G,N,F,H,S,de),S.onAfterRender(m,N,G,F,H,de)}function ls(S,N,G){N.isScene!==!0&&(N=oe);const F=we.get(S),H=d.state.lights,de=d.state.shadowsArray,Te=H.state.version,Le=qe.getParameters(S,H.state,de,N,G),Ee=qe.getProgramCacheKey(Le);let Ge=F.programs;F.environment=S.isMeshStandardMaterial?N.environment:null,F.fog=N.fog,F.envMap=(S.isMeshStandardMaterial?Mt:lt).get(S.envMap||F.environment),Ge===void 0&&(S.addEventListener("dispose",R),Ge=new Map,F.programs=Ge);let Fe=Ge.get(Ee);if(Fe!==void 0){if(F.currentProgram===Fe&&F.lightsStateVersion===Te)return Da(S,Le),Fe}else Le.uniforms=qe.getUniforms(S),S.onBuild(G,Le,m),S.onBeforeCompile(Le,m),Fe=qe.acquireProgram(Le,Ee),Ge.set(Ee,Fe),F.uniforms=Le.uniforms;const ke=F.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ke.clippingPlanes=M.uniform),Da(S,Le),F.needsLights=xc(S),F.lightsStateVersion=Te,F.needsLights&&(ke.ambientLightColor.value=H.state.ambient,ke.lightProbe.value=H.state.probe,ke.directionalLights.value=H.state.directional,ke.directionalLightShadows.value=H.state.directionalShadow,ke.spotLights.value=H.state.spot,ke.spotLightShadows.value=H.state.spotShadow,ke.rectAreaLights.value=H.state.rectArea,ke.ltc_1.value=H.state.rectAreaLTC1,ke.ltc_2.value=H.state.rectAreaLTC2,ke.pointLights.value=H.state.point,ke.pointLightShadows.value=H.state.pointShadow,ke.hemisphereLights.value=H.state.hemi,ke.directionalShadowMap.value=H.state.directionalShadowMap,ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ke.spotShadowMap.value=H.state.spotShadowMap,ke.spotLightMatrix.value=H.state.spotLightMatrix,ke.spotLightMap.value=H.state.spotLightMap,ke.pointShadowMap.value=H.state.pointShadowMap,ke.pointShadowMatrix.value=H.state.pointShadowMatrix);const $e=Fe.getUniforms(),Dn=Os.seqWithValue($e.seq,ke);return F.currentProgram=Fe,F.uniformsList=Dn,Fe}function Da(S,N){const G=we.get(S);G.outputEncoding=N.outputEncoding,G.instancing=N.instancing,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function gc(S,N,G,F,H){N.isScene!==!0&&(N=oe),me.resetTextureUnits();const de=N.fog,Te=F.isMeshStandardMaterial?N.environment:null,Le=v===null?m.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:Ln,Ee=(F.isMeshStandardMaterial?Mt:lt).get(F.envMap||Te),Ge=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!F.normalMap&&!!G.attributes.tangent,ke=!!G.morphAttributes.position,$e=!!G.morphAttributes.normal,Dn=!!G.morphAttributes.color,ti=F.toneMapped?m.toneMapping:dn,ni=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,qt=ni!==void 0?ni.length:0,Be=we.get(F),ii=d.state.lights;if(z===!0&&(k===!0||S!==w)){const St=S===w&&F.id===b;M.setState(F,S,St)}let tt=!1;F.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ii.state.version||Be.outputEncoding!==Le||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Ee||F.fog===!0&&Be.fog!==de||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==M.numPlanes||Be.numIntersection!==M.numIntersection)||Be.vertexAlphas!==Ge||Be.vertexTangents!==Fe||Be.morphTargets!==ke||Be.morphNormals!==$e||Be.morphColors!==Dn||Be.toneMapping!==ti||ue.isWebGL2===!0&&Be.morphTargetsCount!==qt)&&(tt=!0):(tt=!0,Be.__version=F.version);let Lt=Be.currentProgram;tt===!0&&(Lt=ls(F,N,H));let mn=!1,Bi=!1,Ys=!1;const gt=Lt.getUniforms(),Pn=Be.uniforms;if(ae.useProgram(Lt.program)&&(mn=!0,Bi=!0,Ys=!0),F.id!==b&&(b=F.id,Bi=!0),mn||w!==S){if(gt.setValue(W,"projectionMatrix",S.projectionMatrix),ue.logarithmicDepthBuffer&&gt.setValue(W,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),w!==S&&(w=S,Bi=!0,Ys=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const St=gt.map.cameraPosition;St!==void 0&&St.setValue(W,Z.setFromMatrixPosition(S.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&gt.setValue(W,"isOrthographic",S.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||H.isSkinnedMesh)&&gt.setValue(W,"viewMatrix",S.matrixWorldInverse)}if(H.isSkinnedMesh){gt.setOptional(W,H,"bindMatrix"),gt.setOptional(W,H,"bindMatrixInverse");const St=H.skeleton;St&&(ue.floatVertexTextures?(St.boneTexture===null&&St.computeBoneTexture(),gt.setValue(W,"boneTexture",St.boneTexture,me),gt.setValue(W,"boneTextureSize",St.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zs=G.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0&&ue.isWebGL2===!0)&&ne.update(H,G,F,Lt),(Bi||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,gt.setValue(W,"receiveShadow",H.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Pn.envMap.value=Ee,Pn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),Bi&&(gt.setValue(W,"toneMappingExposure",m.toneMappingExposure),Be.needsLights&&_c(Pn,Ys),de&&F.fog===!0&&Kt.refreshFogUniforms(Pn,de),Kt.refreshMaterialUniforms(Pn,F,O,P,D),Os.upload(W,Be.uniformsList,Pn,me)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Os.upload(W,Be.uniformsList,Pn,me),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&gt.setValue(W,"center",H.center),gt.setValue(W,"modelViewMatrix",H.modelViewMatrix),gt.setValue(W,"normalMatrix",H.normalMatrix),gt.setValue(W,"modelMatrix",H.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const St=F.uniformsGroups;for(let $s=0,yc=St.length;$s<yc;$s++)if(ue.isWebGL2){const Pa=St[$s];fe.update(Pa,Lt),fe.bind(Pa,Lt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Lt}function _c(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function xc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(S,N,G){we.get(S.texture).__webglTexture=N,we.get(S.depthTexture).__webglTexture=G;const F=we.get(S);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=G===void 0,F.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){const G=we.get(S);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,G=0){v=S,_=N,y=G;let F=!0;if(S){const Ee=we.get(S);Ee.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(36160,null),F=!1):Ee.__webglFramebuffer===void 0?me.setupRenderTarget(S):Ee.__hasExternalTextures&&me.rebindTextures(S,we.get(S.texture).__webglTexture,we.get(S.depthTexture).__webglTexture)}let H=null,de=!1,Te=!1;if(S){const Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture)&&(Te=!0);const Ge=we.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(H=Ge[N],de=!0):ue.isWebGL2&&S.samples>0&&me.useMultisampledRTT(S)===!1?H=we.get(S).__webglMultisampledFramebuffer:H=Ge,E.copy(S.viewport),C.copy(S.scissor),x=S.scissorTest}else E.copy(I).multiplyScalar(O).floor(),C.copy(B).multiplyScalar(O).floor(),x=K;if(ae.bindFramebuffer(36160,H)&&ue.drawBuffers&&F&&ae.drawBuffers(S,H),ae.viewport(E),ae.scissor(C),ae.setScissorTest(x),de){const Ee=we.get(S.texture);W.framebufferTexture2D(36160,36064,34069+N,Ee.__webglTexture,G)}else if(Te){const Ee=we.get(S.texture),Ge=N||0;W.framebufferTextureLayer(36160,36064,Ee.__webglTexture,G||0,Ge)}b=-1},this.readRenderTargetPixels=function(S,N,G,F,H,de,Te){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=we.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){ae.bindFramebuffer(36160,Le);try{const Ee=S.texture,Ge=Ee.format,Fe=Ee.type;if(Ge!==Gt&&re.convert(Ge)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Fe===hn&&(ge.has("EXT_color_buffer_half_float")||ue.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Fe!==Yn&&re.convert(Fe)!==W.getParameter(35738)&&!(Fe===zt&&(ue.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-F&&G>=0&&G<=S.height-H&&W.readPixels(N,G,F,H,re.convert(Ge),re.convert(Fe),de)}finally{const Ee=v!==null?we.get(v).__webglFramebuffer:null;ae.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(S,N,G=0){const F=Math.pow(2,-G),H=Math.floor(N.image.width*F),de=Math.floor(N.image.height*F);me.setTexture2D(N,0),W.copyTexSubImage2D(3553,G,0,0,S.x,S.y,H,de),ae.unbindTexture()},this.copyTextureToTexture=function(S,N,G,F=0){const H=N.image.width,de=N.image.height,Te=re.convert(G.format),Le=re.convert(G.type);me.setTexture2D(G,0),W.pixelStorei(37440,G.flipY),W.pixelStorei(37441,G.premultiplyAlpha),W.pixelStorei(3317,G.unpackAlignment),N.isDataTexture?W.texSubImage2D(3553,F,S.x,S.y,H,de,Te,Le,N.image.data):N.isCompressedTexture?W.compressedTexSubImage2D(3553,F,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,Te,N.mipmaps[0].data):W.texSubImage2D(3553,F,S.x,S.y,Te,Le,N.image),F===0&&G.generateMipmaps&&W.generateMipmap(3553),ae.unbindTexture()},this.copyTextureToTexture3D=function(S,N,G,F,H=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=S.max.x-S.min.x+1,Te=S.max.y-S.min.y+1,Le=S.max.z-S.min.z+1,Ee=re.convert(F.format),Ge=re.convert(F.type);let Fe;if(F.isData3DTexture)me.setTexture3D(F,0),Fe=32879;else if(F.isDataArrayTexture)me.setTexture2DArray(F,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,F.flipY),W.pixelStorei(37441,F.premultiplyAlpha),W.pixelStorei(3317,F.unpackAlignment);const ke=W.getParameter(3314),$e=W.getParameter(32878),Dn=W.getParameter(3316),ti=W.getParameter(3315),ni=W.getParameter(32877),qt=G.isCompressedTexture?G.mipmaps[0]:G.image;W.pixelStorei(3314,qt.width),W.pixelStorei(32878,qt.height),W.pixelStorei(3316,S.min.x),W.pixelStorei(3315,S.min.y),W.pixelStorei(32877,S.min.z),G.isDataTexture||G.isData3DTexture?W.texSubImage3D(Fe,H,N.x,N.y,N.z,de,Te,Le,Ee,Ge,qt.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Fe,H,N.x,N.y,N.z,de,Te,Le,Ee,qt.data)):W.texSubImage3D(Fe,H,N.x,N.y,N.z,de,Te,Le,Ee,Ge,qt),W.pixelStorei(3314,ke),W.pixelStorei(32878,$e),W.pixelStorei(3316,Dn),W.pixelStorei(3315,ti),W.pixelStorei(32877,ni),H===0&&F.generateMipmaps&&W.generateMipmap(Fe),ae.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?me.setTextureCube(S,0):S.isData3DTexture?me.setTexture3D(S,0):S.isDataArrayTexture?me.setTexture2DArray(S,0):me.setTexture2D(S,0),ae.unbindTexture()},this.resetState=function(){_=0,y=0,v=null,ae.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Dm extends Xl{}Dm.prototype.isWebGL1Renderer=!0;class Pm extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Im{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ht()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ht()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _t=new L;class ya{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),i=Xe(i,this.array),s=Xe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ya(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Xo=new L,Ko=new Ke,Yo=new Ke,Fm=new L,Zo=new Ue;class km extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Ko.fromBufferAttribute(i.attributes.skinIndex,e),Yo.fromBufferAttribute(i.attributes.skinWeight,e),Xo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Yo.getComponent(s);if(r!==0){const a=Ko.getComponent(s);Zo.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Fm.copy(Xo).applyMatrix4(Zo),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Kl extends Qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class va extends vt{constructor(e=null,t=1,n=1,i,s,r,a,l,c=ht,h=ht,u,d){super(null,r,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $o=new Ue,Nm=new Ue;class ba{constructor(e=[],t=[]){this.uuid=Ht(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:Nm;$o.multiplyMatrices(a,t[s]),$o.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ba(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Pl(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new va(t,e,e,Gt,zt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Kl),this.bones.push(r),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Yl extends At{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jo=new L,Qo=new L,el=new Ue,Dr=new Xs,Ls=new Ii;class wa extends Qe{constructor(e=new Ft,t=new Yl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Jo.fromBufferAttribute(t,i-1),Qo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jo.distanceTo(Qo);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(i),Ls.radius+=s,e.ray.intersectsSphere(Ls)===!1)return;el.copy(i).invert(),Dr.copy(e.ray).applyMatrix4(el);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,h=new L,u=new L,d=new L,p=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const _=Math.max(0,r.start),y=Math.min(g.count,r.start+r.count);for(let v=_,b=y-1;v<b;v+=p){const w=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(f,w),h.fromBufferAttribute(f,E),Dr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,r.start),y=Math.min(f.count,r.start+r.count);for(let v=_,b=y-1;v<b;v+=p){if(c.fromBufferAttribute(f,v),h.fromBufferAttribute(f,v+1),Dr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const tl=new L,nl=new L;class Um extends wa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)tl.fromBufferAttribute(t,i),nl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+tl.distanceTo(nl);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Om extends wa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zl extends At{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const il=new Ue,Kr=new Xs,Rs=new Ii,Ds=new L;class Bm extends Qe{constructor(e=new Ft,t=new Zl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=s,e.ray.intersectsSphere(Rs)===!1)return;il.copy(i).invert(),Kr.copy(e.ray).applyMatrix4(il);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=d,m=p;g<m;g++){const f=c.getX(g);Ds.fromBufferAttribute(u,f),sl(Ds,f,l,i,e,t,this)}}else{const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let g=d,m=p;g<m;g++)Ds.fromBufferAttribute(u,g),sl(Ds,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sl(o,e,t,n,i,s,r){const a=Kr.distanceSqToPoint(o);if(a<t){const l=new L;Kr.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:r})}}class Ma extends Ft{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new L,d=new L,p=[],g=[],m=[],f=[];for(let _=0;_<=n;_++){const y=[],v=_/n;let b=0;_==0&&r==0?b=.5/t:_==n&&l==Math.PI&&(b=-.5/t);for(let w=0;w<=t;w++){const E=w/t;u.x=-e*Math.cos(i+E*s)*Math.sin(r+v*a),u.y=e*Math.cos(r+v*a),u.z=e*Math.sin(i+E*s)*Math.sin(r+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),f.push(E+b,1-v),y.push(c++)}h.push(y)}for(let _=0;_<n;_++)for(let y=0;y<t;y++){const v=h[_][y+1],b=h[_][y],w=h[_+1][y],E=h[_+1][y+1];(_!==0||r>0)&&p.push(v,b,E),(_!==n-1||l<Math.PI)&&p.push(b,w,E)}this.setIndex(p),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(m,3)),this.setAttribute("uv",new It(f,2))}static fromJSON(e){return new Ma(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class as extends At{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rn extends as{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zm extends At{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gm extends At{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Vm extends At{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Mn(o,e,t){return $l(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function Ps(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function $l(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Hm(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rl(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i}function Jl(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class os{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wm extends os{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:co,endingEnd:co}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case ho:s=e,a=2*t-n;break;case uo:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ho:r=e,l=2*n-t;break;case uo:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),m=g*g,f=m*g,_=-d*f+2*d*m-d*g,y=(1+d)*f+(-1.5-2*d)*m+(-.5+d)*g+1,v=(-1-p)*f+(1.5+p)*m+.5*g,b=p*f-p*m;for(let w=0;w!==a;++w)s[w]=_*r[h+w]+y*r[c+w]+v*r[l+w]+b*r[u+w];return s}}class qm extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}}class jm extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ps(t,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ps(e.times,Array),values:Ps(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qi:t=this.InterpolantFactoryMethodDiscrete;break;case Ai:t=this.InterpolantFactoryMethodLinear;break;case sr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qi;case this.InterpolantFactoryMethodLinear:return Ai;case this.InterpolantFactoryMethodSmooth:return sr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=Mn(n,s,r),this.values=Mn(this.values,s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&$l(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Mn(this.times),t=Mn(this.values),n=this.getValueSize(),i=this.getInterpolation()===sr,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const m=t[u+g];if(m!==t[d+g]||m!==t[p+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const u=a*n,d=r*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=Mn(e,0,r),this.values=Mn(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=Mn(this.times,0),t=Mn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Xt.prototype.TimeBufferType=Float32Array;Xt.prototype.ValueBufferType=Float32Array;Xt.prototype.DefaultInterpolation=Ai;class Ni extends Xt{}Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Qi;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;class Ql extends Xt{}Ql.prototype.ValueTypeName="color";class ns extends Xt{}ns.prototype.ValueTypeName="number";class Xm extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)ei.slerpFlat(s,0,r,c-a,r,c,l);return s}}class Jn extends Xt{InterpolantFactoryMethodLinear(e){return new Xm(this.times,this.values,this.getValueSize(),e)}}Jn.prototype.ValueTypeName="quaternion";Jn.prototype.DefaultInterpolation=Ai;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;class Ui extends Xt{}Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Qi;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;class is extends Xt{}is.prototype.ValueTypeName="vector";class Km{constructor(e,t=-1,n,i=ph){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ht(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(Zm(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Xt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=Hm(l);l=rl(l,1,h),c=rl(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new ns(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,m){if(p.length!==0){const f=[],_=[];Jl(p,f,_,g),f.length!==0&&m.push(new u(d,f,_))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let m=0;m<d[g].morphTargets.length;m++)p[d[g].morphTargets[m]]=-1;for(const m in p){const f=[],_=[];for(let y=0;y!==d[g].morphTargets.length;++y){const v=d[g];f.push(v.time),_.push(v.morphTarget===m?1:0)}i.push(new ns(".morphTargetInfluence["+m+"]",f,_))}l=p.length*r}else{const p=".bones["+t[u].name+"]";n(is,p+".position",d,"pos",i),n(Jn,p+".quaternion",d,"rot",i),n(is,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ym(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ns;case"vector":case"vector2":case"vector3":case"vector4":return is;case"color":return Ql;case"quaternion":return Jn;case"bool":case"boolean":return Ni;case"string":return Ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Zm(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ym(o.type);if(o.times===void 0){const t=[],n=[];Jl(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Li={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class $m{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Jm=new $m;class Oi{constructor(e){this.manager=e!==void 0?e:Jm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const nn={};class Qm extends Error{constructor(e,t){super(e),this.response=t}}class Sa extends Oi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Li.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(nn[e]!==void 0){nn[e].push({onLoad:t,onProgress:n,onError:i});return}nn[e]=[],nn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=nn[e],u=c.body.getReader(),d=c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let m=0;const f=new ReadableStream({start(_){y();function y(){u.read().then(({done:v,value:b})=>{if(v)_.close();else{m+=b.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let E=0,C=h.length;E<C;E++){const x=h[E];x.onProgress&&x.onProgress(w)}_.enqueue(b),y()}})}}});return new Response(f)}else throw new Qm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Li.add(e,c);const h=nn[e];delete nn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=nn[e];if(h===void 0)throw this.manager.itemError(e),c;delete nn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class eg extends Oi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Li.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=ts("img");function l(){h(),Li.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class tg extends Oi{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new va,a=new Sa(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?r.image=c.image:c.data!==void 0&&(r.image.width=c.width,r.image.height=c.height,r.image.data=c.data),r.wrapS=c.wrapS!==void 0?c.wrapS:bt,r.wrapT=c.wrapT!==void 0?c.wrapT:bt,r.magFilter=c.magFilter!==void 0?c.magFilter:st,r.minFilter=c.minFilter!==void 0?c.minFilter:st,r.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(r.encoding=c.encoding),c.flipY!==void 0&&(r.flipY=c.flipY),c.format!==void 0&&(r.format=c.format),c.type!==void 0&&(r.type=c.type),c.mipmaps!==void 0&&(r.mipmaps=c.mipmaps,r.minFilter=Qn),c.mipmapCount===1&&(r.minFilter=st),c.generateMipmaps!==void 0&&(r.generateMipmaps=c.generateMipmaps),r.needsUpdate=!0,t&&t(r,c))},n,i),r}}class ng extends Oi{constructor(e){super(e)}load(e,t,n,i){const s=new vt,r=new eg(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ta extends Qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Pr=new Ue,al=new L,ol=new L;class Ea{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;al.setFromMatrixPosition(e.matrixWorld),t.position.copy(al),ol.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ol),t.updateMatrixWorld(),Pr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ig extends Ea{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sg extends Ta{constructor(e,t,n=0,i=Math.PI/3,s=0,r=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DefaultUp),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new ig}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ll=new Ue,Wi=new L,Ir=new L;class rg extends Ea{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Wi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wi),Ir.copy(n.position),Ir.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ir),n.updateMatrixWorld(),i.makeTranslation(-Wi.x,-Wi.y,-Wi.z),ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll)}}class ag extends Ta{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class og extends Ea{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ec extends Ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DefaultUp),this.updateMatrix(),this.target=new Qe,this.shadow=new og}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jn{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class lg extends Oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Li.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Li.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Aa="\\[\\]\\.:\\/",cg=new RegExp("["+Aa+"]","g"),Ca="[^"+Aa+"]",hg="[^"+Aa.replace("\\.","")+"]",ug=/((?:WC+[\/:])*)/.source.replace("WC",Ca),dg=/(WCOD+)?/.source.replace("WCOD",hg),fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ca),pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ca),mg=new RegExp("^"+ug+dg+fg+pg+"$"),gg=["material","materials","bones","map"];class _g{constructor(e,t,n){const i=n||He.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class He{constructor(e,t,n){this.path=t,this.parsedPath=n||He.parseTrackName(t),this.node=He.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new He.Composite(e,t,n):new He(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cg,"")}static parseTrackName(e){const t=mg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);gg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=He.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}He.Composite=_g;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class xg{constructor(e,t,n=0,i=1/0){this.ray=new Xs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Yr(e,this,n,t),n.sort(cl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Yr(e[i],this,n,t);return n.sort(cl),n}}function cl(o,e){return o.distance-e.distance}function Yr(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let s=0,r=i.length;s<r;s++)Yr(i[s],e,t,!0)}}const ln=yg();function yg(){const o=new ArrayBuffer(4),e=new Float32Array(o),t=new Uint32Array(o),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:r,offsetTable:a}}function vg(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=pt(o,-65504,65504),ln.floatView[0]=o;const e=ln.uint32View[0],t=e>>23&511;return ln.baseTable[t]+((e&8388607)>>ln.shiftTable[t])}function bg(o){const e=o>>10;return ln.uint32View[0]=ln.mantissaTable[ln.offsetTable[e]+(o&1023)]+ln.exponentTable[e],ln.floatView[0]}var Is=Object.freeze({__proto__:null,toHalfFloat:vg,fromHalfFloat:bg});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);class wg extends Oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ag(t)}),this.register(function(t){return new Fg(t)}),this.register(function(t){return new kg(t)}),this.register(function(t){return new Lg(t)}),this.register(function(t){return new Rg(t)}),this.register(function(t){return new Dg(t)}),this.register(function(t){return new Pg(t)}),this.register(function(t){return new Eg(t)}),this.register(function(t){return new Ig(t)}),this.register(function(t){return new Cg(t)}),this.register(function(t){return new Sg(t)}),this.register(function(t){return new Ng(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=jn.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Sa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={};if(typeof e=="string")s=e;else if(jn.decodeText(new Uint8Array(e,0,4))===tc){try{r[Pe.KHR_BINARY_GLTF]=new Ug(e)}catch(u){i&&i(u);return}s=r[Pe.KHR_BINARY_GLTF].content}else s=jn.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Zg(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,r[u.name]=!0}if(l.extensionsUsed)for(let h=0;h<l.extensionsUsed.length;++h){const u=l.extensionsUsed[h],d=l.extensionsRequired||[];switch(u){case Pe.KHR_MATERIALS_UNLIT:r[u]=new Tg;break;case Pe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:r[u]=new zg;break;case Pe.KHR_DRACO_MESH_COMPRESSION:r[u]=new Og(l,this.dracoLoader);break;case Pe.KHR_TEXTURE_TRANSFORM:r[u]=new Bg;break;case Pe.KHR_MESH_QUANTIZATION:r[u]=new Gg;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Mg(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Pe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Sg{constructor(e){this.parser=e,this.name=Pe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new pe(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ec(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ag(h),c.distance=u;break;case"spot":c=new sg(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Tg{constructor(){this.name=Pe.KHR_MATERIALS_UNLIT}getMaterialType(){return An}extendParams(e,t,n){const i=[];e.color=new pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ve))}return Promise.all(i)}}class Eg{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Ag{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(a,a)}return Promise.all(s)}}class Cg{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Lg{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Ve)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Rg{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Dg{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new pe(a[0],a[1],a[2]),Promise.all(s)}}class Pg{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Ig{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new pe(a[0],a[1],a[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Ve)),Promise.all(s)}}class Fg{constructor(e){this.parser=e,this.name=Pe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class kg{constructor(e){this.parser=e,this.name=Pe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ng{constructor(e){this.name=Pe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):r.ready.then(function(){const p=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}const tc="glTF",qi=12,hl={JSON:1313821514,BIN:5130562};class Ug{constructor(e){this.name=Pe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qi);if(this.header={magic:jn.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==tc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-qi,i=new DataView(e,qi);let s=0;for(;s<n;){const r=i.getUint32(s,!0);s+=4;const a=i.getUint32(s,!0);if(s+=4,a===hl.JSON){const l=new Uint8Array(e,qi+s,r);this.content=jn.decodeText(l)}else if(a===hl.BIN){const l=qi+s;this.body=e.slice(l,l+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Og{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Pe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const h in r){const u=$r[h]||h.toLowerCase();a[u]=r[h]}for(const h in e.attributes){const u=$r[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],p=ss[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const p in d.attributes){const g=d.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}u(d)},a,c)})})}}class Bg{constructor(){this.name=Pe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Zr extends as{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),r=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new pe().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",r)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class zg{constructor(){this.name=Pe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Zr}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new pe(1,1,1),e.opacity=1;const s=[];if(Array.isArray(i.diffuseFactor)){const r=i.diffuseFactor;e.color.fromArray(r),e.opacity=r[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture,Ve)),e.emissive=new pe(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new pe(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const r=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",r)),s.push(n.assignTexture(e,"specularMap",r,Ve))}return Promise.all(s)}createMaterial(e){const t=new Zr(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Ri,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class Gg{constructor(){this.name=Pe.KHR_MESH_QUANTIZATION}}class nc extends os{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*c,m=g-c,f=-2*p+3*d,_=p-d,y=1-f,v=_-d+u;for(let b=0;b!==a;b++){const w=r[m+b+a],E=r[m+b+l]*h,C=r[g+b+a],x=r[g+b]*h;s[b]=y*w+v*E+f*C+_*x}return s}}const Vg=new ei;class Hg extends nc{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Vg.fromArray(s).normalize().toArray(s),s}}const sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ul={9728:ht,9729:st,9984:Gr,9985:Ll,9986:Vr,9987:Qn},dl={33071:bt,33648:Vs,10497:Ti},fl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$r={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Sn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wg={CUBICSPLINE:void 0,LINEAR:Ai,STEP:Qi},Fr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qg(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new as({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),o.DefaultMaterial}function ji(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bn(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jg(o,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;r.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(o.morphAttributes.position=h),i&&(o.morphAttributes.normal=u),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function Xg(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Kg(o){const e=o.extensions&&o.extensions[Pe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+pl(e.attributes):t=o.indices+":"+pl(o.attributes)+":"+o.mode,t}function pl(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function Jr(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Yg(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class Zg{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Mg,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new ng(this.options.manager):this.textureLoader=new lg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};ji(s,a,i),Bn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,h]of r.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Pe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(jn.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=fl[i.type],c=ss[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,f;if(p&&p!==u){const _=Math.floor(d/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let v=t.cache.get(y);v||(m=new c(a,_*p,i.count*p/h),v=new Im(m,p/h),t.cache.add(y,v)),f=new ya(v,l,d%p/h,g)}else a===null?m=new c(i.count*l):m=new c(a,d,i.count*l),f=new wt(m,l,g);if(i.sparse!==void 0){const _=fl.SCALAR,y=ss[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,w=new y(r[1],v,i.sparse.count*_),E=new c(r[2],b,i.sparse.count*l);a!==null&&(f=new wt(f.array.slice(),f.itemSize,f.normalized));for(let C=0,x=w.length;C<x;C++){const T=w[C];if(f.setX(T,E[C*l]),l>=2&&f.setY(T,E[C*l+1]),l>=3&&f.setZ(T,E[C*l+2]),l>=4&&f.setW(T,E[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,r.name&&(h.name=r.name);const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=ul[d.magFilter]||st,h.minFilter=ul[d.minFilter]||Qn,h.wrapS=dl[d.wrapS]||Ti,h.wrapT=dl[d.wrapT]||Ti,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=i.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(m){const f=new vt(m);f.needsUpdate=!0,d(f)}),t.load(jn.resolveURL(u,s.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=r.mimeType||Yg(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Pe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Pe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[Pe.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Zl,At.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Yl,At.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return as}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},l=s.extensions||{},c=[];if(l[Pe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=i[Pe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];r=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else if(l[Pe.KHR_MATERIALS_UNLIT]){const u=i[Pe.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ve)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=cn);const h=s.alphaMode||Fr.OPAQUE;if(h===Fr.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Fr.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==An&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ie(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&r!==An&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==An&&(a.emissive=new pe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==An&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ve)),Promise.all(c).then(function(){let u;return r===Zr?u=i[Pe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):u=new r(a),s.name&&(u.name=s.name),Bn(u,s),t.associations.set(u,{materials:e}),s.extensions&&ji(i,u,s),u})}createUniqueName(e){const t=He.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Pe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ml(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Kg(c),u=i[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[Pe.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=ml(new Ft,c,t),i[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?qg(this.cache):this.getDependency("material",r[l].material);a.push(h)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const m=h[p],f=r[p];let _;const y=c[p];if(f.mode===sn.TRIANGLES||f.mode===sn.TRIANGLE_STRIP||f.mode===sn.TRIANGLE_FAN||f.mode===void 0)_=s.isSkinnedMesh===!0?new km(m,y):new Vt(m,y),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),f.mode===sn.TRIANGLE_STRIP?_.geometry=gl(_.geometry,mh):f.mode===sn.TRIANGLE_FAN&&(_.geometry=gl(_.geometry,Dl));else if(f.mode===sn.LINES)_=new Um(m,y);else if(f.mode===sn.LINE_STRIP)_=new wa(m,y);else if(f.mode===sn.LINE_LOOP)_=new Om(m,y);else if(f.mode===sn.POINTS)_=new Bm(m,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(_.geometry.morphAttributes).length>0&&Xg(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Bn(_,s),f.extensions&&ji(i,_,f),t.assignFinalMaterial(_),u.push(_)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return u[0];const d=new Hn;t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yt(Ih.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new _a(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],a=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const u=n.channels[c],d=n.samplers[u.sampler],p=u.target,g=p.node,m=n.parameters!==void 0?n.parameters[d.input]:d.input,f=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),r.push(this.getDependency("accessor",f)),a.push(d),l.push(p)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2],p=c[3],g=c[4],m=[];for(let _=0,y=h.length;_<y;_++){const v=h[_],b=u[_],w=d[_],E=p[_],C=g[_];if(v===void 0)continue;v.updateMatrix();let x;switch(Sn[C.path]){case Sn.weights:x=ns;break;case Sn.rotation:x=Jn;break;case Sn.position:case Sn.scale:default:x=is;break}const T=v.name?v.name:v.uuid,P=E.interpolation!==void 0?Wg[E.interpolation]:Ai,O=[];Sn[C.path]===Sn.weights?v.traverse(function(U){U.morphTargetInfluences&&O.push(U.name?U.name:U.uuid)}):O.push(T);let Q=w.array;if(w.normalized){const U=Jr(Q.constructor),I=new Float32Array(Q.length);for(let B=0,K=Q.length;B<K;B++)I[B]=Q[B]*U;Q=I}for(let U=0,I=O.length;U<I;U++){const B=new x(O[U]+"."+Sn[C.path],b.array,Q,P);E.interpolation==="CUBICSPLINE"&&(B.createInterpolant=function(X){const z=this instanceof Jn?Hg:nc;return new z(this.times,this.values,this.getValueSize()/3,X)},B.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(B)}}const f=n.name?n.name:"animation_"+e;return new Km(f,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new Kl:a.length>1?l=new Hn:a.length===1?l=a[0]:l=new Qe,l!==a[0])for(let c=0,h=a.length;c<h;c++)l.add(a[c]);if(s.name&&(l.userData.name=s.name,l.name=r),Bn(l,s),s.extensions&&ji(n,l,s),s.matrix!==void 0){const c=new Ue;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,r=new Hn;i.name&&(r.name=s.createUniqueName(i.name)),Bn(r,i),i.extensions&&ji(n,r,i);const a=i.nodes||[],l=[];for(let c=0,h=a.length;c<h;c++)l.push(ic(a[c],r,t,s));return Promise.all(l).then(function(){const c=h=>{const u=new Map;for(const[d,p]of s.associations)(d instanceof At||d instanceof vt)&&u.set(d,p);return h.traverse(d=>{const p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=c(r),r})}}function ic(o,e,t,n){const i=t.nodes[o];return n.getDependency("node",o).then(function(s){if(i.skin===void 0)return s;let r;return n.getDependency("skin",i.skin).then(function(a){r=a;const l=[];for(let c=0,h=r.joints.length;c<h;c++)l.push(n.getDependency("node",r.joints[c]));return Promise.all(l)}).then(function(a){return s.traverse(function(l){if(!l.isMesh)return;const c=[],h=[];for(let u=0,d=a.length;u<d;u++){const p=a[u];if(p){c.push(p);const g=new Ue;r.inverseBindMatrices!==void 0&&g.fromArray(r.inverseBindMatrices.array,u*16),h.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',r.joints[u])}l.bind(new ba(c,h),l.matrixWorld)}),s})}).then(function(s){e.add(s);const r=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const h=a[l];r.push(ic(h,s,t,n))}}return Promise.all(r)})}function $g(o,e,t){const n=e.attributes,i=new Pi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const h=Jr(ss[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,l=new L;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const m=Jr(ss[d.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new Ii;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function ml(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=$r[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return Bn(o,e),$g(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?jg(o,e.targets,t):o})}function gl(o,e){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===Dl)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s}class Jg extends tg{constructor(e){super(e),this.type=hn}parse(e){const a=function(v,b){switch(v){case 1:console.error("THREE.RGBELoader Read Error: "+(b||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(b||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(b||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(b||""))}return-1},u=`
`,d=function(v,b,w){b=b||1024;let C=v.pos,x=-1,T=0,P="",O=String.fromCharCode.apply(null,new Uint16Array(v.subarray(C,C+128)));for(;0>(x=O.indexOf(u))&&T<b&&C<v.byteLength;)P+=O,T+=O.length,C+=128,O+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(C,C+128)));return-1<x?(v.pos+=T+x+1,P+O.slice(0,x)):!1},p=function(v){const b=/^#\?(\S+)/,w=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,x=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,T={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let P,O;if(v.pos>=v.byteLength||!(P=d(v)))return a(1,"no header found");if(!(O=P.match(b)))return a(3,"bad initial token");for(T.valid|=1,T.programtype=O[1],T.string+=P+`
`;P=d(v),P!==!1;){if(T.string+=P+`
`,P.charAt(0)==="#"){T.comments+=P+`
`;continue}if((O=P.match(w))&&(T.gamma=parseFloat(O[1])),(O=P.match(E))&&(T.exposure=parseFloat(O[1])),(O=P.match(C))&&(T.valid|=2,T.format=O[1]),(O=P.match(x))&&(T.valid|=4,T.height=parseInt(O[1],10),T.width=parseInt(O[2],10)),T.valid&2&&T.valid&4)break}return T.valid&2?T.valid&4?T:a(3,"missing image size specifier"):a(3,"missing format specifier")},g=function(v,b,w){const E=b;if(E<8||E>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);if(E!==(v[2]<<8|v[3]))return a(3,"wrong scanline width");const C=new Uint8Array(4*b*w);if(!C.length)return a(4,"unable to allocate buffer space");let x=0,T=0;const P=4*E,O=new Uint8Array(4),Q=new Uint8Array(P);let U=w;for(;U>0&&T<v.byteLength;){if(T+4>v.byteLength)return a(1);if(O[0]=v[T++],O[1]=v[T++],O[2]=v[T++],O[3]=v[T++],O[0]!=2||O[1]!=2||(O[2]<<8|O[3])!=E)return a(3,"bad rgbe scanline format");let I=0,B;for(;I<P&&T<v.byteLength;){B=v[T++];const X=B>128;if(X&&(B-=128),B===0||I+B>P)return a(3,"bad scanline data");if(X){const z=v[T++];for(let k=0;k<B;k++)Q[I++]=z}else Q.set(v.subarray(T,T+B),I),I+=B,T+=B}const K=E;for(let X=0;X<K;X++){let z=0;C[x]=Q[X+z],z+=E,C[x+1]=Q[X+z],z+=E,C[x+2]=Q[X+z],z+=E,C[x+3]=Q[X+z],x+=4}U--}return C},m=function(v,b,w,E){const C=v[b+3],x=Math.pow(2,C-128)/255;w[E+0]=v[b+0]*x,w[E+1]=v[b+1]*x,w[E+2]=v[b+2]*x,w[E+3]=1},f=function(v,b,w,E){const C=v[b+3],x=Math.pow(2,C-128)/255;w[E+0]=Is.toHalfFloat(Math.min(v[b+0]*x,65504)),w[E+1]=Is.toHalfFloat(Math.min(v[b+1]*x,65504)),w[E+2]=Is.toHalfFloat(Math.min(v[b+2]*x,65504)),w[E+3]=Is.toHalfFloat(1)},_=new Uint8Array(e);_.pos=0;const y=p(_);if(y!==-1){const v=y.width,b=y.height,w=g(_.subarray(_.pos),v,b);if(w!==-1){let E,C,x;switch(this.type){case zt:x=w.length/4;const T=new Float32Array(x*4);for(let O=0;O<x;O++)m(w,O*4,T,O*4);E=T,C=zt;break;case hn:x=w.length/4;const P=new Uint16Array(x*4);for(let O=0;O<x;O++)f(w,O*4,P,O*4);E=P,C=hn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:v,height:b,data:E,header:y.string,gamma:y.gamma,exposure:y.exposure,type:C}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(r,a){switch(r.type){case zt:case hn:r.encoding=Ln,r.minFilter=st,r.magFilter=st,r.generateMipmaps=!1,r.flipY=!0;break}t&&t(r,a)}return super.load(e,s,n,i)}}const Ji=class Ji{constructor(e,t,n,i=.05,s=1e3){this.camobj=new yt(t,n,i,s),e.scene.add(this.camobj)}setAspect(e){this.camobj.aspect=e,this.camobj.updateProjectionMatrix()}setFOV(e){this.camobj.fov=e,this.camobj.updateProjectionMatrix()}setPosition(e,t=[0,0,0],n=null){this.camobj.position.set(e[0],e[1],e[2]),this.camobj.lookAt(t[0],t[1],t[2]),n!==null&&this.setFOV(n)}getCoords(e,t,n=!1){const i=new Ie(e[0],e[1]);return Ji.raycaster.setFromCamera(i,this.camobj),Ji.raycaster.intersectObject(t,n)}getTableTopCoords(e,t){const n=this.getCoords(e,t,!0);return n.length===1?[n[0].point.x,0,-n[0].point.z]:null}};ut(Ji,"raycaster",new xg);let Qr=Ji;class Qg{constructor(e,t,n,i,s,r,a,l){this.position={...t},this.angle2Dyaw=n,this.anglePitch=0,this.angleRoll=0,this.area=e,this.id=he.nextid++,he.objectholder[this.id]=this,(i!==void 0||r!==void 0)&&this.add3D({geometry:i,material:s,obj3d:r},a,l)}add2DPhys(){const e=this.area.engine.BodyDefs[this.BodyDName],t=this.area.engine.ColFixDefs[this.ColFixDName];e===void 0||t===void 0||(he.Phys.RAPIER!==void 0?(e.setTranslation(this.position[0],this.position[2]),e.setRotation(this.angle2Dyaw),e.setUserData(this),e.setCanSleep(!1),this.physbody=this.area.world.createRigidBody(e),this.physbody.enableCcd(!0),this.sensor===!0?t.setSensor(!0):t.setSensor(!1),this.collider=this.area.world.createCollider(t,this.physbody),this.area.engine.RapierHandles[this.collider.handle]=this):(he.Phys.Box2D===void 0?(e.position.x=this.position[0],e.position.y=this.position[2],e.angle=this.angle2Dyaw):(e.set_position(new he.Phys.Box2DCommonMath.b2Vec2(this.position[0],this.position[2])),e.set_angle(this.angle2Dyaw)),this.b2dbody=this.area.world.CreateBody(e),this.b2dfixture=this.b2dbody.CreateFixture(t),he.Phys.Box2D===void 0?this.b2dfixture.SetUserData(this):this.b2dfixture.SetUserData(this.id),this.sensor===!0&&this.b2dfixture.SetSensor(!0)),this.active===!1&&this.SetActive(!1))}SetActive(e){if(this.active=e,he.Phys.RAPIER!==void 0){if(this.physbody===void 0)return;this.killVelo(),this.physbody.setEnabled(this.active)}else{if(this.b2dfixture===void 0)return;this.killVelo(),e?this.b2dbody.SetActive(!0):this.b2dbody.SetActive(!1)}}replaceMaterialOnMeshChildren(e,t){if(e.isMesh)if(t===null){if(e.userData.oldMaterial!==void 0){const n=e.material;e.material=e.userData.oldMaterial,e.userData.oldMaterial=n}}else e.userData.oldMaterial=e.material,e.userData.currentcolour=e.material.color,e.material=this.area.engine.newMaterial(void 0,e.userData.currentcolour,t.materialtype,!1);e.children.forEach(n=>{this.replaceMaterialOnMeshChildren(n,t)})}replaceMaterial(e){this.mesh!==void 0&&this.replaceMaterialOnMeshChildren(this.mesh,e)}setChildrenShadows(e,t,n){e.isMesh&&(e.receiveShadow=n,e.castShadow=t),e.children.forEach(i=>{this.setChildrenShadows(i,t,n)})}add3D(e,t=!1,n=!0){e.obj3d!==void 0?this.mesh=e.obj3d:this.mesh=new Vt(e.geometry,e.material),this.setChildrenShadows(this.mesh,t,n),this.area.scene.add(this.mesh),this.mesh.position.set(this.position[0],this.position[1],this.position[2])}updateOb(){this.getPosFromBox2D(),this.onUpdate!==void 0&&this.onUpdate(),this.update3DPos()}getPosFromBox2D(){if(this.hasActiveBody()){let e;he.Phys.RAPIER!==void 0?e=this.physbody.translation():he.Phys.Box2D===void 0?e=this.b2dbody.m_xf.position:e=this.b2dbody.GetPosition(),this.position[0]=e.x,this.position[2]=e.y}return this.position}update3DPos(e=null){e!==null&&(this.position={...e.position},this.angle2Dyaw=e.angle2Dyaw||0,this.anglePitch=e.anglePitch||0,this.angleRoll=e.angleRoll||0),this.mesh!==void 0&&(this.mesh.position.set(this.position[0],this.position[1],this.position[2]),this.mesh.rotation.set(this.angleRoll,this.angle2Dyaw,this.anglePitch))}resetForce(){if(this.hasActiveBody())if(he.Phys.RAPIER!==void 0)this.physbody.resetForces(!0);else throw{message:"box 2d not implemented.."}}applyForce(e){if(he.Phys.RAPIER!==void 0)this.physbody.addForce(e,!0);else{let t,n;he.Phys.Box2D===void 0?(t=e,n=this.b2dbody.m_xf.position):(t=new he.Phys.Box2DCommonMath.b2Vec2(e.x,e.y),n=this.b2dbody.GetLocalCenter()),this.b2dbody.ApplyForce(t,n)}}hasActiveBody(){var e,t;return he.Phys.RAPIER!==void 0?(e=this.physbody)==null?void 0:e.isEnabled():((t=this.b2dbody)==null?void 0:t.IsActive())===!0}getLinearVelo(){if(this.hasActiveBody()){let e,t,n;if(he.Phys.RAPIER!==void 0)e=this.physbody.linvel(),t=this.physbody.angvel(),n=this.physbody.isMoving();else{if(he.Phys.Box2D===void 0)e=this.b2dbody.m_linearVelocity,t=this.b2dbody.m_angularVelocity;else{const i=this.b2dbody.GetLinearVelocity();e={x:i.get_x(),y:i.get_y()},t=this.b2dbody.GetAngularVelocity()}n=e.x!==0||e.y!==0||t!==0}if(n)return e}return null}killVelo(){let e={x:0,y:0};he.Phys.RAPIER!==void 0?(this.physbody.setLinvel(e,!0),this.physbody.setAngvel(0,!0)):(he.Phys.Box2D!==void 0&&(e=he.Phys.Box2D.ZERO),this.b2dbody.SetLinearVelocity(e),this.b2dbody.SetAngularVelocity(0))}setPosition(e=null,t=null){e!==null&&(this.position={...e}),t!==null&&(this.angle2Dyaw=t),he.Phys.RAPIER!==void 0?(this.physbody.setTranslation({x:this.position[0],y:this.position[2]}),this.physbody.setRotation(this.angle2Dyaw)):this.b2dfixture!==void 0&&(he.Phys.Box2D===void 0?(this.b2dbody.SetAngle(this.angle2Dyaw),this.b2dbody.SetPosition({x:this.position[0],y:this.position[2]})):this.b2dbody.SetTransform(new he.Phys.Box2DCommonMath.b2Vec2(this.position[0],this.position[2]),this.angle2Dyaw)),this.update3DPos()}}class e0{constructor(e,t,n){this.active=e,this.engine=t,this.gameObjects=[],this.scene=new Pm,n&&this.Create2dWorld();const i=new ec(16777215,1);i.position.set(-.1,1,.6),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=-20,i.shadow.camera.far=20,i.shadow.camera.left=-20*2,i.shadow.camera.right=20*2,i.shadow.camera.top=35,i.shadow.camera.bottom=-35,this.scene.add(i),this.thecamera=new Qr(this,60,window.innerWidth/window.innerHeight)}CreateContactHandlers(e=0,t=!1){if(he.Phys.RAPIER!==void 0)this.gameObjects.forEach(n=>{n.collider!==void 0&&(n.onCollisionBegin!==void 0||n.onCollisionEnd!==void 0||t)&&(n.collider.setActiveEvents(he.Phys.RAPIER.ActiveEvents.COLLISION_EVENTS|he.Phys.RAPIER.ActiveEvents.CONTACT_FORCE_EVENTS),n.collider.setContactForceEventThreshold(e))});else if(he.Phys.Box2D===void 0)this.world.m_contactManager.m_contactListener.BeginContact=n=>{const{obA:i,obB:s}=this.getContactObjects(n);this.handleContact(i,s,!0,n)},this.world.m_contactManager.m_contactListener.EndContact=n=>{const{obA:i,obB:s}=this.getContactObjects(n);this.handleContact(i,s,!1,n)};else{const n=new he.Phys.Box2D.JSContactListener;n.BeginContact=i=>{const s=he.Phys.Box2D.wrapPointer(i,he.Phys.Box2D.b2Contact),{obA:r,obB:a}=this.getContactObjects(s);this.handleContact(r,a,!0,s)},n.EndContact=i=>{const s=he.Phys.Box2D.wrapPointer(i,he.Phys.Box2D.b2Contact),{obA:r,obB:a}=this.getContactObjects(s);this.handleContact(r,a,!1,s)},n.PreSolve=(i,s)=>{i=he.Phys.Box2D.wrapPointer(i,he.Phys.Box2D.b2Contact),s=he.Phys.Box2D.wrapPointer(s,he.Phys.Box2D.b2Manifold)},n.PostSolve=(i,s)=>{i=he.Phys.Box2D.wrapPointer(i,he.Phys.Box2D.b2Contact),s=he.Phys.Box2D.wrapPointer(s,he.Phys.Box2D.b2ContactImpulse)},this.world.SetContactListener(n)}}Create2dWorld(){he.Phys.RAPIER!==void 0?this.world=new he.Phys.RAPIER.World({x:0,y:0}):this.world=new he.Phys.Box2DDynamics.b2World(new he.Phys.Box2DCommonMath.b2Vec2(0,0),!0)}getContactObjects(e){return he.Phys.Box2D===void 0?{obA:e.m_fixtureA.m_userData,obB:e.m_fixtureB.m_userData}:{obA:he.objectholder[e.GetFixtureA().GetUserData()],obB:he.objectholder[e.GetFixtureB().GetUserData()]}}handleContact(e,t,n,i){n?(e.onCollisionBegin!==void 0&&e.onCollisionBegin(t,i),t.onCollisionBegin!==void 0&&t.onCollisionBegin(e,i)):(e.onCollisionEnd!==void 0&&e.onCollisionEnd(t,i),t.onCollisionEnd!==void 0&&t.onCollisionEnd(e,i))}addObjectRaw(e,t,n,i,s,r,a){const l=new Qg(this,e,t,n,i,s,r,a);return this.gameObjects.push(l),l}addObject(e,t,n,i,s,r,a){return this.addObjectRaw(e,t,this.engine.geometries[n],this.engine.materials[i],this.engine.obj3ds[s],r,a)}replaceMaterials(e){this.gameObjects.forEach(t=>{t.replaceMaterial(e)})}clearforces(){he.Phys.RAPIER!==void 0?this.gameObjects.forEach(e=>{e.resetForce()}):this.world.ClearForces()}updateArea(e,t){if(he.Phys.RAPIER!==void 0){const s=new he.Phys.RAPIER.EventQueue(!0);this.world.numSolverIterations=10,this.world.timestep=e*.001,this.world.step(s),s.drainCollisionEvents((r,a,l)=>{const c=this.engine.RapierHandles[r],h=this.engine.RapierHandles[a];this.handleContact(c,h,l)}),s.drainContactForceEvents(r=>{t(r)})}else this.world.Step(e*.001,10,10);let n=!1,i=0;return this.gameObjects.forEach(s=>{s.updateOb();const r=s.getLinearVelo();if(r!==null){n=!0;const a=Math.pow(r.x,2)+Math.pow(r.y,2);a>i&&(i=a)}}),{angular:n,maxvelo:i}}}const be=class be{constructor(e,t=!1){e&&(this.canvas=document.createElement("canvas"),this.renderer=new Xl({canvas:this.canvas,antialias:!0}),this.ctx=this.renderer.getContext(),this.renderer.setClearColor(0),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tl),this.geometries={},this.obj3ds={},this.builtverts={},this.materials={},this.textures={},this.areas=[],this.createb2d=t,t&&this.CreateDefault2dBodies()}async Init2DPhysics(e=!0){if(e){await Sc(()=>import("./rapier.es-DFyteGHf.js"),[]).then(async t=>{be.Phys.RAPIER=await t,await be.Phys.RAPIER.init()});return}Box2D.Dynamics!==void 0?(be.Phys.Box2DDynamics=Box2D.Dynamics,be.Phys.Box2DCommonMath=Box2D.Common.Math,be.Phys.Box2DCollisionShapes=Box2D.Collision.Shapes):await Box2D().then(t=>{be.Phys.Box2D=t,be.Phys.Box2DDynamics=t,be.Phys.Box2DCommonMath=t,be.Phys.Box2DCollisionShapes=t})}CreateDefault2dBodies(){if(this.ColFixDefs={},this.BodyDefs={},this.RapierHandles={},be.Phys.RAPIER!==void 0){this.BodyDefs.static=be.Phys.RAPIER.RigidBodyDesc.newStatic(),this.BodyDefs.dynamic=be.Phys.RAPIER.RigidBodyDesc.newDynamic(),this.BodyDefs.dynamic.setLinearDamping(.5),this.BodyDefs.dynamic.setAngularDamping(.5),this.BodyDefs.dynamic.setCanSleep(!1);return}this.BodyDefs.dynamic=new be.Phys.Box2DDynamics.b2BodyDef,this.BodyDefs.static=new be.Phys.Box2DDynamics.b2BodyDef,be.Phys.Box2D===void 0?(this.BodyDefs.dynamic.type=Box2D.Dynamics.b2Body.b2_dynamicBody,this.BodyDefs.dynamic.bullet=!0,this.BodyDefs.dynamic.linearDamping=.5,this.BodyDefs.dynamic.angularDamping=.5,this.BodyDefs.static.type=Box2D.Dynamics.b2Body.b2_staticBody):(this.BodyDefs.dynamic.set_type(be.Phys.Box2D.b2_dynamicBody),this.BodyDefs.dynamic.set_bullet(!0),this.BodyDefs.dynamic.set_linearDamping(.5),this.BodyDefs.dynamic.set_angularDamping(.5),this.BodyDefs.static.set_type(be.Phys.Box2D.b2_staticBody))}newArea(e=!0){const t=new e0(e,this,this.createb2d);return this.areas.push(t),t}getChannelFromColour(e,t){return e>>t*8&255}newTexture(e){if(this.textures[e]!==void 0)return this.textures[e];const t=this.getChannelFromColour(e,0),n=this.getChannelFromColour(e,1),i=this.getChannelFromColour(e,2),s=t<<16|n<<8|i,r=new Uint32Array(4);r.fill(s);const a=new Uint8Array(r.buffer),l=new va(a,2,2);return l.needsUpdate=!0,this.textures[e]=l,l}newMaterial(e,t,n,i=.4,s=!1){if(this.materials[e]!==void 0&&e!==void 0)return this.materials[e];let r;const a=s?{map:this.newTexture(t)}:{color:t};switch(n){default:r=new An(a);break;case"toon":r=new Gm(a);break;case"lambert":r=new Vm(a);break;case"phong":r=new zm(a);break;case"standard":r=new as(a),r.roughness=i;break;case"physical":r=new Rn(a),r.roughness=i;break}return e!==void 0&&(this.materials[e]=r),r}newFixtureDef(e,t,n={kgpersqm:1,friction:.5,bounce:.5}){let i,s;if(be.Phys.RAPIER!==void 0){switch(t.name){case"circle":i=new be.Phys.RAPIER.Ball(t.radius);break;case"box":i=new be.Phys.RAPIER.Cuboid(t.x/2,t.y/2);break;case"verts":const a=[];t.array.forEach(l=>{a.push(l.x),a.push(l.y)}),i=new be.Phys.RAPIER.ConvexPolygon(a);break;default:throw{message:"no valid shape!"}}s=new be.Phys.RAPIER.ColliderDesc(i),s.setDensity(n.kgpersqm),s.setFriction(n.friction),s.setRestitution(n.bounce)}else{switch(t.name){case"circle":be.Phys.Box2D===void 0?i=new be.Phys.Box2DCollisionShapes.b2CircleShape(t.radius):(i=new be.Phys.Box2DCollisionShapes.b2CircleShape,i.set_m_radius(t.radius));break;case"box":i=new be.Phys.Box2DCollisionShapes.b2PolygonShape,i.SetAsBox(t.x/2,t.y/2);break;case"verts":if(i=new be.Phys.Box2DCollisionShapes.b2PolygonShape,be.Phys.Box2D===void 0)i.SetAsArray(t.array,t.array.length);else{const a=be.Phys.Box2D._malloc(t.array.length*8);var r=0;for(let c=0;c<t.array.length;c++)be.Phys.Box2D.HEAPF32[a+r>>2]=t.array[c].x,be.Phys.Box2D.HEAPF32[a+(r+4)>>2]=t.array[c].y,r+=8;const l=be.Phys.Box2D.wrapPointer(a,be.Phys.Box2D.b2Vec2);i.Set(l,t.array.length)}break;default:throw{message:"no valid shape!"}}s=new be.Phys.Box2DDynamics.b2FixtureDef,be.Phys.Box2D===void 0?(s.shape=i,s.density=n.kgpersqm,s.friction=n.friction,s.restitution=n.bounce):(s.set_shape(i),s.set_density(n.kgpersqm),s.set_friction(n.friction),s.set_restitution(n.bounce))}return this.ColFixDefs[e]=s,s}resize(){this.ctx.canvas.width=window.innerWidth,this.ctx.canvas.height=window.innerHeight,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.areas[0].thecamera.setAspect(window.innerWidth/window.innerHeight)}update(e,t){t===void 0&&(t=i=>{});const n=[];return this.areas.forEach(i=>{i.active===!0&&i.world!==void 0&&(n.push(i.updateArea(e,t)),i.clearforces())}),n}render(e=0){this.renderer.render(this.areas[e].scene,this.areas[e].thecamera.camobj),this.debugcanvas!==void 0&&this.areas[e].world.DrawDebugData()}setBox2dDebug(){this.debugcanvas=document.createElement("canvas");const e=new Box2D.Dynamics.b2DebugDraw;return e.SetSprite(debugcanvas.getContext("2d")),e.SetDrawScale(1),e.SetFillAlpha(.3),e.SetLineThickness(1),e.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit|Box2D.Dynamics.b2DebugDraw.e_jointBit),this.areas[0].world.SetDebugDraw(e),this.debugcanvas}add3Dpoint(e,t,n){e.push(t.x),e.push(n),e.push(t.y)}newGeoBox(e,t,n,i){this.geometries[e]=new Fi(t,n,i)}newGeoSphere(e,t){this.geometries[e]=new Ma(t)}newGeoMeshFrom2DVerts(e,t,n){this.geometries[e]=new Ft;const i=[{v:0,t:!0},{v:2,t:!0},{v:1,t:!0},{v:0,t:!0},{v:3,t:!0},{v:2,t:!0},{v:0,t:!1},{v:3,t:!0},{v:0,t:!0},{v:0,t:!1},{v:3,t:!1},{v:3,t:!0},{v:1,t:!0},{v:2,t:!0},{v:2,t:!1},{v:2,t:!1},{v:1,t:!1},{v:1,t:!0},{v:0,t:!0},{v:1,t:!0},{v:1,t:!1},{v:1,t:!1},{v:0,t:!1},{v:0,t:!0},{v:2,t:!0},{v:3,t:!0},{v:3,t:!1},{v:3,t:!1},{v:2,t:!1},{v:2,t:!0}],s=[];i.forEach(a=>{this.add3Dpoint(s,t[a.v],a.t?n/2:-n/2)}),this.builtverts[e]=s;const r=new Float32Array(s);this.geometries[e].setAttribute("position",new wt(r,3))}async newGeoMeshGLTF(e){this.loader===void 0&&(this.loader=new wg),this.loader.load(e.filename,t=>{e.scene=t.scene,this.obj3ds[e.filename]=t.scene,e.callback!==void 0&&e.callback(e)})}async newHDRI(e){this.pmremGenerator===void 0&&(this.pmremGenerator=new jr(this.renderer)),this.hdriLoader===void 0&&(this.hdriLoader=new Jg),this.hdriLoader.load(e.filename,t=>{e.envMap=this.pmremGenerator.fromEquirectangular(t).texture,t.dispose(),e.setarea=(n,i=!1,s=!0)=>{s&&(n.scene.environment=e.envMap),i&&(n.scene.background=e.envMap)},e.callback!==void 0&&e.callback(e)})}};ut(be,"Phys",{}),ut(be,"objectholder",{}),ut(be,"nextid",0),ut(be,"log",(e,t)=>{}),ut(be,"loader"),ut(be,"pmremGenerator"),ut(be,"hdriLoader");let he=be;const kr=new Uint8Array([31,139,8,0,0,0,0,0,0]);var ye,Bs,ea,sc,ta,na,ia,sa,rc,ac,oc,lc,ra,cc,hc,t0,uc,dc,aa;class Re{static stringtoarraybuffer(e){return new TextEncoder().encode(e).buffer}static arraybuffertostring(e,t=void 0,n=void 0){let i="";(t===void 0||n===void 0)&&(t=e.byteLength,n=0);for(let s=0;s<t;s++)i+=String.fromCharCode(new Uint8Array(e)[n+s]);return i}static combineabs(e){let t=0;e.forEach(i=>{t+=i.byteLength});const n=new Uint8Array(t);return t=0,e.forEach(i=>{n.set(new Uint8Array(i),t),t+=i.byteLength}),n.buffer}static arraybuffertobigint(e){const t="0x"+Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("");return BigInt(t)}static biginttoarraybuffer(e){let n=1e3;const i=new Uint8Array(n);for(;e>0;)i[--n]=Number(e&255n),e>>=8n;let s=0;for(;i[s]===0;)s++;return s===0&&console.error("too small!!"),i.slice(s)}static modInverse(e,t){e=(e%t+t)%t;const n=[];let i=t;for(;i;)[e,i]=[i,e%i],n.push({a:e,b:i});let s=1n,r=0n;for(let a=n.length-2;a>=0;--a){const l=n[a].a/n[a].b;[s,r]=[r,s-r*l]}return(r%t+t)%t}static b64toab(e,t=!1){return t===!0&&(e=e.replace(/-/g,"+").replace(/_/g,"/")),Uint8Array.from(atob(e),i=>i.charCodeAt(0)).buffer}static abtob64(e,t=!1){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"+(t?"-_":"+/"),i=new Uint8Array(e),s=i.byteLength%3,r=i.byteLength-s;let a="",l,c,h,u,d;for(let p=0;p<r;p+=3)l=i[p]<<16|i[p+1]<<8|i[p+2],c=(l&16515072)>>18,h=(l&258048)>>12,u=(l&4032)>>6,d=l&63,a+=n[c]+n[h]+n[u]+n[d];switch(s){case 2:l=i[r]<<8|i[r+1],c=(l&64512)>>10,h=(l&1008)>>4,u=(l&15)<<2,a+=n[c]+n[h]+n[u]+(t?"":"=");break;case 1:l=i[r],c=(l&252)>>2,h=(l&3)<<4,a+=n[c]+n[h]+(t?"":"==");break}return a}static async compressab(e){const t=new ReadableStream({start(i){i.enqueue(e),i.close()}});return await new Response(t.pipeThrough(new CompressionStream("gzip"))).arrayBuffer()}static async decompressab(e){const t=new ReadableStream({start(i){i.enqueue(e),i.close()}});return await new Response(t.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}static async stringtocompressedb64(e){const t=this.stringtoarraybuffer(e),n=await this.compressab(t);return this.abtob64(n,!0)}static async compressedb64tostring(e){const t=this.b64toab(e,!0),n=await this.decompressab(t);return this.arraybuffertostring(n)}static async maybecompress(e,t=!1){const n=new Uint8Array(1);n[0]=0;let i=new Uint8Array(await this.compressab(e)),s=!0;for(let r=0;r<kr.byteLength;r++)if(i[r]!==i[r]){s=!1;break}return s&&(n[0]|=64,i=i.slice(kr.byteLength)),t&&console.log(i.byteLength>e.byteLength?"no compression":"compressed",i.byteLength,e.byteLength),i.byteLength>e.byteLength?(n[0]=0,this.combineabs([n,e])):(n[0]|=128,this.combineabs([n,i]))}static async maybedecompress(e){const t=new DataView(e).getUint8(0);let n=e.slice(1);return(t&128)===128?(n=(t&64)===64?this.combineabs([kr,n]):n,await this.decompressab(n)):e.slice(1)}static async compresstourl(e){return this.abtob64(await this.maybecompress(e),!0)}static async decompressfromurl(e){try{return{buf:await this.maybedecompress(this.b64toab(e,!0))}}catch(t){return{errmsg:t.message}}}static async compresstexttoencurl(e,t,n){const i=await this.maybecompress(this.stringtoarraybuffer(e)),s=await this.encryptab(i,t,n);return this.abtob64(s,!0)}static async decompresstextfromencurl(e,t,n){const i=await this.decryptab(this.b64toab(e,!0),t,n),s=await this.maybedecompress(i);return this.arraybuffertostring(s)}static async signarraybuffer(e,t){const n=await je(this,ye,sa).call(this,t);return await window.crypto.subtle.sign("HMAC",n,e)}static async verifysignaturearraybuffer(e,t,n){const i=await je(this,ye,sa).call(this,t);return await window.crypto.subtle.verify("HMAC",i,n,e)}static async genKeyAb(){const e=await window.crypto.subtle.generateKey(je(this,ye,Bs).call(this),!0,["encrypt","decrypt"]);return await je(this,ye,ac).call(this,e)}static async encryptab(e,t,n){return await window.crypto.subtle.encrypt(je(this,ye,ea).call(this,n),await je(this,ye,ra).call(this,t),e)}static async decryptab(e,t,n){return await window.crypto.subtle.decrypt(je(this,ye,ea).call(this,n),await je(this,ye,ra).call(this,t),e)}static keything(e){const t={p:this.b64toab(e.p,!0),q:this.b64toab(e.q,!0),d:this.b64toab(e.d,!0),dp:this.b64toab(e.dp,!0),dq:this.b64toab(e.dq,!0),qi:this.b64toab(e.qi,!0),n:this.b64toab(e.n,!0),e:this.b64toab(e.e,!0)},n=this.arraybuffertobigint(t.p),i=this.arraybuffertobigint(t.q),s=65537n,r=n*i,a=this.modInverse(i,n),l=n-1n,c=i-1n,h=l*c,u=this.arraybuffertobigint(t.d),d=u%l,p=u%c;console.log(r===this.arraybuffertobigint(t.n)&&a===this.arraybuffertobigint(t.qi)&&d===this.arraybuffertobigint(t.dp)&&p===this.arraybuffertobigint(t.dq)&&s===this.arraybuffertobigint(t.e)),console.log(r%s!==0&&h%s!==0,h/s+" possibilities...?");let g=s,m=1;for(;g<h&&!(this.modInverse(g,h)===u||(g+=s,m>3e5));m++);console.log(m,g,m<=3e5)}static async genpubprivkeyab(e=4096){const t=e/8,n=t/2;for(;;){const i=await je(this,ye,hc).call(this,e),s=i.private,r=new Uint8Array(this.b64toab(s.p,!0)),a=new Uint8Array(this.b64toab(s.q,!0)),l=this.b64toab(s.d,!0),c=65537n,h=this.arraybuffertobigint(l),u=(this.arraybuffertobigint(r.buffer)-1n)*(this.arraybuffertobigint(a.buffer)-1n);let d=c;for(let p=1;p<256;p++){if(this.modInverse(d,u)===h){const m=new Uint8Array(t+1);return m.set(r,n-r.byteLength),m.set(a,t-a.byteLength),m[t]=p,{priv_ab:m.buffer,pub_ab:je(this,ye,cc).call(this,i.public,t)}}d+=c}}}static async pubprivencrypt(e,t,n=4096){const i=await je(this,ye,aa).call(this,je(this,ye,uc).call(this,t),n);return await window.crypto.subtle.encrypt(je(this,ye,na).call(this),i,e)}static async pubprivdecrypt(e,t,n=4096){const i=await je(this,ye,aa).call(this,je(this,ye,dc).call(this,t),n);return await window.crypto.subtle.decrypt(je(this,ye,na).call(this),i,e)}static getcrc32b(e,t=0){let n=3988292384;const i=new Uint8Array(e);let s=~t>>>0;for(let r=0;r<i.byteLength;r++){let a=i[r],l=8;for(;l--;){let c=(s&1)!==(a&1);a>>=1,s>>>=1,c&&(s^=n,s>>>=0)}}return~s>>>0}static getxmodemcrc(e){const t=new Uint8Array(e);let n=0;for(let i=0;i<t.byteLength;i++){n^=t[i]<<8;let s=8;for(;s--;){let r=n&32768;n<<=1,n&=65535,r&&(n^=4129)}}return n}}ye=new WeakSet,Bs=function(e=256){return{name:"AES-CBC",length:e}},ea=function(e=window.crypto.getRandomValues(new Uint8Array(16))){return{name:"AES-CBC",iv:e}},sc=function(e="SHA-256"){return{name:"HMAC",hash:e}},ta=function(e=4096){return{name:"RSA-OAEP",modulusLength:e,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"}},na=function(){return{name:"RSA-OAEP"}},ia=async function(e,t){return{Pbkdf2ParamsObject:{name:"PBKDF2",salt:this.stringtoarraybuffer(t),iterations:1e5,hash:"SHA-256"},baseKey:await window.crypto.subtle.importKey("raw",new TextEncoder().encode(e),"PBKDF2",!1,["deriveKey"])}},sa=async function(e,t="SAID IT WO GOOD!"){const{Pbkdf2ParamsObject:n,baseKey:i}=await je(this,ye,ia).call(this,e,t);return await window.crypto.subtle.deriveKey(n,i,je(this,ye,sc).call(this),!0,["sign","verify"])},rc=async function(e,t="SAID IT WO GOOD!"){const{baseKey:n,Pbkdf2ParamsObject:i}=await je(this,ye,ia).call(this,e,t);return await window.crypto.subtle.deriveKey(i,n,je(this,ye,Bs).call(this),!0,["encrypt","decrypt"])},ac=async function(e){const t=await window.crypto.subtle.exportKey("jwk",e);return this.b64toab(t.k,!0)},oc=async function(e){const t=je(this,ye,lc).call(this,e);return await window.crypto.subtle.importKey("jwk",t,je(this,ye,Bs).call(this),!1,t.key_ops)},lc=function(e){return{alg:"A256CBC",ext:!0,k:this.abtob64(e,!0),key_ops:["encrypt","decrypt"],kty:"oct"}},ra=async function(e){return e.ab!==void 0?await je(this,ye,oc).call(this,e.ab):await je(this,ye,rc).call(this,e.pw)},cc=function(e,t){const n=new Uint8Array(this.b64toab(e.n,!0)),i=new Uint8Array(t);return i.set(n,t-n.byteLength),i},hc=async function(e){const t=await window.crypto.subtle.generateKey(je(this,ye,ta).call(this,e),!0,["encrypt","decrypt"]);return{public:await window.crypto.subtle.exportKey("jwk",t.publicKey),private:await window.crypto.subtle.exportKey("jwk",t.privateKey)}},t0=function(e){return{key_ops:["encrypt"],ext:e.ext,kty:e.kty,alg:e.alg,e:e.e,n:e.n}},uc=function(e){return{alg:"RSA-OAEP-256",e:"AQAB",ext:!0,key_ops:["encrypt"],kty:"RSA",n:this.abtob64(e,!0)}},dc=function(e){const t=(e.byteLength-1)/2,n=e.slice(0,t),i=e.slice(t,t*2),s=this.abtob64(n,!0),r=this.abtob64(i,!0),a=BigInt(new Uint8Array(e.slice(t*2))[0])*65537n,l=this.arraybuffertobigint(n),c=this.arraybuffertobigint(i),h=(l-1n)*(c-1n),u=this.modInverse(a,h),d=this.abtob64(this.biginttoarraybuffer(u),!0),p=this.abtob64(this.biginttoarraybuffer(u%(l-1n)),!0),g=this.abtob64(this.biginttoarraybuffer(u%(c-1n)),!0),m=this.abtob64(this.biginttoarraybuffer(l*c),!0),f=this.abtob64(this.biginttoarraybuffer(this.modInverse(c,l)),!0);return{alg:"RSA-OAEP-256",d,dp:p,dq:g,e:"AQAB",ext:!0,key_ops:["decrypt"],kty:"RSA",n:m,p:s,q:r,qi:f}},aa=async function(e,t){return await window.crypto.subtle.importKey("jwk",e,je(this,ye,ta).call(this,t),!1,e.key_ops)},Qs(Re,ye);class n0{constructor(){this.volume=1,this.people=[{pitch:1,rate:1,voice:null},{pitch:1.8,rate:.8,voice:null}],window.speechSynthesis.getVoices().length===0?window.speechSynthesis.onvoiceschanged=e=>{this.setvoices()}:this.setvoices()}setvoices(){const e=window.speechSynthesis.getVoices();for(let t=0;t<e.length;t++)this.people[0].voice===null&&e[t].lang.startsWith("fr")&&(this.people[0].voice=e[t]),this.people[1].voice===null&&e[t].lang.startsWith("es")&&(this.people[1].voice=e[t])}setgain(e){this.volume=e,window.speechSynthesis.speaking&&(window.speechSynthesis.cancel(),this.utterance!==void 0&&(this.utterance.volume=this.volume,e>0&&window.speechSynthesis.speak(this.utterance)))}say(e){const t=this.people[e.user?1:0];this.utterance=new SpeechSynthesisUtterance,this.utterance.text=e.comment,this.utterance.volume=this.volume,this.utterance.lang="en-GB",this.utterance.pitch=t.pitch,this.utterance.rate=t.rate,this.utterance.voice=t.voice,window.speechSynthesis.speaking&&window.speechSynthesis.cancel(),this.volume>0&&window.speechSynthesis.speak(this.utterance)}}const La={};let Ws=null,oa=!1,la=!1;const zs=[0,0];let fc=0,Xn=[0,0];const ca=[0,0];let ha=!1;function i0(){document.onpointerlockchange=e=>{Ws=document.pointerLockElement},window.addEventListener("mousedown",async e=>{oa=!0,la=!0,e.target.dataset.mousedrag!==void 0&&await e.target.requestPointerLock()}),window.addEventListener("mouseup",e=>{la=!1,Ws!==null&&document.exitPointerLock()}),document.onmousemove=e=>{Xn[0]+=e.movementX,Xn[1]+=e.movementY,zs[0]=(e.pageX/window.innerWidth-.5)*2,zs[1]=(e.pageY/window.innerHeight-.5)*2,fc=zs[1]*(window.innerHeight/window.innerWidth)},window.addEventListener("touchmove",e=>{e.touches.count>1&&e.preventDefault()},{passive:!1});const o=e=>{e.stopPropagation(),Array.prototype.forEach.call(e.changedTouches,t=>{ca[0]=(t.pageX/window.innerWidth-.5)*2,ca[1]=(t.pageY/window.innerHeight-.5)*2,ha=!0})};document.body.addEventListener("touchstart",o,!1),document.body.addEventListener("touchmove",o,!1)}function _l(o){if(o!==null)return La[o.dataset.mousedrag]}function s0(){const o={};for(const[t,n]of Object.entries(La))o[t]=n.update();const e={mousedelta:Xn,mouseclicked:oa,mouseheld:la,mousepos:zs,mouseposyaspect:fc,touchpos:ca,touched:ha,vals:o};return ha=!1,Xn=[0,0],oa=!1,e}class xl{update(){if(this.meter!==void 0){_l(Ws)===this&&this.setpowerpercent(-Xn[1]/100);const t=this.getandreset();this.setpowerpercent(t[1]*.003)}else{_l(Ws)===this&&(this.angledelta[0]+=Xn[0],this.angledelta[1]+=Xn[1]);const t=-.3,n=this.getandreset();this.angledelta[0]+=n[0]*t,this.angledelta[1]+=n[1]*t}const e=this.angledelta;return this.angledelta=[0,0],{power:this.powerpercentage,angledelta:e}}constructor(e,t,n=null,i="50vw",s="50vw",r=.8){if(this.previoustouchpositions={},this.touchdeltas={},this.first=null,this.angledelta=[0,0],this.powerpercentage=r,La[t]=this,this.presscontainer=document.createElement("div"),this.presscontainer.style.height=i,this.presscontainer.style.width=s,this.presscontainer.style.position="relative",n!==null){this.meter=document.createElement("div"),this.presscontainer.appendChild(this.meter),this.meter.style.height="100%",this.meter.style.width="100%";const h=document.createElement("div");this.meter.appendChild(h),h.style.width="100%";const u=document.createElement("div");this.meter.appendChild(u),u.style.width="100%",u.style.backgroundColor=n,u.style.height="100%",this.setmeter()}this.touchelement=document.createElement("div"),this.presscontainer.appendChild(this.touchelement),this.touchelement.style.position="absolute",this.touchelement.style.left=0,this.touchelement.style.top=0,this.touchelement.style.height=i,this.touchelement.style.width=s,this.touchelement.innerText=e,this.touchelement.dataset.mousedrag=t;const a=h=>{h.stopPropagation(),Array.prototype.forEach.call(h.changedTouches,u=>{u.identifier===this.first&&(this.first=null),delete this.previoustouchpositions[u.identifier]})},l=h=>{h.stopPropagation(),Array.prototype.forEach.call(h.changedTouches,u=>{this.first===null&&(this.first=u.identifier),this.touchdeltas[u.identifier]=[0,0],this.previoustouchpositions[u.identifier]=[u.pageX,u.pageY]})},c=h=>{h.stopPropagation(),Array.prototype.forEach.call(h.changedTouches,u=>{const d=this.previoustouchpositions[u.identifier],p=[u.pageX,u.pageY];this.touchdeltas[u.identifier]=[d[0]-p[0],d[1]-p[1]],this.previoustouchpositions[u.identifier]=p})};this.touchelement.addEventListener("touchstart",l,!1),this.touchelement.addEventListener("touchmove",c,!1),this.touchelement.addEventListener("touchend",a,!1),this.touchelement.addEventListener("touchcancel",this.touchendcancel,!1)}setpowerpercent(e){this.powerpercentage+=e,this.powerpercentage<0&&(this.powerpercentage=0),this.powerpercentage>1&&(this.powerpercentage=1),this.setmeter()}setmeter(){this.meter.childNodes[0].style.height=((1-this.powerpercentage)*100).toString()+"%"}getandreset(){let e=this.touchdeltas[this.first];return this.touchdeltas={},e===void 0?[0,0]:e}}const Bt={};function r0(o){window.addEventListener("gamepadconnected",e=>{const t=e.gamepad,n=t.index;Bt[n]=o(t),Bt[n].updatepad(t)},!1),window.addEventListener("gamepaddisconnected",e=>{var n;const t=e.gamepad.index;((n=Bt[t])==null?void 0:n.ondestroy)!==void 0&&Bt[t].ondestroy(),delete Bt[t]},!1)}function a0(){for(const o of navigator.getGamepads())o!=null&&o.connected&&Bt[o.index].updatepad(o)}function o0(o){for(const e of navigator.getGamepads())if((e==null?void 0:e.index)===o)return e}function l0(o){const e=[];if(o!==void 0){for(const[n,i]of o.buttons.entries())i.pressed&&e.push({i:n,neg:void 0});const t=.5;for(const[n,i]of o.axes.entries())if(i>t)e.push({i:n,neg:!1});else{if(i===-1)continue;i<-.5&&e.push({i:n,neg:!0})}}return e}class c0{constructor(e,t){this.id=e.id,this.getdefaultmapping=t,this.analogs={};for(const[n,i]of Object.entries(this.getdefaultmapping()))i.digital||(this.analogs[n]=i.map.length);this.state={current:{}},this.state.previous=this.state.current,this.getconfig(),console.log(e.vibrationActuator)}prepareanalogs(){for(const[e,t]of Object.entries(this.analogs))this.state.current[e]=new Array(t),this.state.current[e].fill(0)}removecontrol(e){const t=this.getstoremapping();t[e].map.forEach(n=>{if(n.neg===void 0){const i=this.mapping.button[n.i];i.splice(i.indexOf(e),1)}else t[e].digital?this.mapping.axis[n.i].digital[n.neg?"neg":"pos"]=void 0:this.mapping.axis[n.i].stick=void 0})}addcontrol(e,t,n=void 0,i=void 0){if(i===void 0)if(n===void 0)this.mapping.button[t]===void 0&&(this.mapping.button[t]=[]),this.mapping.button[t].push(e);else if(this.mapping.axis[t]===void 0&&(this.mapping.axis[t]={}),this.mapping.axis[t].digital===void 0&&(this.mapping.axis[t].digital={}),this.mapping.axis[t].digital[n?"neg":"pos"]===void 0)this.mapping.axis[t].digital[n?"neg":"pos"]=e;else return!1;else{if(n===void 0)return!1;if(this.mapping.axis[t]===void 0&&(this.mapping.axis[t]={}),this.mapping.axis[t].stick===void 0)this.mapping.axis[t].stick={controlname:e,index:i,neg:n};else return!1}return!0}getconfig(e=0){const t=localStorage.getItem("CONFIG_"+this.id+"_"+e);this.mapping={button:{},axis:{},deadzones:{}};const n=t===null?this.getdefaultmapping():JSON.parse(t);for(const[i,s]of Object.entries(n))s.map.forEach((r,a)=>{this.addcontrol(i,r.i,r.neg,s.digital?void 0:a)}),s.digital||(this.mapping.deadzones[i]=s.deadzone)}getemptymapping(){const e=this.getdefaultmapping();for(const[t,n]of Object.entries(e))n.digital?n.map=[]:(n.map=new Array(n.map.length),n.deadzone=this.mapping.deadzones[t]);return e}getstoremapping(){var t,n;const e=this.getemptymapping();for(const[i,s]of Object.entries(this.mapping.button)){const r=parseInt(i);s.forEach(a=>{e[a].map.push({i:r,neg:void 0})})}for(const[i,s]of Object.entries(this.mapping.axis)){const r=parseInt(i);((t=s.digital)==null?void 0:t.neg)!==void 0&&e[s.digital.neg].map.push({i:r,neg:!0}),((n=s.digital)==null?void 0:n.pos)!==void 0&&e[s.digital.pos].map.push({i:r,neg:!1}),s.stick!==void 0&&(e[s.stick.controlname].map[s.stick.index]={i:r,neg:s.stick.neg})}return e}storeconfig(e=0){localStorage.setItem("CONFIG_"+this.id+"_"+e,JSON.stringify(getstoremapping()))}deleteconfig(e=0){localStorage.removeItem("CONFIG_"+this.id+"_"+e)}updatepad(e){this.state.previous=this.state.current,this.state.current={};let t=!1;for(const[i,s]of e.buttons.entries())s.pressed&&(t=!0,this.mapping.button[i]!==void 0&&this.mapping.button[i].forEach(r=>{this.state.current[r]=!0}));t&&h0(e.index),this.prepareanalogs();const n=.5;for(const[i,s]of e.axes.entries()){const r=this.mapping.axis[i];r!==void 0&&(r.stick!==void 0&&(this.state.current[r.stick.controlname][r.stick.index]=r.stick.neg?-s:s),r.digital!==void 0&&(s>n?r.digital.pos!==void 0&&(this.state.current[r.digital.pos]=!0):s<-.5&&r.digital.neg!==void 0&&(this.state.current[r.digital.neg]=!0)))}for(const[i,s]of Object.entries(this.analogs)){const r=this.mapping.deadzones[i];if(r!==void 0){const a=r*r;let l=0;for(let c=0;c<s;c++){const h=this.state.current[i][c];l+=h*h}if(l<a)for(let c=0;c<s;c++)this.state.current[i][c]=0}}this.updateui!==void 0&&this.updateui()}getinput(e){return this.state.current[e]}getbuttondown(e){return this.state.current[e]===!0&&this.state.previous[e]!==!0}getbuttonup(e){return this.state.current[e]!==!0&&this.state.previous[e]===!0}}const fn=[{name:"Unused"},{name:"Player"}];function pc(o){fn.forEach(e=>{if(e.padindex===o){delete e.padindex;return}})}function h0(o){for(let e=1;e<fn.length;e++)fn[e].padindex===void 0&&(Bt[o].playerselect.value=e,Bt[o].playerselect.dispatchEvent(new Event("change")))}function u0(o){const e=o.target.dataset.padindex,t=o.target.value;pc(e),t>0&&(fn[t].padindex!==void 0&&(Bt[fn[t].padindex].playerselect.value=0),fn[t].padindex=e)}function Nr(o,e=1){const t=Bt[fn[e].padindex];return t===void 0?void 0:t.getinput(o)}function d0(o,e=1){const t=Bt[fn[e].padindex];return t===void 0?void 0:t.getbuttondown(o)}class f0 extends c0{constructor(e,t){super(e,t),this.held=null,this.configuring=null,this.index=e.index,this.padelement=document.createElement("li");const n=document.createElement("div");n.innerText=e.id,this.padelement.appendChild(n);const i=[],s=document.createElement("button");s.innerText="Configure All",s.onclick=l=>{if(this.configuring!==null)return;this.configall=!0;const c=i.length-1;i[c].beginconfig(l)},this.padelement.appendChild(s);const r=document.createElement("button");r.innerText="Reset to default",r.onclick=l=>{this.configuring===null&&(this.getconfig("DEFAULT"),this.setconfs())},this.padelement.appendChild(r),this.playerselect=document.createElement("select"),fn.forEach((l,c)=>{const h=document.createElement("option");h.innerText=l.name,h.value=c,this.playerselect.appendChild(h)}),this.playerselect.onchange=u0,this.playerselect.value=0,this.playerselect.dataset.padindex=e.index,this.padelement.appendChild(this.playerselect);const a=document.createElement("ul");this.padelement.appendChild(a);for(const[l,c]of Object.entries(t()))i.push({name:l,maxindex:this.analogs[l]});this.controlsui={},i.forEach((l,c)=>{l.beginconfig=p=>{var g;this.removecontrol(l.name),this.configuring={controlname:l.name,index:l.maxindex===void 0?void 0:0,maxindex:l.maxindex,nextcontrolconfig:(g=i[c-1])==null?void 0:g.beginconfig},this.setconfs(p!==void 0)};const h=document.createElement("li");a.appendChild(h);const u=document.createElement("div");u.innerText=l.name,h.appendChild(u);const d=document.createElement("div");h.appendChild(d),this.controlsui[l.name]={conf:d,beginconfig:l.beginconfig}}),this.setconfs(void 0,!0),this.updateui=()=>{if(this.configuring===null){this.held=null;return}const l=l0(o0(this.index));l.length===1?this.held===null&&(this.held=l[0],this.addcontrol(this.configuring.controlname,this.held.i,this.held.neg,this.configuring.index)&&((this.configuring.index===void 0||++this.configuring.index===this.configuring.maxindex)&&(this.configall&&this.configuring.nextcontrolconfig!==void 0?this.configuring.nextcontrolconfig():(this.configall=!1,this.configuring=null)),this.setconfs(void 0,!0))):this.held=null}}setconfs(e,t){const n=this.getstoremapping();for(const[i,s]of Object.entries(this.controlsui)){let r="Mapped: ";if(n[i].map.forEach((a,l)=>{if(a!=null){if(l>0&&(r+=", "),!n[i].digital){switch(l){case 0:r+="X";break;case 1:r+="Y";break;default:r+=l;break}r+=": "}switch(a.neg){case!0:r+="-";break;case!1:r+="+";break}r+=a.i}}),this.configuring===null)s.conf.innerText=r+" - configure?",t&&s.conf.addEventListener("click",s.beginconfig,!1);else if(e&&s.conf.removeEventListener("click",s.beginconfig),this.configuring.controlname===i){let a="?";if(!n[i].digital){if(this.configuring.maxindex===1)a="Press Positive";else switch(a="Press ",this.configuring.index){case 0:a+="Right";break;case 1:a+="Down";break}a+=" for "+i}s.conf.innerText=a}else s.conf.innerText=r}}}const Ra=document.createElement("ul");Ra.id="controllers";function p0(o){(o.id===void 0||o.id===null)&&console.error("gamepad id is "+o.id),console.log(o.id+" connected");const e=new f0(o,()=>({Shot:{digital:!0,map:[{i:0,neg:void 0}]},Aim:{digital:!1,map:[{i:0,neg:!1}],deadzone:.23},Zoom:{digital:!1,map:[{i:1,neg:!1}],deadzone:.23},Power:{digital:!1,map:[{i:2,neg:!0}],deadzone:.23}}));return Ra.appendChild(e.padelement),e.ondestroy=()=>{e.padelement.remove(),pc(o.index)},e}r0(p0);function yl(){return window.location.origin+window.location.pathname}function Ae(o,e="div"){const t=document.createElement(e);return o.appendChild(t),t}function Fs(o=null,e=10){return`<svg width="${e*2}" height="${e*2}">`+(o!==null?`<circle cx="${e}" cy="${e}" r="${e}" fill="${o}"/>`:"")+"</svg>"}function m0(o,e=!1,t=10,n=2){const i=o.ballarray.length-1;let s="";if(!e){const l=o.getMove(-1);for(let c=0;c<i;c++){const h=l.balls[c+1];if(h.pot!==void 0){let d=o.ballarray[c+1].colour;const p=h.pot-1;s+=`<circle cx="${t+p*(t*2+n)}" cy="${t}" r="${t}" fill="${d}"/>`}}}const r=i*t*2+n*(i-1),a=t*2;return`<svg width="${r}" height="${a}"><rect width="${r}" height="${a}" rx="${t}" fill="grey"/>`+s+"</svg>"}function g0(o){const e=document.createElement("template");return e.innerHTML=m0(o),e.content.firstChild}function Ur(o,e,t,n="12"){const i=document.createElement("div"),s=localStorage.getItem(o)||0,r=document.createElement("input");r.type="range",r.min="-40.01",r.max=n,r.step="0.01",r.value=s,r.id=o,i.appendChild(r);const a=document.createElement("label");a.htmlFor=o,i.appendChild(a),r.addEventListener("change",c=>{localStorage.setItem(o,c.target.value)});const l=c=>{a.innerText=e+" : "+(c<-40?"Mute":(c>0?" +":"")+c.toString()+" dB"),t(c<-40?0:10**(c/20))};return l(s),r.addEventListener("input",c=>{l(c.target.value)}),i}class _0{constructor(e,t,n,i){this.messageelement=document.createElement("div"),this.messageelement.innerText=e,this.messageelement.className=i,this.timer=n,t.appendChild(this.messageelement)}update(e=1){return this.timer!==null&&(this.timer-=e,this.timer<=0)?(this.remove(),!0):!1}remove(){this.messageelement.parentElement.removeChild(this.messageelement)}}class x0{displaypage(e){this.currentpage!==void 0&&(this.pagecontainer.removeChild(this.currentpage),this.oldpage=this.currentpage,delete this.currentpage),e!==null&&(this.currentpage=e,this.pagecontainer.appendChild(this.currentpage))}gobackpage(){this.displaypage(this.oldpage)}newmessage(e,t,n){const i=new _0(e,document.getElementById("message"),t,n);return this.messages.push(i),()=>{i.timer=0}}createloginoutform(e){const t=document.createElement("div");if(e){const n=Ae(t,"p");n.innerText="Login (no need to register) You must remember these to continue a game, there is no recovery if you forget! (They will be stored in your browser on this device, but don't count on this.)";const i=Ae(t,"input");i.type="text",i.setAttribute("minlength","1"),i.setAttribute("maxlength","30"),i.setAttribute("placeholder","Name/Username");const s=Ae(t,"input");s.type="text",s.setAttribute("placeholder","Secret");const r=Ae(t,"button");r.innerText="Log In",r.onclick=a=>{this.loginout(JSON.stringify({name:i.value.trim(),secret:s.value.trim()}))}}else{const n=Ae(t,"button");n.innerText="Log out",n.onclick=s=>{this.loginout(null)};const i=Ae(t,"button");i.innerText="Challenge a friend!",i.onclick=async s=>{this.displaypage(this.createnewinvite()),document.getElementById("topcheck").checked=!1}}return t.id="loginform",t}updatelogindisplay(e,t){this.logelement!==void 0&&this.logarea.removeChild(this.logelement),e===null?(this.logelement=this.createloginoutform(!0),t===null?this.playernamebox.innerText="Menu - Not Logged In":this.playernamebox.innerText="Menu - "+t):(this.logelement=this.createloginoutform(!1),this.playernamebox.innerText="Menu - User:"+JSON.parse(e).name),this.logarea.appendChild(this.logelement)}createstartlocalgame(){const e=document.createElement("div"),t=Ae(e,"label");t.htmlFor="p0name",t.innerText="Player:";const n=Ae(e,"input");n.type="text",n.id="p0name",n.setAttribute("placeholder","Name"),Ae(e,"p").innerText="Vs.";const i=Ae(e,"label");i.htmlFor="p1name",i.innerText="Player:";const s=Ae(e,"input");s.type="text",s.id="p1name",s.setAttribute("placeholder","Name");const r=Ae(e,"button");return r.innerText="Start Local Game",r.onclick=async a=>{this.startgame([n,s],Math.random()>.5)},e.className="gamepage",e}createsimulatingpage(e){const t=document.createElement("div"),n=Ae(t,"button");if(n.innerText="Skip watching?",n.onclick=i=>{n.style.display="none",this.setchoice("go")},e.commentafter!==void 0){const i=Ae(t,"button");i.innerText="Add a comment for this shot?",i.onclick=s=>{this.requestcommentnext(e.commentafter),t.removeChild(i)}}return t.className="gamepage",t}createusercommentpage(e){let{frame:t,shotno:n}={...e};const i=document.createElement("div"),s=Ae(i,"p"),r=Ae(i,"button");r.innerText="Cancel",r.onclick=l=>{this.replayshot(void 0)},n===void 0&&(n=t.moves.length-2);const a=t.moves[n];if(a===void 0||t.player1===void 0||t.player1!==a.player1||a.shotvec===null)s.innerText="Error - can't comment.";else if(a.usercomment!==void 0)s.innerText="Error - comment already made.";else{s.innerText="Add a comment for this shot:";const l=Ae(i,"textarea"),c=Ae(i,"button");c.innerText="Done",c.onclick=h=>{a.usercomment=l.value,this.replayshot(void 0)}}return i.className="gamepage",i}createreplaymenu(e){const t=document.createElement("div"),n=Ae(t,"ol");n.id="replaymenu";let i;for(let s=0;s<e.moves.length-1;s++){const r=e.moves[s],a=document.createElement("li");if(n.appendChild(a),r===null)a.innerText="Game history missing...",i=!1;else{const l=e.name[r.player1?1:0];if(i||r.onbreak){const c=document.createElement("button");a.appendChild(c),c.onclick=async h=>{await this.replayshot(s)},c.innerText="Replay shot #"+(s+1).toString()+" ("+l+")",r.shotvec===null&&(c.innerText="Shot vec missing?? tell tommy!")}else a.innerText="Replay previous shots to view";i=r.balls.length>0}}return t.className="gamepage",t}createrematchpage(e){const t=document.createElement("div"),n=Ae(t,"input");n.type="text",n.setAttribute("placeholder","Game Name for rematch?");const i=document.createElement("button");return i.innerText="Rematch",i.onclick=async s=>{e.RestartURLGame(n.value),await e.readynextshot()},t.appendChild(i),t.className="gamepage",t}createjoypadpage(){const e=document.createElement("div"),t=Ae(e,"h1");t.innerText="Connected Joypads:";const n=Ae(e,"button");return n.innerText="Back",n.onclick=i=>{this.gobackpage()},e.appendChild(Ra),e.className="gamepage",e}createerrorpage(e){const t=document.createElement("div");return t.innerText=e,t.className="gamepage",t}createsetwhiteball(){this.newmessage("Place the white ball",300);const e=document.createElement("div"),t=Ae(e,"button");return t.innerText="OK",t.onclick=n=>{this.setchoice("go")},e.className="gamepage",e}createaiming(e){const t=document.createElement("div");t.className="aimpage",this.aimhandler=new xl("","aim",null,"100vh","90vw"),this.powhandler=new xl("Power","power","red","80vh","9vw"),t.appendChild(this.aimhandler.presscontainer),t.appendChild(this.powhandler.presscontainer),this.powhandler.presscontainer.className="rounded",this.powhandler.touchelement.className="power";const n=Ae(t,"button");if(n.innerText="Take Shot",n.onclick=async i=>{this.setchoice("go")},e.canplacecueball){const i=Ae(t,"button");i.innerText="Re-place Cue Ball",i.onclick=async s=>{this.setchoice("frombaulk")}}if(e.commentlastshot){const i=Ae(t,"button");i.innerText="Comment Last Shot?",i.onclick=async s=>{this.setchoice("commentlastshot")}}return t}getchoicebuttons(e){const t=[{text:"Play from cue ball position",choice:"fromrest"},{text:"Play from baulk",choice:"frombaulk"},{text:"Rerack",choice:"rerack"}],n=document.createElement("div");this.newmessage("Select your choice",300);const i=s=>{const r=Ae(n,"button");r.innerText=s.text,r.onclick=a=>{this.setchoice(s.choice)}};return e.frompos&&i(t[0]),i(t[1]),e.rerack&&i(t[2]),n.className="gamepage",n}update(){var p,g;for(let m=0;m<this.messages.length;m++)this.messages[m].update()===!0&&this.messages.splice(m,1);a0();const e=Nr("Power");e!==void 0&&this.powhandler!==void 0&&this.powhandler.setpowerpercent(e[0]*.02);const{mousedelta:t,mouseclicked:n,mouseheld:i,mousepos:s,mouseposyaspect:r,touched:a,touchpos:l,vals:c}=s0();d0("Shot")&&this.setchoice("go");const h=(p=c.aim)==null?void 0:p.angledelta,u=Nr("Aim");if(u!==void 0&&h!==void 0){h[0]+=u[0];const m=Nr("Zoom");h[1]+=m[0]}const d=i?s:a?l:null;return{power:(g=c.power)==null?void 0:g.power,angledelta:h,whitepos:d}}async setui(e){e.userandcomment!==void 0&&this.voice.say(e.userandcomment),this.removewinnermsg!==void 0&&(this.removewinnermsg(),this.removewinnermsg=void 0),e.playername!==void 0&&this.newmessage(e.playername+"'s turn.",300,"bold"),e.message!==void 0&&this.newmessage(e.message,300);let t=null;e.hidegamehud?this.tvhud.style.display="none":(this.tvhud.style.display="flex",t=this.getgameinfo()),e.showchoices!==void 0&&(t=this.getchoicebuttons(e.showchoices)),e.replayframe!==void 0&&(t=this.createreplaymenu(e.replayframe)),e.shareurl!==void 0&&(t=await this.createurlpage(e.shareurl)),e.errormessage!==void 0&&(t=this.createerrorpage(e.errormessage)),e.setwhiteball!==void 0&&(t=this.createsetwhiteball()),e.aimvariables!==void 0&&(t=this.createaiming(e.aimvariables)),e.createusercomment!==void 0&&(t=this.createusercommentpage(e.createusercomment)),e.simulating!==void 0&&(t=this.createsimulatingpage(e.simulating)),this.displaypage(t)}async createurlpage(e){const{url:t,title:n,text:i,commentstourl:s,commentlastshot:r}={...e},a=document.createElement("div");if(r){const u=Ae(a,"button");u.innerText="Comment Last Shot?",u.onclick=async d=>{this.setchoice("commentlastshot")}}const l=document.createElement("span"),c=document.createElement("input");c.type="text",c.readOnly=!0;const h=Ae(a,"button");return h.innerText="Create & Copy/Share URL (send to opponent)",h.onclick=async u=>{let d="";s!==void 0&&(d=await s());const p=yl()+t+d;c.value=p;const g=p.length;if(l.innerText="("+g.toString()+"/2000 character limit)"+(g>2048?" warning - URL may be too long for broswers to accept, remove/reduce message.":""),c.select(),c.setSelectionRange(0,g),"share"in navigator){let m=!1;if(await navigator.share({title:n,text:i,url:c.value}).then(()=>{m=!0}),m)return}"clipboard"in navigator&&navigator.clipboard.writeText(c.value).then(()=>{l.innerText="Copied! "+l.innerText})},a.appendChild(c),a.appendChild(l),a.className="gamepage",a}createnewinvite(){const e=document.createElement("div"),t=Ae(e,"input");t.type="text",t.setAttribute("maxlength","100"),t.setAttribute("placeholder","Game name?");const n=Ae(e,"input");n.type="text",n.setAttribute("maxlength","20"),n.setAttribute("placeholder","(optional) Shared Invitation Password");const i=Ae(e,"button");return i.innerText="Create invitation URL",i.onclick=async s=>{t.value.length,i.style.display="none",await this.createinvite(t.value.trim(),"one time password:"+n.value.trim())},e.className="gamepage",e}createcontinueurlpage(e){const t=document.createElement("div");if(e.frame!==void 0){const n=Ae(t,"div");n.innerText=e.frame.name[1]==null?e.frame.name[0]+" challenges you to "+e.frame.name[2]:e.frame.name[0]+" vs "+e.frame.name[1]+" : "+e.frame.name[2]+" (started: "+new Date(e.frame.timestarted*1e3).toUTCString()+")"}if(e.errmsg===void 0){const n=Ae(t,"button");n.innerText="To the game!",n.onclick=async i=>{history.pushState(null,null,yl()),await this.startgamefromframe(e.frame)}}else{const n=Ae(t,"div");if(n.innerText=e.errmsg,e.showretry){const i=Ae(t,"input");i.type="text",i.setAttribute("placeholder","Shared Invitation Password (if given)");const s=Ae(t,"button");s.innerText="Retry",s.onclick=async r=>{await this.continuegame("one time password:"+i.value.trim())}}}return t.className="gamepage",t}constructor(e){if(e.theengine.canvas===void 0){this.updatelogindisplay=()=>{},this.continuegame=()=>{};return}i0(),this.messages=[],window.addEventListener("keydown",d=>{switch(d.key>="0"&&d.key<="9",d.key){case"d":console.log(e);debugger;break;case"q":break;case"t":this.voice.say({user:0,comment:"Test voice thing 0 like"});break;case"u":this.voice.say({user:1,comment:"Test voice thing 1 like"});break;case" ":this.setchoice("go");break}}),this.voice=new n0;const t=document.getElementById("topmenu");this.logarea=document.createElement("div"),t.appendChild(this.logarea);const n=document.createElement("div"),i=Ae(n,"input");i.type="checkbox",i.id="gfxtoggle",i.onchange=d=>{e.highqualityrenderswitch(d.target.checked)};const s=document.createElement("label");s.innerText="High Quality Graphics",s.htmlFor="gfxtoggle",n.appendChild(s),t.appendChild(n),t.appendChild(Ur("sfxgain","SFX",d=>{e.audio.setgain("sfx",d)},"0")),t.appendChild(Ur("musicgain","Music",d=>{e.audio.setgain("music",d)},"0")),t.appendChild(Ur("voicegain","Voice",d=>{this.voice.setgain(d)},"0"));const r=Ae(t,"button");r.innerText="View Shot Replays",r.onclick=d=>{this.setchoice("createreplaymenu"),document.getElementById("topcheck").checked=!1},this.joypadpage=this.createjoypadpage();const a=Ae(t,"button");a.innerText="Joypad Config",a.onclick=async d=>{this.currentpage!==this.joypadpage&&this.displaypage(this.joypadpage),document.getElementById("topcheck").checked=!1},this.pagecontainer=document.getElementById("pagecontainer"),this.pagecontainer.addEventListener("click",d=>{const p=document.getElementById("topcheck");p.checked&&(p.checked=!1)},!0);const l=document.createElement("div");l.style.display="flex",l.style.justifyContent="flex-end",document.getElementById("topmenucontainer").insertBefore(l,t);const h=document.createElement("button");l.appendChild(h);const u=document.createElement("img");u.src="fullscreenicon.svg",u.alt="Go full screen",u.style.width="50px",h.appendChild(u),h.style.background="none",h.style.border="none",h.onclick=async d=>{await document.body.requestFullscreen()},document.body.addEventListener("fullscreenchange",d=>{document.fullscreenElement===document.body?h.style.display="none":h.style.display="block"}),document.body.appendChild(e.theengine.canvas),this.playernamebox=document.getElementById("playername"),this.titlescreen=document.getElementById("titlescreen"),this.currentpage=this.titlescreen,document.getElementById("gamelogobutton").onclick=d=>{this.displaypage(this.createstartlocalgame())},this.tvhud=document.getElementById("hud"),this.requestcommentnext=d=>{e.addcommenttoshotno=d},this.replayshot=async d=>{await e.reviewGame(d)},this.continuegame=async d=>{const p=await e.GetMatchFromURLData(new URLSearchParams(window.location.search),d);p!==null&&this.displaypage(this.createcontinueurlpage(p))},this.startgamefromframe=async d=>{e.frame=d,await e.readynextshot()},this.startgame=async(d,p)=>{e.StartGame(d,p),await e.readynextshot()},this.createinvite=async(d,p)=>{await e.setGamephase(e.gamephases.waitingforinput);const g=await e.generateinviteurl(d,p);g.errmsg===void 0?await this.setui({shareurl:g,hidegamehud:!0}):this.setui({message:"error : "+g.errmsg})},this.loginout=d=>{e.LogIn(d)},this.setchoice=d=>{(e.choice===null||e.choice===void 0)&&(e.choice=d)},this.getgameinfo=()=>{if(e.frame===void 0)return null;const d=document.createElement("div");this.tvhud.innerHTML="",this.tvhud.appendChild(d);const p=e.getMove();let g;p.onbreak?(g=document.createElement("div"),g.innerText="BREAK"):g=g0(e),d.appendChild(g);const m=document.createElement("div"),f=document.createElement("div"),_=document.createElement("div");d.appendChild(m),d.appendChild(_),d.appendChild(f);const y=p.p1winner===void 0?p.player1?null:"white":null,v=p.p1winner===void 0&&p.player1?"white":null,b=document.createElement("div"),w=document.createElement("div");w.innerHTML=Fs(p.p0red!==null?p.p0red?"Red":"Yellow":null);const E=document.createElement("div");E.innerHTML=Fs(y),m.appendChild(E),m.appendChild(b),m.appendChild(w);const C=document.createElement("div"),x=document.createElement("div");x.innerHTML=Fs(p.p0red!==null?p.p0red?"Yellow":"Red":null);const T=document.createElement("div");if(T.innerHTML=Fs(v),f.appendChild(x),f.appendChild(C),f.appendChild(T),b.innerText=e.frame.name[0],C.innerText=e.frame.name[1],p.p1winner===void 0)p.freeshot&&(_.innerText="Free Shot");else if(this.removewinnermsg=this.newmessage(e.frame.name[p.p1winner?1:0]+" wins the match!",null),e.frame.player1===p.player1)return this.createrematchpage(e);return null}}}var En;class y0{constructor(e=["sfx","music"]){Qs(this,En);this.signalpaths={},e.forEach(t=>{this.signalpaths[t]={gain:1}})}setgain(e,t){const n=this.signalpaths[e];n.gain=t,zi(this,En)!==void 0&&(n.gainnode.gain.value=n.gain)}get audioctx(){if(zi(this,En)===void 0){if(!window.AudioContext){if(!window.webkitAudioContext)throw new Error("audio context unsupported");window.AudioContext=window.webkitAudioContext}Fa(this,En,new AudioContext);for(const[e,t]of Object.entries(this.signalpaths))t.audiopool={},t.gainnode=new GainNode(zi(this,En)),t.gainnode.connect(this.audioctx.destination),t.gainnode.gain.value=t.gain}return zi(this,En)}async play(e,t,n={gain:1,rate:1,stretch:!1,loop:!1}){this.audioctx.state==="suspended"&&this.audioctx.resume();const i=this.getfrompool(e,t);return i.element.volume=n.gain||1,i.element.playbackRate=n.rate||1,i.element.preservesPitch=n.stretch||!1,i.element.loop=n.loop||!1,i.element.play().catch(r=>{console.error(r)}),()=>{i.element.stop()}}getfrompool(e,t){const n=this.signalpaths[t];n.audiopool[e]===void 0&&(n.audiopool[e]=[]);let i;for(let s=0;s<n.audiopool[e].length;s++){const r=n.audiopool[e][s];if(r.element.ended===!0){i=r;break}}return i===void 0&&(i=this.getaudiotrack(e,t),n.audiopool[e].push(i)),i}getaudiotrack(e,t){const n={element:new Audio(e)};return n.element.preload="auto",n.element.addEventListener("canplaythrough",i=>{n.canplay=!0}),n.track=this.audioctx.createMediaElementSource(n.element),n.track.connect(this.signalpaths[t].gainnode),n}}En=new WeakMap;const vl="That Pocket There!",xi=Math.sin(Math.PI/4),Xi=2,xt=4,Tn=16,v0=512,ks=32,Nn=xt+2,Ns=2,rn=16,Ne=25,Gs=2.13,ua=1.21,bl=ua/Gs,b0=.057/2,wl=50,Ml=5e4;class w0{constructor(e=!0){ut(this,"pdefs",{b2d:{}});ut(this,"makeexport",!1);ut(this,"speedmode",!1);ut(this,"gamephases",Object.freeze({waitingforinput:{description:"waitingforinput"},waitinoverhead:{description:"waitinoverhead"},placingwhite:{description:"placingwhite"},aiming:{description:"aiming"},servershotanim:{description:"servershotanim"},simulating:{description:"simulating"},freeshotchoice:{description:"freeshotchoice"},showurl:{description:"showurl"},displayreplaymenu:{description:"displayreplaymenu"},addcomment:{description:"addcomment"},test:{description:"test"},error:{description:"error"}}));ut(this,"spinbeast",0);ut(this,"flycam",{pos:[0,1,0],yaw:0,pitch:0,fov:60});ut(this,"camcontrol",{lx:0,ly:.1,rx:.01,ry:0,lt:0,rt:0});this.audio=new y0,this.theengine=new he(e),this.halftablelength=Ne*.5*Gs,this.halftablewidth=Ne*.5*ua,this.blackspot=[0,-.5*this.halftablelength],this.baulkliney=this.halftablelength-this.halftablelength/2.5,this.aimangle=-Math.PI/2,this.camY=.5;const t="standard";this.theengine.newMaterial("red",12587281,t),this.theengine.newMaterial("white",13421772,t),this.theengine.newMaterial("yellow",12632081,t),this.theengine.newMaterial("black",1118481,t),this.theengine.newMaterial("green",1163281,t);const n=this.theengine.newMaterial("groon",1167394,"nowt man");this.theengine.newMaterial("purpool",12259703,"nowt man"),this.pdefs.ballradius=b0*Ne,this.pdefs.b2d.ball={kgpersqm:1,friction:.1,bounce:.7},this.pdefs.cornerpocketradius=Ne*.2,this.pdefs.sidepocketradius=Ne*.1;const i=Ne*-.03,s=Ne*.01,r=Ne*0,a=Ne*.04;this.pdefs.tablex=Ne*ua,this.pdefs.tabley=Ne*Gs;const l=Ne*.117;this.pdefs.sidepocketwide=Ne*.133,this.pdefs.cushionthick=Ne*.051;const h=Math.tan(20*(Math.PI/180)),u=this.pdefs.cushionthick*2*h,d=Math.sqrt(l*l/2);this.pdefs.cushionhoriz=this.pdefs.tablex-d*2;const p=this.pdefs.cushionhoriz+this.pdefs.cushionthick*2;this.pdefs.cushionvert=(this.pdefs.tabley-this.pdefs.sidepocketwide)/2-d;const g=this.pdefs.cushionvert+this.pdefs.cushionthick*2,m=this.pdefs.cushionvert+u;this.pdefs.b2d.cushtr=[{x:this.pdefs.cushionthick/2,y:-g/2},{x:this.pdefs.cushionthick/2,y:m/2},{x:-this.pdefs.cushionthick/2,y:this.pdefs.cushionvert/2},{x:-this.pdefs.cushionthick/2,y:-this.pdefs.cushionvert/2}],this.pdefs.b2d.cushbr=[{x:this.pdefs.cushionthick/2,y:-m/2},{x:this.pdefs.cushionthick/2,y:g/2},{x:-this.pdefs.cushionthick/2,y:this.pdefs.cushionvert/2},{x:-this.pdefs.cushionthick/2,y:-this.pdefs.cushionvert/2}],this.pdefs.b2d.cushtl=[{x:this.pdefs.cushionthick/2,y:-this.pdefs.cushionvert/2},{x:this.pdefs.cushionthick/2,y:this.pdefs.cushionvert/2},{x:-this.pdefs.cushionthick/2,y:m/2},{x:-this.pdefs.cushionthick/2,y:-g/2}],this.pdefs.b2d.cushbl=[{x:this.pdefs.cushionthick/2,y:-this.pdefs.cushionvert/2},{x:this.pdefs.cushionthick/2,y:this.pdefs.cushionvert/2},{x:-this.pdefs.cushionthick/2,y:g/2},{x:-this.pdefs.cushionthick/2,y:-m/2}],this.pdefs.b2d.cushtop=[{x:p/2,y:-this.pdefs.cushionthick/2},{x:this.pdefs.cushionhoriz/2,y:this.pdefs.cushionthick/2},{x:-this.pdefs.cushionhoriz/2,y:this.pdefs.cushionthick/2},{x:-p/2,y:-this.pdefs.cushionthick/2}],this.pdefs.b2d.cushbot=[{x:this.pdefs.cushionhoriz/2,y:-this.pdefs.cushionthick/2},{x:p/2,y:this.pdefs.cushionthick/2},{x:-p/2,y:this.pdefs.cushionthick/2},{x:-this.pdefs.cushionhoriz/2,y:-this.pdefs.cushionthick/2}];const f=.1;this.theengine.newGeoBox("table",this.pdefs.tablex*1.1,f,this.pdefs.tabley*1.1),this.theengine.newGeoBox("baulkline",this.pdefs.tablex*1.1,f,f);const _=this.pdefs.ballradius*2;this.theengine.newGeoSphere("ball",this.pdefs.ballradius),this.theengine.newGeoSphere("sidepocket",this.pdefs.sidepocketradius),this.theengine.newGeoSphere("cornerpocket",this.pdefs.cornerpocketradius),this.theengine.newGeoSphere("blackspot",this.pdefs.ballradius*.3),this.theengine.newGeoBox("cushionv",this.pdefs.cushionthick,_,this.pdefs.cushionvert),this.theengine.newGeoBox("cushionh",this.pdefs.cushionhoriz,_,this.pdefs.cushionthick),this.theengine.newGeoMeshFrom2DVerts("cushiontop",this.pdefs.b2d.cushtop,_),this.theengine.newGeoMeshFrom2DVerts("cushionbot",this.pdefs.b2d.cushbot,_),this.theengine.newGeoMeshFrom2DVerts("cushionbotleft",this.pdefs.b2d.cushbl,_),this.theengine.newGeoMeshFrom2DVerts("cushionbotright",this.pdefs.b2d.cushbr,_),this.theengine.newGeoMeshFrom2DVerts("cushiontopleft",this.pdefs.b2d.cushtl,_),this.theengine.newGeoMeshFrom2DVerts("cushiontopright",this.pdefs.b2d.cushtr,_),this.poolarea=this.theengine.newArea(),this.ballarray=[],this.cushionarray=[],this.pocketarray=[],this.whiteball=this.makeBall("white",this.poolarea),this.whiteball.onCollisionBegin=(D,Y)=>{D.colour&&(this.whitefirsttouch===null&&(this.whitefirsttouch=D),this.setwhitetouching(D,!0))},this.whiteball.onCollisionEnd=(D,Y)=>{D.colour&&this.setwhitetouching(D)};for(let D=1;D<rn;D++){let Y="red";D===5?Y="black":D+((14445&1<<(D&15))>>(D&15))&1||(Y="yellow"),this.makeBall(Y,this.poolarea)}const y="groon";let v="";v+=this.newCushion(this.poolarea,[0,0,-(this.pdefs.tabley/2+this.pdefs.cushionthick/2)],"cushiontop",y),v+=this.newCushion(this.poolarea,[0,0,this.pdefs.tabley/2+this.pdefs.cushionthick/2],"cushionbot",y),v+=this.newCushion(this.poolarea,[this.pdefs.tablex/2+this.pdefs.cushionthick/2,0,(this.pdefs.cushionvert+this.pdefs.sidepocketwide)/2],"cushionbotright",y),v+=this.newCushion(this.poolarea,[this.pdefs.tablex/2+this.pdefs.cushionthick/2,0,-(this.pdefs.cushionvert+this.pdefs.sidepocketwide)/2],"cushiontopright",y),v+=this.newCushion(this.poolarea,[-(this.pdefs.tablex/2+this.pdefs.cushionthick/2),0,(this.pdefs.cushionvert+this.pdefs.sidepocketwide)/2],"cushionbotleft",y),v+=this.newCushion(this.poolarea,[-(this.pdefs.tablex/2+this.pdefs.cushionthick/2),0,-(this.pdefs.cushionvert+this.pdefs.sidepocketwide)/2],"cushiontopleft",y);const b="black",w=this.pdefs.tablex/2+s+this.pdefs.sidepocketradius,E=xi*(this.pdefs.cornerpocketradius+i),C=this.pdefs.tablex/2+E,x=this.pdefs.tabley/2+E,T=l/2,P=(this.pdefs.sidepocketwide-u)/2,O=this.pdefs.tablex/2+s+P+r,Q=xi*(T+i+a),U=this.pdefs.tablex/2+Q,I=this.pdefs.tabley/2+Q;v+=this.newPocket(this.poolarea,[w,-this.pdefs.ballradius,0],"sidepocket",b,P,[O,0]),v+=this.newPocket(this.poolarea,[-w,-this.pdefs.ballradius,0],"sidepocket",b,P,[-O,0]);const B=.4;v+=this.newPocket(this.poolarea,[C,-this.pdefs.ballradius,x],"cornerpocket",b,T*B,[U,I]),v+=this.newPocket(this.poolarea,[-C,-this.pdefs.ballradius,x],"cornerpocket",b,T*B,[-U,I]),v+=this.newPocket(this.poolarea,[-C,-this.pdefs.ballradius,-x],"cornerpocket",b,T*B,[-U,-I]),v+=this.newPocket(this.poolarea,[C,-this.pdefs.ballradius,-x],"cornerpocket",b,T*B,[U,-I]),v+=this.getthefaces(1,180),v+=this.getthefaces(181,6*4,4);const K=[[],[]];this.theengine.newGeoSphere("bigmarker",this.pdefs.ballradius*.2),this.theengine.newGeoSphere("smallmarker",this.pdefs.ballradius*.1);const X=20;for(let D=0;D<X;D++)K[0].push(this.poolarea.addObject([0,0,0],0,"bigmarker","black",void 0,!1,!1)),K[1].push(this.poolarea.addObject([0,0,0],0,"smallmarker","white",void 0,!1,!1));this.cyclestep=0,this.setmarkers=(D=[0,-25*.2],Y=[0,0],$=50)=>{this.cyclestep=this.cyclestep+$&1023;const Z=(this.cyclestep&512)===512?0:1,oe=Z===0?1:0,ve=(this.cyclestep&511)/511,W=Ne*.05;let Oe=!1;const ge=(ue,ae,ze)=>{let we=D;Oe||(we=[D[0]+Y[0]*ze,D[1],D[2]+Y[1]*ze],(Math.abs(we[0])>this.halftablewidth||Math.abs(we[2])>this.halftablelength)&&(Oe=!0,we=D)),K[ue][ae].update3DPos({position:we})};for(let ue=0;ue<X;ue++)ge(0,ue,W*(ue*2+ve+Z)),ge(1,ue,W*(ue*2+ve+oe))},this.setmarkers();const z=[null],k=D=>{const Y=z.indexOf(D);if(Y>-1&&z.splice(Y,1),z.length===0&&(this.poolarea.replaceMaterials({materialtype:"basic"}),this.tablemodelobjdata!==void 0&&(this.tablemodelobjdata.gameobject.mesh.children[1].children[0].material=n),this.highquality=!1,this.ui=new x0(this),this.LogIn(void 0),this.gamephase=this.gamephases.waitingforinput,this.ui.continuegame("one time password:"),e)){const $=()=>{const Z=window.innerWidth/window.innerHeight;Z<bl?this.fovmulti=bl/Z:this.fovmulti=1,this.theengine.resize()};$(),window.setInterval(()=>{this.update()},1e3/60),window.addEventListener("resize",$,!1)}};this.makeexport===!1?(this.tablemodelobjdata={filename:"pooltable.glb",callback:D=>{D.gameobject=this.poolarea.addObject([0,0,0],0,"","",D.filename,!1,!0),k(D)}},z.push(this.tablemodelobjdata),this.theengine.newGeoMeshGLTF(this.tablemodelobjdata)):this.threetable=this.poolarea.addObject([0,-(this.pdefs.ballradius+f/2),0],0,"table","green",void 0,!1,!0),this.cuemodelobjdata={filename:"poolcue.glb",callback:D=>{D.gameobject=this.poolarea.addObject([0,4,0],0,"","",D.filename,!0,!1),this.hidecue("ontable"),k(D)},positioncue:()=>{const D=this.cuemodelobjdata.cueback+this.pdefs.ballradius,Y=[this.cuemodelobjdata.centreon[0]+this.cuemodelobjdata.directionvec[0]*-D,this.cuemodelobjdata.centreon[1]+this.cuemodelobjdata.directionvec[1]*-D+this.cuemodelobjdata.cueup,this.cuemodelobjdata.centreon[2]-this.cuemodelobjdata.directionvec[2]*-D],$=this.cuemodelobjdata.angle2Dyaw,Z=this.cuemodelobjdata.anglePitch;this.cuemodelobjdata.gameobject.update3DPos({position:Y,angle2Dyaw:$,anglePitch:Z})}},z.push(this.cuemodelobjdata),this.theengine.newGeoMeshGLTF(this.cuemodelobjdata),this.bghdridata={filename:"lapa_4k.hdr",callback:D=>{D.setarea(this.poolarea,!0),k(D)}},k(null)}highqualityrenderswitch(e){e!==this.highquality&&(this.poolarea.replaceMaterials(null),this.highquality=e)}async testinvite(e){const t=new URLSearchParams(e),n=new Uint8Array(await Re.decompressfromurl(t.get("g")).buf),i=1+Tn+6+n[1+Tn+5],s=n.slice(1,1+Tn),r={userdata:this.userdata,ivbuffer:s,frameab:n.slice(1+Tn,i)},a=n.slice(i),l=await this.depackage(a,r,2);console.log(l)}async test(){this.blackspot=[24,0],this.frame={name:["mer","meer"],moves:[{balls:[]},{shotvec:null,balls:[],whitepos:null}],currentmoveno:1};for(let a=0;a<rn;a++)this.frame.moves[0].balls.push({});await this.rack(),this.highqualityrenderswitch(!0);const e=0;this.ui.pocketcamno=e;const t=2.2,n=50,i=this.pocketarray[e];console.log(i);const s={x:i.holebottom[0],y:i.holebottom[1]},r={x:s.x+i.rollawayvec[0]*t,y:s.y+i.rollawayvec[1]*t};return this.shotvector={x:-i.rollawayvec[0]*n,y:-i.rollawayvec[1]*n},this.setball(this.whiteball,r),this.resetShotVars(),this.gamephases.servershotanim}async phaseswitcher(e){switch(e.newphase){default:break;case this.gamephases.test:e.newphase=await this.test(),e.hidegamehud=!0;break;case this.gamephases.servershotanim:this.servershottimer=0,this.whiteball.potindex!==void 0&&(e.newphase=this.gamephases.error,this.errormessage="logic error - white not reset somehow",await this.phaseswitcher(e));break;case this.gamephases.simulating:if(e.simulating={skip:!0},this.frame.player1!==void 0){const n=this.getMove();n.usercomment===void 0?n.player1===this.frame.player1&&(e.simulating.commentafter=n.moveno):e.userandcomment={comment:n.usercomment,user:n.player1}}break;case this.gamephases.waitingforinput:break;case this.gamephases.addcomment:e.newphase=this.gamephases.waitinoverhead,e.createusercomment={frame:this.frame,shotno:this.addcommenttoshotno};break;case this.gamephases.aiming:{this.camY=.5;const n=this.getMove();if(n.shotvec===null){if(e.aimvariables={canplacecueball:n.freeshot===!0||n.onbreak===!0},this.waitingforserver=!0,this.frame.player1!==void 0){const i=this.getMove(-1);i!==void 0&&i.player1===n.player1&&i.usercomment===void 0&&(e.aimvariables.commentlastshot=!0)}}else this.waitingforserver=void 0,this.shotvector=null,this.setcueonwhite(n.shotvec),e.newphase=this.gamephases.servershotanim,this.cuepower>1.001&&(e.newphase=this.gamephases.error,this.errormessage="cheating. over power."),await this.phaseswitcher(e);break}case this.gamephases.placingwhite:{if(this.getMove().whitepos===null){e.setwhiteball=!0;break}await this.placewhite()===!0?(e.newphase=this.gamephases.aiming,await this.phaseswitcher(e)):(e.hidegamehud=!0,e.errormessage="Stored shot has invalid white position. cheating?",e.newphase=this.gamephases.error);break}case this.gamephases.freeshotchoice:this.freeshotchoices.frompos||this.freeshotchoices.rerack?(e.showchoices=this.freeshotchoices,e.newphase=this.gamephases.waitinoverhead):(e.newphase=this.gamephases.placingwhite,await this.phaseswitcher(e));break;case this.gamephases.displayreplaymenu:e.hidegamehud=!0,e.replayframe=this.frame,e.newphase=this.gamephases.waitingforinput;break;case this.gamephases.showurl:const t=await this.packageurl();t.errmsg!==void 0?e.errormessage=t.errmsg:e.shareurl=t,e.newphase=this.gamephases.waitingforinput;break;case this.gamephases.error:console.error(this.errormessage),e.hidegamehud=!0,e.errormessage=this.errormessage;break}}async setGamephase(e){const t={newphase:e,message:this.evaluatedmessage,playername:this.displayplayername};this.displayplayername=void 0,this.evaluatedmessage=void 0,this.setmarkers(),this.hidecue(),await this.phaseswitcher(t),this.addcommenttoshotno=void 0,console.log(t),await this.ui.setui(t),this.gamephase=t.newphase}getMove(e=0){return this.frame.moves[this.frame.currentmoveno+e]}validateLogin(e){if(e===null)return{login:e,message:"Logged out"};const t=JSON.parse(e);return t.name.length===0||t.name.length>30?{login:null,message:"Name must be max of 30 characters (and not blank)"}:(t.secret.length,{login:e})}LogIn(e){let t=null;if(e!==void 0){const n=this.validateLogin(e);n.login===null?(localStorage.removeItem("pooluser"),t=n.message):localStorage.setItem("pooluser",n.login)}this.userdata=localStorage.getItem("pooluser"),this.ui.updatelogindisplay(this.userdata,t)}setwhitetouching(e,t){for(let n=0;n<rn;n++)if(this.ballarray[n]===e){t===void 0?delete this.whitetouching[n]:this.whitetouching[n]=t;return}}async Create2dPyhsics(){await this.theengine.Init2DPhysics(),this.theengine.CreateDefault2dBodies(),this.poolarea.Create2dWorld(),this.Create2dFixtures(),this.poolarea.gameObjects.forEach(e=>{e.add2DPhys()}),this.poolarea.CreateContactHandlers(50,!0)}Create2dFixtures(){this.theengine.newFixtureDef("ball",{name:"circle",radius:this.pdefs.ballradius},this.pdefs.b2d.ball),this.theengine.newFixtureDef("cornerpocket",{name:"circle",radius:this.pdefs.cornerpocketradius-this.pdefs.ballradius}),this.theengine.newFixtureDef("sidepocket",{name:"circle",radius:this.pdefs.sidepocketradius-this.pdefs.ballradius}),this.theengine.newFixtureDef("cushiontopright",{name:"verts",array:this.pdefs.b2d.cushtr}),this.theengine.newFixtureDef("cushionbotright",{name:"verts",array:this.pdefs.b2d.cushbr}),this.theengine.newFixtureDef("cushiontopleft",{name:"verts",array:this.pdefs.b2d.cushtl}),this.theengine.newFixtureDef("cushionbotleft",{name:"verts",array:this.pdefs.b2d.cushbl}),this.theengine.newFixtureDef("cushiontop",{name:"verts",array:this.pdefs.b2d.cushtop}),this.theengine.newFixtureDef("cushionbot",{name:"verts",array:this.pdefs.b2d.cushbot})}async reviewGame(e=void 0){e===void 0&&(e=this.frame.moves.length-1),this.frame.currentmoveno=e,await this.readynextshot()}StartGame(e,t=!1){const n=[e[0].value==""?"First Player":e[0].value,e[1].value==""?"Second Player":e[1].value];this.frame={moves:[],player1tobreak:t,name:n,currentmoveno:-1},this.evaluatemove(),this.audio.play("audio/poolhumloop.wav","music",{loop:!0})}RestartURLGame(e){this.frame.timestarted=Date.now()/1e3,this.frame.moves=[],this.frame.player1tobreak=this.frame.player1,this.frame.name[2]=e,this.frame.currentmoveno=-1,this.frame.frameab=this.GetFrameAbFromFrame(this.frame),this.frame.rematch=!0,this.evaluatemove()}getTextToUrlParamEncoder(e,t){return async n=>n===""?"":"&m="+await Re.compresstexttoencurl(n,e,t)}getAllShotMessagesUrlParamEncoder(e,t){const n=this.getTextToUrlParamEncoder(e,t);return async()=>{const i={};for(let r=0;r<this.frame.currentmoveno;r++)this.frame.moves[r].usercomment!==void 0&&(i[r]=this.frame.moves[r].usercomment);const s=JSON.stringify(i);return n(s)}}async generateinviteurl(e,t){const n=this.userdata;if(n===null)return{errmsg:"Not logged in."};const i=JSON.parse(n).name,s=i+" invites you to a simple game of pool: "+e,r=new TextEncoder().encode(JSON.stringify([i,null,e]));if(r.byteLength>222)return{errmsg:"Game name is too long."};const a=window.crypto.getRandomValues(new Uint8Array(Tn)),l={pw:t},c=this.getTextToUrlParamEncoder(l,a),h=void 0;if(window.crypto.subtle===void 0)return{errmsg:"Requires secure https context."};const u=await Re.genpubprivkeyab(v0*8),d=new Uint8Array(await Re.encryptab(u.priv_ab,{pw:n},a)),p=new Uint8Array(await Re.encryptab(u.pub_ab,l,a)),g=Nn+r.byteLength,m=0,f=new Uint8Array(g+Ns+m+1+Xi+d.byteLength);f[4]=1,f[5]=r.byteLength;let _=Nn;f.set(r,_),_+=r.byteLength,_+=Ns,_+=1,new DataView(f.buffer).setUint16(_,d.byteLength,!0),_+=Xi,f.set(d,_);const y=new Uint8Array(await Re.signarraybuffer(f,n));if(y.byteLength!==ks)return{errmsg:"Signature is wrong length."};const v=await Re.compresstourl(Re.combineabs([new Uint8Array(1),a,f,y,p]));return{url:"?g="+encodeURIComponent(v)+"&v=1",text:s,title:vl,texttourl:c,commentstourl:h,commentlastshot:!1}}GetFrameAbFromFrame(e){const t=new TextEncoder().encode(JSON.stringify(e.name));if(t.byteLength>255)return null;const n=new Uint8Array(Nn+t.byteLength);return new DataView(n.buffer).setUint32(0,e.timestarted,!0),n[4]=e.player1tobreak?1:0,n[5]=t.byteLength,n.set(t,Nn),n}GetFrameFromFrameAb(e){try{const t=JSON.parse(Re.arraybuffertostring(e.slice(Nn))),n=new DataView(e.buffer).getUint32(0,!0),i=(e[4]&1)===1;return{moves:[],name:t,timestarted:n,player1tobreak:i,frameab:e,currentmoveno:-1}}catch(t){return{error:t.message}}}async GetMatchFromURLData(e,t){const n=e.get("g");if(n===null)return null;if(window.crypto.subtle===void 0)return{errmsg:"Requires secure https context."};if(e.get("v")===null)return{errmsg:"URL truncated at "+window.location.href.length+" characters. ..."+window.location.href.slice(-10)+`\r
If you are, for example, using Whatsapp on an iPhone, you must press "Read more", or the clickable link it will give you will have been noticeably cut short (if you look), and therefore useless.`};const s=await Re.decompressfromurl(n);if(s.errmsg!==void 0)return{errmsg:"Couldn't parse URL? : "+s.errmsg};const r=new Uint8Array(s.buf),a=1+Tn,l=r[a+(Nn-1)],c=a+Nn+l,h=this.GetFrameFromFrameAb(r.slice(a,c));if(h.error!==void 0)return{errmsg:"URL Frame data error: "+h.error};h.ivbuffer=new Uint8Array(a+1),h.ivbuffer.set(r.slice(0,a),0),h.ivbuffer[a]=window.crypto.getRandomValues(new Uint8Array(1))[0];const u=h.ivbuffer.slice(1,a);if(this.userdata===null)return{frame:h,errmsg:"Log in to participate in game!",showretry:!0};h.userdata=this.userdata;const d=await this.depackage(r.slice(c),h,1);if(d.errorlog!==void 0)return{frame:h,errmsg:d.errorlog};if(d.verified===!0)return{errmsg:"Logged in as wrong user (this is a game URL that you need to send to your friend)",showretry:!0};const p=c+d.datalength;h.movestosendback=r.slice(c,p);const g={pw:t};if(h.name[0]===null||h.name[1]===null)if(h.timestarted!==0){h.name[h.name[0]===null?0:1]=JSON.parse(this.userdata).name,h.frameab=this.GetFrameAbFromFrame(h);const f=await this.depackage(r.slice(p),h,2);if(f.errorlog!==void 0)return{frame:h,errmsg:"Logged in as wrong user",showretry:!0};if(h.sharedkeyab=f.sharedkeyab,g.ab=h.sharedkeyab,d.sharedkeyab=h.sharedkeyab,await this.decryptmoves(d)===!1)return{frame:h,errmsg:"Couldn't decrypt opponent's shots."};if(f.player1===d.player1)return{frame:h,errmsg:"Both players set to same #?"};h.player1=f.player1,h.currentmoveno=0,d.moves.forEach(_=>{if(h.moves.length!==_.moveno)return{frame:h,errmsg:"wrong shots added?"};h.moves.push(_)})}else{if(h.name[1]=JSON.parse(this.userdata).name,h.timestarted=Date.now()/1e3,h.frameab=this.GetFrameAbFromFrame(h),h.frameab===null)return{frame:h,errmsg:"combined names are too long"};if(h.player1tobreak===!1)return{frame:h,errmsg:"yeah, i don't think it'll work if i don't break. what does the replay do? but i should check what happens anyway.."};h.player1=!d.player1,h.sharedkeyab=await Re.genKeyAb();const f=r.slice(p);try{const y=await Re.decryptab(f.buffer,g,u);h.thirddata=await Re.pubprivencrypt(h.sharedkeyab,y)}catch{return{frame:h,errmsg:"Wrong shared password? (One-time key decryption failed)",showretry:!0}}const _=this.frame;this.frame=h,this.evaluatemove(),this.frame=_}else{const f=await this.depackage(r.slice(p),h,2);if(f.verified!==!0)return{frame:h,errmsg:"Logged in as wrong user?",showretry:!0};if(f.errorlog!==void 0)return{frame:h,errmsg:f.errorlog};if(f.privkeyab!==void 0)try{f.sharedkeyab=await Re.pubprivdecrypt(r.slice(p+f.datalength),f.privkeyab)}catch{return{frame:h,errmsg:"Couldn't decrypt key from opponent..."}}if(h.sharedkeyab=f.sharedkeyab,g.ab=h.sharedkeyab,d.sharedkeyab!==void 0&&console.log("we already have the shared key upon decrypting their data, somehow..."),d.sharedkeyab=h.sharedkeyab,await this.decryptmoves(d)===!1)return{frame:h,errmsg:"Couldn't decrypt opponent's shots."};if(f.player1===d.player1)return{frame:h,errmsg:"Both players set to same #?"};h.player1=f.player1;const _=e.get("r");if(_!==null){const y=await Re.decompressfromurl(_);try{if(y.errmsg!==void 0)throw new Error(y.errmsg);const v=y.buf,b=new Uint8Array(await Re.decryptab(v,{ab:h.sharedkeyab},u));this.getmoves(b.slice(1).buffer,h.moves,b[0]);for(let w=0;w<b[0];w++)h.moves[w].moveno!==w&&console.log("wrong move no added in replay shots...")}catch(v){console.log(v)}}if(f.moves!==void 0){for(let y=h.moves.length;y<f.moves[0].moveno;y++)h.moves.push(null);f.moves.forEach(y=>{if(h.moves.length!==y.moveno)return{frame:h,errmsg:"wrong shots added?"};h.moves.push(y)})}h.currentmoveno=h.moves.length,d.moves.forEach(y=>{if(h.moves.length!==y.moveno)return{frame:h,errmsg:"wrong shots added?"};h.moves.push(y)})}const m=e.get("m");if(m!==null){const f=await Re.decompresstextfromencurl(m,g,u),_=JSON.parse(f);for(const[y,v]of Object.entries(_))h.moves[y].usercomment=v}return{frame:h,errmsg:void 0}}resetShotVars(){this.whitefirsttouch=null,this.postwhitetouchcushion=!1,this.cushioned=0,this.whitecushioned=!1,this.whitetouching={},this.potindex=0,this.ballarray.forEach(e=>{e.touchedcushion=!1,e.crossedline=!1,e.potindex>this.potindex&&(this.potindex=e.potindex)})}getthefaces(e,t,n=3){let i="";for(let s=0;s<t;s+=n){i+=`\r
f `;for(let r=0;r<n;r++)i+=" "+(s+r+e).toString()}return i}getquad(e,t){let n="";return[{x:-t,z:-t},{x:+t,z:-t},{x:+t,z:+t},{x:-t,z:+t}].forEach(i=>{n+=`\r
v `+(e[0]+i.x).toString()+" "+e[1].toString()+" "+(e[2]+i.z).toString()}),n}newPocket(e,t,n,i,s,r){const a=this.makeexport?n:"",l=e.addObject(t,0,a,i);l.mesh!==void 0&&l.mesh.scale.set(1,.01,1);const c=this.theengine.geometries[n].parameters.radius;return l.thresholdradius=c-this.pdefs.ballradius,l.holeradius=s-this.pdefs.ballradius,l.holebottom=r,l.holedepth=Ne*-.07,l.rollawayvec=[r[1]===0?r[0]>0?-1:1:r[0]>0?-xi:xi,r[1]===0?0:r[1]>0?-xi:xi],l.onCollisionBegin=(h,u)=>{h.pocket=l,h.handlepot=!0},l.ColFixDName=n,l.BodyDName="static",l.sensor=!0,this.pocketarray.push(l),this.makeexport?this.getquad(t,c):""}newCushion(e,t,n,i){let s=this.makeexport?n:"";const r=e.addObject(t,0,s,i,void 0,!1,!1);if(r.onCollisionBegin=(c,h)=>{this.whitefirsttouch!==null&&(this.postwhitetouchcushion=!0),c.colour==="white"?this.whitecushioned=!0:c.touchedcushion===!1&&(this.cushioned++,c.touchedcushion=!0)},r.ColFixDName=n,r.BodyDName="static",this.cushionarray.push(r),!this.makeexport)return"";const a=this.theengine.builtverts[n];let l="";for(let c=0;c<a.length;c+=3){l+=`\r
v`;for(let h=0;h<3;h++)l+=" "+(a[c+h]+t[h]).toString()}return l}audioevent(e,t){if(e==="c")return;const n={b:"ball02",s:"shot02",c:"cushion",r:"table01",p:"pocket02"},i=.2,s=1-i+Math.random()*i*2;this.audio.play("audio/"+n[e]+".wav","sfx",{rate:s})}addanimationtothisball(e,t){const n=.016666666666666666;e.velocity=[t.x,0,t.y];const i=Je.getMagnitude(t.x,t.y),s=this.pdefs.ballradius*3;if(i<s){const a=s/i;e.velocity[0]*=a,e.velocity[2]*=a}e.gravityadd=0,this.audioevent("p",Je.getMagnitude(t.x,t.y));const r=()=>{e.position[0]+=e.velocity[0]*n,e.position[1]=e.pocket.holedepth,e.position[2]+=e.velocity[2]*n,e.update3DPos(),Math.abs(e.position[0])<3&&delete e.animate};e.animate=()=>{const a=[e.pocket.holebottom[0]-e.position[0],e.pocket.holebottom[1]-e.position[2]],l=Je.getMagnitude(a[0],a[1]);e.position[0]+=e.velocity[0]*n,e.position[1]+=e.velocity[1]*n,e.position[2]+=e.velocity[2]*n;const c=[e.pocket.holebottom[0]-e.position[0],e.pocket.holebottom[1]-e.position[2]],h=Je.getMagnitude(c[0],c[1]);if(h>l&&(e.gravityadd=-9.8*n,h>e.pocket.holeradius)){e.velocity[0]=0,e.velocity[2]=0;const u=Je.getNormalized(c[0],c[1]);e.position[0]=e.pocket.holebottom[0]-u[0]*e.pocket.holeradius,e.position[2]=e.pocket.holebottom[1]-u[1]*e.pocket.holeradius}if(e.gravityadd===0&&Je.getMagnitude(e.pocket.position[0]-e.position[0],e.pocket.position[2]-e.position[2])<e.pocket.thresholdradius&&(e.gravityadd=-9.8*Ne*n),e.velocity[1]+=e.gravityadd,e.position[1]<e.pocket.holedepth){e.position[1]=e.pocket.holedepth;const u=Ne*.4;e.velocity=[e.pocket.rollawayvec[0]*u,0,e.pocket.rollawayvec[1]*u],this.audioevent("r",1),e.animate=r}e.update3DPos()}}makeBall(e,t){const n=t.addObject([0,-5,0],0,"ball",e,void 0,!0,!0);return n.ColFixDName="ball",n.BodyDName="dynamic",n.potindex=void 0,n.handlepot=!1,n.touchedcushion=!1,n.colour=e,n.onUpdate=()=>{n.handlepot===!0&&(n.handlepot=!1,n.colour==="white"?n.potindex=15:(this.setwhitetouching(n),n.potindex=++this.potindex),this.addanimationtothisball(n,n.getLinearVelo()),n.SetActive(!1)),n.position[2]>0&&(n.crossedline=!0)},this.ballarray.push(n),n}performanimations(){let e=!0;return this.poolarea.gameObjects.forEach(t=>{t.animate!==void 0&&(e=!1,t.animate())}),e}simulateIterations(e){const t=.016666666666666666,n=Ne*5e-4;let i=0,s;for(e||(s=r=>{this.audioevent(this.theengine.RapierHandles[r.collider2()].ColFixDName[0],r.totalForceMagnitude())});;){const r=this.theengine.update(16.666666666666668,s)[0],a=r.maxvelo>0?r.maxvelo:r.angular?1e-4:0;if(a<1e-7)return!0;if(i+=a*t,e===!1&&i>n)return!1}}async update(){if(this.updating){console.log("already updating in "+this.gamephase.description);return}this.updating=!0;const e=this.ui.update();switch(this.gamephase){case this.gamephases.waitingforinput:const t=Je.getFromAngle(this.spinbeast);this.setAimCam(t,[0,0,0],50,20,-20,50,0),this.spinbeast+=.005;break;case this.gamephases.waitinoverhead:this.setOverheadCam();break;case this.gamephases.placingwhite:if(this.setOverheadCam(),e.whitepos!==null){const s=this.poolarea.thecamera.getTableTopCoords(e.whitepos,this.makeexport?this.threetable.mesh:this.tablemodelobjdata.gameobject.mesh.children[1]);s!==null&&s[2]>this.baulkliney-this.pdefs.ballradius&&this.positionwhiteinbaulk(s)}if(this.choice==="go"){await this.placewhite()===!0&&await this.setGamephase(this.gamephases.aiming);break}break;case this.gamephases.aiming:if(this.aimthing(e),this.choice==="go"){this.shotvector=null,await this.setGamephase(this.gamephases.servershotanim);const s=Je.getFromAngle(this.aimangle);this.setcueonwhite({x:s[0]*this.shotpower,y:s[1]*this.shotpower}),this.getshotvector()}break;case this.gamephases.simulating:let n=this.speedmode;this.choice==="go"&&(n=!0),this.setOverheadCam(),this.finsim===!1&&(this.finsim=this.simulateIterations(n));const i=this.performanimations();if(this.cuething(),i&&this.finsim){const s=this.getMove();this.saveballstate(s.balls);const r=this.serializemove(s);if(r!==null){this.errormessage=r.errormessage,await this.setGamephase(this.gamephases.error);break}const a=[];this.saveballstate(a),this.ballsdiffer(s.balls,a)&&console.error("balls differ from stored in move");const l=this.evaluatemove();this.evaluatedmessage=l.message,l.error&&console.error("something wrong here.."),this.addcommenttoshotno!==void 0?await this.setGamephase(this.gamephases.addcomment):await this.readynextshot()}break;case this.gamephases.servershotanim:this.setOverheadCam(),this.shotvector!==null&&(this.getMove().shotvec=this.shotvector,this.setcueonwhite(this.shotvector),this.shotvector=null,this.waitingforserver=!1),this.cuething()&&(this.audioevent("s",this.cuepower),await this.Create2dPyhsics(),this.theengine.update(0),this.whiteball.applyForce(this.getMove().shotvec),this.resetShotVars(),await this.setGamephase(this.gamephases.simulating),this.finsim=!1),this.servershottimer++;break;case this.gamephases.error:console.error(this.errormessage);break;default:console.error("invalid gamephase..",this.gamephase);break}switch(this.ui.pocketcamno<6&&this.setpocketcam(this.ui.pocketcamno),this.choice){default:break;case"fromrest":await this.setGamephase(this.gamephases.aiming);break;case"rerack":this.getMove().onbreak=!0,await this.readynextshot();break;case"frombaulk":this.getMove().whitepos=null,await this.setGamephase(this.gamephases.placingwhite);break;case"commentlastshot":await this.setGamephase(this.gamephases.addcomment);break;case"createreplaymenu":this.frame!==void 0&&this.frame.moves.length>1?await this.setGamephase(this.gamephases.displayreplaymenu):await this.ui.newmessage("No shots to replay",50);break}this.choice=null,this.theengine.render(),this.updating=!1}hidecue(e="hide"){const t={hide:{angle2Dyaw:Math.PI/2,anglePitch:0,centreon:[0,-3,-12.5]},ontable:{angle2Dyaw:Math.PI/4,anglePitch:-.05,centreon:[Ne*.2,-this.pdefs.ballradius*.79,Ne*.1]},leaning:{angle2Dyaw:0,anglePitch:1.975,centreon:[this.halftablewidth,Ne*.4,Ne*.8]}};this.cuemodelobjdata.angle2Dyaw=t[e].angle2Dyaw,this.cuemodelobjdata.anglePitch=t[e].anglePitch,this.cuemodelobjdata.centreon=t[e].centreon,this.cuemodelobjdata.cueup=0,this.cuemodelobjdata.directionvec=[0,0,0],this.cuemodelobjdata.cueback=0,this.cuemodelobjdata.positioncue()}setcueonwhite(e,t=-.1,n=this.pdefs.ballradius*1.12){const i=Je.getMagnitude(e.x,e.y),s=[e.x/i,-e.y/i];this.cuepower=i/Ml,this.cuemodelobjdata.angle2Dyaw=s[1]>0?Math.acos(s[0]):-Math.acos(s[0]),this.cuemodelobjdata.anglePitch=t,this.cuemodelobjdata.centreon=Object.values(this.whiteball.position),this.cuemodelobjdata.cueup=n,this.cuemodelobjdata.cueback=0;const r=Je.getFromAngle(this.cuemodelobjdata.anglePitch);this.cuemodelobjdata.directionvec=[r[0]*s[0],r[1],r[0]*s[1]]}cuething(){let e=!1;const t=Ne*(.1+.15*this.cuepower);if(this.waitingforserver||this.servershottimer<60){const n=20+80*(1-this.cuepower),i=(Math.sin(this.servershottimer/n*Math.PI*2)+1)/2;this.cuemodelobjdata.cueback=t*i+this.pdefs.ballradius/2,this.pauseticks=30}else if(this.pauseticks>0)this.cuemodelobjdata.cueback<t+this.pdefs.ballradius?this.cuemodelobjdata.cueback+=.2:this.pauseticks--;else if(this.cuemodelobjdata.cueback-=.4,this.cuemodelobjdata.cueback<0&&(e=!0),this.cuemodelobjdata.cueback<-this.pdefs.ballradius*5){this.hidecue(),this.cuemodelobjdata.cueback=-1/0;return}return this.cuemodelobjdata.positioncue(),e}aimthing(e){this.shotpower=wl+(Ml-wl)*e.power;const t=1.5*2;this.camY+=e.angledelta[1]*.002*t;let n=this.camY;this.camY<0&&(n=0,this.camY<-.5&&(this.camY=-.5)),this.camY>1&&(n=1,this.camY>1.5&&(this.camY=1.5)),this.aimangle+=e.angledelta[0]*.01*t*(n+.01),this.aimangle<-Math.PI&&(this.aimangle+=Math.PI*2),this.aimangle>=Math.PI&&(this.aimangle-=Math.PI*2);const i=this.whiteball.position,s=Je.getFromAngle(this.aimangle);this.setmarkers(i,s);let r,a,l=Ne,c,h,u=.2*Ne;if(n<.5)r=i,h=.1*Ne,a=5+n*2*75,c=n*2;else{const d=2*(n-.5);r=Je.v3arraylerp(i,[0,0,0],d),c=1+(n-.5)*-400,a=80-(n-.5)*80*-.3,h=.1*Ne+(n-.5)*Ne*2.5}this.setAimCam(s,r,u,h,l,a,c)}async depackage(e,t,n=0){const i=(e[0]&3)<<8|e[1],s=Ns+i;let r=e[s];const a=s+1,l={datalength:a+r,player1:(e[0]&128)===128,howmanymoves:(e[0]&124)>>2,ivbuffer:t.ivbuffer.slice(2-n,2+Tn-n),toshareddecrypt:i===0?void 0:e.slice(Ns,s)};let c=t.frameab;if(r>0){if(n===2)try{const d=await Re.decryptab(e.slice(a,l.datalength),{pw:this.userdata},l.ivbuffer),p=this.getserializedballlength(d);l.serializedballs=d.slice(0,p),l.sharedkeyab=d.slice(p),await this.decryptmoves(l)===!1&&(l.errorlog="Problem decrypting own shots.")}catch(d){l.errorlog="Problem decrypting own user data."+d.message}}else{r=new DataView(e.buffer).getUint16(a,!0),l.datalength+=Xi;const d=l.datalength;if(l.datalength+=r,n===2)try{l.privkeyab=await Re.decryptab(e.slice(d,l.datalength),{pw:this.userdata},l.ivbuffer)}catch(g){l.errorlog="Problem decrypting own private key within own data. "+g.message}const p=this.GetFrameFromFrameAb(c);p.name[1]=null,p.timestarted=0,c=this.GetFrameAbFromFrame(p)}const h=Re.combineabs([c,e.slice(0,l.datalength)]),u=e.slice(l.datalength,l.datalength+ks);return(h.byteLength!==c.byteLength+l.datalength||u.byteLength!==ks)&&(l.errorlog="Error: Data missing. URL cut short?"),l.datalength+=ks,l.verified=await Re.verifysignaturearraybuffer(h,this.userdata,u),l}getmoves(e,t,n,i=void 0){const s=new Uint8Array(e);let r=0;for(let a=0;a<n;a++){const l=(s[r]&32)===32?20:12,c={serialized:e.slice(r,r+l),serializedballs:a===n-1?i:void 0};r+=l,this.deserializemove(c),t.push(c)}}async decryptmoves(e){if(e.sharedkeyab!==void 0)try{const t=await Re.decryptab(e.toshareddecrypt,{ab:e.sharedkeyab},e.ivbuffer);return e.moves=[],this.getmoves(t,e.moves,e.howmanymoves,e.serializedballs),!0}catch{return!1}}async packageurl(){const e=E=>{const C=this.frame.moves[E];if(C===void 0)return null;for(let x=E-1;x>=0;x--)if(this.frame.moves[x].player1!==C.player1)return x+1;return 0},t="Hey! "+this.frame.name[this.frame.player1?0:1]+", check this out.",n=this.frame.ivbuffer.slice(2,2+Tn),i={ab:this.frame.sharedkeyab},s=e(this.frame.currentmoveno-1),r=this.frame.currentmoveno-s;if(r>31)return{errmsg:"error - can't store >15 successive shots."};const a=r&31,l=[];for(let E=s;E<this.frame.currentmoveno;E++)l.push(this.frame.moves[E].serialized);const c=await Re.encryptab(Re.combineabs(l),i,n);if(c.byteLength&!0)return{errmsg:"error - moves thing is somehow too big."};const h=new Uint8Array(2);h[0]=(this.frame.player1?128:0)|a<<2|(c.byteLength&768)>>8,h[1]=c.byteLength&255;const u=Re.combineabs([this.getMove(-1).serializedballs,this.frame.sharedkeyab]),d=await Re.encryptab(u,{pw:this.frame.userdata},n);if(d.byteLength>255)return{errmsg:"error - buffer is somehow unexpected byte length."};const p=Re.combineabs([new Uint8Array([d.byteLength]),d]),g=Re.combineabs([this.frame.frameab,h,c,p]),m=await Re.signarraybuffer(g,this.frame.userdata);let f=this.frame.frameab;if(this.frame.rematch){const E=this.frame.name[this.frame.player1?0:1];this.frame.name[this.frame.player1?0:1]=null,f=this.GetFrameAbFromFrame(this.frame),this.frame.name[this.frame.player1?0:1]=E}const _=Re.combineabs([f,h,c,p]),y=[this.frame.ivbuffer.slice(1),_,m,this.frame.movestosendback];this.frame.thirddata!==void 0&&y.push(this.frame.thirddata);const v=await Re.compresstourl(Re.combineabs(y)),b=e(s-1);let w;if(b>0&&this.frame.moves[0]!==null){const E=[new Uint8Array(1)];for(let T=0;T<b;T++)E.push(this.frame.moves[T].serialized);E[0][0]=E.length-1;const C=Re.combineabs(E),x=await Re.encryptab(C,i,n);w=await Re.compresstourl(x)}return{url:"?g="+encodeURIComponent(v)+"&v=1"+(w===void 0?"":"&r="+encodeURIComponent(w)),texttourl:this.getTextToUrlParamEncoder(i,n),commentstourl:this.getAllShotMessagesUrlParamEncoder(i,n),title:vl,text:t,commentlastshot:this.getMove(-1).usercomment===void 0}}async getshotvector(){console.assert(typeof this.shotpower=="number"),await new Promise(i=>setTimeout(i,500)),this.getMove().onbreak,this.getMove().whitepos;const t=Je.getFromAngle(this.aimangle+0),n=new Float32Array(2);n[0]=t[0]*this.shotpower,n[1]=t[1]*this.shotpower,this.shotvector={x:n[0],y:n[1]}}gettotalcolourspotted(e){const t={red:0,yellow:0,white:0,black:0};return e.balls.forEach((n,i)=>{if(n.pos===null){const s=this.ballarray[i].colour;t[s]++}}),t}countobjectsacrossline(){let e=0;return this.ballarray.forEach(t=>{(t.colour==="red"||t.colour==="yellow")&&t.crossedline&&e++}),e}async readynextshot(){const e=this.getMove();if((e.moveno===0||this.getMove(-1).player1!==e.player1&&e.p1winner===void 0)&&(this.displayplayername=this.frame.name[e.player1?1:0]),this.frame.player1!==void 0&&e.player1!==this.frame.player1&&e.shotvec===null){if(console.assert(this.getMove(-1).player1!==e.player1),this.frame.currentmoveno>255){this.errormessage="Too many shots for URL game system. (>255)",await this.setGamephase(this.gamephases.error);return}await this.setGamephase(this.gamephases.showurl);return}if(e.p1winner!==void 0){await this.setGamephase(this.gamephases.waitingforinput);return}if(e.onbreak){await this.rack(),await this.setGamephase(this.gamephases.placingwhite);return}const t=this.getMove(-1);if(await this.load(t),e.freeshot){if(e.whitepos!==null){await this.setGamephase(this.gamephases.placingwhite);return}else if(e.shotvec===null){this.freeshotchoices={frompos:t.balls[0].pot===void 0,rerack:t.onbreak},await this.setGamephase(this.gamephases.freeshotchoice);return}}await this.setGamephase(this.gamephases.aiming)}evaluatemove(){let e,t=null,n,i,s;const r=this.getMove();let a;if(!(this.frame.currentmoveno>-1))this.frame.currentmoveno=-1,e=this.frame.player1tobreak,n=!0;else{if(r===void 0||r.shotvec===null||r.balls.length===0)return{error:!0,message:"move doesn't exist."};const u=this.gettotalcolourspotted(r);if(e=r.player1,t=r.p0red,r.onbreak===!0)u.black>0?(a="Black potted on break! Same player breaks again, no penalty.",n=!0):u.white>0?(a="Foul Break! (cue ball potted)",e=!r.player1,i=!0):u.red===0&&u.yellow===0&&(e=!r.player1,this.countobjectsacrossline()<2&&(a="Foul Break! (nothing potted, and 2 balls failed to cross line)",i=!0));else{const d=this.getMove(-1);if(d===void 0||d.shotvec===null||d.balls.length===0)return{error:!0,message:"invalid move"};const p=this.gettotalcolourspotted(d),g={red:u.red-p.red,yellow:u.yellow-p.yellow},m=g.red+g.yellow,f={red:u.red===7,yellow:u.yellow===7},_=r.p0red===null?"open":r.p0red===r.player1?"yellow":"red",y=p[_]===7,v=u.white>0;if(v&&(a="Foul Shot! (cue ball potted)",e=!r.player1,i=!0),u.black>0){e=!r.player1,i=!1;const b=r.freeshot||_==="open"&&this.whitefirsttouch.colour!=="black"||_!=="open"&&this.whitefirsttouch.colour===_||y&&this.whitefirsttouch.colour==="black";v||!b?(a="Foul Shot potting Black! Frame lost",s=!r.player1):_==="open"?!f.red&&!f.yellow?(a="Black potted on open table! Frame lost",s=!r.player1):(a="Black potted on open table!... but... Frame won?... I think...",s=r.player1):f[_]?(a="Black potted! Frame Won!",s=r.player1):(a="Black potted! Frame lost.",s=!r.player1)}else this.whitefirsttouch===null||!r.freeshot&&this.whitefirsttouch.colour==="black"&&!f[_]||_==="red"&&this.whitefirsttouch.colour==="yellow"||_==="yellow"&&this.whitefirsttouch.colour==="red"?(a===void 0&&(a="Foul Shot! (cue ball initial contact)"),e=!r.player1,i=!0):m===0?!r.snookered&&!this.postwhitetouchcushion?(a="Foul Shot! (Balls did not touch cushion after initial contact)",i=!0,e=!r.player1):r.freeshot||(e=!r.player1):r.freeshot||(_==="open"?!i&&(g.red===0||g.yellow===0)&&(g.yellow>0?t=r.player1:t=!r.player1):g[_]===0&&(a="Foul Shot! (potted only opponent's colour)",e=!r.player1,i=!0))}}const l={moveno:++this.frame.currentmoveno,player1:e,freeshot:i,onbreak:n,whitepos:null,shotvec:null,balls:[],p0red:t,p1winner:s};let c=!1;const h=this.getMove();return h===void 0?this.frame.moves.length===this.frame.currentmoveno?this.frame.moves.push(l):(c=!0,console.error("adding move at wrong location somehow")):((h.freeshot!==l.freeshot||h.moveno!==l.moveno||h.p0red!==l.p0red||h.p1winner!==l.p1winner||h.player1!==l.player1)&&(c=!0),l.onbreak===!0&&h.onbreak!==!0&&(c=!0),h.whitepos,l.freeshot,c===!0&&console.log("cheating??",h,l)),{error:c,message:a}}getserializedballlength(e){const t=new Uint8Array(e);let n=8;for(let i=0;i<8;i++)t[i]&15||(n+=8),t[i]&240||(n+=8);return n}deserializemove(e){const t=new Uint8Array(e.serialized),n=new DataView(t.buffer);e.moveno=t[1];const i=t[0];switch(i&3){case 1:e.p0red=!0;break;case 2:e.p0red=!1;break;default:e.p0red=null;break}if(e.player1=(i&4)===4,e.freeshot=(i&8)===8?!0:void 0,e.onbreak=(i&16)===16?!0:void 0,e.snookered=(i&64)===64?!0:void 0,e.whitepos=null,(i&32)===32&&(e.whitepos={x:n.getFloat32(xt*3,!0),y:n.getFloat32(xt*4,!0)}),e.shotvec={x:n.getFloat32(xt*1,!0),y:n.getFloat32(xt*2,!0)},e.balls=[],e.serializedballs!==void 0){const s=new Uint8Array(e.serializedballs),r=new DataView(s.buffer);let a=0;for(let l=0;l<rn;l++){let c,h=null;const u=s[l>>>1]>>>(l&1)*4&15;u===0?(h={x:r.getFloat32(xt*(2+a),!0),y:r.getFloat32(xt*(2+a+1),!0)},a+=2):c=u,e.balls.push({pot:c,pos:h})}}}getboolbyte(e){let t=0;switch(e.p0red){case!0:t|=1;break;case!1:t|=2;break}return e.player1===!0&&(t|=4),e.freeshot===!0&&(t|=8),e.onbreak===!0&&(t|=16),e.whitepos!==null&&(t|=32),e.snookered===!0&&(t|=64),e.question!==void 0&&(t|=128),t}getballscrc(e){if(e.serializedballs===void 0){const t=new Uint8Array(8+rn*xt*2),n=new DataView(t.buffer);let i=0;e.balls.forEach((s,r)=>{s.pos===null?t[r>>>1]|=(s.pot&15)<<(r&1)*4:(n.setFloat32(xt*(2+i++),s.pos.x,!0),n.setFloat32(xt*(2+i++),s.pos.y,!0))}),e.serializedballs=t.slice(0,8+xt*i).buffer}return Re.getxmodemcrc(e.serializedballs)}serializemove(e){if(e.serialized===void 0){const t=new Uint8Array(20),n=new DataView(t.buffer);t[0]=this.getboolbyte(e),t[1]=e.moveno,n.setUint16(Xi*1,this.getballscrc(e),!0),n.setFloat32(xt*1,e.shotvec.x,!0),n.setFloat32(xt*2,e.shotvec.y,!0),e.whitepos===null?e.serialized=t.slice(0,12).buffer:(n.setFloat32(xt*3,e.whitepos.x,!0),n.setFloat32(xt*4,e.whitepos.y,!0),e.serialized=t.slice(0,20).buffer)}else if(new DataView(e.serialized).getUint16(Xi*1,!0)!==this.getballscrc(e))return{errormessage:"crc ball mismatch!!! - handle this - todo. triggered using black debug pot thing?"};return null}async load(e){this.loadballstate(e.balls),await this.Create2dPyhsics(),this.theengine.update(0),this.ballsarestable()===!1&&console.log("unstable loading state,check this out i reckon...."),this.ballarray.forEach(n=>{n.getPosFromBox2D()});const t=[];this.saveballstate(t),this.ballsdiffer(e.balls,t)&&console.log("balls bloody well moved...")}async rack(){this.rackBalls(this.blackspot,this.ballarray),await this.Create2dPyhsics(),this.theengine.update(0),this.ballsarestable()===!1&&console.error("unstable racking");const e=[];this.saveballstate(e),this.rackedballspositions===void 0?this.rackedballspositions=e:this.ballsdiffer(this.rackedballspositions,e)&&console.error("RACKING DETERMINISM OH NOES")}async placewhite(){const e=this.getMove();if(e.whitepos!==null&&this.whiteball.setPosition([e.whitepos.x,0,e.whitepos.y],0),this.positionwhiteinbaulk(this.whiteball.position)===!1)return!1;await this.Create2dPyhsics(),this.setball(this.whiteball,{x:this.whiteball.position[0],y:this.whiteball.position[2]}),this.theengine.update(0),this.ballsarestable()===!1&&console.error("physics: unstable placing white..."),this.whiteball.getPosFromBox2D();const t={x:this.whiteball.position[0],y:this.whiteball.position[2]};return e.whitepos===null?e.whitepos=t:(e.whitepos.x!==t.x||e.whitepos.y!==t.y)&&console.error("physics: white position came back different.."),!0}positionwhiteinbaulk(e){if(e===null)return;e[2]<this.baulkliney&&(e[2]=this.baulkliney);const t=this.halftablelength-this.pdefs.ballradius,n=this.halftablewidth-this.pdefs.ballradius;if(e[2]>t&&(e[2]=t),e[0]>n&&(e[0]=n),e[0]<-n&&(e[0]=-n),this.whiteball.potindex=15,this.checkdistancesok(e)===!1)return!1;this.whiteball.setPosition(e,0)}ballsarestable(){const e=[];this.saveballstate(e),this.theengine.update(1e3/60);const t=[];return this.saveballstate(t),this.ballsdiffer(e,t)?(this.loadballstate(e),console.log("balls not stable"),!1):!0}logdifference(e,t,n){if(e.pos===null||t.pos===null)console.log(e.col+" pot difference at index "+n);else{const i=[e.pos.x-t.pos.x,e.pos.y-t.pos.y],s=Je.getMagnitude(i[0],i[1]);console.log(s+" magnitude error at index "+n)}}ballsdiffer(e,t){let n=!1;for(let i=0;i<rn;i++){const s=e[i],r=t[i];if(s.pos===null){if(r.pos!==null){n=!0,this.logdifference(s,r,i);continue}}else if(r.pos===null||s.pos.x!==r.pos.x||s.pos.y!==r.pos.y){n=!0,this.logdifference(s,r,i);continue}if(s.pot!==r.pot){n=!0,this.logdifference(s,r,i);continue}}return n}saveballstate(e){e.length===0&&this.ballarray.forEach(t=>{const n=t.potindex,i=n===void 0?{x:t.position[0],y:t.position[2]}:null;e.push({pos:i,pot:n})})}loadballstate(e){if(e.length!==rn)throw new Error("wrong length ball array");e.forEach((t,n)=>{this.setball(this.ballarray[n],t.pos,t.pot),t.pot})}setball(e,t,n=void 0){if(e.animate=void 0,e.handlepot=!1,e.potindex=n,t===null){const i=this.pdefs.ballradius*2*e.potindex;e.setPosition([Ne*.65,this.pdefs.ballradius*1.6,Ne*.5-i],0),e.SetActive(!1)}else e.SetActive(!0),e.setPosition([t.x,0,t.y],0)}checkdistancesok(e){const t=Math.pow(this.pdefs.ballradius*2,2);for(let n=0;n<rn;n++){const i=this.ballarray[n];if(i.potindex!==void 0)continue;if(Je.getMagnitudeSquared(e[0]-i.position[0],e[2]-i.position[2])<t)return!1}return!0}rackBalls(e,t){const n=Math.PI/3,i=Math.cos(n),s=Math.sin(n),r=this.pdefs.ballradius*2,a={x:e[0],y:e[1]+2*r*s};let l=0,c=1;for(let h=0;l+c<rn;h++){const u=a.y-h*r*s;let d=a.x-h*r*i;for(let p=0;p<c;p++)this.setball(t[l+p+1],{x:d,y:u}),d+=r;l+=c,c++}this.setball(t[0],null,15)}setOverheadCam(){const e=Ne*Gs*1.05;this.poolarea.thecamera.setPosition([0,e,0],[0,0,0],60*this.fovmulti)}setAimCam(e,t,n,i,s,r=50,a=0){const l=[t[0]-e[0]*n,t[1]+i,t[2]-e[1]*n],c=[t[0]+e[0]*s,t[1]+a,t[2]+e[1]*s];this.poolarea.thecamera.setPosition(l,c,r*this.fovmulti)}setpocketcam(e=0){const t=[this.pocketarray[e].holebottom[0],-2,this.pocketarray[e].holebottom[1]],n=[t[0]*.8,1.5,t[2]*.9];this.poolarea.thecamera.setPosition(n,t,60*this.fovmulti)}setflycam(){this.flycam.fov+=this.camcontrol.rt-this.camcontrol.lt;const e=10,t=140;this.flycam.fov<e&&(this.flycam.fov=e),this.flycam.fov>t&&(this.flycam.fov=t),this.flycam.yaw+=this.camcontrol.rx,this.flycam.pitch+=this.camcontrol.ry,this.flycam.pitch>Math.PI&&(this.flycam.pitch=Math.PI),this.flycam.pitch<-Math.PI&&(this.flycam.pitch=-Math.PI);const n=Je.getFromAngle(this.flycam.yaw),i=Je.getFromAngle(this.flycam.pitch),s=[n[0]*i[0],i[1],n[1]*i[0]],r=[-n[1],0,n[0]];this.flycam.pos[0]+=s[0]*this.camcontrol.ly+r[0]*this.camcontrol.lx,this.flycam.pos[1]+=s[1]*this.camcontrol.ly+r[1]*this.camcontrol.lx,this.flycam.pos[2]+=s[2]*this.camcontrol.ly+r[2]*this.camcontrol.lx;const a=[this.flycam.pos[0]+s[0],this.flycam.pos[1]+s[1],this.flycam.pos[2]+s[2]];this.poolarea.thecamera.setPosition(this.flycam.pos,a,this.flycam.fov*this.fovmulti)}}new w0;

(()=>{var e={137:(e,t,r)=>{"use strict";function n(e,t,r){const n=`<table border=1>${t.map(((e,t)=>`<tr>${e.map(((e,r)=>1===e?`<td \n        data-x=${r}\n        data-y=${t}\n        class="cell alive" \n        style="background-color:#FA58D0; height:10px; width:10px;"></td>`:`<td \n      data-x=${r}\n      data-y=${t}\n      class="cell dead" \n      style="background-color:#FFFFFF; height:10px; width:10px;"></td>`)).join("")}</tr>`)).join("")}</table>`;e.innerHTML=n,e.querySelector("table").addEventListener("click",(e=>{const t=e.target,n=t.getAttribute("data-x"),o=t.getAttribute("data-y");n>=0&&o>=0&&r(Number(n),Number(o))}))}function o(e,t,r){const n=e[r];if(void 0===n)return 0;const o=n[t];return void 0===o?0:o}function a(e,t,r){let a,l=!1;r.innerHTML='<div class="field-wrapper"></div><button>Start</button>';const c=r.querySelector(".field-wrapper"),i=r.querySelector("button");let d=Array.from({length:t}).map((()=>Array.from({length:e}).fill(0)));const u=(e,t)=>{d[t][e]=0===d[t][e]?1:0,n(c,d,u)};function f(){l=!1,i.innerHTML="Start",clearInterval(a)}n(c,d,u),i.addEventListener("click",(()=>{l?f():(l=!0,i.innerHTML="Stop",a=setInterval((()=>{d=function(e){return e.map(((t,r)=>t.map(((t,n)=>{const a=function(e,t,r){let n=0;for(let a=e-1;a<=e+1;a+=1)n+=Number(o(r,a,t-1));for(let a=e-1;a<=e+1;a+=1)n+=Number(o(r,a,t+1));return n+=Number(o(r,e-1,t)),n+=Number(o(r,e+1,t)),n}(n,r,e),l=o(e,n,r);var c;return 3===(c=a)?1:c>3||c<2?0:2===c&&1===l?1:0}))))}(d),n(c,d,u),function(e){for(let t=0;t<e.length;t+=1){const r=e[t];for(let e=0;e<r.length;e+=1)if(r[e])return!0}return!1}(d)||(alert("Death on the block"),f())}),1e3))}))}r.r(t),r.d(t,{createGameOfLife:()=>a})}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{createGameOfLife:e}=r(137),t=document.createElement("div"),n=document.createElement("div");document.body.appendChild(t),document.body.appendChild(n),e(3,3,t),e(10,10,n)})()})();
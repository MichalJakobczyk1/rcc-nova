!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);window.addEventListener("load",(function(e){console.log("page is fully loaded"),document.body.classList.remove("body--preload")}));var o=document.querySelector(".header__button--Pl"),r=document.querySelector(".header__button--Eng");o.addEventListener("click",(function(){o.classList.contains("header__button--unactive")&&(o.classList.remove("header__button--unactive"),o.classList.add("header__button--active"),r.classList.add("header__button--unactive"),r.classList.remove("header__button--active"))})),r.addEventListener("click",(function(){r.classList.contains("header__button--unactive")&&(r.classList.remove("header__button--unactive"),r.classList.add("header__button--active"),o.classList.remove("header__button--active"),o.classList.add("header__button--unactive"))}));var i=document.querySelector(".section__article--offer"),a=document.querySelector(".header"),c=document.querySelector(".section--logo");new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0&&(a.classList.add("header--modified"),a.classList.remove("header--demodified"))}))})).observe(i),new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0&&(a.classList.remove("header--modified"),a.classList.add("header--demodified"))}))})).observe(c)},function(e,t,n){}]);
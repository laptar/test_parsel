!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),o.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){var r=a.default(e,t,"get");return l.default(e,r)};var a=f(o("1UHsN")),l=f(o("ffZzF"));function f(e){return e&&e.__esModule?e:{default:e}}var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,r){c.default(e,t),t.set(e,r)};var d,c=(d=o("5k7tO"))&&d.__esModule?d:{default:d};var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e,t,r){var n=p.default(e,t,"set");return h.default(e,n,r),r};var p=_(o("1UHsN")),h=_(o("jdVyQ"));function _(e){return e&&e.__esModule?e:{default:e}}var w={};Object.defineProperty(w,"__esModule",{value:!0}),w.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r};var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t){b.default(e,t),t.add(e)};var b=function(e){return e&&e.__esModule?e:{default:e}}(o("5k7tO"));var g={};function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e,t,r){t&&M(e.prototype,t);r&&M(e,r);return e};var O=document.querySelector("form"),m=(document.querySelector("button"),document.querySelector("span")),j=new WeakMap,x=new WeakMap,P=new WeakSet,E=function(){"use strict";function t(r,n){e(i)(this,t),e(y)(this,P),e(s)(this,j,{writable:!0,value:void 0}),e(s)(this,x,{writable:!0,value:void 0}),this.floor=r,this.weigth=n,e(v)(this,j,{low:20,mid:30,hi:40}),e(v)(this,x,5)}return e(g)(t,[{key:"countEndPrice",value:function(){var t=0;if(1===this.floor)return t;e(w)(this,P,k).call(this);for(var r=1;r<=this.floor;r+=1)r>=2&&r<=4?t+=e(u)(this,j).low:r>=5&&r<=7?t+=e(u)(this,j).mid:r>=8&&(t+=e(u)(this,j).hi);return t}}]),t}();function k(){var t=this;if(this.weigth<=40)return e(u)(this,j);var r=Math.ceil((this.weigth-40)/10)*e(u)(this,x);Object.keys(e(u)(this,j)).forEach((function(n){return e(u)(t,j)[n]=e(u)(t,j)[n]+=r}))}O.addEventListener("submit",(function(e){e.preventDefault();var t=Number(e.target.weigth.value),r=Number(e.target.floor.value),n=new E(r,t);m.textContent=n.countEndPrice()}))}();
//# sourceMappingURL=index.463e1b30.js.map

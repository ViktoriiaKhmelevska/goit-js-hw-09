!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))};var u=o("h6c0i");function a(){var n=e(i)(["✅ Fulfilled promise "," in ","ms"]);return a=function(){return n},n}function c(){var n=e(i)(["❌ Rejected promise "," in ","ms"]);return c=function(){return n},n}var f,l=1;function s(e,n){var t=Math.random()>.3;return new Promise((function(r,o){setTimeout((function(){t?r(u.Notify.success(a(),e,n)):o(u.Notify.failure(c(),e,n))}),200)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,t=n.delay,r=n.step,o=n.amount;t.value*r.value,f=Number(o.value);for(var i=1;i<=f;i++)s(l,t).then((function(e){var n=e.position,t=e.delay;u.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;u.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),l++}))}();
//# sourceMappingURL=03-promises.f08c5b00.js.map
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequired7c6=n);var o=n("iQIUW");let r,l,s,u,a=e=>e,d=1;function f(e,t){const i=Math.random()>.3;return new Promise(((n,s)=>{setTimeout((()=>{i?n(o.Notify.success(r||(r=a`✅ Fulfilled promise ${0} in ${0}ms`),e,t)):s(o.Notify.failure(l||(l=a`❌ Rejected promise ${0} in ${0}ms`),e,t))}),200)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{delay:t,step:i,amount:n}=e.currentTarget.elements;s=t.value*i.value,u=Number(n.value);for(let e=1;e<=u;e++)f(d,t).then((({position:e,delay:t})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),d++}));
//# sourceMappingURL=03-promises.323148c3.js.map

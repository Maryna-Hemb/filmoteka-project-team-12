!function(){function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var r=o[e];delete o[e];var t={id:e,exports:{}};return n[e]=t,r.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){o[e]=r},t.parcelRequired7c6=i),i.register("iE7OH",(function(r,t){var n,o;e(r.exports,"register",(function(){return n}),(function(e){return n=e})),e(r.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)i[r[t]]=e[r[t]]},o=function(e){var r=i[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),i.register("aNJCr",(function(r,t){var n;e(r.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var r=o[e];return r||(r=function(){try{throw new Error}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=r),r}})),i("iE7OH").register(JSON.parse('{"2Y0K8":"library.2ab81d6e.js","5vd2w":"z9ax1o.7aeb481f.jpg"}'));var a,c=i("latFS");a=i("aNJCr").getBundleURL("2Y0K8")+i("iE7OH").resolve("5vd2w");var u='<div class>\n<img src="'.concat(r(a),'" width="600 class=\'img_not-found\'">\n    </div>');function l(){document.querySelector(".films-catalog").innerHTML=u}var s=document.querySelector("#watched-btn"),f=document.querySelector("#queue-btn"),d=document.querySelector(".films-catalog");function v(){var e=localStorage.getItem("watched-movies");if(s.classList.add("library_btn--active"),f.classList.remove("library_btn--active"),e){var r=JSON.parse(e),t=(0,c.default)(r);d.innerHTML=t}else l()}v(),s.addEventListener("click",v);c=i("latFS");var g=document.querySelector(".films-catalog"),m=document.querySelector("#watched-btn"),p=document.querySelector("#queue-btn");p.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("queued-movies"));if(!e)return void l();m.classList.remove("library_btn--active"),p.classList.add("library_btn--active"),g.innerHTML=(0,c.default)(e)}))}();
//# sourceMappingURL=library.2ab81d6e.js.map

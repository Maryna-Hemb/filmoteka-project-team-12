function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o("kyEFX").register(JSON.parse('{"1zJhX":"library.d0e0f5ef.js","lyP49":"z9ax1o.7aeb481f.jpg"}'));var c=o("lyvUQ");const i=`<div class>\n<img src="${e(new URL(o("kyEFX").resolve("lyP49"),import.meta.url).toString())}" width="600 class='img_not-found'">\n    </div>`;function l(){document.querySelector(".films-catalog").innerHTML=i}const a=document.querySelector("#watched-btn"),s=document.querySelector("#queue-btn"),d=document.querySelector(".films-catalog");function u(){const e=localStorage.getItem("watched-movies");if(a.classList.add("library_btn--active"),s.classList.remove("library_btn--active"),e){const t=JSON.parse(e),r=(0,c.default)(t);d.innerHTML=r}else l()}u(),a.addEventListener("click",u);c=o("lyvUQ");const f=document.querySelector(".films-catalog"),b=document.querySelector("#watched-btn"),y=document.querySelector("#queue-btn");y.addEventListener("click",(function(){const e=JSON.parse(localStorage.getItem("queued-movies"));if(!e)return void l();b.classList.remove("library_btn--active"),y.classList.add("library_btn--active"),f.innerHTML=(0,c.default)(e)}));
//# sourceMappingURL=library.d0e0f5ef.js.map

!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"2Y0K8":"library.907c0447.js","5vd2w":"z9ax1o.59555233.jpg"}'));var o,i=a("latFS");o=a("aNJCr").getBundleURL("2Y0K8")+a("iE7OH").resolve("5vd2w");var l='<div class=\'not-found_container\'>\n<h2 class="library_not-found-text">No movies have been added yet. Select the desired movies on the <a href="./index.html" class="link_to-home">home page.</a></h1>\n<img src="'.concat(e(o),'" width="400" class=\'img_not-found\'>\n    </div>');function c(){document.querySelector(".films-catalog").innerHTML=l}var d=document.querySelector("#watched-btn"),s=document.querySelector("#queue-btn"),u=document.querySelector(".films-catalog");function f(){var e=localStorage.getItem("watched-movies");if(d.classList.add("library_btn--active"),s.classList.remove("library_btn--active"),e){var t=JSON.parse(e),r=(0,i.default)(t);u.innerHTML=r}else c()}f(),d.addEventListener("click",f);i=a("latFS");var v=document.querySelector(".films-catalog"),m=document.querySelector("#watched-btn"),b=document.querySelector("#queue-btn");b.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("queued-movies"));if(m.classList.remove("library_btn--active"),b.classList.add("library_btn--active"),!e)return void c();v.innerHTML=(0,i.default)(e)})),a("9kldS")}();
//# sourceMappingURL=library.907c0447.js.map
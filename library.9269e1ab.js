!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"2Y0K8":"library.9269e1ab.js","5vd2w":"z9ax1o.7aeb481f.jpg"}'));var i,o=a("latFS");i=a("aNJCr").getBundleURL("2Y0K8")+a("iE7OH").resolve("5vd2w");var l='<div class>\n<img src="'.concat(e(i),'" width="600 class=\'img_not-found\'">\n    </div>');function c(){document.querySelector(".films-catalog").innerHTML=l}var d=document.querySelector("#watched-btn"),u=document.querySelector("#queue-btn"),s=document.querySelector(".films-catalog");function f(){var e=localStorage.getItem("watched-movies");if(d.classList.add("library_btn--active"),u.classList.remove("library_btn--active"),e){var t=JSON.parse(e),r=(0,o.default)(t);s.innerHTML=r}else c()}f(),d.addEventListener("click",f);o=a("latFS");var v=document.querySelector(".films-catalog"),m=document.querySelector("#watched-btn"),b=document.querySelector("#queue-btn");b.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("queued-movies"));if(!e)return void c();m.classList.remove("library_btn--active"),b.classList.add("library_btn--active"),v.innerHTML=(0,o.default)(e)}))}();
//# sourceMappingURL=library.9269e1ab.js.map

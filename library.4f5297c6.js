!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},e.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"2Y0K8":"library.4f5297c6.js","jqQrI":"poster-plug.77123679.png","7J45r":"zdun.5b228a39.png"}'));var r,c=a("latFS");r=a("aNJCr").getBundleURL("2Y0K8")+a("iE7OH").resolve("7J45r");var d='<div class=\'not-found_container\'>\n<h2 class="library_not-found-text">Are you serious? No movies have been added yet. \nOk, I\'ll wait. </br><a href="./index.html" class="link_to-home">Go home page.</a></h1>\n<img src="'.concat(t(r),'" width="400px" class=\'img_not-found\'>\n    </div>');function l(){document.querySelector(".films-catalog").innerHTML=d}var i=document.querySelector("#watched-btn"),s=document.querySelector("#queue-btn"),u=document.querySelector(".films-catalog");function v(){var t=localStorage.getItem("watched-movies"),e=JSON.parse(t);if(i.classList.add("library_btn--active"),s.classList.remove("library_btn--active"),0===e.length)l();else{var n=(0,c.default)(e);u.innerHTML=n}}i.addEventListener("click",v);var m=a("hKHmD"),b=a("dDDEV"),g=(c=a("latFS"),document.querySelector(".films-catalog")),y=document.querySelector("#watched-btn"),f=document.querySelector("#queue-btn");function p(){var t=JSON.parse(localStorage.getItem("queued-movies"));y.classList.remove("library_btn--active"),f.classList.add("library_btn--active"),0!==t.length&&t?g.innerHTML=(0,c.default)(t):l()}f.addEventListener("click",p);var h,S=a("deuvv");h=a("aNJCr").getBundleURL("2Y0K8")+a("iE7OH").resolve("jqQrI");var _,L=JSON.parse(localStorage.getItem("watched-movies")),w=document.querySelector("[data-queue]"),q=document.querySelector("[data-watch]");function E(){var e=JSON.parse(localStorage.getItem("Genre")),n=e.flatMap((function(t){return t.id})),o=e.flatMap((function(t){return t.name}));return n.reduce((function(e,n,a){return t(b)({},e,t(m)({},n,o[a]))}),{})}function x(t){"Escape"===t.code&&(document.querySelector("[data-modal]").classList.toggle("is-hidden"),console.log("close"),w.classList.contains("library_btn--active")&&p(),q.classList.contains("library_btn--active")&&v(),window.removeEventListener("keydown",x))}w.addEventListener("click",(function(){return L=JSON.parse(localStorage.getItem("queued-movies")),console.log(L),L})),q.addEventListener("click",(function(){return L=JSON.parse(localStorage.getItem("watched-movies")),console.log(L),L})),(_={openModalCard:document.querySelector(".container-catalog"),modal:document.querySelector("[data-modal]"),modalContainer:document.querySelector(".modal-container")}).openModalCard.addEventListener("click",(function(e){var n=e.target.closest(".film-card__link");if(n){_.modal.classList.toggle("is-hidden"),window.addEventListener("keydown",x);var o=Number(n.dataset.id);console.log(o);var a=L.find((function(t){return t.id===o}));(function(){var e=a.genre_ids,n=E(),o=[];e.map((function(t){return o.push(n[t])}));var r=a.poster_path?"https://image.tmdb.org/t/p/w500".concat(a.poster_path):t(h),c=a.title,d=Number(a.vote_average).toFixed(1),l=a.vote_count,i=Number(a.popularity).toFixed(1),s=o.join(", ");s||(s="no information");var u=a.overview;u||(u="no information, but coming soon");var v='<div class="img-box">\n           <img\n             class="img-modal"\n             src="'.concat(r,'"\n             alt="').concat(c,'"\n             width="240px"\n           />\n         </div>\n         <div class="content-box">\n           <div class="text-box">\n             <h2 class="modal-title">').concat(c,'</h2>\n             <table>\n               <tbody class="tbody">\n                 <tr>\n                   <td class="tbody-category">Vote / Votes</td>\n                   <td class="tbody-vote">').concat(d,'</td>\n                   <td class="tbody-slash">/</td>\n                   <td class="tbody-votes">').concat(l,'</td>\n                   <td></td>\n                 </tr>\n                 <tr>\n                   <td class="tbody-category">Popularity</td>\n                   <td colspan="4">').concat(i,'</td>\n                   <td></td>\n                   <td></td>\n                 </tr>\n                 <tr>\n                   <td class="tbody-category">Original Title</td>\n                   <td class="tbody-category__text" colspan="4">').concat(c,'</td>\n                   <td></td>\n                   <td></td>\n                 </tr>\n                 <tr>\n                   <td class="tbody-category">Genre</td>\n                   <td class="tbody-category__text" colspan="4">').concat(s,'</td>\n                   <td></td>\n                   <td></td>\n                 </tr>\n               </tbody>\n             </table>\n      \n             <h3 class="modal-subtitle">About</h3>\n             <p class="textAbout">\n               ').concat(u,'\n             </p>\n           </div>\n           <div class="btn-container">\n             <button class="js-toWatched btn-click-modal">add to watched</button>\n             <button class="js-toQueue btn-click-modal">add to queue</button>\n           </div>\n         </div>');_.modalContainer.innerHTML=v})(),(0,S.default)(a)}})),function(){var t={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.closeModalBtn.addEventListener("click",(function(){console.log("close"),w.classList.contains("library_btn--active")&&p();q.classList.contains("library_btn--active")&&v();t.modal.classList.toggle("is-hidden")})),window.removeEventListener("keydown",x)}(),E(),document.querySelector(".backdrop").addEventListener("click",(function(t){t.currentTarget===t.target&&(document.querySelector("[data-modal]").classList.toggle("is-hidden"),console.log("close"),w.classList.contains("library_btn--active")&&p(),q.classList.contains("library_btn--active")&&v());window.removeEventListener("keydown",x)})),a("e0z42"),v()}();
//# sourceMappingURL=library.4f5297c6.js.map

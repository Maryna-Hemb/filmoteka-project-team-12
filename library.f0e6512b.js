!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(t,e){o[t]=e},e.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"2Y0K8":"library.f0e6512b.js","7J45r":"zdun.5b228a39.png"}'));var d,r=a("latFS");d=a("aNJCr").getBundleURL("2Y0K8")+a("iE7OH").resolve("7J45r");var c='<div class=\'not-found_container\'>\n<h2 class="library_not-found-text">No movies have been added yet. Select the desired movies on the <a href="./index.html" class="link_to-home">home page.</a></h1>\n<img src="'.concat(t(d),'" width="400vw" class=\'img_not-found\'>\n    </div>');function l(){document.querySelector(".films-catalog").innerHTML=c}var i=document.querySelector("#watched-btn"),s=document.querySelector("#queue-btn"),u=document.querySelector(".films-catalog");function m(){var t=localStorage.getItem("watched-movies");if(i.classList.add("library_btn--active"),s.classList.remove("library_btn--active"),t){var e=JSON.parse(t),n=(0,r.default)(e);u.innerHTML=n}else l()}m(),i.addEventListener("click",m);r=a("latFS");var v=document.querySelector(".films-catalog"),g=document.querySelector("#watched-btn"),f=document.querySelector("#queue-btn");f.addEventListener("click",(function(){var t=JSON.parse(localStorage.getItem("queued-movies"));if(g.classList.remove("library_btn--active"),f.classList.add("library_btn--active"),!t)return void l();v.innerHTML=(0,r.default)(t)}));var b,y=a("hKHmD"),p=a("dDDEV"),h=a("deuvv"),S=JSON.parse(localStorage.getItem("watched-movies")),_=document.querySelector("[data-queue]"),q=document.querySelector("[data-watch]");function w(){var e=JSON.parse(localStorage.getItem("Genre")),n=e.flatMap((function(t){return t.id})),o=e.flatMap((function(t){return t.name}));return n.reduce((function(e,n,a){return t(p)({},e,t(y)({},n,o[a]))}),{})}function L(t){"Escape"===t.code&&document.querySelector("[data-modal]").classList.toggle("is-hidden")}_.addEventListener("click",(function(){return S=JSON.parse(localStorage.getItem("queued-movies")),console.log(S),S})),q.addEventListener("click",(function(){return S=JSON.parse(localStorage.getItem("watched-movies")),console.log(S),S})),(b={openModalCard:document.querySelector(".container-catalog"),modal:document.querySelector("[data-modal]"),modalContainer:document.querySelector(".modal-container")}).openModalCard.addEventListener("click",(function(t){var e=t.target.closest(".film-card__link");if(e){b.modal.classList.toggle("is-hidden"),window.addEventListener("keydown",L);var n=Number(e.dataset.id);console.log(n);var o=S.find((function(t){return t.id===n}));(function(){var t=o.genre_ids,e=w(),n=[];t.map((function(t){return n.push(e[t])}));var a="https://image.tmdb.org/t/p/w500".concat(o.poster_path);console.log(o.poster_path);var d=o.title,r=Number(o.vote_average).toFixed(1),c=o.vote_count,l=Number(o.popularity).toFixed(1),i=n.join(", ");i||(i="no information");var s=o.overview;s||(s="no information, but coming soon");var u='<div class="img-box">\n           <img\n             class="img-modal"\n             src="'.concat(a,'"\n             alt="').concat(d,'"\n             width="240px"\n           />\n         </div>\n         <div class="content-box">\n           <div class="text-box">\n             <h2 class="modal-title">').concat(d,'</h2>\n             <table>\n               <tbody class="tbody">\n                 <tr>\n                   <td class="tbody-category">Vote / Votes</td>\n                   <td class="tbody-vote">').concat(r,'</td>\n                   <td class="tbody-slash">/</td>\n                   <td class="tbody-votes">').concat(c,'</td>\n                   <td></td>\n                 </tr>\n                 <tr>\n                   <td class="tbody-category">Popularity</td>\n                   <td colspan="4">').concat(l,'</td>\n                   <td></td>\n                   <td></td>\n                 </tr>\n                 <tr>\n                   <td class="tbody-category">Original Title</td>\n                   <td class="tbody-category__text" colspan="4">').concat(d,'</td>\n                   <td></td>\n                   <td></td>\n                 </tr>\n                 <tr>\n                   <td class="tbody-category">Genre</td>\n                   <td class="tbody-category__text" colspan="4">').concat(i,'</td>\n                   <td></td>\n                   <td></td>\n                 </tr>\n               </tbody>\n             </table>\n      \n             <h3 class="modal-subtitle">About</h3>\n             <p class="textAbout">\n               ').concat(s,'\n             </p>\n           </div>\n           <div class="btn-container">\n             <button class="js-toWatched btn-click-modal">add to watched</button>\n             <button class="js-toQueue btn-click-modal">add to queue</button>\n           </div>\n         </div>');b.modalContainer.innerHTML=u})(),(0,h.default)(o)}})),function(){var t={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.closeModalBtn.addEventListener("click",(function(){t.modal.classList.toggle("is-hidden")})),window.removeEventListener("keydown",L)}(),w(),document.querySelector(".backdrop").addEventListener("click",(function(t){t.currentTarget===t.target&&document.querySelector("[data-modal]").classList.toggle("is-hidden")})),a("e0z42")}();
//# sourceMappingURL=library.f0e6512b.js.map

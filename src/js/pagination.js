import Pagination from 'tui-pagination';
import "tui-pagination/dist/tui-pagination.css";
import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL, MOVIE_DETAILS_URL } from './api-vars';
import filmCardMarkupCreator from './cards-markup';
const axios = require('axios').default;
//import { loader } from './loader';

console.log(API_KEY, BASE_URL, TREND_URL, SEARCH_URL, MOVIE_DETAILS_URL);


const container = document.getElementById('pagination');
const options = { // default value of options
     totalItems: 1000,
     itemsPerPage: 20,
     visiblePages: 4,
     page: 1,
    centerAlign: true,
     
     firstItemClassName: 'tui-first-child',
     lastItemClassName: 'tui-last-child',
     template: {
         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="tui-page-btn tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</a>',
         disabledMoveButton:
             '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</span>',
         moreButton:
             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
    },
     usageStatistics: false,
};

export const pagination = new Pagination(container, options);
export const paginationPage = pagination.getCurrentPage();

//тут частина коду з картки cards-markup
function createContentCard(film) {
    const date = film.release_date ?? film.first_air_date;
    const name = film.original_title ?? film.name;
  const article = `<article class="film-card">
    <a src="" class="film-card__link">
      <img
        class="film-card__image"
        src="https://image.tmdb.org/t/p/w500${film.poster_path}"
        alt="${name}"
        width="395"
      />
      <h2 class="film-card__title">${name}</h2>
      <div class="film-card__desc">
        <p class="film-card__janre">Janre</p>
        <p class="film-card__date">&nbsp|&nbsp${Number.parseInt(date)}</p>
        <span class="film-card__rating">${film.vote_average.toFixed(1)}</span>
      </div>
    </a>
  </article>`;

  return createFragmentTemplate(article);
}

function createFragmentTemplate(str) {
  const template = document.createElement('template');

  template.innerHTML = str;

  return template.content;
}

function appendContent(content) {
  const el = document.getElementById('content');

  el.appendChild(content);
}


function init(movies) {
    fetch(TREND_URL+'?api_key='+API_KEY+'&language=en-US')
        .then((res) => res.json())
        .then((data) => {
            const fragment = document.createDocumentFragment();
            
            data.results.forEach(film => {
      const { title, poster_path, id, vote_average, genre_ids, release_date } = film;
    fragment.appendChild(createContentCard(film));
  });
    
    appendContent(fragment);
        })
    
}

init();
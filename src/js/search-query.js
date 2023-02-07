import { NewTrendApi, NewSearchApi } from './news-api';
import filmCardMarkupCreator from './cards-markup';

const hiddenWarning = document.querySelector('.search__text');
const carts = document.querySelector('.container-catalog');
const form = document.querySelector('.search');
const searchInputEl = document.querySelector('.search__input');

const TrendApi = new NewTrendApi();
const SearchApi = new NewSearchApi();

TrendApi.fetchTrend()
  .then(dataForCatalog => {
    localStorage.setItem('current-movies', JSON.stringify(dataForCatalog));
    addCards(dataForCatalog);
  })
  .catch(console.log);

form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  SearchApi.query = e.currentTarget.elements.searchQuery.value.trim();
  if (SearchApi.query === '') {
    hiddenWarning.classList.remove('hidden');
    hiddenWarning.textContent = 'Please type something';
    setTimeout(function () {
      hiddenWarning.classList.add('hidden');
    }, 3000);
    return;
  }

  try {
    const dataForCatalog = await SearchApi.fetchSearch();
    localStorage.setItem('current-movies', JSON.stringify(dataForCatalog));
    await SearchApi.fetchSearch().then(addCards);
    if (dataForCatalog.length === 0) {
      TrendApi.fetchTrend()
        .then(dataForCatalog => {
          localStorage.setItem(
            'current-movies',
            JSON.stringify(dataForCatalog)
          );
          addCards(dataForCatalog);
        })
        .catch(console.log);
      hiddenWarning.classList.remove('hidden');
      hiddenWarning.textContent =
        'Search result not successful. Enter the correct movie name';
      setTimeout(function () {
        hiddenWarning.classList.add('hidden');
      }, 3000);
    }
  } catch (error) {
    console.log(error.message);
  }
}

function addCards(data) {
  carts.innerHTML = filmCardMarkupCreator(data);
}

searchInputEl.addEventListener('click', onInputClean);

// функція для того, щоб при повторному пошуку інпуп очищувався сам (для зручності користувача)
function onInputClean() {
  searchInputEl.value = '';
}

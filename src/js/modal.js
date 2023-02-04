import localStorage from './localStorage';

const movieId = +event.target.dataset.id;
const watchBtn = document.querySelector('.js-watch');
let isWatched;

checkUserLib(movieID);

function checkUserLib(movieID) {
  const watchBtn = document.querySelector('.js-watch');
  watchBtn.addEventListener('click', onClickWatchBtn);

  let watchedLib = localStorage.loadData('watched');

  if (watchedLib) {
    isWatched = watchedLib.find(movie => movie.id == movieID) ? true : false;
  }

  if (isWatched) {
    watchBtn.classList.add('watched');
    watchBtn.innerText = 'WATCHED';
  }
}

function onClickWatchBtn(event) {
  const movieID = event.target.dataset.id;
  const watchBtn = document.querySelector('.js-watch');

  if (!watchBtn.classList.contains('watched')) {
    addMovieToLib(movieID, 'watched');
    watchBtn.classList.add('watched');
    watchBtn.innerText = 'WATCHED';
    /* updateLibraryPageContent(); */
    isWatched = true;
    return;
  }

  watchBtn.classList.remove('watched');
  watchBtn.innerText = 'ADD TO WATCHED';
  removeMovieFromLib(movieID, 'watched');
  // updateLibraryPageContent();
  isWatched = false;
}

export function removeMovieFromLib(movieID, userLibrary) {
  let currentLibraryState = localStorage.loadData(userLibrary);
  let updatedLibraryState = currentLibraryState.filter(movie => {
    return movie.id !== +movieID;
  });

  updatedLibraryState = updatedLibraryState.length ? updatedLibraryState : null;
  localStorage.saveData(userLibrary, updatedLibraryState);
}

export function addMovieToLib(movieID, userLibrary) {
  let currentLibraryState = localStorage.loadData(userLibrary);
  const currentPage = localStorage.loadData('currentPage');
  let movieToAddToLib = currentPage.find(movie => movie.id == movieID);

  if (!currentLibraryState) {
    currentLibraryState = [movieToAddToLib];
  } else currentLibraryState.push(movieToAddToLib);

  localStorage.saveData(userLibrary, currentLibraryState);
}

import axios from "axios";
import { API_KEY, BASE_URL, TREND_URL, SEARCH_URL, MOVIE_DETAILS_URL } from "./api-vars";

class NewTrendApi {
  constructor() {
    this.page = 1;
  }
      async fetchTrend() {
  try {
      const resp = await axios.get(`${TREND_URL}?api_key=${API_KEY}&page=${this.page}`);
  return resp.data.results;
  } catch (err) {
    console.log(err.message);
  }
  }
}

class NewSearchApi {
  constructor() {
    this.page = 1,
    this.searchQuery = ''
  }
async fetchSearch() {
  try {
    const resp = await axios.get(`${SEARCH_URL}?api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}`);
   console.log(resp.data)
    return resp.data.results;
    } catch (err) {
    console.log(err.message)
  }
  }

  //   addPage() {
  //   this.page += 1;
  // }

  // resetPage() {
  //   this.page = 1;
  // }

    get query() {
    return this.searchQuery;
  }
  set query(newSearchQuery) {
    return this.searchQuery = newSearchQuery;
  }
}

export { NewTrendApi, NewSearchApi };
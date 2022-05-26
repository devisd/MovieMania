import axios from "axios";

const URL = 'https://api.themoviedb.org/3/search/movie';
const KEY = 'cae3be8cdf5c9c2351403518efd2a643';

export default class ApiServise{
    constructor() {
        this.page = 1;
        this.searchQuary = '';
    }

    onFetch() {
        return axios(URL, {
            params: {
                api_key: KEY,
                query: this.searchQuary,
                // movie_id: this.query,
                page:1,
            }
        }).then(res=>res.data)
    }

    get query() {
        return this.searchQuary;
    }

    set query(newQuery) {
        this.searchQuary = newQuery;
    }
}
import { SEARCH_SONGS, FETCH_SONGS, LOADING } from './types';
// import { LOADING } from './types';

import axios from 'axios';

export const searchSongs = text => dispatch => {
    // console.log(text);
    return dispatch ({
        type: SEARCH_SONGS,
        payload: text
    });
}

export const fetchSongs = text => dispatch => {
    axios.get(`https://itunes.apple.com/search?term=${text}`)
        .then(response => {
                // console.log(response.data.results);
                return dispatch({
                type: FETCH_SONGS,
                payload: response.data.results
            })
        })
        .catch(err => console.log("API REJECTED: ", err));
}

export const setLoading = () => {
    return {
        type: LOADING
    };
};
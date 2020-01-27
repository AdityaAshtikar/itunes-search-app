import {SEARCH_SONGS, FETCH_SONGS, LOADING} from '../actions/types';

const initialState = {
    text: '',
    songs: [],
    loadingState: false,
    song: []
};

export default function (state=initialState, actions) {
    switch (actions.type) {
        case SEARCH_SONGS:
            return {
                ...state,
                text: actions.payload,
                loading: false
            };
        case FETCH_SONGS:
            return {
                ...state,
                songs: actions.payload,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}
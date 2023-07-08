import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_ERROR } from "../actionTypes";

const initialState = {
    loading: false,
    error: null,
    news: []
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEWS_REQUEST:
            return { ...state, loading: true }

        case NEWS_SUCCESS:
            return { ...state, loading: false, news: action.responseItems }

        case NEWS_ERROR:
            return { ...state, loading: false, error: action.error }

        default:
            return state;
    }
};

export default newsReducer;
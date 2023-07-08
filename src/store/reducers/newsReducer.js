import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_ERROR, GET_POST_SUCCESS } from "../actionTypes";

const initialState = {
    loading: false,
    error: null,
    news: [],
    selectedPost: null
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEWS_REQUEST:
            return { ...state, loading: true, selectedPost: null }

        case NEWS_SUCCESS:
            return { ...state, loading: false, news: action.responseItems }

        case NEWS_ERROR:
            return { ...state, loading: false, error: action.error }

        case GET_POST_SUCCESS:
            return { ...state, loading: false, selectedPost: action.responseItem }

        default:
            return state;
    }
};

export default newsReducer;
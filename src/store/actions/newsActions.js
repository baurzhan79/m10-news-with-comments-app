import axios from "../../axios-instance";
import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_ERROR } from "../actionTypes";

export const newsRequest = () => (
    { type: NEWS_REQUEST }
);

export const newsSuccess = responseItems => (
    { type: NEWS_SUCCESS, responseItems }
);

export const newsError = (error) => (
    { type: NEWS_ERROR, error }
);


export const newsGetItems = () => {
    return async dispatch => {
        dispatch(newsRequest());
        try {
            const response = await axios.get("/news");
            const items = [];
            if (response.status === 200) { // OK
                if (response.data !== null) {
                    const arrayOfKeys = Object.keys(response.data);

                    arrayOfKeys.forEach(currentKey => {
                        items.push({
                            id: response.data[currentKey].id,
                            title: response.data[currentKey].title,
                            image: response.data[currentKey].image,
                            publication_date: response.data[currentKey].publication_date,
                        })
                    });
                }
            }
            dispatch(newsSuccess(items));
        } catch (error) {
            dispatch(newsError(error));
        }
    }
};

export const newsRemoveItem = (id) => {
    return async dispatch => {
        dispatch(newsRequest());
        try {
            await axios.delete(`/news/${id}`);
            dispatch(newsGetItems());
        } catch (error) {
            dispatch(newsError(error));
        }
    }
};

export const addNewPost = (post) => {
    return async dispatch => {
        dispatch(newsRequest());
        try {
            await axios.post("/news", post);
        } catch (error) {
            dispatch(newsError(error));
        }
    }
};
import axios from "../../axios-instance";
import { COMMENTS_REQUEST, COMMENTS_SUCCESS, COMMENTS_ERROR } from "../actionTypes";

export const commentsRequest = () => (
    { type: COMMENTS_REQUEST }
);

export const commentsSuccess = responseItems => (
    { type: COMMENTS_SUCCESS, responseItems }
);

export const commentsError = (error) => (
    { type: COMMENTS_ERROR, error }
);


export const commentsGetItems = (postId) => {
    return async dispatch => {
        dispatch(commentsRequest());
        try {
            const response = await axios.get(`/comments?news_id=${postId}`);
            const items = [];
            if (response.status === 200) { // OK
                if (response.data !== null) {
                    const arrayOfKeys = Object.keys(response.data);

                    arrayOfKeys.forEach(currentKey => {
                        items.push({
                            id: response.data[currentKey].id,
                            news_id: response.data[currentKey].news_id,
                            author: response.data[currentKey].author,
                            comment: response.data[currentKey].comment,
                        })
                    });
                }
            }

            dispatch(commentsSuccess(items));
        } catch (error) {
            dispatch(commentsError(error));
        }
    }
};

export const commentsRemoveItem = (commentId, postId) => {
    return async dispatch => {
        dispatch(commentsRequest());
        try {
            await axios.delete(`/comments/${commentId}`);
            dispatch(commentsGetItems(postId));
        } catch (error) {
            dispatch(commentsError(error));
        }
    }
};

export const addNewComment = (comment) => {
    return async dispatch => {
        dispatch(commentsRequest());
        try {
            await axios.post("/comments", comment);
        } catch (error) {
            dispatch(commentsError(error));
        }
    }
};
import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

import { newsGetItems, newsRemoveItem } from "../../store/actions/newsActions";

import "./News.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import ItemsList from "../../components/ItemsList/ItemsList";

const News = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { news, loading } = useSelector(state => state.news, shallowEqual);
    const errorMsg = useSelector(state => state.news.error);

    useEffect(() => {
        dispatch(newsGetItems());
    }, [dispatch]);

    useEffect(() => {
        if (errorMsg !== null) console.log("Error with request: ", errorMsg);
    }, [errorMsg]);

    const addNewPostHandler = () => {
        navigate("/news/add");
    }

    const openItemHandler = (item) => {
        navigate(`/news/${item.id}`);
    }

    const removeItemHandler = (item) => {
        dispatch(newsRemoveItem(item.id));
    }

    // =========================================================
    if (loading) return (<Spinner />);
    else
        return (
            <div className="News">
                <div className="News-header">
                    <h3>Posts</h3>
                    <button className="News-btn" onClick={addNewPostHandler}>Add new post</button>
                </div>
                <ItemsList
                    itemsList={news}
                    onOpenItem={(item) => openItemHandler(item)}
                    onRemoveItem={(item) => removeItemHandler(item)}
                />
            </div>
        )
}

export default News
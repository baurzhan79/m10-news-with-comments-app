import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";

import Spinner from "../../components/UI/Spinner/Spinner";
import CommentsList from "../../components/CommentsList/CommentsList";
import AddCommentForm from "../../components/AddCommentForm/AddCommentForm";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { newsGetItem } from "../../store/actions/newsActions";
import { commentsGetItems, commentsRemoveItem, addNewComment } from "../../store/actions/commentsActions";

const FullPost = () => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (params.newsId !== undefined) dispatch(newsGetItem(params.newsId));
    }, [params.newsId, dispatch])

    const post = useSelector(state => state.news.selectedPost);
    const errorMsgNews = useSelector(state => state.news.error);

    useEffect(() => {
        if (post !== null) dispatch(commentsGetItems(post.id));
    }, [post, dispatch])

    const { comments, loading } = useSelector(state => state.comments, shallowEqual);
    const errorMsgComments = useSelector(state => state.comments.error);

    useEffect(() => {
        if (errorMsgNews !== null) console.log("Error with request: ", errorMsgNews);
    }, [errorMsgNews]);

    useEffect(() => {
        if (errorMsgComments !== null) console.log("Error with request: ", errorMsgComments);
    }, [errorMsgComments]);


    const removeCommentHandler = (comment) => {
        dispatch(commentsRemoveItem(comment.id, post.id));
    }

    const submitHandler = async formData => {
        await dispatch(addNewComment(formData));
        window.location.reload();
    };

    // =========================================================
    if (loading || post === null) return (<Spinner />);
    else {
        const postDateTime = new Date(post.publication_date);

        return (
            <Container className="border border-primary mt-2">
                <h4 style={{ marginTop: "10px" }}>{post.title}</h4>
                <p style={{ opacity: "0.5" }}>At {postDateTime.toLocaleDateString()} {postDateTime.toLocaleTimeString()}</p>
                <p style={{ marginTop: "10px" }}>{post.content}</p>
                <CommentsList
                    commentsList={comments}
                    onRemoveComment={(comment) => removeCommentHandler(comment)}
                />
                <AddCommentForm onSubmit={submitHandler} postId={post.id} />
            </Container>
        )
    }
}

export default FullPost
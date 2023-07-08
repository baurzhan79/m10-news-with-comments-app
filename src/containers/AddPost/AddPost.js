import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import AddPostForm from "../../components/AddPostForm/AddPostForm";

import { addNewPost } from "../../store/actions/newsActions";

const AddPost = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = async formData => {
        await dispatch(addNewPost(formData));
        navigate("/");
    };

    return (
        <AddPostForm onSubmit={submitHandler} />
    )
}

export default AddPost
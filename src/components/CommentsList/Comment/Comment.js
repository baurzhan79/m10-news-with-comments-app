import React from "react";
import "./Comment.css";

const Comment = props => {
    return (
        <div className="Comment">
            <div className="Comment-description">
                <p className="Comment-title">{props.item.author} wrote:</p>
                <div className="Comment-btnBox">
                    <p>{props.item.comment}</p>
                    <button className="Comment-btn" onClick={props.onRemoveClick}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Comment;
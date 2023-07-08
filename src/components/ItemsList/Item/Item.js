import React from "react";
import "./Item.css";

import imageNotAvailable from "../../../assets/images/image_not_available.png";
import { apiURL } from "../../../config";

const Item = props => {
    const datetime = new Date(props.item.publication_date);

    let cardImage = imageNotAvailable;
    if (props.item.image) cardImage = apiURL + "/uploads/" + props.item.image;

    return (
        <div className="Item">
            <div className="Item-box">
                <div className="Item-imgBox">
                    <img className="Item-img" src={cardImage} alt="" />
                </div>
                <div className="Item-description">
                    <p>{props.item.title}</p>
                    <div className="Item-btnBox">
                        <span className="Item-span">At {datetime.toLocaleDateString()} {datetime.toLocaleTimeString()}</span>
                        <button className="Item-btn Item-btnOpen" onClick={props.onOpenClick}>Read Full Post</button>
                        <button className="Item-btn Item-btnRemove" onClick={props.onRemoveClick}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
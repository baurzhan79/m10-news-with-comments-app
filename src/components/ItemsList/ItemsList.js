import React from "react";
import "./ItemsList.css";
import Item from "./Item/Item";

const ItemsList = props => {
    return (
        <div className="ItemsList">
            {
                props.itemsList.map((item, index) => {
                    return (<Item
                        key={index}
                        item={item}
                        onOpenClick={() => props.onOpenItem(item)}
                        onRemoveClick={() => props.onRemoveItem(item)}
                    />);
                })
            }
        </div>
    );
}

export default ItemsList
import React from "react";
import PropTypes from "prop-types";

function Item({item, onAddToCart}){
    return (
        <div className="Item">
            <div className="Item-left">
                <div className="Item-image"></div>
                <div className="Item-title">
                    {item.name}
                </div>
                <div className="Item-discription">
                    {item.discription}
                </div>
            </div>
            <div className="Item-right">
                <div className="Item-price">
                    {item.price}
                </div>
                <button className="Item-button" onClick={onAddToCart}>
                    Add to cart
                </button>
            </div>
        </div>
    );
}

Item.Prototype = {
    item: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
}

export default Item;
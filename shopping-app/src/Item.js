import React from "react";
import PropTypes from "prop-types";
import "./Item.css"

function Item({item, children}){
    return (
        <div className="Item">
            <div className="Item-left">
                <div className="Item-image"></div>
                <div className="Item-title-discription">
                    <div className="Item-title">
                        {item.name}
                    </div>
                    <div className="Item-discription">
                        {item.discription}
                    </div>
                </div>
            </div>
            <div className="Item-right">
                <div className="Item-price">
                    <div>
                        {item.price}
                    </div> 
                </div>
            </div>
            <div className="Item-right">
                {children}
            </div>
            
        </div>
        
    );
}

Item.Prototype = {
    item: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
}

export default Item;
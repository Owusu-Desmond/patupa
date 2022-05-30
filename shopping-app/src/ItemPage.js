import React from 'react';
import Prototypes from 'prop-types';
import './ItemPage.css';
import Item from './Item';
function ItemPage({items,onAddToCart}){
    return (
        <ul  className='ItemPage-items'>
            {
                items.map(item => 
                    <li key={item.id} className='ItemPage-item'>
                        <Item item={item}>
                        <div className="Item-right">
                            <div className="Item-price">
                                <div>
                                    ${item.price}
                                </div>
                            </div>
                        </div>
                        <div className="Item-right">
                            <button className="Item-button" onClick={() => onAddToCart(item)}>
                                Add to cart
                            </button>
                        </div>
                        </Item>
                        
                    </li>      
                )
            }
        </ul>
    );
};

ItemPage.Prototypes = {
    items : Prototypes.array.isRequired
};

export default ItemPage;
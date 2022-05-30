import uuid from 'react-uuid';
import React from 'react';
import Prototypes from 'prop-types';
import Item from './Item';
import './CartPage.css';
function CartPage({items, onAddOne , onRemoveOne}){
    return (
        <ul  className='CartPage-items'>
            {
                items.map((item) => 
                    <li key={uuid()} className='CartPage-item'>
                        <Item item={item}>
                            <div className='Item-controls'>
                                <button onClick={() => onRemoveOne(item)}  className="Item-controls-button">-</button>
                                <button className='Number-of-item'>{item.count}</button>
                                <button onClick={() => onAddOne(item)} className="Item-controls-button">+</button>
                            </div>
                        </Item>
                    </li>   
                )
            }
        </ul>
    );
};

CartPage.Prototypes = {
    items : Prototypes.array.isRequired,
    onAddOne : Prototypes.func.isRequired,
    onRemoveOne : Prototypes.func.isRequired
};

export default CartPage;
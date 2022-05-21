import uuid from 'react-uuid';
import React, { useState } from 'react';
import Prototypes from 'prop-types';
import Item from './Item';
import './CartPage.css';
function CartPage({items}){
    const [count, setCount] = useState(1);
    const addOne = () => {
        if(count < 10){
           setCount(count + 1); 
        }
        
    }
    const removeOne = () => {
        if(count > 1){
            setCount(count - 1); 
         }
    }
    return (
        <ul  className='CartPage-items'>
            {
                items.map((item) => 
                    <li key={uuid()} className='CartPage-item'>
                        <Item item={item} count={count}>
                            <div className='Item-controls'>
                                <button onClick={() => removeOne()} className="Item-controls-button">-</button>
                                <button className='Number-of-item'>{count}</button>
                                <button onClick={() => addOne()} className="Item-controls-button">+</button>
                            </div>
                        </Item>
                    </li>   
                )
            }
        </ul>
    );
};

CartPage.Prototypes = {
    items : Prototypes.array.isRequired
};

export default CartPage;
import uuid from 'react-uuid';
import React from 'react';
import Prototypes from 'prop-types';
import Item from './Item';
import './CartPage.css';
function CartPage({items}){
    return (
        <ul  className='CartPage-items'>
            {
                items.map((item) => 
                    <li key={uuid()} className='CartPage-item'>
                        <Item item={item}/>
                        {/* <div>
                         <button>Remove</button>
                        </div>  */}
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
import React from 'react';
import Prototypes from 'prop-types';
import './ItemPage.css';

function ItemPage({items}){
    return (
        <ul  className='ItemPage-items'>
            {
                items.map(item => {
                    return (
                        <li key={item.id} className='ItemPage-item'>
                            {item.name}
                        </li>   
                    ) 
                })
            }
        </ul>
    );
};

ItemPage.Prototypes = {
    items : Prototypes.array.isRequired
};

export default ItemPage;
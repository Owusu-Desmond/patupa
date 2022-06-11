import uuid from 'react-uuid';
import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({ items, onAddOne, onRemoveOne }) {
  return (
    <ul className="CartPage-items">
      {
                items.map((item) => (
                  <li key={uuid()} className="CartPage-item">
                    <Item item={item}>
                      <div className="Item-right">
                        <div className="Item-price">
                          <div>
                            $
                            {item.price * item.count}
                          </div>
                        </div>
                      </div>
                      <div className="Item-right">
                        <div className="Item-controls">
                          <button type="button" onClick={() => onRemoveOne(item)} className="Item-controls-button">-</button>
                          <button type="button" className="Number-of-item">{item.count}</button>
                          <button type="button" onClick={() => onAddOne(item)} className="Item-controls-button">+</button>
                        </div>
                      </div>
                    </Item>
                  </li>
                ))
            }
    </ul>
  );
}

CartPage.propTypes = {
  items: PropTypes.arrayOf.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
};

export default CartPage;

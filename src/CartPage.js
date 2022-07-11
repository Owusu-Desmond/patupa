import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './products.css';

function CartPage({ items, onAddOne, onRemoveOne }) {
  return (
    <div className="products-container">
      {
        items.map((item) => (
          <div key={item.id} className="product-card">
            <Item item={item}>
              <div className="product-controls">
                <button type="button" onClick={() => onRemoveOne(item)} className="Item-controls-button">-</button>
                <button type="button">{item.count}</button>
                <button type="button" onClick={() => onAddOne(item)} className="Item-controls-button">+</button>
              </div>
            </Item>
          </div>
        ))
      }
    </div>
  );
}

CartPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    house: PropTypes.string,
    popularity: PropTypes.bool,
  })).isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
};

export default CartPage;

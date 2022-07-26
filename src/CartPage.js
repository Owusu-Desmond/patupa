import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({ items, onAddOne, onRemoveOne }) {
  return (
    <div className="cart-container">
      <div>
        <ul className="cart-products-container">
          {
            items.map((item) => (
              <li key={item.id} className="cart-product-card">
                <Item item={item}>
                  <div className="product-controls">
                    <button type="button" onClick={() => onRemoveOne(item)}>-</button>
                    <button type="button" className="product-control-count">{item.count}</button>
                    <button type="button" onClick={() => onAddOne(item)}>+</button>
                  </div>
                </Item>
              </li>
            ))
          }
        </ul>
        <p className="cart-total-cost">
          <span>Total Cost :</span>
          <span>
            $
            {
              items.reduce((toatalCost, item) => toatalCost + (item.count * item.price), 0)
            }
          </span>
        </p>
      </div>
      <div className="payment-details-container">
        <h3> Payment Details </h3>
      </div>
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

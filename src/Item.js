import React from 'react';
import PropTypes from 'prop-types';
import './products.css';

// component to return a product
function Item({ item, children }) {
  return (
    /* the product container */
    <div className="product-container">
      <div>
        <img className="product-image" src={item.house} alt={item.name} />
      </div>
      <div className="product-content">
        <div className="product-title">
          {item.name}
        </div>
        <div className="product-description">
          {item.description}
        </div>
      </div>
      <div className="product-price-btn-container">
        <div className="product-price">
          Price : $
          {item.count ? item.count * item.price : item.price}
        </div>
        {children}
      </div>
    </div>
  );
}
Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    house: PropTypes.string,
    popularity: PropTypes.bool,
  })).isRequired,
  children: PropTypes.element.isRequired,
};

export default Item;

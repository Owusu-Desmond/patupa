import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

function Item({ item, children }) {
  return (
    <div className="Item">
      <div className="Item-left">
        <div className="Item-image">
          <img src={item.house} alt={item.name} />
        </div>
        <div className="Item-title-description">
          <div className="Item-title">
            {item.name}
          </div>
          <div className="Item-description">
            {item.description}
          </div>
        </div>
      </div>
      {children}
    </div>

  );
}

Item.propTypes = {
  item: PropTypes.arrayOf.isRequired,
  children: PropTypes.element.isRequired,
};

export default Item;

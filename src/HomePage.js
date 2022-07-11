import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import welcomeImage from './images/shopping-welcome.jpg';
import './HomePage.css';
import './products.css';

function HomePage({ popularItems, onAddToCart }) {
  return (
    <div className="Home-container">
      <h1 className="Animate-welcome">Hello, welcome to PaTuPa shopping</h1>
      <img src={welcomeImage} alt="shopping welcome" className="Home-image" />
      <p className="Home-description">Buy good`&apos`s from PaTuPa shopping for free of charge (No tax)</p>
      <h2>Popular Items</h2>
      <div className="products-container">
        {
          popularItems.map((item) => (
            <div key={item.id} className="product-card">
              <Item item={item}>
                <div className="product-button">
                  <button type="button" onClick={() => onAddToCart(item)}>
                    Add to cart
                  </button>
                </div>
              </Item>
            </div>
          ))
        }
      </div>
    </div>
  );
}
HomePage.propTypes = {
  popularItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    house: PropTypes.string,
    popularity: PropTypes.bool,
  })).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
export default HomePage;

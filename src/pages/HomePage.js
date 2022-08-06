import React from 'react';
import PropTypes from 'prop-types';
import Item from '../components/Product';
import welcomeImage from '../images/shopping-welcome2.jpg';
import '../css/HomePage.css';
import '../css/products.css';

function HomePage({ popularItems, onAddToCart }) {
  return (
    <div className="home-container">
      <img src={welcomeImage} alt="shopping welcome" className="home-image" />
      <p className="home-description">Buy products from PaTuPa shopping for free of charge.</p>
      <h2>Popular Items</h2>
      <div className="products-container">
        {
          popularItems.map((item) => (
            <div key={item.id} className="product-card">
              <Item item={item}>
                <div className="product-button">
                  <button type="button" onClick={() => onAddToCart(item)}>
                    Buy
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

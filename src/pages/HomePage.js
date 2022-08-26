import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import carouselImage1 from '../images/shopping-welcome.jpg';
import carouselImage2 from '../images/shopping-welcome2.jpg';
import carouselImage3 from '../images/shopping-welcome3.jpg';
import Item from '../components/Product';
import '../css/HomePage.css';
import '../css/products.css';

function HomePage({ popularItems, onAddToCart }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="home-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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

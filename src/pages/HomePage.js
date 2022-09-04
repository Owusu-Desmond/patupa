import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
// import actions
import { fetchProducts } from '../store/products/products';
import { setIndex } from '../store/slideShow/slideShow';
// import carousel images
import carouselImage3 from '../images/eCommerce website templates image1.jpg';
import carouselImage2 from '../images/cloths-shopping-online.jpg';
import carouselImage1 from '../images/stock-photo-online-shopping-concept.jpg';
// import components
import Suggested from '../components/suggested-products';
import TopRated from '../components/top-rated-products';
import '../css/HomePage.css';
import LatestProducts from '../components/latest-products';

function HomePage() {
  const products = useSelector((state) => state.products);
  const index = useSelector((state) => state.slideShow);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  const handleSelect = (selectedIndex) => {
    dispatch(setIndex(selectedIndex));
  };
  return (
    <div className="home-container">
      <Carousel activeIndex={index} indicators={false} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={carouselImage1}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Fashion & Clothing is the one makes you look awesome and unique from others!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={carouselImage2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>
              Online shopping in Ghana for men, women and kids. Buy dress, beauty
              products, cosmetics, perfume, jewelries, watches, shoes, bags at
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={carouselImage3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>
              Our company, launched in 2018 in Ghana,
              Patupa.com is the leading platform for online businesses
              serving suppliers and buyers around the world meet each
              other through our simple tool
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <LatestProducts />
      <TopRated />
      <Suggested />
      <section className="our-company-section">
        <h4>Our Company</h4>
        <p>
          Our company, launched in 2018 in Ghana, Patupa.com is the
          leading platform for online businesses
          serving suppliers and buyers around the world meet each
          other through our simple tool
        </p>
        <Button>Read more</Button>
      </section>
    </div>
  );
}

export default HomePage;

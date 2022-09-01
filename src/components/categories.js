import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { fetchProducts } from '../store/products/products';
import ProductCard from './product-card';
import '../css/categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // electronincs category
  const electronics = products.filter((product) => product.category === 'electronics').reverse();

  // women's clothing category
  const womensClothing = products.filter((product) => product.category === "women's clothing");

  // jewelery category
  const jewelery = products.filter((product) => product.category === 'jewelery');

  // men's clothing caterory
  const mensClothing = products.filter((product) => product.category === "men's clothing");

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 950, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <section className="categories-section">
      <div className="category">
        <h4>
          Electronics products with high quality and affordable prices
        </h4>
        <Carousel className="cards-container" breakPoints={breakPoints}>
          {electronics.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
      <div className="category">
        <h4>
          Fashionable women&apos;s clothing with latest designs
        </h4>
        <Carousel className="cards-container" breakPoints={breakPoints}>
          {womensClothing.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
      <div className="category">
        <h4>
          Jeweleries with good quality made of gold and silver
        </h4>
        <Carousel className="cards-container" breakPoints={breakPoints}>
          {jewelery.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
      <div className="category">
        <h4>
          Most purchased men&apos;s clothing with latest designs
        </h4>
        <Carousel className="cards-container" breakPoints={breakPoints}>
          {mensClothing.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Categories;

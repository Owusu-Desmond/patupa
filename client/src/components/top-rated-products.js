import { useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import '../css/HomePage.css';
import ProductCard from './product-card';

const TopRated = () => {
  const products = useSelector((state) => state.products);
  // product with highest rating e.g. product with highest rating of 4.5 and above
  const topRatedProducts = products.filter((product) => product.rating.rate > 4.5);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 650, itemsToShow: 2 },
    { width: 950, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <section className="top-rated-products-section">
      <div className="top-rated">
        <h4> Top-rated products </h4>
        <Carousel className="cards-container" breakPoints={breakPoints}>
          { topRatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TopRated;

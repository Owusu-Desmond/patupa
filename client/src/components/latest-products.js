import Carousel from 'react-elastic-carousel';
import '../css/HomePage.css';
import { useSelector } from 'react-redux';
import ProductCard from './product-card';

const LatestProducts = () => {
  const products = useSelector((state) => state.products);
  // product with highest rating e.g. product with highest rating of 4.5 and above
  const latestProducts = products.filter((product) => product.rating.rate < 4.5);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 760, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];
  return (
    <section className="latest-products-section">
      <div className="latest-products">
        <h4>
          {' '}
          Get Latest Online Gadgets at Patupa where
          you can get latest designs of phone covers,
          screen protector, cloths selfie sticks and much more
          gaming equipment at affordable prices
        </h4>
        <Carousel className="cards-container" breakPoints={breakPoints}>
          { latestProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default LatestProducts;

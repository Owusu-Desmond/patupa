import { useSelector } from 'react-redux';
import '../css/HomePage.css';
import ProductCard from './product-card';

const Suggested = () => {
  const produsts = useSelector((state) => state.products);
  // select ramdomly 4 products from the products array
  const suggestedProdusts = produsts.sort((a, b) => b.rating.rate - a.rating.rate).slice(4, 8);
  return (
    <div className="suggested-container">
      <div className="line">
        <div />
        <h4>Suggested for you</h4>
        <div />
      </div>
      <div className="suggested-cards">
        { suggestedProdusts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Suggested;

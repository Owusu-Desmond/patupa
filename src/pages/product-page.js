import PropTypes from 'prop-types';
import '../css/product-page.css';

const ProductPage = ({ product, onAddToCart }) => (
  <div className="product-page">
    <div className="product-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <div className="product-price">
          <span>
            $
            {product.price}
          </span>
          <button type="button" onClick={() => onAddToCart(product)}>
            Add to cart
          </button>
        </div>
        <p>
          All products are made in the USA. Shipping time: 1-2 business days.
        </p>
      </div>
    </div>
  </div>
);

ProductPage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductPage;

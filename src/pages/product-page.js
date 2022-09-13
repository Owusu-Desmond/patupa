import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cart/cart';
import '../css/product-page.css';

const ProductPage = ({ product, auth }) => {
  const dispatch = useDispatch();
  const {
    id, title, price, description, image,
  } = product;

  const cart = useSelector((state) => state.cart);

  const isProductInCart = (id) => {
    const productInCart = cart.find((item) => item.id === id);
    return productInCart;
  };

  const onAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const afterLogin = () => {
    if (isProductInCart(id)) return 'Added to cart';
    return 'Add to cart';
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image">
          <img src={image} alt={product.title} />
        </div>
        <div className="product-info">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="product-price">
            <span>
              $
              {price}
            </span>
            {/* disable the button if product already in cart */}
            <button
              type="button"
              onClick={() => (auth.isAuthenticated() ? onAddToCart(product) : auth.login())}
              disabled={isProductInCart(id)}
            >
              {auth.isAuthenticated() ? afterLogin() : 'Login to add to cart'}

            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProductPage;

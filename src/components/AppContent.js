import PropTypes from 'prop-types';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import products from '../adapters/static-data';
// switch app content to components
const Content = ({
  cart, tab, addToCart, removeOne, getPopularItems,
}) => {
  switch (tab) {
    case 'products':
      return (
        <span>
          {' '}
          <ProductsPage items={products} onAddToCart={addToCart} />
        </span>
      );
    case 'cart':
      return (
        <span>
          {' '}
          <CartPage
            cartItems={cart}
            onRemoveOne={removeOne}
            onAddOne={addToCart}
            onAddToCart={addToCart}
          />
          {' '}
        </span>
      );
    case 'home':
      return (
        <span>
          {' '}
          <HomePage popularItems={getPopularItems} onAddToCart={addToCart} />
        </span>
      );
    default:
      return (
        <span>Ops! You are missed.</span>
      );
  }
};
Content.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    house: PropTypes.string,
    popularity: PropTypes.bool,
  })).isRequired,
  tab: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeOne: PropTypes.func.isRequired,
  getPopularItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    house: PropTypes.string,
    popularity: PropTypes.bool,
  })).isRequired,
};

export default Content;

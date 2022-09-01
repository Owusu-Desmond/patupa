import React from 'react';
import PropTypes from 'prop-types';
import products from '../adapters/static-data';
import Item from '../components/product-card';
import '../css/CartPage.css';
import emptyCartImage from '../images/empty-shopping-cart.jpg';
import Checkout from '../components/CheckoutPayment';

function CartPage({
  cartItems, onAddOne, onRemoveOne, onAddToCart,
}) {
  const emptyCart = (cartItems) => {
    let cart;
    if (cartItems.length === 0) {
      cart = (
        <li className="cart-empty">
          <img src={emptyCartImage} alt="empty cart" />
        </li>
      );
    }
    return cart;
  };
  const productsYouMayLike = (cartItems, products) => {
    const suggestedProducts = [...products];
    // sort products and ramdomly to make them changes
    suggestedProducts.sort(() => 0.5 - Math.random());
    let productsYouMayLike = '';
    if (cartItems.length < 3) {
      suggestedProducts.length = 3 - cartItems.length;
      productsYouMayLike = (
        <ul className="cart-products-container">
          {
            suggestedProducts.map((item) => (
              <li key={item.id} className="cart-product-card">
                <Item item={item} suggested>
                  <div className="product-button">
                    <button type="button" onClick={() => onAddToCart(item)}>
                      Add to cart
                    </button>
                  </div>
                </Item>
              </li>
            ))
          }
        </ul>
      );
    }
    return productsYouMayLike;
  };

  return (
    <div className="cart-container">
      <div>
        <ul className="cart-products-container">
          {emptyCart(cartItems)}
          {
            cartItems.map((item) => (
              <li key={item.id} className="cart-product-card">
                <Item item={item}>
                  <div className="product-controls">
                    <button type="button" onClick={() => onRemoveOne(item)}>-</button>
                    <button type="button" className="product-control-count">{item.count}</button>
                    <button type="button" onClick={() => onAddOne(item)}>+</button>
                  </div>
                </Item>
              </li>
            ))
          }
        </ul>
        <p className="cart-total-cost">
          <span>Total Cost :</span>
          <span>
            $
            {
              cartItems.reduce((toatalCost, item) => toatalCost + (item.count * item.price), 0)
            }
          </span>
        </p>
        <div className="suggested-product">
          { cartItems.length < 3 ? <p>Suggested for you. </p> : ''}
          {productsYouMayLike(cartItems, products)}
        </div>
      </div>
      <Checkout cartItems={cartItems} />
    </div>
  );
}

CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    house: PropTypes.string,
    popularity: PropTypes.bool,
  })).isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default CartPage;

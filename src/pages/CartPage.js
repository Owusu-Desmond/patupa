import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/CartPage.css';
import emptyCartImage from '../images/empty-shopping-cart.jpg';
import { addToCart, removeOne, deleteProduct } from '../store/cart/cart';

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const emptyCart = (cart) => {
    let cartContent;
    if (cart.length === 0) {
      cartContent = (
        <li className="cart-empty">
          <img src={emptyCartImage} alt="empty cart" />
        </li>
      );
    }
    return cartContent;
  };

  return (
    <>
      <h2 className="my-cart-text">My Cart</h2>
      <div className="cart-container">
        <div>
          <div className="cart-products-container">
            {emptyCart(cart)}
            {
            cart.map((item) => (
              <div key={item.id}>
                <div className="cart-product">
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-product-info">
                    <h3>{item.title}</h3>
                    <button className="delete-btn" type="button" onClick={() => dispatch(deleteProduct(item.id))}>Delete</button>

                    <p>
                      <span>Price: </span>
                      $
                      {(item.price * item.count).toFixed}
                    </p>
                    <p>
                      <span>Purchase count: </span>
                      <span>{item.rating.count}</span>
                    </p>
                    <div className="quantity">
                      {' '}
                      Quantity:
                      <button type="button" onClick={() => dispatch(removeOne(item))}>-</button>
                      <span>{item.count}</span>
                      <button type="button" onClick={() => dispatch(addToCart(item))}>+</button>
                    </div>
                    {/* additional information about item deliverly */}
                    <p>
                      <span>Delivery: </span>
                      <span className="text-right">Free</span>
                    </p>
                    <p>
                      <span>Shipping time: </span>
                      <span className="text-right">4-5 business days</span>
                    </p>
                    <button className="delete-btn" type="button">Save for later</button>
                  </div>
                </div>
                <hr />
              </div>
            ))
          }
          </div>
        </div>
        <div className="checkout-section">
          <div className="checkout-container">
            <h4>Checkout Payment </h4>
            <div className="choose-product">Choose any product to buy from us digitally</div>
            <hr />
            <h4>My products</h4>
            <div className="my-products-content">
              {
              cart.length === 0 ? <p>Your Cart is empty</p>
                : cart.map((item) => (
                  <>
                    <p key={item.id} className="checkout-product">
                      <input type="checkbox" checked />
                      <span>
                        {item.title}
                        ($
                        {(item.price * item.count).toFixed(2)}
                        )
                      </span>
                    </p>
                    <hr />
                  </>
                ))
            }
              <div className="total-cost-to-checkout">
                <div>Total :</div>
                <div>
                  $
                  {cart.reduce((toatalCost, item) => toatalCost + (item.count * item.price), 0)}
                </div>
              </div>
            </div>
            <button type="button" className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </>

  );
}

export default CartPage;

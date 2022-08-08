import PropTypes from 'prop-types';

export default function Checkout({ cartItems }) {
  return (
    <div className="payment-details-container">
      <h3>Checkout Payment </h3>
      <p className="choose-product">Choose any product to buy from us digitally</p>
      <hr />
      <div className="checkout-products-container">
        <h4>My products</h4>
        <div className="my-products-content">
          {
              cartItems.length === 0 ? <p>Your Cart is empty</p>
                : cartItems.map((item) => (
                  <p key={item.id}>
                    <input type="checkbox" checked />
                    {item.name}
                    {' '}
                    <span>
                      $
                      {item.price * item.count}
                    </span>
                  </p>
                ))
            }
          <div className="total-cost-to-checkout">
            <div>Total :</div>
            <div>
              $
              {cartItems.reduce((toatalCost, item) => toatalCost + (item.count * item.price), 0)}
            </div>
          </div>
        </div>
      </div>
      <h3>Confirm Personal Infromation</h3>
      <form className="checkout-form">
        <div>
          <div className="caption">Name</div>
          <div className="dobble-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div>
          <div className="caption">E-Mail</div>
          <input type="email" placeholder="Email Address" />
        </div>
        <div>
          <div className="caption">Address</div>
          <div className="address-fields">
            <input type="text" placeholder="Street Address" />
            <input type="text" placeholder="Street Address line 2" />
            <input type="text" placeholder="City" />
          </div>
        </div>
        <div>
          <div className="caption">Country</div>
          <div className="dobble-fields">
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="Zip-code" />
          </div>
        </div>
        <button type="submit">Make Payment</button>
        <hr />
      </form>

    </div>
  );
}

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    house: PropTypes.string,
    popularity: PropTypes.bool,
  })).isRequired,
};

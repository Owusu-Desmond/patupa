import React, { useState } from 'react';
import PropTypes from 'prop-types';
import items from './static-data';
import Nav from './Nav';
import HomePage from './HomePage';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  // add Items to cart
  const addToCart = (item) => {
    setCart((previous) => [...previous, item]);
  };
  const removeItem = (item) => {
    const itemIndex = cart.findIndex((i) => i.id === item.id);
    if (itemIndex >= 0) {
      setCart((cart) => {
        const cartCopy = [...cart];
        cartCopy.splice(itemIndex, 1);
        return cartCopy;
      });
    }
  };
  // summarize cart to ignore already added items
  const summarizeCart = (cart) => {
    let summaryItem;
    const groupItems = (cart) => cart.reduce((summary, item) => {
      summaryItem = summary[item.id];
      summaryItem = summaryItem || {
        ...item,
        count: 0,
      };
      summaryItem.count += 1;
      return summary;
    }, {});
    return Object.values(groupItems(cart));
  };
  // get popular items and display in the homepage
  const popularItems = (items) => {
    const popItems = [];
    items.forEach((item) => {
      if (item.popularity === true) {
        popItems.push(item);
      }
    });
    return popItems;
  };
  return (
    <div className="App">
      <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="App-content">
        <Content
          tab={activeTab}
          onAddToCart={addToCart}
          onRemoveItem={removeItem}
          cart={summarizeCart(cart)}
          getPopularItems={popularItems(items)}
        />
      </main>
    </div>
  );
};

// switch app content to components
const Content = ({
  cart, tab, onAddToCart, onRemoveItem, getPopularItems,
}) => {
  switch (tab) {
    case 'items':
      return (
        <span>
          {' '}
          <ItemPage items={items} onAddToCart={onAddToCart} />
        </span>
      );
    case 'cart':
      return (
        <span>
          {' '}
          <CartPage items={cart} onRemoveOne={onRemoveItem} onAddOne={onAddToCart} />
          {' '}
        </span>
      );
    case 'home':
      return (
        <span>
          {' '}
          <HomePage popularItems={getPopularItems} />
        </span>
      );
    default:
      return (
        <span>Ops! You are missed.</span>
      );
  }
};
Content.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
  tab: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  getPopularItems: PropTypes.func.isRequired,
};
export default App;

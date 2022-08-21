import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import products from './adapters/static-data';
import Nav from './components/AppNav';
import './css/App.css';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import Footer from './components/footer';

const App = () => {
  const [cart, setCart] = useState([]);
  // add Items to cart
  const addToCart = (item) => {
    setCart((previous) => [...previous, item]);
  };
  const removeOne = (item) => {
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
    let alreadySummarized;
    const groupItems = (cart) => cart.reduce((summary, item) => {
      alreadySummarized = summary;
      alreadySummarized[item.id] = alreadySummarized[item.id] || {
        ...item,
        count: 0,
      };
      alreadySummarized[item.id].count += 1;
      return summary;
    }, {});

    return Object.values(groupItems(cart));
  };
  const productsInCart = summarizeCart(cart).length;
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
    <BrowserRouter>
      <div className="App">
        <Nav
          productsInCart={productsInCart}
        />
        <main className="App-content">
          <Routes>
            <Route path="/" element={<HomePage popularItems={popularItems(products)} onAddToCart={addToCart} />} />
            <Route path="/products" element={<ProductsPage items={products} onAddToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cartItems={summarizeCart(cart)} onRemoveOne={removeOne} onAddOne={addToCart} onAddToCart={addToCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from './components/AppNav';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Footer from './components/footer';
import ProductPage from './pages/product-page';
import Categories from './components/categories';

const App = () => {
  const products = useSelector((state) => state.products);
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

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <main className="App-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/cart" element={<CartPage cartItems={summarizeCart(cart)} onRemoveOne={removeOne} onAddOne={addToCart} onAddToCart={addToCart} />} />
            {products.map((product) => (
              <Route key={product.id} path={`/product/id=${product.id}`} element={<ProductPage product={product} onAddToCart={addToCart} />} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './components/AppNav';
import Auth from './Auth/Auth';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './scrollToTop';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Footer from './components/footer';
import ProductPage from './pages/product-page';
import Categories from './components/categories';
import Callback from './components/callback';

const App = () => {
  // call the useslector hook to get the products from the store
  const products = useSelector((state) => state.products);

  const auth = new Auth();

  return (
    <div className="App">
      <Nav auth={auth} />
      <main className="App-content">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          {/* if user is authenticated allow access to cart page else redirect to homepage */}
          {auth.isAuthenticated() ? (
            <>
              <Route path="/cart" element={<CartPage />} />
            </>
          ) : (
            <>
              <Route path="/cart" element={<HomePage />} />
            </>
          )}

          {products.map((product) => (
            <Route key={product.id} path={`/product/${product.id}`} element={<ProductPage product={product} auth={auth} />} />
          ))}
          <Route path="/callback" element={<Callback auth={auth} />} />
        </Routes>
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import '../css/App.css';

const Nav = ({ activeTab, onTabChange, productsInCart }) => {
  const tabClass = (tabName) => `App-nav-item ${(activeTab === tabName) ? 'selected' : ''
  }`;
  return (
    <nav className="App-nav">
      <ul>
        <li className={tabClass('home')}>
          <button type="button" onClick={() => onTabChange('home')}>Home</button>
        </li>
        <li className={tabClass('products')}>
          <button type="button" onClick={() => onTabChange('products')}>Products</button>
        </li>
        <li className={tabClass('cart')}>
          <button type="button" onClick={() => onTabChange('cart')}>
            &#128722;
            <sup>{productsInCart}</sup>
          </button>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  productsInCart: PropTypes.number.isRequired,
};

export default Nav;

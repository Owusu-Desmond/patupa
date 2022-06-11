import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Nav = ({ activeTab, onTabChange }) => {
  const tabClass = (tabName) => `App-nav-item ${(activeTab === tabName) ? 'selected' : ''
  }`;
  return (
    <nav className="App-nav">
      <ul>
        <li className={tabClass('home')}>
          <button type="button" onClick={() => onTabChange('home')}>Home</button>
        </li>
        <li className={tabClass('items')}>
          <button type="button" onClick={() => onTabChange('items')}>Items</button>
        </li>
        <li className={tabClass('cart')}>
          <button type="button" onClick={() => onTabChange('cart')}>Cart</button>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default Nav;

import React from 'react';
import PropTypes from 'prop-types';
import '../css/App.css';
import { NavLink } from 'react-router-dom';

const Nav = ({ productsInCart }) => (
  <nav className="App-nav">
    <ul>
      <li className="nav-item">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/products">Products</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/cart">
          &#128722;
          <sup>{productsInCart}</sup>
        </NavLink>
      </li>
    </ul>
  </nav>
);

Nav.propTypes = {
  productsInCart: PropTypes.number.isRequired,
};

export default Nav;

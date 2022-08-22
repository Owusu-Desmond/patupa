import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../images/logo.jpg';
import '../css/App.css';

const Nav = ({ productsInCart }) => (
  <nav>
    <a href="/"><img className="logo" src={logo} alt="app logo" /></a>
    <form>
      <input type="search" />
      <input type="submit" value="search" />
    </form>
    <ul className="nav-list">
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/about">Order</NavLink>
      </li>
      <li>
        <button type="button">Login</button>
      </li>
      <li>
        {' '}
        <NavLink to="/cart">
          &#128722;
          <sup>{productsInCart}</sup>
        </NavLink>
      </li>
    </ul>
    <div className="menu-icon">Menu</div>
  </nav>
);

Nav.propTypes = {
  productsInCart: PropTypes.number.isRequired,
};

export default Nav;

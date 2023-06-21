import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getUserDetails } from '../store/user/user';
import '../css/App.css';
import logo from '../images/logo.svg';

const AppNav = ({ auth }) => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const loadUserProfile = () => {
    auth.getProfile((profile, error) => {
      dispatch(getUserDetails({ profile, error }));
    });
  };

  useEffect(() => {
    if (auth.isAuthenticated()) {
      loadUserProfile();
    }
  }, [auth]); // when auth changes, load user profile

  const { profile } = user;

  return (
    <Navbar className="navbar fs-5 px-4" expand="lg">
      {/* use container fluild */}
      <Container fluid>
        <Navbar.Brand className="nav-bland">
          <NavLink to="/">
            <img className="logo" src={logo} alt="logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* center the navlinks */}
          <Nav className="d-flex justify-content-center w-100">
            <div className="nav-text">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </div>
            <div className="nav-text">
              <NavLink to="/categories" className="nav-link">
                Categories
              </NavLink>
            </div>
            <NavDropdown
              title="Customer service"
              id="basic-nav-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Contant Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ordering</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shipping && Delivery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Gift Cards</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="About Patupa"
              id="basic-nav-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item href="#Our-company">Our Company</NavDropdown.Item>
              <NavDropdown.Item href="#Careers">Careers</NavDropdown.Item>
              <NavDropdown.Item href="#Shop-our-catalog">Shop our catalog</NavDropdown.Item>
              <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="International"
              id="basic-nav-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">France</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">United Kingdom</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">United State</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {auth.isAuthenticated() ? (
            <>
              <NavDropdown
                title={(
                  <span>
                    Welcome
                    <br />
                    { (profile) ? profile.given_name : '' }
                    {' '}
                  </span>
)}
                id="basic-nav-dropdown"
                className="nav-user-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">My account</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Track my order</NavDropdown.Item>
                <hr />
                <NavDropdown.Item>
                  <button type="button" onClick={auth.logout} className="nav-logout-btn">Logout</button>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/cart">
                <div className="cart-icon"><span>{cart.length}</span></div>
              </NavLink>
            </>
          ) : (
            <Button onClick={auth.login} className="nav-login-btn">Login</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

AppNav.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    getProfile: PropTypes.func.isRequired,
  }).isRequired,
};

export default AppNav;

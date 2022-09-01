import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../images/logo.jpg';
import '../css/App.css';

const AppNav = () => {
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };
  return (
    <Navbar className="navbar fs-5" expand="lg">
      <Container>
        <Navbar.Brand className="nav-bland">
          <NavLink to="/">Patupa.com</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/categories">Categories</NavLink>
            </Nav.Link>
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
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
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
          <NavDropdown
            title="Welcome, Desmond !"
            id="basic-nav-dropdown"
            className="nav-user-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">My account</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Track my order</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Nav.propTypes = {
//   productsInCart: PropTypes.number.isRequired,
// };

export default AppNav;

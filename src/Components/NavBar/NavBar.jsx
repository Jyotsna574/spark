import React from "react";
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink
// } from './NavbarElements';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import image from "./image.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand >
              <img
                alt="logo"
                src={image}
                width="120"
                height="120"
                // className="d-inline-block align-top"
              />{" "}
              <span className="brand-name">Spark</span>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="collapsable-navdiv">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link className="hyper-text">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/timeline">
                <Nav.Link className="hyper-text">Timeline</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about-us">
                <Nav.Link className="hyper-text">About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact-us">
                <Nav.Link className="hyper-text">Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

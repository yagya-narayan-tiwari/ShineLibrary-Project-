
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
// import {LIB_ABOUTUS_ROUTE, LIB_BLOGS_ROUTE, LIB_CONTACTUS_ROUTE, LIB_HOME_ROUTE, LIB_OURSERVICES_ROUTE, PROFILE_ROUTE, SEATBOOKING_ROUTE, USER_LOGIN_ROUTE} from "../../Constants/AppRoute"
import '../../assets/CSS/Nav.css'
import { MdAccountCircle } from "react-icons/md"
import { getToken, removeToken } from "../../servicesBooking/services/UserServies"
import { useNavigate } from "react-router-dom"
// import { useEffect, useState } from "react"
import React, { useState, useEffect } from "react";
// import { Button, Container, Nav, Navbar } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import {
  LIB_ABOUTUS_ROUTE,
  LIB_BLOGS_ROUTE,
  LIB_CONTACTUS_ROUTE,
  LIB_HOME_ROUTE,
  LIB_OURSERVICES_ROUTE,
  PROFILE_ROUTE,
  SEATBOOKING_ROUTE,
  USER_LOGIN_ROUTE
} from "../../Constants/AppRoute";
// import '../../assets/CSS/Nav.css';
// import { MdAccountCircle } from "react-icons/md";
// import { getToken, removeToken } from "../../servicesBooking/services/UserServies";
// import { useNavigate } from "react-router-dom";

export const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!getToken());
  }, []);

  const handleLogout = () => {
    if (getToken()) {
      removeToken();
      // setIsLoggedIn(false);
      navigate(LIB_HOME_ROUTE);
    } else {
      navigate(USER_LOGIN_ROUTE);
    }
  };
  const checkLogin=()=> {
    if (getToken()) {
      return 'Logout';
    } else {
      return 'Login';
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-white px-4 py-3">
      <Container>
        <LinkContainer id="logo" to={LIB_HOME_ROUTE}>
          <Navbar.Brand>Shine<span>Library</span></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="navIcon">
            <LinkContainer to={LIB_HOME_ROUTE}>
              <Nav.Link id="home">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={LIB_ABOUTUS_ROUTE}>
              <Nav.Link id="about">About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to={LIB_OURSERVICES_ROUTE}>
              <Nav.Link id="ser">Our Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to={LIB_BLOGS_ROUTE}>
              <Nav.Link id="blog">Blogs</Nav.Link>
            </LinkContainer>
            <LinkContainer to={LIB_CONTACTUS_ROUTE}>
              <Nav.Link id="contact">Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav id="navrightIcons">
            {getToken() && (
              <LinkContainer to={PROFILE_ROUTE}>
                <MdAccountCircle className="dashBoard" />
              </LinkContainer>
            )}
            <Button className="btn loginBtn" id="login" onClick={handleLogout}>
              {checkLogin()}
            </Button>
            <LinkContainer to={SEATBOOKING_ROUTE}>
              <Button className="btn" id="Bookbtn">Book Seat</Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

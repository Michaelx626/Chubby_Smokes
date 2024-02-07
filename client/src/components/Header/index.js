import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import Auth from "../../utils/auth";
import styled from 'styled-components';

const StoreTitle = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  font-family: fantasy;
`;

const CenteredNavbarCollapse = styled(Navbar.Collapse)`
  display: flex;
  justify-content: center;
`;

const ItemNavLink = styled(Nav.Link)`
  font-family: fantasy;
  font-size: 150%;
`;

function Header() {
  return (
    <>
      <StoreTitle>Chubby Smoke</StoreTitle>

      <header>
        <Navbar collapseOnSelect expand="md">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav navbarScroll" />
            <CenteredNavbarCollapse id="responsive-navbar-nav navbarScroll">
              <Nav className="ms-md-5" navbarScroll>
                <ItemNavLink href="/">Home</ItemNavLink>
                <ItemNavLink href='/vapes'>Vapes</ItemNavLink>
                <ItemNavLink href='juices'>Juices</ItemNavLink>
                <ItemNavLink href='electronics'>Electronics</ItemNavLink>
                {Auth.loggedIn() ? null : (
                  <>
                  <ItemNavLink href="login">Login</ItemNavLink>
                 <ItemNavLink href="signup">Register</ItemNavLink>
                  </>
                )}
              </Nav>
            </CenteredNavbarCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
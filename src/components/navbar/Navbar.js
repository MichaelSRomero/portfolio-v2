import React from "react";

import NavItem from "./NavItem";
import styled from 'styled-components';

// z-index is required so modal-background doesn't overlap
const StyledNav = styled.nav`
  height: inherit;
  z-index: 41 !important; 
`

const Navbar = ({
  logo,
  navItems,
  isMenuOpen = false,
  openMenu = () => {}
}) => {
  return (
    <StyledNav className="navbar container is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
        </a>
        <a 
          role="button"
          className={"navbar-burger" + (isMenuOpen ? " is-active" : "")}
          aria-label="menu"
          aria-expanded="false"
          onClick={ openMenu }
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div 
        id="navbarMenu"
        className={"navbar-menu" + (isMenuOpen ? " is-active" : "")}
      >
        <div className="navbar-end">
          { navItems.map(item => <NavItem key={`NavItem-${ item.title }`} { ...item } />) }
        </div>
      </div>
    </StyledNav>
  )
}

export default Navbar;
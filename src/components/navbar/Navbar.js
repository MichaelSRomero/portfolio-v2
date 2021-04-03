import * as React from "react";

import NavItem from "./NavItem";
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: inherit;
`

const Navbar = ({logo, navItems}) => {
  return (
    <StyledNav className="navbar" role="navigation" aria-label="main navigation">
    {/* <StyledNav className="is-flex is-justify-content-space-between"> */}
      <div className="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          {navItems.map(item => <NavItem {...item} />)}
        </div>
      </div>
    </StyledNav>
  )
}

export default Navbar;
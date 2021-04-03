import * as React from "react";

import NavItem from "./NavItem";
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: inherit;
`

const Navbar = ({logo, navItems}) => {
  return (
    <StyledNav className="is-flex is-justify-content-space-between">
      {/* Insert Logo */}
      Logo
      <ul className="is-flex">
        {/* Insert Items */}
        {navItems.map(item => <NavItem {...item} />)}
      </ul>
    </StyledNav>
  )
}

export default Navbar;
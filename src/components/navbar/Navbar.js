import * as React from "react";

import NavItem from "./NavItem";

const Navbar = ({logo, navItems}) => {
  return (
    <nav className="is-flex is-justify-content-space-between">
      {/* Insert Logo */}
      Logo
      <ul className="is-flex">
        {/* Insert Items */}
        {navItems.map(item => <NavItem {...item} />)}
      </ul>
    </nav>
  )
}

export default Navbar;
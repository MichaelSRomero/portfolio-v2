import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";


const NavItem = ({ title, href }) => {
  return (
    <AnchorLink className="navbar-item" to={ href } title={ title }>
      <h3 className="is-capitalized is-family-secondary is-size-7">
        { title }
      </h3>
    </AnchorLink>
  )
};

export default NavItem;
import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";


const NavItem = ({ title, href, onAnchorClick }) => {
  return (
    <AnchorLink
      className="navbar-item has-text-black"
      to={ href }
      title={ title }
      onAnchorLinkClick={onAnchorClick}
    >
      <h3 className="is-capitalized is-family-secondary is-size-7">
        { title }
      </h3>
    </AnchorLink>
  )
};

export default NavItem;
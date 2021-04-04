import * as React from "react"

const NavItem = ({ title, href }) => {
  // Wrap in anchor tag to enable smooth scrolling
  // npm i gatsby-plugin-anchor-links
  return (
    <a className="navbar-item">
      <h3 className="is-capitalized is-family-secondary is-size-7">
        { title }
      </h3>
    </a>
  )
};

export default NavItem;
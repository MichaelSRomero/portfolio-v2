import * as React from "react"

const NavItem = ({ title, href }) => {
  const capitalLetter = title[0].toUpperCase();
  // Wrap in anchor tag to enable smooth scrolling
  // npm i gatsby-plugin-anchor-links
  return (
    <a className="navbar-item">
      <h3>
        <span className="has-text-weight-bold is-size-4">{ capitalLetter }</span> { title.slice(1) }
      </h3>
    </a>
  )
};

export default NavItem;
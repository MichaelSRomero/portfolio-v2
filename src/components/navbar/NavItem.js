import * as React from "react"
import { Link } from "gatsby"

const NavItem = ({title, href}) => {
  const capitalLetter = title[0].toUpperCase();
  // Wrap in anchor tag to enable smooth scrolling
  // npm i gatsby-plugin-anchor-links
  return (
    <li>
      <h3>
        <span>{capitalLetter}</span> {title.slice(1)}
      </h3>
    </li>
  )
};

export default NavItem;
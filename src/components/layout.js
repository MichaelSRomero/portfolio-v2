/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./navbar/Navbar";
import styled from 'styled-components';
import Modal from "./modal/Modal";

const StyledMain = styled.main`
  height: 100vh;
`

const Layout = ({ children }) => {
  const [isModalOpen, setModal] = useState(false);

  const openModal = () => setModal(!isModalOpen);
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <header>
        <NavBar navItems={ navItems } openMenu={ openModal } isMenuOpened={ isModalOpen }/>
      </header>
      <StyledMain>
        {/* <div className={"modal" + (isModalOpen ? " is-active" : "") } >
          <div className="modal-background" onClick={openModal}></div>
        </div> */}
        <Modal isModalOpen={ isModalOpen } openModal={ openModal } closeSlot={ null } />
        { children }
      </StyledMain>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

const navItems = [
  {
    title: "about",
    href: "#",
  },
  {
    title: "skills",
    href: "#",
  },
  {
    title: "experience",
    href: "#",
  },
  {
    title: "projects",
    href: "#",
  },
  {
    title: "contact",
    href: "#",
  },
]

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

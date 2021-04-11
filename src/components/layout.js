/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import DeviceContext, { deviceInfo } from "./context/deviceContext";
import styled from "styled-components";
// import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./navbar/Navbar";
import Modal from "./modal/Modal";

const StyledMain = styled.main`
  height: auto;
`

const Layout = ({ children }) => {
  const [isModalOpen, setModal] = useState(false);
  const openModal = () => setModal(!isModalOpen);

  const [localDeviceInfo, setLocalDeviceInfo] = useState(deviceInfo);
  useEffect(() => {
    function handleResize() {
      setLocalDeviceInfo({
        dimensions: {
          innerHeight: window.innerHeight,
          innerWidth: window.innerWidth
        }
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
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
    <DeviceContext.Provider value={ localDeviceInfo }>
      <header>
        <NavBar navItems={ navItems } openMenu={ openModal } isMenuOpen={ isModalOpen }/>
      </header>
      <StyledMain>
        <Modal isModalOpen={ isModalOpen } openModal={ openModal } closeSlot={ null } />
        { children }
      </StyledMain>
      <footer className="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </DeviceContext.Provider>
  )
}

const navItems = [
  {
    title: "about",
    href: "/#about",
  },
  // {
  //   title: "skills",
  //   href: "/#skills",
  // },
  {
    title: "experience",
    href: "/#experience",
  },
  {
    title: "projects",
    href: "/#projects",
  },
  {
    title: "contact",
    href: "/#contact",
  },
]

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

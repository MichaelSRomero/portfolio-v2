import React from "react"

import "../styles/main.scss";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing/Landing";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";

const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Experience />
  </Layout>
)

export default IndexPage;

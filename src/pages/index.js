import React from "react"

import "../styles/main.scss";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing/Landing";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1 className="is-uppercase has-text-primary" >Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <StaticImage
  //     src="../images/gatsby-astronaut.png"
  //     width={300}
  //     quality={95}
  //     formats={["AUTO", "WEBP", "AVIF"]}
  //     alt="A Gatsby astronaut"
  //     style={{ marginBottom: `1.45rem` }}
  //   />
  //   <p>
  //     <Link to="/page-2/">Go to page 2</Link> <br />
  //     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  //   </p>
  // </Layout>
  <Layout>
    <Landing />
    <About />
    <Skills />
  </Layout>
)

export default IndexPage

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../css/bulmaVariables.scss";
import "../css/global.scss";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar/Navbar";
import Landing from "../components/landing/Landing";

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
  <>
    <header>
      <Navbar navItems={navitems} />
    </header>
    <main>
      <Landing />
    </main>
  </>
)

const navitems = [
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

export default IndexPage

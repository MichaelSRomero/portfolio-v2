import * as React from "react";

import Block from "./Block";

import primary from "../../css/bulmaVariables.scss";

const Landing = () => {
  return (
    <section className="is-relative">
      Michael
      <Block amount={7} background={primary}/>
    </section>
  )
}

export default Landing;
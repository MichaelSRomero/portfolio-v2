import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"

import Block from "./Block";
import styled from 'styled-components';

const StyledSection = styled.section`
  height: 100%;
`

const StyledDiv = styled.div`
  position: absolute;
  bottom: -1%;
  left: 0;
`

const Landing = () => {
  return (
    <StyledSection className="is-relative is-flex is-flex-direction-column px-5">
      <StyledDiv className="container">
        <StaticImage 
          src="../../images/hero-img.png"
          alt="hero"
          // width={800}
          height={750}
        />
      </StyledDiv>

      <Block amount={7} background="--primary-color" width="13%" height="inherit" />
    </StyledSection>
  )
}

export default Landing;
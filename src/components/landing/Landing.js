import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import cloud from "../../images/akatsuki-cloud.png"

import Block from "./Block";
import styled from 'styled-components';

const StyledSection = styled.section`
  height: 100vh;
`

const StyledDiv = styled.div`
  position: absolute;
  bottom: -1%;
  left: -5%;
`

const StyledBlockContainer = styled.div`
  height: 100%;
`

const StyledH1 = styled.div`
  `
  // text-shadow: 1vmin 1vmin 0 #E79C10, -1vmin -1vmin 0 #D53A33;

const Landing = () => {
  const generateXBlocks = (num, block) => {
    const blocks = [];

    for (let i = 0; i < num; i++) {
      blocks.push(
        <Block
          key={`BlockDiv-${num}-${i}`}
          backgroundColor={ block.backgroundColor }
          backgroundImage={ block.backgroundImage }
          backgroundPosition={ block.backgroundPosition }
          width={ block.width }
          height={ block.height }
        />
      )
    }

    return blocks;
  }
  return (
    <StyledSection className="container is-flex is-flex-direction-column is-clipped">
      <div className="hero" style={{ position: "absolute", bottom: "35%", zIndex: 2 }}>
        <div className="hero-body">
          <StyledH1 className="subtitle has-text-black is-size-3 is-size-5-mobile">Software Engineer</StyledH1>
          <StyledH1 className="title is-size-1 is-size-3-mobile" style={{  color: "black", fontWeight: 800 }}>Michael Romero</StyledH1>
          {/* <p className="title has-text-white has-text-weight-bold is-size-3 is-size-5-mobile is-uppercase">Software Engineer</p> */}
          {/* <p className="subtitle has-text-white has-text-weight-bold is-size-1 is-size-3-mobile is-uppercase">Michael Romero</p> */}
        </div>
      </div>
      <StyledDiv className="">
          <StaticImage 
            src="../../images/hero-img.png"
            alt="hero"
            height={750}
          />
      </StyledDiv>

      <StyledBlockContainer className="is-flex is-justify-content-space-between">
        { generateXBlocks(3, { backgroundColor: "--primary-color", width: "13%", height: "inherit" }) }
        <Block
          backgroundColor="--primary-color"
          backgroundImage={ cloud }
          backgroundPosition="0%"
          width="13%"
          height="inherit"
        />
        <Block
          backgroundColor="--primary-color"
          backgroundImage={ cloud }
          backgroundPosition="20%"
          width="13%"
          height="inherit"
        />
        <Block
          backgroundColor="--primary-color"
          backgroundImage={ cloud }
          backgroundPosition="40%"
          width="13%"
          height="inherit"
        />
        <Block
          backgroundColor="--primary-color"
          backgroundImage={ cloud }
          backgroundPosition="60%"
          width="13%"
          height="inherit"
        />
      </StyledBlockContainer>
    </StyledSection>
  )
}

export default Landing;
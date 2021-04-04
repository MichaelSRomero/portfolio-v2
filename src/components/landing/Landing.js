import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import cloud from "../../images/akatsuki-cloud-transparent.png"

import Block from "./Block";
import styled from 'styled-components';

const StyledSection = styled.section`
  height: 100%;
`

const StyledDiv = styled.div`
  position: absolute;
  bottom: -1%;
  left: -5%;
`

const StyledBlockContainer = styled.div`
  height: 100%;
`

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
    <StyledSection className="container is-relative is-flex is-flex-direction-column">
      {/* <h1 style={{ position: "absolute", bottom: 0, color: "red" }}>Michael Romero</h1> */}
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
          backgroundImage={cloud}
          backgroundPosition={"0%"}
          width="13%"
          height="inherit"
        />
        <Block
          backgroundColor="--primary-color"
          backgroundImage={cloud}
          backgroundPosition={"20%"}
          width="13%"
          height="inherit"
        />
        <Block
          backgroundColor="--primary-color"
          backgroundImage={cloud}
          backgroundPosition={"40%"}
          width="13%"
          height="inherit"
        />
        <Block
          backgroundColor="--primary-color"
          backgroundImage={cloud}
          backgroundPosition={"60%"}
          width="13%"
          height="inherit"
        />
      </StyledBlockContainer>
    </StyledSection>
  )
}

export default Landing;
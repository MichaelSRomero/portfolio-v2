import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import breakpoints from "../../styles/breakpoints";

import styled from 'styled-components';
import Container from "../ui/Container";

const StyledSection = styled.section`
  height: 100vh;
  padding: 4rem 0;

  @media only screen and (max-width: ${ breakpoints.mobile }) {
    padding: 4rem 0 0 0;
  }

  @media only screen and (max-width: ${ breakpoints.tablet })
                     and (orientation: landscape) {
    height: 100%;
  }
`;
const StyledTitle = styled.h1`
  border-bottom: rgb(235, 235, 235) 4px solid;
  font-size: 6rem;
  line-height: 0.65;
  margin-bottom: 0;
  text-align: center;

  @media only screen and (max-width: ${ breakpoints.mobile }) {
    font-size: 3rem;
  }
`;
const StyledSubTitle = styled.h2`
  font-size: 5.5rem;
  line-height: 0.85;
  margin-bottom: 0;
  text-align: center;

  @media only screen and (max-width: ${ breakpoints.mobile }) {
    font-size: 2.5rem;
  }
`;

  // background-color: #BC5B35;

const Landing = () => {
  return (
    <StyledSection className="has-background-primary is-clipped">
      <Container
        reverseContent={ true }
        leftContent={
          <StaticImage 
            src="../../images/akatsuki-cloud-transparent.png"
            alt="hero"
          />
        }
        rightContent={
          <>
            <StyledTitle className="title has-text-white is-uppercase">Michael-Romero</StyledTitle>
            <StyledSubTitle className="subtitle has-text-white is-uppercase">Software Engineer</StyledSubTitle>
            <button className="button is-fullwidth is-large is-outlined-white has-no-border-radius">Get In Touch</button>
          </>
        }
      />
    </StyledSection>
  );
};

export default Landing;
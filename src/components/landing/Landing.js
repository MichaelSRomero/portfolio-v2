import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import breakpoints from "../../styles/breakpoints";

import styled from 'styled-components';

const StyledSection = styled.section`
  height: 100vh;
  background-color: #D1512C;
  padding: 4rem 3rem;

  @media only screen and (max-width: ${ breakpoints.mobile }) {
    padding: 4rem 0 0 0;
  }

  @media only screen and (max-width: ${ breakpoints.tablet })
                     and (orientation: landscape) {
    height: 100%;
  }
`
const StyledContainer = styled.div`
  height: 100%;

  @media only screen and (max-width: ${ breakpoints.desktop }) {
    flex-direction: column-reverse;
  }
`
  const StyledLeftContent = styled.div`
  height: 100%;
  width: 45%;

  @media only screen and (max-width: ${ breakpoints.desktop }) {
    width: 100%;
  }
`
const StyledRightContent = styled.div`
  width: 55%;
  padding: 1rem 2rem;

  @media only screen and (max-width: ${ breakpoints.desktop }) {
    width: 100%;
    padding: 1rem;
  }
`
  // background-color: #BC5B35;

const Landing = () => {
  return (
    <StyledSection>
      <StyledContainer className="container is-flex is-align-items-center">
        <StyledLeftContent className="is-flex is-align-items-center is-justify-content-center">
          <StaticImage 
            src="../../images/akatsuki-cloud-transparent.png"
            alt="hero"
            height={500}
          />
        </StyledLeftContent>

        <StyledRightContent className="is-flex is-flex-direction-column is-align-items-center">
          <h1 className="title is-1 is-size-3-mobile has-text-white">Michael Romero</h1>
          <h2 className="subtitle is-3 is-size-5-mobile has-text-white">Software Engineer</h2>
          <button className="button is-fullwidth is-large">Get In Touch</button>
        </StyledRightContent>
      </StyledContainer>
    </StyledSection>
  );
};

export default Landing;
import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import breakpoints from "../../styles/breakpoints";

import styled from 'styled-components';
import Container from "../ui/Container";

const StyledSection = styled.section`
  height: 100vh;
  padding: 4rem 3rem;

  @media only screen and (max-width: ${ breakpoints.mobile }) {
    padding: 4rem 0 0 0;
  }

  @media only screen and (max-width: ${ breakpoints.tablet })
                     and (orientation: landscape) {
    height: 100%;
  }
`
  // background-color: #BC5B35;

const Landing = () => {
  return (
    <StyledSection className="has-background-primary">
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
            <h1 className="title is-1 is-size-3-mobile has-text-white">Michael Romero</h1>
            <h2 className="subtitle is-3 is-size-5-mobile has-text-white">Software Engineer</h2>
            <button className="button is-fullwidth is-large">Get In Touch</button>
          </>
        }
      />
      {/* <StyledContainer className="container is-flex is-align-items-center">
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
      </StyledContainer> */}
    </StyledSection>
  );
};

export default Landing;
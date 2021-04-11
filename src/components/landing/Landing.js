import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import breakpoints from "../../styles/breakpoints";

import styled from 'styled-components';
import Container from "../ui/Container";
import Title from "../ui/Title";
import SubTitle from "../ui/SubTitle";

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
            <Title titleText="Michael Romero" />
            <SubTitle titleText="Software Engineer" />
            <button className="button is-fullwidth is-large is-outlined-white has-no-border-radius has-hover-background-white">Get In Touch</button>
          </>
        }
      />
    </StyledSection>
  );
};

export default Landing;
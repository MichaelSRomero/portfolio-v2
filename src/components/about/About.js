import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import breakpoints from "../../styles/breakpoints";

import styled from 'styled-components';
import Container from "../ui/Container";

const StyledSection = styled.section`
  padding: 7rem 0;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding: 6rem 0;
  }
`
const StyledLeftContent = styled.div`
  width: 100%;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1rem;
  }
`
const StyledMediaRight = styled.div`
  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin-left: 0;
    text-align: center;
  }
`

const About = () => {
  return (
    <StyledSection id="about" className="has-background-pure-white">
      <Container
        leftContent={
          <StyledLeftContent className="content">
            <h1>ABOUT ME</h1>
          </StyledLeftContent>
        }
        rightContent={
          <div className="content">
            <h5 className="subtitle is-4 is-size-5-mobile is-family-secondary">Hi, my name is</h5>
            <h1 className="title is-2 is-size-3-mobile">Michael Romero</h1>
            <p className="is-family-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
              nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
              odio, sollicitudin vel erat vel, interdum mattis neque. Subscript
              works as well!
            </p>
            <p className="is-family-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
              nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
              odio, sollicitudin vel erat vel, interdum mattis neque. Subscript
              works as well!
            </p>
          </div>
        }
      />
    </StyledSection>
  )
};

export default About;
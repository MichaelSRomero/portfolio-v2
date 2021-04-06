import React from "react";
import { StaticImage } from "gatsby-plugin-image"

import styled from 'styled-components';

const StyledSection = styled.section`
  margin-top: 10rem;
  padding: 0 3rem;

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`
const StyledMediaContent = styled.div`
  @media only screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`
const StyledMediaRight = styled.div`
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`

const About = () => {
  return (
    <StyledSection id="about" className="media container tile">
      <StyledMediaContent className="media-content tile">
          <div className="content">
            <h5 className="subtitle is-4 is-family-secondary is-size-5-mobile">Hi, my name is</h5>
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
      </StyledMediaContent>

      <StyledMediaRight className="media-right tile">
        <StaticImage
          imgStyle={{ border: "black 2px solid", borderRadius: "50%", maxHeight: "350px" }}
          src="../../images/Profile-photo.png"
          alt="Michael Romero"
          width={ 350 }
        />
      </StyledMediaRight>
    </StyledSection>
  )
};

export default About;
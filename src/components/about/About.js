import React from "react";
import { StaticImage } from "gatsby-plugin-image"

import styled from 'styled-components';

const StyledSection = styled.section`
  margin-top: 10rem;
`

const About = () => {
  return (
    <StyledSection id="about" className="media container tile pl-6">
      <div className="media-content tile">
          <div className="content">
            <h5 className="subtitle is-4 is-family-secondary">Hi, my name is</h5>
            <h1 className="title is-2">Michael Romero</h1>
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
      </div>

      <div className="media-right tile">
        <StaticImage
          className=""
          imgStyle={{ border: "black 2px solid", borderRadius: "50%" }}
          src="../../images/Profile-photo.png"
          alt="Michael Romero"
          height={250}
          width={250}
        />
      </div>
    </StyledSection>
  )
};

export default About;
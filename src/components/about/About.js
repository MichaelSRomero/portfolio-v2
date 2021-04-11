import React from "react";
import breakpoints from "../../styles/breakpoints";

import DeviceStore from "../store/deviceStore";
import styled from 'styled-components';
import Container from "../ui/Container";
import Title from "../ui/Title";

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

const About = () => {
  return (
    <StyledSection id="about" className="has-background-pure-white">
      <Container
        leftContent={
          <StyledLeftContent>
            <DeviceStore.Consumer>
              {({ dimensions }) => (
                breakpoints.desktopWidth < dimensions.innerWidth ?
                  <>
                    <Title 
                      titleText="About"
                      whiteText={ false }
                      borderColor="#0A0A0A"
                    />
                    <Title 
                      titleText="Me"
                      whiteText={ false }
                      borderExist={ false }
                      isMainTitle={ false }
                    />
                  </>
                  :
                  <Title 
                    titleText="About Me"
                    textAlign={ false }
                    whiteText={ false }
                    borderColor="#0A0A0A"
                  />
              )}
            </DeviceStore.Consumer>
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
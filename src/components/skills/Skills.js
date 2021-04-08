import React from "react";
import breakpoints from "../../styles/breakpoints";
import { faCog } from '@fortawesome/free-solid-svg-icons'


import styled from 'styled-components';
import Icon from "../ui/Icon";

const StyledSection = styled.section`
  padding: 7rem 0;

  @media only screen and (max-width: ${ breakpoints.mobile }) {
    padding: 4rem 0;
  }
`;
const StyledDiv = styled.div`
  @media only screen and (max-width: ${ breakpoints.desktop }) and (min-width: ${ breakpoints.mobile }) {
    padding: 0 2rem;
  }

  @media only screen and (max-width: ${ breakpoints.mobile }) {
    padding: 0 1rem;
  }
`;
const StyledContainer = styled.div`
  padding: 5rem 0;
`;

const Skills = () => {
  return (
    <StyledSection id="skills">
      <StyledDiv className="container">
        <h2 className="title is-2 is-size-3-mobile">Technical Skills</h2>
      </StyledDiv>

      <StyledDiv className="has-background-secondary has-text-white">
        <StyledContainer className="container">
          <div>
            <Icon icon={ faCog } size="lg" >
              <h3 className="subtitle is-3 is-5-mobile has-text-weight-bold has-text-white">Strong</h3>
            </Icon>
            <div className="columns is-family-secondary">
              <p className="column">Javascript</p>
            </div>
          </div>
          <div className="is-flex is-flex-direction-column">

          </div>
        </StyledContainer>
      </StyledDiv>
    </StyledSection>
  )
};

export default Skills;
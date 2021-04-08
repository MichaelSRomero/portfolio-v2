import React from "react";
import breakpoints from "../../styles/breakpoints";

import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 7rem 0;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding: 4rem 0;
  }
`;
const StyledDiv = styled.div`
  padding: 0 3rem;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const Skills = () => {
  return (
    <StyledSection id="skills">
      <StyledDiv>
        <h2 className="title is-2 is-size-3-mobile">Technical Skills</h2>
      </StyledDiv>
      <StyledDiv className="has-background-secondary">Strong</StyledDiv>

    </StyledSection>
  )
};

export default Skills;
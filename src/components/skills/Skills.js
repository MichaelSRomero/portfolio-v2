import React from "react";
import breakpoints from "../../styles/breakpoints";

import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 7rem 3rem;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding: 4rem 1rem;
  }
`

const Skills = () => {
  return (
    <StyledSection>
      Hi
    </StyledSection>
  )
};

export default Skills;
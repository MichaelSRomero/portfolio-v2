import React from "react";
import breakpoints from "../../styles/breakpoints";

import styled from "styled-components";

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
const Experience = () => {
  return (
    <StyledSection id="experience">
      <StyledDiv className="container">
        <h2 className="title is-2 is-size-3-mobile">Experience</h2>
      </StyledDiv>

      <StyledDiv className="has-background-secondary has-text-white">
        <StyledContainer className="container is-flex">
          wow
        </StyledContainer>
      </StyledDiv>
    </StyledSection>
  );
};

export default Experience;
import React from "react";
import breakpoints from "../../styles/breakpoints";

import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 100%;

  @media only screen and (max-width: ${ breakpoints.desktop }) {
    flex-direction: ${({ reverseContent }) => reverseContent ? "column-reverse" : "column"};
  }
`
  const StyledLeftContent = styled.div`
  height: 100%;
  width: 45%;

  @media only screen and (max-width: ${ breakpoints.desktop }) {
    width: 100%;
  }
`
const StyledRightContent = styled.div`
  width: 55%;
  padding: 1rem 2rem;

  @media only screen and (max-width: ${ breakpoints.desktop }) {
    width: 100%;
    padding: 1rem;
  }
`

const Container = ({
    leftContent,
    rightContent,
    reverseContent = false
  }) => {
  return (
    <StyledContainer className="container is-flex is-align-items-center" reverseContent={ reverseContent }>
      <StyledLeftContent className="is-flex is-align-items-center is-justify-content-center">
        { leftContent ? leftContent : null }
      </StyledLeftContent>

      <StyledRightContent className="is-flex is-flex-direction-column is-align-items-center">
        { rightContent ? rightContent : null }
      </StyledRightContent>
    </StyledContainer>
  )
};

export default Container;
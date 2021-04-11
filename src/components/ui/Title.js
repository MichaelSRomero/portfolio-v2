import React from "react";
import breakpoints from "../../styles/breakpoints";

import styled from 'styled-components';

const StyledTitle = styled.h1`
  border-bottom: ${({ borderColor }) => borderColor ? borderColor : "rgb(235, 235, 235)"} 4px solid;
  border: ${({ borderExist }) => borderExist ? "" : "none"};
  font-size: 6rem;
  line-height: 0.65;
  margin-bottom: 0 !important;
  margin-top: ${({ isMainTitle }) => isMainTitle ? null : "0.65rem"};
  text-align: ${({ textAlign }) => textAlign ? "center" : ""};

  @media only screen and (max-width: ${ breakpoints.mobile }) {
    font-size: 3rem;
  }
`;

const Title = ({
  titleText,
  borderColor,
  borderExist = true,
  textAlign = true,
  whiteText = true,
  isMainTitle = true,
}) => {
  return (
    <StyledTitle 
      className={"title is-uppercase" + (whiteText ? " has-text-white" : " has-text-black")}
      borderColor={ borderColor }
      borderExist={ borderExist }
      textAlign={ textAlign }
      isMainTitle={ isMainTitle }
    >
      { titleText }
    </StyledTitle>
  )
}

export default Title;
import React from "react";
import breakpoints from "../../styles/breakpoints";

import styled from 'styled-components';

const StyledTitle = styled.h1`
  border-bottom: ${({ borderColor }) => borderColor ? borderColor : "rgb(235, 235, 235)"} 4px solid;
  font-size: 6rem;
  line-height: 0.65;
  margin-bottom: 0;
  text-align: ${({ textAlign }) => textAlign ? "center" : ""};

  @media only screen and (max-width: ${ breakpoints.mobile }) {
    font-size: 3rem;
  }
`;

const Title = ({
  titleText,
  borderColor,
  textAlign = true,
  whiteText = true,
}) => {
  return (
    <StyledTitle 
      className={"title is-uppercase" + (whiteText ? " has-text-white" : " has-text-black")}
      borderColor={ borderColor }
      textAlign={ textAlign }
    >
      { titleText }
    </StyledTitle>
  )
}

export default Title;
import React from "react";
import breakpoints from "../../styles/breakpoints";

import styled from 'styled-components';

const StyledSubTitle = styled.h2`
  font-size: 5.5rem;
  line-height: 0.85;
  margin-bottom: 0;
  text-align: ${({ textAlign }) => textAlign ? "center" : ""};

  @media only screen and (max-width: ${ breakpoints.mobile }) {
    font-size: 2.5rem;
  }
`;

const SubTitle = ({
  titleText,
  textAlign = true,
  whiteText = true,
}) => {
  return (
    <StyledSubTitle 
      className={"title is-uppercase" + (whiteText ? " has-text-white" : " has-text-black")}
      textAlign={ textAlign }
    >
      { titleText }
    </StyledSubTitle>
  )
}

export default SubTitle;
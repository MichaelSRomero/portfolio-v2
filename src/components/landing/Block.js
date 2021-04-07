import * as React from "react";
import { convertToCSS } from "../../utils/cssTools";

import styled from 'styled-components';

const StyledBlockDiv = styled.div`
  background-size: cover;
  ${({ backgroundColor }) => convertToCSS('background-color', backgroundColor)};
  ${({ backgroundImage }) => convertToCSS('background-image', `url(${backgroundImage})`)};
  ${({ backgroundPosition }) => convertToCSS('background-position', backgroundPosition)};
  ${({ width }) => convertToCSS("width", width)};
  ${({ height }) => convertToCSS("height", height)};
`

const Block = ({
  backgroundColor = "",
  backgroundImage = "",
  backgroundPosition = "",
  width = "100%",
  height = "auto",
  className= ""
}) => {
  return (
    <StyledBlockDiv
      className={className}
      backgroundColor={ backgroundColor }
      backgroundImage={ backgroundImage }
      backgroundPosition={ backgroundPosition }
      width={ width }
      height={ height }
    >
   </StyledBlockDiv>
  );
};

export default Block;
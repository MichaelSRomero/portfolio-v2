import * as React from "react";
import { convertToCSS } from "../../utils/cssTools";

import styled from 'styled-components';

const StyledDivContainer = styled.div`
  height: 100%;
`

const StyledBlockDiv = styled.div`
  ${({ backgroundColor }) => convertToCSS('background-color', backgroundColor)};
  ${({ width }) => convertToCSS("width", width)};
  ${({ height }) => convertToCSS("height", height)};
`

const Block = ({ amount, background, width = "100%", height = "auto" }) => {
  const generateXBlocks = () => {
    const blocks = [];
    for (let i = 0; i < amount; i++) {
      blocks.push(
        <StyledBlockDiv 
          backgroundColor={background}
          width={width}
          height={height}>
        </StyledBlockDiv>
      )
    }

    return blocks;
  }

  return (
    <StyledDivContainer className="is-flex is-justify-content-space-between">
      {generateXBlocks()}
    </StyledDivContainer>
  );
};

export default Block;
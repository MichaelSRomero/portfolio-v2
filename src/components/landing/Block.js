import * as React from "react";
import { convertToCSS } from "../../utils/cssTools";

import styled from 'styled-components';

const StyledDiv = styled.div`
  ${({ backgroundColor }) => convertToCSS('background-color', backgroundColor)};
`

const Block = ({ amount, background }) => {
  const generateX = () => {
    const blocks = [];
    for (let i = 0; i < amount; i++) {
      blocks.push(
        <StyledDiv backgroundColor={background}>test</StyledDiv>
      )
    }

    return blocks;
  }

  return (
    <div className="is-flex is-justify-content-space-between">
      {generateX()}
    </div>
  );
};

export default Block;
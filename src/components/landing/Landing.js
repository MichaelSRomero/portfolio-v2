import * as React from "react";

import Block from "./Block";
import styled from 'styled-components';

const StyledSection = styled.section`
  height: 100%;
`

const Landing = () => {
  return (
    <StyledSection className="is-relative is-flex is-flex-direction-column px-5">
      Michael
      <Block amount={7} background="--primary-color" width="12%" height="inherit" />
    </StyledSection>
  )
}

export default Landing;
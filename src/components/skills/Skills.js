import React from "react";
import breakpoints from "../../styles/breakpoints";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'


import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 7rem 0;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding: 4rem 0;
  }
`;
const StyledDiv = styled.div`
  padding: 0 3rem;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const Skills = () => {
  return (
    <StyledSection id="skills">
      <StyledDiv>
        <h2 className="title is-2 is-size-3-mobile">Technical Skills</h2>
      </StyledDiv>
      <StyledDiv className="has-background-secondary">
        <div>
          <div className="icon-text">
            <span className="icon">
              <FontAwesomeIcon icon={ faCode } />
            </span>
            <h3 className="subtitle is-4 is-5-mobile is-family-secondary has-text-weight-bold">Strong</h3>
          </div>
          {/* <div className="columns">
            
          </div> */}
        </div>
        <div className="is-flex is-flex-direction-column">

        </div>
      </StyledDiv>

    </StyledSection>
  )
};

export default Skills;
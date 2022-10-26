import React, { useState } from 'react';
import styled from 'styled-components';
import { bios } from './team-bios';

export const styles = {
    reactGreen: '#2D2D2F',
    white: 'white', // h4
    lighterGreen: `#002e2b`,
    lightestGreen: '#303030', // hover, link color
    biosBColor: '#242529', // `#E4C2B3`, // team bios bg-color #e6e6e6
    redCode: '#ff6569', // hover, link color
  }
  
export const StyledWrapper = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  `
  
export const StyledDiv = styled.div`
  margin: 0 auto;
  ${'' /* max-width: 1024px; */}
  ${'' /* padding: 0px 1.0875rem 1.45rem; */}
  ${'' /* padding-top: 5em; */}
  justify-content: center;
  align-items: center;
  text-align: center;
  `;
  
export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  transform: scale(0.9);
  `;
  
export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 400px 400px 400px 400px;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  `;
  
export const StyledPersonExpander = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  svg {
    width: 10px;
  }
  svg.rotated {
    transform: rotate(90deg);
  }
  `;
  
export const StyledExpanderHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  a {
    font-size: 1.3rem;
    font-weight: normal;
    padding: 10.5px;
    margin: 0 8px 0 8px;
    color: ${styles.lightestGreen}
  }
  .name {
    transition: 0.3s;
  }
  &:hover .name {
    color: #62D6FB;
  }
  `;
  
export const StyledExpanderBio = styled.div`
  color: white;
  font-family: sans-serif;
  `;
  
export const ContributeLink = styled.span`
  a {
    text-decoration: none;
    color: ${styles.redCode};
    transition: 0.3s;
  }
  &:hover .contribute {
    color: #a64245; 
  }
  `;
  
export const PersonExpander = ({ name, handle, bio }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
      <StyledPersonExpander>
        <StyledExpanderHeader onClick={() => setIsExpanded(!isExpanded)}>
          <div className={isExpanded ? 'rotated' : ''} />
          <a className="name" style={{ textDecoration: 'none' }} href={`https://github.com/${handle}`} target="_blank" rel="noreferrer">{name}</a>
        </StyledExpanderHeader>
        {isExpanded && (
          <StyledExpanderBio>
            {bios[bio]}
          </StyledExpanderBio>
        )}
      </StyledPersonExpander>
    );
  }
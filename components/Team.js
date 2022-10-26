/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { bios } from './team-bios';
import styles from '../styles/Home.module.css';

const styling = {
  white: 'white', // h4
  lighterGreen: `#002e2b`,
  lightestGreen: '#303030', // hover, link color
  biosBColor: '#242529', // `#E4C2B3`, // team bios bg-color #e6e6e6
  redCode: '#ff6569', // hover, link color
};

const StyledWrapper = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const StyledDiv = styled.div`
  margin: 0 auto;
  ${'' /* max-width: 1024px; */}
  ${'' /* padding: 0px 1.0875rem 1.45rem; */}
  ${'' /* padding-top: 5em; */}
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  transform: scale(0.9);
`;

const StyledGrid = styled.div`
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

const StyledPersonExpander = styled.div`
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

const StyledExpanderHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  a {
    font-size: 1.3rem;
    font-weight: normal;
    padding: 10.5px;
    margin: 0 8px 0 8px;
    color: ${styling.lightestGreen};
  }
  .name {
    transition: 0.3s;
  }
  &:hover .name {
    color: #62d6fb;
  }
`;

const StyledExpanderBio = styled.div`
  color: white;
  font-family: sans-serif;
`;

const ContributeLink = styled.span`
  a {
    text-decoration: none;
    color: ${styling.redCode};
    transition: 0.3s;
  }
  &:hover .contribute {
    color: #a64245;
  }
`;

const PersonExpander = ({ name, handle, bio }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <StyledPersonExpander>
      <StyledExpanderHeader onClick={() => setIsExpanded(!isExpanded)}>
        <div className={isExpanded ? 'rotated' : ''} />
        <a
          className="name"
          style={{ textDecoration: 'none' }}
          href={`https://github.com/${handle}`}
          target="_blank" rel="noreferrer"
        >
          {name}
        </a>
      </StyledExpanderHeader>
      {isExpanded && <StyledExpanderBio>{bios[bio]}</StyledExpanderBio>}
    </StyledPersonExpander>
  );
};

const Team = ({ children }) => {
  return (
    <>
      <StyledWrapper>
        <StyledDiv>
          <StyledMain>
            {children}
            <StyledGrid className={styles.TeamContainer}>
              <PersonExpander
                name="Abaas Khorrami"
                handle="dubalol"
                // bio="abaas"
              />
              <PersonExpander name="Alex Gomez" handle="alexgomez9" />
              <PersonExpander
                name="Alexander Landeros"
                handle="AlexanderLanderos"
                // bio="alexander"
              />
              <PersonExpander
                name="Ali Rahman"
                handle="CourageWolf"
                // bio="ali"
              />
              <PersonExpander
                name="Andy Tsou"
                handle="andytsou19"
                // bio="andy"
              />
              <PersonExpander
                name="Andy Wong"
                handle="andywongdev"
                // bio="andy"
              />
              <PersonExpander
                name="Becca Viner"
                handle="rtviner"
                // bio="becca"
              />
              <PersonExpander
                name="Ben Michareune"
                handle="bmichare"
                // bio="andy"
              />
              <PersonExpander
                name="Bryan Lee"
                handle="mylee1995"
                // bio="bryan"
              />
              <PersonExpander
                name="Caitlin Chan"
                handle="caitlinchan23"
                // bio="caitlin"
              />
              <PersonExpander
                name="Caner Demir"
                handle="demircaner"
                // bio="caner"
              />
              <PersonExpander
                name="Carlos Perez"
                handle="crperezt"
                // bio="carlos"
              />
              <PersonExpander
                name="Chris Flannery"
                handle="chriswillsflannery"
                // bio="chris"
              />
              <PersonExpander
                name="Chris Guizzetti"
                handle="guizzettic"
                // bio="chrisG"
              />
              <PersonExpander
                name="Chris LeBrett"
                handle="fscgolden"
                // bio="chrisLebrett"
              />
              <PersonExpander
                name="Christina Or"
                handle="christinaor"
                // bio="chris"
              />
              <PersonExpander
                name="Cole Styron"
                handle="c-styr"
                // bio="cole"
              />
              <PersonExpander
                name="Daljit Gill"
                handle="dgill05"
                // bio="andy"
              />
              <PersonExpander
                name="Dane Corpion"
                handle="danecorpion"
                // bio="andy"
              />
              <PersonExpander
                name="David Bernstein"
                handle="dangitbobbeh"
                // bio="davidB"
              />
              <PersonExpander
                name="David Chai"
                handle="davidchai717"
                // bio="david"
              />
              <PersonExpander
                name="David Kim"
                handle="codejunkie7"
                // bio="davidKim"
              />
              <PersonExpander
                name="Dennis Lopez"
                handle="DennisLpz"
                // bio="dennis"
              />
              <PersonExpander name="Edar Liu" handle="liuedar" />
              <PersonExpander
                name="Edwin Menendez"
                handle="edwinjmenendez"
                // bio="edwin"
              />
              <PersonExpander
                name="Ergi Shehu"
                handle="Ergi516"
                // bio="ergi"
              />
              <PersonExpander
                name="Feiyi Wu"
                handle="FreyaWu"
                // bio="freya"
              />
              <PersonExpander
                name="Gabriela Aquino"
                handle="aquinojardim"
                // bio="gabriela"
              />
              <PersonExpander
                name="Greg Panciera"
                handle="gpanciera"
                // bio="greg"
              />
              <PersonExpander
                name="Haejin Jo"
                handle="haejinjo"
                // bio="haejin"
              />
              <PersonExpander
                name="Harry Fox"
                handle="StackOverFlowWhereArtThou"
                // bio="harry"
              />
              <PersonExpander
                name="Hien Nguyen"
                handle="hienqn"
                // bio="hien"
              />
              <PersonExpander
                name="Jack Crish"
                handle="JackC27"
                // bio="jack"
              />
              <PersonExpander
                name="Jason Victor"
                handle="Theqwertypusher"
                // bio="jason"
              />
              <PersonExpander
                name="Joshua Howard"
                handle="Joshua-Howard"
                // bio="joshua"
              />
              <PersonExpander
                name="Joseph Park"
                handle="joeepark"
                // bio="joeepark"
              />
              <PersonExpander
                name="Joseph Stern"
                handle="josephiswhere"
                // bio="joe"
              />
              <PersonExpander
                name="Josh Kim"
                handle="joshua0308"
                // bio="josh"
              />
              <PersonExpander
                name="Kevin Fey"
                handle="kevinfey"
                // bio="kevin"
              />
              <PersonExpander
                name="Kevin HoEun Lee"
                handle="khobread"
                // bio="KHL"
              />
              <PersonExpander
                name="Kevin Ngo"
                handle="kevin-ngo"
                // bio="kevinN"
              />
              <PersonExpander
                name="Khanh Bui"
                handle="AndyB909"
                // bio="khanh"
              />
              <PersonExpander
                name="Kim Mai Nguyen"
                handle="Nkmai"
                // bio="kim"
              />
              <PersonExpander
                name="Kris Sorensen"
                handle="kris-sorensen"
                // bio="andy"
              />
              <PersonExpander name="Kristina Wallen" handle="kristinawallen" />
              <PersonExpander
                name="Lina Shin"
                handle="rxlina"
                // bio="lina"
              />
              <PersonExpander
                name="Nate Wa Mwenze"
                handle="nmwenz90"
                // bio="nate"
              />
              <PersonExpander
                name="Nathan Richardson"
                handle="BagelEnthusiast"
                // bio="nathan"
              />
              <PersonExpander
                name="Ozair Ghulam"
                handle="OzairGh"
                // bio="Ozair"
              />
              <PersonExpander name="Peng Dong" handle="d28601581" />
              <PersonExpander
                name="Prasanna Malla"
                handle="prasmalla"
                // bio="pras"
              />
              <PersonExpander name="Quan Le" handle="blachfog" />
              <PersonExpander
                name="Rajeeb Banstola"
                handle="rajeebthegreat"
                // bio="rajeeb"
              />
              <PersonExpander
                name="Raymond Kwan"
                handle="rkwn"
                // bio="raymond"
              />
              <PersonExpander
                name="Robby Tipton"
                handle="RobbyTipton"
                // bio="robbyT"
              />
              <PersonExpander name="Robert Maeda" handle="robmaeda" />
              <PersonExpander
                name="Rocky Lin"
                handle="rocky9413"
                // bio="rocky"
              />
              <PersonExpander
                name="Ruth Anam"
                handle="peachiecodes"
                // bio="ruth"
              />
              <PersonExpander
                name="Ryan Dang"
                handle="rydang"
                // bio="ryan"
              />
              <PersonExpander
                name="Sanjay Lavingia"
                handle="sanjaylavingia"
                // bio="sanjay"
              />
              <PersonExpander
                name="Sierra Swaby"
                handle="starkspark"
                // bio="sierra"
              />
              <PersonExpander
                name="Tania Lind"
                handle="lind-tania"
                // bio="tania"
              />
              <PersonExpander
                name="Viet Nguyen"
                handle="vnguyen95"
                // bio="viet"
              />
              <PersonExpander
                name="Vincent Nguyen"
                handle="VNguyenCode"
                // bio="vincent"
              />
              <PersonExpander
                name="Yujin Kang"
                handle="yujinkay"
                // bio="yujin"
              />
            </StyledGrid>
          </StyledMain>
        </StyledDiv>
      </StyledWrapper>

      <p
        style={{
          fontFamily: 'Archivo',
          color: 'black',
          textAlign: 'center',
          marginBottom: '18px',
        }}
      >
        Interested in{' '}
        <ContributeLink>
          <a
            className="contribute"
            href="https://github.com/open-source-labs/reactime"
            target="_blank"
            rel="noopener noreferrer"
          >
            contributing
          </a>
        </ContributeLink>
        ? Reactime is an open-source product. Help make debugging React state
        easier!
      </p>
    </>
  );
};

Team.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Team;

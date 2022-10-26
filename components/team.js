/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { styles, StyledDiv, StyledWrapper, StyledGrid, StyledMain, PersonExpander, ContributeLink } from './team-styles';

const Layout = () => {
  return (
    <>
      <StyledWrapper>
        <StyledDiv>
          <StyledMain>
            <h2 style={{ color: styles.reactGreen }}>
                <strong>Contributors</strong>
            </h2>
            <StyledGrid className="TeamContainer">
              <PersonExpander 
                name="Abaas Khorrami"
                handle="dubalol"
                // bio="abaas"
              />
              <PersonExpander
                name="Alex Gomez"
                handle="alexgomez9"
              />
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
                name="Brian Yang"
                handle="yangbrian310"
                // bio="byang"
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
              <PersonExpander
                name="Edar Liu"
                handle="liuedar"
              />
              <PersonExpander
                name="Edwin Menendez"
                handle="edwinjmenendez"
                // bio="edwin"
              />
              <PersonExpander
                name="Emin Tahirov"
                handle="eminthrv"
                // bio="emin"
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
              <PersonExpander
                name="Kristina Wallen"
                handle="kristinawallen"
              />
              <PersonExpander
                name="Lina Shin"
                handle="rxlina"
                // bio="lina"
              />
              <PersonExpander
                name="Louis Lam"
                handle="llam722"
                // bio="llam"
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
              <PersonExpander
                name="Peng Dong"
                handle="d28601581"
              />
              <PersonExpander
                name="Prasanna Malla"
                handle="prasmalla"
                // bio="pras"
              />
              <PersonExpander
                name="Quan Le"
                handle="blachfog"
              />
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
              <PersonExpander
                name="Robert Maeda"
                handle="robmaeda"
              />
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
                name="Samuel Tran"
                handle="LeumasTr"
                // bio="samtran"
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
          marginBottom: '18px'
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
          ? Reactime is an open-source product. Help make debugging React state easier!
        </p>
    </>
  )
}

export default Layout

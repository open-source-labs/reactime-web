/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import '../styles/DescriptionContainer.module.css';
import performant from '../images/icons8-performance-64.png';
import structure from '../images/icons8-structure-64.png';
import easy from '../images/icons8-easy-return-64.png';

const DescriptionContainer = () => {

  return (
    <>
      <div id="home-features">
        <div id="feature-1">
          <img className="first-icon" src={performant}/>
          <h2>
            <strong>Incredibly Performant</strong>
          </h2>
          <span className="span-1">Reactime lives within the Chrome extension environment, allowing it to utilize Chrome's V8 engine to analyze React applications seamlessly.</span>
        </div>
        <div id="feature-1">
        <img className="second-icon" src={structure}/>
          <h2>
            <strong>Structured with Intention</strong>
          </h2>
          <span className="span-2">Reactime was built with structure in mind, every feature is laid out clearly for developers to find and use.</span>
        </div>
        <div id="feature-1">
        <img className="third-icon" src={easy}/>
          <h2>
            <strong>Intuitive Features</strong>
          </h2>
          <span className="span-3">Created with developers in mind, Reactime has a wide set of features that gives React developers more insight on what is happening within their application.</span>
        </div>
      </div>
    </>
  )
};

export default DescriptionContainer;
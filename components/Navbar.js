//@ts-ignore
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mantine/core';
import { AiOutlineStar } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChrome,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
// import styles from '../styles/';

const Navbar = ({ scrollYProgress }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [stars, setStars] = useState(undefined);

  useEffect(() => {
    fetch('https://api.github.com/repos/open-source-labs/reactime')
      .then((data) => data.json())
      .then((data) => setStars(data.stargazers_count));
  }, []);

  useEffect(
    () => scrollYProgress.onChange((v) => setIsStarted(v > 0)),
    [scrollYProgress]
  );
  return (
    <nav>
      <div className="logo"></div>
      <a href="https://www.linkedin.com/company/reactime/">LinkedIn</a>
      <a href="https://chrome.google.com/webstore/detail/reactime/cgibknllccemdnfhfpmjhffpjfeidjga?hl=en-US">
        Chrome
      </a>
      <a href="https://github.com/open-source-labs/reactime">Github</a>
    </nav>
  );
};

export default Navbar;

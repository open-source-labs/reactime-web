//@ts-ignore
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
import { Button } from "@mantine/core";
import { AiOutlineStar } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const NavBar = ({ scrollYProgress }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [stars, setStars] = useState(undefined);

  useEffect(() => {
    fetch("https://api.github.com/repos/open-source-labs/reactime")
      .then((data) => data.json())
      .then((data) => setStars(data.stargazers_count));
  }, []);

  useEffect(
    () => scrollYProgress.onChange((v) => setIsStarted(v > 0)),
    [scrollYProgress]
  );
  return (
      <motion.div
        className="navBarContainer"
        animate={{
          boxShadow: isStarted
            ? "0 0 20px rgba(0, 0, 0, 0.242)"
            : "0 0 20px rgba(0, 0, 0, 0)",
        }}
      >
        <a className="navBarLeft">
            <p className="name" textDecoration="none">REACTIME</p>
        </a>

        <div className="navbarDisplay">
        <div class="dropdown">
          <Button variant='outline' className="navBarIconList">Links</Button>
          <div class="dropdown-content">
          <a
            href="https://linkedin.com/company/reactime"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant='outline' className="navBarIconSmall">
              LinkedIn
                <div>
                  <FontAwesomeIcon style={{ paddingLeft: '5px' }} icon={faLinkedin} />
                </div>
            </Button>
          </a>
          <a
            href='https://chrome.google.com/webstore/detail/reactime/cgibknllccemdnfhfpmjhffpjfeidjga?hl=en-US'
            target='_blank'
            rel='noreferrer'
          >
            <Button variant='outline' className="navBarIconSmall">
              Chrome
                <div>
                  <FontAwesomeIcon style={{ paddingLeft: '5px' }} icon={faChrome} />
                </div>
            </Button>
          </a>
          <a
            href='https://github.com/open-source-labs/reactime'
            target='_blank'
            rel='noreferrer'
          >
            <Button variant='outline' className="navBarIconSmall">
              GitHub
              {stars && (
                <div>
                  <AiOutlineStar /> {stars}
                </div>
              )}
            </Button>
          </a>
          </div>
        </div>
        <div className="navBarRight">
          <a
            href="https://linkedin.com/company/reactime"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant='outline' className="navBarIcon">
              LinkedIn
                <div>
                  <FontAwesomeIcon style={{ paddingLeft: '5px' }} icon={faLinkedin} />
                </div>
            </Button>
          </a>
          <a
            href='https://chrome.google.com/webstore/detail/reactime/cgibknllccemdnfhfpmjhffpjfeidjga?hl=en-US'
            target='_blank'
            rel='noreferrer'
          >
            <Button variant='outline' className="navBarIcon">
              Chrome
                <div>
                  <FontAwesomeIcon style={{ paddingLeft: '5px' }} icon={faChrome} />
                </div>
            </Button>
          </a>
          <a
            href='https://github.com/open-source-labs/reactime'
            target='_blank'
            rel='noreferrer'
          >
            <Button variant='outline' className="navBarIcon">
              GitHub
              {stars && (
                <div>
                  <AiOutlineStar /> {stars}
                </div>
              )}
            </Button>
          </a>
        </div>
      </div> 
      </motion.div>
  );
};

export default NavBar;
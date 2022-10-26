// @ts-ignore
import React, { Children, useState } from "react";
import { Browser } from "react-window-ui";
import Typewriter from "typewriter-effect";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { motion } from "framer-motion";
import { Popover, Text } from "@mantine/core";

const TerminalWindow = ({ command, children }) => {
  const [termHover, setTermHover] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div className="installationContainer">
      <Browser
        background="lightgray"
        className="terminalContainer"
        onMouseOver={(_) => setTermHover(true)}
        onMouseLeave={(_) => setTermHover(false)}
      >
        <pre>
          <code>
            <Typewriter
              className="typewriter"
              options={{
                deleteSpeed: 30,
                delay: 50, // typing speed: time between each key stroke
                strings: command,
                autoStart: true,
                loop: true,
              }}
            />
          </code>
        </pre>
        <motion.div
          className="copy"
          animate={{ opacity: termHover ? 1 : 0 }}
          onClick={() => {
            setCopied(true);
            setTimeout((_) => setCopied(false), 1200);
            navigator.clipboard.writeText(command);
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Popover
            opened={copied}
            onClose={() => setCopied(false)}
            target={<HiOutlineClipboardCopy size={30} />}
            position='right'
            placement="center"
            transition="fade"
            trapFocus={false}
            withArrow
            spacing="md"
          >
            <div style={{ display: "flex" }}>
              <Text size='md'>Copied!</Text>
            </div>
          </Popover>
        </motion.div>
      </Browser>
      {children}
    </div>
  );
};

export default TerminalWindow;
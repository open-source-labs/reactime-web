import React, { useState } from 'react';
import StateSnapShotGIF from '../public/new-reactime.gif';
import HistoryTree from '../public/history-tree.gif';
import ActionComparison from '../public/action-comparison.gif';
import { motion } from 'framer-motion';
import styles from '../styles/GifFeatures.module.css';
import Image from 'next/image';

const GifFeatures = () => {
  const [section, setSection] = useState(0);

  const sectionComponents = sections.map(({ title, description }, i) => (
    <motion.div
      key={i}
      onClick={(_) => setSection(i)}
      className={styles.section}
      initial={{ backgroundColor: '#ffffff' }}
      animate={{ backgroundColor: section === i ? '#EBEBEB' : '#ffffff' }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  ));

  const imageComponents = sections.map(({ gif }, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: section === i ? 1 : 0, x: section === i ? 0 : 200 }}
      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
    >
      {section === i && (
        <Image
          className={styles.image}
          src={gif}
          width={1000} // Size specific to match sizes of GIFs uploaded
          height={500} // Size specific to match sizes of GIFs uploaded
          layout="intrinsic"
          alt=""
        />
      )}
    </motion.div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>{imageComponents}</div>
      <div className={styles.sectionContainer}>{sectionComponents}</div>
    </div>
  );
};

const sections = [
  {
    title: 'State SnapShot Display',
    description:
      'See your application state in a stylized and intereactive format, for clear concise state management.',
    gif: StateSnapShotGIF,
  },
  {
    title: 'Time Travel Rendering',
    description:
      'Simulate any state change from your DOM history, with a simple click of a button.',
    gif: HistoryTree,
  },
  {
    title: 'Action Comparison & Snapshot Series',
    description:
      'Save a series of state snapshots and use it to analyze changes in component render performance between current and previous series of snapshots.',
    gif: ActionComparison,
  },
];

export default GifFeatures;

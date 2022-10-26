import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import TerminalWindow from '../components/TerminalWindow';
import GifFeatures from '../components/GifFeatures';
import Features from '../components/Features';

export default function Home() {
  return (
    <>
      <Head>
        <title> Reactime | Home </title>
        <meta name="keywords" content="reactime" />
      </Head>
      <div>
        <h1 className={styles.title}>
          State Management and Time Travel Debugging
        </h1>
        <p className={styles.text}>
          Reactime is an open source Chrome developer tool for time travel
          debugging and performance monitoring in React applications. Reactime
          enables developers to record snapshots of application state, jump
          between and inspect state snapshots, and monitor performance metrics
          such as component render time and render frequency.
        </p>
        <br></br>
        <div className={styles.terminalWindow}>
          <TerminalWindow
            command={[
              'git clone https://github.com/open-source-labs/reactime.git',
              'cd reactime',
              'npm install --force',
              'npm run build',
            ]}
          >
            <div>
              <h3 className={styles.terminalText}>
                Get started easily with npm and instantly start state debugging
                now!
                <br />
                <br />
                1. Clone repo from Reactime GitHub
                <br />
                2. Install dependencies inside repository
                <br />
                3. Start Reactime's dev environment - npm run dev
                <br />
                4. Install react-dev-tools and Reactime chrome extensions
              </h3>
            </div>
          </TerminalWindow>
        </div>
        <GifFeatures />
        <Features>
          <h2 style={styles.reactGreen}>
            <strong>Additional Features</strong>
          </h2>
        </Features>

        {/* <Team>
          <h2 style={{ color: styles.reactGreen }}>
            <strong>Contributors</strong>
          </h2>
        </Team> */}
        <Link href={'/info'}>
          <a className={styles.btn}>See info</a>
        </Link>
      </div>
    </>
  );
}

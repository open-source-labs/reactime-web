import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title> Reactime | Home </title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>lorem</p>
        <Link href={'/info'}>
          <a className={styles.btn}>See info</a>
        </Link>
      </div>
    </>
  );
}

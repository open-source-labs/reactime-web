import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>lorem</p>
      <Link href={'/info'}>
        <a>See info</a>
      </Link>
      <Footer />
    </div>
  );
}

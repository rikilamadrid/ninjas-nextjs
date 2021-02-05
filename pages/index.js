import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quaerat, alias exercitationem, maxime distinctio voluptates reprehenderit nemo aut corporis commodi id nam dolorum quod vero iste ducimus eos animi molestiae?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quaerat, alias exercitationem, maxime distinctio voluptates reprehenderit nemo aut corporis commodi id nam dolorum quod vero iste ducimus eos animi molestiae?</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
};

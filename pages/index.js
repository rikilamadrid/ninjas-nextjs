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
        <link rel="icon" href="/ninja-favicon.png" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>The diverse range of skills practiced by the ninja is called ninjutsu - the art of stealth - and includes training in armed combat, weapon techniques, military strategy, meteorology, geometry and breathing synthesis. Ninjutsu was passed down through generations within families or directly from teacher to a selected one or few disciples. This secrecy in part explains why little factual information exists about the ninja, giving rise to lots of stereotyping of them both within and outside of Japan.</p>
        <p className={styles.text}>As early as the 11th century, the inhabitants of Iga and Koka gained a reputation for their skills in unconventional warfare. Close to the political center Kyoto, yet distinctly remote due to their rugged terrains, Iga and Koka presented an ideal hideout location for refugees, bandits and losing parties of battles. Many ninja families lived here within autonomously governed communities, developing their martial skills for self defense.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
};

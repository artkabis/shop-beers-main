import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.containerHomePage}>
        <h1 className={styles.titleH1}>Punk beer</h1>
        <p>
          Nous offrons un large choix de bières, choisissez celle qui vous fera
          vibrer !!!
        </p>
        <br />
        <br />
        <h2>Découvrez nos bières : </h2>
        <p>
          Nous invitons à découvrir nos produits, pour cela, rendez-vous dans
          notre{' '}
          <Link href="/shop" className={styles.blueLink}>
            SHOP
          </Link>
        </p>
      </div>
    </div>
  );
}

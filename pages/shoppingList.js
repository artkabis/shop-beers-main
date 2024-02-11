import Navbar from '../components/Navbar';

import styles from '../styles/Home.module.css';
import ProductDisplay from '../components/ProductDisplay';

function shoppingList() {
  return (
    <div className={styles.container}>
      <Navbar />
      <ProductDisplay />
    </div>
  );
}

export default shoppingList;

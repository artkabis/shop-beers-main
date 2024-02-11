import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

function Panier() {
  const [productLength, setProductLength] = useState(0);

  useEffect(() => {
    let nb = 0;
    if (localStorage.getItem('product')) {
      nb = JSON.parse(localStorage.getItem('product')).length;
    } else {
      nb = 0;
    }
    setProductLength(nb);
  }, []);
  return (
    <div className={styles.containerPanier}>
      <div className={styles.containerImg}>
        <div className={styles.panier}>
          {' '}
          <Link href='/shoppingList' id="cart" legacyBehavior><span>{productLength}<em> Article{productLength>1 ?"(s)" : ""}</em></span></Link>
        </div>
      </div>
    </div>
  );
}

export default Panier;

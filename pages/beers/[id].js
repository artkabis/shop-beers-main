import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { useState, useEffect } from 'react';

const Counter = ({ ...params }) => {
  const [count, setCount] = useState(0);
  let counter = count < 1 ? 0 : count - 1;
  console.log(counter, params.name);
  let cmp = 0;
  useEffect(() => {
    function addItem($id, $name, $qty, $img) {
      var oldItems = JSON.parse(localStorage.getItem('product')) || [];
      var newItem = {
        id: $id,
        produit: $name,
        quantite: $qty,
        image: $img,
      };
      //oldItems.push(newItem);

      const idToUse = params.id;
      const existingItem = oldItems.find(({ id }) => id === idToUse);

      if (existingItem) {
        Object.assign(existingItem, {
          quantite: $qty,
        });
      } else {
        newItem = {
          id: idToUse,
          produit: $name,
          quantite: $qty,
          image: $img,
        };
        oldItems.push(newItem);
      }
      localStorage.setItem('product', JSON.stringify(oldItems));
    }
    addItem(params.id, params.name, count, params.image_url);

    // window.localStorage.setItem(
    //   'product',
    //   'name : ' + params.name + ', quantity : ' + count + ' , image : ',
    //   params.image_url
    // );
  }, [params.id, params.name, count, params.image_url]);

  return (
    <div className={styles.containerAddToCart}>
      <button
        className={styles.buttonCounter}
        onClick={() => setCount(counter)}
      >
        -
      </button>
      <div className={styles.counter}>{count}</div>
      <button
        className={styles.buttonCounter}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};
function Post({ post }) {
  const beer = post[0];
  console.log('beer.id >> ', beer.id);
  return <>
    <main className={styles.main}>
      <h1 className={styles.titleH1}>{beer.name}</h1>
      <Counter name={beer.name} id={beer.id} image={beer.image_url} />
      <Link href={`/shoppingList`} className={styles.addToShoppingList}>
        ma shopping list
      </Link>
      <div className={styles.containerDescBeer}>
        <p className={styles.description}>
          {'Caractéristiques de cette bière :' + beer.description}
        </p>
        <div className={styles.containerBigImg}>
          <Image
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 120px, 200px"
            layout="fill"
            objectFit="contain"
            src={beer.image_url}
            alt="Picture of the author"
          />
        </div>
      </div>
      <Link href="/shop">
        Revenir vers le shop
      </Link>
    </main>
  </>;
}
export async function getStaticPaths() {
  const res = await fetch('https://api.punkapi.com/v2/beers');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  console.log('id product >> ', params.id);

  const res = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`);
  const post = await res.json();
  return { props: { post } };
}

export default Post;

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

const ImageStyles ={objectFit: "contain"}
function shop({ posts }) {
  posts.map((post) =>
    console.log(post.id, ' : ', post.name, ' : ', post.image_url)
  );
  return <>
    <Navbar />
    <h1 className={styles.titleH1}>Accèdez à nos excellentes bières</h1>
    <ul className={styles.containerShop}>
      {posts.map((post) => (
        <li className={styles.productShop} key={post.id}>
        <Link href={`/beers/${post.id}`}>
            <h3 className={styles.titleH3}>
              {post.id} - {post.name}
            </h3>
            <div className={styles.containerImg}>
              <Image
                sizes="(max-width: 500px) 60px, (max-width: 1023px) 40px, 80px"
                style={ImageStyles}
                src={post.image_url}
                alt="Picture of the author"
                width={150}
                height={150}
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </>;
}

export default shop;

export async function getStaticProps() {
  const posts = await fetch('https://api.punkapi.com/v2/beers').then((r) =>
    r.json()
  );
  //console.log('statics props shop : ', posts);
  return {
    props: {
      posts,
    },
  };
}

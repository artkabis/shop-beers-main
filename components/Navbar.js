import Link from 'next/link';
import Panier from './Panier';
const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">
        Artkabis
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="link">
            {' '}
            <Link href={'/'}>
              Accueil
            </Link>
          </li>
          <li className="link">
            {' '}
            <Link href={'/shop'}>
              Nos bières
            </Link>
          </li>
          <li className="link">
            {' '}
            <Link href={'/shoppingList'}>
              Ma shopping list
            </Link>
          </li>
        </ul>
        <Panier />
      </div>
    </div>
  </nav>
);
export default Navbar;

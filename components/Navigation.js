import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import { MdMenu, MdPlace } from 'react-icons/md';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <Navbar expand="lg" bg="dark">
      <Link href="/" passHref>
        <Navbar.Brand className={styles.title} href="/">
          <MdPlace className="mb-1" /> Ontario Snowy Tracker
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle className={styles.menubutton}>
        <MdMenu />
      </Navbar.Toggle>
      <Navbar.Collapse className="justify-content-end">
        <Link href="/map" passHref>
          <Navbar.Brand className={styles.menuitem} href="/map">
            Map
          </Navbar.Brand>
        </Link>

        <Link href="/data" passHref>
          <Navbar.Brand className={styles.menuitem} href="/data">
            Data
          </Navbar.Brand>
        </Link>

        <Link href="/about" passHref>
          <Navbar.Brand className={styles.menuitem} href="/about">
            About
          </Navbar.Brand>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

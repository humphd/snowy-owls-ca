import PropTypes from 'prop-types';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import { MdMenu } from 'react-icons/md';
import LogoLink from './LogoLink';

import styles from './Navigation.module.css';

export default function Navigation({ title }) {
  return (
    <Navbar expand="lg" bg="dark">
      <Link href="/" passHref>
        <Navbar.Brand className={styles.title} href="/">
          <LogoLink title={title} />
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

Navigation.propTypes = {
  title: PropTypes.string,
};

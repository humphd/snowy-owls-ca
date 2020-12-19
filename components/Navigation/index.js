import PropTypes from 'prop-types';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { MdMenu } from 'react-icons/md';
import LogoLink from './LogoLink';
import useRegion from '../../src/hooks/use-region';

import styles from './Navigation.module.css';

export default function Navigation({ title, includeRegion, scrollToTop }) {
  const { regionCode } = useRegion();

  return (
    <Navbar expand="lg" bg="dark" fixed="top">
      <Navbar.Brand className={styles.title}>
        <LogoLink
          includeRegion={includeRegion}
          includeBackButton={!!title}
          scrollToTop={scrollToTop}
        />
      </Navbar.Brand>

      <Navbar.Toggle className={styles.menubutton}>
        <MdMenu />
      </Navbar.Toggle>

      <Navbar.Collapse className="justify-content-end">
        <Link href={`/?region=${regionCode}`} passHref scroll={false}>
          <Nav.Link className={styles.menuitem}>Home</Nav.Link>
        </Link>

        <Link href={`/map?region=${regionCode}`} passHref>
          <Nav.Link className={styles.menuitem}>Map</Nav.Link>
        </Link>

        <Link href={`/data?region=${regionCode}`} passHref>
          <Nav.Link className={styles.menuitem}>Data</Nav.Link>
        </Link>

        <Link href={`/about?region=${regionCode}`} passHref scroll={false}>
          <Nav.Link className={styles.menuitem}>About</Nav.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

Navigation.propTypes = {
  title: PropTypes.string,
  includeRegion: PropTypes.bool,
  scrollToTop: PropTypes.bool,
};

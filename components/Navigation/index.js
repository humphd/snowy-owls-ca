import PropTypes from 'prop-types';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import { MdMenu } from 'react-icons/md';
import LogoLink from './LogoLink';
import RegionList from './RegionList';
import useRegion from '../../src/hooks/use-region';

import styles from './Navigation.module.css';

export default function Navigation({ title, includeRegion }) {
  const { regionCode } = useRegion();

  return (
    <Navbar expand="lg" bg="dark">
      <Link href="/" passHref>
        <Navbar.Brand className={styles.title} href="/">
          <LogoLink title={title} />
        </Navbar.Brand>
      </Link>

      {includeRegion ? <RegionList /> : null}

      <Navbar.Toggle className={styles.menubutton}>
        <MdMenu />
      </Navbar.Toggle>

      <Navbar.Collapse className="justify-content-end">
        <Link href={`/map?region=${regionCode}`} passHref>
          <Navbar.Brand className={styles.menuitem}>Map</Navbar.Brand>
        </Link>

        <Link href={`/data?region=${regionCode}`} passHref>
          <Navbar.Brand className={styles.menuitem}>Data</Navbar.Brand>
        </Link>

        <Link href="/about" passHref>
          <Navbar.Brand className={styles.menuitem}>About</Navbar.Brand>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

Navigation.propTypes = {
  title: PropTypes.string,
  includeRegion: PropTypes.bool,
};

import Link from 'next/link';
import PropTypes from 'prop-types';
import { MdChevronLeft } from 'react-icons/md';
import { siteTitle } from '../Layout';
import Logo from './Logo';
import RegionList from './RegionList';

import styles from './Navigation.module.css';

export default function LogoLink({ includeRegion, includeBackButton }) {
  if (includeBackButton) {
    return (
      <span>
        <Link href="/" scroll={false}>
          <a className={styles.logo}>
            <MdChevronLeft className="mb-1" />
            <Logo />
          </a>
        </Link>
        {includeRegion ? <RegionList /> : null}
      </span>
    );
  }

  return (
    <span>
      <Link href="/" scroll={false}>
        <a className={styles.logo}>
          <Logo />
          <span className="ml-2">{siteTitle}</span>
        </a>
      </Link>
    </span>
  );
}

LogoLink.propTypes = {
  includeBackButton: PropTypes.bool,
  includeRegion: PropTypes.bool,
};

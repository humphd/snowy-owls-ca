import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useRegion from '../../src/hooks/use-region';

import styles from './RegionList.module.css';

export default function RegionList() {
  const { regionCode } = useRegion();

  return (
    <NavDropdown title={regionCode} className={styles.dropdown}>
      <Link href="?region=CA" passHref legacyBehavior>
        <NavDropdown.Item active={regionCode === 'CA'}>Canada</NavDropdown.Item>
      </Link>
      <NavDropdown.Divider />
      <Link href="?region=CA-AB" passHref legacyBehavior>
        <NavDropdown.Item active={regionCode === 'CA-AB'}>Alberta</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-BC" passHref legacyBehavior>
        <NavDropdown.Item active={regionCode === 'CA-BC'}>British Columbia</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-MB" passHref legacyBehavior>
        <NavDropdown.Item active={regionCode === 'CA-MB'}>Manitoba</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-NB" passHref legacyBehavior>
        <NavDropdown.Item active={regionCode === 'CA-NB'}>New Brunswick</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-NL" passHref legacyBehavior>
        <NavDropdown.Item active={regionCode === 'CA-NL'}>Newfoundland and Labrador</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-NS" passHref legacyBehavior>
        <NavDropdown.Item active={regionCode === 'CA-NS'}>Nova Scotia</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-NU" passHref legacyBehavior>
        <NavDropdown.Item active={regionCode === 'CA-NU'}>Nunavut</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-ON" passHref legacyBehavior>
        <NavDropdown.Item active={regionCode === 'CA-ON'}>Ontario</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-PE" passHref legacyBehavior>
        <NavDropdown.Item active={regionCode === 'CA-PE'}>Prince Edward Island</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-QC" passHref legacyBehavior>
        <NavDropdown.Item active={regionCode === 'CA-QC'}>Québec</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-SK" passHref legacyBehavior>
        <NavDropdown.Item active={regionCode === 'CA-SK'}>Saskatchewan</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-YT" passHref legacyBehavior>
        <NavDropdown.Item active={regionCode === 'CA-YT'}>Yukon</NavDropdown.Item>
      </Link>
    </NavDropdown>
  );
}

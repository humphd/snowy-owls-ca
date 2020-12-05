import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useRegion from '../../src/hooks/use-region';

import styles from './RegionList.module.css';

export default function RegionList() {
  const { regionCode } = useRegion();

  return (
    <NavDropdown title={regionCode} className={styles.dropdown}>
      <Link href="?region=CA" passHref active={regionCode === 'CA'}>
        <NavDropdown.Item>Canada</NavDropdown.Item>
      </Link>
      <NavDropdown.Divider />
      <Link href="?region=CA-AB" passHref active={regionCode === 'CA-AB'}>
        <NavDropdown.Item>Alberta</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-BC" passHref active={regionCode === 'CA-BC'}>
        <NavDropdown.Item>British Columbia</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-MB" passHref active={regionCode === 'CA-MB'}>
        <NavDropdown.Item>Manitoba</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-NB" passHref active={regionCode === 'CA-NB'}>
        <NavDropdown.Item>New Brunswick</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-NL" passHref active={regionCode === 'CA-NL'}>
        <NavDropdown.Item>Newfoundland and Labrador</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-NS" passHref active={regionCode === 'CA-NS'}>
        <NavDropdown.Item>Nova Scotia</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-NU" passHref active={regionCode === 'CA-NU'}>
        <NavDropdown.Item>Nunavut</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-ON" passHref active={regionCode === 'CA-ON'}>
        <NavDropdown.Item>Ontario</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-PE" passHref active={regionCode === 'CA-PE'}>
        <NavDropdown.Item>Prince Edward Island</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-QC" passHref active={regionCode === 'CA-QC'}>
        <NavDropdown.Item>Québec</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-SK" passHref active={regionCode === 'CA-SK'}>
        <NavDropdown.Item>Saskatchewan</NavDropdown.Item>
      </Link>
      <Link href="?region=CA-YT" passHref active={regionCode === 'CA-YT'}>
        <NavDropdown.Item>Yukon</NavDropdown.Item>
      </Link>
    </NavDropdown>
  );
}

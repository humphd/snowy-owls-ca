import PropTypes from 'prop-types';
import { MdChevronLeft } from 'react-icons/md';
import { siteTitle } from '../Layout';
import Logo from './Logo';
import RegionList from './RegionList';

export default function LogoLink({ includeRegion, includeBackButton }) {
  if (includeBackButton) {
    return (
      <span>
        <MdChevronLeft className="mb-1" />
        <Logo />
        {includeRegion ? <RegionList /> : null}
      </span>
    );
  }

  return (
    <span>
      <Logo />
      <span className="ml-2">{siteTitle}</span>
    </span>
  );
}

LogoLink.propTypes = {
  includeBackButton: PropTypes.bool,
  includeRegion: PropTypes.bool,
};

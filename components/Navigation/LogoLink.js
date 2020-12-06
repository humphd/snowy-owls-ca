import PropTypes from 'prop-types';
import { MdChevronLeft } from 'react-icons/md';
import { siteTitle } from '../Layout';
import Logo from './Logo';

export default function LogoLink({ title }) {
  if (title) {
    return (
      <span>
        <MdChevronLeft className="mb-1" />
        <Logo />
        <span className="ml-2">{title}</span>
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
  title: PropTypes.string,
};

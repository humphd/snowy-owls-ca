import PropTypes from 'prop-types';
import { MdChevronLeft } from 'react-icons/md';
import { siteTitle } from '../Layout';

export default function LogoLink({ title }) {
  if (title) {
    return (
      <span>
        <MdChevronLeft className="mb-1" />
        {title}
      </span>
    );
  }

  return <span>{siteTitle}</span>;
}

LogoLink.propTypes = {
  title: PropTypes.string,
};

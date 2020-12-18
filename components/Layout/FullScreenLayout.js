import PropTypes from 'prop-types';
import CommonLayout from './CommonLayout';

import styles from './FullScreenLayout.module.css';

export default function FullScreenLayout({ children, title, includeRegion }) {
  return (
    <CommonLayout styles={styles} title={title} includeRegion={includeRegion}>
      {children}
    </CommonLayout>
  );
}

FullScreenLayout.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
  includeRegion: PropTypes.bool,
};

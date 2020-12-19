import PropTypes from 'prop-types';
import CommonLayout from './CommonLayout';
import { useRouter } from 'next/router';
import useScrollRestoration from '../../src/hooks/use-scroll-restoration';

import styles from './ScrollableLayout.module.css';

export default function ScrollableLayout({ children, title, includeRegion, scrollToTop }) {
  const router = useRouter();
  useScrollRestoration(router);

  return (
    <CommonLayout
      styles={styles}
      title={title}
      includeRegion={includeRegion}
      scrollToTop={scrollToTop}
    >
      {children}
    </CommonLayout>
  );
}

ScrollableLayout.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
  includeRegion: PropTypes.bool,
  scrollToTop: PropTypes.bool,
};

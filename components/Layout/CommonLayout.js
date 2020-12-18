import PropTypes from 'prop-types';
import SEO from './SEO';
import Navigation from '../../components/Navigation';

export default function CommonLayout({ styles, children, title, includeRegion }) {
  return (
    <section className={styles.layout}>
      <SEO />
      <Navigation title={title} includeRegion={includeRegion}></Navigation>
      <main className={styles.main}>{children}</main>
    </section>
  );
}

CommonLayout.propTypes = {
  styles: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  title: PropTypes.string,
  includeRegion: PropTypes.bool,
};

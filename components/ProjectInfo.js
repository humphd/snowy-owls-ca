import Container from 'react-bootstrap/Container';
import LazyImage from './LazyImage';

import styles from './ProjectInfo.module.css';

export default function Essay() {
  return (
    <>
      <Container className={styles.essay}>
        <LazyImage
          imgDir="/owls/gm_pentaxfan/post"
          caption="Snowy Owl, South of Wood Mountain Saskatchewan"
          author="gm_pentaxfan"
          authorUrl="https://www.flickr.com/photos/gm_pentaxfan/6903180051/"
        />

        <h1>
          About <a href="/">SnowyOwls.ca</a>
        </h1>

        <p>
          This project is{' '}
          <a
            href="https://github.com/humphd/snowy-owls-ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            open source
          </a>
          , and you&apos;re welcome to help me improve it on GitHub. Thanks to{' '}
          <a href="https://begin.com" target="_blank" rel="noopener noreferrer">
            Begin.com
          </a>{' '}
          for generously hosting it on AWS infrastructure, to{' '}
          <a href="https://ebird.org" target="_blank" rel="noopener noreferrer">
            eBird
          </a>{' '}
          for the use of their{' '}
          <a
            href="https://documenter.getpostman.com/view/664302/S1ENwy59?version=latest"
            target="_blank"
            rel="noopener noreferrer"
          >
            API and data
          </a>
          , and to{' '}
          <a href="https://www.openstreetmap.org" target="_blank" rel="noopener noreferrer">
            OpenStreetMap
          </a>{' '}
          and{' '}
          <a href="https://carto.com/" target="_blank" rel="noopener noreferrer">
            CARTO
          </a>{' '}
          for the map resources and tiles.
        </p>

        <p>
          Also a big thank-you to all the photographers listed below for their beautiful, open
          licensed owl photography:
        </p>

        <ul>
          <li>
            <a
              href="https://unsplash.com/@tsteitle?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
            >
              Todd Steitle
            </a>
          </li>
          <li>
            <a
              href="https://unsplash.com/@baitman?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dennis Buchner
            </a>
          </li>
          <li>
            <a
              href="https://www.flickr.com/photos/15609463@N03/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jamie McCaffrey
            </a>
          </li>
          <li>
            <a
              href="https://www.flickr.com/photos/68069539@N07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Silver Leapers
            </a>
          </li>
          <li>
            <a
              href="https://www.flickr.com/photos/gm_pentaxfan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              gm_pentaxfan
            </a>
          </li>
        </ul>

        <p>
          If you do find a Snowy Owl using my tool, let me know (
          <a href="https://twitter.com/humphd" target="_blank" rel="noopener noreferrer">
            @humphd
          </a>
          ) so I can share in your fun!
        </p>
      </Container>
    </>
  );
}

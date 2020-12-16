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
          About <a href="https://www.snowyowls.ca/">SnowyOwls.ca</a>
        </h1>

        <p>
          This project is <a href="https://github.com/humphd/snowy-owls-ca">open source</a>, and
          you&apos;re welcome to help me improve it on GitHub. Thanks to{' '}
          <a href="https://begin.com">Begin.com</a> for generously hosting it on AWS infrastructure,
          and to <a href="https://ebird.org">eBird</a> for the use of their{' '}
          <a href="https://documenter.getpostman.com/view/664302/S1ENwy59?version=latest">
            API and data
          </a>
          .
        </p>

        <p>
          Thank you as well to the individuals listed below for their beautiful, open licensed owl
          photography:
        </p>

        <ul>
          <li>
            <a href="https://unsplash.com/@tsteitle?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Todd Steitle
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/@baitman?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Dennis Buchner
            </a>
          </li>
          <li>
            <a href="https://www.flickr.com/photos/15609463@N03/">Jamie McCaffrey</a>
          </li>
          <li>
            <a href="https://www.flickr.com/photos/68069539@N07/">Silver Leapers</a>
          </li>
          <li>
            <a href="https://www.flickr.com/photos/gm_pentaxfan/">gm_pentaxfan</a>
          </li>
        </ul>

        <p>
          If you do find a Snowy Owl using my tool, let me know (
          <a href="https://twitter.com/humphd">@humphd</a>) so I can share in your fun!
        </p>
      </Container>
    </>
  );
}

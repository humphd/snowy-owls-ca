import Container from 'react-bootstrap/Container';

import styles from './ProjectInfo.module.css';

export default function Essay() {
  return (
    <>
      <Container className={styles.essay}>
        <h1>
          About <a href="https://www.snowyowls.ca/">SnowyOwls.ca</a>
        </h1>

        <h2>Technical</h2>

        <p>
          The app is <a href="https://github.com/humphd/snowy-owls-ca">open source on GitHub</a>,
          and you&apos;re welcome to help me improve it. Thanks to{' '}
          <a href="https://begin.com">Begin.com</a> for their generousity hosting it on AWS
          infrastructure, and to <a href="https://ebird.org">eBird</a> for use of their{' '}
          <a href="https://documenter.getpostman.com/view/664302/S1ENwy59?version=latest">
            amazing API
          </a>
          .
        </p>

        <h2>Photo Credits</h2>

        <p>
          Thank you to all those individuals listed below for their open licensed, beautiful owl
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
        </ul>

        <h2>Get in Touch</h2>

        <p>
          If you do find a Snowy Owl using my tool, let me know (
          <a href="https://twitter.com/humphd">@humphd</a>) so I can share in your fun!
        </p>
      </Container>
    </>
  );
}

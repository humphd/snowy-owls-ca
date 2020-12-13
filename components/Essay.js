import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import YouTubeVideo from './YouTubeVideo';
import Chart from './Chart';
import HeroImage from './HeroImage';

import styles from './Essay.module.css';

export default function Essay() {
  return (
    <>
      <HeroImage />

      <Container className={styles.essay}>
        <h1>Looking for Snowy Owls across Canada</h1>
        <p>
          This is a site dedicated to helping you find Snowy Owls in Canada. Using a mix of dynamic
          maps, real-time data and a lot of encouragement, I hope to get you outside and braving our
          winter weather, knowing that you <em>can</em> and <em>will</em> find these amazing owls if
          you look in the right spots and don&apos;t give up easily.
        </p>
        <p>
          <a href="/">SnowyOwls.ca</a> uses live data from <a href="https://ebird.org">eBird.org</a>
          , which collects global birding data for science, conservation and education. This public
          data set is used to show you recent Snowy Owls sightings across the country. You can look
          at a{' '}
          <Link href="/map">
            <a>live map</a>
          </Link>{' '}
          of reported sightings across Canada for the last 30 days. You can also see the same{' '}
          <Link href="/map">
            <a>data in table form</a>
          </Link>
          .
        </p>
        <p>
          Or keep reading in order to learn some tricks that will help you find Snowy Owls near you.
        </p>
        <h2>Snowy Owls</h2>
        <p>
          There&apos;s nothing easy about a Canadian winter. For months we bundle up against the
          wind and snow, seeking warmth inside, waiting for the blizzards, freezing rain, and ice to
          thaw. But while we wait, another world is just beginning to arrive; something special
          happens from December through March, something magical. And nature rewards those who take
          the time to look more closely at our monotonous white, seemingly empty landscapes.
        </p>
        <p>
          Every year Snowy Owls from the northern Arctic Tundra migrate south in large numbers,
          appearing suddenly in the middle of forgotten farmer&apos;s fields, perched on fence
          posts, and moving up and down our frozen shorelines.
        </p>
        <p>
          Although it is <em>possible</em> to see one any time of year, the most likely months are
          during winter, November through March.
        </p>
        <Chart />
        <p>
          Fusce pellentesque iaculis sollicitudin. Ut diam ipsum, tempor vel justo sit amet, semper
          posuere sem. Curabitur aliquam volutpat tristique. Suspendisse sollicitudin mi at iaculis
          sodales. Aenean nisi turpis, pulvinar a sodales in, pulvinar sit amet diam. Sed in
          vulputate nibh, in sagittis purus. Mauris varius est eu porta accumsan. Cras vitae quam a
          augue fermentum elementum quis nec tellus. Nam sem sapien, fermentum quis ante in,
          dignissim varius ex. Suspendisse vel auctor leo. Praesent suscipit quam sed tortor
          placerat sagittis. Aliquam placerat sem id risus lobortis, in maximus est mattis. Donec
          augue odio, ultrices in est eget, finibus faucibus felis. Suspendisse id diam vitae ipsum
          posuere maximus at ornare arcu. Sed pellentesque, nibh et molestie malesuada, mi tortor
          feugiat augue, id mollis lectus orci non ipsum.
        </p>
        <YouTubeVideo
          src="https://www.youtube-nocookie.com/embed/HXwrB216bgE"
          caption="Secrets of the Snowy Owl | NPR's SKUNK BEAR"
        />
        <a href="https://manager.celltracktech.net/public/bt/map/4">
          Project Snow Storm live GPS tracking data
        </a>
        <p>
          Suspendisse luctus iaculis diam non accumsan. Vivamus interdum nulla rhoncus, tincidunt
          turpis eget, condimentum est. Suspendisse elementum blandit euismod. Nulla nec commodo ex.
          Donec eleifend nisi eu mi mattis, quis vehicula justo tempor. Nulla ultricies viverra arcu
          sed tempor. Curabitur ornare commodo dapibus. Nulla consectetur dolor eu purus ornare, at
          suscipit nibh laoreet. Fusce eget eros eu urna dictum congue a tempus nisi. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus
          tempus sapien eu sapien ornare sollicitudin. Ut imperdiet laoreet ex, eget cursus mauris
          tincidunt at.
        </p>
        <p>
          Suspendisse iaculis cursus ex, quis viverra nunc placerat et. Integer accumsan eleifend
          arcu vitae egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Duis massa orci, placerat sed vehicula id, condimentum non
          mauris. Sed imperdiet aliquet justo non dignissim. Suspendisse nec urna elit. Vivamus
          posuere urna sit amet sagittis scelerisque. Donec sed rutrum lectus. Nullam vel finibus
          nulla, ut vehicula urna. Aliquam erat volutpat. Pellentesque auctor sem sapien.
        </p>
        <p>
          Maecenas vel faucibus risus. Praesent sit amet ipsum in nisl ultricies scelerisque. Etiam
          eu mauris ac sapien condimentum porttitor. Donec finibus ligula nulla, nec congue quam
          tristique id. Sed nec ipsum nisi. Nunc eu ultrices purus. Integer pharetra lacinia tortor
          ac molestie. Mauris tempor urna lectus. Proin ut pretium felis. Curabitur volutpat
          ullamcorper ligula et blandit. Mauris ipsum sem, condimentum vitae mi vitae, commodo
          vulputate eros. Etiam dolor risus, aliquet sit amet aliquam nec, consequat bibendum purus.
          Curabitur ultrices erat egestas vestibulum rutrum.
        </p>
      </Container>
    </>
  );
}

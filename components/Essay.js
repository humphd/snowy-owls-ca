import Link from 'next/link';
import Container from 'react-bootstrap/Container';

import Chart from './Chart';
import HeroImage from './HeroImage';
import LazyImage from './LazyImage';
import MapExample from './MapExample';

import styles from './Essay.module.css';

export default function Essay() {
  return (
    <>
      <HeroImage />

      <Container className={styles.essay}>
        <h1>Looking for Snowy Owls across Canada</h1>
        <p>
          This app is dedicated to helping you find one of winter&apos;s most elusive and exciting
          birds, the <strong>Snowy Owl</strong>. By providing you with{' '}
          <Link href="/map">
            <a>live maps</a>
          </Link>
          , real-time
          <Link href="/data">
            <a> Canadian sighting data</a>
          </Link>
          , and a little knowledge, I hope to get you out and braving our Canadian winter, confident
          that you <em>can</em> find these amazing owls if only you look in the right spots and
          don&apos;t give up too easily!
        </p>

        <h2>Using Maps and Live Data</h2>

        <p>
          A big part of not giving up is knowing that other people are seeing them nearby. I read an
          article recently about how rare Snowy Owl sightings are on Prince Edward Island. But a
          quick look at{' '}
          <Link href="/map">
            <a>the map</a>
          </Link>{' '}
          showed 4 sightings in the past month alone! As I write this (December 16, 2020) there have
          been over 500 reported sightings across the country, from Fort St. John in the west to
          Sable Island National Park in the east, and the winter migration is just getting started.
          Without good data, it&apos;s hard to know if our own experience, or that of our
          neighbours, is reflective of what&apos;s actually happening right now.
        </p>

        <MapExample />

        <p>
          <a href="/">SnowyOwls.ca</a> uses live data from{' '}
          <a href="https://ebird.org" target="_blank" rel="noopener noreferrer">
            eBird.org
          </a>
          , which collects global birding data for science, conservation and education. This public
          dataset is used to show you recent Snowy Owls sightings for the last 30 days across the
          country.
        </p>

        <h2>Understanding Snowy Owls</h2>
        <h3 id="what-do-they-look-like">What do they look like?</h3>
        <p>
          The Snowy Owl (<em>Bubo scandiacus</em>) is a top predator of the northern Arctic. These
          large white owls live and breed on the open tundra, or near costal habitats. They are
          remarkable both for their appearance and nomadic southern migration.
        </p>
        <p>
          We tend to think of them as pure white, but there&apos;s quite a range in their colouring:
          from pure white (males) to heavily barred (often females), darker (often male) or pale
          (often female). Their other major physical characteristics include bright yellow eyes and
          toes covered in feathers, hiding deadly black claws. The vast majority of the birds we see
          in the south are likely juveniles (i.e., under a year), which haven&apos;t yet molted
          their flight feathers.
        </p>

        <LazyImage
          imgDir="/owls/take-off"
          caption="Snowy Owl, Kingston Ontario"
          author="Jamie McCaffrey"
          authorUrl="https://www.flickr.com/photos/15609463@N03/24549271963/in/photolist-DpkrgH-5AQfVG-oYDP6P-8XgGDm-DRzqMX-DrQW5v-qBb4Ah-DrQQYP-DJSbwd-vnJn3-DPUzg9-5Fekjd-pCV1Ep-PaXUy4-2iHgc4R-2bigfVB-cHQydb-bzuNkK-5X8K1q-G4LvRv-GTc7aZ-BWWENq-aREmMe-DrQSt2-7v2wCa-4Dfd1n-2cHtxyy-CGGLXT-CX6NUN-72YePX-G7htjq-qiexKc-5PSApx-tsEych-G4E4Pd-buqVBr-DQkoz7-DsuUC7-G7htJy-R465gy-sfMdnu-ERaSrq-qzBq5f-buqVqi-ua7Fp-dG66wA-GYPdMQ-Cqazj-DsuNty-G7pAeT"
        />

        <h3 id="when-can-you-see-them">When can you see them?</h3>
        <p>
          Although it is <em>possible</em> to see one at any time of year in Canada, the most likely
          period is during the winter months, November through March. Historical sighting data going
          back to 1900 helps demonstrate this:
        </p>
        <Chart />
        <h3 id="why-are-there-so-many-more-in-some-years">
          Why are there so many more in some years?
        </h3>
        <p>
          While these owls always migrate south in the winter, something truly special happens once
          every 3-5 years, when their numbers explode. Such years are known as{' '}
          <dfn id="def-irruption">irruptions</dfn>&mdash;large scale, irregular migrations over
          great distances . For example, the winters of{' '}
          <a
            href="https://ebird.org/news/the-winter-of-the-snowy-owl"
            target="_blank"
            rel="noopener noreferrer"
          >
            2011-2012
          </a>
          ,{' '}
          <a href="https://ebird.org/news/gotsnowies2013" target="_blank" rel="noopener noreferrer">
            2013-2014
          </a>
          , and{' '}
          <a
            href="https://www.cbc.ca/news/canada/toronto/snowy-owl-irruption-in-toronto-1.4528657"
            target="_blank"
            rel="noopener noreferrer"
          >
            2017-2018
          </a>{' '}
          were all irruption years.
        </p>
        <p>
          Such cyclic irruptions have been documented as far back as the 1800s. They were originally
          thought to be linked to a declining population of small arctic mammals (e.g., lemmings and
          voles on which the owls feed) and that the owls came south in search of food. However,
          modern research has put forward an alternative theory: that these greater numbers indicate
          large offspring numbers due to an <em>increased</em> food supply in the previous year.
          Snowy Owls can lay upwards of 14 eggs in a clutch, and when there is enough food to feed
          so many young, the population explodes. Also, the owls migrating south are typically in
          good health and not emaciated, as one would expect if they migrated out of hunger.
        </p>
        <h3 id="how-do-i-find-them">How do I find them?</h3>
        <p>
          To find them, you have to begin by looking for southern landscapes that would support
          them. Consider that they are hunting small mammals and migratory water birds, ducks,
          gulls, etc. The former will most often be found in open fields, the latter along
          shorelines and in small lakes and ponds. You&apos;re trying to find habit that will
          support these in abundance. As the temperature drops, Snowy Owls need to eat more often to
          stay warm. They need access to lots of food.
        </p>

        <LazyImage
          imgDir="/owls/silver-leapers"
          caption="Snowy Owl, Newfoundland"
          author="Silver Leapers"
          authorUrl="https://www.flickr.com/photos/68069539@N07/24827333442/"
        />

        <p>
          Next, they are usually solitary, and highly nomadic. Recent research using GSM
          transmitters fitted to owls has shown that they will often return to the same areas during
          winter. Some owls will move around a great deal (100s of kilometers), while others will
          stay within a 1 kilometer range. If people report seeing these birds in an area, get to
          that area! The{' '}
          <Link href="/map">
            <a>live maps</a>
          </Link>{' '}
          should give you an edge here.
        </p>
        <p>
          They are often found near airports, which prove ideal because of the wide-open, grassy
          areas, which are home to many small mammals. Airport authorities often do live trapping to
          remove them from the area (17 were caught at Pearson during December 2014).
        </p>
        <p>
          Another trick is to let other birds reveal their presence for you. Crows, Jays,
          Chickadees, and other birds will mob daytime roosting owls. If you see Crows gathering in
          the middle of a field, Blue Jays dive bombing, or hear agitated calls, it&apos;s worth
          investigating.
        </p>

        <p>
          They are generally quite naive around humans, and usually won&apos;t spook easily. But
          give them lots of room and respect their territory, so as to avoid harassing them. Your
          car provides a useful blind, and allows you to observe them without getting too close or
          causing them a lot of stress.
        </p>

        <h3 id="what-about-time-of-day">What about time of day?</h3>
        <p>
          Most of their hunting happens at night, and during the day they will usually be be
          roosting. However, unlike many other owls, they are <dfn id="def-diurnal">diurnal</dfn>,
          and will also hunt during the day. In the arctic they have to hunt in the perpetual
          daylight in certain seasons, so they are accustomed to daylight hunting here in winter.
        </p>
        <p>
          That said, during the day you want to look for good roosting locations. They are less
          likely to be moving around when the sun is out. Ideally you want open landscapes (think{' '}
          <em>Arctic tundra</em>)&mdash;shorelines, beaches, rocky points, farm fields, meadows,
          prairies, grasslands, golf courses, open areas with few trees, or with trees around the
          edges. Often when you first notice a roosting owl, it&apos;s nothing more than an odd bit
          of white in the middle of a snow covered field, sitting motionless on the ground. If your
          eye catches something just slightly off in the middle of a corn field as you drive, take a
          second to look again.
        </p>
        <p>
          Just before dark the owls will begin to stir and get ready to hunt, moving from the ground
          to higher perches. As the sun is setting you&apos;ve got a better chance to see them if
          you look out for: piers, fence posts, antennas, roofs, haystacks, light and hydro poles,
          silos, chimneys, water towers, tree tops.
        </p>

        <LazyImage
          imgDir="/owls/gm_pentaxfan/powerline"
          caption="Snowy Owl, North of Assiniboia Saskatchewan"
          author="gm_pentaxfan"
          authorUrl="https://www.flickr.com/photos/gm_pentaxfan/22418029283/"
        />

        <h2 id="have-fun-finding-them">Have Fun Finding Them</h2>
        <p>
          If you haven&apos;t found one before, it can seem impossible. When it does finally happen,
          it&apos;s always special. Enjoy it! Remember, you don&apos;t have to own a great camera,
          travel very far, or be a serious birder to take part in this winter migration.
        </p>
        <p>
          Make this the year you find one for the first time. Use the{' '}
          <Link href="/map">
            <a>map</a>
          </Link>{' '}
          and find a productive spot near where you live. I promise you they are out there, and
          it&apos;s worth the time to go and find them.
        </p>

        <p>Good luck as you look for these amazing owls. You&apos;re not alone out there.</p>

        <h2 id="resources">Resources</h2>
        <ul>
          <li>
            <a
              href="https://www.hww.ca/en/wildlife/birds/snowy-owl.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hinterland Who&apos;s Who - Snowy Owl
            </a>
          </li>
          <li>
            <a
              href="https://www.allaboutbirds.org/guide/Snowy_Owl"
              target="_blank"
              rel="noopener noreferrer"
            >
              All About Birds: Snowy Owl
            </a>
          </li>
          <li>
            <a href="https://www.projectsnowstorm.org/" target="_blank" rel="noopener noreferrer">
              Project Snow Storm: Snowy Owl Research and Conservation
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=HXwrB216bgE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Secrets of the Snowy Owl (Video by NPR&apos;s SKUNK BEAR)
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
}

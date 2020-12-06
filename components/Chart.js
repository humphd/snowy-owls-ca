import 'react-vis/dist/style.css';
import Figure from 'react-bootstrap/Figure';
import {
  FlexibleWidthXYPlot,
  LineSeries,
  AreaSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';

export default function Chart() {
  // Weekly ON Total Snowy Owl totals from 1900-2020
  // Source: https://ebird.org/barchart?r=CA&bmo=1&emo=12&byr=1900&eyr=2020&spp=snoowl1
  const data = [
    { x: 0, y: 9642 + 6099 + 6007 + 7551 },
    { x: 1, y: 5728 + 5258 + 6531 + 4953 },
    { x: 2, y: 4364 + 3628 + 3520 + 4413 },
    { x: 3, y: 2747 + 1950 + 1435 + 1246 },
    { x: 4, y: 509 + 393 + 268 + 331 },
    { x: 5, y: 222 + 293 + 334 + 580 },
    { x: 6, y: 558 + 549 + 353 + 371 },
    { x: 7, y: 273 + 193 + 148 + 167 },
    { x: 8, y: 52 + 56 + 74 + 38 },
    { x: 9, y: 26 + 86 + 142 + 481 },
    { x: 10, y: 898 + 1915 + 2494 + 3924 },
    { x: 11, y: 5533 + 4951 + 4850 + 8802 },
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <Figure style={{ width: '100%' }}>
      <FlexibleWidthXYPlot margin={{ left: 50 }} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45} tickFormat={(v) => months[v]} />
        <YAxis />
        <LineSeries data={data} curve={'curveMonotoneX'} color={'#353a40'} opacity={1} />
        <AreaSeries data={data} curve={'curveMonotoneX'} color={'#353a40'} opacity={0.25} />
      </FlexibleWidthXYPlot>
      <Figure.Caption className="text-center">
        Weekly Snowy Owl Total Counts in Canada, 1900 - 2020 (source:{' '}
        <a href="https://ebird.org/barchart?r=CA-ON&bmo=1&emo=12&byr=1900&eyr=2020&spp=snoowl1">
          eBird
        </a>
        )
      </Figure.Caption>
    </Figure>
  );
}

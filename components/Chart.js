import Figure from 'react-bootstrap/Figure';
import { useEffect, useState } from 'react';

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
  const [width, setWidth] = useState(640);
  const height = 275;
  const margin = { top: 16, right: 16, bottom: 48, left: 52 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const maxY = Math.max(...data.map((point) => point.y));
  const xStep = innerWidth / (data.length - 1);

  useEffect(() => {
    const updateWidth = () => {
      const nextWidth = Math.min(window.innerWidth - 32, 640);
      setWidth(Math.max(320, nextWidth));
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const xForIndex = (index) => margin.left + index * xStep;
  const yForValue = (value) => margin.top + innerHeight - (value / maxY) * innerHeight;
  const linePath = data
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${xForIndex(index)} ${yForValue(point.y)}`)
    .join(' ');
  const areaPath = `${linePath} L ${xForIndex(data.length - 1)} ${margin.top + innerHeight} L ${xForIndex(0)} ${margin.top + innerHeight} Z`;
  const yTicks = 4;

  return (
    <Figure style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} role="img">
        {Array.from({ length: yTicks + 1 }, (_, index) => {
          const value = (maxY / yTicks) * index;
          const y = yForValue(value);
          return (
            <g key={value}>
              <line
                x1={margin.left}
                y1={y}
                x2={width - margin.right}
                y2={y}
                stroke="#d9dde1"
                strokeWidth="1"
              />
              <text x={margin.left - 8} y={y + 4} textAnchor="end" fontSize="12" fill="#6c757d">
                {Math.round(value).toLocaleString()}
              </text>
            </g>
          );
        })}

        {months.map((month, index) => (
          <g key={month}>
            <line
              x1={xForIndex(index)}
              y1={margin.top}
              x2={xForIndex(index)}
              y2={margin.top + innerHeight}
              stroke="#eef1f4"
              strokeWidth="1"
            />
            <text
              x={xForIndex(index)}
              y={height - 12}
              textAnchor="end"
              transform={`rotate(-45 ${xForIndex(index)} ${height - 12})`}
              fontSize="12"
              fill="#6c757d"
            >
              {month}
            </text>
          </g>
        ))}

        <line
          x1={margin.left}
          y1={margin.top + innerHeight}
          x2={width - margin.right}
          y2={margin.top + innerHeight}
          stroke="#6c757d"
          strokeWidth="1"
        />
        <line
          x1={margin.left}
          y1={margin.top}
          x2={margin.left}
          y2={margin.top + innerHeight}
          stroke="#6c757d"
          strokeWidth="1"
        />
        <path d={areaPath} fill="#353a40" opacity="0.25" />
        <path d={linePath} fill="none" stroke="#353a40" strokeWidth="3" />
      </svg>
      <Figure.Caption className="text-center">
        Weekly Snowy Owl Total Counts in Canada, 1900 - 2020 (source:{' '}
        <a
          href="https://ebird.org/barchart?r=CA-ON&bmo=1&emo=12&byr=1900&eyr=2020&spp=snoowl1"
          target="_blank"
          rel="noopener noreferrer"
        >
          eBird
        </a>
        )
      </Figure.Caption>
    </Figure>
  );
}

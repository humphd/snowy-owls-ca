import PropTypes from 'prop-types';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';

export default function LazyImage({ imgDir, caption, author, authorUrl }) {
  return (
    <Figure style={{ width: '100%' }}>
      <Image
        src={`${imgDir}/800.jpg`}
        srcSet={`${imgDir}/400.jpg 400w, ${imgDir}/800.jpg 800w`}
        loading="lazy"
        alt={caption}
        fluid
      />
      <Figure.Caption className="text-center">
        {caption}. Photo by{' '}
        <a href={authorUrl} target="_blank" rel="noopener noreferrer">
          {author}
        </a>
      </Figure.Caption>
    </Figure>
  );
}

LazyImage.propTypes = {
  imgDir: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
};

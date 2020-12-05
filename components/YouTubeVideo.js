import PropTypes from 'prop-types';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Figure from 'react-bootstrap/Figure';

export default function YouTubeVideo({ src, caption }) {
  return (
    <Figure style={{ width: '100%' }}>
      <div style={{ margin: '1em auto', height: 'auto' }}>
        <ResponsiveEmbed aspectRatio="16by9">
          <iframe
            src={src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </ResponsiveEmbed>
      </div>
      <Figure.Caption className="text-center">{caption}</Figure.Caption>
    </Figure>
  );
}

YouTubeVideo.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';

const AlbumPhoto = PropTypes.shape({
  albumId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export default AlbumPhoto;

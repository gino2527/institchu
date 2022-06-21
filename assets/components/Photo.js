// libraries
import clsx from 'clsx';

// utilities
import AlbumPhotoPropType from 'assets/prop-shapes/AlbumPhoto';

// css
import styles from 'styles/assets/components/Photo.module.scss';

function Photo({ photo }) {
  const {
    thumbnailUrl,
    title,
    url,
  } = photo;

  return (
    <div
      className={clsx([
        'flex-column',
        styles.container,
      ])}
    >
      <div className={styles.image}>
        <img
          alt="album thumbnail"
          src={url}
        />
      </div>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  );
}

Photo.propTypes = {
  photo: AlbumPhotoPropType.isRequired,
};

export default Photo;

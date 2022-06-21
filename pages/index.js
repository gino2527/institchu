import PropTypes from 'prop-types';

// libraries
import clsx from 'clsx';

// own components
import Photo from 'assets/components/Photo';

// utilities
import axiosInstance from 'assets/utilities/axiosInstance';
import AlbumPhotoPropType from 'assets/prop-shapes/AlbumPhoto';
import photosStub from 'assets/stub/album-1-photos.json';

// css
import styles from 'styles/pages/index.module.scss';

function Home({ photos }) {
  return (
    <div
      className={clsx([
        'flex-column',
        styles.container,
      ])}
    >
      {photos.map((photo) => (
        <Photo photo={photo} />
      ))}
    </div>
  );
}

Home.propTypes = {
  photos: PropTypes.arrayOf(AlbumPhotoPropType).isRequired,
};

export async function getServerSideProps() {
  // const res = await axiosInstance.get('/shows');

  return {
    props: {
      photos: photosStub,
    },
  };
}

export default Home;

import PropTypes from 'prop-types';
import Image from 'next/image';

function Picture({ path, title }) {
  return (
    <div className="absolute inset-0 flex">
      <Image
        alt={title}
        className="flex-1"
        src={path}
        unsized
        // options
        // width={1000}
        // height={1000}
      />
    </div>
  );
}

Picture.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export { Picture };

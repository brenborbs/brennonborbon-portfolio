import PropTypes from 'prop-types';

function Picture({ path, title }) {
  return (
    <div className="absolute inset-0 flex">
      <picture>
        <source srcSet={require(`../images/${path}?webp`)} type="image/webp" />
        <source srcSet={require(`../images/${path}`)} type="image/jpeg" />
        <img
          src={require(`../images/${path}`)}
          alt={title}
          className="flex-1"
        />
      </picture>
    </div>
  );
}

Picture.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export { Picture };

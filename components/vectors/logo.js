import PropTypes from 'prop-types';

export function Logo({ className }) {
  return (
    <div className={className}>
      <img src="/brenlogo.jpg" alt="brennon logo" className="h-full" />
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

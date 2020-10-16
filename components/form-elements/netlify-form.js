import React from 'react';
import PropTypes from 'prop-types';

function NetlifyForm({
  action = '/success/',
  children,
  className,
  handleSubmit,
  name = 'contact_form',
  setIsSubmitting,
}) {
  function onSubmit(data, e) {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    console.log(data);
  }

  return (
    <form
      data-netlify
      data-netlify-honeypot="bot-field"
      action={action}
      method="POST"
      name={name}
      onSubmit={handleSubmit(onSubmit)}
      className={className}
    >
      {children}
    </form>
  );
}

NetlifyForm.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  setIsSubmitting: PropTypes.func.isRequired,
};

export { NetlifyForm };

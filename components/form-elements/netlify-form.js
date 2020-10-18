import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { BotField } from './bot-field';

function NetlifyForm({
  action = '/success/',
  children,
  className,
  handleSubmit,
  name = 'contact_form',
  setIsSubmitting,
}) {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
  }

  function onSubmit(data, e) {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...data,
      }),
    })
      .then(() => router.push(form.getAttribute('action')))
      .catch((error) => alert(error));
  }
  const router = useRouter();
  return (
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action={action}
      method="POST"
      name={name}
      onSubmit={handleSubmit(onSubmit)}
      className={className}
    >
      <BotField />
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

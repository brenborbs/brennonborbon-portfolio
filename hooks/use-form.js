import { useState } from 'react';
import { useRouter } from 'next/router';

function useForm(initialState) {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
  }

  const router = useRouter();
  const [state, setState] = useState(initialState);

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => router.push(form.getAttribute('action')))
      .catch((error) => alert(error));
  }

  return { handleSubmit, handleChange, state };
}

export { useForm };

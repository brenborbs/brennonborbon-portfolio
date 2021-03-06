import { useState, useEffect } from 'react';

function useInstagram() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('/.netlify/functions/instagram')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return posts;
}

export { useInstagram };

import { useState } from 'react';

const usePostApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (url, method = 'POST', postData) => {
    setLoading(true);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const responseData = await response.json();
      setData(responseData);
      setError(null);

      return { response, data: responseData };
    } catch (error) {
      setError(error.message || 'An error occurred');
      return { response: null, data: null, error };
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, request };
};

export default usePostApi;

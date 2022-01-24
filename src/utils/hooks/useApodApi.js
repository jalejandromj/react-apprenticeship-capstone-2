import { useState, useEffect } from 'react';

import axios from 'axios';

const useApodApi = (url, params) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  
  useEffect(() => {
    if(params.date !== null){
      axios
        .get(url, {
          params: {
            api_key: "p1lPwEOl4ogssE27KfHgerLYVfaEeEcqAMNk4reE",
            date: params.date,
          },
        })
        .then(function (response) {
          // handle success
          console.log('[SUCCESS] APOD Api call...', response);
          setResponse(response);
          setError(null);
        })
        .catch(function (error) {
          // handle error
          console.log('[ERROR] On APOD Api call...', error);
          setError(error);
          setResponse(null);
        });
      }else{
        setResponse(null);
      }
  }, [url, params.date]);

  return { response, error };
};

export default useApodApi;
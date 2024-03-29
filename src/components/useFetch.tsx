import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url: any) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true); // set loading to true
    axios
      .get('https://us-central1-poll-project-22167.cloudfunctions.net/app'+url)
      .then((response) => {
        
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  // Function to call when button is clicked
  const refetch = () => {
    setLoading(true); // set loading to true
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, refetch };
}

export default useFetch;
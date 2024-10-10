import { useEffect, useState } from "react";

const useFetch = (url, category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getData();
  }, [category]);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  };

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;

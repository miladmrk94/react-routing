import axios from "axios";
import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [err, setErr] = useState(null);
  const [data, setData] = useState(false);
  const [login, setLogin] = useState(null);

  useEffect(() => {
    setLogin(true);
    setErr(null);
    setData(null);

    axios
      .get(url)
      .then((res) => {
        setLogin(false);
        setData(res.data);
      })
      .catch((err) => {
        setLogin(false);
        setErr(err.message);
      });
  }, []);

  return { login, data, err };
};

export default useFetch;

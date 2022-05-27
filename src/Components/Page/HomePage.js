import React from "react";
import useFetch from "./../../Hook/useFetch";
const HomePage = () => {
  const { login, data, err } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      {login && <p>Login.....</p>}
      {data && <p>OK OK OK</p>}
      {err && <p>ERROR</p>}
    </div>
  );
};

export default HomePage;

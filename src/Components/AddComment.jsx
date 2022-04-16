import React, { useState } from "react";
import http from "../Service/HttpService";
const AddComment = ({ history }) => {
  const [data, setData] = useState(null);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (data) {
      http
        .post("comments", data)
        .then((res) => {
          return history.push("/");
        })
        .catch();
    } else {
      alert("plz complete");
    }
    e.target.reset();
    setData(null);
  };

  return (
    <div className="addComment">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name..."
          name="name"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="PhoneNumber..."
          name="phone"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Detail..."
          name="location"
          onChange={changeHandler}
        />
        <br />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddComment;

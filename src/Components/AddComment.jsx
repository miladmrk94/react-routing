import React, { useState } from "react";
const AddComment = ({ submitDataHandler }) => {
  const [data, setData] = useState(null);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (data) {
      submitDataHandler(data);
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

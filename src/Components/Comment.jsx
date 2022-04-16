import React from "react";
import { Link } from "react-router-dom";
const Comment = ({ name, phone, onClick, to }) => {
  return (
    <div onClick={onClick}>
      <Link to={to}>
        <div className="commentBox">
          <h4>{name}</h4>
          <h4>{phone}</h4>
        </div>
      </Link>
    </div>
  );
};

export default Comment;

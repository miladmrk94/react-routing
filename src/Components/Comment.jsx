import React from "react";
const Comment = ({ name, phone, onClick }) => {
  return (
    <div onClick={onClick}>
      {name && phone ? (
        <div className="commentBox">
          <h4>{name}</h4>
          <h4>{phone}</h4>
        </div>
      ) : (
        <h2>Oops !!!</h2>
      )}
    </div>
  );
};

export default Comment;

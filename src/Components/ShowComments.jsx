import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import http from "../Service/HttpService";
const ShowComments = ({ match, history }) => {
  const id = match.params.id;

  const [showComment, setShowComment] = useState(null);

  const onClickForDelete = (id) => {
    console.log(id);
    setShowComment(null);
    http
      .delete(`comments/${id}`)
      .then((res) => {
        return history.push("/");
      })
      .catch();
  };

  useEffect(() => {
    if (id) {
      const getData = async () => {
        const allData = await http.get(`comments/${id}`);
        console.log(allData.data);
        setShowComment(allData.data);
      };
      getData();
    }
  }, [id]);

  return (
    <div className="showComments">
      {showComment ? (
        <>
          <h5>name:{showComment.name}</h5>
          <h5>phone:{showComment.phone} </h5>
          <h5>location: {showComment.location}</h5>
          <button
            className="btn"
            onClick={() => onClickForDelete(showComment.id)}
          >
            Delete
          </button>
        </>
      ) : (
        <h2>Chose Comment</h2>
      )}
    </div>
  );
};

export default ShowComments;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import http from "../Service/HttpService";
const ShowComments = ({ dataId, deleteHandler }) => {
  const [showComment, setShowComment] = useState(null);

  const onClickForDelete = (id) => {
    deleteHandler(id);
    console.log(dataId);
    setShowComment(null);
  };
  useEffect(() => {
    if (dataId) {
      const getData = async () => {
        const allData = await http.get(`comments/${dataId}`);
        console.log(allData.data);
        setShowComment(allData.data);
      };
      getData();
    }
  }, [dataId]);

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

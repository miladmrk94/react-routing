import React from "react";
import { useEffect } from "react";
import Comment from "./Comment";
import http from "./../Service/HttpService";
import { useState } from "react";
const CommentHandler = () => {
  const [allData, setAllData] = useState(null);
  const [dataId, setDataId] = useState(null);

  const clickHandler = (id) => {
    console.log("comment:", id);
    setDataId(id);
  };

  useEffect(() => {
    const getData = async () => {
      const allData = await http.get("comments");
      setAllData(allData.data);
    };
    getData();
  }, []);

  return (
    <div className="sectionOne">
      <div className="comment">
        {allData ? (
          allData.map((item) => {
            return (
              <Comment
                key={item.id}
                name={item.name}
                phone={item.phone}
                onClick={() => clickHandler(item.id)}
                to={`/Show/${item.id}`}
              />
            );
          })
        ) : (
          <h2>loading...</h2>
        )}
      </div>
    </div>
  );
};

export default CommentHandler;

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

  const deleteHandler = (id) => {
    console.log("delete comment with id:", id);
    http
      .delete(`comments/${id}`)
      .then(() => {
        return http.get("comments").then((res) => {
          return setAllData(res.data);
        });
      })
      .catch();
    setDataId(null);
  };
  const submitDataHandler = (addData) => {
    console.log(addData);
    http
      .post("comments", addData)
      .then((res) => {
        return setAllData([...allData, res.data]);
      })
      .catch();
  };
  useEffect(() => {
    const getData = async () => {
      const allData = await http.get("comments");
      setAllData(allData.data);
    };
    getData();
  }, []);

  console.log(allData);
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

      {/* <ShowComments dataId={dataId} deleteHandler={deleteHandler} /> */}
    </div>
  );
};

export default CommentHandler;

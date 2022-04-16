import React from "react";
import http from "../../Service/HttpService";
import ShowComments from "../ShowComments";

const Show = (props) => {
  console.log(props);
  const id = props.match.params.id;

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

  return (
    <div>
      <ShowComments dataId={id} deleteHandler={deleteHandler} />
    </div>
  );
};

export default Show;

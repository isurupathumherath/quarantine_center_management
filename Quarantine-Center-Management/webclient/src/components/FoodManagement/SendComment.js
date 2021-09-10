import "./ui/Form.css";
import React, { useState } from "react";
import { Send } from "react-feather";
import axios from "axios";
import uniqid from "uniqid";
import { useHistory } from "react-router-dom";

export default function DisplayComments(props) {
  const history = useHistory();
  const [comment, setComment] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newComment = {
      commentID: uniqid(),
      foodID: `${props.foodID}`,
      comment,
      userID: "ava",
    };

    axios
      .post("http://localhost:8000/comment/", newComment)
      .then(() => {
        alert("Comment added");
      })
      .catch((err) => {
        alert(err);
        alert("asd");
      })
      .then(() => {
        history.replace("/allFood");
      });
  }
  return (
    <div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />

        <div className="input-group-append">
          <Send
            className="btn btn-success btn-lg"
            color="white"
            size="38"
            onClick={sendData}
          />
        </div>
      </div>
    </div>
  );
}

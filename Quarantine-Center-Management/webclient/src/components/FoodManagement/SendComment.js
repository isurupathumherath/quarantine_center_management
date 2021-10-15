// import "./ui/Form.css";
import React, { useState } from "react";
import { Send } from "react-feather";
import axios from "axios";
import uniqid from "uniqid";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast, cssTransition } from "react-toastify";

export default function DisplayComments(props) {
  const history = useHistory();
  const [comment, setComment] = useState("");

  const fname = JSON.parse(localStorage.getItem('currentUser')).fName;

  function sendData(e) {
    e.preventDefault();
    toast("Wow so easy!");
    const newComment = {
      commentID: uniqid(),
      foodID: `${props.foodID}`,
      comment,
      userID: fname,
    };

    axios
      .post("http://localhost:8000/comment/", newComment)
      .then(() => {
        props.func();
        setComment("");
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
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />

        <div className="input-group-append">
          <Send
            className="btn btn-success btn-m"
            color="white"
            size="46"
            onClick={sendData}
          />
        </div>
      </div>
    </div>
  );
}

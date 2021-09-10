import "./ui/Form.css";
import React, { useState } from "react";
import axios from "axios";
import uniqid from "uniqid";

export default function AddFood() {
  const [name, setFName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDes] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newFood = {
      name,
      image,
      price,
      description,
      type,
      foodID: uniqid(),
      insertUser: "102",
      insertDate: new Date(),
      status: 1,
    };

    axios
      .post("http://localhost:8000/foods/", newFood)
      .then(() => {
        alert("Food added");
      })
      .catch((err) => {
        alert(err);
        alert("asd");
      });
  }

  return (
    <div>
      <h1></h1>
      <div className="container">
        <div className="contact-box">
          <div className="left"></div>
          <div className="right">
            <h2>Add food</h2>
            <form onSubmit={sendData}>
              <input
                type="text"
                className="field"
                placeholder="Enter food name"
                onChange={(e) => {
                  setFName(e.target.value);
                }}
              />
              <input
                type="text"
                className="field"
                placeholder="Enter price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />

              <input
                type="text"
                className="field"
                placeholder="Enter the type of food"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              />
              <input
                type="text"
                className="field"
                placeholder="Enter image url"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
              <textarea
                className="field"
                placeholder="Enter discription"
                onChange={(e) => {
                  setDes(e.target.value);
                }}
              />
              <button className="btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

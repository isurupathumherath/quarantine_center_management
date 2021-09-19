import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit } from "react-feather";
import { XSquare } from "react-feather";
import { Trash2 } from "react-feather";
import { Check } from "react-feather";
import uniqid from "uniqid";

const $ = require("jquery");

export default function FoodAdmin() {
  let [food, setFood] = useState([]);
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [description, setDescription] = useState("");
  // let [status, setStatus] = useState("");
  let [image, setImage] = useState("");
  let [foodID, setfoodID] = useState("");
  let [objectID, setObjectID] = useState("");
  let [type, setType] = useState("");
  let [insertUser, setinsertUser] = useState("");
  let [likeCount, setlikeCount] = useState("");
  let [insertDate, setinsertDate] = useState("");
  let [option, setOption] = useState(1);
  let count = 0;

  useEffect(() => {
    axios
      .get("http://localhost:8000/foods/")
      .then((res) => {
        setFood(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  function changeStatus(
    id,
    name1,
    image1,
    price1,
    desc,
    type1,
    user,
    like,
    insertDate,
    st,
    id2
  ) {
    let newFood;
    if (st == 1) {
      newFood = {
        name: name1,
        image: image1,
        price: price1,
        description: desc,
        type: type1,
        foodID: id,
        insertUser: user,
        insertDate: insertDate,
        likeCount: like,
        updateDate: new Date(),
        status: 2,
      };
    } else if (st == 2) {
      newFood = {
        name: name1,
        image: image1,
        price: price1,
        description: desc,
        type: type1,
        foodID: id,
        insertUser: user,
        insertDate: insertDate,
        likeCount: like,
        updateDate: new Date(),
        status: 1,
      };
    }

    axios
      .put(`http://localhost:8000/foods/update/${id2}`, newFood)
      .then(() => {
        alert("Status changed");
        axios
          .get("http://localhost:8000/foods/")
          .then((res) => {
            setFood(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((err) => {
        alert(err);
        alert("asd");
      });
  }

  function deleteFood(id) {
    axios
      .delete(`http://localhost:8000/foods/delete/${id}`)
      .then((res) => {
        alert("Food Deleted successfully");
        axios
          .get("http://localhost:8000/foods/")
          .then((res) => {
            setFood(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((err) => {
        alert("wrong");
      });
  }

  function editFood(
    id,
    name1,
    image1,
    price1,
    desc,
    type1,
    user,
    like,
    insertDate,
    st,
    id2
  ) {
    setfoodID(id);
    setName(name1);
    setImage(image1);
    setPrice(price1);
    setDescription(desc);
    setType(type1);
    setinsertUser(user);
    setlikeCount(Number(like));
    setinsertDate(insertDate);
    setObjectID(id2);
    setOption(2);
  }

  function sendData(e) {
    e.preventDefault();

    let fid = foodID;

    console.log(image);
    if (option == 2) {
      const updateFood = {
        foodID: fid,
        name,
        image,
        price,
        description,
        type,
        insertUser,
        insertDate,
        status: 1,
        likeCount,
        updateDate: new Date(),
      };
      axios
        .put(`http://localhost:8000/foods/update/${objectID}`, updateFood)
        .then(() => {
          alert("Food updated");
          axios
            .get("http://localhost:8000/foods/")
            .then((res) => {
              setFood(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        })
        .catch((err) => {
          alert(err.message);
          alert("Eroor occured");
        });
    }
    if (option == 1) {
      console.log(image);
      const newFood = {
        foodID: uniqid(),
        name,
        image,
        price,
        description,
        type,
        insertUser: "102",
        insertDate: new Date(),
        status: 1,
      };
      console.log(newFood);

      axios
        .post("http://localhost:8000/foods/", newFood)
        .then(() => {
          alert("Food added");
          axios
            .get("http://localhost:8000/foods/")
            .then((res) => {
              setFood(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        })
        .catch((err) => {
          alert(err.message);
          alert("asd");
        });
    }
  }

  return (
    <div>
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add/Update</h4>
              </div>
              <div className="card-body">
                <form action="#" onSubmit={sendData}>
                  <div className="change-avatar">
                    <div className="profile-img">
                      <img src={`img/${image}`} alt="Food Image" />
                    </div>
                    <br />

                    <div className="upload-img">
                      <div className="change-photo-btn">
                        <span>
                          <i className="fa fa-upload"></i> Upload Photo
                        </span>
                        <input
                          type="file"
                          className="upload"
                          onChange={(e) => {
                            setImage(e.target.value.split("\\").pop());
                          }}
                        />
                      </div>
                      <small className="form-text text-muted">
                        Allowed JPG, GIF or PNG. Max size of 2MB
                      </small>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Food Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      placeholder="Enter name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="text"
                      pattern="[0-9]+"
                      className="form-control"
                      placeholder="Enter price"
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Type</label>
                    <select
                      className="form-control"
                      value={type}
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                      required
                    >
                      <option>Breakfast</option>
                      <option>Dinner</option>
                      <option>Lunch</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Description</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Description"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="hidden"
                      className="form-control"
                      placeholder="Enter Image"
                      placeholder="Enter Image"
                      value={option}
                    />
                  </div>

                  <div className="text-right">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div
              className="card"
              style={{
                marginTop: "20px",
              }}
            >
              <div className="card-body">
                <h4 className="card-title">Foods</h4>
                <div
                  className="table-responsive"
                  style={{
                    maxHeight: "450px",
                    overflowY: "scroll",
                  }}
                >
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Food</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {food.map((post) => (
                        <tr key={post.foodID}>
                          <td>{(count = count + 1)}</td>
                          <td className="py-1">
                            <img
                              src={`../../img/${post.image}`}
                              className="rounded-lg"
                              alt="image"
                              style={({ width: "600px" }, { height: "50px" })}
                            />
                          </td>

                          <td>{post.name}</td>
                          <td>{post.price}</td>
                          <td>{post.description}</td>
                          <td>
                            <div className="input-group-append">
                              <Edit
                                className="btn btn-outline-primary btn-sm"
                                color="black"
                                style={{
                                  marginLeft: "10px",
                                }}
                                size="35px"
                                onClick={() =>
                                  editFood(
                                    post.foodID,
                                    post.name,
                                    post.image,
                                    post.price,
                                    post.description,
                                    post.type,
                                    post.insertUser,
                                    post.likeCount,
                                    post.insertDate,
                                    post.status,
                                    post._id
                                  )
                                }
                              />
                              {post.status == 1 ? (
                                <Check
                                  className="btn btn-outline-success btn-sm"
                                  color="black"
                                  key={post.foodID}
                                  size="35px"
                                  style={{ marginLeft: "10px" }}
                                  onClick={() =>
                                    changeStatus(
                                      post.foodID,
                                      post.name,
                                      post.image,
                                      post.price,
                                      post.description,
                                      post.type,
                                      post.insertDate,
                                      post.likeCount,
                                      post.insertDate,
                                      post.status,
                                      post._id
                                    )
                                  }
                                />
                              ) : post.status == 2 ? (
                                <XSquare
                                  className="btn btn-outline-warning btn-sm"
                                  color="black"
                                  size="35px"
                                  onClick={() =>
                                    changeStatus(
                                      post.foodID,
                                      post.name,
                                      post.image,
                                      post.price,
                                      post.description,
                                      post.type,
                                      post.insertDate,
                                      post.likeCount,
                                      post.insertDate,
                                      post.status,
                                      post._id
                                    )
                                  }
                                  style={{ marginLeft: "10px" }}
                                />
                              ) : null}

                              <Trash2
                                className="btn btn-outline-danger btn-sm"
                                color="black"
                                onClick={() => deleteFood(post.foodID)}
                                style={{ marginLeft: "10px" }}
                                size="35px"
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

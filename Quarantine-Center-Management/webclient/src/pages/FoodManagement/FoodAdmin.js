import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit } from "react-feather";
import { XSquare } from "react-feather";
import { Trash2 } from "react-feather";
import { Check } from "react-feather";
import uniqid from "uniqid";
import AllOrders from "./AllOrders";

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

  let count = 1;

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
        console.log(id);
      })
      .catch((err) => {
        alert(err);
        alert("asd");
      });

    window.location.reload();
  }

  function deleteFood(id) {
    axios
      .delete(`http://localhost:8000/foods/delete/${id}`)
      .then((res) => {
        alert("Food Deleted successfully");
      })
      .catch((err) => {
        alert("wrong");
      });
    window.location.reload();
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
    // foodID = id;
    // name = name1;
    // image1 = image1;
    // price = price1;
    // description = desc;
    // type = type1;
    // console.log(id2);
    // console.log(foodID);
  }

  function sendData(e) {
    e.preventDefault();

    let fid = foodID;
    console.log(fid);
    console.log(objectID);
    console.log(name);

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
        })
        .catch((err) => {
          alert(err.message);
          alert("Eroor occured");
        });
    }
    if (option == 1) {
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
        })
        .catch((err) => {
          alert(err.message);
          alert("asd");
        });
    }
    window.location.reload();
  }

  return (
    <div style={{ backgroundColor: "#DCDCDC" }}>
      <div>
        <div className="row">
          <div
            className="col-md-4"
            style={{
              backgroundColor: "white",
              marginTop: "20px",
            }}
          >
            <form
              onSubmit={sendData}
              style={{
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <div className="form-group">
                <label for="exampleInputEmail1">Food Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Description"
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Image"
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Image"
                  value={option}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
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
                          <td>1</td>
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
                                size="30px"
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
                                  size="30px"
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
                                  size="30px"
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
                                size="30px"
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

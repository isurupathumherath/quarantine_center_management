import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit } from "react-feather";
import { XSquare } from "react-feather";
import { Trash2 } from "react-feather";
import { Check } from "react-feather";
import uniqid from "uniqid";
import Swal from "sweetalert2";
import Header from "../../components/FoodManagement/Header";
// import { set } from "mongoose";

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

  let [err1, sererr1] = useState("");
  let [err2, seterr2] = useState("");
  let [err3, seterr3] = useState("");
  

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
      Swal.fire({
        position: "top",
        title: "Are you sure you want to deactivate this?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
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
          axios
            .put(`http://localhost:8000/foods/update/${id2}`, newFood)
            .then(() => {
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
          Swal.fire("Deactivated!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } else if (st == 2) {
      Swal.fire({
        position: "top",
        title: "Are you sure you want to Activate this?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
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
          axios
            .put(`http://localhost:8000/foods/update/${id2}`, newFood)
            .then(() => {
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
          Swal.fire("Activated!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  }

  function deleteFood(id) {
    Swal.fire({
      position: "top",
      title: "Are you sure you want to delete this item?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8000/foods/delete/${id}`)
          .then((res) => {
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
        Swal.fire("Deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
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
    Swal.fire({
      title: "Are you sure you want to edit this?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
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
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
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
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food added",
            showConfirmButton: false,
            timer: 1300,
          });
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

    setImage("");
    setName("");
    setDescription("");
    setPrice("");
    setType("");
    setOption(1);
  }

  return (
    <div>
      <Header name="All Foods" icon="fa-database" />
      <div
        className="container"
        style={{ width: "100%", marginRight: "100px"}}
      >
        <div className="content-container-fluid">
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
                        <img
                          src={`img/${image}`}
                          alt="Food Image"
                          style={{ width: "320px", height: "150px" }}
                        />
                      </div>
                      <br />

                      <div className="upload-img">
                        <div
                          className="change-photo-btn"
                          style={{ width: "200px" }}
                        >
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
                      <h6  style={{color: "#FF0000" }}>{err1}</h6>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        placeholder="Enter name"
                        onChange={(e) => {
                          setName(e.target.value);
                          if(e.target.value.length <= 3){
                            sererr1("Enter more than 3 charactors")
                          }else if(e.target.value.length >= 4){
                            sererr1("")
                          }
                        }}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Price</label>
                      <h6  style={{color: "#FF0000" }}>{err2}</h6>
                      <input
                        type="number"
                        pattern="[0-9]+"
                        className="form-control"
                        placeholder="Enter price"
                        value={price}
                        onChange={(e) => {
                          setPrice(e.target.value);
                          if(e.target.value > 4000){
                            seterr2("Price should be lower than Rs.4000.00 ")
                          }else if(e.target.value <= 4000){
                            seterr2("")
                          }
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
                        <option>Appetizers</option>
                        <option>Beverages</option>
                        <option>Desserts</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Description</label>
                      <h6  style={{color: "#FF0000" }}>{err3}</h6>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Description"
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                          if(e.target.value.length <= 10){
                            seterr3("Enter more than 10 charactors")
                          }else if(e.target.value.length >= 10){
                            seterr3("")
                          }
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
                        style={{ width: "60%" }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Foods</h4>
                  <div
                    className="table-responsive"
                    style={{
                      maxHeight: "530px",
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
                            <td>Rs.{post.price}.00</td>
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
    </div>
  );
}

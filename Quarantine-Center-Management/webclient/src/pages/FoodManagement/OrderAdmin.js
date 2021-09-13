import React, { useState, useEffect } from "react";
import axios from "axios";
import uniqid from "uniqid";
import { XSquare } from "react-feather";
import { Trash2 } from "react-feather";
import { Check } from "react-feather";
import { Eye } from "react-feather";

export default function OrderAdmin() {
  let count = 0;
  let [orders, setOrders] = useState([]);
  let [foods, setFoods] = useState([]);

  let f1 = [];
  let content;
  useEffect(() => {
    axios
      .get("http://localhost:8000/order/")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  function getOrderDetails(oid) {
    console.log(oid);
    axios
      .get(`http://localhost:8000/order/getbyorder/${oid}`)
      .then((res) => {
        f1 = res.data;
        console.log(f1);
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="row card-body">
              <div className="col-md-7">
                <h4>Color</h4>
                <br />
                <h4>Ongoing orders</h4>
              </div>
              <div className="col-md-5">
                <h4>Color</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div className="card">
            <div className="row card-body">
              <div className="col-md-7">
                <h4>Color</h4>
                <br />
                <h4>Ongoing orders</h4>
              </div>
              <div className="col-md-5">
                <h4>Color</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div className="card">
            <div className="row card-body">
              <div className="col-md-7">
                <h4>Color</h4>
                <br />
                <h4>Ongoing orders</h4>
              </div>
              <div className="col-md-5">
                <h4>Color</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <div
            className="card"
            style={{
              marginTop: "20px",
            }}
          >
            <div className="card-body">
              <h4 className="card-title">Foods</h4>
              <div className="row">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Date"
                  />
                </div>
                <div className="col-md-4">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type"
                  />
                </div>
                <div className="col-md-4">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
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
                      <th>Order ID</th>
                      <th>Patient ID</th>
                      <th>Instructions</th>
                      <th>Ordered Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((post) => (
                      <tr key={post.orderID}>
                        <td>{(count = count + 1)}</td>
                        <td>{post.orderID}</td>
                        <td>{post.patientID}</td>
                        <td>{post.instructions}</td>
                        <td>{post.orderedDate}</td>
                        <td>
                          <div className="input-group-append">
                            <Eye
                              className="btn btn-outline-primary btn-sm"
                              color="black"
                              onClick={() => getOrderDetails(post.orderID)}
                              style={{ marginLeft: "10px" }}
                              size="30px"
                            />
                            <Check
                              className="btn btn-outline-success btn-sm"
                              color="black"
                              // onClick={() => deleteFood(post.foodID)}
                              style={{ marginLeft: "10px" }}
                              size="30px"
                            />
                            <XSquare
                              className="btn btn-outline-warning btn-sm"
                              color="black"
                              // onClick={() => deleteFood(post.foodID)}
                              style={{ marginLeft: "10px" }}
                              size="30px"
                            />
                            <Trash2
                              className="btn btn-outline-danger btn-sm"
                              color="black"
                              // onClick={() => deleteFood(post.foodID)}
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
        <div className="col-md-5">
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
                      <th>Image</th>
                      <th>Food ID</th>
                      <th>Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

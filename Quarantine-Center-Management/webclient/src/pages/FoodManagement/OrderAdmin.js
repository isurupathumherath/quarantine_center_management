import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Check } from "react-feather";
import { Trash2 } from "react-feather";
import { Loader } from "react-feather";
import { Eye } from "react-feather";
export default function OrderAdmin() {
  let count = 0;
  let [orders, setOrders] = useState([]);
  let [completeorders, setCompleteorders] = useState([]);
  let [foods, setFoods] = useState([]);
  let [active, setActive] = useState(1);
  let [orderid, setOrderid] = useState(1);
  const [modelOpen, setmodelOpen] = useState(false);
  let f1 = [];
  let content;
  useEffect(() => {
    axios
      .get("http://localhost:8000/order/active")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });

    axios
      .get("http://localhost:8000/order/complete")
      .then((res) => {
        setCompleteorders(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  function changeFoodStatus(id2, status1) {
    let newFoodStatus;
    console.log(id2, status1);
    if (status1 == 1) {
      newFoodStatus = {
        status: 2,
      };
    } else if (status1 == 2) {
      newFoodStatus = {
        status: 1,
      };
    }

    axios
      .put(`http://localhost:8000/order/changefoodstatus/${id2}`, newFoodStatus)
      .then(() => {
        alert("Status changed");
        axios
          .get(`http://localhost:8000/order/getbyorder/${orderid}`)
          .then((res) => {
            f1 = res.data;
            setFoods(f1.orderDetails);
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

  function changeOrderStatus(id2, status1) {
    let newStatus;
    console.log(id2, status1);
    if (status1 == 1) {
      newStatus = {
        status: 2,
      };
    } else if (status1 == 2) {
      newStatus = {
        status: 1,
      };
    }

    axios
      .put(`http://localhost:8000/order/updateorderstatus/${id2}`, newStatus)
      .then(() => {
        axios
          .get("http://localhost:8000/order/active")
          .then((res) => {
            setOrders(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });

        axios
          .get("http://localhost:8000/order/complete")
          .then((res) => {
            setCompleteorders(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((err) => {
        alert(err);
        alert("asd");
      });

    // window.location.reload();
  }

  function modalopen(oid) {
    setActive(2);
    setOrderid(oid);
    axios
      .get(`http://localhost:8000/order/getbyorder/${oid}`)
      .then((res) => {
        f1 = res.data;
        setFoods(f1.orderDetails);
      })
      .catch((err) => {
        alert(err.message);
      });
    setmodelOpen(true);
  }
  function modalClose() {
    setActive(1);
    setmodelOpen(false);
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
        <div className="col-md-12">
          <div
            className="card"
            style={{
              marginTop: "20px",
            }}
          >
            <div className="card-body">
              <h4 className="card-title">Ongoing Orders</h4>
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
                              className={
                                active == 1
                                  ? "btn btn-outline-primary btn-sm"
                                  : null
                              }
                              color="black"
                              onClick={() => modalopen(post.orderID)}
                              style={{ marginLeft: "10px" }}
                              size="35px"
                            />
                            {post.status == 1 ? (
                              <button
                                className={
                                  active == 1
                                    ? "btn btn-outline-warning btn-sm"
                                    : null
                                }
                                key={post.foodID}
                                size="35px"
                                style={{ marginLeft: "10px" }}
                                onClick={() =>
                                  changeOrderStatus(post._id, post.status)
                                }
                              >
                                <i
                                  class="fas fa-spinner fa-spin"
                                  style={{ color: "black" }}
                                ></i>
                              </button>
                            ) : post.status == 2 ? (
                              <Check
                                className={
                                  active == 1
                                    ? "btn btn-outline-success btn-sm"
                                    : null
                                }
                                color="black"
                                size="35px"
                                onClick={() =>
                                  changeOrderStatus(post._id, post.status)
                                }
                                style={{ marginLeft: "10px" }}
                              />
                            ) : null}
                            <Trash2
                              className={
                                active == 1
                                  ? "btn btn-outline-danger btn-sm"
                                  : null
                              }
                              color="black"
                              // onClick={() => deleteFood(post.foodID)}
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
      <div className="row">
        <div className="col-md-12">
          <div
            className="card"
            style={{
              marginTop: "20px",
            }}
          >
            <div className="card-body">
              <h4 className="card-title">Completed Orders</h4>
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
                    {completeorders.map((post) => (
                      <tr key={post.orderID}>
                        <td>{(count = count + 1)}</td>
                        <td>{post.orderID}</td>
                        <td>{post.patientID}</td>
                        <td>{post.instructions}</td>
                        <td>{post.orderedDate}</td>
                        <td>
                          <div className="input-group-append">
                            <Eye
                              className={
                                active == 1
                                  ? "btn btn-outline-primary btn-sm"
                                  : null
                              }
                              color="black"
                              onClick={() => modalopen(post.orderID)}
                              style={{ marginLeft: "10px" }}
                              size="35px"
                            />
                            {post.status == 1 ? (
                              <Loader
                                className={
                                  active == 1
                                    ? "btn btn-outline-warning btn-sm"
                                    : null
                                }
                                color="black"
                                key={post.foodID}
                                size="35px"
                                style={{ marginLeft: "10px" }}
                                onClick={() =>
                                  changeOrderStatus(post._id, post.status)
                                }
                              />
                            ) : post.status == 2 ? (
                              <Check
                                className={
                                  active == 1
                                    ? "btn btn-outline-success btn-sm"
                                    : null
                                }
                                color="black"
                                size="35px"
                                onClick={() =>
                                  changeOrderStatus(post._id, post.status)
                                }
                                style={{ marginLeft: "10px" }}
                              />
                            ) : null}
                            <Trash2
                              className={
                                active == 1
                                  ? "btn btn-outline-danger btn-sm"
                                  : null
                              }
                              color="black"
                              // onClick={() => deleteFood(post.foodID)}
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
      <Modal animation={true} isOpen={modelOpen} onRequestClose={modalClose}>
        <div className="row">
          <div className="col-md-12">
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
              <tbody>
                {foods.map((post) => (
                  <tr key={post.orderID}>
                    <td>{(count = count + 1)}</td>
                    <td className="py-1">
                      <img
                        src={`../../img/${post.image}`}
                        className="rounded-lg"
                        alt="image"
                        style={({ width: "600px" }, { height: "50px" })}
                      />
                    </td>

                    <td>{post.id}</td>
                    <td>{post.name}</td>

                    <td style={{ width: "180px" }}>
                      <div className="input-group-append">
                        {post.status == 1 ? (
                          <Loader
                            className="btn btn-outline-warning btn-sm"
                            color="black"
                            key={post.foodID}
                            size="35px"
                            style={{ marginLeft: "10px" }}
                            onClick={() =>
                              changeFoodStatus(post._id, post.status)
                            }
                          />
                        ) : post.status == 2 ? (
                          <Check
                            className="btn btn-outline-success btn-sm"
                            color="black"
                            size="35px"
                            onClick={() =>
                              changeFoodStatus(post._id, post.status)
                            }
                            style={{ marginLeft: "10px" }}
                          />
                        ) : null}
                        <Trash2
                          className="btn btn-outline-danger btn-sm"
                          color="black"
                          // onClick={() => deleteFood(post.foodID)}
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
      </Modal>
    </div>
  );
}

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
  let [completelength, setcompletelength] = useState(0);
  let [ongoinglength, setongoinglength] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8000/order/active")
      .then((res) => {
        setOrders(res.data);
        setongoinglength(res.data.length);
      })
      .catch((err) => {
        alert(err.message);
      });

    axios
      .get("http://localhost:8000/order/complete")
      .then((res) => {
        setCompleteorders(res.data);
        setcompletelength(res.data.length);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  function changeFoodStatus(id2, status1) {
    let newFoodStatus;
    console.log(id2, status1);
    if (status1 == 1) {
      if (window.confirm("Are you want to Deactivate order item")) {
        newFoodStatus = {
          status: 2,
        };
        axios
          .put(
            `http://localhost:8000/order/changefoodstatus/${id2}`,
            newFoodStatus
          )
          .then(() => {
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
    } else if (status1 == 2) {
      if (window.confirm("Are you want to Activate order item")) {
        newFoodStatus = {
          status: 1,
        };
        axios
          .put(
            `http://localhost:8000/order/changefoodstatus/${id2}`,
            newFoodStatus
          )
          .then(() => {
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
    }
  }

  function changeOrderStatus(id2, status1) {
    let newStatus;
    console.log(id2, status1);
    if (status1 == 1) {
      if (window.confirm("Confirm order is completed")) {
        newStatus = {
          status: 2,
        };
        axios
          .put(
            `http://localhost:8000/order/updateorderstatus/${id2}`,
            newStatus
          )
          .then(() => {
            axios
              .get("http://localhost:8000/order/active")
              .then((res) => {
                setOrders(res.data);
                setongoinglength(res.data.length);
              })
              .catch((err) => {
                alert(err.message);
              });

            axios
              .get("http://localhost:8000/order/complete")
              .then((res) => {
                setCompleteorders(res.data);
                setcompletelength(res.data.length);
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
    } else if (status1 == 2) {
      if (window.confirm("Confirm order is not completed")) {
        newStatus = {
          status: 1,
        };
        axios
          .put(
            `http://localhost:8000/order/updateorderstatus/${id2}`,
            newStatus
          )
          .then(() => {
            axios
              .get("http://localhost:8000/order/active")
              .then((res) => {
                setOrders(res.data);
                setongoinglength(res.data.length);
              })
              .catch((err) => {
                alert(err.message);
              });

            axios
              .get("http://localhost:8000/order/complete")
              .then((res) => {
                setCompleteorders(res.data);
                setcompletelength(res.data.length);
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
    }
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

  function filterContent(data, userSearch) {
    // setPackages(res.data.filter((item) =>item.seller === seller));

    if (userSearch == null) {
      axios
        .get("http://localhost:8000/order/active/")
        .then((res) => {
          setOrders(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    let result = data.filter((post) => post.orderedDate.includes(userSearch));

    if (result != null) {
    } else if (result.length == 0) {
      //document.getElementById("txt2").innerHTML = "No Result Found!";
    } else {
    }

    setOrders(result);
  }

  function handleSearch(e) {
    let userSearch = e;
    console.log(userSearch);

    axios
      .get("http://localhost:8000/order/active/")
      .then((res) => {
        filterContent(res.data, userSearch);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function filterContent1(data1, userSearch1) {
    // setPackages(res.data.filter((item) =>item.seller === seller));

    if (userSearch1 == null) {
      axios
        .get("http://localhost:8000/order/complete/")
        .then((res) => {
          setCompleteorders(res.data1);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    let result1 = data1.filter((post) =>
      post.orderedDate.includes(userSearch1)
    );

    if (result1 != null) {
    } else if (result1.length == 0) {
      //document.getElementById("txt2").innerHTML = "No Result Found!";
    } else {
    }

    setCompleteorders(result1);
  }

  function handleSearch1(e) {
    let userSearch1 = e;
    console.log(userSearch1);

    axios
      .get("http://localhost:8000/order/complete/")
      .then((res) => {
        filterContent1(res.data, userSearch1);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function filterContent1(data1, userSearch1) {
    // setPackages(res.data.filter((item) =>item.seller === seller));

    if (userSearch1 == null) {
      axios
        .get("http://localhost:8000/order/getactivebypatient/102")
        .then((res) => {
          setOrders(res.data1);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    let result1 = data1.filter((post) =>
      post.orderedDate.includes(userSearch1)
    );

    if (result1 != null) {
    } else if (result1.length == 0) {
      //document.getElementById("txt2").innerHTML = "No Result Found!";
    } else {
    }

    setCompleteorders(result1);
  }

  function handleSearch1(e) {
    let userSearch1 = e;
    console.log(userSearch1);

    axios
      .get("http://localhost:8000/order/getcompletedbypatient/102")
      .then((res) => {
        filterContent1(res.data, userSearch1);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <div className="container" style={{ width: "90%", fontSize: "18px" }}>
        <div className="row" style={{ padding: "0px 0px 10px 0px" }}>
          <div className="col">
            <div
              style={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "10px",
                borderColor: "#00408C",
                padding: "20px 20px 20px 20px",
                margin: "10px 0px 0px 0px",
              }}
            >
              <div className="row">
                <div className="col-8">
                  <span style={{ color: "orange" }}>{ongoinglength}</span>
                  <br />
                  <span>Ongoing Orders</span>
                </div>
                <div className="col">
                  <i
                    class="fa fa-map-marker"
                    aria-hidden="true"
                    style={{
                      color: "orange",
                      fontSize: "30px",
                      marginTop: "10px",
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              style={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "10px",
                borderColor: "#00408C",
                padding: "20px 20px 20px 20px",
                margin: "10px 0px 0px 0px",
              }}
            >
              <div className="row">
                <div className="col-8">
                  <span style={{ color: "Green" }}>{completelength}</span>
                  <br />
                  <span>Completed orders</span>
                </div>
                <div className="col">
                  <i
                    class="fa fa-map-marker"
                    aria-hidden="true"
                    style={{
                      color: "Green",
                      fontSize: "30px",
                      marginTop: "10px",
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              style={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "10px",
                borderColor: "#00408C",
                padding: "20px 20px 20px 20px",
                margin: "10px 0px 0px 0px",
              }}
            >
              <div className="row">
                <div className="col-8">
                  <span style={{ color: "blue" }}>
                    {ongoinglength + completelength}
                  </span>
                  <br />
                  <span>All Orders</span>
                </div>
                <div className="col">
                  <i
                    class="fa fa-map-marker"
                    aria-hidden="true"
                    style={{
                      color: "blue",
                      fontSize: "30px",
                      marginTop: "10px",
                    }}
                  ></i>
                </div>
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
              <h4 className="card-title">Ongoing Orders</h4>
              <div className="row">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Date"
                    onChange={(e) => handleSearch(e.target.value)}
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
                        <td>{post.orderedDate.substr(0, 10)}</td>
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
                            {/* <Trash2
                              className={
                                active == 1
                                  ? "btn btn-outline-danger btn-sm"
                                  : null
                              }
                              color="black"
                              // onClick={() => deleteFood(post.foodID)}
                              style={{ marginLeft: "10px" }}
                              size="35px"
                            /> */}
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
                    onChange={(e) => handleSearch1(e.target.value)}
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
                        <td>{post.orderedDate.substr(0, 10)}</td>
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
                            {/* <Trash2
                              className={
                                active == 1
                                  ? "btn btn-outline-danger btn-sm"
                                  : null
                              }
                              color="black"
                              // onClick={() => deleteFood(post.foodID)}
                              style={{ marginLeft: "10px" }}
                              size="35px"
                            /> */}
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

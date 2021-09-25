import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Check } from "react-feather";
import { Trash2 } from "react-feather";
import { Loader } from "react-feather";
import { Eye } from "react-feather";
export default function AllOrders() {
  let count = 0;
  let [orders, setOrders] = useState([]);
  let [completeorders, setCompleteorders] = useState([]);
  let [foods, setFoods] = useState([]);
  let [active, setActive] = useState(1);
  const [modelOpen, setmodelOpen] = useState(false);
  let [completelength, setcompletelength] = useState(0);
  let [ongoinglength, setongoinglength] = useState(0);
  let f1 = [];

  useEffect(() => {
    axios
      .get("http://localhost:8000/order/getactivebypatient/102")
      .then((res) => {
        setOrders(res.data);
        setongoinglength(res.data.length);
      })
      .catch((err) => {
        alert(err.message);
      });

    axios
      .get("http://localhost:8000/order/getcompletedbypatient/102")
      .then((res) => {
        setCompleteorders(res.data);
        setcompletelength(res.data.length);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  function modalopen(oid) {
    setActive(2);
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
        .get("http://localhost:8000/order/getactivebypatient/102")
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
      .get("http://localhost:8000/order/getactivebypatient/102")
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
        .get("http://localhost:8000/order/getactivebypatient/102")
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
                  <span style={{ color: "red" }}>
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
                      color: "red",
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
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Date"
                    onChange={(e) => handleSearch(e.target.value)}
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
                      <th>Total Price</th>
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
                        <td>Rs.{post.total}.00</td>
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
                                  active == 1 ? "btn btn-warning btn-sm" : null
                                }
                                key={post.foodID}
                                size="35px"
                                style={{ marginLeft: "10px" }}
                                disabled
                              >
                                <i
                                  class="fas fa-spinner fa-spin"
                                  style={{ color: "black" }}
                                ></i>
                              </button>
                            ) : null}
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
                      <th>Total Price</th>
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
                        <td>Rs.{post.total}.00</td>
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
                            {post.status == 2 ? (
                              <Check
                                className={
                                  active == 1 ? "btn btn-success btn-sm" : null
                                }
                                color="black"
                                size="35px"
                                disabled
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
                          />
                        ) : post.status == 2 ? (
                          <Check
                            className="btn btn-outline-success btn-sm"
                            color="black"
                            size="35px"
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

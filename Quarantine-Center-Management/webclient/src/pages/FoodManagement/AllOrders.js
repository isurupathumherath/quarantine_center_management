import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Check } from "react-feather";
import { Trash2 } from "react-feather";
import { Loader } from "react-feather";
import { Eye } from "react-feather";
import ModelCss from "../../assets/FoodManagement/css/modelCss.css";
import jsPDF from "jspdf";
import moment from "moment";
import Header from "../../components/FoodManagement/Header";

export default function AllOrders() {
  let count = 0;
  let [orders, setOrders] = useState([]);
  let [allorders, setallorders] = useState([]);
  let [completeorders, setCompleteorders] = useState([]);
  let [foods, setFoods] = useState([]);
  let [active, setActive] = useState(1);
  const [modelOpen, setmodelOpen] = useState(false);
  let [completelength, setcompletelength] = useState(0);
  let [ongoinglength, setongoinglength] = useState(0);
  let recipt = [];

  let t1 = 0;

  let f1 = [];

  useEffect(() => {
    axios
      .get("http://localhost:8000/order/getactivebypatient/613b2cac1aaf8d0fdcf35ff3")
      .then((res) => {
        setOrders(res.data);
        setongoinglength(res.data.length);
      })
      .catch((err) => {
        alert(err.message);
      });

    axios
      .get("http://localhost:8000/order/getcompletedbypatient/613b2cac1aaf8d0fdcf35ff3")
      .then((res) => {
        setCompleteorders(res.data);
        setcompletelength(res.data.length);
      })
      .catch((err) => {
        alert(err.message);
      });

    axios
      .get("http://localhost:8000/order/getallbypatientid/102")
      .then((res) => {
        setallorders(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  allorders.map((post) => (t1 = t1 + post.total));

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

  function receiptgenerate() {
    let n = 200;
    let p = 235;
    let q = 0;
    let c = 0;
    let ftotal = 0;
    var img = new Image();
    img.src = "assets/img/logo.png";
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.setFont("Helvertica", "bold");
    doc.addImage(img, "png", 280, 10, 90, 50);
    doc.setFontSize(22);
    doc.text(220, 70, "Qurentine center management");
    doc.setFontSize(18);
    doc.text(100, 100, "Contact Number:   011-2298476");
    doc.text(400, 100, "Location:  Anuradhapura Colombo");
    doc.text(100, 130, "Date: ");
    doc.text(150, 130, moment().format("YYYY-MM-DD"));
    doc.text(
      50,
      150,
      "-----------------------------------------------------------------------------------------------------------------------------"
    );

    doc.text(300, 175, "Food Name: ");
    doc.text(500, 175, "Price: ");
    doc.setFontSize(16);
    doc.setFont("Helvertica", "italic");
    orders.map((post) => {
      doc.text(100, n + 30, "Order ID: ");
      doc.text(175, n + 30, post.orderID);
      doc.text(100, n, "Order Date: ");
      doc.text(175, n, post.orderedDate.substr(0, 10));

      post.orderDetails.map((data) => {
        doc.text(300, p, data.name);
        doc.text(500, p, "Rs." + String(data.price) + ".00");
        c = c + 1;

        p >= 415 ? doc.addPage() : (q = 1);
        p >= 415 ? (p = 0) : (q = 2);
        console.log(n);

        p = p + 30;
      });
      doc.setTextColor("red");
      doc.text(465, p, "Total: " + "Rs." + String(post.total) + ".00");
      ftotal = ftotal + post.total;
      doc.setTextColor("black");
      doc.text(
        50,
        p + 30,
        "******************************************************************************************************************************"
      );
      p = p + 60;
      n = p;
      p = p + 30;
      // n >= 440 ? doc.addPage() : (q = 1);
      // n >= 440 ? (p = 30) : (q = 2);
      // n >= 440 ? (n = 30) : (q = 2);
    });

    doc.text(100, p, "Number of items ordered = ");
    doc.text(280, p, String(c));
    doc.setTextColor("red");
    doc.text(380, p, "Total payment = ");
    doc.text(480, p, "Rs." + String(ftotal) + ".00");

    doc.save("xb.pdf");
  }
  function reportgenerate() {
    console.log("report");
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
      <Header name="Order details" icon="fa-credit-card" />
      <div className="container" style={{ width: "90%", fontSize: "18px" }}>
        <div className="row" style={{ padding: "0px 0px 10px 0px" }}>
          <div className="col-md-3">
            <div
              className="border border-warning"
              style={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "10px",
                borderColor: "red",
                border: "2px",
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
                    class="fa fa-hourglass-end"
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
          <div className="col-md-3">
            <div
              className="border border-success"
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
                  <span>Finished orders</span>
                </div>
                <div className="col">
                  <i
                    class="fa fa-check"
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
          <div className="col-md-3">
            <div
              className="border border-danger"
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
                    class="fa fa-building"
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
          <div className="col-md-3">
            <div
              className="border border-primary"
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
                  <span style={{ color: "blue" }}>Rs.{t1}.00</span>
                  <br />
                  <span>Total Price</span>
                </div>
                <div className="col">
                  <i
                    class="fa fa-calculator"
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

      <div className="row ">
        <div className="col-md-12">
          <div
            className="card"
            style={{
              marginTop: "20px",
            }}
          >
            <div className="card-body border border-secondary">
              <div className="row">
                <div className="col-md-9">
                  <h4 className="card-title">Ongoing Orders</h4>
                </div>
                <div className="col-md-3">
                  <button
                    className="btn btn-info"
                    style={{ marginLeft: "20px" }}
                    onClick={receiptgenerate}
                  >
                    <i className="fa fa-save"></i> Generate receipt
                  </button>
                </div>
              </div>

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
              <br />
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
                      <th>Delivery Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((post) => (
                      <tr key={post.orderID}>
                        <td>{(count = count + 1)}</td>
                        <td style={{ color: "#20c0f3" }}>{post.orderID}</td>
                        <td>Rs.{post.total}.00</td>
                        <td>{post.instructions}</td>
                        <td>{post.deliveryDate}</td>
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
            className="card  border border-secondary"
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
              <br />
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
                      <th>Delivery Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {completeorders.map((post) => (
                      <tr key={post.orderID}>
                        <td>{(count = count + 1)}</td>
                        <td style={{ color: "#20c0f3" }}>{post.orderID}</td>
                        <td>Rs.{post.total}.00</td>
                        <td>{post.instructions}</td>
                        <td>{post.deliveryDate}</td>
                        {/* substr(0, 10) */}
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
      <Modal
        animation={true}
        isOpen={modelOpen}
        onRequestClose={modalClose}
        style={
          (ModelCss,
          {
            display: "flex",

            content: {
              width: "70%",
              height: "80%",
              margin: "auto",
              opacity: "1",
              borderStyle: "solid",
            },
          })
        }
      >
        <div className="row">
          <div className="col">
            <h2
              className="card-title d-flex justify-content-center"
              style={{ fontWeight: "bold" }}
            >
              Quarentine Center Management
            </h2>
            <br />

            <div className="row">
              <div className="col-md-7">
                <h4 className="card-title">
                  <b>Contact Number:</b> 011-2289485
                </h4>
              </div>
              <div className="col-md-5">
                <h4 className="card-title">
                  <b>Location:</b> We provide the best care available
                </h4>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <h4 className="card-title">
                  <b>Order Details: </b>
                </h4>
              </div>
            </div>
          </div>
        </div>

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

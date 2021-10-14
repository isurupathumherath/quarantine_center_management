import React, { useState, useEffect, PureComponent } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Eye } from "react-feather";
import moment from "moment";
import pdfConverter from "jspdf";
import html2canvas from "html2canvas";
import Header from "../../components/FoodManagement/Header";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  ResponsiveContainer,
  Pie,
} from "recharts";
export default function FoodReport() {
  let [fromdate, setfromdate] = useState("");
  let [todate, settodate] = useState("");
  let [allorders, setallorders] = useState([]);
  let [detailedorders, setDetailedorders] = useState([]);

  let details = [];
  let orders = [];

  let [datadiv, setDatadiv] = useState();
  let [detailsdiv, setDetailsdiv] = useState();

  // const data01 = [
  //   { name: "Group A", value: 400 },
  //   { name: "Group B", value: 300 },
  //   { name: "Group C", value: 300 },
  //   { name: "Group D", value: 200 },
  // ];
  // const data02 = [
  //   { name: "A1", value: 100 },
  //   { name: "A2", value: 300 },
  //   { name: "B1", value: 100 },
  //   { name: "B2", value: 80 },
  //   { name: "B3", value: 40 },
  //   { name: "B4", value: 30 },
  //   { name: "B5", value: 50 },
  //   { name: "C1", value: 100 },
  //   { name: "C2", value: 200 },
  //   { name: "D1", value: 150 },
  //   { name: "D2", value: 50 },
  // ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let n = 5;
  let data1 = [];

  let oldDate = "2021-2-2";
  let tot = 0;
  let c = 0;
  let fulltot = 0;

  function generatepdf() {
    allorders.map((post) => {
      fulltot = fulltot + post.Value;
    });

    var img = new Image();
    img.src = "assets/img/logo.png";
    var doc = new pdfConverter("landscape", "px", "a4", "false");
    doc.setFont("Helvertica", "bold");
    doc.setFontSize(22);
    doc.addImage(img, "png", 280, 10, 90, 50);
    doc.text(220, 70, "Qurentine center management");
    doc.setFontSize(18);
    doc.text(100, 100, "Contact Number:   011-2298476");
    doc.text(400, 100, "Location:  Anuradhapura Colombo");

    doc.text(
      50,
      145,
      "-----------------------------------------------------------------------------------------------------------------------------"
    );
    var width = doc.internal.pageSize.getWidth();
    var height = 200;

    var h1 = window.document.getElementById("chart");

    html2canvas(h1).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      doc.addImage(img, "png", 0, 105, width, height);
      doc.setFontSize(16);
      allorders.map((post) => {
        doc.setTextColor("black");
        doc.text(n, 335, "| " + post.name);
        doc.setFontSize(14);
        doc.setTextColor("#8884d8");
        doc.text(n, 355, "| Value: " + post.Value);
        doc.setTextColor("#82ca9d");
        doc.text(n, 375, "| Items: " + post.Items);
        n = n + 63;
      });
      doc.setFontSize(17);
      doc.setTextColor("red");
      doc.text(10, 415, "Total price in given range : Rs." + fulltot + ".00");
      doc.save("chart.pdf");
    });
    console.log(allorders);
  }

  function fetchdata(details1) {
    details1.map((post) => {
      let obj1 = {
        name: post.name,
        Value: post.price,
      };
      details.push(obj1);
    });

    console.log(details);
    setDetailedorders(details);

    setDetailsdiv(
      <div className="row">
        <div className="col-md-6">
          <h4>
            <strong>
              <center>Name</center>
            </strong>
          </h4>

          {details1.map((post) => {
            return (
              <div>
                <h5>
                  <center>{post.name}</center>{" "}
                </h5>
                <h5></h5>
              </div>
            );
          })}
        </div>
        <div className="col-md-6">
          <h4>
            <strong>
              {" "}
              <center>Price</center>{" "}
            </strong>
          </h4>
          {details1.map((post) => {
            return (
              <div>
                <h5>
                  <center>{post.price}</center>
                </h5>
                <h5></h5>
              </div>
            );
          })}
        </div>
      </div>
    );
    details = [];
  }

  function getData() {
    fromdate = fromdate + "-01";
    todate = todate + "-30";

    axios
      .get(`http://localhost:8000/order/getbyyear/${fromdate}/${todate}`)
      .then((res) => {
        orders = res.data;

        setDatadiv(
          <div className="col-md-12">
            <h4
            style={{
              color: "#0057d1",
              fontSize: "30px",
              marginTop: "10px",
              marginBottom: "10px",
            }}>All orders</h4>

            <div>
              <div
                className="table-responsive"
                style={{
                  maxHeight: "450px",
                  overflowY: "scroll",
                  overflowX: "hidden",
                }}
              >
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody style={{ maxWidth: "100px" }}>
                    {orders.map((post) => {
                      return (
                        <tr>
                          <td>{post.orderID}</td>
                          <td>Rs.{post.total}.00</td>
                          <td>
                            <Eye
                              className="btn btn-outline-info btn-sm"
                              color="black"
                              style={{
                                marginLeft: "10px",
                              }}
                              size="35px"
                              onClick={() => fetchdata(post.orderDetails)}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
        orders.map((post, index) => {
          if (index == 0) {
            tot = tot + post.total;
            c = c + 1;
            oldDate = post.orderedDate;
          } else if (oldDate.substr(0, 7) == post.orderedDate.substr(0, 7)) {
            tot = tot + post.total;
            c = c + 1;
            if (orders[index + 1] == null) {
              let d = new Date(post.orderedDate);
              let monthString = monthNames[d.getMonth()];
              let obj = {
                name: monthString,
                Value: tot,
                Items: c,
              };
              data1.push(obj);
            }
          } else {
            let d = new Date(post.orderedDate);
            let monthString = monthNames[d.getMonth() - 1];
            let obj = {
              name: monthString,
              Value: tot,
              Items: c,
            };
            data1.push(obj);
            tot = 0;
            c = 0;
            c = c + 1;
            tot = tot + post.total;
          }
          oldDate = post.orderedDate;
        });

        setallorders(data1);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div>
      <Header name="Report Generation" icon="fa-bar-chart" style="100%" />
      {/* <img src="/assets/img/logo.png" alt="Logo" /> */}
      <div className="container" style={{ width: "89%", fontSize: "18px" }}>
        <div
          className="row"
          style={{ padding: "0px 0px 10px 0px", marginLeft: "-90px" }}
        >
          <div className="col">
            <div
              style={{
                width: "109%",
                backgroundColor: "white",
                borderRadius: "10px",
                borderColor: "#00408C",
                padding: "20px 20px 20px 20px",
                margin: "10px 0px 0px 0px",
              }}
            >
              <div className="content-container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 id="sss" className="card-title">
                          Fetch data
                        </h4>
                      </div>
                      <div className="card-body">
                        <form action="#" onSubmit={getData}>
                          <div className="row" id="ddddd">
                            <div className="col-md-3">
                              From:
                              <input
                                className="form-control"
                                type="month"
                                onChange={(e) => {
                                  setfromdate(e.target.value);
                                }}
                                max={moment().format("YYYY-MM")}
                                required
                              />
                            </div>

                            <div className="col-md-3">
                              To:
                              <input
                                className="form-control"
                                type="month"
                                onChange={(e) => {
                                  settodate(e.target.value);
                                }}
                                max={moment().format("YYYY-MM")}
                                required
                              />
                            </div>
                            <div
                              className="col-md-3"
                              style={{ marginTop: "25px" }}
                            >
                              <input
                                type="submit"
                                value="Search"
                                className="btn btn-primary"
                                style={{ width: "60%" }}
                              />
                            </div>
                            <div
                              className="col-md-3"
                              style={{ marginTop: "25px" }}
                            >
                              <input
                                type="button"
                                value="Generate report"
                                className="btn btn-primary"
                                style={{ width: "60%" }}
                                onClick={generatepdf}
                              />
                            </div>
                          </div>
                        </form>
                      </div>

                      <div id="chart" className="row">
                        <div className="col-md-12">
                          <BarChart
                            width={1100}
                            height={300}
                            data={allorders}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Value" fill="#8884d8" />
                            <Bar dataKey="Items" fill="#82ca9d" />
                          </BarChart>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-5 border border-color-dark">
                    {datadiv}
                  </div>
                  <div className="col-md-7 border-color-dark">
                    {detailsdiv}
                    <center>
                      <PieChart width={400} height={400}>
                        <Pie
                          data={detailedorders}
                          dataKey="Value"
                          cx="50%"
                          cy="50%"
                          outerRadius={60}
                          fill="#8884d8"
                        />
                        <Pie
                          data={detailedorders}
                          dataKey="Value"
                          cx="50%"
                          cy="50%"
                          innerRadius={70}
                          outerRadius={90}
                          fill="#82ca9d"
                          label
                        />
                        <Tooltip />
                      </PieChart>
                    </center>
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
import React, { useState, useEffect, PureComponent } from "react";
import axios from "axios";
import Modal from "react-modal";
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
} from "recharts";
export default function FoodReport() {
  let [fromdate, setfromdate] = useState("");
  let [todate, settodate] = useState("");
  let [allorders, setallorders] = useState([]);

  let orders = [];

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

    console.log(fulltot);

    var doc = new pdfConverter("landscape", "px", "a4", "false");
    doc.setFont("Helvertica", "bold");
    doc.setFontSize(22);
    doc.text(250, 60, "Qurentine center management");
    doc.setFontSize(18);
    doc.text(100, 90, "Contact Number:   011-2298476");
    doc.text(400, 90, "Location:  Anuradhapura Colombo");

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
      doc.addImage(img, "png", 0, 100, width, height);
      doc.setFontSize(16);
      allorders.map((post) => {
        doc.setTextColor("black");
        doc.text(n, 330, "| " + post.name);
        doc.setFontSize(14);
        doc.setTextColor("#8884d8");
        doc.text(n, 350, "| Value: " + post.Value);
        doc.setTextColor("#82ca9d");
        doc.text(n, 370, "| Items: " + post.Items);
        n = n + 63;
      });
      doc.setFontSize(17);
      doc.setTextColor("red");
      doc.text(10, 410, "Total price in given range : Rs." + fulltot + ".00");
      doc.save("chart.pdf");
    });
    console.log(allorders);
  }

  function getData() {
    fromdate = fromdate + "-01";
    todate = todate + "-30";

    axios
      .get(`http://localhost:8000/order/getbyyear/${fromdate}/${todate}`)
      .then((res) => {
        orders = res.data;
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

    console.log("all orders");
  }

  return (
    <div>
      <Header name="Report Generation" icon="fa-bar-chart" style="100%" />
      {/* <img src="/assets/img/logo.png" alt="Logo" /> */}
      <div className="container" style={{ width: "88%", fontSize: "18px" }}>
        <div
          className="row"
          style={{ padding: "0px 0px 10px 0px", marginLeft: "-70px" }}
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
                          Add/Update
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
                      {console.log(allorders)}

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect, PureComponent } from "react";
import axios from "axios";
import Modal from "react-modal";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
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
  // let allorders = [];
  let data1 = [];

  let oldDate = "2021-2-2";
  let tot = 0;
  let c = 0;
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  function getData() {
    console.log(fromdate);
    console.log(todate);
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
    console.log(allorders);
    // allorders = data;
    console.log(data1);
    console.log(data);
  }

  return (
    <div className="container" style={{ width: "100%", fontSize: "18px" }}>
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
                      <h4 className="card-title">Add/Update</h4>
                    </div>
                    <div className="card-body">
                      <form action="#" onSubmit={getData}>
                        <div className="row">
                          <div className="col-md-3">
                            From:
                            <input
                              className="form-control"
                              type="month"
                              onChange={(e) => {
                                setfromdate(e.target.value);
                              }}
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
                              required
                            />
                          </div>
                          <div
                            className="col-md-4"
                            style={{ marginTop: "25px" }}
                          >
                            <input
                              type="submit"
                              value="Submit"
                              className="btn btn-primary"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    {console.log(allorders)}

                    <div className="row">
                      <div className="col-md-12">
                        <BarChart
                          width={1200}
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
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { PieChart, Pie, Sector, Cell } from "recharts";
export default function FoodReport() {
  let [fromdate, setfromdate] = useState("");
  let [todate, settodate] = useState("");
  let [allorders, setallorders] = useState([]);
  let orders = [];
  const data = [
    { name: "asd", value: 10 },
    { name: "dd", value: 9 },
    { name: "d", value: 8 },
    { name: "aasdsd", value: 3 },
  ];
  let chart;
  function getData() {
    // console.log(fromdate);
    // console.log(todate);
    // axios
    //   .get(`http://localhost:8000/order/getbyyear/${fromdate}/${todate}`)
    //   .then((res) => {
    //     orders = res.data;
    //     setallorders(res.data);
    //     console.log(orders);
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
  }
  chart = <h5>You dont have any orders yet. </h5>;
  console.log(chart);
  return (
    <div>
      <div className="container" style={{ width: "90%", marginRight: "100px" }}>
        <div className="content-container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Add/Update</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    {/* <div className="col-md-3">
                      <select className="form-control" value={""}>
                        <option value="A">Apple</option>
                        <option value="B">Banana</option>
                        <option value="C">Cranberry</option>
                      </select>
                    </div> */}
                    <div className="col-md-3">
                      From:
                      <input
                        className="form-control"
                        type="date"
                        onChange={(e) => {
                          setfromdate(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-3">
                      To:
                      <input
                        className="form-control"
                        type="date"
                        onChange={(e) => {
                          settodate(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <button className="btn btn-primary" onClick={getData}>
                        Search
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {console.log(chart)}
                  <div className="col-md-4">{chart}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

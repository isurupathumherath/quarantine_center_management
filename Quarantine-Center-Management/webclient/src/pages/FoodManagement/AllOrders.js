import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderDetails from "./OrderDetails";
import FoodCard from "./FoodCard";
export default function AllOrders() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/order/getbypatient/102")
      .then((res) => {
        setFood(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <div>
      <div className="row">
        <div
          style={{
            display: "flex",
            overflowX: "auto",
          }}
        >
          {food.map((post) => (
            <div key={post.orderID}>
              <OrderDetails details={post.orderDetails} />
            </div>
          ))}
        </div>
      </div>
      <div class="card border-left-primary shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                Earnings (Monthly)
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
            </div>
            <div class="col-auto">
              <i class="fas fa-calendar fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

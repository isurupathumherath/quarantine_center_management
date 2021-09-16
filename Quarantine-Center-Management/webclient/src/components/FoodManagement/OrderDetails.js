import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";

export default function OrderDetails(props) {
  // const [foodDetails, setFoodDetails] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/orderdetails/getbyorderdetailsid/${props.id}`)
  //     .then((res) => {
  //       setFoodDetails(res.data);
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // }, []);
  console.log(props.details);
  return (
    <div>
      <div className="row">
        <div
          style={{
            display: "flex",
            overflowX: "auto",
          }}
        >
          {props.details.map((post) => (
            <div key={post.orderID}>
              <FoodCard
                foodid={post.id}
                image={post.image}
                price={post.price}
                status={post.status}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

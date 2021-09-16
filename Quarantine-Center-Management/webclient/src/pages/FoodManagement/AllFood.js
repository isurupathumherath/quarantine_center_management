import React, { useState, useEffect } from "react";
import axios from "axios";

import FoodItem from "../../components/FoodManagement/FoodItem";

export default function AllFoods() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/foods/getActive/")
      .then((res) => {
        setFood(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <section class="section home-tile-section">
      <h2
        style={{
          marginLeft: "20px",
          textDecoration: "underline",
          color: "#3fd4c5",
          fontFamily: "'Bitter', serif",
          fontSize: "35px",
        }}
      >
        Available items
      </h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          overflow: "scroll",
          marginTop: "20px",
        }}
      >
        {food.map((post) => (
          <div key={post.foodID}>
            <FoodItem
              key={post.foodID}
              name={post.name}
              price={post.price}
              id={post.foodID}
              description={post.description}
              image={post.image}
            />
          </div>
        ))}
      </div>

      {/* By type */}
      <h2
        style={{
          marginLeft: "20px",
          textDecoration: "underline",
          color: "#3fd4c5",
          fontFamily: "'Bitter', serif",
          fontSize: "35px",
        }}
      >
        Breakfast Items
      </h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          overflow: "scroll",
          marginTop: "20px",
        }}
      >
        {food.map((post) => (
          <div key={post.foodID}>
            <FoodItem
              key={post.foodID}
              name={post.name}
              price={post.price}
              id={post.foodID}
              description={post.description}
              image={post.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

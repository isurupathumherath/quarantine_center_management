import React, { useState, useEffect } from "react";
import axios from "axios";

import FoodItem from "../../components/FoodManagement/FoodItem";

export default function AllFoods() {
  const [food, setFood] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [appetizer, setAppetizer] = useState([]);
  const [beverage, setBeverage] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/foods/getActive/")
      .then((res) => {
        setFood(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });

    axios
      .get("http://localhost:8000/foods/getbreakfastActive/")
      .then((res) => {
        setBreakfast(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });

    axios
      .get("http://localhost:8000/foods/getdinneractive/")
      .then((res) => {
        setDinner(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });

    axios
      .get("http://localhost:8000/foods/getlunchactive/")
      .then((res) => {
        setLunch(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });

    axios
      .get("http://localhost:8000/foods/getappetizersactive/")
      .then((res) => {
        setAppetizer(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });

    axios
      .get("http://localhost:8000/foods/getbeverageactive/")
      .then((res) => {
        setBeverage(res.data);
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
              type={post.type}
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
        {breakfast.map((post) => (
          <div key={post.foodID}>
            <FoodItem
              key={post.foodID}
              name={post.name}
              price={post.price}
              id={post.foodID}
              description={post.description}
              image={post.image}
              type={post.type}
            />
          </div>
        ))}
      </div>

      <h2
        style={{
          marginLeft: "20px",
          textDecoration: "underline",
          color: "#3fd4c5",
          fontFamily: "'Bitter', serif",
          fontSize: "35px",
        }}
      >
        Lunch Items
      </h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          overflow: "scroll",
          marginTop: "20px",
        }}
      >
        {lunch.map((post) => (
          <div key={post.foodID}>
            <FoodItem
              key={post.foodID}
              name={post.name}
              price={post.price}
              id={post.foodID}
              description={post.description}
              image={post.image}
              type={post.type}
            />
          </div>
        ))}
      </div>

      <h2
        style={{
          marginLeft: "20px",
          textDecoration: "underline",
          color: "#3fd4c5",
          fontFamily: "'Bitter', serif",
          fontSize: "35px",
        }}
      >
        Dinner Items
      </h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          overflow: "scroll",
          marginTop: "20px",
        }}
      >
        {dinner.map((post) => (
          <div key={post.foodID}>
            <FoodItem
              key={post.foodID}
              name={post.name}
              price={post.price}
              id={post.foodID}
              description={post.description}
              image={post.image}
              type={post.type}
            />
          </div>
        ))}
      </div>

      <h2
        style={{
          marginLeft: "20px",
          textDecoration: "underline",
          color: "#3fd4c5",
          fontFamily: "'Bitter', serif",
          fontSize: "35px",
        }}
      >
        Appetizers
      </h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          overflow: "scroll",
          marginTop: "20px",
        }}
      >
        {appetizer.map((post) => (
          <div key={post.foodID}>
            <FoodItem
              key={post.foodID}
              name={post.name}
              price={post.price}
              id={post.foodID}
              description={post.description}
              image={post.image}
              type={post.type}
            />
          </div>
        ))}
      </div>

      <h2
        style={{
          marginLeft: "20px",
          textDecoration: "underline",
          color: "#3fd4c5",
          fontFamily: "'Bitter', serif",
          fontSize: "35px",
        }}
      >
        Beverages
      </h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          overflow: "scroll",
          marginTop: "20px",
        }}
      >
        {beverage.map((post) => (
          <div key={post.foodID}>
            <FoodItem
              key={post.foodID}
              name={post.name}
              price={post.price}
              id={post.foodID}
              description={post.description}
              image={post.image}
              type={post.type}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

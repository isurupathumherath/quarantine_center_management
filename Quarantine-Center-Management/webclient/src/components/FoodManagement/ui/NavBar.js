import classes from "./NavBar.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import FavouriteContext from "../store/FavouriteContext";
import OrderContext from "../store/orderContext";
import axios from "axios";

export default function NavBar() {
  const orderedCtx = useContext(OrderContext);
  const favouriteCtx = useContext(FavouriteContext);
  let [favourite, setFaourite] = useState("");
  let [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/orderDetails/getUserbyid/111")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  function logout() {
    favourite = favouriteCtx.favourites;

    let completeArray = [...user.Favourites, ...favourite];

    const ids = completeArray.map((o) => o.id);
    const filtered = completeArray.filter(
      ({ id }, index) => !ids.includes(id, index + 1)
    );

    const newFood = {
      Favourites: filtered,
    };
    axios
      .put(
        `http://localhost:8000/orderDetails/updateusers/613b2cac1aaf8d0fdcf35ff3`,
        newFood
      )
      .then(() => {
        alert("Food updated");
      })
      .catch((err) => {
        alert(err.message);
        alert("asd");
      });
  }
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/allFood">All Food</Link>
          </li>
          <li>
            <Link to="/foodadmin">Admin Panel</Link>
          </li>
          <li>
            <Link to="/addFood">Add Food</Link>
          </li>
          <li>
            <Link to="/allOrders">Completed orders</Link>
          </li>
          <li>
            <Link to="/foodCart">
              Food Cart
              <span
                style={{
                  backgroundColor: "#cc2062",
                  color: "white",
                  borderRadius: "12px",
                  padding: "0 1rem",
                  marginLeft: "0.5rem",
                }}
              >
                {orderedCtx.totalOrders}
                {orderedCtx.totalPrice}
              </span>
            </Link>
          </li>
          <li onClick={logout}>Log Out</li>
        </ul>
      </nav>
    </header>
  );
}

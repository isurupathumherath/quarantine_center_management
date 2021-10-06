import React from "react";
import { useContext, useState } from "react";
import OrderContext from "./store/orderContext";

export default function Orders(props) {
  const orderedCtx = useContext(OrderContext);
  const isOrderd = true;

  function toogleOrderStatusHandler() {
    if (isOrderd) {
      orderedCtx.removeOrder(props.id);
    }
  }
  return (
    <div>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={`img/${props.image}`}
              style={{ width: "300px", height: "200px" }}
              className
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{ paddingLeft: "65px" }}>
              <h5 className="card-title">
                <b>Name :</b>
                {props.name}
              </h5>
              <p className="card-text">
                <b>Price :</b>Rs.{props.price}.00
              </p>
              <p className="card-text">
                <b>Description :</b>
                {props.description}
              </p>

              <button
                onClick={toogleOrderStatusHandler}
                className="btn btn-primary"
              >
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

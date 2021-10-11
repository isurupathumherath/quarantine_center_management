import React from "react";
import { useContext, useState } from "react";
import OrderContext from "./store/orderContext";

export default function Header(props) {
  return (
    <div>
      <div
        className="row border border-light"
        style={{ width: "100%", backgroundColor: "white", padding: "20px" }}
      >
        <div className="col-md-12 btn-group">
          <i
            class={`fa ${props.icon}`}
            aria-hidden="true"
            style={{
              color: "#0057d1",
              fontSize: "30px",
              marginTop: "10px",
            }}
          />

          <h1 style={{ color: "#0057d1", marginLeft: "25px" }}>{props.name}</h1>
        </div>
      </div>
    </div>
  );
}

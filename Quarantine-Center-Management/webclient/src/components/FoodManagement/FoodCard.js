import React from "react";

export default function AllOrders(props) {
  return (
    <div>
      <div
        className="card"
        style={{
          width: "300px",
          maxHeight: "400px",
        }}
      >
        <img src={`images/${props.image}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.orderid}</h5>
          <h5 className="card-title">{props.foodid}</h5>
          <h5 className="card-title">{props.price}</h5>
          <h5 className="card-title">{props.status}</h5>
        </div>
      </div>
    </div>
  );
}

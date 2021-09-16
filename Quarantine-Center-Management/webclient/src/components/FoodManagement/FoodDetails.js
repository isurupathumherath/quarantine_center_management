import React from "react";

export default function FoodDetails(props) {
  return (
    <div>
      <div className="row">
        <img
          src={`img/${props.image}`}
          className="card-img-top"
          style={{ width: "390px", height: "200px" }}
          alt="..."
        />

        <div className="col-md-4">
          <h5 className="card-title">Name</h5>
        </div>
        <div className="col-md-8">
          <p className="card-text">: {props.name}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h5 className="card-title">Price</h5>
        </div>
        <div className="col-md-8">
          <p className="card-text">: Rs.{props.price}.00</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h5 className="card-title">Type</h5>
        </div>
        <div className="col-md-8">
          <p className="card-text">: {props.type}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h5 className="card-title">Description</h5>
        </div>
        <div className="col-md-8">
          <p className="card-text">: {props.description}</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Header(props) {
  return (
    <div>
      <div
        className="row border border-light"
        style={{
          width: "98%",
          backgroundColor: "white",
          padding: "20px",
          marginLeft: "27px",
        }}
      >
        <div className="col-md-12">
          <h1 style={{ color: "#0057d1" }}>{props.name}</h1>
        </div>
      </div>
      <br />
    </div>
  );
}

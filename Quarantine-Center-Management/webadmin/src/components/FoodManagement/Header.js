import React from "react";

export default function Header(props) {
  return (
    <div>
      <div
        className="row border border-light"
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "20px",
          marginLeft: "5px",
        }}
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
          ></i>
          <h1 style={{ color: "#0057d1", marginLeft: "25px" }}>{props.name}</h1>
        </div>
      </div>
      <br />
    </div>
  );
}

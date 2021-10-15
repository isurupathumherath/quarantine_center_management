// import "./ui/Form.css";
import React, { useState } from "react";

export default function DisplayComments(props) {
  return (
    <div>
      <div className="row shadow-lg p-3 mb-2 bg-grey rounded">
        <h6>
          <div className = "row">
            <div className = "col-md-4" style={{fontWeight: "bold"}}>{props.userID}</div>
            <div className = "col-md-12">{props.comment}</div>
          </div>
           
        </h6>
      </div>
    </div>
  );
}

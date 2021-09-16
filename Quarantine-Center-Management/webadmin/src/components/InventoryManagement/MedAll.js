import React, { useState, useEffect } from "react"; // in use effect it determines what would i want to display when page is loaded..used when reading data from DB
import axios from "axios";
import { Link } from "react-router-dom";

export default function Allstock() {
  const [meds, setmeds] = useState([]);
  const [batch, setbatch] = useState([]);

  useEffect(() => {
    function getmeds() {
      axios
        .get("http://localhost:8000/meds/get")
        .then((res) => {
          setmeds(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getmeds();
  }, []); //when the array mentioned in the [] changes the useeffect happens..in here because we hve empty array the useeffect only run when the component refresh

    
  return (
    <div>
      <div class="page-wrapper">
        <div class="content container-fluid">
          <Link to={`/newitem`}>
            <button id="view">Add New +</button>
          </Link>
          <br></br>
            <table class="table">
                <th>Name</th>
                <th>Category</th>
                <th>Unit Price (RS)</th>
                <th>Actions</th>
              <tbody>
                {meds.map((med) => {
                  return (
                    <tr>
                      <td>{med.name}</td>
                      <td>{med.category}</td>
                      <td>{med.price_of_one}</td>
                      <td>
                        <Link to={`/Inventory/medbatches/${med._id}`}>
                          <button id="view">View</button>
                        </Link>
                        </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

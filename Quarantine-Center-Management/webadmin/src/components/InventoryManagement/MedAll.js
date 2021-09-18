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

  const setData = (med) => {

    let {_id,category,name,price_of_one} = med;
    
    localStorage.setItem('id',_id);
    localStorage.setItem('category', category);
    localStorage.setItem('name', name);
    localStorage.setItem('price', price_of_one);

  }

  const getData = () => {
    axios
        .get("http://localhost:8000/meds/get")
        .then((res) => {
          setmeds(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
  }

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/meds/delete/${id}`)
    .then(() => {
     alert("Item Deleted Successfully")
     getData();
  })
}
  
    
  return (
    <div>
      <div class="page-wrapper">
        <div class="content container-fluid">
          <Link to={`/Inventory/medall/mednew`}>
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
                        <Link to={`/Inventory/medbatches/update/whole`}>
                          <button id="view" onClick={()=>setData(med)}>Update</button>
                        </Link>
                          <button id="view" onClick={() => onDelete(med._id)}>Delete</button>
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

import React, { useState, useEffect } from "react"; // in use effect it determines what would i want to display when page is loaded..used when reading data from DB
import axios from "axios";
import { Link } from "react-router-dom";

export default function Allstock() {
  const [meds, setmeds] = useState([]);
  const [batch, setbatch] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
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
  
const handleFilter = (event) => {
  const searchWord = event.target.value;
  console.log(searchWord);
  setWordEntered(searchWord);
  axios.get("http://localhost:8000/meds/get")
  .then(response => {
      console.log(response)
      const newFilter = meds.filter((response) => {
          return response.name.toLowerCase().includes(searchWord.toLowerCase());
      });

      if (searchWord === "") {
          console.log("EMPLTY");
          getData();
      } else {
        setmeds(newFilter);
      }
  })
  .catch(error => console.log(error));
};
    
  return (
    <div>
      <div class="page-wrapper">
        <div class="content container-fluid">
          <div style={{background:"white",padding:"20px",position: "relative",
                left: "-190px",
                top:"-40px",
                height:"700px",
                width:"1000px"}}>
          <center>
            <h1>All Medicine</h1>
          </center>
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4>All Medicine</h4>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
              <input className="form-control" 
              type="search" 
              placeholder="Search" 
              name="Searchquery" 
              value={wordEntered}
              onChange={handleFilter}
              >

              </input>
            </div>
          </div>
          <Link to={`/Inventory/medall/mednew`}>
            <button id="view" class="btn btn-info">Add New +</button><br></br>
          </Link>
          <br></br>
            <table class="table table-striped">
            <thead>
                <th>Name</th>
                <th>Category</th>
                <th>Unit Price (RS)</th>
                <th>Actions</th>
            </thead>    
              <tbody>
                {meds.map((med) => {
                  return (
                    <tr>
                      <td>{med.name}</td>
                      <td>{med.category}</td>
                      <td>{med.price_of_one}</td>
                      <td>
                        <Link to={`/Inventory/medbatches/${med._id}`}>
                          <button id="view" class="btn btn-secondary">View</button>
                        </Link>
                        <Link to={`/Inventory/medbatches/update/whole`}>
                          <button id="view" style={{ marginLeft: '.5rem' }} class="btn btn-warning" onClick={()=>setData(med)}>Update</button>
                        </Link>
                          <button id="view" style={{ marginLeft: '.5rem' }} class="btn btn-danger" onClick={() => onDelete(med._id)}>Delete</button>
                        </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
        </div>
      </div>
    </div>
  );
}

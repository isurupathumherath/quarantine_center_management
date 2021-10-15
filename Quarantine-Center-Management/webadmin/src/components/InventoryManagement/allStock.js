import React, { useState, useEffect } from "react"; // in use effect it determines what would i want to display when page is loaded..used when reading data from DB
import axios from "axios";
import { Link } from "react-router-dom"; 
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export default function Allstock() {
  const [stocks, setstock] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  useEffect(() => {
    function getStock() {
      axios
        .get("http://localhost:8000/stock/get")
        .then((res) => {
          console.log(res.data);
          setstock(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getStock();
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
        .get("http://localhost:8000/stock/get")
        .then((res) => {
          setstock(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
  }

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/stock/delete/${id}`)
    .then(() => {
     //alert("Item Deleted Successfully")
     getData();
  })
}

const submit = (x) => {

  confirmAlert({
    title: 'Confirm to submit',
    message: 'Are you sure to do this.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => onDelete(x)
      },
      {
        label: 'No',
        //onClick: () => alert('Click No')
      }
    ]
  });
}
  
// const handleSearchArea=(e)=>{
//   const searchKey=e.currentTarget.value;
//   axios.get("http://localhost:8000/stock/get").then(res =>{
//     if(res.data.success)
//     {
//       this.filterData(res.data.stocks,searchKey)
//     }
//   });
// }

// filterData(stocks,searchKey)
//   {
//     const result=stocks.filter((allstock)=>

//     allstock.name.toLowerCase().includes(searchKey)||
//     allstock.category.toLowerCase().includes(searchKey)||
//     allstock.price_of_one.toLowerCase().includes(searchKey)
//     )
    
//     this.setState({covers:result})
//   }
  
  
//Filter Staff Member
const handleFilter = (event) => {
  const searchWord = event.target.value;
  console.log(searchWord);
  setWordEntered(searchWord);
  axios.get("http://localhost:8000/stock/get")
  .then(response => {
      console.log(response)
      const newFilter = stocks.filter((response) => {
          return response.name.toLowerCase().includes(searchWord.toLowerCase());
      });

      if (searchWord === "") {
          console.log("EMPLTY");
          getData();
      } else {
        setstock(newFilter);
      }
  })
  .catch(error => console.log(error));
};
    
  return (
    <div>
      <div class="page-wrapper">
        <div class="content container-fluid">
        <div style={{background:"white",padding:"20px",position: "relative",
                left: "-220px",
                top:"-80px",
                height:"700px",
                width:"1000px",
                overflowY: "scroll"}}>
        <center>
            <h1>All Foods</h1>
        </center>
        
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4>All Food item</h4>
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
  
          <Link to={`/newitem`}>
            <button class="btn btn-info" id="view">Add New +</button>
          </Link>
          <Link to={`/Inventory/food/summary`}>
            <button class="btn btn-success" style={{ marginLeft: '.5rem' }} id="view">Summary</button>
          </Link>
          <br></br><br/>
            <table class="table table-striped">
            <thead>
                <th>Name</th>
                <th>Category</th>
                <th>Unit Price (RS)</th>
                <th>Actions</th>
            </thead>
              <tbody>
                {stocks.map((sto) => {
                  
                  return (
                    <tr>
                      <td>{sto.name}</td>
                      <td>{sto.category}</td>
                      <td>{sto.price_of_one}</td>
                      <td>
                        <Link to={`/onestock/${sto._id}`}>
                          <button id="view"  class="btn btn-secondary" >View</button>
                        </Link>
                        <Link to={`/Inventory/food/update`}>
                          <button id="view" style={{ marginLeft: '.5rem' }} class="btn btn-warning"  onClick={()=>setData(sto)}>Update</button>
                        </Link>
                          <button id="view" style={{ marginLeft: '.5rem' }} class="btn btn-danger" onClick={() => submit(sto._id)}>Delete</button>
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

// onClickDemo = () => {
//   this.setState(
//     {
//       subjectId: "SUB34765",
//       StudentName: "Ahmed Azmie",
//       enrollmentCode: "EN45784",
//       studentId: "STD34638",
//       StudentAddress: "No123, 3rd Street, Rathmalana",
//       dateOfEnroll: "2021-09-20"
//     })
// }

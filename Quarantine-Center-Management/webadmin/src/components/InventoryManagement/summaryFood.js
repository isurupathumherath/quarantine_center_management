import React, { useState, useEffect } from "react"; // in use effect it determines what would i want to display when page is loaded..used when reading data from DB
import axios from "axios";
import { Link } from "react-router-dom"; 

export default function SummaryFood (){

  const [stocks, setstock] = useState([]);
  const [item,setitem]=useState([]);
  const [ba,setba]=useState([]);
  let b1=[];
  let t0=0;
  let cost=0;
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
  }, []);

  const getData = (name) => {
    axios.get(`http://localhost:8000/stock/get/${name}`).then((res)=>{
                setitem(res.data);
                b1=res.data;
                setba(b1.Batch);
            }).catch((err)=>{
                alert(err.message);
            })
            
  }

  stocks.map((post)=>(t0=t0+1));
  stocks.map((post)=>(cost=cost+post.price_of_one));

    return (
        <div>
          <div class="page-wrapper">
            <div class="content container-fluid">
            <div style={{background:"white",padding:"20px",position: "relative",
                left: "-190px",
                top:"-40px",
                height:"800px",
                width:"1000px"}}>
                
                <div style={{border: "3px solid #fff",
                            padding: "20px"}}>

                <div style={{width: "50%",float: "left",padding: "20px",border: "2px solid gray"}}>
                    <center><h1>Total Summary of Food</h1></center>
                      <br/>
                      <p>Total Food Items in Inventory - {t0}</p>
                      <p>{cost}</p>
                      <hr/>
                    <center><h1>Pick an Item</h1></center>
                      <br/>
                      <table class="table table-striped">
                        <thead>
                          <th>Name</th>
                          <th>Category</th>
                          <th>Actions</th>
                      </thead>
                        <tbody>
                      {stocks.map((sto) => {
                        return(
                          <tr>
                      <td>{sto.name}</td>
                      <td>{sto.category}</td>
                      <td>
                          <button id="view"  class="btn btn-info" onClick={()=>getData(sto._id)}>View</button>
                        </td>
                    </tr>
                        );
                      })}
                    </tbody>
                    </table>
                </div>
                
                <div style={{width: "50%",float: "left",padding: "20px",border: "2px solid gray"}}>
                    <center><h1>{item.name}</h1></center>  
                </div>
                </div>
            </div>        
            </div>
          </div>
        </div>  
    );
}
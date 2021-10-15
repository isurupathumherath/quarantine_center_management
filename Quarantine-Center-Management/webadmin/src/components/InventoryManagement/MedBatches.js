import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function MedBatches(){
    
    const { med }=useParams();
    const [medi,setmedi]=useState([]);
    const [ba,setba]=useState([]);
    let b1=[];
    useEffect(()=>{
        function getmedi(){
            axios.get(`http://localhost:8000/meds/get/${med}`).then((res)=>{
                setmedi(res.data);
                b1=res.data;
                setba(b1.Batch);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        console.log(medi);
        getmedi();
    },[])
    
    const setData = (med,m) => {

        let {_id,category,name,price_of_one} = med;
        let {batchnum,received_date,expiration_date,total_quantity} = m;
        localStorage.setItem('id',_id);
        localStorage.setItem('category', category);
        localStorage.setItem('name', name);
        localStorage.setItem('price', price_of_one);
        localStorage.setItem('batchnum', batchnum);
        localStorage.setItem('received_date', received_date);
        localStorage.setItem('expiration_date', expiration_date);
        localStorage.setItem('total_quantity', total_quantity);

    }
    
    return(
        <div>
        <div className="page-wrapper">
        <div className="content container-fluid">
        <div style={{background:"white",padding:"20px",position: "relative",
                left: "-220px",
                top:"-80px",
                height:"700px",
                width:"1000px",
                overflowY: "scroll"}}>
             <center>
                <h1>{medi.name}</h1>
             </center>   
                <Link to={`/Inventory/medadd/${medi._id}`}><button id="Add_Batch" class="btn btn-info">Add Batch</button></Link>
            <center><br></br> 
            <table class="table table-striped">
                <thead>
                    <th>Batch number</th>
                    <th>Received Date</th>
                    <th>Expiration Date</th>
                    <th>Total Quantity</th>
                    <th>Action</th>
                </thead>      
                <tbody>
                {ba.map((m) => {
              return (
                <tr>   
                    <td>{m.batchnum}</td>
                    <td>{m.received_date.substr(0,10)}</td>
                    <td>{m.expiration_date.substr(0,10)}</td>
                    <td>{m.total_quantity}</td>
                    <td><Link to={`/Inventory/medDelete`}><button id="delete" class="btn btn-danger" onClick={()=>setData(medi,m)}>Delete</button></Link>
                    <Link to={`/Inventory/medUpdate/${m._id}`}><button id="update" style={{ marginLeft: '.5rem' }} class="btn btn-warning" onClick={()=>setData(medi,m)}>Update</button></Link>
                    </td>
                </tr>   
                );
          })}
            
            </tbody>
            </table>
            </center>
            </div> 
        </div>
        </div>
        </div>
   )
}
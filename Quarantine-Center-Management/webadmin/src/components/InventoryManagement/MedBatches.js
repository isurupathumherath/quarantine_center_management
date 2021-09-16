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
    
    // const setData = (med) => {

    //     let {_id,category,name,price_of_one,Batch} = med;
    //     localStorage.setItem('id',_id);
    //     localStorage.setItem('category', category);
    //     localStorage.setItem('name', name);
    //     localStorage.setItem('price', price_of_one);
    //     localStorage.setItem('batch', Batch);
    // }
    
    return(
        <div>
        <div className="page-wrapper">
        <div className="content container-fluid">
             <center>
                <h1>{medi.name}</h1>
            </center>       
            <center>
            <table className="table">
                <tbody>
                <tr>
                    <th>Batch number</th>
                    <th>Received Date</th>
                    <th>Expiration Date</th>
                    <th>Total Quantity</th>
                    <th>Action</th>
                </tr>  
                 
                {ba.map((m) => {
              return (
                <tr>   
                    <td>{m.batchnum}</td>
                    <td>{m.received_date}</td>
                    <td>{m.expiration_date}</td>
                    <td>{m.total_quantity}</td>
                    <td><Link to={`/delete`}><button id="delete" >Delete</button></Link>
                    <Link to="/update"><button id="update" >Update</button></Link>
                    <Link to={`/add`}><button id="add" >Add Batch</button></Link>
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
   )
}
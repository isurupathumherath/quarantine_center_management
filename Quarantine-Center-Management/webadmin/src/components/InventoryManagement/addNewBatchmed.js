import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function AddNewBatchMed() {
    const { med }=useParams();
    const history = useHistory();
    const today=new Date();

    const [batchnum, setbatch] = useState(0);
    const [received_date, setreceived] = useState(today);
    const [expiration_date, setexpire] = useState(null);
    const [total_quantity, setquantity] = useState(0);
    

    const disablePastDate = () => {
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const AddAPIData = (e) => {

        e.preventDefault();

        axios.put(`http://localhost:8000/meds/update/addnew/${med}`,{
            batchnum,
            received_date,
            expiration_date,
            total_quantity
        }
        ).then(() => {
            alert("New Batch added");
            let path = `/Inventory/medbatches/${med}`; 
            history.push(path);
        }).catch((err)=>{
            alert(err);
        })
    }
    return (
        <div>
        <div class="page-wrapper">
        <div class="content container-fluid">
        <div style={{background:"white",padding:"20px",position: "relative",
                left: "-190px",
                top:"-40px",
                height:"500px",
                width:"1000px"}}>
        <center>
                <h1>Add new Medicine Batch</h1>
        </center>
            <form onSubmit={AddAPIData}>  
            <div class="form-group">
                    <label>Batch Number</label>
                    <input type="Number" class="form-control" placeholder='Batch Number' onChange={(e) => setbatch(e.target.value)}  required min="1"/>
            </div>
            <div class="form-group">      
                    <label>Received Date</label><br/>
                    <input type="text"  placeholder='Received Date' value={today.toLocaleString()} class="form-control" readOnly/>
            </div>
            <div class="form-group">  
                    <label>Expiration Date</label>
                    <input type="date" class="form-control" placeholder='Expiration Date'  min={disablePastDate()}  onChange={(e) =>Date.parse(setexpire(e.target.value))} required/>
            </div>
            <div class="form-group">   
                    <label>Quantity</label>
                    <input type="Number" class="form-control" placeholder='Quantity' onChange={(e) =>parseInt(setquantity(e.target.value))} required min="1"/>
            </div>  
                    <input type='submit' class="btn btn-info" value="Add"/>
            </form><br></br><br></br>
            </div>
        </div>
        </div>
        </div>
    )
}
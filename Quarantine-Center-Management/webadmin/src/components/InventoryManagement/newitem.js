import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function AddBatch() {
    const history = useHistory();
    const today=new Date();
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [price_of_one, setprice] = useState(0);

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

        const Batch={
            batchnum,
            received_date,
            expiration_date,
            total_quantity
        }

        const newitem={
            category,
            name,
            price_of_one,
            Batch
        }

        axios.post(`http://localhost:8000/stock/add`,newitem).then(() => {
            alert("New Food Item added");
            let path = `/Inventory/food`; 
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
                height:"800px",
                width:"1000px"}}>
            <center>
                <h1>New Food Item</h1>
            </center>
            <form onSubmit={AddAPIData}> 
            <div class="form-group">
                    <label for="fname">Item Name</label>
                    <input type="text" id="iname" name="iname" class="form-control" value={name} onChange={(e) => setname(e.target.value)} pattern="[A-Za-z]{2,25}" required/>
            </div>
            <div class="form-group">
                    <label for="lname">Category</label>
                    <input type="text" id="category" name="category" class="form-control" value={category} onChange={(e) => setcategory(e.target.value)} pattern="[A-Za-z]{2,}"  required/>
            </div>
            <div class="form-group">
                    <label for="country">Price of One</label>
                    <input type="Number" id="Price" name="Price" class="form-control" value={price_of_one} onChange={(e) => parseInt(setprice(e.target.value))} min="1"  required/>    
            </div>
            <div class="form-group">
                    <label>Batch Number</label><br/>
                    <input type="Number" placeholder='Batch Number' class="form-control" onChange={(e) => parseInt(setbatch(e.target.value))} min="1"  required/>
            </div>
            <div class="form-group">      
                    <label>Received Date</label><br/>
                    <input type="text"  placeholder='Received Date' value={today.toLocaleString()} class="form-control" readOnly/>
            </div>
            <div class="form-group">  
                    <label>Expiration Date</label><br/>
                    <input type="date" placeholder='Expiration Date' class="form-control" min={disablePastDate()} onChange={(e) =>Date.parse(setexpire(e.target.value))}  required/>
            </div>
            <div class="form-group">  
                    <label>Quantity</label><br/>
                    <input type="Number" placeholder='Quantity' class="form-control" onChange={(e) =>parseInt(setquantity(e.target.value))} min="1"  required/>
            </div>   
                    <input type='submit' class="btn btn-info" value="Add" />
            </form>
            <br></br><br></br>
            </div>
        </div>
        </div>
        </div>
    )
}
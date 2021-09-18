import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function AddNewBatchMed() {
    const { med }=useParams();
    const history = useHistory();

    const [batchnum, setbatch] = useState(0);
    const [received_date, setreceived] = useState(null);
    const [expiration_date, setexpire] = useState(null);
    const [total_quantity, setquantity] = useState(0);
    

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
            let path = `/Inventory/medall`; 
            history.push(path);
        }).catch((err)=>{
            alert(err);
        })
    }
    return (
        <div>
        <div class="page-wrapper">
        <div class="content container-fluid">
            <form> 
              
                    <label>Batch Number</label><br/>
                    <input placeholder='Batch Number' onChange={(e) => setbatch(e.target.value)}/><br/><br/>
                
                    <label>Received Date</label><br/>
                    <input type="text" value={received_date}/>
                    <input type="date"  placeholder='Received Date'  onChange={(e) => Date.parse(setreceived(e.target.value))}/><br/><br/>
               
                    <label>Expiration Date</label><br/>
                    <input type="text"  value={expiration_date}/>
                    <input type="date" placeholder='Expiration Date'  onChange={(e) =>Date.parse(setexpire(e.target.value))}/><br/><br/>
               
                    <label>Quantity</label><br/>
                    <input type="Number" placeholder='Quantity' onChange={(e) =>parseInt(setquantity(e.target.value))}/><br/><br/>
               
                    <Button type='submit' onClick={AddAPIData}>Add</Button>
            </form>
        </div>
        </div>
        </div>
    )
}
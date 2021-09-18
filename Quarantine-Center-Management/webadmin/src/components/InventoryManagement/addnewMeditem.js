import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function AddnewMeditem() {
    const history = useHistory();
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [price_of_one, setprice] = useState(0);

    const [batchnum, setbatch] = useState(0);
    const [received_date, setreceived] = useState(null);
    const [expiration_date, setexpire] = useState(null);
    const [total_quantity, setquantity] = useState(0);
    

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

        axios.post(`http://localhost:8000/meds/add`,newitem).then(() => {
            alert("New Med Item added");
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
                    <label for="fname">Item Name</label>
                    <input type="text" id="iname" name="iname" value={name} onChange={(e) => setname(e.target.value)}/>

                    <label for="lname">Category</label>
                    <input type="text" id="category" name="category" value={category} onChange={(e) => setcategory(e.target.value)}/>

                    <label for="country">Price of One</label>
                    <input type="Number" id="Price" name="Price" value={price_of_one} onChange={(e) => parseInt(setprice(e.target.value))}/>    

                    <label>Batch Number</label><br/>
                    <input type="Number" placeholder='Batch Number' onChange={(e) => parseInt(setbatch(e.target.value))}/><br/><br/>
                
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
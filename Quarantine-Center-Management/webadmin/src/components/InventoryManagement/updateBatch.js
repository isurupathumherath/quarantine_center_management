import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom';

export default function UpdateBatch() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [itemcode, setitemcode] = useState(0);
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [price_of_one, setprice] = useState(0);
    const [batchnum, setbatch] = useState(0);
    const [received_date, setreceived] = useState(null);
    const [expiration_date, setexpire] = useState(null);
    const [total_quantity, setquantity] = useState(0);
    
    useEffect(() => {
        setID(localStorage.getItem('id'))
        setitemcode(localStorage.getItem('itemcode'));
        setcategory(localStorage.getItem('category'));
        setname(localStorage.getItem('name'));
        setprice(localStorage.getItem('price'));
        setbatch(localStorage.getItem('batchnum'));
        setreceived(localStorage.getItem('received_d'));
        setexpire(localStorage.getItem('expiration_d'));
        setquantity(localStorage.getItem('quantity'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:8000/stock/update/${id}`, {
            itemcode,
            category,
            name,
            price_of_one,
            batchnum,
            received_date,
            expiration_date,
            total_quantity

        }).then(() => {
            //history.push(`/`)
        })
    }
    return (
        <div>
        <div class="page-wrapper">
        <div class="content container-fluid">
            <form> 
                    <label>Item Name</label><br/>
                    <input placeholder='Item Name' value={name} onChange={(e) => setname(e.target.value)}/><br/><br/>
            
                    <label>Item code</label><br/>
                    <input placeholder='Item code' value={itemcode} onChange={(e) => setitemcode(e.target.value)}/><br/><br/>
              
                    <label>Category</label><br/>
                    <input placeholder='Category' value={category} onChange={(e) => setcategory(e.target.value)}/><br/><br/>
                
                    <label>Price</label><br/>
                    <input placeholder='Price' value={price_of_one} onChange={(e) => parseInt(setprice(e.target.value))}/><br/><br/>
              
                    <label>Batch Number</label><br/>
                    <input placeholder='Batch Number' value={batchnum} onChange={(e) => setbatch(e.target.value)}/><br/><br/>
                
                    <label>Received Date</label><br/>
                    <input type="text" value={received_date} />
                    <input type="date"  placeholder='Received Date' value={Date.parse(received_date)} onChange={(e) => Date.parse(setreceived(e.target.value))}/><br/><br/>
               
                    <label>Expiration Date</label><br/>
                    <input type="text" value={expiration_date} />
                    <input type="date" placeholder='Expiration Date' value={Date.parse(expiration_date)} onChange={(e) =>Date.parse(setexpire(e.target.value))}/><br/><br/>
               
                    <label>Quantity</label><br/>
                    <input type="Number" placeholder='Quantity' value={total_quantity} onChange={(e) =>parseInt(setquantity(e.target.value))}/><br/><br/>
               
                <Link to={`Inventory/food`}><Button type='submit' onClick={updateAPIData}>Update</Button></Link>
            </form>
        </div>
        </div>
        </div>
    )
}
import React,{useState,useEffect} from 'react';// in use effect it determines what would i want to display when page is loaded..used when reading data from DB
import axios from "axios";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../../assets/InventoryManagement/deleteBatch.css';

const Deletestock=() =>{

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


    const DelBatch = () => {
        axios.delete(`http://localhost:8000/stock/delete/batch/${id}`).then((res)=>{             
            console.log(res.data);
        }).catch((err)=>{
            alert(err.message);
        })
    }
           
    
    return(
        <div>
        <div class="page-wrapper">
        <div class="content container-fluid">
                <div>
                <form>
                    <label for="fname">Item Name</label>
                        <input type="text" id="iname" name="iname" value={name} readOnly/>

                    <label for="lname">Category</label>
                        <input type="text" id="category" name="category" value={category} readOnly/>

                    <label for="country">Received Date</label>
                        <input type="text" id="R_date" name="R_date" value={received_date} readOnly/>

                    <label for="country">Expiration Date</label>
                        <input type="text" id="E_date" name="E_date" value={expiration_date} readOnly/>    

                    <label for="country">Batch Number</label>
                        <input type="text" id="B_number" name="B_number" value={batchnum} readOnly/> 

                    <label for="country">Total Quantity</label>
                        <input type="text" id="TQ" name="TQ" value={total_quantity} readOnly/>
                    
                    <label for="country">Price of One</label>
                        <input type="text" id="Price" name="Price" value={price_of_one} readOnly/>

                    
                    <Link to={`Inventory/food`}><input type="submit" value="Delete Record" onClick={DelBatch}/></Link>
                </form>
                </div>
        </div>
        </div>
        </div>
    )
}

export default Deletestock;
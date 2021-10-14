import React,{useState,useEffect} from 'react';// in use effect it determines what would i want to display when page is loaded..used when reading data from DB
import axios from "axios";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const MedBatchDelete=() =>{

    let history = useHistory();
    const [id, setID] = useState(null);
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [price_of_one, setprice] = useState(0);

    const [received_date, setreceived] = useState('');
    const [expiration_date, setexpire] = useState('');
    const [total_quantity, setquantity] = useState(0);
    const [batchnum, setbatchnum] = useState(0);
    
    useEffect(() => {
        setID(localStorage.getItem('id'))
        setcategory(localStorage.getItem('category'));
        setname(localStorage.getItem('name'));
        setprice(localStorage.getItem('price'));

        setbatchnum(localStorage.getItem('batchnum'));
        setreceived(localStorage.getItem('received_date'));
        setexpire(localStorage.getItem('expiration_date'));
        setquantity(localStorage.getItem('total_quantity'));

    }, []);


    const DelBatch = () => {
        axios.put(`http://localhost:8000/meds/delete/${id}/${batchnum}`).then((res)=>{             
            alert("Batch deleted");
        }).catch((err)=>{
            alert(err.message);
        })
    }
           
    
    return(
        <div>
        <div class="page-wrapper">
        <div class="content container-fluid">
        <div style={{background:"white",padding:"20px",position: "relative",
                left: "-190px",
                top:"-40px",
                height:"800px",
                width:"1000px"}}>
        <center>
                <h1>Delete Medicine Batch</h1>
        </center>
                <div>
                <form>
                <div class="form-group">
                    <label for="fname">Item Name</label>
                        <input type="text" id="iname" class="form-control" name="iname" value={name} readOnly/>
                </div>
                <div class="form-group">
                    <label for="lname">Category</label>
                        <input type="text" id="category" class="form-control" name="category" value={category} readOnly/>
                </div>
                <div class="form-group">
                    <label for="country">Price of One</label>
                        <input type="text" id="Price" class="form-control" name="Price" value={price_of_one} readOnly/>    
                </div>
                <div class="form-group">
                    <label for="country">Received Date</label>
                        <input type="text" id="R_date" class="form-control" name="R_date" value={received_date.substr(0,10)} readOnly/>
                </div>
                <div class="form-group">
                    <label for="country">Expiration Date</label>
                        <input type="text" id="E_date" class="form-control" name="E_date" value={expiration_date.substr(0,10)} readOnly/>    
                </div>
                <div class="form-group">
                    <label for="country">Batch Number</label>
                        <input type="text" id="B_number" class="form-control" name="B_number" value={batchnum} readOnly/> 
                </div>
                <div class="form-group">
                    <label for="country">Total Quantity</label>
                        <input type="text" id="TQ" class="form-control" name="TQ" value={total_quantity} readOnly/>
                </div>    

                    
                    <Link to={`/Inventory/medbatches/${id}`}><input type="submit" class="btn btn-danger" value="Delete Record" onClick={DelBatch}/></Link>
                    
                </form><br/><br/>
                </div>
                </div>
        </div>
        </div>
        </div>
    )
}

export default MedBatchDelete;
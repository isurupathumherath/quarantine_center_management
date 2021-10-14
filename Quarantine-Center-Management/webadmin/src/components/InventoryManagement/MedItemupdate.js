import React,{useState,useEffect} from 'react';// in use effect it determines what would i want to display when page is loaded..used when reading data from DB
import axios from "axios";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const MedBatchUpdate=() =>{


    let history = useHistory();

    const [id, setID] = useState(null);
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [price_of_one, setprice] = useState(0);
    
    useEffect(() => {
        
        setID(localStorage.getItem('id'))
        setcategory(localStorage.getItem('category'));
        setname(localStorage.getItem('name'));
        setprice(localStorage.getItem('price'));

    }, []);


    const Updateitem = () => {
        let updateitem={
            category,
            name,
            price_of_one
        }
        axios.put(`http://localhost:8000/meds/update/big/${id}`,{
            category,
            name,
            price_of_one
        }).then((res)=>{             
            alert("Batch Updated");
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
                height:"420px",
                width:"1000px"}}>
        <center>
                <h1>Update {name} item</h1>
        </center>
                <form>
                <div class="form-group">
                    <label for="fname">Item Name</label>
                        <input type="text" id="iname" class="form-control" name="iname" value={name} onChange={(e) => setname(e.target.value)} pattern="[A-Za-z]{2,}" required/>
                </div>
                <div class="form-group">
                    <label for="lname">Category</label>
                        <input type="text" id="category" class="form-control" name="category" value={category} onChange={(e) => setcategory(e.target.value)} pattern="[A-Za-z]{2,}" required/>
                </div>
                <div class="form-group">
                    <label for="country">Price of One</label>
                        <input type="Number" id="Price" class="form-control" name="Price" value={price_of_one} onChange={(e) => parseInt(setprice(e.target.value))} min="1" required/>    
                </div>    
                <Link to={`/Inventory/medall`}><input type='submit' value="Update Record" class="btn btn-warning" onClick={Updateitem}/></Link>
                    
                </form>
                </div>
        </div>
        </div>
        </div>
    )
}

export default MedBatchUpdate;
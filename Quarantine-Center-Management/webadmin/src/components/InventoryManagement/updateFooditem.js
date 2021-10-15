import React,{useState,useEffect} from 'react';// in use effect it determines what would i want to display when page is loaded..used when reading data from DB
import axios from "axios";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const FooditemUpdate=() =>{


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
        axios.put(`http://localhost:8000/stock/update/big/${id}`,{
            category,
            name,
            price_of_one
        }).then((res)=>{             
            alert("Food item Updated");
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
                <div>
                <form>
                <div class="form-group">
                    <label for="fname">Item Name</label>
                        <input type="text" class="form-control" id="iname" name="iname" value={name} onChange={(e) => setname(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="lname">Category</label>
                        <input type="text" class="form-control" id="category" name="category" value={category} onChange={(e) => setcategory(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="country">Price of One</label>
                        <input type="Number" class="form-control" id="Price" name="Price" value={price_of_one} onChange={(e) => parseInt(setprice(e.target.value))}/>    
                </div>
                <div class="form-group">    
                        <Link to={`/Inventory/food`}><input type="submit" class="btn btn-warning" value="Update Record" onClick={Updateitem}/></Link> 
                </div>   
                </form>
                </div>
                </div>
        </div>
        </div>
        </div>
    )
}

export default FooditemUpdate;
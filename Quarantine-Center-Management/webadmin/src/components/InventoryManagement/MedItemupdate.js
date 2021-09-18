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
            history.push('/Inventory/medall')
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
                        <input type="text" id="iname" name="iname" value={name} onChange={(e) => setname(e.target.value)}/>

                    <label for="lname">Category</label>
                        <input type="text" id="category" name="category" value={category} onChange={(e) => setcategory(e.target.value)}/>

                    <label for="country">Price of One</label>
                        <input type="Number" id="Price" name="Price" value={price_of_one} onChange={(e) => parseInt(setprice(e.target.value))}/>    
                    
                    <Link to={`/Inventory/medall`}><input type="submit" value="Update Record" onClick={Updateitem}/></Link> 
                    
                </form>
                </div>
        </div>
        </div>
        </div>
    )
}

export default MedBatchUpdate;
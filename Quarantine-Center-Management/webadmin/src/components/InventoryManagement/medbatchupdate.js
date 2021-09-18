import React,{useState,useEffect} from 'react';// in use effect it determines what would i want to display when page is loaded..used when reading data from DB
import axios from "axios";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const MedBatchUpdate=() =>{

    const { med }=useParams();
    const [medi,setmedi]=useState([]);
    let history = useHistory();

    const [id, setID] = useState(null);
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [price_of_one, setprice] = useState(0);

    const [received_date, setreceived] = useState(null);
    const [expiration_date, setexpire] = useState(null);
    const [total_quantity, setquantity] = useState(0);
    const [batchnum, setbatchnum] = useState(0);
    
    useEffect(() => {
        function getmedi(){
            axios.get(`http://localhost:8000/meds/get/${med}`).then((res)=>{
                setmedi(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        console.log(medi);
        getmedi();


        setID(localStorage.getItem('id'))
        setcategory(localStorage.getItem('category'));
        setname(localStorage.getItem('name'));
        setprice(localStorage.getItem('price'));

        setbatchnum(localStorage.getItem('batchnum'));
        setreceived(localStorage.getItem('received_date'));
        setexpire(localStorage.getItem('expiration_date'));
        setquantity(localStorage.getItem('total_quantity'));

    }, []);


    const UpdateBatch = () => {
        let newquantity={total_quantity:total_quantity}
        axios.put(`http://localhost:8000/meds/update/${med}`,
            newquantity,
        ).then((res)=>{             
            alert("Batch Updated");
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

                    <label for="country">Price of One</label>
                        <input type="text" id="Price" name="Price" value={price_of_one} readOnly/>    
           
                    <label for="country">Received Date</label>
                        <input type="text" id="R_date" name="R_date" value={received_date} readOnly/>

                    <label for="country">Expiration Date</label>
                        <input type="text" id="E_date" name="E_date" value={expiration_date} readOnly/>    

                    <label for="country">Batch Number</label>
                        <input type="text" id="B_number" name="B_number" value={batchnum} readOnly/> 

                    <label for="country">Total Quantity</label>
                        <input type="Number" id="TQ" name="TQ" value={total_quantity} onChange={(e) =>parseInt(setquantity(e.target.value))}/>
                    

                    
                    <Link to={`/Inventory/medall`}><input type="submit" value="Update Record" onClick={UpdateBatch}/></Link> 
                    
                </form>
                </div>
        </div>
        </div>
        </div>
    )
}

export default MedBatchUpdate;
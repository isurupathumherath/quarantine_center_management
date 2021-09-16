import React,{useState,useEffect} from 'react';// in use effect it determines what would i want to display when page is loaded..used when reading data from DB
import axios from "axios";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import '../../assets/InventoryManagement/onestock.css';

const Onestock=() =>{

    const { name }=useParams();
    const [item,setitem]=useState([]);

    useEffect(()=>{
        function getitem(){
            axios.get(`http://localhost:8000/stock/get/${name}`).then((res)=>{
                setitem(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        console.log(item);
        getitem();
    },[])

    const setData = (it) => {

        let {_id, itemcode,category,name,price_of_one,batchnum,received_date,expiration_date,total_quantity } = it;
        localStorage.setItem('id',_id);
        localStorage.setItem('itemcode', itemcode);
        localStorage.setItem('category', category);
        localStorage.setItem('name', name);
        localStorage.setItem('price', price_of_one);
        localStorage.setItem('batchnum', batchnum);
        localStorage.setItem('received_d', received_date);
        localStorage.setItem('expiration_d', expiration_date);
        localStorage.setItem('quantity', total_quantity);
    }
    return(
         <div>
             <center>
                    <h1>{name}</h1>
             </center>       
             <center>
             <table id="customers">
             <tbody>
             <tr>
                     <th>Batch number</th>
                     <th>Price of unit (Rs)</th>
                     <th>total Quantity (Units)</th>
                     <th>Action</th>
             </tr> 
           {item.map(it=>{
               return (
                   <tr>
                     <td>{it.batchnum}</td>
                     <td>{it.price_of_one}</td>
                     <td>{it.total_quantity}</td>
                     <td><Link to={`/delete`}><button id="delete" onClick={() => setData(it)}>Delete</button></Link>
                     <Link to="/update"><button id="update" onClick={() => setData(it)}>Update</button></Link>
                     <Link to={`/add`}><button id="add" onClick={()=>setData(it)}>Add Batch</button></Link>
                     </td>
                   </tr>  
                 ) //<pre>{JSON.stringify(stud)}</pre>
           })}
             </tbody>
             </table>
             </center>
         </div>
    )
}

export default Onestock;
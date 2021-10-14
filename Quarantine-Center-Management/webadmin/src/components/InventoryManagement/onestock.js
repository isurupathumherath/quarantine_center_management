import React,{useState,useEffect} from 'react';// in use effect it determines what would i want to display when page is loaded..used when reading data from DB
import axios from "axios";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const Onestock=() =>{

    const { name }=useParams();
    const [item,setitem]=useState([]);
    const [ba,setba]=useState([]);
    let b1=[];
    useEffect(()=>{
        function getitem(){
            axios.get(`http://localhost:8000/stock/get/${name}`).then((res)=>{
                setitem(res.data);
                b1=res.data;
                setba(b1.Batch);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        console.log(item);
        getitem();
    },[])

    const setData = (med,m) => {

        let {_id,category,name,price_of_one} = med;
        let {batchnum,received_date,expiration_date,total_quantity} = m;
        localStorage.setItem('id',_id);
        localStorage.setItem('category', category);
        localStorage.setItem('name', name);
        localStorage.setItem('price', price_of_one);
        localStorage.setItem('batchnum', batchnum);
        localStorage.setItem('received_date', received_date);
        localStorage.setItem('expiration_date', expiration_date);
        localStorage.setItem('total_quantity', total_quantity);

    }
    return(
        <div>
        <div className="page-wrapper">
        <div className="content container-fluid">
        <div style={{background:"white",padding:"20px",position: "relative",
                left: "-190px",
                top:"-40px",
                height:"700px",
                width:"1000px"}}>
             <center>
                <h1>{item.name}</h1>
            </center>  
            <Link to={`/add/food/${item._id}`}><button id="Add_Batch" class="btn btn-info">Add Batch</button></Link>  
            <center>
            <br></br>
            <table  class="table table-striped">
            <thead>
                    <th>Batch number</th>
                    <th>Received Date</th>
                    <th>Expiration Date</th>
                    <th>Total Quantity</th>
                    <th>Action</th>
            </thead>
                <tbody>
                {ba.map((m) => {
              return (
                <tr>   
                    <td>{m.batchnum}</td>
                    <td>{m.received_date.substr(0,10)}</td>
                    <td>{m.expiration_date.substr(0,10)}</td>
                    <td>{m.total_quantity}</td>
                    <td>
                        <Link to={`/delete`}>
                            <button id="delete"  class="btn btn-danger" onClick={()=>setData(item,m)}>Delete</button>
                        </Link>
                        <Link to={`/update/${m._id}`}>
                            <button id="update" style={{ marginLeft: '.5rem' }} class="btn btn-warning" onClick={()=>setData(item,m)}>Update</button>
                        </Link>
                    </td>
                </tr>   
                );
          })}
            
            </tbody>
            </table>
            </center> 
            </div>
        </div>
        </div>
        </div>
   )
}

export default Onestock;
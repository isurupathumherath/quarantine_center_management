import React,{useState,useEffect} from 'react';// in use effect it determines what would i want to display when page is loaded..used when reading data from DB
import axios from "axios";
import {Link} from 'react-router-dom';
import '../../assets/InventoryManagement/allStocks.css';

export default function Allstock(){

    const [stocks,setstock]=useState([]);

    
    useEffect(()=>{
        function getStock(){
            axios.get("http://localhost:8000/stock/get").then((res)=>{
                console.log(res.data);

                var lookup = {};
                var items = res.data;
                var result = [];

                for (var item, i = 0; item = items[i++];) {
                var name = item.name;

                if (!(name in lookup)) {
                    lookup[name] = 1;
                    result.push(name);
                }
               
            }
            setstock(result);
          

            }).catch((err)=>{
                alert(err.message);
            })
        }
        
        getStock();
    },[])//when the array mentioned in the [] changes the useeffect happens..in here because we hve empty array the useeffect only run when the component refresh
    

    return(
        <div>
            <Link to={`/onestock`}><button id="view" >Add</button></Link>
            <center>
            <table id="customers">
            <tbody>
          {stocks.map(sto=>{
              return (
                 
                  <tr>
                    <td>{sto}</td>
                    <td><Link to={`/onestock/${sto}`}><button id="view" >View</button></Link></td>
                  </tr>  
                ) 
          })}
            </tbody>
            </table>
            </center>
        </div>
    )
}
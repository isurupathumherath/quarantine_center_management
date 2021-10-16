import React,{useState} from "react"
import axios from "axios"
import {Link} from 'react-router-dom';



export default function Reportpg1(){

  const [date1,setdate1]=useState(null);
  const [date2,setdate2]=useState(null);
  const [dateT,setdateT]=useState(null);

  const setData = (d1,d2,dT) => {

   
    
    localStorage.setItem('d1',d1);
    localStorage.setItem('d2', d2);
    localStorage.setItem('dT', dT);
    

  }

  

    return(

     

        <div class="content container-fluid">
            <h2 style={{position:"relative",left:"100px",top:"100px"}}>Get a summary on PCR Test Results</h2><br/><h3>Enter the time period you want the report to get generated on</h3><br/><br/><br/><br/>
            <div class="form-group" class="col-sm-7">
            <input type="Date" required class="form-control" id="TestDate1" class="form-control" style={{position:"relative",left:"100px"}}
                    onChange={(e) =>Date.parse(setdate1(e.target.value))}
                    /></div><br/>
            <div class="form-group" class="col-sm-7">
            <input type="Date" required class="form-control" id="TestDate2" class="form-control"  style={{position:"relative",left:"100px"}}
                   onChange={(e) =>Date.parse(setdate2(e.target.value))}
                   /></div>

        

            
        <div class="content container-fluid">

            <h2 style={{position:"relative",left:"80px"}}>Get a summary on Body Temperature Checkup Results</h2><br/>
            <h3>Enter the date you want the report to get generated on</h3>
            <div class="form-group" class="col-sm-7">
            <input type="Date" required class="form-control" id="CheckupDate1" class="form-control"  style={{width:"665px",position:"relative",left:"90px"}}
                    onChange={(e) =>Date.parse(setdateT(e.target.value))} /></div><br/>

</div>
            <div><br/>

            <Link to={"/MedReport"} > <button type="button" style={{position:"relative",left:"300px",height:"50px"}} onClick={()=>setData(date1,date2,dateT)}
 class="btn btn-info" >Generate the Report</button></Link>

            </div>
            
           
            
            </div>

    )
   
}
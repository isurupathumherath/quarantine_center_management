import React,{useState} from "react"
import axios from "axios"
import {Link} from 'react-router-dom';




export default function Dashboard(){

    return(

      <div class="p-3 mb-2 bg-info text-dark bg-opacity-25" style={{
        position:"relative",
        left:"23px",
      }} >
        
            <div >

            <center><h1 class="p-3 mb-2 bg-primary text-white  bg-opacity-170" style={{
              position:"relative",
              left:"1px",
              color:"black"
            }}>MEDICAL TEST DETAILS' MANAGEMENT</h1></center><br/><br/>

            {/* Dropdown button-PCR */}
            <div   class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{
                position:"relative",
                left:"100px",
                top:"50px",
                width:"350px",
                height:"100px",
                backgroundColor:"black"
              
              }}>
                PCR TESTS
              </button>
              <ul class="dropdown-menu  dropdown-menu-dark">
              <li style={{
                width:"350px",
                height:"50px"
              }}><a class="dropdown-item" href="/addPCR">Add PCR Tests</a></li>
              <li><a class="dropdown-item" href="/ViewPCR">View PCR Tests</a></li>
              </ul>
            </div>


            {/* Dropdown button-Temp Checkups */}
            <div   class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{
                position:"relative",
                left:"370px",
                top:"50px",
                width:"350px",
                height:"100px",
                backgroundColor:"black"
              }}>
                Body Temperature Checkups
              </button>
              <ul class="dropdown-menu  dropdown-menu-dark">
              <li style={{
                 width:"350px",
                 height:"50px"
              }}><a class="dropdown-item" href="/addCheckup">Add Checkups</a></li>
              <li><a class="dropdown-item" href="/ViewCheckups">View Checkups</a></li>
              </ul>
            </div>
      </div>

      <div style={{backgrountColor:"black"}}>

    <Link to={"/Repo"} > <button style={{position:"relative",top:"200px",left:"100px", width:"380px",backgroundColor:"lightskyblue",fontSize:"20px",
                height:"60px"}} type="button" class="btn btn-info" >Analysis of PCR Test Results</button></Link>


    <Link to={"/CheckupRepo"} > <button style={{position:"relative",top:"200px",left:"400px", width:"380px",backgroundColor:"lightskyblue",fontSize:"20px",
                height:"60px"}} type="button" class="btn btn-info" >Analysis of Temperature Checkup Results</button></Link>


      </div>


          
           
            {/* <div class="d-grid gap-2 col-6 mx-auto">
                    <Link to={"/addPCR"}><button class="btn btn-primary" type="button">Add PCR</button></Link><br/><br/><br/>
                    <Link to={"/ViewPCR"}><button class="btn btn-primary" type="button">View PCR</button></Link><br/><br/><br/>
                    <Link to={"/addCheckup"}> <button class="btn btn-primary" type="button">Add Checkups</button></Link><br/><br/><br/>
                    <Link to={"/ViewCheckups"}><button class="btn btn-primary" type="button">View Checkups</button></Link><br/><br/><br/>
            <button class="btn btn-primary" type="button">Generate a Report</button>
            </div> */}
      </div> 

    
    )


}

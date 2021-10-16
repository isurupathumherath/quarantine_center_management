import React,{useState} from "react"
import axios from "axios"
import {Link} from 'react-router-dom';




export default function Dashboard(){

    return(

      <div  style={{
        position:"relative",
        left:"8px",
        backgroundColor:"#ADDFFF"
      }} >
        
            <div style={{backgrountColor:"#ADDFFF"}} >

            <center><h1  style={{
              position:"relative",
              left:"1px",
              color:"black",
              borderStyle: "solid",
              borderColor: "#357EC7",
              textShadow:"5px 5px 3.5px #357EC7",
              fontWeight: "bold",
              backgroundColor:"white"

            }}>MEDICAL TEST DETAILS' MANAGEMENT</h1></center><br/><br/>

            {/* Dropdown button-PCR */}
            <div   class="btn-group" style={{backgrountColor:"#ADDFFF"}}>
              <button class="btn btn-secondary btn-lg dropdown-toggle"  type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{
                position:"relative",
                left:"100px",
                top:"50px",
                width:"350px",
                height:"100px",
                color:'black',
                borderColor:"#357EC7",
                borderWidth:"5px",
                backgroundColor:"white"

                
              
              }}>
                PCR TESTS
              </button>
              <ul  style={{backgroundColor:"#357EC7"}} class="dropdown-menu  dropdown-menu-dark">
              <li style={{
                width:"350px",
                height:"50px"
              }}><a  style={{backgroundColor:"#357EC7",fontSize:"20px"}} class="dropdown-item" href="/addPCR">Add PCR Tests</a></li>
              <li><a  style={{backgroundColor:"#357EC7",fontSize:"20px"}} class="dropdown-item" href="/ViewPCR">View PCR Tests</a></li>
              </ul>
            </div>


            {/* Dropdown button-Temp Checkups */}
            <div style={{backgrountColor:"#ADDFFF"}}  class="btn-group">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{
                position:"relative",
                left:"370px",
                top:"50px",
                width:"350px",
                height:"100px",
                color:'black',
                borderColor:"#357EC7",
                borderWidth:"5px",
                backgroundColor:"white"

                
              }}>
                Body Temperature Checkups
              </button>
              <ul style={{backgroundColor:"#357EC7"}} class="dropdown-menu  dropdown-menu-dark">
              <li style={{
                 width:"350px",
                 height:"50px"
              }}><a style={{backgroundColor:"#357EC7",fontSize:"20px"}} class="dropdown-item" href="/addCheckup">Add Checkups</a></li>
              <li><a  style={{backgroundColor:"#357EC7",fontSize:"20px"}} class="dropdown-item" href="/ViewCheckups">View Checkups</a></li>
              </ul>
            </div>
      </div>

      <div style={{backgrountColor:"black"}} style={{backgrountColor:"#ADDFFF"}}>

    <Link to={"/Repo"} > <button style={{position:"relative",top:"200px",left:"90px", width:"380px",backgroundColor:"#357EC7",fontSize:"20px",
                height:"70px",  borderStyle: "solid",
                borderColor: "#00BFFF",borderWidth:"5px"}} type="button" class="btn btn-info" >Analysis of PCR Test Results</button></Link>


    <Link to={"/CheckupRepo"} > <button style={{position:"relative",top:"200px",left:"328px", width:"380px",backgroundColor:"#357EC7",fontSize:"20px",
                height:"70px",borderStyle: "solid",
                borderColor: "#00BFFF",borderWidth:"5px"}} type="button" class="btn btn-info" >Analysis of Temperature Checkup Results</button></Link>


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

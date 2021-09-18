import React,{useState} from "react"
import axios from "axios"
import {Link} from 'react-router-dom';


export default function Dashboard(){

    return(
        // <div className="page-wrapper">
        //   <div className="content container-fluid">
        //     <div className="btn-group">
        //         <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        //          PCR Tests' Details
        //         </button>
        //     <ul className="dropdown-menu">

        //         <li><a className="dropdown-item" href="#">Add Details</a></li>
        //         <li><a className="dropdown-item" href="#">View Details</a></li>
    
    
        //     </ul>
        //     </div>

        //     <div className="btn-group">
        //          <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        //          Body Temperature Checkups' Details
        //         </button>
        //     <ul className="dropdown-menu">
        //         <li><a className="dropdown-item" href="#">Add Details</a></li>
        //         <li><a className="dropdown-item" href="#">View Details</a></li>
        //     </ul>
        //     </div>

        //   </div>
        // </div>

/* <div>
        <div>
<label for="cars">PCR Tets:</label>
<select name="cars" id="cars">
<Link to={'/addPCR'}><option value="volvo" >Add details</option></Link >



<option value="saab">View details</option>

</select>
</div>

<div>
<label for="cars">Temp Checkups:</label>
<select name="cars" id="cars">
<option value="volvo"><Link to={`/addCheckup`}><button value= "Add details"></button></Link></option>
<option value="saab">View details</option>

</select>
</div>
</div> */
     <div>
         <Link to={"/addPCR"}><button>Add PCR</button></Link>
         <Link to={"/ViewPCR"}><button>View PCR</button></Link>
         <Link to={"/addCheckup"}> <button>Add Checkups</button></Link>
         <Link to={"/ViewCheckups"}><button>View Checkups</button></Link>
     </div>

 
    )


}

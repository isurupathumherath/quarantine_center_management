import React , {useState,useEffect} from 'react';

import axios from "axios";



// import Pdf from 'react-to-pdf';



// const ref = React.createRef();

// const options = {

//   orientation : 'landscape',

//   unit : 'in',

//   format : [13,10]

// }



export default function Repo(){

    const [date , setFirstDate] = useState("");

    const [lastday , setLastDate] = useState("");

    const [report , setReport] = useState([]);

   

    

    

    function Enterdate(e){

        e.preventDefault();

        



        const setdate ={

            date,

            lastday

        }      

   

      

           axios.get(`http://localhost:8000/PCRTest/PCRReport/${date}/${lastday}`, setdate).then((res)=>{

                     console.log(res);

                     setReport(res.data);

                }).catch((err)=>{

                    alert(err.message)

                })

           }


            
    

              



    return (


       

        <div className = "container">

            <br></br>

           

            <br></br>

           

            <div class="card bg-light mb-3" >

  

  <div class="card-body">

   

  <form  style ={{display: "inline-block",

  width: "100%"}} >

             <div class="form-row align-items-center">

    <div class="col-auto my-1">

             

    <div className="mb-3">



<label className="form-label">From</label>



<input type="date" className="form-control" placeholder='dd/mm/yyyy:'  onChange = {(e)=>{

      setFirstDate(e.target.value);

  }} /> </div></div>

  <div class="col-auto my-1">

 

  <div className="mb-3">



<label className="form-label">To</label>



<input type="date" className="form-control" placeholder='dd/mm/yyyy:'  onChange = {(e)=>{

      setLastDate(e.target.value)

  }} /> </div></div>

  

  </div>

  <button onClick={Enterdate} className="btn btn-dark"> Generate</button>



</form>

  </div>

</div>






<div >

<h3 className="heading fw-bold" style={{ textAlign: "center"}}>PCR Test Report</h3>

<table >

  <thead>

    <tr>

    

      

      <th scope="col">Result</th>

      <th scope="col">Total</th>

    

    </tr>

  </thead>

  <tbody>

      {report.map(data =>{

          return(

            <tr>

            

           

            <td>{data._id && data._id.Result}</td>

            <td>{data.total}</td>

            </tr>

          )

      })}

    

    </tbody>

    </table>

</div><center>

{/* <Pdf targetRef={ref} filename="Delivery Agents-Performance.pdf" options={options}>

        {({ toPdf }) => }

      </Pdf> */}

<button className="btn btn-dark"  >Generate Report</button>
</center>

        </div>

    )




 




}
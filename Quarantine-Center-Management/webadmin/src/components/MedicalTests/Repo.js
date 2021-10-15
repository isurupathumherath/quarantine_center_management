import React , {useState,useEffect} from 'react';
import axios from "axios";
import { PieChart,Pie,Tooltip, Dot} from "recharts"
import jsPDF from "jspdf";
import "jspdf-autotable";



export default function Repo(){

    let data2=[
        {}
       ];

    let data3=[
        {}
       ];   
     

    const [date , setFirstDate] = useState("");

    const [lastday , setLastDate] = useState("");

    const [date1 , setFirstDate1] = useState("");

    const [lastday1 , setLastDate1] = useState("");

    const [report , setReport] = useState([]);

    const [report1 , setReport1] = useState([]);

   

    

    
    //PCR Test Results Summarry-1
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



     //PCR Test Results Summarry-2
     function Enterdate1(e){

         e.preventDefault();
    
         const setdate1 ={
    
                date1,
    
                lastday1
         }      
    
         axios.get(`http://localhost:8000/PCRTest/PCRReport/group2/${date1}/${lastday1}`, setdate1).then((res)=>{
    
                         console.log(res);
    
                         setReport1(res.data);
    
                    }).catch((err)=>{
    
                        alert(err.message)
    
                    })
    
               }


      //report generation

      const exportPDF = () => {
       
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
       
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "PCR Test Results Report";
        const headers = "PCR Test Results Analysis based on Results";
    
        
        
    
        doc.text(title, 250, 40);
        doc.text(headers,marginLeft,70);
      
        
    
        let left=marginLeft;
        let top=150;
        doc.text("Result",marginLeft,120);
       
        doc.text("No of Patients",360,120);
    
        report.map((data)=>{
            doc.text("------------------------------------------------------------------------------------------------------------",left,top);
            top=top+30;
            doc.setTextColor("orange")
            doc.text(String(data._id && data._id.Result),left,top);
            doc.setTextColor("black")
            
           
            
            
            doc.text(String(data.total),360,top);
            
          
            
          
            top=top+19;

           
              
           
            doc.text("------------------------------------------------------------------------------------------------------------",left,top);  
           
        })

        top=top+20;

        doc.text("PCR Tests Results Analysis on Result and Test Number",marginLeft,top)
        
        top=top+30;
        doc.text("Result",marginLeft,top);
        doc.text("Test No",200,top);
        doc.text("No of Patients",360,top);

        top=top+20;



        report1.map((data)=>{
            doc.text("------------------------------------------------------------------------------------------------------------",left,top);
            top=top+30;
            doc.setTextColor("orange")
            doc.text(String(data._id && data._id.Result),marginLeft,top);
            doc.setTextColor("black")

            doc.text(String(data._id && data._id.TestNo),200,top);
            
           
            
            
            doc.text(String(data.total),360,top);
            
          
            
          
            top=top+19;

           
              
           
            doc.text("------------------------------------------------------------------------------------------------------------",left,top);  
           
        })

       
       
       
        doc.save("PCR Tests' Results Report.pdf");
        
      }
        
    




      return (

        // Summary 1
        <div>

        <h1 style={{
          textShadow:"5px 5px 3.5px #278ea5",
          fontWeight: "bold",
          position: "relative",
          left: "350px",
          top:"-20px"
        }}>Analysis of PCR Test Results</h1>

            <button className="btn btn-dark" onClick={()=>exportPDF()} style={{position:"relative",top:"-30px",left:"40px"}}>Get the details as a pdf</button>

            <div style={{width: "45%",float: "left",padding: "20px",position:"relative",left:"40px"}}> 
             <div className = "container">

                <br></br>
                <br></br>
                <h3 className="heading fw-bold" style={{ textAlign: "center"}}>PCR Test Results Analysis Based on Results</h3>


               <div class="card bg-light mb-3">

                  <div class="card-body">
                  <h4>Enter the time period you want the analysis to get generated on</h4>

                    
                     <form  style ={{display: "inline-block", width: "100%"}} >

                         <div class="form-row align-items-center">

                              <div class="col-auto my-1">

                                  <div className="mb-3">

                                    <label className="form-label">From</label>

                                    <input type="date" className="form-control" placeholder='dd/mm/yyyy:'  onChange = {(e)=>{

                                          setFirstDate(e.target.value);

                                      }} />
                                    
                                  </div>
                                  
                              </div>

                              <div class="col-auto my-1">

                                 <div className="mb-3">

                                   <label className="form-label">To</label>

                                   <input type="date" className="form-control" placeholder='dd/mm/yyyy:'  onChange = {(e)=>{

                                         setLastDate(e.target.value)

                                    }} />
                                
                                 </div>
                              
                              </div>

  
                        </div>

                        <button onClick={Enterdate} className="btn btn-dark"> Generate</button>



                    </form>

                  </div>

                </div>



            <div >

           
            {/* <div style={{width: "45%",float: "left",padding: "20px",border: "2px solid gray",maxHeight:"860px"
            }}> */}


            <table class="table" >

              <thead>

              

                  <th scope="col">Result</th>

                  <th scope="col">Total</th>

                
              </thead>

              <tbody>

                  {report.map((data) =>{
                  data2.push({name:data._id && data._id.Result ,value:data.total})


                      return(

                        <tr>

                        <td>{data._id && data._id.Result}</td>

                        <td>{data.total}</td>

                        </tr>

                      )

                  })}

                

               </tbody>

             </table>

             {/* </div> */}

             {/* <div style={{width: "45%",float: "left",padding: "20px",border: "2px solid gray",maxHeight:"860px"}}> 
              */}
           
             <PieChart width={400} height={250}>
                                    <Pie data={data2} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"/>
                                    <Pie data={data2} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                                    <Tooltip />
             </PieChart><br/>

             {/* </div>
              */}
             <br/><br/>

            </div><center>

            

           
            </center>

            </div></div>






            {/* Summary 2 */}
            <div style={{width: "45%",float: "left",padding: "20px",position:"relative",top:"-20px",right:"-60px"}}> 
            <div className = "container">

                <br></br>
                <br></br>
                <h3 className="heading fw-bold" style={{ textAlign: "center"}}>PCR Test Results Analysis Based on Results and Test Number</h3>


                <div class="card bg-light mb-3" >

                  <div class="card-body">
                    <h4>Enter the time period you want the analysis to get generated on</h4>

                    <form  style ={{display: "inline-block", width: "100%"}} >

                      <div class="form-row align-items-center">

                        <div class="col-auto my-1">

                         <div className="mb-3">

                          <label className="form-label">From</label>

                            <input type="date" className="form-control" placeholder='dd/mm/yyyy:'  onChange = {(e)=>{

                                  setFirstDate1(e.target.value);

                              }} />
                            
                         </div>
                        
                        </div>

                        <div class="col-auto my-1">

                         <div className="mb-3">

                           <label className="form-label">To</label>

                            <input type="date" className="form-control" placeholder='dd/mm/yyyy:'  onChange = {(e)=>{

                                  setLastDate1(e.target.value)

                              }} />
                            
                         </div>
                        
                        </div>

                    </div>

                      <button onClick={Enterdate1} className="btn btn-dark"> Generate</button>

              </form>

           </div>

       </div>



    <div >

    
      {/* <div style={{width: "45%",float: "left",padding: "20px",border: "2px solid gray",maxHeight:"860px"}}> */}
        
        <table class="table">

         <thead>

              <th scope="col">Result</th>

              <th scope="col">TestNo</th>

              <th scope="col">Total</th>

         </thead>

         <tbody>

              {report1.map(data =>{ data3.push({name:data._id && data._id.Result && data._id.TestNo,value:data.total})


         return(

            <tr>

            <td>{data._id && data._id.Result}</td>

            <td>{ data._id.TestNo}</td>

            <td>{data.total}</td>

            </tr>

          )

         })}

        </tbody>

      </table>

   {/* </div> */}

   {/* <div style={{width: "45%",float: "left",padding: "20px",border: "2px solid gray",maxHeight:"860px"}}> */}

   <PieChart width={400} height={250}>
                        <Pie data={data3} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"/>
                        <Pie data={data3} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip />
    </PieChart>

    {/* </div> */}

    </div>
     
     <center>

        {/* <button className="btn btn-dark" onClick={()=>exportPDF()}>Generate Report</button> */}

    </center>

    </div>

    </div>
    </div>

    )


}
import React , {useState,useEffect} from 'react';
import axios from "axios";
import { PieChart,Pie,Tooltip, Dot} from "recharts"
import jsPDF from "jspdf";
import "jspdf-autotable";



export default function CheckupRepo(){


    let data4=[
        {}
       ];

        const [date , setFirstDate] = useState("");
    
        const [lastday , setLastDate] = useState("");
    
       
        const [report , setReport] = useState([]);
    
     
    
        
    
        
        //Temp Checkup Results Summarry
        function Enterdate(e){
    
            e.preventDefault();
            
            const setdate ={
    
                date,
    
                lastday
             }      
    
            axios.get(`http://localhost:8000/TempCheckup/TempRepo/${date}/${lastday}`, setdate).then((res)=>{
    
                         console.log(res);
    
                         setReport(res.data);
    
                    }).catch((err)=>{
    
                        alert(err.message)
    
                    })
    
             }

         //Report Generation
         const exportPDF = () => {
       
            const unit = "pt";
            const size = "A4"; // Use A1, A2, A3 or A4
            const orientation = "portrait"; // portrait or landscape
        
            const marginLeft = 40;
           
            const doc = new jsPDF(orientation, unit, size);
        
            doc.setFontSize(15);
        
            const title = "Body Temperature Checkups Report";
            const headers = "Latest Body Temperature Checkups based on Dates";
        
            
            
        
            doc.text(title, 250, 40);
            doc.text(headers,marginLeft,70);
          
            
        
            let left=marginLeft;
            let top=150;
            doc.text("Date",marginLeft,120);
           
            doc.text("No of Checkups done",360,120);
        
            report.map((data)=>{
                doc.text("------------------------------------------------------------------------------------------------------------",left,top);
                top=top+30;
                doc.setTextColor("orange")
                doc.text(String(data._id && data._id.CheckupDate),left,top);
                doc.setTextColor("black")
                
               
                
                
                doc.text(String(data.total),360,top);
                
              
                
              
                top=top+19;
    
               
                  
               
                doc.text("------------------------------------------------------------------------------------------------------------",left,top);  
               
            })

            doc.save("Temperature Checkups Results Report.pdf");
        
        }
    
    
    
    return(

        

        <div>

        <h1 style={{
          textShadow:"5px 5px 3.5px #278ea5",
          fontWeight: "bold",
          position: "relative",
          left: "350px",
          top:"-20px"
        }}>Analysis of Body Temperature Checkup Results</h1>

        <button className="btn btn-dark" onClick={()=>exportPDF()} style={{position:"relative",top:"-30px",left:"40px"}}>Get the details as a pdf</button>


           
            <div style={{width: "45%",float: "left",padding: "20px",position:"relative",left:"40px"}}> 
             <div className = "container">

                <br></br>
                <br></br>
                <h3 className="heading fw-bold" style={{ textAlign: "center"}}>Body Temperature Checkups done on each day</h3>


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

                <tr>

                  <th scope="col">Date</th>

                  <th scope="col">Total</th>

                </tr>

              </thead>

              <tbody>

                  {report.map((data) =>{
                  data4.push({name:data._id && data._id.CheckupDate ,value:data.total})

                

                      return(

                        <tr>

                        <td>{data._id && data._id.CheckupDate}</td>

                        <td>{data.total}</td>

                        </tr>

                      )

                  })}

                

               </tbody>

             </table>
            <div style={{width: "45%",float: "left",padding: "20px",position:"relative",left:"40px"}}> 
            <PieChart width={400} height={250}>
                                    <Pie data={data4} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"/>
                                    <Pie data={data4} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                                    <Tooltip />
             </PieChart></div><br/>

             {/* </div> */}

             {/* <div style={{width: "45%",float: "left",padding: "20px",border: "2px solid gray",maxHeight:"860px"}}> 
              */}
           
          

             {/* </div>
              */}
             <br/><br/>

            </div><center>

            

           
            </center>

            </div></div></div>



    
    )

}

import React, { useState, useEffect } from "react"; // in use effect it determines what would i want to display when page is loaded..used when reading data from DB
import axios from "axios";
import { Link } from "react-router-dom"; 
import { PieChart,Pie,Tooltip} from "recharts"
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function Summarymed (){

  const [meds, setmeds] = useState([]);
  const [medi,setmedi]=useState([]);
  const [ba,setba]=useState([]);
  
  
  let data=[
   {}
  ];
  let x={}
  // ba.map((post)=>(data=[{name:post.batchnum,value:post.total_quantity*item.price_of_one}]))
  let b1=[];

  let b2=[];
  let t0=0;
  let tot=0;
  let cost=0;
  useEffect(() => {
    function getmeds() {
        axios
          .get("http://localhost:8000/meds/get")
          .then((res) => {
            setmeds(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
      
      getmeds();
  }, []);

  const getData = (name) => {
    axios.get(`http://localhost:8000/meds/get/${name}`).then((res)=>{
                setmedi(res.data);
                b1=res.data;
                setba(b1.Batch);
            }).catch((err)=>{
                alert(err.message);
            })
            
  }


  const exportPDF = () => {
    let q=0;
    let unitTot=0;
    let Grandtotal=0;
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Inventory Report";
    const headers = [["Drug Name", "Category","Unit Price"]];
    
    const data = meds.map(elt=> [elt.name, elt.category ,elt.price_of_one]);
    
    let content = {
      startY: 50,
      head: headers,
      body: data
    };
    

    doc.text(title, 250, 40);
    doc.autoTable(content);
    doc.text("Batch Details",marginLeft,300);

    let left=marginLeft;
    let top=350;
    doc.text("Batch Numbers",marginLeft,320);
    doc.text("Total Quantity",200,320);
    doc.text("Total Amount Spent",360,320);

    meds.map((da)=>{
        doc.text("------------------------------------------------------------------------------------------------------------",left,top);
        top=top+30;
        doc.setTextColor("orange")
        doc.text(String(da.name),left,top);
        doc.setTextColor("black")
        da.Batch.map((post)=>{
          
         
          top=top+30;
          doc.text(String(post.batchnum),40,top);

     
          doc.text(String(post.total_quantity),200,top);


          doc.text(String(post.total_quantity*medi.price_of_one),360,top);

          unitTot=unitTot+post.total_quantity*medi.price_of_one;
          top=top+30;
          top >= 750 ? doc.addPage() : (q = 1);
          top >=750 ? (top=50):(q=2);
        })  
        doc.text("__________",340,top);
        top=top+20;
        doc.text("Total : ",300,top);
        doc.text(String(unitTot),360,top);
        
        Grandtotal=Grandtotal+unitTot;
        
        doc.text("__________",340,top+5);
        doc.text("__________",340,top+7);
        top=top+19;
        unitTot=0;
        doc.text("------------------------------------------------------------------------------------------------------------",left,top);  
        // ba.map((b)=>{
        //   doc.text("------------------------------------------------------------------------------------------------------------",left,top);
         
        //   top=top+30;
        //   doc.text(String(b.batchnum),40,top);

     
        //   doc.text(String(b.total_quantity),200,top);


        //   doc.text(String(b.total_quantity*medi.price_of_one),360,top);

        //   top=top+30;
        //   doc.text("------------------------------------------------------------------------------------------------------------",left,top);
        //   top=top+3;
        //   top >= 750 ? doc.addPage() : (q = 1);
        //   top >=750 ? (top=50):(q=2);
        // })
    })

    // ba.map((data)=>{

      // doc.text("------------------------------------------------------------------------------------------------------------",left,top);

      // top=top+30;
      // doc.text(String(data.batchnum),40,top);

     
      // doc.text(String(data.total_quantity),200,top);


      // doc.text(String(data.total_quantity*medi.price_of_one),360,top);

      // top=top+30;
      // doc.text("------------------------------------------------------------------------------------------------------------",left,top);
      // top=top+3;
    // })

    //doc.addPage();
    //doc.text("Batch Details",marginLeft,300);
    //p >= 415 ? doc.addPage() : (q = 1);
    top=top+30;
    doc.setTextColor("red")
    top=top+20;
    doc.text("Grand Total :  ",253,top);
    doc.text(String(Grandtotal),355,top);
    doc.text("__________",340,top+5);
    doc.text("__________",340,top+7);
    doc.save("Inventory Report.pdf");
    
  }

  meds.map((post)=>(t0=t0+1));
  meds.map((post)=>(cost=cost+post.price_of_one));
  {ba.map((post)=>(tot=tot+post.total_quantity * medi.price_of_one))}
    return (
        <div>
          <div class="page-wrapper">
            <div class="content container-fluid">
            <div style={{background:"white",padding:"20px",position: "relative",
                left: "-190px",
                top:"-40px",
                height:"1000px",
                width:"1000px"}}>
                
                <div style={{border: "3px solid #fff",
                            padding: "20px"}}>

                <button id="delete"  class="btn btn-dark" onClick={()=>exportPDF()}>Generate Report +</button><br/><br/>
                <div style={{width: "45%",float: "left",padding: "20px",border: "2px solid gray"}}>
                    <center><h1>Total Summary of Medicine</h1></center>
                      <br/>
                      <p>Total Medicine Items in Inventory - {t0}</p>
                      <hr/>
                    <center><h1>Pick an Item</h1></center>
                      <br/>
                      <table class="table table-striped">
                        <thead>
                          <th>Name</th>
                          <th>Price of one unit</th>
                          <th>Actions</th>
                      </thead>
                        <tbody>
                      {meds.map((sto) => {
                        return(
                          <tr>
                      <td>{sto.name}</td>
                      <td>{sto.price_of_one}</td>
                      <td>
                          <button id="view"  class="btn btn-info" onClick={()=>getData(sto._id)}>View</button>
                        </td>
                    </tr>
                        );
                      })}
                    </tbody>
                    </table>
                </div>
                
                <div style={{width: "55%",float: "left",padding: "20px",border: "2px solid gray" , maxHeight:"1600px",overflowY: "scroll"}}>
                    <center><h1>Selected Item : {medi.name}</h1></center> 
                    <hr/>
                    <div style={{width: "45%",float: "left",padding: "20px"}}>
                   
                      <h4>Batch Numbers</h4>
                      <center>
                      {ba.map((m) => {
                        data.push({name:m.batchnum,value:medi.price_of_one*m.total_quantity})
                        return (
                          <h6>{m.batchnum}</h6>
                        );
                      })}<br/>
                      <h5 style={{color:"red"}}>Total</h5>
                      </center>
                    </div>
                    <div style={{width: "55%",float: "left",padding: "20px"}}> 
                      <h4>Total Amount Spent</h4>
                      <center>
                      {ba.map((m) => {
                        return (
                          <h6>{m.total_quantity * medi.price_of_one}</h6>
                        );
                      })}
                      
                      <hr/>
                          <h6>{tot}</h6>
                      <hr/><hr/>    
                      </center>
                    </div>  
                    <center>
                      <h6>Chart View</h6>
                      <PieChart width={400} height={250}>
                        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"/>
                        <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip />
                      </PieChart>
                    </center>
                </div>


                </div>
            </div>        
            </div>
          </div>
        </div>  
    );
}
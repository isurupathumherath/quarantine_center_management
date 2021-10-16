import React,{useState} from "react"
  import axios from "axios"
  


  export default function AddTempCheckup(){

  const[PatientId,setPatientId] = useState("");
  const[CheckupId,setCheckupId] = useState("");
  const[CheckupDate,setCheckupDate] = useState("");
  const[CheckupTime,setCheckupTime] = useState("");
  const[Result,setResult] = useState("");

  function sendData(e){
    e.preventDefault();
    
    const newTempCheckup = {
      PatientId,
      CheckupId,
      CheckupDate,
      CheckupTime,
      Result
    }

    axios.post("http://localhost:8000/TempCheckup/add",newTempCheckup).then(()=>{
      alert("Body Temperature Checkup details added successfully !");
      window.location.replace('/ViewCheckups');
      setPatientId("");
      setCheckupId("");
      setCheckupDate("");
      setCheckupTime("");
      setResult("");
      
    }).catch((err)=>{
      alert(err)
    })
  }

  const disableFutureDate = () => {
    const today = new Date();
    const dd = String(today.getDate() ).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};
 

  
  

  return(
        
  <div>
      <div style={{backgroundColor:"#AED6F1 ",position:"relative",right:"100px"}} class="page-wrapper">
      <h1 style={{
        textShadow:"5px 5px 3.5px #278ea5",
        fontWeight: "bold",
        position: "relative",
        left: "120px",
        top:"-45px"
      }}>Insert Body Temperature Checkup Details</h1>
          <div class="content container-fluid">
            <div>      
              <form  style={{
                position: "relative",
                left: "175px",
                top:"-70px"
              }} onSubmit={sendData}>

                
                <div class="form-group" class="col-sm-7">

                  <label for="PatientId">Patient ID</label>
                  <input type="text" required class="form-control" id="PatientId" placeholder="Enter the Patient Id"
                  onChange={(e)=>{

                      setPatientId(e.target.value);

                  }} />
                  
   
                </div>


                <div class="form-group" class="col-sm-7">

                  <label for="CheckupId">Body Temperature Checkup Id</label>
                  <input type="text"  required class="form-control" id="CheckupId" placeholder="Enter the body temperature checkup Id"
                  onChange={(e)=>{

                      setCheckupId(e.target.value);

                  }} />
                  
   
                </div>

                
                <div class="form-group" class="col-sm-7">

                  <label for="CheckupDate">Date of the checkup</label>
                  {/* <input type="date" required class="form-control" class="datepicker-input" id="datepicker" max={disableFutureDate()}  placeholder="Enter the date of the checkup" date-date-format="yyyy-mm-dd"
                    onChange={(e)=>{
                    
                      setCheckupDate(e.target.value);

                  }} /> */}

                <input id="datepicker" class="datepicker-input" required class="form-control" max={disableFutureDate()}   placeholder="Enter the date of the Checkup" type="date" data-date-format="yyyy-mm-dd" onChange={(e)=>{

                setCheckupDate(e.target.value);

                }} /> 
                                
                </div>


                <div class="form-group" class="col-sm-7">

                  <label for="CheckupTime">Time of the checkup</label>
                  <input type="text" required class="form-control" id="CheckupTime" placeholder="Enter the time of the checkup"
                    onChange={(e)=>{

                      setCheckupTime(e.target.value);

                  }} />
                
                </div>

                


                <div class="form-group" class="col-sm-7">

                  <label for="Result">Result of the checkup</label>
                  <input type="text" required class="form-control" id="Result" placeholder="Enter the result of the test"
                    onChange={(e)=>{

                      setResult(e.target.value);

                  }} />
                
                </div>
  
                <br/>
                
  
                <button style={{
                  color:"black",
                  backgroundColor:" #278ea5",
                  position: "relative",
                  fontWeight: "bold",
                  left: "225px"
                }} type="submit" class="btn btn-primary">Submit</button>
              </form>

              <a href="/Medicaltests/dashboard" style={{
                position:"relative",
                top:"-50px",
                left:"130px"
              }}>Back to the dashboard</a>

              <a href="/ViewCheckups" style={{
                position:"relative",
                top:"-50px",
                left:"500px"
              }}>View all Checkups</a>
           </div>
         </div>
     </div>
  </div>
        


    )
}
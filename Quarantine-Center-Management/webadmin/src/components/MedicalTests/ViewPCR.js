import React,{useState,useEffect} from "react"
import axios from "axios"
import {Link} from 'react-router-dom';

const customer5={
  paddingTop: '12px',
  paddingBottom: '12px',
  textAlign: 'left',
  backgroundColor: '#278ea5',
  color: 'black'
}



export default function ViewPCR(){

  
const [PCRTests, setPCRTests] = useState([]); 
const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {  
    function getPCRTests() {     
       axios.get("http://localhost:8000/PCRTest/display").then((res) => {  
                  console.log(res.data);   
                  setPCRTests(res.data);   
           }).catch((err) => {       
             alert(err.message);     
         });  
    }   
   getPCRTests();
  }, []); //when the array mentioned in the [] changes the useeffect happens..in here because we hve empty array the useeffect only run when the component refresh  const setData = (med) => {    let {_id,category,name,price_of_one,Batch} = med;    localStorage.setItem('id',_id);    localStorage.setItem('category', category);    localStorage.setItem('name', name);    localStorage.setItem('price', price_of_one);    localStorage.setItem('batch', Batch);}


const setData = (PCRTests) => {



  let {_id,PatientId,PCRTestId,TestNo,TestDate,TestTime,Result} = PCRTests;

  localStorage.setItem('testid',_id);

  localStorage.setItem('PatientId', PatientId);

  localStorage.setItem('PCRTestId', PCRTestId);

  localStorage.setItem('TestNo', TestNo);

  localStorage.setItem('TestDate',TestDate);

  localStorage.setItem('TestTime', TestTime);

  localStorage.setItem('Result', Result);

}

const getData = () => {
  axios
      .get("http://localhost:8000/PCRTest/display")
      .then((res) => {
        setPCRTests(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
}



const handleFilter = (event) => {
  const searchWord = event.target.value;
  console.log(searchWord);
  setWordEntered(searchWord);
  axios.get("http://localhost:8000/PCRTest/display")
  .then(response => {
      console.log(response)
      const newFilter = PCRTests.filter((response) => {
          return response.PCRTestId.toLowerCase().includes(searchWord.toLowerCase());
      });

      if (searchWord === "") {
          console.log("EMPLTY");
          getData();
      } else {
        setPCRTests(newFilter);
      }
  })
  .catch(error => console.log(error));
};



  return (

      <div>
  
        <div class="page-wrapper">
        <h1 style={{
          textShadow:"5px 5px 3.5px #278ea5",
          fontWeight: "bold",
          position: "relative",
          left: "200px",
          top:"-70px"
        }}>Details of PCR Tests</h1>
        <div className="row"> 
            <div className="col-lg-9 mt-2 mb-2">
            </div>
            <div className="col-lg-3 mt-2 mb-2" style={{position:"relative",right:"130px",top:"-6px",height:"42.5px"}}>

            <input 
                    className="form-control" 
                    type="search"          
                    placeholder="Search by PCR Test Id..."
                    value={wordEntered}
                    onChange={handleFilter}>
                </input>
                </div>
                </div>
  
          <div class="content container-fluid">
  
            <Link to={"/addPCR"}>
  
              <button class="btn btn-primary" style={{
                backgroundColor: "black",
                border: "5px solid #278ea5",
                position:"relative",
                top:"-90px",
                left:"-95px"

              }} id="view">Add New +</button>
  
            </Link>
  
            <br/><br/>
           

            
  
              <table   style={{
                outline: "1px groove black",
                position:"relative",
                left:"-95px",
                top:"-100px"

                
                
              }} class="table" >
  
                  <th style={customer5}>Patient Id</th>
  
                  <th style={customer5}>PCR Test Id</th>

                  <th style={customer5}>Test Number</th>

                  <th style={customer5}>Test Date</th>

                  <th style={customer5}>Test Time</th>

                  <th style={customer5} >Result</th>
  
  
                  <th style={customer5}>Actions</th>
  
                <tbody>
  
                  {PCRTests.map((PCRTests) => {
                   
                   
  
                    return (
  
                      <tr>
  
                        <td>{PCRTests.PatientId}</td>
  
                        <td>{PCRTests.PCRTestId}</td>
  
                        <td>{PCRTests.TestNo}</td>

                        <td>{PCRTests.TestDate}</td>

                        <td>{PCRTests.TestTime}</td>

                        <td>{PCRTests.Result}</td>
  
                        <td>
  
                          <Link to={"/UpdatePCR"}>
  
                            <button className="btn btn-warning" className="fas fa-edit" style={{

                              // backgroundColor: "black"
                            }}id="view" onClick={()=>setData(PCRTests)}>Update</button>

                          </Link>
                          {/* <Link to={"/addPCR"}>
                            <button id="view" onClick={()=>setData(PCRTests)}>Delete</button>
  
                          </Link> */}
  
                        </td>
  
                      </tr>
  
                    );
  
                  })}
  
                </tbody>
  
              </table>
  
          </div>
  
        </div>
  
      </div>
  
    );

}
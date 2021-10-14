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
  
 

  export default function ViewCheckups(){

    
  const [Checkups, setCheckups] = useState([]); 
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {  
      function getCheckups() {     
         axios.get("http://localhost:8000/TempCheckup/display").then((res) => {  
                    console.log(res.data);   
                    setCheckups(res.data);   
             }).catch((err) => {       
               alert(err.message);     
           });  
      }   
     getCheckups();
  }, []); //when the array mentioned in the [] changes the useeffect happens..in here because we hve empty array the useeffect only run when the component refresh  const setData = (med) => {    let {_id,category,name,price_of_one,Batch} = med;    localStorage.setItem('id',_id);    localStorage.setItem('category', category);    localStorage.setItem('name', name);    localStorage.setItem('price', price_of_one);    localStorage.setItem('batch', Batch);}


const setData = (Checkups) => {



    let {_id,PatientId,CheckupId,CheckupDate,CheckupTime,Result} = Checkups;

    localStorage.setItem('checkupid',_id);

    localStorage.setItem('PatientId', PatientId);

    localStorage.setItem('CheckupId', CheckupId);

    localStorage.setItem('CheckupDate', CheckupDate);

    localStorage.setItem('CheckupTime', CheckupTime);

    localStorage.setItem('Result', Result);

}

const getData = () => {
  axios
      .get("http://localhost:8000/TempCheckup/display")
      .then((res) => {
        setCheckups(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
}



const handleFilter = (event) => {
  const searchWord = event.target.value;
  console.log(searchWord);
  setWordEntered(searchWord);
  axios.get("http://localhost:8000/TempCheckup/display")
  .then(response => {
      console.log(response)
      const newFilter = Checkups.filter((response) => {
          return response.CheckupId.toLowerCase().includes(searchWord.toLowerCase());
      });

      if (searchWord === "") {
          console.log("EMPLTY");
          getData();
      } else {
        setCheckups(newFilter);
      }
  })
  .catch(error => console.log(error));
};



    return (

        <div>
    
          <div class="page-wrapper">
          <h1  style={{
          textShadow:"5px 5px 3.5px #278ea5",
          fontWeight: "bold",
          position: "relative",
          left: "50px",
          top:"-70px"
        }}>Details of Body Temperature Checkups</h1>

        <div className="row"> 
            <div className="col-lg-9 mt-2 mb-2">
            </div>
            <div className="col-lg-3 mt-2 mb-2" style={{position:"relative",right:"130px",top:"-6px",height:"42.5px"}} >
              <input className="form-control" 
              type="search" 
              placeholder="Search by Checkup Id..." 
              name="Searchquery" 
              value={wordEntered}
              onChange={handleFilter}
              >

              </input>
            </div>
          </div>
    
            <div class="content container-fluid">
    
              <Link to={"/addCheckup"}>
    
                <button class="btn btn-primary" style={{
                backgroundColor: "black",
                border: "5px solid #278ea5",
                position:"relative",
                top:"-90px",
                left:"-95px"

              }} id="view">Add New +</button>
    
              </Link>
    
              <br/><br/>
              {/* <style>{"table{border:100px solid black;}"}</style> */}
                <table  style={{
                outline: "1px groove black",
                position:"relative",
                left:"-95px",
                top:"-100px"}}class="table">
    
                    <th style={customer5}>Patient Id</th>
    
                    <th style={customer5}>Checkup Id</th>
    
                    <th style={customer5}>Checkup Date</th>

                    <th style={customer5}>Checkup Time</th>

                    <th style={customer5}>Result</th>
    
    
                    <th style={customer5}>Actions</th>
    
                  <tbody>
    
                    {Checkups.map((Checkups) => {
    
                      return (
    
                        <tr>
    
                          <td>{Checkups.PatientId}</td>
    
                          <td>{Checkups.CheckupId}</td>
    
                          <td>{Checkups.CheckupDate}</td>

                          <td>{Checkups.CheckupTime}</td>

                          <td>{Checkups.Result}</td>
    
                          <td>
    
                            <Link to={"/UpdateCheckup"}>
    
                              <button class="btn btn-primary"  style={{

                                 backgroundColor: "black"
                                 }}id="view" onClick={()=>setData(Checkups)}>Update</button>

                            </Link>
                            <Link to = {"/DeleteCheckup"}>
                              <button class="btn btn-primary"  style={{
                                  position:"relative",
                                  left:"5px",
                                  backgroundColor: "#A9A9A9"
                                  }} id="view" onClick={()=>setData(Checkups)}>Delete</button>
    
                            </Link>
    
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
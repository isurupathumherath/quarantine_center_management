import React,{useState,useEffect} from 'react';
import axios from "axios"
import { PieChart,Pie,Tooltip} from "recharts"
import { useHistory } from 'react-router-dom';




export default function Report(){

    
    let history = useHistory();
    let total=0;

    


    const [PCRTests, setPCRTests] = useState([]);
    const [Checkups, setCheckups] = useState([]); 

    const [date1,setdate1]=useState(null);
    const [date2,setdate2]=useState(null);
    const [dateT,setdateT]=useState(null);

    let data=[
        {}
       ];

       let data2=[
        {}
       ];   
       var groupedPCR=groupArrayOfObjects(data2,"Result");

       function groupArrayOfObjects(list, key) {
        return list.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
      

//  {Checkups.map((Checkups) => { {name:Checkups.Result,value:Total+1}
// })}  
  

    useEffect(() => {
        setdate1(localStorage.getItem('d1'))
        setdate2(localStorage.getItem('d2'));
        setdateT(localStorage.getItem('dT'));

         axios.get("http://localhost:8000/TempCheckup/display").then((res) => {  
                    console.log(res.data);   
                    setCheckups(res.data);   
             }).catch((err) => {       
               alert(err.message);     
           });  

         axios.get("http://localhost:8000/PCRTest/display").then((res) => {  
                    console.log(res.data);   
                    setPCRTests(res.data);   
             }).catch((err) => {       
               alert(err.message);     
           });  

        

    }, []);



    return(
        <div>


        <h1>Report</h1>

        <div style={{width: "45%",float: "left",padding: "20px",border: "2px solid gray"}}>

            
                            {PCRTests.map((m) => {


                    data2.push({name:m.Result,value:6})
                    total=total+1
                    return (
                    <h6></h6>
                    );
                    })}

                <PieChart width={400} height={250}>
                        <Pie data={data2} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"/>
                        <Pie data={data2} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip />
                      </PieChart>
 
        
            
                   
                </div>
                
                <div style={{width: "55%",float: "left",padding: "20px",border: "2px solid gray"}}>

                {Checkups.map((m) => {

data.push({name:m.Result,value:6})
total=total+1
return (
  <h6></h6>
);
})}

                <PieChart width={400} height={250}>
                        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"/>
                        <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip />
                      </PieChart>
 
                </div>
                </div>

    )

}
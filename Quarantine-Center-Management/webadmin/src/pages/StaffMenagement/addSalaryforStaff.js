/*
    Created by - Isuru Pathum Herath
    On - 12/09/2021
    Name - addSalaryforStaff
    Last Update - 12/09/2021
 */

    import React, { useState, useEffect, setState} from 'react';
    import axios from 'axios';
    import {Link} from 'react-router-dom';
    
    const App = () => {
    
        const[staffMembers, setStaffMembers] = useState([]);
        const[staffSalary, setStaffSalary] = useState([]);
        const [wordEntered, setWordEntered] = useState("");
    
        //Fetch All staff Members
        const fetchStaffMembers = () => {
            axios.get("http://localhost:8000/employee/all-employees")
            .then(response => {
                console.log(response)
                setStaffMembers(response.data)
            })
            .catch(error => alert("Error Fetching Staff Members"));
        }

        //Fetch All Salary Details
        const fetchSalaryDetails = () => {
            axios.get("http://localhost:8000/salary/all-salary")
            .then(response => {
                console.log(response)
                setStaffSalary(response.data)
            })
            .catch(error => alert("Error Fetching Staff Members"));
        }
    
        //Delete staff Member by ID
        const deleteStaffMember = (employeeId) => {
            axios
            .delete(`http://localhost:8000/employee/remove/${employeeId}`)
            .then(response => {
                alert(response.data.message);
                fetchStaffMembers();
            })
            .catch(error => alert('Error deleting Staff Member'));
        }
    
        //Filter Staff Member
        const handleFilter = (event) => {
            const searchWord = event.target.value;
            console.log(searchWord);
            setWordEntered(searchWord);
            axios.get("http://localhost:8000/salary/all-salary")
            .then(response => {
                console.log(response)
                const newFilter = staffSalary.filter((response) => {
                    return response.EmployeeID.toLowerCase().includes(searchWord.toLowerCase());
                });
    
                if (searchWord === "") {
                    console.log("EMPLTY");
                    fetchSalaryDetails();
                } else {
                    setStaffSalary(newFilter);
                }
            })
            .catch(error => console.log(error));
          };
    
        useEffect(() => {
            fetchStaffMembers();
            fetchSalaryDetails();
        }, [])
    
        return (
            <div>
                <h1 align="center">Staff Members</h1>
                <br/>
                <form style={{marginTop:'40px', marginLeft:'40px'}}>
                <div className="col-lg-3 mt-2 mb-2">
                    <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    value={wordEntered}
                    onChange={handleFilter}
                    />
                </div>
                </form>
              <br/>
                <table responsive className="table table-hover" style={{marginTop:'40px', marginLeft:'40px'}}>
                <thead>
                    <tr>
                        <th >#</th>
                        <th >Employee ID</th>
                        <th >Grade</th>
                        <th >PerDay</th>
                        <th >Additional Hour</th>
                    </tr>
                </thead>
                <tbody>
                {staffSalary.map((staffSalary, i) => (
                    <tr key={i}>
                    <th scope="row">{i+1}</th>
                    
                    <a href={`/singleProfile/${staffSalary.EmployeeID}`} style={{textDecoration:'none'}}>
                        <td>{staffSalary.EmployeeID}</td>
                    </a>
                    
                    <td>{staffSalary.Grade}</td>
                    <td>{staffSalary.PerDay}</td>
                    <td>{staffSalary.AdditionalHour}</td>
                   
                    <td>
                      <a className="btn btn-warning" href={`/updateStaffMember/${staffMembers.EmployeeID}`}>
                        <i className="fa fa-check-square"></i>&nbsp;
                      </a>
                      &nbsp;
                      <a className="btn btn-danger" href="#" onClick={() => deleteStaffMember(staffMembers.employeeId)}>
                        <i className="far fa-trash-alt"></i>&nbsp;
                      </a>
                    </td>
                  </tr>
                ))}
                </tbody>
                </table>
            </div>
        )
    
    }
    
    export default App;
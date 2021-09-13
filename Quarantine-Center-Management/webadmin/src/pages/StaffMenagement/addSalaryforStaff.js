/*
    Created by - Isuru Pathum Herath
    On - 12/09/2021
    Name - addSalaryforStaff
    Last Update - 12/09/2021
 */

    import React, { useState, useEffect, setState} from 'react';
    import axios from 'axios';
    import {Link} from 'react-router-dom';
    import { Row, Container, Col } from 'react-bootstrap/'
    
    const App = () => {
    
        const[staffMembers, setStaffMembers] = useState([]);
        const[staffSalary, setStaffSalary] = useState([]);
        const [wordEntered, setWordEntered] = useState("");
        const [wordEnteredStaff, setWordEnteredStaff] = useState("");

        // state
        const [state, setState] = useState({
            firstName: '',
            middleName: '',
            lastName: '',
            mobileNumber: '',
            email: '',
            DOB: '',
            // DOB: new Date(),
            NIC: '',
            address: '',
            type: ''
        });

        //destructure values from state
        const{firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address, type} = state;

    
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
        const handleFilterStaff = (event) => {
            const searchWord = event.target.value;
            console.log(searchWord);
            setWordEnteredStaff(searchWord);
            axios.get("http://localhost:8000/employee/all-employees")
            .then(response => {
                console.log(response)
                const newFilter = staffMembers.filter((response) => {
                    return response.employeeId.toLowerCase().includes(searchWord.toLowerCase());
                });

                if (searchWord === "") {
                    console.log("EMPLTY");
                    fetchStaffMembers();
                } else {
                    setStaffMembers(newFilter);
                }
            })
            .catch(error => console.log(error));
        };
    
        //Filter Staff Salary
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

        function handleChange(name) {
            return function(event) {
                setState({ ...state, [name]: event.target.value});
            }
        }

        //Submit Form Data
        const handleSubmit = event => {
            event.preventDefault()
            console.table({firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address, type})
            axios.post(`http://localhost:8000/employee/add`, { firstName, middleName, lastName, mobileNumber, email, DOB, NIC, address, type })
            .then(response => {
                console.log(response)
                //show success alert
                alert(`Employee ${response.data.firstName} is Created`);
                //empty state
                setState({ ...state, firstName: '', middleName: '', lastName: '', mobileNumber: '', email: '', DOB: '', NIC: '', address: '', type: ''} );
                
            })
            .catch(error => {
                console.log(error.Response)
                alert(error.response.data.error)
            })
        };
    
        useEffect(() => {
            fetchStaffMembers();
            fetchSalaryDetails();
        }, [])
    
        return (
            
            <div className="container-fluid">
                <h1 align="center">Staff Salary</h1>
                <br/>
                    <form onSubmit={handleSubmit} style={{marginTop: '50px', marginLeft:'100px'}}>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col">
                                    <div className="form-group">
                                        <label className="text-muted">Employee ID</label>
                                        <input onChange={handleChange('employeeId')} value={firstName} type="text" className="form-control" placeholder="Enter the Employee ID" pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required/>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className="form-group">
                                        <label className="text-muted">Grade</label>
                                        <input onChange={handleChange('grade')} value={middleName} type="text" className="form-control" placeholder="Enter the Grade" pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required/>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className="form-group">
                                        <label className="text-muted">Salary Per Day</label>
                                        <input onChange={handleChange('salaryPerDay')} value={lastName} type="text" className="form-control" placeholder="Salary Per Day (Rs.)" pattern="[A-Za-z]+" title="Characters can only be A-Z and a-z." required/>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className="form-group">
                                        <label className="text-muted">Salary per OT hour</label>
                                        <input onChange={handleChange('salaryPerOtHour')} value={mobileNumber} type="text" className="form-control" placeholder="Salary Per OT Hour (Rs.)" pattern="[0-9]{10}" title="Invalid Mobile Number." required/>
                                    </div>
                                    
                                </div>
                                <div class="col" style={{marginTop:'30px', marginLeft:'20px'}}>
                                        <div>
                                            <button className="btn btn-primary" style={{width: "100px"}}>Add</button>
                                        </div>
                                    </div>
                                </div>
                        </div>  
                    </form>
                <hr style={{ marginLeft:'20px' }}/>
                <div class="row">
                    <div class="col">
                        <form style={{marginTop:'40px'}}>
                        
                            <div className="input-group mb-2 col-lg-12">
                                
                                <input 
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                value={wordEntered}
                                onChange={handleFilter}
                                style={{width: "100%"}}
                                />
                                
                            </div>
                        </form>
                        <table responsive className="table table-hover" style={{marginTop:'40px', marginLeft:'20px', marginRight:'40px'}}>
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
                            
                                {/* <td>
                                <a className="btn btn-warning" href={`/updateStaffMember/${staffMembers.EmployeeID}`}>
                                    <i className="fa fa-check-square"></i>&nbsp;
                                </a>
                                &nbsp;
                                <a className="btn btn-danger" href="#" onClick={() => deleteStaffMember(staffMembers.employeeId)}>
                                    <i className="far fa-trash-alt"></i>&nbsp;
                                </a>
                                </td> */}
                            </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <br/>
                    <div class="col" style={{marginTop:'40px', marginLeft:'20px'}}>
                        <div className="input-group mb-2 col-lg-12">
                                    
                                    <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Search"
                                    value={wordEnteredStaff}
                                    onChange={handleFilterStaff}
                                    width="100%"/>
                                
                        </div>
                        
                        <table responsive className="table table-hover" style={{marginTop:'40px', marginLeft:'20px'}}>
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th >Employee ID</th>
                                    <th >First Name</th>
                                    <th >Last Name</th>
                                    <th >Employee Type</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {staffMembers.map((staffMembers, i) => (
                                <tr key={i}>
                                <th scope="row">{i+1}</th>
                                
                                <a href={`/singleProfile/${staffMembers.employeeId}`} style={{textDecoration:'none'}}>
                                    <td>{staffMembers.employeeId}</td>
                                </a>
                                
                                <td>{staffMembers.firstName}</td>
                                <td>{staffMembers.lastName}</td>
                                <td>{staffMembers.type}</td>
                            
                            </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                    

                        
                        
            </div>
        )
    
    }
    
    export default App;
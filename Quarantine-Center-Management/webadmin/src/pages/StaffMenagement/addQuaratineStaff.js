/*
    Created by - Isuru Pathum Herath
    On - 11/09/2021
    Name - addStaffMember
    Last Update - 11/09/2021
 */

    import React, { useState, useEffect} from 'react';
    import axios from 'axios';
    
    const App = () => {
    
        const[staffMembers, setStaffMembers] = useState([])
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
    
        //Filter Staff Member
        const handleFilter = (event) => {
            const searchWord = event.target.value;
            console.log(searchWord);
            setWordEntered(searchWord);
            axios.get("http://localhost:8000/employee/all-employees")
            .then(response => {
                console.log(response)
                const newFilter = staffMembers.filter((response) => {
                    return response.NIC.toLowerCase().includes(searchWord.toLowerCase());
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
    
        useEffect(() => {
            fetchStaffMembers();
        }, [])
    
        return (
            <div>
    
                <h1 align="center">Add Quarantined Staff Member</h1>
                <br/>
                <form style={{marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}>
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
                <table responsive className="table table-hover" style={{marginTop:'40px', marginLeft:'20px'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>NIC Number</th>
                        <th>From</th>
                        <th>To</th>
                        <th></th>
                        <th></th>
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
                    <td>{staffMembers.NIC}</td>
                    <td>
                    <div className="form-group">
                        <input type = "date" className="form-control" required/>
                    </div>
                    </td>
                    <td> 
                        <div className="form-group">
                        <input type = "date" className="form-control" required/>
                    </div>
                    </td>
                    <td></td>
                    <td></td>
                   
                    <td>
                      {/* <a className="btn btn-warning" href={`/updateStaffMember/${staffMembers.employeeId}`}>
                        <i className="fas fa-edit"></i>&nbsp;
                      </a>
                      &nbsp; */}

                        {/* {() => deleteStaffMember(staffMembers.employeeId)} */}
                      <a className="" href="#" onClick = "">
                        <i className="fa fa-plus-square" width="20px"></i>&nbsp;
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
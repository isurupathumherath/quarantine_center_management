import React, { useState } from "react";
import axios from 'axios';

export default function Login() {
    /*
        const [uName, setuname]=useState("");
        const [password, setpassword]=useState("");
    
        function sendData(e){
    
            e.preventDefault();
    
           
            
            const login={
    
                uName,
                password
            }
            console.log(login);
    
            axios.post("http://localhost:8000/profile/login", login).then((res)=>{
                alert("Login successful")
            }).catch((err)=>{
                alert(err)
            })
        }*/


    return (
        <div className="col-md-8 mt-4 mx-auto">
            <center><h1>LOGIN</h1></center>
            <form>
                <div className="mb-3">
                    <label for="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter the username"/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter the password"/>
                </div>
                
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>

    )

}
import React from 'react';
//import '../App.css';
import swal from 'sweetalert';
import axios from 'axios';
import { jsPDF } from "jspdf";
import "jspdf-autotable";

class Report extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange = e => {
        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
                ? e.target.checked
                : e.target.value
        });
    }

    generatePdf = async() =>{
        const doc = new jsPDF("p","pt","a4");

        doc.setFontSize(15);
        doc.text("All Booking Report", 40, 40);
        var data
        var price  = 0
        var count = 0

        const url = 'http://localhost:8000/room/get_booking'
        await axios.get(url,{
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            if(res.data){

                data = res.data
                            
                const headers = [["First Name","Last Name","NIC","Email","Check In","Check Out","Room ID","Patient ID","Price"]];

                const datas = data.map(elt=> [elt.fname,elt.lname,elt.nic,elt.email,elt.checkin,elt.checkout,elt.roomid,elt.patientid,elt.price]);

                let content = {
                startY: 50,
                head: headers,
                body: datas
                };

                data.map(res=>{
                    count=count+1
                    price=price+res.price
                });

                
                doc.autoTable(content)
            }else{
                swal("ERROR!", "NIC ERROR!", "error")
            }
        })
        doc.text("Total Price = Rs. "+price+" /-",40,800)
        doc.text("Total Bookings = "+count,400,800)
        doc.save("booking_report.pdf")

    }

    render (){
        return (
            <div class="container">
                <div className="col-lg-12">
                    <br/><br/>
                        <div class="justify-content-center">
                            <h1>GENERATE ROOM BOOKING REPORT HERE!!!</h1>
                            <div class="x_scroll">
                            
                            <button class="btn btn-success" onClick={() => this.generatePdf()}>
                                Generate Booking Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Report;

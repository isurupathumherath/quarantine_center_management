import React from "react";
import axios from "axios";
import { Form, Button, Row, Col } from 'react-bootstrap'

import Swal from "sweetalert2";

const PaymentGateway = ({ }) => {

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const result = await axios.post("http://localhost:8000/payment/orders");

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_dabcL4yPyzeWS3", // Enter the Key ID generated from the Dashboard
            amount: localStorage.getItem("TotalPrice").toString(),
            currency: currency,
            name: JSON.parse(localStorage.getItem('currentUser')).fName,
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    // userID : "102",
                    userID: JSON.parse(localStorage.getItem('currentUser'))._id,
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:8000/payment/success", data);

                // alert(result.data.msg); 
                Swal.fire({
                    title: 'Payment Successfully!',
                    icon: 'success',
                    html:
                        '<h4> Order ID : </h4>' + response.razorpay_order_id,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                        '<a href="/home">Back To Home</a>',
                    cancelButtonText:
                        'Cancel',
                })
            },
            prefill: {
                name: JSON.parse(localStorage.getItem('currentUser')).fName,
                email: JSON.parse(localStorage.getItem('currentUser')).email,
                contact: "9999999999",
            },
            notes: {
                address: JSON.parse(localStorage.getItem('currentUser')).address,
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    // const handleOnclick = ({ }) => {
    //     displayRazorpay;
    // }
    return (
        <div className="App">
            {/* <p>Buy React now!</p>
            <button className="App-link" onClick={displayRazorpay}>
               {localStorage.getItem("TotalPrice")}
            </button> */}
            <div class="col-12 col-md-12 col-lg-12 d-flex">
                <div class="card flex-fill">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Payment Gateway</h5>
                    </div>
                    <div class="card-body">
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Payer Name</Form.Label>
                                        <Form.Control type="text" value={JSON.parse(localStorage.getItem('currentUser')).fName} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Payer Address</Form.Label>
                                        <Form.Control type="text" value={JSON.parse(localStorage.getItem('currentUser')).address} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Payer Email Address</Form.Label>
                                        <Form.Control type="text" value={JSON.parse(localStorage.getItem('currentUser')).email} readOnly />
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Payer Total</Form.Label>
                                        <Form.Control type="text" value={"Rs."+localStorage.getItem("TotalPrice")} readOnly />
                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* <Button variant="primary" type="submit">
                                Submit
                            </Button> */}
                        </Form>
                        <button class="btn btn-primary" onClick={displayRazorpay}>Launch</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentGateway;
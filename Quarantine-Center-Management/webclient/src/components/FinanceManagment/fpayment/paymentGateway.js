import React from "react";
import axios from "axios";

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
            amount: amount.toString(),
            currency: currency,
            name: "Soumya Corp.",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
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
                        '<a href="/index">Back To Home</a>',
                    cancelButtonText:
                        'Cancel',
                })
            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
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
            <p>Buy React now!</p>
            <button className="App-link" onClick={displayRazorpay}>
                Pay ₹500
            </button>
        </div>
    );
}

export default PaymentGateway;
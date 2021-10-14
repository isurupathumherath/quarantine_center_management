import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PaymentForm from './form';

const TestformInsert = ({ }) => {
    const [payerData, setpayerData] = useState({
        contactNumber: null,
        email: null,
        address: null,
        lastName: null,
        firstName: null,
        userID: "102",
    })

    const dispatch = useDispatch();

    return(
        <PaymentForm payerData={payerData} setpayerData={setpayerData}/>
    )
}

export default TestformInsert;
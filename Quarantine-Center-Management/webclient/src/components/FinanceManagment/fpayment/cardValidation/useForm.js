import { useState } from 'react'
import validateInfo from './validateInfo';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createPayment } from '../../../../actions/FinanceAction/payment';

const useForm = () => {
    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardType: '',
        cardExpiration: '',
        cardSecurityCode: '',
        cardPostalCode: '',
        focus: '',
        userID: JSON.parse(localStorage.getItem('currentUser'))._id,
        razorpayDetails:
        {
            orderId: 'null',
            paymentId: 'null',
            signature: 'null',
        }
    })

    const dispatch = useDispatch();

    const [errors, setErrors] = useState({})

    const handleFocus = (e) => {
        setValues({
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault() 

        if (values =="") {
            console.log("test")
            setErrors(validateInfo(values)) 
        } else {
            dispatch(createPayment(values));
        }
    };

    return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useForm;
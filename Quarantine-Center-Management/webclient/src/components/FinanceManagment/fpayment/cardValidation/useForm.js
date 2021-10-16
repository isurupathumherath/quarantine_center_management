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
        setErrors(validateInfo(values))

        dispatch(createPayment(values));

        // if (formValid(this.state)) {
        // console.log(`
        //     --SUBMITING--
        //     User ID : ${this.state.userID}
        //     First name : ${this.state.firstName}
        //     Last Name : ${this.state.lastName}
        //     email : ${this.state.email}
        //     address : ${this.state.address}
        //     constactNumber : ${this.state.contactNumber}
        // `)

        // alert("tets")
        // const res = axios.post('http://localhost:8000/payment/createPaymentDetails', this.values);

        // } else {
        //     console.error("FORM INVALID - DISPLAY ERROR MASAGE")
        // }
    };

    return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useForm;
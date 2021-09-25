import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createPayer } from '../../../api/FinanceApi';

const PaymentForm = ({ currentId, setCurrentId }) => {
    const [paymentData, setPaymentData] = useState({cardNumber: '', cardholdersName: '', expiaryDate: '', cvv: '' });
    const payment = useSelector((state) => (currentId ? state.payments.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch(); 
  
    useEffect(() => {
      if (payment) setPostData(payment);
    }, [payment]);
  
    const clear = () => {
      setCurrentId(0);
      setPaymentData({cardNumber: '', cardholdersName: '', expiaryDate: '', cvv: ''});
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (currentId === 0) {
        dispatch(createPayment(paymentData));
        clear();
      } else {
        dispatch(updatePayment(currentId, paymentData));
        clear();
      }
    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const form = event.currentTarget;

    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         dispatch(createPayer(payerData));
    //         clear();
    //     } else if (form.checkValidity() === true) {
    //         event.preventDefault();
    //         console.log("tets");
    //     } else {
    //         event.preventDefault();
    //     }

    //     setValidated(true); 

    //     // browserHistory.push('/invoice') 

    // };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        name="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={(event) => setPaymentData({ ...paymentData, cardNumber: event.target.value })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                    <Form.Label>Card Holders name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        name="cardholdersName"
                        value={paymentData.cardholdersName}
                        onChange={(event) => setPaymentData({ ...paymentData, cardholdersName: event.target.value })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" className='mt-3' controlId="validationCustom01">
                    <Form.Label>Expiary Date</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="mm/YY"
                        name="expiaryDate"
                        value={paymentData.expiaryDate}
                        onChange={(event) => setPaymentData({ ...paymentData, expiaryDate: event.target.value })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" className='mt-3' controlId="validationCustom01">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="cvv"
                        name="cvv"
                        value={paymentData.cvv}
                        onChange={(event) => setPaymentData({ ...paymentData, cvv: event.target.value })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group> 
            </Row>
            <Row className='mt-5'>
                <Col sm={6} md={6}>
                </Col> 
                <Col sm={2} md={2}>
                    <button type="button" class="btn btn-block btn-info">Pay</button>
                </Col>
                <Col sm={2} md={2}>
                    <button type="submit" class="btn btn-block btn-success">Save</button>
                </Col>
                <Col sm={2} md={2}>
                    <button type="button" class="btn btn-block btn-warning" onClick={clear}>Clear</button>
                </Col>
            </Row>

        </Form>
    );
}


export default PayerForm;
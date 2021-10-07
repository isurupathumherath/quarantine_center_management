import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createPayment, updatePayment } from '../../../actions/FinanceAction/payment';
import Swal from 'sweetalert2'


const PaymentForm = ({ currentId, setCurrentId }) => {
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        cardholdersName: '',
        expiaryDate: '',
        cvv: '',
        userID: '110',
        status: '1'
    });
    const payment = useSelector((state) => (currentId ? state.payment.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();

    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (payment) setPaymentData(payment);
    }, [payment]);

    const clear = () => {
        setCurrentId(0);
        setPaymentData({ cardNumber: '', cardholdersName: '', expiaryDate: '', cvv: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (this.paymentData.cardNumber == "") {
        //     console.log("test8888888888888888888888888888888");
        // } else {
        if (currentId === 0) {
            dispatch(createPayment(paymentData));
            clear();
            Swal.fire(
                'success',
                'card added suucefully',
                'success'
            )
            setValidated(true);
        } else {
            dispatch(updatePayment(currentId, paymentData));
            clear();
            Swal.fire(
                'update success!',
                'Card details updated',
                'success'
            )
            setValidated(true);
        }
        // }

        setValidated(true);
    };

    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)

    const Results = () => (
        <div id="results" className="search-results">
            Some Results
        </div>
    )

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
                <Form.Group as={Col} md="12" className='mt-3' controlId="validationCustom02">
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
                <Col sm={3} md={3}>
                </Col>
                <Col sm={3} md={3}>
                    <button type="button" class="btn btn-block btn-warning" onClick={clear}>Clear</button>
                </Col>
                <Col sm={3} md={3}>
                    <button type="submit" class="btn btn-block btn-success">Save</button>
                </Col>
                <Col sm={3} md={3}>
                    <button type="button" class="btn btn-block btn-info" onClick={onClick}>Pay</button>
                    {showResults ? <Results /> : null}
                </Col>
            </Row>

        </Form>
    );
}


export default PaymentForm;
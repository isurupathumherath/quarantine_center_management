import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createPayer } from '../../../actions/FinanceAction/payer';
import Swal from 'sweetalert2';

const PayerForm = ({ }) => {
    const [payerData, setpayerData] = useState({ firstName: '', lastName: '', address: '', email: '', contactNumber: '' });

    const dispatch = useDispatch();
    const [validated, setValidated] = useState(false);

    const clear = () => {
        setpayerData({ firstName: '', lastName: '', address: '', email: '', contactNumber: '' });
        setValidated(false);
    };

    const [showResults, setShowResults] = React.useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        // dispatch(createPayer(payerData)); 
        // setValidated(true);

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            Swal.fire(
                'error',
                'Please Fill the Form',
                'error'
            )
        } else if (form.checkValidity() === true) {
            event.preventDefault();
            Swal.fire(
                'success',
                'Payer Details added suucefully',
                'success'
            )
            setShowResults(true)
            clear();
        }

        setValidated(true);
    };

    const Nextbtn = () => (
        <Col sm={2} md={2}>
            <a href={'/payment'} ><button type="button" class="btn btn-block btn-info">Next</button></a>
        </Col >
    )

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        value={payerData.firstName}
                        onChange={(event) => setpayerData({ ...payerData, firstName: event.target.value })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        value={payerData.lastName}
                        onChange={(event) => setpayerData({ ...payerData, lastName: event.target.value })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" className='mt-3' controlId="validationCustom01">
                    <Form.Label>Permenent Address</Form.Label>
                    <Form.Control
                        required
                        as="textarea" rows={3}
                        placeholder="No. ##,..."
                        name="address"
                        value={payerData.address}
                        onChange={(event) => setpayerData({ ...payerData, address: event.target.value })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" className='mt-3' controlId="validationCustom01">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="user@gmail.com"
                        name="email"
                        value={payerData.email}
                        onChange={(event) => setpayerData({ ...payerData, email: event.target.value })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" className='mt-3' controlId="validationCustom01">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        maxLength={12}
                        placeholder="+94 77 000 0000"
                        name="contactNumber"
                        value={payerData.contactNumber}
                        onChange={(event) => setpayerData({ ...payerData, contactNumber: event.target.value })}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className='mt-5'>
                <Col sm={6} md={6}>
                </Col>
                <Col sm={2} md={2}>
                    <button type="button" class="btn btn-block btn-danger" onClick={clear}>Clear</button>
                </Col>
                <Col sm={2} md={2}>
                    <button type="submit" class="btn btn-block btn-success">Save</button>
                </Col>
                {showResults ? <Nextbtn /> : null}
            </Row>

        </Form >
    );
}


export default PayerForm;
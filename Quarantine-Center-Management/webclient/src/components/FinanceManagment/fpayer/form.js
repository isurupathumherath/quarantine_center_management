import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

import axios from 'axios';


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const contactnumberRegex = RegExp(
    /^(?:7|0|(?:\+94))[0-9]{9,10}$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
}

class PayerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contactNumber: null,
            email: null,
            address: null,
            lastName: null,
            firstName: null,
            userID: localStorage.getItem("userID"),
            formErrors: {
                contactNumber: "",
                email: "",
                address: "",
                lastName: "",
                firstName: ""
            }
        };
    }


    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
                --SUBMITING--
                User ID : ${this.state.userID}
                First name : ${this.state.firstName}
                Last Name : ${this.state.lastName}
                email : ${this.state.email}
                address : ${this.state.address}
                constactNumber : ${this.state.contactNumber}
            `)

            //add data to the local storage
            localStorage.setItem("firstName", this.state.firstName);
            localStorage.setItem("lastName", this.state.lastName);
            localStorage.setItem("email", this.state.email);
            localStorage.setItem("address", this.state.address);
            localStorage.setItem("contactNumber", this.state.contactNumber);

            const res = axios.post('http://localhost:8000/payer/createPayer', this.state);

            Swal.fire({
                title: 'Payer Details Saved',
                icon: 'success',
                focusConfirm: false,
                confirmButtonText:
                    '<a href="/invoice">Proceed</a>'
            })

        } else {
            console.error("FORM INVALID - DISPLAY ERROR MASAGE")
            Swal.fire({
                title: 'Invalid Input',
                icon: 'error',
                html: 
                    'Please Check Again',
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    'Ok',
                cancelButtonText:
                    'Cancel',
            })
        }
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        this.setState({
            [e.target.name]: e.target.value
        });

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3
                        ? "minimum 3 characaters required"
                        : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3
                        ? "minimum 3 characaters required"
                        : "";
                break;
            case "email":
                formErrors.email =
                    emailRegex.test(value)
                        ? ""
                        : "invalid email address";
                break;
            case "address":
                formErrors.address =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            case "contactNumber":
                formErrors.contactNumber =
                    contactnumberRegex.test(value)
                        ? ""
                        : "invalid contact number";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {

        const { formErrors } = this.state;

        return (
            <div>
                <Form noValidate onSubmit={this.handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                //className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.firstName.length > 0 && (
                                <span className="errorMessage" style={{ color: 'red' }}>{formErrors.firstName}</span>
                            )}
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                //className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            {formErrors.lastName.length > 0 && (
                                <span className="errorMessage" style={{ color: 'red' }}>{formErrors.lastName}</span>
                            )}
                        </Form.Group>
                        <Form.Group as={Col} md="12" style={{ marginTop: '2%' }}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                //className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="Address"
                                type="text"
                                name="address"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            {formErrors.address.length > 0 && (
                                <span className="errorMessage" style={{ color: 'red' }}>{formErrors.address}</span>
                            )}
                        </Form.Group>
                        <Form.Group as={Col} md="6" style={{ marginTop: '2%' }}>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                //className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="Email Address"
                                type="email"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage" style={{ color: 'red' }}>{formErrors.email}</span>
                            )}
                        </Form.Group>
                        <Form.Group as={Col} md="6" style={{ marginTop: '2%' }}>
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control
                                //className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="Contact Number"
                                type="number"
                                name="contactNumber"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            {formErrors.contactNumber.length > 0 && (
                                <span className="errorMessage" style={{ color: 'red' }}>{formErrors.contactNumber}</span>
                            )}
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <div class="exist-customer mt-4">Existing Customer? <a href="#">Click here to login</a></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={1} style={{ marginTop: '20px' }}>
                        </Col>
                        <Col md={3} style={{ marginTop: '20px' }}>
                            {/* <button type="button" class="btn btn-block btn-outline-danger active">Clear</button> */}
                        </Col>
                        <Col md={3} style={{ marginTop: '20px' }}>
                            <button type="button" class="btn btn-block btn-outline-info active">Cancel</button>
                        </Col>
                        <Col md={5} style={{ marginTop: '20px' }}>
                            <button type="submit" class="btn btn-block btn-outline-success active">Save Payment Details</button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default PayerForm;
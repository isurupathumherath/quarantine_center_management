import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
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
            userID: "102",
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

            alert("tets")
            const res = axios.post('http://localhost:5000/payer/createPayer', this.state); 

        } else {
            console.error("FORM INVALID - DISPLAY ERROR MASAGE")
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
                    <Button type="submit">Save Details</Button>
                </Form>
            </div>
        )
    }
}

export default PayerForm;
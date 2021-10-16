import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';

import Swal from 'sweetalert2';
 
// const emailRegex = RegExp(
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

// const contactnumberRegex = RegExp(
//     /^(?:7|0|(?:\+94))[0-9]{9,10}$/
// );

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

class InquaryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            type: null,
            description: null,
            piority: null,
            states: "1",
            // userID: localStorage.getItem("userID"),
            userID: JSON.parse(localStorage.getItem('currentUser'))._id, 
            formErrors: {
                title: "",
                type: "",
                description: "",
                piority: "",
            }
        };
    }

    clear = e => {

    }


    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
                --SUBMITING--
                User ID : ${this.state.userID}
                title : ${this.state.title}
                piority : ${this.state.piority}
                states : ${this.state.states}
                description : ${this.state.description}
                type : ${this.state.type}
            `)

            const res = axios.post('http://localhost:8000/inquary/createInquary', this.state);

            Swal.fire({
                title: 'Inquary Added Suucessfully',
                icon: 'success',
                html:
                    '"Inquary Service" ' +
                    'This Service is only avaliable for Payment Inquary purposes only. ' +
                    'Please use Ticket Service for other Inquaries,' +
                    '<span style="color:blue"><a href="/ticket">Ticket Service</a></span>',
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<a href="/inquary">Proceed</a>',
                cancelButtonText:
                    'Cancel',
            })

        } else {
            Swal.fire({
                title: 'Invlaid inputs',
                icon: 'error',
                html:
                    'Please check again!',
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    'ok',
                cancelButtonText:
                    'Cancel',
            })
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
            case "title":
                formErrors.title =
                    value.length < 3
                        ? "minimum 3 characaters required"
                        : "";
                break;
            // case "type":
            //     formErrors.type =
            //         value.length < 3
            //             ? "minimum 3 characaters required"
            //             : "";
            //     break;
            case "piority":
                formErrors.piority =
                    value.length < 0 ? "minimum 3 characaters required" : "";
                break;
            case "description":
                formErrors.piority =
                    value.length < 20 ? "minimum 20 characaters required" : "";
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
                        <Form.Group as={Col} md="12">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                //className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="Title"
                                type="text"
                                name="title"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.title.length > 0 && (
                                <span className="errorMessage" style={{ color: 'red' }}>{formErrors.title}</span>
                            )}
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        </Form.Group>
                        <Form.Group as={Col} md="6" style={{ marginTop: '2%' }}>
                            <Form.Label>Inquary type</Form.Label>
                            {/* <Form.Control
                                //className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="Type"
                                type="text"
                                name="type"
                                noValidate
                                onChange={this.handleChange}
                            /> */}
                            <Form.Select
                                name="type"
                                noValidate
                                onChange={this.handleChange}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    padding: '.375rem 2.25rem .375rem .75rem',
                                    fontSize: '1rem',
                                    fontWeight: '400',
                                    lineHeight: '1.5',
                                    color: '#212529',
                                    backgroundImage : 'url(data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"%3e%3cpath fill="none" stroke="%23343a40" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5l6 6 6-6"/%3e%3c/svg%3e)',
                                    backgroundColor: '#fff',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right .75rem center',
                                    backgroundSize: '16px 12px',
                                    border: '1px solid #ced4da',
                                    borderRadius: '.25rem',
                                    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
                                    appearance: 'none'
                                }}
                            >
                                <option>Open this select menu</option>
                                <option value="Finance">Finance</option>
                                <option value="Other">Other</option>
                                <option value="Technical">Technical</option>
                            </Form.Select>
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            {/* {formErrors.type.length > 0 && (
                                <span className="errorMessage" style={{ color: 'red' }}>{formErrors.type}</span>
                            )} */}
                        </Form.Group>
                        <Form.Group as={Col} md="6" style={{ marginTop: '2%' }}>
                            <Form.Label>Inquary Piority</Form.Label>
                            <Form.Control
                                //className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="Piority 1,2,3"
                                type="text"
                                name="piority"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            {formErrors.piority.length > 0 && (
                                <span className="errorMessage" style={{ color: 'red' }}>{formErrors.piority}</span>
                            )}
                        </Form.Group>
                        <Form.Group as={Col} md="12" style={{ marginTop: '2%' }}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                //className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="Description"
                                type="text"
                                as="textarea"
                                rows={3}
                                name="description"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            {formErrors.description > 0 && (
                                <span className="errorMessage" style={{ color: 'red' }}>{formErrors.description}</span>
                            )}
                        </Form.Group>
                    </Row>
                    {/* <Row>
                        <Col md={8}>
                            <div class="exist-customer mt-4">Existing Customer? <a href="#">Click here to login</a></div>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col md={3} style={{ marginTop: '20px' }}>
                        </Col>
                        <Col md={3} style={{ marginTop: '20px' }}>
                            <button type="button" class="btn btn-block btn-outline-danger active">Cancel</button>
                        </Col>
                        <Col md={3} style={{ marginTop: '20px' }}>
                            <button type="button" class="btn btn-block btn-outline-info active">Clear</button>
                        </Col>
                        <Col md={3} style={{ marginTop: '20px' }}>
                            <button type="submit" class="btn btn-block btn-outline-success active">Add Inquary</button>
                        </Col>
                    </Row>
                </Form>
            </div >
        )
    }
}

export default InquaryForm;
import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';


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
            userID: localStorage.getItem("userID"),
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
        // e.preventDefault();

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

            alert("tets1")
            const res = axios.post('http://localhost:8000/inquary/createInquary', this.state);

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
            case "title":
                formErrors.title =
                    value.length < 3
                        ? "minimum 3 characaters required"
                        : "";
                break;
            case "type":
                formErrors.type =
                    value.length < 3
                        ? "minimum 3 characaters required"
                        : "";
                break;
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
                            <Form.Control
                                //className={formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="Type"
                                type="text"
                                name="type"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            {formErrors.type.length > 0 && (
                                <span className="errorMessage" style={{ color: 'red' }}>{formErrors.type}</span>
                            )}
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
            </div>
        )
    }
}

export default InquaryForm;
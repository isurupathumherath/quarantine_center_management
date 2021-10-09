import React, { Component } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';
import { Tabs, Tab, Form, Col } from 'react-bootstrap';

import { Orders, Bookings } from "../../components/FinanceManagment/fInvoice";
import { PayerForm } from "../../components/FinanceManagment/fpayer";

//session
import UserProfile from '../../components/FinanceManagment/Functions/userData';



class Checkout extends Component {
    render() {
        return (
            <div>
                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-12 col-12">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Checkout</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 col-lg-7">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="info-widget">
                                            <h4 class="card-title">Personal Information</h4>
                                            <PayerForm />
                                            <div class="exist-customer mt-4">Existing Customer? <a href="#">Click here to login</a></div>
                                        </div>
                                        {/* <form action="https://doccure-html.dreamguystech.com/template/booking-success.html">
                                            <div class="info-widget">
                                                <h4 class="card-title">Personal Information</h4>
                                                <div class="row">
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="form-group card-label">
                                                            <label>First Name</label>
                                                            <input class="form-control" type="text" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="form-group card-label">
                                                            <label>Last Name</label>
                                                            <input class="form-control" type="text" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="form-group card-label">
                                                            <label>Email</label>
                                                            <input class="form-control" type="email" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="form-group card-label">
                                                            <label>Phone</label>
                                                            <input class="form-control" type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="exist-customer">Existing Customer? <a href="#">Click here to login</a></div>
                                            </div>

                                            <div class="payment-widget">
                                                <h4 class="card-title">Payment Method</h4>

                                                <div class="payment-list">
                                                    <label class="payment-radio credit-card-option">
                                                        <input type="radio" name="radio" checked />
                                                        <span class="checkmark"></span>
                                                        Credit card
                                                    </label>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group card-label">
                                                                <label for="card_name">Name on Card</label>
                                                                <input class="form-control" id="card_name" type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group card-label">
                                                                <label for="card_number">Card Number</label>
                                                                <input class="form-control" id="card_number" placeholder="1234  5678  9876  5432" type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="form-group card-label">
                                                                <label for="expiry_month">Expiry Month</label>
                                                                <input class="form-control" id="expiry_month" placeholder="MM" type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="form-group card-label">
                                                                <label for="expiry_year">Expiry Year</label>
                                                                <input class="form-control" id="expiry_year" placeholder="YY" type="text" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="form-group card-label">
                                                                <label for="cvv">CVV</label>
                                                                <input class="form-control" id="cvv" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="payment-list">
                                                    <label class="payment-radio paypal-option">
                                                        <input type="radio" name="radio" />
                                                        <span class="checkmark"></span>
                                                        Paypal
                                                    </label>
                                                </div>


                                                <div class="terms-accept">
                                                    <div class="custom-checkbox">
                                                        <input type="checkbox" id="terms_accept" />
                                                        <label for="terms_accept">I have read and accept <a href="#">Terms &amp; Conditions</a></label>
                                                    </div>
                                                </div>


                                                <div class="submit-section mt-4">
                                                    <button type="submit" class="btn btn-primary submit-btn">Confirm and Pay</button>
                                                </div>


                                            </div>
                                        </form> */}
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-5 col-lg-5 theiaStickySidebar">

                                <div class="card booking-card">
                                    <div class="card-header">
                                        <h4 class="card-title">Invoice Summary</h4>
                                    </div>
                                    <div class="card-body">
                                        <Tabs
                                            id="controlled-tab-example"
                                            defaultActiveKey={2}
                                            // onSelect={handleSelect}
                                            className="mb-3"
                                        >
                                            <Tab eventKey={2} title="Food & Brevarages">
                                                <Scrollbars style={{ width: '100%', height: 300 }}>
                                                    <Orders />
                                                </Scrollbars>
                                                <div class="card-footer text-muted mt-3">
                                                    <Col sm={12} md={12}>
                                                        <Form.Control type="text" placeholder={"Food Order Total : Rs." + UserProfile.getorderTotal() + ".00"} readOnly />
                                                    </Col>
                                                </div>
                                            </Tab>
                                            <Tab eventKey={3} title="Room Reservation">
                                                <Scrollbars style={{ width: '100%', height: 300 }}>
                                                    <Bookings />
                                                </Scrollbars>
                                                <div class="card-footer text-muted mt-3">
                                                    <Col sm={12} md={12}>
                                                        <Form.Control type="text" placeholder={"Booking Total : Rs." + UserProfile.getbookingTotal() + ".00"} readOnly />
                                                    </Col>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout;
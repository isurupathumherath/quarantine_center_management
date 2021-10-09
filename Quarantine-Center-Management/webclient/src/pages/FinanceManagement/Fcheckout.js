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
/* Janith Gamage On - 11/10/2021  */
import React, { Component } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';
import { Tabs, Tab, Form, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';

import { OrderList, Bookings } from "../../components/FinanceManagment/fInvoice";
import { PayerForm } from "../../components/FinanceManagment/fpayer";
import Fimage from '../../assets/PaymentManagment/img/Fmain3.jpg';
class Checkout extends Component {

    handleInquaryBtnClick() {
        Swal.fire({
            title: 'Online Inquary Service',
            icon: 'info',
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
    }

    render() {
        return (
            <div>
                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-10 col-10">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Checkout</h2>
                            </div>
                            <div class="col-md-2 col-2">
                                {/* <h2 class="breadcrumb-title float-right">Start Payment</h2> */}
                                <button type="button" class="btn btn-block btn-outline-info"
                                    style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        border: '4px solid white'
                                    }}
                                    onClick={this.handleInquaryBtnClick}
                                >
                                    Inquary
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <div class="row">
                            <div class="col-md-12"
                                style={{
                                    marginTop: '20px',
                                    marginBottom: '20px'
                                }}>
                                <ul class="testprogressbar">
                                    <li class="active"> <a href={'/checkout'}>Payer Details</a></li>
                                    <li><a href={'/invoice'}>Payment Invoice</a></li>
                                    <li><a href={'/payment'}>Payment</a></li>
                                </ul>

                            </div>
                        </div>
                        <section class="section section-features" style={{ padding: '28px 0' }}>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-6 col-lg-6">
                                        <div class="card" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                            <div class="card-body">
                                                <div class="info-widget">
                                                    <h4 class="card-title">Proceed Checkout</h4>
                                                    <PayerForm />
                                                    {/* <div class="exist-customer mt-4">Existing Customer? <a href="#">Click here to login</a></div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6">
                                        <img src={Fimage} style={{width: '90%'}} />
                                    </div>
                                    <div class="col-md-12 col-lg-12 theiaStickySidebar mt-5">
                                        <div class="card booking-card" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
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
                                                        <Scrollbars style={{ width: '100%', height: 700 }}>
                                                            <OrderList />
                                                        </Scrollbars>
                                                        <div class="card-footer text-muted mt-3">
                                                            <Col sm={12} md={12}>
                                                                <Form.Control type="text" placeholder={"Food Order Total : Rs." + localStorage.getItem("orderToatal") + ".00"} readOnly />
                                                            </Col>
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey={3} title="Room Reservation">
                                                        <Scrollbars style={{ width: '100%', height: 700 }}>
                                                            <Bookings />
                                                        </Scrollbars>
                                                        <div class="card-footer text-muted mt-3">
                                                            <Col sm={12} md={12}>
                                                                <Form.Control type="text" placeholder={"Booking Total : Rs." + localStorage.getItem("bookingTotal") + ".00"} readOnly />
                                                            </Col>
                                                        </div>
                                                    </Tab>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default Checkout;
/* Janith Gamage On - 11/10/2021  */
import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

import { Invoice } from '../../components/FinanceManagment/fInvoice';
import CreditCard from '../../components/FinanceManagment/fpayment/CreditCardForm';
class Payment extends Component {
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
                                        <li class="breadcrumb-item active" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Payment</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                        <section class="section section-features">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-7 col-lg-7">
                                        <Invoice />
                                    </div>
                                    <div class="col-md-5 col-lg-5 theiaStickySidebar">
                                        <div class="card booking-card" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                            <div class="card-header">
                                                <h4 class="card-title">Payment</h4>
                                            </div>
                                            <div class="card-body">
                                                <Tabs
                                                    id="controlled-tab-example"
                                                    defaultActiveKey={2}
                                                    // onSelect={handleSelect}
                                                    className="mb-3"
                                                >
                                                    <Tab eventKey={2} title="Card Payment">
                                                        <Scrollbars style={{ width: '100%', height: 490 }}>
                                                            <CreditCard />
                                                        </Scrollbars>
                                                        <div class="card-footer text-muted mt-3">
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey={3} title="Payment Gateway">
                                                        <Scrollbars style={{ width: '100%', height: 490 }}>
                                                            {/* <Bookings /> */}
                                                        </Scrollbars>
                                                        <div class="card-footer text-muted mt-3">
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

export default Payment;
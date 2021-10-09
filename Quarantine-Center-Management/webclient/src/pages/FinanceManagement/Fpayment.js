import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

import { Invoice } from '../../components/FinanceManagment/fInvoice';
import CreditCard from '../../components/FinanceManagment/fpayment/CreditCardForm';

//session
import UserProfile from '../../components/FinanceManagment/Functions/userData';

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
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 col-lg-7">
                                <Invoice />
                            </div> 
                            <div class="col-md-5 col-lg-5 theiaStickySidebar">

                                <div class="card booking-card">
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
                                                <Scrollbars style={{ width: '100%', height: 525 }}>
                                                    <CreditCard />
                                                </Scrollbars>
                                                <div class="card-footer text-muted mt-3"> 
                                                </div>
                                            </Tab>
                                            <Tab eventKey={3} title="Payment Gateway">
                                                <Scrollbars style={{ width: '100%', height: 300 }}>
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
                </div>
            </div>
        )
    }
}

export default Payment;
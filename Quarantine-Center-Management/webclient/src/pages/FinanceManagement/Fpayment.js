/* Janith Gamage On - 11/10/2021  */
import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import Swal from 'sweetalert2';

import { Invoice } from '../../components/FinanceManagment/fInvoice';
import CreditCard from '../../components/FinanceManagment/fpayment/CreditCardForm';
import PaymentGateway from '../../components/FinanceManagment/fpayment/paymentGateway';

import Fimage from '../../assets/PaymentManagment/img/Fmain1.jpg';

class Payment extends Component {

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
                                        <li class="breadcrumb-item active" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Payment</h2>
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
                                    <li>Payer Details</li>
                                    <li>Payment Invoice</li>
                                    <li class="active">Payment</li>
                                </ul>

                            </div>
                        </div>
                        <section class="section section-features">
                            <div class="container-fluid">
                                <div class="row">
                                    {/* <div class="col-md-7 col-lg-7">
                                        <Invoice />
                                    </div> */}
                                    <div class="col-md-6 col-lg-6 theiaStickySidebar">
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
                                                        <Scrollbars style={{ width: '100%', height: 700 }}>
                                                            <CreditCard />
                                                        </Scrollbars>
                                                        <div class="card-footer text-muted mt-3">
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey={3} title="Payment Gateway">
                                                        <Scrollbars style={{ width: '100%', height: 700 }}>
                                                            <PaymentGateway />
                                                        </Scrollbars>
                                                        <div class="card-footer text-muted mt-3">
                                                        </div>
                                                    </Tab>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6">
                                        <img src={Fimage} style={{ width: '700px' }} /> 
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
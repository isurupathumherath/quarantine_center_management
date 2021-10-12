/* Janith Gamage On - 11/10/2021  */
import React, { Component } from 'react';

import Swal from 'sweetalert2';

import { Invoice } from '../../components/FinanceManagment/fInvoice';

import Fimage from '../../assets/PaymentManagment/img/Fmain2.jpg';



class InvoicePage extends Component {

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
                                        <li class="breadcrumb-item active" aria-current="page">invoice</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Invoice</h2>
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
                                    <li> <a href={'/checkout'}>Payer Details</a></li>
                                    <li class="active"><a href={'/invoice'}>Payment Invoice</a></li>
                                    <li><a href={'/payment'}>Payment</a></li>
                                </ul>
                            </div>
                        </div>
                        <section class="section section-features" style={{ padding: '28px 0' }}>
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-6 col-lg-6">
                                        <div class="card booking-card" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                            <div class="card-header">
                                                <h4 class="card-title">Payment Invoice</h4>
                                            </div>
                                            <div class="card-body">
                                                <Invoice />
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

export default InvoicePage;
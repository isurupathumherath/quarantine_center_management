/* Janith Gamage On - 11/10/2021  */
import React, { Component } from "react";

import Swal from 'sweetalert2'
import ImagePayment from '../../assets/PaymentManagment/img/image123.jpg'

export default class HomePage extends Component {


    handlePayBtnClick() {
        Swal.fire({
            title: 'Online Payment Service',
            icon: 'info',
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<a href="/checkout">Pay</a>',
            cancelButtonText:
                'Cancel',
        })
    }

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

        localStorage.setItem("userID", "102");
        localStorage.setItem("userName", "Janith Gamage");

        return (
            <div>
                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-10 col-10">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Start Payment</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Start Payment</h2>
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
                        <section class="section section-features">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="card" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }}>
                                            <div class="card-body">
                                                <div class="info-widget">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <img src={ImagePayment} />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <h1>Payment Function</h1>
                                                            <p style={{ marginTop: "45px" }}>
                                                                Any Additional Servicer, Sub-Servicer, Subcontractor or any other Person, other than the Master Servicer, the Special Servicer, the Trustee, the Operating Advisor and the Certificate Administrator, that is performing activities that address the Servicing Criteria, unless (i) such Person’s activities relate only to 5% or less of the Mortgage Loans by unpaid principal balance as of any date of determination in accordance with Article XI or (ii) the Depositor reasonably determines that a Master Servicer or the Special Servicer may, for the purposes of the Exchange Act reporting requirements pursuant to applicable Commission guidance, take responsibility for the assessment of compliance with the Servicing Criteria of such Person. The Servicing Function Participants as of the Closing Date are listed on Exhibit GG hereto. Exhibit GG shall be updated and provided to the Depositor and the Certificate Administrator in accordance with Section
                                                            </p>
                                                            <span style={{marginTop:'50px'}}>
                                                                <p>
                                                                    Commercially Useful Function means responsibility for the execution of a distinct element of the work of the contract, which is carried out by actually performing, managing, and supervising the work involved, evidencing the responsibilities and risks of a business owner such as negotiating the terms of (sub)contracts, taking on a financial risk commensurate with the contract or its subcontract, responsibility for acquiring the appropriate lines of credit and/or loans, or fulfilling responsibilities as a joint venture partner as described in the joint venture agreement.
                                                                </p>
                                                            </span>
                                                            <button style={{ marginTop: '50px' }} type="button" class="btn btn-block btn-outline-info active" onClick={this.handlePayBtnClick} >Procced to Pay</button>
                                                        </div>
                                                    </div>
                                                </div>
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
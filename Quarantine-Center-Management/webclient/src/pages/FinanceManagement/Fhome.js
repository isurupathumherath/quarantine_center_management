/* Janith Gamage On - 11/10/2021  */
import React, { Component } from "react";

import Swal from 'sweetalert2'

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
                                    <div class="col-md-4"></div>
                                    <div class="col-md-4">
                                        <div class="card" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', height: '500px' }}>
                                            <div class="card-body">
                                                <div class="info-widget">
                                                    <button type="button" class="btn btn-block btn-outline-info active" onClick={this.handlePayBtnClick} >Pay</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4"></div>

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
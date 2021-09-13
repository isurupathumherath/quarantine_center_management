import React, { Component } from "react";
import Invoice from '../../components/FinanceManagment/Invoice'

export default class PaymentInvoice extends Component {
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
                                <h2 class="breadcrumb-title">Payment Invoice View</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="container-fluid">
                        <Invoice />
                    </div>
                </div>
            </div>

        )
    }
}
import React, { Component } from 'react'; 

import SaveCard from '../../components/FinanceManagment/fpayment/SaveCards';


class PaymentDetails extends Component {
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
                                    <SaveCard />
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

export default PaymentDetails;
/* Janith Gamage On - 11/10/2021  */
import React, { Component } from 'react';

import { Inquary, InquaryList } from '../../components/FinanceManagment/finquary'
import Fimage from '../../assets/PaymentManagment/img/Fmain4.jpg'; 
class InquaryPage extends Component {
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
                                        <li class="breadcrumb-item active" aria-current="page">Inquary</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Inquary</h2>
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
                                    <div class="col-md-6 col-lg-6">
                                        <div class="card" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                            <div class="card-body">
                                                <div class="info-widget">
                                                    <h4 class="card-title">Add Inquary</h4>
                                                    <Inquary />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6">
                                        <img src={Fimage} style={{ width: '90%' }} /> 
                                    </div>
                                    <div class="col-md-12 col-lg-12 theiaStickySidebar">
                                        <div class="card booking-card" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                            <div class="card-header">
                                                <h4 class="card-title">Inquaries</h4>
                                            </div>
                                            <div class="card-body">
                                                <InquaryList />
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

export default InquaryPage;
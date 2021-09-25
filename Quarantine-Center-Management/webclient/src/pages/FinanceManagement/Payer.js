import React, { Component } from "react"; 
import PayerForm from '../../components/FinanceManagment/Payer/home' 
import * as AiIcons from 'react-icons/ai';

export default class Invoice extends Component {
    render() {
        return (
            <div>
                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-11 col-11">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Payer Details 
                                </h2>
                            </div>
                            <div class="col-md-1 col-1">
                                <button type="button" class="btn btn-lg btn-block btn-outline-light active"> <AiIcons.AiFillUnlock/> Inquary </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="container-fluid">
                        <PayerForm />
                    </div>
                </div>
            </div>
        )
    }
}
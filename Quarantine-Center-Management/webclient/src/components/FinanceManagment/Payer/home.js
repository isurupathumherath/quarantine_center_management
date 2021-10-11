import React from 'react';
import {Image} from 'react-bootstrap';
import PayerForm from './Form';
import Payer from '../../../assets/PaymentManagment/img/payment_payer.png';


export default function Home() {
    return (
        <div>
            <div class="row mb-5">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <section class="comp-section">
                        <div class="comp-header">
                            <h3 class="comp-title">Payer Inforamtion</h3>
                            <div class="line"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="card">
                                    <div class="card-body">
                                        <PayerForm />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <Image src={Payer} rounded />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div >
    );
}


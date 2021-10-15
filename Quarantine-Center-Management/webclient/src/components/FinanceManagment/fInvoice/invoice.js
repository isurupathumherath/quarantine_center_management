import React, { Component } from 'react';
import { useRef, useState, useEffect } from "react";
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import Swal from 'sweetalert2';

import YourLogo from "../../../assets/PaymentManagment/img/yourlogohere.png";

//session
import UserProfile from '../Functions/userData';

//invoice 
function Invoice() {
    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = event => {
        pdfExportComponent.current.save();
    };

    const handlepay = event => {
        Swal.fire({
            title: 'Proceed to Pay',
            icon: 'info',
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<a href="/payment">Proceed</a>',
            cancelButtonText:
                'Cancel',
        })
    }

    return (
        <div id="example">
            <div class="invoice-content">
                <PDFExport ref={pdfExportComponent}>
                    <div class="invoice-content">
                        <div class="invoice-item">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="invoice-logo">
                                        <img src={YourLogo} alt="logo" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <p class="invoice-details">
                                        <strong>Order:</strong> #00124 <br />
                                        <strong>Issued:</strong> 20/07/2019
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="invoice-item">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="invoice-info">
                                        <strong class="customer-text">Invoice From</strong>
                                        <p class="invoice-details invoice-details-two">
                                            QCMC <br />
                                            146, Rampart Road, Ethual Kotte<br />
                                            Kotte, Sri Lanka <br />
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="invoice-info invoice-info2">
                                        <strong class="customer-text">Invoice To</strong>
                                        <p class="invoice-details">
                                            {JSON.parse(localStorage.getItem('currentUser')).lName+ " " + localStorage.getItem("lastName")} <br />
                                            {localStorage.getItem("address")} <br />
                                            {localStorage.getItem("contactNumber")} <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="invoice-item invoice-table-wrap">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="table-responsive">
                                        <table class="invoice-table table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Description</th>
                                                    <th class="text-center">Quantity</th>
                                                    <th class="text-center">VAT</th>
                                                    <th class="text-right">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Food & Brevarage Order Total</td>
                                                    <td class="text-center">1</td>
                                                    <td class="text-center">$0</td>
                                                    <td class="text-right">$100</td>
                                                </tr>
                                                <tr>
                                                    <td>Room Booking Total</td>
                                                    <td class="text-center">1</td>
                                                    <td class="text-center">$0</td>
                                                    <td class="text-right">$250</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="col-md-8 col-xl-6 ml-auto">
                                    <div class="table-responsive">
                                        <table class="invoice-table-two table">
                                            <tbody>
                                                <tr>
                                                    <th>Subtotal:</th>
                                                    <td><span>$350</span></td>
                                                </tr>
                                                <tr>
                                                    <th>Discount:</th>
                                                    <td><span>0%</span></td>
                                                </tr>
                                                <tr>
                                                    <th>Total Amount:</th>
                                                    <td><span>$315</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="other-info">
                            <h4>Other information</h4>
                            {/* <p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero.</p> */}
                        </div>
                    </div>

                    {/* </div> */}
                </PDFExport>
                <div class="row mt-5">
                    <div class="col-md-6">
                        {/* <DropDownList
                        data={ddData}
                        textField="text"
                        dataItemKey="value"
                        value={layoutSelection}
                        onChange={updatePageLayout}
                    /> */}
                    </div>
                    <div class="col-md-3">
                        <button type="button" class="btn btn-block btn-outline-secondary active" onClick={handleExportWithComponent}>Export to PDF</button>
                    </div>
                    <div class="col-md-3">
                        <button type="button" class="btn btn-block btn-outline-success active" onClick={handlepay}>Proceed to Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invoice;
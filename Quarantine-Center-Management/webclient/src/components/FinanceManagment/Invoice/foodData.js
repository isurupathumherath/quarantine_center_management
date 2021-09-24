import React, { Component, useState, useEffect } from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import { getFoodData } from "../../../actions/FinanceAction/invoice";
import { useDispatch, useSelector } from "react-redux";

export default function FoodData() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFoodData(102));
    }, [dispatch]);

    const invoices = useSelector((state) => state.invoice);
    var total = 0;
    return (
        <div class="card card-table mb-5">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-center mb-0">
                        <thead>
                            <tr>
                                <th>Ordered Date</th>
                                <th>Order ID</th>
                                <th>User ID</th>
                                <th>Food name</th>
                                <th>Item Price</th>
                                <th class="text-center">Total (Rs.)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <Scrollbars style={{ width: 1,height: 500 }}> */}
                                {invoices.map((invoice, Total = 0) => {
                                    total = total + invoice.total;
                                    return (
                                        <tr key={invoice._id}>
                                            <td>2021/05/16<span class="d-block text-info">15.16 P.M</span></td>
                                            <td> {invoice.orderID} </td>
                                            <td> {invoice.patientID} </td>
                                            <td>
                                                {invoice
                                                    .orderDetails
                                                    .map((orderDeta, jdx) => (
                                                        <span>{orderDeta.name}, </span>
                                                    ))
                                                }
                                            </td>
                                            <td>
                                                {invoice
                                                    .orderDetails
                                                    .map((orderDeta, jdx) => (
                                                        <span>{orderDeta.price} - </span>
                                                    ))
                                                }
                                            </td>
                                            <td class="text-center">{invoice.total}.00</td>
                                            {/* <td class="text-right">
                                        <div class="table-action">
                                            <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                <i class="far fa-eye"></i> View
                                            </a>

                                            <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                <i class="fas fa-check"></i> Accept
                                            </a>
                                            <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                <i class="fas fa-times"></i> Cancel
                                            </a>
                                        </div>
                                    </td> */}
                                        </tr>
                                    )
                                })}
                                <div><h1>Total = {total}</h1></div>
                            {/* </Scrollbars> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
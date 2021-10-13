import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Image } from 'react-bootstrap';
import { getFoodData, getBookingData, getroomData } from "../../../actions/FinanceAction/invoice";
// import {  } from "../../../actions/FinanceAction/invoicebooking";
import FoodData from './foodData';
import RoomData from './roomData';
import FoodInvoiceImg from '../../../assets/PaymentManagment/img/food_invoice.jpg';
import bookingInvoiceImg from '../../../assets/PaymentManagment/img/booking_invoice.jpg';


import { useDispatch } from "react-redux";


export default function Home() {

    const dispatch = useDispatch();

    const handleSelect = async (key) => {
        if (key === 1) {
        }
        else if (key == 2) {
            dispatch(getFoodData(102));
        } else if (key == 3) {
            dispatch(getBookingData(102));
        }
    }

    return (
        <div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <Tabs
                        id="controlled-tab-example"
                        defaultActiveKey={2}
                        onSelect={handleSelect}
                        className="mb-3"
                    >
                        <Tab eventKey={2} title="Food & Brevarages">
                            <div class="row">
                                <div class="col-md-12">
                                    <FoodData />
                                </div>
                                {/* <div class="col-md-4 mt-5">
                                    <Image className="mt-4" src={FoodInvoiceImg} rounded />
                                </div> */}
                            </div>
                        </Tab>
                        <Tab eventKey={3} title="Room Reservation">
                            <div class="row">
                                <div class="col-md-12">
                                    <RoomData />
                                </div>
                                {/* <div class="col-md-4 mt-5">
                                    <Image className="mt-4" src={bookingInvoiceImg} rounded />
                                </div> */}
                            </div>
                        </Tab>
                        {/* <Tab eventKey={1} title="Contact" disabled>
                        </Tab> */}
                    </Tabs>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
    );
}


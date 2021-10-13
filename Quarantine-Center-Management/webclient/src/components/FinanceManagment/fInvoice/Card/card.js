import React from 'react';

const Card = ({ Data }) => {
    return (
        <div>
            {Data.map((data) => (
                <div class="card booking-card">
                    <div class="card-body">
                        <div class="booking-summary">
                            <div class="booking-item-wrap">
                                <ul class="booking-date">
                                    <li>Date <span>{data.orderedDate}</span></li>
                                    <li>Order ID <span>{data.orderID}</span></li>
                                    <li>Order ID <span>{data.checkout}</span></li>
                                    <li>Order ID <span>{data.checkin}</span></li>
                                    <li>Order ID <span>{data.price}</span></li>


                                </ul>
                                {/* <ul class="booking-fee">
                                    <li>Consulting Fee <span>$100</span></li>
                                    <li>Booking Fee <span>$10</span></li>
                                    <li>Video Call <span>$50</span></li>
                                </ul> */}
                                <div class="booking-total">
                                    <ul class="booking-total-list">
                                        <li>
                                            <span>Total</span>
                                            <span class="total-cost"> Rs. {data.total}.00</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Card;
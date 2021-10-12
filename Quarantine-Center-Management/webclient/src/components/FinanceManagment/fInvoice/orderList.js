import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

import { CircularProgress } from '@material-ui/core';

import OrderItems from './orderItems';
import { gteOrderData } from '../../../actions/FinanceAction/fInvoice'
 
const OrderList = ({ }) => {
    const [currentID, setCurrentID] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(gteOrderData(localStorage.getItem("userID")));
    }, [currentID, dispatch])

    const orders = useSelector((state) => state.ForderData);

    // const resultOrder = orders.reduce((total, currentValue) => total = total + currentValue.total, 0);
    // console.log("order" + resultOrder);

    // localStorage.setItem("orderToatal", resultOrder);


    return (
        !orders.length ? <CircularProgress /> : (
            <div>
                {orders.map((data) => {
                    return (
                        <div key={data._id}>
                            <OrderItems data={data} currentID={currentID} setCurrentID={setCurrentID} />
                        </div>
                    )
                })}
            </div>
        )

    )
}

export default OrderList;

import React, { useEffect, useMemo, useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

import Food from '../../../assets/PaymentManagment/img/food1.png'
// import Card from './Card/card';

// //session storage
// import UserProfile from '../Functions/userData';

// UserProfile.setorderTotal("8000");
// UserProfile.getuserID();


export default function Orders() {
    const [orderData, setOrderData] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);


    useEffect(() => {
        const getData = () => {
            fetch('http://localhost:5000/invoice/foodDetails/' + localStorage.getItem("userID"))
                .then(response => response.json())
                .then(json => {
                    // hideLoader();
                    setOrderData(json);
                    // console.log(json);
                });
        };
        getData();
    }, []);

    const Data = useMemo(() => {
        let computeOrderData = orderData;
        return computeOrderData;
    }, [orderData]);

    const resultOrder = orderData.reduce((total, currentValue) => total = total + currentValue.total, 0); 
    console.log("order" +resultOrder);  

    localStorage.setItem("orderToatal", resultOrder);
    
    return (
        <div>
            {/* <Card Data={Data} /> */}
            {Data.map((data) => { 
                return (
                    <div class="card booking-card" style={{ boxShadow : 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px'}}>
                        <div class="card-body">
                            <div class="booking-summary">
                                <div class="booking-item-wrap">
                                    <ul class="booking-date">
                                        <li>Date <span>{data.orderedDate}</span></li>
                                        <li>Order ID <span>{data.orderID}</span></li>
                                        <button type="button" class="btn btn-block btn-outline-info" onClick={() => setModalShow(true)}>Info</button>
                                        {/* <Form.Control
                                            required
                                            id="test"
                                            type="text"
                                            placeholder="First name"
                                            // style={{display: 'none'}}
                                            value={data.roomid}
                                        /> */}

                                    </ul>
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
                        <MyVerticallyCenteredModal
                            testID={data._id}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                )
            })}
        </div>

    )
}
 

function MyVerticallyCenteredModal(props) {

    const [orderSetData, setOrderSetData] = useState([]);

    useEffect(() => {
        const getOrderSetData = () => {
            fetch('http://localhost:5000/invoice/foodSetDetails/' + props.testID)
                .then(response => response.json())
                .then(json => {
                    // hideLoader();
                    setOrderSetData(json);
                    // console.log(json);
                });
        };
        getOrderSetData();
    }, []);

    const OrderSetData = useMemo(() => {
        let computeOrderSetData = orderSetData;

        return computeOrderSetData;
    }, [orderSetData]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {OrderSetData.map((data) => (
                    <>
                        <div class="row" style={{ margin: "20px" }}>
                            <div class="col-md-4">
                                <img width="200px" src={Food} />
                            </div>
                            <div class="col-md-8">
                                {data.orderDetails.map((sub) =>
                                    <div class="row" >
                                        <div class="booking-item-wrap">
                                            <ul class="booking-date" style={{ width: '500px', backgroundColor: '#d9d9d9', padding: '10px' }}>
                                                <li>Food ID <span>{sub.id}</span></li>
                                                <li>Name <span>{sub.name}</span></li>
                                                <li>Decription <span>{sub.description}</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}
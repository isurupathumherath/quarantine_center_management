import React, { useEffect, useMemo, useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

import Food from '../../../assets/PaymentManagment/img/food1.png'

import { foodSetDetails } from '../../../actions/FinanceAction/fInvoice';

const OrderItems = ({ data, currentID, setCurrentID, idTest }) => {
    const [modalShow, setModalShow] = React.useState(false);


    const handleOnclick = (event) => {
        setCurrentID(data._id);
        setModalShow(true)
    }

    return (
        <div>
            <div class="card booking-card" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px' }}>
                <div class="card-header">
                    <h4 class="card-title">Order No :  food110{idTest} </h4>
                </div>
                <div class="card-body">
                    <div class="booking-summary">
                        <div class="booking-item-wrap">
                            <ul class="booking-date">
                                <li>Date <span>{data.orderedDate}</span></li>
                                <li>Order ID <span>{data.orderID}</span></li>
                                <button type="button" class="btn btn-block btn-outline-info" onClick={handleOnclick}>Info</button>
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
            </div>
            <MyVerticallyCenteredModal
                testID={currentID}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>

    )
}

export default OrderItems;


function MyVerticallyCenteredModal(props) {

    console.log(props.testID);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(foodSetDetails(props.testID));
    }, [props.testID, dispatch])

    const orderData = useSelector((state) => state.Foods);

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
                {orderData.map((data) => (
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
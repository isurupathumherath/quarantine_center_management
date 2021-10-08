import React, { useEffect, useMemo, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import BookingLogo from '../../../assets/PaymentManagment/img/booking1.png';
// import Card from './Card/card';

export default function Booking() {
    const [bookingData, setBookingData] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);


    useEffect(() => {
        const getData = () => {
            fetch('http://localhost:5000/invoice/bookingDetails/' + 102)
                .then(response => response.json())
                .then(json => {
                    // hideLoader();
                    setBookingData(json);
                    // console.log(json);
                });
        };
        getData();
    }, []);

    const Data = useMemo(() => {
        let computeBookingData = bookingData;

        return computeBookingData;
    }, [bookingData]);

    return (
        <div>
            {/* <Card Data={Data} /> */}
            {Data.map((data) => {
                return (
                    <div class="card booking-card">
                        <div class="card-body">
                            <div class="booking-summary">
                                <div class="booking-item-wrap">
                                    <ul class="booking-date">
                                        <li>checkin - checkout <span>{data.checkin} / {data.checkout}</span></li>
                                        <li>Booking ID <span>{data._id}</span></li>
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
                                                <span class="total-cost"> Rs. {data.price}.00</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MyVerticallyCenteredModal
                            roomID={data.roomid}
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
    const [roomData, setRoomData] = useState([]);

    useEffect(() => {
        const getRoomData = () => {
            fetch('http://localhost:5000/invoice/roomDetails/' + props.roomID)
                .then(response => response.json())
                .then(json => {
                    // hideLoader();
                    setRoomData(json);
                    console.log(json);
                });
        };
        getRoomData();
    }, []);

    const RoomData = useMemo(() => {
        let computeRoomData = roomData;

        return computeRoomData;
    }, [roomData]);

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
                <>
                    <div class="row" style={{ margin: "20px" }}>
                        <div class="col-md-4">
                            <img width="200px" src={BookingLogo} />
                        </div>
                        <div class="col-md-8">
                            {RoomData.map((data) =>
                                <div class="row" >
                                    <div class="booking-item-wrap">
                                        <ul class="booking-date" style={{ width: '500px', height: '170px',backgroundColor: '#d9d9d9', padding: '10px' }}>
                                            <li>Room ID <span>{data.roomType}</span></li>
                                            <li>Name <span>{data.roomName}</span></li>
                                            <li>Decription</li>
                                            <li><span>{data.description}</span></li> 
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
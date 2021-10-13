import React from 'react'; 
import { ListGroup, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as FaIcons from 'react-icons/fa';
// import {
//     Icon_Visa,
//     Icon_MasterCard
// } from 'material-ui-credit-card-icons';

import { deletePayment } from '../../../../actions/FinanceAction/payment';

const fontstyle = { color: 'black' };

const Item = ({ payment, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <ListGroup.Item style={fontstyle}>
            <Row>
                <Col sm={1} md={1}>  <FaIcons.FaCcMastercard size={40}/> </Col>
                <Col sm={3} md={3}> {payment.cardNumber} </Col>
                <Col sm={3} md={3}> {payment.cardholdersName}</Col>
                <Col sm={2} md={2}>
                    <button type="button" class="btn btn-block btn-outline-warning" onClick={() => dispatch(deletePayment(payment._id))}>Remove Card</button>
                </Col>
                <Col sm={3} md={3} >
                    <button type="button" class="btn btn-block btn-outline-info" onClick={() => setCurrentId(payment._id)}>Edit Card Details</button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default Item;

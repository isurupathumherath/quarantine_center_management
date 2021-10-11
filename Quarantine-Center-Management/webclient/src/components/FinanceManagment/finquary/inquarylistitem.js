import React from 'react';
import { useDispatch } from 'react-redux';
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { Col, Form, Row, Modal, Button } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

import { deleteInquary } from '../../../actions/FinanceAction/finquary';

const InquaryItem = ({ item, setCurrentId, currentID }) => {
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = React.useState(false);

    const handleDelete = (event) => {
        dispatch(deleteInquary(item._id))
    }

    const handleOnclick = (event) => {
        setCurrentId(item._id);
        setModalShow(true)
    }

    return (
        <div>
            <AccordionItem key={item._id}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Inquary ID :  {item._id}
                        <span
                            style={{
                                marginLeft: '299px',
                                padding: '11px',
                                borderRadius: '8px',
                                backgroundColor: '#6c757d',
                                color: 'white',
                                fontWeight:
                                    'bold'
                            }}>
                            Inquary states : {item.states}
                        </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <Scrollbars style={{ width: '100%', height: 300 }}>
                        <Row>
                            <Col md={12}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Inquary Title</Form.Label>
                                    <Form.Control type="text" placeholder="" value={item.title} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Inquary Date</Form.Label>
                                    <Form.Control type="text" placeholder="" value={item.insertedDateTime} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Inquary Piority</Form.Label>
                                    <Form.Control type="text" placeholder="" value={item.piority} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Inquary type</Form.Label>
                                    <Form.Control type="text" placeholder="" value={item.type} readOnly />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label> Description </Form.Label>
                                    <Form.Control type="text" as="textarea" rows={3} placeholder="" value={item.description} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Scrollbars>
                    <Row>
                        <Col md={3} style={{ marginTop: '25px' }}>
                        </Col>
                        <Col md={3} style={{ marginTop: '25px' }}>
                        </Col>
                        <Col md={3} style={{ marginTop: '25px' }}>
                            <button type="button" class="btn btn-block btn-outline-danger active" onClick={handleDelete}>Delete</button>
                        </Col>
                        <Col md={3} style={{ marginTop: '25px' }}>
                            <button type="submit" class="btn btn-block btn-outline-success active" onClick={handleOnclick} >Update</button>
                        </Col>
                    </Row>
                </AccordionItemPanel>
            </AccordionItem>
            <MyVerticallyCenteredModal
                test={currentID}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default InquaryItem;

function MyVerticallyCenteredModal(props) {
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
                <h4>{props.test} </h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}



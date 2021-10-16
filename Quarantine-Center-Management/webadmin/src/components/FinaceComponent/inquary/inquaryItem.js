import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { Col, Form, Row, Modal, Button } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import Swal from 'sweetalert2';

import { deleteInquary, updateInquary } from '../../../actions/FinanceAction/finquary';


const InquaryItem = ({ item, setCurrentId, currentID, Inquary_states }) => {
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
                                marginLeft: '50%',
                                padding: '11px',
                                borderRadius: '8px',
                                backgroundColor: '#6c757d',
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                            Inquary states : {Inquary_states}
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
                            <button type="submit" class="btn btn-block btn-outline-success active" onClick={handleOnclick} >Reply</button>
                        </Col>
                    </Row>
                    <hr style={{ border: '1px solid #d3d3d3' }} />
                    {/* <Row style={{ padding: '20px'}}>
                        <div class="card" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',width: '100%' }}>
                            <div class="card-header">
                                <h4 class="card-title">Response</h4>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                    </div>
                                    <div class="col-md-12" >
                                    </div>
                                    <div class="col-md-12  mt-3"
                                        style={{
                                            padding: '18px 2px 0px 18px',
                                            border: '1px solid black',
                                            backgroundColor: '#f4f4f4',
                                            borderRadius: '2px'
                                        }}>
                                        <p class="comment-content">
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row> */}
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

    console.log(props.test);

    const [inquaryData, setInquaryData] = useState({
        replyTitle: null,
        replyDescription: null,
        states: null,
    });

    const inquary = useSelector((state) => (props.test ? state.Finquary.find((message) => message._id === props.test) : null));
    const dispatch = useDispatch();

    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (inquary) setInquaryData(inquary);
    }, [inquary]);

    const clear = () => {
        // set{props.test}(0);
        setInquaryData({
            replyTitle: '',
            replyDescription: '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (props.test === 0) {
            console.log("test123");
        } else {
            dispatch(updateInquary(props.test, inquaryData));
            Swal.fire({
                title: 'Inquary Updated Suucessfully',
                icon: 'success',
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<a href="/inquary">Ok</a>',
                cancelButtonText:
                    'Cancel',
            })
            clear();
            setValidated(true);
        }
        setValidated(true);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Inquary
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Reply Title</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="replyTitle"
                                name="replyTitle"
                                value={inquaryData.replyTitle}
                                onChange={(event) => setInquaryData({ ...inquaryData, replyTitle: event.target.value })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12 mt-2" controlId="validationCustom01">
                            <Form.Label>Inquary States</Form.Label>       
                            <Form.Select
                                name="type"
                                noValidate
                                onChange={(event) => setInquaryData({ ...inquaryData, states: event.target.value })}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    padding: '.375rem 2.25rem .375rem .75rem',
                                    fontSize: '1rem',
                                    fontWeight: '400',
                                    lineHeight: '1.5',
                                    color: '#212529',
                                    backgroundImage: 'url(data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"%3e%3cpath fill="none" stroke="%23343a40" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5l6 6 6-6"/%3e%3c/svg%3e)',
                                    backgroundColor: '#fff',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right .75rem center',
                                    backgroundSize: '16px 12px',
                                    border: '1px solid #ced4da',
                                    borderRadius: '.25rem',
                                    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
                                    appearance: 'none'
                                }}
                            >
                                <option>Open this select menu</option>
                                <option value="1">Pending</option>
                                <option value="2">Closed</option>
                                <option value="3">Working On</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} md="12" className='mt-3' controlId="validationCustom01">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                as="textarea"
                                rows={3}
                                placeholder="replyDescription"
                                name="descreplyDescriptionription"
                                value={inquaryData.replyDescription}
                                onChange={(event) => setInquaryData({ ...inquaryData, replyDescription: event.target.value })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className='mt-5'>
                        <Col sm={3} md={3}>
                        </Col>
                        <Col sm={3} md={3}>
                        </Col>
                        <Col sm={3} md={3}>
                            <button type="button" class="btn btn-block btn-warning" onClick={clear}>Clear</button>
                        </Col>
                        <Col sm={3} md={3}>
                            <button type="submit" class="btn btn-block btn-success">Update Inquary</button>
                        </Col>
                    </Row>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}



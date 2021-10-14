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

import { deleteInquary, updateInquary } from '../../../actions/FinanceAction/finquary';


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
                                marginLeft: '250px',
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
                    <hr style={{ border: '1px solid #d3d3d3' }} />
                    <Row style={{ padding: '20px'}}>
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

    const [inquaryData, setInquaryData] = useState({
        title: null,
        type: null,
        description: null,
        piority: null,
        states: "2",
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
            title: '',
            type: '',
            description: '',
            piority: '',
        });
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();

        if (props.test === 0) {
            console.log("test123");
        } else {
            dispatch(updateInquary(props.test, inquaryData));
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
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="title"
                                name="title"
                                value={inquaryData.title}
                                onChange={(event) => setInquaryData({ ...inquaryData, title: event.target.value })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className='mt-3' controlId="validationCustom02">
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="type"
                                name="type"
                                value={inquaryData.type}
                                onChange={(event) => setInquaryData({ ...inquaryData, type: event.target.value })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className='mt-3' controlId="validationCustom01">
                            <Form.Label>Piority</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="piority"
                                name="piority"
                                value={inquaryData.piority}
                                onChange={(event) => setInquaryData({ ...inquaryData, piority: event.target.value })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" className='mt-3' controlId="validationCustom01">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                as="textarea"
                                rows={3}
                                placeholder="description"
                                name="description"
                                value={inquaryData.description}
                                onChange={(event) => setInquaryData({ ...inquaryData, description: event.target.value })}
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



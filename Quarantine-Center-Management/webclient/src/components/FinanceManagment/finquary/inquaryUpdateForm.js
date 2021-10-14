import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { updateInquary } from '../../../actions/FinanceAction/finquary';


const InquaryUpdateForm = ({ currentId, setCurrentId }) => {

    const [inquaryData, setInquaryData] = useState({
        title: null,
        type: null,
        description: null,
        piority: null,
        states: "2",
    });

    const inquary = useSelector((state) => (currentId ? state.inquary.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();

    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (inquary) setInquaryData(inquary);
    }, [inquary]);

    const clear = () => {
        setCurrentId(0);
        setInquaryData({
            title: '',
            type: '',
            description: '',
            piority: '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if (currentId === 0) {
            console.log("test123");  
        } else {
            dispatch(updateInquary(currentId, inquaryData));
            clear();
            setValidated(true);
        }  
        setValidated(true);
    };

    return (
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
                <Form.Group as={Col} md="6" className='mt-3' controlId="validationCustom01">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        as="textarea"
                        row={3}
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
                    <button type="button" class="btn btn-block btn-warning" onClick={clear}>Clear</button>
                </Col>
                <Col sm={3} md={3}>
                    <button type="submit" class="btn btn-block btn-success">Update Inquary</button>
                </Col>
            </Row>

        </Form>
    );
}


export default InquaryUpdateForm;
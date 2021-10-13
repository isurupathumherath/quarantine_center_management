import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

import Item from './item';

const List = ({ setCurrentId }) => {
    const payment = useSelector((state) => state.payment);

    return ( 
        !payment.length ? <CircularProgress /> : (
            <ListGroup>
                <Scrollbars style={{ width: '100%', height: 400 }}>
                    {payment.map((payment) => (
                        <div key={payment._id}>
                            <Item payment={payment} setCurrentId={setCurrentId} />
                        </div>
                    ))}
                </Scrollbars>
            </ListGroup>
        )
    );
};

export default List;

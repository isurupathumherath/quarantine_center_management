import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { Accordion } from 'react-accessible-accordion';

import InqauryListitem from './inquarylistitem';
import { InquaryDetails } from "../../../actions/FinanceAction/finquary";
 
import 'react-accessible-accordion/dist/fancy-example.css';

const InquaryList = ({ }) => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(InquaryDetails(localStorage.getItem("userID")));
    }, [currentId, dispatch]);

    const inquarys = useSelector((state) => state.Finquary);

    return (
        !inquarys.length ? <CircularProgress /> : (
            <div>
                <Accordion allowZeroExpanded>
                    {inquarys.map((item) => {
                        if (item.states == '1') {
                            item.states = "pending";
                        }
                        return (
                            <div key={item._id}>
                                <InqauryListitem item={item} currentID={currentId} setCurrentId={setCurrentId} />
                            </div>
                        )
                    })}
                </Accordion>
            </div>
        )
    );
};

export default InquaryList;

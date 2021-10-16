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
        // dispatch(InquaryDetails(localStorage.getItem("userID")));
        dispatch(InquaryDetails(JSON.parse(localStorage.getItem('currentUser'))._id)); 
    }, [currentId, dispatch]);

    const inquarys = useSelector((state) => state.Finquary);

    var Inquary_states = "";

    return (
        !inquarys.length ? <CircularProgress /> : (
            <div>
                <Accordion allowZeroExpanded>
                    {inquarys.map((item) => {
                         if (item.states == '1') {
                            Inquary_states = "Pending";
                        } else if (item.states === '3') {
                            Inquary_states = "Working on";
                        } else if (item.states === '2') {
                            Inquary_states = "Completeted";
                        }
                        return (
                            <div key={item._id} class="mb-2">
                                <InqauryListitem Inquary_states={Inquary_states} item={item} currentID={currentId} setCurrentId={setCurrentId} />
                            </div>
                        )
                    })}
                </Accordion>
            </div>
        )
    );
};

export default InquaryList;

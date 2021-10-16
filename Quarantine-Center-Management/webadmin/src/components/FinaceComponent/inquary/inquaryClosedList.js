import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { Accordion } from 'react-accessible-accordion';

import InquaryItem from './inquaryItem';
import { allInquaryDetails } from "../../../actions/FinanceAction/finquary";

import 'react-accessible-accordion/dist/fancy-example.css';

const InquaryPendingList = ({ }) => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allInquaryDetails());
    }, [currentId, dispatch]);

    const inquarys = useSelector((state) => state.Finquary);

    var Inquary_states = "";

    return (
        !inquarys.length ? <CircularProgress /> : (
            <div>
                <div class="card" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} >
                    <div class="card-body">
                        <Accordion allowZeroExpanded>
                            {inquarys.map((item) => {
                                if (item.states == '1') {
                                    Inquary_states = "Pending";
                                } else if (item.states === '3') {
                                    Inquary_states = "Working on";
                                } else if (item.states === '2') {
                                    Inquary_states = "Completeted";
                                    return (
                                        <div key={item._id} class="mb-2">
                                            <InquaryItem Inquary_states={Inquary_states} item={item} currentID={currentId} setCurrentId={setCurrentId} />
                                        </div>
                                    )
                                }
                            })}
                        </Accordion>
                    </div>
                </div>
            </div>
        )
    );
};

export default InquaryPendingList;

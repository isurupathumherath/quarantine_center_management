import React, { useState, useEffect } from "react";
import { getPayers } from '../../actions/FinanceAction/payers';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPayers());
    }, [currentId, dispatch]);

    const payers = useSelector((state) => state.payers);
    const id = 0;

    return (
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Hover Rows</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>createdAt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payers.map((payer) => (
                                    <tr>
                                        <td>{id}</td>
                                        <td>{payer.firstName}</td>
                                        <td>{payer.lastName}</td>
                                        <td>{payer.createdAt}</td> 
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import Posts from '../components/Posts/Posts';
import Form from './form';
import CardList from './CardList/List';
import { getSavedCardDetails } from '../../../actions/FinanceAction/payment'; 

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(getSavedCardDetails("110"));
    }, [currentId, dispatch]);

    return (
        <div>
            <div class="row mb-5">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <section class="comp-section">
                        <div class="comp-header">
                            <h3 class="comp-title">Payment</h3>
                            <div class="line"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="card">
                                    <div class="card-header">
                                        Patient ID :  102
                                    </div>
                                    <div class="card-body">
                                        <CardList setCurrentId={setCurrentId} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title mb-0">Card with links</h5>
                                    </div>
                                    <div class="card-body">
                                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div >
    );
};

export default Home;

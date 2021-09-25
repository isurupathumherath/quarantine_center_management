import React, { useState, useEffect } from 'react'; 
import { useDispatch } from 'react-redux';

import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';
import { getPosts } from '../actions/posts'; 

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(getPosts());
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
                                    <div class="card-body">
                                        <Posts setCurrentId={setCurrentId} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
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

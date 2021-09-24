import React, { Component, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import FoodData from './foodData';

export default function Home() {
    const [key, setKey] = useState('home');

    return (
        <div class="row" style={{ color: "red" }}>
            <div class="col-md-1"></div>
            <div class="col-md-10"> 
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Food & Brevarages">
                        <FoodData />
                    </Tab>
                    <Tab eventKey="profile" title="Room Reservation">
                        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th</h1>
                    </Tab>
                    <Tab eventKey="contact" title="Contact" disabled>
                    </Tab>
                </Tabs>
            </div>
            <div class="col-md-1"></div>
        </div>
    );
}


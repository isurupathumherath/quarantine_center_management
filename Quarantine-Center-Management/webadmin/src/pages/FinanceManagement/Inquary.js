import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import { Closed, Pending, InquaryList } from '../../components/FinaceComponent/inquary'

export default function FInquary() {
    const [key, setKey] = useState('Closed');
    return (
        <div>
            <div class="content container-fluid">
                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-12">
                            <h3 class="page-title">Inquary View</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li class="breadcrumb-item active">Inquary Managment</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="Closed" title="Closed">
                                <div class="row">
                                    <Closed />
                                </div>
                            </Tab>
                            <Tab eventKey="Pending" title="Pending">
                                <Pending />
                            </Tab>
                            <Tab eventKey="Inquary" title="Inquary">
                                <InquaryList />
                            </Tab>
                            <Tab eventKey="contact" title="Contact" disabled>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}
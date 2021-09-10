import React, { Component } from "react";
import Table from '../../components/FinanceManagment/table';
import Posts from '../../components/Posts/Posts';

const dashboard = ({ }) => {
    return (
        <div class="page-wrapper">
            <div class="content container-fluid">
                <div class="row">
                    <Table />
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <Posts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard;
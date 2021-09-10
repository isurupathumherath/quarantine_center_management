import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Sidebar = ({ }) => {
    return (
        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title">
                            <span>Main</span>
                        </li>
                        <li class="active">
                            <Link to="/dashboard"><i class="fe fe-home"></i> <span>Finace Dashboard</span></Link>
                        </li>
                        <li>
                            <Link to="/details"><i class="fe fe-book"></i> <span>Finace Details</span></Link>
                        </li>
                        <li>
                            <Link to="/inquary"><i class="fe fe-users"></i> <span>Finace Inquary</span></Link>
                        </li>
                        <li>
                            <Link to="/report"><i class="fe fe-document"></i> <span>Finace Report</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

/*
    Created by - Isuru Pathum Herath
    On - 11/10/2021
    Name - PrivateRoute
    Last Update - 11/10/2021
    Last Update By - Isuru Pathum Herath
 */

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAdminUser } from './adminHelper';

const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                getAdminUser() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
            }
        />
    );
}

export default PrivateRouteAdmin;
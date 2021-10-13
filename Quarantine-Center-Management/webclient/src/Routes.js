import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import PrivateRoute from './PrivateRoutes';

//common navigation components

import Header from "./components/Common/Navigation/Header";
import Footer from "./components/Common/Navigation/Footer";
import Register from './components/UserManagement/Register';
//import Register from "./components/UserManagement/Test";
import Home from './components/UserManagement/Home';
import Login from './components/UserManagement/Login';
import EditProfile from './components/UserManagement/EditProfile';
import ProfileDetails from './components/UserManagement/ProfileDetails';
import { Provider } from 'react-redux';
import AllFood from "../../webclient/src/pages/FoodManagement/AllFood";
import FoodAdmin from "../../webclient/src/pages/FoodManagement/FoodAdmin";

import FoodCart from "../../webclient/src/pages/FoodManagement/FoodCart";
import AllOrders from "../../webclient/src/pages/FoodManagement/AllOrders";
import OrderAdmin from "../../webclient/src/pages/FoodManagement/OrderAdmin";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <div>
                <Header/>
                <div class="content">
                    <div class="container-fluid">
                    {/* <Route path="/" exact component={App} /> */}
                            <Route path="/register" exact component={Register} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/" exact component={Login} />
                            <PrivateRoute path="/home" exact component={Home} />
                            <PrivateRoute path="/profile" exact component={ProfileDetails} />

                            {/* Chamodh */}
                            <PrivateRoute path="/allFood" exact component={AllFood} />
                            <PrivateRoute path="/foodadmin" exact component={FoodAdmin} />
                            <PrivateRoute path="/allOrders" exact component={AllOrders} />
                            <PrivateRoute path="/foodCart" exact component={FoodCart} />
                            <PrivateRoute path="/orderAdmin" exact component={OrderAdmin} />
                    </div>
                </div>
                <Footer/>
                </div>
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;
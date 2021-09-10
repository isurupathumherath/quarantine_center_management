import React, { Component } from "react";

//import componenents
import LoginForm from "../../components/example/Loginform";

export default class Loginexample extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="account-content">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md-7 col-lg-6 login-left">
                                <img src="assets/img/login-banner.png" class="img-fluid" alt="Doccure Login" />
                            </div>
                            <div class="col-md-12 col-lg-6 login-right">
                                <div class="login-header">
                                    <h3>Login <span>Doccure</span></h3>
                                </div>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
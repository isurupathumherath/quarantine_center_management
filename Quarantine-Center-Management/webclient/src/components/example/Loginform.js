import React, { Component } from "react";


export default class LoginForm extends Component {
    render() {
        return (
            <div>
                <form action="https://doccure-html.dreamguystech.com/template/index.html">
                    <div class="form-group form-focus">
                        <input type="email" class="form-control floating"/>
                        <label class ="focus-label">Email</label>
                    </div>
                    <div class="form-group form-focus">
                        <input type="password" class="form-control floating"/>
                        <label class ="focus-label">Password</label>
                    </div>
                    <div class="text-right">
                        <a class="forgot-link" href="forgot-password.html">Forgot Password ?</a>
                    </div>
                    <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
                    <div class="login-or">
                        <span class="or-line"></span>
                        <span class="span-or">or</span>
                    </div>
                    <div class="row form-row social-login">
                        <div class="col-6">
                            <a href="#" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a>
                        </div>
                        <div class="col-6">
                            <a href="#" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a>
                        </div>
                    </div>
                    <div class="text-center dont-have">Don’t have an account? <a href="register.html">Register</a></div>
                </form>
            </div >
        )
    }
}
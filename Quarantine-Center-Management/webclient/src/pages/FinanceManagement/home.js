import React, { Component } from "react";


export default class Home extends Component {
    render() {
        return (
            <div class="col-md-12">
                <a href={'/payment/paymentDetails'}><button> Pay </button></a>
            </div>
        )
    }
}
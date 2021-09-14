import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header class="header">
          <nav class="navbar navbar-expand-lg header-nav">
            <div class="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span class="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <a href="index.html" class="navbar-brand logo">
                <img src="assets/img/logo.png" class="img-fluid" alt="Logo" />
              </a>
            </div>
            <div class="main-menu-wrapper">
              <div class="menu-header">
                <a href="index.html" class="menu-logo">
                  <img src="assets/img/logo.png" class="img-fluid" alt="Logo" />
                </a>
                <a
                  id="menu_close"
                  class="menu-close"
                  href="javascript:void(0);"
                >
                  <i class="fas fa-times"></i>
                </a>
              </div>
              <ul class="main-nav">
                <li class="has-submenu">
                  <a href="#">
                    Home <i class="fas fa-chevron-down"></i>
                  </a>
                  <ul class="submenu">
                    <li class="active">
                      <a href="index.html">Home</a>
                    </li> 
                  </ul>
                </li>
                <li class="has-submenu active">
                  <a>
                    Payment <i class="fas fa-chevron-down"></i>
                  </a>
                  <ul class="submenu">
                    <li class="active">
                      <a href={'/payment/home'}>Payment</a>
                    </li> 
                  </ul>
                </li>
              </ul>
            </div>
            <ul class="nav header-navbar-rht">
              <li class="nav-item contact-item">
                <div class="header-contact-img">
                  <i class="far fa-hospital"></i>
                </div>
                <div class="header-contact-detail">
                  <p class="contact-header">Contact</p>
                  <p class="contact-info-header"> +1 315 369 5943</p>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link header-login" href={"/login"}>
                  login / Signup
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

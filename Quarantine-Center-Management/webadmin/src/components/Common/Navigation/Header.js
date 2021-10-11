import React, { Component } from 'react';
import Logo from '../../../assets/FinanceManagment/img/yourlogohere.png';


export default class Header extends Component {
    render() {
        return ( 
            <div class="header"> 
                <div class="header-left">
                    <a href="index.html" class="logo">
						<img src={Logo} alt="Logo"/>
					</a>
					<a href="index.html" class="logo logo-small">
						<img src={Logo} alt="Logo" width="30" height="30"/>
					</a>
				</div>
				<a href="javascript:void(0);" id="toggle_btn">
					<i className="fe fe-text-align-left" />
				</a>
				<div className="top-nav-search">
					<form>
						<input type="text" className="form-control" placeholder="Search here" />
						<button className="btn" type="submit">
							<i className="fa fa-search" />
						</button>
					</form>
				</div>
				<a className="mobile_btn" id="mobile_btn">
					<i className="fa fa-bars" />
				</a>
				<ul className="nav user-menu">
					<li className="nav-item dropdown noti-dropdown">
						<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
							<i className="fe fe-bell" /> <span className="badge badge-pill">3</span>
						</a>
						<div className="dropdown-menu notifications">
							<div className="topnav-dropdown-header">
								<span className="notification-title">Notifications</span>
								<a href="javascript:void(0)" className="clear-noti">
									{" "}
									Clear All{" "}
								</a>
							</div>
							<div className="noti-content">
								<ul className="notification-list">
									<li className="notification-message">
										<a href="#">
											<div class="media">
												<span class="avatar avatar-sm">
													<img class="avatar-img rounded-circle" alt="User Image" src="/assets/img/doctors/doctor-thumb-01.jpg" />
												</span>
												<div className="media-body">
													<p className="noti-details">
														<span className="noti-title">Dr. Ruby Perrin</span>{" "}
														Schedule{" "}
														<span className="noti-title">her appointment</span>
													</p>
													<p className="noti-time">
														<span className="notification-time">4 mins ago</span>
													</p>
												</div>
											</div>
										</a>
									</li>
									<li className="notification-message">
										<a href="#">
											<div class="media">
												<span class="avatar avatar-sm">
													<img class="avatar-img rounded-circle" alt="User Image" src="/assets/img/patients/patient1.jpg" />
												</span>
												<div className="media-body">
													<p className="noti-details">
														<span className="noti-title">Charlene Reed</span> has
														booked her appointment to{" "}
														<span className="noti-title">Dr. Ruby Perrin</span>
													</p>
													<p className="noti-time">
														<span className="notification-time">6 mins ago</span>
													</p>
												</div>
											</div>
										</a>
									</li>
									<li className="notification-message">
										<a href="#">
											<div class="media">
												<span class="avatar avatar-sm">
													<img class="avatar-img rounded-circle" alt="User Image" src="/assets/img/patients/patient2.jpg" />
												</span>
												<div className="media-body">
													<p className="noti-details">
														<span className="noti-title">Travis Trimble</span> sent a
														amount of $210 for his{" "}
														<span className="noti-title">appointment</span>
													</p>
													<p className="noti-time">
														<span className="notification-time">8 mins ago</span>
													</p>
												</div>
											</div>
										</a>
									</li>
									<li className="notification-message">
										<a href="#">
											<div class="media">
												<span class="avatar avatar-sm">
													<img class="avatar-img rounded-circle" alt="User Image" src="/assets/img/patients/patient3.jpg" />
												</span>
												<div className="media-body">
													<p className="noti-details">
														<span className="noti-title">Carl Kelly</span> send a
														message <span className="noti-title"> to his doctor</span>
													</p>
													<p className="noti-time">
														<span className="notification-time">12 mins ago</span>
													</p>
												</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
							<div className="topnav-dropdown-footer">
								<a href="#">View all Notifications</a>
							</div>
						</div>
					</li> 
					<li class="nav-item dropdown has-arrow">
						<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
							<span class="user-img"><img class="rounded-circle" src="/assets/img/profiles/avatar-01.jpg" width="31" alt="Ryan Taylor" /></span>
						</a>
						<div class="dropdown-menu">
							<div class="user-header">
								<div class="avatar avatar-sm">
									<img src="/assets/img/profiles/avatar-01.jpg" alt="User Image" class="avatar-img rounded-circle" />
								</div>
								<div className="user-text">
									<h6>Ryan Taylor</h6>
									<p className="text-muted mb-0">Administrator</p>
								</div>
							</div>
							<a className="dropdown-item" href="profile.html">
								My Profile
							</a>
							<a className="dropdown-item" href="settings.html">
								Settings
							</a>
							<a className="dropdown-item" href="login.html">
								Logout
							</a>
						</div>
					</li>
				</ul>
			</div>

		);
	}
}
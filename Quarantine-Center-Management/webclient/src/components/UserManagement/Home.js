import React, { useState, useEffect } from "react"
import axios from "axios";

export default function Home() {

    return (
        <div>
            <section class="section section-search-2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="assets/img/banner-1.png" class="img-fluid search-img" alt="" />
                        </div>
                        <div class="col-md-6 search-doctor">
                            <div class="search-area bg-white">
                                <h2 class="text-center">Welcome to Doccure!</h2>
                                <form class="search-input">
                                    <p>
                                        <p>
                                            Doccure is a quarantine center management system that prioritizes your health
                                            beyond others. Many issues arose inside quarantine centers due to lack of efficiency, lack
                                            of communication between departments inside the quarantine center, difficulties that
                                            arose due to manual database systems are some of them.
                                        </p>

                                        <p>
                                            This system was developed to overcome these issues and to make the tasks inside the quarantine center easier.
                                            This system has focused on the fact, how to make the system
                                            crystal clear for users. For that, there are user-friendly interfaces, eye-catching content,
                                            and colors.
                                        </p>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-specialities">
                <div class="container-fluid">
                    <div class="section-header text-center">
                        <h2>Clinic and Specialities</h2>
                        <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-9">

                            <div class="specialities-slider slider">

                                <div style={{ marginTop: '10px', marginLeft: "100px" }}>
                                    <div class="speicality-img">
                                        <img src="assets/img/specialities/specialities-01.png" class="img-fluid" alt="Speciality" />	<span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                    </div>
                                    <p style={{ marginLeft: "50px" }}>Urology</p>
                                </div>

                                <div style={{ marginTop: '-190px', marginLeft: "300px" }}>
                                    <div class="speicality-img">
                                        <img src="assets/img/specialities/specialities-02.png" class="img-fluid" alt="Speciality" />	<span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                    </div>
                                    <p style={{ marginLeft: "50px" }}>Neurology</p>
                                </div>

                                <div style={{ marginTop: '-190px', marginLeft: "500px" }}>
                                    <div class="speicality-img">
                                        <img src="assets/img/specialities/specialities-03.png" class="img-fluid" alt="Speciality" />	<span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                    </div>
                                    <p style={{ marginLeft: "50px" }}>Orthopedic</p>
                                </div>

                                <div style={{ marginTop: '-190px', marginLeft: "700px" }}>
                                    <div class="speicality-img">
                                        <img src="assets/img/specialities/specialities-04.png" class="img-fluid" alt="Speciality" />	<span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                    </div>
                                    <p style={{ marginLeft: "50px" }}>Cardiologist</p>
                                </div>

                                <div style={{ marginTop: '-190px', marginLeft: "900px" }}>
                                    <div class="speicality-img">
                                        <img src="assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality" />	<span><i class="fa fa-circle" aria-hidden="true"></i></span>
                                    </div>
                                    <p style={{ marginLeft: "50px" }}>Dentist</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-category">
                <div class="container">
                    <div class="section-header text-center">
                        <h2>Browse by Specialities</h2>
                        <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="category-box">
                                <div class="category-image">
                                    <img src="assets/img/category/1.png" alt="" />
                                </div>
                                <div class="category-content">
                                    <h4>Urology</h4>
                                    <span>21 Doctors</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="category-box">
                                <div class="category-image">
                                    <img src="assets/img/category/2.png" alt="" />
                                </div>
                                <div class="category-content">
                                    <h4>Neurology</h4>
                                    <span>18 Doctors</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="category-box">
                                <div class="category-image">
                                    <img src="assets/img/category/3.png" alt="" />
                                </div>
                                <div class="category-content">
                                    <h4>Orthopedic</h4>
                                    <span>17 Doctors</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="category-box">
                                <div class="category-image">
                                    <img src="assets/img/category/4.png" alt="" />
                                </div>
                                <div class="category-content">
                                    <h4>Cardiologist</h4>
                                    <span>12 Doctors</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="category-box">
                                <div class="category-image">
                                    <img src="assets/img/category/5.png" alt="" />
                                </div>
                                <div class="category-content">
                                    <h4>Dentist</h4>
                                    <span>07 Doctors</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="category-box">
                                <div class="category-image">
                                    <img src="assets/img/category/1.png" alt="" />
                                </div>
                                <div class="category-content">
                                    <h4>Urology</h4>
                                    <span>16 Doctors</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="category-box">
                                <div class="category-image">
                                    <img src="assets/img/category/4.png" alt="" />
                                </div>
                                <div class="category-content">
                                    <h4>Cardiologist</h4>
                                    <span>18 Doctors</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="category-box">
                                <div class="category-image">
                                    <img src="assets/img/category/3.png" alt="" />
                                </div>
                                <div class="category-content">
                                    <h4>Neurology</h4>
                                    <span>22 Doctors</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-features">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-5 features-img">
                            <img src="assets/img/features/feature.png" class="img-fluid" alt="Feature" />
                        </div>
                        <div class="col-md-7">
                            <div class="section-header">
                                <h2 class="mt-2">Availabe Features in Our Clinic</h2>
                                <p>Doccure provides you with the best features which will help to take care of your health</p>
                            </div>
                            <div class="features-slider slider">
                                <ul>
                                    <li>Patient Ward</li>
                                    <li>Test Room</li>
                                    <li>ICU</li>
                                    <li>Laboratory</li>
                                    <li>Operation</li>
                                    <li>Medical</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-blogs">
                <div class="container-fluid">

                    <div class="section-header text-center">
                        <h2>Blogs and News</h2>
                        <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div class="row blog-grid-row">
                        <div class="col-md-6 col-lg-3 col-sm-12">

                            <div class="blog grid-blog">
                                <div class="blog-image">
                                    <a href="blog-details.html">
                                        <img class="img-fluid" src="assets/img/blog/blog-01.jpg" alt="Post Image" />
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <a href="doctor-profile.html">
                                                    <img src="assets/img/doctors/doctor-thumb-01.jpg" alt="Post Author" /> <span>Dr.Ruby Perrin</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li><i class="far fa-clock"></i> 4 Dec 2019</li>
                                    </ul>
                                    <h3 class="blog-title"><a href="blog-details.html">Doccure – Making your clinic painless visit?</a></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 col-lg-3 col-sm-12">

                            <div class="blog grid-blog">
                                <div class="blog-image">
                                    <a href="blog-details.html">
                                        <img class="img-fluid" src="assets/img/blog/blog-02.jpg" alt="Post Image" />
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <a href="doctor-profile.html">
                                                    <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="Post Author" /> <span>Dr.Darren Elder</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li><i class="far fa-clock"></i> 3 Dec 2019</li>
                                    </ul>
                                    <h3 class="blog-title"><a href="blog-details.html">What are the benefits of Online Doctor Booking?</a></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 col-lg-3 col-sm-12">

                            <div class="blog grid-blog">
                                <div class="blog-image">
                                    <a href="blog-details.html">
                                        <img class="img-fluid" src="assets/img/blog/blog-03.jpg" alt="Post Image" />
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <a href="doctor-profile.html">
                                                    <img src="assets/img/doctors/doctor-thumb-03.jpg" alt="Post Author" /> <span>Dr.Deborah Angel</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li><i class="far fa-clock"></i> 3 Dec 2019</li>
                                    </ul>
                                    <h3 class="blog-title"><a href="blog-details.html">Benefits of consulting with an Online Doctor</a></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 col-lg-3 col-sm-12">

                            <div class="blog grid-blog">
                                <div class="blog-image">
                                    <a href="blog-details.html">
                                        <img class="img-fluid" src="assets/img/blog/blog-04.jpg" alt="Post Image" />
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <ul class="entry-meta meta-item">
                                        <li>
                                            <div class="post-author">
                                                <a href="doctor-profile.html">
                                                    <img src="assets/img/doctors/doctor-thumb-04.jpg" alt="Post Author" /> <span>Dr.Sofia Brient</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li><i class="far fa-clock"></i> 2 Dec 2019</li>
                                    </ul>
                                    <h3 class="blog-title"><a href="blog-details.html">5 Great reasons to use an Online Doctor</a></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="view-all text-center">	<a href="blog-list.html" class="btn btn-primary">View All</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
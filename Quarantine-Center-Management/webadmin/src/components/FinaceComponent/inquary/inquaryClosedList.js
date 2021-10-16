import React, { Component } from 'react';

const ClosedLIst = () => {
    return (
        <div>
            <div class="col-md-12 col-xl-12 col-sm-12">
                <div class="blog grid-blog">
                    <div class="blog-image">
                        {/* <a href="#"><img class="img-fluid" src="assets/img/blog/blog-01.jpg" alt="Post Image" /></a> */}
                    </div>
                    <div class="blog-content">
                        <ul class="entry-meta meta-item">
                            <li>
                                <div class="post-author">
                                    <a href="profile.html"><span>Dr. Ruby Perrin</span></a>
                                </div>
                            </li>
                            <li><i class="far fa-clock"></i> 4 Dec 2019</li>
                        </ul>
                        <h3 class="blog-title"><a href="#">Doccure – Making your clinic painless visit?</a></h3>
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div class="row pt-3">
                        <div class="col"><a href="edit-blog.html" class="text-success"><i class="far fa-edit"></i> Edit</a></div>

                        <div class="col text-right"><a href="javascript:void(0);" class="text-danger" data-toggle="modal" data-target="#deleteNotConfirmModal"><i class="far fa-trash-alt"></i> Inactive</a></div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default ClosedLIst;
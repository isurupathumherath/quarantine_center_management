import React, { Component } from 'react'; 
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

const Table = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    return (
        <div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Post Data Table</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table mb-0">
                                    <thead>
                                        <tr>
                                            <th>id</th> 
                                            <th>Title</th>
                                            <th>Message</th>
                                            <th>Creator</th>
                                            <th>CreatedAt</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {posts.map((post) => (
                                            <tr key={post._id}>
                                                <td>{post._id}</td>
                                                <td>{post.title}</td> 
                                                <td>{post.message}</td>
                                                <td>{post.creator}</td>
                                                <td>{post.createdAt}</td> 
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
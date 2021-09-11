import React from 'react';
import '../App.css';
import swal from 'sweetalert';
import axios from 'axios';

const initialState = {
    rooms: [],
}

class AllRooms extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        const url = "http://localhost:3500/room";
        axios.get(url)
        .then(response => this.setState({rooms:response['data']})
        )
    }

    render (){
        const { rooms } = this.state;
        return (
            <div class="container">
            <br/><br/>
            <div class="justify-content-center">
                    <h1>ALL Rooms</h1>
                    <hr/>
                    <div class="x_scroll">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="tableTh">Room Name</th>
                                <th class="tableTh">Room Type</th>
                                <th class="tableTh">Description</th>
                                <th class="tableTh">Image</th>
                                <th class="tableTh">Total</th>
                                <th class="tableTh">Edit</th>
                                <th class="tableTh">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                        {

                            rooms.map((res) =>

                            <tr>
                                <td class="tableTh">{ res.roomName }</td>
                                <td class="tableTh">{ res.roomType }</td>
                                <td class="tableTh">{ res.description }</td>
                                <td class="tableTh"><img width="100px" alt="" src={ "http://localhost:3500/"+res.image } class="img-thumbnail"/></td>
                                <td class="tableTh">{ res.total }</td>
                                <td class="tableTh"><button type='button' onClick={() => this.onChange(res.id)} class="btn btn-outline-success">Edit</button></td>
                                <td class="tableTh"><button type='button' onClick={() => this.onDelete(res.id)} class="btn btn-outline-danger">Delete</button></td>
                            </tr>
                        )
                        }
                        </tbody>
                    </table>
                    <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllRooms;

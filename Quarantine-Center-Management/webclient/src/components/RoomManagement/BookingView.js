import React from 'react';

import swal from 'sweetalert';
import axios from 'axios';

const initialState = {
    rooms: [],
    search: '',
}

class Booking extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange = e => {
        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
                ? e.target.checked
                : e.target.value
        });
    }
    
    componentDidMount() {
        const url = "http://localhost:8000/room/";
        axios.get(url)
        .then(response => this.setState({rooms:response['data']})
        )
        this.setState({patientid:"12345678"})
    }

    render (){
        const { rooms } = this.state;
        return (
            <div class="container">
            <br/><br/>
            <div class="justify-content-center">
                    <h1>SEARCH YOUR ROOM HERE!!!!</h1>
                    <hr/>
                    <div class="x_scroll">
                        <div class="form-group row">
                            <label class="col-1 col-form-label text-md-left font-weight-bold">Search</label>
                            <div class="col-md-4">
                            <input type="text" class="form-control" name="search" value={this.state.search} onChange={this.handleChange} />
                            </div>
                        </div>
                    <hr/>
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th class="tableTh">Room Name</th>
                                <th class="tableTh">Room Type</th>
                                <th class="tableTh">Description</th>
                                <th class="tableTh">Image</th>
                                <th class="tableTh">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            rooms.filter((data)=>{
                                if(this.state.search == null)
                                    return data
                                else if(data._id.toLowerCase().includes(this.state.search.toLowerCase()) || data.roomName.toLowerCase().includes(this.state.search.toLowerCase()) ||data.roomName.toLowerCase().includes(this.state.search.toLowerCase()) || data.roomType.toLowerCase().includes(this.state.search.toLowerCase()) || data.description.toLowerCase().includes(this.state.search.toLowerCase())){
                                    return data
                                }
                            }).map((res) =>

                            <tr>
                                <td class="tableTh">{ res.roomName }</td>
                                <td class="tableTh">{ res.roomType }</td>
                                <td class="tableTh">{ res.description }</td>
                                <td class="tableTh"><img width="100px" alt="" src={ "http://localhost:8000/"+res.image } class="img-thumbnail"/></td>
                                <td class="tableTh">{ res.total }</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Booking;

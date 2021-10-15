/*
    Created by - Vishara Prabuddhi
    On - 11/10/2021
    Name - Client Add Ticket
 */
import React, { Component } from 'react';
import axios from 'axios';

export default class addFormLanding extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //       tick: []
    //     };

    //   }


    //   componentDidMount() {
    //     this.retrieveSubjects();
    //   }


    // componentDidMount() {

    //     const id = this.props.match.params.id;

    //     axios.get(`/subjectclient/${id}`).then((res) => {
    //         if (res.data.success) {
    //             this.setState({
    //                 subjectId: res.data.subject.subjectId
    //             });

    //             console.log(this.state.subject);
    //         }
    //     });
    // }

    render() {
        return (
            <div className="container" style={{ marginTop: '60px' }} >
                <center>
                    <div className="container">
                        <div class="contact-info">
                            <img src="https://i.pinimg.com/originals/ea/7f/2d/ea7f2dd47969349da148ea0b4ec56815.gif" style={{ width: '500px' }} alt="image" />
                        </div>
                    </div>
                </center>
                <div style={{ textAlign: 'center' }}>
                    <br/>
                    <h2 className="form-label">Thank you, we have received your request.</h2>
                    <h3>Thank you for contacting us. One of our team will be in touch with you shortly.</h3>
                    {/* <h2 className="form-control" name="refID" value={this.state.refID} onChange={this.handleInputChange} /> */}
                    <br /><br /><br /><br /><br /><br />

                </div>
            </div>
        )
    }
}


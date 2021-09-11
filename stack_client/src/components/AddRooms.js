import React from 'react';
import '../App.css';
import swal from 'sweetalert';
import axios from 'axios';

const initialState = {
    id: "",
    roomName: "",
    roomNameError: "",
    roomType: "",
    roomTypeError: "",
    description: "",
    descriptionError: "",
    image: "",
    imageError: "",
    total: "",
    totalError: "",
    selectedFile: "",
    confirmButton: "Submit",
}

class AddRooms extends React.Component {

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

    onClear(){
        this.setState(initialState);
    }

    validation = () => {
        let roomNameError = "";
        let roomTypeError = "";
        let descriptionError = "";
        let imageError = "";
        let totalError = "";

        if(!this.state.roomNameError){
            roomNameError="Room Name Required!"
        }

        if(!this.state.roomTypeError){
            roomTypeError="Please Select Room Type!"
        }

        if(!this.state.descriptionError){
            descriptionError="Description Required!"
        }

        if(!this.state.imageError){
            imageError="Please Select Image!"
        }

        if(!this.state.totalError){
            totalError="Total Required!"
        }

        if(roomNameError | roomTypeError | descriptionError | imageError | totalError){
            
            this.setState({ roomNameError , roomTypeError , descriptionError , imageError , totalError });
            
            return false;

        }else{

            this.setState({ roomNameError , roomTypeError , descriptionError , imageError , totalError });
        
        }

        return true;
    }

    SubmitForm = async(e) => {
        e.preventDefault();
        const correctAll = this.validation();

        if(correctAll){
            console.log(this.state);
            const url = 'http://localhost:3500/room/';
            var data = JSON.stringify({ roomName: this.state.roomName , roomType: this.state.roomType , description: this.state.description , image: this.state.image , total: this.state.total });
            console.log(data);
            await axios.post(url,data,{
                headers: {'Content-Type': 'application/json'}
            })
            .then(res => {
                console.log(res.data);
                this.setState(initialState)
                swal("Success!", "Add Successful!", "success")
            })
        }
    }

    onChangeHandler=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        }, () => {
            const data = new FormData() 
            data.append('file', this.state.selectedFile)
            axios.post("http://localhost:3500/room/upload", data, { 
            }).then(res => { 
                this.setState({image:res.data.filename})
            })
        })
    }

    render (){
        return (
            <div class="container">
            <br/><br/>
            <div class="justify-content-center">
                    <h1>Add Room</h1>
                    <div class="x_scroll">
                    <hr/>
                        <form autoComplete="off" onSubmit={this.SubmitForm}>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Room Name</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="roomName" value={this.state.roomName} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.roomNameError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Room Type</label>
                            <div class="col-md-6">
                                <select class="form-control" name="roomType" onChange={this.handleChange} value={this.state.roomType}>
                                    <option value="">~select~</option>
                                    <option value="AC">AC</option>
                                    <option value="Non AC">Non AC</option>
                                </select>
                                <div style={{color : "red"}}>{this.state.roomTypeError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Description</label>
                            <div class="col-md-6">
                                <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.descriptionError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Image</label>
                            <div class="col-md-6">
                                <input type="file" class="form-control" name="file" onChange={this.onChangeHandler}/>
                                <div style={{color : "red"}}>{this.state.imageError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">Total</label>
                            <div class="col-md-6">
                                <input type="number" class="form-control" name="total" value={this.state.total} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.totalError}</div>
                            </div>
                        </div>

                        <br/>   
                        <div class="col-md-4 offset-md-4">
                            <input type="submit" class="btn btn-outline-primary" value={this.state.confirmButton} />
                            <input type="button" class="btn btn-outline-danger" value="Clear" onClick={() => this.onClear()} />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddRooms;

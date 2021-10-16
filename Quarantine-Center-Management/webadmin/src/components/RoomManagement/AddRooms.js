import React from 'react';
//import '../App.css';
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

    validation = async() => {

        let roomNameError = "";
        let roomTypeError = "";
        let descriptionError = "";
        let imageError = "";
        let totalError = "";

        if(!this.state.roomName){
            roomNameError="Room Name Required!"
        }

        if(!this.state.roomType){
            roomTypeError="Please Select Room Type!"
        }

        if(!this.state.description){
            descriptionError="Description Required!"
        }

        if(!this.state.image){
            imageError="Please Select Image!"
        }

        if(!this.state.total){
            totalError="Total Required!"
        }

        if(roomNameError | roomTypeError | descriptionError | imageError | totalError){
            
            await this.setState({ roomNameError , roomTypeError , descriptionError , imageError , totalError });
            
            return false;

        }else{

            await this.setState({ roomNameError , roomTypeError , descriptionError , imageError , totalError });
            
        }
        
        return true;

    }

    SubmitForm = async(e) => {
        e.preventDefault();
        this.validation();

        if((this.state.roomName&&this.state.roomType&&this.state.description&&this.state.image&&this.state.total)){
            console.log(this.state);
            const url = 'http://localhost:8000/room/';
            const data = JSON.stringify({ roomName: this.state.roomName , roomType: this.state.roomType , description: this.state.description , image: this.state.image , total: this.state.total });
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
            axios.post("http://localhost:8000/room/upload", data, { 
            }).then(res => { 
                this.setState({image:res.data.filename})
            })
        })
    }

    render (){
        return (
            <div class="container">
            <div className="col-lg-12">
            <br/><br/>
            <div class="justify-content-center">
                    
                    <div class="x_scroll">
                    

                    <div class="card">
  <div class="card-header bg-info"> 
  <h1 class="headingCenter">ADD YOUR ROOM HERE!!!</h1>
  </div>

  <div class="card-body">                
                        <form autoComplete="off" onSubmit={this.SubmitForm}>
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label text-md-left font-weight-bold">Room Name</label>
                            <div class="col-md-8">
                                <input type="text" pattern="[A-Za-z][A-Za-z ]{4,}" class="form-control" name="roomName" value={this.state.roomName} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.roomNameError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label text-md-left font-weight-bold">Room Type</label>
                            <div class="col-md-8">
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
                            <label class="col-md-2 col-form-label text-md-left font-weight-bold">Description</label>
                            <div class="col-md-8">
                                <input type="text" pattern="[A-Za-z][A-Za-z ]{4,}" class="form-control" name="description" value={this.state.description} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.descriptionError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label text-md-left font-weight-bold">Image</label>
                            <div class="col-md-8">
                                <input type="file" class="form-control" name="file" onChange={this.onChangeHandler}/>
                                <div style={{color : "red"}}>{this.state.imageError}</div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label text-md-left font-weight-bold">Total</label>
                            <div class="col-md-8">
                                <input type="number"min="1" class="form-control" name="total" value={this.state.total} onChange={this.handleChange} />
                                <div style={{color : "red"}}>{this.state.totalError}</div>
                            </div>
                        </div>

                        <br/>   
                        <div class="col-md-4 offset-md-4">
                            <input type="submit" class="btn btn-outline-primary" value="Submit" />
                            <input type="button" class="btn btn-outline-danger" value="Clear" onClick={() => this.onClear()} />
                        </div>
                    </form>
                    </div></div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default AddRooms;

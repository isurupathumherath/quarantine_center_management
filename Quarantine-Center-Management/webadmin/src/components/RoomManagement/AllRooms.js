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
    confirmButton: "Edit",
    rooms: [],
    search: '',
}

class AllRooms extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        const url = "http://localhost:8000/room";
        axios.get(url)
        .then(response => this.setState({rooms:response['data']})
        )
    }

    handleChange = e => {
        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
                ? e.target.checked
                : e.target.value
        });
    }

    onChange(id){
        const url = "http://localhost:8000/room/"+id;
        axios.get(url).then(response => this.setState({roomName:response['data']['roomName'],roomType:response['data']['roomType'],description:response['data']['description'],image:response['data']['image'],total:response['data']['total'],id:id}))
        this.setState({confirmButton:"EDIT"});
        const modal = document.querySelector(".modal")
        const closeBtn = document.querySelector(".close")
        modal.style.display = "block";
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        })
    }

    onClear(){
        this.setState(initialState);
        this.componentDidMount();
    }
    
    validation = () => {
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
            
            this.setState({ roomNameError , roomTypeError , descriptionError , imageError , totalError });
            
            return false;

        }else{

            this.setState({ roomNameError , roomTypeError , descriptionError , imageError , totalError });
        
        }

        return true;
    }

    SubmitForm = async(e) => {
        e.preventDefault();
        this.validation();
        if((this.state.roomName&&this.state.roomType&&this.state.description&&this.state.image&&this.state.total)){
            swal({
                title: "Are you sure?",
                text: "Edit this record!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                    if (willDelete) {
                    console.log(this.state);
                    const url = 'http://localhost:8000/room/'+this.state.id;
                    if(this.state.id){
                        var datas = JSON.stringify({ roomName: this.state.roomName , roomType: this.state.roomType , description: this.state.description , image: this.state.image , total: this.state.total });
                        console.log(datas);
                        axios.put(url,datas,{
                            headers: {'Content-Type': 'application/json'}
                        })
                        .then(res => {
                            console.log(res.data);
                            this.setState(initialState)
                            this.componentDidMount()
                            swal("Success!", "Edit Successful!", "success")
                            const modal = document.querySelector(".modal")
                            modal.style.display = "none"
                        })
                    }
                }
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
    
    onDelete(id){
        swal({
            title: "Are you sure?",
            text: "Delete this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url = 'http://localhost:8000/room/';
                axios.delete(url+id)
                .then(res =>{
                    swal("Delete Successful!", {
                        icon: "success",
                    })
                    this.componentDidMount()
                });
            }
          })
    }

    render (){
        const { rooms } = this.state;
        return (
            <div class="container">
            <div className="col-lg-12">
            <br/><br/>
            <div class="justify-content-center">
                    <div className="col-lg-9 mt-2 mb-2">
                        <h3>ALL ROOMS</h3>
                    </div>
                    
                    <div className="col-lg-3 mt-2 mb-2" style={{marginTop:'40px', marginLeft:'50px', marginRight:'40px'}}>
                        
                        <div class="form-group row">
                            
                            <label class="col-md-4 col-form-label text-md-right font-weight-bold">SEARCH</label>
                            <input type="text" class="form-control" name="search" value={this.state.search} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="x_scroll">
                    
                    <div class="table-responsive">
                    <table className="table table-striped" style={{marginTop:'40px', marginLeft:'60px', width:'95%'}}>
                  
                        <thead class="thead-dark">
                            <tr>
                                <th class="tableTh">Room Name</th>
                                <th class="tableTh">Room Type</th>
                                <th class="tableTh">Description</th>
                                <th class="tableTh">Image</th>
                                <th class="tableTh">Total</th>
                                <th class="tableTh">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            rooms.filter((data)=>{
                                if(this.state.search == null)
                                    return data
                                else if(data.roomName.toLowerCase().includes(this.state.search.toLowerCase()) || data.roomType.toLowerCase().includes(this.state.search.toLowerCase()) || data.description.toLowerCase().includes(this.state.search.toLowerCase())){
                                    return data
                                }
                            }).map((res) =>

                            <tr>
                                <td class="tableTh">{ res.roomName }</td>
                                <td class="tableTh">{ res.roomType }</td>
                                <td class="tableTh">{ res.description }</td>
                                <td class="tableTh"><img width="100px" alt="" src={ "http://localhost:8000/"+res.image } class="img-thumbnail"/></td>
                                <td class="tableTh">{ res.total }</td>
                                <td>
                                    <a className="btn btn-warning btn-sm" href="#" onClick={() => this.onChange(res._id)}>
                                    <i className="fas fa-edit"></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-danger btn-sm" href="#" onClick={() => this.onDelete(res._id)}>
                                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                                    </a>
                                </td>
                            </tr>
                        )
                        }
                        </tbody>
                    </table>
                    </div>
                    
                        <div class="modal">
                            <div class="modal_content center">
                            <div class="modal-header">
         <h5 class="modal-title">EDIT ROOM</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">×</span>
         </button>
      </div>
                                
                               
                                
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
                </div>
                </div>
            </div>
        );
    }
}

export default AllRooms;

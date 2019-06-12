import React, { Component } from 'react'

export default class DogRequestForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            bio:"",
            gender: "",
            size: ""
        }
    }
    handleInput = e => {
         this.setState({ [e.target.name]: e.target.value});
    }
    submitRequest = e =>{
        e.preventDefault();
        const message = {kennel_id: this.props.dog.kennel_id, dog_id: this.props.dog.id, ...this.state}
        // perform POST Request
        this.props.submitRequest(message)
    }
    render() {
        return (
            <>
            <h2 className="modal-header my-4 text-center">Add a Dog</h2>
            <form id="sub_form" className="w-full mx-auto flex">
                <div className="w-1/2">
                    <label className=" text-left px-10  block text-blue-900 text-sm font-semibold mb-2">Name:</label>
                    <input onChange={(e)=>this.handleInput(e)}className=" mx-10 w-3/4 rounded p-2 mb-6 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name"/>
                    <label className=" text-left px-10  block text-blue-900 text-sm font-semibold mb-2">Age:</label>
                    <input onChange={(e)=>this.handleInput(e)} className=" mx-10 w-3/4 rounded p-2 mb-6 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline" type="text" name="age"/>
                    <label className=" text-left px-10  block text-blue-900 text-sm font-semibold mb-2">Bio:</label>
                    <textarea onChange={(e)=>this.handleInput(e)} className=" mx-10 w-3/4 h-16 rounded p-2 mb-6 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline" form="sub_form" name="bio"/>
                </div>
                <div className="w-1/2">
                    <div>
                        <label className=" text-left px-10  block text-blue-900 text-sm font-semibold mb-2">Gender:</label>
                        <div className="flex my-1 items-baseline">
                            <input onChange={(e)=>this.handleInput(e)} className="ml-10 mr-6" type="radio" name="gender" value="male"/><label className="text-left block text-blue-900 text-md mb-2">Male</label> 
                        </div>
                        <div className="flex my-1 items-baseline">
                        <input onChange={(e)=>this.handleInput(e)} className=" ml-10 mr-6" type="radio" name="gender" value="female"/><label className="text-left block text-blue-900 text-md mb-2">Female</label> 
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col my-1">
                            <label className=" text-left px-10  block text-blue-900 text-sm font-semibold mb-2">Size:</label>
                            <div className="flex my-1 items-baseline">
                                <input onChange={(e)=>this.handleInput(e)} className=" ml-10 mr-6" type="radio" name="size" value="lg"/><label className="text-left block text-blue-900 text-md mb-2">Large</label> 
                            </div>
                            <div className="flex my-1 items-baseline">
                                <input onChange={(e)=>this.handleInput(e)} className=" ml-10 mr-6" type="radio" name="size" value="md"/><label className="text-left block text-blue-900 text-md mb-2">Medium</label>  
                            </div>
                            <div className="flex my-1 items-baseline">
                                <input onChange={(e)=>this.handleInput(e)} className=" ml-10 mr-6" type="radio" name="size" value="sm"/><label className="text-left block text-blue-900 text-md mb-2">Small</label> 
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <button onClick={(e)=>this.submitRequest(e)}className="modal-button">
                    Submit
            </button>
            </>
        )
    }
}

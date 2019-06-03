import React, { Component } from 'react'

export default class DogRequestForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            message:"",
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
            <form id="sub_form" className="right-modal mx-auto text-center">
                <h2 className="modal-header my-4 text-center">Come Meet {this.props.dog.name}!</h2>
                <label className=" text-left px-10  block text-blue-900 text-sm font-semibold mb-2">Name:</label>
                <input onChange={(e)=>this.handleInput(e)}className=" mx-10 w-3/4 rounded p-2 mb-6 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name"/>
                <label className=" text-left px-10  block text-blue-900 text-sm font-semibold mb-2">Email:</label>
                <input onChange={(e)=>this.handleInput(e)} className=" mx-10 w-3/4 rounded p-2 mb-6 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline" type="text" name="email"/>
                <label className=" text-left px-10  block text-blue-900 text-sm font-semibold mb-2">Message:</label>
                <textarea onChange={(e)=>this.handleInput(e)} className=" mx-10 w-3/4 h-16 rounded p-2 mb-6 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline" form="sub_form" name="message"/>
                <button onClick={(e)=>this.submitRequest(e)}className="modal-button">
                    Submit
                </button>
            </form>

        )
    }
}

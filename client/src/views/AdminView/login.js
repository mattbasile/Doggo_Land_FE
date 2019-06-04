import React, { Component } from 'react'
import LoginPage from '../../components/Admin/Login/Login'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            registerView: false,
            kennel_name: ""
        }
    }
   handleInput = e => {
        this.setState({ [e.target.name]: e.target.value});
   }
   toggleRegister =()=>{
    let view =this.state.registerView
    this.setState({registerView: !view})
   }
//    submitRequest = e =>{
//        e.preventDefault();
//        const message = {kennel_id: this.props.dog.kennel_id, dog_id: this.props.dog.id, ...this.state}
//        // perform POST Request
//        this.props.submitRequest(message)
//    }
    render() {
        return (
            <>
                <LoginPage 
                handleInput={this.handleInput}
                toggleRegister={this.toggleRegister}
                {...this.props}
                registerView={this.state.registerView}
                />
            </>
        )
    }
}

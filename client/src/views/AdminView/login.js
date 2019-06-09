import React, { Component } from 'react'
import LoginPage from '../../components/Admin/Login/Login'
import actions from "../../store/actions/index"
import { connect } from 'react-redux'

export class Login extends Component {
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
    this.setState({
        registerView: !view,
        username: "",
        password: "",
        kennel_name: ""
    })
   }
   handleLogin = (e)=>{
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        const user ={username,password}
        this.props.login(user)
    }
   handleRegister= (e)=>{
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        const kennel_name = this.state.kennel_name;
        const user ={username,password, kennel_name}
        this.props.register(user)
    }

    render() {
        return (
        <>
       {localStorage.getItem('authToken')? (
           this.props.history.push('/admin/dashboard')
       ):(
            <LoginPage 
            handleInput={this.handleInput}
            toggleRegister={this.toggleRegister}
            {...this.props}
            registerView={this.state.registerView}
            handleLogin={this.handleLogin}
            handleRegister={this.handleRegister}
            username={this.state.username}
            password={this.state.password}
            kennel_name={this.state.kennel_name}
            />
            )}
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch=> {
    return{
        login: (user)=>dispatch(actions.auth.login(user)),
        register: (user)=>dispatch(actions.auth.register(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)


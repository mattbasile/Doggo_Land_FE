import React from 'react'
import NavBar from './NavBar'
import Form from './Form'
import Footer from '../../Footer'

export default function Login(props) {
    return (
        <>
            <NavBar {...props}/>
            <Form 
            handleInput={props.handleInput}
            toggleRegister={props.toggleRegister}
            registerView={props.registerView}
            handleLogin={props.handleLogin}
            handleRegister={props.handleRegister}
            username={props.username}
            password={props.password}
            kennel_name={props.kennel_name}
            />
            <Footer/>
        </>
    )
}

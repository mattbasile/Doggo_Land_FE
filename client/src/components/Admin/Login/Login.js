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
            />
            <Footer/>
        </>
    )
}

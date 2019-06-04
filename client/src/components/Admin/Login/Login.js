import React from 'react'
import NavBar from './NavBar'
import Form from './Form'
import Footer from '../../Footer'

export default function Login(props) {
    return (
        <>
            <NavBar {...props}/>
            <Form/>
            <Footer/>
        </>
    )
}

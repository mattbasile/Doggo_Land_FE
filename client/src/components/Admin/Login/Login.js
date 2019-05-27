import React from 'react'
import NavBar from './NavBar'
import Form from './Form'


export default function Login(props) {
    return (
        <>
            <NavBar {...props}/>
            <Form/>
        </>
    )
}

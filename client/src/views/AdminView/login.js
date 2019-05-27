import React, { Component } from 'react'
import LoginPage from '../../components/Admin/Login/Login'

export default class Login extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                <LoginPage {...this.props}/>
            </>
        )
    }
}

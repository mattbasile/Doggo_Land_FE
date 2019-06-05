import React, { Component } from 'react'
import Dashboard from "../../components/Admin/Dashboard/Dashboard"


export default class AdminDashboard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Dashboard {...this.props}/>
            </div>
        )
    }
}

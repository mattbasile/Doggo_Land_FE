import React, { Component } from 'react'
import Dashboard from "../../components/Admin/Dashboard/Dashboard"
import actions from "../../store/actions/index"
import { connect } from 'react-redux'

class AdminDashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            user: props.user
        }
    }
    componentDidMount(){
        this.getLoggedInUser()
    }
    getLoggedInUser(){
    const loggedUser = JSON.parse(localStorage.getItem("user"));
      if(loggedUser){
          this.setState({user:loggedUser})
      }
      else{
        this.props.history.push('/')
      }
    }
    render() {
        return (
            <div>
            {!this.state.user ? <h1>Loading</h1>:
             <Dashboard user={this.state.user} {...this.props}/>
              }
               
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch=> {
    return{
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)


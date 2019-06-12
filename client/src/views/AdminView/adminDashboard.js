import React, { Component } from 'react'
import Dashboard from "../../components/Admin/Dashboard/Dashboard"
import actions from "../../store/actions/index"
import { connect } from 'react-redux'
import AddDogModal from '../../components/Admin/Dashboard/AddDogModal'
class AdminDashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            user: props.user,
            hidden: true
        }
    }
    closeModal = (e) =>{
        e.preventDefault()
        // this.props.clearState()
        this.setState({hidden:true})
    }
    showModal = (e) =>{
        e.preventDefault()
        // this.props.clearState()
        this.setState({hidden:false})
    }

    componentDidMount(){
        this.getLoggedInUser()
    }
    getLoggedInUser(){
    const loggedUser = JSON.parse(localStorage.getItem("user"));
      if(loggedUser){
          this.setState({user:loggedUser})
          this.props.getNotifications(loggedUser.kennel_id)
      }
      else{
        this.props.history.push('/')
      }
    }
    render() {
        return (
            <div>
            {!this.state.user ? <h1>Loading</h1>:
             (<Dashboard 
                showModal = {this.showModal}
                messages={this.props.messages}
                user={this.state.user}
                {...this.props}/>)
              }
                {this.state.hidden ? null :
                    <AddDogModal 
                    closeModal ={this.closeModal}
                    closeModal ={this.closeModal}
                    addDog={this.props.addDog}
                    user={this.state.user}
                    />
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    messages:state.auth.messages
})

const mapDispatchToProps = dispatch=> {
    return{
       getNotifications: (id) => dispatch(actions.admins.getNotifications(id)),
       addDog: (dog) => dispatch(actions.admins.addDog(dog)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)


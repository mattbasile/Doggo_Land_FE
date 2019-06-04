import React, { Component } from 'react';
import {Switch} from 'react-router'
import {Route, withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import './App.css';
import LandingPageView from './views/VisitorView/LandingPageView'
import LoginView from './views/AdminView/Login'
import AdminView from './views/AdminView/AdminDashboard'
import KennelView from './views/VisitorView/KennelView'
import DogView from './views/VisitorView/DogView'
import Footer from './components/Footer'
import actions from './store/actions/index'
import { getKennels, getDogs, createNotification} from './store/actions/vistorActions';
import DogCardModal from './components/Visitor/DogCardModal';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      hidden: true,
      requested: [],
    }
  }
  componentDidMount(){
    this.props.getDogs()
    this.props.getKennels()
 } 
 

 requestDog(e, id){
   e.preventDefault();
   console.log(this.props.dogs)
   const dog = this.props.dogs.find(dog=>dog.id ===id);
   this.setState({hidden: false, requested: dog})
 }
 submitRequest(message){
   console.log(message)
   this.props.createNotification(message)
 }
closeModal(e){
  e.preventDefault()
  this.props.clearState()
  this.setState({hidden:true})
}
  render() {
    return (
    <div className="App">
        {this.props.loading ? (<h2>Loading...</h2>):
      (
      <>
      <Switch>
        <Route exact path="/"  render={(props) => <LandingPageView hidden={this.state.hidden}{...props}  kennels={this.props.kennels} dogs={this.props.dogs} requestDog={this.requestDog.bind(this)}/>}/>
        <Route path="/login" component={LoginView} />
        <Route path="/admin/dashboard" component={AdminView} />

        <Route path="/kennels/:id"  render={(props) => <KennelView 
        {...props}  
        kennels={this.props.kennels} 
        dogs={this.props.dogs} 
        requestDog={this.requestDog}/>} />
        <Route path="/dogs/:id"  render={(props) => <DogView 
        {...props} 
        kennels={this.props.kennels} 
        dogs={this.props.dogs}/>} 
        requestDog={this.requestDog}/>
      </Switch>
      {this.state.hidden ? null :
        <DogCardModal 
        closeModal ={this.closeModal.bind(this)}
        clearState={this.props.clearState}
        kennels={this.props.kennels}
        dog={this.state.requested}
        submitting={this.props.submitting}
        submitted={this.props.submitted}
        submitRequest={this.submitRequest.bind(this)}/>
      }
      </>
      )}
    </div>
    )
  }
}
const mapStateToProps = (state)=>(
  {
      dogs: state.dogs,
      kennels: state.kennels,
      loading: state.loading,
      submitting: state.submitting,
      submitted: state.submitted,
  }
)
const mapDispatchToProps = dispatch => {
  return {
    getDogs: () => dispatch(actions.visitors.getDogs()),
    getKennels: () => dispatch(actions.visitors.getKennels()),
    clearState: () => dispatch(actions.visitors.clearState()),
    createNotification: (content) => dispatch(actions.visitors.createNotification(content))
  };
};


export default  withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
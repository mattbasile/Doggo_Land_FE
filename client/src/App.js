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
import { getKennels, getDogs } from './store/actions/vistorActions';

class App extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentDidMount(){
    this.props.getDogs()
    this.props.getKennels()
 } 

  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/"  render={(props) => <LandingPageView {...props}  kennels={this.props.kennels} dogs={this.props.dogs} />}/>
        <Route path="/login" component={LoginView} />
        <Route path="/admin/dashboard" component={AdminView} />

        <Route path="/kennels/:id"  render={(props) => <KennelView {...props}  kennels={this.props.kennels} dogs={this.props.dogs}/>} />
        <Route path="/dogs/:id"  render={(props) => <DogView {...props} kennels={this.props.kennels} dogs={this.props.dogs}/>} />
      </Switch>

      <Footer/>
    </div>
    )
  }
}
const mapStateToProps = (state)=>(
  {
      dogs: state.dogs,
      kennels: state.kennels
  }
)
const mapDispatchToProps = dispatch => {
  return {
    getDogs: () => dispatch(actions.visitors.getDogs()),
    getKennels: () => dispatch(actions.visitors.getKennels())
  };
};


export default  withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
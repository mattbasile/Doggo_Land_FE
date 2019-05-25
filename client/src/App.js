import React from 'react';
import {Route} from 'react-router'

import './App.css';
import LandingPageView from './views/VisitorView/LandingPageView'
import LoginView from './views/AdminView/Login'
import AdminView from './views/AdminView/AdminDashboard'
import KennelView from './views/VisitorView/KennelPage'
import DogView from './views/VisitorView/DogPage'

import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPageView} />
      <Route path="/login" component={LoginView} />
      <Route path="/admin/dashboard" component={AdminView} />
      <Route path="/kennels/:id" component={KennelView} />
      <Route path="/dogs/:id" component={DogView} />
      <Footer/>
    </div>
  );
}

export default App;

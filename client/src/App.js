import React from 'react';
import {Route} from 'react-router'

import './App.css';
import LandingPageView from './views/VisitorView/LandingPageView'
import LoginView from './views/AdminView/Login'
import AdminView from './views/AdminView/AdminDashboard'

import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPageView} />
      <Route path="/login" component={LoginView} />
      <Route path="/admin/dashboard" component={AdminView} />

      <Footer/>
    </div>
  );
}

export default App;

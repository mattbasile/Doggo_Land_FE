import React from 'react';
import './App.css';
import LandingPageView from './views/VisitorView/landingPageView'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <LandingPageView/>
      <Footer/>
    </div>
  );
}

export default App;

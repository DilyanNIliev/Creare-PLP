import React from 'react';
import './App.css';
import Navigation from './components/Layout/Navigation'
import Layout from './components/Layout/Layout';
import Footer from './components/Layout/Footer'
// import Footer from './components/Layout/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navigation />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;

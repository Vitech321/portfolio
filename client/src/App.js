import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes as Switch } 
from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import AccountBoard from './components/pages/AccountBoard';



function App() {
  return (
    <Router>
      
      <Navbar />

      <Switch>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/account' element={<AccountBoard />} />
      </Switch>
      
      <Footer />
      
    </Router>
  );
}

export default App;

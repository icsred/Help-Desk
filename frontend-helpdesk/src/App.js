import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import { getTickets } from './services/store-service';
import Navbar from './components/Nav';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
     <button onClick={getTicketsPage} >Crear</button>
     <Footer />
    </div>
  );
}

const getTicketsPage = () => {
  return getTickets();
}

export default App;

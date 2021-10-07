import './App.css';
import React, { useState, useEffect } from 'react';
import { getTickets } from './services/store-service';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Tickets from './components/tickets/Tickets';
import { Container } from 'react-bootstrap';

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setTickets(await getTickets());
  };

  return (
    <Container>
      <Navbar />
      <Tickets tickets={tickets} />
      <Footer />
    </Container>
  );
}

export default App;

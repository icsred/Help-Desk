import './App.scss';
import React, { useState, useEffect } from 'react';
import { getTickets } from './services/store-service';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Panel from './components/panel/Panel';
import { Container } from 'react-bootstrap';

function App() {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setTickets(await getTickets());
  };

  // Calcular el numero de total paginas
  const getPageNumber = () => Math.ceil(tickets.length / ticketsPerPage);

  // Calcular los tickets que deben haber en la pagina actual
  const getCurrentTickets = () => {
    const lastTicketIndex = currentPage * ticketsPerPage;
    const firstTicketIndex = lastTicketIndex - ticketsPerPage;
    const currentTickets = tickets.slice(firstTicketIndex, lastTicketIndex);
    return currentTickets;
  };

  return (
    <Container>
      <Navbar />
      <Panel
        tickets={getCurrentTickets()}
        currentPage={currentPage}
        pageNumber={getPageNumber()}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </Container>
  );
}

export default App;

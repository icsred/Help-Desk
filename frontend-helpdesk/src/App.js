import './App.scss';
import React, { useState, useEffect } from 'react';
import { getTickets } from './services/store-service';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Panel from './components/panel/Panel';
import Menu from './components/menu/Menu';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [tickets, setTickets] = useState({
    open: [],
    answered: [],
    expired: [],
    closed: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState('open');
  const [ticketsPerPage, setTicketsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => setTickets(groupTickets(await getTickets()));
    fetchData();
  }, []);

  // Agrupar tickets por estados
  const groupTickets = loadedTickets => {
    const groupedTickets = {
      open: [],
      answered: [],
      expired: [],
      closed: [],
    };
    loadedTickets.forEach(ticket => groupedTickets[ticket.status].push(ticket));
    return groupedTickets;
  };

  // Calcular el numero de total paginas
  const getPageNumber = () => Math.ceil(tickets[currentTab].length / ticketsPerPage);

  // Calcular los tickets que deben haber en la pagina actual
  const getTicketsByPage = () => {
    const lastTicketIndex = currentPage * ticketsPerPage;
    const firstTicketIndex = lastTicketIndex - ticketsPerPage;
    const currentTickets = tickets[currentTab].slice(firstTicketIndex, lastTicketIndex);
    return currentTickets;
  };

  return (
    //Se estructuran los datos con componentes HTML en formato React para visualizarlos en pantalla
    <div className="app">
      <Navbar />
      <Container>
        <Row>
          <Col lg={3}>
            <Menu
              tickets={tickets}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              setCurrentPage={setCurrentPage}
            />
          </Col>
          <Col lg={9}>
            <Panel
              tickets={getTicketsByPage()}
              currentPage={currentPage}
              pageNumber={getPageNumber()}
              setCurrentPage={setCurrentPage}
              ticketsPerPage={ticketsPerPage}
              setTicketsPerPage={setTicketsPerPage}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

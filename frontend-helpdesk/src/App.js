import './App.scss';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getTickets } from './services/store-service';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Panel from './components/panel/Panel';
import Menu from './components/menu/Menu';
import { Container, Row, Col } from 'react-bootstrap';

import Detalle from './components/detalle/Detalle';

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
  const [searchOption, setSearchOption] = useState('title');
  const [searchField, setSearchField] = useState('');

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

  // Filtrar tickets por búsqueda
  const getFilteredTickets = () => {
    return tickets[currentTab].filter(ticket => ticket[searchOption].toLowerCase().includes(searchField.toLowerCase()));
  };

  return (
    //Se estructuran los datos con componentes HTML en formato React para visualizarlos en pantalla
    <Router>
      <div className="app">
        <Navbar />

        <Switch>
          <Route path="/detalle">
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
                <Detalle />
              </Col>
            </Row>
            </Container>
          </Route>

          <Route path="/">
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
                  tickets={getFilteredTickets() || getTicketsByPage()}
                  currentPage={currentPage}
                  pageNumber={getPageNumber()}
                  setCurrentPage={setCurrentPage}
                  setTicketsPerPage={setTicketsPerPage}
                  setSearchOption={setSearchOption}
                  setSearchField={setSearchField}
                />
              </Col>
            </Row>
            </Container>
          </Route>
        </Switch>

        

        <Footer />
      </div>
    </Router>
  );
}

export default App;

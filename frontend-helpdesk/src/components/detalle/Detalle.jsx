import React from 'react';

import './detalle.scss'

import { Container, Card, Row, Col } from 'react-bootstrap';
import { BsJournalText } from 'react-icons/bs';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import tickets from '../../assets/data/tickets-de-prueba.json'
import { HistorialMsg } from '../historial-msg/HistorialMsg';


const ticket = tickets[0];

export const Detalle = () => {
  return (
    <Row >
      <Col > 
        <Breadcrumb>
          <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Ticket</Breadcrumb.Item>
        </Breadcrumb>
      <Card className="my-3 text-center ">
        <Card.Header className="panel">
          <h5 className="card-title titulo">{ticket.title} <BsJournalText /></h5>
        </Card.Header>
        <h6 class="card-subtitle mb-2 text-muted py-2">Ticket N°: {ticket.id}</h6>

        <Row>
          <Col>
            <div className="date">Fecha creación: {ticket.date}</div>
            <div className="status">Estado: {ticket.status}</div>
          </Col>
        </Row>

      </Card>

      <Row className="mt-3">
        <Col>
          <HistorialMsg msg={ticket.history}></HistorialMsg>
        </Col>
      </Row>

      <p className="lead">Detalle de ticket</p>
      <p className="lead">Ir pasando acá todo el HTML de visualTicket a React</p>
      </Col>
    </Row>
  );
};

export default Detalle;

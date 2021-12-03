import React from 'react';

import { Card, Row, Col } from 'react-bootstrap';
import { BsJournalText } from 'react-icons/bs'


const Detalle = () => {
  return (
    <Row >
      <Col >
      <Card className="panel my-3 text-center">
        <Card.Header className="panel">
          <h5 className="card-title">Asunto ticket <BsJournalText /></h5>
        </Card.Header>
        
        <h6 class="card-subtitle mb-2 text-muted py-2">Ticket N° XXXXXX</h6>


      </Card>
      <p className="lead">Detalle de ticket</p>
      <p className="lead">Ir pasando acá todo el HTML de visualTicket a React</p>
      </Col>
    </Row>
  );
};

export default Detalle;

import React from 'react';

import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="navbar fixed-bottom bg-danger text-white justify-content-center">
      <Row>
        <Col>
          <p className="lead">2021 - Todos los derechos reservados &copy;</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

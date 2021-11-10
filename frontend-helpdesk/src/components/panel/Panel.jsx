import React from 'react';
import Tickets from '../tickets/Tickets';
import Pagination from '../pagination/Pagination';
import { Card, Row, Col } from 'react-bootstrap';
import { BsQuestionCircleFill } from 'react-icons/bs';
import './panel.scss';
import Dropdown from '../dropdown/Dropdown';

const Panel = ({ tickets, currentPage, pageNumber, setCurrentPage, setTicketsPerPage }) => {
  const ticketOptions = [
    { content: 5, value: 5 },
    { content: 10, value: 10 },
    { content: 20, value: 20 },
    { content: 50, value: 50 },
    { content: 100, value: 100 },
  ];

  const changeTicketsPerPage = value => {
    setCurrentPage(1);
    setTicketsPerPage(+value);
  };

  return (
    <Card className="panel my-3">
      <Card.Header className="py-3">
        <h4 className="text-center m-0 d-flex justify-content-center align-items-center gap-2">
          <BsQuestionCircleFill /> Panel de tickets
        </h4>
      </Card.Header>
      <Card.Body className="pb-3">
        <Row className="actions mb-3">
          <Col md={10}></Col>
          <Col md={2}>
            <Dropdown options={ticketOptions} onChange={changeTicketsPerPage} />
          </Col>
        </Row>
        <Tickets tickets={tickets} />
      </Card.Body>
      <Card.Footer>
        <Pagination currentPage={currentPage} pageNumber={pageNumber} setCurrentPage={setCurrentPage} />
      </Card.Footer>
    </Card>
  );
};

export default Panel;

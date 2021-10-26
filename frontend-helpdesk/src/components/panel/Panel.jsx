import React from 'react';
import Tickets from '../tickets/Tickets';
import Pagination from '../pagination/Pagination';
import { Card } from 'react-bootstrap';
import { BsQuestionCircleFill } from 'react-icons/bs';
import './panel.scss'


const Panel = ({ tickets, currentPage, pageNumber, setCurrentPage }) => {
  return (
    <Card className="panel my-3">
      <Card.Header className="py-3">
        <h4 className="text-center m-0 d-flex justify-content-center align-items-center gap-2">
          <BsQuestionCircleFill /> Panel de tickets
        </h4>
      </Card.Header>
      <Card.Body className="pb-3">
        <Tickets tickets={tickets} />
      </Card.Body>
      <Card.Footer>
        <Pagination currentPage={currentPage} pageNumber={pageNumber} setCurrentPage={setCurrentPage} />
      </Card.Footer>
    </Card>
  );
};

export default Panel;

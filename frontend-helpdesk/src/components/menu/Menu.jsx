import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import MenuTab from '../menu-tab/MenuTab';

const Menu = ({ tickets, ...restProps }) => {
  return (
    <Card className="my-3">
      <Card.Header className="py-3">
        <h4 className="text-center m-0 d-flex justify-content-center align-items-center gap-2">
          <FaBars />
          Menú principal
        </h4>
      </Card.Header>
      <Card.Body className="pb-3">
        <ListGroup as="ul">
          <MenuTab {...restProps} ticketNumber={tickets.open.length} tabId={'open'}>
            Abierto
          </MenuTab>
          <MenuTab {...restProps} ticketNumber={tickets.answered.length} tabId={'answered'}>
            Respondió
          </MenuTab>
          <MenuTab {...restProps} ticketNumber={tickets.expired.length} tabId={'expired'}>
            Vencido
          </MenuTab>
          <MenuTab {...restProps} ticketNumber={tickets.closed.length} tabId={'closed'}>
            Cerrado
          </MenuTab>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Menu;

import React from 'react';
import './menuTab.scss';
import { ListGroup, Badge } from 'react-bootstrap';

const MenuItem = ({ children, ticketNumber, tabId, currentTab, setCurrentTab, setCurrentPage }) => {
  const handleClick = () => {
    setCurrentTab(tabId);
    setCurrentPage(1);
  };

  return (
    <ListGroup.Item
      onClick={handleClick}
      active={currentTab === tabId ? true : false}
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">{children}</div>
      <Badge bg="danger" pill>
        {ticketNumber}
      </Badge>
    </ListGroup.Item>
  );
};

export default MenuItem;

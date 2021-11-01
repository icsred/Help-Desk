import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';

const CustomNavbar = () => {
  return (
    <Navbar className="px-5" bg="danger" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Help Desk</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Panel del agente</Nav.Link>
          <NavDropdown
            title={
              <span>
                <FaUserAlt className="mx-1" />
                Bienvenido
              </span>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">
            <FaSignOutAlt className="mx-1" /> Salir
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

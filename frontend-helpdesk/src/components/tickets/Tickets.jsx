import React from 'react';

import { Table, Button } from 'react-bootstrap';

const Tickets = ({ tickets }) => {
  return (
    <Table className="text-center m-0" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Título</th>
          <th>Dia</th>
          <th>Descripción</th>
          <th>Creador</th>
          <th>Prioridad</th>
          <th>Asignado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map(ticket => (
          <tr key={ticket.number}>
            <td>{ticket.number}</td>
            <td>{ticket.title}</td>
            <td>{ticket.date}</td>
            <td>{ticket.description}</td>
            <td>{ticket.creator}</td>
            <td>{ticket.priority}</td>
            <td>{ticket.assignedTo}</td>
            <td>
              <Button variant="danger">Borrar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tickets;

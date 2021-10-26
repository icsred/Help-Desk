import React, { useState, useEffect } from 'react';
import {useTable, useSortBy} from 'react-table'; //npm install react-table
import moment from 'moment';
import './tickets.scss';

import { Table, Button } from 'react-bootstrap';


const Tickets = ({ tickets }) => {
  return (

    <Table data= {Tickets} id="tickets" className="sortable text-center m-0 rounded-top" striped bordered hover>
      <thead>
        <tr >
          <th>#</th>
          <th>#</th>
          <th>Fecha</th>
          <th>Título</th>
          <th>Asunto</th>
          <th>Creador</th>
          <th>Prioridad</th>
          <th>Asignado</th>
        </tr>


      </thead>
      <tbody >
        {tickets.map(ticket => (
          <tr key={ticket.number}>
            <td><input type="checkbox"></input></td>
            <td>{ticket.number}</td>
            <td>{moment(ticket.date).format('DD/MM/YYYY hh:mm a')}</td>
            <td>{ticket.title}</td>
            <td>{ticket.issue}</td>
            <td>{ticket.creator}</td>
            <td>{ticket.priority}</td>
            <td>{ticket.assignedTo}</td>
          </tr>
        ))}
      </tbody>

    </Table>
    
  );
  
};

export default Tickets;

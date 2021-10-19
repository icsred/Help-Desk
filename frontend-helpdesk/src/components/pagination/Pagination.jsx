import React from 'react';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({ pageNumber, currentPage, setCurrentPage }) => {
  const pagesList = [];

  // Crear lista con el numero de paginas para generar la paginacion
  for (let i = 1; i <= pageNumber; i++) {
    pagesList.push(i);
  }

  return (
    <Pagination className="justify-content-center m-0">
      <Pagination.First onClick={() => setCurrentPage(1)} />
      {pagesList.map(page => (
        <Pagination.Item
          key={page}
          className={currentPage === page ? 'active' : ''}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Last onClick={() => setCurrentPage(pageNumber)} />
    </Pagination>
  );
};

export default CustomPagination;

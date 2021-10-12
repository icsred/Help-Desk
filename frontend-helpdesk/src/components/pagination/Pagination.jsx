import React from 'react';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({ pageNumber, currentPage, setCurrentPage }) => {
  const pagesArr = [];

  for (let i = 1; i <= pageNumber; i++) {
    pagesArr.push(i);
  }

  return (
    <Pagination className="justify-content-center m-0">
      <Pagination.First onClick={() => setCurrentPage(1)} />
      {pagesArr.map(page => (
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

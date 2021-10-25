import React from 'react';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({ pageNumber, currentPage, setCurrentPage }) => {
  const pagesList = [];

  /*
    Lógica principal para crear una lista que representará el modelo para generar la páginas.
    Cada número en la lista representa el número de la página a excepción del cero que
    representa los puntos suspensivos.

    Si el número total de páginas es menor que 10 se renderizarán todas las páginas,
    en caso contrario se renderizará la paginación con puntos.
  */
  if (pageNumber < 10) {
    for (let i = 1; i <= pageNumber; i++) {
      pagesList.push(i);
    }
  } else {
    // Renderizar siempre la primera página
    pagesList.push(1);

    if (currentPage > 3) {
      // Renderizar los puntos si la página seleccionada es mayor que tres
      pagesList.push(0);

      if (currentPage > pageNumber - 3) {
        // Renderizar las tres últimas páginas si la página seleccionada es cualquiera de las tres últimas
        pagesList.push(pageNumber - 3);
        pagesList.push(pageNumber - 2);
        pagesList.push(pageNumber - 1);
      } else {
        // En caso contrario, renderizar la página seleccionada, la anterior, la siguiente y los puntos
        pagesList.push(currentPage - 1);
        pagesList.push(currentPage);
        pagesList.push(currentPage + 1);
        pagesList.push(0);
      }
    } else {
      // En caso contrario, renderizar las cuatro primeras páginas y los puntos
      pagesList.push(2);
      pagesList.push(3);
      pagesList.push(4);
      pagesList.push(0);
    }
    // Renderizar siempre la última página
    pagesList.push(pageNumber);
  }

  const previousPage = () => (currentPage > 1 ? setCurrentPage(currentPage - 1) : null);

  const nextPage = () => (currentPage < pageNumber ? setCurrentPage(currentPage + 1) : null);

  return (
    <Pagination className="justify-content-center m-0">
      <Pagination.First onClick={previousPage} />
      {pagesList.map((page, index) =>
        page !== 0 ? (
          <Pagination.Item
            key={index}
            className={currentPage === page ? 'active' : ''}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Pagination.Item>
        ) : (
          <Pagination.Ellipsis key={index} />
        )
      )}
      <Pagination.Last onClick={nextPage} />
    </Pagination>
  );
};

export default CustomPagination;

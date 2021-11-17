import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Dropdown from '../dropdown/Dropdown';

const SearchBar = ({ placeholder, setSearchOption, setSearchField }) => {
  // Opciones que tendrá el dropdown de búsqueda
  const searchOptions = [
    { content: 'Fecha', value: 'date' },
    { content: 'Títutlo', value: 'title' },
    { content: 'Creador', value: 'creator' },
    { content: 'Prioridad', value: 'priority' },
    { content: 'Asignado', value: 'assignedto' },
  ];

  const changeSearchOption = option => setSearchOption(option);

  const handleInputChange = event => setSearchField(event.target.value);

  return (
    <Row className="searchbar">
      <Col md={9}>
        <Form.Control onChange={handleInputChange} type="text" placeholder={placeholder} />
      </Col>
      <Col md={3}>
        <Dropdown changeHandler={changeSearchOption} options={searchOptions} />
      </Col>
    </Row>
  );
};

export default SearchBar;

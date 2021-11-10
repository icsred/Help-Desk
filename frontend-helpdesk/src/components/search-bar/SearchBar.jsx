import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ placeholder }) => {
  return <Form.Control type="text" placeholder={placeholder} />;
};

export default SearchBar;

import React from 'react';
import { FormSelect } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Dropdown = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  useEffect(() => onChange(selectedOption), [onChange, selectedOption]);

  return (
    <FormSelect
      className="text-center"
      value={selectedOption}
      onChange={event => setSelectedOption(event.target.value)}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.content}
        </option>
      ))}
    </FormSelect>
  );
};

export default Dropdown;

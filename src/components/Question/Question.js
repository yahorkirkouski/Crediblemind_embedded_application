import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
  TextField,
} from '@mui/material';
import { useStore } from "../../store";

export const Question = ({ question, onChange, value }) => {
  const { type, title, choices, labelTrue, labelFalse, isRequired, name } = question;
  const { state } = useStore();

  const handleInputChange = (type) => (event) => {
    const { name, value, checked } = event.target;
    if (type === 'checkbox') {
      let updatedValue = state[name]?.value ? [...state[name].value] : [];
      if (checked) {
        updatedValue.push(value);
      } else {
        updatedValue = updatedValue.filter((item) => item !== value);
      }
      onChange(name, updatedValue, type);
    } else {
      onChange(name, value, type);
    }
  };

  return (
    <FormControl component="fieldset" fullWidth margin="normal" required={isRequired}>
      {type !== 'text' && <FormLabel component="legend">{title}</FormLabel>}
      {type === 'radiogroup' && (
        <RadioGroup name={name} value={value} onChange={handleInputChange('radiogroup')}>
          {choices.map((choice, index) => (
            <FormControlLabel key={index} value={choice} control={<Radio />} label={choice} />
          ))}
        </RadioGroup>
      )}
      {type === 'checkbox' && (
        <FormGroup>
          {choices.map((choice, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  name={name}
                  checked={value.includes(choice)}
                  onChange={handleInputChange('checkbox')}
                  value={choice}
                />
              }
              label={choice}
            />
          ))}
        </FormGroup>
      )}
      {type === 'text' && (
        <TextField
          label={title}
          name={name}
          multiline
          fullWidth
          margin="normal"
          variant="outlined"
          value={value}
          onChange={handleInputChange('text')}
        />
      )}
      {type === 'boolean' && (
        <RadioGroup row name={name} value={value} onChange={handleInputChange('boolean')}>
          <FormControlLabel value="true" control={<Radio />} label={labelTrue} />
          <FormControlLabel value="false" control={<Radio />} label={labelFalse} />
        </RadioGroup>
      )}
    </FormControl>
  );
};

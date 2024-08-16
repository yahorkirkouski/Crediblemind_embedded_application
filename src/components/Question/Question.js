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
  Typography,
} from '@mui/material';
import { useStore } from "../../store";
import { QUESTION_TYPES } from '../../constants';

export const Question = ({ question, onChange, value, pageNumber, questionNumber, error }) => {
  const { type, title, choices, labelTrue, labelFalse, isRequired, name } = question;
  const { state } = useStore();
  const questionTitle = `${pageNumber}.${questionNumber} ${title}`;

  const handleInputChange = (type) => (event) => {
    const { name, value, checked } = event.target;
    if (type === QUESTION_TYPES.checkbox) {
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

  const renderErrorMessage = () => {
    if (error) {
      return (
        <Typography color="error" role="alert" aria-live="assertive">
          {error}
        </Typography>
      );
    }
    return null;
  };

  return (
    <FormControl
      component="fieldset"
      fullWidth
      margin="normal"
      required={isRequired}
      error={!!error}
    >
      <FormLabel component="legend">{questionTitle}</FormLabel>
      {type === QUESTION_TYPES.radioGroup && (
        <RadioGroup
          name={name}
          value={value}
          onChange={handleInputChange(type)}
          aria-describedby={error ? `${name}-error` : undefined}
        >
          {choices.map((choice, index) => (
            <FormControlLabel
              key={index}
              value={choice}
              control={<Radio />}
              label={choice}
            />
          ))}
        </RadioGroup>
      )}
      {type === QUESTION_TYPES.checkbox && (
        <FormGroup>
          {choices.map((choice, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  name={name}
                  checked={value.includes(choice)}
                  onChange={handleInputChange(type)}
                  value={choice}
                />
              }
              label={choice}
            />
          ))}
        </FormGroup>
      )}
      {type === QUESTION_TYPES.text && (
        <TextField
          name={name}
          multiline
          fullWidth
          margin="normal"
          variant="outlined"
          value={value}
          onChange={handleInputChange(type)}
          error={!!error}
          helperText={error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}
      {type === QUESTION_TYPES.boolean && (
        <RadioGroup
          row
          name={name}
          value={value}
          onChange={handleInputChange(type)}
          aria-describedby={error ? `${name}-error` : undefined}
        >
          <FormControlLabel value="true" control={<Radio />} label={labelTrue} />
          <FormControlLabel value="false" control={<Radio />} label={labelFalse} />
        </RadioGroup>
      )}
      {renderErrorMessage()}
    </FormControl>
  );
};

import { Typography } from '@mui/material';
import React from 'react';

export const ErrorMessage = ({ error }) => {
  if (error) {
    return (
      <Typography color="error" role="alert" aria-live="assertive">
        {error}
      </Typography>
    );
  }
  return null;
};

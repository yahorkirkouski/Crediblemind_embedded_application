import { MOCK_DATA } from './mock';
import React, { useState } from 'react';
import {
  Box,
} from '@mui/material';
import './index.css'

import { StoreProvider } from './store';

import { Results, Assessment, Introduction } from "./components";


export const App = ({data, showProgressBar}) => {
  const formattedData = data ? JSON.parse(data)[0] : MOCK_DATA[0];
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <StoreProvider>
      <Box p={4}>
        {!isSubmitted ? (
          <>
            <Introduction intro={formattedData.intro} />
            <Assessment questions={formattedData.questions} onSubmit={handleFormSubmit} />
          </>
        ) : (
          <Results resultsIntro={formattedData.resultsIntro} />
        )}
      </Box>
    </StoreProvider>
  );
};


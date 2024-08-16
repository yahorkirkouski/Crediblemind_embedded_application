import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Results, Assessment, Introduction } from './components';

import { CacheProvider } from '@emotion/react';
import { StoreProvider } from './store';
import { getStylesCache, isStringJson } from './utils';
import './index.css'

export const App = ({data, bar = 'shown'}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const event = new CustomEvent('onMount', {
      detail: { message: 'Mount Successfully' }
    });
    document.dispatchEvent(event);

    return () => {
      const event = new CustomEvent('unMount', {
        detail: { message: 'Component Unmounted' }
      });
      document.dispatchEvent(event);
    };
  }, [])

  if (!isStringJson(data)) {
    return <p>Data invalid!</p>
  }

  const formattedData = JSON.parse(data)[0];

  const stylesCache = getStylesCache();

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <StoreProvider>
      <CacheProvider value={stylesCache}>
        <Box p={4}>
          {!isSubmitted ? (
            <>
              <Introduction intro={formattedData.intro} />
              <Assessment questions={formattedData.questions} onSubmit={handleFormSubmit} showProgressBar={bar === "shown"} />
            </>
          ) : (
            <Results resultsIntro={formattedData.resultsIntro} />
          )}
        </Box>
      </CacheProvider >
    </StoreProvider>
  );
};


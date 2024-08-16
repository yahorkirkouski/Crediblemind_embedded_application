import React from 'react';

import {
  Box,
  Typography,
} from '@mui/material';

import { Recommendations } from '../Recommendations';

export const Results = ({ resultsIntro }) => {
  const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.nodeType) {
        case 'paragraph':
          return (
            <Typography variant="body1" paragraph key={index}>
              {block.content[0].value}
            </Typography>
          );
        default:
          return null;
      }
    });
  };

  return <Box>{renderContent(resultsIntro.json.content)}<Recommendations /></Box>;
};

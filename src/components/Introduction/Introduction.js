import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

import { useStyles } from './Introduction.styles';

export const Introduction = ({ intro }) => {
  const styles = useStyles();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.nodeType) {
        case 'heading-1':
          return <Typography fontSize={42} mb={1} fontWeight="bold" variant="h1" key={index}>{block.content[0].value}</Typography>;
        case 'paragraph': {
          const fullText = block.content[0].value;
          const truncatedText = fullText.length > 100 ? fullText.substring(0, 100) + '...' : fullText;

          return (
            <Typography key={index} paragraph>
              {isExpanded ? fullText : truncatedText}
              {fullText.length > 100 && (
                <Button
                  onClick={toggleReadMore}
                  className={styles.button}
                  variant="text"
                  color="primary"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </Button>
              )}
            </Typography>
          );
        }
        default:
          return null;
      }
    });
  };

  return <div>{renderContent(intro.json.content)}</div>;
};

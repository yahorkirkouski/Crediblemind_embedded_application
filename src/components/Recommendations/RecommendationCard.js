import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import LazyLoad from 'react-lazy-load';

export const RecommendationCard = ({ resource }) => {
  const { title, author, type, description, imageUrl } = resource;
  const [noImage, setNoImage] = useState(false);

  const handleNoImage = () => {
    setNoImage(true)
  }

  return (
    <Card sx={{height: '100%'}}>
      <LazyLoad height={200} offset={100}>
        {noImage ? <Box height={200} display="flex" justifyContent="center" alignItems="center">
            <Typography>No Image</Typography>
          </Box> :
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={title}
            onError={handleNoImage}
          />
        }
      </LazyLoad>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

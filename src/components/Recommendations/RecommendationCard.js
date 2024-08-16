import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import LazyLoad from 'react-lazy-load';

export const RecommendationCard = ({ resource }) => {
  const { title, author, type, description, imageUrl } = resource;

  return (
    <Card>
      <LazyLoad height={200} offset={100}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl || '/assets/fallbackImage.jpg'}
          alt={title}
          onError={(e) => { e.target.src = '/assets/fallbackImage.jpg'; }} // Fallback image
        />
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

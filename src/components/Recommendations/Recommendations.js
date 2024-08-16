import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { RecommendationCard } from './RecommendationCard';
import { useStore } from '../../store';
import { fetchRecommendations } from '../../services';
import { formatUserAnswersToFacetFilters } from '../../utils';

export const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const { state } = useStore(); // Access state

  useEffect(() => {
    const facetFilters = formatUserAnswersToFacetFilters(state);

    // Only fetch recommendations if all necessary answers are available
    if (facetFilters.length) {
      fetchRecommendations(facetFilters)
        .then(({ hits }) => {
          setRecommendations(hits);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [state]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Recommended Resources:
      </Typography>
      <Grid container spacing={3}>
        {recommendations?.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RecommendationCard resource={resource} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

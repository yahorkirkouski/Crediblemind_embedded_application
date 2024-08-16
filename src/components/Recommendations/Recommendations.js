import React, { useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { RecommendationCard } from './RecommendationCard';
import { useStore } from '../../store';
import { useFetchRecommendations } from '../../hooks';
import { formatUserAnswersToFacetFilters } from '../../utils';
import { RecommendationCardSkeleton } from "./RecommendationCardSkeleton";

export const Recommendations = () => {
  const {state} = useStore();
  const facetFilters = formatUserAnswersToFacetFilters(state);
  const { recommendations, loading, error, fetchRecommendations } = useFetchRecommendations(facetFilters);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  if (error) return <Box>Error loading recommendations: {error.message}</Box>;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Recommended Resources:
      </Typography>
      <Grid container spacing={2}>
        {loading && ( Array.from(new Array(4)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RecommendationCardSkeleton />
          </Grid>
        )))}
        {Boolean(recommendations && recommendations.length) && recommendations.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RecommendationCard resource={resource}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

import React, { useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { RecommendationCard } from './RecommendationCard';
import { useStore } from '../../store';
import { useFetchRecommendations } from '../../hooks';
import { formatAnswersToFacetFilters } from '../../utils';
import { RecommendationCardSkeleton } from './RecommendationCardSkeleton';

export const Recommendations = () => {
  const { state } = useStore();
  const facetFilters = formatAnswersToFacetFilters(state);
  const { recommendations, loading, error, fetchRecommendations } = useFetchRecommendations(facetFilters);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  if (error) return <Box>Error : {error.message}</Box>;

  return (
    <Box>
      <Typography variant="h4" mb={4} gutterBottom>
        Recommended Resources:
      </Typography>
      <Grid container spacing={2}>
        {loading && (Array.from(new Array(4)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RecommendationCardSkeleton />
          </Grid>
        )))}
        {Boolean(recommendations && recommendations.length) && recommendations.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RecommendationCard resource={resource}/>
          </Grid>
        ))}
        {Boolean(!loading && recommendations && !recommendations.length) && (<Grid item xs={12} sm={6} md={4}>
            <RecommendationCard resource={{title: 'No Hints'}}/>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

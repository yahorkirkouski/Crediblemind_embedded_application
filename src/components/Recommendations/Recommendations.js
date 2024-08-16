import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { RecommendationCard } from './RecommendationCard';
import { useStore } from '../../store';
import { fetchRecommendations } from '../../services';
import { formatUserAnswersToFacetFilters } from '../../utils';

export const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const {state} = useStore();

  useEffect(() => {
    const facetFilters = formatUserAnswersToFacetFilters(state);

    if (facetFilters.length) {
      fetchRecommendations(facetFilters)
        .then(({hits}) => {
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
        {Boolean(recommendations && recommendations.length) ? recommendations.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RecommendationCard resource={resource}/>
          </Grid>
        )) : <Grid item xs={12} sm={6} md={4}>
          <RecommendationCard resource={{title: 'No cards'}}/>
        </Grid>
        }
      </Grid>
    </div>
  );
}

import { useState } from 'react';

import liteClient from 'algoliasearch/lite';

const searchClient = liteClient(
  '4WK61QBPDU',
  'a3a8a3edba3b7ba9dad65b2984b91e69'
);
const index = searchClient.initIndex('algolia-recommendation-data');

export const useFetchRecommendations = (facetFilters) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecommendations = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await index.search('', { facetFilters: [facetFilters] });
      setRecommendations(response.hits);
    } catch (error) {
      console.error('Error:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { recommendations, loading, error, fetchRecommendations };
};

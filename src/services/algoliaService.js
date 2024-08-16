import liteClient from 'algoliasearch/lite';

const searchClient = liteClient(
  '4WK61QBPDU',
  'a3a8a3edba3b7ba9dad65b2984b91e69'
);
const index = searchClient.initIndex('algolia-recommendation-data');

export const fetchRecommendations = async (facetFilters) => {
  try {
    return await index.search('', { facetFilters: [facetFilters] });
  } catch (error) {
    console.error('Error fetching recommendations:', error);
  }
};

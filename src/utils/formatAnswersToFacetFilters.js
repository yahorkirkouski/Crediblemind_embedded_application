export const collectUserAnswers = (state) => {
  return  Object.keys(state).reduce((acc, el) => {
      acc[el] = Array.isArray(state[el].value) ? state[el].value : [state[el].value]
    return acc
  }, {});
};

export const formatUserAnswersToFacetFilters = (state) => {
  const answers = collectUserAnswers(state);
  const formattedArray = [];

  for (const key in answers) {
    if (answers.hasOwnProperty(key)) {
      const values = answers[key];
      values.forEach(value => {
        formattedArray.push(`relevantTo:${key}:${value}`);
      });
    }
  }

  return formattedArray
}

export const convertAnswers = (state) => {
  return  Object.keys(state).reduce((acc, el) => {
    acc[el] = Array.isArray(state[el].value) ? state[el].value : [state[el].value]
    return acc;
  }, {});
};

export const formatAnswersToFacetFilters = (state) => {
  const answers = convertAnswers(state);
  const formattedArray = [];

  for (const key in answers) {
    if (!answers.hasOwnProperty(key)) {
      return;
    }

    const values = answers[key];
    values.forEach(value => {
      formattedArray.push(`relevantTo:${key}:${value}`);
    });
  }

  return formattedArray;
}

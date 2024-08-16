import React, { useState } from 'react';
import { Box, Button, LinearProgress, Typography } from '@mui/material';
import { useStore } from '../../store';
import { Question } from '../Question';
import { useStyles } from './Assessment.styles';

export const Assessment = ({ questions, onSubmit, showProgressBar = true }) => {
  const styles = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const { state, dispatch } = useStore();

  const totalPages = questions.pages.length;
  const progress = (currentPage / totalPages) * 100;
  const isLastPage = currentPage >= totalPages - 1;

  const validatePage = () => {
    const currentQuestions = questions.pages[currentPage].elements;
    return currentQuestions.every((question) => {
      if (question.isRequired) {
        return state[question.name]?.value &&
          (Array.isArray(state[question.name].value) ? state[question.name].value.length > 0 : state[question.name].value.trim() !== '');
      }
      return true;
    });
  };


  const handleNext = () => {
    if (!validatePage()) {
      handleError();
      return;
    }

    setShowErrorMessage(false);
    if (isLastPage) {
      handleComplete();
    } else {
      goToNextPage();
    }
  };

  const handleError = () => {
    setShowErrorMessage(true);
  };

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
    const event = new CustomEvent('onPageChanged', {
      detail: { currentPage: newPage }
    });
    document.dispatchEvent(event);
  };

  const goToNextPage = () => {
    handleChangePage(currentPage + 1);
  }

  const handlePrev = () => {
    handleChangePage(currentPage - 1);
  };

  // Update store with the current answer
  const handleChange = (questionName, answer, type) => {
    dispatch({
      type: 'SET_ANSWER',
      payload: { questionName, answer, type },
    });
  };

  // Handle form submission
  const handleComplete = () => {
    const event = new CustomEvent('onCompletion', {
      detail: { answers: state }
    });
    document.dispatchEvent(event);
    onSubmit();
  };

  return (
    <Box mb={4}>
      {showProgressBar && (
        <Box mb={2}>
          <Typography variant="body2" color="textSecondary">
            Progress: {Math.round(progress)}%
          </Typography>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      )}
      {questions.pages[currentPage].elements.map((question, index) => (
        <Question
          key={index}
          question={question}
          onChange={handleChange}
          value={state[question.name]?.value || (question.type === 'checkbox' ? [] : '')} // Default value for checkboxes
        />
      ))}
      {showErrorMessage && <Box p={1} display="flex" justifyContent="center" alignItems="center" className={styles.error} >Please answer all the questions on this page</Box>}
      <Box mt={2} display="flex" justifyContent="space-between">
        {currentPage > 0 && (
          <Button variant="contained" onClick={handlePrev}>
            Previous
          </Button>
        )}
        {!isLastPage ? (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Submit
          </Button>
        )}
      </Box>
    </Box>
  );
};

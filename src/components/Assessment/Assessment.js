import React, { useState } from 'react';
import { Box, Button, LinearProgress, Typography, Alert } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useStore } from '../../store';
import { Question } from '../Question';
import { calcTimeOnPassing } from '../../utils';

export const Assessment = ({ questions, onSubmit, showProgressBar = true }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const { state, dispatch } = useStore();

  const totalPages = questions.pages.length;
  const progress = (currentPage / totalPages) * 100;
  const isLastPage = currentPage >= totalPages - 1;
  const isFirstPage = currentPage === 0;

  const validatePage = () => {
    const currentQuestions = questions.pages[currentPage].elements;
    return currentQuestions.every((question) => {
        return state[question.name]?.value &&
          (Array.isArray(state[question.name].value) ? state[question.name].value.length > 0 : state[question.name].value.trim() !== '');

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

  const handleChange = (questionName, answer, type) => {
    dispatch({
      type: 'SET_ANSWER',
      payload: { questionName, answer, type },
    });
  };

  const handleComplete = () => {
    const event = new CustomEvent('onCompletion', {
      detail: { answers: state }
    });
    document.dispatchEvent(event);
    onSubmit();
  };

  return (
    <Box mb={4} >
      <Box display="flex" alignItems="center" >
        <AccessTimeIcon style={{fontSize: 14}} mb={1} />
        <Typography variant="body2" ml={0.5} my={1} pt={0.3}>{`Takes only ${calcTimeOnPassing(questions)}`}</Typography>
      </Box>
      {showProgressBar && (
        <Box mb={2}>
          <Typography variant="body2" color="textSecondary">
            Progress: {Math.round(progress)}%
          </Typography>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      )}
      <Box display="flex" flexDirection="column" alignItems="start">
      {questions.pages[currentPage].elements.map((question, index) => (
        <Question
          key={index}
          pageNumber={currentPage + 1}
          questionNumber={index + 1}
          question={question}
          onChange={handleChange}
          value={state[question.name]?.value || (question.type === 'checkbox' ? [] : '')}
        />
      ))}
      </Box>
      {showErrorMessage && <Alert severity="error">
        Please answer all the questions on this page
      </Alert>}
      <Box mt={2} display="flex" justifyContent={isFirstPage ? "flex-end" : "space-between"}>
        {!isFirstPage && (
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

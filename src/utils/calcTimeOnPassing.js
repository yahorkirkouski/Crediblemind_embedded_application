import { intervalToDuration, formatDuration } from 'date-fns';

export const calcTimeOnPassing = (questions, secPerQuestion = 30) => {
  let totalQuestions = 0;

  questions.pages.forEach(page => {
    totalQuestions += page.elements.length;
  });

  const totalTime = totalQuestions * secPerQuestion;

  return formatTime(totalTime)
}

export const formatTime = (seconds) => {
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });
  return formatDuration(duration, {
    format: ["minutes", "seconds"],
    zero: true,
    delimiter: ' and '
  });
}

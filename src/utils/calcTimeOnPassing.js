import { intervalToDuration, formatDuration } from 'date-fns';

export const calcTimeOnPassing = (questions, secPerQuestion = 30) => {
  const totalQuestions = questions.pages.reduce((acc, page) => {
    return acc + page.elements.length;
  }, 0);

  const totalTime = totalQuestions * secPerQuestion;

  return formatTime(totalTime);
}

export const formatTime = (seconds) => {
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

  return formatDuration(duration, {
    format: ["minutes", "seconds"],
    zero: true,
    delimiter: ' and '
  });
}

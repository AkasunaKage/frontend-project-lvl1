import gamesLogic from '../src/index.js';

import getRandomInt from '../src/randomFunction.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenNumber = (num) => num % 2 === 0;

const getQuestionAnswer = () => {
  const userQuestion = getRandomInt(0, 100) + 1;
  const correctAnswer = evenNumber(userQuestion) ? 'yes' : 'no';
  return [userQuestion, correctAnswer];
};

gamesLogic(rule, getQuestionAnswer);

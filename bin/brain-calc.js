import gamesLogic from '../src/index.js';

import getRandomInt from '../src/randomFunction.js';

const rule = 'What is the result of the expression?';

const calc = (number, sign, number2) => {
  let result;
  if (sign === '+') {
    result = (number + number2);
  } else if (sign === '-') {
    result = (number - number2);
  } else if (sign === '*') {
    result = (number * number2);
  }
  return result;
};

const getQuestionAnswer = () => {
  const number = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);

  const signs = ['+', '-', '*'];
  const sign = signs[getRandomInt(1, 3)];

  const userQuestion = `${number} ${sign} ${number2}`;

  const correctAnswer = (calc(number, sign, number2)).toString();

  return [userQuestion, correctAnswer];
};

gamesLogic(rule, getQuestionAnswer);

import gamesLogic from '../src/index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);

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
  const number = getRandomInt(100);
  const number2 = getRandomInt(100);

  const signs = ['+', '-', '*'];
  const sign = signs[getRandomInt(3)];

  const userQuestion = `${number} ${sign} ${number2}`;

  const correctAnswer = (calc(number, sign, number2)).toString();

  const array = [userQuestion, correctAnswer];

  const [a, b] = array;

  return array;
};

gamesLogic(rule, userQuestion, correctAnswer);

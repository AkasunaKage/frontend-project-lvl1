import getRandomInt from '../randomFunction.js';

const description = 'What is the result of the expression?';

const signs = ['+', '-', '*'];

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

const generateRound = () => {
  const number = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);

  const sign = signs[getRandomInt(0, 2)];

  const userQuestion = `${number} ${sign} ${number2}`;

  const answer = calc(number, sign, number2);

  const correctAnswer = String(answer);

  return [userQuestion, correctAnswer];
};

export { description, generateRound };

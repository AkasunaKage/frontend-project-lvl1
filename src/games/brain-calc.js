import getRandomInt from '../helpers.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

// eslint-disable-next-line consistent-return
const calc = (number, operator, number2) => {
  if (operator === '+') {
    return number + number2;
  }
  if (operator === '-') {
    return number - number2;
  }
  if (operator === '*') {
    return number * number2;
  }
};

const generateRound = () => {
  const number = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);

  const operator = operators[getRandomInt(0, operators.length - 1)];

  const userQuestion = `${number} ${operator} ${number2}`;

  const answer = calc(number, operator, number2);

  const correctAnswer = String(answer);

  return [userQuestion, correctAnswer];
};

export { description, generateRound };

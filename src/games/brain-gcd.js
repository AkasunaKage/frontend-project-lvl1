import getRandomInt from '../randomFunction.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return findGcd(number2, number1 % number2);
};

const generateRound = () => {
  const number = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);

  const userQuestion = `${number} ${number2}`;

  const correctAnswer = (findGcd(number, number2)).toString();

  return [userQuestion, correctAnswer];
};

export { description, generateRound };

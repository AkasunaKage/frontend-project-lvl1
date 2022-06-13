import getRandomInt from '../randomFunction.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenNumber = (num) => num % 2 === 0;

const generateRound = () => {
  const userQuestion = getRandomInt(0, 100) + 1;
  const correctAnswer = evenNumber(userQuestion) ? 'yes' : 'no';
  return [userQuestion, correctAnswer];
};

export { description, generateRound };

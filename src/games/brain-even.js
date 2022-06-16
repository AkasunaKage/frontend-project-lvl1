import getRandomInt from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const userQuestion = getRandomInt(0, 100) + 1;
  const correctAnswer = isEven(userQuestion) ? 'yes' : 'no';
  return [userQuestion, correctAnswer];
};

export { description, generateRound };

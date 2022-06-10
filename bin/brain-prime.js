import gamesLogic from '../src/index.js';

import getRandomInt from '../src/randomFunction.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAnswer = () => {
  const userQuestion = getRandomInt(2, 100);
  const correctAnswer = getPrime(userQuestion) ? 'yes' : 'no';
  return [userQuestion, correctAnswer];
};

gamesLogic(rule, getQuestionAnswer);

import getRandomInt from '../randomFunction.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let i = 2;
  while (i < number / 2) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const generateRound = () => {
  const userQuestion = getRandomInt(2, 100);
  const correctAnswer = getPrime(userQuestion) ? 'yes' : 'no';
  return [userQuestion, correctAnswer];
};

export { description, generateRound };

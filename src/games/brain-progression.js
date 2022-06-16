import getRandomInt from '../helpers.js';

const description = 'What number is missing in the progression?';

const createProgression = (first, length, step) => {
  const progression = [];
  for (let i = first; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const generateRound = () => {
  const first = getRandomInt(5, 10);
  const step = getRandomInt(5, 9);
  const length = getRandomInt(5, 15);
  const progression = createProgression(first, length, step);
  const index = getRandomInt(2, length - 1);
  const correctAnswer = String(progression[index]);
  progression.splice(index, 1, '..');
  const userQuestion = progression.join(' ');

  return [userQuestion, correctAnswer];
};

export { description, generateRound };

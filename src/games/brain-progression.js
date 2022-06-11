import getRandomInt from '../randomFunction.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (number, progresInt, progresLength) => {
  const progressionArray = [];
  for (let i = number; progressionArray.length < progresLength; i += progresInt) {
    progressionArray.push(i);
  }
  return progressionArray;
};

const getQuestionAnswer = () => {
  const number = getRandomInt(5, 10);
  const progresInt = getRandomInt(5, 9);
  const progresLength = getRandomInt(5, 15);
  const progression = generateProgression(number, progresInt, progresLength);
  const index = getRandomInt(2, progresLength);
  const correctAnswer = String(progression[index]);
  progression[index] = '..';
  const userQuestion = progression.join(' ');

  return [userQuestion, correctAnswer];
};

export { rule, getQuestionAnswer };

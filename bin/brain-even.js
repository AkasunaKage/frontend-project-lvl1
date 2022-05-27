import readlineSync from 'readline-sync';

import userName from '../src/cli.js';

console.log(`Hello ${userName}!`);

const getRandomInt = (max) => Math.floor(Math.random() * max);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log('Question:', number);
    const userAnswer = readlineSync.question('Your answer: ');

    const check1 = (number % 2 === 0) && (userAnswer === 'yes');
    const check2 = (number % 2 !== 0) && (userAnswer === 'no');

    if (check1 === true || check2 === true) {
      console.log('Correct!');
    } else {
      const opposite = userAnswer ? 'no' : 'yes';
      const wrong = `"${userAnswer}" is wrong answer ;(. Correct answer was '${opposite}'. Let's try again, ${userName}!`;
      return wrong;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

evenGame();

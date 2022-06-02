import readlineSync from 'readline-sync';

import userName from '../src/cli.js';

console.log(`Hello ${userName}!`);

const getRandomInt = (max) => Math.floor(Math.random() * max);

console.log('What is the result of the expression?');

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

const calcGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    const number2 = getRandomInt(100);

    const signs = ['+', '-', '*'];
    const sign = signs[getRandomInt(3)];

    console.log('Question:', number, sign, number2);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = (calc(number, sign, number2)).toString();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      const wrong = console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return wrong;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

calcGame();

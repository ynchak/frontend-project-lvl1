import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import greeting from './cli.js';

const game = (description, pairs) => {
  const userName = greeting();
  console.log(description);
  /* eslint-disable-next-line */
  for (const pair of pairs) {
    const question = car(pair);
    const correctAnswer = cdr(pair);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      const res = `'${userAnswer}' is wrong answer ;(.Correct answer was '${correctAnswer}'.`;
      console.log(res);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;

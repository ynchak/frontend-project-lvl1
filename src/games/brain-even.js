import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const gameEven = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber();
    const correctAnswer = isEven(randomNumber);
    console.log(`Question: ${randomNumber}`);
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
export default gameEven;

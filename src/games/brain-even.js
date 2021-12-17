import { cons } from '@hexlet/pairs';
import game from '../index.js';

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const even = () => {
  const pairs = [];
  for (let i = 0; i < 3; i += 1) {
    const question = generateRandomNumber();
    const answer = isEven(question);
    const pair = cons(question, answer);
    pairs.push(pair);
  }
  game('Answer "yes" if the number is even, otherwise answer "no".', pairs);
};
export default even;

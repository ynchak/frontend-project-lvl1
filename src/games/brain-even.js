import { cons } from '@hexlet/pairs';
import game from '../index.js';
import generateRandomNumber from '../util.js';

const isEven = (num) => num % 2 === 0;
const even = () => {
  const pairs = [];
  for (let i = 0; i < 3; i += 1) {
    const question = generateRandomNumber(100);
    const answer = isEven(question) ? 'yes' : 'no';
    const pair = cons(question, answer);
    pairs.push(pair);
  }
  game('Answer "yes" if the number is even, otherwise answer "no".', pairs);
};
export default even;

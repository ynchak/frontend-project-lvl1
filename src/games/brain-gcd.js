import { cons } from '@hexlet/pairs';
import game from '../index.js';
import generateRandomNumber from '../util.js';

const getGcd = (a, b) => {
  if (b) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};
const gameGcd = () => {
  const pairs = [];
  const description = 'Find the greatest common divisor of given numbers.';
  for (let i = 0; i < 3; i += 1) {
    const a = generateRandomNumber(100);
    const b = generateRandomNumber(100);
    const question = `${a} ${b}`;
    const answer = getGcd(a, b);
    const pair = cons(question, String(answer));
    pairs.push(pair);
  }
  game(description, pairs);
};
export default gameGcd;

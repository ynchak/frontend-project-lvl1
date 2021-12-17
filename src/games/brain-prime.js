import { cons } from '@hexlet/pairs';
import game from '../index.js';
import generateRandomNumber from '../util.js';

const isPrime = (num) => {
  if (num < 2) return 'no';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const gamePrime = () => {
  const pairs = [];
  for (let i = 0; i < 3; i += 1) {
    const question = generateRandomNumber(100);
    const answer = isPrime(question);
    const pair = cons(question, answer);
    pairs.push(pair);
  }
  game('Answer "yes" if given number is prime. Otherwise answer "no".', pairs);
};

export default gamePrime;

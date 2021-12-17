import { cons } from '@hexlet/pairs';
import game from '../index.js';
import generateRandomNumber from '../util.js';

const toOperation = (num) => {
  let operation = '';
  switch (num) {
    case 1:
      operation = '+';
      break;
    case 2:
      operation = '-';
      break;
    default:
      operation = '*';
      break;
  }
  return operation;
};
const calc = (a, op, b) => {
  let res = 0;
  switch (op) {
    case '+':
      res = a + b;
      break;
    case '-':
      res = a - b;
      break;
    default:
      res = a * b;
      break;
  }
  return String(res);
};
const gameCalc = () => {
  const description = 'What is the result of the expression?';
  const pairs = [];
  for (let i = 0; i < 3; i += 1) {
    const a = generateRandomNumber(10);
    const operation = toOperation(generateRandomNumber(3));
    const b = generateRandomNumber(10);
    const question = `${a} ${operation} ${b}`;
    const answer = calc(a, operation, b);
    const pair = cons(question, answer);
    pairs.push(pair);
  }
  game(description, pairs);
};
export default gameCalc;

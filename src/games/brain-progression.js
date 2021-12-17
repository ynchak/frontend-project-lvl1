import { cons } from '@hexlet/pairs';
import game from '../index.js';
import generateRandomNumber from '../util.js';

const getProgression = () => {
  const start = generateRandomNumber(100);
  const step = generateRandomNumber(10);
  const coll = [];
  let num = start;
  for (let i = 0; i < 10; i += 1) {
    num += step;
    coll.push(num);
  }
  return coll;
};

const progressionToString = (coll, index) => {
  let res = '';
  coll.forEach((el, i) => {
    if (i === index) {
      res += ' ..';
    } else {
      res += ` ${el}`;
    }
  });
  return res;
};

const gameProgression = () => {
  const description = 'What number is missing in the progression?';
  const pairs = [];
  for (let i = 0; i < 3; i += 1) {
    const collProgressive = getProgression();
    const index = generateRandomNumber(10) - 1;
    const question = progressionToString(collProgressive, index);
    const answer = collProgressive[index];
    const pair = cons(question, String(answer));
    pairs.push(pair);
  }
  game(description, pairs);
};

export default gameProgression;

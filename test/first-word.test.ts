import { firstWord } from "./first-word";

test('shoud return Hello', () => {
  expect(firstWord('Hello World')).toEqual('Hello');
});

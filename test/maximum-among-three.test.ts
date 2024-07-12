import { maximumAmongThree } from "./maximum-among-three";

test('should return 3 maximum among three numbers', () => {
 expect(maximumAmongThree(1, 2, 3)).toBe(3);
});

test('should return 3 maximun among 3, 2, 1 numbers', () => {
  expect(maximumAmongThree(3, 2, 1)).toBe(3);
});

test('should return 3 maximum among 2, 3, 1 numbers', () => {
  expect(maximumAmongThree(2, 3, 1)).toBe(3);
});

test('should return 0 maximum among 0, 0, 0 numbers', () => {
  expect(maximumAmongThree(0, 0, 0)).toBe(0);
});

test('should return -1 maximun among -1, -2, -3 numbers', () => {
  expect(maximumAmongThree(-1, -2, -3)).toBe(-1);
});

test('should return -5 maximun among -5, -5, -6 numbers', () => {
  expect(maximumAmongThree(-5, -5, -6)).toBe(-5);
});

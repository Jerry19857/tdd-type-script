import { isEven } from '../test/isEven';

test('should return true if send 2', () => {
  expect(isEven(2)).toBe(true);
});

test('should return false if send 3', () => {
  expect(isEven(3)).toBe(false);
});

test('should return true if send 4', () => {
  expect(isEven(4)).toBe(true);
});

import { findReminder } from "./findReminder";

test('should return 1 if devinded is 10 and division is 3', () => {
  expect(findReminder(10,3)).toBe(1)
});

test('should return 2 if devinded is 14 and division is 4', () => {
  expect(findReminder(14,4)).toBe(2)
});

test('should return 3 if divinded is 27 and division is 3', () => {
  expect(findReminder(27,4)).toBe(3)
});

test('should return 0 if divinded is 10 and division is 5', () => {
  expect(findReminder(10,5)).toBe(0)
});

import { determineSign } from "./determineSign"

test('should return positive if send 5 ', () => {
  expect(determineSign(5)).toBe('positive')
});

test('should return zero if send 0', () => {
  expect(determineSign(0)).toBe('zero')
});

test('should return negative if send -10', () => {
  expect(determineSign(-10)).toBe('negative')
});

test('should return positive if send 1', () => {
  expect(determineSign(1)).toBe('positive')
});

test('should return negative if send -1', () => {
  expect(determineSign(-1)).toBe('negative')
})

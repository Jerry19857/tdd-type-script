import { isArmstrong } from "./armstrong-number";

test('should return true if the number is an armstrong number' , () => {
  expect(isArmstrong(153)).toBe(true);
});

test('should return false if the number is not an armstrong number' , () => {
  expect(isArmstrong(370)).toBe(true);
});

test('should return false if the number is not an armstrong number' , () => {
  expect(isArmstrong(947)).toBe(false);
});

test('should return false if the number is not an armstrong number' , () => {
  expect(isArmstrong(371)).toBe(true);
});

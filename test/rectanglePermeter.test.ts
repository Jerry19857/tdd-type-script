import { rectanglePermeter } from "./rectanglePermeter";

test('should return 12 if height is 2 and width is 4', () => {
  expect(rectanglePermeter(2, 4)).toBe(12);
});

test('should return 16 if height is 3 and width is 5' , () => {
  expect(rectanglePermeter(3,5)).toBe(16);
})

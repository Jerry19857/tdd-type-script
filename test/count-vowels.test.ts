import { countVowels } from "./count-vowels";

describe('countVowels', () => {
    test('should return 0 for empty string', () => {
        expect(countVowels('')).toBe(0);
    });
    test('should retrun 2 for "hello"', () => {
        expect(countVowels('hello')).toBe(2);
    });
    test('should return 4 for openai', () => {
        expect(countVowels('openai')).toBe(4);
    });
});
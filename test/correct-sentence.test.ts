import { correctSentence } from "./correct-sentence";

test('should to return correct sentence', ()=> {
    expect(correctSentence('greetings, friends')).toBe('Greetings, friends.');
});

test('should to return correct sentence', () => {
    expect(correctSentence('hi')).toBe('Hi.');
});

test('should to return correct sentence', () => {
    expect(correctSentence('welcome to New York')).toBe('Welcome to New York.');
});
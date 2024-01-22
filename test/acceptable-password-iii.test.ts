import { acceptablePasswordIII } from "./acceptable-password-iii";

describe('acceptable-password-iii', () => {
    test('should turn true when input password.length >= 6', () => {
        expect(acceptablePasswordIII('password2')).toBe(true);
    });
    test('should return false when input password.length < 6', () => {
        expect(acceptablePasswordIII('pass')).toBe(false);
    });
    test('should return false when input password.length = 0', () => {
        expect(acceptablePasswordIII('')).toBe(false);
    });
    test('should return true when input password.length >= 6 & have digi', () => {
        expect(acceptablePasswordIII('password1')).toBe(true);
    });
    test('password should have at least one digit', () => {
        expect(acceptablePasswordIII('password')).toBe(false);
    });
    test('password should have at least one digit', () => {
        expect(acceptablePasswordIII('1234567')).toBe(false);
    });
});
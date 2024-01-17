import { allUpper } from "./all-upper"

describe('ALL-UPPER', ()=> {
    test('should return true when input ALL UPPER', ()=> {
        expect(allUpper("ALL UPPER")).toEqual(true)
    });
    test('should return false when input all lower', () => {
        expect(allUpper('all lower')).toEqual(false)
    });
})
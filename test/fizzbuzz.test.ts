import { fizzBuzz } from "./fizzbuzz";

describe('FIZZ BUZZ' , ()=> {
    test('should return FIZZ when input is 3', ()=> {
        expect(fizzBuzz(3)).toEqual('FIZZ');
    });

    test('should return BUZZ when input is 5', ()=> {
        expect(fizzBuzz(5)).toEqual('BUZZ');
    });

    test('should return 1 when is not fizz or buzz', ()=> {
        expect(fizzBuzz(1)).toEqual(1);
    });

    test('should return 4 when is not fizz or buzz', ()=> {
        expect(fizzBuzz(4)).toEqual(4);
    });

    test('should return FIZZ when input is 6', ()=> {
        expect(fizzBuzz(6)).toEqual('FIZZ')
    });

    test('should return BUZZ when input is 15', ()=> {
        expect(fizzBuzz(15)).toEqual('FIZZBUZZ')
    });
})
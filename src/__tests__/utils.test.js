// Your tests here

import { isPalindrome } from '../utils';

describe('isPalindrome', () => {
    test('returns true for a palindrome string', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });
    
    test('returns false for a non-palindrome string', () => {
        expect(isPalindrome('hello')).toBe(false);
    });
    
   
}
)
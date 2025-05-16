// Your code here
export function isPalindrome(string){
    const reversedString = string.split('').reverse().join('');
    return string === reversedString;
}
// Problem in javascript Palindrome Checker
// Write a function to check if a given string is a palindrome. 
// A palindrome is a word, phrase, or sequence that reads the same backward as forward (ignoring spaces, punctuation, and capitalization).
 
function isPalindrome(string) {
// Convert the string to lowercase and remove non-alphanumeric characters
    const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');

// Compare characters from beginning to end and vice versa
    for (let i = 0; i < cleanString.length / 2; i++) {
        if (cleanString[i] !== cleanString[ cleanString.length - 1 - i]) {

            //Not a palindrome
            return false; 
        }
    }

    return true; // if there is not a mismatch, it's a palindrome
}
console.log(isPalindrome("race a car")); 
console.log(isPalindrome("reconocer")); 
console.log(isPalindrome("hello")); 
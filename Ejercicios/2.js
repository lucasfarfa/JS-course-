'use strict';

/** Ex 1: Minimum
 * 
 * Write a function min that takes two arguments and returns their minimum.
 * 
 */
console.log("Ex 1: Minimum");
function Minimum(num1, num2) {
    if (num1 > num2) return num2;
    else return num1;
}
console.log(Minimum(323, 324));

/** Ex 2: Recursion --> recursive function is a function that calls itself until it doesn’t.
 * https://www.javascripttutorial.net/javascript-recursive-function/ --> [DATA info]
 * A recursive function always has a condition that stops the function from calling itself.
 * 
 * Define a recursive function #isEven. The function should accept a sigle parameter
 * (a positive, whole number) and return a boolean
 * 
 * 
 *  example of recursion func --> 
 *  function sumOfDigits(num) {
        if (num == 0) {
            return 0;
        }
        return num % 10 + sumOfDigits(Math.floor(num / 10));
    }
    The num%10 returns the remainder of the number after divided by 10, e.g., 324 % 10 = 4
    The Math.floor(num / 10) returns the whole part of the num / 10 e.g., Math.floor(324 / 10) = 32
    The if(num == 0) is a condition that stops calling the function.
 */
console.log("\nEx 2: Recursion");
function isEven(number) {
    if (number == 0) return true;
    else if (number == 1) return false;
    else if (number < 0) return isEven(-number); //niega el resultado para evaluar si es par o impar
    else return isEven(number - 2); // For any number N, its evennes is the same as N -2
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

/** Ex 3: Bean counting: 
 * 
 * Write a function #countBs that takes a string as its only argument and returns a number that indicates
 * how many uppercase "B" characters there are in the string.
 * 
 * Next, write a function called #countChar that behaves like countBs, except it takes a second argument that
 * indicates the character that is to be counter (rather than counting only uppercase "B" chars).
 * 
 * Rewrite countbs to make use of this new function.
 * 
 * Hint: ( /[A-Z]/.test( char[0]) -> The test() method executes a search for a match between a regular expression and a specified string.
 * returns true or false, in this case, checks if a character is uppercase
 * hint source: https://stackoverflow.com/questions/8334606/check-if-first-letter-of-word-is-a-capital-letter/8334645
*/

console.log("\nEx 3: Bean counting");
function countBs(string) {

    let num = 0, i = 0;

    while (i < string.length) {
        if (/[A-Z]/.test(string[i])) num++; // chequea todos los caraca y suma a num cuando son MAYUS
        i++;
    }
    return num;
}

function countChar(phrase, char) { // frase, caract a buscar

    let num = 0, i = 0;
    while (i < phrase.length) {
        if (phrase[i] === char) num++;
        i++
    }
    return num;

}

console.log(countBs("HoLaSoY")); // devuelve 4 porque hay 4 mayus
console.log(countChar("kakkerlak", "k")); // devuelve 4 porque hay 4 k's
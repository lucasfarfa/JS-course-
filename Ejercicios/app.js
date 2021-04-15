'use strict';

/** Ex 1: Looping a triangle
 * 
 * Write a loop that makes seven calls to 'console.log' to output the following triangle:
 * 
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 * 
 * tip: str.lenght -> returns de leght of a string
 * 
 */
console.log("Ex 1: Looping a triangle");
for (let triangle = "#"; triangle.length < 8; triangle += "#") {
    console.log(triangle);
}

/** Ex 2: FizzBuzz
 * 
 * Write a program that uses console.log to print all numbers from 1 to 100, with two exceptions.
 * For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5
 * (and not 3), print Buzz instead.
 * 
 * Then modify that program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
 */
console.log("\nEx 2: FizzBuzz");
for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    /** otra solucion
     *  let output = "";
        if (i % 3 == 0) output += "Fizz";
        if (i % 5 == 0) output += "Buzz";
        console.log(output || i);
    */
}

/** Ex 3: Chessboard
 * 
 * Write a program that creates a string that represents an 8x8 grid, using newline characters to
 * separate lines. At each position of the grid there is either a space or a "#" character. The characters
 * should form a chesboard.
 * 
 * Passing this string to console.log should show something like this:
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 * 
 */
console.log("\nEx 3: Chessboard");
let size = 8; // Tamano del tablero
let tablero = "";

for (let y = 0; y <= 8 ; y++) { // Genera una linea nueva hasta 8
    for (let x = 0; x <= size; x++) {
        if ((x+y)%2 === 0) tablero += " ";
        else tablero += "#";
    }
    tablero += "\n"
}
console.log(tablero);

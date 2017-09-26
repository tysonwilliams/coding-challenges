/*

~~~ Task ~~~

You are given a variable, my_function. Your task is to assign it with an arrow function. 
The my_function should take an array as its parameter and return an array with all its even elements incremented by , and odd elements decremented by .

~~~ Note ~~~

DON'T use function instead of an arrow function.
DON'T print anything on the console.
Replace the blank (_________) with an arrow function.
The name of the array parameter can be anything. For example, some_array.

*/

// test with a numbered array
var testArray = [1, 2, 3];

// write the correct arrow function here
var my_function = numberArray => numberArray.map(number => (number % 2 === 0) ? number + 1 : number - 1);

console.log(my_function(testArray)); // [0, 3, 2]

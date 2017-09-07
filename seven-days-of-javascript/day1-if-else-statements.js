/*

~~~ Task ~~~

You are given a variable marks. Your task is to print: 

- AA if marks is greater than . 
- AB if marks is greater than  and less than or equal to . 
- BB if marks is greater than  and less than or equal to . 
- BC if marks is greater than  and less than or equal to . 
- CC if marks is greater than  and less than or equal to . 
- CD if marks is greater than  and less than or equal to . 
- DD if marks is greater than  and less than or equal to . 
- FF if marks is less than or equal to .

~~~ Note ~~~

Do not declare the variable marks. It is declared inside our code checker. 
Use console.log for printing statements to the console.

*/

if (marks > 90) {
    console.log("AA");
} else if (marks > 80 && marks <= 90) {
    console.log("AB");
} else if (marks > 70 && marks <= 80) {
    console.log("BB");
} else if (marks > 60 && marks <= 70) {
    console.log("BC");
} else if (marks > 50 && marks <= 60) {
    console.log("CC");
} else if (marks > 40 && marks <= 50) {
    console.log("CD");
} else if (marks > 30 && marks <= 40) {
    console.log("DD");
} else {
    console.log("FF");
}

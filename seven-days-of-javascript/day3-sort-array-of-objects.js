/*

~~~ Task ~~~

An array of objects, , is provided for you in the editor. Complete the code below so that it sorts 's elements alphabetically by book name and then prints the sorted  object.

~~~ Note ~~~

There is no input to be read, and there are no sample test cases.

*/

function sortLibrary(libraryArray) {
    // sort library array
    libraryArray.sort((book1, book2) => book1.title > book2.title);
    
    // use console.log() to output the sorted library data
    console.log(libraryArray);
} 

// tail starts here
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

sortLibrary(library);

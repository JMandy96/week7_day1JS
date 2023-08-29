//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(alist, string){
    for (let dog_name of alist) {
        // charAt() will grab the character of a given variable.
        // toUpperCase() and toLowerCase should make things uppercase or lowercase respectively.
        dogTitleCase = dog_name.charAt(0).toUpperCase() + dog_name.slice(1).toLowerCase()

        // includes will make sure an item is contained within another list/string
        if (string.includes(dogTitleCase)) {
            console.log(`Matched ${dog_name}`);
        } else {
            console.log(`No match ${dog_name}`);
        }
    }
}
findWords(dog_names, dog_string);

function properMethod(alist,string){
    for (let dog_name of alist) {
        if (string.includes(dog_name)) {
            console.log(`Matched ${dog_name}`)
        } else {
            console.log(`No match for ${dog_name}`)
        }
    }
}
properMethod(dog_names, dog_string)
//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

const myArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (idx in arr)
        // == operator will check for loose equality in javascript, where as === would have to be more strict.
        // like making sure both values are integers.
        // doing this same thing with === would make either 0 being '0' instead or using parseint(idx)
        if (idx == 0){
            arr[idx] = `${arr[idx]}`;
        } else if(idx % 2 === 0)
            arr[idx] = `${arr[idx]} was an even index`;
    return arr;
}
console.log(replaceEvens(myArr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//Codewars Problems

// #1 Stringy Strings
/*
write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/
function stringy(size) {
    let binaryString = "";
    // initializes i to 0
    // uses i < size to iterate through the loop until i is == to the given size.
    // i++ will increment i by 1 each loop.
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            binaryString += '1';
        } else {
            binaryString += '0';
        }
    }
    return binaryString;
}
console.log(stringy(7))


// #2 Find the smallest integer in the array

/* 
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/
class SmallestIntegerFinder {
    findSmallestInt(args) {
    // when trying to use this function use the ... as a spread to pass the elements of "args" as individual arguments.
    // since Math.min typically cant take in an array, and needs individual arguments.
    return Math.min(...args);
    }
  }
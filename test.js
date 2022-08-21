var myString = 'I\'m a "fun" string'; //Escaping character with "\"

console.log(myString);
console.log(myString.length); //Property of a string
console.log(myString.toUpperCase()); // Method of a string
console.log(myString.indexOf("string")) // This method says at which point in a sentance the word "string" starts
console.log(myString.indexOf("Ninja")) // return -1 to let you know word doesn't exist

if(myString.indexOf("ninja") === -1){

    console.log("the word \"ninja\" is not in the string")

} else{
    console.log("the word \"ninja\" starts at position " + myString.indexOf("ninja"));
}

//Comparing strings:

var string1 = "abc";
var string2 = "abC";

console.log(string1 === string2);
console.log(string1.toLowerCase() === string2.toLowerCase());

console.log(string1 < string2);

var string1 = "Abc";

console.log(string1 < string2);
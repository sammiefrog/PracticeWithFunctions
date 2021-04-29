console.log("Let's try out our JavaScript Skills!");


//1. Write code in the body of each function so that:
    // * `*
    // * `*
    // * `*
    // * `*

    //Check all your work with console.log() so the answers are displayed in the browser!
    // ** BONUS ** convert all of these into Arrow Functions

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};
console.log(add(1,1));
console.log(subtract(2,1));
console.log(multiply(2,2));
console.log(divide(9,3));

//2. Write a FUNCTION to print each item in the following array to the console

const fruits = ['Apple', 'Banana', 'Pear', 'Strawberry', 'Canteloupe'];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}



//3. This one has three steps, use Javascript Array methods for each part (try w3Schools for help)

let planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];

// Use an array method to remove "Venus" from the planets array, then print the changed array to the console
planets.pop();
console.log(planets);
// Use an array method to add "Mercury" to the beginning of the planets array, then print the changed array to the console
planets.unshift("Mercury");
console.log(planets);
// Use an array method to join the following array with the planets array, then print the new array to the console
let morePlanets = ["Pluto", "Neptune"];
let newPlanets = planets.concat(morePlanets);
console.log(newPlanets);


//4. Write code within the body of the following function to print all positive numbers from 1 to `num`, and console.log the result. (Hint: when you call this function to test it, don't forget to pass in a positive number as an argument)

const logNums = num => {
    if( num > 0){
        for(let i = 1; i <= num; i++){
            console.log(i);
        }
    }else{ console.log("Enter a Pos Number");}
}
logNums(20);
logNums(-2);

//5. Create a function that accepts two parameters, num1 and num2. If num1 is greater than num2 print "First one wins!", if num1 is equal to num 2 print "It's a draw!", if num1 is less than num2 print "Second number prevails!". Test the function three times so each condition is met successfully.
function race(num1, num2){
    if(num1 > num2){
        return ("First one wins!");
    }else if(num1 === num2){
        return ("It's a draw!");
    }else {
        return ("Second number prevails!");
    }
}
console.log(race(2,1));
console.log(race(1,1));
console.log(race(1,2));


//Bonus Challenge!
//Write code inside the following function that accepts a string and returns `true` if the string is a palindrome, and `false` if the string is not a palindrome.
// --- A Palindrome is a word that is spelled the same way forwards and backwards ---
//Examples of palindromes = mom, dad, level, radar
// Hint: you can use multiple javascript array methods chained together, check w3schools for ideas

const isPalindrome = (string) => {
//write code here
var splitString = string.split(""); // var splitString = "hello".split("");
var joinArrayS = splitString.join("");
var reverseArray = splitString.reverse();
var joinArrayR = reverseArray.join("");
   if( joinArrayS == joinArrayR){
       console.log("true");
   }else{ console.log("false");}
};
isPalindrome("Happy");
isPalindrome("racecar"); //expects true
isPalindrome("elephant"); //expects false

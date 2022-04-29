'use strict';

//1 Convert the following function into an arrow function named "arrowMyFunction".
const arrowMyFunction = (num1, num2) => {
    return num1 + num2;
}

//2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
const add100 = money => money + 100;

//3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive

let countLetters = (firstParam, secondParam) => {
    // Converted the all letters in the first param into lowercase letters. Then I split each letter and space into an array
    let firstParamArray = firstParam.toLowerCase().split('');

    // Created a variable that will keep count the amount of times the second Parameter appears into an array
    let count = 0;

    // Using the forEach method to iterate through the array.
    // Everytime it iterates through the array, if it find a string that matches the letter in the Second Parameter,
    // then it will at +1 to the **let count** variable.
    firstParamArray.forEach(outputResult => {
        if (outputResult === secondParam) {
            count += 1;
        }
    });

    // console logs the final amount of times the second param appears
    console.log(count);
}

countLetters('Hello my name is John', 'i'); // returns 1
countLetters('Hello my name is John', 'h'); // returns 2
countLetters('We love this city a lot, sometimes', 'e'); // returns 4

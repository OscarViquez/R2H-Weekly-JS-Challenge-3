'use strict';

//1 Convert the following function into an arrow function named "arrowMyFunction".
const arrowMyFunction = (num1, num2) => {
    return num1 + num2;
}

//2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
const add100 = money => money + 100;

//3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
// Examples:

let countLetters = (firstParam, secondParam) => {
    let firstParamArray = firstParam.toLowerCase().split('');

    let count = 0;

    firstParamArray.forEach(outputResult => {
        if (outputResult === secondParam) {
            count += 1;
          }
    });

    console.log(count);
}

countLetters('Hello my name is John', 'i'); // returns 1
countLetters('Hello my name is John', 'h'); // returns 2
countLetters('We love this city a lot, sometimes', 'e'); // returns 4

// TASK 1 – EVEN OR ODD

function checkEvenOdd(number) {

    if (number % 2 === 0) {
        return "Even Number";
    } else {
        return "Odd Number";
    }
}

console.log("TASK 1  EVEN OR ODD");
console.log(checkEvenOdd(10));


// TASK 2 – LARGEST OF TWO NUMBERS

function findLargest(a, b) {

    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log("TASK 2 LARGEST OF TWO NUMBERS");
console.log(findLargest(25, 40));


// TASK 3 – VOTING ELIGIBILITY

function checkVote(age) {

    if (age >= 18) {
        return "Eligible to Vote";
    } else {
        return "Not Eligible to Vote";
    }
}

console.log("TASK 3 VOTING ELIGIBILITY");
console.log(checkVote(20));


// TASK 4 – SUM OF ARRAY

function getTotal(numbers) {

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

let numbers1 = [10, 20, 30, 40, 50];

console.log("TASK 4  SUM OF ARRAY");
console.log(getTotal(numbers1));


// TASK 5 – COUNT EVEN NUMBERS

function countEven(numbers) {

    let count = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

let numbers2 = [10, 15, 20, 25, 30, 35, 40];

console.log("TASK 5 COUNT EVEN NUMBERS");
console.log(countEven(numbers2));
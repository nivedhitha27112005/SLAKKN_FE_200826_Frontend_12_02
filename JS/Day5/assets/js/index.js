// TASK 1 – SIMPLE CALCULATOR

let a1=20,b1=10;
console.log("TASK 1 SIMPLE CALCULATOR");
console.log("Addition =",a1+b1);
console.log("Subtraction =",a1-b1);
console.log("Multiplication =",a1*b1);
console.log("Division =",a1/b1);
console.log("Remainder =",a1%b1);


// TASK 2 – EVEN OR ODD

let number2=15;
console.log("\nTASK 2 EVEN OR ODD");
if(number2%2===0) console.log("Even");
else console.log("Odd");


// TASK 3 – POSITIVE, NEGATIVE OR ZERO

let number3=-5;
console.log("\nTASK 3 POSITIVE, NEGATIVE OR ZERO");
if(number3>0) console.log("Positive");
else if(number3<0) console.log("Negative");
else console.log("Zero");


// TASK 4 – VOTING ELIGIBILITY

let age4=20;
console.log("\nTASK 4 VOTING ELIGIBILITY");
if(age4>=18) console.log("Eligible to Vote");
else console.log("Not Eligible to Vote");


// TASK 5 – LARGEST OF TWO NUMBERS

let a5=40,b5=25;
console.log("\nTASK 5 LARGEST OF TWO NUMBERS");
if(a5>b5) console.log(a5+" is Largest");
else if(b5>a5) console.log(b5+" is Largest");
else console.log("Both numbers are equal");


// TASK 6 – STUDENT GRADE

let mark6=78;
console.log("\nTASK 6 STUDENT GRADE");
if(mark6>=90) console.log("Grade A");
else if(mark6>=75) console.log("Grade B");
else if(mark6>=50) console.log("Grade C");
else console.log("Fail");


// TASK 7 – PRINT 1 TO 20

console.log("\nTASK 7 PRINT 1 TO 20");
for(let i=1;i<=20;i++) console.log(i);


// TASK 8 – PRINT EVEN NUMBERS

console.log("\nTASK 8 EVEN NUMBERS FROM 1 TO 50");
for(let i=1;i<=50;i++) if(i%2===0) console.log(i);


// TASK 9 – MULTIPLICATION TABLE

let number9=5;
console.log("\nTASK 9 MULTIPLICATION TABLE");
for(let i=1;i<=10;i++) console.log(number9+" x "+i+" = "+(number9*i));


// TASK 10 – SUM OF 1 TO 10

let total10=0;
console.log("\nTASK 10 SUM OF 1 TO 10");
for(let i=1;i<=10;i++) total10=total10+i;
console.log("Total =",total10);
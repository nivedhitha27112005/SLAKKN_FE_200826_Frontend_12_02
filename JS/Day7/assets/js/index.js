// TASK 1 FRUIT ARRAY

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("TASK 1");
console.log("Complete Array:", fruits);
console.log("First Fruit:", fruits[0]);
console.log("Third Fruit:", fruits[2]);
console.log("Last Fruit:", fruits[fruits.length - 1]);


// TASK 2 UPDATE COLORS

let colors = ["Red", "Blue", "Green", "Yellow"];

colors[1] = "Black";

console.log("\nTASK 2");
console.log(colors);


// TASK 3 LOOP STUDENT NAMES

let studentNames = ["Arun", "Kumar", "Priya", "Ravi", "Divya"];

console.log("\nTASK 3");

for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i]);
}


// TASK 4 TOTAL MARKS

let marks = [80, 70, 90, 60, 85];

let total = 0;

for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
}

console.log("\nTASK 4");
console.log("Total =", total);


// TASK 5  ARRAY MULTIPLICATION

let numbers = [2, 4, 6, 8, 10];

console.log("\nTASK 5");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}


// TASK 6 STUDENT OBJECT

let student = {
    name: "Arun",
    age: 22,
    course: "Full Stack Development",
    city: "Chennai"
};

console.log("\nTASK 6");
console.log("Name:", student.name);
console.log("Course:", student.course);


// TASK 7  UPDATE EMPLOYEE

let employee = {
    name: "Arun",
    salary: 25000,
    role: "Developer"
};

employee.salary = 30000;

console.log("\nTASK 7");
console.log(employee);


// TASK 8  ADD NEW PROPERTY

let product = {
    name: "Laptop",
    price: 50000
};

product.brand = "Dell";

console.log("\nTASK 8");
console.log("Product Name:", product.name);
console.log("Price:", product.price);
console.log("Brand:", product.brand);


// TASK 9  LOOP OBJECT

let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025
};

console.log("\nTASK 9");

for (let key in car) {
    console.log(key, car[key]);
}


// TASK 10 ARRAY OF OBJECTS

let students = [
    {
        name: "Arun",
        mark: 80
    },
    {
        name: "Priya",
        mark: 90
    },
    {
        name: "Kumar",
        mark: 75
    }
];

console.log("\nTASK 10");

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + " - " + students[i].mark);
}
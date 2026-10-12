// TASK 1 

let heading = document.getElementById("heading");
let colorBtn = document.getElementById("colorBtn");

heading.style.color = "black";

colorBtn.addEventListener("click", function() {
    heading.style.color = "red";
    heading.style.fontSize = "30px";
});


// TASK 2 

let box = document.getElementById("box");

document.getElementById("blueBtn").addEventListener("click", function() {
    box.style.backgroundColor = "blue";
    box.style.color = "white";
});

document.getElementById("yellowBtn").addEventListener("click", function() {
    box.style.backgroundColor = "yellow";
    box.style.color = "black";
});


// TASK 3

let para = document.getElementById("para");

document.getElementById("hideBtn").addEventListener("click", function() {
    para.style.display = "none";
});

document.getElementById("showBtn").addEventListener("click", function() {
    para.style.display = "block";
});


// TASK 4 

let toggleHeading = document.getElementById("toggleHeading");

document.getElementById("toggleBtn").addEventListener("click", function() {

    if (toggleHeading.style.display === "none") {
        toggleHeading.style.display = "block";
    } else {
        toggleHeading.style.display = "none";
    }

});


// TASK 5 

let themeBox = document.getElementById("themeBox");

document.getElementById("themeBtn").addEventListener("click", function() {

    themeBox.classList.toggle("dark-mode");

    if (themeBox.classList.contains("dark-mode")) {
        themeBox.style.backgroundColor = "black";
        themeBox.style.color = "white";
    } else {
        themeBox.style.backgroundColor = "white";
        themeBox.style.color = "black";
    }

});

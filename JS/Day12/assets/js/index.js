// TASK 1
let title = document.getElementById("title");
title.textContent = "Welcome to JavaScript";
title.style.color = "blue";
title.style.fontSize = "30px";


// TASK 2
let paras = document.getElementsByClassName("para");
paras[0].style.color = "blue";
paras[1].style.backgroundColor = "orange";
paras[2].style.fontSize = "25px";


// TASK 3
let img = document.querySelector("#myImage");
img.src = "https://picsum.photos/300";
img.width = 200;

let link = document.querySelector("#myLink");
link.href = "https://www.google.com";
link.textContent = "Visit Google";


// TASK 4
let username = document.getElementById("username");
username.value = "Arun";

let email = document.querySelector("#email");
email.value = "arun@gmail.com";

username.style.backgroundColor = "green";

let submitBtn = document.getElementById("submitBtn");
submitBtn.disabled = true;


// TASK 5
let headings = document.querySelectorAll(".topic");
headings[0].textContent = "HTML";
headings[1].textContent = "CSS";
headings[2].textContent = "JavaScript";
headings[3].textContent = "React";
headings[4].textContent = "Node.js";

headings[0].style.color = "pink";
headings[1].style.color = "darkblue";
headings[2].style.color = "lightgreen";
headings[3].style.color = "yellow";
headings[4].style.color = "red";
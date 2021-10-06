var h1 = document.querySelector(".title");
var p = document.querySelector("#description");
var h3 = document.querySelector("#bossy");
var lis = document.querySelectorAll("li");
var body = document.querySelector("body");
var title = document.querySelector("title");

h1.textContent = "Look at me... I am the title now!";
p.textContent = "Aaron Kippins";
h3.textContent = "Less Bossy";
title.textContent = "Look at me"

lis[0].style.color = "Blue";
lis[1].style.backgroundColor = "Pink";
body.style.backgroundColor = "Gray"
lis[3].style.textTransform = "uppercase";
lis[4].classList.add("title");
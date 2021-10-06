var button = document.querySelector("#change");
var isPurple = false;

button.textContent = "Did i grab this?";

button.addEventListener("click", () => {
    if (isPurple) {
        document.body.style.background = "White";
    } else {
        document.body.style.background = "Purple";
    }
    isPurple = !isPurple;
});

button.addEventListener("click", () => {
    document.body.classList.toggle("purple");
});
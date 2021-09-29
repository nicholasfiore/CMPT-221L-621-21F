function alertPeople () {
    alert("Hello");
}

function changeBorderColor () {
    var content = document.getElementById("content");
    content.style.border = "10px solid blue"
}
// while (true) {
//     alertPeople();
// }

fetch("https://randomuser.me/api/").then(function (response) {
    console.log(response);
});
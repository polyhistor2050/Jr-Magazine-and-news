let username = document.getElementById("username");
let email = document.getElementById("email");
let message = document.getElementById("message");
let button = document.getElementById("button");

button.addEventListener("click", function (e) {
    e.preventDefault();
    let userMessage = document.createElement("ul");
    message = {
    username: username.value,
    textbox: textbox.value,
    date: new Date(),
    };

    userMessage.innerHTML = message.username + ":" + message.textbox + "(" + message.date + ")";
    userMessage.innerHTML = textbox.value;
    message.appendChild = (userMessage);
    textbox.value = "";
    let time = new Date();
    console.log("Username: " + message.username + "\nMessage: " + message.textbox + "\nDate: " + message.date);

});
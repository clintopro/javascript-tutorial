
let username = prompt("What is your name")

let time = prompt("Enter time")


let greeting;

if(time <= 12) {
    greeting = "good morning " + username;

}

else if (time >= 12 && time <= 16) {
    greeting = "good afternoon " + username;
}

else {
    greeting = "good evening " + username;
}


alert(greeting)
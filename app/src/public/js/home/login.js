"user strict";

console.log("Hello");
console.log("Bye!");
//Login Function Implement
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("button");

// Button Event(Click)
loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        pw : pw.value,
    };
    console.log(req);
};

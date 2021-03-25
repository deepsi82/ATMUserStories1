const account = require("./account.js");


const promptfor = require("prompt-sync")();

console.log("please enter your ATM pin number");
const pin = promptfor();
if(pin == account.pinNumber){
    console.log("The entered pin number is valid");
}else{
    console.log("not the valid pin number");
}

"use strict"
const account = require('./account');

const promptfor = require("prompt-sync")();
function atmMenu(){
    let userInterest = promptfor("Do you want to access the ATM? Enter 'yes' or 'no' : ");
    let userInput;
    let balance;
    switch(userInterest){
        case 'yes' :
            let isValidPin = pinNumber();
            if(isValidPin == true){
            let getDetails = promptfor("please enter the details you want :  'balance' or 'withdraw' or 'deposit' : ");
            let getDetailsResult;
           
                switch (getDetails){
                    case 'balance' :
                        getDetailsResult = getBalance();
                        break;
                    case 'withdraw' :
                        getDetailsResult = withDraw();
                        break;    
                    case 'deposit' :
                        getDetailsResult = deposit();
                        break;
                        default:
                            atmMenu();
                            break;
                    }
                    atmMenu();
            }    
           
        case 'no' :
            console.log("Thank you for the using the ATM");
            break;
        default:
            atmMenu();
            break;
    
        }
        return ;
}
     


    
function pinNumber(){     
let getPin = promptfor("please enter your ATM pin number: ");
if(getPin == account.atmPin){
    console.log("The entered pin number is valid");
    return true;
 }else{
     console.log("The entered pin number is not valid");
    //  return pinNumber();

}
return ;
}
                
function getBalance(){
    console.log("the balance amount is" + " " + account.balance);
    return account.balance;
}

function withDraw(){
    const withDrawAmount = promptfor("please enter the amount to withdraw : ");
    account.balance = (account.balance - parseInt(withDrawAmount));
    console.log("the updated balance amount after with draw is :" + " " + account.balance);
    return account.balance;
    
}


function deposit(){
    const depositAmount = promptfor("please enter the amount to deposit : ");
    account.balance = (account.balance + parseInt(depositAmount));
    console.log("the updated balance amount is " + " " + account.balance);
    return account.balance;
}


// module.exports.balance = account.balance;
module.exports.atmMenu = atmMenu;
console.log(module);
        
    
        
 
    




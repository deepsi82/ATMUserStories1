const account = require('./account.js');
//console.log(account);

const promptfor = require("prompt-sync")();

function atmMenu(){
    let userInterest = promptfor("Do you want to access the ATM? Enter 'Yes' or 'No' : ");
    let userInput;
    switch(userInterest){
        case 'Yes' :
            let isValidPin = pinNumber();
            if(isValidPin == true){
            let getDetails = promptfor("please enter the details you want :  'balance' or 'withdraw' or 'deposit' : ");
            let getDetailsResult;
           
                switch (getDetails){
                    case 'balance' :
                        getDetailsResult = getBalance();
                        account.balanceAmount;
                        break;
                    case 'withdraw' :
                        getDetailsResult = withDraw();
                        account.balanceAmount;
                        break;    
                    case 'deposit' :
                        getDetailsResult = deposit();
                        account.balanceAmount;
                        break;
                        // default:
                        //     break;
                    }
                    atmMenu();
            }    
                  
        case 'No' :
        console.log("Thank you for the using the ATM");
        return;
        
        }
}

    
function pinNumber(){     
let getPin = promptfor("please enter your ATM pin number: ");
if(getPin == account.pinNumber){
    console.log("The entered pin number is valid");
    return true;
 }else{
     console.log("The entered pin number is not valid");
     return pinNumber();

}

}
                
function getBalance(){
    console.log("the balance amount is" + " " + account.balanceAmount);
    return account.balanceAmount;
}

function withDraw(){
    const withDrawAmount = promptfor("please enter the amount to withdraw : ");
    account.balanceAmount = (account.balanceAmount - parseInt(withDrawAmount));
    console.log("the updated balance amount after with draw is :" + " " + account.balanceAmount);
    return account.balanceAmount;
    
}


function deposit(){
    const depositAmount = promptfor("please enter the amount to deposit : ");
    // account.balacenAmount : 1000
    // depositAmount : 600
    account.balanceAmount = account.balanceAmount + parseInt(depositAmount);
    console.log("the updated balance amount is " + " " + account.balanceAmount);
    return account.balanceAmount;
}


module.exports.balanceAmount = account.balanceAmount;
console.log(module);
module.exports.atmMenu = atmMenu;
        
    
        
 
    




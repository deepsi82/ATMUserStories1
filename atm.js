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
            let getDetails = promptfor("please enter the details you want 'Balance' or 'Withdraw' or 'Deposit' : ");
            let getDetailsResult;
                switch (getDetails){
                    case 'Balance' :
                        getDetailsResult = getBalance();
                        account.balanceAmount;
                        break;
                    case 'Withdraw' :
                        getDetailsResult = withDraw();
                        break;    
                    case 'Deposit' :
                        getDetailsResult = deposit();
                        break;
                default:
                     break;
                }
            }   
            break;
        case 'No' :
            userInput = promptfor("please enter Exit");
            break;
        default:
            //atmMenu();
            break;  
    }
}
        
    
    function pinNumber(){     
    let getPin = promptfor("please enter your ATM pin number: ");
    if(getPin == account.pinNumber){
        console.log("The entered pin number is valid");
        return true;
     }else{
        let getPin = promptfor("please enter your correct ATM pin number: ");


    }
    return getPin;
    
}
        
 
    
function getBalance(){
    console.log("the balance amount is" + " " + account.balanceAmount);
    return pinNumber;
}

function withDraw(){
    const withDrawAmount = promptfor("please enter the amount to withdraw : ");
    account.balanceAmount = (account.balanceAmount - parseInt(withDrawAmount));
    console.log("the updated balance amount after with draw is :" + " " + account.balanceAmount);
    return account.balanceAmount;
    
}


function deposit(){
    const depositAmount = promptfor("please enter the amount to deposit : ");
    //let finalBal = (account.balanceAmount + depositAmount);
    // account.balacenAmount : 1000
    // depositAmount : 600

    account.balanceAmount = account.balanceAmount + parseInt(depositAmount);

    // finalBal : 1600


    console.log("the updated balance amount is " + " " + account.balanceAmount);
    return;
}


module.exports.atmMenu = atmMenu;


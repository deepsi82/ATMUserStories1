const account = require('./account.js');
//console.log(account);

const promptfor = require("prompt-sync")();

//function atmMenu(){
    let userInterest = promptfor("Do you want to access the ATM? Enter 'Yes' or 'No' : ");
    let userInput;
    switch(userInterest){
        case 'Yes' :
            userInput = pinNumber();
            break;
        case 'No' :
            userInput = promptfor("please enter Exit");
            break;
            default:
        //atmMenu();
            //break;  
        }
    //}
        
    
    function pinNumber(){     
    let getPin = promptfor("please enter your ATM pin number: ");
    if(getPin == account.pinNumber){
        console.log("The entered pin number is valid");
    
                balAmount = getBalance();
                withDrawAmount = withDraw();
                depositAmount = deposit()
     }else{
         promptfor("Please enter the right pin number");
        }
    return;
}
        
    

    
function getBalance(){
    console.log("the balance amount is" + " " + account.balanceAmount);
    return pinNumber;
}

function withDraw(){
    const withDrawAmount = promptfor("please enter the amount to withdraw : ");
    let finalBal = (account.balanceAmount - withDrawAmount);
    console.log("the updated balance amount after with draw is :" + " " + finalBal);
    return;
    
}


function deposit(){
    const depositAmount = promptfor("please enter the amount to deposit : ");
    let finalBal = (account.balanceAmount + depositAmount);
    console.log("the updated balance amount is" + finalBal);
    return;
}

// console.log("please enter your ATM pin number");
// const pin = promptFor();
// function validate(){
    //     if( document.myForm.pin.value == " " ) {
        //     alert("please enter your ATM pin number: ");
        //         document.myForm.pin.focus() ;
        //         return false;
        //      }


// module.exports.getBalance = account.balanceAmount;
// module.exports.withDraw = withDrawAmount;
// module.exports.depositAmount = depositAmount;
// console.log(module);


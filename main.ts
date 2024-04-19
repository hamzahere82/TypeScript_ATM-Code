#! /usr/bin/env node

import inquirer from "inquirer";
// Initiallize user balance and pin code
let myBalance = 500000000;
let mypin=6969;

// print welcome message 
console.log("Welcome to code with Hamza - ATM Machine");

let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin code:"
    }
])
if(pinAns.pin === mypin){
  console.log("PIN IS CORRECT , LOGIN SUCCESSFULLY!");
//   console.log(`Current Account Balance is ${myBalance}`);
  let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: 'list',
        choices: ["WITHDRAW AMMOUNT" , "CHECK BALANCE"]
    }
  ]) 
  if(operationAns.operation === "WITHDRAW AMMOUNT"){
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "ENTER THE AMOUNT WITHDRAW:"
        }
    ])
    if(amountAns.amount>myBalance){
        console.log("INSUFFICIENT BALANCE");
    }
    else {
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} WITHDRAW SUCCESSFULLY`);
        console.log(`YOUR REMAINING BALANCE IS ${myBalance}`);
      
    }
  }
  else if(operationAns.operation === "CHECK BALANCE"){
    console.log(`YOUR ACCOUNT BALANCE IS ${myBalance}`)
  }
}
else{
    console.log("PIN IS INCORRECT , TRY AGAIN");
    
}
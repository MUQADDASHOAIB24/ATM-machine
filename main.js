#! usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000000000;
let myPin = 98765;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct code !!!");
    let operationTobe = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "go to back", "fast cash"],
        },
    ]);
    if (operationTobe.operation === "withdraw") {
        let amountInput = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountInput.amount;
        console.log("your remaining balance is:" + myBalance);
    }
    else if (operationTobe.operation === "check balance") {
        console.log("your balance is:" + myBalance);
    }
    else if (operationTobe.operation === "fast cash") {
        let cashOption = await inquirer.prompt([
            {
                name: "cash",
                message: "choose your amount",
                type: "list",
                choices: ["1000", "10000", "100000"],
            }
        ]);
        myBalance -= cashOption.cash;
        console.log("Thank you, your remaining balance is:" + myBalance);
    }
    else {
        console.log("incorrect code !!!");
    }
}

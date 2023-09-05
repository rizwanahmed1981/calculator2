import { sum } from "./add.js";
import { sub } from "./sub.js";
import { mult } from "./mult.js";
import { div } from "./div.js";
import inquirer from "inquirer";
// import chalk from "chalk";
// console.log(chalk.green);
const answers = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Please Enter Your First Number",
    },
    {
        name: "num2",
        type: "number",
        message: "Please Enter Your Second Number",
    },
    {
        name: "operator",
        type: "list",
        message: "Please Select Operator using Arrow Key",
        choices: ["+", "-", "*", "/"],
    }
]);
if (answers.operator === "+") {
    const result = sum(answers.num1, answers.num2);
    console.log(result);
}
else if (answers.operator === "-") {
    const result = sub(answers.num1, answers.num2);
    console.log(result);
}
else if (answers.operator === "*") {
    const result = mult(answers.num1, answers.num2);
    console.log(result);
}
else if (answers.operator === "/") {
    const result = div(answers.num1, answers.num2);
    console.log(result);
}

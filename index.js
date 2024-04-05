// push =>adds an Element in an Array
// pop  =>removes last Element from an Array
// concat => join two or more arrays
// while loop
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your todos"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add any other todo?",
            default: false
        }
    ]);
    condition = (addTask.addMore);
    todos.push(addTask.todo);
    console.log(todos);
    // console.log(`Your todos are ${todos}`)
    // console.log(addTask.todo)
}

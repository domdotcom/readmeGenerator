const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const fs = require("fs");;

const questions = [
    {   
        message: "What is the project title?",
        name: "title",
        type: "input"
    },
    {   
        message: "Provide a brief description of the project.",
        name: "description",
        type: "input"
    },
    {  
        message: "Enter the table of contents",
        name: "table of contents",
        type:"input"
    },
    {   
        message: "What are the instructions for installation?",
        name: "installation",
        type: "input"
    },
    {   
        message: "How do you run the application?",
        name: "usage",
        type: "input"
    },
    {   
        message: "What licenses do you require for this project?",
        name: "licenses",
        type: "input"
    },
    {   
        message: "Were there contributors for this project?",
        name: "contributors",
        type: "input"
    },
    {   
        message: "How do you run tests for this project?",
        name: "test",
        type: "input"
    },
    {   
        message: "What is your github email address?",
        name: "email",
        type: "input"
    },
    {   
        message: "Please provide a profile picture.",
        name: "GitHub profile picture",
        type: "input"
    }
];

function init() {

    inquirer.prompt(questions)
        .then((inquirerResponse) => {
            console.log("Making ReadMe");
            promptUser(inquirerResponse)
        })
        .catch((err) => {
            console.log(err);
        })

}

init();
function promptUser(answers){
    const readME = generateMarkdown(answers);
    fs.writeFileSync("ReadMe.md", readME,"utf-8");
}

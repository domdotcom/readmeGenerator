const fs = require('fs');
const inquirer = require('inquirer');
const gm = require("./utils/generateMarkdown.js");

const questions = [
    {
        "message": "What is your GitHub id?",
        "type": "input",
        "name": "username"
    },
    {
        "message": "What's the project repo name?",
        "type": "input",
        "name": "project"
    },
    {
        "message": "What's the project title?",
        "type": "input",
        "name": "projectTitle",
    },
    {
        "message": "What's the project description?",
        "type": "input",
        "name": "projectDescription",
    },
    {
        "message": "What are the installation instructions?",
        "type": "input",
        "name": "installation",
    },
    {
        "message": "How do you run the application?",
        "type": "input",
        "name": "usage",
    },
    {
        "message": "Which license do you want to use for this project?",
        "type": "list",
        "name": "license",
        "choices": ["Apache", "Boost"],
        "default": "Apache"
    },
    {
        "message": "How do you run the tests?",
        "type": "input",
        "name": "tests",
    },
    {
        "message": "What is the email address of the repo owner?",
        "type": "input",
        "name": "email",
    },
];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
      writeToFile("README.md", gm.generateMarkdown(answers));
    });
}

init();
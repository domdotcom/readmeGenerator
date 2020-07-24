const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        "message": "What is your GitHub username?",
        "type": "input",
        "name": "username"
    },
    {
        "message": "What is the repo name?",
        "type": "input",
        "name": "project"
    },
    {
        "message": "What is the title ?",
        "type": "input",
        "name": "title",
    },
    {
        "message": "Describe the project.",
        "type": "input",
        "name": "description",
    },
    {
        "message": "How do you install this app?",
        "type": "input",
        "name": "installation",
    },
    {
        "message": "How do you run the app?",
        "type": "input",
        "name": "usage",
    },
    {
        "message": "Which license do you want to use for this project?",
        "type": "list",
        "name": "license",
        "choices": ["Apache", "Boost"],
    },
    {
        "message": "How do you run the tests?",
        "type": "input",
        "name": "testing",
    },
    {
        "message": "What is your email address?",
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
      writeToFile("README.md", generateMarkdown.generateMarkdown(answers));
    });
}

init();
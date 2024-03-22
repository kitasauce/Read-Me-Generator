// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const licenses = [
    'MIT',
    'Apache-2.0',
    'GPL-3.0',
    'BSD-2-Clause',
    'BSD-3-Clause',
    'LGPL-2.1',
    'LGPL-3.0',
    'AGPL-3.0',
    'MPL-2.0',
    'EPL-2.0',
    'CC-BY-4.0',
    'CC-BY-SA-4.0',
    'CC-BY-NC-4.0',
    'CC-BY-ND-4.0',
    'CC-BY-NC-SA-4.0',
    'CC-BY-NC-ND-4.0',
    'Unlicense',
];

const questions = []
   inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the description of your project?',
            name: 'description',
        },
        {
            type: 'list',
            message: 'Choose a type of license',
            name: 'license',
            choices: licenses,
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'what is your email address?',
            name: 'email',
        },
    ])
.then((response) => {

}

)
;

function newFunction() {
    return require('inquirer');
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.
}

// TODO: Create a function to initialize app
function init() {
    inquire.createPromptModule(questions)
    .then((inquireResponses) => {
        console.log('Creating ReadMe');
        writeToFile('README.md', generateMarkdown((... inquireResponses)));
    });
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
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
    'No License',
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
            type: 'input',
            message: 'Explain how to install the application',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide examples of how the application will be used',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Choose a type of license',
            name: 'license',
            choices: licenses,
        },
        {
            type: 'input',
            message: 'Please provide contributors if there are any',
            name: 'contributors',
        },                 
        {
            type: 'input',
            message: 'Please provide background on how this code is tested',
            name: 'tests',
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
// TODO: Create a function to write README file
    ])
    .then((data) => {
        fs.writeFile(`README.md`, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Your professional README is being generated...'))
    })

// function writeToFile(fileName, data) {
//     return fs.writeFile()
// }

// TODO: Create a function to initialize app
// function init() {
//     inquire.createPromptModule(questions)
//     .then((inquireResponses) => {
//         console.log('Creating ReadMe');
//         writeToFile('README.md', generateMarkdown((... inquireResponses)));
//     });
// }

// Function call to initialize app
// init();

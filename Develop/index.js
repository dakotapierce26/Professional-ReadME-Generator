// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readMeOutput = './readME.md'

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type:'input',
        message:"What is your project Title:",
        name:'Title'
    },
    {
        type: 'input',
        message:'Write Description to your project:' ,
        name: 'description'
    },
    {
        type: 'input',
        message:'What are the steps required to install your project?' ,
        name: 'installation'
    },
    {
        type: 'input',
        message:'Provide instructions for usage:' ,
        name: 'Usage'
    },
    {
        type: 'input',
        message:'Would you like other developers to contribute to it: ' ,
        name: 'Contributing'
    },
    {
        type: 'input',
        message:'Write a tests for your application:' ,
        name: 'Tests'
    },    
    {
        type:'input',
        message: 'List Your Collaborator or any third part assets that require attribution: ',
        name:'credits'

    },
    {
        type: 'checkbox',
        message:'Choose a license: ' ,
        choices: [
            'MIT',
            'Apache',
            'GPL',
            'BSD',
            'None',
        ],
        name: 'License',
    },
    {
        type:'input',
        message: 'What is your name?:',
        name:'username'

    },
    {
        type:'input',
        message: 'What is your Github User name:',
        name:'username'

    },
    {
        type:'input',
        message: 'What is your email address:',
        name:'useremail'
    }
    
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

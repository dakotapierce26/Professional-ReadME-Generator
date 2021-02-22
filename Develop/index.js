//Imports inquirer npm
const inquirer = require('inquirer');
const fs = require('fs');
//Constant that turns the string into a file in the current folder
const readMeOutput = './readME.md'

//Questions used to gather user input
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
    
]).then((response) => {
    //response stores all user responses in an object
    console.log(response);

    //Readme file layout when transferred into README.md
    const content = `
    # Title: ${response.Title} ![license](https://img.shields.io/badge/License-${response.License}--green.svg "License Badge")
    ## Description:
        ${response.description}
    
    ##Table of Contents:
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#Usage)
    -[Contributing](#Contributing)
    -[Tests](#Tests)
    -[Credits](#credits)
    -[License](#License)
    -[Questions](#Questions)

    ## Installation Guide
        ${response.installation}
    ## Usage Instructions:
        ${response.Usage}
    ## Contributing Paties/information:
        ${response.Contributing}
    ## Tests:
        ${response.Tests}
    ## Credits
        ${response.credits}
    ## License
    This project is covered under ${response.License}.


    ## Contact Information For Questions
    -[Click here for my GitHub Profile](https://github.com/${response.username})
    -For more information, send me an e-mail here: ${response.useremail}

    `

    fs.writeFile(readMeOutput, content, (err) => {
        err ? console.log(err): console.log('Successfully generated!')
    });
})
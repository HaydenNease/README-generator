const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

const readmeInfo = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('The project must have a title');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe your project?',
    },
    {
      type: 'checkbox',
      name: 'table',
      message: 'What would you like to include in your Table of Contents?',
      choices: ['Installation', 'Usage', 'Credits', 'License'],
      default: 'Installation',
    },
    {
      type: 'list',
      message: 'Which license would you like to use?',
      name: 'contact',
      choices: ['MIT License', 'Text', 'Phone', 'Carrier Pigeon'],
      default: 'MIT License',
    },
  ])
}

const generateReadme = data => {
  fs.appendFile('README.md', `${JSON.stringify(data, null, 2)}\n`, (err) => {
    err ? console.log(err) : console.log('Generating README')
  })
};

readmeInfo()
  .then(answers => {
    return generateMarkdown(answers);
  })
  .then(data => {
    return generateReadme(data);
  })
  // .then((response) => {
  //   console.log(response)
  // });
  // TODO: Create a function to write README file


// TODO: Create a function to initialize app
// function init() {};

// Function call to initialize app
// init();

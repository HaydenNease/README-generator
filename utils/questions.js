const inquirer = require('inquirer');
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You must enter a username.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',      
      default: 'N/A',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('The project must have a title.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Why did you create this project?',
      default: 'N/A',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
      default: 'N/A',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use this application?',
      default: 'N/A',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Did anyone help you? If so, list their names and Github usernames:',
      default: 'N/A',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Did anyone help you? If so, list their names and Github profiles:',
      default: 'N/A',
    },
    {
      type: 'list',
      message: 'Which license would you like to use?',
      name: 'license',
      choices: ['N/A', 'MIT License', 'Apache', 'GPL'],
      default: 'N/A',
    },
  ])
}

module.exports = questions;
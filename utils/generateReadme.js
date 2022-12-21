const fs = require('fs');
const generateReadme = data => {
  fs.writeFile(`project-README.md`, data, err => {
    err ? console.log(err) : console.log('Generating README')
  })
};

module.exports = generateReadme;
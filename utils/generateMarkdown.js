// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
const renderLicenseBadge = (data) => {
  if (data.license == 'MIT License')
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data)}    
Application is live at https://${(data.username).toLowerCase()}.github.io/${data.title}/\  
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}

## Questions
Please send any questions about this application to ${data.email}.
`;
}

module.exports = generateMarkdown;
const renderLicenseBadge = (data) => {
  if (data.license == 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (data.license == 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (data.license == 'GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data)}    
Application is live at https://${(data.username).toLowerCase()}.github.io/${(data.title).toLowerCase()}/\  
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
Please send any questions about this application to ${data.email} or follow my work at https://github.com/${data.username}/
`;
}

module.exports = generateMarkdown;
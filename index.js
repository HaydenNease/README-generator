const questions = require('./utils/questions')
const generateMarkdown = require('./utils/generateMarkdown')
const generateReadme = require('./utils/generateReadme')

questions()
  .then(answers => {
    return generateMarkdown(answers);
  })
  .then(data => {
    return generateReadme(data);
  })
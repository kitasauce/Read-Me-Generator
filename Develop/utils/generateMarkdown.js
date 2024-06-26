// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `![badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No license') {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
    } else {
      return ' ';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No license') {
    return `The application is covered under the following license:
    ${renderLicenseLink(license)}`;
    } else {
      return ' ';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents 📖
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}
  
  ## License 

  ${renderLicenseSection(data.license)}
  
  ## Contributors
  
  ${data.contributors}

  ## Tests

  ${data.tests}

  ## Questions
  For any questions contact me using the following links:

  [GitHub](https://github.com/${data.username})
  
  [Email: ${data.email}](mailto:${data.email})`;
}

module.exports = generateMarkdown;

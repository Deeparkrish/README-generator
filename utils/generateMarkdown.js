// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license)
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ![badge](https://img.shields.io/badge/license-${data.projectLicense}-brightgreen)<br />
  ## Description
  ${data.projectDescription}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Testing](#testing)
  * [Questions](#questions)
  
  
  ##  Installation
  ${data.projectInstallation}

  ##  Usage
  ${data.projectUsage}

  ## License 
  ![badge](https://img.shields.io/badge/license-${data.projectLicense}-brightgreen)

  ## Contributing
  ${data.projectContribution}

  ## Testing 
  ${data.projectTesting}

  ##Questions 
  # Git hub : [${data.github}](https://github.com/${data.github})
  # Email :${data.email}

  Created with ❤️ by [Deepa Krishnan](https://github.com/DeeparKrish/README-generator)
`;

}

module.exports = generateMarkdown;

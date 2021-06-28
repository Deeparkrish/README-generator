// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license)
  return '';
}
var licenseLink='';
var badgeColor;
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case "Apache" :   licenseLink ="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                      break;
    case "BSD"    :  licenseLink="https://opensource.org/licenses/BSD-3-Clause";
                     break;
    case "GNU"    :
                    break;
    case "ISC": break;
    case "MIT": break;
    case "Mozilla" :break;
    case "Perl": break;
    case "Boost": break;
    case "Artistic": break;
    case "SIL": break;
    case "ODC": break;
    case "IBM": break;
    case "Creative Commons": break;
    case "Eclipse": break;
    case "Other": break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license)
  return '';
  else 
  
  return renderLicenseLink(license);
  

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection(data.projectLicense);
  return `# ${data.projectTitle}
  ${licenseLink}<br />
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
  # This app is covered under ${data.projectLicense} license.

  ## Contributing
  ${data.projectContribution}

  ## Testing 
  ${data.projectTesting}

  ## Questions 
  # Git hub : [${data.github}](https://github.com/${data.github})
  # Email :${data.email}

  Created with ❤️ by [Deepa Krishnan](https://github.com/DeeparKrish/README-generator)
`;

}

module.exports = generateMarkdown;

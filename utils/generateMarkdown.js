
var licenseBadgeLink='';
// TODO: Create a function that returns  a license badge based the license link on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeandLink(license) {
  switch (license){
    case "Apache" :   licenseBadgeLink ="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                      break;

    case "BSD"    :   licenseBadgeLink="[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                      break;

    case "GNU"    :   licenseBadgeLink ="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
                      break;

    case "ISC"    :   licenseBadgeLink="[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
                      break;

    case "MIT"    :   licenseBadgeLink="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                      break;

    case "Mozilla":   licenseBadgeLink="[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
                      break;

    case "Perl"   :   licenseBadgeLink="[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
                      break;

    case "Boost"  :   licenseBadgeLink="[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
                      break;

    case"Artistic":   licenseBadgeLink="[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
                      break;

    case "SIL"    :   licenseBadgeLink="[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
                      break;

    case "ODC"    :   licenseBadgeLink="[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)"
                      break;

    case "IBM"    :   licenseBadgeLink="[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
                      break;
                    
    case "Creative Commons": licenseBadgeLink="[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
                              break;
    case "Eclipse":   licenseBadgeLink="[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
                      break; 
    case "Other":     licenseBadgeLink="![License](https://img.shields.io/badge/license-Other-lightgrey)"
                      break;  
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license)
  return '';
  else 
  
  return renderLicenseBadgeandLink(license);
  

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection(data.projectLicense);
  
  return `# ${data.projectTitle}
  <p align="left">
    <img src="https://img.shields.io/github/repo-size/${data.github}/README-generator" />
    <img src="https://img.shields.io/github/languages/top/${data.github}/README-generator"  />
    <img src="https://img.shields.io/github/issues/${data.github}/README-generator" />
    <img src="https://img.shields.io/github/last-commit/${data.github}/README-generator" >   
  </p>

  ${licenseBadgeLink}<br />

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
  ${licenseBadgeLink}<br />
  This app is covered under ${data.projectLicense} license.

  ## Contribution
  ${data.projectContribution}

  ## Testing 
  ${data.projectTesting}

  ## Questions 
  Git hub link: [${data.github}](https://github.com/${data.github}) <br/>
  Email :${data.email}

  Created with ❤️ by [Deepa Krishnan](https://github.com/DeeparKrish/README-generator)
`;

}

module.exports = generateMarkdown;

// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
// const { resolve } = require("path");

const generateReadMe = require("./utils/generateMarkdown")
 const readMeFile ="./dis/README.md";
// TODO: Create an array of questions for user input
const answers = [];
const promptUser = () => {
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'projectTitle',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        },
        message: 'What is your project title?'
      },
      {
        type: 'input',
        name: 'projectDescription',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a brief description about your project!');
            return false;
          }
        },
        message: 'Enter a brief description of the project'
      },
      
      {
        type: 'input',
        name: 'projectInstallation',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('What are the steps required to install your project?');
            return false;
          }
        },
        message: 'What are the steps required to install your project?'
      },
      {
        type: 'input',
        name: 'projectUsage',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please provide  usage information and examples for use.');
            return false;
          }
        },
        message: 'Please provide  usage information and examples for use.'
      },
      {
        type: "list",
        name: "projectLicense",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "BSD",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Perl",
            "Boost",
            "Artistic",
            "SIL",
            "ODC",
            "IBM",
            "Creative Commons",
            "Eclipse",
            "Other"
        ]
      },
      {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Would you  like add contribution guidlelines to this project?',
        default: true
      },
      {
        type: "input",
        name: "projectContribution",
        message: 'Provide some information about yourself:',
        when: ({ confirmContribute }) => confirmContribute,
        validate: projectContribution => {
            if (projectContribution) {
              return true;
            } else {
              console.log('Please provide contributing guidelines');
              return false;
            }
          },
        
        message: "Please  specify the Contributing guidlines for your project."
    },
    {
        type: "input",
        name: "projectTesting",
        validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('Please provide test instructions.');
              return false;
            }
          },
        message: "Please provide  information about test cases and how to run them "
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub Username (Required)",
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address(Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your e-mail address!');
            return false;
          }
        },
        validate: answer =>{
          const pass = answer.match(/\S+@\S+\.\S+/);
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
        
      },

    ])
    .then(answers =>{    
        return answers;
    });
  };

  

// TODO: Create a function to write README file
const writeToFile=(fileName, data) => {
    return new Promise((resolve,reject) => {
        fs.writeFile(fileName,data,err=>{
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });

        });
    });
}


// TODO: Create a function to initialize app
function init() {
    promptUser() //call the function to receie user responses in commandline 
    .then(answers =>{
        return generateReadMe(answers); // Generate markdown file
    })
    .then(pageMD => {
        return writeToFile(readMeFile,pageMD);   //write onto README.md 
    })
    .catch(err =>{
        console.log (err);
    });

}

// Function call to initialize app
init();

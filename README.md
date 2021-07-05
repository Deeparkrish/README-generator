##  README-Generator 
Create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.
  
<p align="left">
    <img src="https://img.shields.io/github/repo-size/deeparkrish/README-generator" />
    <img src="https://img.shields.io/github/languages/top/deeparkrish/README-generator"  />
    <img src="https://img.shields.io/github/issues/deeparkrish/README-generator" />
    <img src="https://img.shields.io/github/last-commit/deeparkrish/README-generator" >
   
</p>
<p align="left"> 
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/jQuery-blue"  />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-inquirer-red" >
    <img src="https://img.shields.io/badge/-screencastify-lightgrey" />
    <img src="https://img.shields.io/badge/-json-orange" />
</p>

## Interface 
The following steps have been incorporated in this app :
* A command-line application that accepts user input.
* The user is prompted to enter the project title
* Then he is continuouly prompted to enter a  proejct description, installation instructions, usage information, contribution guidelines, and test instructions
* These information are  added to the sections of the README entitled Description, Installation, Usage, Contribution, and Testing.
* Validation is done to make that user answers these prompts and cannot skip without answering a question.
* The user is asked to choose a license for his/her application from a list of options.
* Based on his choice,a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
* When the user clicks on the license it navigates him to the corresponding webpage.
* Finally the user is prompted to enter his/her github user name and email address
* This  data is added to the section of the README entitled Questions, with a link to the user's GitHub profile.
* Based on these data , a Table of Contents is created that lists all section. 
* When the user click on the links in the Table of Contents, it navgates the user to the corresponding section of the README.
* This README also incorporates the badges about the current project with  the languages used, open issues, size of the repo and last-commit information

## Implementation
* Inquirier.js is user as the command line interface for Node.js  It provides the user interface and the inquiry session flow.
* Once the user input is successfully stored in an Object array , then a generatemarkdwon function is called that returns the generated markdown content. 
* The project license is carefully examined and appropriate Badges  are created.
* This content is written into a README file in "dis" folder, using the fs.writeFile function. 
* A high-quality, professional README.md is generated with the title of my project with sections included, is created.
## Installation 

The following are needed to reun this application :
* npm i inquirer - Install a collection of common interactive command line user interfaces.
* npm install -Install the dependencies in the local node_modules folder.

The application will be invoked by using the following command:
node index.js

## Mockup 
![Webpage](https://github.com/Deeparkrish/README-generator/blob/main/screencapture-file-Users-deepakrishnan-Mycode-ChallengeRepo-README-generator-dis-README-md-2021-07-04-23_15_28.png)

## Generated README 
https://github.com/Deeparkrish/README-generator/tree/main/dis

## Project Repository
https://deeparkrish.github.io/README-generator/


## Contribution
Created with ❤️ by [Deepa Krishnan](https://github.com/DeeparKrish/README-generator)





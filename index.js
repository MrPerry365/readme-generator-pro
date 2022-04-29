// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message:"What is your project title?",

    },
    {
        type: "input",
        name: "author",
        message:"What is the authors name?",
        
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
const template = generateMarkdown(data)
console.log(template);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions) 

    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
      writeToFile("test.md", answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();

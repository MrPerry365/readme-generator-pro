// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// an array of questions for user input
//inquirer.prompt([
var questions = [
  // title of project //
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  // description of project ///
  {
    type: "input",
    name: "description",
    message: "Describe this project.",
  },
  // Github username //
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  // link to GitHub profile //
  {
    type: "input",
    name: "profile",
    message: "What is the link to your GitHub profile?",
  },
  // Email address //
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  // Installation //
  {
    type: "type",
    name: "installation",
    message: "What installation is necessary for your project?",
  },
  // Usage //
  {
    type: "input",
    name: "usage",
    message: "Describe the usage of your project?",
  },
  //License //
  {
    type: "list",
    name: "license",
    message: "Choose the license for your project.",
    choices: ["MIT", "Apache", "Mozilla"],
  },
  // Contributing //
  {
    type: "input",
    name: "contributors",
    message: "Are there other contributors?",
  },
  // Tests //
  {
    type: "input",
    name: "test",
    message: "What are your project tests?",
  },

  {
    type: "input",
    name: "author",
    message: "What is the authors name?",
  },
];

//function to write README file
function writeToFile(title, answers) {
  const template = generateMarkdown(answers);
  console.log(template);

  fs.writeFile("README.md", template, function (err) {
    if (err) {
      throw err;
    }
  });

  console.log("The README.md file has been generated");
}

// function to initialize app
async function init() {
  await inquirer
    .prompt(questions)

    .then((answers) => {
      console.log(answers);
      writeToFile("README.md", answers);
    })
    .catch((error) => {
      if (error.isError) {
        console.log(error);
        return false;
      } else {
        // Something else went wrong
        console.log(error);
      }
    });
}
// Function call to initialize app
init();

// module.exports = answers;

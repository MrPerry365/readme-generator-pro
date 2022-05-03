// const fs = require('fs');
// const inquirer = require('inquirer');

// TODO: Create a function that returns a license badge based on which license is passed in
// Apache license
// If there is no license, return an empty string
function renderLicenseBadge(licenseSection) {
  if (licenseSection === "Apache ") {
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  }

  if (licenseSection === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }

  if (licenseSection === "Mozilla") {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
  }
  return badge;
}

// // MIT License
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(licenseSection) {
  if (licenseSection === "Apache") {
    licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
  }
  else if (licenseSection === "MIT") {
    licenseLink = "(https://opensource.org/licenses/MIT)";
  }
  else if (licenseSection === "Mozilla") {
    licenseLink = "(https://opensource.org/licenses/MPL-2.0)";
  }
  return licenseLink;
}

// // Mozilla Public License
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(answers) {
// var licenseSection = ${answers.license};



// return ;
// }


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  var license = `${answers.license}`;
  var licBadge = renderLicenseBadge(license);
  var licLink = renderLicenseLink(license);
  
  
  
  return `
  # ${answers.title}
## badge: ${licBadge}
## link: ${licLink}
author: ${answers.author}

## Table of Contents:
-[username](#username),
-[profile](#profile),
-[email](#email),
-[installation](#installation),
-[usage](#usage),
-[license](#license),
-[contributors](#contributors),
-[test](#test),
-[author](#author),
-[questions](#questions),

## installation
${answers.installation},

## usage
${answers.usage},

## license
${answers.license},

## test
${answers.test},

## contributors
${answers.contributors},

## questions
### If you have any questions, contact me at:

GitHub Profile [${answers.profile}](https://github.com/MrPerry365)

Email Address [${answers.email}](https://1987NowHere@gmail.com)

`;
}

module.exports = generateMarkdown ;

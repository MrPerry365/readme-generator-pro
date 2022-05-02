// const fs = require('fs');
// const inquirer = require('inquirer');




// TODO: Create a function that returns a license badge based on which license is passed in
// Apache license
// If there is no license, return an empty string
// function renderLicenseBadge(Apache) {
//    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// },

// // MIT License
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// },

// // Mozilla Public License
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// },

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
author: ${data.author}

## Table of Contents:
*[username](#username),
*[profile](#profile),
*[email](#email),
*[installation](#installation),
*[usage](#usage),
*[license](#license),
*[contributors](#contributors),
*[test](#test),
*[author](#author),
*[questions](#questions),

## installation
${data.installation},

## usage
${data.usage},

## license
${data.license},

## test
${data.test},

## contributors
${data.contributors},

## questions
### If you have any questions, contact me at:

GitHub Profile [${data.profile}](https://github.com/MrPerry365)

Email Address [${data.email}](https://1987NowHere@gmail.com)

`;
}

module.exports = {generateMarkdown};


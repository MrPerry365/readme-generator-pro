// const fs = require('fs');
// const inquirer = require('inquirer');
// const index = require('./index.js');



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

## contributors
${data.contributors},

## test
${data.test},

## questions
### If you have any questions, contact me at:

GitHub Profile [${data.profile}](https://github.com/MrPerry365)

Email Address [${data.email}](https://1987NowHere@gmail.com)

`;
}

module.exports = generateMarkdown;

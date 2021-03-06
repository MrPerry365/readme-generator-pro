// function that returns a license badge
function renderLicenseBadge(licenseSection) {
  if (licenseSection === "Apache ") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  }

  if (licenseSection === "MIT") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }

  if (licenseSection === "Mozilla") {
    badge =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
  }
  return badge;
}

// function that returns the license link

function renderLicenseLink(licenseSection) {
  if (licenseSection === "Apache") {
    licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
  } else if (licenseSection === "MIT") {
    licenseLink = "(https://opensource.org/licenses/MIT)";
  } else if (licenseSection === "Mozilla") {
    licenseLink = "(https://opensource.org/licenses/MPL-2.0)";
  }
  return licenseLink;
}

// function to generate markdown for README
function generateMarkdown(answers) {
  var license = `${answers.license}`;
  var licBadge = renderLicenseBadge(license);
  var licLink = renderLicenseLink(license);

  return `
  # ${answers.title}
## ${answers.description}
  
## Badge: ${licBadge}

Author: ${answers.author}

## Table of Contents:
- [username](#username),
- [profile](#profile),
- [email](#email),
- [installation](#installation),
- [usage](#usage),
- [license](#license),
- [contributors](#contributors),
- [test](#test),
- [author](#author),
- [questions](#questions),

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributors
${answers.contributors}

## License
### ${answers.license}
### link: ${licLink}

## Test
${answers.test}


## Questions
### If you have any questions, contact me at:

#### GitHub Username: [${answers.username}]

#### GitHub Profile: [${answers.profile}]

#### Email Address: [${answers.email}]

`;
}

module.exports = generateMarkdown;

const badges = require("gh-badges");


function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Description
${data.desc}

## Usage
${data.usage}

## Credits

Owner: ${data.username} Email: ${data.email}

![alt](${data.picURL})

### Other Contributors

${data.contributors}

## Badges

![alt](https://img.shields.io/badge/build-passing-brightgreen)

`;
}

module.exports = {
  generate: generateMarkdown
};

const badges = require("gh-badges");


function generateMarkdown(data) {
  return `
# ${data.title} ![alt](https://img.shields.io/badge/build-passing-brightgreen)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Description
${data.desc}

##Installation
${data.install}

## Usage
${data.usage}

## License

${data.license}

## Credits

Owner: ${data.username} Email: ${data.email}

![alt](${data.picURL})

### Other Contributors

${data.contributors}

`;
}

module.exports = {
  generate: generateMarkdown
};

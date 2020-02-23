const badges = require("gh-badges");


function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.desc}

## Usage
${data.usage}

## Credits

Owner: ${data.username} Email: ${data.email}

![alt](${data.picURL})

${data.contributors}

## Badges

`;
}

module.exports = {
  generate: generateMarkdown
};

const badges = require("gh-badges");


function generateMarkdown(data) {
  return `
# ${data.title}

`;
}

module.exports = generateMarkdown;

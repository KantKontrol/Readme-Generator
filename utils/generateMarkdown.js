const badges = require("gh-badges");


function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.desc}

`;
}

module.exports = {
  generate: generateMarkdown
};

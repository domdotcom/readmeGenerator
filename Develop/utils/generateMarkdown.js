const licenseBadges = {
  "Apache": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "Boost": "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
}

function generateMarkdown(data) {
  let username = data.username;
  let email = data.email;
  let projectRepo = data.projectRepo;
  let projectTitle = data.projectTitle;
  let description = data.description;
  let installation = data.installation;
  let usage = data.usage;
  let license = data.license;
  let testing = data.testing;
  

  return `
[![Contributors](https://img.shields.io/github/contributors/${username}/${projectRepo})](https://github.com/${username}/${projectRepo}/graphs/contributors)
${licenseBadges[license]}

# ${projectTitle}

# Description
${description}
# Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

# Installation
${installation}

# Usage
${usage}

# License
${license} License selected. See the badge above for further details.

# Contributing
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

# Testing
${testing}


[![Repo Owner Image](https://avatars.githubusercontent.com/${username}?s=100)](mailto:${email})

`;
}

module.exports = {generateMarkdown: generateMarkdown};

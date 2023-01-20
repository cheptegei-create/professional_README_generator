// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge = ``;
let licenseSection = ``;
let tableCont = `## Table of Contents`;
let installSect = ``;
let usageSect = ``;
let contSect = ``;
let testSect = ``;
let emailDev = ``;
function renderLicenseBadge(license) {
  if (license) {
    return (licenseBadge += `![Badge for GitHub repo license](https://img.shields.io/github/license/${userResponses.license}/${userResponses.repo}?style=flat&logo=appveyor)`);
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return (licenseSection += `## Licence \n check badge under the title!`);
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return (licenseSection += `[License information: ](https://choosealicense.com/licenses/${userResponses.license}/#)`);
  } else {
    return "";
  }
}

//Function to create the Table of Content
function generateToc(userResponses) {
  if (userResponses.installation !== "") {
    tableCont += `
  * [Installation](#installation)`;
  }

  if (userResponses.usage !== "") {
    tableCont += `
  * [Usage](#usage)`;
  }

  if (userResponses.contributing !== "") {
    tableCont += `
  * [Contributing](#contributing)`;
  }

  if (userResponses.tests !== "") {
    tableCont += `
  * [Tests](#tests)`;
  }

  if (userResponses.license !== "") {
    tableCont += `
  * [License](#license)`;
  }
}

//Optional function for the installation section
function howToInstall(userResponses) {
  // Optional Installation section
  if (userResponses.installation !== "") {
    installSect += `
    
    ## Installation
    
    *Steps required to install project and how to get the development environment running:*
    
    ${userResponses.installation}`;
  }
}

//Optional function for the usage section
function howToUse(userResponses) {
  // Optional Usage section
  if (userResponses.usage !== "") {
    usageSect += `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`;
  }
}

//Optional function for the usage section
function contributors(userResponses) {
  // Optional Contributing section
  if (userResponses.contributing !== '') {

    contSect +=
      
    `
    
    ## Contributing
    
    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${userResponses.contributing}`
    };
}

//Optional function for the usage section
function tests(userResponses) {
   // Optional Tests section
   if (userResponses.tests !== '') {
  
    testSect +=
    `
    
    ## Tests
    
    *Tests for application and how to run them:*
    
    ${userResponses.tests}`
    };
  
}

function disEmail(userInfo) {
  // If GitHub email is not null, add to Developer section
  if (userInfo.email !== null) {
  
    emailDev +=
    `
    Email: ${userInfo.email}
    `};
 
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge();
  renderLicenseLink();
  renderLicenseSection();
  generateToc();
  howToInstall();
  howToUse();
  contributors();
  tests();
  disEmail();

  return `# ${data.title}

  ${licenseBadge}
  
  ## Description 
  
  *The what, why, and how:* 

  ${data.description}

  ${tableCont}

  ${installSect}

  ${licenseSection}

  ## Questions?
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" width="40%" />
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  ;

  ${emailDev}

`;
}

module.exports = generateMarkdown;

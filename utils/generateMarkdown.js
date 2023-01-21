let licenseBadge = ``;
let licenseSection = ``;

// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return (licenseBadge += `![Badge for GitHub repo license](https://img.shields.io/github/license/${userResponses.license}/${userResponses.repo}?style=flat&logo=appveyor)`);
  } else {
    return "";
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return (licenseSection += `## Licence \n check badge under the title!`);
  } else {
    return "";
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    renderLicenseLink();
    return (licenseSection += `[License information: ](https://choosealicense.com/licenses/${userResponses.license}/#)`);
  } else {
    return "";
  }
}

//Function to create the Table of Content
/* function generateToc(userResponses) {
  
} */

/* //Optional function for the installation section
function howToInstall(userResponses) {
 
} */

//Optional function for the usage section
/* function howToUse(userResponses) {
  
}
 */
//Optional function for the usage section
/* function contributors(userResponses) {
  
} */

//Optional function for the usage section
/* function tests(userResponses) {
   
  
} */

/* function disEmail(userInfo) {
  
 
} */
// A function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  let tableCont = `## Table of Contents`;
  let installSect = ``;
  let usageSect = ``;
  let contSect = ``;
  let testSect = ``;
  let emailDev = ``;

  if (userResponses.installation !== "") {
    tableCont += `
  * [Installation](#installation)`;
  };

  if (userResponses.usage !== "") {
    tableCont += `
  * [Usage](#usage)`;
  };

  if (userResponses.contributing !== "") {
    tableCont += `
  * [Contributing](#contributing)`;
  };

  if (userResponses.tests !== "") {
    tableCont += `
  * [Tests](#tests)`;
  };

  if (userResponses.license !== "") {
    tableCont += `
  * [License](#license)`;
  };

   // Optional Installation section
   if (userResponses.installation !== "") {
    installSect += `
    
    ## Installation
    
    *Steps required to install project and how to get the development environment running:*
    
    ${userResponses.installation}`;
  };

  // Optional Usage section
  if (userResponses.usage !== "") {
    usageSect += `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`;
  };

  // Optional Contributing section
  if (userResponses.contributing !== '') {

    contSect +=
      
    `
    
    ## Contributing
    
    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${userResponses.contributing}`
    };

    // Optional Tests section
   if (userResponses.tests !== '') {
  
    testSect +=
    `
    
    ## Tests
    
    *Tests for application and how to run them:*
    
    ${userResponses.tests}`
    };

    // If GitHub email is not null, add to Developer section
  if (userInfo.email !== null) {
  
    emailDev +=
    `
    Email: ${userInfo.email}
    `};

  return `# ${userResponses.title}

  ${ renderLicenseBadge()}
  
  ## Description 
  
  *The what, why, and how:* 

  ${userResponses.description}

  ${tableCont}
 

  ${installSect}

  ${usageSect}

  ${contSect}

  ${testSect}

  ${renderLicenseSection()}

  ## Questions?
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" width="40%" />
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  ;

  ${emailDev}

`;
}

module.exports = generateMarkdown;

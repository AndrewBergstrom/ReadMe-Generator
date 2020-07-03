//          `# H1
//           ## H2
//           ### H3
//           **bold text**
//           *italicized text*
//           >blockquote
//           Ordered List:
//           1. First item
//           2. Second item
//           3. Third item
//           Unordered List:
//           - First item
//           - Second item
//           - Third item
//           Code:``
//           Horizontal Rule: ---
//           Link: [title](https://www.example.com)
//           Image: ![alt text](image.jpg)


// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Project Creator: 
  ### ${data.name}
---
  
  ## Project Description:
  ### ${data.description}
---
 
  ## Table of Content
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Links](#Links)
  
  ---

  ## Installation:
  ## ${data.installation}

  ---      

  ## Usage:
  ## ${data.usage}

  ---
  ## License:
 ![License](https://img.shields.io/badge/License-${data.license}-yellow) 
 
 

 ## Links

  linkedIn: ${data.LinkedIn}

        
  Github: ${data.Github}

            
`;
}

module.exports = generateMarkdown;

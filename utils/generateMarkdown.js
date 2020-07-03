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

  ## ${data.bio}

  # Table of Content

  1. [License](#License)
  2. [Links](#Links)
        
  ## ${data.name}

  step1 : 
  step2 :

  # License:

 ![License](https://img.shields.io/badge/License-${data.license}-green) 
    
 # Links

  linkedIn: ${data.linkedIn}

        
  Github: ${data.Github}

            
`;
}

module.exports = generateMarkdown;



//const fs = require('fs');
//const generateSite = require('./utils/generate-site.js');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};


promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });








// // asynchronous functionality using a callback function
// fs.writeFile('filename.txt', 'content for file', function(err) {
//   // this is the callback function that executes after the file is done being written
// });

// // asynchronous functionality using Promises
// fetch('https://api.github.com/users/lernantino/repos')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(githubData) {
//     console.log(githubData);
//   })

// promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
//     const pageHTML = generatePage(portfolioData);

//     fs.writeFile('./dist/index.html', pageHTML, err => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log('Page created! Check out index.html in this directory to see it!');
    
//       fs.copyFile('./src/style.css', './dist/style.css', err => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log('Style sheet copied successfully!');
//       });
//     });



// .then(projectData => {
//   portfolioData.projects.push(projectData); 
//   if (projectData.confirmAddProject) {  //we're evaluating the user response to whether they wish to add more projects. This response was captured in the answer object, projectData, in the property confirmAddProject. If the user wishes to add more projects, then this condition will evaluate to true and call the promptProject(portfolioData) function.
//     return promptProject(portfolioData);
//   } else {
//     return portfolioData; // If the user decides not to add more projects, then the condition will evaluate to false and trigger the following statement:
//   }
// });
   

// promptUser()
//   .then (promptProject)
//   .then (portfolioData => {
//     console.log(portfolioData);
//   });





  //.then(answers => console.log(answers))
  //.then(promptProject)
  //.then(projectAnswers => console.log(projectAnswers));






/*var profileDataArgs = process.argv.slice(2);
console.log(profileDataArgs);

const name = profileDataArgs[0];
const github = profileDataArgs[1];
//or
const [name, github] = profileDataArgs;*/

//const pageHTML = generatePage(name, github);

//console.log(generatePage('Shamim', 'shamimhub'));

//fs.writeFile() function definition has three arguments. The first argument is the name of the file that's being created. The next argument is the data that will write onto the file, in this case the HTML template literal. The last parameter is a callback function that will be used for error handling.

//fs.writeFile('./index.html', pageHTML, err => {
// if (err) throw err;

//console.log('Portfolio complete! Check out index.html to see the output!');
  
//});







/*

// Using function expression syntax
// const addNums = function(numOne, numTwo) {
//   return numOne + numTwo;
// };

//  Using new arrow function syntax
// const addNums = (numOne, numTwo) => {
//   return numOne + numTwo;
// };

// const addNums = (numOne, numTwo) => numOne + numTwo;

// const sum = addNums(5, 3); // sum would be 8

// If we needed to perform more than one action in the function, we'd have to do something like this:

// const addNums = (numOne, numTwo) => {
//   console.log(numOne, numTwo);
//   return numOne + numTwo;
// };

// const printProfileData = (profileDataArr) => {
//     for (let i = 0; i < profileDataArr; i+=1) {
//     console.log(profileDataArr[i]);
//     }
// console.log('========================')

// const printProfileData = profileDataArr => {
//   This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);*/


// const profileDataArgs = process.argv.slice(2);

// const printProfileData = profileDataArr => {
//   This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//    Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// generatePage = () => 'Name : Shamim, Github: shamimhub';

// console.log(generatePage());

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;*/

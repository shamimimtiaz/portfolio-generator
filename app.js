
const inquirer = require('inquirer');
//console.log(inquirer);
//const fs = require ('fs');
//const generatePage = require ('./src/page-template')

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));







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
const addNums = function(numOne, numTwo) {
  return numOne + numTwo;
};

// Using new arrow function syntax
const addNums = (numOne, numTwo) => {
  return numOne + numTwo;
};

//const addNums = (numOne, numTwo) => numOne + numTwo;

//const sum = addNums(5, 3); // sum would be 8

If we needed to perform more than one action in the function, we'd have to do something like this:

const addNums = (numOne, numTwo) => {
  console.log(numOne, numTwo);
  return numOne + numTwo;
};

const printProfileData = (profileDataArr) => {
    for (let i = 0; i < profileDataArr; i+=1) {
    console.log(profileDataArr[i]);
    }
console.log('========================')

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);*/


/*const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);

//generatePage = () => 'Name : Shamim, Github: shamimhub';

//console.log(generatePage());

//const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

//console.log(generatePage('Shamim', 'shamimhub'));
*/
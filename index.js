const generateMarkdown = require("./utils/generateMarkdown")
const questions = require("./utils/questions").questions
const fs = require("fs")
const inquirer = require("inquirer")


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error){
        if (error)throw error;
        console.log("success!")
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(res){
        console.log(res);

        writeToFile("new.md", generateMarkdown(res))
    })
}

// function call to initialize program
init();




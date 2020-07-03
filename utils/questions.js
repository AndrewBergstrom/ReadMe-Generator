// array of questions for user
const questions = [
    {
        type:"input",
        name:"title",
        message:"Title of project"
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description about your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide any installation instructions.",
    },

    {
        type: "input",
        name: "usage",
        message: "How to use.",
    },

    {
        type: "list",
        name: "license",
        message: "What is your license number",
        choices: ["MIT","ODbL"]

    },
  
    {
        type: "input",
        name: "LinkedIn",
        message: "Please provide your linkedIn URL."
    },
    {
        type: "input",
        name: "Github",
        message: "please provide your Github URL."
    }
]
module.exports={
    questions:questions
}
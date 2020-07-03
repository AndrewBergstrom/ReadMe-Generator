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
        type: "list",
        name: "license",
        message: "What is your license number",
        choices: ["MIT"]

    },
    {
        type: "input",
        name: "bio",
        message: "Please write a short description about yourself.",
    },
    {
        type: "input",
        name: "linkedIn",
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
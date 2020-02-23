let inquire = require("inquirer");
let gitAPI = require("./utils/api");
const gm = require("./utils/generateMarkdown");
const util = require("util");
require('dotenv').config()


const questions = [
    { 
        type: "input",
        message: "What is your github username?",
        name: "username"
    },
    { 
        type: "input",
        message: "What is the name of the repo?",
        name: "title"
    },
    { 
        type: "input",
        message: "what do you want the description to be?",
        name: "desc"
    },
    { 
        type: "input",
        message: "what do you want the description to be?",
        name: "desc"
    }
];


function writeToFile(fileName, data) {


}

async function init() {

    var prompt = inquire.createPromptModule();
    let response = await prompt(questions);

    let data = await gitAPI.api.getInfo(response.username);
            
    console.log(data);
    
}

init();

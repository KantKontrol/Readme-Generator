let inquire = require("inquirer");
let gitAPI = require("./utils/api");
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
        message: "What is your github repo?",
        name: "repoName"
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

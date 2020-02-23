let inquire = require("inquirer");
let gitAPI = require("./utils/api");
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

var prompt = inquire.createPromptModule();

prompt(questions).then(response => {

  
    let data = gitAPI.api.getInfo(response.username);
    


});

function writeToFile(fileName, data) {


}

function init() {

}

init();

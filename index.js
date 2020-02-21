let inquire = require("inquirer");
let gitAPI = require("./utils/api");


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

  
    gitAPI.api.getInfo(response.username, response.repoName);
    


});

function writeToFile(fileName, data) {


}

function init() {

}

init();
